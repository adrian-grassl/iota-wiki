"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[5646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={},i="Stardust Ledger",s={unversionedId:"explanations/ledger/intro",id:"explanations/ledger/intro",title:"Stardust Ledger",description:"The ledger is a distributed database that records ownership of funds in the network. Users modify the ledger by",source:"@site/shimmer/external/introduction-docs/docs/explanations/ledger/intro.md",sourceDirName:"explanations/ledger",slug:"/explanations/ledger/intro",permalink:"/shimmer/introduction/explanations/ledger/intro",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/shimmer/external/introduction-docs/docs/explanations/ledger/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Dynamic Proof of Work",permalink:"/shimmer/introduction/explanations/what_is_stardust/dynamic_pow"},next:{title:"Simple Transactions",permalink:"/shimmer/introduction/explanations/ledger/simple_transfers"}},l={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stardust-ledger"},"Stardust Ledger"),(0,o.kt)("p",null,"The ledger is a distributed database that records ownership of funds in the network. Users modify the ledger by\nposting transactions to the network that move these funds between user accounts."),(0,o.kt)("p",null,"IOTA uses the Unspent Transaction Output Model (UTXO) to model ledger entries. A transaction consumes ledger entries\n(previously created transaction outputs) and creates new ones. When a UTXO is consumed, it is marked as spent and is\nremoved from the database, while newly created UTXOs are added. All currently unspent UTXOs comprise the most recent\nledger state."),(0,o.kt)("p",null,"A UTXO is allowed to be spent if its owner presents a valid digital signature corresponding to the owner of the UTXO\nthat is generally called the owner address. Stardust extends this concept by letting users define additional\nspending constraints on UTXOs, for example that an output can only be spent after a certain time."),(0,o.kt)("p",null,"In the following, we will demonstrate with example some common types of transactions and in the meantime we will\nexplore the different kind of constraints and outputs that one might create in the ledger."))}p.isMDXComponent=!0}}]);