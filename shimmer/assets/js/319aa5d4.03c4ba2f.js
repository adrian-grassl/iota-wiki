"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3662],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,k=m["".concat(l,".").concat(u)]||m[u]||f[u]||a;return t?n.createElement(k,c(c({ref:r},p),{},{components:t})):n.createElement(k,c({ref:r},p))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47119:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=t(87462),i=(t(67294),t(3905));const a={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},c="Interface: IReferenceUnlock",o={unversionedId:"references/client/interfaces/IReferenceUnlock",id:"references/client/interfaces/IReferenceUnlock",title:"Interface: IReferenceUnlock",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IReferenceUnlock.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IReferenceUnlock",permalink:"/shimmer/iotajs/references/client/interfaces/IReferenceUnlock",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IReferenceUnlock.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IReceiptsResponse",permalink:"/shimmer/iotajs/references/client/interfaces/IReceiptsResponse"},next:{title:"Interface: IRent",permalink:"/shimmer/iotajs/references/client/interfaces/IRent"}},l={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"type",id:"type",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"reference",id:"reference",level:3}],p={toc:s};function f(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-ireferenceunlock"},"Interface: IReferenceUnlock"),(0,i.kt)("p",null,"An unlock which must reference a previous unlock which unlocks\nalso the input at the same index as this Reference Unlock."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ITypeBase"},(0,i.kt)("inlineCode",{parentName:"a"},"ITypeBase")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"1"),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"IReferenceUnlock"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IReferenceUnlock#type"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IReferenceUnlock#reference"},"reference"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("p",null,"The type of the object."),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ITypeBase"},"ITypeBase"),".",(0,i.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ITypeBase#type"},"type")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reference"},"reference"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"reference"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The reference."))}f.isMDXComponent=!0}}]);