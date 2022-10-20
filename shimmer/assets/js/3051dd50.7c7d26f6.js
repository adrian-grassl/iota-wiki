"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59072],{37144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905)),l=n(69319);const i={description:"Learn how to connect to your node and list its properties using the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","simple connection","get node properties","get milestone","get outputs","get peers","get block","block metadata","get output properties"]},c="Connect to a Node",s={unversionedId:"how_tos/simple",id:"how_tos/simple",title:"Connect to a Node",description:"Learn how to connect to your node and list its properties using the iota.js client library.",source:"@site/shimmer/external/iota.js/documentation/docs/how_tos/simple.mdx",sourceDirName:"how_tos",slug:"/how_tos/simple",permalink:"/shimmer/iotajs/how_tos/simple",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/how_tos/simple.mdx",tags:[],version:"current",frontMatter:{description:"Learn how to connect to your node and list its properties using the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","simple connection","get node properties","get milestone","get outputs","get peers","get block","block metadata","get output properties"]},sidebar:"docs",previous:{title:"Run Code Examples",permalink:"/shimmer/iotajs/how_tos/run_how_tos"},next:{title:"Create an Address",permalink:"/shimmer/iotajs/how_tos/address"}},r={},d=[{value:"Instantiate a SimpleNodeClient",id:"instantiate-a-simplenodeclient",level:2},{value:"Get the SimpleNodeClient&#39;s Properties",id:"get-the-simplenodeclients-properties",level:3},{value:"Submit a Block",id:"submit-a-block",level:2},{value:"Retrieve a Block",id:"retrieve-a-block",level:2},{value:"Retrieve a Block&#39;s Metadata",id:"retrieve-a-blocks-metadata",level:2},{value:"Retrieve a Raw Block",id:"retrieve-a-raw-block",level:2},{value:"Retrieve a Milestone",id:"retrieve-a-milestone",level:2},{value:"Retrieve a Milestone&#39;s Properties",id:"retrieve-a-milestones-properties",level:3},{value:"Retrieve an Output",id:"retrieve-an-output",level:2},{value:"Retrieve an Output&#39;s Properties",id:"retrieve-an-outputs-properties",level:3},{value:"Example Code",id:"example-code",level:2},{value:"Expected Output",id:"expected-output",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-to-a-node"},"Connect to a Node"),(0,a.kt)("h2",{id:"instantiate-a-simplenodeclient"},"Instantiate a SimpleNodeClient"),(0,a.kt)("p",null,"You can instantiate a ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/classes/SingleNodeClient"},"SimpleNodeClient")," using its\n",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/classes/SingleNodeClient#constructor"},"constructor"),".  You will need to provide a valid\n",(0,a.kt)("inlineCode",{parentName:"p"},"API_ENDPOINT"),", and can also use the\n",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/SingleNodeClientOptions"},"SingleNodeClientOptions"),"."),(0,a.kt)("h3",{id:"get-the-simplenodeclients-properties"},"Get the SimpleNodeClient's Properties"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",{parentName:"p",href:"#instantiate-a-simplenodeclient"},"instantiated the SingleNodeClient"),", you can retrieve its properties by\nusing the class's ",(0,a.kt)("a",{parentName:"p",href:"../references/client/classes/SingleNodeClient#methods-1"},"functions"),".  The example uses the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/classes/SingleNodeClient#health"},"SingleNodeClient.health()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/classes/SingleNodeClient#info"},"SingleNodeClient.info()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/classes/SingleNodeClient#tips"},"SingleNodeClient.tips()"))),(0,a.kt)("h2",{id:"submit-a-block"},"Submit a Block"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",{parentName:"p",href:"#instantiate-a-simplenodeclient"},"instantiated the SingleNodeClient"),", you can create and submit a new\nblock using the ",(0,a.kt)("a",{parentName:"p",href:"../references/client/classes/SingleNodeClient#blocksubmit"},"SingleNodeClient.nodeSubmit()")," function. To\ndo so, you will first need to create a ",(0,a.kt)("a",{parentName:"p",href:"../references/client/classes/SingleNodeClient#blocksubmit"},"submitBlock")," as shown\nin the example."),(0,a.kt)("h2",{id:"retrieve-a-block"},"Retrieve a Block"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"../references/client/classes/SingleNodeClient#block"},"SingleNodeClient.block(blockId)")," function to retrieve\na block using its ",(0,a.kt)("inlineCode",{parentName:"p"},"blockId"),".  If successful, the function will return a\n",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/IClient"},"block"),"."),(0,a.kt)("h2",{id:"retrieve-a-blocks-metadata"},"Retrieve a Block's Metadata"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"../references/client/classes/SingleNodeClient#blockmetadata"},"SingleNodeClient.blockMetadata(blockId)")," function to retrieve\na block's metadata using its ",(0,a.kt)("inlineCode",{parentName:"p"},"blockId"),".  If successful, the function will return a\n",(0,a.kt)("a",{parentName:"p",href:"../references/client/interfaces/IBlockMetadata"},"IBlockMetadata"),"."),(0,a.kt)("h2",{id:"retrieve-a-raw-block"},"Retrieve a Raw Block"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"../references/client/classes/SingleNodeClient#blockraw"},"SingleNodeClient.blockRaw(blockId)")," function to retrieve\na raw block using its ",(0,a.kt)("inlineCode",{parentName:"p"},"blockId"),".  If successful, the function will return the block's raw data which you can convert to\nHex using the ",(0,a.kt)("a",{parentName:"p",href:"../references/util/classes/Converter#bytestohex"},"Converter.bytesToHex()")," function, or decode using the\n",(0,a.kt)("a",{parentName:"p",href:"../references/util/classes/ReadStream"},"ReadStream(blockRaw)")," class."),(0,a.kt)("h2",{id:"retrieve-a-milestone"},"Retrieve a Milestone"),(0,a.kt)("p",null,"You can retrieve a milestone using the\n",(0,a.kt)("a",{parentName:"p",href:"../references/client/classes/SingleNodeClient#milestonebyindex"},"SingleNodeClient.milestoneByIndex(index)")," function. The\nfunction will return a ",(0,a.kt)("a",{parentName:"p",href:"../references/client/interfaces/IMilestonePayload"},"IMilestonePayload")," if successful."),(0,a.kt)("h3",{id:"retrieve-a-milestones-properties"},"Retrieve a Milestone's Properties"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",{parentName:"p",href:"#retrieve-a-milestone"},"retrieved a milestone"),", you can retrieve any of its\n",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload#properties-1"},"properties"),", as shown in the example."),(0,a.kt)("h2",{id:"retrieve-an-output"},"Retrieve an Output"),(0,a.kt)("p",null,"You can retrieve an output using the\n",(0,a.kt)("a",{parentName:"p",href:"../references/client/classes/SingleNodeClient#output"},"SingleNodeClient.output(outputId)")," function. The\nfunction will return a ",(0,a.kt)("a",{parentName:"p",href:"../references/client/interfaces/IOutputResponse"},"IMilestonePayload")," if successful."),(0,a.kt)("h3",{id:"retrieve-an-outputs-properties"},"Retrieve an Output's Properties"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",{parentName:"p",href:"#retrieve-an-output"},"retrieved a output"),", you can retrieve any of its\n",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/IOutputResponse#properties-1"},"properties"),", as shown in the example."),(0,a.kt)("h2",{id:"example-code"},"Example Code"),(0,a.kt)(l.Z,{className:"language-javascript",mdxType:"CodeBlock"},'import {\n    deserializeBlock,\n    IBlock,\n    TAGGED_DATA_PAYLOAD_TYPE,\n    logInfo,\n    logBlock,\n    logBlockMetadata,\n    logOutput,\n    logTips,\n    MAX_NUMBER_PARENTS,\n    SingleNodeClient\n} from "@iota/iota.js";\nimport { Converter, ReadStream } from "@iota/util.js";\nimport { NeonPowProvider } from "@iota/pow-neon.js";\n\nconst API_ENDPOINT = "https://api.testnet.shimmer.network/";\n\n// If running the node locally\n// const API_ENDPOINT = "http://localhost:14265/";\n\n\nasync function run() {\n    // Neon localPoW is blazingly fast, but you need rust toolchain to build\n    const client = new SingleNodeClient(API_ENDPOINT, {powProvider: new NeonPowProvider()});\n\n    const health = await client.health();\n    console.log("Is the node healthy", health ? "Yes" : "No");\n    console.log();\n\n    const info = await client.info();\n    console.log("Node Info");\n    logInfo("", info);\n    console.log();\n\n    const tipsResponse = await client.tips();\n    console.log("Tips");\n    logTips("", tipsResponse);\n    console.log();\n\n    const submitBlock: {\n        protocolVersion?: number;\n        parents?: string[];\n        payload?: IBlock["payload"];\n        nonce?: string;\n    } = {\n        // Parents can be left undefined if you want the node to populate the field\n        parents: tipsResponse.tips.slice(0, MAX_NUMBER_PARENTS),\n        payload: {\n            type: TAGGED_DATA_PAYLOAD_TYPE,\n            tag: Converter.utf8ToHex("Foo", true),\n            data: Converter.utf8ToHex("Bar", true)\n        }\n    };\n\n    const blockId = await client.blockSubmit(submitBlock);\n    console.log("Submit Block:");\n    console.log("\\tBlock Id", blockId);\n    console.log();\n\n    const block = await client.block(blockId);\n    console.log("Get Block");\n    logBlock("", block);\n    console.log();\n\n    const blockMetadata = await client.blockMetadata(blockId);\n    console.log("Block Metadata");\n    logBlockMetadata("", blockMetadata);\n    console.log();\n\n    const blockRaw = await client.blockRaw(blockId);\n    console.log("Block Raw");\n    console.log("\\tRaw:", Converter.bytesToHex(blockRaw, true));\n    console.log();\n    const decoded = deserializeBlock(new ReadStream(blockRaw));\n    console.log("Block Decoded");\n    logBlock("", decoded);\n    console.log();\n\n    const milestone = await client.milestoneByIndex(info.status.latestMilestone.index);\n    console.log("Latest Milestone Payload");\n    console.log("\\tMilestone Index:", milestone.index);\n    console.log("\\tIncluded Merkel Root", milestone.inclusionMerkleRoot);\n    console.log("\\tApplied Merkel Root", milestone.appliedMerkleRoot);\n    console.log("\\tPrevious Milestone Id:", milestone.previousMilestoneId);\n    console.log("\\tTimestamp:", milestone.timestamp);\n    console.log();\n\n    const output = await client.output("0x00000000000000000000000000000000000000000000000000000000000000000000");\n    console.log("Output");\n    console.log("\\tBlock Id:", output.metadata.blockId);\n    console.log("\\tTransaction Id:", output.metadata.transactionId);\n    console.log("\\tOutput Index:", output.metadata.outputIndex);\n    console.log("\\tIs Spent:", output.metadata.isSpent);\n    logOutput("\\t", output.output);\n    console.log();\n}\n\nrun()\n    .then(() => console.log("Done"))\n    .catch(err => console.error(err));\n'),(0,a.kt)("h3",{id:"expected-output"},"Expected Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Is the node healthy Yes\n\nNode Info\n        Name: HORNET\n        Version: 2.0.0-alpha.23\n        Status\n                Is Healthy: true\n                Latest Milestone Index: 54851\n                Latest Milestone Timestamp: 1657543301\n                Latest Milestone Id: 0x49fe39afe197426e085fc5ce61ba2168307075d13b0b311407654d09532f7efa\n                Confirmed Milestone Index: 54851\n                Confirmed Milestone Timestamp: 1657543301\n                Confirmed Milestone Id: 0x49fe39afe197426e085fc5ce61ba2168307075d13b0b311407654d09532f7efa\n                Pruning Index: 0\n        Protocol\n                Network Name: alphanet-8\n                Bech32 HRP: rms\n                Token supply: 2779530283277761\n                Protocol version:\n                Min PoW Score: 1000\n                Rent\n                        VByte Cost: 500\n                        VByte Factor Data: 1\n                        VByte Factor Key: 10\n        Base token\n                Name: Shimmer\n                Ticker Symbol: SMR\n                Unit: SMR\n                Sub unit: glow\n                Decimals: 6\n                Use metric prefix: false\n        Metrics\n                Blocks Per Second: 5.6\n                Referenced Blocks Per Second: 4.8\n                Referenced Rate: 85.71428571428571\n        Features: []\n\nTips\n        Tip 1 Block Id: 0x05789c77904b4922004c04624aff85543442634044404ecec95c8498fcb95e49\n        Tip 2 Block Id: 0x5d9a4d67d86c5e5fefcbb884850e3a4ed0cb8b546fe2beb36059a150726dcfb7\n        Tip 3 Block Id: 0x7c6159ac6c6473ef1e36c4de298a6b77bbb84d0ad200cfdccca5ae9a396032e7\n        Tip 4 Block Id: 0xd270eba03af6b1af34845c2eebcfa6be4be225d4e3875a32d6fa7b763b88bfb2\n\nSubmit Block:\n        Block Id 0x844c9f8c363123774739acfc6ff60bc20bb61a6ddc829c9af6d3c8ccf3525111\n\nGet Block\n        Protocol Version: 2\n        Parent 1 Block Id: 0x05789c77904b4922004c04624aff85543442634044404ecec95c8498fcb95e49\n        Parent 2 Block Id: 0x5d9a4d67d86c5e5fefcbb884850e3a4ed0cb8b546fe2beb36059a150726dcfb7\n        Parent 3 Block Id: 0x7c6159ac6c6473ef1e36c4de298a6b77bbb84d0ad200cfdccca5ae9a396032e7\n        Parent 4 Block Id: 0xd270eba03af6b1af34845c2eebcfa6be4be225d4e3875a32d6fa7b763b88bfb2\n        Tagged Data Payload\n                Tag: Foo\n                Data: Bar\n        Nonce: 15372286728091295777\n\nBlock Metadata\n        Block Id: 0x844c9f8c363123774739acfc6ff60bc20bb61a6ddc829c9af6d3c8ccf3525111\n        Parent 1 Block Id: 0x05789c77904b4922004c04624aff85543442634044404ecec95c8498fcb95e49\n        Parent 2 Block Id: 0x5d9a4d67d86c5e5fefcbb884850e3a4ed0cb8b546fe2beb36059a150726dcfb7\n        Parent 3 Block Id: 0x7c6159ac6c6473ef1e36c4de298a6b77bbb84d0ad200cfdccca5ae9a396032e7\n        Parent 4 Block Id: 0xd270eba03af6b1af34845c2eebcfa6be4be225d4e3875a32d6fa7b763b88bfb2\n        Is Solid: true\n        Ledger Inclusion State:\n        Should Promote: false\n        Should Reattach: false\n\nBlock Raw\n        Raw: 0x020405789c77904b4922004c04624aff85543442634044404ecec95c8498fcb95e495d9a4d67d86c5e5fefcbb884850e3a4ed0cb8b546fe2beb36059a150726dcfb77c6159ac6c6473ef1e36c4de298a6b77bbb84d0ad200cfdccca5ae9a396032e7d270eba03af6b1af34845c2eebcfa6be4be225d4e3875a32d6fa7b763b88bfb20f0000000500000003466f6f0300000042617221605555555555d5\n\nBlock Decoded\n        Protocol Version: 2\n        Parent 1 Block Id: 0x05789c77904b4922004c04624aff85543442634044404ecec95c8498fcb95e49\n        Parent 2 Block Id: 0x5d9a4d67d86c5e5fefcbb884850e3a4ed0cb8b546fe2beb36059a150726dcfb7\n        Parent 3 Block Id: 0x7c6159ac6c6473ef1e36c4de298a6b77bbb84d0ad200cfdccca5ae9a396032e7\n        Parent 4 Block Id: 0xd270eba03af6b1af34845c2eebcfa6be4be225d4e3875a32d6fa7b763b88bfb2\n        Tagged Data Payload\n                Tag: Foo\n                Data: Bar\n        Nonce: 15372286728091295777\n\nLatest Milestone Payload\n        Milestone Index: 54851\n        Included Merkel Root 0xb46f508b2dcd240cbc927453eeae3e7f800a9a0f8e0415ce577acea50da039cf\n        Applied Merkel Root 0x0e5751c026e543b2e8ab2eb06099daa1d1e5df47778f7787faab45cdf12fe3a8\n        Previous Milestone Id: 0x5432f5761fdb156e14add8227ae7c48085011ca2097679e08e4d33fa2e34379d\n        Timestamp: 1657543301\n\nOutput\n        Block Id: 0x0000000000000000000000000000000000000000000000000000000000000000\n        Transaction Id: 0x0000000000000000000000000000000000000000000000000000000000000000\n        Output Index: 0\n        Is Spent: true\n        Basic Output\n                        Amount: 2779530283277761\n                        Native Tokens\n                        Unlock Conditions\n                                                Address Unlock Condition\n                                                        Ed25519 Address\n                                                                Public Key Hash: 0x3845105b59429361a75b3203a6e24e16d19540aad6bd1936449b62f1c4bbe5da\n                        Features\n\nDone\n")))}u.isMDXComponent=!0}}]);