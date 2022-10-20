"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[80843],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>f});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(o),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return o?n.createElement(m,r(r({ref:t},h),{},{components:o})):n.createElement(m,r({ref:t},h))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},52798:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const i={description:"A high-level overview of the protocol, following the natural life cycle of a block from the Tip Selection module to being considered valid permanently by all nodes.",image:"/img/protocol_specification/Protocol_overview_received_block.png",keywords:["block","node","honest node","rate of issuance","congestion control","mana","access","rate setter","consensus"]},r="Protocol High-level Overview",s={unversionedId:"protocol_specification/protocol",id:"protocol_specification/protocol",title:"Protocol High-level Overview",description:"A high-level overview of the protocol, following the natural life cycle of a block from the Tip Selection module to being considered valid permanently by all nodes.",source:"@site/next/external/goshimmer/documentation/docs/protocol_specification/protocol.md",sourceDirName:"protocol_specification",slug:"/protocol_specification/protocol",permalink:"/next/goshimmer/protocol_specification/protocol",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/protocol_specification/protocol.md",tags:[],version:"current",frontMatter:{description:"A high-level overview of the protocol, following the natural life cycle of a block from the Tip Selection module to being considered valid permanently by all nodes.",image:"/img/protocol_specification/Protocol_overview_received_block.png",keywords:["block","node","honest node","rate of issuance","congestion control","mana","access","rate setter","consensus"]},sidebar:"docs",previous:{title:"Protocol specification",permalink:"/next/goshimmer/protocol_specification/overview"},next:{title:"Components of the Protocol",permalink:"/next/goshimmer/protocol_specification/components/overview"}},l={},c=[],h={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"protocol-high-level-overview"},"Protocol High-level Overview"),(0,a.kt)("p",null,"To orientate the reader, we provide a high-level overview of the protocol, following the natural life cycle of a block. The first module used","\u2014","while the block is still being created","\u2014",", is the ",(0,a.kt)("strong",{parentName:"p"},"Tip Selection")," module.\nHere, the node must choose a certain number (from two to eight) of other blocks to reference, meaning that the newly created block will be cryptographically attached to these referenced blocks.\nAn honest node must always choose tips uniformly at random from a tip pool, i.e., from a set of still unreferenced blocks that satisfy a certain set of conditions, as discussed on the ",(0,a.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/tangle"},"Tangle")," component.\nIn the diagram below, the issuance process being described now is represented in the context of the complete protocol. "),(0,a.kt)("p",null,"Each node in the network has limited bandwidth, CPU, and memory. In order to avoid any node from being overloaded, the right to write in everybody else's Tangle is regulated by the ",(0,a.kt)("strong",{parentName:"p"},"Rate and Congestion Control Modules"),".\nThe first one dictates the maximum rate of issuance of blocks by the introduction of a small amount of proof of work.\nHowever, if an attacker accelerates the block issuance","\u2014","effectively flooding the network","\u2014",", the difficulty of the proof of work for that node will increase exponentially. Eventually, the attacker will be incapable of issuing new blocks. "),(0,a.kt)("p",null,"Later, the Congestion control module fairly allocates the network resources accordingly to a quantity called ",(0,a.kt)("strong",{parentName:"p"},"Access Mana"),", which acts as a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sybil_attack"},"Sybil protection")," mechanism.\nWe can summarize Access Mana as a scarce resource, that makes an effective Sybil protection mechanism. Thus, each node has the right to issue blocks at a rate proportional to their Access Mana.\nThis fair rate is not constant (since the utilization of the network may fluctuate), and to correctly set its own individual rate of issuance of blocks, each node uses a mechanism called the ",(0,a.kt)("strong",{parentName:"p"},"Rate Setter"),", that makes the average issuance rate of the node converge to the fair rate guaranteed by Access Mana.\nNodes that do not use the rate Setter will be punished by either the Rate Control or the Congestion Control Module."),(0,a.kt)("p",null,"Between the Rate Setter and the actual gossip of the block, several steps will take place, but","\u2014","for the sake of clearness","\u2014","we ignore these steps for now and return to this subject later.\nThen, assuming that the block was properly created, it will be propagated to the rest of the network.\nSince we deal with a large number of nodes, the communication graph cannot be ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Complete_graph"},"complete"),".\nThus, the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_topology"},"network topology")," will be dictated by the ",(0,a.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/autopeering"},(0,a.kt)("strong",{parentName:"a"},"Neighbor Selection"))," (aka Autopeering) module. "),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:o(63484).Z},(0,a.kt)("img",{alt:"Protocol Overview Received Block",src:o(85340).Z,title:"Protocol Overview Received Block",width:"1143",height:"331"}))),(0,a.kt)("p",null,"We turn our attention now to another point of view: the one of the nodes receiving new blocks, represented in the diagram above.\nAfter receiving a block, the node will perform several ",(0,a.kt)("strong",{parentName:"p"},"syntactical verifications"),", that will act as a filter to the blocks. Additionally, the block has to be ",(0,a.kt)("strong",{parentName:"p"},"solidified"),", meaning that the node must know all the past cone of the block (i.e., the set of all blocks directly or indirectly referenced by the block in question).\nAfter this step, the node places all the blocks left into an inbox. At a fixed global rate (meaning that all nodes use the same rate), the node uses a ",(0,a.kt)("strong",{parentName:"p"},"scheduler")," to choose a block from the inbox.\nThis scheduler","\u2014","that, technically, is part of the aforementioned congestion control mechanism","\u2014","works as a gatekeeper, effectively regulating the use of the most scarce resources of the nodes.\nSince the scheduler works at a fixed rate, the network cannot be overwhelmed. The scheduler is designed to ensure","\u2014","even in the presence of attackers","\u2014","the following properties:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Consistency"),": all honest nodes will schedule the same blocks"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Fair access"),": the nodes' blocks will be scheduled at a fair rate according to their Access Mana"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Bounded latency"),": the processing time of all blocks will be bounded")),(0,a.kt)("p",null,"Only after passing the scheduler the blocks can be written into the local Tangle. To do that, the nodes perform most of the ",(0,a.kt)("strong",{parentName:"p"},"semantic validation"),", such as the search for irreconcilable conflicts in the block's past cone or (in the case of value transfers) unlock condition checks.\nAt this point (if the block passes these checks), the block will be ",(0,a.kt)("strong",{parentName:"p"},"booked")," into the ",(0,a.kt)("strong",{parentName:"p"},"local Tangle")," of the node and be gossiped to the rest of the network.\nAdditionally, in the case of a value transfer, the ",(0,a.kt)("strong",{parentName:"p"},"ledger state")," and two vectors called Access Mana Vector and ",(0,a.kt)("strong",{parentName:"p"},"Consensus Mana")," Vector are updated accordingly.\nThe Consensus Mana is another Sybil protection mechanism which","\u2014","since it is applied to different modules than Access Mana","\u2014","has the need of a different calculation. "),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:o(30151).Z},(0,a.kt)("img",{alt:"Protocol Overview Booking",src:o(83726).Z,title:"Protocol Overview Booking",width:"1144",height:"332"}))),(0,a.kt)("p",null,"After having the block booked, the node is free to ",(0,a.kt)("strong",{parentName:"p"},"gossip")," it, but a crucial step of the protocol is still missing: the ",(0,a.kt)("strong",{parentName:"p"},"Opinion Setter")," and the voting protocol, that deal with the most subjective parts of the consensus mechanism (notice that, until now, the protocol has mostly dealt with objective checks).\nThe voting protocol used here is the FPC (or ",(0,a.kt)("strong",{parentName:"p"},"Fast Probabilistic Consensus"),"), which is a binary voting protocol that allows a large group of nodes to come to a consensus on the value of a single bit.\nThe FPC begins with each node having an initial opinion, set using the node's local time perception and ordering of the blocks. The nodes must set opinions about two subjects: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"The legitimacy of the timestamp of the block"),": Whenever a node issues a block, it adds a timestamp to it, which should represent the local time of issuance (as seen by the issuer node). The other nodes will judge if this timestamp is reasonable, by checking if it is too far away from their own local clock."),(0,a.kt)("li",{parentName:"ol"},"In the case of a value transfer, ",(0,a.kt)("strong",{parentName:"li"},"whether it is a conflict"),": We use the ",(0,a.kt)("a",{parentName:"li",href:"/next/goshimmer/protocol_specification/components/consensus_mechanism#fcob"},(0,a.kt)("strong",{parentName:"a"},"FCoB Rule")),". Roughly, the node will have a positive opinion about a transaction A if and only if all its conflicts arrived later than a certain time interval after A's arrival. ")),(0,a.kt)("p",null,"In each round, nodes randomly choose other nodes to query about their opinions about one of the subjects above.\nThe querying node changes its own opinion if the number of responses with a different opinion than it is greater than a certain threshold.\nIn order to prevent liveness attacks, this threshold is determined by a random number issued by a committee of high Consensus Mana nodes via the ",(0,a.kt)("strong",{parentName:"p"},"dRNG")," application.\nWithout the random threshold, an attacker could lie about its responses in a way that could prevent the protocol from terminating. Finally, a node will finalize on a certain opinion after holding it for a certain number of rounds. "),(0,a.kt)("p",null,"When selecting which other nodes to query, a node must weight the list of all nodes by Consensus Mana.\nThus, high Consensus Mana nodes are queried more often than low Consensus Mana nodes. This makes it difficult for an attacker to manipulate the outcome of the voting.\nUnless the attacker controls more than 1/3 of the Consensus Mana in the system, with high probability, we know that FPC has the following properties:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Termination"),": every honest node will finalize on some opinion before a maximum round number."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Agreement"),": all honest nodes will finalize on the same opinion."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Integrity"),": if a super majority of nodes","\u2014","e.g. more than 90% weighted by Consensus Mana","\u2014",", have the same initial opinion, then FPC will terminate with that value.")),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:o(53663).Z},(0,a.kt)("img",{alt:"Protocol Overview Consensus",src:o(52626).Z,title:"Protocol Overview Consensus",width:"1143",height:"331"}))),(0,a.kt)("p",null,"Analogously to Bitcoin's ",(0,a.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Confirmation"},"six blocks rule"),", our protocol has certain measures of the probability of a certain block being considered valid permanently by all nodes.\nThis is achieved by the use of the ",(0,a.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/consensus_mechanism#approval-weight-aw"},(0,a.kt)("strong",{parentName:"a"},"Approval Weight")),".\nThe Approval weight represents the ",(0,a.kt)("em",{parentName:"p"},"weight")," of conflicts (and blocks).\nDifferent to the classical Nakamoto consensus, instead of selecting a leader based on a puzzle (PoW) or stake (PoS), it allows every node to express its opinion by simply issuing any block and attaching it in a part of the Tangle it ",(0,a.kt)("em",{parentName:"p"},"likes")," based on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Like switch"),". Through the like switch, a block can even reference blocks of conflicts it doesn't like (thereby reduce orphanage), by explicitly expressing which ones it likes instead.\nThis process is known as On-Tangle-Voting."))}p.isMDXComponent=!0},30151:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/Protocol_overview_booking-07d70687eff08788b7b2b6522560524e.png"},53663:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/Protocol_overview_consensus-b2ea6dc784ae417e4eaa7f3728a92c66.png"},63484:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/Protocol_overview_received_block-224990fe56cd67cadd3ee3057139a911.png"},83726:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Protocol_overview_booking-07d70687eff08788b7b2b6522560524e.png"},52626:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Protocol_overview_consensus-b2ea6dc784ae417e4eaa7f3728a92c66.png"},85340:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Protocol_overview_received_block-224990fe56cd67cadd3ee3057139a911.png"}}]);