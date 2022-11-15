"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const l={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},i="Class: Bip32Path",p={unversionedId:"references/crypto/classes/Bip32Path",id:"references/crypto/classes/Bip32Path",title:"Class: Bip32Path",description:"iota.js API reference",source:"@site/next/external/iota.js/documentation/docs/references/crypto/classes/Bip32Path.md",sourceDirName:"references/crypto/classes",slug:"/references/crypto/classes/Bip32Path",permalink:"/next/iotajs/references/crypto/classes/Bip32Path",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/references/crypto/classes/Bip32Path.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Class: Bech32",permalink:"/next/iotajs/references/crypto/classes/Bech32"},next:{title:"Class: Bip39",permalink:"/next/iotajs/references/crypto/classes/Bip39"}},s={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Methods",id:"methods-1",level:2},{value:"fromPath",id:"frompath",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-1",level:4},{value:"push",id:"push",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"pushHardened",id:"pushhardened",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"pop",id:"pop",level:3},{value:"Returns",id:"returns-4",level:4},{value:"numberSegments",id:"numbersegments",level:3},{value:"Returns",id:"returns-5",level:4}],u={toc:o};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-bip32path"},"Class: Bip32Path"),(0,a.kt)("p",null,"Class to help with bip32 paths."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Bip32Path#constructor"},"constructor"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Bip32Path#frompath"},"fromPath")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Bip32Path#tostring"},"toString")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Bip32Path#push"},"push")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Bip32Path#pushhardened"},"pushHardened")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Bip32Path#pop"},"pop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Bip32Path#numbersegments"},"numberSegments"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new Bip32Path"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"initialPath?"),")"),(0,a.kt)("p",null,"Create a new instance of Bip32Path."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"initialPath?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Initial path to create.")))),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"frompath"},"fromPath"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"fromPath"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"bip32Path"),"): ",(0,a.kt)("a",{parentName:"p",href:"/next/iotajs/references/crypto/classes/Bip32Path"},(0,a.kt)("inlineCode",{parentName:"a"},"Bip32Path"))),(0,a.kt)("p",null,"Construct a new path by cloning an existing one."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bip32Path")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/next/iotajs/references/crypto/classes/Bip32Path"},(0,a.kt)("inlineCode",{parentName:"a"},"Bip32Path"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The path to clone.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/next/iotajs/references/crypto/classes/Bip32Path"},(0,a.kt)("inlineCode",{parentName:"a"},"Bip32Path"))),(0,a.kt)("p",null,"A new instance of Bip32Path."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tostring"},"toString"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Converts the path to a string."),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The path as a string."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"push"},"push"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"push"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Push a new index on to the path."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The index to add to the path.")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pushhardened"},"pushHardened"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"pushHardened"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Push a new hardened index on to the path."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The index to add to the path.")))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pop"},"pop"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"pop"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Pop an index from the path."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"numbersegments"},"numberSegments"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"numberSegments"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("p",null,"Get the segments."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("p",null,"The segments as numbers."))}c.isMDXComponent=!0}}]);