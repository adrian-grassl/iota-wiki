"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61179],{56554:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Replace the native token ID",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before you run the code example, make sure to update the token ID with one which is available in your account. If you\nhaven't done so already, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/native_tokens/mint_native_token"},"how to mint a native token guide"),". If you\ndon't know the token ID you can ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"check your accounts balance")," to retrieve\nthe available native tokens in your account.")))}c.isMDXComponent=!0},48364:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}c.isMDXComponent=!0},21827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>C,default:()=>E,frontMatter:()=>I,metadata:()=>S,toc:()=>D});var a=t(87462),o=(t(67294),t(3905)),s=t(34259),c=t(18679),d=t(69319);const l={toc:[]};function r(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Update the token ID"),(0,o.kt)(d.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example will send an NFT\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const { initLogger } = require('@iota/wallet');\n    initLogger({\n        name: './wallet.log',\n        levelFilter: 'debug',\n        targetExclusions: [\"h2\", \"hyper\", \"rustls\"]\n    });\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        // Send the full NFT output to the specified address\n        const response = await account.sendNft([{\n            //TODO: Replace with the address of your choice!\n            address: 'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0',\n            //TODO: Replace with an NFT id from your account, you can mint one with `25-mint-nft.js`.\n            nftId: '0x09aa7871e126cc41f1f3784a479a5dd5f23e4dd8b97e932a001e77a11ad42f0c',\n        }]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(d.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 26-send-nft.js"))}r.isMDXComponent=!0;const i={toc:[]};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0xd549b56a017e51a4ff053171b55aba62aac59e38a167067769991ccfb663ce1b',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: '0x40c74e3e9bc8913e3d5c75723d8e018695f3be8a78bd05479500eff4a7a10915',\n  inclusionState: 'Pending',\n  timestamp: '1663000240615',\n  transactionId: '0x03d4fe1335d0880db4163e7cb19735e016c803b015c9e65123e07de579ed41d2',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x40c74e3e9bc8913e3d5c75723d8e018695f3be8a78bd05479500eff4a7a10915\n")))}u.isMDXComponent=!0;const p={toc:[]};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_wallet import IotaWallet\n\n# In this example we will send an nft\n\nwallet = IotaWallet(\'./alice-database\')\n\naccount = wallet.get_account(\'Alice\')\n\n# Sync account with the node\nresponse = account.sync_account()\nprint(f\'Synced: {response}\')\n\nwallet.set_stronghold_password("some_hopefully_secure_password")\n\noutputs = [{\n    "address": "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu",\n    "nftId": "0x17f97185f80fa56eab974de6b7bbb80fa812d4e8e37090d166a0a41da129cebc",\n}]\n\ntransaction = account.send_nft(outputs)\n\nprint(f\'Sent transaction: {transaction}\')\n'),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/examples")," folder:"),(0,o.kt)(d.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 6-send-nft.py"))}f.isMDXComponent=!0;const m={toc:[]};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Synced:{\n    'baseCoin':{\n        'total':'3302172702',\n        'available':'3302172702'\n    },\n    'requiredStorageDeposit':'910202100',\n    'nativeTokens':[\n        {\n            'tokenId':'0x08a5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d0100000000',\n            'total':'0x3de',\n            'available':'0x3de'\n        },\n        {\n            'tokenId':'0x08b83d49922e341d2cb45159707cfafdc9dc8fdb9d119543480dbaa5773eed8c4a0100000000',\n            'total':'0x64',\n            'available':'0x64'\n        }\n    ],\n    'nfts':[\n        '0x77133189021f50d8d66e0678e553af9f46a832a24239653d3555edb8dc859e1f',\n        '0x1e808b7c6e603aaeb5f718881a74fedae72981ac7d5f0294eb561cad0e653566',\n        '0x1b670afba8d59a445cbaf167f1fda05879362e3ea034f5c4a0979fbeb5a3964b',\n        '0x3f0e11e9d9f48a57d0fba43d7d1158ee673cb8055f80a5ce45ad174c962c0d8a',\n        '0xdc8be91d779aac048aa9001ab99ecf12cf62a4701185a95f6206a1a201bfbe7c',\n        '0xceae643ff7c112a3adce8f55f7953ba0707ade21256a7a09068c0b47f7c62c5b',\n        '0x17f97185f80fa56eab974de6b7bbb80fa812d4e8e37090d166a0a41da129cebc'\n    ],\n    'aliases':[\n        '0x96717e6d19c13b1c5b120d60b23217f541b5b779e51212e01d72e7fa1f7090cf',\n        '0xa5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d',\n        '0x97eb7a447cd62e1c373ff8188ba422f5c1b0687707d38e10e8366a1c20d33fea',\n        '0xf9c702ffe50c35d331b2df02295c2cc6d92f883530ff231bd76d1f6a72cb1d95'\n    ],\n    'foundries':[\n        '0x08a5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d0100000000'\n    ],\n    'potentiallyLockedOutputs':{\n        '0x9a5869b61b29f17326e04b6161d9cd169687e79476c556bd0c3cbbc3648d4ff60000':False,\n        '0x850c1e43dff1a28a42d71edc6d4ad0b9f251c03993f9b0684a34f645514ffe270000':False\n    }\n}\nSent transaction:{\n    'payload':{\n        'type':6,\n        'essence':{\n            'type':1,\n            'networkId':'8342982141227064571',\n            'inputs':[\n                {\n                    'type':0,\n                    'transactionId':'0x84debb878f8e124f2bd893e04c6672a8ad31788c47a520f77c11bdb03727ef1c',\n                    'transactionOutputIndex':3\n                }\n            ],\n            'inputsCommitment':'0xb70cc0104197c9b9b1bc7199b9093e47d710b0e7e14b7bc09a79ebc7e42e16a1',\n            'outputs':[\n                {\n                    'type':6,\n                    'amount':'47500',\n                    'nftId':'0x17f97185f80fa56eab974de6b7bbb80fa812d4e8e37090d166a0a41da129cebc',\n                    'unlockConditions':[\n                        {\n                            'type':0,\n                            'address':{\n                                'type':0,\n                                'pubKeyHash':'0x60200bad8137a704216e84f8f9acfe65b972d9f4155becb4815282b03cef99fe'\n                            }\n                        }\n                    ],\n                    'features':[\n                        {\n                            'type':2,\n                            'data':'0x68656c6c6f'\n                        }\n                    ],\n                    'immutableFeatures':[\n                        {\n                            'type':2,\n                            'data':'0x68656c6c6f'\n                        }\n                    ]\n                }\n            ]\n        },\n        'unlocks':[\n            {\n                'type':0,\n                'signature':{\n                    'type':0,\n                    'publicKey':'0xe62838fda7e8b77bf80e49967f0f089ae2a7230547d5231649732952f6336fae',\n                    'signature':'0x079dfe7ab4830be937757d3362ef5dab8d0d70297ab4dce8a3ab79f2a8b28610ff8d84fe037e642afa28c07a3f87ed2072930f57e9b7f8390e9e117e26966809'\n                }\n            }\n        ]\n    },\n    'blockId':'0x5c49a0c8b9ee920ca575d895842c43ace5bfd2feb2ccc611eb37ec4cde7acabc',\n    'inclusionState':'Pending',\n    'timestamp':'1665918220888',\n    'transactionId':'0x3158626d7f404bded6af815f104e4001009a3f82fab7f9eb267cc691d039eed5',\n    'networkId':'8342982141227064571',\n    'incoming':False,\n    'note':None\n}\n")))}b.isMDXComponent=!0;const h={toc:[]};function y(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d.Z,{className:"java",mdxType:"CodeBlock"},"// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.NftId;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class SendNft {\n    public static void main(String[] args) throws WalletException, InterruptedException, InitializeWalletException {\n        // This example assumes that a wallet has already been created using the \xb4SetupWallet.java\xb4 example.\n        // If you haven't run the \xb4SetupWallet.java\xb4 example yet, you must run it first to be able to load the wallet as shown below:\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes(Env.NODE))\n                .withSecretManager(new StrongholdSecretManager(Env.STRONGHOLD_PASSWORD, null, Env.STRONGHOLD_VAULT_PATH))\n                .withCoinType(CoinType.Shimmer)\n                .withStoragePath(Env.STORAGE_PATH)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias(Env.ACCOUNT_NAME));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // TODO: replace with your own values.\n        String receiverAddress = a.getPublicAddresses()[0].getAddress();\n        NftId nftId = new NftId(\"0xdbed22679570aecc16da90648836607981e87c1ed3e3a24daf0942aa29a66003\");\n\n        // Send transaction.\n        Transaction t = a.sendNft(new org.iota.types.account_methods.SendNft().withAddressesAndNftIds(new AddressAndNftId[] {new AddressAndNftId()\n                .withAddress(receiverAddress)\n                .withNftId(nftId)\n        }));\n\n        // Print transaction.\n        System.out.println(t);\n\n        // In case you are done and don't need the wallet instance anymore you can destroy the instance to clean up memory.\n        // For this, check out the \xb4DestroyWallet.java\xb4 example.\n    }\n\n}"))}y.isMDXComponent=!0;const k={toc:[]};function w(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload":{\n    "type":6,\n    "essence":{\n      "type":1,\n      "networkId":"8342982141227064571",\n      "inputs":[\n        {\n          "type":0,\n          "transactionId":"0xd96c9cdf8c6b095f7ab44105f8298c766a7433664db651bfbd7832566d59f103",\n          "transactionOutputIndex":0\n        }\n      ],\n      "inputsCommitment":"0xd64acb6fec68315c200484458fb0a2c1e9b7d06106aecdcb9c86403d955ad69a",\n      "outputs":[\n        {\n          "type":6,\n          "amount":"52000",\n          "nftId":"0xdbed22679570aecc16da90648836607981e87c1ed3e3a24daf0942aa29a66003",\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ],\n          "features":[\n            {\n              "type":2,\n              "data":"0x5368696d6d65722e20546f6b656e697a652045766572797468696e672e2048656c6c6f2066726f6d20746865204a6176612062696e64696e672e"\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks":[\n      {\n        "type":0,\n        "signature":{\n          "type":0,\n          "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature":"0xc42fd26b652581e6b2f58ef316b9817830093ae959d716f06c97284fadad72e39838031205d89afa3f0177ae2b1780435945be6a29274a1c66ad47d622cf630b"\n        }\n      }\n    ]\n  },\n  "blockId":"0xa2dc2b45e42ef4c5f847f329faa27ee7b3e50ede0d6b46aeed996f4d74e87b95",\n  "inclusionState":"Pending",\n  "timestamp":"1664876443672",\n  "transactionId":"0xb423ef2155828a4b301795a77357c70bdac76c47f6ee1a20af6a298540fd9b86",\n  "networkId":"8342982141227064571",\n  "incoming":false\n}\n')))}w.isMDXComponent=!0;var g=t(48364);const x={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function v(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(g.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(d.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example send_nft --release\n// In this example we will send an nft\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_wallet::{account_manager::AccountManager, iota_client::block::output::NftId, AddressAndNftId, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    let outputs = vec![AddressAndNftId {\n        address: "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu".to_string(),\n        // Replace with an NftId that is available in the account\n        nft_id: NftId::from_str("0xe192461b30098a5da889ef6abc9e8130bf3b2d980450fa9201e5df404121b932")?,\n    }];\n\n    let transaction = account.send_nft(outputs, None).await?;\n\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(d.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example send_nft --release"))}v.isMDXComponent=!0;const T={toc:[]};function _(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},T,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction: 0x4d3e01a0cf6d25e80af5ed774f0f741a476709a5517c21555e2c0351dda81f77 \nBlock sent: http://localhost:14265/api/core/v2/blocks/0x7ad6ce0789ea5b5340b7045a13947af95737b3728410cdde8362021ac57f3731\n")))}_.isMDXComponent=!0;var N=t(56554);const I={title:"Send NFTs",sidebar_label:"Send",description:"How to send NFTs using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","send","NFT","send NFT","nodejs","python","java","rust"]},C=void 0,S={unversionedId:"how_tos/NFT/send_nft",id:"how_tos/NFT/send_nft",title:"Send NFTs",description:"How to send NFTs using wallet.rs",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/NFT/02_send_nft.mdx",sourceDirName:"how_tos/NFT",slug:"/how_tos/NFT/send_nft",permalink:"/shimmer/wallet.rs/how_tos/NFT/send_nft",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/NFT/02_send_nft.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Send NFTs",sidebar_label:"Send",description:"How to send NFTs using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","send","NFT","send NFT","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Mint",permalink:"/shimmer/wallet.rs/how_tos/NFT/mint_nft"},next:{title:"Burn",permalink:"/shimmer/wallet.rs/how_tos/NFT/burn_nft"}},A={},D=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],Z={toc:D};function E(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},Z,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you have ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/NFT/mint_nft"},"minted")," an\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/tokenization#non-fungible-tokens-nfts"},"NFT"),",\nyou can easily send it by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.send_nft(addresses_nft_ids, options)")," function."),(0,o.kt)("p",null,"As with any output, you can set a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/storage_deposit"},"storage deposit")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions"},"output unlock conditions"),".\nKeep in mind that if you set unlock conditions, whoever you send the native tokens to may need to\n",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/claim_outputs"},"claim them"),"."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(N.ZP,{mdxType:"ReplaceNFTId"}),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Define the type of native token and amount to send."),(0,o.kt)("li",{parentName:"ol"},"Send the native tokens calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.send_nft(addresses_nft_ids, options)")," function.")),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(v,{mdxType:"RustCode"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(r,{mdxType:"NodejsCode"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"PythonCode"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(_,{mdxType:"RustOutput"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"PythonOutput"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(w,{mdxType:"JavaOutput"}))))}E.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),o=t(86010);const s="tabItem_Ymn6";function c(e){let{children:n,hidden:t,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,c),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(87462),o=t(67294),s=t(86010),c=t(51048),d=t(33609),l=t(1943),r=t(72957);const i="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:t,block:c,defaultValue:p,values:f,groupId:m,className:b}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=f??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),k=(0,d.l)(y,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===p?p:p??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:x}=(0,l.U)(),[v,T]=(0,o.useState)(w),_=[],{blockElementScrollPositionUntilNextRender:N}=(0,r.o5)();if(null!=m){const e=g[m];null!=e&&e!==v&&y.some((n=>n.value===e))&&T(e)}const I=e=>{const n=e.currentTarget,t=_.indexOf(n),a=y[t].value;a!==v&&(N(n),T(a),null!=m&&x(m,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const n=_.indexOf(e.currentTarget)+1;t=_[n]??_[0];break}case"ArrowLeft":{const n=_.indexOf(e.currentTarget)-1;t=_[n]??_[_.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",i)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},y.map((e=>{let{value:n,label:t,attributes:c}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>_.push(e),onKeyDown:C,onClick:I},c,{className:(0,s.Z)("tabs__item",u,null==c?void 0:c.className,{"tabs__item--active":v===n})}),t??n)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function f(e){const n=(0,c.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);