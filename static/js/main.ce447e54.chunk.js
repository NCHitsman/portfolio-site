(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),s=n(18),o=n.n(s),i=(n(27),n(8)),a=n(34),j=(n(16),n(19)),b=n(3),u=function(){var e=Object(r.useRef)(null);return Object(i.b)((function(){e.current.position.z>1?e.current.position.z=0:e.current.position.z+=.05})),Object(b.jsx)("gridHelper",{ref:e,args:[190,170,"#580360","#580360"],position:[0,0,0]})},l=function(){var e=Object(r.useRef)(null);return Object(i.b)((function(){e.current.position.z>1?e.current.position.z=0:e.current.position.z+=.05})),Object(b.jsxs)("mesh",{ref:e,position:[0,-.05,0],rotation:[-Math.PI/2,0,0],children:[Object(b.jsx)("planeBufferGeometry",{args:[190,170]}),Object(b.jsx)("meshBasicMaterial",{color:"#0C345A"})]})},f=function(){var e=Object(r.useRef)(null);return Object(i.b)((function(){e.current.rotation.z-=.001})),Object(b.jsxs)("mesh",{position:[0,5,-150],ref:e,children:[Object(b.jsx)("sphereBufferGeometry",{args:[50,36,36]}),Object(b.jsx)("meshBasicMaterial",{depthWrite:!1,children:Object(b.jsx)(a.a,{stops:[0,.1,.2,.35,.6,1],colors:["#FAE9B3","#F7D050","#F76C26","#EC5409","#9E1E05","#5d0303"],size:1024})})]})},m=function(){return Object(b.jsxs)("mesh",{position:[0,25,-155],children:[Object(b.jsx)("planeBufferGeometry",{args:[575,75]}),Object(b.jsx)("meshBasicMaterial",{children:Object(b.jsx)(a.a,{stops:[0,.3,.4,.8,1],colors:["#2d9ee8","#a78ced","#f86fbe","#ff6b70","#f69109"],size:1024})})]})},O=function(e){var t=e.x,n=e.y,c=Math.random(),s=Math.random(),o=Math.ceil(2*Math.random()),a=Object(r.useRef)(null),j=Object(r.useRef)(null);return Object(i.b)((function(){a.current.rotation.x+=5e-4,a.current.rotation.y+=5e-4,j.current.rotation.x+=5e-4,j.current.rotation.y+=5e-4})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("mesh",{position:[t,.5,n],rotation:[c,0,s],ref:a,children:[Object(b.jsx)("tetrahedronBufferGeometry",{args:[5.01,o]}),Object(b.jsx)("meshBasicMaterial",{color:"#368FD3",wireframe:!0,polygonOffset:!0})]}),Object(b.jsxs)("mesh",{position:[t,.5,n],rotation:[c,0,s],ref:j,children:[Object(b.jsx)("tetrahedronBufferGeometry",{args:[5,o]}),Object(b.jsx)("meshPhongMaterial",{color:"black",wireframe:!1,polygonOffset:!0})]})]})},h=function(){return Object(b.jsxs)("mesh",{position:[0,.05,-60],rotation:[-Math.PI/2,0,0],children:[Object(b.jsx)("planeBufferGeometry",{args:[190,15]}),Object(b.jsx)("meshBasicMaterial",{children:Object(b.jsx)(a.a,{stops:[0,.5,1],colors:["black","black","#580360"],size:1024})})]})},x=function(){var e="up";return Object(i.b)((function(t){t.camera.rotation.x>-.32?e="down":t.camera.rotation.x<-.45&&(e="up"),"up"===e?t.camera.rotation.x+=5e-5:"down"===e&&(t.camera.rotation.x-=5e-5)})),null},d=function(){var e=!0;return Object(b.jsxs)(i.a,{className:"HomeCanvas",camera:{fov:75,near:.1,far:1e3,position:[0,4,9]},children:[Object(b.jsx)(u,{}),Object(b.jsx)(m,{}),Object(b.jsx)(l,{}),Object(b.jsx)(f,{}),Object(j.range)(50).map((function(t,n){return e=!e,Object(b.jsx)(O,{x:5*n-125,y:e?-65:-70},t)})),Object(b.jsx)(h,{}),Object(b.jsx)(x,{})]})},p=function(){return Object(b.jsxs)("div",{className:"HomeDivParent",children:[Object(b.jsxs)("div",{className:"HomeInfoCont",children:[Object(b.jsx)("div",{className:"HomeName",children:"Noah Carmichael-Hitsman"}),Object(b.jsxs)("div",{className:"HomeLinkCont",children:[Object(b.jsx)("div",{className:"HomeLink",onClick:function(){window.open("https://github.com/NCHitsman")},children:"Github"}),Object(b.jsx)("div",{className:"HomeLink",onClick:function(){window.open("https://www.linkedin.com/in/noah-carmichael-hitsman-b024a1203/")},children:"LinkedIn"})]})]}),Object(b.jsx)(d,{})]})};var v=function(){return Object(b.jsx)("div",{className:"PageContent",children:Object(b.jsx)(p,{})})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ce447e54.chunk.js.map