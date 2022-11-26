"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[80963],{58352:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),s=(n(67294),n(3905));const o={toc:[]};function r(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Iota.js",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"You can also find this guide in the native ",(0,s.kt)("a",{href:n.exampleURL}," iota.js library"))))}r.isMDXComponent=!0},96183:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),s=(n(67294),n(3905));const o={toc:[]};function r(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Account Approaches",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Wallet.rs supports a ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/explanations/account_approaches#multi-account-approach"},"multi-account approach")," and\na ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/explanations/account_approaches#single-account-approach"},"single-account approach"),".")))}r.isMDXComponent=!0},529:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),s=(n(67294),n(3905));const o={toc:[]};function r(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Dotenv",type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}r.isMDXComponent=!0},8453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>M,contentTitle:()=>Z,default:()=>I,frontMatter:()=>C,metadata:()=>D,toc:()=>E});var a=n(87462),s=(n(67294),n(3905)),o=n(34259),r=n(18679),l=n(69319);const c={toc:[]};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example generates a new address.\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n        console.log('Account:', account);\n\n        const address = await account.generateAddress();\n        console.log('New address:', address);\n\n        // It's also possible to generate multiple addresses\n        // const addresses = await account.generateAddresses(2);\n        // console.log('New addresses:', addresses);\n\n        // Use the Faucet to send testnet tokens to your address:\n        console.log(\"Fill your address with the Faucet:  https://faucet.testnet.shimmer.network\")\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,s.kt)("p",null,"You can run the example by running the following command from the ",(0,s.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 2-generate-address.js"))}d.isMDXComponent=!0;const i={toc:[]};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"Account: Account {\n  meta: {\n    index: 0,\n    coinType: 4219,\n    alias: 'Alice',\n    publicAddresses: [ [Object] ],\n    internalAddresses: [],\n    addressesWithUnspentOutputs: [],\n    outputs: {},\n    lockedOutputs: [],\n    unspentOutputs: {},\n    transactions: {},\n    pendingTransactions: [],\n    incomingTransactions: {}\n  },\n  messageHandler: MessageHandler { messageHandler: [External: 7fa6ffff18d0] }\n}\nNew address: {\n  address: 'rms1qqqp07ychhkc3u68ueug0zqq9g0wtfgeatynr6ksm9jwud30rvlkyqnhpl5',\n  keyIndex: 1,\n  internal: false,\n  used: false\n}\nFill your address with the Faucet:  https://faucet.testnet.shimmer.network\n\n")))}u.isMDXComponent=!0;const p={toc:[]};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_wallet import IotaWallet\n\n# This example generates a new address.\n\nwallet = IotaWallet('./alice-database')\n\nwallet.set_stronghold_password(\"some_hopefully_secure_password\")\n\naccount = wallet.get_account('Alice')\n\naddress = account.generate_addresses(1)\n# address = account.generate_addresses(\n#     1, {'internal': True, 'metadata': {'syncing': True, 'network': 'Testnet'}})\nprint(f'Address: {address}')\n"),(0,s.kt)("p",null,"You can run the example by running the following command from the ",(0,s.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 1-generate-address.py"))}m.isMDXComponent=!0;const h={toc:[]};function g(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"Address: [\n  {\n    'address': 'rms1qplwj3pwn0kgamynajff2xqemu7h9rw0as7ayxt8hq0pl5wxfyxwsfdprdu',\n    'keyIndex': 1,\n    'internal': False,\n    'used': False\n  }\n]\n")))}g.isMDXComponent=!0;const w={toc:[]};function y(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,{className:"language-java",mdxType:"CodeBlock"},"// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.GenerateAddresses;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class GenerateAddress {\n    public static void main(String[] args) throws WalletException, InitializeWalletException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes(Env.NODE))\n                .withSecretManager(\n                        new StrongholdSecretManager(Env.STRONGHOLD_PASSWORD, null, Env.STRONGHOLD_SNAPSHOT_PATH))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias(Env.ACCOUNT_NAME));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // Generate two addresses.\n        AccountAddress[] addresses = a.generateAddresses(new GenerateAddresses().withAmount(2));\n\n        // Print the generated addresses.\n        for (AccountAddress address : addresses)\n            System.out.println(address.getAddress());\n    }\n}"))}y.isMDXComponent=!0;const k={toc:[]};function x(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"rms1qpx0mcrqq7t6up73n4na0zgsuuy4p0767ut0qq67ngctj7pg4tm2ynsuynp\nrms1qz8jdgvrerzv35s43pkdkawdr9x4t6xfnhcrt5tlgsyltgpwyx9ks4c5kct\nrms1qzjq2jwzp8ddh0gawgdskvtd6awlv82c8y0a9s6g7kgszn6ts95u6r4kx2n\n")))}x.isMDXComponent=!0;var v=n(529);const f={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function _(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(v.ZP,{mdxType:"DotEnvWarning"}),(0,s.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example generate_address --release\n// In this example we will generate an address\n// Rename `.env.example` to `.env` first\n\nuse std::env;\n\nuse dotenv::dotenv;\nuse iota_wallet::{account_manager::AccountManager, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    let address = account.generate_addresses(1, None).await?;\n    println!("Generated address: {}", address[0].address().to_bech32());\n\n    Ok(())\n}\n'),(0,s.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,s.kt)("p",null,"Run the example by running the following command:"),(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example generate_address --release"))}_.isMDXComponent=!0;const T={toc:[]};function b(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"Generated address: rms1qzzk86qv30l4e85ljtccxa0ruy8y7u8zn2dle3g8dv2tl2m4cu227a7n2wj\n")))}b.isMDXComponent=!0;var A=n(96183),N=n(58352);const C={title:"Generate an Address",description:"How to generate an address for a wallet account.",image:"/img/logo/iota_mark_light.png",keywords:["how to","generate address","generate wallet address","account manager","multi account approach","single account approach","nodejs","python","java","rust"]},Z=void 0,D={unversionedId:"how_tos/accounts_and_addresses/generate_address",id:"how_tos/accounts_and_addresses/generate_address",title:"Generate an Address",description:"How to generate an address for a wallet account.",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/accounts_and_addresses/02_generate_address.mdx",sourceDirName:"how_tos/accounts_and_addresses",slug:"/how_tos/accounts_and_addresses/generate_address",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/generate_address",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/accounts_and_addresses/02_generate_address.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Generate an Address",description:"How to generate an address for a wallet account.",image:"/img/logo/iota_mark_light.png",keywords:["how to","generate address","generate wallet address","account manager","multi account approach","single account approach","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Create a Wallet Account",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},next:{title:"Request Funds",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/request_funds"}},M={},E=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],j={toc:E};function I(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"After you have ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created an account"),", you have a single address in the account. But you can generate more addresses."),(0,s.kt)(A.ZP,{mdxType:"TipAccountApproaches"}),(0,s.kt)(N.ZP,{exampleURL:"https://wiki.iota.org/iotajs/how_tos/address",mdxType:"IOTAJsExample"}),(0,s.kt)("h2",{id:"code-example"},"Code Example"),(0,s.kt)("p",null,"The following example will:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create an account manager."),(0,s.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,s.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,s.kt)("li",{parentName:"ol"},"Generate an address in Alice's account.")),(0,s.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)(_,{mdxType:"RustCode"})),(0,s.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,s.kt)(d,{mdxType:"NodejsCode"})),(0,s.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(m,{mdxType:"PythonCode"})),(0,s.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(y,{mdxType:"JavaCode"}))),(0,s.kt)("h2",{id:"expected-output"},"Expected Output"),(0,s.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)(b,{mdxType:"RustOutput"})),(0,s.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,s.kt)(u,{mdxType:"NodejsOutput"})),(0,s.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(g,{mdxType:"PythonOutput"})),(0,s.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(x,{mdxType:"JavaOutput"}))))}I.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),s=n(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,r),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),s=n(67294),o=n(86010),r=n(51048),l=n(33609),c=n(1943),d=n(72957);const i="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:m,groupId:h,className:g}=e,w=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??w.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===p?p:p??(null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)??w[0].props.value;if(null!==x&&!y.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,c.U)(),[_,T]=(0,s.useState)(x),b=[],{blockElementScrollPositionUntilNextRender:A}=(0,d.o5)();if(null!=h){const e=v[h];null!=e&&e!==_&&y.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,n=b.indexOf(t),a=y[n].value;a!==_&&(A(t),T(a),null!=h&&f(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=b.indexOf(e.currentTarget)+1;n=b[t]??b[0];break}case"ArrowLeft":{const t=b.indexOf(e.currentTarget)-1;n=b[t]??b[b.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,o.Z)("tabs-container",i)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},y.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>b.push(e),onKeyDown:C,onFocus:N,onClick:N},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":_===t})}),n??t)}))),n?(0,s.cloneElement)(w.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,r.Z)();return s.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);