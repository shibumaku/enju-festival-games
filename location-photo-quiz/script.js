const questions = [
  {
    image: "https://cdn.discordapp.com/attachments/1372674150270767176/1547608126138622063/IMG_4139.jpg?ex=6aa409e2&is=6aa2b862&hm=15ff153c413100e5722402ee8313cc66becb7be6742b11c79a45d4f0ccafa770&",
    choices: ["第一啓発室", "カフェテリア", "田村記念講堂", "給湯室"],
    answerIndex: 1,
    difficulty: "easy",
    explanation: "こちらは渋幕生が利用するカフェテリアです。毎日の昼休みには、多くの生徒で賑わいます。日替わりのランチや丼メニューのほか、カレーライス、麺類、小鉢なども販売されています。隣には、軽食から文房具、制服まで販売している購買もあります。来場者の方も利用できますので、文化祭でお腹が空いたらぜひ足を運んでみてください！高校棟1階の奥側にあります。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/MG_9678-1024x682.jpg",
    choices: ["図書館", "蔵書室", "自調自考室", "第二会議室"],
    answerIndex: 0,
    difficulty: "easy",
    explanation: "渋幕の新棟1・2階にある、6万冊を超える蔵書を誇る図書館です。英語の図書も豊富で、蔵書の約2割を占めています。静かで落ち着いた空間で、もちろん自習も可能です。テスト前になると、ほとんど空席がありません。生徒が自由にホワイトボードやプロジェクターを利用できる「ラーニングコモンズ」という区画も用意されています。文化祭期間中は古本市も開かれています。破格で本を手に入れる絶好の機会なので、ぜひ立ち寄ってみてください♪",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/MG_9582-1024x684.jpg",
    choices: ["田村記念講堂", "第一啓発室", "第二会議室", "第一啓発室"],
    answerIndex: 0,
    difficulty: "easy",
    explanation: "始業式や講演会などの行事や、合唱部などのコンサートが行われる講堂です。1,000人以上を収容でき、最新の音響・照明設備も備えています。渋幕のシンボルともいえる場所です。文化祭では、さまざまな音楽系部活のコンサートがほぼ一日中行われています。いろいろな企画を回って疲れてきたら、ぜひここで一休みしていってください！",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/12/img_facilities_pool_1.jpg",
    choices: ["保管庫", "水道室", "温室", "プール棟"],
    answerIndex: 3,
    difficulty: "easy",
    explanation: "25m×5レーンの温水プールがあり、なんとサウナまであります！高校としてはかなり珍しい屋内プールなので、一年を通してプールの授業や水泳部の練習に利用されています。屋内・温水なので、季節を問わず練習できるのも特徴です。小学校あるある、あの「地獄のシャワー」もないです。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/08/R1A8994-1024x683.jpg",
    choices: ["第一グラウンド", "第二グラウンド", "第三グラウンド", "第四グラウンド"],
    answerIndex: 0,
    difficulty: "easy",
    explanation: "渋幕で一番大きなグラウンドです。とても広いので、昼休みにはたくさんの生徒が運動し、放課後には多くの運動部が練習に利用しています。文化祭では、企画「ProjectG」が開催されています！高校2年生の実に半数ほどが携わった超大型企画です。僕自身も何度かお手伝いしましたが、夏休み中もほぼ毎日作業していたそうです。ぜひ一度、足を運んでみてください！※天候によっては開催されていない場合があります。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/12/img_facilities_mm.jpg",
    choices: ["マルチメディア室", "コンピューター室", "職員室", "情報科研究室"],
    answerIndex: 1,
    difficulty: "easy",
    explanation: "新棟3階にあるコンピューター室です。主に情報の授業で利用されるほか、情報科学の希望者向け講座もここで開かれます。コンピューター同好会の活動場所の一つでもあります。昼休みや放課後も開放されており、設置されている印刷機も含めて自由に利用できます。特に、研修旅行前後のレポート課題を作成する時期には混雑する傾向があります。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/MG_9704-1024x684.jpg",
    choices: ["集会室", "第二啓発室", "第一会議室", "第一啓発室"],
    answerIndex: 3,
    difficulty: "normal",
    explanation: "高校棟4階にある、1学年全員が入れるほど大きな教室です。学年集会や説明会、委員会、学園長講話など、さまざまな用途で利用されています。文化祭中も企画が行われているはずなので、雰囲気を味わう意味でもぜひ覗いてみてください！",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/R1A0803-1024x684.jpg",
    choices: ["マルチメディア室", "コンピューター室", "ICT教室", "情報科研究室"],
    answerIndex: 0,
    difficulty: "normal",
    explanation: "高校棟3階、コンピューター室の隣にある、通称「MM室」です。コンピューター室と比べると少し小さめですが、こちらもコンピューターやさまざまな機材が設置されており、授業などで利用されています。コンピューター室と同様に昼休みも放課後も開放されています。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/R1A0941-1024x684.jpg",
    choices: ["自調自考室", "自主学習室", "自己研鑽室", "研究室"],
    answerIndex: 0,
    difficulty: "normal",
    explanation: "少し難しかったでしょうか？高校棟には、各階に一つずつ「自調自考室」という自習室があります。普段から生徒が自由に利用できますが、特に受験を控えた高校3年生や、その一つ下の高校2年生が頻繁に利用しています。私語厳禁でとても静かなため、勉強に集中するにはうってつけの場所です。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/08/R1A2893-1024x684.jpg",
    choices: ["第３グラウンド", "第５グラウンド", "第４グラウンド", "テニスグラウンド"],
    answerIndex: 2,
    difficulty: "normal",
    explanation: "それなりの難問かもしれません。学校から徒歩10分ほどの場所にある第4グラウンドです。主にテニスの授業や、一部の部活動で利用されています。かなり広くて、個人的にお気に入りの場所です。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/R1A1056-1024x684.jpg",
    choices: ["天体観測室", "天文台", "観測室", "地学室"],
    answerIndex: 1,
    difficulty: "normal",
    explanation: "実は、ほとんどの渋幕生も行ったことがなさそうな、高校棟5階の天文台です。（画像は一つ前の望遠鏡です）僕は天文部なので行ったことがありますが、実に圧巻の性能です。天文部では、不定期で学校に泊まり込んで観測会が行われます。本当に楽しいので、ぜひ入部して参加してみてください！",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/R1A0635-1024x684.jpg",
    choices: ["第一体育館", "第二体育館", "運動館", "第三体育館"],
    answerIndex: 0,
    difficulty: "normal",
    explanation: "渋幕に二つある体育館のうち、大きい方です。体育の授業や屋内の運動部の活動のほか、集会や、稀に軽音部のライブでも利用されます。文化祭でも軽音部がライブをしています。絶対盛り上がれますよ！",
  },
  {
    image: "https://cdn.discordapp.com/attachments/1372674150270767176/1547607415548289157/S__15138820.jpg?ex=6aa40939&is=6aa2b7b9&hm=3b51bb77322e4b1dbbedd5264705cfad8f2ab72dc8e76ddda7ea7af13c404418&",
    choices: ["第二グラウンド", "第一グラウンド", "校門前", "昇降口下"],
    answerIndex: 3,
    difficulty: "hard",
    explanation: "下駄箱の真下、事務室入り口前にある我らが学園長：田村哲夫先生の銅像です。ご利益があるので、参拝していきましょう。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/R1A1194-1024x683.jpg",
    choices: ["茶室", "応接室", "接待ルーム", "宿泊室"],
    answerIndex: 0,
    difficulty: "hard",
    explanation: "入ったことのある生徒が少ないランキング上位。茶道部の活動以外で使われているところを見たことはほとんどありません。開校当時に寄贈されたそうで、かなり贅沢な作りになっています。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2019/03/MG_5154.jpg",
    choices: ["第二地学・物理室", "第一地学・物理室", "中学理科室", "物理実験室"],
    answerIndex: 2,
    difficulty: "hard",
    explanation: "この教室に初めて行くとき、高校棟の理科室に間違えて行ってしまい、迷子になるのは渋幕新入生あるある。新棟3階にあります。これから渋幕に入るみなさんは、間違えないようにしましょう。その名の通り、中学生の理科の実験に使われています。",
  },
  {
    image: "https://media.discordapp.net/attachments/1372674150270767176/1547608126545723412/IMG_4140.jpg?ex=6aa409e2&is=6aa2b862&hm=8ef40e2ae98d6a03b50d221c7e253e7ae7ba675ee247f7210e8899f7cf0ab605&=&format=webp&width=1280&height=961",
    choices: ["職員室", "下駄箱前", "第一会議室", "第二会議室"],
    answerIndex: 1,
    difficulty: "hard",
    explanation: "下駄箱から校内に入ると、真っ先に目に入る大きな黒板があります。委員会の告知や生徒会の活動などに使われていて、意外と大事な場所です。落書きされがち。",
  },
  {
    image: "https://cdn.discordapp.com/attachments/1372674150270767176/1547858232763219998/IMG_4149.jpg?ex=6aa4f2d0&is=6aa3a150&hm=af47323bd124b1b9e140dc747a83787e5d71f027632c1e42170b4bf180504d3e&",
    choices: ["新棟６階テラス", "新棟５階テラス", "新棟３階テラス", "新棟４階テラス"],
    answerIndex: 3,
    difficulty: "hard",
    explanation: "難問。新棟の3～5階にはおしゃれなテラスがあり、昼ご飯を食べたり、たまに部活で使われたりする、それなりに隠れ家感のある場所です。新棟４階テラスの特徴は、ベンチが二つある点。５階にはひとつ、３階にはありません。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/R1A0818-1024x684.jpg",
    choices: ["国際室", "第三会議室", "ICT1", "国際ミーティングルーム"],
    answerIndex: 2,
    difficulty: "hard",
    explanation: "こちらも難問。新棟3階の中学理科室の向かいにあります。帰国生などの少人数での講習のほか、説明会や会議などに使われていますが、なかなか入る機会はありません。さらに、新棟には室名プレートがないため、見つけづらい場所です。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2019/03/MG_5117.jpg",
    choices: ["第二美術室", "第一美術室", "彫刻室", "芸術室"],
    answerIndex: 1,
    difficulty: "hard",
    explanation: "主に高校1年生の美術選択の授業に使われます。第二美術室と比べて縦に長く、前方にある彫刻も特徴的です。",
  },
  {
    image: "https://cdn.discordapp.com/attachments/1372674150270767176/1547884957165289532/IMG_4157.jpg?ex=6aa50bb4&is=6aa3ba34&hm=8acf582f3b12f326b659d8045f5d741ce86558a7bc4326f2e7ef480dcb4b90f1&",
    choices: ["第二体育館横", "テニスコート横", "第一体育館横", "駐車場"],
    answerIndex: 0,
    difficulty: "hard",
    explanation: "渋幕生にとっては、プール棟に行くときに通る場所です。写真に写っているコーンなどは、スポフェス（体育祭）でお世話になります。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/07/R1A0749-1024x683.jpg",
    choices: ["セミナー3B", "中学セミナーB", "セミナー2A", "ICT2"],
    answerIndex: 2,
    difficulty: "oni",
    explanation: "正解はセミナー2Aでした。多くの人は場所はわかると思いますが、名前が分からなくなりがちですよね。大体セミナー(階数）（下駄箱側がA,食堂側がB)になっていると考えると覚えやすいです。",
  },
  {
    image: "https://media.discordapp.net/attachments/1372674150270767176/1547858231194550312/IMG_4146.jpg?ex=6aa4f2d0&is=6aa3a150&hm=176c7e4730be5a6949c0c02be4b6710402595a69bd4d36ed198ee39034600213&=&format=webp&width=768&height=1024",
    choices: ["新棟６階", "新棟１階", "高校棟５階", "中学棟４階"],
    answerIndex: 1,
    difficulty: "oni",
    explanation: "正解は新棟一階、エレベーター横です。存在は知ってるけど、なかなか通らない場所ですよね。",
  },
  {
    image: "https://media.discordapp.net/attachments/1372674150270767176/1547858230619672606/IMG_4145.jpg?ex=6aa4f2cf&is=6aa3a14f&hm=8734c734ba496738de12d33ad2035fbb10bf459aabcf482b53d8623e45f2459c&=&format=webp&width=768&height=1024",
    choices: ["中学棟２階", "中学棟１階", "中学棟３階", "高校棟１階"],
    answerIndex: 0,
    difficulty: "oni",
    explanation: "正解は中学棟2階、下駄箱側の階段前です。折り紙研究会の展示、入学当初からある。",
  },
  {
    image: "https://www.shibumaku.jp/wp-content/uploads/2018/12/facilities_other.jpg",
    choices: ["図書室", "新棟３階", "新棟４階", "新棟２階"],
    answerIndex: 3,
    difficulty: "oni",
    explanation: "正解は新棟2階、数学科研究室横です。たまに面談などで使われています。",
  },
  {
    image: "https://media.discordapp.net/attachments/1372674150270767176/1547858230133137448/IMG_4144.jpg?ex=6aa4f2cf&is=6aa3a14f&hm=83dce326ea1e50786d62bcb6c2a561ff0a34775bfeeb259711c14669dd4404fc&=&format=webp&width=768&height=1024",
    choices: ["中学棟２階", "中学棟１階", "高校棟２階", "高校棟４階"],
    answerIndex: 2,
    difficulty: "oni",
    explanation: "正解は高校棟2階でした。おととしにはなかった気がする。",
  },
  {
    image: "https://media.discordapp.net/attachments/1372674150270767176/1547858229625880616/IMG_4143.jpg?ex=6aa4f2cf&is=6aa3a14f&hm=2adc236cab539725075079f96c5ee3794a7f0a943802e7ad9c7c2388fdd9f788&=&format=webp&width=768&height=1024",
    choices: ["中学棟屋上前", "天文台横", "第二体育館倉庫", "第一体育館横"],
    answerIndex: 1,
    difficulty: "oni",
    explanation: "高校棟5階、天文台横です。天文部以外で入ったことある人は少ないでしょう。ここら辺から難易度が上がっていきます。",
  },
  {
    image: "https://cdn.discordapp.com/attachments/1372674150270767176/1547884956707979314/IMG_4156.jpg?ex=6aa50bb3&is=6aa3ba33&hm=8c53bcb9c560fd60f2f3f51ce9df279b28227a211d388f8611e7b0a822f76f31&",
    choices: ["テニスコート横", "駐車場横", "第一グラウンド奥", "校門横"],
    answerIndex: 3,
    difficulty: "oni",
    explanation: "校門入ってすぐ右にある百葉箱です。大きいわりに目立たない印象。",
  },
  {
    image: "https://media.discordapp.net/attachments/1372674150270767176/1547858234209996860/IMG_4151.jpg?ex=6aa4f2d0&is=6aa3a150&hm=bff95a28f108fc8c6b5cce7409831eed24799b85c7b98f2db47dd3103912a3bf&=&format=webp&width=768&height=1024",
    choices: ["新棟６階", "新棟５階", "高校棟５階", "高校棟１階"],
    answerIndex: 0,
    difficulty: "oni",
    explanation: "新棟6階、第二啓発室の入り口から撮った写真です。右下のドアの色から察してください。",
  },
  {
    image: "https://media.discordapp.net/attachments/1372674150270767176/1547608126990061598/IMG_4141.jpg?ex=6aa409e2&is=6aa2b862&hm=d44a56a478e46d11c9b137a6601bb44dfccf2621e70992c67a3d7b5520fa8787&=&format=webp&width=768&height=1024",
    choices: ["新棟６階", "新棟３階", "新棟４階", "新棟５階"],
    answerIndex: 2,
    difficulty: "oni",
    explanation: "正解は新棟4階、第二音楽室の左前方の席から撮った写真でした。灰色の壁でわかるはず。",
  },
  {
    image: "https://cdn.discordapp.com/attachments/1372674150270767176/1547613790252564560/image.jpg?ex=6aa40f28&is=6aa2bda8&hm=9bcdb6d0eb9b7103444ec3ce6a89eeae4a68386a199e98a62d2e7e16664ef506&",
    choices: ["2-B", "保健室", "理事室", "校長室"],
    answerIndex: 1,
    difficulty: "oni",
    explanation: "正解は保健室でした。ちょっと難しすぎたかも。黒のビニール袋とかでわかる（と思う）。",
  },
];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const explanationScreen = document.getElementById("explanationScreen");
const resultScreen = document.getElementById("resultScreen");
const easyButton = document.getElementById("easyButton");
const normalButton = document.getElementById("normalButton");
const hardButton = document.getElementById("hardButton");
const oniButton = document.getElementById("oniButton");
const furiganaButton = document.getElementById("furiganaButton");
const photoElement = document.getElementById("photo");
const progressElement = document.getElementById("progress");
const choicesElement = document.getElementById("choices");
const messageElement = document.getElementById("message");
const explanationElement = document.getElementById("explanation");
const explanationPhoto = document.getElementById("explanationPhoto");
const explanationProgress = document.getElementById("explanationProgress");
const explanationMessage = document.getElementById("explanationMessage");
const explanationContent = document.getElementById("explanationContent");
const explanationScore = document.getElementById("explanationScore");
const explanationTotal = document.getElementById("explanationTotal");
const explanationPoints = document.getElementById("explanationPoints");
const explanationScoreLabel = document.getElementById("explanationScoreLabel");
const explanationPointsLabel = document.getElementById("explanationPointsLabel");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
const pointsElement = document.getElementById("points");
const scoreLabel = document.getElementById("scoreLabel");
const pointsLabel = document.getElementById("pointsLabel");
const nextButton = document.getElementById("nextButton");
const explanationNextButton = document.getElementById("explanationNextButton");
const resultText = document.getElementById("resultText");
const finalExplanation = document.getElementById("finalExplanation");
const restartButton = document.getElementById("restartButton");
const fallbackImage = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='650'%3E%3Crect width='1000' height='650' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='42' fill='%236b7280'%3E画像を読み込めませんでした%3C/text%3E%3C/svg%3E";

