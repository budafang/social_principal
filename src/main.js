import './styles.css';

const themes=[
{id:'history',icon:'🕰️',title:'社群媒體時光機',chapter:'第1章',sub:'媒介演化、Web 2.0與創作者經濟'},
{id:'community',icon:'🧭',title:'社群平台辨識所',chapter:'第2章',sub:'社群、社群媒體與平台的差異'},
{id:'media',icon:'🧪',title:'媒介形式實驗室',chapter:'第3章',sub:'媒介即訊息、媒介生態與可供性'},
{id:'build',icon:'🌱',title:'社群冷啟動任務',chapter:'第4章',sub:'社群形成、規範與互動文化'},
{id:'network',icon:'🕸️',title:'網絡偵探社',chapter:'第5章',sub:'中心性、弱連結與結構洞'},
{id:'platform',icon:'🚀',title:'平台成長模擬器',chapter:'第6章',sub:'網路效應、多邊市場與鎖定'},
{id:'algorithm',icon:'🔎',title:'演算法可見性挑戰',chapter:'第7章',sub:'推薦、搜尋與GEO'},
{id:'attention',icon:'🧲',title:'注意力陷阱逃脫室',chapter:'第8章',sub:'使用動機、注意力經濟與習慣'},
{id:'identity',icon:'🎭',title:'數位身份劇場',chapter:'第9–10章',sub:'印象管理、互動與關係誤讀'},
{id:'future',icon:'📣',title:'影響擴散與治理',chapter:'第11–14章',sub:'信任、口碑、迷因、內容策略與未來'}
];

