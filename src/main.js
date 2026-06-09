import './styles.css';

const themes = [
  {id:'history', icon:'🕰️', title:'社群媒體時光機', chapter:'第1章', subtitle:'從媒介演化、Web 2.0 到創作者經濟。'},
  {id:'community', icon:'🧭', title:'社群、平台與人群辨識所', chapter:'第2章', subtitle:'辨識社群、社群媒體與平台的差異。'},
  {id:'media', icon:'🧪', title:'媒介形式實驗室', chapter:'第3章', subtitle:'媒介即訊息、媒介生態與科技可供性。'},
  {id:'build', icon:'🌱', title:'社群冷啟動任務', chapter:'第4章', subtitle:'理解社群如何長出互動、規範與文化。'},
  {id:'network', icon:'🕸️', title:'網絡偵探社', chapter:'第5章', subtitle:'中心性、弱連結、結構洞與傳染。'},
  {id:'platform', icon:'🚀', title:'平台成長模擬器', chapter:'第6章', subtitle:'網路效應、多邊市場與生態系鎖定。'},
  {id:'algorithm', icon:'🔎', title:'演算法可見性挑戰', chapter:'第7章', subtitle:'推薦系統、Social SEO 與 GEO。'},
  {id:'attention', icon:'🧲', title:'注意力陷阱逃脫室', chapter:'第8章', subtitle:'使用動機、注意力經濟與 Hook 模型。'},
  {id:'identity', icon:'🎭', title:'數位身份劇場', chapter:'第9–10章', subtitle:'印象管理、互動機制與擬社會互動。'},
  {id:'future', icon:'📣', title:'影響、擴散與未來治理', chapter:'第11–14章', subtitle:'信任、口碑、迷因、內容策略與平台治理。'}
];

