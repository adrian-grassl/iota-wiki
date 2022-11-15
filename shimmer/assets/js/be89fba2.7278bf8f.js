"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[11682],{99599:(n,e,t)=>{t.d(e,{ZP:()=>s});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function s(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Online Faucet",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can request test funds from the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet"),".")))}s.isMDXComponent=!0},529:(n,e,t)=>{t.d(e,{ZP:()=>s});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function s(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}s.isMDXComponent=!0},11934:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>M,contentTitle:()=>A,default:()=>D,frontMatter:()=>I,metadata:()=>N,toc:()=>S});var a=t(87462),o=(t(67294),t(3905)),c=t(34259),s=t(18679),r=t(69319);const d={toc:[]};function i(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example sends IOTA micro transactions to an address.\n */\n\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n        const account = await manager.getAccount('Alice');\n\n        await account.sync();\n\n        //TODO: Replace with the address of your choice!\n        const address =\n            'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0';\n        const amount = '1000';\n\n        const response = await account.sendMicroTransaction([\n            {\n                address,\n                amount,\n            },\n        ]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 4c-send-micro-transaction.js"))}i.isMDXComponent=!0;const l={toc:[]};function u(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0xad0e11ab7795212f3ff497e06c22218a18b297280e26e1d6392d217244879348',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: '0x20cc5acd8af1a9d27b181632ef32818a721622ab0c9d887977b2f1501dd0ae42',\n  inclusionState: 'Pending',\n  timestamp: '1662654628971',\n  transactionId: '0x91a469ff1008ed3dc21d02aa6c20d8c2c048c5f096d7c9af797d3215f824e369',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x20cc5acd8af1a9d27b181632ef32818a721622ab0c9d887977b2f1501dd0ae42\n\n")))}u.isMDXComponent=!0;const p={toc:[]};function m(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_wallet import IotaWallet\n\n# In this example we will send an amount below the minimum storage deposit\n\nwallet = IotaWallet(\'./alice-database\')\n\naccount = wallet.get_account(\'Alice\')\n\n# Sync account with the node\nresponse = account.sync_account()\nprint(f\'Synced: {response}\')\n\nwallet.set_stronghold_password("some_hopefully_secure_password")\n\noutputs = [{\n    "address": "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu",\n    "amount": "1",\n}]\n\ntransaction = account.send_micro_transaction(outputs, None)\n\nprint(f\'Sent transaction: {transaction}\')\n'),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 4-send-micro-transaction.py"))}m.isMDXComponent=!0;const f={toc:[]};function b(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Synced:{\n    'baseCoin':{\n        'total':'3302280903',\n        'available':'3302280903'\n    },\n    'requiredStorageDeposit':'910393500',\n    'nativeTokens':[\n        {\n            'tokenId':'0x08b83d49922e341d2cb45159707cfafdc9dc8fdb9d119543480dbaa5773eed8c4a0100000000',\n            'total':'0x64',\n            'available':'0x64'\n        }\n    ],\n    'nfts':[\n        '0xdc8be91d779aac048aa9001ab99ecf12cf62a4701185a95f6206a1a201bfbe7c',\n        '0x1b670afba8d59a445cbaf167f1fda05879362e3ea034f5c4a0979fbeb5a3964b',\n        '0x17f97185f80fa56eab974de6b7bbb80fa812d4e8e37090d166a0a41da129cebc',\n        '0x1e808b7c6e603aaeb5f718881a74fedae72981ac7d5f0294eb561cad0e653566',\n        '0xceae643ff7c112a3adce8f55f7953ba0707ade21256a7a09068c0b47f7c62c5b',\n        '0x77133189021f50d8d66e0678e553af9f46a832a24239653d3555edb8dc859e1f',\n        '0x3f0e11e9d9f48a57d0fba43d7d1158ee673cb8055f80a5ce45ad174c962c0d8a'\n    ],\n    'aliases':[\n        \n    ],\n    'foundries':[\n        \n    ],\n    'potentiallyLockedOutputs':{\n        \n    }\n}\nSent transaction:{\n    'payload':{\n        'type':6,\n        'essence':{\n            'type':1,\n            'networkId':'8342982141227064571',\n            'inputs':[\n                {\n                    'type':0,\n                    'transactionId':'0x0220b5247654d05529f40b3d8cdb7ca6f89627038f47a68aa578b9e675ddc937',\n                    'transactionOutputIndex':19\n                },\n                {\n                    'type':0,\n                    'transactionId':'0x0220b5247654d05529f40b3d8cdb7ca6f89627038f47a68aa578b9e675ddc937',\n                    'transactionOutputIndex':20\n                }\n            ],\n            'inputsCommitment':'0x106eac89e7db625c039af5193be5050a57c431e68d1c331bb323d36f0d4dc812',\n            'outputs':[\n                {\n                    'type':3,\n                    'amount':'50601',\n                    'unlockConditions':[\n                        {\n                            'type':0,\n                            'address':{\n                                'type':0,\n                                'pubKeyHash':'0x60200bad8137a704216e84f8f9acfe65b972d9f4155becb4815282b03cef99fe'\n                            }\n                        },\n                        {\n                            'type':1,\n                            'returnAddress':{\n                                'type':0,\n                                'pubKeyHash':'0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                            },\n                            'amount':'50600'\n                        },\n                        {\n                            'type':3,\n                            'returnAddress':{\n                                'type':0,\n                                'pubKeyHash':'0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                            },\n                            'unixTime':1666003100\n                        }\n                    ]\n                },\n                {\n                    'type':3,\n                    'amount':'50599',\n                    'unlockConditions':[\n                        {\n                            'type':0,\n                            'address':{\n                                'type':0,\n                                'pubKeyHash':'0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                            }\n                        }\n                    ]\n                }\n            ]\n        },\n        'unlocks':[\n            {\n                'type':0,\n                'signature':{\n                    'type':0,\n                    'publicKey':'0xe62838fda7e8b77bf80e49967f0f089ae2a7230547d5231649732952f6336fae',\n                    'signature':'0xf232856bbbc386277820fa30db7ba0b151ff8eea162732001ab532b8650c800880ac2fc6f28cab74ca752a6cbfdc046e860f0a08e99355d0a71f6c18b1d15906'\n                }\n            },\n            {\n                'type':1,\n                'reference':0\n            }\n        ]\n    },\n    'blockId':'0xfe42f0281946d1b5bdd8ad185c7849163a0f86c49a22300ea5fd4bb53afba258',\n    'inclusionState':'Pending',\n    'timestamp':'1665916700678',\n    'transactionId':'0x850c1e43dff1a28a42d71edc6d4ad0b9f251c03993f9b0684a34f645514ffe27',\n    'networkId':'8342982141227064571',\n    'incoming':False,\n    'note':None\n}\n")))}b.isMDXComponent=!0;const h={toc:[]};function y(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{className:"language-java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class SendMicroTransaction {\n    public static void main(String[] args) throws WalletException, InterruptedException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias("Alice"));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // Fund the account for this example.\n        ExampleUtils.fundAccount(a);\n\n        // TODO: replace with your own values.\n        String receiverAddress = a.getPublicAddresses()[0].getAddress();\n        String amount = "1";\n\n        // Configure outputs\n        Transaction t = a.sendMicroTransaction(new org.iota.types.account_methods.SendMicroTransaction().withAddressesWithMicroAmount(new AddressWithMicroAmount[]{new AddressWithMicroAmount()\n                .withAddress(receiverAddress)\n                .withAmount(amount)\n        }));\n\n        // Print transaction\n        System.out.println(t);\n    }\n\n}'))}y.isMDXComponent=!0;const x={toc:[]};function g(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},x,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload":{\n    "type":6,\n    "essence":{\n      "type":1,\n      "networkId":"8342982141227064571",\n      "inputs":[\n        {\n          "type":0,\n          "transactionId":"0xce5504e02bf0796e48143d5daa1753500e798dbab673e14bb671512750f7d03a",\n          "transactionOutputIndex":0\n        },\n        {\n          "type":0,\n          "transactionId":"0x27df04eac1408b4ec758f6aa222d616b21d9b237789e601d9d0b81aa6466fa97",\n          "transactionOutputIndex":2\n        }\n      ],\n      "inputsCommitment":"0x01a6a0ee6942ce4fd0196c1d54db56eb44cd6b983505bede16b6b5b9d0b4f835",\n      "outputs":[\n        {\n          "type":3,\n          "amount":"50601",\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            },\n            {\n              "type":1,\n              "returnAddress":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              },\n              "amount":"50600"\n            },\n            {\n              "type":3,\n              "returnAddress":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              },\n              "unixTime":1664887368\n            }\n          ]\n        },\n        {\n          "type":4,\n          "amount":"50300",\n          "aliasId":"0x429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef",\n          "stateIndex":10,\n          "stateMetadata":"0x",\n          "foundriesCounter":0,\n          "unlockConditions":[\n            {\n              "type":4,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            },\n            {\n              "type":5,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        },\n        {\n          "type":3,\n          "amount":"2096427899",\n          "nativeTokens":[\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0100000000",\n              "amount":"0x3233"\n            },\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0200000000",\n              "amount":"0x3233"\n            },\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0400000000",\n              "amount":"0x17"\n            }\n          ],\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks":[\n      {\n        "type":0,\n        "signature":{\n          "type":0,\n          "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature":"0x114f1c0ad726278b2d5167cb1b112529aa63cc0e3cf01c7936151f968050ff20a3d1385f708c36bd3761c38ddcba8ce735258ab5bd9cc1afa42510ddf6102e03"\n        }\n      },\n      {\n        "type":1,\n        "reference":0\n      }\n    ]\n  },\n  "blockId":"0x8f9f12a968c32cc3d51e978f4de34252bc769ee7188e33a21f9351a7c1f122f3",\n  "inclusionState":"Pending",\n  "timestamp":"1664887369004",\n  "transactionId":"0xaccae1f4e78ee169d0fc1d99843e6cd417290da91aa62c696fa507d21fd245cc",\n  "networkId":"8342982141227064571",\n  "incoming":false\n}\n')))}g.isMDXComponent=!0;var k=t(529);const w={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function v(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(k.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example send_micro_transaction --release\n// In this example we will send an amount below the minimum storage deposit\n// Rename `.env.example` to `.env` first\n\nuse std::env;\n\nuse dotenv::dotenv;\nuse iota_wallet::{account_manager::AccountManager, AddressWithMicroAmount, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    let outputs = vec![AddressWithMicroAmount {\n        address: "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu".to_string(),\n        amount: 1,\n        return_address: None,\n        expiration: None,\n    }];\n\n    let transaction = account.send_micro_transaction(outputs, None).await?;\n\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example send_micro_transaction --release"))}v.isMDXComponent=!0;const _={toc:[]};function T(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction: 0x78abf6499023396fa9510155237542500015da882e2676bc9e5cd8280e3c15e6\nBlock sent: http://localhost:14265/api/core/v2/blocks/0xe601e25316c17c9aaa19de881aacd55ac270bc99697d34c4a9f4e57edf10cbe2\n")))}T.isMDXComponent=!0;var C=t(99599);const I={title:"Send a Micro Transaction",description:"How to send a microtransaction using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","micro-transaction","send micro-transaction","microtransaction","send microtransaction","nodejs","python","java","rust"]},A=void 0,N={unversionedId:"how_tos/outputs_and_transactions/send_micro_transaction",id:"how_tos/outputs_and_transactions/send_micro_transaction",title:"Send a Micro Transaction",description:"How to send a microtransaction using wallet.rs",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/02_send_micro_transaction.mdx",sourceDirName:"how_tos/outputs_and_transactions",slug:"/how_tos/outputs_and_transactions/send_micro_transaction",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/send_micro_transaction",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/02_send_micro_transaction.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Send a Micro Transaction",description:"How to send a microtransaction using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","micro-transaction","send micro-transaction","microtransaction","send microtransaction","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Send a Transaction",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/send_transaction"},next:{title:"List Outputs",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/list_outputs"}},M={},S=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],Z={toc:S};function D(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},Z,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to send an amount below the minimum storage deposit, you should use a microtransaction."),(0,o.kt)(C.ZP,{mdxType:"TipFaucet"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Create the outputs for a microtransaction."),(0,o.kt)("li",{parentName:"ol"},"Send the micro-microtransaction using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.send_micro_transaction(addresses_with_micro_amount, options)")," function.")),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(v,{mdxType:"RustCode"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(i,{mdxType:"NodejsCode"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"PythonCode"})),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(T,{mdxType:"RustOutput"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"PythonOutput"})),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(g,{mdxType:"JavaOutput"}))))}D.isMDXComponent=!0},18679:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(67294),o=t(86010);const c="tabItem_Ymn6";function s(n){let{children:e,hidden:t,className:s}=n;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(c,s),hidden:t},e)}},34259:(n,e,t)=>{t.d(e,{Z:()=>m});var a=t(87462),o=t(67294),c=t(86010),s=t(51048),r=t(33609),d=t(1943),i=t(72957);const l="tabList__CuJ",u="tabItem_LNqP";function p(n){var e;const{lazy:t,block:s,defaultValue:p,values:m,groupId:f,className:b}=n,h=o.Children.map(n.children,(n=>{if((0,o.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((n=>{let{props:{value:e,label:t,attributes:a}}=n;return{value:e,label:t,attributes:a}})),x=(0,r.l)(y,((n,e)=>n.value===e.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(e=h.find((n=>n.props.default)))?void 0:e.props.value)??h[0].props.value;if(null!==g&&!y.some((n=>n.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,d.U)(),[v,_]=(0,o.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.o5)();if(null!=f){const n=k[f];null!=n&&n!==v&&y.some((e=>e.value===n))&&_(n)}const I=n=>{const e=n.currentTarget,t=T.indexOf(e),a=y[t].value;a!==v&&(C(e),_(a),null!=f&&w(f,String(a)))},A=n=>{var e;let t=null;switch(n.key){case"ArrowRight":{const e=T.indexOf(n.currentTarget)+1;t=T[e]??T[0];break}case"ArrowLeft":{const e=T.indexOf(n.currentTarget)-1;t=T[e]??T[T.length-1];break}}null==(e=t)||e.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",l)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},b)},y.map((n=>{let{value:e,label:t,attributes:s}=n;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:n=>T.push(n),onKeyDown:A,onFocus:I,onClick:I},s,{className:(0,c.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":v===e})}),t??e)}))),t?(0,o.cloneElement)(h.filter((n=>n.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==v})))))}function m(n){const e=(0,s.Z)();return o.createElement(p,(0,a.Z)({key:String(e)},n))}}}]);