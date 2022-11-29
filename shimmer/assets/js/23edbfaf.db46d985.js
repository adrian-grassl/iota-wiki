"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"The official client library for interacting with the IOTA Tangle allows you to create blocks and transactions, sign transactions, generate addresses, and interact with an IOTA node.",image:"/img/logo/preview.png",keywords:["stateless","Rust","python","nodejs","python","client","reference"]},l="IOTA Wallet Library",o={unversionedId:"explanations/libraries/wallet",id:"explanations/libraries/wallet",title:"IOTA Wallet Library",description:"The official client library for interacting with the IOTA Tangle allows you to create blocks and transactions, sign transactions, generate addresses, and interact with an IOTA node.",source:"@site/shimmer/external/introduction-docs/docs/explanations/libraries/wallet.md",sourceDirName:"explanations/libraries",slug:"/explanations/libraries/wallet",permalink:"/shimmer/introduction/explanations/libraries/wallet",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/shimmer/external/introduction-docs/docs/explanations/libraries/wallet.md",tags:[],version:"current",frontMatter:{description:"The official client library for interacting with the IOTA Tangle allows you to create blocks and transactions, sign transactions, generate addresses, and interact with an IOTA node.",image:"/img/logo/preview.png",keywords:["stateless","Rust","python","nodejs","python","client","reference"]},sidebar:"mySidebar",previous:{title:"IOTA Client Library",permalink:"/shimmer/introduction/explanations/libraries/client"},next:{title:"IOTA Protocol TIPs",permalink:"/shimmer/introduction/explanations/protocol_tip"}},s={},p=[{value:"Rust",id:"rust",level:2},{value:"Node.js",id:"nodejs",level:2},{value:"Python",id:"python",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iota-wallet-library"},"IOTA Wallet Library"),(0,n.kt)("p",null,"The wallet library is a stateful library for developers; essentially, it's a programmable wallet. However, if you use IOTA or Shimmer to transfer tokens, you should use this library as its stateful design supports the handling and monitoring of multiple accounts and addresses."),(0,n.kt)("p",null,"It also supports the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs"},"Stronghold.rs")," enclave, incorporating the best security practices in one package. You can read more about the ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/develop/wallet.rs/welcome"},"IOTA Wallet Library documentation in our wiki"),"."),(0,n.kt)("h2",{id:"rust"},"Rust"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/develop/libraries/rust/getting_started"},"Getting Started")," - Getting Started with Rust and the IOTA Wallet Library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/develop/libraries/rust/examples"},"Examples")," - Find starting points or inspiration in the examples."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wallet.rs/tree/develop"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/develop/libraries/rust/api_reference"},"API Documentation")," - The IOTA Wallet Library Rust API Documentation.")),(0,n.kt)("h2",{id:"nodejs"},"Node.js"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/develop/libraries/nodejs/getting_started"},"Getting Started")," - Getting Started with Node.js and the IOTA Wallet Library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/develop/libraries/nodejs/examples"},"Examples")," - Find starting points or inspiration in the examples."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/develop/libraries/nodejs/api_reference"},"API Documentation")," - The IOTA Wallet Library Node.js API Documentation.")),(0,n.kt)("h2",{id:"python"},"Python"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/develop/libraries/python/getting_started"},"Getting Started")," - Getting Started with Python and the IOTA Wallet Library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/develop/libraries/python/examples"},"Examples")," - Find starting points or inspiration in the examples."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/python"},"Repository")," - Browse through the code and learn what's happening behind the scenes. Pull requests are very welcome!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/develop/libraries/python/api_reference"},"API Documentation")," - The IOTA Wallet Library Python API Documentation.")))}d.isMDXComponent=!0}}]);