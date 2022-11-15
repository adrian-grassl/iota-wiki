"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},o="Interface: IOutputMetadataResponse",s={unversionedId:"references/client/interfaces/IOutputMetadataResponse",id:"references/client/interfaces/IOutputMetadataResponse",title:"Interface: IOutputMetadataResponse",description:"iota.js API reference",source:"@site/next/external/iota.js/documentation/docs/references/client/interfaces/IOutputMetadataResponse.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IOutputMetadataResponse",permalink:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/references/client/interfaces/IOutputMetadataResponse.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: INodeInfoStatus",permalink:"/next/iotajs/references/client/interfaces/INodeInfoStatus"},next:{title:"Interface: IOutputResponse",permalink:"/next/iotajs/references/client/interfaces/IOutputResponse"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"blockId",id:"blockid",level:3},{value:"transactionId",id:"transactionid",level:3},{value:"outputIndex",id:"outputindex",level:3},{value:"isSpent",id:"isspent",level:3},{value:"milestoneIndexSpent",id:"milestoneindexspent",level:3},{value:"milestoneTimestampSpent",id:"milestonetimestampspent",level:3},{value:"transactionIdSpent",id:"transactionidspent",level:3},{value:"milestoneIndexBooked",id:"milestoneindexbooked",level:3},{value:"milestoneTimestampBooked",id:"milestonetimestampbooked",level:3},{value:"ledgerIndex",id:"ledgerindex",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface-ioutputmetadataresponse"},"Interface: IOutputMetadataResponse"),(0,r.kt)("p",null,"Details of an output."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#blockid"},"blockId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#transactionid"},"transactionId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#outputindex"},"outputIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#isspent"},"isSpent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#milestoneindexspent"},"milestoneIndexSpent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#milestonetimestampspent"},"milestoneTimestampSpent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#transactionidspent"},"transactionIdSpent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#milestoneindexbooked"},"milestoneIndexBooked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#milestonetimestampbooked"},"milestoneTimestampBooked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IOutputMetadataResponse#ledgerindex"},"ledgerIndex"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"blockid"},"blockId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"blockId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The block id the output was contained in."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactionid"},"transactionId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"transactionId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The transaction id for the output."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"outputindex"},"outputIndex"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"outputIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The index for the output."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isspent"},"isSpent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isSpent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Is the output spent."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"milestoneindexspent"},"milestoneIndexSpent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"milestoneIndexSpent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The milestone index at which this output was spent."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"milestonetimestampspent"},"milestoneTimestampSpent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"milestoneTimestampSpent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The milestone timestamp this output was spent."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactionidspent"},"transactionIdSpent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"transactionIdSpent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The transaction this output was spent with."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"milestoneindexbooked"},"milestoneIndexBooked"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"milestoneIndexBooked"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The milestone index at which this output was booked into the ledger."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"milestonetimestampbooked"},"milestoneTimestampBooked"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"milestoneTimestampBooked"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The milestone timestamp this output was booked in the ledger."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ledgerindex"},"ledgerIndex"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ledgerIndex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The ledger index at which these output was available at."))}c.isMDXComponent=!0}}]);