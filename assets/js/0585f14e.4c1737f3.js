"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[11039],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,g=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={},o="Tangle data storage",s={unversionedId:"tangle-data-storage/overview",id:"tangle-data-storage/overview",title:"Tangle data storage",description:"Data boosts innovation for public and private sector organisations, and can be used to create new revenue streams. However, without a vendor-neutral way of verifying data, it can't be trusted. This blueprint uses the IOTA Tangle as an immutable data structure to verify the contents of a file in a third-party storage solution.",source:"@site/iota/external/blueprints/production/tangle-data-storage/overview.md",sourceDirName:"tangle-data-storage",slug:"/tangle-data-storage/overview",permalink:"/blueprints/tangle-data-storage/overview",draft:!1,editUrl:"https://github.com/iotaledger/blueprints/edit/main/iota/external/blueprints/production/tangle-data-storage/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Deploy and Test the Document Immutability Demo",permalink:"/blueprints/doc-immutability/deployment-and-testing"},next:{title:"Application Architecture",permalink:"/blueprints/tangle-data-storage/architecture"}},l={},u=[{value:"Business Case",id:"business-case",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Solution",id:"solution",level:2},{value:"Demo",id:"demo",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"GitHub repository",id:"github-repository",level:3},{value:"Client WASM library",id:"client-wasm-library",level:3},{value:"IPFS",id:"ipfs",level:3}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tangle-data-storage"},"Tangle data storage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data boosts innovation for public and private sector organisations, and can be used to create new revenue streams. However, without a vendor-neutral way of verifying data, it can't be trusted. This blueprint uses the IOTA Tangle as an immutable data structure to verify the contents of a file in a third-party storage solution.")),(0,r.kt)("h2",{id:"business-case"},"Business Case"),(0,r.kt)("p",null,"Storing, sharing and trading data is a cornerstone of business in the connected world and boosts innovation for public and private sector organisations. However, if you can't trust that the data has not been altered, then the data becomes nearly useless. By using the IOTA Tangle, businesses and connected machines can trust in the security and privacy of the data they share."),(0,r.kt)("h2",{id:"challenges"},"Challenges"),(0,r.kt)("p",null,"A common requirement for nearly all use cases or applications is that data must be stored for later use, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Supply chain:")," Shipping documents or images must be stored to form a permanent record of events"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Digital twin of a vehicle:")," All data such as the odometer readings, maintenance record, and ownership change should be stored to form a permanent record of the entire lifecycle of the vehicle")),(0,r.kt)("p",null,"However, the Tangle is not a database. The Tangle is an immutable, distributed ledger which allows you to store a hash of data and a pointer to its location in third-party data storage."),(0,r.kt)("admonition",{title:":",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Storing and retrieving messages in the Tangle indefinitely is ideally done with ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chronicle.rs/welcome"},"Chronicle"),".")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"By creating a cryptographic hash of the document at the source and storing the hash in the Tangle, you have a method of proving that the data is unchanged. In addition, you may also want the data to remain private and allow only authorized users to view it as well as be able to revoke this authorization when needed. By using any standard encryption method, the data can be secured and only visible to those with the corresponding decryption key."),(0,r.kt)("p",null,"When you use the Tangle with a third-party data storage solution as described in this blueprint, your data is immutably secured and timestamped, without having to attach all of it to the Tangle."),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"See this website for a ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.iota.org/"},"demonstration of the application"),"."),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("h3",{id:"github-repository"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/iotaledger/poc-ipfs"},"GitHub repository")),(0,r.kt)("p",null,"Read the code and some quickstart instructions to test this blueprint."),(0,r.kt)("h3",{id:"client-wasm-library"},(0,r.kt)("a",{parentName:"h3",href:"https://wiki.iota.org/iota.rs/libraries/nodejs/getting_started"},"Client WASM library")),(0,r.kt)("p",null,"Learn how to use the JavaScript client library to create, send, and receive transactions."),(0,r.kt)("h3",{id:"ipfs"},(0,r.kt)("a",{parentName:"h3",href:"https://ipfs.io/"},"IPFS")),(0,r.kt)("p",null,"This blueprint stores files on IPFS, then attaches the immutable, permanent IPFS links to the Tangle. This secures your content, without having to put the whole file in the Tangle."))}c.isMDXComponent=!0}}]);