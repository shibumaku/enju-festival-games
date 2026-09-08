const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let currentScreen='home-screen', nimType='normal', heaps=[],selectedHeap=0,selectedTake=1,nimBusy=false;
let nimHintIndex=-1;
let board,level='greedy',othelloBusy=false,othelloRounds=0,nextOthelloComment=3;
const names={greedy:'貪欲',position:'位置優先',mobility:'着手可能数',minimax:'Minimax',alpha:'部員からの挑戦状'};
const nimHintText={
  single:['実は、全ての盤面で決まった手を出さないと負けてしまいます。','相手が取った石と自分が取る石を合わせて、ある決まった個数にすることを考えてみましょう。','残りの石を4の倍数にして相手へ渡せると、勝利に近づきます。'],
  normal:['実は、全ての盤面で決まった手を出さないと負けてしまいます。','石の個数を、そのままではなく2進数で見てみると隠れた規則が見つかります。','各山の個数を排他的論理和で計算し、結果が0になるように石を取るのがポイントです。'],
  misere:['実は、全ての盤面で決まった手を出さないと負けてしまいます。','途中までは通常のNimと同じ考え方が使えますが、最後の石を取ると負けることを忘れないでください。','石が1個の山だけになったら、相手に奇数個の山を残すことを考えてみましょう。']
};
const pick=items=>items[Math.floor(Math.random()*items.length)];
const nimNeutral=['うーん…','まだ分からないね','そう来るか…','なるほどね','その手で来たか！','ふむふむ'];

function showScreen(id){$$('.screen').forEach(x=>x.classList.toggle('active',x.id===id));currentScreen=id;const back=$('#header-back');back.classList.toggle('hidden',id==='home-screen');if(id==='nim-game'){back.textContent='← Nim一覧';back.dataset.target='nim-menu'}else if(id==='othello-game'){back.textContent='← レベル一覧';back.dataset.target='othello-menu'}else{back.textContent='← ゲーム一覧';back.dataset.target='home-screen'}$('#result-modal').classList.add('hidden');window.scrollTo({top:0,behavior:'smooth'})}
$$('[data-screen]').forEach(b=>b.onclick=()=>showScreen(b.dataset.screen));
$('#home-button').onclick=()=>showScreen('home-screen');
$('#header-back').onclick=()=>showScreen($('#header-back').dataset.target||'home-screen');

$$('[data-nim]').forEach(b=>b.onclick=()=>{nimType=b.dataset.nim;startNim();showScreen('nim-game')});
function startNim(){heaps=nimType==='single'?[15]:[3,5,7];selectedHeap=0;selectedTake=1;nimBusy=false;nimHintIndex=-1;$('#nim-title').textContent=nimType==='single'?'1山のNim':nimType==='normal'?'通常のNim':'ミゼールNim';$('#nim-rule').textContent=nimType==='misere'?'最後の石を取った人が負けです':nimType==='single'?'1回に1〜3個取れます。最後の石を取った人が勝ちです':'1つの山から好きな数だけ取れます。最後の石を取った人が勝ちです';$('#nim-hints').textContent='';$('#nim-hints').classList.add('hidden');$('#nim-hint-toggle').textContent='💡 ヒント1を見る';$('#nim-hint-toggle').disabled=false;$('#nim-comment').textContent='対戦よろしく！';renderNim()}
function renderNim(){
  const wrap=$('#nim-board');wrap.innerHTML='';heaps.forEach((n,i)=>{const h=document.createElement('div');h.className='heap '+(i===selectedHeap?'selected ':'')+(!n||nimBusy?'disabled':'');h.innerHTML=`<span class="heap-label">山 ${i+1}<br>${n} 個</span><div class="pebbles">${Array.from({length:n},(_,j)=>`<span class="pebble" style="--r:${(j%5-2)*5}deg"></span>`).join('')}</div>`;h.onclick=()=>{if(!nimBusy&&n){selectedHeap=i;selectedTake=Math.min(selectedTake,n,nimType==='single'?3:n);renderNim()}};wrap.append(h)});
  const max=Math.min(heaps[selectedHeap]||1,nimType==='single'?3:heaps[selectedHeap]||1),takes=$('#take-buttons');takes.innerHTML='';for(let i=1;i<=max;i++){const b=document.createElement('button');b.textContent=i;b.className=i===selectedTake?'selected':'';b.onclick=()=>{selectedTake=i;renderNim()};takes.append(b)}
  $('#nim-take').disabled=nimBusy||!heaps.some(Boolean);$('#nim-status').textContent=nimBusy?'AIが考えています…':'あなたの番です';
}
function finishNim(playerTook){const misere=nimType==='misere',humanWon=misere?playerTook==='ai':playerTook==='human';showResult(humanWon?'あなたの勝ち！':'AIの勝ち',humanWon?'見事な一手でした。もう一度挑戦してみますか？':'惜しい！ 別の取り方を試してみよう。','nim')}
$('#nim-take').onclick=()=>{if(nimBusy)return;heaps[selectedHeap]-=selectedTake;if(!heaps.some(Boolean)){renderNim();$('#nim-comment').textContent=nimType==='misere'?'やった、最後を取ってくれた！':'参りました！';finishNim('human');return}nimBusy=true;const analysis=GameLogic.nimAnalysis(heaps,nimType==='misere',nimType==='single'?3:Infinity);$('#nim-comment').textContent=analysis.distance<=2?(analysis.winning?'勝てそう！':'負けそう…'):pick(nimNeutral);renderNim();setTimeout(()=>{const m=GameLogic.nimMove(heaps,nimType==='misere',nimType==='single'?3:Infinity);heaps[m.heap]-=m.count;selectedHeap=heaps.findIndex(Boolean);selectedTake=1;nimBusy=false;if(!heaps.some(Boolean)){renderNim();$('#nim-comment').textContent=nimType==='misere'?'あっ、最後を取っちゃった…':'やった！';finishNim('ai')}else renderNim()},650)};
$('#nim-restart').onclick=startNim;
$('#nim-hint-toggle').onclick=()=>{nimHintIndex++;const hints=$('#nim-hints'),all=nimHintText[nimType],item=document.createElement('div');item.className='revealed-hint';item.innerHTML=`<b>ヒント ${nimHintIndex+1}</b><p>${all[nimHintIndex]}</p>`;hints.append(item);hints.classList.remove('hidden');if(nimHintIndex===all.length-1){$('#nim-hint-toggle').textContent='ヒントは以上です';$('#nim-hint-toggle').disabled=true}else $('#nim-hint-toggle').textContent=`💡 ヒント${nimHintIndex+2}を見る`};

