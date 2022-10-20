"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33028],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"There are Node.js, Python and Java bindings for the iota.rs client Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","Node.js","Python","Java","bindings"]},o="IOTA Client libraries",l={unversionedId:"libraries/overview",id:"libraries/overview",title:"IOTA Client libraries",description:"There are Node.js, Python and Java bindings for the iota.rs client Rust library.",source:"@site/next/external/iota.rs/documentation/docs/libraries/overview.md",sourceDirName:"libraries",slug:"/libraries/overview",permalink:"/next/iota.rs/libraries/overview",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/libraries/overview.md",tags:[],version:"current",frontMatter:{description:"There are Node.js, Python and Java bindings for the iota.rs client Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","Node.js","Python","Java","bindings"]}},s={},p=[{value:"Getting Started",id:"getting-started",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iota-client-libraries"},"IOTA Client libraries"),(0,a.kt)("p",null,"There are currently available the following official bindings to ",(0,a.kt)("inlineCode",{parentName:"p"},"iota.rs"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/getting_started/rust"},"Rust")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/getting_started/nodejs"},"Node.js")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/getting_started/python"},"Python")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/getting_started/java"},"Java")," ")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"It is a recommended approach to start your interactions with IOTA on a ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet")," network. API load balancer: ",(0,a.kt)("a",{parentName:"p",href:"https://api.testnet.shimmer.network"},"https://api.testnet.shimmer.network")),(0,a.kt)("p",null,"Network explorer is available at ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/testnet"},"IOTA Tangle Explorer"),"."),(0,a.kt)("p",null,"In order to properly test value-based transactions on testnet network, you are going to need some tokens! You can get some testnet tokens using the ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network"},"faucet"),". However, we strongly recommend to leverage official ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/wallet.rs/welcome"},"wallet.rs")," library in case of value-based IOTA transfers."))}u.isMDXComponent=!0}}]);