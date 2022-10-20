"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={description:"The `accounts` contract keeps the ledger of on-chain accounts.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","accounts","deposit","withdraw","assets","balance","reference"]},i="The `accounts` Contract",l={unversionedId:"guide/core_concepts/core_contracts/accounts",id:"guide/core_concepts/core_contracts/accounts",title:"The `accounts` Contract",description:"The `accounts` contract keeps the ledger of on-chain accounts.",source:"@site/shimmer/external/wasp/documentation/docs/guide/core_concepts/core_contracts/accounts.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/accounts",permalink:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/accounts",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/core_concepts/core_contracts/accounts.md",tags:[],version:"current",frontMatter:{description:"The `accounts` contract keeps the ledger of on-chain accounts.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","accounts","deposit","withdraw","assets","balance","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `root` Contract",permalink:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/root"},next:{title:"The `blob` Contract",permalink:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blob"}},s={},u=[{value:"Entry Points",id:"entry-points",level:2},{value:"<code>deposit()</code>",id:"deposit",level:3},{value:"<code>withdraw()</code>",id:"withdraw",level:3},{value:"<code>transferAllowanceTo(a AgentID, c ForceOpenAccount)</code>",id:"transferallowancetoa-agentid-c-forceopenaccount",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>harvest(f ForceMinimumBaseTokens)</code>",id:"harvestf-forceminimumbasetokens",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>foundryCreateNew(t TokenScheme) s SerialNumber</code>",id:"foundrycreatenewt-tokenscheme-s-serialnumber",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>foundryModifySupply(s SerialNumber, d SupplyDeltaAbs, y DestroyTokens)</code>",id:"foundrymodifysupplys-serialnumber-d-supplydeltaabs-y-destroytokens",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>foundryDestroy(s SerialNumber)</code>",id:"foundrydestroys-serialnumber",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Views",id:"views",level:2},{value:"<code>balance(a AgentID)</code>",id:"balancea-agentid",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>balanceBaseToken(a AgentID)</code>",id:"balancebasetokena-agentid",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>balanceNativeToken(a AgentID, N TokenID)</code>",id:"balancenativetokena-agentid-n-tokenid",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>totalAssets()</code>",id:"totalassets",level:3},{value:"Returns",id:"returns-4",level:4},{value:"<code>accounts()</code>",id:"accounts",level:3},{value:"Returns",id:"returns-5",level:4},{value:"<code>getNativeTokenIDRegistry()</code>",id:"getnativetokenidregistry",level:3},{value:"Returns",id:"returns-6",level:4},{value:"<code>foundryOutput(s FoundrySerialNumber)</code>",id:"foundryoutputs-foundryserialnumber",level:3},{value:"Returns",id:"returns-7",level:4},{value:"<code>accountNFTs(a AgentID)</code>",id:"accountnftsa-agentid",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"<code>nftData(z NFTID)</code>",id:"nftdataz-nftid",level:3},{value:"Returns",id:"returns-9",level:4},{value:"<code>getAccountNonce(a AgentID)</code>",id:"getaccountnoncea-agentid",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Schemas",id:"schemas",level:2},{value:"<code>TokenID</code>",id:"tokenid",level:3},{value:"<code>NFTData</code>",id:"nftdata",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-accounts-contract"},"The ",(0,o.kt)("inlineCode",{parentName:"h1"},"accounts")," Contract"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," contract is one of the ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/overview"},"core contracts")," on each IOTA Smart Contracts\nchain."),(0,o.kt)("p",null,"This contract keeps a consistent ledger of on-chain accounts in its state,\ni.e. ",(0,o.kt)("a",{parentName:"p",href:"../accounts/how-accounts-work"},"the L2 ledger"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"entry-points"},"Entry Points"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," contract provides functions to deposit and withdraw tokens, information about the assets deposited on the\nchain, and the functionality to create and utilize foundries."),(0,o.kt)("h3",{id:"deposit"},(0,o.kt)("inlineCode",{parentName:"h3"},"deposit()")),(0,o.kt)("p",null,"A no-op that has the side effect of crediting any transferred tokens to the sender's account."),(0,o.kt)("admonition",{title:"Gas Fees",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"As with every call, the gas fee is debited from the L2 account right after executing the request.")),(0,o.kt)("h3",{id:"withdraw"},(0,o.kt)("inlineCode",{parentName:"h3"},"withdraw()")),(0,o.kt)("p",null,"Moves tokens from the caller's on-chain account to the caller's L1 address. The number of tokens to be withdrawn must be\nspecified via the allowance of the request."),(0,o.kt)("admonition",{title:"Storage Deposit",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"A call to withdraw means that a L1 output will be created. Because of this, the withdrawn amount must be able to cover\nthe L1 storage deposit. Otherwise, it will fail.")),(0,o.kt)("h3",{id:"transferallowancetoa-agentid-c-forceopenaccount"},(0,o.kt)("inlineCode",{parentName:"h3"},"transferAllowanceTo(a AgentID, c ForceOpenAccount)")),(0,o.kt)("p",null,"Moves the specified allowance from the sender's L2 account to the given L2 account on the chain."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a")," (",(0,o.kt)("inlineCode",{parentName:"li"},"AgentID"),"): The target L2 account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"c")," (optional ",(0,o.kt)("inlineCode",{parentName:"li"},"bool")," - default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"): If the target Agent ID doesn't have funds on the chain, ",(0,o.kt)("inlineCode",{parentName:"li"},"c = true")," specifies\nthat the account should be created. Otherwise, the call fails.")),(0,o.kt)("h3",{id:"harvestf-forceminimumbasetokens"},(0,o.kt)("inlineCode",{parentName:"h3"},"harvest(f ForceMinimumBaseTokens)")),(0,o.kt)("p",null,"Moves all tokens from the chain ",(0,o.kt)("a",{parentName:"p",href:"../accounts/the-common-account"},"common account")," to the sender's L2 account. The chain\nowner is the only one who can call this entry point."),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"f")," (optional ",(0,o.kt)("inlineCode",{parentName:"li"},"uint64")," - default: ",(0,o.kt)("inlineCode",{parentName:"li"},"MinimumBaseTokensOnCommonAccount"),"): Specifies the amount of base tokens to leave in\nthe common account.")),(0,o.kt)("h3",{id:"foundrycreatenewt-tokenscheme-s-serialnumber"},(0,o.kt)("inlineCode",{parentName:"h3"},"foundryCreateNew(t TokenScheme) s SerialNumber")),(0,o.kt)("p",null,"Creates a new foundry with the specified token scheme, and assigns the foundry to the sender."),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"t")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/token_scheme.go"},(0,o.kt)("inlineCode",{parentName:"a"},"iotago::TokenScheme")),"): The token scheme\nfor the new foundry.")),(0,o.kt)("p",null,"The storage deposit for the new foundry must be provided via allowance (only the minimum required will be used)."),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," (",(0,o.kt)("inlineCode",{parentName:"li"},"uint32"),"): The serial number of the newly created foundry")),(0,o.kt)("h3",{id:"foundrymodifysupplys-serialnumber-d-supplydeltaabs-y-destroytokens"},(0,o.kt)("inlineCode",{parentName:"h3"},"foundryModifySupply(s SerialNumber, d SupplyDeltaAbs, y DestroyTokens)")),(0,o.kt)("p",null,"Mints or destroys tokens for the given foundry, which must be controlled by the caller."),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," (",(0,o.kt)("inlineCode",{parentName:"li"},"uint32"),"): The serial number of the foundry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"d")," (positive ",(0,o.kt)("inlineCode",{parentName:"li"},"big.Int"),"): Amount to mint or destroy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y")," (optional ",(0,o.kt)("inlineCode",{parentName:"li"},"bool")," - default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"): Whether to destroy tokens (",(0,o.kt)("inlineCode",{parentName:"li"},"true"),") or not (",(0,o.kt)("inlineCode",{parentName:"li"},"false"),").")),(0,o.kt)("p",null,"When minting new tokens, the storage deposit for the new output must be provided via an allowance."),(0,o.kt)("p",null,"When destroying tokens, the tokens to be destroyed must be provided via an allowance."),(0,o.kt)("h3",{id:"foundrydestroys-serialnumber"},(0,o.kt)("inlineCode",{parentName:"h3"},"foundryDestroy(s SerialNumber)")),(0,o.kt)("p",null,"Destroys a given foundry output on L1, reimbursing the storage deposit to the caller. The foundry must be owned by the\ncaller."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This operation cannot be reverted.")),(0,o.kt)("h4",{id:"parameters-4"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," (",(0,o.kt)("inlineCode",{parentName:"li"},"uint32"),"): The serial number of the foundry.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"views"},"Views"),(0,o.kt)("h3",{id:"balancea-agentid"},(0,o.kt)("inlineCode",{parentName:"h3"},"balance(a AgentID)")),(0,o.kt)("p",null,"Returns the fungible tokens owned by the given Agent ID on the chain."),(0,o.kt)("h4",{id:"parameters-5"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a")," (",(0,o.kt)("inlineCode",{parentName:"li"},"AgentID"),"): The account Agent ID.")),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,"A map of ",(0,o.kt)("a",{parentName:"p",href:"#tokenid"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenID"))," => ",(0,o.kt)("inlineCode",{parentName:"p"},"big.Int"),". An empty token ID (a string of zero length) represents the L1 base token."),(0,o.kt)("h3",{id:"balancebasetokena-agentid"},(0,o.kt)("inlineCode",{parentName:"h3"},"balanceBaseToken(a AgentID)")),(0,o.kt)("p",null,"Returns the amount of base tokens owned by any AgentID ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," on the chain."),(0,o.kt)("h4",{id:"parameters-6"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a")," (",(0,o.kt)("inlineCode",{parentName:"li"},"AgentID"),"): The account Agent ID.")),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"B")," (",(0,o.kt)("inlineCode",{parentName:"li"},"uint64"),"): The amount of base tokens in the account.")),(0,o.kt)("h3",{id:"balancenativetokena-agentid-n-tokenid"},(0,o.kt)("inlineCode",{parentName:"h3"},"balanceNativeToken(a AgentID, N TokenID)")),(0,o.kt)("p",null,"Returns the amount of native tokens with Token ID ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," owned by any AgentID ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"  on the chain."),(0,o.kt)("h4",{id:"parameters-7"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a")," (",(0,o.kt)("inlineCode",{parentName:"li"},"AgentID"),"): The account Agent ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"N")," (",(0,o.kt)("a",{parentName:"li",href:"#tokenid"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenID")),"): The Token ID.")),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"B")," (",(0,o.kt)("inlineCode",{parentName:"li"},"big.Int"),"): The amount of native tokens in the account.")),(0,o.kt)("h3",{id:"totalassets"},(0,o.kt)("inlineCode",{parentName:"h3"},"totalAssets()")),(0,o.kt)("p",null,"Returns the sum of all fungible tokens controlled by the chain."),(0,o.kt)("h4",{id:"returns-4"},"Returns"),(0,o.kt)("p",null,"A map of ",(0,o.kt)("a",{parentName:"p",href:"#tokenid"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenID"))," => ",(0,o.kt)("inlineCode",{parentName:"p"},"big.Int"),". An empty token ID (a string of zero length) represents the L1 base token."),(0,o.kt)("h3",{id:"accounts"},(0,o.kt)("inlineCode",{parentName:"h3"},"accounts()")),(0,o.kt)("p",null,"Returns a list of all agent IDs that own assets on the chain."),(0,o.kt)("h4",{id:"returns-5"},"Returns"),(0,o.kt)("p",null,"A map of ",(0,o.kt)("inlineCode",{parentName:"p"},"AgentiD")," => ",(0,o.kt)("inlineCode",{parentName:"p"},"0xff"),"."),(0,o.kt)("h3",{id:"getnativetokenidregistry"},(0,o.kt)("inlineCode",{parentName:"h3"},"getNativeTokenIDRegistry()")),(0,o.kt)("p",null,"Returns a list of all native tokenIDs that are owned by the chain."),(0,o.kt)("h4",{id:"returns-6"},"Returns"),(0,o.kt)("p",null,"A map of ",(0,o.kt)("a",{parentName:"p",href:"#tokenid"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenID"))," => ",(0,o.kt)("inlineCode",{parentName:"p"},"0xff")),(0,o.kt)("h3",{id:"foundryoutputs-foundryserialnumber"},(0,o.kt)("inlineCode",{parentName:"h3"},"foundryOutput(s FoundrySerialNumber)")),(0,o.kt)("p",null,"Returns the output corresponding to the foundry with Serial Number ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,o.kt)("h4",{id:"returns-7"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"b"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/output_foundry.go"},(0,o.kt)("inlineCode",{parentName:"a"},"iotago::FoundryOutput")))),(0,o.kt)("h3",{id:"accountnftsa-agentid"},(0,o.kt)("inlineCode",{parentName:"h3"},"accountNFTs(a AgentID)")),(0,o.kt)("p",null,"Returns the NFT IDs for all NFTs owned by the given account."),(0,o.kt)("h4",{id:"parameters-8"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a")," (",(0,o.kt)("inlineCode",{parentName:"li"},"AgentID"),"): The account Agent ID")),(0,o.kt)("h4",{id:"returns-8"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,o.kt)("inlineCode",{parentName:"a"},"Array16")),"\nof ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/output_nft.go"},(0,o.kt)("inlineCode",{parentName:"a"},"iotago::NFTID")),"): The NFT IDs owned by the\naccount")),(0,o.kt)("h3",{id:"nftdataz-nftid"},(0,o.kt)("inlineCode",{parentName:"h3"},"nftData(z NFTID)")),(0,o.kt)("p",null,"Returns the data for a given NFT with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"z")," that is on the chain."),(0,o.kt)("h4",{id:"returns-9"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"e"),": ",(0,o.kt)("a",{parentName:"li",href:"#nftdata"},(0,o.kt)("inlineCode",{parentName:"a"},"NFTData")))),(0,o.kt)("h3",{id:"getaccountnoncea-agentid"},(0,o.kt)("inlineCode",{parentName:"h3"},"getAccountNonce(a AgentID)")),(0,o.kt)("p",null,"Returns the current account nonce for a give AgentID ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),".\nThe account nonce is used to issue off-ledger requests."),(0,o.kt)("h4",{id:"parameters-9"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"a")," (",(0,o.kt)("inlineCode",{parentName:"li"},"AgentID"),"): The account Agent ID.")),(0,o.kt)("h4",{id:"returns-10"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n")," (",(0,o.kt)("inlineCode",{parentName:"li"},"uint64"),"): The account nonce.")),(0,o.kt)("h2",{id:"schemas"},"Schemas"),(0,o.kt)("h3",{id:"tokenid"},(0,o.kt)("inlineCode",{parentName:"h3"},"TokenID")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TokenID = [38]byte\n")),(0,o.kt)("h3",{id:"nftdata"},(0,o.kt)("inlineCode",{parentName:"h3"},"NFTData")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NFTData")," is encoded as the concatenation of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The issuer (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/address.go"},(0,o.kt)("inlineCode",{parentName:"a"},"iotago::Address")),")."),(0,o.kt)("li",{parentName:"ul"},"The NFT metadata: the length (",(0,o.kt)("inlineCode",{parentName:"li"},"uint16"),") followed by the data bytes."),(0,o.kt)("li",{parentName:"ul"},"The NFT owner (",(0,o.kt)("inlineCode",{parentName:"li"},"AgentID"),").")))}d.isMDXComponent=!0}}]);