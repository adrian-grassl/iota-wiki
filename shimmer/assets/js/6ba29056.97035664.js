"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[16794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={description:"INX-Faucet is a faucet application for test and development networks as well as for private networks.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","Faucet","IOTA","Shimmer","Node Software","Welcome","explanation"]},i="Welcome to INX-Faucet",c={unversionedId:"welcome",id:"welcome",title:"Welcome to INX-Faucet",description:"INX-Faucet is a faucet application for test and development networks as well as for private networks.",source:"@site/shimmer/external/inx-faucet/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/shimmer/inx-faucet/welcome",draft:!1,editUrl:"https://github.com/iotaledger/inx-faucet/edit/develop/documentation/shimmer/external/inx-faucet/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"INX-Faucet is a faucet application for test and development networks as well as for private networks.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","Faucet","IOTA","Shimmer","Node Software","Welcome","explanation"]},sidebar:"mySidebar",next:{title:"Core Configuration",permalink:"/shimmer/inx-faucet/configuration"}},l={},u=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Source Code",id:"source-code",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-inx-faucet"},"Welcome to INX-Faucet"),(0,o.kt)("p",null,"INX-Faucet is a faucet application for test and development networks as well as for private networks.\nFaucets are useful in test and private networks to distribute test tokens to developers."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The recommended setup is to use the provided ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/iotaledger/inx-faucet"},"Docker images"),"."),(0,o.kt)("p",null,"If you want to run your own private network with it's own faucet, have a look at our ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/develop/how_tos/private_tangle"},"Run a Private Tangle")," guide."),(0,o.kt)("p",null,"To run your own faucet you need to provide a private key containing funds to the faucet. To do this you start ",(0,o.kt)("inlineCode",{parentName:"p"},"inx-faucet")," by passing a ",(0,o.kt)("inlineCode",{parentName:"p"},"FAUCET_PRV_KEY")," environment variable containing the private key."),(0,o.kt)("p",null,"The faucet includes a generic web UI that will be reachable at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8091")," by default."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The faucet is configured by default to connect to your HORNET instance."),(0,o.kt)("p",null,"You can find all the configuration options in the ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/inx-faucet/configuration"},"configuration section"),"."),(0,o.kt)("h2",{id:"source-code"},"Source Code"),(0,o.kt)("p",null,"The source code of the project is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-faucet"},"GitHub"),"."))}s.isMDXComponent=!0}}]);