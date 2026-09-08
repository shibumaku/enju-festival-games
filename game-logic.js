/* Game rules kept independent from the UI so they can be tested easily. */
const GameLogic = (() => {
  const DIRS=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const WEIGHTS=[[120,-35,18,8,8,18,-35,120],[-35,-55,-4,-4,-4,-4,-55,-35],[18,-4,12,2,2,12,-4,18],[8,-4,2,1,1,2,-4,8],[8,-4,2,1,1,2,-4,8],[18,-4,12,2,2,12,-4,18],[-35,-55,-4,-4,-4,-4,-55,-35],[120,-35,18,8,8,18,-35,120]];
  const inside=(r,c)=>r>=0&&r<8&&c>=0&&c<8;
  function flips(board,r,c,player){
    if(board[r][c]) return [];
    const out=[], other=-player;
    for(const [dr,dc] of DIRS){let rr=r+dr,cc=c+dc,line=[];while(inside(rr,cc)&&board[rr][cc]===other){line.push([rr,cc]);rr+=dr;cc+=dc}if(line.length&&inside(rr,cc)&&board[rr][cc]===player)out.push(...line)}
    return out;
  }
  function moves(board,player){const out=[];for(let r=0;r<8;r++)for(let c=0;c<8;c++){const f=flips(board,r,c,player);if(f.length)out.push({r,c,flips:f})}return out}
  function apply(board,move,player){const b=board.map(row=>row.slice());b[move.r][move.c]=player;for(const [r,c] of move.flips)b[r][c]=player;return b}
  function initialBoard(){const b=Array.from({length:8},()=>Array(8).fill(0));b[3][3]=b[4][4]=-1;b[3][4]=b[4][3]=1;return b}
  function counts(board){let black=0,white=0;for(const row of board)for(const v of row){if(v===1)black++;if(v===-1)white++}return{black,white,empty:64-black-white}}
  function evaluate(board,ai){
    const ct=counts(board), mine=ai===-1?ct.white:ct.black, theirs=ai===-1?ct.black:ct.white;
    const myMoves=moves(board,ai).length, oppMoves=moves(board,-ai).length;
    let positional=0,frontier=0;
    for(let r=0;r<8;r++)for(let c=0;c<8;c++)if(board[r][c]){positional+=WEIGHTS[r][c]*(board[r][c]===ai?1:-1);let nearEmpty=false;for(const[d1,d2]of DIRS)if(inside(r+d1,c+d2)&&board[r+d1][c+d2]===0)nearEmpty=true;if(nearEmpty)frontier+=board[r][c]===ai?-1:1}
    const corners=[[0,0],[0,7],[7,0],[7,7]].reduce((s,[r,c])=>s+(board[r][c]===ai?1:board[r][c]===-ai?-1:0),0);
    if(ct.empty===0||(!myMoves&&!oppMoves))return(mine-theirs)*100000;
    return positional*3+(myMoves-oppMoves)*12+corners*180+frontier*3+(ct.empty<16?(mine-theirs)*14:0);
  }
  function minimax(board,player,ai,depth,alpha,beta){
    const legal=moves(board,player), other=moves(board,-player);
    if(depth===0||(!legal.length&&!other.length))return evaluate(board,ai);
    if(!legal.length)return minimax(board,-player,ai,depth-1,alpha,beta);
    const maximizing=player===ai;let best=maximizing?-Infinity:Infinity;
    legal.sort((a,b)=>WEIGHTS[b.r][b.c]-WEIGHTS[a.r][a.c]);
    for(const m of legal){const score=minimax(apply(board,m,player),-player,ai,depth-1,alpha,beta);if(maximizing){best=Math.max(best,score);alpha=Math.max(alpha,best)}else{best=Math.min(best,score);beta=Math.min(beta,best)}if(beta<=alpha)break}
    return best;
  }
  function chooseMove(board,level,ai=-1){
    const legal=moves(board,ai);if(!legal.length)return null;
    if(level==='greedy')return legal.reduce((a,b)=>b.flips.length>a.flips.length?b:a);
    if(level==='position')return legal.reduce((a,b)=>WEIGHTS[b.r][b.c]>WEIGHTS[a.r][a.c]?b:a);
    if(level==='mobility')return legal.reduce((a,b)=>moves(apply(board,b,ai),-ai).length<moves(apply(board,a,ai),-ai).length?b:a);
    const empty=counts(board).empty;
    const depth=level==='minimax'?3:(empty<=12?empty+2:empty<=24?6:5);
    let best=legal[0],score=-Infinity;
    for(const m of legal){const s=minimax(apply(board,m,ai),-ai,ai,depth-1,-Infinity,Infinity);if(s>score){score=s;best=m}}
    return best;
  }
  function nimMove(heaps,misere=false,maxTake=Infinity){
    // 必勝手がない局面では、毎回同じ手にならないよう合法手から選ぶ。
    const randomLegal=()=>{
      const candidates=[];
      for(let heap=0;heap<heaps.length;heap++){
        const limit=Math.min(heaps[heap],maxTake);
        for(let count=1;count<=limit;count++)candidates.push({heap,count});
      }
      return candidates[Math.floor(Math.random()*candidates.length)];
    };
    const nonzero=heaps.filter(x=>x>0), ones=nonzero.filter(x=>x===1).length;
    if(misere&&ones===nonzero.length){
      // 偶数個なら必勝、奇数個なら必敗（取れる個数は常に1個）。
      if(nonzero.length%2===0)return{heap:heaps.findIndex(x=>x>0),count:1};
      return randomLegal();
    }
    if(misere&&ones===nonzero.length-1){const idx=heaps.findIndex(x=>x>1);const leave=ones%2===0?1:0;return{heap:idx,count:heaps[idx]-leave}}
    if(heaps.length===1){const take=heaps[0]%(maxTake+1);return take?{heap:0,count:Math.min(take,maxTake,heaps[0])}:randomLegal()}
    const xor=heaps.reduce((a,b)=>a^b,0);if(xor)for(let i=0;i<heaps.length;i++){const target=heaps[i]^xor;if(target<heaps[i])return{heap:i,count:heaps[i]-target}}
    return randomLegal();
  }
  function nimAnalysis(heaps,misere=false,maxTake=Infinity){
    const memo=new Map();
    function solve(state){
      const key=state.join(',');if(memo.has(key))return memo.get(key);
      if(!state.some(Boolean)){const result={winning:misere,distance:0};memo.set(key,result);return result}
      const next=[];
      for(let heap=0;heap<state.length;heap++)for(let count=1;count<=Math.min(state[heap],maxTake);count++){const s=state.slice();s[heap]-=count;next.push(solve(s))}
      const wins=next.filter(x=>!x.winning);
      const result=wins.length?{winning:true,distance:1+Math.min(...wins.map(x=>x.distance))}:{winning:false,distance:1+Math.max(...next.map(x=>x.distance))};
      memo.set(key,result);return result;
    }
    return solve(heaps.slice());
  }
  return{initialBoard,moves,apply,counts,chooseMove,nimMove,nimAnalysis,WEIGHTS};
})();
