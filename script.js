/* ===== Data: 5 core activities (edit/add here) ===== */
const ACTS=[
 {t:'ইলম ও তারবিয়াত',s:'জ্ঞানার্জন ও প্রশিক্ষণ',d:'তরুণ সমাজকে ইসলামী আদর্শে গড়ে তোলার লক্ষ্যে সহিহ কোরআন শিক্ষা, হাদিস অধ্যয়ন এবং ইসলামী বই পাঠে উদ্বুদ্ধ করা।',q:'"তোমাদের মধ্যে যারা ঈমান এনেছে এবং যাদের জ্ঞান দান করা হয়েছে, আল্লাহ তাদের মর্যাদা বহুগুণ বাড়িয়ে দেবেন।"',qr:'সূরা মুজাদালাহ: ১১',h:'"জ্ঞান অর্জন করা প্রত্যেক মুসলিমের ওপর ফরজ।"',hr:'সুনানে ইবনে মাজাহ: ২২৪, সহিহ'},
 {t:'আমল ও তাযকিয়াহ',s:'আমল ও আত্মশুদ্ধি',d:'রাসূলুল্লাহ (সা.)-এর সুন্নাতের আলোকে জীবনযাপন, পাঁচ ওয়াক্ত সালাত মসজিদে জামাতে আদায় এবং যাবতীয় পাপাচার বর্জনের মাধ্যমে আত্মশুদ্ধির চেষ্টা।',q:'"নিশ্চয়ই সে সফলকাম হয়েছে, যে নিজের আত্মাকে পবিত্র করেছে।"',qr:'সূরা শামস: ৯',h:'"নিশ্চয়ই আল্লাহ তোমাদের চেহারা ও সম্পদের দিকে তাকান না, বরং তোমাদের অন্তর ও আমলের দিকে তাকান।"',hr:'সহিহ মুসলিম: ২৫৬৪'},
 {t:'দাওয়াত ও তাবলীগ',s:'সৎ কাজের আদেশ',d:'"সৎ কাজের আদেশ ও অসৎ কাজের নিষেধ"-এর নীতি অবলম্বন করে এলাকার প্রতিটি যুবককে দ্বীনের পথে আহ্বান করা এবং মসজিদে ইবাদতের পরিবেশ সুন্দর করা।',q:'"আর তোমাদের মধ্যে এমন একটি দল থাকা উচিত, যারা কল্যাণের দিকে আহ্বান করবে, সৎ কাজের আদেশ দেবে এবং অসৎ কাজে নিষেধ করবে। আর তারাই সফলকাম।"',qr:'সূরা আল-ইমরান: ১০৪',h:'"(আমার পক্ষ থেকে) একটি আয়াত হলেও তা মানুষের কাছে পৌঁছে দাও।"',hr:'সহিহ বুখারী: ৩৪৬১'},
 {t:'খিদমাতুল খালক',s:'সমাজসেবা ও জনকল্যাণ',d:'সমাজের অসহায়, দরিদ্র ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো। চিকিৎসায় সহায়তা, রক্তদান, শীতবস্ত্র বিতরণ এবং মসজিদ ও রাস্তাঘাট পরিষ্কার-পরিচ্ছন্ন রাখা।',q:'"তোমরা সৎকর্ম ও তাকওয়ার কাজে পরস্পরকে সাহায্য করো, কিন্তু পাপ ও সীমালঙ্ঘনের কাজে একে অপরকে সাহায্য করো না।"',qr:'সূরা আল-মায়িদাহ: ২',h:'"মানুষের মধ্যে সেই ব্যক্তি সর্বোত্তম, যে মানুষের জন্য সবচেয়ে বেশি উপকারী।"',hr:'আল-মু\'জামুল আওসাত লিত তাবারানি: ৫৭৮৭, সহিহ'},
 {t:'তানজিম',s:'সুসংগঠিত ভ্রাতৃত্ববোধ',d:'যেসব যুবক আমাদের লক্ষ্য-উদ্দেশ্যের সাথে একমত, তাদেরকে এক ছাতার নিচে এনে সুসংগঠিত করা এবং পারস্পরিক ভ্রাতৃত্ববোধ ও শৃঙ্খলা প্রতিষ্ঠা করা।',q:'"আর তোমরা সকলে একত্রে আল্লাহর রজ্জুকে (কুরআন ও দ্বীনকে) শক্তভাবে আঁকড়ে ধরো এবং পরস্পর বিচ্ছিন্ন (দলাদলি) হয়ো না।"',qr:'সূরা আল-ইমরান: ১০৩',h:'"জামা\'আতের (সংঘবদ্ধ দলের) ওপর আল্লাহর হাত (রহমত ও সাহায্য) থাকে।"',hr:'সুনানে তিরমিজি: ২১৬৬, সহিহ'}
];
const $=s=>document.querySelector(s);
const bn=n=>String(n+1).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);

/* Render cards + navbar dropdown */
$('#actGrid').innerHTML=ACTS.map((a,i)=>`<button onclick="showAct(${i})" class="text-left bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition p-6 border-b-4 border-gold">
 <span class="inline-flex w-10 h-10 rounded-full bg-g text-white items-center justify-center font-bold mb-3">${bn(i)}</span>
 <h3 class="font-bold text-xl text-g">${a.t}</h3><p class="text-gold font-medium mb-2">${a.s}</p><p class="text-sm text-gray-600">${a.d.slice(0,80)}… <u>বিস্তারিত</u></p></button>`).join('');
$('#navActs').innerHTML=ACTS.map((a,i)=>`<a href="#activities" onclick="showAct(${i})" class="block px-4 py-2 hover:bg-cream">${bn(i)}) ${a.t}</a>`).join('');