let currentIndex = 0;
let correctCount = 0;
let points = 0;
let currentQuestions = [];
let selectedAnswer = null;
let furiganaEnabled = false;

function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

const difficultyCounts = {
  easy: 6,
  normal: 6,
  hard: 8,
  oni: 10,
};

const furiganaMap = {
  "渋幕ゲッサー": "しぶまくゲッサー",
  "写真を見て、どこで撮られたかを4択で答えるクイズです。": "しゃしんをみて、どこでとられたかをよんたくでこたえるクイズです。",
  "難易度を選んでください": "なんいどをえらんでください",
  "正しいと思う選択肢を選んでください。": "ただしいとおもうせんたくしをえらんでください。",
  "選択肢をクリックしてください。": "せんたくしをクリックしてください。",
  "正答数": "せいとうすう",
  "結果": "けっか",
  "最初に戻る": "さいしょにもどる",
  "次へ": "つぎへ",
  "結果を見る": "けっかをみる",
  "正解です！すばらしいですね。": "せいかいです！すばらしいですね。",
  "不正解です。正解は": "ふせいかいです。せいかいは",
  "田村記念講堂": "たむらきねんこうどう",
  "第一啓発室": "だいいちけいはつしつ",
  "第一会議室": "だいいちかいぎしつ",
  "第二会議室": "だいにかいぎしつ",
  "マルチメディア室内": "マルチメディアしつない",
  "コンピューター室前": "コンピューターしつまえ",
  "図書館": "としょかん",
  "情報科研究室": "じょうほうかけんきゅうしつ",
  "田村記念講堂": "たむらきねんこうどう",
  "渋幕": "しぶまく",
  "難易度": "なんいど",
  "選択肢": "せんたくし",
  "正解": "せいかい",
  "解説": "かいせつ",
  "写真": "しゃしん",
  "高校": "こうこう",
  "中学": "ちゅうがく",
  "新棟": "しんとう",
  "階": "かい",
};

