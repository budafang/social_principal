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

const bank = [
  {q:'社群媒體和傳統大眾媒體最大的結構差異是什麼？', a:'發聲與分發從集中轉向多節點參與', d:['媒體內容從影像轉回純文字','所有平台都取消編輯與排序','閱聽人完全不再接觸傳統媒體'], e:'傳統大眾媒體偏向 one-to-many；社群媒體讓使用者也能生產、回應與分發內容。', r:'第1章 1.1'},
  {q:'Web 2.0 為社群媒體奠定的關鍵基礎是什麼？', a:'使用者可以生成、回應與再創作內容', d:['網站只能被動閱讀與下載資料','平台只能由媒體機構發布內容','內容必須先經政府審核才上架'], e:'Web 2.0 讓網路從唯讀轉向讀寫並存，UGC 與參與式文化成為核心。', r:'第1章 1.2'},
  {q:'「平台不等於社群」這句話最適合用來提醒什麼？', a:'有工具與流量，不代表成員已有關係', d:['只要開群組，就一定會自然活絡','社群只看粉絲數，不看互動品質','平台功能越多，社群規範越不重要'], e:'平台提供場地與規則；社群需要持續互動、共同規範與關係累積。', r:'第2章 2.6'},
  {q:'判斷一個線上群體是否接近社群，最應該先看什麼？', a:'是否有成員互動、規範與共同關注', d:['是否一定使用最新社群平台','是否每天都有固定廣告預算','是否所有成員都公開真實姓名'], e:'社群至少包含成員、互動、規範，以及共同目標或共同關注。', r:'第2章 2.1'},
  {q:'「媒介即訊息」放在社群媒體中，意思最接近哪一項？', a:'形式與介面會改變內容的社會效果', d:['內容永遠比媒介形式更不重要','只有影片內容才具有傳播價值','同一句話放在哪裡都完全一樣'], e:'同一內容放在長文、短影音、直播或限動，會產生不同語氣、互動與關係效果。', r:'第3章 3.1'},
  {q:'科技可供性主要在分析什麼？', a:'平台設計讓哪些行動變容易或困難', d:['使用者購買手機的平均價格','創作者每月收入是否穩定','平台公司成立年份與資本額'], e:'按讚、分享、推播與無限滑動都會鼓勵特定行為，也限制其他行為。', r:'第3章 3.3'},
  {q:'boyd 四大數位可供性中，「截圖後離開原本情境流傳」最接近哪一項？', a:'可複製性', d:['媒體豐富性','網路效應','生態系鎖定'], e:'可複製性使數位內容能被截圖、下載、轉貼，並離開原本脈絡。', r:'第3章 3.4'},
  {q:'社群冷啟動最需要先解決的問題是什麼？', a:'讓早期成員知道如何互動並被回應', d:['立刻讓所有人變成付費會員','只追求大量陌生人同時進入','先把所有規範藏起來避免壓力'], e:'冷啟動不只是拉人進來，而是建立內容、關係與規範的初期節奏。', r:'第4章 4.2'},
  {q:'潛水者在社群中應該如何理解？', a:'可能是低可見度但仍有價值的參與者', d:['一定是不認同社群的人','必須立刻被移除才健康','完全不會學習或累積信任'], e:'潛水者雖少發言，仍可能閱讀、學習、建立信任，未來也可能轉為發言者。', r:'第4章 4.3'},
  {q:'弱連結最常帶來的優勢是什麼？', a:'接觸不同圈層的新資訊與機會', d:['取代所有強連結與親密關係','保證所有內容都能快速爆紅','讓社群邊界完全不再需要管理'], e:'弱連結連向不同社會圈，較能突破熟人圈的資訊重疊。', r:'第5章 5.3'},
  {q:'一個人能把學術概念翻譯給大眾，較像佔據哪種位置？', a:'結構洞中的中介者位置', d:['完全封閉的同質圈中心','沒有任何連結的邊緣點','只靠粉絲數決定的位置'], e:'中介者連結原本不相通的圈子，能進行資訊轉譯與資源重組。', r:'第5章 5.4'},
  {q:'網路效應的重點不是人數本身，而是什麼？', a:'新使用者加入能否提高他人價值', d:['平台介面是否永遠不需改版','使用者是否都住在同一城市','內容是否完全由官方生產'], e:'網路效應描述使用者增加後，產品或服務對其他使用者的價值提升。', r:'第6章 6.1'},
  {q:'平台成熟後，創作者不容易離開，主要可能是因為什麼？', a:'內容、粉絲、資料與商業工具已沉澱', d:['平台不再需要任何創作者加入','所有平台都提供完全相同流量','使用者永遠只追蹤單一帳號'], e:'生態系鎖定來自關係、內容資產、商業流程與演算法理解的累積。', r:'第6章 6.6'},
  {q:'推薦系統的四個基本流程，較合理的是哪一組？', a:'庫存、訊號、預測、排序', d:['拍攝、剪輯、上傳、刪除','註冊、付款、退貨、客服','報紙、電視、廣播、雜誌'], e:'平台先找候選內容，再讀取訊號，預測反應，最後排序呈現。', r:'第7章 7.2'},
  {q:'興趣圖譜讓平台分發內容時，更重視什麼？', a:'使用者對主題與形式的行為反應', d:['使用者是否認識內容發布者本人','內容是否只來自同班同學帳號','平台是否完全取消推薦系統'], e:'興趣圖譜以觀看、停留、分享、收藏等行為推估偏好。', r:'第7章 7.3'},
  {q:'Social SEO 的目標是什麼？', a:'讓社群內容更容易被平台搜尋理解', d:['讓所有內容都不用標題與字幕','讓創作者只依賴一次性推薦','讓留言區完全停止產生訊號'], e:'標題、字幕、關鍵字、Hashtag、描述與留言都可能影響搜尋可見性。', r:'第7章 7.6'},
  {q:'注意力經濟中，真正稀缺的是什麼？', a:'使用者願意停下來理解的時間', d:['平台可以發布的內容數量','帳號可以申請的總數上限','網路能儲存的文字容量'], e:'資訊過剩時，稀缺的不再是內容，而是注意力與認知頻寬。', r:'第8章 8.3'},
  {q:'Hook 模型中的「變動獎賞」為什麼有效？', a:'不確定回饋會提高再次檢查動機', d:['固定結果會讓人完全不再使用','所有推播都能直接產生購買','使用者不會受到任何習慣影響'], e:'每次打開平台都不知道會看到什麼，這種不確定性會強化使用習慣。', r:'第8章 8.5'},
  {q:'Goffman 的前台／後台放在社群媒體中，最適合說明什麼？', a:'不同觀眾面前的自我呈現差異', d:['所有平台上的身份都完全一致','個人品牌不需要任何形象管理','私訊內容一定會比公開貼文真實'], e:'社群媒體讓使用者在公開貼文、限動、小帳與私訊間管理不同自我。', r:'第9章 9.1'},
  {q:'擬社會互動容易造成哪種誤判？', a:'把長期觀看形成的熟悉感當成親密', d:['把雙向朋友關係誤認為陌生關係','認為創作者完全不會影響觀眾','認為所有互動都沒有情緒重量'], e:'觀眾可能因長期觀看創作者而感到親近，但關係不一定是雙向的。', r:'第10章 10.6'},
  {q:'社群媒體中的信任通常不是只靠哪一項建立？', a:'單一曝光數字或粉絲總量', d:['專業能力與內容可靠性','真誠語氣與透明揭露','相似感與長期互動經驗'], e:'粉絲數可能提供社會證明，但信任仍需專業、真誠、相似與透明等線索。', r:'第11章 11.3'},
  {q:'STEPPS 最適合用來分析什麼？', a:'內容為什麼會被分享與擴散', d:['平台伺服器如何儲存密碼','創作者如何完成所得報稅','手機相機如何壓縮影像檔'], e:'STEPPS 可分析社交貨幣、觸發、情緒、公開性、實用價值與故事。', r:'第12章 12.3'},
  {q:'成熟的內容策略不應只停留在哪一件事？', a:'每天固定發文但缺乏受眾情境', d:['理解平台流量入口的差異','設計內容功能與敘事任務','根據成效進行策略迭代'], e:'內容策略要連結受眾、平台、敘事、互動、信任與成效評估。', r:'第13章'},
  {q:'平台治理與未來想像最核心的問題之一是什麼？', a:'誰能制定規則並分配可見性', d:['所有平台是否都改成橫式影片','使用者是否完全停止創作內容','社群媒體是否只能用於娛樂'], e:'平台治理涉及內容規則、資料權力、演算法透明與數位公共生活。', r:'第14章'}
];