/* Modals */
function open(id){document.querySelectorAll('#detailModal,#joinModal,#msgModal,#adminModal,#membersModal').forEach(m=>m.classList.add('hidden'));$(id).classList.remove('hidden')}
function showAct(i){const a=ACTS[i];
 $('#detailBody').innerHTML=`<h3 class="text-2xl font-bold text-g">${a.t}</h3><p class="text-gold mb-3">${a.s}</p><p class="mb-4 leading-7">${a.d}</p>
 <div class="bg-cream rounded p-3 mb-3"><b>কুরআনের আয়াত:</b><p>${a.q}</p><i class="text-sm">(${a.qr})</i></div>
 <div class="bg-cream rounded p-3"><b>হাদিস:</b><p>${a.h}</p><i class="text-sm">(${a.hr})</i></div>`;
 open('#detailModal');}
document.querySelectorAll('.joinBtn').forEach(b=>b.onclick=e=>{e.preventDefault();open('#joinModal')});
document.querySelectorAll('.closeM').forEach(b=>b.onclick=()=>document.querySelectorAll('#detailModal,#joinModal,#msgModal,#adminModal,#membersModal').forEach(m=>m.classList.add('hidden')));
['#detailModal','#joinModal','#membersModal'].forEach(id=>$(id).onclick=e=>{if(e.target.id===id.slice(1))e.target.classList.add('hidden')});

/* ===== Social links: paste your page URLs here ===== */
const SOCIAL={facebook:'https://www.facebook.com/share/1cxM5V63tb/',youtube:'https://www.youtube.com/',twitter:'https://x.com/'};
document.querySelectorAll('[data-soc]').forEach(a=>{const u=SOCIAL[a.dataset.soc];if(u)a.href=u;else a.onclick=e=>{e.preventDefault();alert('এই লিংকটি এখনো যুক্ত করা হয়নি')}});

/* ===== Messages, applications & admin (uses the page's db + user capabilities) ===== */
let db=null,usr=null,isAdmin=false;
(async()=>{try{if(!window.claude)return;db=await claude.use('db');usr=await claude.use('user');if(usr)isAdmin=await usr.canEdit()||await usr.isOwner()}catch(e){}})();
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const uid=()=>Date.now()+'_'+Math.random().toString(36).slice(2,7);
async function put(c,f){if(sb){const{error}=await sb.from(c).insert({data:f});if(error)throw error;return}const ref=db.doc(c+'/'+await usr.id());const p={['m'+uid()]:f};try{await ref.update(p)}catch(x){await ref.set(p)}}
document.querySelectorAll('.msgBtn').forEach(b=>b.onclick=e=>{e.preventDefault();open('#msgModal')});
$('#msgForm').onsubmit=async e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));f.at=Date.now();const st=$('#msgSt');
 try{initSb();if(!sb&&(!db||!usr))throw 0;await put('messages',f);st.textContent='✅ বার্তা পাঠানো হয়েছে। জাযাকাল্লাহ!';e.target.reset()}
 catch(x){location.href='mailto:info@alaqsayouth.org?subject='+encodeURIComponent('বার্তা: '+f.name)+'&body='+encodeURIComponent(f.message+'\n\n'+f.name+' | '+f.contact);st.textContent='ইমেইল অ্যাপে খোলা হচ্ছে…'}};
/* save membership applications too */
/* ===== Supabase config — paste YOUR values here ===== */
const SUPABASE_URL='https://sninepaxxymfssjuweup.supabase.co';            // e.g. https://abcdxyz.supabase.co
const SUPABASE_KEY='sb_publishable_rypLxFHspafTM5AnYPnX7A_nMxzCCok'; // publishable / anon key ONLY (never service_role)
var sb=null;
function initSb(){if(sb)return sb;try{if(window.supabase&&/^https:\/\/.+\.supabase\.co/.test(SUPABASE_URL)&&SUPABASE_KEY.length>20&&!/PASTE/.test(SUPABASE_KEY))sb=supabase.createClient(SUPABASE_URL,SUPABASE_KEY,{auth:{persistSession:true,autoRefreshToken:true}})}catch(x){console.error(x)}return sb}
initSb();

/* ===== Admin login (Supabase Auth) + admin panel ===== */
const AB=()=>$('#adminBody');
function adminLogin(msg){
 AB().innerHTML=`<form id="loginForm" class="space-y-3 max-w-sm mx-auto" autocomplete="on">
  <div class="text-center mb-2"><div class="w-14 h-14 rounded-full bg-g text-gold text-2xl flex items-center justify-center mx-auto mb-2">🔐</div><p class="text-gray-500 text-base">অ্যাডমিন ও অনুমোদিত সদস্যদের সাইন ইন</p></div>
  <label class="block"><span class="text-base font-semibold text-g">ইমেইল</span><input id="lgEmail" type="email" name="email" required autocomplete="username" placeholder="admin@example.com" class="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-gold"></label>
  <label class="block"><span class="text-base font-semibold text-g">পাসওয়ার্ড</span>
   <span class="relative block"><input id="lgPass" type="password" name="password" required minlength="6" autocomplete="current-password" placeholder="••••••••" class="w-full border rounded-lg p-3 pr-12 mt-1 focus:outline-none focus:ring-2 focus:ring-gold"><button type="button" id="lgEye" class="absolute right-3 top-1/2 -translate-y-1/4 text-xl" aria-label="Show password">👁</button></span></label>
  <button id="lgBtn" class="w-full bg-g hover:bg-gold text-white font-bold py-3 rounded-lg transition">সাইন ইন</button>
  <p id="lgMsg" class="text-center text-base ${msg?'text-red-600':''}">${msg||''}</p></form>`;
 $('#lgEye').onclick=()=>{const p=$('#lgPass');p.type=p.type==='password'?'text':'password'};
 $('#loginForm').onsubmit=async e=>{e.preventDefault();const bt=$('#lgBtn'),m=$('#lgMsg');
  bt.disabled=true;bt.textContent='অপেক্ষা করুন…';m.className='text-center text-base text-gray-500';m.textContent='';
  try{const{data,error}=await sb.auth.signInWithPassword({email:$('#lgEmail').value.trim(),password:$('#lgPass').value});
   if(error)throw error;route(data.session.user)}
  catch(x){bt.disabled=false;bt.textContent='সাইন ইন';m.className='text-center text-base text-red-600';
   const t=(x&&x.message)||String(x);console.error('Supabase login error:',x);
   m.textContent=/invalid login/i.test(t)?'ইমেইল বা পাসওয়ার্ড ভুল হয়েছে (বা এই ইউজার Supabase-এ তৈরি করা হয়নি)।':/confirm/i.test(t)?'ইমেইল এখনো কনফার্ম করা হয়নি। Supabase-এ ইউজারটি Confirm করুন।':/fetch|network|load failed/i.test(t)?'Supabase-এর সাথে সংযোগ করা যায়নি। ইন্টারনেট চেক করুন এবং ফাইলটি সরাসরি ব্রাউজারে (Chrome) খুলুন, প্রিভিউতে নয়।':'লগইন ব্যর্থ: '+t}}}
