import{d as b,r as t,o as M,v as B,A as n,B as _,H as l,K as C,g as o,x as W}from"./DJ6u8n_y.js";const E={class:"bg-rose-200"},K=b({__name:"sample",setup(H){const i=t(!1),g=t(!1),m=t(""),u=t({width:window.innerWidth,height:window.innerHeight,draggable:!0}),s=t(!1),h=t({x:100,y:100,radius:70,fill:"red",stroke:"black",strokeWidth:4}),p=()=>{s.value=!0},v=()=>{s.value=!1},d=e=>{e.target.to({scaleX:Math.random()+.8,scaleY:Math.random()+.8,duration:.2})},x=()=>{const e=new window.Image;e.src="https://konvajs.org/assets/yoda.jpg",e.onload=()=>{m.value=e}},y=()=>{const r=i.value.getNode().getWidth()/2,a=g.value.getNode();new C.Animation(c=>{a.setX(100*Math.sin(c.time*2*Math.PI/5e3)+r)},a.getLayer()).start()};return M(async()=>{y(),x()}),(e,k)=>{const r=o("v-circle"),a=o("v-text"),f=o("v-rect"),c=o("v-regular-polygon"),w=o("v-layer"),D=o("v-stage");return W(),B("div",E,[n(D,{ref_key:"stage",ref:i,config:l(u)},{default:_(()=>[n(w,{ref:"layer"},{default:_(()=>[n(r,{config:l(h)},null,8,["config"]),n(a,{onDragstart:p,onDragend:v,config:{fontSize:30,fontFamily:"Estedad-FD-Bold",text:"سلام روز بخیر",x:250,y:100,draggable:!0,fill:l(s)?"green":"black"}},null,8,["config"]),n(f,{ref:"rect",onDragstart:d,onDragend:d,config:{width:50,height:50,fill:"green",draggable:!0}},null,512),n(c,{ref_key:"hexagon",ref:g,config:{x:200,y:200,sides:6,radius:20,fill:"red",stroke:"black",strokeWidth:4}},null,512)]),_:1},512)]),_:1},8,["config"])])}}});export{K as default};
