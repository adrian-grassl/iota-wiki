"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[30192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={description:"Getting started with the recommended requirements and installation links for Linux, macOS, and Windows.",image:"/img/Banner/banner_hornet_getting_started.png",keywords:["IOTA Node","Hornet Node","Linux","macOS","Windows","Docker","reference"]},a="Getting Started",l={unversionedId:"getting_started/getting_started",id:"getting_started/getting_started",title:"Getting Started",description:"Getting started with the recommended requirements and installation links for Linux, macOS, and Windows.",source:"@site/iota/external/hornet/production/documentation/docs/getting_started/getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/",permalink:"/hornet/getting_started/",draft:!1,editUrl:"https://github.com/iotaledger/hornet/edit/production/documentation/iota/external/hornet/production/documentation/docs/getting_started/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the recommended requirements and installation links for Linux, macOS, and Windows.",image:"/img/Banner/banner_hornet_getting_started.png",keywords:["IOTA Node","Hornet Node","Linux","macOS","Windows","Docker","reference"]},sidebar:"docs",previous:{title:"Welcome to HORNET",permalink:"/hornet/welcome"},next:{title:"Hornet `apt` Repository (Linux-distro specific)",permalink:"/hornet/how_tos/hornet_apt_repository"}},s={},u=[{value:"Recommended Requirements",id:"recommended-requirements",level:2},{value:"Operating System",id:"operating-system",level:2},{value:"Linux (and Raspberry Pi)",id:"linux-and-raspberry-pi",level:3},{value:"MacOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Configuration",id:"configuration",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hornet Node getting started",src:n(27298).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"Running a node is an efficient way to use IOTA. By doing so, you have direct access to the Tangle instead of having to\nconnect to and trust someone else's node. Additionally, you help the IOTA network to become more distributed and resilient."),(0,o.kt)("p",null,"The node software is the backbone of the IOTA network. For an overview of tasks a node is responsible for, please\nsee our ",(0,o.kt)("a",{parentName:"p",href:"/hornet/explanations/nodes_101"},"Node 101")," section."),(0,o.kt)("p",null,"To make sure that your device meets the minimum security requirements for running a node, please\nsee our ",(0,o.kt)("a",{parentName:"p",href:"/hornet/explanations/security_101"},"Security 101")," section."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you install Hornet version 0.6.0+ since it is the minimum version that targets IOTA 1.5 (Chrysalis) network.\nVersions below 0.6.0 (such as 0.5.x) target the legacy IOTA network which is not the focus of this documentation.")),(0,o.kt)("h2",{id:"recommended-requirements"},"Recommended Requirements"),(0,o.kt)("p",null,"To handle a potential high rate of messages per second, nodes need enough computational power to run reliably, and\nshould have the minimum specs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4 cores or 4 vCPU."),(0,o.kt)("li",{parentName:"ul"},"8 GB RAM."),(0,o.kt)("li",{parentName:"ul"},"SSD storage."),(0,o.kt)("li",{parentName:"ul"},"A public IP address.")),(0,o.kt)("p",null,"The amount of storage you need will depend on whether and how often you plan on pruning old data from your local\ndatabase."),(0,o.kt)("p",null,"Hornet exposes different functionality on different ports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"15600 TCP - Gossip protocol port."),(0,o.kt)("li",{parentName:"ul"},"14626 UDP - Autopeering port (optional)."),(0,o.kt)("li",{parentName:"ul"},"14265 TCP - REST HTTP API port (optional)."),(0,o.kt)("li",{parentName:"ul"},"8081 TCP - Dashboard (optional)."),(0,o.kt)("li",{parentName:"ul"},"8091 TCP - Faucet website (optional)."),(0,o.kt)("li",{parentName:"ul"},"1883 TCP - MQTT (optional).")),(0,o.kt)("p",null,"These ports are important for flawless node operation. The REST HTTP API port is optional and is only needed if\nyou want to offer access to your node's API. All ports can be customized inside\nthe ",(0,o.kt)("a",{parentName:"p",href:"/hornet/how_tos/post_installation"},"config.json")," file."),(0,o.kt)("p",null,"The default dashboard only listens on localhost:8081 per default. If you want to make it accessible from\nthe Internet, you will need to change the default configuration (though we recommend using a reverse proxy)."),(0,o.kt)("h2",{id:"operating-system"},"Operating System"),(0,o.kt)("p",null,"Hornet is written in Go and can be deployed on all major platforms using several installation methods."),(0,o.kt)("p",null,"Hornet ships as a single executable binary (",(0,o.kt)("inlineCode",{parentName:"p"},"hornet")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"hornet.exe"),") and some JSON configuration files; no further dependencies are needed."),(0,o.kt)("h3",{id:"linux-and-raspberry-pi"},"Linux (and Raspberry Pi)"),(0,o.kt)("p",null,"You can install Hornet on Linux using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hornet/how_tos/hornet_apt_repository"},"The hornet apt repository"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hornet/how_tos/using_docker"},"The docker image"),".")),(0,o.kt)("p",null,"Alternatively, you can build Hornet by following these instructions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hornet/how_tos/hornet_apt_repository#pre-built-binaries"},"Prebuilt binary files"),", or"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hornet/how_tos/hornet_apt_repository#build-from-source"},"Build from the source"),".")),(0,o.kt)("h3",{id:"macos"},"MacOS"),(0,o.kt)("p",null,"You can install Hornet on MacOS using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hornet/how_tos/using_docker"},"The docker image"),".")),(0,o.kt)("p",null,"Alternatively, you can build Hornet by following these instructions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hornet/how_tos/using_docker#starting-an-existing-hornet"},"Prebuilt binary files"),".")),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,"You can install Hornet on Windows using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hornet/how_tos/using_docker"},"The docker image"),".")),(0,o.kt)("p",null,"Alternatively, you can build Hornet by following these instructions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hornet/how_tos/hornet_apt_repository#pre-built-binaries"},"Prebuilt binary files"),".")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Hornet uses two JSON configuration files that you can tweak based on your deployment requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config.json"),": includes all core configuration parameters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"peering.json"),": includes connection details to node neighbors (peers).")),(0,o.kt)("p",null,"You can read more about the configuration in the ",(0,o.kt)("a",{parentName:"p",href:"/hornet/how_tos/post_installation"},"post installation"),"\narticle."))}p.isMDXComponent=!0},27298:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner_hornet_getting_started-342d186ee11d79794d5f0feb5a13629b.png"}}]);