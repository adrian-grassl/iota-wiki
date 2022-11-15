"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(r),u=o,g=h["".concat(c,".").concat(u)]||h[u]||p[u]||n;return r?a.createElement(g,s(s({ref:t},d),{},{components:r})):a.createElement(g,s({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={description:"Stronghold is an open-source software library which can be used to protect any digital secret. It is a secure database for working with cryptography, which ensures that secrets are never revealed - but can be used according to best practices.",image:"/img/Banner/banner_stronghold.png",keywords:["welcome","open-source","secure","secrets","database"]},s="Welcome",i={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"Stronghold is an open-source software library which can be used to protect any digital secret. It is a secure database for working with cryptography, which ensures that secrets are never revealed - but can be used according to best practices.",source:"@site/next/external/stronghold.rs/develop/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/next/stronghold.rs/welcome",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/next/external/stronghold.rs/develop/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"Stronghold is an open-source software library which can be used to protect any digital secret. It is a secure database for working with cryptography, which ensures that secrets are never revealed - but can be used according to best practices.",image:"/img/Banner/banner_stronghold.png",keywords:["welcome","open-source","secure","secrets","database"]},sidebar:"mySidebar",next:{title:"Getting Started",permalink:"/next/stronghold.rs/getting_started"}},c={},l=[{value:"3rd Party Independent Security Audit",id:"3rd-party-independent-security-audit",level:2},{value:"Joining the discussion",id:"joining-the-discussion",level:2},{value:"Software Bill of Materials",id:"software-bill-of-materials",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stronghold",src:r(49189).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"Stronghold is an open-source software library that was originally built to protect IOTA Seeds, but can be used to\nprotect any digital secret."),(0,o.kt)("p",null,"Stronghold is a secure database for working with cryptography, which ensures that secrets (like private keys) are never\nrevealed, but can be used according to best practices."),(0,o.kt)("p",null,"You can think of Stronghold as an isolated container for secrets. The secret can be a private key or other bytes of data that should never be exposed. You can interact with Stronghold using procedures to ",(0,o.kt)("a",{parentName:"p",href:"how_tos/cli/generate_key_pair"},"generate new keys"),", ",(0,o.kt)("a",{parentName:"p",href:"how_tos/cli/store_read_write"},"store data in the vault"),", ",(0,o.kt)("a",{parentName:"p",href:"how_tos/cli/derive_slip_10"},"derive keys"),', or work with the data. The difference to a "traditional" password store is that you can never access the secret data directly. You will need to use procedures. For example, if you need to sign data with your private key, you must call a procedure.'),(0,o.kt)("p",null,"Generally speaking, there are two states where the secret data remains, ",(0,o.kt)("a",{parentName:"p",href:"reference/structure/client"},"Clients")," and the ",(0,o.kt)("a",{parentName:"p",href:"reference/structure/engine/snapshot"},"Snapshot")," facilities."),(0,o.kt)("p",null,"The runtime operation uses Clients. You can think of Clients as a context-based secure data container that includes all the functionality you need to work with sensitive data. "),(0,o.kt)("p",null,"Stronghold uses Snapshot facilities to persist the runtime. The Snapshot is actually twofold. At the lowest level, the Snapshot is a highly encrypted file represented by an in-memory instance of Snapshot itself, which is encrypted and protected via the same means as the Vault."),(0,o.kt)("p",null,"Additionally to the secure secret database ",(0,o.kt)("a",{parentName:"p",href:"reference/structure/engine/vault"},"Vault"),", Stronghold provides an evicting cache to store non-sensitive data called the ",(0,o.kt)("a",{parentName:"p",href:"reference/structure/engine/store"},"Store"),". Use the Store to keep session-based configuration data. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Status-Beta-green.svg",alt:"status"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/stronghold.rs/workflows/Audit/badge.svg?branch=dev",alt:"Audit"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/stronghold.rs/workflows/Test/badge.svg",alt:"Test"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://stronghold.docs.iota.org"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Docs-Official-green.svg",alt:"docs"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://coveralls.io/github/iotaledger/stronghold.rs?branch=dev"},(0,o.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/iotaledger/stronghold.rs/badge.svg?branch=dev",alt:"coverage"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://deps.rs/repo/github/iotaledger/stronghold.rs"},(0,o.kt)("img",{parentName:"a",src:"https://deps.rs/repo/github/iotaledger/stronghold.rs/status.svg",alt:"dependency status"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://app.fossa.com/projects/git%2Bgithub.com%2Fiotaledger%2Fstronghold.rs?ref=badge_shield"},(0,o.kt)("img",{parentName:"a",src:"https://app.fossa.com/api/projects/git%2Bgithub.com%2Fiotaledger%2Fstronghold.rs.svg?type=shield",alt:"FOSSA Status"}))),(0,o.kt)("h2",{id:"3rd-party-independent-security-audit"},"3rd Party Independent Security Audit"),(0,o.kt)("p",null,"In April 2021, F-Secure performed a security assessment of the core crates of IOTA Stronghold and found nothing of\nconcern. This is not an explicit declaration of fitness or freedom of error, but it is an indicator of the high quality\nof the code. You may review in our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/blob/dev/documentation/docs/meta/Audit.pdf"},"GitHub repository"),"."),(0,o.kt)("p",null,"In May 2022 Stronghold was also audited by ",(0,o.kt)("a",{parentName:"p",href:"https://www.withsecure.com/en/home"},"WithSecure"),". You can find the full\naudit report in our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/blob/dev/2022-05-04-IOTA-Stronghold-statement-of-work-performed-1.pdf"},"GitHub repository"),"\n."),(0,o.kt)("h2",{id:"joining-the-discussion"},"Joining the discussion"),(0,o.kt)("p",null,"If you want to get involved in discussions about this library, or you're looking for support, go to the\n#stronghold-discussion channel on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.iota.org"},"Discord"),"."),(0,o.kt)("h2",{id:"software-bill-of-materials"},"Software Bill of Materials"),(0,o.kt)("p",null,"We maintain a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/raw/dev/S-BOM.pdf"},"bill of materials")," for the upstream\nlibraries that Stronghold consumes."))}p.isMDXComponent=!0},49189:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner_stronghold-9630f31d37b976bab7d1c703cc193826.png"}}]);