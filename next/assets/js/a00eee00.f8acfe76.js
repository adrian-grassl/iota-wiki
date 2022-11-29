"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[19941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.",image:"/img/Banner/banner_wasp.png",keywords:["smart contracts","core concepts","scaling","flexibility","explanation"]},i="IOTA Smart Contracts",s={unversionedId:"overview",id:"overview",title:"IOTA Smart Contracts",description:"IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.",source:"@site/next/external/wasp/documentation/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/next/smart-contracts/overview",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/overview.md",tags:[],version:"current",frontMatter:{description:"IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.",image:"/img/Banner/banner_wasp.png",keywords:["smart contracts","core concepts","scaling","flexibility","explanation"]},sidebar:"tutorialSidebar",next:{title:"Smart Contracts",permalink:"/next/smart-contracts/guide/core_concepts/smart-contracts"}},c={},l=[{value:"ISC Advantages",id:"isc-advantages",level:2},{value:"Scaling and Fees",id:"scaling-and-fees",level:3},{value:"Custom Chains",id:"custom-chains",level:3},{value:"Flexibility",id:"flexibility",level:3},{value:"Wasp",id:"wasp",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iota-smart-contracts"},"IOTA Smart Contracts"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wasp Node",src:n(75695).Z,width:"862",height:"200"})),(0,r.kt)("p",null,"IOTA Smart Contracts (ISC) is a platform that brings scalable and flexible smart contracts into the IOTA ecosystem. It\nallows anyone to spin up a smart contract blockchain and anchor it to the IOTA Tangle, a design that offers multiple\nadvantages."),(0,r.kt)("h2",{id:"isc-advantages"},"ISC Advantages"),(0,r.kt)("h3",{id:"scaling-and-fees"},"Scaling and Fees"),(0,r.kt)("p",null,"Due to the ordered structure and execution time of a smart contract, a single blockchain can only handle so many\ntransactions per second before deciding which transactions it needs to postpone until other blocks are produced, as\nthere is no processing power available for them on that chain.\nOn smart contract platforms that support a single blockchain, this eventually results in low throughput and high fees."),(0,r.kt)("p",null,"ISC allows many chains to be anchored to the IOTA Tangle and lets them execute in parallel and communicate with each\nother.\nBecause of this, ISC will typically have much higher throughput and lower fees than single-chain smart contract\nplatforms.\nMoreover, ISC is a level 2 solution where only a committee of nodes spends resources executing the smart contracts for\nany given chain. Hence, the rest of the IOTA network is mainly unaffected by ISC traffic."),(0,r.kt)("h3",{id:"custom-chains"},"Custom Chains"),(0,r.kt)("p",null,"Since anyone can start a new chain and set its rules, many things that were otherwise not available in single-chain\nplatforms become possible."),(0,r.kt)("p",null,"For example, the chain owner has complete control over the gas fee policy: set the gas price, select which native token\nto charge, and what percentage of the fee goes to validators."),(0,r.kt)("p",null,"It is possible to spin up a private blockchain with no public data besides the state hash anchored to the main IOTA\nTangle.\nThis allows parties that need private blockchains to use the security of the public IOTA network without exposing their\ndata to the public."),(0,r.kt)("h3",{id:"flexibility"},"Flexibility"),(0,r.kt)("p",null,"ISC is agnostic about the virtual machine that executes the smart contract code.\nWe support ",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/docs/book/"},"Rust/Wasm"),"-based smart contracts\nand ",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.6/"},"Solidity/EVM"),"-based smart contracts.\nEventually, all kinds of virtual machines can be supported in an ISC chain depending on the demand."),(0,r.kt)("p",null,"IOTA Smart Contracts are more complex than conventional smart contracts, but this provides freedom and flexibility to\nuse smart contracts in a wide range of use cases."),(0,r.kt)("h2",{id:"wasp"},"Wasp"),(0,r.kt)("p",null,"Wasp is the reference implementation of IOTA Smart Contracts.\nMultiple Wasp nodes form a committee in charge of an ISC chain.\nWhen they reach a consensus on a virtual machine state-change, they anchor that state change to the IOTA tangle, making\nit immutable."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"We are eager to receive your feedback about your experiences with the IOTA Smart Contracts Beta. You can\nuse ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSd4jcmLzCPUNDIijEwGzuWerO23MS0Jmgzszgs-D6_awJUWow/viewform"},"this form")," to\nshare your developer experience with us. This feedback will help us improve the product in future releases."))}u.isMDXComponent=!0},75695:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner_wasp-41ba3b0d32db6cf5a6704eaafe22d212.png"}}]);