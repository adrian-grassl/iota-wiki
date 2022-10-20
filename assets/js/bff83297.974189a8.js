"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=o,u=g["".concat(c,".").concat(m)]||g[m]||d[m]||i;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={description:"This document introduces the high-level specification of Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","high level","low level","library"]},a="Stronghold Engineering Specification",l={unversionedId:"reference/specs/engineering",id:"reference/specs/engineering",title:"Stronghold Engineering Specification",description:"This document introduces the high-level specification of Stronghold.",source:"@site/iota/external/stronghold.rs/develop/documentation/docs/reference/specs/engineering.md",sourceDirName:"reference/specs",slug:"/reference/specs/engineering",permalink:"/stronghold.rs/reference/specs/engineering",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/iota/external/stronghold.rs/develop/documentation/docs/reference/specs/engineering.md",tags:[],version:"current",frontMatter:{description:"This document introduces the high-level specification of Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","high level","low level","library"]},sidebar:"mySidebar",previous:{title:"Specification: SCOPE",permalink:"/stronghold.rs/reference/specs/scope"},next:{title:"Stronghold Threat Modeling",permalink:"/stronghold.rs/reference/specs/threat-modeling"}},c={},s=[{value:"Frontmatter",id:"frontmatter",level:2},{value:"Summary",id:"summary",level:2},{value:"Logical System Design",id:"system-design",level:2},{value:"Low Level",id:"low-level",level:3},{value:"High Level",id:"high-level",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"engineering-spec"},"Stronghold Engineering Specification"),(0,o.kt)("h2",{id:"frontmatter"},"Frontmatter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'title: Stronghold\nstub: stronghold\ndocument: Engineering Specification\nversion: 0000\nmaintainer: Daniel Thompson-Yvetot <daniel.yvetot@iota.org>\ncontributors: [Dave de Fijter <dave.defijter@iota.org>, tensorprogramming <tensordeveloper@gmail.com>, Daniel Thompson-Yvetot <daniel.yvetot@iota.org>, Marcelo Bianchi <marcelo.bianchi@iota.org>]\nsponsors: [Navin Ramachandran <navin@iota.org>]\nlicenses: ["CC-BY-INTL-3.0"]\nupdated: 2021-Apr-27\n')),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This document introduces the High-Level Specification of the Stronghold."),(0,o.kt)("h2",{id:"system-design"},"Logical System Design"),(0,o.kt)("h3",{id:"low-level"},"Low Level"),(0,o.kt)("p",null,"A Stronghold is composed of several interacting systems at a low level:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Snapshot - box-encrypted file-based persistence layer"),(0,o.kt)("li",{parentName:"ol"},"Vault - a write and use protected, path-based system for storing and using secrets like private keys"),(0,o.kt)("li",{parentName:"ol"},"Store - a read/write key:value storage system for dynamic data "),(0,o.kt)("li",{parentName:"ol"},"Cache - an in-memory abstraction for vault and store"),(0,o.kt)("li",{parentName:"ol"},"Runtime - memory protection system for secrets")),(0,o.kt)("h3",{id:"high-level"},"High Level"),(0,o.kt)("p",null,"At the high level, Stronghold provides an official client for interfacing with a Stronghold snapshot and its records."))}d.isMDXComponent=!0}}]);