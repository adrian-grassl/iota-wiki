"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[72673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={toc:[]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Iota.rs",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Though this library is functionally complete, the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/iota.rs/welcome"},"iota.rs")," library is maintained\nby more contributors, more performant and\nhas the latest features.")))}a.isMDXComponent=!0;const s={description:"Get started with iota.js.  Prequisites, required prior knowledge and install the library",image:"/img/client_banner.png",keywords:["npm","node","install","build","example","typescript","javascript","explanation"]},l="Getting Started With iota.js",p={unversionedId:"getting_started",id:"getting_started",title:"Getting Started With iota.js",description:"Get started with iota.js.  Prequisites, required prior knowledge and install the library",source:"@site/next/external/iota.js/documentation/docs/getting_started.mdx",sourceDirName:".",slug:"/getting_started",permalink:"/next/iotajs/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/getting_started.mdx",tags:[],version:"current",frontMatter:{description:"Get started with iota.js.  Prequisites, required prior knowledge and install the library",image:"/img/client_banner.png",keywords:["npm","node","install","build","example","typescript","javascript","explanation"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/next/iotajs/welcome"},next:{title:"Run Code Examples",permalink:"/next/iotajs/how_tos/run_how_tos"}},c={},u=[{value:"Required Prior Knowledge",id:"required-prior-knowledge",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the Library",id:"install-the-library",level:2},{value:"Use the Library",id:"use-the-library",level:2},{value:"How-To Guides",id:"how-to-guides",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-iotajs"},"Getting Started With iota.js"),(0,o.kt)(a,{mdxType:"IotaRS"}),(0,o.kt)("h2",{id:"required-prior-knowledge"},"Required Prior Knowledge"),(0,o.kt)("p",null,"This wiki assumes that you already know the basics of ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),". If you are\nunfamiliar with the language, you can find documentation to get started in the official\n",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/"},"TypeScript documentation"),"."),(0,o.kt)("p",null,"If you have never programmed in your life, MIT has published an open\n",(0,o.kt)("a",{parentName:"p",href:"https://ocw.mit.edu/courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/"},"introductory course to programming"),"\nwhich could help you get started."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you can start using the library, you will need to install the following software:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"node"),": You should use v15, or above."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.com"},"npm"),": You should use v7, or above.")),(0,o.kt)("h2",{id:"install-the-library"},"Install the Library"),(0,o.kt)("p",null,"You can install the iota.js library using npm with a single command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/iota.js@next\n")),(0,o.kt)("h2",{id:"use-the-library"},"Use the Library"),(0,o.kt)("p",null,"Once you have ",(0,o.kt)("a",{parentName:"p",href:"#install-the-library"},"installed the library"),", you can start using it by requiring the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/iota.js"},"iota.js package")," as shown in the following example which connects to a\nChrysalis node and logs some of its properties to the console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {SingleNodeClient} = require("@iota/iota.js");\n\nasync function run() {\n    const client = new SingleNodeClient("https://chrysalis-nodes.iota.org");\n\n    const info = await client.info();\n    console.log("Node Info");\n    console.log("\\tName:", info.name);\n    console.log("\\tVersion:", info.version);\n    console.log("\\tIs Healthy:", info.isHealthy);\n    console.log("\\tNetwork Id:", info.networkId);\n    console.log("\\tLatest Milestone Index:", info.latestMilestoneIndex);\n    console.log("\\tConfirmed Milestone Index:", info.confirmedMilestoneIndex);\n    console.log("\\tPruning Index:", info.pruningIndex);\n    console.log("\\tFeatures:", info.features);\n    console.log("\\tMin PoW Score:", info.minPowScore);\n}\n\nrun()\n    .then(() => console.log("Done"))\n    .catch((err) => console.error(err));\n')),(0,o.kt)("h2",{id:"how-to-guides"},"How-To Guides"),(0,o.kt)("p",null,"You can find additional usage ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.js/tree/feat/stardust/packages/iota/examples"},"examples")," in the\n",(0,o.kt)("a",{parentName:"p",href:"/next/iotajs/how_tos/run_how_tos"},"How To section"),"."))}m.isMDXComponent=!0}}]);