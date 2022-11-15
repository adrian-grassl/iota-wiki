"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[24624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=s,d=u["".concat(o,".").concat(m)]||u[m]||k[m]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:s,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const i={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},l="Interface: IGossipMetrics",a={unversionedId:"references/client/interfaces/IGossipMetrics",id:"references/client/interfaces/IGossipMetrics",title:"Interface: IGossipMetrics",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IGossipMetrics.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IGossipMetrics",permalink:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IGossipMetrics.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IGossipHeartbeat",permalink:"/shimmer/iotajs/references/client/interfaces/IGossipHeartbeat"},next:{title:"Interface: IGovernorAddressUnlockCondition",permalink:"/shimmer/iotajs/references/client/interfaces/IGovernorAddressUnlockCondition"}},o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"newBlocks",id:"newblocks",level:3},{value:"knownBlocks",id:"knownblocks",level:3},{value:"receivedBlocks",id:"receivedblocks",level:3},{value:"receivedBlockRequests",id:"receivedblockrequests",level:3},{value:"receivedMilestoneRequests",id:"receivedmilestonerequests",level:3},{value:"receivedHeartbeats",id:"receivedheartbeats",level:3},{value:"sentBlocks",id:"sentblocks",level:3},{value:"sentBlockRequests",id:"sentblockrequests",level:3},{value:"sentMilestoneRequests",id:"sentmilestonerequests",level:3},{value:"sentHeartbeats",id:"sentheartbeats",level:3},{value:"droppedPackets",id:"droppedpackets",level:3}],p={toc:c};function k(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"interface-igossipmetrics"},"Interface: IGossipMetrics"),(0,s.kt)("p",null,"Gossip metrics."),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"properties"},"Properties"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#newblocks"},"newBlocks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#knownblocks"},"knownBlocks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#receivedblocks"},"receivedBlocks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#receivedblockrequests"},"receivedBlockRequests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#receivedmilestonerequests"},"receivedMilestoneRequests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#receivedheartbeats"},"receivedHeartbeats")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#sentblocks"},"sentBlocks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#sentblockrequests"},"sentBlockRequests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#sentmilestonerequests"},"sentMilestoneRequests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#sentheartbeats"},"sentHeartbeats")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics#droppedpackets"},"droppedPackets"))),(0,s.kt)("h2",{id:"properties-1"},"Properties"),(0,s.kt)("h3",{id:"newblocks"},"newBlocks"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"newBlocks"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of new blocks."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"knownblocks"},"knownBlocks"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"knownBlocks"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of known blocks."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receivedblocks"},"receivedBlocks"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"receivedBlocks"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of received blocks."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receivedblockrequests"},"receivedBlockRequests"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"receivedBlockRequests"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of received block requests."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receivedmilestonerequests"},"receivedMilestoneRequests"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"receivedMilestoneRequests"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of received milestone requests."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receivedheartbeats"},"receivedHeartbeats"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"receivedHeartbeats"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of received heartbeats."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sentblocks"},"sentBlocks"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"sentBlocks"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of sent blocks."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sentblockrequests"},"sentBlockRequests"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"sentBlockRequests"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of sent block requests."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sentmilestonerequests"},"sentMilestoneRequests"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"sentMilestoneRequests"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of sent miletsone requests."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sentheartbeats"},"sentHeartbeats"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"sentHeartbeats"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of sent heartbeats."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"droppedpackets"},"droppedPackets"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"droppedPackets"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of dropped sent packets."))}k.isMDXComponent=!0}}]);