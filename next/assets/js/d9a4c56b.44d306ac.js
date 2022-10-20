"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[14795],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={title:"Native Assets",description:"This article explains the different types of (native) Assets on IOTA.",keywords:["NFT","digital native assets","non-fungible tokens","native token","asset wrapping","Layer 1","Layer 2"]},i=void 0,o={unversionedId:"native-assets",id:"native-assets",title:"Native Assets",description:"This article explains the different types of (native) Assets on IOTA.",source:"@site/next/learn/native-assets.md",sourceDirName:".",slug:"/native-assets",permalink:"/next/learn/native-assets",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/next/learn/native-assets.md",tags:[],version:"current",lastUpdatedAt:1664837086,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{title:"Native Assets",description:"This article explains the different types of (native) Assets on IOTA.",keywords:["NFT","digital native assets","non-fungible tokens","native token","asset wrapping","Layer 1","Layer 2"]},sidebar:"about",previous:{title:"Community Tutorials",permalink:"/next/learn/smart-contracts/smart-contracts-community-tutorials"},next:{title:"Glossary",permalink:"/next/learn/glossary"}},l={},p=[{value:"Native Tokens",id:"native-tokens",level:2},{value:"NFTs",id:"nfts",level:2},{value:"Layer 2 Assets",id:"layer-2-assets",level:2},{value:"Asset Wrapping",id:"asset-wrapping",level:3}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tokenized-assets",src:a(44522).Z,width:"1828",height:"1036"})),(0,r.kt)("p",null,'Layer 1 Assets are also known as "',(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/pull/38"},"Native Assets"),'". With the\n',(0,r.kt)("a",{parentName:"p",href:"https://blog.iota.org/tokenization-on-the-tangle-iota-digital-assets-framework/"},"IOTA tokenization framework"),", you can\ncreate NFTs and new Tokens on L1 using the new output types. You can transfer native assets on the Tangle without any fees and between different smart contract chains."),(0,r.kt)("h2",{id:"native-tokens"},"Native Tokens"),(0,r.kt)("p",null,"In Shimmer, you can create Native out of thin air as long as you fulfill the ",(0,r.kt)("a",{parentName:"p",href:"/learn/welcome#storage-deposits"},"storage deposit"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Native tokens can have different types of metadata."),(0,r.kt)("admonition",{title:"Interesting Tangle Improvement Proposals (TIPs)",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0030/tip-0030.md"},"TIP-30: Native Token Metadata Standard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Kami-Labs/tips/blob/tip-33/tips/TIP-0033/tip-0033.md"},"TIP-33: IOTA Public Token Registry")))),(0,r.kt)("h2",{id:"nfts"},"NFTs"),(0,r.kt)("p",null,"Ethereum was the first blockchain to support NFTs with its ERC-721 standard. The difference from regular tokens is that the NFT is unique and verifiable and can be used to prove ownership of any digital good."),(0,r.kt)("p",null,"There are many use cases for NFTs. The most common use case is to link an image to it, which becomes a unique digital art that can be sold on open NFT marketplaces."),(0,r.kt)("p",null,"Other use cases would be to use NFTs as assets in games, for event tickets, for Decentralized Finance (DeFi), for voting\nin decentralized autonomous organizations (DAOs) or for any objects in the Metaverse."),(0,r.kt)("admonition",{title:"Interesting Tangle Improvement Proposals (TIPs)",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Kami-Labs/tips/blob/main/tips/TIP-0027/tip-0027.md"},"TIP-27: IOTA NFT standards")))),(0,r.kt)("h2",{id:"layer-2-assets"},"Layer 2 Assets"),(0,r.kt)("p",null,"Layer 2 Assets are created within Smart Contracts and can be minted out of thin air. That means you don't need any base token to mint new NFTs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the Wasm VM, there are ERC721 Standards implemented in\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wasp/tree/develop/contracts/wasm/erc721"},"Rust, Go, and Typescript"),"."),(0,r.kt)("li",{parentName:"ul"},"EVM Assets (Ethereum standards like ERC721 or ERC1155) can be used in the IOTA Smart Contract EVM Chain. You can use the Open Source library from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenZeppelin/openzeppelin-contracts"},"OpenZeppelin Smart Contracts"),".")),(0,r.kt)("h3",{id:"asset-wrapping"},"Asset Wrapping"),(0,r.kt)("p",null,"As mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-tokenization-framework-specifications/#asset-wrapping"},"IOTA tokenization framework specifications"),", since smart contract chains can issue their own native assets that are traceable to a specific smart contract on a specific chain, a smart contract that handles Layer 2 tokens can use the core contract to wrap its tokens into a native asset. It can also unwrap ",(0,r.kt)("a",{parentName:"p",href:"#digital-native-assets"},"Native Assets (Layer 1)")," tokens into a Layer 2 representation of said token. This means you can send assets across both Layer 1 and Layer 2 chains. However, if you want to send Layer 2 assets to another chain, you will first need to wrap it as a native Layer 1 asset."))}u.isMDXComponent=!0},44522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/layer2-tokenized-assets-d7df581acb16ce123ccc9e76e092ed10.png"}}]);