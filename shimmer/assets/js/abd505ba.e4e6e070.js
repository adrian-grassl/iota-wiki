"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,u=m["".concat(l,".").concat(g)]||m[g]||h[g]||r;return n?o.createElement(u,s(s({ref:t},p),{},{components:n})):o.createElement(u,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={description:"Example of a _Solo_ test. It deploys a new chain and invokes some view calls.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","solo","example","new chain","how-to"]},s="First Example",i={unversionedId:"guide/solo/first-example",id:"guide/solo/first-example",title:"First Example",description:"Example of a _Solo_ test. It deploys a new chain and invokes some view calls.",source:"@site/shimmer/external/wasp/documentation/docs/guide/solo/first-example.md",sourceDirName:"guide/solo",slug:"/guide/solo/first-example",permalink:"/shimmer/smart-contracts/guide/solo/first-example",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/solo/first-example.md",tags:[],version:"current",frontMatter:{description:"Example of a _Solo_ test. It deploys a new chain and invokes some view calls.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","solo","example","new chain","how-to"]},sidebar:"tutorialSidebar",previous:{title:"Testing Smart Contracts with Solo",permalink:"/shimmer/smart-contracts/guide/solo/what-is-solo"},next:{title:"The L1 Ledger",permalink:"/shimmer/smart-contracts/guide/solo/the-l1-ledger"}},l={},c=[],p={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"first-example"},"First Example"),(0,a.kt)("p",null,"The following is an example of a ",(0,a.kt)("em",{parentName:"p"},"Solo")," test. It deploys a new chain and invokes some view calls in the\n",(0,a.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/root"},(0,a.kt)("inlineCode",{parentName:"a"},"root"))," and ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/governance"},(0,a.kt)("inlineCode",{parentName:"a"},"governance")),"\n",(0,a.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/overview"},"core contracts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "testing"\n\n    "github.com/iotaledger/wasp/packages/solo"\n    "github.com/iotaledger/wasp/packages/vm/core/corecontracts"\n    "github.com/stretchr/testify/require"\n)\n\nfunc TestTutorialFirst(t *testing.T) {\n    env := solo.New(t)\n    chain := env.NewChain()\n\n    // calls views governance::ViewGetChainInfo and root:: ViewGetContractRecords\n    chainID, chainOwnerID, coreContracts := chain.GetInfo()\n    // assert that all core contracts are deployed\n    require.EqualValues(t, len(corecontracts.All), len(coreContracts))\n\n    t.Logf("chain ID: %s", chainID.String())\n    t.Logf("chain owner ID: %s", chainOwnerID.String())\n    for hname, rec := range coreContracts {\n        t.Logf("    Core contract %q: %s", rec.Name, hname)\n    }\n}\n')),(0,a.kt)("p",null,"The output of the test will be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},'=== RUN   TestTutorialFirst\n29:43.383770108 INFO    TestTutorialFirst.db    dbmanager/dbmanager.go:64   creating new in-memory database for: CHAIN_REGISTRY\n29:43.383957435 INFO    TestTutorialFirst   solo/solo.go:162    Solo environment has been created: logical time: 00:01.001000000, time step: 1ms\n29:43.384671943 INFO    TestTutorialFirst   solo/solo.go:236    deploying new chain \'tutorial1\'. ID: tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd, state controller address: tgl1qpk70349ftcpvlt6lnn0437p63wt7w2ejvlkw93wkkt0kc39f2wpvuv73ea\n29:43.384686865 INFO    TestTutorialFirst   solo/solo.go:238        chain \'tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd\'. state controller address: tgl1qpk70349ftcpvlt6lnn0437p63wt7w2ejvlkw93wkkt0kc39f2wpvuv73ea\n29:43.384698704 INFO    TestTutorialFirst   solo/solo.go:239        chain \'tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd\'. originator address: tgl1qq93jh7dsxq3lznajgtq33v26rt0pz0rs0rwar4jahahp6h2hh9jy4nc52k\n29:43.384709967 INFO    TestTutorialFirst.db    dbmanager/dbmanager.go:64   creating new in-memory database for: tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd\n29:43.384771911 INFO    TestTutorialFirst   solo/solo.go:244        chain \'tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd\'. origin state commitment: c4f09061cd63ea506f89b7cbb3c6e0984f124158\n29:43.417023624 INFO    TestTutorialFirst   solo/solo.go:171    solo publisher: state [tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd 1 1 0-6c7ff6bc5aaa3af12f9b6b7c43dcf557175ac251418df562f7ec4ff092e84d4f 0000000000000000000000000000000000000000000000000000000000000000]\n29:43.417050354 INFO    TestTutorialFirst   solo/solo.go:171    solo publisher: request_out [tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd 0-11232aa47639429b83faf79547c6bf615bd65aa461f243c89e4073b792ac89b7 1 1]\n29:43.417056290 INFO    TestTutorialFirst.tutorial1 solo/run.go:156 state transition --\x3e #1. Requests in the block: 1. Outputs: 1\n29:43.417179099 INFO    TestTutorialFirst.tutorial1 solo/run.go:176 REQ: \'tx/0-11232aa47639429b83faf79547c6bf615bd65aa461f243c89e4073b792ac89b7\'\n29:43.417196814 INFO    TestTutorialFirst.tutorial1 solo/solo.go:301    chain \'tutorial1\' deployed. Chain ID: tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd\n    tutorial_test.go:20: chain ID: tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd\n    tutorial_test.go:21: chain owner ID: tgl1qq93jh7dsxq3lznajgtq33v26rt0pz0rs0rwar4jahahp6h2hh9jy4nc52k\n    tutorial_test.go:23:     Core contract "blob": fd91bc63\n    tutorial_test.go:23:     Core contract "governance": 17cf909f\n    tutorial_test.go:23:     Core contract "errors": 8f3a8bb3\n    tutorial_test.go:23:     Core contract "evm": 07cb02c1\n    tutorial_test.go:23:     Core contract "accounts": 3c4b5e02\n    tutorial_test.go:23:     Core contract "root": cebf5908\n    tutorial_test.go:23:     Core contract "blocklog": f538ef2b\n--- PASS: TestTutorialFirst (0.03s)\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The example uses ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stretchr/testify"},(0,a.kt)("inlineCode",{parentName:"a"},"stretchr/testify"))," for assertions, but it is not strictly\nrequired."),(0,a.kt)("li",{parentName:"ul"},"Addresses, chain IDs and other hashes should be the same on each run of the test because Solo uses a constant seed by\ndefault."),(0,a.kt)("li",{parentName:"ul"},"The timestamps shown in the log come from the computer's timer, but the Solo environment operates on its own logical\ntime."))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/overview"},"core contracts")," listed in the log are automatically deployed on each\nnew chain. The log also shows their ",(0,a.kt)("em",{parentName:"p"},"contract IDs"),"."),(0,a.kt)("p",null,"The output fragment in the log ",(0,a.kt)("inlineCode",{parentName:"p"},"state transition --\x3e #1")," means that the state of the chain has changed from block index\n0 (the origin index of the empty state) to block index 1. State #0 is the empty origin state, and #1 always contains all\ncore smart contracts deployed on the chain, as well as other data internal to the chain itself, such as the ",(0,a.kt)("em",{parentName:"p"},"chainID"),"\nand the ",(0,a.kt)("em",{parentName:"p"},"chain owner ID"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"chain ID")," and ",(0,a.kt)("em",{parentName:"p"},"chain owner ID")," are, respectively, the ID of the deployed chain, and the address of the L1 account\nthat triggered the deployment of the chain (which is automatically generated by Solo in our example, but it can be\noverridden when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"env.NewChain"),")."))}h.isMDXComponent=!0}}]);