function renderFurigana(text) {
  if (!furiganaEnabled) {
    return text;
  }

  const rubyBlocks = [];
  const withoutRuby = text.replace(/<ruby>[\s\S]*?<\/ruby>/g, (ruby) => {
    const token = `\u0000${rubyBlocks.length}\u0000`;
    rubyBlocks.push(ruby);
    return token;
  });
  const words = Object.keys(furiganaMap)
    .sort((first, second) => second.length - first.length)
    .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const result = withoutRuby.replace(new RegExp(words.join("|"), "g"), (word) => {
    return `<ruby>${word}<rt>${furiganaMap[word]}</rt></ruby>`;
  });

  return result.replace(/\u0000(\d+)\u0000/g, (_, index) => rubyBlocks[Number(index)]);
}

function updateStaticFurigana() {
  document.querySelectorAll("[data-furigana-root]").forEach((root) => {
    if (furiganaEnabled) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      let node = walker.nextNode();
      while (node) {
        if (node.parentElement && !node.parentElement.closest("ruby, rt, [data-furigana-text]")) {
          textNodes.push(node);
        }
        node = walker.nextNode();
      }

      textNodes.forEach((textNode) => {
        const wrapper = document.createElement("span");
        wrapper.dataset.furiganaText = "true";
        wrapper.dataset.originalText = textNode.nodeValue;
        wrapper.innerHTML = renderFurigana(textNode.nodeValue);
        textNode.replaceWith(wrapper);
      });
    }

    root.querySelectorAll("[data-furigana-text]").forEach((element) => {
      element.innerHTML = furiganaEnabled
        ? renderFurigana(element.dataset.originalText)
        : element.dataset.originalText;
    });
  });
}