const root = document.querySelector('#root');
const state = { theme:null, level:0, index:0, score:0, questions:[], wrongs: JSON.parse(localStorage.getItem('wrongs')||'[]') };
const shuffle = arr => arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
const makeQuestion = raw => ({ q:raw.q, options:shuffle([{text:raw.a, ok:true}, ...raw.d.map(text=>({text, ok:false}))]), e:raw.e, r:raw.r });
const pick = (base, seed) => Array.from({length:8},(_,i)=>makeQuestion(bank[(base+i+seed)%bank.length]));

function home(){
  root.innerHTML = `<main class="wrap"><section class="hero"><div><p class="tag">期末遊戲式複習</p><h1>社群媒體概論<br>10 大核心機制闖關地圖</h1><p>每個主題 2 關，每關 8 題。選項順序每次隨機，答題後立即顯示解析與章節對應。</p><button id="wrong">錯題回顧</button></div><div class="panel"><h2>新版題目設計</h2><p>答案不再固定為 A；干擾選項改成較接近的概念判斷，降低靠字數猜題的機會。</p></div></section><div class="grid">${themes.map((t,i)=>`<button class="card" data-i="${i}"><span class="icon">${t.icon}</span><small>${t.chapter}</small><h3>${t.title}</h3><p>${t.subtitle}</p></button>`).join('')}</div></main>`;
  document.querySelectorAll('.card').forEach(b=>b.onclick=()=>theme(+b.dataset.i));
  document.querySelector('#wrong').onclick=wrongPage;
}
function theme(i){ const t=themes[i]; root.innerHTML=`<main class="wrap narrow"><button id="back">回主題地圖</button><section class="panel"><span class="icon">${t.icon}</span><p class="tag">${t.chapter}</p><h1>${t.title}</h1><p>${t.subtitle}</p></section><section class="level"><h2>第 1 關：概念辨識</h2><p>8 題基本概念快篩，選項順序隨機。</p><button data-l="0">開始</button></section><section class="level"><h2>第 2 關：情境應用</h2><p>8 題案例判斷與應用，避免單純背名詞。</p><button data-l="1">開始</button></section></main>`; document.querySelector('#back').onclick=home; document.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>start(i,+b.dataset.l)); }
function start(t,l){ state.theme=t; state.level=l; state.index=0; state.score=0; state.questions=pick(t*2,l*8); quiz(); }
function quiz(){ const q=state.questions[state.index]; root.innerHTML=`<main class="wrap narrow"><button id="exit">離開本關</button><section class="panel"><p class="tag">${themes[state.theme].title}｜第 ${state.level+1} 關</p><h2>第 ${state.index+1} / 8 題</h2><h1>${q.q}</h1><div class="opts">${q.options.map((op,i)=>`<button data-o="${i}" class="opt"><b>${'ABCD'[i]}</b>${op.text}</button>`).join('')}</div><div id="fb"></div></section></main>`; document.querySelector('#exit').onclick=()=>theme(state.theme); document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(+b.dataset.o,q)); }
function answer(o,q){ const chosen=q.options[o]; document.querySelectorAll('.opt').forEach((b,i)=>{b.disabled=true; if(q.options[i].ok)b.classList.add('right'); if(i===o&&!chosen.ok)b.classList.add('wrong');}); if(chosen.ok) state.score++; else state.wrongs.push({q:q.q,selected:chosen.text,answer:q.options.find(x=>x.ok).text,exp:q.e,ref:q.r}); localStorage.setItem('wrongs',JSON.stringify(state.wrongs.slice(-80))); document.querySelector('#fb').innerHTML=`<div class="feedback ${chosen.ok?'ok':'bad'}"><b>${chosen.ok?'答對了':'再想想'}</b><p>${q.e}</p><small>${q.r}</small><button id="next">${state.index===7?'完成本關':'下一題'}</button></div>`; document.querySelector('#next').onclick=()=>{ if(state.index<7){state.index++;quiz();} else result(); }; }
function result(){ root.innerHTML=`<main class="wrap narrow"><section class="panel center"><h1>完成挑戰</h1><div class="score">${state.score}/8</div><p>${state.score>=7?'掌握度很高。':state.score>=5?'基礎已建立，建議回顧錯題。':'建議回到課本相關章節複習後再挑戰。'}</p><button id="back">回主題</button></section></main>`; document.querySelector('#back').onclick=()=>theme(state.theme); }
function wrongPage(){ const ws=state.wrongs; root.innerHTML=`<main class="wrap narrow"><button id="back">回主題地圖</button><section class="panel"><h1>錯題回顧</h1><p>目前保留最近 ${ws.length} 題錯題。</p></section><section>${ws.length?ws.map(w=>`<article class="wrong"><h3>${w.q}</h3><p>你的答案：${w.selected}</p><p>正確答案：${w.answer}</p><p>${w.exp}</p><small>${w.ref}</small></article>`).join(''):'<p class="empty">目前沒有錯題。</p>'}</section></main>`; document.querySelector('#back').onclick=home; }
home();
