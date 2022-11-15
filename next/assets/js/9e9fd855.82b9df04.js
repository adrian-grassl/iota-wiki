"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=i,g=h["".concat(c,".").concat(u)]||h[u]||p[u]||o;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={description:"GoShimmer ships with a client Go library which communicates with the HTTP API.",image:"/img/logo/goshimmer_light.png",keywords:["client library","api","HTTP API","golang"]},a="Client Lib: Interaction With Layers",l={unversionedId:"apis/client_lib",id:"apis/client_lib",title:"Client Lib: Interaction With Layers",description:"GoShimmer ships with a client Go library which communicates with the HTTP API.",source:"@site/next/external/goshimmer/documentation/docs/apis/client_lib.md",sourceDirName:"apis",slug:"/apis/client_lib",permalink:"/next/goshimmer/apis/client_lib",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/apis/client_lib.md",tags:[],version:"current",frontMatter:{description:"GoShimmer ships with a client Go library which communicates with the HTTP API.",image:"/img/logo/goshimmer_light.png",keywords:["client library","api","HTTP API","golang"]},sidebar:"docs",previous:{title:"Glossary",permalink:"/next/goshimmer/protocol_specification/glossary"},next:{title:"WebAPI - clientLib",permalink:"/next/goshimmer/apis/webAPI"}},c={},s=[{value:"A note about errors",id:"a-note-about-errors",level:4}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-lib-interaction-with-layers"},"Client Lib: Interaction With Layers"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This guide is meant for developers familiar with the Go programming language.")),(0,i.kt)("p",null,"GoShimmer ships with a client Go library which communicates with the HTTP API. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/iotaledger/goshimmer/client"},"godoc.org docs")," for function/structure documentation. There is also a set of APIs which do not directly have anything to do with the different layers. Since they are so simple, simply extract their usage from the GoDocs."),(0,i.kt)("h1",{id:"use-the-api"},"Use the API"),(0,i.kt)("p",null,"Simply ",(0,i.kt)("inlineCode",{parentName:"p"},"go get")," the lib via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/iotaledger/goshimmer/client\n")),(0,i.kt)("p",null,"Init the API by passing in the API URI of your GoShimmer node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'goshimAPI := client.NewGoShimmerAPI("http://mynode:8080")\n')),(0,i.kt)("p",null,"Optionally, define your own ",(0,i.kt)("inlineCode",{parentName:"p"},"http.Client")," to use, in order for example to define custom timeouts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'goshimAPI := client.NewGoShimmerAPI("http://mynode:8080", client.WithHTTPClient{Timeout: 30 * time.Second})\n')),(0,i.kt)("h4",{id:"a-note-about-errors"},"A note about errors"),(0,i.kt)("p",null,"The API issues HTTP calls to the defined GoShimmer node. Non 200 HTTP OK status codes will reflect themselves as ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," in the returned arguments. Meaning that for example calling for attachments with a non existing/available transaction on a node, will return an ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," from the respective function. (There might be exceptions to this rule)"))}p.isMDXComponent=!0}}]);