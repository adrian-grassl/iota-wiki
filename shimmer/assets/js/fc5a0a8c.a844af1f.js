"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[89201],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),s=a(34259),o=a(18679);const i={keywords:["results","Smart Contracts function context","view function","retrieve state"],description:"Views are smart contract functions that only allow you to retrieve state information about the smart contract. They have a special, limited ISC function context that does not allow them to change the smart contract state.",image:"/img/logo/WASP_logo_dark.png"},l="View-Only Functions",c={unversionedId:"guide/wasm_vm/views",id:"guide/wasm_vm/views",title:"View-Only Functions",description:"Views are smart contract functions that only allow you to retrieve state information about the smart contract. They have a special, limited ISC function context that does not allow them to change the smart contract state.",source:"@site/shimmer/external/wasp/documentation/docs/guide/wasm_vm/views.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/views",permalink:"/shimmer/smart-contracts/guide/wasm_vm/views",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/wasm_vm/views.mdx",tags:[],version:"current",frontMatter:{keywords:["results","Smart Contracts function context","view function","retrieve state"],description:"Views are smart contract functions that only allow you to retrieve state information about the smart contract. They have a special, limited ISC function context that does not allow them to change the smart contract state.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Thunk Functions",permalink:"/shimmer/smart-contracts/guide/wasm_vm/thunks"},next:{title:"Smart Contract Initialization",permalink:"/shimmer/smart-contracts/guide/wasm_vm/init"}},u={},m=[],d={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"view-only-functions"},"View-Only Functions"),(0,r.kt)("p",null,"View-only functions, or Views for short, are smart contract functions that only allow you\nto ",(0,r.kt)("em",{parentName:"p"},"retrieve")," state information about the smart contract. They have a special, limited\nISC function context that does not allow access to functionality that could result in\nchanges to the smart contract state. This means that all access to the state storage will\nbe through immutable proxies. It also means that they cannot receive or transfer tokens,\nbecause changes to the smart contract account are by definition state changes as well."),(0,r.kt)("p",null,"Views are allowed to call other views on the same chain, but they cannot call any non-view\nsmart contract function, nor can they post cross-chain requests."),(0,r.kt)("p",null,"View functions will always return some data to their caller. It would be silly not to\nreturn data from a View because by definition it cannot have any other side effects that\nshow up elsewhere."),(0,r.kt)("p",null,"For demonstration purposes we provided a View function with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," smart contract,\ncalled 'getFactor':"),(0,r.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"\n// 'getFactor' is a simple View function. It will retrieve the factor\n// associated with the (mandatory) address parameter it was provided with.\nfunc viewGetFactor(_ wasmlib.ScViewContext, f *GetFactorContext) {\n    // Since we are sure that the 'address' parameter actually exists we can\n    // retrieve its actual value into an ScAddress value type.\n    var address wasmtypes.ScAddress = f.Params.Address().Value()\n\n    // Create an ScImmutableMap proxy to the 'members' map in the state storage.\n    // Note that for views this is an *immutable* map as opposed to the *mutable*\n    // map we can access from the *mutable* state that gets passed to funcs.\n    var members MapAddressToImmutableUint64 = f.State.Members()\n\n    // Retrieve the factor associated with the address parameter.\n    var factor uint64 = members.GetUint64(address).Value()\n\n    // Set the factor in the results map of the function context.\n    // The contents of this results map is returned to the caller of the function.\n    f.Results.Factor().SetValue(factor)\n}\n"))),(0,r.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// 'getFactor' is a simple View function. It will retrieve the factor\n// associated with the (mandatory) address parameter it was provided with.\npub fn view_get_factor(_ctx: &ScViewContext, f: &GetFactorContext) {\n\n    // Since we are sure that the 'address' parameter actually exists we can\n    // retrieve its actual value into an ScAddress value type.\n    let address: ScAddress = f.params.address().value();\n\n    // Create an ScImmutableMap proxy to the 'members' map in the state storage.\n    // Note that for views this is an *immutable* map as opposed to the *mutable*\n    // map we can access from the *mutable* state that gets passed to funcs.\n    let members: MapAddressToImmutableUint64 = f.state.members();\n\n    // Retrieve the factor associated with the address parameter.\n    let factor: u64 = members.get_uint64(&address).value();\n\n    // Set the factor in the results map of the function context.\n    // The contents of this results map is returned to the caller of the function.\n    f.results.factor().set_value(factor);\n}\n"))),(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// 'getFactor' is a simple View function. It will retrieve the factor\n// associated with the (mandatory) address parameter it was provided with.\nexport function viewGetFactor(ctx: wasmlib.ScViewContext, f: sc.GetFactorContext): void {\n\n    // Since we are sure that the 'address' parameter actually exists we can\n    // retrieve its actual value into an ScAddress value type.\n    let address: wasmlib.ScAddress = f.params.address().value();\n\n    // Create an ScImmutableMap proxy to the 'members' map in the state storage.\n    // Note that for views this is an *immutable* map as opposed to the *mutable*\n    // map we can access from the *mutable* state that gets passed to funcs.\n    let members: sc.MapAddressToImmutableUint64 = f.state.members();\n\n    // Retrieve the factor associated with the address parameter.\n    let factor: u64 = members.getUint64(address).value();\n\n    // Set the factor in the results map of the function context.\n    // The contents of this results map is returned to the caller of the function.\n    f.results.factor().setValue(factor);\n}\n")))),(0,r.kt)("p",null,"Return values are passed to the caller through the predefined ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," map associated\nwith the ISC function context. Again, this works the same way as for Funcs, although Funcs\ndo not necessarily return values to the caller. The schema tool will generate a\nfunction-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," structure with type-safe proxies to the result fields in this\nmap."),(0,r.kt)("p",null,"In the next section we will look at ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/wasm_vm/init"},"smart contract initialization"),"."))}p.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),s=a(86010),o=a(51048),i=a(33609),l=a(1943),c=a(72957);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:p,groupId:h,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=p??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(w,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!w.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,l.U)(),[x,T]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=h){const e=g[h];null!=e&&e!==x&&w.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=S.indexOf(t),n=w[a].value;n!==x&&(O(t),T(n),null!=h&&k(h,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},w.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>S.push(e),onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);