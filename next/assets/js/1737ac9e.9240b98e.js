"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[86936],{2182:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(87462),a=(n(67294),n(3905));const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Dotenv",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}i.isMDXComponent=!0},94238:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(87462),a=(n(67294),n(3905));const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,a.kt)("a",{parentName:"p",href:"/next/iota.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}i.isMDXComponent=!0},78411:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(87462),a=(n(67294),n(3905));const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Iota.js",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also find this guide in the native ",(0,a.kt)("a",{href:n.exampleURL}," iota.js library"))))}i.isMDXComponent=!0},61266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>X,default:()=>A,frontMatter:()=>M,metadata:()=>O,toc:()=>S});var o=n(87462),a=(n(67294),n(3905)),l=n(34259),i=n(18679),c=n(69319);const s={toc:[]};function r(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{className:"language-java",mdxType:"CodeBlock"},'import org.iota.Client;\nimport org.iota.types.Block;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.expections.ClientException;\nimport org.iota.types.expections.InitializeClientException;\nimport org.iota.types.ids.BlockId;\n\npublic class PostBlock {\n    public static void main(String[] args) throws ClientException, InitializeClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Set up a block for this example.\n        Block b = ExampleUtils.setUpBlock(client);\n\n        // Post the block.\n        BlockId id = client.postBlock(b);\n\n        // Print the id of the created block.\n        System.out.println(id);\n    }\n}'))}r.isMDXComponent=!0;const p={toc:[]};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"0x40223bd63a8fce5065920b68af00d34813de3c8593416b3e90f27fad5cd77520\n")))}d.isMDXComponent=!0;var m=n(2182);const u={toc:[]};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(c.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Client, hexToUtf8, initLogger, utf8ToHex } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/08_data_block.js\n\n// In this example we will send a block with a tagged data payload\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n    });\n\n    const options = {\n        tag: utf8ToHex('Hello'),\n        data: utf8ToHex('Tangle'),\n    };\n    try {\n        const mnemonic = await client.generateMnemonic();\n        const secretManager = { mnemonic: mnemonic };\n\n        // Create block with tagged payload\n        const blockIdAndBlock = await client.buildAndPostBlock(\n            secretManager,\n            options,\n        );\n        console.log('Block:', blockIdAndBlock, '\\n');\n\n        console.log(\n            `Block sent: ${process.env.EXPLORER_URL}/block/${blockIdAndBlock[0]}\\n`,\n        );\n\n        const fetchedBlock = await client.getBlock(blockIdAndBlock[0]);\n        console.log('Block data: ', fetchedBlock);\n\n        const payload = fetchedBlock.payload;\n        if (payload && 'data' in payload && payload.data) {\n            console.log('Decoded data:', hexToUtf8(payload.data));\n        }\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,a.kt)(c.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/08_data_block.js"))}k.isMDXComponent=!0;const b={toc:[]};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"Block: [\n  '0x0f8c244774ced9003ec0f33f9677fbee849bfebf895f97d4378c881a4d9a9d48',\n  {\n    protocolVersion: 2,\n    parents: [\n      '0x5d06623466c838d442eb662774beab3104f389bcf72020936bbd8f7f3bf78a7e',\n      '0x75ceb6fe9cf7e0ac5a244f6cf6dc9ebd606814006b332740c88db04793ef79f3',\n      '0x7d46b355780a41c66b483d775842fa7488f87bd7f9d4d438ee85e9ded914dffb',\n      '0x8f68b3a47424ebeb77c4108096c38b8fbd7201f2e189dcf0a17929109195ec09'\n    ],\n    payload: { type: 5, tag: '0x48656c6c6f', data: '0x54616e676c65' },\n    nonce: '10760600709663905547'\n  }\n] \n\nBlock sent: https://explorer.shimmer.network/testnet/block/0x0f8c244774ced9003ec0f33f9677fbee849bfebf895f97d4378c881a4d9a9d48\n\nBlock data:  {\n  protocolVersion: 2,\n  parents: [\n    '0x5d06623466c838d442eb662774beab3104f389bcf72020936bbd8f7f3bf78a7e',\n    '0x75ceb6fe9cf7e0ac5a244f6cf6dc9ebd606814006b332740c88db04793ef79f3',\n    '0x7d46b355780a41c66b483d775842fa7488f87bd7f9d4d438ee85e9ded914dffb',\n    '0x8f68b3a47424ebeb77c4108096c38b8fbd7201f2e189dcf0a17929109195ec09'\n  ],\n  payload: { type: 5, tag: '0x48656c6c6f', data: '0x54616e676c65' },\n  nonce: '10760600709663905547'\n}\nDecoded data: Tangle\n")))}h.isMDXComponent=!0;const f={toc:[]};function x(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\noptions = {\n    # `hello` hex encoded\n    \"tag\": '0x68656c6c6f',\n    \"data\": '0x68656c6c6f',\n}\n\n# Create and post a block with a tagged data payload\nblock = client.build_and_post_block(None, options)\nprint(f'{block}')\n"),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"binding/python/examples")," folder:"),(0,a.kt)(c.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 08_data_block.py"))}x.isMDXComponent=!0;const y={toc:[]};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"[\n  '0x97379a9baae8541834d5fdd4757b9ed145f3fae6af729d37f2d5cc026c3ec69f',\n  {\n    'protocolVersion': 2,\n    'parents': [\n      '0x151e3afa885362540bbe0696e7eacd4beeb009cb545fa4ab7124a9b0fad9c147',\n      '0x594b367a064ca9342fb255b9495f42e9a30d8426dbf7f2a6883aa0cb8ac08100',\n      '0x7d4533d18880170c6082a64f71466edbc1cb0c15f526fac75d436b4fbe05a2a8',\n      '0xc675b08d064bd20f7e2a061646ed9dccf7c0c8edd6f364541cbcbd5564e35a30'\n    ],\n    'payload': {\n      'type': 5,\n      'tag': '0x68656c6c6f',\n      'data': '0x68656c6c6f'\n    },\n    'nonce': '12297829382473068203'\n  }\n]\n")))}g.isMDXComponent=!0;const w={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(c.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Calls `POST /api/core/v2/blocks`.\n//! Submits a block as a JSON payload.\n//! Run: `cargo run --example node_api_core_post_block --release -- [NODE URL]`.\n\nuse iota_client::{\n    block::{parent::Parents, Block},\n    Client, Result,\n};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args().nth(1).unwrap_or_else(|| {\n        // This example uses dotenv, which is not safe for use in production.\n        dotenv::dotenv().ok();\n        std::env::var("NODE_URL").unwrap()\n    });\n\n    // Create a client with that node.\n    let client = Client::builder().with_node(&node_url)?.finish()?;\n\n    let min_pow_score = client.get_min_pow_score().await?;\n\n    // Get parents for the block.\n    let parents = Parents::new(client.get_tips().await?)?;\n    // Create the block.\n    let block = Block::build(parents).finish(min_pow_score)?;\n    // Post the block.\n    let block_id = client.post_block(&block).await?;\n\n    println!("Posted: {block_id:?}");\n\n    Ok(())\n}\n'),(0,a.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,a.kt)("p",null,"Run the example by running the following command:"),(0,a.kt)(c.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example node_api_core_post_block --release -- https://api.testnet.shimmer.network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can replace ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api.testnet.shimmer.network")," with any node url.")))}v.isMDXComponent=!0;const T={toc:[]};function _(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Posted: BlockId(0x2f1de84a2977afeb413d44d8069c67e2df3f8da9ee6ba9dd62190e5256469169)\n")))}_.isMDXComponent=!0;const C={toc:[]};function N(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{className:"language-java",mdxType:"CodeBlock"},'import org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.expections.ClientException;\nimport org.iota.types.expections.InitializeClientException;\nimport org.iota.types.ids.BlockId;\n\npublic class PostBlockRaw {\n    public static void main(String[] args) throws ClientException, InitializeClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Set up a block for this example.\n        byte[] blockBytes = ExampleUtils.setUpBlockRaw(client);\n\n        // Post the block.\n        BlockId id = client.postBlockRaw(blockBytes);\n\n        // Print the id of the created block.\n        System.out.println(id);\n    }\n}'))}N.isMDXComponent=!0;const Z={toc:[]};function B(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"0x601aab8d3b391923f44528e54caff74f1e869ba8c587ddf99d277dd140289f89\n")))}B.isMDXComponent=!0;const D={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function I(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(c.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Calls `POST /api/core/v2/blocks`.\n//! Submits a block as raw bytes.\n//! Run: `cargo run --example node_api_core_post_block_raw --release -- [NODE URL]`.\n\nuse iota_client::{\n    block::{parent::Parents, Block},\n    Client, Result,\n};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args().nth(1).unwrap_or_else(|| {\n        // This example uses dotenv, which is not safe for use in production.\n        dotenv::dotenv().ok();\n        std::env::var("NODE_URL").unwrap()\n    });\n\n    // Create a client with that node.\n    let client = Client::builder().with_node(&node_url)?.finish()?;\n\n    let min_pow_score = client.get_min_pow_score().await?;\n\n    // Get parents for the block.\n    let parents = Parents::new(client.get_tips().await?)?;\n    // Create the block.\n    let block = Block::build(parents).finish(min_pow_score)?;\n    // Post the block as raw bytes.\n    let block_id = client.post_block_raw(&block).await?;\n\n    println!("Posted: {block_id:?}");\n\n    Ok(())\n}\n'),(0,a.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,a.kt)("p",null,"Run the example by running the following command:"),(0,a.kt)(c.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example node_api_core_post_block_raw --release -- https://api.testnet.shimmer.network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can replace ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api.testnet.shimmer.network")," with any node url.")))}I.isMDXComponent=!0;const P={toc:[]};function E(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Posted: BlockId(0x9982248af2d1b41f5f9f5b439d113ebe9611b6ace17ae487f2b3104b00b9950e)\n")))}E.isMDXComponent=!0;var R=n(94238),L=n(78411);const M={title:"Post a Data Block",description:"You can post a data block by attaching hex encoded data to a blocks options.",image:"/img/logo/iota_mark_light.png",keywords:["how to","block","create","create empty block","java","nodejs","python","rust"]},X=void 0,O={unversionedId:"how_tos/post_block",id:"how_tos/post_block",title:"Post a Data Block",description:"You can post a data block by attaching hex encoded data to a blocks options.",source:"@site/next/external/iota.rs/documentation/docs/how_tos/08_post_block.mdx",sourceDirName:"how_tos",slug:"/how_tos/post_block",permalink:"/next/iota.rs/how_tos/post_block",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/how_tos/08_post_block.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Post a Data Block",description:"You can post a data block by attaching hex encoded data to a blocks options.",image:"/img/logo/iota_mark_light.png",keywords:["how to","block","create","create empty block","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Create a Block",permalink:"/next/iota.rs/how_tos/create_block"},next:{title:"Get a Block",permalink:"/next/iota.rs/how_tos/get_block"}},j={},S=[{value:"Post a Block",id:"post-a-block",level:2},{value:"Code Example",id:"code-example",level:3},{value:"Expected Output",id:"expected-output",level:3},{value:"Post a Raw Block",id:"post-a-raw-block",level:2},{value:"Code Example",id:"code-example-1",level:3},{value:"Expected Output",id:"expected-output-1",level:3}],U={toc:S};function A(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},U,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can post a data block by adding hex encoded data as options when you ",(0,a.kt)("a",{parentName:"p",href:"/next/iota.rs/how_tos/create_block"},"create a block"),"."),(0,a.kt)("p",null,"The following code example will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,a.kt)("li",{parentName:"ol"},"Create the ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," with the hex encoded data."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/create_block"},"Create and post")," the block with the data from step 2."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_addresses"},"Generate a public address"),".")),(0,a.kt)(L.ZP,{exampleURL:"https://wiki.iota.org/iotajs/how_tos/data",mdxType:"IotaJs"}),(0,a.kt)("h2",{id:"post-a-block"},"Post a Block"),(0,a.kt)("h3",{id:"code-example"},"Code Example"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(v,{mdxType:"RustCode"})),(0,a.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(k,{mdxType:"NodejsCode"})),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(x,{mdxType:"PythonCode"})),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(r,{mdxType:"JavaCode"}))),(0,a.kt)("h3",{id:"expected-output"},"Expected Output"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(_,{mdxType:"RustOutput"})),(0,a.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(h,{mdxType:"NodejsOutput"})),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(g,{mdxType:"PythonOutput"})),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(d,{mdxType:"JavaOutput"}))),(0,a.kt)("h2",{id:"post-a-raw-block"},"Post a Raw Block"),(0,a.kt)("h3",{id:"code-example-1"},"Code Example"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(I,{mdxType:"RustRawCode"})),(0,a.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(R.ZP,{mdxType:"NodeJsRawCode"})),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(R.ZP,{mdxType:"PythonRawCode"})),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(N,{mdxType:"JavaRawCode"}))),(0,a.kt)("h3",{id:"expected-output-1"},"Expected Output"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(E,{mdxType:"RustRawOutput"})),(0,a.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(R.ZP,{mdxType:"NodeJsRawOutput"})),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(R.ZP,{mdxType:"PythonRawOutput"})),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(B,{mdxType:"JavaRawOutput"}))))}A.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(87462),a=n(67294),l=n(86010),i=n(51048),c=n(33609),s=n(1943),r=n(72957);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:u,groupId:k,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??h.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),x=(0,c.l)(f,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,s.U)(),[v,T]=(0,a.useState)(y),_=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=k){const e=g[k];null!=e&&e!==v&&f.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,n=_.indexOf(t),o=f[n].value;o!==v&&(C(t),T(o),null!=k&&w(k,String(o)))},Z=e=>{var t;let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>_.push(e),onKeyDown:Z,onClick:N},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,i.Z)();return a.createElement(m,(0,o.Z)({key:String(t)},e))}}}]);