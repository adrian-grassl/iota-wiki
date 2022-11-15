"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Interface: Transaction",l={unversionedId:"references/nodejs/interfaces/Transaction",id:"references/nodejs/interfaces/Transaction",title:"Interface: Transaction",description:"A Transaction with metadata",source:"@site/shimmer/external/wallet.rs/documentation/docs/references/nodejs/interfaces/Transaction.md",sourceDirName:"references/nodejs/interfaces",slug:"/references/nodejs/interfaces/Transaction",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/references/nodejs/interfaces/Transaction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: StrongholdSecretManager",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/StrongholdSecretManager"},next:{title:"Interface: TransactionOptions",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/TransactionOptions"}},s={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"payload",id:"payload",level:3},{value:"blockId",id:"blockid",level:3},{value:"inclusionState",id:"inclusionstate",level:3},{value:"timestamp",id:"timestamp",level:3},{value:"transactionId",id:"transactionid",level:3},{value:"networkId",id:"networkid",level:3},{value:"incoming",id:"incoming",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-transaction"},"Interface: Transaction"),(0,a.kt)("p",null,"A Transaction with metadata"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction#payload"},"payload")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction#blockid"},"blockId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction#inclusionstate"},"inclusionState")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction#timestamp"},"timestamp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction#transactionid"},"transactionId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction#networkid"},"networkId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction#incoming"},"incoming"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"payload"},"payload"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"payload"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ITransactionPayload")),(0,a.kt)("p",null,"The transaction payload"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blockid"},"blockId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"blockId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The block id in which the transaction payload was included"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inclusionstate"},"inclusionState"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inclusionState"),": ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/enums/InclusionState"},(0,a.kt)("inlineCode",{parentName:"a"},"InclusionState"))),(0,a.kt)("p",null,"The inclusion state of the transaction"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timestamp"},"timestamp"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The creation time"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transactionid"},"transactionId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transactionId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The transaction id"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"networkid"},"networkId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"networkId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The network id in which the transaction was sent"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"incoming"},"incoming"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"incoming"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If the transaction was created by the wallet or someone else"))}d.isMDXComponent=!0}}]);