"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[74586],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=a,v=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,l={unversionedId:"reference/java_api/BalanceChange",id:"reference/java_api/BalanceChange",title:"BalanceChange",description:"The balance change event payload.",source:"@site/iota/external/wallet.rs/production/documentation/docs/reference/java_api/BalanceChange.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/BalanceChange",permalink:"/wallet.rs/reference/java_api/BalanceChange",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/reference/java_api/BalanceChange.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[{value:"isSpent(): boolean",id:"isspent-boolean",level:3},{value:"spent(): long",id:"spent-long",level:3},{value:"received(): long",id:"received-long",level:3}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The balance change event payload."),(0,a.kt)("h3",{id:"isspent-boolean"},"isSpent(): boolean"),(0,a.kt)("p",null,"Checks if spent was more than 0"),(0,a.kt)("h3",{id:"spent-long"},"spent(): long"),(0,a.kt)("p",null,"The change amount if it was a spent event."),(0,a.kt)("h3",{id:"received-long"},"received(): long"),(0,a.kt)("p",null,"The change amount if it was a receive event."))}s.isMDXComponent=!0}}]);