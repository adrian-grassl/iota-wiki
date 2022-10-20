"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75109],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>p});var n=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var c=n.createContext({}),h=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},l=function(t){var e=h(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,i=t.originalType,c=t.parentName,l=r(t,["components","mdxType","originalType","parentName"]),u=h(a),p=s,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(m,o(o({ref:e},l),{},{components:a})):n.createElement(m,o({ref:e},l))}));function p(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=t,r.mdxType="string"==typeof t?t:s,o[1]=r;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21786:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=a(87462),s=(a(67294),a(3905));const i={description:"The state of the chain consists of balances of native IOTA digital assets and a collection of key/value pairs which represents use case-specific data stored in the chain by its smart contracts outside the UTXO ledger.",image:"/img/chain0.png",keywords:["state","transitions","balances","digital assets","UTXO","transitions","explanation"]},o="State, Transitions, and State Anchoring",r={unversionedId:"guide/core_concepts/states",id:"guide/core_concepts/states",title:"State, Transitions, and State Anchoring",description:"The state of the chain consists of balances of native IOTA digital assets and a collection of key/value pairs which represents use case-specific data stored in the chain by its smart contracts outside the UTXO ledger.",source:"@site/next/external/wasp/documentation/docs/guide/core_concepts/states.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/states",permalink:"/next/smart-contracts/guide/core_concepts/states",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/core_concepts/states.md",tags:[],version:"current",frontMatter:{description:"The state of the chain consists of balances of native IOTA digital assets and a collection of key/value pairs which represents use case-specific data stored in the chain by its smart contracts outside the UTXO ledger.",image:"/img/chain0.png",keywords:["state","transitions","balances","digital assets","UTXO","transitions","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Consensus",permalink:"/next/smart-contracts/guide/core_concepts/consensus"},next:{title:"Anatomy of a Smart Contract",permalink:"/next/smart-contracts/guide/core_concepts/smart-contract-anatomy"}},c={},h=[{value:"State of the Chain",id:"state-of-the-chain",level:2},{value:"Digital Assets on the Chain",id:"digital-assets-on-the-chain",level:2},{value:"The Data State",id:"the-data-state",level:2},{value:"Anchoring the State",id:"anchoring-the-state",level:2},{value:"State Transitions",id:"state-transitions",level:2}],l={toc:h};function d(t){let{components:e,...i}=t;return(0,s.kt)("wrapper",(0,n.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"state-transitions-and-state-anchoring"},"State, Transitions, and State Anchoring"),(0,s.kt)("h2",{id:"state-of-the-chain"},"State of the Chain"),(0,s.kt)("p",null,"The state of the chain consists of:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A ledger of accounts owning IOTA digital assets (base tokens, native tokens, and NFTs). The chain acts as a custodian\nfor those funds on behalf of each account's owner."),(0,s.kt)("li",{parentName:"ul"},"A collection of arbitrary key/value pairs (the ",(0,s.kt)("em",{parentName:"li"},"data state"),") that contains use case-specific data stored by the smart\ncontracts in the chain.")),(0,s.kt)("p",null,"The chain's state is an append-only (immutable) data structure maintained by the distributed consensus of its\nvalidators."),(0,s.kt)("h2",{id:"digital-assets-on-the-chain"},"Digital Assets on the Chain"),(0,s.kt)("p",null,"Each native L1 account in the IOTA UTXO ledger is represented by an address and controlled by an entity holding the\ncorresponding private/public key pair.\nIn the UTXO ledger, an account is a collection of UTXOs belonging to the address."),(0,s.kt)("p",null,"Each ISC L2 chain has a L1 account, called the ",(0,s.kt)("em",{parentName:"p"},"chain account"),", holding all tokens entrusted to the chain in a single\nUTXO, the ",(0,s.kt)("em",{parentName:"p"},"state output"),".\nIt is similar to how a bank holds all deposits in its vault. This way, the chain (the entity controlling the state\noutput) becomes a custodian for the assets owned by its clients, similar to how the bank\u2019s client owns the money\ndeposited in the bank."),(0,s.kt)("p",null,"The consolidated assets held in the chain are the ",(0,s.kt)("em",{parentName:"p"},"total assets on-chain"),", which are contained in the state output of\nthe chain."),(0,s.kt)("p",null,"The chain account is controlled by a ",(0,s.kt)("em",{parentName:"p"},"chain address"),", also known as ",(0,s.kt)("em",{parentName:"p"},"chain ID"),".\nIt is a special kind of L1 address, an ",(0,s.kt)("em",{parentName:"p"},"alias address"),", which abstracts the controlling entity (the state controller\naddress) from the identity of the chain: the controlling entity of the chain may change, while the chain ID stays the\nsame."),(0,s.kt)("h2",{id:"the-data-state"},"The Data State"),(0,s.kt)("p",null,"The data state of the chain consists of a collection of key/value pairs.\nEach key and each value are arbitrary byte arrays."),(0,s.kt)("p",null,"In its persistent form, the data state is stored in a key/value database outside the UTXO ledger and maintained by the\nvalidator nodes of the chain.\nThe state stored in the database is called the ",(0,s.kt)("em",{parentName:"p"},"solid state"),"."),(0,s.kt)("p",null,"While a smart contract request is being executed, the ",(0,s.kt)("em",{parentName:"p"},"virtual state")," is an in-memory collection of key/value pairs that\ncan become solid upon being committed to the database.\nAn essential property of the virtual state is the possibility of having several virtual states in parallel as\ncandidates, with a possibility for one of them to be solidified."),(0,s.kt)("p",null,"The data state has a state hash, a timestamp, and a state index.\nThe state hash is usually a Merkle root, but it can be any hashing function of all data in the data state."),(0,s.kt)("p",null,"The data state hash and on-chain assets are contained in a single atomic unit on the L1 ledger: the state UTXO.\nEach state mutation (state transition) of the chain is an atomic event that changes the on-chain assets and the data\nstate, consuming the previous state UTXO and producing a new one."),(0,s.kt)("h2",{id:"anchoring-the-state"},"Anchoring the State"),(0,s.kt)("p",null,"The data state is stored outside the ledger, on the distributed database maintained by validator nodes.\n",(0,s.kt)("em",{parentName:"p"},"Anchoring the state")," means placing the hash of the data state into the state UTXO and adding it to the L1 UTXO ledger.\nThe UTXO ledger guarantees that there is ",(0,s.kt)("em",{parentName:"p"},"exactly one")," such output for each chain on the ledger at every moment.\nWe call this output the ",(0,s.kt)("em",{parentName:"p"},"state output")," (or state anchor) and the containing transaction the ",(0,s.kt)("em",{parentName:"p"},"state transaction")," (or\nanchor transaction) of the chain.\nThe state output is controlled (i.e., can be unlocked/consumed) by the entity running the chain."),(0,s.kt)("p",null,"With the anchoring mechanism, the UTXO ledger provides the following guarantees to the IOTA Smart Contracts chain:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"There is a global consensus on the state of the chain"),(0,s.kt)("li",{parentName:"ul"},"The state is immutable and tamper-proof"),(0,s.kt)("li",{parentName:"ul"},"The state is consistent (see below)")),(0,s.kt)("p",null,"The state output contains:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The identity of the chain (its L1 alias address)"),(0,s.kt)("li",{parentName:"ul"},"The hash of the data state"),(0,s.kt)("li",{parentName:"ul"},"The state index, which is incremented with each new state output")),(0,s.kt)("h2",{id:"state-transitions"},"State Transitions"),(0,s.kt)("p",null,"The data state is updated by mutations of its key/value pairs.\nEach mutation either sets a value for a key or deletes a key (and the associated value).\nAny update to the data state can be reduced to a partially ordered sequence of mutations."),(0,s.kt)("p",null,"A ",(0,s.kt)("em",{parentName:"p"},"block")," is a collection of mutations to the data state that is applied in a state transition:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"next data state = apply(current data state, block)\n")),(0,s.kt)("p",null,"The state transition in the chain occurs atomically in a L1 transaction that consumes the previous state UTXO and\nproduces the next one. The transaction includes the movement of the chain's assets and the update of the state hash,"),(0,s.kt)("p",null,"At any moment in time, the data state of the chain is a result of applying the historical sequence of blocks, starting\nfrom the empty data state."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"State transitions",src:a(48412).Z,width:"862",height:"404"})),(0,s.kt)("p",null,"On the L1 UTXO ledger, the state's history is represented as a sequence (chain) of UTXOs, each holding the chain\u2019s\nassets in a particular state and the anchoring hash of the data state.\nNote that not all the state's transition history may be available: due to practical reasons, older transactions may be\npruned in a snapshot process.\nThe only thing guaranteed is that the tip of the chain of UTXOs is always available (which includes the latest data\nstate hash)."),(0,s.kt)("p",null,"The ISC virtual machine (VM) computes the blocks and state outputs that anchor the state, which ensures that the state\ntransitions are calculated deterministically and consistently."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Chain",src:a(44461).Z,width:"862",height:"1026"})))}d.isMDXComponent=!0},48412:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/chain0-e50bd2d788a80b19620bc79b7ce5d1eb.png"},44461:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/chain1-c34062ece66a9cd12ba9c67efc0575d4.png"}}]);