const questionBank = [
  ['大眾媒體 one-to-many 的核心特色是什麼？','少數媒體機構向大量閱聽人傳送內容','使用者彼此完全平等生產內容','平台完全沒有把關','內容只由演算法生成','傳統大眾媒體以少數機構集中生產與分發內容為主。','第1章 1.1'],
  ['Web 2.0 最關鍵的改變是什麼？','使用者可以生產、回應與再創作內容','網路只能閱讀不能互動','所有網站都取消個人檔案','手機完全消失','Web 2.0 讓網路從唯讀轉向讀寫並存，UGC 成為核心。','第1章 1.2'],
  ['社群至少包含哪些要素？','成員、互動、規範與共同目標或關注','只有粉絲數','只有平台帳號','只有廣告預算','社群不是人數集合，而是有互動秩序與共同關注的關係共同體。','第2章 2.1'],
  ['平台的本質比較接近什麼？','基礎設施、規則制定者與資料控制者','單純的聊天室','沒有規則的空地','只是一群朋友','平台提供工具，也決定排序、資料、規範與商業模式。','第2章 2.4'],
  ['科技可供性指的是什麼？','技術環境提供、鼓勵或限制的行動可能','只代表價格','只代表品牌名稱','只代表網速','按讚、分享、推播與無限滑動都是平台可供性的例子。','第3章 3.3'],
  ['boyd 的四大數位可供性包含什麼？','持久性、可複製性、可規模化、可搜尋性','價格、包裝、折扣、售後','電視、報紙、廣播、雜誌','產品、通路、促銷、定價','四大可供性說明線上互動為何容易留下痕跡、被搜尋與擴散。','第3章 3.4'],
  ['社群形成的三種牽引力是什麼？','共同興趣、共同問題、共同目標','價格、通路、包裝','天氣、地點、時間','演算法、廣告、伺服器','人們因共同興趣、問題或目標聚集，才可能形成社群。','第4章 4.1'],
  ['冷啟動為什麼困難？','沒有互動就沒有社群感，沒有社群感又更少互動','因為人太多','因為規範太成熟','因為內容太豐富','初期空場域會降低成員發言意願。','第4章 4.2'],
  ['弱連結的力量在於什麼？','帶來不同圈子的資訊與機會','永遠比強連結更親密','只會造成誤會','不能傳播資訊','弱連結常能突破熟人圈的資訊重疊。','第5章 5.3'],
  ['結構洞是什麼？','兩個群體之間缺乏直接連結的空隙','網站版面破洞','留言區錯字','沒有任何社會意義','中介者可填補結構洞，創造資訊與翻譯優勢。','第5章 5.4'],
  ['網路效應指的是什麼？','產品價值隨使用者增加而提高','使用者越少越有價值','產品價值只由包裝決定','平台不需要任何人','通訊軟體、社交平台與市集都高度依賴網路效應。','第6章 6.1'],
  ['轉換成本包括什麼？','重新學習、搬移資料、失去關係與信譽','只包含買手機費用','完全不存在','只與天氣有關','平台累積的關係、內容與工作流程會提高離開成本。','第6章 6.6'],
  ['推薦系統的四步驟是什麼？','庫存、訊號、預測、排序','拍攝、剪輯、上傳、刪除','按讚、留言、私訊、封鎖','搜尋、購買、退貨、付款','推薦系統會從候選內容中讀取訊號、預測反應並排序。','第7章 7.2'],
  ['興趣圖譜以什麼為核心？','你對什麼內容有反應','只看你家人是誰','完全不看停留時間','只看帳號建立年份','興趣圖譜依觀看、停留、分享等行為推估偏好。','第7章 7.3'],
  ['注意力經濟的核心稀缺資源是什麼？','人的時間、精力與認知頻寬','內容數量','平台帳號數','廣告格式','資訊過載時，真正稀缺的是願意停下來的注意力。','第8章 8.3'],
  ['Hook 模型包含哪些步驟？','觸發、行動、變動獎賞、投資','剪輯、上傳、刪除、付款','搜尋、結帳、退貨、評價','報紙、電視、廣播、雜誌','Hook 模型說明數位產品如何形成習慣迴路。','第8章 8.5'],
  ['Goffman 的印象管理強調什麼？','人在不同情境中會管理他人對自己的印象','人永遠只呈現一種自己','社會互動沒有角色','所有表達都完全自然','社群媒體讓印象管理變成持續工作。','第9章 9.1'],
  ['擬社會互動的風險是什麼？','把單向熟悉誤認為雙向親密','所有關係都完全對等','創作者認識每位觀眾','觀看不會產生情感','長期觀看創作者可能讓觀眾感到親近，但關係仍不一定對等。','第10章 10.6'],
  ['信任形成常見線索包含什麼？','專業、真誠、相似與透明','只有粉絲數','只有折扣','只有影片長度','社群影響力需要可信來源與關係基礎。','第11章 11.3'],
  ['STEPPS 用來說明什麼？','內容為何容易被分享與擴散','平台登入流程','搜尋引擎爬蟲','帳號註冊格式','STEPPS 分析社交貨幣、觸發、情緒、公開性、實用價值與故事。','第12章 12.3'],
  ['內容策略核心不是什麼？','不是只每天發文，而是連結受眾情境、敘事與互動','理解受眾','平台化調整','策略迭代','內容策略需要受眾、平台、故事、信任與成效串連。','第13章'],
  ['Web3 與去中心化社群媒體主要關心什麼？','所有權、治理與平台權力能否重新分配','讓影片更短','只增加廣告','取消所有社群','Web3 想像涉及資料、內容、身份與治理權的重新安排。','第14章 14.7']
];

