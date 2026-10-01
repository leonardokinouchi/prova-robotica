(function(root){
 'use strict';
 const rad=d=>d*Math.PI/180;
 function forward(l1,l2,q1,q2){return {x:l1*Math.cos(rad(q1))+l2*Math.cos(rad(q1+q2)),y:l1*Math.sin(rad(q1))+l2*Math.sin(rad(q1+q2)),phi:q1+q2,det:l1*l2*Math.sin(rad(q2))};}
 function inverse(l1,l2,x,y){const c=(x*x+y*y-l1*l1-l2*l2)/(2*l1*l2);if(c>1+1e-10||c< -1-1e-10)return [];return [1,-1].map(sign=>{const q2=sign*Math.acos(Math.max(-1,Math.min(1,c)));const q1=Math.atan2(y,x)-Math.atan2(l2*Math.sin(q2),l1+l2*Math.cos(q2));return {q1:q1*180/Math.PI,q2:q2*180/Math.PI};});}
 const reduction=(torque,rpm,n,eta)=>({torque:torque*n*eta,rpm:rpm/n});
 const encoder=(cycles,mult,n)=>({counts:cycles*mult,step:360/(cycles*mult*n),half:180/(cycles*mult*n)});
 const battery=(volts,ah,usable,watts)=>({nominal:volts*ah,energy:volts*ah*usable,hours:volts*ah*usable/watts});
 const pwm=(v,d)=>v*d;
 const grip=(mass,mu,p,s)=>s*mass*9.81/(mu*p);
 function shuffle(items,random=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 function selectExam(bank,modules,count,random=Math.random){const topics=shuffle(modules.map(m=>m.id),random);let first=topics.map(t=>shuffle(bank.filter(q=>q.topic===t),random)[0]).filter(Boolean);if(count<first.length){const groups=shuffle([...new Set(modules.map(m=>m.group))],random);const buckets=groups.map(g=>shuffle(first.filter(q=>modules.find(m=>m.id===q.topic).group===g),random));first=[];while(first.length<count&&buckets.some(b=>b.length)){for(const b of buckets){if(b.length&&first.length<count)first.push(b.pop());}}}const selected=new Set(first.map(q=>q.id));return shuffle([...first,...shuffle(bank.filter(q=>!selected.has(q.id)),random)].slice(0,count),random);}
 function grade(bank,answers){const topics={};let correct=0,answered=0;for(const q of bank){topics[q.topic]??={correct:0,total:0};topics[q.topic].total++;const has=Object.prototype.hasOwnProperty.call(answers,q.id);if(has)answered++;if(has&&Number(answers[q.id])===q.correct){correct++;topics[q.topic].correct++;}}return {correct,answered,total:bank.length,percent:bank.length?Math.round(correct/bank.length*100):0,topics};}
 const api={forward,inverse,reduction,encoder,battery,pwm,grip,shuffle,selectExam,grade};root.Engine=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