function showScreen(screen) {
  [startScreen, quizScreen, explanationScreen, resultScreen].forEach((element) => {
    element.classList.toggle("active", element.id === screen);
  });
}

function startQuiz(difficulty) {
  const availableQuestions = questions.filter((question) => question.difficulty === difficulty);
  currentQuestions = shuffle(availableQuestions).slice(0, difficultyCounts[difficulty]);
  currentIndex = 0;
  correctCount = 0;
  points = 0;
  selectedAnswer = null;
  scoreElement.textContent = correctCount;
  totalElement.textContent = currentQuestions.length;
  pointsElement.textContent = points;
  explanationElement.textContent = "";
  showScreen("quizScreen");
  renderQuestion();
}

function updateScore() {
  scoreLabel.innerHTML = renderFurigana("正答数");
  pointsLabel.innerHTML = renderFurigana("スコア");
  explanationScoreLabel.innerHTML = renderFurigana("正答数");
  explanationPointsLabel.innerHTML = renderFurigana("スコア");
  scoreElement.textContent = correctCount;
  totalElement.textContent = currentQuestions.length;
  pointsElement.textContent = points;
  explanationScore.textContent = correctCount;
  explanationTotal.textContent = currentQuestions.length;
  explanationPoints.textContent = points;
}

function renderQuestion() {
  const question = currentQuestions[currentIndex];
  photoElement.src = question.image;
  photoElement.alt = `クイズ写真 ${currentIndex + 1}`;
  progressElement.textContent = `${currentIndex + 1} / ${currentQuestions.length}`;
  messageElement.textContent = "正しいと思う選択肢を選んでください。";
  explanationElement.textContent = "";
  nextButton.disabled = true;
  selectedAnswer = null;

  choicesElement.innerHTML = "";

  question.choices.forEach((text, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.innerHTML = renderFurigana(text);
    button.type = "button";
    button.addEventListener("click", () => handleChoice(index));
    choicesElement.appendChild(button);
  });
}

