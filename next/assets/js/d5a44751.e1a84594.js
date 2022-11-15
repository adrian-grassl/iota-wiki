"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[87766],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=r,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},28951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=t(87462),r=(t(67294),t(3905));const i={description:"INX-POI enables you to generate and verify Proof-of-Inclusion of blocks in the Tangle.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","POI","Proof-Of-Inclusion","Proof","Inclusion","IOTA","Shimmer","Node Software","Welcome","explanation"]},a="Welcome to INX-POI",c={unversionedId:"welcome",id:"welcome",title:"Welcome to INX-POI",description:"INX-POI enables you to generate and verify Proof-of-Inclusion of blocks in the Tangle.",source:"@site/next/external/inx-poi/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/next/inx-poi/welcome",draft:!1,editUrl:"https://github.com/gohornet/inx-poi/edit/develop/documentation/next/external/inx-poi/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"INX-POI enables you to generate and verify Proof-of-Inclusion of blocks in the Tangle.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","POI","Proof-Of-Inclusion","Proof","Inclusion","IOTA","Shimmer","Node Software","Welcome","explanation"]},sidebar:"mySidebar",next:{title:"Core Configuration",permalink:"/next/inx-poi/configuration"}},l={},u=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API",id:"api",level:2},{value:"Source Code",id:"source-code",level:2}],p={toc:u};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-inx-poi"},"Welcome to INX-POI"),(0,r.kt)("p",null,"INX-POI enables you to generate and verify Proof-of-Inclusion of blocks in the Tangle.\nGiven a piece of data or transaction and the proof, you can verify whether it was included in the Tangle at any given time."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The recommended setup is to use the provided ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/iotaledger/inx-poi"},"Docker images"),".\nThese images are also used in our ",(0,r.kt)("a",{parentName:"p",href:"http://wiki.iota.org/hornet/develop/how_tos/using_docker"},"HORNET recommended setup using Docker"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The extension will connect to your local HORNET instance by default."),(0,r.kt)("p",null,"You can find all the configuration options in the ",(0,r.kt)("a",{parentName:"p",href:"/next/inx-poi/configuration"},"configuration section"),"."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"The extension exposes a custom set of REST APIs that you can use to generate or validate proofs."),(0,r.kt)("p",null,"You can find more information about the API in the ",(0,r.kt)("a",{parentName:"p",href:"/next/inx-poi/api_reference"},"API reference section"),"."),(0,r.kt)("h2",{id:"source-code"},"Source Code"),(0,r.kt)("p",null,"The source code of the project is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-poi"},"GitHub"),"."))}s.isMDXComponent=!0}}]);