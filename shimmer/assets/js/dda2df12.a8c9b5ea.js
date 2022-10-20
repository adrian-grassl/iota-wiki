"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},i="Interface: IBlockMetadata",o={unversionedId:"references/client/interfaces/IBlockMetadata",id:"references/client/interfaces/IBlockMetadata",title:"Interface: IBlockMetadata",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IBlockMetadata.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IBlockMetadata",permalink:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IBlockMetadata.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IBlockIdResponse",permalink:"/shimmer/iotajs/references/client/interfaces/IBlockIdResponse"},next:{title:"Interface: IClient",permalink:"/shimmer/iotajs/references/client/interfaces/IClient"}},s={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"blockId",id:"blockid",level:3},{value:"parents",id:"parents",level:3},{value:"isSolid",id:"issolid",level:3},{value:"referencedByMilestoneIndex",id:"referencedbymilestoneindex",level:3},{value:"milestoneIndex",id:"milestoneindex",level:3},{value:"ledgerInclusionState",id:"ledgerinclusionstate",level:3},{value:"conflictReason",id:"conflictreason",level:3},{value:"shouldPromote",id:"shouldpromote",level:3},{value:"shouldReattach",id:"shouldreattach",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-iblockmetadata"},"Interface: IBlockMetadata"),(0,a.kt)("p",null,"Response from the metadata endpoint."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata#blockid"},"blockId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata#parents"},"parents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata#issolid"},"isSolid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata#referencedbymilestoneindex"},"referencedByMilestoneIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata#milestoneindex"},"milestoneIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata#ledgerinclusionstate"},"ledgerInclusionState")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata#conflictreason"},"conflictReason")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata#shouldpromote"},"shouldPromote")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IBlockMetadata#shouldreattach"},"shouldReattach"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"blockid"},"blockId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The block id."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"parents"},"parents"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"parents"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"The parent block ids."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"issolid"},"isSolid"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"isSolid"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Is the block solid."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"referencedbymilestoneindex"},"referencedByMilestoneIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"referencedByMilestoneIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Is the block referenced by a milestone."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"milestoneindex"},"milestoneIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"milestoneIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Is this block a valid milestone."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ledgerinclusionstate"},"ledgerInclusionState"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ledgerInclusionState"),": ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/api_ref#ledgerinclusionstate"},(0,a.kt)("inlineCode",{parentName:"a"},"LedgerInclusionState"))),(0,a.kt)("p",null,"The ledger inclusion state."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"conflictreason"},"conflictReason"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"conflictReason"),": ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/enums/ConflictReason"},(0,a.kt)("inlineCode",{parentName:"a"},"ConflictReason"))),(0,a.kt)("p",null,"The conflict reason."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"shouldpromote"},"shouldPromote"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"shouldPromote"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Should the block be promoted."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"shouldreattach"},"shouldReattach"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"shouldReattach"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Should the block be reattached."))}d.isMDXComponent=!0}}]);