"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[94466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95601:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="Tokenless Data Notarization",l={type:"mdx",permalink:"/tutorials/proof-inclusion-of-a-block",source:"@site/tutorials/pages/proof-inclusion-of-a-block.md",title:"Tokenless Data Notarization",description:"This tutorial shows how you can prove that a block was part of the Tangle, even if it was already pruned from network nodes.",frontMatter:{}},s=[{value:"User Story",id:"user-story",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Network",id:"network",level:3},{value:"Development Environment and Libraries",id:"development-environment-and-libraries",level:3},{value:"Set Up",id:"set-up",level:2},{value:"Prepare Your Development Environment",id:"prepare-your-development-environment",level:3},{value:"Create Your Scripts",id:"create-your-scripts",level:2},{value:"Network Configuration Script",id:"network-configuration-script",level:3},{value:"Create Notarization Script",id:"create-notarization-script",level:3},{value:"1. Imports and parameters",id:"1-imports-and-parameters",level:4},{value:"2. Main function",id:"2-main-function",level:4},{value:"3. Get notarization",id:"3-get-notarization",level:4},{value:"4. Delay function",id:"4-delay-function",level:4},{value:"5. Execute main function",id:"5-execute-main-function",level:4},{value:"Verify Notarization Script",id:"verify-notarization-script",level:3},{value:"1. Imports and parameters",id:"1-imports-and-parameters-1",level:4},{value:"2. Main function",id:"2-main-function-1",level:4},{value:"3. Verify notarization",id:"3-verify-notarization",level:4},{value:"4. Execute main function",id:"4-execute-main-function",level:4},{value:"Run Your Scripts",id:"run-your-scripts",level:2},{value:"Create Notarization",id:"create-notarization",level:3},{value:"Verify Notarization",id:"verify-notarization",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tokenless-data-notarization"},"Tokenless Data Notarization"),(0,a.kt)("p",null,"This tutorial shows how you can prove that a block was part of the Tangle, even if it was already pruned from network nodes."),(0,a.kt)("h2",{id:"user-story"},"User Story"),(0,a.kt)("p",null,"A prover wants to prove to a verifier that a dataset or file was not altered by notarizing it using the public and permissionless Tangle."),(0,a.kt)("p",null,"A good example could be the government (verifier) obligating companies (prover) to write their daily CO\u2082 emissions to the Tangle to create immutable logs. The government has no interest in providing storage for all the companies but wants to receive verifiable, immutable data in the case of an audit. Therefore, all the data remains with the respective company until an audit occurs."),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"In this use case, the party writing to the Tangle (prover) is the same party reading from it. This allows reading a block by its block Id together with proof. The only information a verifier needs to verify this proof, is the chain of milestones back to the exact milestone that referenced the respective block. Every milestone directly references the previous milestone, which leads to a unique and verifiable chain of milestones in the Tangle. Even if the verifier's notarization plugin didn't record the milestone history already, it could still download the milestone chain from another source and verify its correctness before using it to notarize verifications."),(0,a.kt)("p",null,"Since the pattern assumes trusted access to the network, we recommend that both the prover and the verifier operate their own network node and run the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-poi"},"INX Notarization/PoI Plugin"),". Only if you operate your own node together with the plugin, you can be sure the returned information is trustworthy."),(0,a.kt)("p",null,"Please note that this pattern does not rely on a Permanode storing the entire Tangle history, as it was the case in almost all data-related use cases in the past. In comparison to a Permanode, storing selected blocks with their proof of inclusion to the Tangle, drastically reduces the node operator's storage requirements."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PoI-Architecture",src:n(67975).Z,width:"2612",height:"1028"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"network"},"Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/hornet/tree/develop/private_tangle"},"Hornet Private Tangle"),". You should use the ",(0,a.kt)("strong",{parentName:"li"},"develop")," branch to have the latest ",(0,a.kt)("a",{parentName:"li",href:"https://blog.shimmer.network/stardust-upgrade-in-a-nutshell/"},"Stardust")," features."),(0,a.kt)("li",{parentName:"ul"},"The node should run the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-poi"},"INX-POI"),". The node(s) will start the INX-POI plugin by default.")),(0,a.kt)("h3",{id:"development-environment-and-libraries"},"Development Environment and Libraries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),".")),(0,a.kt)("h2",{id:"set-up"},"Set Up"),(0,a.kt)("h3",{id:"prepare-your-development-environment"},"Prepare Your Development Environment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new folder for the tutorial in a location of your choice, for example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir notarization-tutorial\ncd notarization-tutorial\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"You should run the Node.js initializer to configure the project.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init --yes\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@iota/iota.js"},(0,a.kt)("inlineCode",{parentName:"a"},"@iota/iota.js"))," as a dependency by running the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/iota.js\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"create-your-scripts"},"Create Your Scripts"),(0,a.kt)("h3",{id:"network-configuration-script"},"Network Configuration Script"),(0,a.kt)("p",null,"Both the script that will ",(0,a.kt)("a",{parentName:"p",href:"#create-notarization-script"},"create")," and ",(0,a.kt)("a",{parentName:"p",href:"#verify-notarization-script"},"verify")," the notarization will need to share a network.\nCreate a new file named ",(0,a.kt)("inlineCode",{parentName:"p"},"networkConfig.js")," and add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var networkConfig = {};\n// Private Tangle Network\nnetworkConfig.node = 'http://localhost:14265';\nnetworkConfig.faucet = 'http://localhost:8091';\nnetworkConfig.explorer = 'http://localhost:8082/dashboard/explorer/';\nmodule.exports = { networkConfig };\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"create-notarization-script"},"Create Notarization Script"),(0,a.kt)("p",null,"Create a new file named ",(0,a.kt)("inlineCode",{parentName:"p"},"create-notarization.js"),"."),(0,a.kt)("p",null,"We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file that you have just created."),(0,a.kt)("h4",{id:"1-imports-and-parameters"},"1. Imports and parameters"),(0,a.kt)("p",null,"This part imports all necessary packages and network configuration parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  SingleNodeClient,\n  LocalPowProvider,\n  sendData,\n} = require('@iota/iota.js');\nconst fs = require('fs');\nconst fetch = require('node-fetch');\n\n// Network configuration\nconst { networkConfig } = require('./networkConfig.js');\nconst nodeURL = networkConfig.node;\nconst explorerURL = networkConfig.explorer;\n\n// For better readability, some console output will be printed in a different color\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\n")),(0,a.kt)("h4",{id:"2-main-function"},"2. Main function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," function will be called when running the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-notarization.js")," file and consists of the following steps:"),(0,a.kt)("p",null,"Declare the function and setup a node client for the interaction with the network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function main() {\n  // Setup client and define block content\n  const client = new SingleNodeClient(nodeURL, {\n    powProvider: new LocalPowProvider(),\n  });\n")),(0,a.kt)("p",null,"Define the content (",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"), attach new block to the Tangle and log out the explorer link."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Define block content, attach block to the Tangle and log out the explorer link\nconst tag = 'This is my Tag';\nconst data = 'This is my data';\n\nconst sendResult = await sendData(client, tag, data);\nconst blockId = sendResult.blockId;\n\nconsole.log(consoleColor, 'Attached block:');\nconsole.log(explorerURL + 'block/' + blockId, '\\n');\n")),(0,a.kt)("p",null,"Wait for block confirmation by a milestone and read the block with proof of inclusion from INX plugin. The function ",(0,a.kt)("inlineCode",{parentName:"p"},"getNotarization()")," will be explained in more detail in the next section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Wait for block confirmation by milestone and read it with proof of inclusion from INX plugin\nconst result = await getNotarization(client, nodeURL, blockId);\n")),(0,a.kt)("p",null,"This part will only be exectured, if the respective block was confirmed by a milestone after a defined time. If that is the case, the returned notarization result will be stored in a ","*",".json file and the file path will be logged out."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"  // Store block with proof of inclusion in local json file\n  if (result != false) {\n    const filePath = `./notarized-block.json`;\n    fs.writeFileSync(filePath, JSON.stringify(result, null, 4));\n\n    console.log(\n      consoleColor,\n      'Block successfully notarized and stored at:'\n    );\n    console.log(filePath, '\\n');\n\n    console.log(\n      consoleColor,\n      'The Notarized block can now be handed over to the verifier',\n    );\n  }\n}\n")),(0,a.kt)("h4",{id:"3-get-notarization"},"3. Get notarization"),(0,a.kt)("p",null,"As described in the previous step, the ",(0,a.kt)("inlineCode",{parentName:"p"},"getNotarization()")," function is called from within ",(0,a.kt)("inlineCode",{parentName:"p"},"main()"),". As soon as a block was referenced by a milestone, the notarization for the block is fetched from the proof of inclusion plugin and returned by the function. The function tries to fetch the metadata of a given blockId 10 times, waiting for a second before each try. In case the block was still not referenced by a milestone, the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Check for block confirmation and return proof of inclusion, if confirmed after n tries\nasync function getNotarization(client, nodeURL, blockId) {\n  try {\n    console.log(\n      consoleColor,\n      'Wait for milestone confirmation to get notarized block:',\n    );\n\n    let i = 0;\n    while (i < 10) {\n      i++;\n      // Function waits for a certain time between iterations\n      await sleep(1000);\n\n      const blockMetadata = await client.blockMetadata(blockId);\n\n      // If a block was referenced by a milestone, the metadata contains the field 'referencedByMilestoneIndex'\n      if ('referencedByMilestoneIndex' in blockMetadata) {\n        console.log(\n          `Try ${i}: Block was referenced by milestone #${blockMetadata.referencedByMilestoneIndex}`,\n          '\\n',\n        );\n\n        // Call \"create\" endpoint of PoI plugin with blockId and return the result\n        const poiPluginUrl = `${nodeURL}/api/poi/v1/create/${blockId}`;\n        const response = await fetch(poiPluginUrl);\n        const result = await response.json();\n\n        return result;\n      } else {\n        console.log(`Try ${i}: Block was not yet referenced by a milestone`);\n      }\n    }\n    console.log(`Block was not referenced by a milestone after ${i} seconds.`);\n\n    return false;\n  } catch (error) {\n    console.log(error);\n  }\n}\n")),(0,a.kt)("h4",{id:"4-delay-function"},"4. Delay function"),(0,a.kt)("p",null,"The function ",(0,a.kt)("inlineCode",{parentName:"p"},"sleep()")," receives a number of milliseconds and acts as a time delay for whichever function is calling it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function sleep(ms) {\n  return new Promise((resolve) => {\n    setTimeout(resolve, ms);\n  });\n}\n")),(0,a.kt)("h4",{id:"5-execute-main-function"},"5. Execute main function"),(0,a.kt)("p",null,"As a final step the function ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," is called in order to trigger the process as described above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"main().catch((err) => console.error(err));\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verify-notarization-script"},"Verify Notarization Script"),(0,a.kt)("p",null,"Create a new file named ",(0,a.kt)("inlineCode",{parentName:"p"},"verify-notarization.js"),"."),(0,a.kt)("p",null,"Just like with the ",(0,a.kt)("a",{parentName:"p",href:"#create-notarization-script"},"Create Notarization")," script, we broke the code into separate snippets. To make it work, copy all code snippets one after another into the file that you have just created."),(0,a.kt)("h4",{id:"1-imports-and-parameters-1"},"1. Imports and parameters"),(0,a.kt)("p",null,"This part imports all necessary packages and network configuration parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { TransactionHelper } = require('@iota/iota.js');\nconst fs = require('fs');\nconst fetch = require('node-fetch');\n\n// Network configuration\nconst { networkConfig } = require('./networkConfig.js');\nconst nodeURL = networkConfig.node;\nconst explorerURL = networkConfig.explorer;\n\n// For better readability, some console output will be printed in a different color\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\n")),(0,a.kt)("h4",{id:"2-main-function-1"},"2. Main function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," function will be called when running the ",(0,a.kt)("inlineCode",{parentName:"p"},"verify-notarization.js")," file and consists of the following steps:"),(0,a.kt)("p",null,"Declare the function, read the notarization file and parse it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function run() {\n    // Read and parse notarized block from file path\n    const filePath = './notarized-block.json';\n    const file = fs.readFileSync(filePath);\n    const notarizedBlock = JSON.parse(file);\n\n    console.log(consoleColor, 'Successfully imported notarized block from path:');\n    console.log(filePath, '\\n');\n")),(0,a.kt)("p",null,"Derive the blockId from the block content and log out the explorer link."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Generate blockId from block content and log explorer link\n// The blockId is defined as the BLAKE2b-256 hash of the entire serialized block\nconst blockId = TransactionHelper.calculateBlockId(notarizedBlock.block);\nconsole.log(consoleColor, 'Notarized block:');\nconsole.log(explorerURL + 'block/' + blockId, '\\n');\n")),(0,a.kt)("p",null,"Fetch validity (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"false"),") of the notarization from the proof of inclusion plugin. The function ",(0,a.kt)("inlineCode",{parentName:"p"},"verifyNotarization()")," will be explained in more detail in the next section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    // Verify provided notarization/proof of inclusion for block\n    const validity = await verifyNotarization(nodeURL, notarizedBlock);\n    console.log(consoleColor, 'Validity of provided notarization:');\n    console.log(validity, '\\n');\n}\n")),(0,a.kt)("h4",{id:"3-verify-notarization"},"3. Verify notarization"),(0,a.kt)("p",null,"As described in the previous step, the ",(0,a.kt)("inlineCode",{parentName:"p"},"verifyNotarization()")," function is called from within ",(0,a.kt)("inlineCode",{parentName:"p"},"main()"),". The function sends the notarized block to the ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," endpoint of the proof of inclusion plugin and returns the booolean result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function verifyNotarization(nodeURL, notarizedBlock) {\n  // Call \"validate\" endpoint of PoI plugin with notarized block and return boolean answer\n  const poiPluginUrl = `${nodeURL}/api/poi/v1/validate`;\n  const response = await fetch(poiPluginUrl, {\n    method: 'POST',\n    body: JSON.stringify(notarizedBlock),\n    headers: { 'Content-Type': 'application/json' },\n  });\n  const result = await response.json();\n\n  return result.valid;\n}\n")),(0,a.kt)("h4",{id:"4-execute-main-function"},"4. Execute main function"),(0,a.kt)("p",null,"As a final step the function ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," is called in order to trigger the process as described above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"main().catch((err) => console.error(err));\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"run-your-scripts"},"Run Your Scripts"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",{parentName:"p",href:"#create-your-scripts"},"created your scripts"),", you can execute the two created files in order.\nNaturally, you will need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"create-notarization")," before you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"verify-notarization")," and check the log output to follow along."),(0,a.kt)("h3",{id:"create-notarization"},"Create Notarization"),(0,a.kt)("p",null,"You can create the notarization in the Tangle by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node create-notarization.js\n")),(0,a.kt)("p",null,"Your console output should look similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Attached block:\nhttp://localhost:8082/dashboard/explorer/block/<id_of_your_notarized_block>\n\nWait for milestone confirmation to get notarized block:\nTry 1: Block was not yet referenced by a milestone\nTry 2: Block was not yet referenced by a milestone\nTry 3: Block was referenced by milestone <number_of_milestone_referencing_your_block>\n\nBlock successfully notarized and stored at:\n./notarized-block.json\nNotarized block can now be handed over to the verifier\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verify-notarization"},"Verify Notarization"),(0,a.kt)("p",null,"You can verify the notarization by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node verify-notarization.js\n")),(0,a.kt)("p",null,"Your console output should look similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Successfully imported notarized block from path:\n./notarized-block.json\n\nNotarized block:\nhttp://localhost:8082/dashboard/explorer/block/<id_of_your_notarized_block>\n\nValidity of provided notarization:\ntrue\n")))}p.isMDXComponent=!0},67975:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/proof-inclusion-of-a-block-architecture-ee82524944d137244bde0c966a4aac4a.png"}}]);