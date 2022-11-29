"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var m=2;m<i;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const i={description:"Solidity smart contract example.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","how to"]},a="Solidity Smart Contract Example",c={unversionedId:"guide/evm/examples/introduction",id:"guide/evm/examples/introduction",title:"Solidity Smart Contract Example",description:"Solidity smart contract example.",source:"@site/shimmer/external/wasp/documentation/docs/guide/evm/examples/introduction.md",sourceDirName:"guide/evm/examples",slug:"/guide/evm/examples/introduction",permalink:"/shimmer/smart-contracts/guide/evm/examples/introduction",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/evm/examples/introduction.md",tags:[],version:"current",frontMatter:{description:"Solidity smart contract example.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","how to"]},sidebar:"tutorialSidebar",previous:{title:"EVM Tooling",permalink:"/shimmer/smart-contracts/guide/evm/tooling"},next:{title:"ERC20 Example",permalink:"/shimmer/smart-contracts/guide/evm/examples/ERC20"}},l={},m=[],s={toc:m};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solidity-smart-contract-example"},"Solidity Smart Contract Example"),(0,o.kt)("p",null,"Solidity smart contracts on IOTA Smart Contracts are compatible with Solidity smart contracts on any other network, so most smart contracts will work directly without any modification. To get a rough indication of how a simple Solidity smart contract looks like, see the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.8.6;\n// No SafeMath needed for Solidity 0.8+\n\ncontract Counter { \n   \n    uint256 private _count;\n        \n    function current() public view returns (uint256) {\n        return _count;\n    }   \n\n    function increment() public {\n        _count += 1;\n    }   \n\n    function decrement() public {\n        _count -= 1;\n    }   \n}\n")),(0,o.kt)("p",null,"For more information, please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/"},"official Solidity documentation"),"."))}p.isMDXComponent=!0}}]);