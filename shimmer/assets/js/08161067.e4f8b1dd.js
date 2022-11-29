"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48656],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},16446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={},a="Enumeration: InclusionState",l={unversionedId:"references/nodejs/enums/InclusionState",id:"references/nodejs/enums/InclusionState",title:"Enumeration: InclusionState",description:"Possible InclusionStates of transactions sent with the wallet",source:"@site/shimmer/external/wallet.rs/documentation/docs/references/nodejs/enums/InclusionState.md",sourceDirName:"references/nodejs/enums",slug:"/references/nodejs/enums/InclusionState",permalink:"/shimmer/wallet.rs/references/nodejs/enums/InclusionState",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/references/nodejs/enums/InclusionState.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Enumeration: CoinType",permalink:"/shimmer/wallet.rs/references/nodejs/enums/CoinType"},next:{title:"Enumeration: LedgerDeviceType",permalink:"/shimmer/wallet.rs/references/nodejs/enums/LedgerDeviceType"}},s={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Enumeration Members",id:"enumeration-members",level:3},{value:"Enumeration Members",id:"enumeration-members-1",level:2},{value:"Pending",id:"pending",level:3},{value:"Confirmed",id:"confirmed",level:3},{value:"Conflicting",id:"conflicting",level:3},{value:"UnknownPruned",id:"unknownpruned",level:3}],c={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enumeration-inclusionstate"},"Enumeration: InclusionState"),(0,i.kt)("p",null,"Possible InclusionStates of transactions sent with the wallet"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/InclusionState#pending"},"Pending")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/InclusionState#confirmed"},"Confirmed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/InclusionState#conflicting"},"Conflicting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/enums/InclusionState#unknownpruned"},"UnknownPruned"))),(0,i.kt)("h2",{id:"enumeration-members-1"},"Enumeration Members"),(0,i.kt)("h3",{id:"pending"},"Pending"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Pending")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"Pending"')),(0,i.kt)("p",null,"The transaction is pending"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"confirmed"},"Confirmed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Confirmed")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"Confirmed"')),(0,i.kt)("p",null,"The transaction is confirmed"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"conflicting"},"Conflicting"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Conflicting")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"Conflicting"')),(0,i.kt)("p",null,"The transaction is conflicting"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unknownpruned"},"UnknownPruned"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"UnknownPruned")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"UnknownPruned"')),(0,i.kt)("p",null,"The transaction and its in- and outputs are pruned, so it's unknown if it got confirmed or was conflicting"))}m.isMDXComponent=!0}}]);