const state = { theme:null, level:0, index:0, score:0, wrongs: JSON.parse(localStorage.getItem('wrongs')||'[]') };
const root = document.querySelector('#root');
const pick = (base, seed) => Array.from({length:8},(_,i)=>questionBank[(base+i+seed)%questionBank.length]);
function home(){
  root.innerHTML = `<main class="wrap"><section class="hero"><div><p class="tag">期末遊戲式複習</p><h1>社群媒體概論<br>10 大核心機制闖關地圖</h1><p>每個主題 2 關，每關 8 題。答題後立即顯示解析與章節對應。</p><button id="wrong">錯題回顧</button></div><div class="panel"><h2>選擇主題挑戰</h2><p>學生可自由選擇順序，完成後可截圖作為通關紀錄。</p></div></section><div class="grid">${themes.map((t,i)=>`<button class="card" data-i="${i}"><span class="icon">${t.icon}</span><small>${t.chapter}</small><h3>${t.title}</h3><p>${t.subtitle}</p></button>`).join('')}</div></main>`;
  document.querySelectorAll('.card').forEach(b=>b.onclick=()=>theme(+b.dataset.i));
  document.querySelector('#wrong').onclick=wrongPage;
}
function theme(i){ const t=themes[i]; root.innerHTML=`<main class="wrap narrow"><button id="back">回主題地圖</button><section class="panel"><span class="icon">${t.icon}</span><p class="tag">${t.chapter}</p><h1>${t.title}</h1><p>${t.subtitle}</p></section><section class="level"><h2>第 1 關：概念辨識</h2><p>8 題基本概念快篩。</p><button data-l="0">開始</button></section><section class="level"><h2>第 2 關：情境應用</h2><p>8 題案例判斷與應用。</p><button data-l="1">開始</button></section></main>`; document.querySelector('#back').onclick=home; document.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>start(i,+b.dataset.l)); }
function start(t,l){ state.theme=t; state.level=l; state.index=0; state.score=0; quiz(); }
function quiz(){ const qs=pick(state.theme*2,state.level*8); const q=qs[state.index]; root.innerHTML=`<main class="wrap narrow"><button id="exit">離開本關</button><section class="panel"><p class="tag">${themes[state.theme].title}｜第 ${state.level+1} 關</p><h2>第 ${state.index+1} / 8 題</h2><h1>${q[0]}</h1><div class="opts">${[1,2,3,4].map((n,i)=>`<button data-o="${i}" class="opt"><b>${'ABCD'[i]}</b>${q[n]}</button>`).join('')}</div><div id="fb"></div></section></main>`; document.querySelector('#exit').onclick=()=>theme(state.theme); document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(+b.dataset.o,q)); }
function answer(o,q){ document.querySelectorAll('.opt').forEach((b,i)=>{b.disabled=true; if(i===0)b.classList.add('right'); if(i===o&&o!==0)b.classList.add('wrong');}); if(o===0) state.score++; else state.wrongs.push({q:q[0],selected:q[o+1],answer:q[1],exp:q[5],ref:q[6]}); localStorage.setItem('wrongs',JSON.stringify(state.wrongs.slice(-80))); document.querySelector('#fb').innerHTML=`<div class="feedback ${o===0?'ok':'bad'}"><b>${o===0?'答對了':'再想想'}</b><p>${q[5]}</p><small>${q[6]}</small><button id="next">${state.index===7?'完成本關':'下一題'}</button></div>`; document.querySelector('#next').onclick=()=>{ if(state.index<7){state.index++;quiz();} else result(); }; }
function result(){ root.innerHTML=`<main class="wrap narrow"><section class="panel center"><h1>完成挑戰</h1><div class="score">${state.score}/8</div><p>${state.score>=7?'掌握度很高。':state.score>=5?'基礎已建立，建議回顧錯題。':'建議回到課本相關章節複習後再挑戰。'}</p><button id="back">回主題</button></section></main>`; document.querySelector('#back').onclick=()=>theme(state.theme); }
function wrongPage(){ const ws=state.wrongs; root.innerHTML=`<main class="wrap narrow"><button id="back">回主題地圖</button><section class="panel"><h1>錯題回顧</h1><p>目前保留最近 ${ws.length} 題錯題。</p></section><section>${ws.length?ws.map(w=>`<article class="wrong"><h3>${w.q}</h3><p>你的答案：${w.selected}</p><p>正確答案：${w.answer}</p><p>${w.exp}</p><small>${w.ref}</small></article>`).join(''):'<p class="empty">目前沒有錯題。</p>'}</section></main>`; document.querySelector('#back').onclick=home; }
home();
