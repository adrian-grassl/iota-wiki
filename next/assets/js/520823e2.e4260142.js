"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[23320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(34259),s=n(18679);const l={keywords:["results","function","user function","error message","implementations","mandatory parameter","immutable state","definition"],description:"The optional `results` subsection contains field definitions for each of the results a function produces. The layout of the field definitions is identical to that of the state field definitions",image:"/img/logo/WASP_logo_dark.png"},i="Function Results",u={unversionedId:"guide/wasm_vm/results",id:"guide/wasm_vm/results",title:"Function Results",description:"The optional `results` subsection contains field definitions for each of the results a function produces. The layout of the field definitions is identical to that of the state field definitions",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/results.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/results",permalink:"/next/smart-contracts/guide/wasm_vm/results",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/results.mdx",tags:[],version:"current",frontMatter:{keywords:["results","function","user function","error message","implementations","mandatory parameter","immutable state","definition"],description:"The optional `results` subsection contains field definitions for each of the results a function produces. The layout of the field definitions is identical to that of the state field definitions",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Parameters",permalink:"/next/smart-contracts/guide/wasm_vm/params"},next:{title:"Thunk Functions",permalink:"/next/smart-contracts/guide/wasm_vm/thunks"}},c={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-results"},"Function Results"),(0,r.kt)("p",null,"The optional ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," subsection contains field definitions for each of the results a\nfunction produces. The layout of the field definitions is identical to that of the\n",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/params"},"Params")," field definitions."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," will automatically generate a mutable structure with member\nvariables for proxies to each result variable in the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/results"},"Results")," map. The user\nwill be able to set the result variables through this structure, which is passed to the\nfunction."),(0,r.kt)("p",null,"When this subsection is empty, or completely omitted, no structure will be generated or\npassed to the function."),(0,r.kt)("p",null,"For example, here is the structure generated for the mutable results for the ",(0,r.kt)("inlineCode",{parentName:"p"},"getFactor"),"\nfunction:"),(0,r.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MutableGetFactorResults struct {\n    proxy wasmtypes.Proxy\n}\n\n// relative division factor\nfunc (s MutableGetFactorResults) Factor() wasmtypes.ScMutableUint64 {\n    return wasmtypes.NewScMutableUint64(s.proxy.Root(ResultFactor))\n}\n"))),(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone)]\npub struct MutableGetFactorResults {\n    pub(crate) proxy: Proxy,\n}\n\nimpl MutableGetFactorResults {\n    // relative division factor\n    pub fn factor(&self) -> ScMutableUint64 {\n        ScMutableUint64::new(self.proxy.root(RESULT_FACTOR))\n    }\n}\n"))),(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class MutableGetFactorResults extends wasmtypes.ScProxy {\n    // relative division factor\n    factor(): wasmtypes.ScMutableUint64 {\n        return new wasmtypes.ScMutableUint64(this.proxy.root(sc.ResultFactor));\n    }\n}\n")))),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," will also generate an immutable version of the\nstructure, suitable for accessing the results after by the caller of this smart contract\nfunction."),(0,r.kt)("p",null,"In the next section we will look at how so-called ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/thunks"},"thunk functions"),"\nencapsulate access and parameter checking and set up the type-safe function-specific\ncontexts."))}d.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),s=n(51048),l=n(33609),i=n(1943),u=n(72957);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:d,groupId:f,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,i.U)(),[x,T]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&v.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==x&&(N(t),T(a),null!=f&&k(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:_,onClick:_},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);