function handleChoice(index) {
  if (selectedAnswer !== null) {
    return;
  }

  selectedAnswer = index;
  const question = currentQuestions[currentIndex];
  const buttons = Array.from(choicesElement.children);

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === question.answerIndex) {
      button.classList.add("correct");
    }
    if (buttonIndex === index && buttonIndex !== question.answerIndex) {
      button.classList.add("incorrect");
    }
  });

  if (index === question.answerIndex) {
    correctCount += 1;
    points += 100;
    messageElement.textContent = "正解です！すばらしいですね。";
  } else {
    messageElement.textContent = `不正解です。正解は「${question.choices[question.answerIndex]}」です。`;
  }

  updateScore();
  showExplanation(question);
}

function showExplanation(question) {
  explanationScreen.classList.remove("answer-correct", "answer-incorrect");
  explanationScreen.classList.add(selectedAnswer === question.answerIndex ? "answer-correct" : "answer-incorrect");
  explanationPhoto.src = question.image;
  explanationPhoto.alt = `解説写真 ${currentIndex + 1}`;
  explanationProgress.textContent = `${currentIndex + 1} / ${currentQuestions.length}`;
  explanationMessage.innerHTML = renderFurigana(messageElement.textContent);
  explanationContent.innerHTML = renderFurigana(question.explanation || "解説はありません。");
  explanationNextButton.textContent = currentIndex + 1 < currentQuestions.length ? "次へ" : "結果を見る";
  explanationNextButton.disabled = false;
  showScreen("explanationScreen");
}