async function route(user){
 const{data:ia}=await sb.rpc('is_admin');if(ia)return adminPanel(user);
 const{data:p}=await sb.from('profiles').select('status').eq('id',user.id).maybeSingle();const st=p&&p.status;
 AB().innerHTML=`<div class="text-center py-4"><p class="text-base mb-2">✅ <b>${esc(user.email)}</b></p><p class="text-base mb-3 ${st==='approved'?'text-green-700':'text-gray-600'}">${st==='approved'?'আপনি অনুমোদিত সদস্য। জাযাকাল্লাহ!':st==='rejected'?'দুঃখিত, আপনার আবেদন গ্রহণ করা হয়নি।':'আপনার আবেদন অ্যাডমিনের অনুমোদনের অপেক্ষায় আছে।'}</p><button id="lgOut" class="bg-red-600 text-white px-4 py-1.5 rounded-full">সাইন আউট</button></div>`;
 $('#lgOut').onclick=async()=>{await sb.auth.signOut();adminLogin()}}
async function adminPanel(user){
 AB().innerHTML=`<div class="flex items-center justify-between gap-2 mb-3 bg-cream rounded-lg p-3"><span class="text-base">✅ অ্যাডমিন: <b>${esc(user.email)}</b></span><button id="lgOut" class="bg-red-600 text-white px-4 py-1.5 rounded-full text-base">সাইন আউট</button></div>
  <button id="edOn" class="w-full bg-gold text-white font-bold py-2 rounded-lg mb-3">✏️ ওয়েবসাইট এডিট মোড চালু করুন</button>
  <h4 class="font-bold mt-2 text-base">সদস্য আবেদন ও সদস্য</h4><div id="adm-members">লোড হচ্ছে…</div>
  <h4 class="font-bold mt-4 text-base">অ্যাডমিন</h4><div id="adm-admins">লোড হচ্ছে…</div>
  <h4 class="font-bold mt-4 text-base">বার্তা</h4><div id="adm-messages">লোড হচ্ছে…</div>`;
 $('#lgOut').onclick=async()=>{await sb.auth.signOut();adminLogin()};
 $('#edOn').onclick=()=>{$('#adminModal').classList.add('hidden');startEdit()};
 const rpcDo=async(fn,a,reload)=>{const{error}=await sb.rpc(fn,a);if(error)alert('ব্যর্থ: '+error.message);reload()};
 async function renderMembers(){const el=$('#adm-members');
  const{data,error}=await sb.from('profiles').select('*').order('created_at',{ascending:false});
  if(error){el.innerHTML='<p class="text-red-600">লোড করা যায়নি: '+esc(error.message)+'<br><small>setup.sql চালানো হয়েছে কি না দেখুন।</small></p>';return}
  const L={pending:'⏳ অপেক্ষায়',approved:'✅ সদস্য',rejected:'❌ প্রত্যাখ্যাত'};
  el.innerHTML=data.length?data.map(r=>`<div class="border rounded p-2 my-1 ${r.status==='approved'?'bg-green-50':''}"><small class="text-gray-400">${new Date(r.created_at).toLocaleString('bn-BD')} · ${L[r.status]||r.status}</small><br><b>${esc(r.name)}</b> · পিতা: ${esc(r.father)} · ${esc(r.email)} · ${esc(r.mobile)} · ${esc(r.address)}<div class="mt-2 flex gap-2 flex-wrap">${r.status!=='approved'?`<button data-id="${r.id}" data-st="approved" class="stBtn px-3 py-1 rounded-full text-white bg-g">অনুমোদন করুন</button>`:`<button data-id="${r.id}" data-st="pending" class="stBtn px-3 py-1 rounded-full text-white bg-gray-500">সদস্যপদ বাতিল</button>`}${r.status==='pending'?`<button data-id="${r.id}" data-st="rejected" class="stBtn px-3 py-1 rounded-full text-white bg-yellow-600">প্রত্যাখ্যান</button>`:''}<button data-id="${r.id}" class="delBtn px-3 py-1 rounded-full bg-red-600 text-white">মুছুন</button></div></div>`).join(''):'<p class="text-gray-400">কোনো আবেদন নেই</p>';
  el.querySelectorAll('.stBtn').forEach(x=>x.onclick=async()=>{x.disabled=true;const{error}=await sb.from('profiles').update({status:x.dataset.st}).eq('id',x.dataset.id);if(error)alert('ব্যর্থ: '+error.message);renderMembers()});
  el.querySelectorAll('.delBtn').forEach(x=>x.onclick=()=>{if(confirm('এই সদস্য/আবেদন ও তার অ্যাকাউন্ট সম্পূর্ণ মুছে ফেলবেন?'))rpcDo('delete_member',{p_id:x.dataset.id},renderMembers)})}
 async function renderAdmins(){const el=$('#adm-admins');const{data,error}=await sb.rpc('list_admins');
  if(error){el.innerHTML='<p class="text-red-600">'+esc(error.message)+'</p>';return}
  el.innerHTML=(data||[]).map(r=>`<div class="border rounded p-2 my-1 flex items-center justify-between gap-2"><span>${esc(r.email)}</span>${r.user_id===user.id?'<small class="text-gray-400">আপনি</small>':`<button data-em="${esc(r.email)}" class="rmAd px-3 py-1 rounded-full bg-red-600 text-white">সরান</button>`}</div>`).join('')+`<div class="flex gap-2 mt-2"><input id="adEm" type="email" placeholder="নতুন অ্যাডমিনের ইমেইল (আগে অ্যাকাউন্ট থাকতে হবে)" class="flex-1 border rounded p-2"><button id="adAdd" class="bg-g text-white px-4 rounded">যোগ করুন</button></div>`;
  el.querySelectorAll('.rmAd').forEach(x=>x.onclick=()=>{if(confirm(x.dataset.em+' কে অ্যাডমিন থেকে সরাবেন?'))rpcDo('remove_admin',{p_email:x.dataset.em},renderAdmins)});
  $('#adAdd').onclick=()=>{const v=$('#adEm').value.trim();if(v)rpcDo('add_admin',{p_email:v},()=>{renderAdmins();renderMembers()})}}
 async function renderMsgs(){const el=$('#adm-messages');const{data,error}=await sb.from('messages').select('id,created_at,data').order('created_at',{ascending:false});
  if(error){el.innerHTML='<p class="text-red-600">লোড করা যায়নি: '+esc(error.message)+'</p>';return}
  el.innerHTML=data.length?data.map(r=>`<div class="border rounded p-2 my-1"><small class="text-gray-400">${new Date(r.created_at).toLocaleString('bn-BD')}</small><br>${Object.entries(r.data||{}).filter(([k])=>k!=='at').map(([k,v])=>`<b>${esc(k)}:</b> ${esc(v)}`).join(' · ')}<div class="mt-2"><button data-id="${r.id}" class="dm px-3 py-1 rounded-full bg-red-600 text-white">মুছুন</button></div></div>`).join(''):'<p class="text-gray-400">কিছু নেই</p>';
  el.querySelectorAll('.dm').forEach(x=>x.onclick=async()=>{if(!confirm('বার্তাটি মুছবেন?'))return;await sb.from('messages').delete().eq('id',x.dataset.id);renderMsgs()})}
 renderMembers();renderAdmins();renderMsgs()}
