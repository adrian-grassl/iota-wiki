"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),h=r,d=f["".concat(s,".").concat(h)]||f[h]||c[h]||i;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={description:"Introducing the HORNET nodes configuration files and their settings.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","HORNET Node","Configuration","REST API","Dashboard","how to"]},a="Post-installation",l={unversionedId:"how_tos/post_installation",id:"how_tos/post_installation",title:"Post-installation",description:"Introducing the HORNET nodes configuration files and their settings.",source:"@site/next/external/hornet/documentation/docs/how_tos/post_installation.md",sourceDirName:"how_tos",slug:"/how_tos/post_installation",permalink:"/next/hornet/how_tos/post_installation",draft:!1,editUrl:"https://github.com/iotaledger/hornet/edit/develop/documentation/next/external/hornet/documentation/docs/how_tos/post_installation.md",tags:[],version:"current",frontMatter:{description:"Introducing the HORNET nodes configuration files and their settings.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","HORNET Node","Configuration","REST API","Dashboard","how to"]},sidebar:"mySidebar",previous:{title:"Install HORNET using Docker",permalink:"/next/hornet/how_tos/using_docker"},next:{title:"Run a Private Tangle",permalink:"/next/hornet/how_tos/private_tangle"}},s={},u=[{value:"Configuration Files",id:"configuration-files",level:2},{value:"Default Configuration",id:"default-configuration",level:2},{value:"Configuring HTTP REST API",id:"configuring-http-rest-api",level:2},{value:"Routes",id:"routes",level:3},{value:"JWT Auth",id:"jwt-auth",level:3},{value:"Proof-of-Work",id:"proof-of-work",level:3},{value:"Reverse Proxy",id:"reverse-proxy",level:3},{value:"Other",id:"other",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"post-installation"},"Post-installation"),(0,r.kt)("p",null,"Once you have deployed HORNET, you can set all the parameters using configuration files."),(0,r.kt)("h2",{id:"configuration-files"},"Configuration Files"),(0,r.kt)("p",null,"The most important configuration files are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config.json")," - Includes all configuration flags and their values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"peering.json")," - Includes all connection details to your static peers (neighbors).")),(0,r.kt)("h2",{id:"default-configuration"},"Default Configuration"),(0,r.kt)("p",null,"There are default configuration files available that you can use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config_testnet.json")," - Includes the default values required to join the Shimmer Testnet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config_defaults.json")," - Includes all default parameters used by HORNET. You can use this file as a reference when customizing your ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json"))),(0,r.kt)("p",null,"You can pick one of these files and use it as your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," to join the configured network."),(0,r.kt)("p",null,"Please see the ",(0,r.kt)("a",{parentName:"p",href:"/next/hornet/references/configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"config.json"))," and ",(0,r.kt)("a",{parentName:"p",href:"/next/hornet/references/peering"},(0,r.kt)("inlineCode",{parentName:"a"},"peering.json"))," articles for more information about the contents of the configuration files."),(0,r.kt)("h2",{id:"configuring-http-rest-api"},"Configuring HTTP REST API"),(0,r.kt)("p",null,"One of the tasks the the node is responsible for is exposing ",(0,r.kt)("a",{parentName:"p",href:"/next/hornet/references/api_reference"},"API")," to clients that would like to interact with the IOTA network, such as crypto wallets, exchanges, IoT devices, etc."),(0,r.kt)("p",null,"By default, HORNET will expose the ",(0,r.kt)("a",{parentName:"p",href:"/next/hornet/references/api_reference"},"Core REST API v2")," on port ",(0,r.kt)("inlineCode",{parentName:"p"},"14265"),".\nIf you use the ",(0,r.kt)("a",{parentName:"p",href:"/next/hornet/how_tos/using_docker"},"recommended setup")," the API will be exposed on the default HTTPS port (",(0,r.kt)("inlineCode",{parentName:"p"},"443"),") and secured using an SSL certificate."),(0,r.kt)("p",null,"Since offering the HTTP REST API to the public can consume your node's resources, there are options to restrict which routes can be called and other request limitations:"),(0,r.kt)("h3",{id:"routes"},"Routes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"restAPI.publicRoutes")," defines which routes can be called without JWT authorization. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"restAPI.protectedRoutes")," defines which routes require JWT authorization."),(0,r.kt)("li",{parentName:"ul"},"All other routes will not be exposed.")),(0,r.kt)("h3",{id:"jwt-auth"},"JWT Auth"),(0,r.kt)("p",null,"To generate a JWT-token to be used with the protected routes you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./hornet tool jwt-api --databasePath <path to your p2pstore> --salt <restAPI.jwtAuth.salt value from your config.json>\n")),(0,r.kt)("p",null,"If you are running our ",(0,r.kt)("a",{parentName:"p",href:"/next/hornet/how_tos/using_docker"},"recommended setup")," then see ",(0,r.kt)("a",{parentName:"p",href:"/next/hornet/how_tos/using_docker"},"here"),"."),(0,r.kt)("h3",{id:"proof-of-work"},"Proof-of-Work"),(0,r.kt)("p",null,"If you are concerned with resource consumption, consider turning off ",(0,r.kt)("inlineCode",{parentName:"p"},"restAPI.pow.enabled"),".\nThis way, the clients must perform proof of work locally before submitting a block for broadcast.\nIf you would like to offer proof of work to clients, consider increasing the ",(0,r.kt)("inlineCode",{parentName:"p"},"restAPI.pow.workerCount")," to provide a faster block submission experience."),(0,r.kt)("h3",{id:"reverse-proxy"},"Reverse Proxy"),(0,r.kt)("p",null,"We recommend that you provide your HTTP REST API behind a reverse proxy, such as ",(0,r.kt)("a",{parentName:"p",href:"http://www.haproxy.org/"},"HAProxy"),", ",(0,r.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache")," configured with TLS.\nWhen using our ",(0,r.kt)("a",{parentName:"p",href:"/next/hornet/how_tos/using_docker"},"recommended setup")," this is done for you automatically."),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("p",null,"You can find all the HTTP REST API related options in the ",(0,r.kt)("a",{parentName:"p",href:"/next/hornet/references/configuration#restapi"},(0,r.kt)("inlineCode",{parentName:"a"},"config.json")," reference")))}c.isMDXComponent=!0}}]);