"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[96580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={description:"You can run Stronghold examples using the command line interface from within the client crate.",image:"/img/logo/Stronghold_icon.png",keywords:["examples","cli","client crate","running examples"]},a="Running Examples",l={unversionedId:"how_tos/cli/running_examples",id:"how_tos/cli/running_examples",title:"Running Examples",description:"You can run Stronghold examples using the command line interface from within the client crate.",source:"@site/iota/external/stronghold.rs/develop/documentation/docs/how_tos/cli/running_examples.mdx",sourceDirName:"how_tos/cli",slug:"/how_tos/cli/running_examples",permalink:"/stronghold.rs/how_tos/cli/running_examples",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/iota/external/stronghold.rs/develop/documentation/docs/how_tos/cli/running_examples.mdx",tags:[],version:"current",frontMatter:{description:"You can run Stronghold examples using the command line interface from within the client crate.",image:"/img/logo/Stronghold_icon.png",keywords:["examples","cli","client crate","running examples"]},sidebar:"mySidebar",previous:{title:"Stronghold Engine Retrospective Document",permalink:"/stronghold.rs/explanations/retrospective"},next:{title:"Generate an Ed25519 Key Pair",permalink:"/stronghold.rs/how_tos/cli/generate_key_pair"}},c={},s=[{value:"Command Line Interface(CLI)",id:"command-line-interfacecli",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-examples"},"Running Examples"),(0,o.kt)("h2",{id:"command-line-interfacecli"},"Command Line Interface(CLI)"),(0,o.kt)("p",null,"You should run the examples from within the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/client"},"client crate"),".\nThe examples shown in this doc were executed on Linux but should work on the other supported platforms. Make sure to\nadapt paths according to your operating system default."),(0,o.kt)("p",null,"For example, Windows requires backslashes ",(0,o.kt)("inlineCode",{parentName:"p"},"\\")," as a delimiter for a path. This could pose a problem, as\nbackslashes are also used to escape characters."),(0,o.kt)("p",null,"You can find the example code in the official\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/client/examples/cli/main.rs"},"Stronghold repository")))}u.isMDXComponent=!0}}]);