/* ===== Members list (public, names only) ===== */
async function loadMembers(){const L=$('#memList'),C=$('#memCount');L.innerHTML='<p class="text-gray-500">লোড হচ্ছে…</p>';C.textContent='';
 initSb();if(!sb){L.innerHTML='<p class="text-red-600">তালিকা লোড করা যায়নি (Supabase সংযুক্ত নয়)।</p>';return}
 const{data,error}=await sb.rpc('get_members');
 if(error){console.error(error);L.innerHTML='<p class="text-red-600">তালিকা লোড করা যায়নি।</p>';return}
 if(!data.length){L.innerHTML='<p class="text-gray-400">এখনো কোনো সদস্য যুক্ত হয়নি।</p>';return}
 C.textContent='মোট সদস্য: '+String(data.length).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d])+' জন';
 L.innerHTML=data.map((m,i)=>`<div class="flex items-center gap-3 border rounded-lg p-2.5"><span class="shrink-0 w-8 h-8 rounded-full bg-g text-white text-sm font-bold flex items-center justify-center">${bn(i)}</span><span class="font-medium">${esc(m.name)}</span></div>`).join('')}
document.querySelectorAll('.membersBtn').forEach(b=>b.onclick=e=>{e.preventDefault();document.getElementById('mobile').classList.add('hidden');open('#membersModal');loadMembers()});
document.querySelectorAll('.adminBtn').forEach(b=>b.onclick=async e=>{e.preventDefault();open('#adminModal');initSb();
 if(!sb){AB().innerHTML='<p class="text-red-600">'+(window.supabase?'Supabase URL/Key ঠিক নেই।':'Supabase লাইব্রেরি লোড হয়নি — ইন্টারনেট চেক করুন এবং ফাইলটি সরাসরি ব্রাউজারে (Chrome) খুলুন।')+'</p>';return}
 AB().innerHTML='<p class="text-center text-gray-500">লোড হচ্ছে…</p>';
 try{const{data:{session}}=await sb.auth.getSession();session?route(session.user):adminLogin()}catch(x){adminLogin()}});

