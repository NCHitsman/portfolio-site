(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n.n(o),c=n(18),s=n.n(c),i=(n(27),n(6)),r=(n(28),n.p+"static/media/hitsman.fba13ceb.jpg"),u=n(2),l=function(){return Object(u.jsxs)("div",{className:"AboutMeContentParnetCont",children:[Object(u.jsx)("div",{className:"AboutMeTitle",children:"About Me"}),Object(u.jsxs)("div",{className:"AboutMeTextPictCont",children:[Object(u.jsxs)("div",{className:"AboutMeText",children:["I was led to Software Engineering by a desire to be challenged and find solutions to complex problems. Always striving to make my solutions scalable, efficient, and progressive, I include the most advanced and breaking-edge technology in my projects. I am proud to know that I bring interesting ideas with efficient standards to any team I join.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"I decided to further my education by attending App Academy\u2019s 24-week, 1000+ hour Software Engineering course. During this intensive program I honed my expertise in Typescript, React, Redux, CSS, Python, C#, alongside many other industry relevant technologies. Given my strong technical experience, I am confident in my ability to contribute from day one as a Full-Stack Developer on any project."]}),Object(u.jsx)("img",{className:"SelfImage",src:r,alt:"Noah Carmichael-Hitsman"})]})]})},j=function(e){var t=e.about,n=e.setAbout,a=e.setHome,c=e.lastPage,s=e.setLastPage,r=e.projects,j=e.setProjects,d=e.setCurrentDownButton,b=e.setCurrentUpButton,m=Object(o.useState)(!1),h=Object(i.a)(m,2),f=h[0],g=h[1],O=Object(o.useRef)(null),x=Object(o.useRef)(null);return Object(o.useEffect)((function(){setTimeout((function(){g(!!t)}),900)}),[t]),Object(o.useEffect)((function(){f&&(b(x.current),d(O.current))}),[f,d,b]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:null===t?"AboutMeParentCont":t?"home"===c?"AboutMeParentCont active fromHome":"AboutMeParentCont active fromProjects":r?"AboutMeParentCont unactive projects":"AboutMeParentCont unactive home",children:Object(u.jsx)(l,{})}),t&&!r&&Object(u.jsx)("div",{className:"UpButtonCont",children:Object(u.jsx)("button",{ref:x,className:f?"ChangeButton":"ChangeButton unset",onClick:function(){f&&(n(!1),a(!0),s("about"))},children:Object(u.jsx)("div",{className:f?"ButtonText":"ButtonText unset",children:"<"})})}),t&&!r&&Object(u.jsx)("div",{className:"DownButtonCont",children:Object(u.jsx)("button",{ref:O,className:f?"ChangeButton":"ChangeButton unset",onClick:function(){f&&(j(!0),n(!1),s("about"))},children:Object(u.jsx)("div",{className:f?"ButtonText":"ButtonText unset",children:">"})})})]})},d=n(8),b=n(37),m=(n(16),n(19)),h=function(){var e=Object(o.useRef)(null);return Object(d.b)((function(){e.current.position.z>1?e.current.position.z=0:e.current.position.z+=.05})),Object(u.jsx)("gridHelper",{ref:e,args:[190,170,"#580360","#580360"],position:[0,0,0]})},f=function(){var e=Object(o.useRef)(null);return Object(d.b)((function(){e.current.position.z>1?e.current.position.z=0:e.current.position.z+=.05})),Object(u.jsxs)("mesh",{ref:e,position:[0,-.05,0],rotation:[-Math.PI/2,0,0],children:[Object(u.jsx)("planeBufferGeometry",{args:[190,170]}),Object(u.jsx)("meshBasicMaterial",{color:"#0C345A"})]})},g=function(){var e=Object(o.useRef)(null);return Object(d.b)((function(){e.current.rotation.z-=.001})),Object(u.jsxs)("mesh",{position:[0,5,-150],ref:e,children:[Object(u.jsx)("sphereBufferGeometry",{args:[50,36,36]}),Object(u.jsx)("meshBasicMaterial",{depthWrite:!1,children:Object(u.jsx)(b.a,{stops:[0,.1,.2,.35,.6,1],colors:["#FAE9B3","#F7D050","#F76C26","#EC5409","#9E1E05","#5d0303"],size:1024})})]})},O=function(){return Object(u.jsxs)("mesh",{position:[0,25,-155],children:[Object(u.jsx)("planeBufferGeometry",{args:[575,75]}),Object(u.jsx)("meshBasicMaterial",{children:Object(u.jsx)(b.a,{stops:[0,.3,.4,.8,1],colors:["#2d9ee8","#a78ced","#f86fbe","#ff6b70","#f69109"],size:1024})})]})},x=Object(o.memo)((function(e){var t=e.x,n=e.y,a=Math.random(),c=Math.random(),s=Math.ceil(2*Math.random()),i=Object(o.useRef)(null),r=Object(o.useRef)(null);return Object(d.b)((function(){i.current.rotation.x+=5e-4,i.current.rotation.y+=5e-4,r.current.rotation.x+=5e-4,r.current.rotation.y+=5e-4})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("mesh",{position:[t,.5,n],rotation:[a,0,c],ref:i,children:[Object(u.jsx)("tetrahedronBufferGeometry",{args:[5.05,s]}),Object(u.jsx)("meshBasicMaterial",{color:"#368FD3",wireframe:!0,polygonOffset:!0})]}),Object(u.jsxs)("mesh",{position:[t,.5,n],rotation:[a,0,c],ref:r,children:[Object(u.jsx)("tetrahedronBufferGeometry",{args:[5,s]}),Object(u.jsx)("meshPhongMaterial",{color:"black",wireframe:!1,polygonOffset:!0})]})]})}),(function(e,t){return!0})),p=function(){return Object(u.jsxs)("mesh",{position:[0,.05,-60],rotation:[-Math.PI/2,0,0],children:[Object(u.jsx)("planeBufferGeometry",{args:[190,15]}),Object(u.jsx)("meshBasicMaterial",{children:Object(u.jsx)(b.a,{stops:[0,.5,1],colors:["black","black","#580360"],size:1024})})]})},P=function(){var e="up";return Object(d.b)((function(t){t.camera.rotation.x>-.32?e="down":t.camera.rotation.x<-.45&&(e="up"),"up"===e?t.camera.rotation.x+=5e-5:"down"===e&&(t.camera.rotation.x-=5e-5)})),null},C=function(){var e=!0;return Object(u.jsxs)(d.a,{className:"HomeCanvas",camera:{fov:75,near:.1,far:1e3,position:[0,4,9]},children:[Object(u.jsx)(h,{}),Object(u.jsx)(O,{}),Object(u.jsx)(f,{}),Object(u.jsx)(g,{}),Object(m.range)(50).map((function(t,n){return e=!e,Object(u.jsx)(x,{x:5*n-125,y:e?-65:-70},t)})),Object(u.jsx)(p,{}),Object(u.jsx)(P,{})]})},v=function(e){var t=e.home,n=e.setHome,a=e.setAbout,c=e.setLastPage,s=e.setCurrentDownButton,r=Object(o.useState)(!1),l=Object(i.a)(r,2),j=l[0],d=l[1],b=Object(o.useRef)(null);return Object(o.useEffect)((function(){null===t?d(!0):setTimeout((function(){d(!!t)}),900)}),[t]),Object(o.useEffect)((function(){j&&s(b.current)}),[s,j]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C,{}),Object(u.jsxs)("div",{className:null===t?"HomeContentCont":t?"HomeContentCont showCont":"HomeContentCont hideCont",children:[Object(u.jsx)("div",{className:"HomeName",children:"Noah Carmichael-Hitsman"}),Object(u.jsxs)("div",{className:"HomeLinkCont",children:[Object(u.jsx)("div",{className:"HomeLink",onClick:function(){window.open("https://github.com/NCHitsman")},children:"Github"}),Object(u.jsx)("div",{className:"HomeLink",onClick:function(){window.open("https://www.linkedin.com/in/noah-carmichael-hitsman-b024a1203/")},children:"LinkedIn"}),Object(u.jsx)("div",{className:"HomeLink",onClick:function(){window.open("https://drive.google.com/file/d/1wMHuGNecNLmpFnzpA3qhdJexv6S3UUU5/view?usp=sharing")},children:"Resume"})]})]}),(t||null===t)&&Object(u.jsx)("div",{className:"DownButtonCont",children:Object(u.jsx)("button",{ref:b,className:j?"ChangeButton":"ChangeButton unset",onClick:function(){j&&(n(!1),a(!0),c("home"))},children:Object(u.jsx)("div",{className:j?"ButtonText":"ButtonText unset",children:">"})})})]})},y=(n(33),function(e){var t=e.name,n=e.link1,a=e.link2,c=e.about,s=e.about2,r=e.tech,l=e.index,j=e.gif,d=e.projectIndex,b=e.lastProjectIndex,m=Object(o.useState)(!0),h=Object(i.a)(m,2),f=h[0],g=h[1],O=Object(o.useCallback)((function(e){"Space"===e.code&&(l===d||0===l&&null===d)&&g(!f)}),[f,l,d]);Object(o.useEffect)((function(){return window.addEventListener("keydown",O),function(){return window.removeEventListener("keydown",O)}}),[O]);return Object(u.jsxs)("div",{className:function(){if(null!==b){if(null===d&&0===l)return"ProjectPageParentCont";if(l===d){if(b<l)return"ProjectPageParentCont raise";if(b>l)return"ProjectPageParentCont lower"}if(l===b){if(d===l+1)return"ProjectPageParentCont hide up";if(d===l-1)return"ProjectPageParentCont hide down"}return"ProjectPageParentCont hide"}}(),children:[Object(u.jsx)("img",{className:"BackgroundImage",src:j,alt:"demonstrational gif"}),Object(u.jsxs)("div",{className:l%2===0?f?"ProjectPageInfoParent left open":"ProjectPageInfoParent left closed":f?"ProjectPageInfoParent right open":"ProjectPageInfoParent right closed",children:[l%2!==0&&Object(u.jsx)("div",{className:"ProjectPageTransitionButtonCont",children:Object(u.jsx)("button",{className:"ProjectPageTransitionButton",onClick:function(){return g(!f)},children:f?">":"<"})}),Object(u.jsxs)("div",{className:l%2===0?f?"ProjectPageInfoCont right open":"ProjectPageInfoCont right closed":f?"ProjectPageInfoCont left open":"ProjectPageInfoCont left closed",children:[Object(u.jsxs)("div",{className:"ProjectPageNameAboutCollisionCont",children:[Object(u.jsx)("div",{className:"ProjectPageNameTitleCont",children:Object(u.jsx)("div",{style:l%2===0?{textAlign:"left"}:{textAlign:"right"},className:"ProjectPageNameTitle",children:t})}),Object(u.jsxs)("div",{className:"ProjectPageAboutCont",children:[Object(u.jsx)("div",{style:l%2===0?{textAlign:"left",marginBottom:"25px"}:{textAlign:"right",marginBottom:"25px"},className:"ProjectPageAboutText about1",children:c}),Object(u.jsx)("div",{style:l%2===0?{textAlign:"left"}:{textAlign:"right"},className:"ProjectPageAboutText about2",children:s})]})]}),Object(u.jsxs)("div",{className:"ProjectPageTechCont",children:[Object(u.jsx)("div",{style:l%2===0?{textAlign:"left"}:{textAlign:"right"},className:"ProjectPageTechTitle",children:"Tech Used"}),Object(u.jsx)("ul",{style:l%2===0?{textAlign:"left"}:{textAlign:"right"},className:"ProjectPageTechUl",dir:l%2===0?"ltl":"rtl",children:r.map((function(e,t){return Object(u.jsx)("li",{className:"ProjectPageTechLi",children:e},t)}))})]}),Object(u.jsxs)("div",{className:"ProjectPageLinkCont",children:[Object(u.jsx)("div",{className:"ProjectPageLink",onClick:function(){return window.open(n)},children:"Github"}),Object(u.jsx)("div",{className:"ProjectPageLink",onClick:function(){return window.open(a)},children:"Live Link"})]})]}),l%2===0&&Object(u.jsx)("div",{className:"ProjectPageTransitionButtonCont",children:Object(u.jsx)("button",{className:"ProjectPageTransitionButton",onClick:function(){return g(!f)},children:f?"<":">"})})]})]})}),N=(n(34),[{name:"Planetary Empires",link1:"https://github.com/NCHitsman/Planetary-Empires",link2:"https://planetary-empires.herokuapp.com/",about:"Planetary Empires is an expansion game for Warhammer 40,000 released by Games Workshop. The game rules and accompanying map board and pieces allow you to wage a campaign across a planetary-size landscape. It is designed to assist you in running evocative, narrative-driven campaigns.",about2:"This site helps you organize players, systems, and maps, allowing you to run a Planetary Empires game all in one place!",tech:["Javascript","React","Redux","Sequelize","Express","Three.js"],gif:n.p+"static/media/example.3352130f.gif"},{name:"SoundLoud",link1:"https://github.com/NCHitsman/SoundLoud",link2:"https://soundloud-hitsman.herokuapp.com/",about:"SoundLoud in an app made for uploading and sharing music. This was my first Project, and I learned so much while implementing all of it's funcationality.",about2:"Provided fully integrated User Authentication, Login, and Sign Up, hashing passwords with bcrypt and storing user data in JSON Web Tokens. I leveraged React-Redux to utilize asynchronous data storage and retrieval, as well as the Fetch API and CSURF library.",tech:["Javascript","React","Redux","Sequelize","Express","Cloudinary"],gif:n.p+"static/media/song.6a1361a8.gif"},{name:"Portfolio Site",link1:"https://github.com/NCHitsman/portfolio-site",link2:"https://nchitsman.github.io/portfolio-site/",about:'A Person Portfolio site I made for my Job Search. I created a Three.js background and used a "Accordion Div" system to create the sectioning you see here!',about2:"I enjoyed making the use of React-Three/Fiber and Typescript to make a very cool Three.js scene I am super proud of. The Project pages you are viewing now, is completly scalable, making it very easy to add a new Project!",tech:["Typescript","React","Three.js","CSS","Github Pages"],gif:n.p+"static/media/tour.8b20d69e.gif"}]),w=function(e){var t=e.projects,n=e.setProjects,a=e.setLastPage,c=e.setAbout,s=e.setCurrentDownButton,r=e.setCurrentUpButton,l=Object(o.useState)(null),j=Object(i.a)(l,2),d=j[0],b=j[1],m=Object(o.useState)(0),h=Object(i.a)(m,2),f=h[0],g=h[1],O=N.length-1,x=Object(o.useState)(!1),p=Object(i.a)(x,2),P=p[0],C=p[1],v=Object(o.useRef)(null),w=Object(o.useRef)(null),k=Object(o.useRef)(null);return Object(o.useEffect)((function(){setTimeout((function(){C(!!t)}),900)}),[t,d]),Object(o.useEffect)((function(){P&&(r(null===d||0===d?k.current:v.current),s(w.current))}),[P,s,r,d]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:null==t?"ProjectsParentCont":t?"ProjectsParentCont active":"ProjectsParentCont unactive",children:N.map((function(e,t){return Object(u.jsx)(y,{name:e.name,link1:e.link1,link2:e.link2,about:e.about,about2:e.about2,tech:e.tech,index:t,gif:e.gif,projectIndex:d,lastProjectIndex:f},t)}))}),(null===d||0===d)&&t&&Object(u.jsx)("div",{className:"UpButtonCont",children:Object(u.jsx)("button",{ref:k,className:P?"ChangeButton":"ChangeButton unset",onClick:function(){P&&(n(!1),c(!0),a("projects"),C(!1))},children:Object(u.jsx)("div",{className:P?"ButtonText":"ButtonText unset",children:"<"})})}),t&&0!==d&&null!==d&&Object(u.jsx)("div",{className:"UpButtonCont",children:Object(u.jsx)("button",{ref:v,className:P?"ChangeButton":"ChangeButton unset",onClick:function(){P&&(null!==d&&(g(d),b(d-1)),C(!1))},children:Object(u.jsx)("div",{className:P?"ButtonText":"ButtonText unset",children:"<"})})}),t&&d!==O&&Object(u.jsx)("div",{className:"DownButtonCont",children:Object(u.jsx)("button",{ref:w,className:P?"ChangeButton":"ChangeButton unset",onClick:function(){P&&(null===d?(g(0),b(1)):(g(d),b(d+1)),C(!1))},children:Object(u.jsx)("div",{className:P?"ButtonText":"ButtonText unset",children:">"})})})]})};var k=function(){var e=Object(o.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(null),s=Object(i.a)(c,2),r=s[0],l=s[1],d=Object(o.useState)(null),b=Object(i.a)(d,2),m=b[0],h=b[1],f=Object(o.useState)(""),g=Object(i.a)(f,2),O=g[0],x=g[1],p=Object(o.useState)(null),P=Object(i.a)(p,2),C=P[0],y=P[1],N=Object(o.useState)(null),k=Object(i.a)(N,2),B=k[0],T=k[1],A=Object(o.useCallback)((function(e){var t=null,n=!1;return e.deltaY?t=e.deltaY/60:e.detail&&(t=-e.detail/2),null!==t&&(n=t<0?"up":"down"),n}),[]),I=Object(o.useCallback)((function(e){var t=A(e);"down"===t?C&&C.click():"up"===t&&B&&B.click()}),[A,C,B]);return Object(o.useEffect)((function(){return window.addEventListener("wheel",I),function(){return window.removeEventListener("wheel",I)}}),[I]),Object(u.jsxs)("div",{className:"PageContent",children:[Object(u.jsx)(v,{home:n,setHome:a,setAbout:l,setLastPage:x,setCurrentDownButton:y}),Object(u.jsx)(j,{about:r,setAbout:l,setHome:a,lastPage:O,setLastPage:x,projects:m,setProjects:h,setCurrentDownButton:y,setCurrentUpButton:T}),Object(u.jsx)(w,{projects:m,setProjects:h,setLastPage:x,setAbout:l,setCurrentDownButton:y,setCurrentUpButton:T})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.4e2a3bde.chunk.js.map