"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r=[{value:"API Reference",id:"api-reference",level:2},{value:"Examples",id:"examples",level:2},{value:"Install the library:",id:"install-the-library",level:2},{value:"Build",id:"build",level:2},{value:"Minimum Requirements",id:"minimum-requirements",level:2},{value:"NodeJS Usage",id:"nodejs-usage",level:2},{value:"Web Setup",id:"web-setup",level:2},{value:"Rollup",id:"rollup",level:3},{value:"Webpack",id:"webpack",level:3},{value:"Web Usage",id:"web-usage",level:3},{value:"Examples in the Wild",id:"examples-in-the-wild",level:2}],o={toc:r};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iota-identity-wasm"},"IOTA Identity WASM"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is the beta version of the official WASM bindings for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"IOTA Identity"),".")),(0,a.kt)("h2",{id:"api-reference"},(0,a.kt)("a",{parentName:"h2",href:"https://wiki.iota.org/identity.rs/libraries/wasm/api_reference"},"API Reference")),(0,a.kt)("h2",{id:"examples"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/README.md"},"Examples")),(0,a.kt)("h2",{id:"install-the-library"},"Install the library:"),(0,a.kt)("p",null,"Latest Release: this version matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch of this repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/identity-wasm@alpha\n")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("p",null,"Alternatively, you can build the bindings yourself if you have Rust installed. If not, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://rustup.rs"},"rustup.rs")," for the installation."),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rustwasm/wasm-bindgen"},(0,a.kt)("inlineCode",{parentName:"a"},"wasm-bindgen-cli")),". A manual installation is required because we use the ",(0,a.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-bindgen/reference/weak-references.html"},"Weak References")," feature, which ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rustwasm/wasm-pack/issues/930"},(0,a.kt)("inlineCode",{parentName:"a"},"wasm-pack")," does not expose"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install --force wasm-bindgen-cli\n")),(0,a.kt)("p",null,"Then, install the necessary dependencies using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,a.kt)("p",null,"and build the bindings for ",(0,a.kt)("inlineCode",{parentName:"p"},"node.js")," with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:nodejs\n")),(0,a.kt)("p",null,"or for the ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:web\n")),(0,a.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,a.kt)("p",null,"The minimum supported version for node is: ",(0,a.kt)("inlineCode",{parentName:"p"},"v16")),(0,a.kt)("h2",{id:"nodejs-usage"},"NodeJS Usage"),(0,a.kt)("p",null,"The following code creates a new IOTA DID Document suitable for publishing to a locally running private network.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/develop/how_tos/private_tangle"},"instructions")," on running your own private network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const {\n  KeyPair,\n  KeyType,\n  MethodScope,\n  IotaDocument,\n  IotaVerificationMethod,\n  IotaService,\n  MethodRelationship,\n  IotaIdentityClient,\n} = require(\'@iota/identity-wasm/node\');\nconst { Client } = require(\'@iota/client-wasm/node\');\n\n// The endpoint of the IOTA node to use.\nconst API_ENDPOINT = "http://127.0.0.1:14265";\n\n/** Demonstrate how to create a DID Document. */\nasync function main() {\n  // Create a new client with the given network endpoint.\n  const client = new Client({\n    primaryNode: API_ENDPOINT,\n    localPow: true,\n  });\n\n  const didClient = new IotaIdentityClient(client);\n\n  // Get the Bech32 human-readable part (HRP) of the network.\n  const networkHrp = await didClient.getNetworkHrp();\n\n  // Create a new DID document with a placeholder DID.\n  // The DID will be derived from the Alias Id of the Alias Output after publishing.\n  const document = new IotaDocument(networkHrp);\n\n  // Insert a new Ed25519 verification method in the DID document.\n  let keypair = new KeyPair(KeyType.Ed25519);\n  let method = new IotaVerificationMethod(\n    document.id(),\n    keypair.type(),\n    keypair.public(),\n    "#key-1"\n  );\n  document.insertMethod(method, MethodScope.VerificationMethod());\n\n  // Attach a new method relationship to the existing method.\n  document.attachMethodRelationship(\n    document.id().join("#key-1"),\n    MethodRelationship.Authentication\n  );\n\n  // Add a new Service.\n  const service = new IotaService({\n    id: document.id().join("#linked-domain"),\n    type: "LinkedDomains",\n    serviceEndpoint: "https://iota.org/",\n  });\n  document.insertService(service);\n\n  console.log(`Created document `, JSON.stringify(document.toJSON(), null, 2));\n}\n\nmain();\n')),(0,a.kt)("p",null,"which prints"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Created document  {\n  "doc": {\n    "id": "did:iota:0x0000000000000000000000000000000000000000000000000000000000000000",\n    "verificationMethod": [\n      {\n        "id": "did:iota:0x0000000000000000000000000000000000000000000000000000000000000000#key-1",\n        "controller": "did:iota:0x0000000000000000000000000000000000000000000000000000000000000000",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyMultibase": "z4SxypezRxr1YdMAJBePfHGxZ9hNZ53WVixZq3PbUcztW"\n      }\n    ],\n    "authentication": [\n      "did:iota:0x0000000000000000000000000000000000000000000000000000000000000000#key-1"\n    ],\n    "service": [\n      {\n        "id": "did:iota:0x0000000000000000000000000000000000000000000000000000000000000000#linked-domain",\n        "type": "LinkedDomains",\n        "serviceEndpoint": "https://iota.org/"\n      }\n    ]\n  },\n  "meta": {\n    "created": "2022-09-09T11:29:32Z",\n    "updated": "2022-09-09T11:29:32Z"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: see the ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/README.md"},"examples")," for how to publish an IOTA DID Document.")),(0,a.kt)("h2",{id:"web-setup"},"Web Setup"),(0,a.kt)("p",null,"The library loads the WASM file with an HTTP GET request, so the .wasm file must be copied to the root of the dist folder."),(0,a.kt)("h3",{id:"rollup"},"Rollup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"rollup-plugin-copy"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install rollup-plugin-copy --save-dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the copy plugin usage to the ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," array under ",(0,a.kt)("inlineCode",{parentName:"li"},"rollup.config.js"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Include the copy plugin\nimport copy from "rollup-plugin-copy";\n\n// Add the copy plugin to the `plugins` array of your rollup config:\ncopy({\n  targets: [\n    {\n      src: "node_modules/@iota/client-wasm/web/wasm/client_wasm_bg.wasm",\n      dest: "public",\n      rename: "client_wasm_bg.wasm",\n    },\n    {\n      src: "node_modules/@iota/identity-wasm/web/identity_wasm_bg.wasm",\n      dest: "public",\n      rename: "identity_wasm_bg.wasm",\n    },\n  ],\n});\n')),(0,a.kt)("h3",{id:"webpack"},"Webpack"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"copy-webpack-plugin"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install copy-webpack-plugin --save-dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Include the copy plugin\nconst CopyWebPlugin= require('copy-webpack-plugin');\n\n// Add the copy plugin to the `plugins` array of your webpack config:\n\nnew CopyWebPlugin({\n  patterns: [\n    {\n      from: 'node_modules/@iota/client-wasm/web/wasm/client_wasm_bg.wasm',\n      to: 'client_wasm_bg.wasm'\n    },\n    {\n      from: 'node_modules/@iota/identity-wasm/web/identity_wasm_bg.wasm',\n      to: 'identity_wasm_bg.wasm'\n    }\n  ]\n}),\n")),(0,a.kt)("h3",{id:"web-usage"},"Web Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as client from "@iota/client-wasm/web";\nimport * as identity from "@iota/identity-wasm/web";\n\n/** Demonstrate how to create a DID Document. */\nasync function createDocument() {\n  // Create a new client with the given network endpoint.\n  const iotaClient = new client.Client({\n    primaryNode: API_ENDPOINT,\n    localPow: true,\n  });\n\n  const didClient = new identity.IotaIdentityClient(iotaClient);\n\n  // Get the Bech32 human-readable part (HRP) of the network.\n  const networkHrp = await didClient.getNetworkHrp();\n\n  // Create a new DID document with a placeholder DID.\n  // The DID will be derived from the Alias Id of the Alias Output after publishing.\n  const document = new identity.IotaDocument(networkHrp);\n\n  // Insert a new Ed25519 verification method in the DID document.\n  let keypair = new identity.KeyPair(identity.KeyType.Ed25519);\n  let method = new identity.IotaVerificationMethod(\n    document.id(),\n    keypair.type(),\n    keypair.public(),\n    "#key-1"\n  );\n  document.insertMethod(method, identity.MethodScope.VerificationMethod());\n\n  // Attach a new method relationship to the existing method.\n  document.attachMethodRelationship(\n    document.id().join("#key-1"),\n    identity.MethodRelationship.Authentication\n  );\n\n  // Add a new Service.\n  const service = new identity.IotaService({\n    id: document.id().join("#linked-domain"),\n    type: "LinkedDomains",\n    serviceEndpoint: "https://iota.org/",\n  });\n  document.insertService(service);\n\n  console.log(`Created document `, JSON.stringify(document.toJSON(), null, 2));\n}\n\nclient\n  .init()\n  .then(() => identity.init())\n  .then(() => {\n    await createDocument();\n  });\n\n// or\n\n(async () => {\n  await client.init();\n  await identity.init();\n\n  await createDocument();\n})();\n\n// Default path is "identity_wasm_bg.wasm", but you can override it like this\nawait identity.init("./static/identity_wasm_bg.wasm");\n')),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"identity.init().then(<callback>)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"await identity.init()")," is required to load the Wasm file from the server if not available, because of that it will only be slow for the first time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: see the ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/README.md"},"examples")," for how to publish an IOTA DID Document.")),(0,a.kt)("h2",{id:"examples-in-the-wild"},"Examples in the Wild"),(0,a.kt)("p",null,"You may find it useful to see how the WASM bindings are being used in existing applications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK"},"Zebra IOTA Edge SDK")," (mobile apps using Capacitor.js + Svelte)")))}l.isMDXComponent=!0;const s={title:"Getting Started with WASM",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity WASM Library.",image:"/img/Identity_icon.png",keywords:["WASM","install","npm","yarn","build","nodejs","webpack"]},d=void 0,p={unversionedId:"libraries/wasm/getting_started",id:"libraries/wasm/getting_started",title:"Getting Started with WASM",description:"Getting started with the IOTA Identity WASM Library.",source:"@site/next/external/identity.rs/0.7-alpha/documentation/docs/libraries/wasm/getting_started.md",sourceDirName:"libraries/wasm",slug:"/libraries/wasm/getting_started",permalink:"/next/identity.rs/libraries/wasm/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/next/external/identity.rs/0.7-alpha/documentation/docs/libraries/wasm/getting_started.md",tags:[],version:"current",frontMatter:{title:"Getting Started with WASM",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity WASM Library.",image:"/img/Identity_icon.png",keywords:["WASM","install","npm","yarn","build","nodejs","webpack"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/next/identity.rs/libraries/rust/getting_started"},next:{title:"API Reference",permalink:"/next/identity.rs/libraries/wasm/api_reference"}},c={},u=r,m={toc:u};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"GettingStarted"}))}h.isMDXComponent=!0}}]);