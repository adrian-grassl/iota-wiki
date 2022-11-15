"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[87608],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},26946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={keywords:["Ledger","UTXO","explanation"],description:"Alias Transfers in Stardust.",image:"/img/logo/preview.png"},s="Alias Transactions",o={unversionedId:"explanations/ledger/alias",id:"explanations/ledger/alias",title:"Alias Transactions",description:"Alias Transfers in Stardust.",source:"@site/shimmer/external/introduction-docs/docs/explanations/ledger/alias.md",sourceDirName:"explanations/ledger",slug:"/explanations/ledger/alias",permalink:"/shimmer/introduction/explanations/ledger/alias",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/shimmer/external/introduction-docs/docs/explanations/ledger/alias.md",tags:[],version:"current",frontMatter:{keywords:["Ledger","UTXO","explanation"],description:"Alias Transfers in Stardust.",image:"/img/logo/preview.png"},sidebar:"mySidebar",previous:{title:"Simple Transactions",permalink:"/shimmer/introduction/explanations/ledger/simple_transfers"},next:{title:"Native Tokens and Foundries",permalink:"/shimmer/introduction/explanations/ledger/foundry"}},l={},u=[{value:"Creating an Alias",id:"creating-an-alias",level:2},{value:"State Transition",id:"state-transition",level:2},{value:"Governance Transition",id:"governance-transition",level:2},{value:"Destroying an Alias",id:"destroying-an-alias",level:2},{value:"Unlocking funds owned by an Alias",id:"unlocking-funds-owned-by-an-alias",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alias-transactions"},"Alias Transactions"),(0,i.kt)("p",null,"Stardust introduces a new output type called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#alias-output"},(0,i.kt)("em",{parentName:"a"},"Alias Output"))," that is essentially a UTXO state machine. Simply put, this\nrepresents a new type of ledger account suitable for committee ran smart contract chains. The main features are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"storage of state commitments of the second-layer smart contract chains,"),(0,i.kt)("li",{parentName:"ul"},"globally unique address assigned upon creation,"),(0,i.kt)("li",{parentName:"ul"},"different account privileges for two controllers that can be rotated, and"),(0,i.kt)("li",{parentName:"ul"},"ability of issuing custom tokens that are linked to the unique address.")),(0,i.kt)("p",null,"Alias outputs can be created by anyone in the protocol via transactions. A newly created alias receives a unique\nidentifier, called ",(0,i.kt)("em",{parentName:"p"},"Alias ID"),", generated by the protocol based on the content of the creating transaction. Once an alias\noutput is created, only its controllers are able to unlock it in subsequent transactions."),(0,i.kt)("p",null,"Depending on which controller unlocks it, different commands or state mutations are possible. The ",(0,i.kt)("em",{parentName:"p"},"State Controller")," is\nallowed to change the state data stored in the output and also to manipulate token balances of the alias account. One\nrestriction of the ",(0,i.kt)("em",{parentName:"p"},"State Controller")," is that whenever it unlocks the alias output in a transactions, it must transition\nthe alias into its new state, meaning the alias output must appear in the transaction as a created output."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Governor")," on the other hand might choose to destroy the alias by not creating its subsequent state as an output in\nthe transaction. It also has the power to change the controller entities."),(0,i.kt)("p",null,"Funds can be sent directly to the unique alias address (derived from ",(0,i.kt)("em",{parentName:"p"},"Alias ID"),") of the alias by anyone. Since this\naddress is generated by the protocol, it doesn't have a private key that could be used for signing transactions to prove\nownership. So how does one prove that they own the funds locked under an alias address?"),(0,i.kt)("p",null,"The trick is to require the unlocking of the alias output that defines the address in the same transaction that tries\nto unlock funds sitting on the alias address. ",(0,i.kt)("em",{parentName:"p"},"If you can prove you own the alias account by successfully unlocking its\nalias output in a transaction, you can access the funds locked under its address.")),(0,i.kt)("h2",{id:"creating-an-alias"},"Creating an Alias"),(0,i.kt)("p",null,"Just like a regular ",(0,i.kt)("em",{parentName:"p"},"Basic Output"),", an ",(0,i.kt)("em",{parentName:"p"},"Alias Output")," also has:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Amount")," to hold base token"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Unlock Conditions")," that define how the output can be unlocked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Features")," that don't modify the unlocking.")),(0,i.kt)("p",null,"On top of these, it also defines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"State Index")," that has to be incremented in every transaction initiated by the ",(0,i.kt)("em",{parentName:"li"},"State Controller"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"State Metadata")," that may hold binary data,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Foundry Counter")," that defines how many foundries the alias has already created,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Immutable Features")," that are regular ",(0,i.kt)("em",{parentName:"li"},"Features")," defined upon creation which can never be modified afterwards.")),(0,i.kt)("p",null,"Alias outputs only support two type of unlock conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"State Controller Address Unlock Condition")," that defines the state controller,  and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Governor Address Unlock Condition")," that defines the governor of the alias.")),(0,i.kt)("p",null,"Transaction A shows the process of creating a new alias output and hence an alias account. Notice the creation\nconstraints enforced by the protocol:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Alias ID")," must be zeroed out. This signals to the protocol that the alias account is new and when the transaction confirms,\na unique ",(0,i.kt)("em",{parentName:"li"},"Alias ID")," must be generated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"State Index")," must be zero as this is the first possible state the alias represents."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Foundry Counter")," must be zero as the alias doesn't control any foundries yet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Issuer")," and ",(0,i.kt)("em",{parentName:"li"},"Sender")," addresses must be unlocked in the transaction if present.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction A - Creating an Alias",src:a(39147).Z,width:"842",height:"1072"})),(0,i.kt)("p",null,"When ",(0,i.kt)("em",{parentName:"p"},"Alias Output #1")," from Transaction A is consumed in a subsequent transaction, the ",(0,i.kt)("em",{parentName:"p"},"Alias ID")," field in the\ntransitioned alias must be set to the protocol generated unique identifier, which is the Blake2b-256 hash of the\n",(0,i.kt)("em",{parentName:"p"},"Output ID")," of ",(0,i.kt)("em",{parentName:"p"},"Alias Output #1"),"."),(0,i.kt)("h2",{id:"state-transition"},"State Transition"),(0,i.kt)("p",null,"Transaction B represents a state transition of the alias. As the name suggests, a state transition must be initiated\nby the ",(0,i.kt)("em",{parentName:"p"},"State Controller"),", therefore it is the ",(0,i.kt)("em",{parentName:"p"},"stateControllerAddress")," that needs to sign the transaction. During a\nstate transition, the following constraints need to be met:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the alias can't be destroyed,"),(0,i.kt)("li",{parentName:"ul"},"token balances of the output may be changed, the ",(0,i.kt)("em",{parentName:"li"},"State Controller")," can transfer funds in- and out of the alias account,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"State Index")," must be incremented,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"State Metadata")," may be updated,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Foundry Counter")," must be incremented by the number of foundries created in the transaction,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Unlock Conditions")," must not be changed, therefore the state controller can't update ownership of the alias account,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Sender Feature")," may be updated,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Metadata Feature")," must not be updated.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction B - State transition of an alias",src:a(75025).Z,width:"843",height:"1222"})),(0,i.kt)("p",null,"Notice how the ",(0,i.kt)("em",{parentName:"p"},"Alias ID")," field has to be set in ",(0,i.kt)("em",{parentName:"p"},"Alias Output #2")," to the protocol generated value."),(0,i.kt)("h2",{id:"governance-transition"},"Governance Transition"),(0,i.kt)("p",null,"Transaction C depicts a governance transition of the alias. Such a transaction must be signed by the address in\n",(0,i.kt)("em",{parentName:"p"},"Governor Address Unlock Condition"),". The constraints for a valid governance transition are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the alias output might be destroyed by the governor (Transaction D),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"State Controller Address Unlock Condition")," may be changed,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Governor Address Unlock Condition")," may be changed,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Metadata Feature")," may be changed.")),(0,i.kt)("p",null,"No other fields are allowed to change in the next alias state, therefore a governance transition can't modify token\nbalances or create foundries."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction C - Governance transition of an alias",src:a(99717).Z,width:"842",height:"1152"})),(0,i.kt)("h2",{id:"destroying-an-alias"},"Destroying an Alias"),(0,i.kt)("p",null,"Transaction D shows a governance transition that destroys the alias. The storage deposit is refunded to a governor\ndefined address. Keep in mind that once the alias is destroyed, any funds locked in the ledger in other outputs to the\naddress of the alias (derived from ",(0,i.kt)("em",{parentName:"p"},"Alias ID"),") are essentially lost, as it is not possible to unlock them ever."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction D - Destroying an alias",src:a(84234).Z,width:"843",height:"1042"})),(0,i.kt)("h2",{id:"unlocking-funds-owned-by-an-alias"},"Unlocking funds owned by an Alias"),(0,i.kt)("p",null,"An alias account may own funds in the ledger two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"locked directly in its alias output,"),(0,i.kt)("li",{parentName:"ul"},"locked in other outputs to the address of the alias.")),(0,i.kt)("p",null,"The global alias address is derived from the unique ",(0,i.kt)("em",{parentName:"p"},"Alias ID"),". Technically, the alias address is the concatenation of\nthe ",(0,i.kt)("em",{parentName:"p"},"Alias Address Type")," and the ",(0,i.kt)("em",{parentName:"p"},"Alias ID"),". A practical example from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/add-smr-hrps/tips/TIP-0031/tip-0031.md"},"TIP-31"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Output ID")," (34-byte) that created the alias: ",(0,i.kt)("inlineCode",{parentName:"li"},"52fdfc072182654f163f5f0f9a621d729566c74d10037c4d7bbb0407d1e2c6490000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Alias ID"),", BLAKE2b-256 hash (32-byte): ",(0,i.kt)("inlineCode",{parentName:"li"},"fe80c2eb7c736da2f7c98ecf135ee9e34e4e076afe6e1dfebc9ec578b8f56d2f")),(0,i.kt)("li",{parentName:"ul"},"Serialized alias address (33-byte): ",(0,i.kt)("inlineCode",{parentName:"li"},"08fe80c2eb7c736da2f7c98ecf135ee9e34e4e076afe6e1dfebc9ec578b8f56d2f")),(0,i.kt)("li",{parentName:"ul"},"Bech32 string:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IOTA (64-char): ",(0,i.kt)("inlineCode",{parentName:"li"},"iota1prlgpsht03ekmghhex8v7y67a835uns8dtlxu807hj0v279c74kj76j6rev")),(0,i.kt)("li",{parentName:"ul"},"IOTA Testnet (64-char): ",(0,i.kt)("inlineCode",{parentName:"li"},"atoi1prlgpsht03ekmghhex8v7y67a835uns8dtlxu807hj0v279c74kj7autzrp")),(0,i.kt)("li",{parentName:"ul"},"Shimmer (63-char): ",(0,i.kt)("inlineCode",{parentName:"li"},"smr1prlgpsht03ekmghhex8v7y67a835uns8dtlxu807hj0v279c74kj7dzrr0a")),(0,i.kt)("li",{parentName:"ul"},"Shimmer Testnet (63-char): ",(0,i.kt)("inlineCode",{parentName:"li"},"rms1prlgpsht03ekmghhex8v7y67a835uns8dtlxu807hj0v279c74kj7e9ge5y"))))),(0,i.kt)("p",null,"Anyone can send funds in the ledger to the address of the alias, while only the current state controller is able to\nunlock such funds by including the alias itself in the very same transaction. An alias address doesn't have\na private key for signing unlocks, therefore one has to prove that they can unlock the alias output that created the\nalias address."),(0,i.kt)("p",null,"Transaction E shows the process of alias unlocking. ",(0,i.kt)("em",{parentName:"p"},"Basic Output #3")," holds funds that are locked to the address of the\nalias. The state controller initiates a state transition and included the basic output in the same transaction.\nThe ",(0,i.kt)("em",{parentName:"p"},"Unlock")," for ",(0,i.kt)("em",{parentName:"p"},"Basic Output #3")," is an ",(0,i.kt)("em",{parentName:"p"},"Alias Unlock")," that references the ",(0,i.kt)("em",{parentName:"p"},"Unlock")," of the alias that defines ",(0,i.kt)("em",{parentName:"p"},"aliasAddress"),"."),(0,i.kt)("p",null,"Important to note, that an ",(0,i.kt)("em",{parentName:"p"},"Alias Unlock")," may only reference an unlock at a lower index within the transaction to\nprevent circular unlocking without any signature. Due to this reason, it is possible to intentionally deadlock aliases\nby locking them to each other's alias address. Clients should implement safety mechanisms to prevent accidental user errors."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction E - Consuming Alias owned funds",src:a(43615).Z,width:"842",height:"1372"})))}c.isMDXComponent=!0},39147:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx_A-70f645d59509c0f10e01becb88883b7c.svg"},75025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx_B-25081dcd15e0b4e13def2298585fe81d.svg"},99717:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx_C-51eff0270e4de5c41380d81a9fbc9994.svg"},84234:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx_D-0cd8c000244944bc071732215d9395ab.svg"},43615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx_E-789f8fa48992ab21aa9eeaadbc48e49a.svg"}}]);