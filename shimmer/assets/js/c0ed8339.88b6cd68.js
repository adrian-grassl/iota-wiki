"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Prepare a development environment to run the value transactions in iota.js tutorial.",image:"/img/client_banner.png",keywords:["tutorial","Node.js 16","auxiliary library","proof of work","pow","shimmer","testnet node"]},i="Prepare Your Development Environment",s={unversionedId:"tutorials/value-transactions/prepare-the-dev-env",id:"tutorials/value-transactions/prepare-the-dev-env",title:"Prepare Your Development Environment",description:"Prepare a development environment to run the value transactions in iota.js tutorial.",source:"@site/shimmer/external/iota.js/documentation/docs/tutorials/value-transactions/02-prepare-the-dev-env.md",sourceDirName:"tutorials/value-transactions",slug:"/tutorials/value-transactions/prepare-the-dev-env",permalink:"/shimmer/iotajs/tutorials/value-transactions/prepare-the-dev-env",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/tutorials/value-transactions/02-prepare-the-dev-env.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Prepare a development environment to run the value transactions in iota.js tutorial.",image:"/img/client_banner.png",keywords:["tutorial","Node.js 16","auxiliary library","proof of work","pow","shimmer","testnet node"]},sidebar:"docs",previous:{title:"Stardust for iota.js: Value Transactions",permalink:"/shimmer/iotajs/tutorials/value-transactions/introduction"},next:{title:"Generate Seeds",permalink:"/shimmer/iotajs/tutorials/value-transactions/generate-a-seed"}},l={},p=[{value:"(optional) Download the Code",id:"optional-download-the-code",level:2},{value:"Available Commands",id:"available-commands",level:3},{value:"Generate Addresses",id:"generate-addresses",level:4},{value:"Sweep Outputs",id:"sweep-outputs",level:4},{value:"Create Your package.json File",id:"create-your-packagejson-file",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prepare-your-development-environment"},"Prepare Your Development Environment"),(0,r.kt)("p",null,"To run the code in this tutorial, you will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/release/v16.16.0/"},"Node.js 16"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/iota.js"},(0,r.kt)("inlineCode",{parentName:"a"},"@iota/iota.js"))," library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.js")," auxiliary libraries:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@iota/crypto.js"},(0,r.kt)("inlineCode",{parentName:"a"},"@iota/crypto.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@iota/util.js"},(0,r.kt)("inlineCode",{parentName:"a"},"@iota/util.js")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@iota/pow-neon.js"},(0,r.kt)("inlineCode",{parentName:"a"},"@iota/pow-neon.js"))," to run Proof of Work (PoW). Alternatively,\nyou can spin up your own node to run the PoW remotely."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access to a Stardust Node (Hornet 2.0.0). You can use the Shimmer testnet Nodes\nat ",(0,r.kt)("a",{parentName:"p",href:"https://api.testnet.shimmer.network"},"https://api.testnet.shimmer.network"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Optional) A TypeScript compiler and related packages"))),(0,r.kt)("h2",{id:"optional-download-the-code"},"(optional) Download the Code"),(0,r.kt)("p",null,"You\ncan ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.js/tree/feat/stardust/packages/iota/examples/shimmer-value-transaction-tutorial"},"download the tutorials codebase"),"\nto follow while you read the next sections. "),(0,r.kt)("admonition",{title:"Running Code Examples",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you plan on using the provided code example, please read the article ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/iotajs/how_tos/run_how_tos"},"How To Run Code Examples"),".")),(0,r.kt)("admonition",{title:"Shimmer Addresses and Outputs",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The tutorial's codebase uses several predefined Shimmer addresses and outputs. If you are going to use other addresses, you will need to update the code accordingly. Likewise, the tutorial codebase assumes a particular state of the addresses and outputs. Before executing the code, please ensure your addresses and outputs are in the expected state.")),(0,r.kt)("h3",{id:"available-commands"},"Available Commands"),(0,r.kt)("h4",{id:"generate-addresses"},"Generate Addresses"),(0,r.kt)("p",null,"You can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"generate-addresses")," script by running the following command from the example's directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run address\n#### Send a Value Transaction\n\nYou can run the `send-value-transaction` script by running the following command from the example's directory:\n\n```bash\nnpm run transaction\n")),(0,r.kt)("h4",{id:"sweep-outputs"},"Sweep Outputs"),(0,r.kt)("p",null,"You can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"sweep-outputs")," script by running the following command from the example's directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run sweep\n")),(0,r.kt)("h2",{id:"create-your-packagejson-file"},"Create Your package.json File"),(0,r.kt)("p",null,"You can create your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file from the example below and place it in your projects base directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "tutorial",\n  "version": "1.0.0",\n  "scripts": {\n    "dist": "tsc",\n    "start": "node dist/index"\n  },\n  "dependencies": {\n    "@iota/crypto.js": "2.0.0-rc.1",\n    "@iota/iota.js": "2.0.0-rc.1",\n    "@iota/util.js": "2.0.0-rc.1",\n    "@iota/pow-neon.js": "2.0.0-rc.2"\n  },\n  "devDependencies": {\n    "typescript": "^4.4.3",\n    "@types/node": "18.7.23"\n  }\n}\n')),(0,r.kt)("p",null,"After you have created the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file, you can install all the necessary dependencies by running the following\ncommand from the same directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you are getting any errors during the installation process please make sure your system is\nusing ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/release/v16.16.0/"},"Node.js 16"),". You can check your node version by running the\nfollowing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n")))}c.isMDXComponent=!0}}]);