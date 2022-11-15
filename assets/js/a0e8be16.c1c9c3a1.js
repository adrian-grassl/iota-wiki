"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[68298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||s;return n?a.createElement(g,i(i({ref:t},h),{},{components:n})):a.createElement(g,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const s={description:"The IOTA network is a distributed type of network called Tangle. The network is distributed among plenty of servers called nodes which are the backbone of the IOTA network.",image:"/img/logo/bee_logo.png",keywords:["nodes","messages","Tangle","database","IOTA Network","explanation"]},i="Nodes 101",r={unversionedId:"explanations/nodes_101",id:"explanations/nodes_101",title:"Nodes 101",description:"The IOTA network is a distributed type of network called Tangle. The network is distributed among plenty of servers called nodes which are the backbone of the IOTA network.",source:"@site/iota/external/bee/production/documentation/docs/explanations/nodes_101.md",sourceDirName:"explanations",slug:"/explanations/nodes_101",permalink:"/bee/explanations/nodes_101",draft:!1,editUrl:"https://github.com/iotaledger/bee/edit/production/documentation/iota/external/bee/production/documentation/docs/explanations/nodes_101.md",tags:[],version:"current",frontMatter:{description:"The IOTA network is a distributed type of network called Tangle. The network is distributed among plenty of servers called nodes which are the backbone of the IOTA network.",image:"/img/logo/bee_logo.png",keywords:["nodes","messages","Tangle","database","IOTA Network","explanation"]},sidebar:"mySidebar",previous:{title:"Using Docker",permalink:"/bee/how_tos/docker"},next:{title:"Security 101",permalink:"/bee/explanations/security_101"}},l={},d=[{value:"Attaching New Messages to the Tangle",id:"attaching-new-messages-to-the-tangle",level:2},{value:"Synchronizing With the Rest of the Network",id:"synchronizing-with-the-rest-of-the-network",level:2},{value:"Deciding Which Messages Are Confirmed",id:"deciding-which-messages-are-confirmed",level:2},{value:"Keeping a Record of the Balances on Addresses Via <code>UTXO</code>",id:"keeping-a-record-of-the-balances-on-addresses-via-utxo",level:2},{value:"Exposing APIs for Clients",id:"exposing-apis-for-clients",level:2},{value:"HTTP Rest API",id:"http-rest-api",level:3},{value:"Event API",id:"event-api",level:3}],h={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodes-101"},"Nodes 101"),(0,o.kt)("p",null,"The IOTA network is a distributed type of network called the Tangle. The network is distributed among multiple servers\ncalled nodes, and nodes are the backbone of an IOTA network. In this article, you will learn what nodes do in an IOTA network."),(0,o.kt)("p",null,"Nodes are responsible for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Providing an API to interact with the Tangle/IOTA network."),(0,o.kt)("li",{parentName:"ul"},"Validating ",(0,o.kt)("a",{parentName:"li",href:"https://chrysalis.docs.iota.org/guides/dev_guide#messages-payloads-and-transactions"},"messages")," and ledger mutations for consistency."),(0,o.kt)("li",{parentName:"ul"},"Providing data for other nodes to synchronize to the latest state of the network.")),(0,o.kt)("h2",{id:"attaching-new-messages-to-the-tangle"},"Attaching New Messages to the Tangle"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"message")," is a data structure that is actually being broadcast in the IOTA network and represents a vertex in the\nTangle graph. When nodes receive a new message, they attach it to the Tangle by adding the message to their local database. For the definition of a message, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#messages-payloads-and-transactions"},"Messages, payloads, and transactions guide")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/welcome"},"Chrysalis documentation"),"."),(0,o.kt)("p",null,"As a result, at any point in time, all nodes may have different messages in their local databases. These messages make up a node's view of the Tangle."),(0,o.kt)("p",null,"To distribute the messages across the rest of the network, nodes synchronize their local databases with their neighbors."),(0,o.kt)("h2",{id:"synchronizing-with-the-rest-of-the-network"},"Synchronizing With the Rest of the Network"),(0,o.kt)("p",null,"Like any distributed system, nodes in an IOTA network synchronize their databases with other nodes called neighbors to form a single source of truth."),(0,o.kt)("p",null,"When one node, no matter where it is in the world, receives a message, it will try to ",(0,o.kt)("em",{parentName:"p"},"gossip")," it to all its neighbors. This way, all the nodes will eventually see all the messages and store them in their local databases."),(0,o.kt)("p",null,"To synchronize, nodes in IOTA networks use milestones. If the node has the history of messages that a milestone references, that milestone is solid. Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received."),(0,o.kt)("p",null,"When a node is synchronized, it then has enough information to decide which transactions it considers confirmed."),(0,o.kt)("h2",{id:"deciding-which-messages-are-confirmed"},"Deciding Which Messages Are Confirmed"),(0,o.kt)("p",null,"All messages remain in a pending state until the node is sure of their validity. "),(0,o.kt)("p",null,"Even when a message is valid, there are situations in which nodes may not be able to make a decision, like in the case of a double spend."),(0,o.kt)("p",null,"When nodes detect double spends, they must decide which message to consider confirmed and which one to ignore. Nodes do this by using consensus rules that are built into their node software using a network protocol."),(0,o.kt)("h2",{id:"keeping-a-record-of-the-balances-on-addresses-via-utxo"},"Keeping a Record of the Balances on Addresses Via ",(0,o.kt)("inlineCode",{parentName:"h2"},"UTXO")),(0,o.kt)("p",null,"All nodes keep a record of the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#unspent-transaction-output-utxo"},"Unspent Transaction Outputs (UTXO)")," so they can do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that a transaction is not transferring more IOTA tokens than are available on the address."),(0,o.kt)("li",{parentName:"ul"},"Respond to clients' requests for their balance."),(0,o.kt)("li",{parentName:"ul"},"Once the node has confirmed a transaction with the Tangle, update the node's record of balances. ")),(0,o.kt)("h2",{id:"exposing-apis-for-clients"},"Exposing APIs for Clients"),(0,o.kt)("p",null,"Nodes come with two set of low-level APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-rest-api"},"HTTP Rest API"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#event-api"},"Event API"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You do not need to communicate with nodes using the mentioned low-level API. You can leverage the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/libraries/overview"},"iota client libraries")," that provide a high-level abstraction to all features IOTA nodes provide, either on HTTP API level or Event API level.")),(0,o.kt)("h3",{id:"http-rest-api"},"HTTP Rest API"),(0,o.kt)("p",null,"The HTTP API allows clients to interact with the Tangle and ask nodes to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get tip messages."),(0,o.kt)("li",{parentName:"ul"},"Attach new messages to the Tangle."),(0,o.kt)("li",{parentName:"ul"},"Do Proof of Work (POW)."),(0,o.kt)("li",{parentName:"ul"},"Get messages from the Tangle.")),(0,o.kt)("h3",{id:"event-api"},"Event API"),(0,o.kt)("p",null,"The Event API allows clients to poll nodes for new messages and other events that happen on nodes. This type of API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses."))}c.isMDXComponent=!0}}]);