"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[80617],{34218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>_});var a=t(87462),o=(t(67294),t(3905)),r=t(69319),l=t(51711);const i={description:"Create a new snapshot on the file system, and generate and store a new Ed25519 key inside the desired location",image:"/img/logo/Stronghold_icon.png",keywords:["example","cli","client crate","create snapshot","Ed25519"]},p="Create a Snapshot",s={unversionedId:"how_tos/cli/create_snapshot",id:"how_tos/cli/create_snapshot",title:"Create a Snapshot",description:"Create a new snapshot on the file system, and generate and store a new Ed25519 key inside the desired location",source:"@site/shimmer/external/stronghold.rs/develop/documentation/docs/how_tos/cli/create_snapshot.mdx",sourceDirName:"how_tos/cli",slug:"/how_tos/cli/create_snapshot",permalink:"/shimmer/stronghold.rs/how_tos/cli/create_snapshot",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/shimmer/external/stronghold.rs/develop/documentation/docs/how_tos/cli/create_snapshot.mdx",tags:[],version:"current",frontMatter:{description:"Create a new snapshot on the file system, and generate and store a new Ed25519 key inside the desired location",image:"/img/logo/Stronghold_icon.png",keywords:["example","cli","client crate","create snapshot","Ed25519"]},sidebar:"mySidebar",previous:{title:"Derive a SLIP10 Private Public Keypair",permalink:"/shimmer/stronghold.rs/how_tos/cli/derive_slip_10"},next:{title:"Read a Snapshot From Filesystem",permalink:"/shimmer/stronghold.rs/how_tos/cli/read_snapshot"}},c={},u=l.Z.indexOf("async fn command_create_snapshot"),h=l.Z.indexOf("async fn command_read_snapshot"),d=l.Z.substring(u,h),_=[{value:"Run the Example",id:"run-the-example",level:2},{value:"Expected Output",id:"expected-output",level:2},{value:"Example Code",id:"example-code",level:2}],y={toc:_};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-snapshot"},"Create a Snapshot"),(0,o.kt)("h2",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"You can create a new snapshot on the file system, and generate and store a new Ed25519 key inside the desired location\nby running the following command from within the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/client"},"client crate"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cargo run --example cli create-snapshot --path "/path/to/snapshot.file" --client-path "client-path-0" --vault-path "vault-path" --record-path "record-path" --key "passphrase"\n')),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"[2022-06-28T14:27:05Z INFO  cli] Snapshot created successully? true\n")),(0,o.kt)("h2",{id:"example-code"},"Example Code"),(0,o.kt)(r.Z,{language:"rust",mdxType:"CodeBlock"},d))}g.isMDXComponent=!0},51711:(e,n,t)=>{t.d(n,{Z:()=>a});const a='// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n#![allow(unused_imports)]\n\nuse std::{error::Error, hash::Hash, num::NonZeroUsize, str::FromStr};\n\nuse clap::{Parser, Subcommand};\nuse crypto::hashes::{blake2b::Blake2b256, Digest};\nuse engine::vault::RecordHint;\nuse iota_stronghold as stronghold;\nuse log::*;\nuse stronghold::{\n    procedures::{\n        BIP39Generate, Chain, GenerateKey, KeyType, MnemonicLanguage, Slip10Derive, Slip10DeriveInput, Slip10Generate,\n        StrongholdProcedure,\n    },\n    Client, ClientError, ClientVault, KeyProvider, Location, SnapshotPath, Store, Stronghold,\n};\nuse stronghold_utils::random as rand;\nuse thiserror::Error as DeriveError;\n\n#[derive(Debug)]\npub struct ChainInput {\n    pub chain: Chain,\n}\n\nimpl FromStr for ChainInput {\n    type Err = Box<dyn Error + \'static + Send + Sync>;\n\n    fn from_str(input: &str) -> Result<Self, Self::Err> {\n        let re = regex::Regex::new(r#"(?P<chain_id>\\d+)+"#).unwrap();\n        assert!(re.is_match(input));\n\n        let chain: Vec<u32> = re\n            .captures_iter(input)\n            .map(|cap| cap["chain_id"].to_string())\n            .map(|s: String| s.parse().unwrap())\n            .collect();\n\n        Ok(Self {\n            chain: Chain::from_u32_hardened(chain),\n        })\n    }\n}\n\n#[derive(Debug, Parser)]\npub struct VaultLocation {\n    #[clap(long, help = "The storage location inside the vault")]\n    vault_path: String,\n\n    #[clap(long, help = "The storage location for a record inside a vault")]\n    record_path: String,\n}\n\nimpl VaultLocation {\n    fn from(vault: String, record: String) -> Self {\n        Self {\n            record_path: record,\n            vault_path: vault,\n        }\n    }\n\n    fn to_location(&self) -> Location {\n        Location::Generic {\n            record_path: self.record_path.clone().into_bytes().to_vec(),\n            vault_path: self.vault_path.clone().into_bytes().to_vec(),\n        }\n    }\n}\n\n#[derive(Debug, Parser)]\npub struct StrongholdCLI {\n    #[clap(subcommand)]\n    cmds: Command,\n}\n\n#[derive(Subcommand, Debug)]\n#[non_exhaustive]\npub enum Command {\n    #[clap(about = "Generates a secret key and returns the public key, Possible values are [\'Ed25519\', \'X25519\']")]\n    GenerateKey {\n        #[clap(long, help = "The key type to use. Possible values are: [\'Ed25519\', \'X25519\']")]\n        key_type: String,\n\n        #[clap(flatten)]\n        location: VaultLocation,\n    },\n    #[clap(about = "Writes and reads from store")]\n    StoreReadWrite {\n        #[clap(long, help = "The key to map the value")]\n        key: String,\n\n        #[clap(long, help = "The actual value to be stored inside the Store")]\n        value: String,\n    },\n    #[clap(about = "Generates a BIP39 Mnemonic with an optional passphrase")]\n    BIP39Generate {\n        #[clap(long, help = "An optional passphrase to protect the BIP39 Mnemonic")]\n        passphrase: Option<String>,\n\n        #[clap(\n            long,\n            help = r#"The language of the Mnemonic to chose. Currently available are "japanese", and "english""#\n        )]\n        lang: MnemonicLanguage,\n\n        #[clap(flatten)]\n        location: VaultLocation,\n    },\n    #[clap(about = "Generates a private master key")]\n    SLIP10Generate {\n        #[clap(long, help = "The size of the seed, defaults to 64 bytes")]\n        size: Option<NonZeroUsize>,\n\n        #[clap(flatten)]\n        location: VaultLocation,\n    },\n\n    #[clap(about = "Derives a private / public key pair from either a master key, or a BIP39 key")]\n    SLIP10Derive {\n        #[clap(long, help = "The chain code to derive a key from")]\n        chain: ChainInput,\n\n        #[clap(long, help = "The storage location inside the vault")]\n        input_vault_path: String,\n\n        #[clap(long, help = "The storage location for a record inside a vault")]\n        input_record_path: String,\n\n        #[clap(long, help = "The storage location inside the vault")]\n        output_vault_path: String,\n\n        #[clap(long, help = "The storage location for a record inside a vault")]\n        output_record_path: String,\n    },\n\n    #[clap(\n        about = "Creates a new snapshot with a newly generated ed25519 key. The password to the snapshot will be returned."\n    )]\n    CreateSnapshot {\n        #[clap(\n            long,\n            help = "The path to the snapshot file. Should be absolute, otherwise only the name of the snapshot file will be taken"\n        )]\n        path: String,\n\n        #[clap(long, help = "The client path to generate an internal client")]\n        client_path: String,\n\n        #[clap(flatten)]\n        output: VaultLocation,\n\n        #[clap(long, help = "The key to encrypt the snapshot from filesystem")]\n        key: String,\n    },\n\n    #[clap(about = "Reads a snapshot.")]\n    ReadSnapshot {\n        #[clap(\n            long,\n            help = "The path to the snapshot file. Should be absolute, otherwise only the name of the snapshot file will be taken"\n        )]\n        path: String,\n\n        #[clap(long, help = "The client path of the Client to load")]\n        client_path: String,\n\n        #[clap(long, help = "The key to decrypt the snapshot from filesystem")]\n        key: String,\n\n        #[clap(flatten)]\n        private_key_location: VaultLocation,\n    },\n\n    #[clap(\n        about = "Recovers the BIP39 mnemonic from a passphrase. Hint: This requires, that the secret has previously been written into a snapshot"\n    )]\n    Bip39Recover {\n        #[clap(\n            long,\n            help = "The path to the snapshot file. Should be absolute, otherwise only the name of the snapshot file will be taken"\n        )]\n        path: String,\n\n        #[clap(long, help = "The client path of the Client to load")]\n        client_path: String,\n\n        #[clap(long, help = "The key to decrypt the snapshot. Base64 encoded")]\n        key: String,\n\n        #[clap(\n            long,\n            help = "The mnemonic to recover the BIP39 Seed. If the mnemonic is procted by a passphrase you have to supply it."\n        )]\n        mnemonic: String,\n\n        #[clap(long, help = "The optional passphrase, if the supplied mnemonic is protected")]\n        passphrase: Option<String>,\n\n        #[clap(flatten)]\n        output: VaultLocation,\n    },\n}\n\n/// Calculates the Blake2b from a String\nfn hash_blake2b(input: String) -> Vec<u8> {\n    let mut hasher = Blake2b256::new();\n    hasher.update(input.as_bytes());\n    hasher.finalize().to_vec()\n}\n\nasync fn command_write_and_read_from_store(key: String, value: String) -> Result<(), ClientError> {\n    let client = Client::default();\n    let store = client.store();\n\n    info!(r#"Insert value into store "{}" with key "{}""#, value, key);\n    store.insert(key.as_bytes().to_vec(), value.as_bytes().to_vec(), None)?;\n\n    info!(\n        r#"Store contains key "{}" ? {}"#,\n        key,\n        store.contains_key(key.as_bytes())?\n    );\n\n    info!(\n        r#"Value for key "{}" ? {:?}"#,\n        key,\n        String::from_utf8(store.get(key.as_bytes()).unwrap().unwrap().to_vec()).unwrap()\n    );\n\n    Ok(())\n}\n\nasync fn command_generate_key(key_type: String, location: VaultLocation) {\n    info!("Generating keys with type {}", key_type);\n\n    let client = Client::default();\n    let (vault_path, record_path) = (location.vault_path, location.record_path);\n\n    info!(\n        "Using output location: vault_path={}, record_path={}",\n        vault_path, record_path\n    );\n\n    let keytype = match key_type.to_lowercase().as_str() {\n        "ed25519" => KeyType::Ed25519,\n        "x25519" => KeyType::X25519,\n        _ => {\n            error!("Unknown key type: {}", key_type);\n            return;\n        }\n    };\n\n    let output_location =\n        stronghold::Location::generic(vault_path.as_bytes().to_vec(), record_path.as_bytes().to_vec());\n\n    let generate_key_procedure = GenerateKey {\n        ty: keytype.clone(),\n        output: output_location.clone(),\n    };\n\n    let procedure_result = client.execute_procedure(StrongholdProcedure::GenerateKey(generate_key_procedure));\n\n    info!("Key generation successful? {}", procedure_result.is_ok());\n\n    // get the public key\n    let public_key_procedure = stronghold::procedures::PublicKey {\n        ty: keytype,\n        private_key: output_location,\n    };\n\n    info!("Creating public key");\n    let procedure_result = client.execute_procedure(StrongholdProcedure::PublicKey(public_key_procedure));\n\n    assert!(procedure_result.is_ok());\n\n    let procedure_result = procedure_result.unwrap();\n    let output: Vec<u8> = procedure_result.into();\n    info!(r#"Public key is "{}" (Base64)"#, base64::encode(output));\n}\n\nasync fn command_generate_bip39(passphrase: Option<String>, language: MnemonicLanguage, location: VaultLocation) {\n    let client = Client::default();\n    let (vault_path, record_path) = (location.vault_path, location.record_path);\n\n    let output_location =\n        stronghold::Location::generic(vault_path.as_bytes().to_vec(), record_path.as_bytes().to_vec());\n\n    let bip39_procedure = BIP39Generate {\n        passphrase,\n        language,\n        output: output_location,\n    };\n\n    let result = client.execute_procedure(bip39_procedure).unwrap();\n\n    info!("BIP39 Mnemonic: {}", result);\n}\n\nasync fn command_slip10_generate(size: Option<NonZeroUsize>, location: VaultLocation) {\n    let client = Client::default();\n\n    let (vault_path, record_path) = (location.vault_path, location.record_path);\n\n    let output_location =\n        stronghold::Location::generic(vault_path.as_bytes().to_vec(), record_path.as_bytes().to_vec());\n\n    let slip10_generate = Slip10Generate {\n        size_bytes: size.map(|nzu| nzu.get()),\n        output: output_location,\n    };\n\n    info!(\n        "SLIP10 seed successfully created? {}",\n        client.execute_procedure(slip10_generate).is_ok()\n    );\n}\n\nasync fn command_slip10_derive(chain: ChainInput, input: VaultLocation, output: VaultLocation) {\n    let client = Client::default();\n\n    let output_location = input.to_location();\n\n    let slip10_generate = Slip10Generate {\n        size_bytes: None, // take default vaule\n        output: output_location.clone(),\n    };\n\n    client.execute_procedure(slip10_generate).unwrap();\n\n    info!("Deriving SLIP10 Child Secret");\n    let slip10_derive = Slip10Derive {\n        chain: chain.chain,\n        input: Slip10DeriveInput::Seed(output_location),\n        output: output.to_location(),\n    };\n\n    info!(\n        "Derivation Sucessful? {}",\n        client.execute_procedure(slip10_derive).is_ok()\n    );\n}\n\nasync fn command_create_snapshot(path: String, client_path: String, output: VaultLocation, key: String) {\n    let stronghold = Stronghold::default();\n\n    let client_path = client_path.as_bytes().to_vec();\n\n    let client = stronghold\n        .create_client(client_path.clone())\n        .expect("Cannot creat client");\n\n    let output_location = output.to_location();\n\n    let generate_key_procedure = GenerateKey {\n        ty: KeyType::Ed25519,\n        output: output_location,\n    };\n\n    client\n        .execute_procedure(generate_key_procedure)\n        .expect("Running procedure failed");\n\n    stronghold\n        .write_client(client_path)\n        .expect("Store client state into snapshot state failed");\n\n    // calculate hash from key\n    let key = hash_blake2b(key);\n    info!(\n        "Snapshot created successully? {}",\n        stronghold\n            .commit_with_keyprovider(&SnapshotPath::from_path(path), &KeyProvider::try_from(key).unwrap())\n            .is_ok()\n    );\n}\n\nasync fn command_read_snapshot(path: String, client_path: String, key: String, private_key_location: VaultLocation) {\n    let stronghold = Stronghold::default();\n    let client_path = client_path.as_bytes().to_vec();\n    let snapshot_path = SnapshotPath::from_path(path);\n\n    // calculate hash from key\n    let key = hash_blake2b(key);\n    let keyprovider = KeyProvider::try_from(key).expect("Failed to load key");\n\n    info!("Loading snapshot");\n\n    let client = stronghold\n        .load_client_from_snapshot(client_path, &keyprovider, &snapshot_path)\n        .expect("Could not load client from Snapshot");\n\n    // get the public key\n    let public_key_procedure = stronghold::procedures::PublicKey {\n        ty: KeyType::Ed25519,\n        private_key: private_key_location.to_location(),\n    };\n\n    info!("Creating public key");\n    let procedure_result = client.execute_procedure(StrongholdProcedure::PublicKey(public_key_procedure));\n\n    let procedure_result = procedure_result.unwrap();\n    let output: Vec<u8> = procedure_result.into();\n    info!(r#"Public key is "{}" (Base64)"#, base64::encode(output));\n}\n\nasync fn command_bip39_recover(\n    path: String,\n    client_path: String,\n    key: String,\n    mnemonic: String,\n    output: VaultLocation,\n    passphrase: Option<String>,\n) {\n    let stronghold = Stronghold::default();\n    let client_path = client_path.as_bytes().to_vec();\n\n    let snapshot_path = SnapshotPath::from_path(path);\n\n    // calculate hash from key\n    let key = hash_blake2b(key);\n    let keyprovider = KeyProvider::try_from(key).expect("Failed to load key");\n\n    info!("Loading snapshot");\n\n    let client = stronghold\n        .load_client_from_snapshot(client_path, &keyprovider, &snapshot_path)\n        .expect("Could not load client from Snapshot");\n\n    // get the public key\n    let procedure_bip39_recover = stronghold::procedures::BIP39Recover {\n        passphrase,\n        mnemonic,\n        output: output.to_location(),\n    };\n\n    info!("Recovering BIP39");\n    let procedure_result = client.execute_procedure(StrongholdProcedure::BIP39Recover(procedure_bip39_recover));\n\n    info!(r#"BIP39 Recovery successful? {}"#, procedure_result.is_ok());\n}\n\n#[tokio::main]\nasync fn main() {\n    let _logger = env_logger::builder()\n        .is_test(true)\n        .filter_level(LevelFilter::Debug)\n        .try_init();\n\n    let cli = StrongholdCLI::parse();\n\n    match cli.cmds {\n        Command::GenerateKey { key_type, location } => {\n            command_generate_key(key_type, location).await;\n        }\n        Command::StoreReadWrite { key, value } => {\n            command_write_and_read_from_store(key, value).await.unwrap();\n        }\n        Command::BIP39Generate {\n            passphrase,\n            lang,\n            location,\n        } => command_generate_bip39(passphrase, lang, location).await,\n        Command::SLIP10Generate { size, location } => command_slip10_generate(size, location).await,\n        Command::SLIP10Derive {\n            chain,\n            input_record_path,\n            input_vault_path,\n            output_record_path,\n            output_vault_path,\n        } => {\n            command_slip10_derive(\n                chain,\n                VaultLocation::from(input_vault_path, input_record_path),\n                VaultLocation::from(output_vault_path, output_record_path),\n            )\n            .await\n        }\n        Command::CreateSnapshot {\n            path,\n            client_path,\n            output,\n            key,\n        } => command_create_snapshot(path, client_path, output, key).await,\n        Command::ReadSnapshot {\n            path,\n            client_path,\n            key,\n            private_key_location,\n        } => command_read_snapshot(path, client_path, key, private_key_location).await,\n        Command::Bip39Recover {\n            path,\n            mnemonic,\n            output,\n            passphrase,\n            client_path,\n            key,\n        } => command_bip39_recover(path, client_path, key, mnemonic, output, passphrase).await,\n    }\n}\n'}}]);