"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),i=n(34259),r=n(18679);const s={keywords:["testing","colored tokens","time locks","solo","plain iotas","balance","mint","delay"],description:"You can post a time-locked request by using the Delay() method. You can mint NFTs by using the MintNFT() method.",image:"/img/logo/WASP_logo_dark.png"},l="Minting NFTs and Time Locks",u={unversionedId:"guide/wasm_vm/timelock",id:"guide/wasm_vm/timelock",title:"Minting NFTs and Time Locks",description:"You can post a time-locked request by using the Delay() method. You can mint NFTs by using the MintNFT() method.",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/timelock.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/timelock",permalink:"/next/smart-contracts/guide/wasm_vm/timelock",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/timelock.mdx",tags:[],version:"current",frontMatter:{keywords:["testing","colored tokens","time locks","solo","plain iotas","balance","mint","delay"],description:"You can post a time-locked request by using the Delay() method. You can mint NFTs by using the MintNFT() method.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Example Tests",permalink:"/next/smart-contracts/guide/wasm_vm/examples"},next:{title:"EVM/Solidity Based Smart Contracts",permalink:"/next/smart-contracts/guide/evm/introduction"}},c={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"minting-nfts-and-time-locks"},"Minting NFTs and Time Locks"),(0,o.kt)("p",null,"Let's examine some less commonly used member functions of the SoloContext. We will switch\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"fairauction")," example to show their usage. Here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"startAuction()")," function of\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"fairauction")," test suite:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    description = "Cool NFTs for sale!"\n    deposit     = uint64(1000)\n    minBid      = uint64(500)\n)\n\nfunc startAuction(t *testing.T) (*wasmsolo.SoloContext, *wasmsolo.SoloAgent, wasmtypes.ScNftID) {\n    ctx := wasmsolo.NewSoloContext(t, fairauction.ScName, fairauction.OnDispatch)\n    auctioneer := ctx.NewSoloAgent()\n    nftID := ctx.MintNFT(auctioneer, []byte("NFT metadata"))\n    require.NoError(t, ctx.Err)\n\n    // start the auction\n    sa := fairauction.ScFuncs.StartAuction(ctx.Sign(auctioneer))\n    sa.Params.MinimumBid().SetValue(minBid)\n    sa.Params.Description().SetValue(description)\n    transfer := wasmlib.NewScTransferBaseTokens(deposit) // deposit, must be >=minimum*margin\n    transfer.AddNFT(&nftID)\n    sa.Func.Transfer(transfer).Post()\n    require.NoError(t, ctx.Err)\n\n    return ctx, auctioneer, nftID\n}\n')))),(0,o.kt)("p",null,"The function first sets up the SoloContext as usual, and then it performs quite a bit of\nextra work. This is because we want the startAuction() function to start an auction, so\nthat the tests that subsequently use startAuction() can then focus on testing all kinds of\nbidding and auction results."),(0,o.kt)("p",null,"First, we are going to need an agent that functions as the ",(0,o.kt)("inlineCode",{parentName:"p"},"auctioneer"),". This auctioneer\nwill auction off an NFT. To provide the auctioneer with this NFT we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"MintNFT()"),"\nmethod to mint a fresh NFT into his account. The minting process will assign a unique NFT\nID. Of course, we check that no error occurred during the minting process."),(0,o.kt)("p",null,"Now we are going to start the auction by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"startAuction")," function of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"fairauction")," contract. We get the function descriptor in the usual way, but we also call\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign()")," method of the SoloContext to make sure that the transaction we are about to\npost takes its assets from the auctioneer address, and the transaction will be signed with\nthe corresponding private key. Very often you won't care who posts a request, and we have\nset it up in such a way that by default tokens come from the chain originator address,\nwhich has been seeded with tokens just for this occasion. But whenever it is important\nwhere the tokens come from, or who invokes the request, you need to specify the agent\ninvolved by using the Sign() method."),(0,o.kt)("p",null,"Next we set up the function parameters as usual. After the parameters have been set up, we\nsee something new happening. We create an ",(0,o.kt)("inlineCode",{parentName:"p"},"ScTransfer")," proxy and initialize it with the\nbase tokens that we need to deposit, plus the freshly minted NFT that we are auctioning.\nNext we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer()")," method to pass this proxy before posting the request. This is\nexactly how we would do it from within the smart contract code. Note that the function\n",(0,o.kt)("inlineCode",{parentName:"p"},"NewScTransferBaseTokens()")," is used as a shorthand to immediately initialize the new\n",(0,o.kt)("inlineCode",{parentName:"p"},"ScTransfer")," proxy with the desired amount of base tokens."),(0,o.kt)("p",null,"Finally, we make sure there was no error after posting the request and return the\nSoloContext, ",(0,o.kt)("inlineCode",{parentName:"p"},"auctioneer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nftID"),". That concludes the startAuction() function."),(0,o.kt)("p",null,"Here is the first test function that uses our startAuction() function:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestStartAuction(t *testing.T) {\n    ctx, auctioneer, nftID := startAuction(t)\n\n    nfts := ctx.Chain.L2NFTs(auctioneer.AgentID())\n    require.Len(t, nfts, 0)\n    nfts = ctx.Chain.L2NFTs(ctx.Account().AgentID())\n    require.Len(t, nfts, 1)\n    require.Equal(t, nftID, ctx.Cvt.ScNftID(&nfts[0]))\n\n    // remove pending finalize_auction from backlog\n    ctx.AdvanceClockBy(61 * time.Minute)\n    require.True(t, ctx.WaitForPendingRequests(1))\n}\n")))),(0,o.kt)("p",null,"This test function checks that the NFT was moved by ",(0,o.kt)("inlineCode",{parentName:"p"},"startAuction")," from the auctioneer's\non-chain account to the chain's on-chain account."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"startAuction")," function of the smart contract will also have posted a time-locked\nrequest to the ",(0,o.kt)("inlineCode",{parentName:"p"},"finalizeAuction")," function by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Delay()")," method. Therefore, we\nneed to remove the pending ",(0,o.kt)("inlineCode",{parentName:"p"},"finalizeAuction")," request from the backlog."),(0,o.kt)("p",null,"First we move the logical clock forward to a point in time when that request is supposed\nto have been triggered. Then we wait for this request to actually be processed. Note that\nthis will happen in a separate goroutine in the background, so we explicitly wait for the\nrequest counters to catch up with the one request that is pending."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitForPendingRequests()")," method can also be used whenever a smart contract function\nis known to ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/post"},(0,o.kt)("inlineCode",{parentName:"a"},"post()"))," a request to itself. Such requests are not immediately\nexecuted, but added to the backlog, so you need to wait for these pending requests to\nactually be processed. The advantage of having to explicitly wait for those requests is\nthat you can inspect the in-between state, which means that you can test even a function\nthat posts a request in isolation."))}d.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),o=n(67294),i=n(86010),r=n(51048),s=n(33609),l=n(1943),u=n(72957);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:d,groupId:h,className:f}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(w,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!w.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,l.U)(),[T,N]=(0,o.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==T&&w.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),a=w[n].value;a!==T&&(C(t),N(a),null!=h&&v(h,String(a)))},q=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},w.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:q,onFocus:S,onClick:S},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);