function showResults() {
  const scorePercent = Math.round((correctCount / currentQuestions.length) * 100);
  resultText.innerHTML = renderFurigana(`あなたの正答数は ${correctCount} / ${currentQuestions.length} です。<br>正答率は ${scorePercent}%、スコアは <strong>${points} pt</strong> です。`);
  if (scorePercent === 100) {
    finalExplanation.innerHTML = renderFurigana("すばらしい！全問正解です。次はさらにむずかしい問題に挑戦しましょう。");
  } else if (scorePercent >= 70) {
    finalExplanation.innerHTML = renderFurigana("よくできました！ほとんどの問題に正解しています。");
  } else {
    finalExplanation.innerHTML = renderFurigana("もう少しです。もう一度チャレンジして解説を確認しましょう。");
  }
  showScreen("resultScreen");
}

photoElement.addEventListener("error", () => {
  photoElement.src = fallbackImage;
  photoElement.alt = "画像読み込みエラー";
  messageElement.textContent = "画像を読み込めなかったため、代替画像を表示します。";
});

explanationPhoto.addEventListener("error", () => {
  explanationPhoto.src = fallbackImage;
  explanationPhoto.alt = "画像読み込みエラー";
});

function handleNext() {
  if (currentQuestions.length === 0) {
    return;
  }

  if (currentIndex + 1 < currentQuestions.length) {
    currentIndex += 1;
    showScreen("quizScreen");
    renderQuestion();
  } else {
    showResults();
  }
}

easyButton.addEventListener("click", () => startQuiz("easy"));
normalButton.addEventListener("click", () => startQuiz("normal"));
hardButton.addEventListener("click", () => startQuiz("hard"));
oniButton.addEventListener("click", () => startQuiz("oni"));
furiganaButton.addEventListener("click", () => {
  furiganaEnabled = !furiganaEnabled;
  furiganaButton.textContent = `ふりがな: ${furiganaEnabled ? "ON" : "OFF"}`;
  furiganaButton.setAttribute("aria-pressed", String(furiganaEnabled));
  updateStaticFurigana();
  furiganaButton.textContent = `ふりがな: ${furiganaEnabled ? "ON" : "OFF"}`;
  if (currentQuestions.length > 0 && quizScreen.classList.contains("active")) {
    renderQuestion();
  }
  if (currentQuestions.length > 0 && explanationScreen.classList.contains("active")) {
    showExplanation(currentQuestions[currentIndex]);
  }
});
nextButton.addEventListener("click", handleNext);
explanationNextButton.addEventListener("click", handleNext);
restartButton.addEventListener("click", () => showScreen("startScreen"));

showScreen("startScreen");
