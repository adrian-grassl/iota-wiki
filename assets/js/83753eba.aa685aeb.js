"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49571],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,b=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return t?n.createElement(b,s(s({ref:r},c),{},{components:t})):n.createElement(b,s({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},18491:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const o={},s=void 0,l={unversionedId:"libraries/java/api/BalanceAddressResponse",id:"libraries/java/api/BalanceAddressResponse",title:"BalanceAddressResponse",description:"Response of an address balance request",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/BalanceAddressResponse.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/BalanceAddressResponse",permalink:"/iota.rs/libraries/java/api/BalanceAddressResponse",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/BalanceAddressResponse.mdx",tags:[],version:"current",frontMatter:{}},i={},d=[{value:"addressType(): short",id:"addresstype-short",level:3},{value:"address(): String",id:"address-string",level:3},{value:"balance(): long",id:"balance-long",level:3},{value:"dustAllowed(): boolean",id:"dustallowed-boolean",level:3}],c={toc:d};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Response of an address balance request"),(0,a.kt)("h3",{id:"addresstype-short"},"addressType(): short"),(0,a.kt)("p",null,"The type of address"),(0,a.kt)("h3",{id:"address-string"},"address(): String"),(0,a.kt)("p",null,"The address"),(0,a.kt)("h3",{id:"balance-long"},"balance(): long"),(0,a.kt)("p",null,"The balance of this address"),(0,a.kt)("h3",{id:"dustallowed-boolean"},"dustAllowed(): boolean"),(0,a.kt)("p",null,"Wether or not this address allows dust"))}p.isMDXComponent=!0}}]);