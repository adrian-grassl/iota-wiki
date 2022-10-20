"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return r?i.createElement(b,o(o({ref:t},p),{},{components:r})):i.createElement(b,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=r(87462),a=(r(67294),r(3905));const n={description:"The IOTA client libraries allow you to easily integrate IOTA into your own applications.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["wallet library","client library","Tangle","C","golang","javascript","rust","explanation"]},o="Libraries",l={unversionedId:"explanations/libraries",id:"explanations/libraries",title:"Libraries",description:"The IOTA client libraries allow you to easily integrate IOTA into your own applications.",source:"@site/iota/external/introduction-docs/production/docs/explanations/libraries.md",sourceDirName:"explanations",slug:"/explanations/libraries",permalink:"/introduction/explanations/libraries",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/docs/iota/external/introduction-docs/production/docs/explanations/libraries.md",tags:[],version:"current",frontMatter:{description:"The IOTA client libraries allow you to easily integrate IOTA into your own applications.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["wallet library","client library","Tangle","C","golang","javascript","rust","explanation"]},sidebar:"mySidebar",previous:{title:"Node Software",permalink:"/introduction/explanations/node_software"},next:{title:"IOTA Protocol TIPs",permalink:"/introduction/explanations/protocol_tip"}},s={},c=[{value:"Utilities",id:"utilities",level:2},{value:"<strong>Developer tools</strong>",id:"developer-tools",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"libraries"},"Libraries"),(0,a.kt)("p",null,"With the IOTA client libraries you can easily integrate IOTA into your own applications. You can choose a library to match your use case."),(0,a.kt)("p",null,"The official IOTA libraries serve as ",(0,a.kt)("inlineCode",{parentName:"p"},"one-source-code-of-truth")," to IOTA users and provide binding to other programming languages. Below is a list of the IOTA libraries. You can also check out the ",(0,a.kt)("a",{parentName:"p",href:"https://blog.iota.org/the-new-iota-client-libraries-harder-better-faster-stronger/"},"IOTA client libraries blog post"),", to learn about the libraries' core principles. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.iota.org/iota.rs/welcome"},"client-lib"),": a general purpose IOTA client library for interacting with the IOTA network (Tangle)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet-lib"),": a stateful library specifically designed to be used for IOTA value-based transfers ."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.c"},"iota.c"),": a special-purpose library in C for embedded devices (with microcontrollers) covering a basic features of ",(0,a.kt)("inlineCode",{parentName:"li"},"client-lib")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"wallet-lib.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.js/tree/chrysalis"},"iota.js"),": an initial IOTA client library in Typescript that can be used in a web browser."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/tree/chrysalis/phase2"},"iota.go"),": an initial IOTA client library in Golang.")),(0,a.kt)("div",{class:"iframe-wrapper"},(0,a.kt)("iframe",{src:"https://www.youtube.com/embed/N2VW3zJQmso",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Libraries Overview",src:r(74061).Z,width:"862",height:"575"})),(0,a.kt)("p",null,"Currently, all of the libraries are in active development. The libraries target the Chrysalis devnet and no longer work with the previous IOTA mainnet."),(0,a.kt)("p",null,"The IOTA foundation is in charge of maintaining the official client libraries. You can find the libraries' source code in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger"},"Official GitHub repository"),"."),(0,a.kt)("h2",{id:"utilities"},"Utilities"),(0,a.kt)("h4",{id:"developer-tools"},(0,a.kt)("strong",{parentName:"h4"},"Developer tools")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://explorer.iota.org/mainnet"},"Official explorer"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://faucet.devnet.chrysalis2.com/"},"Devnet faucet"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/cli-wallet"},"Commandline wallet"),".")),(0,a.kt)("hr",null))}u.isMDXComponent=!0},74061:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/overview-libraries-1305e7244710fefcd1d3d1cbf708353e.svg"}}]);