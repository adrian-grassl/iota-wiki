"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59300],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32621:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={description:"In this section we describe individual crates and components of Stronghold.",image:"/img/Banner/banner_stronghold_structure.png",keywords:["reference","ToC","crates","components"]},a="IOTA Stronghold Structure",c={unversionedId:"reference/structure/overview",id:"reference/structure/overview",title:"IOTA Stronghold Structure",description:"In this section we describe individual crates and components of Stronghold.",source:"@site/next/external/stronghold.rs/develop/documentation/docs/reference/structure/overview.md",sourceDirName:"reference/structure",slug:"/reference/structure/overview",permalink:"/next/stronghold.rs/reference/structure/overview",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/next/external/stronghold.rs/develop/documentation/docs/reference/structure/overview.md",tags:[],version:"current",frontMatter:{description:"In this section we describe individual crates and components of Stronghold.",image:"/img/Banner/banner_stronghold_structure.png",keywords:["reference","ToC","crates","components"]},sidebar:"mySidebar",previous:{title:"Overview",permalink:"/next/stronghold.rs/reference/overview"},next:{title:"Structure: Client",permalink:"/next/stronghold.rs/reference/structure/client"}},s={},l=[],u={toc:l};function p(e){let{components:r,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iota-stronghold-structure"},"IOTA Stronghold Structure"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stronghold Structure",src:t(8596).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"In this section we describe the individual crates and components of Stronghold:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/stronghold.rs/reference/structure/client"},"Client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/stronghold.rs/reference/structure/engine/overview"},"Engine"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/stronghold.rs/reference/structure/engine/snapshot"},"Snapshot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/stronghold.rs/reference/structure/engine/vault"},"Vault")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/stronghold.rs/reference/structure/engine/store"},"Store")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/stronghold.rs/reference/structure/engine/runtime"},"Runtime")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/stronghold.rs/reference/structure/derive"},"Derive")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/stronghold.rs/reference/structure/utils"},"Utils"))))}p.isMDXComponent=!0},8596:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/banner_stronghold_structure-5352a68b4b52ea1b4ba1a59b2ee970b0.png"}}]);