(self.webpackChunksentinelle_mobile=self.webpackChunksentinelle_mobile||[]).push([[6776],{6776:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createSwipeBackGesture:()=>s});var r=n(1843),a=n(8520);n(6953);const s=(e,t,n,s,i)=>{const l=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:n,onMove:e=>{s(e.deltaX/l.innerWidth)},onEnd:e=>{const t=l.innerWidth,n=e.deltaX/t,a=e.velocityX,s=a>=0&&(a>.2||e.deltaX>t/2),o=(s?1-n:n)*t;let c=0;if(o>5){const e=o/Math.abs(a);c=Math.min(e,540)}i(s,n<=0?.01:(0,r.j)(0,n,.9999),c)}})}}}]);