"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[65953],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(r),u=n,k=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},79514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={toc:[{value:"<code>Buffer</code>",id:"buffer",level:2},{value:"<code>LockedMemory</code>",id:"lockedmemory",level:2},{value:"<code>RamMemory</code>",id:"rammemory",level:3},{value:"<code>FileMemory</code>",id:"filememory",level:3},{value:"<code>NonContiguousMemory</code>",id:"noncontiguousmemory",level:3},{value:"Usage recommendation",id:"usage-recommendation",level:2}]};function o(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stronghold-new-runtime"},"Stronghold new runtime"),(0,n.kt)("p",null,"This crate provides multiple ways to store data securely whether in ram, disk or fragmented into a non contiguous data structure.\nAll these types of memories implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"LockedMemory")," trait which enables one to allocate or unlock the data stored.\nA ",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer")," type which implements basic security measures is also provided to temporarily store data for any computation."),(0,n.kt)("h2",{id:"buffer"},(0,n.kt)("inlineCode",{parentName:"h2"},"Buffer")),(0,n.kt)("p",null,'Memory which contains some "minimal" security measures such as:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Guard areas"),(0,n.kt)("li",{parentName:"ul"},"Canaries "),(0,n.kt)("li",{parentName:"ul"},"Constant time comparisons"),(0,n.kt)("li",{parentName:"ul"},"Zeroes out the memory when dropped "),(0,n.kt)("li",{parentName:"ul"},"Access control of memory pages"),(0,n.kt)("li",{parentName:"ul"},"System flags against memory dumps")),(0,n.kt)("p",null,"Values in protected memory are stored in clear. Those values are accessible by getting a reference through ",(0,n.kt)("inlineCode",{parentName:"p"},"borrow()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"borrow_mut()"),".\nSince the values are stored in clear instances of ",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer")," should be as short-lived as possible."),(0,n.kt)("p",null,"The main functions of ",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer")," are ",(0,n.kt)("inlineCode",{parentName:"p"},"alloc()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"borrow()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"borrow_mut"),"."),(0,n.kt)("h2",{id:"lockedmemory"},(0,n.kt)("inlineCode",{parentName:"h2"},"LockedMemory")),(0,n.kt)("p",null,"Locked memory is used to store sensitive data for longer period of times."),(0,n.kt)("p",null,"You can create a ",(0,n.kt)("inlineCode",{parentName:"p"},"LockedMemory")," instance using ",(0,n.kt)("inlineCode",{parentName:"p"},"alloc()")," or give it a new value with ",(0,n.kt)("inlineCode",{parentName:"p"},"update()"),".\nAs the trait name mentions, the data stored in ",(0,n.kt)("inlineCode",{parentName:"p"},"LockedMemory")," is ",(0,n.kt)("em",{parentName:"p"},"locked")," and you can retrieve using ",(0,n.kt)("inlineCode",{parentName:"p"},"unlock()"),". Unlocked data will be returned in a ",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer"),"."),(0,n.kt)("p",null,"When allocating a ",(0,n.kt)("inlineCode",{parentName:"p"},"LockedMemory")," you have to choose how it will be stored and how it will be locked.\nThere are 3 types that implement ",(0,n.kt)("inlineCode",{parentName:"p"},"LockedMemory"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"RamMemory"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"FileMemory")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"NonContiguousMemory"),"."),(0,n.kt)("h3",{id:"rammemory"},(0,n.kt)("inlineCode",{parentName:"h3"},"RamMemory")),(0,n.kt)("p",null,"Data will be stored in ram memory with the same security measures as the ",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer")," type.\nAdditionally the user can choose to have its data encrypted by providing an encryption key."),(0,n.kt)("p",null,"Note: ",(0,n.kt)("inlineCode",{parentName:"p"},"RamMemory")," with non encrypted data is essentially a wrapper of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Buffer")," type."),(0,n.kt)("h3",{id:"filememory"},(0,n.kt)("inlineCode",{parentName:"h3"},"FileMemory")),(0,n.kt)("p",null,"Data is stored in disk memory and can be encrypted."),(0,n.kt)("p",null,"Security measures to protect the files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access control of the files (os-dependent)"),(0,n.kt)("li",{parentName:"ul"},"Data is mixed with noise "),(0,n.kt)("li",{parentName:"ul"},"File is zeroed and removed when dropped")),(0,n.kt)("p",null,"Note: usually disk memory is more vulnerable than ram memory but we believe that using diverse types of memories increases the data security."),(0,n.kt)("h3",{id:"noncontiguousmemory"},(0,n.kt)("inlineCode",{parentName:"h3"},"NonContiguousMemory")),(0,n.kt)("p",null,"Data is split into two shards using the ",(0,n.kt)("a",{parentName:"p",href:"https://spacetime.dev/encrypting-secrets-in-memory"},"Boojum scheme"),".\nBasically the data is split into two:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"one shard is random data"),(0,n.kt)("li",{parentName:"ul"},"other shard is data xored with a hash of the first shard")),(0,n.kt)("p",null,"Data is reconstructed by xoring the second shard with a hash of the first shard."),(0,n.kt)("p",null,"Non contiguous memory improves security through forcing an attacker to recover multiple pieces to get the original data.\nUser can choose to have data split in ram memory or in ram and disk (to diversify memory storage)."),(0,n.kt)("p",null,"Moreover the shards can be ",(0,n.kt)("em",{parentName:"p"},"refreshed")," regularly.\nValues of the shards will be modified separately such that the original data can still be reconstructed."),(0,n.kt)("p",null,"Note: data in shard is xored with a hash digest, hence the data stored in non contiguous memory can only have size of a hash digest. This may seem restrictive but it fits well when following the usage recommendation described in the next section."),(0,n.kt)("h2",{id:"usage-recommendation"},"Usage recommendation"),(0,n.kt)("p",null,"Our recommendation on how to use the crate to store sensitive data."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data is stored encrypted in ",(0,n.kt)("inlineCode",{parentName:"li"},"RamMemory")),(0,n.kt)("li",{parentName:"ul"},"The encryption key is stored in ",(0,n.kt)("inlineCode",{parentName:"li"},"NonContiguousMemory")," over ram and disk")),(0,n.kt)("p",null,"Hence data security depends on the strength of the encryption scheme and the 'obfuscation' of the encryption key in non contiguous memory."),(0,n.kt)("h1",{id:"objectives"},"Objectives"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Stable ",(0,n.kt)("inlineCode",{parentName:"li"},"LockedMemory")," API"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Implementation ",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"Buffer")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"RamMemory")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"FileMemory"),(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","data mixed with noise"))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"NonContiguousMemory")," "))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tests",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Functional correctness"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Security ",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","zeroize "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","access to the locked memory"))))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Benchmarks"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","no-std")))}o.isMDXComponent=!0;const s={description:"Runtime aims to provide utilities for performing computations as securely as possible with respect to the underlying operating system. The crate provides three primary Types for guarding data; GuardedVec, Guarded, and Secret.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","Guarded type","memory","allocated","secret"]},l="Structure: Runtime",m={unversionedId:"reference/structure/engine/runtime",id:"reference/structure/engine/runtime",title:"Structure: Runtime",description:"Runtime aims to provide utilities for performing computations as securely as possible with respect to the underlying operating system. The crate provides three primary Types for guarding data; GuardedVec, Guarded, and Secret.",source:"@site/shimmer/external/stronghold.rs/develop/documentation/docs/reference/structure/engine/runtime.md",sourceDirName:"reference/structure/engine",slug:"/reference/structure/engine/runtime",permalink:"/shimmer/stronghold.rs/reference/structure/engine/runtime",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/shimmer/external/stronghold.rs/develop/documentation/docs/reference/structure/engine/runtime.md",tags:[],version:"current",frontMatter:{description:"Runtime aims to provide utilities for performing computations as securely as possible with respect to the underlying operating system. The crate provides three primary Types for guarding data; GuardedVec, Guarded, and Secret.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","Guarded type","memory","allocated","secret"]},sidebar:"mySidebar",previous:{title:"Structure: Engine::Store",permalink:"/shimmer/stronghold.rs/reference/structure/engine/store"},next:{title:"Structure: Derive",permalink:"/shimmer/stronghold.rs/reference/structure/derive"}},c={},d=[],p={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"structure-runtime"},"Structure: Runtime"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine/runtime"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"})),"  ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/stronghold-runtime"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/stronghold-runtime"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-runtime.svg",alt:null}))),(0,n.kt)(o,{mdxType:"Runtime"}),(0,n.kt)("p",null,"The primary components are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Guarded")," - A guarded type for protecting fixed-length secrets allocated on the heap."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GuardedVec")," - A guarded type for protecting variable-length secrets allocated on the heap."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Secret")," - A Type for guarding secrets allocated to the stack."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ZeroingAlloc")," - A Zeroing Allocator which wraps the standard memory allocator. This allocator zeroes out memory when it is dropped.")))}u.isMDXComponent=!0}}]);