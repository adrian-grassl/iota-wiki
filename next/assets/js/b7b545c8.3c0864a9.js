"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[17254],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),g=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=g(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=g(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var g=2;g<o;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84536:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var r=n(87462),a=(n(67294),n(3905));const o={description:"Get started with the IOTA Client Library and choose your programming language.",image:"/img/Banner/banner_client_lib_getting_started.png",keywords:["rust","node.js","python","java","javascript","client"]},i="Getting Started",s={unversionedId:"getting_started/getting_started",id:"getting_started/getting_started",title:"Getting Started",description:"Get started with the IOTA Client Library and choose your programming language.",source:"@site/next/external/iota.rs/documentation/docs/getting_started/getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/",permalink:"/next/iota.rs/getting_started/",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/getting_started/getting_started.md",tags:[],version:"current",frontMatter:{description:"Get started with the IOTA Client Library and choose your programming language.",image:"/img/Banner/banner_client_lib_getting_started.png",keywords:["rust","node.js","python","java","javascript","client"]},sidebar:"docs",previous:{title:"Overview",permalink:"/next/iota.rs/overview"},next:{title:"Getting Started with Java",permalink:"/next/iota.rs/getting_started/java"}},l={},g=[{value:"Choose Your Programming Language",id:"choose-your-programming-language",level:2},{value:"Connect to the Testnet API",id:"connect-to-the-testnet-api",level:2},{value:"Explore the Network",id:"explore-the-network",level:2},{value:"Get Test Tokens",id:"get-test-tokens",level:2}],p={toc:g};function c(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IOTA Client Library getting started",src:n(10517).Z,width:"862",height:"200"})),(0,a.kt)("h2",{id:"choose-your-programming-language"},"Choose Your Programming Language"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/getting_started/rust"},"Rust")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/getting_started/nodejs"},"Node.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/getting_started/python"},"Python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/getting_started/java"},"Java"))),(0,a.kt)("h2",{id:"connect-to-the-testnet-api"},"Connect to the Testnet API"),(0,a.kt)("p",null,"We recommended that you start your interactions with Shimmer on a ",(0,a.kt)("em",{parentName:"p"},"testnet")," network. The ",(0,a.kt)("em",{parentName:"p"},"testnet")," will allow you to safely\nget acquainted with the ",(0,a.kt)("inlineCode",{parentName:"p"},"iota.rs")," library, without the risk of losing any funds if you make a mistake along the way.\nYou can use this Shimmer Testnet API load balancer: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://api.testnet.shimmer.network\n")),(0,a.kt)("h2",{id:"explore-the-network"},"Explore the Network"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/testnet"},"Shimmer Tangle Explorer")," to view transactions and data stored in\nthe IOTA Tangle."),(0,a.kt)("h2",{id:"get-test-tokens"},"Get Test Tokens"),(0,a.kt)("p",null,"In order to properly test value-based transactions on testnet network, you are going to need some tokens. You can get\nsome testnet tokens through the ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network"},"Shimmer Faucet"),"."))}c.isMDXComponent=!0},10517:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/banner_client_lib_getting_started-2775e847bd35494ad9d8f082d6b06d36.png"}}]);