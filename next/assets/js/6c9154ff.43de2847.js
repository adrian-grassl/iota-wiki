"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={description:"Handling secrets at runtime with non-contigouos data types.",image:"/img/logo/Stronghold_icon.png",keywords:["bojum scheme","non-contiguous data types","security","runtime","explanation"]},i="Non-Contiguous Data Types and Handling Secrets at Runtime",s={unversionedId:"explanations/non-contiguous-data-types",id:"explanations/non-contiguous-data-types",title:"Non-Contiguous Data Types and Handling Secrets at Runtime",description:"Handling secrets at runtime with non-contigouos data types.",source:"@site/next/external/stronghold.rs/develop/documentation/docs/explanations/non-contiguous-data-types.md",sourceDirName:"explanations",slug:"/explanations/non-contiguous-data-types",permalink:"/next/stronghold.rs/explanations/non-contiguous-data-types",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/next/external/stronghold.rs/develop/documentation/docs/explanations/non-contiguous-data-types.md",tags:[],version:"current",frontMatter:{description:"Handling secrets at runtime with non-contigouos data types.",image:"/img/logo/Stronghold_icon.png",keywords:["bojum scheme","non-contiguous data types","security","runtime","explanation"]},sidebar:"mySidebar",previous:{title:"Getting Started",permalink:"/next/stronghold.rs/getting_started"},next:{title:"Cryptographic Procedures",permalink:"/next/stronghold.rs/explanations/procedures"}},u={},c=[{value:"Non-Contiguous Data Types",id:"non-contiguous-data-types",level:2},{value:"Boojum Scheme",id:"boojum-scheme",level:3},{value:"Use case: passphrase management",id:"use-case-passphrase-management",level:4},{value:"Conclusion",id:"conclusion",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"non-contiguous-data-types-and-handling-secrets-at-runtime"},"Non-Contiguous Data Types and Handling Secrets at Runtime"),(0,a.kt)("p",null,"Running processes store objects in allocated memory contiguously, meaning the stream of bytes is consecutive. This is not always desirable, as an attacker could easily read sensitive information from parts of the memory. This section will describe non-contiguous memory data structures and how they work."),(0,a.kt)("h2",{id:"non-contiguous-data-types"},"Non-Contiguous Data Types"),(0,a.kt)("p",null,"Under normal circumstances, the allocated memory is continuous and page-aligned. The operating system provides memory blocks of a minimum predetermined size. Data types that do not have a multiple of some minimum number in bytes are padded with zeroes. Metadata describes the actual fields. Operating systems take this approach to improve performance as loading some larger chunks of 2^n bytes is faster than loading the exact number of bytes."),(0,a.kt)("p",null,"Non-contiguous (NC) data types store their inner referenced data in multiple locations, either in memory, on the file system, or a mixture of both. NC data types are useful if the memory is partitioned into multiple segments, and storing a continuous stream of bytes might not be possible. The disadvantage is that the operating system must constantly keep track of the referenced memory segments."),(0,a.kt)("h3",{id:"boojum-scheme"},"Boojum Scheme"),(0,a.kt)("p",null,"Non-contiguous memory types split protected memory into multiple fragments, mitigating any memory dumps and making it virtually impossible for attackers to retrieve stored data. The following section describes non-contiguous memory types in more detail with a use case we often encountered and solved when we were developing Stronghold."),(0,a.kt)("h4",{id:"use-case-passphrase-management"},"Use case: passphrase management"),(0,a.kt)("p",null,"Proper passphrase management was one of the most challenging tasks during the development of Stronghold. You need a password whenever you want to load a persistent state from a snapshot file. If you were the only user of Stronghold, and reading and writing would be interactive, providing the password each time would not be a problem. The time window in which you would use the passphrase to decrypt and later encrypt to persist a state would be small and almost non-predictable."),(0,a.kt)("p",null,"However, consider an application that requires constant writing into a snapshot, meaning the passphrase to encrypt the snapshot must be stored in memory. If an attacker gains access to the machine, they could dump the memory of the running process and read out the passphrase in plaintext, which of course, would be a significant security problem. Luckily, there is a solution to that called the Boojum Scheme, as described by Bruce Schneier et al. in \u201cCryptography Engineering\u201d."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"With the new runtime, Stronghold has several options to protect sensitive data in memory. Non-contiguous types are fairly new to Stronghold. We have to figure out a good balance between performance (everything is stored in RAM) and security (fragmented across RAM and file system)."),(0,a.kt)("p",null,"There is another limiting factor. Regarding the maximum number of protected memory regions, we empirically encountered the limit of about 8000 guarded pages on some Linux machines. To fix that, we decided to avoid storing pages inside a vault and guard them on demand instead. The amount of sensitive data at rest is presumably higher compared to sensitive data present for cryptographic procedures. Sensitive entries inside the vault at rest are encrypted with XChaCha20-Poly1305, which provides security while circumventing this limitation."))}d.isMDXComponent=!0}}]);