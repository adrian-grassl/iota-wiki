"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[41096],{23777:(n,t,e)=>{e.d(t,{ZP:()=>u});var o=e(87462),a=(e(67294),e(3905));const i={toc:[]};function u(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},i,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Dotenv",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}u.isMDXComponent=!0},31585:(n,t,e)=>{e.d(t,{ZP:()=>u});var o=e(87462),a=(e(67294),e(3905));const i={toc:[]};function u(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},i,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,a.kt)("a",{parentName:"p",href:"/next/iota.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}u.isMDXComponent=!0},28044:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>N,contentTitle:()=>g,default:()=>O,frontMatter:()=>x,metadata:()=>T,toc:()=>C});var o=e(87462),a=(e(67294),e(3905)),i=e(34259),u=e(18679),l=e(69319);const r={toc:[]};function s(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},r,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{className:"language-java",mdxType:"CodeBlock"},'package output_builder;\n\nimport org.iota.Client;\nimport org.iota.types.*;\nimport org.iota.types.expections.ClientException;\nimport org.iota.types.expections.InitializeClientException;\nimport org.iota.types.ids.AliasId;\nimport org.iota.types.output_builder.FoundryOutputBuilderParams;\n\npublic class BuildFoundryOutput {\n    public static void main(String[] args) throws ClientException, InitializeClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Configure a simple foundry output.\n        AliasId aliasId = new AliasId("0xa5c28d5baa951de05e375fb19134ea51a918f03acc2d0cee011a42b298d3effa");\n        int serialNumber = 1;\n        NativeToken[] nativeTokens = new NativeToken[]{new NativeToken("{ id: \'0x081e6439529b020328c08224b43172f282cb16649d50c891fa156365323667e47a0100000000\', amount: \'0x32\' }")};\n        TokenScheme tokenScheme = new TokenScheme("{ type: 0, meltedTokens: \'0x0\', mintedTokens: \'0x32\', maximumSupply: \'0x64\' }");\n        UnlockCondition[] unlockConditions = new UnlockCondition[]{new UnlockCondition("{ type: 6, address: { type: 8, aliasId: " + aliasId + "  } }")};\n        FoundryOutputBuilderParams params = new FoundryOutputBuilderParams()\n                .withNativeTokens(nativeTokens)\n                .withSerialNumber(serialNumber)\n                .withTokenScheme(tokenScheme)\n                .withUnlockConditions(unlockConditions);\n\n        // Build the output.\n        Output output = client.buildFoundryOutput(params);\n\n        // Print the output.\n        System.out.println(output.toString());\n\n    }\n}'))}s.isMDXComponent=!0;const d={toc:[]};function p(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 5,\n  "amount": "59800",\n  "nativeTokens": [\n    {\n      "id": "0x081e6439529b020328c08224b43172f282cb16649d50c891fa156365323667e47a0100000000",\n      "amount": "0x32"\n    }\n  ],\n  "serialNumber": 1,\n  "tokenScheme": {\n    "type": 0,\n    "mintedTokens": "0x32",\n    "meltedTokens": "0x0",\n    "maximumSupply": "0x64"\n  },\n  "unlockConditions": [\n    {\n      "type": 6,\n      "address": {\n        "type": 8,\n        "aliasId": "0xa5c28d5baa951de05e375fb19134ea51a918f03acc2d0cee011a42b298d3effa"\n      }\n    }\n  ]\n}\n')))}p.isMDXComponent=!0;var c=e(23777);const _={toc:[]};function m(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},_,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(l.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/14_build_foundry_output.js\n\n// Build a foundry output\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        nodes: [process.env.NODE_URL],\n    });\n\n    try {\n        if (!process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1) {\n            throw new Error('.env mnemonic is undefined, see .env.example');\n        }\n\n        const aliasId =\n            '0xff311f59790ccb85343a36fbac2f06d233734794404142b308c13f2c616935b5';\n\n        const foundryOutput = await client.buildFoundryOutput({\n            serialNumber: 0,\n            tokenScheme: {\n                type: 0,\n                // 10 hex encoded\n                mintedTokens: '0xa',\n                meltedTokens: '0x0',\n                maximumSupply: '0xa',\n            },\n            amount: '1000000',\n            unlockConditions: [\n                {\n                    // ImmutableAliasAddressUnlockCondition\n                    type: 6,\n                    address: {\n                        // AliasAddress\n                        type: 8,\n                        aliasId,\n                    },\n                },\n            ],\n        });\n\n        console.log(foundryOutput);\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun();\n"),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,a.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/14_build_foundry_output.js"))}m.isMDXComponent=!0;const k={toc:[]};function h(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},k,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  type: 5,\n  amount: '1000000',\n  serialNumber: 0,\n  tokenScheme: {\n    type: 0,\n    mintedTokens: '0xa',\n    meltedTokens: '0x0',\n    maximumSupply: '0xa'\n  },\n  unlockConditions: [ { type: 6, address: [Object] } ]\n}\n")))}h.isMDXComponent=!0;var y=e(31585);const f={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function b(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},f,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example foundry --release\n\nuse iota_client::{\n    block::{\n        address::AliasAddress,\n        output::{\n            feature::{IssuerFeature, MetadataFeature, SenderFeature},\n            unlock_condition::{\n                AddressUnlockCondition, GovernorAddressUnlockCondition, ImmutableAliasAddressUnlockCondition,\n                StateControllerAddressUnlockCondition, UnlockCondition,\n            },\n            AliasId, AliasOutputBuilder, BasicOutputBuilder, Feature, FoundryId, FoundryOutputBuilder, NativeToken,\n            Output, OutputId, SimpleTokenScheme, TokenId, TokenScheme,\n        },\n        payload::{transaction::TransactionEssence, Payload},\n    },\n    node_api::indexer::query_parameters::QueryParameter,\n    request_funds_from_faucet,\n    secret::{mnemonic::MnemonicSecretManager, SecretManager},\n    Client, Result,\n};\nuse primitive_types::U256;\n\n/// In this example we will create an foundry output\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production!\n    // Configure your own mnemonic in the ".env" file. Since the output amount cannot be zero, the seed must contain\n    // non-zero balance.\n    dotenv::dotenv().ok();\n\n    let node_url = std::env::var("NODE_URL").unwrap();\n    let faucet_url = std::env::var("FAUCET_URL").unwrap();\n\n    // Create a client instance.\n    let client = Client::builder().with_node(&node_url)?.finish()?;\n\n    let secret_manager = SecretManager::Mnemonic(MnemonicSecretManager::try_from_mnemonic(\n        &std::env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1").unwrap(),\n    )?);\n\n    let token_supply = client.get_token_supply().await?;\n\n    let address = client.get_addresses(&secret_manager).with_range(0..1).get_raw().await?[0];\n    println!(\n        "{}",\n        request_funds_from_faucet(&faucet_url, &address.to_bech32(client.get_bech32_hrp().await?)).await?\n    );\n    tokio::time::sleep(std::time::Duration::from_secs(20)).await;\n\n    //////////////////////////////////\n    // create new alias output\n    //////////////////////////////////\n\n    let alias_output_builder = AliasOutputBuilder::new_with_amount(2_000_000, AliasId::null())?\n        .add_feature(Feature::Sender(SenderFeature::new(address)))\n        .add_feature(Feature::Metadata(MetadataFeature::new(vec![1, 2, 3])?))\n        .add_immutable_feature(Feature::Issuer(IssuerFeature::new(address)))\n        .add_unlock_condition(UnlockCondition::StateControllerAddress(\n            StateControllerAddressUnlockCondition::new(address),\n        ))\n        .add_unlock_condition(UnlockCondition::GovernorAddress(GovernorAddressUnlockCondition::new(\n            address,\n        )));\n\n    let outputs = vec![alias_output_builder.clone().finish_output(token_supply)?];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n\n    println!(\n        "Transaction with new alias output sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////////////////////\n    // create foundry output and mint 70 native tokens\n    //////////////////////////////////////////////////\n    let alias_output_id = get_alias_output_id(block.payload().unwrap())?;\n    let alias_id = AliasId::from(&alias_output_id);\n    let token_scheme = TokenScheme::Simple(SimpleTokenScheme::new(\n        U256::from(70u8),\n        U256::from(0u8),\n        U256::from(100u8),\n    )?);\n    let foundry_id = FoundryId::build(\n        &AliasAddress::from(AliasId::from(&alias_output_id)),\n        1,\n        token_scheme.kind(),\n    );\n    let token_id = TokenId::from(foundry_id);\n    let outputs = vec![\n        alias_output_builder\n            .clone()\n            .with_amount(1_000_000)?\n            .with_alias_id(alias_id)\n            .with_state_index(1)\n            .with_foundry_counter(1)\n            .finish_output(token_supply)?,\n        FoundryOutputBuilder::new_with_amount(1_000_000, 1, token_scheme)?\n            .add_native_token(NativeToken::new(token_id, U256::from(70u8))?)\n            .add_unlock_condition(UnlockCondition::ImmutableAliasAddress(\n                ImmutableAliasAddressUnlockCondition::new(AliasAddress::from(alias_id)),\n            ))\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(alias_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Transaction with foundry output sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // melt 20 native token\n    //////////////////////////////////\n\n    let foundry_output_builder = FoundryOutputBuilder::new_with_amount(\n        1_000_000,\n        1,\n        TokenScheme::Simple(SimpleTokenScheme::new(\n            U256::from(70u8),\n            U256::from(20u8),\n            U256::from(100u8),\n        )?),\n    )?\n    .add_unlock_condition(UnlockCondition::ImmutableAliasAddress(\n        ImmutableAliasAddressUnlockCondition::new(AliasAddress::from(alias_id)),\n    ));\n\n    let alias_output_id = get_alias_output_id(block.payload().unwrap())?;\n    let foundry_output_id = get_foundry_output_id(block.payload().unwrap())?;\n    let outputs = vec![\n        alias_output_builder\n            .clone()\n            .with_amount(1_000_000)?\n            .with_alias_id(alias_id)\n            .with_state_index(2)\n            .with_foundry_counter(1)\n            .finish_output(token_supply)?,\n        foundry_output_builder\n            .clone()\n            .add_native_token(NativeToken::new(token_id, U256::from(50u8))?)\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(alias_output_id.into())?\n        .with_input(foundry_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Transaction with native tokens burnt sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // send native token\n    //////////////////////////////////\n\n    let basic_output_builder = BasicOutputBuilder::new_with_amount(57_700)?\n        .add_unlock_condition(UnlockCondition::Address(AddressUnlockCondition::new(address)));\n\n    let alias_output_id = get_alias_output_id(block.payload().unwrap())?;\n    let foundry_output_id = get_foundry_output_id(block.payload().unwrap())?;\n    let outputs = vec![\n        alias_output_builder\n            .clone()\n            .with_amount(57_700)?\n            .with_alias_id(alias_id)\n            .with_state_index(3)\n            .with_foundry_counter(1)\n            .finish_output(token_supply)?,\n        foundry_output_builder.finish_output(token_supply)?,\n        basic_output_builder\n            .clone()\n            .add_native_token(NativeToken::new(token_id, U256::from(50u8))?)\n            .finish_output(token_supply)?,\n    ];\n\n    // get additional input for the new basic output\n    let output_ids = client\n        .basic_output_ids(vec![QueryParameter::Address(\n            address.to_bech32(client.get_bech32_hrp().await?),\n        )])\n        .await?;\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(output_ids[0].into())?\n        .with_input(alias_output_id.into())?\n        .with_input(foundry_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Transaction with native tokens sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // send native token without foundry\n    //////////////////////////////////\n    let basic_output_id = get_basic_output_id_with_native_tokens(block.payload().unwrap())?;\n    let outputs = vec![\n        basic_output_builder\n            .clone()\n            .add_native_token(NativeToken::new(token_id, U256::from(50u8))?)\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(basic_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Second transaction with native tokens sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // burn native token without foundry\n    //////////////////////////////////\n    let basic_output_id = get_basic_output_id_with_native_tokens(block.payload().unwrap())?;\n    let outputs = vec![\n        basic_output_builder\n            .add_native_token(NativeToken::new(token_id, U256::from(30u8))?)\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_burning_allowed(true)\n        .with_input(basic_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Third transaction with native tokens burned sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    Ok(())\n}\n\n// helper function to get the output id for the first alias output\nfn get_alias_output_id(payload: &Payload) -> Result<OutputId> {\n    match payload {\n        Payload::Transaction(tx_payload) => {\n            let TransactionEssence::Regular(regular) = tx_payload.essence();\n            for (index, output) in regular.outputs().iter().enumerate() {\n                if let Output::Alias(_alias_output) = output {\n                    return Ok(OutputId::new(tx_payload.id(), index.try_into().unwrap())?);\n                }\n            }\n            panic!("No alias output in transaction essence")\n        }\n        _ => panic!("No tx payload"),\n    }\n}\n\n// helper function to get the output id for the first foundry output\nfn get_foundry_output_id(payload: &Payload) -> Result<OutputId> {\n    match payload {\n        Payload::Transaction(tx_payload) => {\n            let TransactionEssence::Regular(regular) = tx_payload.essence();\n            for (index, output) in regular.outputs().iter().enumerate() {\n                if let Output::Foundry(_foundry_output) = output {\n                    return Ok(OutputId::new(tx_payload.id(), index.try_into().unwrap())?);\n                }\n            }\n            panic!("No foundry output in transaction essence")\n        }\n        _ => panic!("No tx payload"),\n    }\n}\n\n// helper function to get the output id for the first basic output with native tokens\nfn get_basic_output_id_with_native_tokens(payload: &Payload) -> Result<OutputId> {\n    match payload {\n        Payload::Transaction(tx_payload) => {\n            let TransactionEssence::Regular(regular) = tx_payload.essence();\n            for (index, output) in regular.outputs().iter().enumerate() {\n                if let Output::Basic(basic_output) = output {\n                    if !basic_output.native_tokens().is_empty() {\n                        return Ok(OutputId::new(tx_payload.id(), index.try_into().unwrap())?);\n                    }\n                }\n            }\n            panic!("No basic output with native tokens in transaction essence")\n        }\n        _ => panic!("No tx payload"),\n    }\n}\n'),(0,a.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,a.kt)("p",null,"Run the example by running the following command:"),(0,a.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example foundry --release"))}b.isMDXComponent=!0;const w={toc:[]};function v(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},w,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction with new alias output sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x6f10bd7234c7958992d9b0df269234f01afa96aecb6b5ed04f26786811640df7\nTransaction with foundry output sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0xbcf2281c2557106426f7f622051ab8de233a430df48b38a826a863eeb9ee187e\nTransaction with native tokens burnt sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x924a2385cddfffe1f46c1460160121b28c40a19e0e8011e04c7c2fe8d1d80ccd\n")))}v.isMDXComponent=!0;const x={title:"Build a Foundry Output",description:"The following example will build a Foundry output.",keywords:["how to","block","output","Foundry","java","nodejs","python","rust"]},g=void 0,T={unversionedId:"how_tos/build_foundry_output",id:"how_tos/build_foundry_output",title:"Build a Foundry Output",description:"The following example will build a Foundry output.",source:"@site/next/external/iota.rs/documentation/docs/how_tos/12_build_foundry_output.mdx",sourceDirName:"how_tos",slug:"/how_tos/build_foundry_output",permalink:"/next/iota.rs/how_tos/build_foundry_output",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/how_tos/12_build_foundry_output.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Build a Foundry Output",description:"The following example will build a Foundry output.",keywords:["how to","block","output","Foundry","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Build an NFT Output",permalink:"/next/iota.rs/how_tos/build_nft_output"},next:{title:"Build an Alias Output",permalink:"/next/iota.rs/how_tos/build_alias_output"}},N={},C=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],I={toc:C};function O(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,o.Z)({},I,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following code example will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,a.kt)("li",{parentName:"ol"},"Build a Foundry output.")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(b,{mdxType:"RustCode"})),(0,a.kt)(u.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(m,{mdxType:"NodejsCode"})),(0,a.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(y.ZP,{mdxType:"PythonCode"})),(0,a.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(s,{mdxType:"JavaCode"}))),(0,a.kt)("h2",{id:"expected-output"},"Expected Output"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(v,{mdxType:"RustOutput"})),(0,a.kt)(u.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(h,{mdxType:"NodejsOutput"})),(0,a.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(y.ZP,{mdxType:"PythonOutput"})),(0,a.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(p,{mdxType:"JavaOutput"}))))}O.isMDXComponent=!0},18679:(n,t,e)=>{e.d(t,{Z:()=>u});var o=e(67294),a=e(86010);const i="tabItem_Ymn6";function u(n){let{children:t,hidden:e,className:u}=n;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,u),hidden:e},t)}},34259:(n,t,e)=>{e.d(t,{Z:()=>_});var o=e(87462),a=e(67294),i=e(86010),u=e(51048),l=e(33609),r=e(1943),s=e(72957);const d="tabList__CuJ",p="tabItem_LNqP";function c(n){var t;const{lazy:e,block:u,defaultValue:c,values:_,groupId:m,className:k}=n,h=a.Children.map(n.children,(n=>{if((0,a.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=_??h.map((n=>{let{props:{value:t,label:e,attributes:o}}=n;return{value:t,label:e,attributes:o}})),f=(0,l.l)(y,((n,t)=>n.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=h.find((n=>n.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==b&&!y.some((n=>n.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:v}=(0,r.U)(),[x,g]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=m){const n=w[m];null!=n&&n!==x&&y.some((t=>t.value===n))&&g(n)}const C=n=>{const t=n.currentTarget,e=T.indexOf(t),o=y[e].value;o!==x&&(N(t),g(o),null!=m&&v(m,String(o)))},I=n=>{var t;let e=null;switch(n.key){case"ArrowRight":{const t=T.indexOf(n.currentTarget)+1;e=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(n.currentTarget)-1;e=T[t]??T[T.length-1];break}}null==(t=e)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},k)},y.map((n=>{let{value:t,label:e,attributes:u}=n;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:n=>T.push(n),onKeyDown:I,onFocus:C,onClick:C},u,{className:(0,i.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":x===t})}),e??t)}))),e?(0,a.cloneElement)(h.filter((n=>n.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((n,t)=>(0,a.cloneElement)(n,{key:t,hidden:n.props.value!==x})))))}function _(n){const t=(0,u.Z)();return a.createElement(c,(0,o.Z)({key:String(t)},n))}}}]);