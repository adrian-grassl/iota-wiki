"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13218],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>w});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(o),w=i,d=h["".concat(c,".").concat(w)]||h[w]||p[w]||r;return o?n.createElement(d,a(a({ref:t},u),{},{components:o})):n.createElement(d,a({ref:t},u))}));function w(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},79218:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));const r={keywords:["how to"],description:"How to write good how tos for the IOTA Wiki.",image:"/img/iota-wiki.png"},a="How To Write Banger How Tos",s={unversionedId:"contribute-to-wiki/how_tos/how_to_write_how_tos",id:"contribute-to-wiki/how_tos/how_to_write_how_tos",title:"How To Write Banger How Tos",description:"How to write good how tos for the IOTA Wiki.",source:"@site/shimmer/community/contribute-to-wiki/how_tos/how_to_write_how_tos.md",sourceDirName:"contribute-to-wiki/how_tos",slug:"/contribute-to-wiki/how_tos/how_to_write_how_tos",permalink:"/shimmer/community/contribute-to-wiki/how_tos/how_to_write_how_tos",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/shimmer/community/contribute-to-wiki/how_tos/how_to_write_how_tos.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{keywords:["how to"],description:"How to write good how tos for the IOTA Wiki.",image:"/img/iota-wiki.png"},sidebar:"learn",previous:{title:"Set Up Documentation",permalink:"/shimmer/community/contribute-to-wiki/how_tos/documentation_setup"},next:{title:"Requesting a Technical Writer",permalink:"/shimmer/community/contribute-to-wiki/how_tos/request_tw"}},c={},l=[{value:"How To Template",id:"how-to-template",level:2}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-write-banger-how-tos"},"How To Write Banger How Tos"),(0,i.kt)("p",null,"A person reads a how to guide to learn how to solve a concrete task, and different people will perform the same task under different circumstances. Even a trivial task like connecting to a node can be thwarted by an unstable internet connection, firewall settings, or the node not being healthy."),(0,i.kt)("p",null,"A how to guide helps readers to achieve their goal. It explains how to use a product function safely to get the desired result. A big part of it is explaining what to look at before using the product, and helping to interpret the output to see if everything went as the user have intended."),(0,i.kt)("p",null,"Keep how tos atomic: let each describe one particular task at a time. It is easier for the reader to compose multiple smaller guides to solve a larger issue than to extract a smaller bit out of a long and complex article. And it's easier to write multiple small articles over a long read."),(0,i.kt)("h2",{id:"how-to-template"},"How To Template"),(0,i.kt)("p",null,"If you do not know where to start, just take this template and replace everything in {CURLY BRACES} or rewrite whole sentences:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"# How To {DO SOMETHING}\n\nTo {DO SOMETHING}, you need to use the {FUNCTION NAME} function of the {CLASS NAME} class. \n\x3c!-- Add links to the API reference. --\x3e\n\nIt will {DO THIS AND THAT}. \n\x3c!-- Explain in one or two sentences how does it work without going into details. --\x3e\n\nYou could use its output for {THIS AND THAT}.\n \x3c!-- Add links to other how to guides --\x3e\n\n## Prerequisites \n\x3c!-- Skip if there are no prerequisites. --\x3e\n\nBefore you could {DO SOMETHING}, you need:\n\n* {A PREREQUISITE} \n\x3c!-- Describe what the user needs beside the input, if relevant: a running node instance, additional libraries on the machine, initial setup, and so on. --\x3e\n\n* {ANOTHER PREREQUISITE} \n\x3c!-- Provide links to each, if applicable. --\x3e\n\n## Input \n\x3c!-- Skip if the function takes no arguments. --\x3e\n\nTo {DO SOMETHING}, you need to provide the following values:\n\n* {A THING}. See {HOW TO GET THAT THING GUIDE} and {HOW TO CHECK THAT THIS THING IS CORRECT}\n* {ANOTHER THING}\n \x3c!-- While this list somewhat duplicates the API reference, it provides a context that helps to apply this function to the real world task. --\x3e\n\n## Usage\n\nThe function usage looks like this:\n\n{CODE BLOCK}\n\n\x3c!-- Describe (possibly in code comments) what does the reader see: where is the initial setup, where is the actual usage, and where is the variable that stores the output. --\x3e\n\n## Output\n\n\x3c!-- Option 1 --\x3e\n\nThis function returns no value.\n\n\x3c!-- Option 2 --\x3e\n\nThis function returns a {TYPE NAME} value.\n\n\x3c!-- Option 3 --\x3e\n\nThe function returns a {TYPE NAME} data structure. The important fields are:\n\n* {A FIELD}: it contains {THIS INFORMATION}\n* {ANOTHER FIELD}: it contains {THAT INFORMATION}\n\n\x3c!-- End of selection. If applicable, provide an example of a healthy output: --\x3e\n\n{CODE BLOCK}\n\nYou can check the output validity by {DOING THIS AND THAT}.\n\nYou can use the output to {DO THIS AND THAT}\n\x3c!-- You can copy and paste the sentence from the very beginning. --\x3e\n\n## Troubleshooting\n\nIf you get {THIS ERROR}, check {THIS}.\n\nIf you get {THAT ERROR}, check {THAT}.\n")))}p.isMDXComponent=!0}}]);