/* ===== আমাদের পরিচিতি: book viewer (edit text in BOOK array) ===== */
const H=t=>`<h3 class="text-2xl font-bold text-g border-b-4 border-gold inline-block mb-4 pb-1">${t}</h3>`;
const It=(n,t,d)=>`<div class="flex gap-3 bg-white border border-gold/50 rounded-xl p-3 mb-3"><span class="shrink-0 w-9 h-9 rounded-full bg-g text-gold font-bold flex items-center justify-center">${n}</span><div>${t?`<b class="text-g">${t}</b> `:''}${d||''}</div></div>`;
const Tag=t=>`<span class="inline-block bg-g text-white font-bold px-3 rounded mr-1">${t}</span>`;
const BOOK=[
`<div class="text-center pt-4"><img src="${document.querySelector('header img').src}" class="w-28 mx-auto mb-4"><div class="text-g font-bold text-4xl mb-6 border-y-4 border-gold py-3">পরিচিতি</div><h2 class="text-4xl font-bold text-g">আল আকসা</h2><h2 class="text-4xl font-bold text-gold mb-4">ইসলামী যুব সংঘ</h2><p class="border-t-2 border-gold pt-3">চর রাঘবপুর বোরর চর সদর ময়মনসিংহ</p></div>`,
`${H('প্রারম্ভিকা')}<p class="mb-4">যৌবনকাল মহান আল্লাহর দেওয়া এক অমূল্য নিয়ামত এবং মানবজীবনের শ্রেষ্ঠ সময়। একটি আদর্শ সমাজ বিনির্মাণে সৎ ও চরিত্রবান যুবশক্তির কোনো বিকল্প নেই। কিন্তু বর্তমান বিশ্বব্যবস্থা ও আধুনিকতার নামে অপসংস্কৃতির আগ্রাসনে আমাদের যুবসমাজের একটি বড় অংশ আজ পথভ্রান্ত। নৈতিক অবক্ষয়, মাদকাসক্তি, কিশোর গ্যাং এবং দ্বীনহীন জীবনযাপনের ফলে সমাজে অশান্তি ও অস্থিরতা বিরাজ করছে। আমরা ভুলে যেতে বসেছি একজন মুসলিম যুবক হিসেবে আমাদের দায়িত্ব ও কর্তব্য।</p><p class="mb-4">এই চরম বাস্তবতায় ময়মনসিংহ সদর উপজেলার বোরর চর ইউনিয়নের চর রাঘবপুর গ্রামের একদল দ্বীনদার ও সমাজসচেতন যুবকের মনে একটি পবিত্র চেতনার উন্মেষ ঘটে। যুবসমাজকে বিপথগামিতা থেকে রক্ষা করে ইসলামের সুমহান আদর্শে উজ্জীবিত করা এবং আর্তমানবতার সেবায় নিজেদের নিয়োজিত করার দৃঢ় প্রত্যয় নিয়ে আত্মপ্রকাশ করে <b>"আল-আকসা ইসলামী যুব সংঘ"</b>।</p><p>এটি গতানুগতিক কোনো আড্ডার প্ল্যাটফর্ম নয়; বরং আল্লাহভীরু, সৎ ও দক্ষ যুবশক্তি গঠনের মাধ্যমে চর রাঘবপুরকে একটি আদর্শ ও মডেল এলাকা হিসেবে গড়ে তোলাই আমাদের মূল লক্ষ্য।</p>`,
`${H('লক্ষ্য ও উদ্দেশ্য')}<p class="mb-3">${Tag('লক্ষ্য:')} যুবসমাজকে যাবতীয় অপসংস্কৃতি ও অবক্ষয় থেকে মুক্ত করে কোরআন-সুন্নাহর আলোকে একটি সুশৃঙ্খল, ভ্রাতৃত্বপূর্ণ ও কল্যাণময় সমাজ গঠন করা।</p><p class="mb-3">${Tag('উদ্দেশ্য:')} মহান আল্লাহ তা'আলার সন্তুষ্টি অর্জন।</p><p class="mb-4 text-center font-semibold">এই লক্ষ্য হাসিলের জন্য 'আল-আকসা ইসলামী যুব সংঘ' প্রণয়ন করেছে সুচিন্তিত ৫ দফা কর্মসূচি।</p><h4 class="text-center font-bold text-white bg-g rounded-full py-1 mb-3">কর্মসূচি</h4>${It('১','ইলম ও তরবিয়ত','(জ্ঞানার্জন ও প্রশিক্ষণ)')}${It('২','আমল ও তাযকিয়াহ','(আমল ও আত্মশুদ্ধি)')}${It('৩','দাওয়াত ও তাবলীগ','(সৎ কাজের আদেশ)')}${It('৪','খিদমাতুল খালক','(সমাজসেবা ও জনকল্যাণ)')}${It('৫','তানজিম','(সুসংগঠিত ভ্রাতৃত্ববোধ)')}`,
`<h4 class="text-center font-bold text-white bg-g rounded-full py-1 mb-3">কর্মসূচির বিস্তারিত</h4>${It('১','ইলম ও তরবিয়ত:','তরুন সমাজকে ইসলামী আদর্শে গড়ে তোলার লক্ষ্যে সহিহ কোরআন শিক্ষা, হাদিস অধ্যয়ন এবং ইসলামী বই পাঠে উদ্বুদ্ধ করা।')}${It('২','আমল ও তায়কিয়াহ:','রাসূলুল্লাহ (সা.)-এর সুন্নাতের আলোকে জীবনযাপন, পাঁচ ওয়াক্ত সালাত মসজিদে জামাতের সাথে আদায় এবং যাবতীয় পাপাচার বর্জনের মাধ্যমে আত্মশুদ্ধির চেষ্টা চালানো।')}${It('৩','দাওয়াত ও তাবলীঘ:',"'সৎ কাজের আদেশ ও অসৎ কাজের নিষেধ'-এর নীতি অবলম্বন করে এলাকার প্রতিটি যুবককে দ্বীনের পথে আহ্বান করা এবং মসজিদে ইবাদতের পরিবেশ সুন্দর করা।")}`,
`${It('৪','খিদমাতুল খালক (সমাজসেবা):','সমাজের অসহায়, দরিদ্র ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো। চিকিৎসায় সহায়তা, রক্তদান, শীতবস্ত্র বিতরণ এবং এলাকার মসজিদ ও রাস্তাঘাট পরিষ্কার-পরিচ্ছন্ন রাখার সার্বিক চেষ্টা চালানো।')}${It('৫','তানজিম (সংগঠন):','যে সকল যুবক আমাদের লক্ষ্য-উদ্দেশ্যের সাথে একমত, তাদেরকে এক ছাতার নিচে এনে সুসংগঠিত করা এবং পারস্পরিক ভ্রাতৃত্ববোধ ও শৃঙ্খলা প্রতিষ্ঠা করা।')}<h4 class="text-center font-bold text-white bg-g rounded-full py-1 my-3">বৈশিষ্ট্য</h4>${It('✦','অরাজনৈতিক কাফেলা:','প্রচলিত রাজনৈতিক স্বার্থের ঊর্ধ্বে সম্পূর্ণ অরাজনৈতিক ও দ্বীনি যুব কাফেলা।')}${It('✦','জনকল্যাণমুখী:','এটি নিছক কোনো আড্ডার সংগঠন নয়, বরং সমাজ সংস্কার ও জনকল্যাণে নিবেদিত প্রাণ একটি প্ল্যাটফর্ম।')}${It('✦','মসজিদ কেন্দ্রিকতা:','সমাজের প্রাণকেন্দ্র হিসেবে মসজিদের উন্নয়ন ও আবাদের একটি ঐকান্তিক প্রয়াস।')}`,
`${H('প্রিয় যুব ভাইয়েরা!')}<p class="mb-4">আসুন, মহান আল্লাহর দেওয়া জীবন-যৌবন, শ্রম, মেধা ও শক্তিকে তাঁরই নির্দেশিত পথে পরিচালিত করি। অন্যায়, অসত্য, মাদক ও অপসংস্কৃতির বিরুদ্ধে এক বলিষ্ঠ পদক্ষেপ গ্রহণ করি। একটি সুন্দর সমাজ ও নিজের আখেরাতের স্থায়ী শান্তির লক্ষ্যে আল-আকসা ইসলামী যুব সংঘ এর পতাকাতলে ঐক্যবদ্ধ হই এবং সমাজ সংস্কারের এই মিছিলে শরিক হই। আল্লাহ আমাদের কবুল করুন। আমিন।</p><h4 class="text-center font-bold text-white bg-g rounded-full py-1 mb-2">সাংগঠনিক কাঠামো</h4><p class="mb-2">সুশৃঙ্খলভাবে কাজ পরিচালনার জন্য আমাদের ৩টি স্তর রয়েছে:</p>${It('১','উপদেষ্টা পরিষদ:','এলাকার সম্মানিত আলেম-ওলামা ও মুরুব্বিয়ান।')}${It('২','কার্যনির্বাহী পরিষদ:','সংগঠনের মূল চালিকাশক্তি ও দায়িত্বশীলবৃন্দ।')}${It('৩','সাধারণ সদস্য:','সংগঠনের তালিকাভুক্ত যুবশক্তিবৃন্দ।')}<h4 class="text-center font-bold text-white bg-g rounded-full py-1 my-3">যোগদানের নিয়ম</h4><p>যদি কোনো যুবক আমাদের লক্ষ্য-উদ্দেশ্য, কর্মসূচি ও গঠনতন্ত্রের প্রতি আস্থাবান হন এবং সমাজকল্যাণমূলক কার্যক্রমে অংশগ্রহণের প্রতিশ্রুতি দেন, তবে তিনি নির্ধারিত ফরম পূরণের মাধ্যমে এই সংঘের সদস্য হতে পারবেন।</p>`,
`${H('একজন কর্মীর দৈনন্দিন কর্মসূচি')}${It('১','','পাঁচ ওয়াক্ত সালাত জামাতের সাথে আদায় করা এবং ফজর শেষে কোরআন তিলাওয়াতের অভ্যাস গড়ে তোলা।')}${It('২','','নিয়মিত অর্থসহ কোরআন, হাদিস এবং মাসআলা-মাসায়েল অধ্যয়ন করা।')}${It('৩','','দৈনিক অন্তত একজন বন্ধু বা প্রতিবেশীকে ভালো কাজের দাওয়াত দেওয়া।')}${It('৪','','পারস্পরিক লেনদেনে স্বচ্ছতা রাখা এবং আচার-আচরণ মার্জিত করা।')}${It('৫','','প্রতিদিন অন্তত একটি ভালো কাজ করা (পিতা-মাতার খেদমত, অন্যের উপকার বা রাস্তা থেকে কষ্টদায়ক বস্তু সরানো)।')}${It('৬','','ব্যক্তিগত দক্ষতা উন্নয়নে মনোযোগী হওয়া এবং হালাল উপার্জনের চেষ্টা করা।')}${It('৭',"","রাতে ঘুমানোর পূর্বে সারাদিনের কাজের 'মুহাসাবা' (আত্মপর্যালোচনা) করা।")}<div class="bg-g text-white rounded-xl p-4 mt-4 text-center"><div class="text-gold font-bold mb-1">বিস্তারিত জানতে ও যোগাযোগ করতে:</div><div class="text-2xl font-bold">আল-আকসা ইসলামী যুব সংঘ</div><div>📍 চর রাঘবপুর, বোরর চর, সদর ময়মনসিংহ, ময়মনসিংহ।</div><div>📞 মোবাইল: <a href="tel:01990152283">০১৯৯০-১৫২২৮৩</a>, <a href="tel:01826804926">০১৮২৬-৮০৪৯২৬</a></div></div>`];
const BGP='url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g fill="none" stroke="#166534" stroke-opacity=".16" stroke-width="1.2"><path d="M40 8L48 32L72 40L48 48L40 72L32 48L8 40L32 32Z"/><rect x="20" y="20" width="40" height="40" transform="rotate(45 40 40)"/><circle cx="40" cy="40" r="6"/></g><path d="M0 0h6v6H0zM74 0h6v6h-6zM0 74h6v6H0zM74 74h6v6h-6z" fill="#d4a017" fill-opacity=".3"/></svg>')+'")';
const pageHTML=i=>`<div style="text-align:center;color:#14532d;font-weight:700;border-bottom:2px solid #d4a017;margin-bottom:16px;padding-bottom:6px">☪ আল-আকসা ইসলামী যুব সংঘ ☪</div>${BOOK[i]}<div style="text-align:center;color:#a16207;margin-top:16px;font-size:.85em">— ${bn(i)} —</div>`;
Object.assign($('#bkPage').style,{backgroundImage:BGP,backgroundColor:'#fffdf5',border:'6px double #d4a017'});
let bk=0;
function showBk(d){bk=Math.max(0,Math.min(BOOK.length-1,bk+d));const p=$('#bkPage');p.innerHTML=pageHTML(bk);p.scrollTop=0;p.className=p.className.replace(/pg[FB]/,'');void p.offsetWidth;p.classList.add(d<0?'pgB':'pgF');
 $('#bkNum').textContent='পৃষ্ঠা '+bn(bk)+' / '+bn(BOOK.length-1);$('#bkPrev').disabled=bk===0;$('#bkNext').disabled=bk===BOOK.length-1}
