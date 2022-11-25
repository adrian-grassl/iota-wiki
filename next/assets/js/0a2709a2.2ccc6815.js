"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[54025],{30345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));var r=n(73756);const o={title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC can be revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke","revocation"]},s=void 0,l={unversionedId:"concepts/verifiable_credentials/revocation",id:"concepts/verifiable_credentials/revocation",title:"Verifiable Credential Revocation",description:"Explain how a VC can be revoked",source:"@site/next/external/identity.rs/0.7-alpha/documentation/docs/concepts/verifiable_credentials/revocation.mdx",sourceDirName:"concepts/verifiable_credentials",slug:"/concepts/verifiable_credentials/revocation",permalink:"/next/identity.rs/concepts/verifiable_credentials/revocation",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/next/external/identity.rs/0.7-alpha/documentation/docs/concepts/verifiable_credentials/revocation.mdx",tags:[],version:"current",frontMatter:{title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC can be revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke","revocation"]},sidebar:"docs",previous:{title:"Create and Sign",permalink:"/next/identity.rs/concepts/verifiable_credentials/create"},next:{title:"Verifiable Presentations",permalink:"/next/identity.rs/concepts/verifiable_credentials/verifiable_presentations"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Revocation Bitmap",id:"revocation-bitmap",level:2},{value:"Removing the verification method",id:"removing-the-verification-method",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"#example"},"example")," below demonstrates two methods that an issuer can use to revoke a verifiable credential using the IOTA Identity Framework:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By using the ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#status"},(0,a.kt)("inlineCode",{parentName:"a"},"credentialStatus"))," field in a credential and linking to a revocation bitmap, using the ",(0,a.kt)("a",{parentName:"li",href:"../../specs/revocation_bitmap_2022"},(0,a.kt)("inlineCode",{parentName:"a"},"RevocationBitmap2022")),"."),(0,a.kt)("li",{parentName:"ol"},"By removing the verification method that signed the credential. This invalidates all credentials that were signed with that verification method.")),(0,a.kt)("h2",{id:"revocation-bitmap"},"Revocation Bitmap"),(0,a.kt)("p",null,"One of the ways for an issuer to control the status of its credentials is by using a revocation list. At the most basic level, revocation information for all verifiable credentials issued by an issuer are expressed as simple binary values. The issuer keeps a list of all verifiable credentials it has issued in a bitmap. Each verifiable credential is associated with a unique index in the list. If the binary value of the index in the bitmap is 1 (one), the verifiable credential is revoked, if it is 0 (zero) it is not revoked."),(0,a.kt)("p",null,"For example, with this approach the issuer adds an index to a credential in the ",(0,a.kt)("inlineCode",{parentName:"p"},"credentialStatus")," field, such as ",(0,a.kt)("inlineCode",{parentName:"p"},'"5"'),". This part of the credential might then look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"credentialStatus": {\n  "id": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#revocation",\n  "type": "RevocationBitmap2022",\n  "revocationBitmapIndex": "5"\n},\n')),(0,a.kt)("p",null,"The verifier uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field (",(0,a.kt)("inlineCode",{parentName:"p"},"did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#revocation"),") to look up the service in the issuer's DID document. This is an example of such a service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#revocation",\n  "type": "RevocationBitmap2022",\n  "serviceEndpoint": "data:application/octet-stream;base64,ZUp5ek1tQmdZR1NBQUFFZ1ptVUFBQWZPQUlF"\n}\n')),(0,a.kt)("p",null,"During verification the verifier decodes the revocation bitmap embedded in the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," url. This bitmap written as a bitstring looks like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"000001"),". Here, the 5th bit is set, which means the credential with that index is revoked, while all other credentials aren't revoked."),(0,a.kt)("h2",{id:"removing-the-verification-method"},"Removing the verification method"),(0,a.kt)("p",null,"A less efficient alternative is to remove the verification method that signed the credential from the DID Document of the issuer. This means the VC can no longer be validated. However, this would invalidate every VC signed with that verification method, meaning the issuer would have to sign every VC with a different key to retain precise control over which credential is revoked."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following code exemplifies how you can revoke a ",(0,a.kt)("a",{parentName:"p",href:"overview"},"Verifiable Credential (VC)"),"."),(0,a.kt)(r.Z,{nodeContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Bip39 } from "@iota/crypto.js";\nimport {\n    Credential,\n    CredentialValidationOptions,\n    CredentialValidator,\n    FailFast,\n    IotaDocument,\n    IotaIdentityClient,\n    IotaService,\n    IotaVerificationMethod,\n    ProofOptions,\n    Resolver,\n    RevocationBitmap,\n} from "@iota/identity-wasm/node";\nimport { Client, MnemonicSecretManager } from "@iota/iota-client-wasm/node";\nimport { IAliasOutput, IRent, TransactionHelper } from "@iota/iota.js";\nimport { API_ENDPOINT, createDid } from "../util";\n\n/**\n * This example shows how to revoke a verifiable credential.\n * It demonstrates two methods for revocation. The first uses a revocation bitmap of type `RevocationBitmap2022`,\n * while the second method simply removes the verification method (public key) that signed the credential\n * from the DID Document of the issuer.\n *\n * Note: make sure `API_ENDPOINT` and `FAUCET_ENDPOINT` are set to the correct network endpoints.\n */\nexport async function revokeVC() {\n    // ===========================================================================\n    // Create a Verifiable Credential.\n    // ===========================================================================\n\n    const client = new Client({\n        primaryNode: API_ENDPOINT,\n        localPow: true,\n    });\n    const didClient = new IotaIdentityClient(client);\n\n    // Generate a random mnemonic for our wallet.\n    const secretManager: MnemonicSecretManager = {\n        mnemonic: Bip39.randomMnemonic(),\n    };\n\n    // Create an identity for the issuer with one verification method `key-1`.\n    let { document: issuerDocument, keypair: keypairIssuer } = await createDid(client, secretManager);\n\n    // Create an identity for the holder, in this case also the subject.\n    const { document: aliceDocument } = await createDid(client, secretManager);\n\n    // Create a new empty revocation bitmap. No credential is revoked yet.\n    const revocationBitmap = new RevocationBitmap();\n\n    // Add the revocation bitmap to the DID Document of the issuer as a service.\n    const service: IotaService = new IotaService({\n        id: issuerDocument.id().join("#my-revocation-service"),\n        type: RevocationBitmap.type(),\n        serviceEndpoint: revocationBitmap.toEndpoint(),\n    });\n    issuerDocument.insertService(service);\n\n    // Resolve the latest output and update it with the given document.\n    let aliasOutput: IAliasOutput = await didClient.updateDidOutput(issuerDocument);\n\n    // Because the size of the DID document increased, we have to increase the allocated storage deposit.\n    // This increases the deposit amount to the new minimum.\n    let rentStructure: IRent = await didClient.getRentStructure();\n    aliasOutput.amount = TransactionHelper.getStorageDeposit(aliasOutput, rentStructure).toString();\n\n    // Publish the document.\n    issuerDocument = await didClient.publishDidOutput(secretManager, aliasOutput);\n\n    // Create a credential subject indicating the degree earned by Alice, linked to their DID.\n    const subject = {\n        id: aliceDocument.id(),\n        name: "Alice",\n        degreeName: "Bachelor of Science and Arts",\n        degreeType: "BachelorDegree",\n        GPA: "4.0",\n    };\n\n    // Create an unsigned `UniversityDegree` credential for Alice.\n    // The issuer also chooses a unique `RevocationBitmap` index to be able to revoke it later.\n    const CREDENTIAL_INDEX = 5;\n    const unsignedVc = new Credential({\n        id: "https://example.edu/credentials/3732",\n        type: "UniversityDegreeCredential",\n        credentialStatus: {\n            id: issuerDocument.id() + "#my-revocation-service",\n            type: RevocationBitmap.type(),\n            revocationBitmapIndex: CREDENTIAL_INDEX.toString(),\n        },\n        issuer: issuerDocument.id(),\n        credentialSubject: subject,\n    });\n\n    // Sign Credential.\n    let signedVc = issuerDocument.signCredential(unsignedVc, keypairIssuer.private(), "#key-1", ProofOptions.default());\n    console.log(`Credential JSON > ${JSON.stringify(signedVc, null, 2)}`);\n\n    // Validate the credential\'s signature using the issuer\'s DID Document.\n    CredentialValidator.validate(signedVc, issuerDocument, CredentialValidationOptions.default(), FailFast.AllErrors);\n\n    // ===========================================================================\n    // Revocation of the Verifiable Credential.\n    // ===========================================================================\n\n    // Update the RevocationBitmap service in the issuer\'s DID Document.\n    // This revokes the credential\'s unique index.\n    issuerDocument.revokeCredentials("my-revocation-service", CREDENTIAL_INDEX);\n\n    // Publish the changes.\n    aliasOutput = await didClient.updateDidOutput(issuerDocument);\n    rentStructure = await didClient.getRentStructure();\n    aliasOutput.amount = TransactionHelper.getStorageDeposit(aliasOutput, rentStructure).toString();\n    const update2: IotaDocument = await didClient.publishDidOutput(secretManager, aliasOutput);\n\n    // Credential verification now fails.\n    try {\n        CredentialValidator.validate(signedVc, update2, CredentialValidationOptions.default(), FailFast.FirstError);\n        console.log("Revocation Failed!");\n    } catch (e) {\n        console.log(`Error during validation: ${e}`);\n    }\n\n    // ===========================================================================\n    // Alternative revocation of the Verifiable Credential.\n    // ===========================================================================\n\n    // By removing the verification method, that signed the credential, from the issuer\'s DID document,\n    // we effectively revoke the credential, as it will no longer be possible to validate the signature.\n    let originalMethod = issuerDocument.resolveMethod("#key-1") as IotaVerificationMethod;\n    await issuerDocument.removeMethod(originalMethod.id());\n\n    // Publish the changes.\n    aliasOutput = await didClient.updateDidOutput(issuerDocument);\n    rentStructure = await didClient.getRentStructure();\n    aliasOutput.amount = TransactionHelper.getStorageDeposit(aliasOutput, rentStructure).toString();\n    issuerDocument = await didClient.publishDidOutput(secretManager, aliasOutput);\n\n    // We expect the verifiable credential to be revoked.\n    const resolver = new Resolver({ client: didClient });\n    try {\n        // Resolve the issuer\'s updated DID Document to ensure the key was revoked successfully.\n        const resolvedIssuerDoc = await resolver.resolve(issuerDocument.id().toString());\n        CredentialValidator.validate(\n            signedVc,\n            resolvedIssuerDoc,\n            CredentialValidationOptions.default(),\n            FailFast.FirstError,\n        );\n\n        // `CredentialValidator.validate` will throw an error, hence this will not be reached.\n        console.log("Revocation failed!");\n    } catch (e) {\n        console.log(`Error during validation: ${e}`);\n        console.log(`Credential successfully revoked!`);\n    }\n}\n',rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! This example shows how to revoke a verifiable credential.\n//! It demonstrates two methods for revocation. The first uses a revocation bitmap of type `RevocationBitmap2022`,\n//! while the second method simply removes the verification method (public key) that signed the credential\n//! from the DID Document of the issuer.\n//!\n//! Note: make sure `API_ENDPOINT` and `FAUCET_ENDPOINT` are set to the correct network endpoints.\n//!\n//! cargo run --example 7_revoke_vc\n\nuse examples::create_did;\nuse examples::random_stronghold_path;\nuse examples::API_ENDPOINT;\nuse identity_iota::core::json;\nuse identity_iota::core::FromJson;\nuse identity_iota::core::Url;\nuse identity_iota::credential::Credential;\nuse identity_iota::credential::CredentialBuilder;\nuse identity_iota::credential::CredentialValidationOptions;\nuse identity_iota::credential::CredentialValidator;\nuse identity_iota::credential::FailFast;\nuse identity_iota::credential::RevocationBitmapStatus;\nuse identity_iota::credential::Status;\nuse identity_iota::credential::Subject;\nuse identity_iota::credential::ValidationError;\nuse identity_iota::crypto::KeyPair;\nuse identity_iota::crypto::ProofOptions;\nuse identity_iota::did::DIDUrl;\nuse identity_iota::did::Document;\nuse identity_iota::did::RevocationBitmap;\nuse identity_iota::did::Service;\nuse identity_iota::did::DID;\nuse identity_iota::iota::IotaClientExt;\nuse identity_iota::iota::IotaDID;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::iota::IotaIdentityClientExt;\nuse identity_iota::iota::IotaService;\nuse identity_iota::resolver::Resolver;\nuse iota_client::block::address::Address;\nuse iota_client::block::output::AliasOutput;\nuse iota_client::block::output::AliasOutputBuilder;\nuse iota_client::block::output::RentStructure;\nuse iota_client::secret::stronghold::StrongholdSecretManager;\nuse iota_client::secret::SecretManager;\nuse iota_client::Client;\n\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n  // ===========================================================================\n  // Create a Verifiable Credential.\n  // ===========================================================================\n\n  // Create a new client to interact with the IOTA ledger.\n  let client: Client = Client::builder().with_primary_node(API_ENDPOINT, None)?.finish()?;\n\n  // Create an identity for the issuer with one verification method `key-1`.\n  let mut secret_manager_issuer: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password_1")\n      .build(random_stronghold_path())?,\n  );\n  let (_, mut issuer_document, key_pair): (Address, IotaDocument, KeyPair) =\n    create_did(&client, &mut secret_manager_issuer).await?;\n\n  // Create an identity for the holder, in this case also the subject.\n  let mut secret_manager_alice: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password_2")\n      .build(random_stronghold_path())?,\n  );\n  let (_, alice_document, _): (Address, IotaDocument, KeyPair) = create_did(&client, &mut secret_manager_alice).await?;\n\n  // Create a new empty revocation bitmap. No credential is revoked yet.\n  let revocation_bitmap: RevocationBitmap = RevocationBitmap::new();\n\n  // Add the revocation bitmap to the DID document of the issuer as a service.\n  let service: IotaService = Service::from_json_value(json!({\n    "id": issuer_document.id().to_url().join("#my-revocation-service")?,\n    "type": RevocationBitmap::TYPE,\n    "serviceEndpoint": revocation_bitmap.to_endpoint()?\n  }))?;\n  assert!(issuer_document.insert_service(service).is_ok());\n\n  // Resolve the latest output and update it with the given document.\n  let alias_output: AliasOutput = client.update_did_output(issuer_document.clone()).await?;\n\n  // Because the size of the DID document increased, we have to increase the allocated storage deposit.\n  // This increases the deposit amount to the new minimum.\n  let rent_structure: RentStructure = client.get_rent_structure().await?;\n  let alias_output: AliasOutput = AliasOutputBuilder::from(&alias_output)\n    .with_minimum_storage_deposit(rent_structure)\n    .finish(client.get_token_supply().await?)?;\n\n  // Publish the updated Alias Output.\n  issuer_document = client.publish_did_output(&secret_manager_issuer, alias_output).await?;\n\n  // Create a credential subject indicating the degree earned by Alice.\n  let subject: Subject = Subject::from_json_value(json!({\n    "id": alice_document.id().as_str(),\n    "name": "Alice",\n    "degree": {\n      "type": "BachelorDegree",\n      "name": "Bachelor of Science and Arts",\n    },\n    "GPA": "4.0",\n  }))?;\n\n  // Create an unsigned `UniversityDegree` credential for Alice.\n  // The issuer also chooses a unique `RevocationBitmap` index to be able to revoke it later.\n  let service_url = issuer_document.id().to_url().join("#my-revocation-service")?;\n  let credential_index: u32 = 5;\n  let status: Status = RevocationBitmapStatus::new(service_url, credential_index).into();\n\n  // Build credential using subject above, status, and issuer.\n  let mut credential: Credential = CredentialBuilder::default()\n    .id(Url::parse("https://example.edu/credentials/3732")?)\n    .issuer(Url::parse(issuer_document.id().as_str())?)\n    .type_("UniversityDegreeCredential")\n    .status(status)\n    .subject(subject)\n    .build()?;\n\n  // Sign the Credential with the issuer\'s verification method.\n  issuer_document.sign_data(&mut credential, key_pair.private(), "#key-1", ProofOptions::default())?;\n  println!("Credential JSON > {:#}", credential);\n\n  // Validate the credential\'s signature using the issuer\'s DID Document.\n  CredentialValidator::validate(\n    &credential,\n    &issuer_document,\n    &CredentialValidationOptions::default(),\n    FailFast::FirstError,\n  )\n  .unwrap();\n\n  // ===========================================================================\n  // Revocation of the Verifiable Credential.\n  // ===========================================================================\n\n  // Update the RevocationBitmap service in the issuer\'s DID Document.\n  // This revokes the credential\'s unique index.\n  issuer_document.revoke_credentials("my-revocation-service", &[credential_index])?;\n\n  // Publish the changes.\n  let alias_output: AliasOutput = client.update_did_output(issuer_document.clone()).await?;\n  let rent_structure: RentStructure = client.get_rent_structure().await?;\n  let alias_output: AliasOutput = AliasOutputBuilder::from(&alias_output)\n    .with_minimum_storage_deposit(rent_structure)\n    .finish(client.get_token_supply().await?)?;\n  issuer_document = client.publish_did_output(&secret_manager_issuer, alias_output).await?;\n\n  let validation_result = CredentialValidator::validate(\n    &credential,\n    &issuer_document,\n    &CredentialValidationOptions::default(),\n    FailFast::FirstError,\n  );\n\n  // We expect validation to no longer succeed because the credential was revoked.\n  assert!(matches!(\n    validation_result.unwrap_err().validation_errors[0],\n    ValidationError::Revoked\n  ));\n\n  // ===========================================================================\n  // Alternative revocation of the Verifiable Credential.\n  // ===========================================================================\n\n  // By removing the verification method, that signed the credential, from the issuer\'s DID document,\n  // we effectively revoke the credential, as it will no longer be possible to validate the signature.\n  let original_method: DIDUrl<IotaDID> = issuer_document.resolve_method("#key-1", None).unwrap().id().clone();\n  issuer_document.remove_method(&original_method).unwrap();\n\n  // Publish the changes.\n  let alias_output: AliasOutput = client.update_did_output(issuer_document.clone()).await?;\n  let alias_output: AliasOutput = AliasOutputBuilder::from(&alias_output).finish(client.get_token_supply().await?)?;\n  client.publish_did_output(&secret_manager_issuer, alias_output).await?;\n\n  // We expect the verifiable credential to be revoked.\n  let mut resolver: Resolver<IotaDocument> = Resolver::new();\n  resolver.attach_iota_handler(client);\n  let resolved_issuer_doc: IotaDocument = resolver.resolve_credential_issuer(&credential).await?;\n\n  let validation_result = CredentialValidator::validate(\n    &credential,\n    &resolved_issuer_doc,\n    &CredentialValidationOptions::default(),\n    FailFast::FirstError,\n  );\n\n  println!("VC validation result: {:?}", validation_result);\n  assert!(validation_result.is_err());\n\n  println!("Credential successfully revoked!");\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/src/0_basic/7_revoke_vc.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/examples/0_basic/7_revoke_vc.rs",mdxType:"CodeSnippet"}))}m.isMDXComponent=!0},73756:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(86010),a=n(67294),r=n(69319);function o(e){let{nodeReplitLink:t,nodeContent:n,rustContent:o,nodeGithubLink:s,rustGithubLink:l}=e;const[d,c]=a.useState("node"),u=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,a.useEffect)((()=>{let e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||n||(i="rust"),"rust"!==i||o||(i="node"),c(i)})),a.createElement("div",null,a.createElement("div",{className:(0,i.Z)("langSelector")},o&&a.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==d,inactiveButton:"rust"!==d}),onClick:()=>{localStorage.setItem("lang","rust"),c("rust")}},"Rust"),(t||n)&&a.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===d,inactiveButton:"node"!==d}),onClick:()=>{localStorage.setItem("lang","node"),c("node")}},"Node.js")),a.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===d&&t?a.createElement(a.Fragment,null,a.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):"node"===d&&n?a.createElement("div",{className:(0,i.Z)("nodeContainer")},a.createElement(r.Z,{className:(0,i.Z)("noMarginBottom"),language:"typescript"},n)):a.createElement("div",{className:(0,i.Z)("rustContainer")},a.createElement(r.Z,{className:(0,i.Z)("noMarginBottom"),language:"rust"},o))),a.createElement("div",{className:(0,i.Z)("githubLink")},s&&"node"===d&&a.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u),l&&"rust"===d&&a.createElement("a",{href:l,target:"_blank"},"GitHub\xa0",u)))}}}]);