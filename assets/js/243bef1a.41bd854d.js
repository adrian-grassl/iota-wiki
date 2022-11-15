"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22437],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,h=u["".concat(i,".").concat(g)]||u[g]||m[g]||l;return a?n.createElement(h,d(d({ref:t},o),{},{components:a})):n.createElement(h,d({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,d=new Array(l);d[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,d[1]=s;for(var p=2;p<l;p++)d[p]=a[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60724:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},d=void 0,s={unversionedId:"libraries/java/api/Client",id:"libraries/java/api/Client",title:"Client",description:"The iota.rs client instance",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/Client.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/Client",permalink:"/iota.rs/libraries/java/api/Client",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/Client.mdx",tags:[],version:"current",frontMatter:{}},i={},p=[{value:"Builder(): ClientBuilder",id:"builder-clientbuilder",level:3},{value:"getHealth(): boolean",id:"gethealth-boolean",level:3},{value:"getNodeHealth(node): boolean",id:"getnodehealthnode-boolean",level:3},{value:"getNode(): Node",id:"getnode-node",level:3},{value:"getNetworkId(): long",id:"getnetworkid-long",level:3},{value:"getPowProvider(): ClientMiner",id:"getpowprovider-clientminer",level:3},{value:"getNetworkInfo(): NetworkInfo",id:"getnetworkinfo-networkinfo",level:3},{value:"getInfo(): NodeInfoWrapper",id:"getinfo-nodeinfowrapper",level:3},{value:"getPeers(): PeerDto[]",id:"getpeers-peerdto",level:3},{value:"getTips(): String[]",id:"gettips-string",level:3},{value:"getOutput(output_id): OutputResponse",id:"getoutputoutput_id-outputresponse",level:3},{value:"getAddress(): GetAddressBuilder",id:"getaddress-getaddressbuilder",level:3},{value:"getAddressBalance(address): BalanceAddressResponse",id:"getaddressbalanceaddress-balanceaddressresponse",level:3},{value:"getAddressesBalances(addresses): BalanceAddressResponse[]",id:"getaddressesbalancesaddresses-balanceaddressresponse",level:3},{value:"findOutputs(output_ids, addresses): OutputResponse[]",id:"findoutputsoutput_ids-addresses-outputresponse",level:3},{value:"getMilestone(index): MilestoneResponse",id:"getmilestoneindex-milestoneresponse",level:3},{value:"getMilestoneUtxoChanges(index): MilestoneUtxoChangesResponse",id:"getmilestoneutxochangesindex-milestoneutxochangesresponse",level:3},{value:"getReceipts(): ReceiptDto[]",id:"getreceipts-receiptdto",level:3},{value:"getReceiptsMigratedAt(index): ReceiptDto[]",id:"getreceiptsmigratedatindex-receiptdto",level:3},{value:"getTreasury(): TreasuryResponse",id:"gettreasury-treasuryresponse",level:3},{value:"getIncludedMessage(transaction_id): Message",id:"getincludedmessagetransaction_id-message",level:3},{value:"postMessage(msg): MessageId",id:"postmessagemsg-messageid",level:3},{value:"reattach(message_id): MessageWrap",id:"reattachmessage_id-messagewrap",level:3},{value:"reattachUnchecked(message_id): MessageWrap",id:"reattachuncheckedmessage_id-messagewrap",level:3},{value:"promote(message_id): MessageWrap",id:"promotemessage_id-messagewrap",level:3},{value:"promoteUnchecked(message_id): MessageWrap",id:"promoteuncheckedmessage_id-messagewrap",level:3},{value:"getBalance(seed): GetBalanceBuilderApi",id:"getbalanceseed-getbalancebuilderapi",level:3},{value:"message(): ClientMessageBuilder",id:"message-clientmessagebuilder",level:3},{value:"getMessage(): GetMessageBuilder",id:"getmessage-getmessagebuilder",level:3},{value:"getAddresses(seed): GetAddressesBuilder",id:"getaddressesseed-getaddressesbuilder",level:3},{value:"retryUntilIncluded(message_id, interval, max_attempts): MessageWrap[]",id:"retryuntilincludedmessage_id-interval-max_attempts-messagewrap",level:3},{value:"subscriber(): MqttManager",id:"subscriber-mqttmanager",level:3},{value:"generateMnemonic(): String",id:"generatemnemonic-string",level:3},{value:"mnemonicToHexSeed(mnemonic): String",id:"mnemonictohexseedmnemonic-string",level:3},{value:"findInputs(addresses, amount): UtxoInput[]",id:"findinputsaddresses-amount-utxoinput",level:3},{value:"bech32ToHex(bech32): String",id:"bech32tohexbech32-string",level:3},{value:"hexToBech32(hex, bech32_hrp): String",id:"hextobech32hex-bech32_hrp-string",level:3},{value:"hexPublicKeyToBech32Address(hex, bech32_hrp): String",id:"hexpublickeytobech32addresshex-bech32_hrp-string",level:3},{value:"isAddressValid(address): boolean",id:"isaddressvalidaddress-boolean",level:3},{value:"parseBech32Address(address): Address",id:"parsebech32addressaddress-address",level:3},{value:"shouldMigrate(seed, account_index, address_index, pub_addr): boolean",id:"shouldmigrateseed-account_index-address_index-pub_addr-boolean",level:3},{value:"migrate(seed, account_index, address_index, pub_addr, to_address): Message",id:"migrateseed-account_index-address_index-pub_addr-to_address-message",level:3}],o={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The iota.rs client instance"),(0,r.kt)("h3",{id:"builder-clientbuilder"},"Builder(): ",(0,r.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,r.kt)("p",null,"Creates a new instance of the CLient builder"),(0,r.kt)("h3",{id:"gethealth-boolean"},"getHealth(): boolean"),(0,r.kt)("p",null,"GET /health endpoint"),(0,r.kt)("h3",{id:"getnodehealthnode-boolean"},"getNodeHealth(node): boolean"),(0,r.kt)("p",null,"GET /health endpoint for the passed node"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"the node url which you want to query speicifically for, in the case of multiple nodes in a pool")))),(0,r.kt)("h3",{id:"getnode-node"},"getNode(): ",(0,r.kt)("a",{parentName:"h3",href:"#node"},"Node")),(0,r.kt)("h3",{id:"getnetworkid-long"},"getNetworkId(): long"),(0,r.kt)("p",null,"Gets the network id of the node we're connecting to."),(0,r.kt)("h3",{id:"getpowprovider-clientminer"},"getPowProvider(): ",(0,r.kt)("a",{parentName:"h3",href:"#clientminer"},"ClientMiner")),(0,r.kt)("p",null,"Gets the miner to use based on the PoW setting"),(0,r.kt)("h3",{id:"getnetworkinfo-networkinfo"},"getNetworkInfo(): ",(0,r.kt)("a",{parentName:"h3",href:"#networkinfo"},"NetworkInfo")),(0,r.kt)("p",null,"Gets the network related information such as network_id and min_pow_score\nand if it's the default one, sync it first."),(0,r.kt)("h3",{id:"getinfo-nodeinfowrapper"},"getInfo(): ",(0,r.kt)("a",{parentName:"h3",href:"#nodeinfowrapper"},"NodeInfoWrapper")),(0,r.kt)("p",null,"GET /api/v1/info endpoint"),(0,r.kt)("h3",{id:"getpeers-peerdto"},"getPeers(): ",(0,r.kt)("a",{parentName:"h3",href:"#peerdto"},"PeerDto[]")),(0,r.kt)("p",null,"GET /api/v1/peers endpoint"),(0,r.kt)("h3",{id:"gettips-string"},"getTips(): String[]"),(0,r.kt)("p",null,"GET /api/v1/tips endpoint"),(0,r.kt)("h3",{id:"getoutputoutput_id-outputresponse"},"getOutput(output_id): ",(0,r.kt)("a",{parentName:"h3",href:"#outputresponse"},"OutputResponse")),(0,r.kt)("p",null,"GET /api/v1/outputs/{outputId} endpoint\nFind an output by its transaction_id and corresponding output_index."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the output")))),(0,r.kt)("h3",{id:"getaddress-getaddressbuilder"},"getAddress(): ",(0,r.kt)("a",{parentName:"h3",href:"#getaddressbuilder"},"GetAddressBuilder")),(0,r.kt)("p",null,"GET /api/v1/addresses/{address} endpoint\nCreates a new instance of the AddressBuilder"),(0,r.kt)("h3",{id:"getaddressbalanceaddress-balanceaddressresponse"},"getAddressBalance(address): ",(0,r.kt)("a",{parentName:"h3",href:"#balanceaddressresponse"},"BalanceAddressResponse")),(0,r.kt)("p",null,"Return the balance in iota for the given address; No seed needed to do this\nsince we are only checking and already know the address."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The address we want to get the balance for")))),(0,r.kt)("h3",{id:"getaddressesbalancesaddresses-balanceaddressresponse"},"getAddressesBalances(addresses): ",(0,r.kt)("a",{parentName:"h3",href:"#balanceaddressresponse"},"BalanceAddressResponse[]")),(0,r.kt)("p",null,"since we are only checking and already know the addresses."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addresses"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The addresses we want to get the balance for")))),(0,r.kt)("h3",{id:"findoutputsoutput_ids-addresses-outputresponse"},"findOutputs(output_ids, addresses): ",(0,r.kt)("a",{parentName:"h3",href:"#outputresponse"},"OutputResponse[]")),(0,r.kt)("p",null,"Find all outputs based on the requests criteria. This method will try to query multiple nodes if\nthe request amount exceeds individual node limit."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_ids"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The optional output ids to check for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addresses"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The optional list of addresses to check for")))),(0,r.kt)("h3",{id:"getmilestoneindex-milestoneresponse"},"getMilestone(index): ",(0,r.kt)("a",{parentName:"h3",href:"#milestoneresponse"},"MilestoneResponse")),(0,r.kt)("p",null,"GET /api/v1/milestones/{index} endpoint\nGet the milestone by the given index."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"the milestone index")))),(0,r.kt)("h3",{id:"getmilestoneutxochangesindex-milestoneutxochangesresponse"},"getMilestoneUtxoChanges(index): ",(0,r.kt)("a",{parentName:"h3",href:"#milestoneutxochangesresponse"},"MilestoneUtxoChangesResponse")),(0,r.kt)("p",null,"GET /api/v1/milestones/{index}/utxo-changes endpoint\nGets the utxo changes by the given milestone index."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"the milestone index")))),(0,r.kt)("h3",{id:"getreceipts-receiptdto"},"getReceipts(): ",(0,r.kt)("a",{parentName:"h3",href:"#receiptdto"},"ReceiptDto[]")),(0,r.kt)("p",null,"GET /api/v1/receipts endpoint\nGet all receipts."),(0,r.kt)("h3",{id:"getreceiptsmigratedatindex-receiptdto"},"getReceiptsMigratedAt(index): ",(0,r.kt)("a",{parentName:"h3",href:"#receiptdto"},"ReceiptDto[]")),(0,r.kt)("p",null,"GET /api/v1/receipts/{migratedAt} endpoint\nGet the receipts by the given milestone index."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"the milestone index")))),(0,r.kt)("h3",{id:"gettreasury-treasuryresponse"},"getTreasury(): ",(0,r.kt)("a",{parentName:"h3",href:"#treasuryresponse"},"TreasuryResponse")),(0,r.kt)("p",null,"GET /api/v1/treasury endpoint\nGet the treasury output."),(0,r.kt)("h3",{id:"getincludedmessagetransaction_id-message"},"getIncludedMessage(transaction_id): ",(0,r.kt)("a",{parentName:"h3",href:"#message"},"Message")),(0,r.kt)("p",null,"GET /api/v1/transactions/{transactionId}/included-message\nReturns the included message of the transaction."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#transactionid"},"TransactionId")),(0,r.kt)("td",{parentName:"tr",align:null},"the transaction id")))),(0,r.kt)("h3",{id:"postmessagemsg-messageid"},"postMessage(msg): ",(0,r.kt)("a",{parentName:"h3",href:"#messageid"},"MessageId")),(0,r.kt)("p",null,"POST /api/v1/messages endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#message"},"Message")),(0,r.kt)("td",{parentName:"tr",align:null},"The message to post. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"Client.message()")," to create one.")))),(0,r.kt)("h3",{id:"reattachmessage_id-messagewrap"},"reattach(message_id): ",(0,r.kt)("a",{parentName:"h3",href:"#messagewrap"},"MessageWrap")),(0,r.kt)("p",null,"Reattaches messages for provided message id. Messages can be reattached only if they are valid and haven't been\nconfirmed for a while."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#messageid"},"MessageId")),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the Message to reattach")))),(0,r.kt)("h3",{id:"reattachuncheckedmessage_id-messagewrap"},"reattachUnchecked(message_id): ",(0,r.kt)("a",{parentName:"h3",href:"#messagewrap"},"MessageWrap")),(0,r.kt)("p",null,"Reattach a message without checking if it should be reattached"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#messageid"},"MessageId")),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the Message to reattach")))),(0,r.kt)("h3",{id:"promotemessage_id-messagewrap"},"promote(message_id): ",(0,r.kt)("a",{parentName:"h3",href:"#messagewrap"},"MessageWrap")),(0,r.kt)("p",null,"Promotes a message. The method should validate if a promotion is necessary through get_message. If not, the\nmethod should error out and should not allow unnecessary promotions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#messageid"},"MessageId")),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the Message to promote")))),(0,r.kt)("h3",{id:"promoteuncheckedmessage_id-messagewrap"},"promoteUnchecked(message_id): ",(0,r.kt)("a",{parentName:"h3",href:"#messagewrap"},"MessageWrap")),(0,r.kt)("p",null,"Promote a message without checking if it should be promoted"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#messageid"},"MessageId")),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the Message to promote")))),(0,r.kt)("h3",{id:"getbalanceseed-getbalancebuilderapi"},"getBalance(seed): ",(0,r.kt)("a",{parentName:"h3",href:"#getbalancebuilderapi"},"GetBalanceBuilderApi")),(0,r.kt)("p",null,"Return the balance for a provided seed\nAddresses with balance must be consecutive, so this method will return once it encounters a zero\nbalance address."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seed"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"the seed which contains the addressses you want to check balance for")))),(0,r.kt)("h3",{id:"message-clientmessagebuilder"},"message(): ",(0,r.kt)("a",{parentName:"h3",href:"#clientmessagebuilder"},"ClientMessageBuilder")),(0,r.kt)("p",null,"A generic send function for easily sending transaction or indexation messages."),(0,r.kt)("h3",{id:"getmessage-getmessagebuilder"},"getMessage(): ",(0,r.kt)("a",{parentName:"h3",href:"#getmessagebuilder"},"GetMessageBuilder")),(0,r.kt)("p",null,"GET /api/v1/messages/{messageId} endpoint"),(0,r.kt)("h3",{id:"getaddressesseed-getaddressesbuilder"},"getAddresses(seed): ",(0,r.kt)("a",{parentName:"h3",href:"#getaddressesbuilder"},"GetAddressesBuilder")),(0,r.kt)("p",null,"Return a list of addresses from the seed regardless of their validity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seed"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"ssed that will create the addresses")))),(0,r.kt)("h3",{id:"retryuntilincludedmessage_id-interval-max_attempts-messagewrap"},"retryUntilIncluded(message_id, interval, max_attempts): ",(0,r.kt)("a",{parentName:"h3",href:"#messagewrap"},"MessageWrap[]")),(0,r.kt)("p",null,"Retries (promotes or reattaches) a message for provided message id until it's included (referenced by a\nmilestone). Default interval is 5 seconds and max attempts is 40. Returns reattached messages. Set to -1 for defaults."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#messageid"},"MessageId")),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the Message to include")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The interval in seconds to try")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_attempts"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum attempts for retrying")))),(0,r.kt)("h3",{id:"subscriber-mqttmanager"},"subscriber(): ",(0,r.kt)("a",{parentName:"h3",href:"#mqttmanager"},"MqttManager")),(0,r.kt)("p",null,"Returns a handle to the MQTT topics manager."),(0,r.kt)("h3",{id:"generatemnemonic-string"},"generateMnemonic(): String"),(0,r.kt)("p",null,"Generates a new mnemonic."),(0,r.kt)("h3",{id:"mnemonictohexseedmnemonic-string"},"mnemonicToHexSeed(mnemonic): String"),(0,r.kt)("p",null,"Returns a hex encoded seed for a mnemonic."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mnemonic"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The mmnemonic to turn into a seed")))),(0,r.kt)("h3",{id:"findinputsaddresses-amount-utxoinput"},"findInputs(addresses, amount): ",(0,r.kt)("a",{parentName:"h3",href:"#utxoinput"},"UtxoInput[]")),(0,r.kt)("p",null,"Function to find inputs from addresses for a provided amount (useful for offline signing)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addresses"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The addresses to obtain balance from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"the amount we need to find")))),(0,r.kt)("h3",{id:"bech32tohexbech32-string"},"bech32ToHex(bech32): String"),(0,r.kt)("p",null,"Returns a parsed hex String from bech32."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bech32"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The address Bech32 string")))),(0,r.kt)("h3",{id:"hextobech32hex-bech32_hrp-string"},"hexToBech32(hex, bech32_hrp): String"),(0,r.kt)("p",null,"Transforms a hex encoded address to a bech32 encoded address"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hex"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The address Bech32 string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bech32_hrp"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The Bech32 hrp string")))),(0,r.kt)("h3",{id:"hexpublickeytobech32addresshex-bech32_hrp-string"},"hexPublicKeyToBech32Address(hex, bech32_hrp): String"),(0,r.kt)("p",null,"Transforms a hex encoded public key to a bech32 encoded address"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hex"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"hex encoded public key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bech32_hrp"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The Bech32 hrp string")))),(0,r.kt)("h3",{id:"isaddressvalidaddress-boolean"},"isAddressValid(address): boolean"),(0,r.kt)("p",null,"Checks if a str is a valid bech32 encoded address."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The addresss string to check")))),(0,r.kt)("h3",{id:"parsebech32addressaddress-address"},"parseBech32Address(address): ",(0,r.kt)("a",{parentName:"h3",href:"#address"},"Address")),(0,r.kt)("p",null,"Returns a valid Address parsed from a String."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The addresss string to parse")))),(0,r.kt)("h3",{id:"shouldmigrateseed-account_index-address_index-pub_addr-boolean"},"shouldMigrate(seed, account_index, address_index, pub_addr): boolean"),(0,r.kt)("p",null,"Temporarily method to check if your seed is made using the incorrect generation of the old JAVA seed input"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seed"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The seed you used previously")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account_index"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The account index used, is 0 when you didnt use it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address_index"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The address index you want to migrate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pub_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If it's a public or internal address")))),(0,r.kt)("h3",{id:"migrateseed-account_index-address_index-pub_addr-to_address-message"},"migrate(seed, account_index, address_index, pub_addr, to_address): ",(0,r.kt)("a",{parentName:"h3",href:"#message"},"Message")),(0,r.kt)("p",null,"Temporarily method in order to migrate wrongly generated seeds from JAVA to Rust\nMigrates the balance of the address towards the provided to_address\nAnd returns the message or an error"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seed"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The seed you used previously")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account_index"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The account index used, is 0 when you didnt use it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address_index"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The address index you want to migrate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pub_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If it's a public or internal address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to_address"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The address we send the balance to")))))}m.isMDXComponent=!0}}]);