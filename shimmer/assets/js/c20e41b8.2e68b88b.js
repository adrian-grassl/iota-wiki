"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(a),p=n,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return a?r.createElement(h,c(c({ref:t},u),{},{components:a})):r.createElement(h,c({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=a[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(34259),c=a(18679);const l={description:"The `withdraw` endpoint sends L2 funds owned by the caller to their L1 address.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","withdraw","transfer","chain","Rust","Solo","how to"]},s="How to Withdraw From a Chain",i={unversionedId:"guide/core_concepts/accounts/how-to-withdraw-from-a-chain",id:"guide/core_concepts/accounts/how-to-withdraw-from-a-chain",title:"How to Withdraw From a Chain",description:"The `withdraw` endpoint sends L2 funds owned by the caller to their L1 address.",source:"@site/shimmer/external/wasp/documentation/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-withdraw-from-a-chain",permalink:"/shimmer/smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain.mdx",tags:[],version:"current",frontMatter:{description:"The `withdraw` endpoint sends L2 funds owned by the caller to their L1 address.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","withdraw","transfer","chain","Rust","Solo","how to"]},sidebar:"tutorialSidebar",previous:{title:"How to Deposit to a Chain",permalink:"/shimmer/smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain"},next:{title:"View Account Balances",permalink:"/shimmer/smart-contracts/guide/core_concepts/accounts/view-account-balances"}},u={},d=[],m={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-withdraw-from-a-chain"},"How to Withdraw From a Chain"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"withdraw")," endpoint sends L2 funds owned by the caller to their L1 address."),(0,n.kt)(o.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"solo",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain to wallet\nreq := solo.NewCallParams(accounts.Contract.Name, accounts.FuncWithdraw.Name)\n_, err := chain.PostRequestSync(req.WithMaxAffordableGasBudget(), wallet)\nrequire.NoError(t, err)\n"))),(0,n.kt)(c.Z,{value:"soloctx",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain *chainID* to wallet\nw := coreaccounts.ScFuncs.Withdraw(ctx.Sign(wallet))\nw.Func.TransferBaseTokens(1).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,n.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"// withdraw from chain *chainID* to current common account\n// (there is no way to specify hname for withdrawals)\nlet w = coreaccounts::ScFuncs::withdraw(ctx);\nw.func.transfer_base_tokens(1).post_to_chain(chainID);\n"))),(0,n.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain *chainID* to current common account\n// (there is no way to specify hname for withdrawals)\nw := coreaccounts.ScFuncs.Withdraw(ctx)\nw.Func.TransferBaseTokens(1).PostToChain(chainID)\n")))))}p.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:a,className:c}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,c),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(87462),n=a(67294),o=a(86010),c=a(51048),l=a(33609),s=a(1943),i=a(72957);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:c,defaultValue:m,values:p,groupId:h,className:w}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[T,x]=(0,n.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=h){const e=y[h];null!=e&&e!==T&&b.some((t=>t.value===e))&&x(e)}const _=e=>{const t=e.currentTarget,a=O.indexOf(t),r=b[a].value;r!==T&&(N(t),x(r),null!=h&&k(h,String(r)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},w)},b.map((e=>{let{value:t,label:a,attributes:c}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:_,onClick:_},c,{className:(0,o.Z)("tabs__item",d,null==c?void 0:c.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,c.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}}}]);