$$('[data-level]').forEach(b=>b.onclick=()=>{level=b.dataset.level;startOthello();showScreen('othello-game')});
function startOthello(){board=GameLogic.initialBoard();othelloBusy=false;othelloRounds=0;nextOthelloComment=3;$('#othello-title').textContent=names[level];$('#othello-comment').textContent='対戦よろしく！';renderOthello()}
function renderOthello(){
  const legal=othelloBusy?[]:GameLogic.moves(board,1),el=$('#othello-board');el.innerHTML='';for(let r=0;r<8;r++)for(let c=0;c<8;c++){const cell=document.createElement('button');cell.className='cell';cell.setAttribute('aria-label',`${r+1}行${c+1}列`);if(board[r][c])cell.innerHTML=`<span class="disc ${board[r][c]===1?'black':'white'}"></span>`;const m=legal.find(x=>x.r===r&&x.c===c);if(m){cell.classList.add('legal');cell.onclick=()=>humanOthello(m)}el.append(cell)}
  const ct=GameLogic.counts(board);$('#black-score').textContent=ct.black;$('#white-score').textContent=ct.white;$('#black-player').classList.toggle('active',!othelloBusy);$('#white-player').classList.toggle('active',othelloBusy);$('#othello-status').textContent=othelloBusy?'AIが考えています…':'あなたの番です';
}
function humanOthello(move){if(othelloBusy)return;board=GameLogic.apply(board,move,1);if(checkOthelloEnd())return;othelloBusy=true;renderOthello();setTimeout(aiTurn,80)}
function aiTurn(){const move=GameLogic.chooseMove(board,level,-1);if(move)board=GameLogic.apply(board,move,-1);othelloBusy=false;othelloRounds++;if(checkOthelloEnd())return;updateOthelloComment();const humanMoves=GameLogic.moves(board,1);if(!humanMoves.length){othelloBusy=true;renderOthello();$('#othello-status').textContent='置ける場所がないためパスします';setTimeout(aiTurn,850)}else renderOthello()}
function updateOthelloComment(){if(othelloRounds<nextOthelloComment)return;const c=GameLogic.counts(board),diff=c.white-c.black;let words;if(Math.abs(diff)<=3)words=['互角だね','いい勝負！','まだまだこれから'];else if(diff>=4)words=['調子いいかも！','このまま行くよ！','いい感じ！'];else words=['ちょっとピンチ…','まだ逆転できる！','これは手ごわい…'];$('#othello-comment').textContent=pick(words);nextOthelloComment=othelloRounds+3+Math.floor(Math.random()*3)}
function checkOthelloEnd(){const a=GameLogic.moves(board,1),b=GameLogic.moves(board,-1);if(a.length||b.length)return false;renderOthello();const c=GameLogic.counts(board),title=c.black>c.white?'あなたの勝ち！':c.black<c.white?'AIの勝ち':'引き分け';$('#othello-comment').textContent=c.black>c.white?'参りました！':c.black<c.white?'対戦ありがとう！':'引き分けだね！';showResult(title,`黒 ${c.black} — ${c.white} 白`,'othello');return true}
$('#othello-restart').onclick=startOthello;
function showResult(title,copy,game){$('#result-title').textContent=title;$('#result-copy').textContent=copy;$('#result-modal').dataset.game=game;$('#result-modal').classList.remove('hidden')}
$('#play-again').onclick=()=>{$('#result-modal').classList.add('hidden');$('#result-modal').dataset.game==='nim'?startNim():startOthello()};
$('#back-to-list').onclick=()=>showScreen($('#result-modal').dataset.game==='nim'?'nim-menu':'othello-menu');
