"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91983],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>p});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var r=l.createContext({}),s=function(t){var e=l.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},k=function(t){var e=s(t.components);return l.createElement(r.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,r=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),c=s(n),p=a,h=c["".concat(r,".").concat(p)]||c[p]||d[p]||i;return n?l.createElement(h,o(o({ref:e},k),{},{components:n})):l.createElement(h,o({ref:e},k))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var u={};for(var r in e)hasOwnProperty.call(e,r)&&(u[r]=e[r]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36432:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const i={description:"The unspent transaction output (UTXO) model defines a ledger state where balances are not directly associated with addresses but with the outputs of transactions",image:"https://imgur.com/cr7zhVH.png",slug:"5.1UTXO",keywords:["unlock block","transactions essence","input","reference","unlock block","blake2b-256","hash","signature"]},o="5.1 UTXO",u={unversionedId:"5.1 UTXO",id:"5.1 UTXO",title:"5.1 UTXO",description:"The unspent transaction output (UTXO) model defines a ledger state where balances are not directly associated with addresses but with the outputs of transactions",source:"@site/shimmer/external/iota-2.0-research-specifications/5.1 UTXO.md",sourceDirName:".",slug:"/5.1UTXO",permalink:"/shimmer/IOTA-2.0-Research-Specifications/5.1UTXO",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/shimmer/external/iota-2.0-research-specifications/5.1 UTXO.md",tags:[],version:"current",frontMatter:{description:"The unspent transaction output (UTXO) model defines a ledger state where balances are not directly associated with addresses but with the outputs of transactions",image:"https://imgur.com/cr7zhVH.png",slug:"5.1UTXO",keywords:["unlock block","transactions essence","input","reference","unlock block","blake2b-256","hash","signature"]},sidebar:"tutorialSidebar",previous:{title:"4.7 Markers",permalink:"/shimmer/IOTA-2.0-Research-Specifications/4.7Markers"},next:{title:"5.2 Ledger State",permalink:"/shimmer/IOTA-2.0-Research-Specifications/5.2LedgerState"}},r={},s=[{value:"5.1.1 Introduction",id:"511-introduction",level:2},{value:"5.1.2 Transaction Layout",id:"512-transaction-layout",level:2},{value:"5.1.2.1 Transaction Essence",id:"5121-transaction-essence",level:3},{value:"5.1.2.2 Inputs",id:"5122-inputs",level:3},{value:"UTXO Input",id:"utxo-input",level:4},{value:"5.1.2.3 Outputs",id:"5123-outputs",level:3},{value:"SigLockedSingleOutput",id:"siglockedsingleoutput",level:4},{value:"SigLockedAssetOutput",id:"siglockedassetoutput",level:4},{value:"5.1.2.4 Payload",id:"5124-payload",level:3},{value:"5.1.2.5 Unlock Blocks",id:"5125-unlock-blocks",level:3},{value:"Signature Unlock Block",id:"signature-unlock-block",level:4},{value:"Reference Unlock block",id:"reference-unlock-block",level:4},{value:"5.1.3 Validation",id:"513-validation",level:2},{value:"5.1.3.1 Transaction Syntactical Validation",id:"5131-transaction-syntactical-validation",level:3},{value:"5.1.3.2 Transaction Semantic Validation",id:"5132-transaction-semantic-validation",level:3}],k={toc:s};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"51-utxo"},"5.1 UTXO"),(0,a.kt)("h2",{id:"511-introduction"},"5.1.1 Introduction"),(0,a.kt)("p",null,"The unspent transaction output (UTXO) model defines a ledger state where balances are not directly associated with addresses but with the outputs of transactions. In this model, transactions specify the outputs of previous transactions as inputs, which are consumed in order to create new outputs.\nA transaction must consume the entirety of the specified inputs. The section unlocking the inputs is called an ",(0,a.kt)("em",{parentName:"p"},"unlock block"),". An unlock block may contain a signature proving ownership of a given input's address and/or other unlock criteria."),(0,a.kt)("p",null,"The following image depicts the flow of funds using UTXO:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://imgur.com/cr7zhVH.png"},(0,a.kt)("img",{parentName:"a",src:"https://imgur.com/cr7zhVH.png",alt:"Flow of funds using UTXO"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Image 5.1.1:")," Flow of funds using UTXO."),(0,a.kt)("p",null,"The UTXO specification depends on the following specifications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./2.3StandardPayloadsLayout#transaction-payload"},"2.3 Standard Payloads Layout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./5.2LedgerState"},"5.2 - Ledger state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./5.3Mana"},"5.3 - Mana")," ")),(0,a.kt)("h2",{id:"512-transaction-layout"},"5.1.2 Transaction Layout"),(0,a.kt)("p",null,"A ",(0,a.kt)("i",null,"Transaction")," payload is made up of two parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("i",null,"Transaction Essence")," part contains: version, timestamp, nodeID of the ",(0,a.kt)("a",{parentName:"li",href:"./5.3Mana"},"aMana")," pledge, nodeID of the ",(0,a.kt)("a",{parentName:"li",href:"./5.3Mana"},"cMana")," pledge, inputs, outputs and an optional data payload."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("i",null,"Unlock Blocks")," which unlock the ",(0,a.kt)("i",null,"Transaction Essence"),"'s inputs. In case the unlock block contains a signature, it signs the entire ",(0,a.kt)("i",null,"Transaction Essence")," part.")),(0,a.kt)("p",null,"All values are serialized in little-endian encoding (it stores the most significant byte of a word at the largest address and the smallest byte at the smallest address). The serialized form of the transaction is deterministic, meaning the same logical transaction always results in the same serialized byte sequence."),(0,a.kt)("p",null,"The table describing the entirety of a ",(0,a.kt)("i",null,"Transaction"),"'s serialized form is presented in the ",(0,a.kt)("a",{parentName:"p",href:"./2.3StandardPayloadsLayout#2.3.5.2-transaction-payload"},"Section 2.3 Standard Payloads Layout"),"."),(0,a.kt)("p",null,"See Data Types Notation ","\nfor understanding the table schema."),(0,a.kt)("h3",{id:"5121-transaction-essence"},"5.1.2.1 Transaction Essence"),(0,a.kt)("p",null,"The ",(0,a.kt)("i",null,"Transaction Essence")," of a ",(0,a.kt)("i",null,"Transaction")," carries a version, timestamp, nodeID of the ",(0,a.kt)("a",{parentName:"p",href:"./5.3Mana"},"aMana")," pledge, nodeID of the ",(0,a.kt)("a",{parentName:"p",href:"./5.3Mana"},"cMana")," pledge, inputs, outputs and an optional data payload."),(0,a.kt)("h3",{id:"5122-inputs"},"5.1.2.2 Inputs"),(0,a.kt)("p",null,"The ",(0,a.kt)("i",null,"Inputs")," part holds the inputs to consume, that in turn fund the outputs of the ",(0,a.kt)("i",null,"Transaction Essence"),". There is only one supported type of input as of now, the ",(0,a.kt)("i",null,"UTXO Input"),". In the future, more types of inputs may be specified as part of protocol upgrades."),(0,a.kt)("p",null,"Each defined input must be accompanied by a corresponding ",(0,a.kt)("i",null,"Unlock Block")," at the same index in the ",(0,a.kt)("i",null,"Unlock Blocks")," part of the ",(0,a.kt)("i",null,"Transaction"),".\nIf multiple inputs may be unlocked through the same ",(0,a.kt)("i",null,"Unlock Block"),", the given ",(0,a.kt)("i",null,"Unlock Block")," only needs to be specified at the index of the first input that gets unlocked by it.\nSubsequent inputs that are unlocked through the same data must have a ",(0,a.kt)("i",null,"Reference Unlock Block")," pointing to the previous ",(0,a.kt)("i",null,"Unlock Block"),".\nThis ensures that no duplicate data needs to occur in the same transaction."),(0,a.kt)("h4",{id:"utxo-input"},"UTXO Input"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Name")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Type")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Input Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 0")," to denote an ",(0,a.kt)("i",null,"UTXO Input"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Transaction ID"),(0,a.kt)("td",null,"ByteArray[32]"),(0,a.kt)("td",null,"The BLAKE2b-256 hash of the transaction from which the UTXO comes from.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Transaction Output Index"),(0,a.kt)("td",null,"uint16"),(0,a.kt)("td",null,"The index of the output on the referenced transaction to consume."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table 5.1.2:")," UTXO Input"),(0,a.kt)("p",null,"A ",(0,a.kt)("i",null,"UTXO Input")," is an input which references an output of a previous transaction by using the given transaction's BLAKE2b-256 hash + the index of the output on that transaction.\nA ",(0,a.kt)("i",null,"UTXO Input")," must be accompanied by an ",(0,a.kt)("i",null,"Unlock Block")," for the corresponding type of output the ",(0,a.kt)("i",null,"UTXO Input")," is referencing."),(0,a.kt)("p",null,"Example: If the input references outputs to an Ed25519 address, then the corresponding unlock block must be of type ",(0,a.kt)("i",null,"Signature Unlock Block")," holding an Ed25519 signature."),(0,a.kt)("h3",{id:"5123-outputs"},"5.1.2.3 Outputs"),(0,a.kt)("p",null,"The ",(0,a.kt)("i",null,"Outputs")," part holds the outputs to create with this ",(0,a.kt)("i",null,"Transaction Payload"),". There are different types of output: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("i",null,"SigLockedSingleOutput")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("i",null,"SigLockedAssetOutput"))),(0,a.kt)("h4",{id:"siglockedsingleoutput"},"SigLockedSingleOutput"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Name")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Type")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Output Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 0")," to denote a ",(0,a.kt)("i",null,"SigLockedSingleOutput"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",{valign:"top"},"Address ",(0,a.kt)("code",null,"oneOf")),(0,a.kt)("td",{colSpan:"2"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"Ed25519 Address"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Name")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Type")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Address Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 0")," to denote an ",(0,a.kt)("i",null,"Ed25519 Address"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Address"),(0,a.kt)("td",null,"ByteArray[32]"),(0,a.kt)("td",null,"The raw bytes of the Ed25519 address which is a BLAKE2b-256 hash of the Ed25519 public key.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"BLS Address"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Name")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Type")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Address Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 1")," to denote a ",(0,a.kt)("i",null,"BLS Address"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Address"),(0,a.kt)("td",null,"ByteArray[49]"),(0,a.kt)("td",null,"The raw bytes of the BLS address which is a BLAKE2b-256 hash of the BLS public key.")))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Balance"),(0,a.kt)("td",null,"uint64"),(0,a.kt)("td",null,"The balance of IOTA tokens to deposit with this ",(0,a.kt)("i",null,"SigLockedSingleOutput")," output.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table 5.1.3:")," The SigLockedSingleOutput"),(0,a.kt)("p",null,"The ",(0,a.kt)("i",null,"SigLockedSingleOutput")," defines an output holding an IOTA balance linked to a single address; it is unlocked via a valid signature proving ownership over the given address. Such output may hold an address of different types."),(0,a.kt)("h4",{id:"siglockedassetoutput"},"SigLockedAssetOutput"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Name")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Type")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Output Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 1")," to denote a ",(0,a.kt)("i",null,"SigLockedAssetOutput"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",{valign:"top"},"Address ",(0,a.kt)("code",null,"oneOf")),(0,a.kt)("td",{colSpan:"2"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"Ed25519 Address"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Name")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Type")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Address Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 0")," to denote an ",(0,a.kt)("i",null,"Ed25519 Address"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Address"),(0,a.kt)("td",null,"ByteArray[32]"),(0,a.kt)("td",null,"The raw bytes of the Ed25519 address which is a BLAKE2b-256 hash of the Ed25519 public key.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"BLS Address"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Name")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Type")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Address Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 1")," to denote a ",(0,a.kt)("i",null,"BLS Address"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Address"),(0,a.kt)("td",null,"ByteArray[49]"),(0,a.kt)("td",null,"The raw bytes of the BLS address which is a BLAKE2b-256 hash of the BLS public key.")))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Balances count"),(0,a.kt)("td",null,"uint32"),(0,a.kt)("td",null,"The number of individual balances.")),(0,a.kt)("tr",null,(0,a.kt)("td",{valign:"top"},"AssetBalance ",(0,a.kt)("code",null,"anyOf")),(0,a.kt)("td",{colSpan:"2"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"Asset Balance"),(0,a.kt)("blockquote",null,"The balance of the tokenized asset."),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Name")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Type")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"AssetID"),(0,a.kt)("td",null,"ByteArray[32]"),(0,a.kt)("td",null,"The ID of the tokenized asset")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Balance"),(0,a.kt)("td",null,"uint64"),(0,a.kt)("td",null,"The balance of the tokenized asset.")))))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table 5.1.4:")," The SigLockedAssetOutput"),(0,a.kt)("p",null,"The ",(0,a.kt)("i",null,"SigLockedAssetOutput")," defines an output holding a balance for each specified tokenized asset linked to a single address; it is unlocked via a valid signature proving ownership over the given address. Such output may hold an address of different types.\nThe ID of any tokenized asset is defined by the BLAKE2b-256 hash of the OutputID that created the asset."),(0,a.kt)("h3",{id:"5124-payload"},"5.1.2.4 Payload"),(0,a.kt)("p",null,"The payload part of a ",(0,a.kt)("i",null,"Transaction Essence")," may hold an optional payload. This payload does not affect the validity of the ",(0,a.kt)("i",null,"Transaction Essence"),". If the transaction is not valid, then the payload ",(0,a.kt)("em",{parentName:"p"},"shall")," be discarded."),(0,a.kt)("h3",{id:"5125-unlock-blocks"},"5.1.2.5 Unlock Blocks"),(0,a.kt)("p",null,"The ",(0,a.kt)("i",null,"Unlock Blocks")," part holds the unlock blocks unlocking inputs within a ",(0,a.kt)("i",null,"Transaction Essence"),"."),(0,a.kt)("p",null,"There are different types of ",(0,a.kt)("i",null,"Unlock Blocks"),":"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Name")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Unlock Type")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Signature Unlock Block"),(0,a.kt)("td",null,"0"),(0,a.kt)("td",null,"An unlock block holding one or more signatures unlocking one or more inputs.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Reference Unlock Block"),(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"An unlock block which must reference a previous unlock block which unlocks also the input at the same index as this ",(0,a.kt)("i",null,"Reference Unlock Block"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table 5.1.5:")," Types of Unlock Blocks"),(0,a.kt)("h4",{id:"signature-unlock-block"},"Signature Unlock Block"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Unlock Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 0")," to denote a ",(0,a.kt)("i",null,"Signature Unlock Block"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",{valign:"top"},"Signature ",(0,a.kt)("code",null,"oneOf")),(0,a.kt)("td",{colSpan:"2"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"BLS Signature"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Signature Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 0")," to denote a ",(0,a.kt)("i",null,"BLS Signature"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Signature"),(0,a.kt)("td",null,"ByteArray"),(0,a.kt)("td",null,"The signature signing the serialized ",(0,a.kt)("i",null,"Transaction Essence"),".")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Ed25519 Signature"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Signature Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 1")," to denote an ",(0,a.kt)("i",null,"Ed25519 Signature"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Public key"),(0,a.kt)("td",null,"ByteArray[32]"),(0,a.kt)("td",null,"The public key of the Ed25519 keypair which is used to verify the signature.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Signature"),(0,a.kt)("td",null,"ByteArray[64]"),(0,a.kt)("td",null,"The signature signing the serialized ",(0,a.kt)("i",null,"Transaction Essence"),".")))))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table 5.1.6:")," The Signature Unlock Block"),(0,a.kt)("p",null,"A ",(0,a.kt)("i",null,"Signature Unlock Block")," defines an ",(0,a.kt)("i",null,"Unlock Block")," which holds one or more signatures unlocking one or more inputs.\nSuch a block signs the entire ",(0,a.kt)("i",null,"Transaction Essence")," part of a ",(0,a.kt)("i",null,"Transaction Payload")," including the optional payload."),(0,a.kt)("h4",{id:"reference-unlock-block"},"Reference Unlock block"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Unlock Type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Set to ",(0,a.kt)("strong",null,"value 1")," to denote a ",(0,a.kt)("i",null,"Reference Unlock Block"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Reference"),(0,a.kt)("td",null,"uint16"),(0,a.kt)("td",null,"Represents the index of a previous unlock block.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table 5.1.7:")," The Reference Unlock Block"),(0,a.kt)("p",null,"A ",(0,a.kt)("i",null,"Reference Unlock Block")," defines an ",(0,a.kt)("i",null,"Unlock Block")," that references a previous ",(0,a.kt)("i",null,"Unlock Block")," (that must not be another ",(0,a.kt)("i",null,"Reference Unlock Block"),"). It must be used if multiple inputs can be unlocked through the same origin ",(0,a.kt)("i",null,"Unlock Block"),"."),(0,a.kt)("p",null,"Example:\nConsider a ",(0,a.kt)("i",null,"Transaction Essence")," containing ",(0,a.kt)("i",null,"UTXO Inputs")," A, B and C, where A and C are both spending the UTXOs originating from the same Ed25519 address. The ",(0,a.kt)("i",null,"Unlock Block")," part must thereby have the following structure:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Index"),(0,a.kt)("th",{parentName:"tr",align:null},"Must Contain"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("i",null,"Signature Unlock Block")," holding the corresponding Ed25519 signature to unlock A and C.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("i",null,"Signature Unlock Block")," that unlocks B.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("i",null,"Reference Unlock Block")," that references index 0, since C also gets unlocked by the same signature as A.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table 5.1.8:")," Example of Unlock Block"),(0,a.kt)("h2",{id:"513-validation"},"5.1.3 Validation"),(0,a.kt)("p",null,"A ",(0,a.kt)("i",null,"Transaction")," payload has different validation stages since some validation steps can only be executed at the point when certain information has (or has not) been received. We, therefore, distinguish between syntactical and semantic validation."),(0,a.kt)("h3",{id:"5131-transaction-syntactical-validation"},"5.1.3.1 Transaction Syntactical Validation"),(0,a.kt)("p",null,"This validation can commence as soon as the transaction data has been received in its entirety. It validates the structure but not the signatures of the transaction. A transaction must be discarded right away if it does not pass this stage."),(0,a.kt)("p",null,"The following criteria define whether the transaction passes the syntactical validation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transaction Essence:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Transaction Essence Version")," value must be 0."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"timestamp")," of the ",(0,a.kt)("i",null,"Transaction Essence")," must be older than (or equal to) the ",(0,a.kt)("inlineCode",{parentName:"li"},"timestamp")," of the message\ncontaining the transaction by at most 10 minutes."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("i",null,"Transaction Essence")," must contain at least one input and output."))),(0,a.kt)("li",{parentName:"ul"},"Inputs:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Inputs Count")," must be 0 < x < 128."),(0,a.kt)("li",{parentName:"ul"},"At least one input must be specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Input Type")," value must be 0, denoting an ",(0,a.kt)("inlineCode",{parentName:"li"},"UTXO Input"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UTXO Input"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Transaction Output Index")," must be 0 \u2264 x < 128."),(0,a.kt)("li",{parentName:"ul"},"Every combination of ",(0,a.kt)("inlineCode",{parentName:"li"},"Transaction ID")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Transaction Output Index")," must be unique in the inputs set."))),(0,a.kt)("li",{parentName:"ul"},"Inputs must be in lexicographical order of their serialized form.",(0,a.kt)("sup",null,"1")))),(0,a.kt)("li",{parentName:"ul"},"Outputs:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Outputs Count")," must be 0 < x < 128."),(0,a.kt)("li",{parentName:"ul"},"At least one output must be specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Output Type")," must be 0, denoting a ",(0,a.kt)("inlineCode",{parentName:"li"},"SigLockedSingleOutput"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SigLockedSingleOutput"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Address Type")," must either be 0 or 1, denoting an ",(0,a.kt)("inlineCode",{parentName:"li"},"Ed25519")," - or ",(0,a.kt)("inlineCode",{parentName:"li"},"BLS")," address ."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Address")," must be unique in the set of ",(0,a.kt)("inlineCode",{parentName:"li"},"SigLockedSingleOutputs"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Amount")," must be > 0."))),(0,a.kt)("li",{parentName:"ul"},"Outputs must be in lexicographical order by their serialized form.",(0,a.kt)("sup",null,"1")),(0,a.kt)("li",{parentName:"ul"},"Accumulated output balance must not exceed the total supply of tokens ",(0,a.kt)("inlineCode",{parentName:"li"},"2,779,530,283,277,761"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Payload Length")," must be 0 (to indicate that there's no payload) or be valid for the specified payload type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Payload Type")," must be one of the supported payload types if ",(0,a.kt)("inlineCode",{parentName:"li"},"Payload Length")," is not 0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Unlock Blocks Count")," must match the number of inputs. Must be 0 < x < 128."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Unlock Block Type")," must either be 0 or 1, denoting a ",(0,a.kt)("inlineCode",{parentName:"li"},"Signature Unlock Block")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Reference Unlock block"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Signature Unlock Blocks")," must define either an ",(0,a.kt)("inlineCode",{parentName:"li"},"Ed25519"),"- or ",(0,a.kt)("inlineCode",{parentName:"li"},"BLS Signature"),"."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Signature Unlock Block")," unlocking multiple inputs must only appear once (be unique) and be positioned at the same index of the first input it unlocks. All other inputs unlocked by the same ",(0,a.kt)("inlineCode",{parentName:"li"},"Signature Unlock Block")," must have a companion ",(0,a.kt)("inlineCode",{parentName:"li"},"Reference Unlock Block")," at the same index as the corresponding input that points to the origin ",(0,a.kt)("inlineCode",{parentName:"li"},"Signature Unlock Block"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Reference Unlock Blocks")," must specify a previous ",(0,a.kt)("inlineCode",{parentName:"li"},"Unlock Block")," that is not of type ",(0,a.kt)("inlineCode",{parentName:"li"},"Reference Unlock Block"),". The referenced index must therefore be smaller than the index of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Reference Unlock Block"),"."),(0,a.kt)("li",{parentName:"ul"},"Given the type and length information, the ",(0,a.kt)("i",null,"Transaction")," must consume the entire byte array the ",(0,a.kt)("inlineCode",{parentName:"li"},"Payload Length")," field in the ",(0,a.kt)("i",null,"Message")," defines.")),(0,a.kt)("sup",null,"1")," ensures that serialization of the transaction becomes deterministic, meaning that libraries always produce the same bytes given the logical transaction.",(0,a.kt)("h3",{id:"5132-transaction-semantic-validation"},"5.1.3.2 Transaction Semantic Validation"),(0,a.kt)("p",null,"The following criteria define whether the transaction passes the semantic validation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"All the UTXOs the transaction references are known (booked) and unspent."),(0,a.kt)("li",{parentName:"ol"},"The transaction is spending the entirety of the funds of the referenced UTXOs to the outputs."),(0,a.kt)("li",{parentName:"ol"},"The address type of the referenced UTXO must match the signature type contained in the corresponding ",(0,a.kt)("i",null,"Signature Unlock Block"),"."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("i",null,"Signature Unlock Blocks")," are valid, i.e. the signatures prove ownership over the addresses of the referenced UTXOs.")),(0,a.kt)("p",null,"If a transaction passes the semantic validation, its referenced UTXOs ",(0,a.kt)("em",{parentName:"p"},"shall")," be marked as spent and the corresponding new outputs ",(0,a.kt)("em",{parentName:"p"},"shall")," be booked/specified in the ledger. This process is described in ",(0,a.kt)("a",{parentName:"p",href:"./5.2LedgerState"},"Section 5.2 - Ledger state"),"."),(0,a.kt)("p",null,"Transactions that do not pass semantic validation ",(0,a.kt)("em",{parentName:"p"},"shall")," be discarded. Their UTXOs are not marked as spent and neither are their outputs booked into the ledger. Moreover, their messages ",(0,a.kt)("em",{parentName:"p"},"shall")," be considered invalid."))}d.isMDXComponent=!0}}]);