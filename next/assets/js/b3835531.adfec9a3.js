"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),r=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=r(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,s=_(e,["components","mdxType","originalType","parentName"]),c=r(a),p=l,k=c["".concat(d,".").concat(p)]||c[p]||u[p]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=c;var _={};for(var d in t)hasOwnProperty.call(t,d)&&(_[d]=t[d]);_.originalType=e,_.mdxType="string"==typeof e?e:l,o[1]=_;for(var r=2;r<i;r++)o[r]=a[r];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85434:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>_,toc:()=>r});var n=a(87462),l=(a(67294),a(3905));const i={},o=void 0,_={unversionedId:"libraries/python/api_reference",id:"libraries/python/api_reference",title:"api_reference",description:"Utils Objects",source:"@site/next/external/iota.rs/documentation/docs/libraries/python/api_reference.md",sourceDirName:"libraries/python",slug:"/libraries/python/api_reference",permalink:"/next/iota.rs/libraries/python/api_reference",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/libraries/python/api_reference.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: StrongholdSecretManager",permalink:"/next/iota.rs/libraries/nodejs/references/interfaces/StrongholdSecretManager"},next:{title:"API Reference",permalink:"/next/iota.rs/libraries/rust/api_reference"}},d={},r=[{value:"Utils Objects",id:"utils-objects",level:2},{value:"bech32_to_hex",id:"bech32_to_hex",level:4},{value:"hex_to_bech32",id:"hex_to_bech32",level:4},{value:"hex_public_key_to_beh32_address",id:"hex_public_key_to_beh32_address",level:4},{value:"parse_bech32_address",id:"parse_bech32_address",level:4},{value:"is_address_valid",id:"is_address_valid",level:4},{value:"generate_mnemonic",id:"generate_mnemonic",level:4},{value:"mnemonic_to_hex_seed",id:"mnemonic_to_hex_seed",level:4},{value:"block_id",id:"block_id",level:4},{value:"LedgerNanoSecretManager Objects",id:"ledgernanosecretmanager-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"MnemonicSecretManager Objects",id:"mnemonicsecretmanager-objects",level:2},{value:"__init__",id:"__init__-1",level:4},{value:"StrongholdSecretManager Objects",id:"strongholdsecretmanager-objects",level:2},{value:"__init__",id:"__init__-2",level:4},{value:"IotaClient Objects",id:"iotaclient-objects",level:2},{value:"__init__",id:"__init__-3",level:4},{value:"build_alias_output",id:"build_alias_output",level:4},{value:"build_basic_output",id:"build_basic_output",level:4},{value:"build_foundry_output",id:"build_foundry_output",level:4},{value:"build_nft_output",id:"build_nft_output",level:4},{value:"generate_addresses",id:"generate_addresses",level:4},{value:"build_and_post_block",id:"build_and_post_block",level:4},{value:"get_node",id:"get_node",level:4},{value:"get_network_info",id:"get_network_info",level:4},{value:"get_network_id",id:"get_network_id",level:4},{value:"get_bech32_hrp",id:"get_bech32_hrp",level:4},{value:"get_min_pow_score",id:"get_min_pow_score",level:4},{value:"get_tips_interval",id:"get_tips_interval",level:4},{value:"get_local_pow",id:"get_local_pow",level:4},{value:"get_fall_back_to_local_pow",id:"get_fall_back_to_local_pow",level:4},{value:"unhealthy_nodes",id:"unhealthy_nodes",level:4},{value:"get_ledger_nano_status",id:"get_ledger_nano_status",level:4},{value:"prepare_transaction",id:"prepare_transaction",level:4},{value:"sign_transaction",id:"sign_transaction",level:4},{value:"store_mnemonic",id:"store_mnemonic",level:4},{value:"submit_payload",id:"submit_payload",level:4},{value:"HighLevelAPI Objects",id:"highlevelapi-objects",level:2},{value:"get_outputs",id:"get_outputs",level:4},{value:"try_get_outputs",id:"try_get_outputs",level:4},{value:"find_blocks",id:"find_blocks",level:4},{value:"retry",id:"retry",level:4},{value:"retry_until_included",id:"retry_until_included",level:4},{value:"consolidate_funds",id:"consolidate_funds",level:4},{value:"find_inputs",id:"find_inputs",level:4},{value:"find_outputs",id:"find_outputs",level:4},{value:"reattach",id:"reattach",level:4},{value:"reattach_unchecked",id:"reattach_unchecked",level:4},{value:"promote",id:"promote",level:4},{value:"promote_unchecked",id:"promote_unchecked",level:4},{value:"NodeIndexerAPI Objects",id:"nodeindexerapi-objects",level:2},{value:"basic_output_ids",id:"basic_output_ids",level:4},{value:"alias_output_ids",id:"alias_output_ids",level:4},{value:"alias_output_id",id:"alias_output_id",level:4},{value:"nft_output_ids",id:"nft_output_ids",level:4},{value:"nft_output_id",id:"nft_output_id",level:4},{value:"foundry_output_ids",id:"foundry_output_ids",level:4},{value:"foundry_output_id",id:"foundry_output_id",level:4},{value:"NodeCoreAPI Objects",id:"nodecoreapi-objects",level:2},{value:"get_node_health",id:"get_node_health",level:4},{value:"get_node_info",id:"get_node_info",level:4},{value:"get_info",id:"get_info",level:4},{value:"get_peers",id:"get_peers",level:4},{value:"get_tips",id:"get_tips",level:4},{value:"post_block",id:"post_block",level:4},{value:"get_block_data",id:"get_block_data",level:4},{value:"get_block_metadata",id:"get_block_metadata",level:4},{value:"get_block_raw",id:"get_block_raw",level:4},{value:"get_output",id:"get_output",level:4},{value:"get_output_metadata",id:"get_output_metadata",level:4},{value:"get_milestone_by_id",id:"get_milestone_by_id",level:4},{value:"get_milestone_by_id_raw",id:"get_milestone_by_id_raw",level:4},{value:"get_milestone_by_index",id:"get_milestone_by_index",level:4},{value:"get_milestone_by_index_raw",id:"get_milestone_by_index_raw",level:4},{value:"get_utxo_changes_by_id",id:"get_utxo_changes_by_id",level:4},{value:"get_utxo_changes_by_index",id:"get_utxo_changes_by_index",level:4},{value:"get_receipts",id:"get_receipts",level:4},{value:"get_receipts_migrated_at",id:"get_receipts_migrated_at",level:4},{value:"get_treasury",id:"get_treasury",level:4},{value:"get_included_block",id:"get_included_block",level:4},{value:"send_message_routine",id:"send_message_routine",level:4},{value:"IotaClientError Objects",id:"iotaclienterror-objects",level:2}],s={toc:r};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{id:"iota_client"}),(0,l.kt)("h1",{id:"iota_client"},"iota","_","client"),(0,l.kt)("a",{id:"iota_client._utils"}),(0,l.kt)("h1",{id:"iota_client_utils"},"iota","_","client.","_","utils"),(0,l.kt)("a",{id:"iota_client._utils.Utils"}),(0,l.kt)("h2",{id:"utils-objects"},"Utils Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Utils(BaseAPI)\n")),(0,l.kt)("a",{id:"iota_client._utils.Utils.bech32_to_hex"}),(0,l.kt)("h4",{id:"bech32_to_hex"},"bech32","_","to","_","hex"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def bech32_to_hex(bech32)\n")),(0,l.kt)("p",null,"Transforms bech32 to hex."),(0,l.kt)("a",{id:"iota_client._utils.Utils.hex_to_bech32"}),(0,l.kt)("h4",{id:"hex_to_bech32"},"hex","_","to","_","bech32"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def hex_to_bech32(hex, bech32_hrp)\n")),(0,l.kt)("p",null,"Transforms a hex encoded address to a bech32 encoded address."),(0,l.kt)("a",{id:"iota_client._utils.Utils.hex_public_key_to_beh32_address"}),(0,l.kt)("h4",{id:"hex_public_key_to_beh32_address"},"hex","_","public","_","key","_","to","_","beh32","_","address"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def hex_public_key_to_beh32_address(hex, bech32_hrp=None)\n")),(0,l.kt)("p",null,"Transforms a hex encoded public key to a bech32 encoded address."),(0,l.kt)("a",{id:"iota_client._utils.Utils.parse_bech32_address"}),(0,l.kt)("h4",{id:"parse_bech32_address"},"parse","_","bech32","_","address"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def parse_bech32_address(address)\n")),(0,l.kt)("p",null,"Returns a valid Address parsed from a String."),(0,l.kt)("a",{id:"iota_client._utils.Utils.is_address_valid"}),(0,l.kt)("h4",{id:"is_address_valid"},"is","_","address","_","valid"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def is_address_valid(address)\n")),(0,l.kt)("p",null,"Checks if a String is a valid bech32 encoded address."),(0,l.kt)("a",{id:"iota_client._utils.Utils.generate_mnemonic"}),(0,l.kt)("h4",{id:"generate_mnemonic"},"generate","_","mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def generate_mnemonic()\n")),(0,l.kt)("p",null,"Generates a new mnemonic."),(0,l.kt)("a",{id:"iota_client._utils.Utils.mnemonic_to_hex_seed"}),(0,l.kt)("h4",{id:"mnemonic_to_hex_seed"},"mnemonic","_","to","_","hex","_","seed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def mnemonic_to_hex_seed(mnemonic)\n")),(0,l.kt)("p",null,"Returns a hex encoded seed for a mnemonic."),(0,l.kt)("a",{id:"iota_client._utils.Utils.block_id"}),(0,l.kt)("h4",{id:"block_id"},"block","_","id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def block_id(block)\n")),(0,l.kt)("p",null,"Returns a block ID (Blake2b256 hash of block bytes) from a block."),(0,l.kt)("a",{id:"iota_client.secret_manager"}),(0,l.kt)("h1",{id:"iota_clientsecret_manager"},"iota","_","client.secret","_","manager"),(0,l.kt)("a",{id:"iota_client.secret_manager.LedgerNanoSecretManager"}),(0,l.kt)("h2",{id:"ledgernanosecretmanager-objects"},"LedgerNanoSecretManager Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class LedgerNanoSecretManager(dict)\n")),(0,l.kt)("p",null,"Secret manager that uses a Ledger Nano hardware wallet or Speculos simulator."),(0,l.kt)("a",{id:"iota_client.secret_manager.LedgerNanoSecretManager.__init__"}),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(is_simulator)\n")),(0,l.kt)("p",null,"Initialize a ledger nano secret manager."),(0,l.kt)("a",{id:"iota_client.secret_manager.MnemonicSecretManager"}),(0,l.kt)("h2",{id:"mnemonicsecretmanager-objects"},"MnemonicSecretManager Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class MnemonicSecretManager(dict)\n")),(0,l.kt)("p",null,"Secret manager that uses a mnemonic in plain memory. It's not recommended for production use. Use LedgerNano or Stronghold instead."),(0,l.kt)("a",{id:"iota_client.secret_manager.MnemonicSecretManager.__init__"}),(0,l.kt)("h4",{id:"__init__-1"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(mnemonic)\n")),(0,l.kt)("p",null,"Initialize a mnemonic secret manager."),(0,l.kt)("a",{id:"iota_client.secret_manager.StrongholdSecretManager"}),(0,l.kt)("h2",{id:"strongholdsecretmanager-objects"},"StrongholdSecretManager Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class StrongholdSecretManager(dict)\n")),(0,l.kt)("p",null,"Secret manager that uses Stronghold."),(0,l.kt)("a",{id:"iota_client.secret_manager.StrongholdSecretManager.__init__"}),(0,l.kt)("h4",{id:"__init__-2"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(snapshot_path, password)\n")),(0,l.kt)("p",null,"Initialize a stronghold secret manager."),(0,l.kt)("a",{id:"iota_client.client"}),(0,l.kt)("h1",{id:"iota_clientclient"},"iota","_","client.client"),(0,l.kt)("a",{id:"iota_client.client.IotaClient"}),(0,l.kt)("h2",{id:"iotaclient-objects"},"IotaClient Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class IotaClient(NodeCoreAPI, NodeIndexerAPI, HighLevelAPI, Utils)\n")),(0,l.kt)("a",{id:"iota_client.client.IotaClient.__init__"}),(0,l.kt)("h4",{id:"__init__-3"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(client_config=None)\n")),(0,l.kt)("p",null,"Initialize the IOTA Client."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.build_alias_output"}),(0,l.kt)("h4",{id:"build_alias_output"},"build","_","alias","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_alias_output(alias_id,\n                       unlock_conditions,\n                       amount=None,\n                       native_tokens=None,\n                       state_index=None,\n                       state_metadata=None,\n                       foundry_counter=None,\n                       features=None,\n                       immutable_features=None)\n")),(0,l.kt)("p",null,"Build an AliasOutput."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.build_basic_output"}),(0,l.kt)("h4",{id:"build_basic_output"},"build","_","basic","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_basic_output(unlock_conditions,\n                       amount=None,\n                       native_tokens=None,\n                       features=None)\n")),(0,l.kt)("p",null,"Build a BasicOutput."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.build_foundry_output"}),(0,l.kt)("h4",{id:"build_foundry_output"},"build","_","foundry","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_foundry_output(serial_number,\n                         token_scheme,\n                         unlock_conditions,\n                         amount=None,\n                         native_tokens=None,\n                         features=None,\n                         immutable_features=None)\n")),(0,l.kt)("p",null,"Build a FoundryOutput."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.build_nft_output"}),(0,l.kt)("h4",{id:"build_nft_output"},"build","_","nft","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_nft_output(nft_id,\n                     unlock_conditions,\n                     amount=None,\n                     native_tokens=None,\n                     features=None,\n                     immutable_features=None)\n")),(0,l.kt)("p",null,"Build an NftOutput."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.generate_addresses"}),(0,l.kt)("h4",{id:"generate_addresses"},"generate","_","addresses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def generate_addresses(secret_manager, options)\n")),(0,l.kt)("p",null,"Generate addresses."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.build_and_post_block"}),(0,l.kt)("h4",{id:"build_and_post_block"},"build","_","and","_","post","_","block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_and_post_block(secret_manager=None, options=None)\n")),(0,l.kt)("p",null,"Build and post a block."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.get_node"}),(0,l.kt)("h4",{id:"get_node"},"get","_","node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_node()\n")),(0,l.kt)("p",null,"Get a node candidate from the healthy node pool."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.get_network_info"}),(0,l.kt)("h4",{id:"get_network_info"},"get","_","network","_","info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_network_info()\n")),(0,l.kt)("p",null,"Gets the network related information such as network_id and min_pow_score."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.get_network_id"}),(0,l.kt)("h4",{id:"get_network_id"},"get","_","network","_","id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_network_id()\n")),(0,l.kt)("p",null,"Gets the network id of the node we're connecting to."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.get_bech32_hrp"}),(0,l.kt)("h4",{id:"get_bech32_hrp"},"get","_","bech32","_","hrp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_bech32_hrp()\n")),(0,l.kt)("p",null,"Returns the bech32_hrp."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.get_min_pow_score"}),(0,l.kt)("h4",{id:"get_min_pow_score"},"get","_","min","_","pow","_","score"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_min_pow_score()\n")),(0,l.kt)("p",null,"Returns the min pow score."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.get_tips_interval"}),(0,l.kt)("h4",{id:"get_tips_interval"},"get","_","tips","_","interval"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_tips_interval()\n")),(0,l.kt)("p",null,"Returns the tips interval."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.get_local_pow"}),(0,l.kt)("h4",{id:"get_local_pow"},"get","_","local","_","pow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_local_pow()\n")),(0,l.kt)("p",null,"Returns if local pow should be used or not."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.get_fall_back_to_local_pow"}),(0,l.kt)("h4",{id:"get_fall_back_to_local_pow"},"get","_","fall","_","back","_","to","_","local","_","pow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_fall_back_to_local_pow()\n")),(0,l.kt)("p",null,"Get fallback to local proof of work timeout."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.unhealthy_nodes"}),(0,l.kt)("h4",{id:"unhealthy_nodes"},"unhealthy","_","nodes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def unhealthy_nodes()\n")),(0,l.kt)("p",null,"Returns the unhealthy nodes."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.get_ledger_nano_status"}),(0,l.kt)("h4",{id:"get_ledger_nano_status"},"get","_","ledger","_","nano","_","status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_ledger_nano_status(is_simulator)\n")),(0,l.kt)("p",null,"Returns the Ledger Status."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.prepare_transaction"}),(0,l.kt)("h4",{id:"prepare_transaction"},"prepare","_","transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def prepare_transaction(secret_manager=None, options=None)\n")),(0,l.kt)("p",null,"Prepare a transaction for signing."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.sign_transaction"}),(0,l.kt)("h4",{id:"sign_transaction"},"sign","_","transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sign_transaction(secret_manager, prepared_transaction_data)\n")),(0,l.kt)("p",null,"Sign a transaction."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.store_mnemonic"}),(0,l.kt)("h4",{id:"store_mnemonic"},"store","_","mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def store_mnemonic(secret_manager, mnemonic)\n")),(0,l.kt)("p",null,"Store a mnemonic in the Stronghold vault."),(0,l.kt)("a",{id:"iota_client.client.IotaClient.submit_payload"}),(0,l.kt)("h4",{id:"submit_payload"},"submit","_","payload"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def submit_payload(payload_dto)\n")),(0,l.kt)("p",null,"Submit a payload in a block."),(0,l.kt)("a",{id:"iota_client._high_level_api"}),(0,l.kt)("h1",{id:"iota_client_high_level_api"},"iota","_","client.","_","high","_","level","_","api"),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI"}),(0,l.kt)("h2",{id:"highlevelapi-objects"},"HighLevelAPI Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class HighLevelAPI(BaseAPI)\n")),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.get_outputs"}),(0,l.kt)("h4",{id:"get_outputs"},"get","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_outputs(output_ids)\n")),(0,l.kt)("p",null,"Fetch OutputResponse from provided OutputIds (requests are sent in parallel)."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.try_get_outputs"}),(0,l.kt)("h4",{id:"try_get_outputs"},"try","_","get","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def try_get_outputs(output_ids)\n")),(0,l.kt)("p",null,"Try to get OutputResponse from provided OutputIds.\nRequests are sent in parallel and errors are ignored, can be useful for spent outputs."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.find_blocks"}),(0,l.kt)("h4",{id:"find_blocks"},"find","_","blocks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def find_blocks(block_ids)\n")),(0,l.kt)("p",null,"Find all blocks by provided block IDs."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.retry"}),(0,l.kt)("h4",{id:"retry"},"retry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def retry(block_id)\n")),(0,l.kt)("p",null,"Retries (promotes or reattaches) a block for provided block id. Block should only be\nretried only if they are valid and haven't been confirmed for a while."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.retry_until_included"}),(0,l.kt)("h4",{id:"retry_until_included"},"retry","_","until","_","included"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def retry_until_included(block_id, interval=None, max_attempts=None)\n")),(0,l.kt)("p",null,"Retries (promotes or reattaches) a block for provided block id until it's included (referenced by a\nmilestone). Default interval is 5 seconds and max attempts is 40. Returns the included block at first\nposition and additional reattached blocks."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.consolidate_funds"}),(0,l.kt)("h4",{id:"consolidate_funds"},"consolidate","_","funds"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def consolidate_funds(secret_manager, generate_addresses_options)\n")),(0,l.kt)("p",null,"Function to consolidate all funds from a range of addresses to the address with the lowest index in that range\nReturns the address to which the funds got consolidated, if any were available."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.find_inputs"}),(0,l.kt)("h4",{id:"find_inputs"},"find","_","inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def find_inputs(addresses, amount)\n")),(0,l.kt)("p",null,"Function to find inputs from addresses for a provided amount (useful for offline signing)"),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.find_outputs"}),(0,l.kt)("h4",{id:"find_outputs"},"find","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def find_outputs(output_ids, addresses)\n")),(0,l.kt)("p",null,"Find all outputs based on the requests criteria. This method will try to query multiple nodes if\nthe request amount exceeds individual node limit."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.reattach"}),(0,l.kt)("h4",{id:"reattach"},"reattach"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def reattach(block_id)\n")),(0,l.kt)("p",null,"Reattaches blocks for provided block id. Blocks can be reattached only if they are valid and haven't been\nconfirmed for a while."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.reattach_unchecked"}),(0,l.kt)("h4",{id:"reattach_unchecked"},"reattach","_","unchecked"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def reattach_unchecked(block_id)\n")),(0,l.kt)("p",null,"Reattach a block without checking if it should be reattached."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.promote"}),(0,l.kt)("h4",{id:"promote"},"promote"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def promote(block_id)\n")),(0,l.kt)("p",null,"Promotes a block. The method should validate if a promotion is necessary through get_block. If not, the\nmethod should error out and should not allow unnecessary promotions."),(0,l.kt)("a",{id:"iota_client._high_level_api.HighLevelAPI.promote_unchecked"}),(0,l.kt)("h4",{id:"promote_unchecked"},"promote","_","unchecked"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def promote_unchecked(block_id)\n")),(0,l.kt)("p",null,"Promote a block without checking if it should be promoted."),(0,l.kt)("a",{id:"iota_client._node_indexer_api"}),(0,l.kt)("h1",{id:"iota_client_node_indexer_api"},"iota","_","client.","_","node","_","indexer","_","api"),(0,l.kt)("a",{id:"iota_client._node_indexer_api.NodeIndexerAPI"}),(0,l.kt)("h2",{id:"nodeindexerapi-objects"},"NodeIndexerAPI Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class NodeIndexerAPI(BaseAPI)\n")),(0,l.kt)("a",{id:"iota_client._node_indexer_api.NodeIndexerAPI.basic_output_ids"}),(0,l.kt)("h4",{id:"basic_output_ids"},"basic","_","output","_","ids"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def basic_output_ids(query_parameters)\n")),(0,l.kt)("p",null,"Fetch basic output IDs."),(0,l.kt)("a",{id:"iota_client._node_indexer_api.NodeIndexerAPI.alias_output_ids"}),(0,l.kt)("h4",{id:"alias_output_ids"},"alias","_","output","_","ids"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def alias_output_ids(query_parameters)\n")),(0,l.kt)("p",null,"Fetch alias output IDs."),(0,l.kt)("a",{id:"iota_client._node_indexer_api.NodeIndexerAPI.alias_output_id"}),(0,l.kt)("h4",{id:"alias_output_id"},"alias","_","output","_","id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def alias_output_id(alias_id)\n")),(0,l.kt)("p",null,"Fetch alias output ID."),(0,l.kt)("a",{id:"iota_client._node_indexer_api.NodeIndexerAPI.nft_output_ids"}),(0,l.kt)("h4",{id:"nft_output_ids"},"nft","_","output","_","ids"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def nft_output_ids(query_parameters)\n")),(0,l.kt)("p",null,"Fetch NFT output IDs."),(0,l.kt)("a",{id:"iota_client._node_indexer_api.NodeIndexerAPI.nft_output_id"}),(0,l.kt)("h4",{id:"nft_output_id"},"nft","_","output","_","id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def nft_output_id(nft_id)\n")),(0,l.kt)("p",null,"Fetch NFT output ID."),(0,l.kt)("a",{id:"iota_client._node_indexer_api.NodeIndexerAPI.foundry_output_ids"}),(0,l.kt)("h4",{id:"foundry_output_ids"},"foundry","_","output","_","ids"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def foundry_output_ids(query_parameters)\n")),(0,l.kt)("p",null,"Fetch foundry Output IDs."),(0,l.kt)("a",{id:"iota_client._node_indexer_api.NodeIndexerAPI.foundry_output_id"}),(0,l.kt)("h4",{id:"foundry_output_id"},"foundry","_","output","_","id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def foundry_output_id(foundry_id)\n")),(0,l.kt)("p",null,"Fetch foundry Output ID."),(0,l.kt)("a",{id:"iota_client._node_core_api"}),(0,l.kt)("h1",{id:"iota_client_node_core_api"},"iota","_","client.","_","node","_","core","_","api"),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI"}),(0,l.kt)("h2",{id:"nodecoreapi-objects"},"NodeCoreAPI Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class NodeCoreAPI(BaseAPI)\n")),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_node_health"}),(0,l.kt)("h4",{id:"get_node_health"},"get","_","node","_","health"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_node_health(url)\n")),(0,l.kt)("p",null,"Get node health."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_node_info"}),(0,l.kt)("h4",{id:"get_node_info"},"get","_","node","_","info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_node_info(url, auth=None)\n")),(0,l.kt)("p",null,"Get node info."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_info"}),(0,l.kt)("h4",{id:"get_info"},"get","_","info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_info()\n")),(0,l.kt)("p",null,"Returns the node information together with the url of the used node."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_peers"}),(0,l.kt)("h4",{id:"get_peers"},"get","_","peers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_peers()\n")),(0,l.kt)("p",null,"Get peers."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_tips"}),(0,l.kt)("h4",{id:"get_tips"},"get","_","tips"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_tips()\n")),(0,l.kt)("p",null,"Get tips."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.post_block"}),(0,l.kt)("h4",{id:"post_block"},"post","_","block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def post_block(block)\n")),(0,l.kt)("p",null,"Post block."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_block_data"}),(0,l.kt)("h4",{id:"get_block_data"},"get","_","block","_","data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_block_data(block_id)\n")),(0,l.kt)("p",null,"Post block."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_block_metadata"}),(0,l.kt)("h4",{id:"get_block_metadata"},"get","_","block","_","metadata"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_block_metadata(block_id)\n")),(0,l.kt)("p",null,"Get block metadata with block_id."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_block_raw"}),(0,l.kt)("h4",{id:"get_block_raw"},"get","_","block","_","raw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_block_raw(block_id)\n")),(0,l.kt)("p",null,"Get block raw."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_output"}),(0,l.kt)("h4",{id:"get_output"},"get","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_output(output_id)\n")),(0,l.kt)("p",null,"Get output."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_output_metadata"}),(0,l.kt)("h4",{id:"get_output_metadata"},"get","_","output","_","metadata"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_output_metadata(output_id)\n")),(0,l.kt)("p",null,"Get output metadata."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_milestone_by_id"}),(0,l.kt)("h4",{id:"get_milestone_by_id"},"get","_","milestone","_","by","_","id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_milestone_by_id(milestone_id)\n")),(0,l.kt)("p",null,"Get the milestone by the given milestone id."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_milestone_by_id_raw"}),(0,l.kt)("h4",{id:"get_milestone_by_id_raw"},"get","_","milestone","_","by","_","id","_","raw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_milestone_by_id_raw(milestone_id)\n")),(0,l.kt)("p",null,"Get the raw milestone by the given milestone id."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_milestone_by_index"}),(0,l.kt)("h4",{id:"get_milestone_by_index"},"get","_","milestone","_","by","_","index"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_milestone_by_index(index)\n")),(0,l.kt)("p",null,"Get the milestone by the given index."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_milestone_by_index_raw"}),(0,l.kt)("h4",{id:"get_milestone_by_index_raw"},"get","_","milestone","_","by","_","index","_","raw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_milestone_by_index_raw(index)\n")),(0,l.kt)("p",null,"Get the milestone by the given index."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_utxo_changes_by_id"}),(0,l.kt)("h4",{id:"get_utxo_changes_by_id"},"get","_","utxo","_","changes","_","by","_","id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_utxo_changes_by_id(milestone_id)\n")),(0,l.kt)("p",null,"Get the UTXO changes by the given milestone id."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_utxo_changes_by_index"}),(0,l.kt)("h4",{id:"get_utxo_changes_by_index"},"get","_","utxo","_","changes","_","by","_","index"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_utxo_changes_by_index(index)\n")),(0,l.kt)("p",null,"Get the UTXO changes by the given milestone index."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_receipts"}),(0,l.kt)("h4",{id:"get_receipts"},"get","_","receipts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_receipts()\n")),(0,l.kt)("p",null,"Get all receipts."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_receipts_migrated_at"}),(0,l.kt)("h4",{id:"get_receipts_migrated_at"},"get","_","receipts","_","migrated","_","at"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_receipts_migrated_at(milestone_index)\n")),(0,l.kt)("p",null,"Get the receipts by the given milestone index."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_treasury"}),(0,l.kt)("h4",{id:"get_treasury"},"get","_","treasury"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_treasury()\n")),(0,l.kt)("p",null,"Get the treasury output."),(0,l.kt)("a",{id:"iota_client._node_core_api.NodeCoreAPI.get_included_block"}),(0,l.kt)("h4",{id:"get_included_block"},"get","_","included","_","block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_included_block(transaction_id)\n")),(0,l.kt)("p",null,"Returns the included block of the transaction."),(0,l.kt)("a",{id:"iota_client.common"}),(0,l.kt)("h1",{id:"iota_clientcommon"},"iota","_","client.common"),(0,l.kt)("a",{id:"iota_client.common.send_message_routine"}),(0,l.kt)("h4",{id:"send_message_routine"},"send","_","message","_","routine"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def send_message_routine(func)\n")),(0,l.kt)("p",null,"The routine of dump json string and call send_message()"),(0,l.kt)("a",{id:"iota_client.common.IotaClientError"}),(0,l.kt)("h2",{id:"iotaclienterror-objects"},"IotaClientError Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class IotaClientError(Exception)\n")),(0,l.kt)("p",null,"iota-client error"),(0,l.kt)("a",{id:"iota_client._base_api"}),(0,l.kt)("h1",{id:"iota_client_base_api"},"iota","_","client.","_","base","_","api"))}u.isMDXComponent=!0}}]);