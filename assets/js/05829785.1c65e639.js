"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[89648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,k=m["".concat(u,".").concat(f)]||m[f]||p[f]||l;return r?a.createElement(k,i(i({ref:t},o),{},{components:r})):a.createElement(k,i({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={},i=void 0,d={unversionedId:"reference/java_api/TransferBuilder",id:"reference/java_api/TransferBuilder",title:"TransferBuilder",description:"TransferBuilder(address, amount, output_kind): TransferBuilder",source:"@site/iota/external/wallet.rs/production/documentation/docs/reference/java_api/TransferBuilder.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/TransferBuilder",permalink:"/wallet.rs/reference/java_api/TransferBuilder",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/reference/java_api/TransferBuilder.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"TransferBuilder(address, amount, output_kind): TransferBuilder",id:"transferbuilderaddress-amount-output_kind-transferbuilder",level:3},{value:"newFromOutputs(outputs): TransferBuilder",id:"newfromoutputsoutputs-transferbuilder",level:3},{value:"withRemainderValueStrategy(strategy): TransferBuilder",id:"withremaindervaluestrategystrategy-transferbuilder",level:3},{value:"withRemainderToAccountWithAddress(address): TransferBuilder",id:"withremaindertoaccountwithaddressaddress-transferbuilder",level:3},{value:"withIndexation(indexation): TransferBuilder",id:"withindexationindexation-transferbuilder",level:3},{value:"withSkipSync(): TransferBuilder",id:"withskipsync-transferbuilder",level:3},{value:"finish(): Transfer",id:"finish-transfer",level:3}],o={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"transferbuilderaddress-amount-output_kind-transferbuilder"},"TransferBuilder(address, amount, output_kind): ",(0,n.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,n.kt)("p",null,"Initialises a new transfer to the given address."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#addresswrapper"},"AddressWrapper")),(0,n.kt)("td",{parentName:"tr",align:null},"The addres we want to send to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},"long"),(0,n.kt)("td",{parentName:"tr",align:null},"The amount we want to send")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"output_kind"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#outputkind"},"OutputKind")),(0,n.kt)("td",{parentName:"tr",align:null},"The kind of output we wish to use")))),(0,n.kt)("h3",{id:"newfromoutputsoutputs-transferbuilder"},"newFromOutputs(outputs): ",(0,n.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,n.kt)("p",null,"Creates a transfer with multiple outputs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"outputs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#transferoutput"},"TransferOutput[]")),(0,n.kt)("td",{parentName:"tr",align:null},"List of outputs")))),(0,n.kt)("h3",{id:"withremaindervaluestrategystrategy-transferbuilder"},"withRemainderValueStrategy(strategy): ",(0,n.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,n.kt)("p",null,"Sets the remainder value strategy for the transfer."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strategy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#remaindervaluestrategy"},"RemainderValueStrategy")),(0,n.kt)("td",{parentName:"tr",align:null},"The type of strategy we use to handle the remainder")))),(0,n.kt)("h3",{id:"withremaindertoaccountwithaddressaddress-transferbuilder"},"withRemainderToAccountWithAddress(address): ",(0,n.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,n.kt)("p",null,"Move the remainder value to an address that must belong to the source account."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#addresswrapper"},"AddressWrapper")),(0,n.kt)("td",{parentName:"tr",align:null},"The address we send the remainder t o")))),(0,n.kt)("h3",{id:"withindexationindexation-transferbuilder"},"withIndexation(indexation): ",(0,n.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,n.kt)("p",null,"(Optional) message indexation."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"indexation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#indexationpayload"},"IndexationPayload")),(0,n.kt)("td",{parentName:"tr",align:null},"Build a transfer with this specific payload")))),(0,n.kt)("h3",{id:"withskipsync-transferbuilder"},"withSkipSync(): ",(0,n.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,n.kt)("p",null,"Skip account syncing before transferring."),(0,n.kt)("h3",{id:"finish-transfer"},"finish(): ",(0,n.kt)("a",{parentName:"h3",href:"#transfer"},"Transfer")),(0,n.kt)("p",null,"Builds the transfer."))}p.isMDXComponent=!0}}]);