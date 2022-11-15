"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[16955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={title:"Getting Started with Rust",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity Rust Library.",image:"/img/Identity_icon.png",keywords:["Rust","Identity"]},l=void 0,o={unversionedId:"libraries/rust/getting_started",id:"libraries/rust/getting_started",title:"Getting Started with Rust",description:"Getting started with the IOTA Identity Rust Library.",source:"@site/iota/external/identity.rs/v0.6.0/documentation/docs/libraries/rust/getting_started.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/getting_started",permalink:"/identity.rs/libraries/rust/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/iota/external/identity.rs/v0.6.0/documentation/docs/libraries/rust/getting_started.md",tags:[],version:"current",frontMatter:{title:"Getting Started with Rust",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity Rust Library.",image:"/img/Identity_icon.png",keywords:["Rust","Identity"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/libraries/overview"},next:{title:"Getting Started",permalink:"/identity.rs/libraries/wasm/getting_started"}},s={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Include the Library",id:"include-the-library",level:2},{value:"Latest Stable Release",id:"latest-stable-release",level:3},{value:"Development Release",id:"development-release",level:3},{value:"Examples",id:"examples",level:2},{value:"API Reference",id:"api-reference",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust")," (>= 1.60)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/"},"Cargo")," (>= 1.60)")),(0,a.kt)("h2",{id:"include-the-library"},"Include the Library"),(0,a.kt)("p",null,"To include IOTA Identity in your project add it as a dependency in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,a.kt)("h3",{id:"latest-stable-release"},"Latest Stable Release"),(0,a.kt)("p",null,"This version is published to crates.io and is ",(0,a.kt)("strong",{parentName:"p"},"stable"),", following semantic versioning."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nidentity_iota = { version = "0.6" }\n')),(0,a.kt)("h3",{id:"development-release"},"Development Release"),(0,a.kt)("p",null,"This version matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," branch of this repository. It has all the ",(0,a.kt)("strong",{parentName:"p"},"latest features"),", but as such it ",(0,a.kt)("strong",{parentName:"p"},"may also have undocumented breaking changes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nidentity_iota = { git = "https://github.com/iotaledger/identity.rs", branch = "dev"}\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To try out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/tree/main/examples"},"examples"),", you should:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone the repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/identity.rs\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Build the repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run your first example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example getting_started\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,"The API reference for the Rust library can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/identity_iota/0.6.1/identity_iota/index.html"},"docs.rs"),"."),(0,a.kt)("p",null,"If you would like to build the documentation locally you can do so with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RUSTDOCFLAGS='--cfg docsrs' cargo +nightly doc -p identity_iota --all-features --no-deps --open\n")))}u.isMDXComponent=!0}}]);