document.querySelectorAll('.bookBtn').forEach(b=>b.onclick=e=>{e.preventDefault();bk=0;$('#bookModal').classList.remove('hidden');showBk(0)});
$('#bkPrev').onclick=()=>showBk(-1);$('#bkNext').onclick=()=>showBk(1);$('#bkClose').onclick=()=>$('#bookModal').classList.add('hidden');
document.addEventListener('keydown',e=>{if($('#bookModal').classList.contains('hidden'))return;if(e.key==='ArrowLeft')showBk(-1);if(e.key==='ArrowRight')showBk(1);if(e.key==='Escape')$('#bookModal').classList.add('hidden')});

/* ===== Download "আমাদের পরিচিতি" as PDF (all pages) or PNG image (current page) ===== */
async function saveFile(name,blob){try{const d=window.claude&&await claude.use('downloads');if(d){await d.save({filename:name,data:blob});return}}catch(e){if(e&&e.code==='declined')return}
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}
async function shot(i){const box=document.createElement('div');box.style.cssText='position:fixed;left:-10000px;top:0;width:794px';
 box.innerHTML=`<div style="box-sizing:border-box;min-height:1123px;border:6px double #d4a017;background:#fffdf5 ${BGP};padding:48px;font-size:18px;line-height:2;color:#1f2937;font-family:'Times New Roman',SutonnyOMJ,'Hind Siliguri',serif">${pageHTML(i)}</div>`;
 document.body.appendChild(box);await (document.fonts&&document.fonts.ready);
 const c=await html2canvas(box.firstChild,{scale:2,backgroundColor:'#fffdf5',useCORS:true});box.remove();return c}
