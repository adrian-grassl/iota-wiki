"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[52009],{22352:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function i(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Online Faucet",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can request test funds from the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet"),".")))}i.isMDXComponent=!0},85227:(n,e,t)=>{t.d(e,{ZP:()=>i});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function i(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}i.isMDXComponent=!0},56088:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>O,contentTitle:()=>C,default:()=>Z,frontMatter:()=>I,metadata:()=>S,toc:()=>D});var a=t(87462),o=(t(67294),t(3905)),c=t(34259),i=t(18679),s=t(69319);const d={toc:[]};function r(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example mints native tokens\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        // First create an alias output, this needs to be done only once, because an alias can have many foundry outputs.\n        let tx = await account.createAliasOutput()\n        console.log('Transaction ID: ', tx.transactionId);\n\n        // Wait for transaction inclusion\n        await new Promise(resolve => setTimeout(resolve, 5000));\n\n        await account.sync();\n\n        // If we omit the AccountAddress field the first address of the account is used by default\n        const nativeTokenOptions = {\n            // Hello in bytes\n            foundryMetadata: '0x48656c6c6f',\n            circulatingSupply: '0x64',\n            maximumSupply: '0x64',\n        };\n\n        let { transaction } = await account.mintNativeToken(\n            nativeTokenOptions,\n        );\n        console.log('Transaction ID: ', transaction.transactionId);\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 22-mint-native-tokens.js"))}r.isMDXComponent=!0;const l={toc:[]};function u(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Transaction ID:  0x4cd9cca67165b3ae5160e5b3bad5a677d93140e3692c378ed5c661160e37ce09\n")))}u.isMDXComponent=!0;const p={toc:[]};function m(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_wallet import IotaWallet\nimport time\n\n# In this example we will mint native tokens\n\nwallet = IotaWallet(\'./alice-database\')\n\naccount = wallet.get_account(\'Alice\')\n\n# Sync account with the node\nresponse = account.sync_account()\nprint(f\'Synced: {response}\')\n\nwallet.set_stronghold_password("some_hopefully_secure_password")\n\ntransaction = account.create_alias_output(None, None)\n\n# Wait a few seconds for the transaction to get confirmed\ntime.sleep(7)\n\naccount.sync_account()\n\nnative_token_options = {\n    # 1000 hex encoded\n    "circulatingSupply": "0x3e8",\n    "maximumSupply": "0x3e8",\n    "foundryMetadata": "0xab",\n}\n\ntransaction = account.mint_native_token(native_token_options, None)\n\nprint(f\'Sent transaction: {transaction}\')\n'),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/examples")," folder:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 7-mint-native-tokens.py"))}m.isMDXComponent=!0;const f={toc:[]};function b(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Synced:{\n    'baseCoin':{\n        'total':'3302230302',\n        'available':'3302230302'\n    },\n    'requiredStorageDeposit':'910310000',\n    'nativeTokens':[\n        {\n            'tokenId':'0x08b83d49922e341d2cb45159707cfafdc9dc8fdb9d119543480dbaa5773eed8c4a0100000000',\n            'total':'0x64',\n            'available':'0x64'\n        }\n    ],\n    'nfts':[\n        '0x17f97185f80fa56eab974de6b7bbb80fa812d4e8e37090d166a0a41da129cebc',\n        '0xdc8be91d779aac048aa9001ab99ecf12cf62a4701185a95f6206a1a201bfbe7c',\n        '0x1e808b7c6e603aaeb5f718881a74fedae72981ac7d5f0294eb561cad0e653566',\n        '0x3f0e11e9d9f48a57d0fba43d7d1158ee673cb8055f80a5ce45ad174c962c0d8a',\n        '0x77133189021f50d8d66e0678e553af9f46a832a24239653d3555edb8dc859e1f',\n        '0xceae643ff7c112a3adce8f55f7953ba0707ade21256a7a09068c0b47f7c62c5b',\n        '0x1b670afba8d59a445cbaf167f1fda05879362e3ea034f5c4a0979fbeb5a3964b'\n    ],\n    'aliases':[\n        '0xa5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d',\n        '0xf9c702ffe50c35d331b2df02295c2cc6d92f883530ff231bd76d1f6a72cb1d95',\n        '0x97eb7a447cd62e1c373ff8188ba422f5c1b0687707d38e10e8366a1c20d33fea'\n    ],\n    'foundries':[\n        \n    ],\n    'potentiallyLockedOutputs':{\n        '0x850c1e43dff1a28a42d71edc6d4ad0b9f251c03993f9b0684a34f645514ffe270000':False\n    }\n}\nSent transaction:{\n    'tokenId':'0x08a5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d0100000000',\n    'transaction':{\n        'payload':{\n            'type':6,\n            'essence':{\n                'type':1,\n                'networkId':'8342982141227064571',\n                'inputs':[\n                    {\n                        'type':0,\n                        'transactionId':'0x8defcb4d5bc2dd45ca616b01d87399eef5bde2bfb4d9f33695a0cab78cb731f0',\n                        'transactionOutputIndex':0\n                    },\n                    {\n                        'type':0,\n                        'transactionId':'0x0220b5247654d05529f40b3d8cdb7ca6f89627038f47a68aa578b9e675ddc937',\n                        'transactionOutputIndex':29\n                    },\n                    {\n                        'type':0,\n                        'transactionId':'0x0220b5247654d05529f40b3d8cdb7ca6f89627038f47a68aa578b9e675ddc937',\n                        'transactionOutputIndex':30\n                    },\n                    {\n                        'type':0,\n                        'transactionId':'0x0220b5247654d05529f40b3d8cdb7ca6f89627038f47a68aa578b9e675ddc937',\n                        'transactionOutputIndex':31\n                    }\n                ],\n                'inputsCommitment':'0xeefde614b74d871154856ad4a8a53214492ee8859a3faef4cafa92afe36f12c5',\n                'outputs':[\n                    {\n                        'type':4,\n                        'amount':'50300',\n                        'aliasId':'0xa5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d',\n                        'stateIndex':1,\n                        'stateMetadata':'0x',\n                        'foundryCounter':1,\n                        'unlockConditions':[\n                            {\n                                'type':4,\n                                'address':{\n                                    'type':0,\n                                    'pubKeyHash':'0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                                }\n                            },\n                            {\n                                'type':5,\n                                'address':{\n                                    'type':0,\n                                    'pubKeyHash':'0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                                }\n                            }\n                        ]\n                    },\n                    {\n                        'type':5,\n                        'amount':'53200',\n                        'serialNumber':1,\n                        'tokenScheme':{\n                            'type':0,\n                            'mintedTokens':'0x3e8',\n                            'meltedTokens':'0x0',\n                            'maximumSupply':'0x3e8'\n                        },\n                        'unlockConditions':[\n                            {\n                                'type':6,\n                                'address':{\n                                    'type':8,\n                                    'aliasId':'0xa5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d'\n                                }\n                            }\n                        ],\n                        'immutableFeatures':[\n                            {\n                                'type':2,\n                                'data':'0xab'\n                            }\n                        ]\n                    },\n                    {\n                        'type':3,\n                        'amount':'98600',\n                        'nativeTokens':[\n                            {\n                                'id':'0x08a5526c4a15558b709340822edf00cb348d8606a27e2e59b00432a0afe8afb74d0100000000',\n                                'amount':'0x3e8'\n                            }\n                        ],\n                        'unlockConditions':[\n                            {\n                                'type':0,\n                                'address':{\n                                    'type':0,\n                                    'pubKeyHash':'0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                                }\n                            }\n                        ]\n                    }\n                ]\n            },\n            'unlocks':[\n                {\n                    'type':0,\n                    'signature':{\n                        'type':0,\n                        'publicKey':'0xe62838fda7e8b77bf80e49967f0f089ae2a7230547d5231649732952f6336fae',\n                        'signature':'0x47578dd3a390483d4de390f5f6ccc7af5838a9b0fb1ba0c519948c0d8638b4c0b86d0676f5fa616d5fdae53fec0fdacef72248a92ac388d8a20134528949380c'\n                    }\n                },\n                {\n                    'type':1,\n                    'reference':0\n                },\n                {\n                    'type':1,\n                    'reference':0\n                },\n                {\n                    'type':1,\n                    'reference':0\n                }\n            ]\n        },\n        'blockId':'0x50e0b55c5e618e3cb214a774c9574522e5b30118bebdef6cbb23c9cffeb2b347',\n        'inclusionState':'Pending',\n        'timestamp':'1665917714656',\n        'transactionId':'0x9d1e61384fc78777c8db475a3d6eaec6465c136dc3ce586ee46a9453aa3dfdc4',\n        'networkId':'8342982141227064571',\n        'incoming':False,\n        'note':None\n    }\n}\n")))}b.isMDXComponent=!0;const k={toc:[]};function y(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class MintNativeToken {\n    public static void main(String[] args) throws WalletException, InterruptedException, InitializeWalletException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes(Env.NODE))\n                .withSecretManager(\n                        new StrongholdSecretManager(Env.STRONGHOLD_PASSWORD, null, Env.STRONGHOLD_SNAPSHOT_PATH))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias(Env.ACCOUNT_NAME));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // Fund the account for this example.\n        ExampleUtils.fundAccount(a);\n\n        // TODO: replace with your own values.\n        NativeTokenOptions options = new NativeTokenOptions();\n        options.withCirculatingSupply("0x20"); // number 23 hex encoded\n        options.withMaximumSupply("0x45"); // number 69 hex encoded\n\n        // Send transaction.\n        MintTokenTransaction t = a.mintNativeToken(new org.iota.types.account_methods.MintNativeToken().withNativeTokenOptions(options));\n\n        // Print transaction.\n        System.out.println(t);\n    }\n\n}'))}y.isMDXComponent=!0;const x={toc:[]};function h(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},x,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tokenId":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0800000000",\n  "transaction":{\n    "payload":{\n      "type":6,\n      "essence":{\n        "type":1,\n        "networkId":"8342982141227064571",\n        "inputs":[\n          {\n            "type":0,\n            "transactionId":"0x5cf6c0b12f8799cda57e0579a18fcba76722db9bb9b5d10e459489d391b1937a",\n            "transactionOutputIndex":0\n          },\n          {\n            "type":0,\n            "transactionId":"0x5cf6c0b12f8799cda57e0579a18fcba76722db9bb9b5d10e459489d391b1937a",\n            "transactionOutputIndex":2\n          }\n        ],\n        "inputsCommitment":"0xd4f7b69a209e311e525e488c41a6b77ecc895f90ffdd1832ba31556f453fdd18",\n        "outputs":[\n          {\n            "type":4,\n            "amount":"50300",\n            "aliasId":"0x429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef",\n            "stateIndex":13,\n            "stateMetadata":"0x",\n            "foundriesCounter":0,\n            "unlockConditions":[\n              {\n                "type":4,\n                "address":{\n                  "type":0,\n                  "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n                }\n              },\n              {\n                "type":5,\n                "address":{\n                  "type":0,\n                  "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n                }\n              }\n            ]\n          },\n          {\n            "type":5,\n            "amount":"52800",\n            "serialNumber":8,\n            "tokenScheme":{\n              "type":0,\n              "mintedTokens":"0x20",\n              "meltedTokens":"0x0",\n              "maximumSupply":"0x45"\n            },\n            "unlockConditions":[\n              {\n                "type":6,\n                "address":{\n                  "type":8,\n                  "aliasId":"0x429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef"\n                }\n              }\n            ]\n          },\n          {\n            "type":3,\n            "amount":"2096320100",\n            "nativeTokens":[\n              {\n                "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0100000000",\n                "amount":"0x3233"\n              },\n              {\n                "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0200000000",\n                "amount":"0x3233"\n              },\n              {\n                "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0400000000",\n                "amount":"0x17"\n              },\n              {\n                "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0600000000",\n                "amount":"0x20"\n              },\n              {\n                "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0700000000",\n                "amount":"0x20"\n              },\n              {\n                "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0800000000",\n                "amount":"0x20"\n              }\n            ],\n            "unlockConditions":[\n              {\n                "type":0,\n                "address":{\n                  "type":0,\n                  "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n                }\n              }\n            ]\n          }\n        ]\n      },\n      "unlocks":[\n        {\n          "type":0,\n          "signature":{\n            "type":0,\n            "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n            "signature":"0x3c86bda5fd4e4f871a14920f7e630ec0cb8cbe7ccec03637441916b443a44c01ddc927459b6d20613025bd2a9e7f5afafd9cf1b2dbc979b128c6459de26da905"\n          }\n        },\n        {\n          "type":1,\n          "reference":0\n        }\n      ]\n    },\n    "blockId":"0xccde79f09a527c755f8cc78132543e58e1a100b19efc2a2ab5acc6525cd660f2",\n    "inclusionState":"Pending",\n    "timestamp":"1664896472744",\n    "transactionId":"0xf323167737a556fcfcfa9da0248fc39aa344c275484a6f224769d2379ca49352",\n    "networkId":"8342982141227064571",\n    "incoming":false\n  }\n}\n')))}h.isMDXComponent=!0;var v=t(85227);const w={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function g(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(v.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example mint_native_token --release\n// In this example we will mint a native token\n// Rename `.env.example` to `.env` first\n\nuse std::env;\n\nuse dotenv::dotenv;\nuse iota_wallet::{account_manager::AccountManager, NativeTokenOptions, Result, U256};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    account.sync(None).await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // First create an alias output, this needs to be done only once, because an alias can have many foundry outputs\n    let transaction = account.create_alias_output(None, None).await?;\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    // Wait for transaction to get included\n    account\n        .retry_until_included(&transaction.block_id.expect("no block created yet"), None, None)\n        .await?;\n\n    account.sync(None).await?;\n\n    let native_token_options = NativeTokenOptions {\n        alias_id: None,\n        circulating_supply: U256::from(100),\n        maximum_supply: U256::from(100),\n        foundry_metadata: None,\n    };\n\n    let transaction = account.mint_native_token(native_token_options, None).await?;\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.transaction.block_id.expect("no block created yet")\n    );\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example mint_native_token --release"))}g.isMDXComponent=!0;const _={toc:[]};function T(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction: 0xaa9737fb4007e8b0f4c181d6923b0e3547ae178c23c25233985bb22f61c84de7 \nBlock sent: http://localhost:14265/api/core/v2/blocks/0x807dbdde107008dcc9acae29a0e32c261590bef13e5f5d8d3bb60949e633abd8\n")))}T.isMDXComponent=!0;var N=t(22352);const I={title:"Mint Native Tokens",sidebar_label:"Mint",description:"How to mint native tokens using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","mint native tokens","mint","nodejs","python","java","rust"]},C=void 0,S={unversionedId:"how_tos/native_tokens/mint_native_token",id:"how_tos/native_tokens/mint_native_token",title:"Mint Native Tokens",description:"How to mint native tokens using wallet.rs.",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/01_mint_native_token.mdx",sourceDirName:"how_tos/native_tokens",slug:"/how_tos/native_tokens/mint_native_token",permalink:"/next/wallet.rs/how_tos/native_tokens/mint_native_token",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/01_mint_native_token.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Mint Native Tokens",sidebar_label:"Mint",description:"How to mint native tokens using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","mint native tokens","mint","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Destroy an Alias Output",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/destroy_alias_output"},next:{title:"Send",permalink:"/next/wallet.rs/how_tos/native_tokens/send_native_token"}},O={},D=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],M={toc:D};function Z(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},M,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use a node running the stardust update to mint\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/tokenization#native-tokens"},"native tokens"),".\nTo do so, you will only need to ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/accounts_and_addresses/request_funds"},"add some funds to your account"),", define\nthe native token's options and call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.mint_native_token(native_token_options, options)")," function."),(0,o.kt)(N.ZP,{mdxType:"TipFaucet"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's which was ",(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Create the ",(0,o.kt)("inlineCode",{parentName:"li"},"NativeTokenOptions"),"."),(0,o.kt)("li",{parentName:"ol"},"Mint the native token by calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.mint_native_token(native_token_options, options)")," function.")),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(g,{mdxType:"RustCode"})),(0,o.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(r,{mdxType:"NodejsCode"})),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"PythonCode"})),(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(T,{mdxType:"RustOutput"})),(0,o.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"PythonOutput"})),(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"JavaOutput"}))))}Z.isMDXComponent=!0},18679:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(67294),o=t(86010);const c="tabItem_Ymn6";function i(n){let{children:e,hidden:t,className:i}=n;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(c,i),hidden:t},e)}},34259:(n,e,t)=>{t.d(e,{Z:()=>m});var a=t(87462),o=t(67294),c=t(86010),i=t(51048),s=t(33609),d=t(1943),r=t(72957);const l="tabList__CuJ",u="tabItem_LNqP";function p(n){var e;const{lazy:t,block:i,defaultValue:p,values:m,groupId:f,className:b}=n,k=o.Children.map(n.children,(n=>{if((0,o.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??k.map((n=>{let{props:{value:e,label:t,attributes:a}}=n;return{value:e,label:t,attributes:a}})),x=(0,s.l)(y,((n,e)=>n.value===e.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(e=k.find((n=>n.props.default)))?void 0:e.props.value)??k[0].props.value;if(null!==h&&!y.some((n=>n.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,d.U)(),[g,_]=(0,o.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,r.o5)();if(null!=f){const n=v[f];null!=n&&n!==g&&y.some((e=>e.value===n))&&_(n)}const I=n=>{const e=n.currentTarget,t=T.indexOf(e),a=y[t].value;a!==g&&(N(e),_(a),null!=f&&w(f,String(a)))},C=n=>{var e;let t=null;switch(n.key){case"ArrowRight":{const e=T.indexOf(n.currentTarget)+1;t=T[e]??T[0];break}case"ArrowLeft":{const e=T.indexOf(n.currentTarget)-1;t=T[e]??T[T.length-1];break}}null==(e=t)||e.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",l)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},b)},y.map((n=>{let{value:e,label:t,attributes:i}=n;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,key:e,ref:n=>T.push(n),onKeyDown:C,onFocus:I,onClick:I},i,{className:(0,c.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":g===e})}),t??e)}))),t?(0,o.cloneElement)(k.filter((n=>n.props.value===g))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==g})))))}function m(n){const e=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(e)},n))}}}]);