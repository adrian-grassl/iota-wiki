"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={description:"The IOTA foundation provides load-balanced public mainnet endpoints where MQTT and the HTTP REST API are enabled.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["mainnet","MQTT","REST API","HTTP","Explorer","reference"]},a="Mainnet",l={unversionedId:"reference/networks/mainnet",id:"reference/networks/mainnet",title:"Mainnet",description:"The IOTA foundation provides load-balanced public mainnet endpoints where MQTT and the HTTP REST API are enabled.",source:"@site/iota/external/introduction-docs/production/docs/reference/networks/mainnet.md",sourceDirName:"reference/networks",slug:"/reference/networks/mainnet",permalink:"/introduction/reference/networks/mainnet",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/docs/iota/external/introduction-docs/production/docs/reference/networks/mainnet.md",tags:[],version:"current",frontMatter:{description:"The IOTA foundation provides load-balanced public mainnet endpoints where MQTT and the HTTP REST API are enabled.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["mainnet","MQTT","REST API","HTTP","Explorer","reference"]},sidebar:"mySidebar",previous:{title:"Chrysalis Details",permalink:"/introduction/reference/details"},next:{title:"Devnet",permalink:"/introduction/reference/networks/devnet"}},c={},s=[{value:"Public Infrastructure",id:"public-infrastructure",level:2},{value:"Developer Tools",id:"developer-tools",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mainnet"},"Mainnet"),(0,o.kt)("h2",{id:"public-infrastructure"},"Public Infrastructure"),(0,o.kt)("p",null,"IOTA currently provides two load-balanced public mainnet endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"chrysalis-nodes.iota.org."),(0,o.kt)("li",{parentName:"ul"},"chrysalis-nodes.iota.cafe.")),(0,o.kt)("p",null,"These endpoints have MQTT (via WebSockets) exposed and offer the HTTP REST API (according to this ",(0,o.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/0026-rest-api.yaml"},"specification"),")\nover TLS."),(0,o.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.iota.org/mainnet"},"Explorer"),".")))}u.isMDXComponent=!0}}]);