const bkSt=m=>$('#bkSt').textContent=m;
$('#bkImg').onclick=async()=>{try{bkSt('ছবি তৈরি হচ্ছে…');const c=await shot(bk);const b=await new Promise(r=>c.toBlob(r,'image/png'));await saveFile('al-aqsa-porichiti-'+(bk+1)+'.png',b);bkSt('')}catch(e){bkSt('❌ ডাউনলোড করা যায়নি, আবার চেষ্টা করুন')}};
$('#bkPdf').onclick=async()=>{try{let doc;for(let i=0;i<BOOK.length;i++){bkSt('পিডিএফ তৈরি হচ্ছে… '+bn(i)+'/'+bn(BOOK.length-1));const c=await shot(i);const h=Math.round(c.height*794/c.width);
 if(!doc)doc=new jspdf.jsPDF({unit:'px',format:[794,h],hotfixes:['px_scaling']});else doc.addPage([794,h]);doc.addImage(c.toDataURL('image/jpeg',.92),'JPEG',0,0,794,h)}
 await saveFile('al-aqsa-porichiti.pdf',doc.output('blob'));bkSt('')}catch(e){bkSt('❌ ডাউনলোড করা যায়নি, আবার চেষ্টা করুন')}};

/* ===== Hero slider ===== */
let sl=0;const SL=document.querySelectorAll('.slide'),DT=document.querySelectorAll('.dot');
const N=SL.length,TR=document.createElement('div');TR.id='slTrack';const SW=document.getElementById('slides');
SL.forEach(s=>{s.classList.remove('hidden');TR.appendChild(s)});
const cl=SL[0].cloneNode(true);cl.setAttribute('aria-hidden','true');TR.appendChild(cl);SW.appendChild(TR);
let pos=0,busy=false;
function mv(p,anim){TR.style.transition=anim?'':'none';TR.style.transform='translateX(-'+p*100+'%)';if(!anim){void TR.offsetWidth;TR.style.transition=''}}
function dots(){const k=((pos%N)+N)%N;DT.forEach((x,i)=>{x.classList.toggle('bg-gold',i===k);x.classList.toggle('bg-gray-300',i!==k)})}
function go(d){if(busy)return;
 if(d===0){mv(0,true);dots();return}
 if(d>0){pos++;busy=true;mv(pos,true);dots();setTimeout(()=>{if(pos===N){pos=0;mv(0,false)}busy=false},950)}
 else{if(pos===0){pos=N;mv(N,false)}requestAnimationFrame(()=>requestAnimationFrame(()=>{pos--;busy=true;mv(pos,true);dots();setTimeout(()=>busy=false,950)}))}}
$('#slPrev').onclick=()=>go(-1);$('#slNext').onclick=()=>go(1);setInterval(()=>go(1),4500);go(0);let tx=0;const sw=$('#slides');sw.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});sw.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>40)go(d<0?1:-1)});

/* Mobile menu */
$('#burger').onclick=()=>$('#mobile').classList.toggle('hidden');
$('#mobile').onclick=e=>{if(e.target.tagName==='A')$('#mobile').classList.add('hidden')};

/* Join form: email+password signup, pending until admin approves */
$('#joinForm').onsubmit=async e=>{e.preventDefault();const form=e.target,ok=$('#okMsg'),btn=form.querySelector('button:not([type=button])');const f=Object.fromEntries(new FormData(form));
 ok.className='text-center text-gray-500';ok.textContent='পাঠানো হচ্ছে…';if(btn)btn.disabled=true;
 try{initSb();if(!sb)throw new Error('Supabase লাইব্রেরি লোড হয়নি — ইন্টারনেট চেক করে পেজ রিফ্রেশ করুন');
  const{data,error}=await sb.auth.signUp({email:f.email.trim(),password:f.password,options:{data:{name:f.name,father:f.father,mobile:f.mobile,address:f.address}}});
  if(error)throw error;
  if(data.user&&data.user.identities&&!data.user.identities.length)throw new Error('already registered');
  if(data.session)await sb.auth.signOut();
  form.reset();ok.className='text-center text-green-700';ok.textContent='জাযাকাল্লাহ! আপনার আবেদন জমা হয়েছে। অ্যাডমিন অনুমোদন করলে আপনি সদস্য হবেন।';
  setTimeout(()=>{$('#joinModal').classList.add('hidden');ok.textContent=''},3500)}
 catch(x){console.error(x);const t=(x&&x.message)||String(x);ok.className='text-center text-red-600';ok.textContent=/already registered/i.test(t)?'এই ইমেইল দিয়ে আগেই আবেদন করা হয়েছে।':/password/i.test(t)?'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের দিন।':'আবেদন পাঠানো যায়নি: '+t}
 if(btn)btn.disabled=false};

