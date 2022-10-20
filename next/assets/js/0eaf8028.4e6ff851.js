"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","magic","Ethereum","Solidity","metamask","JSON","RPC"]},o="The ISC Magic Contract",c={unversionedId:"guide/evm/magic",id:"guide/evm/magic",title:"The ISC Magic Contract",description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",source:"@site/next/external/wasp/documentation/docs/guide/evm/magic.md",sourceDirName:"guide/evm",slug:"/guide/evm/magic",permalink:"/next/smart-contracts/guide/evm/magic",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/evm/magic.md",tags:[],version:"current",frontMatter:{description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","magic","Ethereum","Solidity","metamask","JSON","RPC"]},sidebar:"tutorialSidebar",previous:{title:"How to use EVM in IOTA Smart Contracts",permalink:"/next/smart-contracts/guide/evm/using"},next:{title:"EVM Tooling",permalink:"/next/smart-contracts/guide/evm/tooling"}},l={},s=[{value:"Examples",id:"examples",level:2},{value:"Calling getEntropy()",id:"calling-getentropy",level:3},{value:"Calling a native contract",id:"calling-a-native-contract",level:3}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-isc-magic-contract"},"The ISC Magic Contract"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/evm/compatibility"},"EVM and ISC are inherently very different platforms"),".\nSome EVM-specific actions (e.g., manipulating Ethereum tokens) are disabled, and EVM contracts can access ISC-specific\nfunctionality through the ",(0,r.kt)("em",{parentName:"p"},"ISC Magic Contract"),"."),(0,r.kt)("p",null,"The Magic contract is an EVM contract deployed by default on every ISC chain, in the EVM genesis block, at\naddress ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1074"),".\nThe implementation of the Magic contract is baked-in in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/core_contracts/evm"},(0,r.kt)("inlineCode",{parentName:"a"},"evm"))," ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/core_contracts/overview"},"core contract"),");\ni.e. it is not a pure-Solidity contract."),(0,r.kt)("p",null,"You can access the Magic contract from any Solidity contract by importing\nits ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol"},"interface"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"calling-getentropy"},"Calling getEntropy()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity >=0.8.5;\n\nimport "@iscmagic/ISC.sol";\n\ncontract MyEVMContract {\n    event EntropyEvent(bytes32 entropy);\n\n    // this will emit a "random" value taken from the ISC entropy value\n    function emitEntropy() public {\n        bytes32 e = isc.getEntropy();\n        emit EntropyEvent(e);\n    }\n}\n')),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},'import "@iscmagic/ISC.sol"'),", the global variable ",(0,r.kt)("inlineCode",{parentName:"p"},"isc")," points to the Magic contract at ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1074"),", which can be\ncalled like a regular EVM contract.\nFor example, if you call ",(0,r.kt)("inlineCode",{parentName:"p"},"isc.getEntropy()")," you are calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"getEntropy")," function which, in turn,\ncalls ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/sandbox"},"ISC Sandbox's")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GetEntropy"),"."),(0,r.kt)("h3",{id:"calling-a-native-contract"},"Calling a native contract"),(0,r.kt)("p",null,"You can call native contracts using ",(0,r.kt)("inlineCode",{parentName:"p"},"isc.call")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity >=0.8.5;\n\nimport "@iscmagic/ISC.sol";\n\ncontract MyEVMContract {\n    event EntropyEvent(bytes32 entropy);\n\n    function callInccounter() public {\n        ISCDict memory params = ISCDict(new ISCDictItem[](1));\n        bytes memory int64Encoded42 = hex"2A00000000000000";\n        params.items[0] = ISCDictItem("counter", int64Encoded42);\n        ISCAllowance memory allowance;\n        isc.call(isc.hn("inccounter"), isc.hn("incCounter"), params, allowance);\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isc.hn")," is used to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"hname")," of the incounter countract and the ",(0,r.kt)("inlineCode",{parentName:"p"},"incCounter")," entry point. You can call view entry points using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol#L67"},"isc.callView"),"."),(0,r.kt)("p",null,"The Magic Contract's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol"},"interface"),"\nis well documented, so it doubles as an API reference."),(0,r.kt)("p",null,"There are some usage examples in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/evm/evmtest/ISCTest.sol"},"ISCTest.sol")," contract (used\ninternally in unit tests)."))}m.isMDXComponent=!0}}]);