const P=Array.from({length:20},(_,i)=>`images/${String(i+1).padStart(2,'0')}.jpg`);
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$$('img[data-i]').forEach(e=>e.src=P[e.dataset.i]);
const caps=["My favourite view.","A thousand memories, one favourite girl.","Pressed into my heart.","My favourite person.","Where it all began.","Every picture has a story.","Peek-a-boo, my heart.","Your smile is my favourite view.","Two souls, one frame.","Blue skies and you.","A thousand memories.","Beside you is my favourite place.","Little gestures.","Small gestures, endless love.","Two hearts, one beat.","Always watching over you.","Pointing right at you.","Pretty in pink.","Elegance, in green.","My favourite person."];
const tilt=[-3,2,-1.5,3,-2,1.5];
const g=$('#gal');
P.forEach((s,i)=>{const d=document.createElement('div');d.className='pol rv';d.style.transform=`rotate(${tilt[i%6]}deg)`;d.innerHTML=`<img src="${s}" alt=""><i>${caps[i]}</i>`;d.onclick=()=>{$('#lb img').src=s;$('#lb p').textContent=caps[i];$('#lb').classList.add('on')};g.appendChild(d)});
$('#lb').onclick=()=>$('#lb').classList.remove('on');
[12,13,14,15,16].forEach(i=>{const d=document.createElement('div');d.className='pol rv';d.innerHTML=`<img src="${P[i]}" alt=""><b>♡</b>`;$('#grow').appendChild(d)});
// you are
["My favourite person.","My beautiful soul ♡","My peace.","My happiness.","My safe place.","My favourite smile.","My favourite memory.","My home.","You are one of the most beautiful reasons I smile."].forEach((t,i,a)=>{const d=document.createElement('div');d.className='yl';d.innerHTML=`<p class="hand ${i==a.length-1?'gold':''}">${t}</p>`;$('#you').appendChild(d)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.parentNode.id=='let'||e.target.closest('.paper')){}}}),{threshold:.25});
$$('.rv,.yl').forEach(e=>io.observe(e));
const lp=$$('.paper p');const pio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.6});lp.forEach(p=>pio.observe(p));
$('#enter').onclick=()=>{document.body.style.transition='opacity .8s';document.body.style.opacity=0;setTimeout(()=>{$('#story').scrollIntoView({behavior:'instant'});document.body.style.opacity=1},800)};
addEventListener('pointermove',e=>{const g=$('#glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
$$('.pol').forEach(p=>p.addEventListener('pointermove',e=>{if(p.closest('#gal'))return;const r=p.getBoundingClientRect();p.style.transform=`perspective(700px) rotateY(${((e.clientX-r.left)/r.width-.5)*14}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*14}deg)`}));
// particles
const c=$('#fx'),x=c.getContext('2d');let W,H;const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight};rs();addEventListener('resize',rs);
const pt=Array.from({length:80},(_,i)=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.4,v:Math.random()*.25+.05,h:i%9==0,a:Math.random()*6.28,c:i%11==0?'#4C8DFF':'#D9B86C'}));
(function f(){x.clearRect(0,0,W,H);pt.forEach(p=>{p.y-=p.v;p.a+=.01;p.x+=Math.sin(p.a)*.3;if(p.y<-10){p.y=H+10;p.x=Math.random()*W}x.globalAlpha=.45+.35*Math.sin(p.a*2);x.fillStyle=p.c;if(p.h){x.font='14px serif';x.fillText('♡',p.x,p.y)}else{x.beginPath();x.arc(p.x,p.y,p.r,0,6.28);x.shadowBlur=8;x.shadowColor=p.c;x.fill();x.shadowBlur=0}});requestAnimationFrame(f)})();
// wish
$('#wish').onclick=()=>{$('#ck').classList.add('out');document.body.classList.add('bright');$('#wmsg').classList.add('in');
for(let i=0;i<140;i++){const h=document.createElement('div');h.className='hh';h.textContent=i%4?'♡':'✦';h.style.cssText=`left:${Math.random()*100}vw;font-size:${10+Math.random()*22}px;color:${i%3?'#E8B8C8':'#D9B86C'};animation-delay:${Math.random()*2}s;animation-duration:${4+Math.random()*3}s`;document.body.appendChild(h);setTimeout(()=>h.remove(),9000)}};
// universe
const u=$('#uc'),ux=u.getContext('2d');let st=[];const ur=()=>{const r=u.parentNode.getBoundingClientRect();u.width=r.width;u.height=r.height;st=Array.from({length:130},()=>({x:Math.random()*u.width,y:Math.random()*u.height,r:Math.random()*1.5+.3,p:Math.random()*6}))};ur();addEventListener('resize',ur);
(function f(t){ux.clearRect(0,0,u.width,u.height);st.forEach(s=>{ux.globalAlpha=.4+.6*Math.abs(Math.sin(t/1200+s.p));ux.fillStyle='#fff8e8';ux.beginPath();ux.arc(s.x,s.y,s.r,0,6.28);ux.fill()});ux.globalAlpha=.25;ux.strokeStyle='#D9B86C';ux.beginPath();[0,1,2,3,4,5,6].forEach((k,i)=>{const s=st[k*7];i?ux.lineTo(s.x,s.y):ux.moveTo(s.x,s.y)});ux.stroke();requestAnimationFrame(f)})(0);
// final
$('#one').onclick=()=>$('#fin').classList.add('on');$('#x').onclick=()=>$('#fin').classList.remove('on');
// music
let ac,pl=false,tm;const nt=[261.6,329.6,392,523.3,440,392,329.6,293.7];
$('#mus').onclick=()=>{pl=!pl;$('#mus').classList.toggle('on',pl);if(pl){ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();let i=0;const go=()=>{const o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=nt[i++%8]*(i%16<8?1:.75);g.gain.setValueAtTime(0,ac.currentTime);g.gain.linearRampToValueAtTime(.07,ac.currentTime+.4);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+2.6);o.connect(g).connect(ac.destination);o.start();o.stop(ac.currentTime+2.7)};go();tm=setInterval(go,900)}else clearInterval(tm)};