import{D as p,d as M,r as c,o as C,g as m,v as b,x as d,A as v,y as s,B as y,F as X,E as Y,G as D}from"./2KEeqZvs.js";const N=p("/img/sample/building-1.png"),P=p("/img/sample/building-2.png"),j=p("/img/sample/building-3.png"),A={class:"navbar"},S=M({__name:"index",setup(I){const g=c(null),u=c(null),f=c([]),x=c({width:window.innerWidth,height:window.innerHeight,draggable:!0}),h=c({x:0,y:0,width:1872,height:1062,image:null}),_=()=>{const e=new window.Image;e.src="/img/bg.jpg",e.onload=()=>{h.value.image=e}},r=e=>{const n=new window.Image;n.src=e,n.onload=()=>{const t=g.value.getNode(),l=t.width()/2,i=t.height()/2,o=l+(Math.random()*100-50),a=i+(Math.random()*100-50);f.value.push({x:o,y:a,width:100,height:100,image:n,draggable:!0})}},k=()=>{if(!g.value)return;const e=g.value.getNode();e.on("wheel",n=>{n.evt.preventDefault(),w(e,n.evt.deltaY>0?-1:1,e.getPointerPosition())}),e.on("touchmove",n=>{const t=n.evt.touches[0],l=n.evt.touches[1];if(t&&l){const i=Math.sqrt(Math.pow(l.clientX-t.clientX,2)+Math.pow(l.clientY-t.clientY,2));u.value&&w(e,i>u.value?1:-1,{x:(t.clientX+l.clientX)/2,y:(t.clientY+l.clientY)/2}),u.value=i}}),e.on("touchend",()=>{u.value=null})},w=(e,n,t)=>{const i=e.scaleX();let o=n>0?i*1.05:i/1.05;o=Math.min(5,Math.max(1,o));const a={x:(t.x-e.x())/i,y:(t.y-e.y())/i},B={x:t.x-a.x*o,y:t.y-a.y*o};e.scale({x:o,y:o}),e.position(B),e.batchDraw()};return C(()=>{_(),k()}),(e,n)=>{const t=m("v-image"),l=m("v-layer"),i=m("v-stage");return d(),b("div",null,[v(i,{ref_key:"stageRef",ref:g,config:x.value},{default:y(()=>[v(l,null,{default:y(()=>[v(t,{config:h.value},null,8,["config"]),(d(!0),b(X,null,Y(f.value,(o,a)=>(d(),D(t,{key:a,config:o},null,8,["config"]))),128))]),_:1})]),_:1},8,["config"]),s("div",A,[s("div",{class:"item",onClick:n[0]||(n[0]=o=>r("/img/sample/building-1.png"))},n[3]||(n[3]=[s("img",{src:N,alt:"building-1"},null,-1)])),s("div",{class:"item",onClick:n[1]||(n[1]=o=>r("/img/sample/building-2.png"))},n[4]||(n[4]=[s("img",{src:P,alt:"building-2"},null,-1)])),s("div",{class:"item",onClick:n[2]||(n[2]=o=>r("/img/sample/building-3.png"))},n[5]||(n[5]=[s("img",{src:j,alt:"building-3"},null,-1)]))])])}}});export{S as default};
