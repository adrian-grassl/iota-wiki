"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[16374],{2586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var o=n(87462),i=(n(67294),n(3905));var a=n(74434),r=n(34259),s=n(18679);const l={title:"Resolve an IOTA Identity",sidebar_label:"Resolve",description:"Explain how resolving works including arguments",image:"/img/Identity_icon.png",keywords:["Resolve"]},d=void 0,c={unversionedId:"concepts/decentralized_identifiers/resolve",id:"concepts/decentralized_identifiers/resolve",title:"Resolve an IOTA Identity",description:"Explain how resolving works including arguments",source:"@site/shimmer/external/identity.rs/0.7-alpha/documentation/docs/concepts/decentralized_identifiers/resolve.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/resolve",permalink:"/shimmer/identity.rs/concepts/decentralized_identifiers/resolve",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/shimmer/external/identity.rs/0.7-alpha/documentation/docs/concepts/decentralized_identifiers/resolve.mdx",tags:[],version:"current",frontMatter:{title:"Resolve an IOTA Identity",sidebar_label:"Resolve",description:"Explain how resolving works including arguments",image:"/img/Identity_icon.png",keywords:["Resolve"]},sidebar:"docs",previous:{title:"Update",permalink:"/shimmer/identity.rs/concepts/decentralized_identifiers/update"},next:{title:"Delete",permalink:"/shimmer/identity.rs/concepts/decentralized_identifiers/delete"}},u={},m=[{value:"Resolving an IOTA DID",id:"resolving-an-iota-did",level:2},{value:"Resolver",id:"resolver",level:3},{value:"Client",id:"client",level:3},{value:"Advanced Resolver configuration",id:"advanced-resolver-configuration",level:2},{value:"Resolving multiple DID methods",id:"resolving-multiple-did-methods",level:3},{value:"Resolution for Verifiable Presentations",id:"resolution-for-verifiable-presentations",level:2}],h={toc:m};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DID resolution is the process of fetching and decoding a ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-documents"},"DID Document")," corresponding to a given ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID"),". The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"IOTA Identity framework")," supports resolving DID Documents that are stored on the IOTA and Shimmer networks and enables users to plug in handlers for additional methods."),(0,i.kt)("p",null,"This is similar to, but not to be confused with, the ",(0,i.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-resolution/"},"W3C DID Resolution specification"),", which defines function signatures for resolution in the context of web or REST APIs, whereas the IOTA Identity framework provides strongly-typed resolution for a better developer experience."),(0,i.kt)("p",null,"This functionality is primarily provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver"),", which can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#resolving-an-iota-did"},"Resolve Iota DID Documents"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#resolving-multiple-did-methods"},"Resolve DID Documents from multiple DID methods"),". "),(0,i.kt)("li",{parentName:"ul"},"Resolve the DID Documents referenced in a verifiable presentation or credential.")),(0,i.kt)("h2",{id:"resolving-an-iota-did"},"Resolving an IOTA DID"),(0,i.kt)("p",null,"The following examples demonstrate how to resolve an IOTA DID Document from its DID."),(0,i.kt)("h3",{id:"resolver"},"Resolver"),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," has been configured with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," it will resolve IOTA DID Documents according to the read procedure defined in the ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/identity.rs/specs/did/iota_did_method_spec#read"},"IOTA DID Method Specification"),". It fetches the latest ",(0,i.kt)("a",{parentName:"p",href:"../../specs/did/iota_did_method_spec#alias-output"},"Alias Output")," from the network specified in the DID (see ",(0,i.kt)("a",{parentName:"p",href:"../../specs/did/iota_did_method_spec#did-format"},"DID Format"),"), then extracts and validates the DID Document from it."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use identity_iota::iota::IotaDID;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::resolver::Resolver;\nuse iota_client::Client;\n\n#[tokio::main]\nasync fn main() -> anyhow::Result<()>{\n  // Configure a client for the Shimmer testnet "rms".\n  let node_url = "https://api.testnet.shimmer.network/";\n  let client = Client::builder()\n    .with_primary_node(node_url, None)?\n    .finish()?;\n\n  // Construct a resolver using the client.\n  let mut resolver = Resolver::<IotaDocument>::new();\n  resolver.attach_iota_handler(client);\n\n  // Parse the DID and resolve its DID Document.\n  let did = IotaDID::parse("did:iota:rms:0x7b48b06232b8a1e7a31c314cab1ceedb84e2e9dd2b1fae79b67eaa4595f15e47")?;\n  let document: IotaDocument = resolver.resolve(&did).await?;\n\n  Ok(())\n}\n'))),(0,i.kt)(s.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const { Resolver, IotaDID, IotaIdentityClient } = require(\'@iota/identity-wasm/node\');\nconst { Client } = require(\'@iota/iota-client-wasm/node\');\n\n// Configure a client for the Shimmer testnet "rms".\nconst nodeUrl = "https://api.testnet.shimmer.network/";\nconst client = new Client({\n    primaryNode: nodeUrl,\n    localPow: true,\n});\nconst didClient = new IotaIdentityClient(client);\n\n// Construct a resolver using the client.\nconst resolver = new Resolver({\n    client: didClient,\n});\n\n// Resolve the given did \nconst did = "did:iota:rms:0x7b48b06232b8a1e7a31c314cab1ceedb84e2e9dd2b1fae79b67eaa4595f15e47";\nconst document = await resolver.resolve(did);\n')))),(0,i.kt)("h3",{id:"client"},"Client"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," can also be used directly, to resolve individual DIDs from its configured network."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use identity_iota::iota::IotaDID;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::iota::IotaIdentityClientExt;\nuse iota_client::Client;\n\n#[tokio::main]\nasync fn main() -> anyhow::Result<()>{\n  // Configure a client for the Shimmer testnet "rms".\n  let node_url = "https://api.testnet.shimmer.network/";\n  let client = Client::builder()\n    .with_primary_node(node_url, None)?\n    .finish()?;\n\n  // Parse the DID and resolve its DID Document.\n  let did = IotaDID::parse("did:iota:rms:0x7b48b06232b8a1e7a31c314cab1ceedb84e2e9dd2b1fae79b67eaa4595f15e47")?;\n  let document: IotaDocument = client.resolve_did(&did).await?;\n  Ok(())\n}\n'))),(0,i.kt)(s.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const { IotaDID, IotaIdentityClient } = require(\'@iota/identity-wasm/node\');\nconst { Client } = require(\'@iota/iota-client-wasm/node\');\n\n// Configure a client for the Shimmer testnet "rms".\nconst nodeUrl = "https://api.testnet.shimmer.network/";\nconst client = new Client({\n    primaryNode: nodeUrl,\n    localPow: true,\n});\nconst didClient = new IotaIdentityClient(client);\n\n// Parse the DID and resolve its DID Document.\nconst did = IotaDID.parse("did:iota:rms:0x7b48b06232b8a1e7a31c314cab1ceedb84e2e9dd2b1fae79b67eaa4595f15e47");\nconst document = await didClient.resolveDid(did);\n')))),(0,i.kt)("h2",{id:"advanced-resolver-configuration"},"Advanced Resolver configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," can be configured to support many use cases by attaching custom resolution handlers. This enables the resolver to resolve multiple DID methods as well as customizing how\na particular DID method (such as for instance the IOTA method) gets resolved. This feature is mainly intended to be used together with the Resolver's convenience methods for handling verifiable presentations and credentials. "),(0,i.kt)("h3",{id:"resolving-multiple-did-methods"},"Resolving multiple DID methods"),(0,i.kt)(a.Z,{nodeContent:'import { Bip39 } from "@iota/crypto.js";\nimport { Client, MnemonicSecretManager } from "@iota/iota-client-wasm/node";\nimport { CoreDocument, IotaDocument, IotaIdentityClient, Resolver } from "../../../node";\nimport { API_ENDPOINT, createDid } from "../util";\n\n// Use this external package to avoid implementing the entire did:key method in this example.\nimport * as ed25519 from "@transmute/did-key-ed25519";\n\n/** Demonstrates how to set up a resolver using custom handlers.\n */\nexport async function customResolution() {\n    // Set up a handler for resolving Ed25519 did:key\n    const keyHandler = async function(didKey: string): Promise<CoreDocument> {\n        let document = await ed25519.resolve(\n            didKey,\n            { accept: "application/did+ld+json" },\n        );\n        return CoreDocument.fromJSON(document.didDocument);\n    };\n\n    // Create a new Client to interact with the IOTA ledger.\n    const client = await Client.new({\n        primaryNode: API_ENDPOINT,\n        localPow: true,\n    });\n    const didClient = new IotaIdentityClient(client);\n\n    // Construct a Resolver capable of resolving the did:key and iota methods.\n    let handlerMap: Map<string, (did: string) => Promise<IotaDocument | CoreDocument>> = new Map();\n    handlerMap.set("key", keyHandler);\n\n    const resolver = new Resolver(\n        {\n            client: didClient,\n            handlers: handlerMap,\n        },\n    );\n\n    // A valid Ed25519 did:key value taken from https://w3c-ccg.github.io/did-method-key/#example-1-a-simple-ed25519-did-key-value.\n    const didKey = "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK";\n\n    // Generate a random mnemonic for our wallet.\n    const secretManager: MnemonicSecretManager = {\n        mnemonic: Bip39.randomMnemonic(),\n    };\n\n    // Creates a new wallet and identity for us to resolve (see "0_create_did" example).\n    const { document } = await createDid(client, secretManager);\n    const did = document.id();\n\n    // Resolve didKey into a DID document.\n    const didKeyDoc = await resolver.resolve(didKey);\n\n    // Resolve the DID we created on the IOTA ledger.\n    const didIotaDoc = await resolver.resolve(did.toString());\n\n    // Check that the types of the resolved documents match our expectations:\n\n    if (didKeyDoc instanceof CoreDocument) {\n        console.log("Resolved DID Key document:", JSON.stringify(didKeyDoc, null, 2));\n    } else {\n        throw new Error(\n            "the resolved document type should match the output type of keyHandler",\n        );\n    }\n\n    if (didIotaDoc instanceof IotaDocument) {\n        console.log("Resolved IOTA DID document:", JSON.stringify(didIotaDoc, null, 2));\n    } else {\n        throw new Error(\n            "the resolved document type should match IotaDocument",\n        );\n    }\n}\n',rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nuse anyhow::Context;\n// Use the external did-key crate to avoid implementing the entire DID key method in this example.\nuse did_key::Config;\nuse did_key::DIDCore;\nuse did_key::DIDKey;\nuse did_key::KeyPair;\nuse examples::create_did;\nuse examples::random_stronghold_path;\nuse examples::API_ENDPOINT;\nuse identity_iota::core::FromJson;\nuse identity_iota::core::ToJson;\nuse identity_iota::credential::AbstractThreadSafeValidatorDocument;\nuse identity_iota::crypto::KeyPair as IotaKeyPair;\nuse identity_iota::did::CoreDID;\nuse identity_iota::did::CoreDocument;\nuse identity_iota::did::DID;\nuse identity_iota::iota::IotaDID;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::resolver::Resolver;\nuse iota_client::block::address::Address;\nuse iota_client::secret::stronghold::StrongholdSecretManager;\nuse iota_client::secret::SecretManager;\nuse iota_client::Client;\n\n/// Demonstrates how to set up a resolver using custom handlers.\n///\n/// NOTE: Since both `IotaDocument` and `CoreDocument` implement `Into<CoreDocument>` we could have used\n/// Resolver<CoreDocument> in this example and just worked with `CoreDocument` representations throughout.\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n  // Create a method agnostic resolver and attach handlers for the "key" and "iota" methods.\n  let mut resolver: Resolver = Resolver::new();\n\n  // Create a new client to interact with the IOTA ledger.\n  let client: Client = Client::builder().with_primary_node(API_ENDPOINT, None)?.finish()?;\n\n  // This is a convenience method for attaching a handler for the "iota" method by providing just a client.\n  resolver.attach_iota_handler(client.clone());\n  resolver.attach_handler("key".to_owned(), resolve_ed25519_did_key);\n\n  // A valid Ed25519 did:key value taken from https://w3c-ccg.github.io/did-method-key/#example-1-a-simple-ed25519-did-key-value.\n  let did_key: CoreDID = "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK".parse()?;\n\n  // Create a new secret manager backed by a Stronghold.\n  let mut secret_manager: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password")\n      .build(random_stronghold_path())?,\n  );\n\n  // Create a new DID for us to resolve.\n  let (_, iota_document, _): (Address, IotaDocument, IotaKeyPair) = create_did(&client, &mut secret_manager).await?;\n  let iota_did: IotaDID = iota_document.id().clone();\n\n  // Resolve did_key to get an abstract document.\n  let did_key_doc: AbstractThreadSafeValidatorDocument = resolver.resolve(&did_key).await?;\n\n  // Resolve iota_did to get an abstract document.\n  let iota_doc: AbstractThreadSafeValidatorDocument = resolver.resolve(&iota_did).await?;\n\n  // These documents are mainly meant for validating credentials and presentations, but one can also attempt to cast\n  // them to concrete document types.\n\n  let did_key_doc: CoreDocument = *did_key_doc\n    .into_any()\n    .downcast::<CoreDocument>()\n    .expect("downcasting to the return type of the did:key handler should be fine");\n\n  println!("Resolved DID Key document: {}", did_key_doc.to_json_pretty()?);\n\n  let iota_doc: IotaDocument = *iota_doc\n    .into_any()\n    .downcast::<IotaDocument>()\n    .expect("downcasting to the return type of the iota handler should be fine");\n  println!("Resolved IOTA DID document: {}", iota_doc.to_json_pretty()?);\n\n  Ok(())\n}\n\n/// Resolves an Ed25519 did:key DID to a spec compliant DID Document represented as a [`CoreDocument`].\n///\n/// # Errors\n/// Errors if the DID is not a valid Ed25519 did:key.  \nasync fn resolve_ed25519_did_key(did: CoreDID) -> anyhow::Result<CoreDocument> {\n  DIDKey::try_from(did.as_str())\n    .map_err(|err| anyhow::anyhow!("the provided DID does not satisfy the did:key format: {:?}", err))\n    .and_then(|key_pair| {\n      if let KeyPair::Ed25519(..) = key_pair {\n        Ok(key_pair)\n      } else {\n        Err(anyhow::anyhow!("the provided DID is not an Ed25519 did:key"))\n      }\n    })\n    .map(|key| {\n      key.get_did_document(Config {\n        use_jose_format: false,\n        serialize_secrets: false,\n      })\n    })?\n    .to_json()\n    .and_then(|doc_json| CoreDocument::from_json(&doc_json))\n    .context("failed to obtain a supported DID Document")\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/src/1_advanced/5_custom_resolution.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/examples/1_advanced/6_custom_resolution.rs",mdxType:"CodeSnippet"}),(0,i.kt)("h2",{id:"resolution-for-verifiable-presentations"},"Resolution for Verifiable Presentations"),(0,i.kt)("p",null,"When validating ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/identity.rs/concepts/verifiable_credentials/verifiable_presentations"},"verifiable presentations"),", it is necessary to resolve the DID Documents of the ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/identity.rs/concepts/verifiable_credentials/overview"},"verifiable credential")," issuers and presentation holder to verify their signatures. Resolving the necessary DID Documents is performed automatically when verifying presentations via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," (see this ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/identity.rs/concepts/verifiable_credentials/verifiable_presentations#example"},"example"),")."),(0,i.kt)("p",null,"When direct access to these DID Documents is desired, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," also provides standalone methods to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resolve a presentation holder's DID Document."),(0,i.kt)("li",{parentName:"ul"},"Resolve the DID Documents of the issuers of the credentials in a verifiable presentation."),(0,i.kt)("li",{parentName:"ul"},"Resolve the issuer's DID Document for a given verifiable credential.")))}p.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(67294),i=n(86010);const a="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,r),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(87462),i=n(67294),a=n(86010),r=n(51048),s=n(33609),l=n(1943),d=n(72957);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:h,groupId:p,className:v}=e,D=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=h??D.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),y=(0,s.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=D.find((e=>e.props.default)))?void 0:t.props.value)??D[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:I}=(0,l.U)(),[b,_]=(0,i.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=p){const e=k[p];null!=e&&e!==b&&f.some((t=>t.value===e))&&_(e)}const N=e=>{const t=e.currentTarget,n=w.indexOf(t),o=f[n].value;o!==b&&(C(t),_(o),null!=p&&I(p,String(o)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},v)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,o.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>w.push(e),onKeyDown:R,onFocus:N,onClick:N},r,{className:(0,a.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":b===t})}),n??t)}))),n?(0,i.cloneElement)(D.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},D.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function h(e){const t=(0,r.Z)();return i.createElement(m,(0,o.Z)({key:String(t)},e))}},74434:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(86010),i=n(67294),a=n(69319);function r(e){let{nodeReplitLink:t,nodeContent:n,rustContent:r,nodeGithubLink:s,rustGithubLink:l}=e;const[d,c]=i.useState("node"),u=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),i.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,i.useEffect)((()=>{let e=localStorage.getItem("lang"),o=e||"node";"node"!==o||t||n||(o="rust"),"rust"!==o||r||(o="node"),c(o)})),i.createElement("div",null,i.createElement("div",{className:(0,o.Z)("langSelector")},r&&i.createElement("button",{className:(0,o.Z)("button","languageButton",{activeButton:"rust"==d,inactiveButton:"rust"!==d}),onClick:()=>{localStorage.setItem("lang","rust"),c("rust")}},"Rust"),(t||n)&&i.createElement("button",{className:(0,o.Z)("button","languageButton","mr-sm",{activeButton:"node"===d,inactiveButton:"node"!==d}),onClick:()=>{localStorage.setItem("lang","node"),c("node")}},"Node.js")),i.createElement("div",{className:(0,o.Z)("codeSnippetContainer")},"node"===d&&t?i.createElement(i.Fragment,null,i.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):"node"===d&&n?i.createElement("div",{className:(0,o.Z)("nodeContainer")},i.createElement(a.Z,{className:(0,o.Z)("noMarginBottom"),language:"typescript"},n)):i.createElement("div",{className:(0,o.Z)("rustContainer")},i.createElement(a.Z,{className:(0,o.Z)("noMarginBottom"),language:"rust"},r))),i.createElement("div",{className:(0,o.Z)("githubLink")},s&&"node"===d&&i.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u),l&&"rust"===d&&i.createElement("a",{href:l,target:"_blank"},"GitHub\xa0",u)))}}}]);