"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Getting Started",l={unversionedId:"libraries/wasm/getting_started",id:"libraries/wasm/getting_started",title:"Getting Started",description:"Before building anything you'll need to make sure you have npm installed on your",source:"@site/iota/external/streams/develop/documentation/docs/libraries/wasm/getting_started.md",sourceDirName:"libraries/wasm",slug:"/libraries/wasm/getting_started",permalink:"/streams/libraries/wasm/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/main/documentation/iota/external/streams/develop/documentation/docs/libraries/wasm/getting_started.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API Reference",permalink:"/streams/libraries/rust/api_reference"},next:{title:"Examples",permalink:"/streams/libraries/wasm/examples"}},s={},c=[{value:"Install the library",id:"install-the-library",level:3},{value:"Starting a Channel",id:"starting-a-channel",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Before building anything you'll need to make sure you have ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," installed on your\nmachine."),(0,a.kt)("h3",{id:"install-the-library"},"Install the library"),(0,a.kt)("p",null,"To install the library, you could run:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm i @iota/streams")),(0,a.kt)("h3",{id:"starting-a-channel"},"Starting a Channel"),(0,a.kt)("p",null,"Once the package has been built, you can pull it into a script file like so: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const streams = require("@iota/streams/node");\n\nlet node = "https://chrysalis-nodes.iota.org/";\n\n// Options include: (node-url, local pow)\nlet options = new streams.SendOptions(node, true);\n\nlet author = new streams.Author("Unique Seed Here", options.clone(), streams.ChannelType.MultiBranch );\n\n// Response formatting: {link, sequence link, msg }\nlet response = await author.clone().send_announce();\n\nlet ann_link = response.link;\n\nconsole.log("Channel Announcement at: ", ann_link.toString());\n')))}p.isMDXComponent=!0}}]);