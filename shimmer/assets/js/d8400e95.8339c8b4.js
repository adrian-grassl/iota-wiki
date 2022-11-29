"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={description:"The `blocklog` contract keeps track of the blocks of requests processed by the chain.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","blocklog","views","information","request status","receipts","events","reference"]},l="The `blocklog` Contract",o={unversionedId:"guide/core_concepts/core_contracts/blocklog",id:"guide/core_concepts/core_contracts/blocklog",title:"The `blocklog` Contract",description:"The `blocklog` contract keeps track of the blocks of requests processed by the chain.",source:"@site/shimmer/external/wasp/documentation/docs/guide/core_concepts/core_contracts/blocklog.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/blocklog",permalink:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blocklog",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/core_concepts/core_contracts/blocklog.md",tags:[],version:"current",frontMatter:{description:"The `blocklog` contract keeps track of the blocks of requests processed by the chain.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","blocklog","views","information","request status","receipts","events","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `blob` Contract",permalink:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blob"},next:{title:"The `governance` Contract",permalink:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/governance"}},s={},u=[{value:"Entry Points",id:"entry-points",level:2},{value:"Views",id:"views",level:2},{value:"<code>getBlockInfo(n uint32)</code>",id:"getblockinfon-uint32",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>getRequestIDsForBlock(n uint32)</code>",id:"getrequestidsforblockn-uint32",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>getRequestReceipt(u RequestID)</code>",id:"getrequestreceiptu-requestid",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>getRequestReceiptsForBlock(n uint32)</code>",id:"getrequestreceiptsforblockn-uint32",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>isRequestProcessed(u RequestID)</code>",id:"isrequestprocessedu-requestid",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"<code>getEventsForRequest(u RequestID)</code>",id:"geteventsforrequestu-requestid",level:3},{value:"Parameters",id:"parameters-5",level:3},{value:"Returns",id:"returns-5",level:4},{value:"<code>getEventsForBlock(n blockIndex)</code>",id:"geteventsforblockn-blockindex",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"<code>getEventsForContract(h Hname)</code>",id:"geteventsforcontracth-hname",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"<code>controlAddresses()</code>",id:"controladdresses",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Schemas",id:"schemas",level:2},{value:"<code>RequestID</code>",id:"requestid",level:3},{value:"<code>BlockInfo</code>",id:"blockinfo",level:3},{value:"<code>RequestReceipt</code>",id:"requestreceipt",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-blocklog-contract"},"The ",(0,r.kt)("inlineCode",{parentName:"h1"},"blocklog")," Contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"blocklog")," contract is one of the ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/overview"},"core contracts")," on each IOTA Smart Contracts chain."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"blocklog")," contract keeps track of the blocks of requests processed by the chain, providing views to get request\nstatus, receipts, block, and event details."),(0,r.kt)("h2",{id:"entry-points"},"Entry Points"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"blocklog")," core contract does not contain any entry points which modify its state."),(0,r.kt)("p",null,"The only way to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"blocklog")," state is by submitting requests for processing to the chain."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"views"},"Views"),(0,r.kt)("h3",{id:"getblockinfon-uint32"},(0,r.kt)("inlineCode",{parentName:"h3"},"getBlockInfo(n uint32)")),(0,r.kt)("p",null,"Returns information about the block with index ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n"),":  (optional ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),") The block index. Default: the latest block.")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),"):The block index."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i")," (",(0,r.kt)("a",{parentName:"li",href:"#blockinfo"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockInfo")),"):The information about the block.")),(0,r.kt)("h3",{id:"getrequestidsforblockn-uint32"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRequestIDsForBlock(n uint32)")),(0,r.kt)("p",null,"Returns a list with the IDs of all requests in the block with block index ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," (optional ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),"):The block index. The default value is the latest block.")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"u"),": (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,r.kt)("inlineCode",{parentName:"a"},"Array16")),"\nof ",(0,r.kt)("a",{parentName:"li",href:"#requestid"},(0,r.kt)("inlineCode",{parentName:"a"},"RequestID")),")")),(0,r.kt)("h3",{id:"getrequestreceiptu-requestid"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRequestReceipt(u RequestID)")),(0,r.kt)("p",null,"Returns the receipt for the request with the given ID."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"u")," (",(0,r.kt)("a",{parentName:"li",href:"#requestid"},(0,r.kt)("inlineCode",{parentName:"a"},"RequestID")),"):The request ID.")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d")," (",(0,r.kt)("a",{parentName:"li",href:"#requestreceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"RequestReceipt")),"):The request receipt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),"):The block index."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint16"),"):The request index.")),(0,r.kt)("h3",{id:"getrequestreceiptsforblockn-uint32"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRequestReceiptsForBlock(n uint32)")),(0,r.kt)("p",null,"Returns all the receipts in the block with index ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," (optional ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),"):The block index. Defaults to the latest block.")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d"),":  (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,r.kt)("inlineCode",{parentName:"a"},"Array16")),"\nof ",(0,r.kt)("a",{parentName:"li",href:"#requestreceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"RequestReceipt")),")")),(0,r.kt)("h3",{id:"isrequestprocessedu-requestid"},(0,r.kt)("inlineCode",{parentName:"h3"},"isRequestProcessed(u RequestID)")),(0,r.kt)("p",null,"Returns whether the request with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," has been processed."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"u")," (",(0,r.kt)("a",{parentName:"li",href:"#requestid"},(0,r.kt)("inlineCode",{parentName:"a"},"RequestID")),"):The request ID.")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"p")," (",(0,r.kt)("inlineCode",{parentName:"li"},"bool"),"):Whether the request was processed or not.")),(0,r.kt)("h3",{id:"geteventsforrequestu-requestid"},(0,r.kt)("inlineCode",{parentName:"h3"},"getEventsForRequest(u RequestID)")),(0,r.kt)("p",null,"Returns the list of events triggered during the execution of the request with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"u"),"."),(0,r.kt)("h3",{id:"parameters-5"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"u")," (",(0,r.kt)("a",{parentName:"li",href:"#requestid"},(0,r.kt)("inlineCode",{parentName:"a"},"RequestID")),"):The request ID.")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"e"),": (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,r.kt)("inlineCode",{parentName:"a"},"Array16"))," of ",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte"),").")),(0,r.kt)("h3",{id:"geteventsforblockn-blockindex"},(0,r.kt)("inlineCode",{parentName:"h3"},"getEventsForBlock(n blockIndex)")),(0,r.kt)("p",null,"Returns the list of events triggered during the execution of all requests in the block with index ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," (optional ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),"):The block index. Defaults to the latest block.")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"e"),": (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,r.kt)("inlineCode",{parentName:"a"},"Array16"))," of ",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte"),").")),(0,r.kt)("h3",{id:"geteventsforcontracth-hname"},(0,r.kt)("inlineCode",{parentName:"h3"},"getEventsForContract(h Hname)")),(0,r.kt)("p",null,"Returns a list of events triggered by the smart contract with hname ",(0,r.kt)("inlineCode",{parentName:"p"},"h"),"."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"h")," (",(0,r.kt)("inlineCode",{parentName:"li"},"hname"),"):The smart contract\u2019s hname."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"f")," (optional ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," - default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),'):"From" block index.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"t")," (optional ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," - default: ",(0,r.kt)("inlineCode",{parentName:"li"},"MaxUint32"),'):"To" block index.')),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"e"),": (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,r.kt)("inlineCode",{parentName:"a"},"Array16"))," of ",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte"),")")),(0,r.kt)("h3",{id:"controladdresses"},(0,r.kt)("inlineCode",{parentName:"h3"},"controlAddresses()")),(0,r.kt)("p",null,"Returns the current state controller and governing addresses and at what block index they were set."),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s"),": (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/address.go"},(0,r.kt)("inlineCode",{parentName:"a"},"iotago::Address")),") The state controller\naddress."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"g"),": (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/address.go"},(0,r.kt)("inlineCode",{parentName:"a"},"iotago::Address")),") The governing address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," (",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),"):The block index where the specified addresses were set.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("h3",{id:"requestid"},(0,r.kt)("inlineCode",{parentName:"h3"},"RequestID")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestID")," is encoded as the concatenation of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transaction ID (",(0,r.kt)("inlineCode",{parentName:"li"},"[32]byte"),")."),(0,r.kt)("li",{parentName:"ul"},"Transaction output index (",(0,r.kt)("inlineCode",{parentName:"li"},"uint16"),").")),(0,r.kt)("h3",{id:"blockinfo"},(0,r.kt)("inlineCode",{parentName:"h3"},"BlockInfo")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BlockInfo")," is encoded as the concatenation of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The block timestamp (",(0,r.kt)("inlineCode",{parentName:"li"},"uint64")," UNIX nanoseconds)."),(0,r.kt)("li",{parentName:"ul"},"Amount of requests in the block (",(0,r.kt)("inlineCode",{parentName:"li"},"uint16"),")."),(0,r.kt)("li",{parentName:"ul"},"Amount of successful requests (",(0,r.kt)("inlineCode",{parentName:"li"},"uint16"),")."),(0,r.kt)("li",{parentName:"ul"},"Amount of off-ledger requests (",(0,r.kt)("inlineCode",{parentName:"li"},"uint16"),")."),(0,r.kt)("li",{parentName:"ul"},"Anchor transaction ID (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/transaction.go"},(0,r.kt)("inlineCode",{parentName:"a"},"iotago::TransactionID")),")."),(0,r.kt)("li",{parentName:"ul"},"Anchor transaction sub-essence hash (",(0,r.kt)("inlineCode",{parentName:"li"},"[32]byte"),")."),(0,r.kt)("li",{parentName:"ul"},"Previous L1 commitment (except for block index 0).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"State commitment (",(0,r.kt)("inlineCode",{parentName:"li"},"trie::VCommitment"),")."),(0,r.kt)("li",{parentName:"ul"},"Block hash (",(0,r.kt)("inlineCode",{parentName:"li"},"[20]byte"),")."))),(0,r.kt)("li",{parentName:"ul"},"Total base tokens in L2 accounts (",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),")."),(0,r.kt)("li",{parentName:"ul"},"Total storage deposit (",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),")."),(0,r.kt)("li",{parentName:"ul"},"Gas burned (",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),")."),(0,r.kt)("li",{parentName:"ul"},"Gas fee charged (",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),").")),(0,r.kt)("h3",{id:"requestreceipt"},(0,r.kt)("inlineCode",{parentName:"h3"},"RequestReceipt")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RequestReceipt")," is encoded as the concatenation of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gas budget (",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),")."),(0,r.kt)("li",{parentName:"ul"},"Gas burned (",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),")."),(0,r.kt)("li",{parentName:"ul"},"Gas fee charged (",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),")."),(0,r.kt)("li",{parentName:"ul"},"The request (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wasp/blob/develop/packages/isc/request.go"},(0,r.kt)("inlineCode",{parentName:"a"},"isc::Request")),")."),(0,r.kt)("li",{parentName:"ul"},"Whether the request produced an error (",(0,r.kt)("inlineCode",{parentName:"li"},"bool"),")."),(0,r.kt)("li",{parentName:"ul"},"If the request produced an error, the\n",(0,r.kt)("a",{parentName:"li",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/errors#unresolvedvmerror"},(0,r.kt)("inlineCode",{parentName:"a"},"UnresolvedVMError")),".")))}p.isMDXComponent=!0}}]);