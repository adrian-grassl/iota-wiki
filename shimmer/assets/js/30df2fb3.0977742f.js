"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[16972],{7525:(e,n,t)=>{t.d(n,{ZP:()=>i});var o=t(87462),a=(t(67294),t(3905));const r={toc:[]};function i(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Dotenv",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}i.isMDXComponent=!0},43221:(e,n,t)=>{t.d(n,{ZP:()=>i});var o=t(87462),a=(t(67294),t(3905));const r={toc:[]};function i(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Iota.js",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also find this guide in the native ",(0,a.kt)("a",{href:t.exampleURL}," iota.js library"))))}i.isMDXComponent=!0},57593:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>S,contentTitle:()=>I,default:()=>Z,frontMatter:()=>N,metadata:()=>R,toc:()=>M});var o=t(87462),a=(t(67294),t(3905)),r=t(34259),i=t(18679),s=t(69319);const l={toc:[]};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{className:"language-java",mdxType:"CodeBlock"},'package node_api_core;\n\nimport org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.ClientException;\nimport org.iota.types.responses.NodeInfoResponse;\n\npublic class GetInfo {\n    public static void main(String[] args) throws ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Get the node information for a given node.\n        NodeInfoResponse response = client.getNodeInfo();\n\n        // Print the URL of the node that was requested.\n        System.out.println(response.getNodeUrl());\n\n        // Print the node information for the requested node.\n        System.out.println(response.getNodeInfo());\n    }\n}'))}c.isMDXComponent=!0;const p={toc:[]};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "HORNET",\n  "version": "2.0.0-beta.5",\n  "status": {\n    "isHealthy": true,\n    "latestMilestone": {\n      "index": 747006,\n      "timestamp": 1661869119,\n      "milestoneId": "0x34559d7ba255d1b1127529cf4e28ccc9d5a8da4fcc811d465a8fce8107a0ef53"\n    },\n    "confirmedMilestone": {\n      "index": 747006,\n      "timestamp": 1661869119,\n      "milestoneId": "0x34559d7ba255d1b1127529cf4e28ccc9d5a8da4fcc811d465a8fce8107a0ef53"\n    },\n    "pruningIndex": 0\n  },\n  "supportedProtocolVersions": [\n    2\n  ],\n  "protocol": {\n    "version": 2,\n    "networkName": "testnet",\n    "bech32Hrp": "rms",\n    "minPowScore": 1500.0,\n    "rentStructure": {\n      "vByteCost": 100,\n      "vByteFactorKey": 10,\n      "vByteFactorData": 1\n    },\n    "tokenSupply": "1450896407249092"\n  },\n  "pendingProtocolParameters": [\n\n  ],\n  "baseToken": {\n    "name": "Shimmer",\n    "tickerSymbol": "SMR",\n    "unit": "SMR",\n    "subunit": "glow",\n    "decimals": 6,\n    "useMetricPrefix": false\n  },\n  "metrics": {\n    "blocksPerSecond": 9.0,\n    "referencedBlocksPerSecond": 8.6,\n    "referencedRate": 95.55555555555556\n  },\n  "features": [\n\n  ]\n}\n')))}m.isMDXComponent=!0;const d={toc:[]};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/00_get_info.js\n\n// In this example we will get information about the node\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n        localPow: true,\n    });\n\n    try {\n        const nodeInfo = await client.getInfo();\n        console.log('Node info: ', nodeInfo);\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n\n// Example output:\n// Node info:  {\n//     nodeInfo: {\n//       name: 'HORNET',\n//       version: '2.0.0-alpha.25',\n//       status: {\n//         isHealthy: true,\n//         latestMilestone: [Object],\n//         confirmedMilestone: [Object],\n//         pruningIndex: 0\n//       },\n//       supportedProtocolVersions: [ 2 ],\n//       protocol: {\n//         version: 2,\n//         networkName: 'dummy-1',\n//         bech32Hrp: 'rms',\n//         minPowScore: 1500,\n//         rentStructure: [Object],\n//         tokenSupply: '1450896407249092'\n//       },\n//       pendingProtocolParameters: [],\n//       baseToken: {\n//         name: 'Shimmer',\n//         tickerSymbol: 'SMR',\n//         unit: 'SMR',\n//         subunit: 'glow',\n//         decimals: 6,\n//         useMetricPrefix: false\n//       },\n//       metrics: {\n//         blocksPerSecond: 1.2,\n//         referencedBlocksPerSecond: 1.2,\n//         referencedRate: 100\n//       },\n//       features: []\n//     },\n//     url: 'https://api.testnet.shimmer.network'\n// }\n"),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,a.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/00_get_info.js"))}u.isMDXComponent=!0;const h={toc:[]};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"Node info:  {\n  nodeInfo: {\n    name: 'HORNET',\n    version: '2.0.0-beta.5',\n    status: {\n      isHealthy: true,\n      latestMilestone: [Object],\n      confirmedMilestone: [Object],\n      pruningIndex: 0\n    },\n    supportedProtocolVersions: [ 2 ],\n    protocol: {\n      version: 2,\n      networkName: 'testnet',\n      bech32Hrp: 'rms',\n      minPowScore: 1500,\n      rentStructure: [Object],\n      tokenSupply: '1450896407249092'\n    },\n    pendingProtocolParameters: [],\n    baseToken: {\n      name: 'Shimmer',\n      tickerSymbol: 'SMR',\n      unit: 'SMR',\n      subunit: 'glow',\n      decimals: 6,\n      useMetricPrefix: false\n    },\n    metrics: {\n      blocksPerSecond: 10.4,\n      referencedBlocksPerSecond: 10,\n      referencedRate: 96.15384615384616\n    },\n    features: []\n  },\n  url: 'https://api.testnet.shimmer.network'\n}\n")))}f.isMDXComponent=!0;const k={toc:[]};function b(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\n# Get the node info\nnode_info = client.get_info()\nprint(f'{node_info}')\n"),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,a.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 00_get_info.py"))}b.isMDXComponent=!0;const g={toc:[]};function y(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  'nodeInfo': {\n    'name': 'HORNET',\n    'version': '2.0.0-beta.5',\n    'status': {\n      'isHealthy': True,\n      'latestMilestone': {\n        'index': 746844,\n        'timestamp': 1661868309,\n        'milestoneId': '0xee26fb7ff5b4bed7b89a761ca3d75a9c99f8c4589e55d3ec0598c9a37717a61b'\n      },\n      'confirmedMilestone': {\n        'index': 746844,\n        'timestamp': 1661868309,\n        'milestoneId': '0xee26fb7ff5b4bed7b89a761ca3d75a9c99f8c4589e55d3ec0598c9a37717a61b'\n      },\n      'pruningIndex': 0\n    },\n    'supportedProtocolVersions': [\n      2\n    ],\n    'protocol': {\n      'version': 2,\n      'networkName': 'testnet',\n      'bech32Hrp': 'rms',\n      'minPowScore': 1500.0,\n      'rentStructure': {\n        'vByteCost': 100,\n        'vByteFactorKey': 10,\n        'vByteFactorData': 1\n      },\n      'tokenSupply': '1450896407249092'\n    },\n    'pendingProtocolParameters': [\n      \n    ],\n    'baseToken': {\n      'name': 'Shimmer',\n      'tickerSymbol': 'SMR',\n      'unit': 'SMR',\n      'subunit': 'glow',\n      'decimals': 6,\n      'useMetricPrefix': False\n    },\n    'metrics': {\n      'blocksPerSecond': 9.8,\n      'referencedBlocksPerSecond': 8.4,\n      'referencedRate': 85.71428571428571\n    },\n    'features': [\n      \n    ]\n  },\n  'url': 'https://api.testnet.shimmer.network'\n}\n")))}y.isMDXComponent=!0;var v=t(7525);const _={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function w(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(v.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Calls `GET /api/core/v2/info`.\n//! Returns general information about the node.\n//! Run: `cargo run --example node_api_core_get_info --release -- [NODE URL]`.\n\nuse iota_client::{Client, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args().nth(1).unwrap_or_else(|| {\n        // This example uses dotenv, which is not safe for use in production.\n        dotenv::dotenv().ok();\n        std::env::var("NODE_URL").unwrap()\n    });\n\n    // Create a client with that node.\n    let client = Client::builder()\n        .with_node(&node_url)?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    // Get node info.\n    let info = client.get_info().await?;\n\n    println!("{info:#?}");\n\n    Ok(())\n}\n'),(0,a.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,a.kt)("p",null,"Run the example by running the following command:"),(0,a.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example node_api_core_get_info --release -- https://api.testnet.shimmer.network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can replace ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api.testnet.shimmer.network")," with any node url.")))}w.isMDXComponent=!0;const x={toc:[]};function T(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'NodeInfoWrapper {\n    node_info: InfoResponse {\n        name: "HORNET",\n        version: "2.0.0-beta.5",\n        status: StatusResponse {\n            is_healthy: true,\n            latest_milestone: LatestMilestoneResponse {\n                index: 746869,\n                timestamp: 1661868434,\n                milestone_id: "0xbab289ebb1fdcc8516772074c3c465aaad648f234a4c1ff138f16c65a88b1298",\n            },\n            confirmed_milestone: ConfirmedMilestoneResponse {\n                index: 746869,\n                timestamp: 1661868434,\n                milestone_id: "0xbab289ebb1fdcc8516772074c3c465aaad648f234a4c1ff138f16c65a88b1298",\n            },\n            pruning_index: 0,\n        },\n        supported_protocol_versions: [\n            2,\n        ],\n        protocol: ProtocolResponse {\n            version: 2,\n            network_name: "testnet",\n            bech32_hrp: "rms",\n            min_pow_score: 1500.0,\n            rent_structure: RentStructureResponse {\n                v_byte_cost: 100,\n                v_byte_factor_key: 10,\n                v_byte_factor_data: 1,\n            },\n            token_supply: "1450896407249092",\n        },\n        pending_protocol_parameters: [],\n        base_token: BaseTokenResponse {\n            name: "Shimmer",\n            ticker_symbol: "SMR",\n            unit: "SMR",\n            subunit: Some(\n                "glow",\n            ),\n            decimals: 6,\n            use_metric_prefix: false,\n        },\n        metrics: MetricsResponse {\n            blocks_per_second: 8.4,\n            referenced_blocks_per_second: 9.2,\n            referenced_rate: 109.52380952380952,\n        },\n        features: [],\n    },\n    url: "https://api.testnet.shimmer.network",\n}\n')))}T.isMDXComponent=!0;var C=t(43221);const N={title:"Get Node Information",description:"You can access all the features of the iota.rs library using an instance of the Client class. The Client class provides high-level abstraction to all interactions over IOTA network (Tangle).",image:"/img/logo/iota_mark_light.png",keywords:["how to","client class","iota node","ClientBuilder","load balancer","java","nodejs","python","rust"]},I=void 0,R={unversionedId:"how_tos/get_node_info",id:"how_tos/get_node_info",title:"Get Node Information",description:"You can access all the features of the iota.rs library using an instance of the Client class. The Client class provides high-level abstraction to all interactions over IOTA network (Tangle).",source:"@site/shimmer/external/iota.rs/documentation/docs/how_tos/01_get_node_info.mdx",sourceDirName:"how_tos",slug:"/how_tos/get_node_info",permalink:"/shimmer/iota.rs/how_tos/get_node_info",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/shimmer/external/iota.rs/documentation/docs/how_tos/01_get_node_info.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Node Information",description:"You can access all the features of the iota.rs library using an instance of the Client class. The Client class provides high-level abstraction to all interactions over IOTA network (Tangle).",image:"/img/logo/iota_mark_light.png",keywords:["how to","client class","iota node","ClientBuilder","load balancer","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Run Code Examples",permalink:"/shimmer/iota.rs/how_tos/run_how_tos"},next:{title:"Generate a Mnemonic",permalink:"/shimmer/iota.rs/how_tos/generate_mnemonic"}},S={},M=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],P={toc:M};function Z(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},P,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can access all the features of the ",(0,a.kt)("inlineCode",{parentName:"p"},"iota.rs")," library using an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," class. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," class\nprovides high-level abstraction to all interactions over IOTA network (Tangle). You have to instantiate this class\nbefore you start any interactions with the library, or more precisely with the\n",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/node_software"},"IOTA nodes")," that power IOTA network."),(0,a.kt)("p",null,"The following code example will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,a.kt)("li",{parentName:"ol"},"Use the created client to get information about the node."),(0,a.kt)("li",{parentName:"ol"},"Print the information to the console.")),(0,a.kt)(C.ZP,{exampleURL:"https://wiki.iota.org/iotajs/how_tos/simple",mdxType:"IotaJs"}),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(w,{mdxType:"RustCode"})),(0,a.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(u,{mdxType:"NodejsCode"})),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(b,{mdxType:"PythonCode"})),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(c,{mdxType:"JavaCode"}))),(0,a.kt)("h2",{id:"expected-output"},"Expected Output"),(0,a.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(T,{mdxType:"RustOutput"})),(0,a.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(f,{mdxType:"NodejsOutput"})),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(y,{mdxType:"PythonOutput"})),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(m,{mdxType:"JavaOutput"}))))}Z.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(67294),a=t(86010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(87462),a=t(67294),r=t(86010),i=t(51048),s=t(33609),l=t(1943),c=t(72957);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:u,groupId:h,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=u??k.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),g=(0,s.l)(b,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:_}=(0,l.U)(),[w,x]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&b.some((n=>n.value===e))&&x(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),o=b[t].value;o!==w&&(C(n),x(o),null!=h&&_(h,String(o)))},I=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>T.push(e),onKeyDown:I,onFocus:N,onClick:N},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function u(e){const n=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(n)},e))}}}]);