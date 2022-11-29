"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64621],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>f});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(i),f=n,g=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return i?r.createElement(g,s(s({ref:t},l),{},{components:i})):r.createElement(g,s({ref:t},l))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<a;d++)s[d]=i[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},1549:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=i(87462),n=(i(67294),i(3905));const a={image:"/img/integration-services/arch/network-of-trust.jpeg",description:"The IOTA SSI Bridge provides an abstraction layer through REST APIs that allows entities to create decentralized identities (DIDs), verify them, attach verifiable credentials and verify them.",keywords:["explanation","ecommerce","ssi bridge","abstraction layer","decentralized identity","verifiable credentials"]},s="SSI Bridge",o={unversionedId:"explanations/services/SSI-bridge/introduction",id:"explanations/services/SSI-bridge/introduction",title:"SSI Bridge",description:"The IOTA SSI Bridge provides an abstraction layer through REST APIs that allows entities to create decentralized identities (DIDs), verify them, attach verifiable credentials and verify them.",source:"@site/iota/external/integration-services/production/documentation/docs/explanations/services/SSI-bridge/introduction.md",sourceDirName:"explanations/services/SSI-bridge",slug:"/explanations/services/SSI-bridge/introduction",permalink:"/integration-services/explanations/services/SSI-bridge/introduction",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/iota/external/integration-services/production/documentation/docs/explanations/services/SSI-bridge/introduction.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/arch/network-of-trust.jpeg",description:"The IOTA SSI Bridge provides an abstraction layer through REST APIs that allows entities to create decentralized identities (DIDs), verify them, attach verifiable credentials and verify them.",keywords:["explanation","ecommerce","ssi bridge","abstraction layer","decentralized identity","verifiable credentials"]},sidebar:"docs",previous:{title:"Use Cases",permalink:"/integration-services/explanations/services/audit-trail-gateway/use-cases"},next:{title:"Software Architecture and APIs Definition",permalink:"/integration-services/explanations/services/SSI-bridge/API-definition"}},c={},d=[{value:"Concept and Logic Architecture",id:"concept-and-logic-architecture",level:2}],l={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ssi-bridge"},"SSI Bridge"),(0,n.kt)("h2",{id:"concept-and-logic-architecture"},"Concept and Logic Architecture"),(0,n.kt)("p",null,"The SSI Bridge allows you to create ",(0,n.kt)("a",{parentName:"p",href:"/integration-services/explanations/identity"},"self-sovereign identities"),", linking\ndecentralized identifiers (DIDs) to their specification (",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"DID Documents"),")."),(0,n.kt)("p",null,"DIDs are public/private key pairs that can be created for organizations, individuals, and objects. Each identity is\nrepresented by a unique public key immutably stored onto the ledger (in our case, the IOTA Tangle). Identities and\npublic keys are used to anchor off-chain verifiable credentials (",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"VCs"),"),\ncertificates containing identity attributes and signed by an Issuer identity using its private key."),(0,n.kt)("p",null,"The Issuer itself is an entity with its own decentralized identity. The SSI Bridge allows an identified trust root to\nverify users' identities. Verified identities can then propagate this verification to organizations,\nindividuals, or objects identities using a network of trust approach."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"network-of-trust",src:i(66341).Z,width:"1288",height:"871"})),(0,n.kt)("p",null,"The Bridge also allows Issuers to issue verifiable credentials for selected Identity Owners identified by a\ndecentralized identity, and said Owners to present them to Verifiers. Verifiers can use\nthe ",(0,n.kt)("a",{parentName:"p",href:"/integration-services/explanations/services/SSI-bridge/API-definition"},"SSI Bridge APIs")," to verify a credential's authenticity. This requires verifying that a\ncredential contains the identifier (DID) of the Owner presenting it and that an authorized Issuer signs it. This process\nrequires access to information stored on a ledger."),(0,n.kt)("p",null,"The following image illustrates the interaction between the Issuer, Owner, Verifier, and the ledger to manage the\nlifecycle of decentralized identities and verifiable credentials."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Interaction between Issuer, Owner, Verifier, and the ledger",src:i(36672).Z,width:"1484",height:"610"})),(0,n.kt)("p",null,"The IOTA SSI Bridge provides an abstraction layer through REST APIs that allows entities to create\ndecentralized identities (DIDs), verify them, attach verifiable credentials and verify those credentials."),(0,n.kt)("p",null,"The figure below shows the envisioned system architecture within the full set of IOTA Integration Services developed for\nthe ENSURESEC project."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IOTA-Tools-Architecture",src:i(5777).Z,width:"960",height:"540"})),(0,n.kt)("p",null,"You can find examples of how the Bridge could be used in the context of e-commerce ecosystems\nto ",(0,n.kt)("a",{parentName:"p",href:"/integration-services/explanations/services/SSI-bridge/use-cases#secure-goods-distribution"},"secure goods distribution"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"/integration-services/explanations/services/SSI-bridge/use-cases#secure-e-commerce-sales"},"secure sales")," in the ",(0,n.kt)("a",{parentName:"p",href:"/integration-services/explanations/services/SSI-bridge/use-cases"},"Use Cases")," section."))}p.isMDXComponent=!0},66341:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/network-of-trust-91223baa4872c753725f6bf7eba0e564.png"},5777:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/architecture-integration-808a9bd5eca8712894d46b172d7feeb0.png"},36672:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/issuer-owner-verifier-interaction-6e188e5357ba14bc3dab96bedc2f0eb7.png"}}]);