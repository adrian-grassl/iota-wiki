"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[69917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"tangle",title:"The Tangle",description:"The Tangle is the data structure behind Shimmer that contains all information about token ownership.",image:"/img/iota-wiki.png",keywords:["explanation","shimmer"]},i="The Tangle",l={unversionedId:"tangle",id:"tangle",title:"The Tangle",description:"The Tangle is the data structure behind Shimmer that contains all information about token ownership.",source:"@site/next/learn/tangle.md",sourceDirName:".",slug:"/tangle",permalink:"/next/learn/tangle",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/next/learn/tangle.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{id:"tangle",title:"The Tangle",description:"The Tangle is the data structure behind Shimmer that contains all information about token ownership.",image:"/img/iota-wiki.png",keywords:["explanation","shimmer"]},sidebar:"about",previous:{title:"Welcome to Shimmer",permalink:"/next/learn/welcome"},next:{title:"The Coordinator",permalink:"/next/learn/coordinator"}},s={},c=[{value:"The Tangle Versus Blockchains",id:"the-tangle-versus-blockchains",level:2},{value:"Blockchains",id:"blockchains",level:3},{value:"The Tangle",id:"the-tangle-1",level:3}],h={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-tangle"},"The Tangle"),(0,r.kt)("p",null,"The Tangle is a data structure that is replicated across a network of computers (also called 'nodes') that contains all the information necessary to track token ownership. It forms a directed acyclic graph of blocks (a block-DAG), where each newer block is attached to multiple older ones."),(0,r.kt)("p",null,"Shimmer nodes currently reach consensus on the ledger state with the help of milestone blocks (also called 'milestones'). Milestones are issued by a central node called the ",(0,r.kt)("a",{parentName:"p",href:"/next/learn/coordinator"},"Coordinator"),". The Coordinator represents a temporary solution and will be eliminated as part of Shimmer's decentralization efforts."),(0,r.kt)("h2",{id:"the-tangle-versus-blockchains"},"The Tangle Versus Blockchains"),(0,r.kt)("p",null,"While the Tangle and blockchains have the same function of maintaining their ledger state, the Tangle overcomes the difficulties blockchains face.\nThe Tangle naturally succeeds the blockchain as its next evolutionary step as it offers features suited to establish more efficient and scalable distributed ledger solutions."),(0,r.kt)("p",null,'This section refers to the most recent "Tangle" research findings:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2205.02177"},"Tangle 2.0 Leaderless Nakamoto Consensus on the Heaviest DAG")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2205.01345"},"Reality-Based UTXO Ledger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2208.08254"},"Robustness Of The Tangle 2.0 Consensus"))),(0,r.kt)("h3",{id:"blockchains"},"Blockchains"),(0,r.kt)("p",null,"A blockchain consists of a growing list of records also called blocks that are linked together using cryptography.\nTransactions can only become part of the ledger if they are included in a newly issued block.\nIn the case that not all new transactions fit into one block, some of them have to be postponed to the next block or later.\nAlso, typically, block producers favor to include transactions from users willing to pay higher fees.\nAccelerating block creation and/or increasing block sizes doesn't solve the issues, as it is well known that this would compromise safety. In other words, to guarantee the security of the system, the throughput of the system must be artificially suppressed so that each block propagates fully before the next block is created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An animation of a blockchain where new transactions have to pass through a narrow gap one by one.",src:n(35938).Z,title:"Click to see the full-sized image.",width:"867",height:"500"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The blockchain bottleneck.")),(0,r.kt)("p",null,"The fact that only one block producer can advance the ledger state does not only create a bottleneck with well-known performance limitations, but also causes other block candidates that do not win the race to be discarded - and in the case of PoW systems, all the effort and electricity put into their calculation might be wasted."),(0,r.kt)("p",null,"Blockchains further face several problems with the intermediary miners or validators e.g. mining races, centralisation, miner extractable value, and negative externalities."),(0,r.kt)("h3",{id:"the-tangle-1"},"The Tangle"),(0,r.kt)("p",null,"The Tangle describes a novel leaderless, probabilistic consensus protocol that enables parallel validation of transactions without requiring total ordering. It also enables the elimination of intermediary miners and validators.\nThe parallelization, the absence of intermediaries, the capability to work in an asynchronous setting and the leaderless approach offers a highly performant consensus and ledger solution."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An animation of the Tangle where the passage is much wider and allows multiple transactions at a time.",src:n(76475).Z,width:"867",height:"500"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Allowing parallel processing removes congestion.")))}d.isMDXComponent=!0},35938:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blockchain-bottleneck-c807d504ff52169427d3ca4cf0179a8c.gif"},76475:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tangle-bottleneck-ad9ab01d5399a5cefbac1cbd1be3900a.gif"}}]);