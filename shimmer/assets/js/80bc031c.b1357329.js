"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[31492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o="Interface: IInputSigningData",s={unversionedId:"libraries/nodejs/references/interfaces/IInputSigningData",id:"libraries/nodejs/references/interfaces/IInputSigningData",title:"Interface: IInputSigningData",description:"Data for transaction inputs for signing and ordering of unlock blocks",source:"@site/shimmer/external/iota.rs/documentation/docs/libraries/nodejs/references/interfaces/IInputSigningData.md",sourceDirName:"libraries/nodejs/references/interfaces",slug:"/libraries/nodejs/references/interfaces/IInputSigningData",permalink:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IInputSigningData",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/shimmer/external/iota.rs/documentation/docs/libraries/nodejs/references/interfaces/IInputSigningData.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: IGenerateAddressesOptions",permalink:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IGenerateAddressesOptions"},next:{title:"Interface: IMqttBrokerOptions",permalink:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IMqttBrokerOptions"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"output",id:"output",level:3},{value:"outputMetaData",id:"outputmetadata",level:3},{value:"chain",id:"chain",level:3},{value:"bech32Address",id:"bech32address",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-iinputsigningdata"},"Interface: IInputSigningData"),(0,a.kt)("p",null,"Data for transaction inputs for signing and ordering of unlock blocks"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IInputSigningData#output"},"output")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IInputSigningData#outputmetadata"},"outputMetaData")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IInputSigningData#chain"},"chain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IInputSigningData#bech32address"},"bech32Address"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"output"},"output"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"output"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"OutputTypes")),(0,a.kt)("p",null,"The output"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"outputmetadata"},"outputMetaData"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"outputMetaData"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"IOutputMetadataResponse")),(0,a.kt)("p",null,"The output metadata"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"chain"},"chain"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"chain"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ISegment"),"[]"),(0,a.kt)("p",null,"The chain derived from seed, only for ed25519 addresses"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bech32address"},"bech32Address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"bech32Address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The bech32 encoded address, required because of alias outputs where we have multiple possible unlock\nconditions, because we otherwise don't know which one we need"))}c.isMDXComponent=!0}}]);