const concepts={
history:[
['一對多','少數媒體對大眾','同儕互相協作','平台自動生成','社群共同治理','傳統大眾媒體多由少數機構生產並向大量閱聽人傳送。','第1章 1.1'],
['多對多','多節點互相流通','單一中心播送','封閉資料保存','離線紙本交換','網路媒體讓許多節點能彼此連結、轉貼、回應與再製。','第1章 1.1'],
['Web 2.0','讀寫並存的網路','只能瀏覽的網路','單向廣播系統','完全離線媒介','Web 2.0讓使用者能發布、回應、共編與再創作。','第1章 1.2'],
['UGC','使用者生成內容','官方付費廣告','政府公告文件','平台程式碼庫','UGC指一般使用者生產並發布的內容，是社群媒體的重要基礎。','第1章 1.2'],
['參與式文化','改寫評論再創作','單向接收訊息','只看不回應','固定版面播送','參與式文化強調使用者會評論、混剪、二創與再散布內容。','第1章 1.2'],
['行動優先','碎片時間隨身使用','固定客廳收看','紙本定時配送','只在教室使用','智慧型手機讓社群媒體進入通勤、排隊、睡前等生活碎片。','第1章 1.3'],
['興趣圖譜','依反應推測喜好','只看真實朋友','依戶籍排序內容','依紙本版面分類','興趣圖譜重視停留、重看、收藏、分享等行為訊號。','第1章 1.4'],
['創作者經濟','注意力轉成收入','只靠報紙訂閱','完全排除品牌','不需要平台規則','創作者透過內容、粉絲、品牌合作與平台工具形成收入模式。','第1章 1.5']
],
community:[
['社群四要素','成員互動規範目標','價格通路促銷產品','畫質音量字幕特效','帳單發票客服合約','社群不是人數集合，而是有成員、互動、規範與共同目標。','第2章 2.1'],
['共同想像','我們屬於同一群','大家剛好路過','完全沒有默契','只看平台流量','共同想像包含價值、興趣、記憶與歸屬感。','第2章 2.1'],
['Pool','共享標籤但少互動','高度互連的網絡','圍繞單一中心','完全沒有成員','Pool像粉絲、修課者或支持者的集合，關係較薄。','第2章 2.2'],
['Web','成員多方向互動','只看中心人物','共享但不交流','只靠廣告觸及','Web型社群由成員之間的多方向互動支撐。','第2章 2.2'],
['Hub','圍繞中心聚集','成員完全互連','沒有明確核心','只存在於線下','Hub型社群常圍繞創作者、品牌或組織形成。','第2章 2.2'],
['個人檔案','可辨認數位身份','匿名紙本投書','離線會員收據','單次觀看紀錄','個人檔案讓使用者以可辨識身份參與互動。','第2章 2.3'],
['平台本質','基礎設施與規則','完全自由空地','單純聊天內容','只是一篇貼文','平台提供帳號、介面、排序、資料與治理規則。','第2章 2.4'],
['平台不等於社群','有工具不等於有關係','有群組必然活絡','粉絲多就是社群','平台消失社群必死','平台提供場地，社群需要關係、規範與互動累積。','第2章 2.6']
],
media:[
['媒介即訊息','形式改變社會效果','內容完全不重要','媒體只是空容器','所有平台都一樣','同一內容在長文、限動、直播或短影音會有不同效果。','第3章 3.1'],
['媒介生態','媒體成為生活環境','媒體只是單次工具','媒體不影響時間','媒體不影響關係','媒介生態學把媒體視為安排時間、關係與文化的環境。','第3章 3.2'],
['科技可供性','功能引導行動可能','只代表設備價格','只代表公司規模','只代表使用年齡','可供性分析平台設計讓什麼行動變容易或困難。','第3章 3.3'],
['持久性','內容可能長期存在','內容必然秒刪','內容不能被保存','內容只在紙上留存','社群內容可能被保存、截圖、備份與重新挖出。','第3章 3.4'],
['可複製性','內容能截圖轉貼','內容只能原地觀看','內容無法被下載','內容不能被引用','數位內容能被複製並離開原始脈絡。','第3章 3.4'],
['可規模化','小圈內容突然放大','內容只能給熟人','觀看必定很平均','平台不能推薦內容','一則內容可能因分享或推薦被大量陌生人看見。','第3章 3.4'],
['可搜尋性','舊內容能被找出','貼文無法被搜尋','留言不會留下','標籤沒有作用','關鍵字、標籤與索引使過往內容更容易被找到。','第3章 3.4'],
['前台後台','公開展示與私密互動','演算法與資料庫','硬體設備與軟體','產品規格與價格','公開貼文像前台，私訊、小帳與摯友較接近後台。','第3章 3.5']
],
build:[
['共同興趣','因喜好聚在一起','因演算法懲罰','因帳號被停權','因價格被提高','共同興趣能降低陌生人互動門檻。','第4章 4.1'],
['共同問題','因難題尋求支援','因品牌要求沉默','因平台取消互動','因貼文不能搜尋','考試、照護、租屋、程式除錯等都可能形成問題型社群。','第4章 4.1'],
['共同目標','一起完成某件事','一起停止交流','一起避免規範','一起隱藏成員','倡議、開源、學生社團等常圍繞共同目標形成。','第4章 4.1'],
['冷啟動','先建立互動節奏','先放任空白場域','先移除核心成員','先禁止新人發言','冷啟動要讓新人知道怎麼參與且有人回應。','第4章 4.2'],
['核心成員','示範互動與規範','只負責觀看數','只負責付費廣告','只負責刪除平台','核心成員會提問、回答、歡迎新人並穩定社群節奏。','第4章 4.2'],
['潛水者','低可見度參與者','必然破壞社群','一定完全無價值','應立刻被移除','潛水者可能閱讀、學習、建立信任，之後才浮出水面。','第4章 4.3'],
['同質性','相似者容易連結','陌生者必然連結','差異越大越親密','社群不會分圈層','同質性有助信任，也可能形成同溫層。','第4章 4.4'],
['儀式感','定期更新歸屬感','取消所有共同活動','讓新人永遠困惑','只靠平台演算法','固定打卡、年度回顧、挑戰活動能更新社群關係。','第4章 4.5']
],
network:[
['社會資本','關係帶來資源','金錢必然增加','內容自動爆紅','平台取消權力','社會資本是人透過關係取得資訊、信任、支持與機會。','第5章 5.1'],
['度中心性','直接連結很多人','連結關鍵人物','位在橋樑位置','完全沒有連結','度中心性看一個節點直接連到多少人。','第5章 5.2'],
['中介中心性','連結不同圈子','粉絲數最大','最常被按讚','只在圈內互動','中介中心性高者常位在不同群體之間。','第5章 5.2'],
['特徵中心性','連到重要節點','只看連結數量','只看貼文長度','只看帳號年齡','特徵中心性重視你連到的人是否重要。','第5章 5.2'],
['弱連結','帶來新資訊機會','保證關係最親密','完全沒有信任','不可能影響求職','弱連結能把資訊帶出既有熟人圈。','第5章 5.3'],
['結構洞','群體間的連結空隙','網頁設計錯誤','留言區的錯字','平台伺服器故障','結構洞附近的中介者能轉譯資訊、連接資源。','第5章 5.4'],
['冪律分布','少數節點佔多數注意','所有人平均曝光','內容品質完全相同','平台不會排序內容','社群媒體注意力常集中在少數節點。','第5章 5.5'],
['複雜傳染','需要多次背書信任','一次看到就行動','只靠搞笑就完成','完全不需社群支持','高成本行動常需要熟人背書與多次接觸。','第5章 5.6']
],
platform:[
['網路效應','人越多價值越高','人越少價值越高','價值只看包裝','平台不靠使用者','通訊軟體、社群網站與市集都依賴網路效應。','第6章 6.1'],
['直接網路效應','同類使用者互增價值','商家與買家互補','資料改善推薦','廣告主買曝光','朋友越多，通訊工具對同類使用者越有用。','第6章 6.2'],
['跨邊網路效應','不同角色互相增值','同學之間互追','內容自動刪除','平台停止媒合','使用者、創作者、商家與廣告主會互相影響平台價值。','第6章 6.2'],
['負向網路效應','人多也可能品質下降','人多必然更健康','平台越大越無風險','規範越少越穩定','垃圾內容、詐騙、過載與騷擾可能降低平台價值。','第6章 6.2'],
['原子網絡','小而可運作的網絡','全世界同時加入','完全沒有互動','只靠單一廣告','平台可先讓一個小圈子的互動有價值。','第6章 6.3'],
['平台飛輪','多方角色互相強化','一次活動就結束','只有官方生產','沒有資料回饋','使用者、內容、廣告與工具可能形成自我強化循環。','第6章 6.4'],
['數據網路效應','資料改善媒合體驗','資料只會增加成本','資料完全無法學習','平台不蒐集訊號','使用者資料若能改善推薦、搜尋或媒合，就形成數據網路效應。','第6章 6.5'],
['生態系鎖定','離開成本逐漸提高','切換完全無成本','內容自動可搬走','粉絲必定跟著走','關係、內容資產、商業工具與信譽會提高轉換成本。','第6章 6.6']
],
algorithm:[
['推薦引擎','平台主動分配可見性','只按時間顯示內容','所有粉絲必定看到','不使用任何訊號','推薦引擎決定哪些內容先被看見、被延後或不出現。','第7章 7.1'],
['候選庫存','可能被推薦的內容池','使用者手機型號','平台員工名單','廣告收據集合','推薦流程會先找出可能出現在使用者面前的內容。','第7章 7.2'],
['互動訊號','停留完播收藏分享','帳號註冊地址','手機外殼顏色','課堂座位位置','平台用停留、完播、收藏與分享等訊號預測內容價值。','第7章 7.4'],
['社交圖譜','依你認識誰分發','依你喜歡什麼分發','依搜尋關鍵字分發','依AI摘要分發','社交圖譜以好友、追蹤與互動關係為核心。','第7章 7.3'],
['興趣圖譜','依你反應什麼分發','依紙本地址分發','依班級座號分發','依固定報紙版面','興趣圖譜重視使用者對內容主題與形式的行為反應。','第7章 7.3'],
['Social SEO','讓社群內容可搜尋','讓貼文完全消失','讓留言不被理解','讓標題失去作用','標題、字幕、Hashtag與描述會影響平台搜尋可見性。','第7章 7.6'],
['GEO','讓AI易摘要引用','讓內容只能短暫曝光','讓影片失去字幕','讓搜尋完全無效','GEO關心生成式AI是否能正確提取、摘要與引用內容。','第7章 7.7'],
['演算法偏誤','排序可能延續偏見','平台必定完全中立','模型不受資料影響','商業目標不存在','演算法由資料、模型、平台目標與治理規則共同構成。','第7章 7.8']
],
attention:[
['使用與滿足','人主動用媒體滿足需求','人完全被動接收','媒體沒有任何用途','平台不回應需求','使用者因資訊、娛樂、陪伴、認同等需求選擇媒體。','第8章 8.1'],
['歸屬需求','需要穩定正向連結','只需要內容價格','完全不在意回應','不會受關係影響','按讚、留言、貼圖能低成本維持社交訊號。','第8章 8.2'],
['注意力經濟','稀缺的是注意力','稀缺的是內容數量','稀缺的是帳號數','稀缺的是螢幕尺寸','資訊過剩時，人的時間與認知頻寬成為稀缺資源。','第8章 8.3'],
['有效流量','能帶來理解信任行動','只有曝光數字漂亮','所有點擊都有效','機器流量也有價值','流量要看是否來自正確需求並導向後續行動。','第8章 8.3'],
['資訊缺口','讓人想補完未知','讓人完全看不懂','把答案全部刪除','停止所有好奇心','標題用懸念或問題創造好奇，促使人停下來。','第8章 8.4'],
['變動獎勵','不確定回饋強化習慣','固定結果最容易上癮','沒有回饋仍會留存','使用者不受獎勵影響','每次打開平台都可能看到不同回饋，會增加檢查動機。','第8章 8.5'],
['Hook模型','觸發行動獎賞投資','搜尋排序點擊購買','發布刪除封鎖檢舉','報紙電視廣播雜誌','Hook模型描述數位產品形成習慣的迴路。','第8章 8.5'],
['JOMO','享受錯過的自主感','害怕錯過最新消息','強迫檢查所有通知','追逐全部熱門話題','JOMO強調重新取得生活節奏，而不是被FOMO拉著走。','第8章 8.6']
],
identity:[
['印象管理','管理他人對我的看法','放棄所有自我呈現','只看平台伺服器','完全不受觀眾影響','Goffman指出人會在不同情境中調整自我呈現。','第9章 9.1'],
['前台','面對觀眾的表演場域','完全私密的休息處','沒有觀眾的空間','只屬於平台後台','公開貼文、作品頁與個人頁常像前台。','第9章 9.1'],
['後台','較放鬆的私密場域','公開展示的舞台','官方廣告後台','演算法伺服器','私訊、小帳、摯友名單較接近後台空間。','第9章 9.1'],
['選擇性揭露','決定發什麼給誰看','把所有生活全公開','完全沒有隱私設定','平台替你決定人格','社群媒體不是完整生活鏡子，而是經過選擇的呈現。','第9章 9.2'],
['個人品牌','讓他人穩定理解價值','隨機發文毫無方向','隱藏所有專業能力','拒絕任何形象線索','個人品牌讓受眾理解你的主題、風格與合作價值。','第9章 9.3'],
['真實性表演','真實感也會被設計','越修飾必然越真實','後台一公開就無表演','所有素顏照都無策略','社群中的真實性常是媒介形式塑造的效果。','第9章 9.4'],
['擬社會互動','單向熟悉像親密','雙向關係完全消失','創作者認識所有粉絲','觀看不會產生情感','長期觀看創作者會產生熟悉感，但不一定是雙向關係。','第10章 10.6'],
['互動重量','按讚留言私訊意義不同','所有互動完全相同','按讚一定代表承諾','私訊一定沒有重量','不同互動成本不同，會被理解成不同程度的關心或靠近。','第10章 10.1']
],
future:[
['來源可信度','專業真誠相似透明','只有粉絲總數','只有影片長度','只有折扣大小','信任常來自專業、真誠、相似與透明等線索。','第11章 11.3'],
['參考群體','他人影響判斷行動','平台停止排序','內容無法流通','社群沒有規範','參考群體會透過資訊、規範或價值表達影響人。','第11章 11.2'],
['口碑','真實使用經驗影響決策','官方標語必然勝出','所有廣告都可信','留言完全無效果','電子口碑常因使用者經驗感而具有說服力。','第11章 11.4'],
['低成本表態','按讚轉發等輕行動','長期志工承諾','高額付費訂閱','公開承擔風險','低成本表態容易發生，但不必然轉為高成本承諾。','第11章 11.6'],
['STEPPS','分享動機分析框架','平台登入安全流程','短影音剪輯軟體','伺服器維護規則','STEPPS分析社交貨幣、觸發、情緒、公開性、實用價值與故事。','第12章 12.3'],
['迷因','可複製的文化單位','只存在紙本媒體','不能被再創作','沒有社群語境','迷因透過模仿、改寫與再散布形成文化複製。','第12章 12.2'],
['內容策略','連結受眾情境任務','每天隨機發文即可','只追求一次爆紅','不需要成效回顧','內容策略需整合受眾、平台、敘事、互動與成效。','第13章'],
['平台治理','規則可見性與資料權力','只討論版面顏色','只討論手機尺寸','完全不涉及公共性','平台治理涉及內容規則、演算法透明、資料權力與公共生活。','第14章']
]
};

