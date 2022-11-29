"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[67074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={description:"Manual peering enables node operators to exchange their nodes' information and let them peer with each other, orthogonal to autopeering.",image:"/img/logo/goshimmer_light.png",keywords:["peering","manual","node","node operator","known peer","json config","web api","public key"]},i="Manual Peering",l={unversionedId:"tutorials/manual_peering",id:"tutorials/manual_peering",title:"Manual Peering",description:"Manual peering enables node operators to exchange their nodes' information and let them peer with each other, orthogonal to autopeering.",source:"@site/next/external/goshimmer/documentation/docs/tutorials/manual_peering.md",sourceDirName:"tutorials",slug:"/tutorials/manual_peering",permalink:"/next/goshimmer/tutorials/manual_peering",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/tutorials/manual_peering.md",tags:[],version:"current",frontMatter:{description:"Manual peering enables node operators to exchange their nodes' information and let them peer with each other, orthogonal to autopeering.",image:"/img/logo/goshimmer_light.png",keywords:["peering","manual","node","node operator","known peer","json config","web api","public key"]},sidebar:"docs",previous:{title:"How to Create dApps",permalink:"/next/goshimmer/tutorials/dApp"},next:{title:"Create a Static Identity",permalink:"/next/goshimmer/tutorials/static_identity"}},s={},p=[{value:"How Manual Peering Works",id:"how-manual-peering-works",level:2},{value:"How to Set Known Peers via Config File",id:"how-to-set-known-peers-via-config-file",level:2},{value:"Config Record Example",id:"config-record-example",level:3},{value:"Config Record Description",id:"config-record-description",level:3},{value:"How to Manage Known Peers Via Web API",id:"how-to-manage-known-peers-via-web-api",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manual-peering"},"Manual Peering"),(0,r.kt)("p",null,"Manual peering enables node operators to exchange their nodes' information and let them peer with each other, orthogonal to autopeering. It can be an additional protection against eclipse attacks as the manual peering is completely in the hands of the node operator based on real world trust. Furthermore, it allows to operate nodes without exposing their IP address to the network.\nThere are two ways to configure the list of known peers of the node:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add known peers using the JSON config file"),(0,r.kt)("li",{parentName:"ol"},"Add/View/Delete via the web API of the node")),(0,r.kt)("h2",{id:"how-manual-peering-works"},"How Manual Peering Works"),(0,r.kt)("p",null,"When the user provides the list of known peers, which looks like a list of IP addresses with ports and public keys of peers,\nthe node remembers it and starts a background process that is trying to connect with every peer from the list. To establish\nthe connection with a peer, the other peer should have our local peer in its list of known peers. So the condition for\npeers to connect is that they should have each other in their known peers lists. In case of network failure the node\nwill keep reconnecting with known peers until it succeeds."),(0,r.kt)("p",null,"In other words, the only thing that users have to do to be connected via manual peering is to\nexchange their IP address with port and public key and set that information to known peers of their nodes and machines will do the rest."),(0,r.kt)("h2",{id:"how-to-set-known-peers-via-config-file"},"How to Set Known Peers via Config File"),(0,r.kt)("p",null,"Add the following record to the root of your JSON config file that you are using to run the node."),(0,r.kt)("h3",{id:"config-record-example"},"Config Record Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "manualPeering": {\n    "knownPeers": "[{\\"publicKey\\": \\"CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3\\", \\"address\\": \\"127.0.0.1:14666\\"}]"\n  }\n}\n')),(0,r.kt)("h3",{id:"config-record-description"},"Config Record Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Public key of the peer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"IP address of the peer's node and its gossip port.")))),(0,r.kt)("h2",{id:"how-to-manage-known-peers-via-web-api"},"How to Manage Known Peers Via Web API"),(0,r.kt)("p",null,"See manual peering API docs ",(0,r.kt)("a",{parentName:"p",href:"/next/goshimmer/apis/manual_peering"},"page"),"\nfor information on how to manage the known peers list via web API."))}d.isMDXComponent=!0}}]);