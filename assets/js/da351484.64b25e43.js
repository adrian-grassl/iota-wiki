"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[70914],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),v=s(a),k=r,c=v["".concat(d,".").concat(k)]||v[k]||p[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=v;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},25139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"reference/java_api/EventManager",id:"reference/java_api/EventManager",title:"EventManager",description:"subscribeErrors(cb): EventId",source:"@site/iota/external/wallet.rs/production/documentation/docs/reference/java_api/EventManager.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/EventManager",permalink:"/wallet.rs/reference/java_api/EventManager",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/reference/java_api/EventManager.mdx",tags:[],version:"current",frontMatter:{}},d={},s=[{value:"subscribeErrors(cb): EventId",id:"subscribeerrorscb-eventid",level:3},{value:"subscribeNewTransaction(cb): EventId",id:"subscribenewtransactioncb-eventid",level:3},{value:"subscribeConfirmationStateChange(cb): EventId",id:"subscribeconfirmationstatechangecb-eventid",level:3},{value:"subscribeReattachment(cb): EventId",id:"subscribereattachmentcb-eventid",level:3},{value:"subscribeBroadcast(cb): EventId",id:"subscribebroadcastcb-eventid",level:3},{value:"subscribeTransferProgress(cb): EventId",id:"subscribetransferprogresscb-eventid",level:3},{value:"subscribeMigrationProgress(cb): EventId",id:"subscribemigrationprogresscb-eventid",level:3},{value:"subscribeBalanceChange(cb): EventId",id:"subscribebalancechangecb-eventid",level:3},{value:"subscribeStrongholdStatusChange(cb): EventId",id:"subscribestrongholdstatuschangecb-eventid",level:3},{value:"subscribeAddressConsolidationNeeded(cb): EventId",id:"subscribeaddressconsolidationneededcb-eventid",level:3},{value:"removeErrorListener(event): void",id:"removeerrorlistenerevent-void",level:3},{value:"removeNewTransactionListener(event): void",id:"removenewtransactionlistenerevent-void",level:3},{value:"removeConfirmationStateChangeListener(event): void",id:"removeconfirmationstatechangelistenerevent-void",level:3},{value:"removeReattachmentListener(event): void",id:"removereattachmentlistenerevent-void",level:3},{value:"removeBroadcastListener(event): void",id:"removebroadcastlistenerevent-void",level:3},{value:"removeTransferProgressListener(event): void",id:"removetransferprogresslistenerevent-void",level:3},{value:"removeMigrationProgressListener(event): void",id:"removemigrationprogresslistenerevent-void",level:3},{value:"removeBalanceChangeListener(event): void",id:"removebalancechangelistenerevent-void",level:3},{value:"removeStrongholdStatusChangeListener(event): void",id:"removestrongholdstatuschangelistenerevent-void",level:3},{value:"removeAddressConsolidationNeededListener(event): void",id:"removeaddressconsolidationneededlistenerevent-void",level:3}],m={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"subscribeerrorscb-eventid"},"subscribeErrors(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to errors."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#errorlistener"},"ErrorListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"subscribenewtransactioncb-eventid"},"subscribeNewTransaction(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to new messages."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#newtransactionlistener"},"NewTransactionListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"subscribeconfirmationstatechangecb-eventid"},"subscribeConfirmationStateChange(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to transaction confirmation state change."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#transactionconfirmationchangelistener"},"TransactionConfirmationChangeListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"subscribereattachmentcb-eventid"},"subscribeReattachment(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to transaction reattachment change."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#reattachtransactionlistener"},"ReattachTransactionListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"subscribebroadcastcb-eventid"},"subscribeBroadcast(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to transaction broadcast."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#broadcasttransactionlistener"},"BroadcastTransactionListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"subscribetransferprogresscb-eventid"},"subscribeTransferProgress(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to a transfer event."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#transferprogresslistener"},"TransferProgressListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"subscribemigrationprogresscb-eventid"},"subscribeMigrationProgress(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to a migration event."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#migrationprogresslistener"},"MigrationProgressListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"subscribebalancechangecb-eventid"},"subscribeBalanceChange(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to balance changes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#balancechangelistener"},"BalanceChangeListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"subscribestrongholdstatuschangecb-eventid"},"subscribeStrongholdStatusChange(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to stronghold status change events."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#strongholdstatuslistener"},"StrongholdStatusListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"subscribeaddressconsolidationneededcb-eventid"},"subscribeAddressConsolidationNeeded(cb): ",(0,r.kt)("a",{parentName:"h3",href:"#eventid"},"EventId")),(0,r.kt)("p",null,"Listen to ",(0,r.kt)("inlineCode",{parentName:"p"},"address consolidation needed")," events."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#addressconsolidationneededlistener"},"AddressConsolidationNeededListener")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"removeerrorlistenerevent-void"},"removeErrorListener(event): void"),(0,r.kt)("p",null,"Removes the error listener associated with the given identifier."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove")))),(0,r.kt)("h3",{id:"removenewtransactionlistenerevent-void"},"removeNewTransactionListener(event): void"),(0,r.kt)("p",null,"Removes the new transaction listener associated with the given identifier."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove")))),(0,r.kt)("h3",{id:"removeconfirmationstatechangelistenerevent-void"},"removeConfirmationStateChangeListener(event): void"),(0,r.kt)("p",null,"Removes the new confirmation state change listener associated with the given identifier."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove")))),(0,r.kt)("h3",{id:"removereattachmentlistenerevent-void"},"removeReattachmentListener(event): void"),(0,r.kt)("p",null,"Removes the reattachment listener associated with the given identifier."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove")))),(0,r.kt)("h3",{id:"removebroadcastlistenerevent-void"},"removeBroadcastListener(event): void"),(0,r.kt)("p",null,"Removes the broadcast listener associated with the given identifier."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove")))),(0,r.kt)("h3",{id:"removetransferprogresslistenerevent-void"},"removeTransferProgressListener(event): void"),(0,r.kt)("p",null,"Remove a transfer event listener."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove")))),(0,r.kt)("h3",{id:"removemigrationprogresslistenerevent-void"},"removeMigrationProgressListener(event): void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove Remove a migration event listener.")))),(0,r.kt)("h3",{id:"removebalancechangelistenerevent-void"},"removeBalanceChangeListener(event): void"),(0,r.kt)("p",null,"Removes the balance change listener associated with the given identifier."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove")))),(0,r.kt)("h3",{id:"removestrongholdstatuschangelistenerevent-void"},"removeStrongholdStatusChangeListener(event): void"),(0,r.kt)("p",null,"Removes the stronghold status change listener associated with the given identifier."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove")))),(0,r.kt)("h3",{id:"removeaddressconsolidationneededlistenerevent-void"},"removeAddressConsolidationNeededListener(event): void"),(0,r.kt)("p",null,"Removes the balance change listener associated with the given identifier."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eventid"},"EventId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the listener we want to remove")))))}p.isMDXComponent=!0}}]);