const KEY='smg-2-progress';
let progress=JSON.parse(localStorage.getItem(KEY)||'{"done":{},"wrongs":[],"name":""}');
const root=document.querySelector('#root');
const letters=['A','B','C','D'];
const save=()=>localStorage.setItem(KEY,JSON.stringify(progress));
const shuffle=a=>a.map(x=>[Math.random(),x]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
const allLevels=()=>themes.flatMap(t=>[0,1].map(l=>({theme:t,level:l,key:`${t.id}:${l}`})));
const maxScore=()=>allLevels().length*8;
const stats=()=>{let s=Object.values(progress.done).reduce((n,r)=>n+(r.best||0),0),done=Object.keys(progress.done).length,total=allLevels().length,p=Math.round(s/maxScore()*100);return{score:s,max:maxScore(),pct:p,done,total,all:done===total,badges:themes.filter(t=>progress.done[`${t.id}:0`]&&progress.done[`${t.id}:1`]).length}};
const tier=p=>p===100?['鑽石級認證','#7c3aed','#ede9fe']:p>=90?['金級認證','#b45309','#fef3c7']:p>=80?['銀級認證','#475569','#e2e8f0']:p>=70?['銅級認證','#9a3412','#fed7aa']:null;
function levelQuestions(tid,level){let list=concepts[tid];return list.map((c,i)=>{let q=level?`案例判斷：若情境重點是「${c[6].replace(/。$/,'')}」，最適合用哪個概念理解？`:`概念辨識：哪一項最符合「${c[0]}」？`;let opts=shuffle([{txt:c[1],ok:1},{txt:c[2],ok:0},{txt:c[3],ok:0},{txt:c[4],ok:0}]);return{q,opts,exp:c[5],ref:c[6]}}).slice(0,8)}
function home(){let st=stats();root.innerHTML=`<main class="wrap"><section class="hero"><div><p class="tag">題庫選項平衡化 2.0</p><h1>社群媒體概論<br>闖關認證系統</h1><p>答案位置隨機，四個選項長度與語氣盡量接近。完成全部關卡後，可依總成績生成個人化證書。</p><div class="row"><button id="start">開始挑戰</button><button id="wrong" class="light">錯題回顧</button><button id="cert" class="light" ${st.all?'':'disabled'}>生成證書</button><button id="reset" class="ghost">清除紀錄</button></div></div><div class="panel"><h2>目前成就</h2><div class="stats"><b>${st.done}/${st.total}</b><span>完成關卡</span><b>${st.badges}/10</b><span>主題徽章</span><b>${st.score}/${st.max}</b><span>最佳總分</span><b>${st.pct}%</b><span>整體成績</span></div><div class="bar"><i style="width:${st.pct}%"></i></div><p><strong>目前階段：</strong>${st.all?(tier(st.pct)?.[0]||'未達70分'):'尚未完成全部關卡'}</p></div></section><section class="progress"><h2>答題進度表</h2>${progressTable()}</section><section id="themes"><h2>選擇主題</h2><div class="grid">${themes.map((t,i)=>`<button class="card" data-i="${i}"><span class="icon">${t.icon}</span><small>${t.chapter}</small><h3>${t.title}</h3><p>${t.sub}</p><small>${themeDone(t)}</small></button>`).join('')}</div></section></main>`;document.querySelector('#start').onclick=()=>document.querySelector('#themes').scrollIntoView({behavior:'smooth'});document.querySelector('#wrong').onclick=wrongPage;document.querySelector('#cert').onclick=certPage;document.querySelector('#reset').onclick=()=>{if(confirm('確定清除所有紀錄？')){progress={done:{},wrongs:[],name:''};save();home()}};document.querySelectorAll('.card').forEach(b=>b.onclick=()=>theme(+b.dataset.i))}
function themeDone(t){let a=progress.done[`${t.id}:0`],b=progress.done[`${t.id}:1`];return `第1關 ${a?`${a.best}/8`:'未完成'}｜第2關 ${b?`${b.best}/8`:'未完成'}`}
function progressTable(){return `<div class="ptable"><div class="prow head"><div>主題</div><div>第1關</div><div>第2關</div><div>徽章</div></div>${themes.map(t=>{let a=progress.done[`${t.id}:0`],b=progress.done[`${t.id}:1`];return `<div class="prow"><div><b>${t.icon} ${t.title}</b><small>${t.chapter}</small></div><div class="pcell ${a?'done':''}">${a?`${a.best}/8`:'未完成'}</div><div class="pcell ${b?'done':''}">${b?`${b.best}/8`:'未完成'}</div><div class="badge2 ${a&&b?'ok':''}">${a&&b?'已取得':'未取得'}</div></div>`}).join('')}</div>`}
function theme(i){let t=themes[i];root.innerHTML=`<main class="wrap narrow"><button id="back" class="back">回主題地圖</button><section class="panel theme"><span class="big">${t.icon}</span><div><p class="tag">${t.chapter}</p><h1>${t.title}</h1><p>${t.sub}</p></div></section><section class="levels"><div class="level"><div><p class="tag">第1關</p><h2>概念辨識</h2><p>確認能否分辨核心概念。</p></div><button data-l="0">開始</button></div><div class="level"><div><p class="tag">第2關</p><h2>情境應用</h2><p>用案例判斷概念如何被應用。</p></div><button data-l="1">開始</button></div></section></main>`;document.querySelector('#back').onclick=home;document.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>start(i,+b.dataset.l))}
let run={};function start(i,l){let t=themes[i];run={t,i,l,qs:levelQuestions(t.id,l),idx:0,score:0,ans:[]};quiz()}
function quiz(){let q=run.qs[run.idx];root.innerHTML=`<main class="wrap narrow"><button id="exit" class="back">離開本關</button><section class="panel quiz"><p class="tag">${run.t.title}｜第${run.l+1}關</p><h2>第 ${run.idx+1}/8 題</h2><div class="bar"><i style="width:${run.idx/8*100}%"></i></div><h1>${q.q}</h1><div class="opts">${q.opts.map((o,i)=>`<button class="opt" data-o="${i}"><b>${letters[i]}</b><span>${o.txt}</span></button>`).join('')}</div><div id="fb"></div></section></main>`;document.querySelector('#exit').onclick=()=>theme(run.i);document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(+b.dataset.o))}
function answer(i){let q=run.qs[run.idx],op=q.opts[i],right=q.opts.findIndex(x=>x.ok);document.querySelectorAll('.opt').forEach((b,j)=>{b.disabled=true;if(j===right)b.classList.add('right');if(j===i&&!op.ok)b.classList.add('wrong')});if(op.ok)run.score++;else progress.wrongs.push({theme:run.t.title,level:`第${run.l+1}關`,q:q.q,selected:op.txt,answer:q.opts[right].txt,exp:q.exp,ref:q.ref});document.querySelector('#fb').innerHTML=`<div class="feedback ${op.ok?'ok':'bad'}"><b>${op.ok?'答對了':'再想想'}</b><p>${q.exp}</p><small>${q.ref}</small><button id="next">${run.idx===7?'完成本關':'下一題'}</button></div>`;document.querySelector('#next').onclick=()=>{run.ans.push(op.ok);if(run.idx<7){run.idx++;quiz()}else result()}}
function result(){let key=`${run.t.id}:${run.l}`,old=progress.done[key];progress.done[key]={best:Math.max(old?.best||0,run.score),last:run.score,total:8,tries:(old?.tries||0)+1};progress.wrongs=progress.wrongs.slice(-120);save();root.innerHTML=`<main class="wrap narrow"><section class="panel center"><h1>完成挑戰</h1><div class="score">${run.score}/8</div><p>${run.score>=7?'掌握度很高。':run.score>=5?'基礎已建立，建議回顧錯題。':'建議複習後再挑戰一次。'}</p><button id="back">回主題</button></section></main>`;document.querySelector('#back').onclick=()=>theme(run.i)}
function wrongPage(){root.innerHTML=`<main class="wrap narrow"><button id="back" class="back">回主題地圖</button><section class="panel"><h1>錯題回顧</h1><p>目前保留最近 ${progress.wrongs.length} 題錯題。</p><button id="clear" class="ghost">清除錯題</button></section><section>${progress.wrongs.length?progress.wrongs.slice().reverse().map(w=>`<article class="wrong"><small>${w.theme}｜${w.level}</small><h3>${w.q}</h3><p>你的答案：${w.selected}</p><p>正確答案：${w.answer}</p><p>${w.exp}</p><small>${w.ref}</small></article>`).join(''):'<p class="empty">目前沒有錯題。</p>'}</section></main>`;document.querySelector('#back').onclick=home;document.querySelector('#clear').onclick=()=>{progress.wrongs=[];save();wrongPage()}}
function certPage(){let st=stats(),ti=tier(st.pct);if(!st.all){alert('請先完成全部關卡');return}if(!ti){alert('目前未達70分，請重玩弱項提高最佳分數');return}root.innerHTML=`<main class="wrap narrow"><button id="back" class="back">回主題地圖</button><section class="cert"><h1>社群媒體認證中心</h1><p>請輸入姓名，生成你的客製化認證證書。</p><input id="name" placeholder="學生姓名" value="${progress.name||''}"><div class="certificate" style="--c:${ti[1]};--bg:${ti[2]}"><p>社群媒體概論</p><h2>社群媒體核心機制認證證書</h2><h3>${progress.name||'請輸入姓名'}</h3><p>已完成期末闖關複習並通過整體認證</p><b>${ti[0]}</b><strong>${st.score}/${st.max}（${st.pct}%）</strong><small>${new Date().toLocaleDateString('zh-TW')}</small></div><button id="dl">下載SVG證書</button></section></main>`;let input=document.querySelector('#name');input.oninput=()=>{progress.name=input.value;save();document.querySelector('.certificate h3').textContent=input.value||'請輸入姓名'};document.querySelector('#back').onclick=home;document.querySelector('#dl').onclick=()=>downloadCert(input.value,st,ti)}
function downloadCert(name,st,ti){if(!name.trim()){alert('請先輸入姓名');return}let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100"><rect width="1600" height="1100" fill="white"/><rect x="50" y="50" width="1500" height="1000" rx="40" fill="${ti[2]}" stroke="${ti[1]}" stroke-width="10"/><text x="800" y="180" text-anchor="middle" font-size="40" fill="#64748b">社群媒體概論</text><text x="800" y="275" text-anchor="middle" font-size="74" font-weight="800" fill="#0f172a">社群媒體核心機制認證證書</text><text x="800" y="390" text-anchor="middle" font-size="38" fill="#334155">茲證明</text><text x="800" y="510" text-anchor="middle" font-size="82" font-weight="900" fill="#0f172a">${name.replace(/[<>&]/g,'')}</text><text x="800" y="610" text-anchor="middle" font-size="34" fill="#334155">已完成期末闖關複習並通過整體認證</text><text x="800" y="720" text-anchor="middle" font-size="48" font-weight="900" fill="${ti[1]}">${ti[0]}</text><text x="800" y="800" text-anchor="middle" font-size="34" fill="#475569">總成績：${st.score}/${st.max}（${st.pct}%）</text><text x="800" y="930" text-anchor="middle" font-size="26" fill="#64748b">${new Date().toLocaleDateString('zh-TW')}</text></svg>`;let blob=new Blob([svg],{type:'image/svg+xml'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`社群媒體認證證書_${name}.svg`;a.click();URL.revokeObjectURL(url)}
home();
