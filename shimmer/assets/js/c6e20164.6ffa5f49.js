"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43541],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},65359:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},i="API Reference",c={unversionedId:"references/rust_api_reference",id:"references/rust_api_reference",title:"API Reference",description:"Official IOTA Wallet Library Software Rust API reference.",source:"@site/shimmer/external/wallet.rs/documentation/docs/references/rust_api_reference.md",sourceDirName:"references",slug:"/references/rust_api_reference",permalink:"/shimmer/wallet.rs/references/rust_api_reference",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/references/rust_api_reference.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},sidebar:"docs",previous:{title:"Integrate wallet.rs With Your Exchange",permalink:"/shimmer/wallet.rs/how_tos/exchange_guide"},next:{title:"Account API Reference",permalink:"/shimmer/wallet.rs/references/java/account"}},l={},s=[],p={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,"You can visit the ",(0,o.kt)("a",{parentName:"p",href:"https://wallet-lib.docs.iota.org/docs/specification"},"Rust documentation")," to learn more about the API Reference."),(0,o.kt)("p",null,"If you would like to explore the implementation in more depth, you can generate docs for the whole crate by running the  following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo doc --document-private-items --no-deps --open\n")))}u.isMDXComponent=!0}}]);