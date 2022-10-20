"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[96928],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>p});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(i),p=a,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return i?n.createElement(m,r(r({ref:t},h),{},{components:i})):n.createElement(m,r({ref:t},h))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=i[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},49507:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const o={},r="Application Architecture",s={unversionedId:"doc-immutability/architecture",id:"doc-immutability/architecture",title:"Application Architecture",description:"The Document immutability application is simply a graphical user interface (GUI), written in React with some additional functionality provided by the poex-tool",source:"@site/iota/external/blueprints/production/doc-immutability/architecture.md",sourceDirName:"doc-immutability",slug:"/doc-immutability/architecture",permalink:"/blueprints/doc-immutability/architecture",draft:!1,editUrl:"https://github.com/iotaledger/blueprints/edit/main/iota/external/blueprints/production/doc-immutability/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Document Immutability",permalink:"/blueprints/doc-immutability/overview"},next:{title:"Deploy and Test the Document Immutability Demo",permalink:"/blueprints/doc-immutability/deployment-and-testing"}},c={},l=[{value:"Building Blocks",id:"building-blocks",level:2},{value:"Legacy Network Backwards-Compatibility",id:"legacy-network-backwards-compatibility",level:2},{value:"Uploading a Proof of Existence of a Document",id:"uploading-a-proof-of-existence-of-a-document",level:3},{value:"Verifying a Document",id:"verifying-a-document",level:3}],h={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-architecture"},"Application Architecture"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Document immutability application is simply a graphical user interface (GUI), written in React with some additional functionality provided by the poex-tool")),(0,a.kt)("admonition",{title:":Disclaimer",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Running an open source project, like any human endeavor, involves uncertainty and trade-offs. We hope the architecture described below helps you to deploy similar systems, but it may include mistakes, and can\u2019t address every situation. If you have any questions about your project, we encourage you to do your own research, seek out experts, and discuss them with the IOTA community.")),(0,a.kt)("p",null,"This blueprint uses the following architecture whereby the application takes file data from a client, saves it to a database, and attaches it to the Tangle through a node."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Document immutability architecture",src:i(77638).Z,width:"2501",height:"900"})),(0,a.kt)("h2",{id:"building-blocks"},"Building Blocks"),(0,a.kt)("p",null,"The application uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/poex-tool"},"Proof of Existence Library"),", a basic library that enables users to publish and verify Proof of Existences. With a valid Proof of Existence, users can be certain that the given document has not been changed since the Proof of Existence has been published on the IOTA Tangle, thereby ensuring data integrity."),(0,a.kt)("h2",{id:"legacy-network-backwards-compatibility"},"Legacy Network Backwards-Compatibility"),(0,a.kt)("p",null,"As this is one of the earlier projects, it has been up and running long before the Chrysalis network. While new PoEs are published to Chrysalis, proofs issued on the Legacy network are still verifiable in the application, as the underlying Proof of Existence library provides methods for both networks.\nThe application automatically detects if the provided message-id is from the Legacy or the Chrysalis network and adjusts its procedure accordingly."),(0,a.kt)("h3",{id:"uploading-a-proof-of-existence-of-a-document"},"Uploading a Proof of Existence of a Document"),(0,a.kt)("p",null,"When a user wants to create a Proof of Existence for a document, the application process is the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The user provides the document."),(0,a.kt)("li",{parentName:"ol"},"The document is hashed"),(0,a.kt)("li",{parentName:"ol"},"The application includes the hash of the document in a message and attaches it to the Tangle."),(0,a.kt)("li",{parentName:"ol"},"Return the message-id to the user")),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:i(34726).Z},(0,a.kt)("img",{alt:"Document hashing",src:i(80851).Z,width:"2501",height:"901"}))),(0,a.kt)("p",null,"The document is hashed, using the SHA256-hash function. We recommend using at least a 128-bit hashing algorithm.\nThe hash is inserted into an ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," message that is sent to the selected IOTA node, which proceeds to attach it to the Tangle. Once the node has attached the message, it returns the message-id, which the user can then store."),(0,a.kt)("h3",{id:"verifying-a-document"},"Verifying a Document"),(0,a.kt)("p",null,"When a user wants to verify the integrity of a document, the process in the web application is the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The user provides the document and the message-id referencing the Proof of Existence"),(0,a.kt)("li",{parentName:"ol"},"The web application fetches the Proof of Existence from the message of the Tangle by querying the selected node"),(0,a.kt)("li",{parentName:"ol"},"The document is hashed "),(0,a.kt)("li",{parentName:"ol"},"The result is compared to the fetched Proof of Existence"),(0,a.kt)("li",{parentName:"ol"},"The verification result is returned to the user")),(0,a.kt)("p",null,"In order to access the Proof of Existence, the message-id, which references the message in the Tangle, has to be provided.\nAn IOTA node is then queried to return the message, which contains the document hash in its ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," field of the ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," of the message.\nNow, the document is simply hashed and compared with the Proof of Existence-hash."),(0,a.kt)("p",null,"If the two hashes match, the file is unchanged.\nif the hashes do not match, we know that the file has been changed between now and the time its Proof of Existence was attached to the Tangle."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Document verification",src:i(99967).Z,width:"2501",height:"901"})))}u.isMDXComponent=!0},34726:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/document-immutability-signing-139399c0241d52a3b5cd2f552ef2c195.png"},77638:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/document-immutability-architecture-903814c41fb8c7d79ad9a1aae55995c8.png"},80851:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/document-immutability-signing-139399c0241d52a3b5cd2f552ef2c195.png"},99967:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/document-immutability-verification-46b68951698fdf50649994abd9566f10.png"}}]);