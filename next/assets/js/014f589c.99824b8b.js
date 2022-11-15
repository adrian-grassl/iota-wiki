"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={description:"How to run the preconfigured Docker setup.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","validator node","docker","image","build","configure","arguments","Hornet","how to"]},i="Preconfigured Development Docker setup",l={unversionedId:"guide/development_tools/docker_preconfigured",id:"guide/development_tools/docker_preconfigured",title:"Preconfigured Development Docker setup",description:"How to run the preconfigured Docker setup.",source:"@site/next/external/wasp/documentation/docs/guide/development_tools/docker_preconfigured.md",sourceDirName:"guide/development_tools",slug:"/guide/development_tools/docker_preconfigured",permalink:"/next/smart-contracts/guide/development_tools/docker_preconfigured",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/development_tools/docker_preconfigured.md",tags:[],version:"current",frontMatter:{description:"How to run the preconfigured Docker setup.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","validator node","docker","image","build","configure","arguments","Hornet","how to"]},sidebar:"tutorialSidebar",previous:{title:"Fair Roulette",permalink:"/next/smart-contracts/guide/example_projects/fair_roulette"},next:{title:"Contributing",permalink:"/next/smart-contracts/contribute"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Running the setup",id:"running-the-setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Wasp-CLI configuration",id:"wasp-cli-configuration",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"preconfigured-development-docker-setup"},"Preconfigured Development Docker setup"),(0,r.kt)("p",null,"This page describes the usage of the preconfigured developer Docker setup."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This setup is intended for ",(0,r.kt)("strong",{parentName:"p"},"local")," development only (you will have your own private network/tangle).")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"To diminish the time spent on configuration and research, we have created a docker-compose setup that ships a pre-configured Wasp node with a Hornet based private tangle, ready to run out of the box."),(0,r.kt)("h2",{id:"running-the-setup"},"Running the setup"),(0,r.kt)("p",null,"Checkout the project and move to the ",(0,r.kt)("inlineCode",{parentName:"p"},"local-setup")," folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp.git\ncd wasp/tools/local-setup\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Further information about the setup is to be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"readme.md"),".")),(0,r.kt)("p",null,"Now run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,r.kt)("p",null,"It initializes Hornet and creates a fresh image of the checked out Wasp code. "),(0,r.kt)("p",null,"If you do modifications inside the branch, docker-compose will include them into the Wasp image too."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All Wasp ports will bind to 127.0.0.1 by default.\nIf you want to expose the ports to the outside world, run ",(0,r.kt)("inlineCode",{parentName:"p"},"HOST=0.0.0.0 docker-compose up"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Wasp is configured to allow any connection coming from wasp-cli. This is fine for development purposes, but please make sure to not run it on a publicly available server, or to create matching firewall filter rules."),(0,r.kt)("p",null,"Besides this, everything should simply work as expected. Faucet requests will be handled accordingly, you will be able to deploy and run smart contracts. All useful ports such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wasp Dashboard (7000) (username: wasp, password: wasp)"),(0,r.kt)("li",{parentName:"ul"},"Wasp API (9090)"),(0,r.kt)("li",{parentName:"ul"},"Hornet Dashboard (8081) (username: admin, password: admin)"),(0,r.kt)("li",{parentName:"ul"},"Hornet API (14265)"),(0,r.kt)("li",{parentName:"ul"},"Faucet API (8091)")),(0,r.kt)("p",null,"are available to the local machine."),(0,r.kt)("h2",{id:"wasp-cli-configuration"},"Wasp-CLI configuration"),(0,r.kt)("p",null,"As all ports are locally available, this ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli.json")," configuration is to be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "l1": {\n    "apiaddress": "http://localhost:14265",\n    "faucetaddress": "http://localhost:8091"\n  },\n  "wasp": {\n    "0": {\n      "api": "127.0.0.1:9090",\n      "nanomsg": "127.0.0.1:5550",\n      "peering": "127.0.0.1:4000"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli init")," to generate a seed, and you are ready to go."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../chains_and_nodes/wasp-cli"},"Configuring wasp-cli")," for further information."))}c.isMDXComponent=!0}}]);