"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[6397],{58352:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Iota.js",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can also find this guide in the native ",(0,o.kt)("a",{href:t.exampleURL}," iota.js library"))))}s.isMDXComponent=!0},99599:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Online Faucet",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can request test funds from the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet"),".")))}s.isMDXComponent=!0},529:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}s.isMDXComponent=!0},45087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>j,default:()=>D,frontMatter:()=>A,metadata:()=>N,toc:()=>S});var a=t(87462),o=(t(67294),t(3905)),c=t(34259),s=t(18679),d=t(69319);const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example sends a specified amount to an address.\n */\n\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n        const account = await manager.getAccount('Alice');\n        console.log('Account:', account);\n\n        await account.sync();\n\n        //TODO: Replace with the address of your choice!\n        const address =\n            'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0';\n        const amount = '1000000';\n\n        const response = await account.sendAmount([\n            {\n                address,\n                amount,\n            },\n        ]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(d.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 4a-send-amount.js"))}l.isMDXComponent=!0;const i={toc:[]};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Account: Account {\n  meta: {\n    index: 0,\n    coinType: 4219,\n    alias: 'Alice',\n    publicAddresses: [ [Object], [Object] ],\n    internalAddresses: [],\n    addressesWithUnspentOutputs: [ [Object], [Object] ],\n    outputs: {\n      '0xcb1be0ba2ce57ea3828133e23f1a278d1b37975d75ead9f3383fd640a4ba53c30000': [Object],\n      '0x8a9ecb96b14a57eddea704f4aa07cfe9edfa5a97080901632276b128ae7d8adb7300': [Object],\n      '0x607d5dfac8dd4fe05bfe62782954447334ef37b0968c690591dc8f261c3b881a4900': [Object],\n      '0xb2435d5b02df29da6ddf236f42683546857b7413cabf71bd20a8fd097c7e9f8e0000': [Object],\n      '0x52b65cf6c5e53e17ab8cc6be6832e354f4f021908e002e1fbb624e80d9eeb5fb0000': [Object],\n      '0xfa2cf42a07a51d4e7d2a2bcd63202400264b108938945ee53237de91d255c95c0100': [Object],\n      '0x7116076c27a926d5ebed504ec0a94c580920b3e9a8374197cc08e759953bc01a0000': [Object],\n      '0x3800d06480923efd65bfc0d5c9b17e4924cca375d1342908b39b3ca70a1cff8f0100': [Object],\n      '0x54bebd37b99bcf264b8ae1ebbe3dc5b0c54848f2ae24b4ded939416b6cf36b1d0000': [Object],\n      '0xcbe05ec9b535318f3210b3116c482c8b2d3e6f01f83d9250c61d87495355ecd70000': [Object]\n    },\n    lockedOutputs: [\n      '0x3800d06480923efd65bfc0d5c9b17e4924cca375d1342908b39b3ca70a1cff8f0100'\n    ],\n    unspentOutputs: {\n      '0x54bebd37b99bcf264b8ae1ebbe3dc5b0c54848f2ae24b4ded939416b6cf36b1d0000': [Object],\n      '0xfa2cf42a07a51d4e7d2a2bcd63202400264b108938945ee53237de91d255c95c0100': [Object],\n      '0xb2435d5b02df29da6ddf236f42683546857b7413cabf71bd20a8fd097c7e9f8e0000': [Object],\n      '0xcbe05ec9b535318f3210b3116c482c8b2d3e6f01f83d9250c61d87495355ecd70000': [Object],\n      '0x8a9ecb96b14a57eddea704f4aa07cfe9edfa5a97080901632276b128ae7d8adb7300': [Object],\n      '0x607d5dfac8dd4fe05bfe62782954447334ef37b0968c690591dc8f261c3b881a4900': [Object],\n      '0xcb1be0ba2ce57ea3828133e23f1a278d1b37975d75ead9f3383fd640a4ba53c30000': [Object],\n      '0x52b65cf6c5e53e17ab8cc6be6832e354f4f021908e002e1fbb624e80d9eeb5fb0000': [Object],\n      '0x3800d06480923efd65bfc0d5c9b17e4924cca375d1342908b39b3ca70a1cff8f0100': [Object],\n      '0x7116076c27a926d5ebed504ec0a94c580920b3e9a8374197cc08e759953bc01a0000': [Object]\n    },\n    transactions: {\n      '0x91a469ff1008ed3dc21d02aa6c20d8c2c048c5f096d7c9af797d3215f824e369': [Object]\n    },\n    pendingTransactions: [\n      '0x91a469ff1008ed3dc21d02aa6c20d8c2c048c5f096d7c9af797d3215f824e369'\n    ],\n    incomingTransactions: {}\n  },\n  messageHandler: MessageHandler { messageHandler: [External: 7f40e2e18a40] }\n}\n{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0x4a56ceb8ee05b747b73e97bdb093be9f885b6ba27562c91a1d8745d9ccfd57e1',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: '0x1650f471475bb0a64d3783f62b391d59b00b0eadb64ec717ac986b6725c7cfcb',\n  inclusionState: 'Pending',\n  timestamp: '1662654717453',\n  transactionId: '0x17670e2cda90f199c3e07188068c38ad856274e98d4913b80da8e3830db7afc4',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x1650f471475bb0a64d3783f62b391d59b00b0eadb64ec717ac986b6725c7cfcb\n\n")))}u.isMDXComponent=!0;const p={toc:[]};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_wallet import IotaWallet\n\n# This example sends a transaction.\n\nwallet = IotaWallet(\'./alice-database\')\n\naccount = wallet.get_account(\'Alice\')\n\n# Sync account with the node\nresponse = account.sync_account()\nprint(f\'Synced: {response}\')\n\nwallet.set_stronghold_password("some_hopefully_secure_password")\n\noutputs = [{\n    "address": "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu",\n    "amount": "1000000",\n}]\n\ntransaction = account.send_amount(outputs)\n\nprint(f\'Sent transaction: {transaction}\')\n'),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(d.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 3-send-transaction.py"))}b.isMDXComponent=!0;const m={toc:[]};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Synced: {\n  'baseCoin': {\n    'total': '3490057203',\n    'available': '3490057203'\n  },\n  'requiredStorageDeposit': '98250300',\n  'nativeTokens': [\n    {\n      'tokenId': '0x08b83d49922e341d2cb45159707cfafdc9dc8fdb9d119543480dbaa5773eed8c4a0100000000',\n      'total': '0x64',\n      'available': '0x64'\n    }\n  ],\n  'nfts': [\n    '0xceae643ff7c112a3adce8f55f7953ba0707ade21256a7a09068c0b47f7c62c5b',\n    '0x1e808b7c6e603aaeb5f718881a74fedae72981ac7d5f0294eb561cad0e653566',\n    '0x77133189021f50d8d66e0678e553af9f46a832a24239653d3555edb8dc859e1f',\n    '0x17f97185f80fa56eab974de6b7bbb80fa812d4e8e37090d166a0a41da129cebc',\n    '0x1b670afba8d59a445cbaf167f1fda05879362e3ea034f5c4a0979fbeb5a3964b',\n    '0x3f0e11e9d9f48a57d0fba43d7d1158ee673cb8055f80a5ce45ad174c962c0d8a',\n    '0xdc8be91d779aac048aa9001ab99ecf12cf62a4701185a95f6206a1a201bfbe7c'\n  ],\n  'aliases': [\n    \n  ],\n  'foundries': [\n    \n  ],\n  'potentiallyLockedOutputs': {\n    '0x8dd4f722a18f3b5822216e856a98ea480fbfaa205f10c08d36dc5ab21efcc8355600': False\n  }[\n    ...\n  ]\n]\n\nSenttransaction: {\n  'payload': {\n    'type': 6,\n    'essence': {\n      'type': 1,\n      'networkId': '8342982141227064571',\n      'inputs': [\n        {\n          'type': 0,\n          'transactionId': '0x29ddaad7f39b1bd0e48e922984cc9556ecb895ad3ee49aec959730920af7382f',\n          'transactionOutputIndex': 0\n        }\n      ],\n      'inputsCommitment': '0x2f70c8557f53f8c2483eceab991c6b7f5dad9895cd0c3785e774f26adbe04394',\n      'outputs': [\n        {\n          'type': 3,\n          'amount': '1000000',\n          'unlockConditions': [\n            {\n              'type': 0,\n              'address': {\n                'type': 0,\n                'pubKeyHash': '0x60200bad8137a704216e84f8f9acfe65b972d9f4155becb4815282b03cef99fe'\n              }\n            }\n          ]\n        },\n        {\n          'type': 3,\n          'amount': '999000000',\n          'unlockConditions': [\n            {\n              'type': 0,\n              'address': {\n                'type': 0,\n                'pubKeyHash': '0x7ee9442e9bec8eec93ec92951819df3d728dcfec3dd21967b81e1fd1c6490ce8'\n              }\n            }\n          ]\n        }\n      ]\n    },\n    'unlocks': [\n      {\n        'type': 0,\n        'signature': {\n          'type': 0,\n          'publicKey': '0x4a654582703d09ea79c172d7bb475c439b8ad60234ee8adc7636a31d32970ed5',\n          'signature': '0xc34a5c29f627a1f664233786d29cdf8dde726970c22c7418370459ef4a8df887c007d2d05caebccda3edc34fd12eb0b1ffad849a43a1ae7057482b0420c4590c'\n        }\n      }\n    ]\n  },\n  'blockId': '0xe187bd31ef751897a55f08dde47ef8560e3b2f96af1de77dac4f714a1e757517',\n  'inclusionState': 'Pending',\n  'timestamp': '1662654181658',\n  'transactionId': '0xb40d2a02805712bd88c5d3663eee228379a4acdd365fbc301d9cf79c46540c72',\n  'networkId': '8342982141227064571',\n  'incoming': False,\n  'note': None\n}\n")))}f.isMDXComponent=!0;var h=t(529);const y={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function x(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(h.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(d.Z,{className:"language-rust",highlight:!0,mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example transaction --release\n// In this example we will send a transaction\n// Rename `.env.example` to `.env` first\n\nuse std::env;\n\nuse dotenv::dotenv;\nuse iota_wallet::{account_manager::AccountManager, AddressWithAmount, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // Send a transaction with 1 Mi\n    let outputs = vec![AddressWithAmount {\n        address: "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu".to_string(),\n        amount: 1_000_000,\n    }];\n    let transaction = account.send_amount(outputs, None).await?;\n\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(d.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example transaction --release"))}x.isMDXComponent=!0;const k={toc:[]};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction: 0x6b05d2023a690e60464b507653601d990bacb3eada64e04981b7c3a417c07500 \nBlock sent: http://localhost:14265/api/core/v2/blocks/0x1b6839d2de7a7d856ab2cd66a3325a8fe0618e2d5406d1295348133abd09ee8e\n")))}g.isMDXComponent=!0;const w={toc:[]};function v(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d.Z,{className:"language-java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class SendAmount {\n    public static void main(String[] args) throws WalletException, InterruptedException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias("Alice"));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // Fund the account for this example.\n        ExampleUtils.fundAccount(a);\n\n        // TODO: replace with your own values.\n        String receiverAddress = a.getPublicAddresses()[0].getAddress();\n        String amount = "1000000";\n\n        // Send transaction.\n        Transaction t = a.sendAmount(new org.iota.types.account_methods.SendAmount().withAddressesWithAmount(new AddressWithAmount[]{new AddressWithAmount()\n                .withAddress(receiverAddress)\n                .withAmount(amount)\n        }));\n\n        // Print transaction.\n        System.out.println(t);\n    }\n\n}'))}v.isMDXComponent=!0;const _={toc:[]};function T(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": {\n    "type": 6,\n    "essence": {\n      "type": 1,\n      "networkId": "8342982141227064571",\n      "inputs": [\n        {\n          "type": 0,\n          "transactionId": "0xd27ce4f6e398e9681d6e707ad2b7bc8c99183ede6a448741a1ece7036beadfbe",\n          "transactionOutputIndex": 0\n        }\n      ],\n      "inputsCommitment": "0x8fb5d5215f674fb0f9633b8854efb5ecccb4293489571dc611fc7cf03d95f43e",\n      "outputs": [\n        {\n          "type": 3,\n          "amount": "1000000",\n          "unlockConditions": [\n            {\n              "type": 0,\n              "address": {\n                "type": 0,\n                "pubKeyHash": "0x60200bad8137a704216e84f8f9acfe65b972d9f4155becb4815282b03cef99fe"\n              }\n            }\n          ]\n        },\n        {\n          "type": 3,\n          "amount": "2096687300",\n          "nativeTokens": [\n            {\n              "id": "0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0100000000",\n              "amount": "0x3233"\n            },\n            {\n              "id": "0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0200000000",\n              "amount": "0x3233"\n            },\n            {\n              "id": "0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0300000000",\n              "amount": "0x17"\n            }\n          ],\n          "unlockConditions": [\n            {\n              "type": 0,\n              "address": {\n                "type": 0,\n                "pubKeyHash": "0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks": [\n      {\n        "type": 0,\n        "signature": {\n          "type": 0,\n          "publicKey": "0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature": "0x7b6f589fd0110e50130962c1674cf0bc23e73dd256618daa414249ad0d20c5a7e2ebc7d2e87e5a3049dab0a3657f0b4439e8b051f97cb8dbfe69f173106a1b07"\n        }\n      }\n    ]\n  },\n  "blockId": "0x67bb313da84f73c52e4c6e558249a6c334ec672bb64a9192b5e6c8b6e9d09b97",\n  "inclusionState": "Pending",\n  "timestamp": "1664304732407",\n  "transactionId": "0x57aba1c7060c577f4404692e673910fa05dadf30e09a1cbc6aad2439628011e1",\n  "networkId": "8342982141227064571",\n  "incoming": false\n}\n')))}T.isMDXComponent=!0;var O=t(99599),C=t(58352);const A={title:"Send a Transaction",description:"How to send a value transaction using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","java","nodejs","python","rust","java"]},j=void 0,N={unversionedId:"how_tos/outputs_and_transactions/send_transaction",id:"how_tos/outputs_and_transactions/send_transaction",title:"Send a Transaction",description:"How to send a value transaction using wallet.rs",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/01_send_transaction.mdx",sourceDirName:"how_tos/outputs_and_transactions",slug:"/how_tos/outputs_and_transactions/send_transaction",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/send_transaction",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/01_send_transaction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Send a Transaction",description:"How to send a value transaction using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","java","nodejs","python","rust","java"]},sidebar:"docs",previous:{title:"Check Balance",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/check_balance"},next:{title:"Send a Micro Transaction",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/send_micro_transaction"}},I={},S=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],Z={toc:S};function D(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},Z,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you have ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created your account")," and\n",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/request_funds"},"requested funds from the faucet")," you are ready to send your first\ntransaction."),(0,o.kt)(O.ZP,{mdxType:"TipFaucet"}),(0,o.kt)(C.ZP,{exampleURL:"https://wiki.iota.org/iotajs/how_tos/transaction",mdxType:"IOTAJsExample"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Send 1 SMR to an address using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.send_amount(addresses_with_amount, options)")," function. Make sure to update the code sample to send to the address of your choice.")),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(x,{mdxType:"RustCode"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(l,{mdxType:"NodejsCode"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"PythonCode"})),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(v,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(g,{mdxType:"RustOutput"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"PythonOutput"})),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(T,{mdxType:"JavaOutput"}))))}D.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),o=t(86010);const c="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(c,s),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(87462),o=t(67294),c=t(86010),s=t(51048),d=t(33609),r=t(1943),l=t(72957);const i="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:t,block:s,defaultValue:p,values:b,groupId:m,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=b??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),x=(0,d.l)(y,((e,n)=>e.value===n.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,r.U)(),[v,_]=(0,o.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=m){const e=g[m];null!=e&&e!==v&&y.some((n=>n.value===e))&&_(e)}const C=e=>{const n=e.currentTarget,t=T.indexOf(n),a=y[t].value;a!==v&&(O(n),_(a),null!=m&&w(m,String(a)))},A=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",i)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},f)},y.map((e=>{let{value:n,label:t,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>T.push(e),onKeyDown:A,onFocus:C,onClick:C},s,{className:(0,c.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":v===n})}),t??n)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function b(e){const n=(0,s.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);