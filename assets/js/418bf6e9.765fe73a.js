"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[79294],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),g=r,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?i.createElement(h,o(o({ref:e},c),{},{components:n})):i.createElement(h,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86976:(t,e,n)=>{n.d(e,{ZP:()=>o});var i=n(87462),r=(n(67294),n(3905));const a={toc:[]};function o(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},a,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Password Storage",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"It is not recommended to store passwords or seeds on a host's environment variables or in the source code in a production\nsetup. Please follow our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/backup_security"},"backup and security"),"\nrecommendations for production use.")))}o.isMDXComponent=!0},78870:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905)),a=n(86976);const o={description:"Getting started with the official IOTA Client Library Python binding.",image:"/img/logo/iota_mark_light.png",keywords:["Python","install","pip","unpack"]},l="Getting Started with IOTA Client Python Binding",s={unversionedId:"getting_started/python",id:"getting_started/python",title:"Getting Started with IOTA Client Python Binding",description:"Getting started with the official IOTA Client Library Python binding.",source:"@site/iota/external/iota.rs/production/documentation/docs/getting_started/python.mdx",sourceDirName:"getting_started",slug:"/getting_started/python",permalink:"/iota.rs/getting_started/python",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/getting_started/python.mdx",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Python binding.",image:"/img/logo/iota_mark_light.png",keywords:["Python","install","pip","unpack"]},sidebar:"docs",previous:{title:"Getting Started With Node.js",permalink:"/iota.rs/getting_started/nodejs"},next:{title:"Getting Started With Rust",permalink:"/iota.rs/getting_started/rust"}},p={},c=[{value:"Security",id:"security",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],d={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-iota-client-python-binding"},"Getting Started with IOTA Client Python Binding"),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)(a.ZP,{mdxType:"WarningPasswordStorage"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Easiest way how to get python binding up and running is to leverage pre-built python libraries for linux/macos/windows that can be installed to your python environment (3.6+) via ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),". The binding is automagically generated using github ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/actions/workflows/python-bindings-publish.yml?query=branch%3Aproduction"},"actions"),"."),(0,r.kt)("p",null,"The latest artifacts for major python versions can be also grabbed using ",(0,r.kt)("a",{parentName:"p",href:"https://nightly.link/iotaledger/iota.rs/workflows/python-bindings-publish/production"},"nighly.link service"),". Download zip file for the given os and pyversion, unpack wheel file (",(0,r.kt)("inlineCode",{parentName:"p"},".whl"),") and install it via ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install <wheel_file>\n")),(0,r.kt)("p",null,"Once it has been properly installed you can double check it using ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip list\n")),(0,r.kt)("p",null,"You should see the similar output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"Package                    Version\n-------------------------- -------\niota-client-python           0.2.0a3\n")),(0,r.kt)("p",null,"Once installed in the given python environment you are all set and can start hacking using python binding!"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import iota_client\nprint(iota_client.__doc__)\nprint(dir(iota_client))\n")))}u.isMDXComponent=!0}}]);