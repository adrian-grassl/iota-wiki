"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[87691],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(h,r(r({ref:n},l),{},{components:t})):a.createElement(h,r({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=t(87462),i=(t(67294),t(3905)),o=t(34259),r=t(18679);const s={keywords:["functions","thunk","insert operations"],description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the wrapped function to adapt it to changing requirements",image:"/img/logo/WASP_logo_dark.png"},c="Thunk Functions",u={unversionedId:"guide/wasm_vm/thunks",id:"guide/wasm_vm/thunks",title:"Thunk Functions",description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the wrapped function to adapt it to changing requirements",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/thunks.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/thunks",permalink:"/next/smart-contracts/guide/wasm_vm/thunks",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/thunks.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","thunk","insert operations"],description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the wrapped function to adapt it to changing requirements",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Results",permalink:"/next/smart-contracts/guide/wasm_vm/results"},next:{title:"View-Only Functions",permalink:"/next/smart-contracts/guide/wasm_vm/views"}},l={},m=[],p={toc:m};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"thunk-functions"},"Thunk Functions"),(0,i.kt)("p",null,"In computer programming, a thunk is a wrapper function that is used to inject code around\nanother function. Thunks are used to insert operations before and/or after the wrapped\nfunction is being called to adapt it to changing requirements. The\n",(0,i.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," will generate such thunk functions to be able to properly set up\ncalls to the smart contract functions. It also creates a mapping between the name/id of\nthe function and the actual function, and generates code to properly communicate this\nmapping to the ISC host."),(0,i.kt)("p",null,"In our case we use thunks not only to inject code around the smart contract function, but\nalso to make the smart contract function type-safe. The thunks all have an identical\nfunction signature, and each will set up a function-specific data structure so that the\nactual smart contract function will deal with them in a type-safe way. Having a common\nfunction signature for the thunks means that it is easy to generate a table of all\nfunctions and their names that can be used to generically call these functions."),(0,i.kt)("p",null,"All code for this table and the thunks is generated as part of ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.xx")," and it looks as\nfollows for the ",(0,i.kt)("inlineCode",{parentName:"p"},"dividend")," example smart contract (for simplicity the thunk function\ncontents has been omitted for now):"),(0,i.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var exportMap = wasmlib.ScExportMap{\n    Names: []string{\n        FuncDivide,\n        FuncInit,\n        FuncMember,\n        FuncSetOwner,\n        ViewGetFactor,\n        ViewGetOwner,\n    },\n    Funcs: []wasmlib.ScFuncContextFunction{\n        funcDivideThunk,\n        funcInitThunk,\n        funcMemberThunk,\n        funcSetOwnerThunk,\n    },\n    Views: []wasmlib.ScViewContextFunction{\n        viewGetFactorThunk,\n        viewGetOwnerThunk,\n    },\n}\n\nfunc OnDispatch(index int32) {\n    exportMap.Dispatch(index)\n}\n\nfunc funcDivideThunk(ctx wasmlib.ScFuncContext) {}\nfunc funcInitThunk(ctx wasmlib.ScFuncContext) {}\nfunc funcMemberThunk(ctx wasmlib.ScFuncContext) {}\nfunc funcSetOwnerThunk(ctx wasmlib.ScFuncContext) {}\nfunc viewGetFactorThunk(ctx wasmlib.ScViewContext) {}\nfunc viewGetOwnerThunk(ctx wasmlib.ScViewContext) {}\n"))),(0,i.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"const EXPORT_MAP: ScExportMap = ScExportMap {\n    names: &[\n        FUNC_DIVIDE,\n        FUNC_INIT,\n        FUNC_MEMBER,\n        FUNC_SET_OWNER,\n        VIEW_GET_FACTOR,\n        VIEW_GET_OWNER,\n    ],\n    funcs: &[\n        func_divide_thunk,\n        func_init_thunk,\n        func_member_thunk,\n        func_set_owner_thunk,\n    ],\n    views: &[\n        view_get_factor_thunk,\n        view_get_owner_thunk,\n    ],\n};\n\npub fn on_dispatch(index: i32) {\n    EXPORT_MAP.dispatch(index);\n}\n\nfn func_divide_thunk(ctx: &ScFuncContext) {}\nfn func_init_thunk(ctx: &ScFuncContext) {}\nfn func_member_thunk(ctx: &ScFuncContext) {}\nfn func_set_owner_thunk(ctx: &ScFuncContext) {}\nfn view_get_factor_thunk(ctx: &ScViewContext) {}\nfn view_get_owner_thunk(ctx: &ScViewContext) {}\n"))),(0,i.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const exportMap: wasmlib.ScExportMap = {\n    names: [\n        sc.FuncDivide,\n        sc.FuncInit,\n        sc.FuncMember,\n        sc.FuncSetOwner,\n        sc.ViewGetFactor,\n        sc.ViewGetOwner,\n    ],\n    funcs: [\n        funcDivideThunk,\n        funcInitThunk,\n        funcMemberThunk,\n        funcSetOwnerThunk,\n    ],\n    views: [\n        viewGetFactorThunk,\n        viewGetOwnerThunk,\n    ],\n};\n\nexport function on_dispatch(index: i32): void {\n    exportMap.dispatch(index);\n}\n\nfunction funcDivideThunk(ctx: ScFuncContext) {}\nfunction funcInitThunk(ctx: ScFuncContext) {}\nfunction funcMemberThunk(ctx: ScFuncContext) {}\nfunction funcSetOwnerThunk(ctx: ScFuncContext) {}\nfunction viewGetFactorThunk(ctx: ScViewContext) {}\nfunction viewGetOwnerThunk(ctx: ScViewContext) {}\n")))),(0,i.kt)("p",null,"The key function here is the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDispatch()")," function, which will be called by the main\nWasm file. This main Wasm file is separate because the Wasm runtime format is\nessentially a dynamic link library. That means it not only defined exported functions,\nbut also defines functions it needs to link to at a later stage, and which will be\nprovided by the Wasm VM host."),(0,i.kt)("p",null,"We want to keep the SC code separate as a self-contained library that is independent of\nthe Wasm format requirements, because we will be reusing the same SC code in client-side\ncode that can directly execute SC requests through this same interface."),(0,i.kt)("p",null,"The Wasm host requires us to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_load()"),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"on_call()")," Wasm callback\nfunctions. These will directly dispatch these calls through the corresponding\n",(0,i.kt)("inlineCode",{parentName:"p"},"OnDispatch()")," function in the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.xx"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"on_load()")," Wasm function will be called by the Wasm VM host upon loading of the Wasm\ncode. It will inform the host of all the function ids and types (Func or View) that this\nsmart contract provides."),(0,i.kt)("p",null,"When the host needs to call a function of the smart contract it will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_call()"),"\ncallback function with the corresponding function id, and then the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_call()")," function\nwill dispatch the call via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ScExportMap")," mapping table that was generated by the\n",(0,i.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," to the proper associated thunk function."),(0,i.kt)("p",null,"This Wasm-specific code has been separated out in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.xx"),", as a separate package next\nto the SC library. For Rust it is a little more complex, so it has been separated out to\na folder with the same name, followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"_main"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," file serves the same\nfunction as the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.xx")," file in the other languages."),(0,i.kt)("p",null,"The Wasm-specific code will also make sure that the WasmVMHost code will be pulled into\nthe Wasm code because that defines the missing import functions that will be provided\nby the Wasm VM host. In this way we manage to make WasmLib independent of the Wasm code\nformat as well. WasmLib defines an ",(0,i.kt)("inlineCode",{parentName:"p"},"ScHost")," interface that will define what host\nenvironment is used, which in this case is ",(0,i.kt)("inlineCode",{parentName:"p"},"WasmVMHost"),". For the client-side code we\nimplement a different ",(0,i.kt)("inlineCode",{parentName:"p"},"ScHost")," that hides the differences."),(0,i.kt)("p",null,"Here is the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"main.xx")," that forms the main entry point for the Wasm code:"),(0,i.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//go:build wasm\n// +build wasm\n\npackage main\n\nimport "github.com/iotaledger/wasp/packages/wasmvm/wasmvmhost/go/wasmvmhost"\n\nimport "github.com/iotaledger/wasp/contracts/wasm/dividend/go/dividend"\n\nfunc main() {\n}\n\nfunc init() {\n    wasmvmhost.ConnectWasmHost()\n}\n\n//export on_call\nfunc onCall(index int32) {\n    dividend.OnDispatch(index)\n}\n\n//export on_load\nfunc onLoad() {\n    dividend.OnDispatch(-1)\n}\n'))),(0,i.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use dividend::*;\nuse wasmvmhost::*;\n\n#[no_mangle]\nfn on_call(index: i32) {\n    WasmVmHost::connect();\n    on_dispatch(index);\n}\n\n#[no_mangle]\nfn on_load() {\n    WasmVmHost::connect();\n    on_dispatch(-1);\n}\n"))),(0,i.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmvmhost from "wasmvmhost";\nimport * as sc from "./dividend";\n\nexport function on_call(index: i32): void {\n    wasmvmhost.WasmVMHost.connect();\n    sc.onDispatch(index);\n}\n\nexport function on_load(): void {\n    wasmvmhost.WasmVMHost.connect();\n    sc.onDispatch(-1);\n}\n')))),(0,i.kt)("p",null,"Finally, here is an example implementation of a thunk function for the ",(0,i.kt)("inlineCode",{parentName:"p"},"setOwner()"),"\ncontract function. You can examine the other thunk functions that all follow the same\npattern in the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.xx"),":"),(0,i.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type SetOwnerContext struct {\n    Params  ImmutableSetOwnerParams\n    State   MutableDividendState\n}\n\nfunc funcSetOwnerThunk(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcSetOwner")\n    f := &SetOwnerContext{\n        Params: ImmutableSetOwnerParams{\n            proxy: wasmlib.NewParamsProxy(),\n        },\n        State: MutableDividendState{\n            proxy: wasmlib.NewStateProxy(),\n        },\n    }\n\n    // only defined owner of contract can change owner\n    access := f.State.Owner()\n    ctx.Require(access.Exists(), "access not set: owner")\n    ctx.Require(ctx.Caller() == access.Value(), "no permission")\n\n    ctx.Require(f.Params.Owner().Exists(), "missing mandatory owner")\n    funcSetOwner(ctx, f)\n    ctx.Log("dividend.funcSetOwner ok")\n}\n'))),(0,i.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct SetOwnerContext {\n    params: ImmutableSetOwnerParams,\n    state: MutableDividendState,\n}\n\nfn func_set_owner_thunk(ctx: &ScFuncContext) {\n    ctx.log("dividend.funcSetOwner");\n    let f = SetOwnerContext {\n        params: ImmutableSetOwnerParams { proxy: params_proxy() },\n        state: MutableDividendState { proxy: state_proxy() },\n    };\n\n    // only defined owner of contract can change owner\n    let access = f.state.owner();\n    ctx.require(access.exists(), "access not set: owner");\n    ctx.require(ctx.caller() == access.value(), "no permission");\n\n    ctx.require(f.params.owner().exists(), "missing mandatory owner");\n    func_set_owner(ctx, &f);\n    ctx.log("dividend.funcSetOwner ok");\n}\n'))),(0,i.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// this class is actually defined in contract.ts\nexport class SetOwnerContext {\n    params: sc.ImmutableSetOwnerParams = new sc.ImmutableSetOwnerParams(wasmlib.paramsProxy());\n    state: sc.MutableDividendState = new sc.MutableDividendState(wasmlib.ScState.proxy());\n}\n\nfunction funcSetOwnerThunk(ctx: wasmlib.ScFuncContext): void {\n    ctx.log("dividend.funcSetOwner");\n    let f = new sc.SetOwnerContext();\n\n    // only defined owner of contract can change owner\n    const access = f.state.owner();\n    ctx.require(access.exists(), "access not set: owner");\n    ctx.require(ctx.caller().equals(access.value()), "no permission");\n\n    ctx.require(f.params.owner().exists(), "missing mandatory owner");\n    sc.funcSetOwner(ctx, f);\n    ctx.log("dividend.funcSetOwner ok");\n}\n')))),(0,i.kt)("p",null,"First, the thunk logs the contract and function name to show that the call has started.\nThen it sets up a strongly typed function-specific context structure. First, we add the\nfunction-specific immutable ",(0,i.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/params"},"Params")," interface structure, which is only\npresent when the function actually can have parameters. Then we add the contract-specific\n",(0,i.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/state"},"State")," interface structure. In this case it is mutable because setOwner is a\n",(0,i.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/funcs"},"Func"),". For ",(0,i.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/views"},"Views")," this would be an immutable state interface.\nFinally, we would add the function-specific mutable ",(0,i.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/results"},"Results")," interface\nstructure, which is only present when the function actually returns results. Obviously,\nthis is not the case for this ",(0,i.kt)("inlineCode",{parentName:"p"},"setOwner()")," function."),(0,i.kt)("p",null,"Next it sets up access control for the function according to the schema definition file.\nIn this case it retrieves the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," state variable through the function context,\nrequires that the variable exists, and then requires that the ",(0,i.kt)("inlineCode",{parentName:"p"},"caller()")," of the function\nequals that value. Any failing requirement will panic out of the thunk function with an\nerror message. So this code makes sure that only the owner of the contract can call this\nfunction."),(0,i.kt)("p",null,"Now we get to the point where we can use the function-specific ",(0,i.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/params"},"Params"),"\ninterface to check for mandatory parameters. Each mandatory parameter is required to\nexist, or else we will panic out of the thunk function with an error message."),(0,i.kt)("p",null,"With the setup and automated checks completed, we now call the actual smart contract\nfunction implementation that is maintained by the user. After this function has completed,\nwe would process the returned results for those functions that have any (in this case we\nobviously don't have results), and finally we log that the contract function has completed\nsuccessfully. Remember that any error within the user function will cause a panic, so this\nlogging will never occur in case that happens."),(0,i.kt)("p",null,"In the next section we will look at the specifics of ",(0,i.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/views"},"view functions"),"."))}d.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),i=t(86010);const o="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),i=t(67294),o=t(86010),r=t(51048),s=t(33609),c=t(1943),u=t(72957);const l="tabList__CuJ",m="tabItem_LNqP";function p(e){var n;const{lazy:t,block:r,defaultValue:p,values:d,groupId:h,className:f}=e,w=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??w.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,s.l)(k,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===p?p:p??(null==(n=w.find((e=>e.props.default)))?void 0:n.props.value)??w[0].props.value;if(null!==x&&!k.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,c.U)(),[y,T]=(0,i.useState)(x),_=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==y&&k.some((n=>n.value===e))&&T(e)}const O=e=>{const n=e.currentTarget,t=_.indexOf(n),a=k[t].value;a!==y&&(S(n),T(a),null!=h&&v(h,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=_.indexOf(e.currentTarget)+1;t=_[n]??_[0];break}case"ArrowLeft":{const n=_.indexOf(e.currentTarget)-1;t=_[n]??_[_.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",l)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},k.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,key:n,ref:e=>_.push(e),onKeyDown:C,onFocus:O,onClick:O},r,{className:(0,o.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":y===n})}),t??n)}))),t?(0,i.cloneElement)(w.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},w.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==y})))))}function d(e){const n=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);