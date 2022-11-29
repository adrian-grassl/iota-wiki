"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[14788],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),m=o,u=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},23032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={description:"Existing EVM tooling is compatible and can be used directly with an IOTA Smart Contracts chain running EVM. You can configure hardhat, metamask, remix, Ether.js and Web3.js among others.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","chain","EVM","Solidity","tooling","wasp-cli","hardhat","metamask","JSON-RPC","reference"]},r="EVM Tooling",l={unversionedId:"guide/evm/tooling",id:"guide/evm/tooling",title:"EVM Tooling",description:"Existing EVM tooling is compatible and can be used directly with an IOTA Smart Contracts chain running EVM. You can configure hardhat, metamask, remix, Ether.js and Web3.js among others.",source:"@site/shimmer/external/wasp/documentation/docs/guide/evm/tooling.md",sourceDirName:"guide/evm",slug:"/guide/evm/tooling",permalink:"/shimmer/smart-contracts/guide/evm/tooling",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/evm/tooling.md",tags:[],version:"current",frontMatter:{description:"Existing EVM tooling is compatible and can be used directly with an IOTA Smart Contracts chain running EVM. You can configure hardhat, metamask, remix, Ether.js and Web3.js among others.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","chain","EVM","Solidity","tooling","wasp-cli","hardhat","metamask","JSON-RPC","reference"]},sidebar:"tutorialSidebar",previous:{title:"The ISC Magic Contract",permalink:"/shimmer/smart-contracts/guide/evm/magic"},next:{title:"Solidity Smart Contract Example",permalink:"/shimmer/smart-contracts/guide/evm/examples/introduction"}},s={},c=[{value:"Tooling Considerations",id:"tooling-considerations",level:2},{value:"Wasp-cli",id:"wasp-cli",level:2},{value:"MetaMask",id:"metamask",level:2},{value:"Remix",id:"remix",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Hardhat",id:"hardhat",level:2},{value:"Video Tutorial",id:"video-tutorial-1",level:2},{value:"Ethers.js/Web3.js",id:"ethersjsweb3js",level:2},{value:"Other Tooling",id:"other-tooling",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evm-tooling"},"EVM Tooling"),(0,o.kt)("p",null,"EVM on IOTA Smart Contracts has been integrated in a way that the existing EVM tooling is compatible, and can be used directly with an IOTA Smart Contracts chain running EVM as long as a couple of things are taken into account."),(0,o.kt)("h2",{id:"tooling-considerations"},"Tooling Considerations"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Please make sure you use the correct JSON-RPC endpoint URL in your tooling for your chain. You can find the JSON-RPC endpoint URL in the Wasp dashboard which can be found on http://localhost:7000 if you run your Wasp node locally (default login: wasp/wasp). "),(0,o.kt)("li",{parentName:"ol"},"Please make sure you use the right ",(0,o.kt)("inlineCode",{parentName:"li"},"Chain ID")," as configured while starting the JSON-RPC service. If you did not explicitly define this while starting the service, the default Chain ID will be ",(0,o.kt)("inlineCode",{parentName:"li"},"1074"),". "),(0,o.kt)("li",{parentName:"ol"},"Fees are being handled on the IOTA Smart Contracts chain level, not EVM level. Because of this, you can simply use a gas price of 0 on EVM level at this point in time.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Re-using an existing Chain ID is not recommended and can be a security risk. For any serious chain you will be running make sure you register a unique Chain ID on ",(0,o.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"Chainlist")," and use that instead of the default.")),(0,o.kt)("h2",{id:"wasp-cli"},"Wasp-cli"),(0,o.kt)("p",null,"The Wasp CLI has some very basic functionalities to manage an EVM chain. Given the compatibility with existing tooling, only the basics are covered to get started with IOTA Smart Contracts and EVM. The JSON-RPC endpoint automatically starts with Wasp itself and you can use the CLI tools to deploy a new chain which spawns up a new EVM chain automatically and to deposit tokens to a EVM chain address. The following example allows you to deposit your networks base token (IOTA on the IOTA network, SMR on the Shimmer network) to a EVM address (can be a metamask generated address for example)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain deposit <0xEthAddress> base:1000000\n")),(0,o.kt)("p",null,"After this you will have the balance on your Ethereum account available to pay for gas fees with for example Metamask."),(0,o.kt)("h2",{id:"metamask"},"MetaMask"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," is a popular EVM compatible wallet which runs in a browser extension that allows you to let your wallet interact with web applications utilizing an EVM chain (dApps). "),(0,o.kt)("p",null,"To use your EVM chain with MetaMask, simply open up MetaMask and click on the network drop-down list at the very top. At the bottom of this list you will see the option ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom RPC"),", click on this. For a local setup use the values as shown in the image below:"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(27414).Z},(0,o.kt)("img",{alt:"MetaMask Network",src:a(20617).Z,width:"507",height:"767"}))),(0,o.kt)("p",null,"Make sure that your ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC Url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain ID")," are set correctly and match the dashboard values. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Network Name")," can be whatever you see fit."),(0,o.kt)("p",null,"If you wish to use additional EVM chains with Metamask, you can simply add more Custom RPC networks, as long as they have a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC Url"),". Once this is done, you can start using MetaMask to manage your EVM wallet or issue/sign transactions with any dApp running on that network. "),(0,o.kt)("h3",{id:"remix"},"Remix"),(0,o.kt)("p",null,"If you also want to use the ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," to deploy any regular Solidity Smart Contract, you should set the environment as ",(0,o.kt)("strong",{parentName:"p"},"Injected Web3"),", which should then connect with your MetaMask wallet."),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("em",{parentName:"p"},"Deploy & Run transactions")," button in the menu on the left and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment")," dropdown."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/7383572/146169413-fd0992e3-7c2d-4c66-bf84-8dd4f2f492a7.png"},(0,o.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/7383572/146169413-fd0992e3-7c2d-4c66-bf84-8dd4f2f492a7.png",alt:"Select Injected Web3 from the Environment dropdown"}))),(0,o.kt)("p",null,"Metamask will ask to connect to Remix and once connected the ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment")," will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom (1074) network"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/7383572/146169653-fd692eab-6e74-4b17-8833-bd87dafc0ce2.png"},(0,o.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/7383572/146169653-fd692eab-6e74-4b17-8833-bd87dafc0ce2.png",alt:"Environment will be set to Injected Web3"}))),(0,o.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yOyl30LQfac",title:"Deploy Solidity Contract via Remix + Metamask",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"hardhat"},"Hardhat"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," is a commandline toolbox that allows you to deploy, test, verify, and interact with Solidity smart contracts on an EVM chain. EVM chains running on IOTA Smart Contracts are compatible with Hardhat; simply make sure you add the correct network parameters to your ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"networks: {\n    local: {\n        url: 'http://localhost:9090/chain/rms1.../evm/jsonrpc',\n        chainId: 1074,\n        accounts: [privkey],\n        timeout: 60000\n    }\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Currently, there is no validation service available for EVM/Solidity smart contracts on IOTA Smart Contracts, which is often offered through block explorer API's.")),(0,o.kt)("h2",{id:"video-tutorial-1"},"Video Tutorial"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zfc4ENTQkDE",title:"Deploy Solidity Contracts with Hardhat",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"ethersjsweb3js"},"Ethers.js/Web3.js"),(0,o.kt)("p",null,"As long as you input the right configuration parameters for the JSON-RPC endpoint to talk to, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.io/"},"Ethers.js")," and ",(0,o.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/"},"Web3.js")," are also compatible with EVM chains on IOTA Smart Contracts. Alternatively you can let both interact through MetaMask instead so that it uses the network as configured in MetaMask. For more information on this, read their documentation."),(0,o.kt)("h2",{id:"other-tooling"},"Other Tooling"),(0,o.kt)("p",null,"Most other tooling available will be compatible as well as long as you enter the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC Url"),"."))}p.isMDXComponent=!0},27414:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/metamask_beta-57f5475de2146bc6b763e372400f54df.png"},20617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask_beta-57f5475de2146bc6b763e372400f54df.png"}}]);