"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51093:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Password Storage",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Never store passwords or seeds on a host's environment variables or in the source code in a production\nsetup. Please follow our ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security"),"\nrecommendations for production use.")))}o.isMDXComponent=!0},81892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(51093);const o={title:"Getting Started With Node.js",description:"Getting started with the official IOTA Client Node.js library.",image:"/img/logo/iota_mark_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security"]},s=void 0,l={unversionedId:"getting_started/nodejs",id:"getting_started/nodejs",title:"Getting Started With Node.js",description:"Getting started with the official IOTA Client Node.js library.",source:"@site/next/external/iota.rs/documentation/docs/getting_started/nodejs.mdx",sourceDirName:"getting_started",slug:"/getting_started/nodejs",permalink:"/next/iota.rs/getting_started/nodejs",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/getting_started/nodejs.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started With Node.js",description:"Getting started with the official IOTA Client Node.js library.",image:"/img/logo/iota_mark_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security"]},sidebar:"docs",previous:{title:"Getting Started With Rust",permalink:"/next/iota.rs/getting_started/rust"},next:{title:"Getting Started With Java",permalink:"/next/iota.rs/getting_started/java"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Install the Library",id:"install-the-library",level:2},{value:"npm",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Use the Library",id:"use-the-library",level:2},{value:"Connecting to MQTT",id:"connecting-to-mqtt",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"WarningPasswordStorage"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"One of the following ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," versions:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"'14.x'"),(0,a.kt)("li",{parentName:"ul"},"'16.x' (LTS) ."),(0,a.kt)("li",{parentName:"ul"},"'18.x' (Current)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust and Cargo")," to compile the binding."))),(0,a.kt)("h2",{id:"install-the-library"},"Install the Library"),(0,a.kt)("p",null,"You can install the library using ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," or ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")," with the following\ncommands:"),(0,a.kt)("h3",{id:"npm"},"npm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @iota/client\n")),(0,a.kt)("h3",{id:"yarn"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @iota/client\n")),(0,a.kt)("h2",{id:"use-the-library"},"Use the Library"),(0,a.kt)("p",null,"After you have linked the library, you can create a ",(0,a.kt)("a",{parentName:"p",href:"/next/iota.rs/libraries/nodejs/references/classes/Client"},(0,a.kt)("inlineCode",{parentName:"a"},"Client")),"\ninstance and interface with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Client } from '@iota/client';\n\nconst client = new Client({\n    nodes: ['https://api.testnet.shimmer.network'],\n});\n\nclient.getInfo().then(console.log).catch(console.error)\n")),(0,a.kt)("h2",{id:"connecting-to-mqtt"},"Connecting to MQTT"),(0,a.kt)("p",null,"Connecting to a MQTT broker using a raw ip doesn't work with TCP. This is a limitation\nof ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/rustls/latest/rustls/"},"rustls"),"."),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"Now that you are up and running, you can get acquainted with the library using\nits ",(0,a.kt)("a",{parentName:"p",href:"/next/iota.rs/how_tos/run_how_tos"},"how-to guides")," and the\nrepository's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"code examples"),"."))}u.isMDXComponent=!0}}]);