/* ===== Admin site editor: edits saved in Supabase table site_content ===== */
const EDSEL='h1,h2,h3,h4,h5,h6,p,li,a,button,label,figcaption',MODS='#detailModal,#joinModal,#msgModal,#adminModal,#membersModal,#bookModal,#edBar,[aria-hidden="true"]';
const ORIG=new Map();let EDIT=false,SELE=null;
document.querySelectorAll(EDSEL).forEach((el,i)=>{if(el.closest(MODS)||el.querySelector(EDSEL+',img'))return;el.dataset.eid='t'+i;ORIG.set('t'+i,el.innerHTML)});
document.querySelectorAll('img').forEach((el,i)=>{if(el.closest(MODS))return;el.dataset.eid='i'+i;ORIG.set('i'+i,el.getAttribute('src'))});
document.querySelectorAll('section[id]').forEach(el=>el.dataset.eid='s-'+el.id);
const Q=id=>document.querySelector('[data-eid="'+id+'"]');
function applyContent(v){Object.entries(v.t||{}).forEach(([id,h])=>{const e=Q(id);if(e)e.innerHTML=h});Object.entries(v.i||{}).forEach(([id,u])=>{const e=Q(id);if(e)e.src=u});(v.h||[]).forEach(id=>{const e=Q(id);if(e){e.dataset.hid=1;e.style.display='none'}});try{cl.innerHTML=SL[0].innerHTML}catch(x){}}
(async()=>{try{initSb();if(!sb)return;const{data}=await sb.from('site_content').select('value').eq('key','page').maybeSingle();if(data&&data.value)applyContent(data.value)}catch(x){console.error(x)}})();
const bs='margin:2px;padding:8px 12px;border-radius:8px;border:0;color:#fff;font-weight:700;cursor:pointer;';
const bar=document.createElement('div');bar.id='edBar';bar.style.cssText='display:none;position:fixed;left:0;right:0;bottom:0;z-index:60;background:#14532d;padding:8px;flex-wrap:wrap;justify-content:center;align-items:center;gap:4px;box-shadow:0 -2px 10px #0006';
bar.innerHTML=`<span style="color:#fde68a;margin:0 8px">এডিট মোড: লেখায় ক্লিক করে বদলান</span><button id="edSave" style="${bs}background:#16a34a">💾 সংরক্ষণ</button><button id="edImg" style="${bs}background:#0284c7">🖼 ছবি বদলান</button><button id="edDel" style="${bs}background:#dc2626">🗑 নির্বাচিত মুছুন</button><button id="edSec" style="${bs}background:#b91c1c">🗑 সেকশন মুছুন</button><button id="edReset" style="${bs}background:#a16207">↺ সব রিসেট</button><button id="edCancel" style="${bs}background:#4b5563">✕ বাতিল</button><input id="edFile" type="file" accept="image/*" style="display:none">`;
document.body.appendChild(bar);
const st=document.createElement('style');st.textContent='.editing [data-eid]{outline:1px dashed #d4a017}.editing img[data-eid]{cursor:pointer}.editing .edSel{outline:3px solid #dc2626!important}body.editing{padding-bottom:70px}';document.head.appendChild(st);
function startEdit(){EDIT=true;SELE=null;document.body.classList.add('editing');document.querySelectorAll('[data-eid^="t"]').forEach(e=>e.contentEditable='true');bar.style.display='flex'}
function stopEdit(){EDIT=false;document.body.classList.remove('editing');document.querySelectorAll('[contenteditable]').forEach(e=>e.removeAttribute('contenteditable'));document.querySelectorAll('.edSel').forEach(e=>e.classList.remove('edSel'));bar.style.display='none'}
document.addEventListener('click',e=>{if(!EDIT||e.target.closest('#edBar'))return;e.preventDefault();e.stopImmediatePropagation();const t=e.target.closest('[data-eid]');document.querySelectorAll('.edSel').forEach(x=>x.classList.remove('edSel'));SELE=t;if(t)t.classList.add('edSel')},true);
const need=()=>{if(!SELE)alert('আগে একটি লেখা, ছবি বা অংশে ক্লিক করুন');return !!SELE};
$('#edDel').onclick=()=>{if(!need())return;SELE.dataset.hid=1;SELE.style.display='none';SELE=null};
$('#edSec').onclick=()=>{if(!need())return;const x=SELE.closest('section[data-eid]');if(!x)return alert('এটি কোনো সেকশনের ভেতরে নয়');if(confirm('পুরো সেকশনটি মুছবেন?')){x.dataset.hid=1;x.style.display='none';SELE=null}};
$('#edImg').onclick=()=>{if(SELE&&SELE.tagName==='IMG')$('#edFile').click();else alert('আগে একটি ছবিতে ক্লিক করুন')};
$('#edFile').onchange=e=>{const f=e.target.files[0];if(!f||!SELE)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,1000/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);SELE.src=c.toDataURL('image/jpeg',.8)};im.src=r.result};r.readAsDataURL(f);e.target.value=''};
$('#edCancel').onclick=()=>location.reload();
$('#edReset').onclick=async()=>{if(!confirm('সব পরিবর্তন মুছে আসল ডিজাইনে ফিরবেন?'))return;const{error}=await sb.from('site_content').delete().eq('key','page');if(error)return alert('ব্যর্থ: '+error.message);location.reload()};
$('#edSave').onclick=async()=>{const v={t:{},i:{},h:[]};document.querySelectorAll('[data-eid]').forEach(e=>{const id=e.dataset.eid;if(e.dataset.hid)v.h.push(id);if(id[0]==='t'&&e.innerHTML!==ORIG.get(id))v.t[id]=e.innerHTML;if(id[0]==='i'&&e.getAttribute('src')!==ORIG.get(id))v.i[id]=e.getAttribute('src')});
 const{error}=await sb.from('site_content').upsert({key:'page',value:v});if(error)return alert('সংরক্ষণ ব্যর্থ: '+error.message);stopEdit();try{cl.innerHTML=SL[0].innerHTML}catch(x){}alert('✅ ওয়েবসাইট সংরক্ষিত হয়েছে')};

document.querySelectorAll('#mobile a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobile').classList.add('hidden')));

/* Installable app: register service worker */
if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
