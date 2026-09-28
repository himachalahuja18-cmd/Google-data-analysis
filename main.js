const $=(s,r=document)=>r.querySelector(s),ic=p=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
// data
const feats=[["Search trend analysis","Seasonality, intent shifts and emerging queries from search data.",'<circle cx="11" cy="11" r="7"/><path d="m21 21-4-4"/>'],["Geospatial insight","Map foot traffic and regional demand with location datasets.",'<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/>'],["Video performance","Retention, engagement and audience cohorts across YouTube data.",'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3Z"/>'],["Analytics pipelines","BigQuery-ready models, tests and dashboards that stay fresh.",'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>']];
$('#feat').innerHTML=feats.map(f=>`<article class="glass card rv"><div class="ic">${ic(f[2])}</div><h3>${f[0]}</h3><p>${f[1]}</p></article>`).join('');
const pr=[["Search intent map","Clustered 2M queries into 14 intent groups to guide a content roadmap.","linear-gradient(135deg,#4b3df2,#1aa06d)"],["Store rating drift","Tracked how Play Store reviews shift after each app release.","linear-gradient(135deg,#e8590c,#d99a00)"],["City demand heatmap","Mapped local search demand against actual store visits.","linear-gradient(135deg,#0d6efd,#4b3df2)"],["Watch-time cohorts","Showed which video lengths keep each audience segment watching.","linear-gradient(135deg,#1aa06d,#0d1220)"]];
$('#proj').innerHTML=pr.map(p=>`<article class="p rv" style="--g:${p[2]}" tabindex="0"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M7 17 17 7M9 7h8v8"/></svg><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('');
const qs=[["Our team finally saw which queries actually drive signups. The report changed our roadmap.","Maya R.","Head of Growth"],["Clean, reproducible and easy to explain to executives. Exactly what we needed.","Daniel K.","Product Analyst"],["The dashboards updated themselves and we stopped arguing over numbers.","Priya S.","Marketing Lead"]];
$('#qs').innerHTML=qs.map(q=>`<figure class="glass q rv" style="margin:0"><p>“${q[0]}”</p><footer><strong>${q[1]}</strong>${q[2]}</footer></figure>`).join('');
const fq=[["What kinds of Google data do you analyze?","Data you own or have permission to use: Search Console, Analytics exports, BigQuery public datasets, Play Console, YouTube Analytics and Maps-related data."],["How long does a project take?","Most projects reach a first insight in about two weeks, with a full report and dashboard shortly after."],["Is my data kept private?","Yes. We work with aggregated or anonymized data where possible and only use sources you are authorized to share."],["What do I receive at the end?","A written report, an interactive dashboard, and the documented queries so your team can reproduce every result."]];
$('#fq').innerHTML=fq.map(q=>`<details class="rv"><summary>${q[0]}</summary><div class="ans"><div><p>${q[1]}</p></div></div></details>`).join('');
// probe
const src={Search:[[42,55,48,70,64,82,90,76],"weekly queries index"],Maps:[[30,38,52,49,66,72,68,88],"weekly visits index"],YouTube:[[60,58,72,80,77,95,88,100],"weekly watch-time index"],Play:[[25,34,31,50,58,54,74,80],"weekly installs index"]};
const tabs=$('#tabs'),bars=$('#bars');bars.innerHTML='<i></i>'.repeat(8);
Object.keys(src).forEach((k,i)=>{const b=document.createElement('button');b.textContent=k;b.setAttribute('aria-pressed',i==0);b.onclick=()=>pick(k);tabs.append(b)});
function pick(k){[...tabs.children].forEach(b=>b.setAttribute('aria-pressed',b.textContent==k));const d=src[k][0];[...bars.children].forEach((e,i)=>e.style.height=d[i]+'%');$('#cap').textContent=k+' · '+src[k][1];const g=Math.round((d[7]-d[0])/d[0]*100);$('#val').textContent='+'+g+'% over 8 weeks'}
setTimeout(()=>pick('Search'),300);
// nav
const hd=$('#hd'),bg=$('.burger'),lk=$('#lk');addEventListener('scroll',()=>hd.classList.toggle('s',scrollY>30),{passive:true});
bg.onclick=()=>{const o=lk.classList.toggle('open');bg.setAttribute('aria-expanded',o)};lk.onclick=e=>e.target.tagName=='A'&&lk.classList.remove('open');
$('#tg').onclick=()=>{const r=document.documentElement,dk=getComputedStyle(r).getPropertyValue('--bg').trim()=='#0a0e1a';r.dataset.theme=dk?'light':'dark'};
const secs=[...document.querySelectorAll('main section[id]')],als=[...lk.querySelectorAll('a[href^="#"]')];
new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&als.forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id))),{rootMargin:'-45% 0px -50%'}).observe&&secs.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&als.forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+s.id))),{rootMargin:'-45% 0px -50%'}).observe(s));
// reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);const c=e.target.querySelector('[data-n]');if(c){const n=+c.dataset.n,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1400,1);c.textContent=Math.round(n*(1-Math.pow(1-p,3)))+c.dataset.s;p<1&&requestAnimationFrame(f)})(t0)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach((e,i)=>{e.style.transitionDelay=(i%4)*70+'ms';io.observe(e)});
// signature: signal field
const cv=$('#field'),cx=cv.getContext('2d');let W,H,P=[],m={x:-999,y:-999};
const cols=()=>['--a','--b','--c','--d'].map(v=>getComputedStyle(document.documentElement).getPropertyValue(v).trim());
function size(){W=cv.width=cv.clientWidth;H=cv.height=cv.clientHeight;const n=Math.min(90,Math.floor(W*H/14000));P=Array.from({length:n},(_,i)=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,k:i%4}))}
addEventListener('resize',size);size();
cv.parentElement.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
cv.parentElement.addEventListener('pointerleave',()=>m.x=-999);
const still=matchMedia('(prefers-reduced-motion:reduce)').matches;let C=cols();new MutationObserver(()=>C=cols()).observe(document.documentElement,{attributes:true});
(function draw(){cx.clearRect(0,0,W,H);for(const p of P){if(!still){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}}
for(let i=0;i<P.length;i++){const a=P[i],dm=Math.hypot(a.x-m.x,a.y-m.y);
for(let j=i+1;j<P.length;j++){const b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y),near=dm<170||Math.hypot(b.x-m.x,b.y-m.y)<170;if(d<(near?150:70)){cx.globalAlpha=(1-d/(near?150:70))*(near?.6:.18);cx.strokeStyle=C[a.k];cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
cx.globalAlpha=dm<170?.95:.4;cx.fillStyle=C[a.k];cx.beginPath();cx.arc(a.x,a.y,dm<170?3.4:2,0,7);cx.fill()}
cx.globalAlpha=1;requestAnimationFrame(draw)})();
// backend: db + sample capabilities (light up when available)
let db=null,sample=null;
const cl=window.claude;
if(cl){cl.use('db').then(d=>db=d).catch(()=>{});
cl.use('sample').then(x=>{sample=x;if(x)$('#ask').hidden=false}).catch(()=>{})}
$('#ask').onsubmit=async e=>{e.preventDefault();const q=$('#q').value.trim(),a=$('#ans');if(!q)return;a.textContent='Analyzing…';
try{const k=[...tabs.children].find(b=>b.getAttribute('aria-pressed')=='true').textContent;
const r=await sample('You are a concise data analyst. Sample dataset (illustrative, 8 weekly points, index 0-100) for Google '+k+': '+src[k][0].join(', ')+'. Answer in 2-3 sentences, note this is sample data and give possible hypotheses, not facts. Question: '+q,{onText:t=>a.textContent=t.text});a.textContent=r.text}
catch(x){a.textContent=x&&x.code=='rate_limited'?'Too many requests, please wait a moment.':'Couldn\'t get an answer right now.'}};
$('#f').onsubmit=async e=>{e.preventDefault();const v=$('#em').value.trim(),t=$('#ms').value.trim(),m=$('#msg'),b=$('#sb');
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){m.className='msg err';m.textContent='Please enter a valid email address.';return}
b.disabled=true;m.className='msg';m.textContent='Sending…';
try{if(!db)throw 0;const id='i'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
await db.collection('inquiries').doc(id).set({email:v,message:t,at:new Date().toISOString()});
m.className='msg ok';m.textContent='Thanks! Your request was received. We\'ll reply by email.';$('#f').reset()}
catch(x){m.className='msg err';m.innerHTML='Couldn\'t save it here. <a href="mailto:hello@signalgrid.example?subject=Data%20analysis%20project&body='+encodeURIComponent(t+' — reply to '+v)+'">Send by email instead</a>.'}
finally{b.disabled=false}};
