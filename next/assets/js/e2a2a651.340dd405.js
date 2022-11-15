"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(r,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const l={},o="Evil spammer",s={unversionedId:"tooling/evil_spammer",id:"tooling/evil_spammer",title:"Evil spammer",description:"Evil spammer is the cli tool placed in tools/evil-spammer that allows to easily spam and stress test the network. It utilises client libraries evilwallet and evilspammer. Many predefined conflict and non-conflict scenarios are available to use directly with the evilwallet package, by command lines arguments of Evil Spammer tool, and by its interactive mode.",source:"@site/next/external/goshimmer/documentation/docs/tooling/evil_spammer.md",sourceDirName:"tooling",slug:"/tooling/evil_spammer",permalink:"/next/goshimmer/tooling/evil_spammer",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/tooling/evil_spammer.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"GoShimmer DAGs visualizer",permalink:"/next/goshimmer/tooling/dags_visualizer"},next:{title:"Rand Seed and Rand Address",permalink:"/next/goshimmer/tooling/rand_seed_and_rand_address"}},r={},p=[{value:"How to be evil?",id:"how-to-be-evil",level:2},{value:"Evil spammer command line",id:"evil-spammer-command-line",level:3},{value:"Quick Test",id:"quick-test",level:4},{value:"Go interactive!",id:"go-interactive",level:3},{value:"Requesting funds",id:"requesting-funds",level:4},{value:"Wallet status",id:"wallet-status",level:4},{value:"Other things worth to know",id:"other-things-worth-to-know",level:4},{value:"Predefined scenarios",id:"predefined-scenarios",level:2},{value:"No conflicts",id:"no-conflicts",level:5},{value:"Conflicts",id:"conflicts",level:5},{value:"Evil Wallet and Evil spammer lib",id:"evil-wallet-and-evil-spammer-lib",level:2},{value:"Request funds from the faucet",id:"request-funds-from-the-faucet",level:3},{value:"Create and send a transaction",id:"create-and-send-a-transaction",level:3},{value:"Compose your own scenario!",id:"compose-your-own-scenario",level:3},{value:"Evil spammer library",id:"evil-spammer-library",level:2},{value:"Spam options",id:"spam-options",level:3},{value:"Evil Scenario",id:"evil-scenario",level:3},{value:"Deep spamming",id:"deep-spamming",level:4}],u={toc:p};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"evil-spammer"},"Evil spammer"),(0,i.kt)("p",null,"Evil spammer is the cli tool placed in ",(0,i.kt)("inlineCode",{parentName:"p"},"tools/evil-spammer")," that allows to easily spam and stress test the network. It utilises client libraries ",(0,i.kt)("inlineCode",{parentName:"p"},"evilwallet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"evilspammer"),". Many predefined conflict and non-conflict scenarios are available to use directly with the ",(0,i.kt)("inlineCode",{parentName:"p"},"evilwallet")," package, by command lines arguments of Evil Spammer tool, and by its interactive mode."),(0,i.kt)("p",null,"The main goal is to test how the network will handle more complicated spam scenarios and find as many bugs as possible!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main features:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"easily spam and stress test the GoShimmer network with the predefined scenarios"),(0,i.kt)("li",{parentName:"ul"},"ability to enable deep spam mode that reuses outputs created during the spam"),(0,i.kt)("li",{parentName:"ul"},"spamming with the command lines"),(0,i.kt)("li",{parentName:"ul"},"spamming with the interactive mode")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you have any idea on some nice scenarios, do not hesitate to open the PR, and we can extend our list with your ideas!\nAlso, do not forget to choose the right name for your spam.")),(0,i.kt)("h2",{id:"how-to-be-evil"},"How to be evil?"),(0,i.kt)("p",null,"There are many options, but we encourage you to use our Evil Spammer Tool. It is available in a form of command line tool and in the interactive mode."),(0,i.kt)("p",null,"The compiled versions of the tool for Windows, Linux, macOS are available in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/releases"},"goshimmer releases"),"."),(0,i.kt)("h3",{id:"evil-spammer-command-line"},"Evil spammer command line"),(0,i.kt)("p",null,"The tool starts with the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go")," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"tools/evil-spammer"),"."),(0,i.kt)("p",null,"Currently available script names:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"basic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interactive"))),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"go run . <SCRIPT_NAME> --help")," to get the list of parameters available for each script and their descriptions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Basic spammer."),"\nBasic spammer can be run with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd tools/evil-spammer\ngo run . basic\n")),(0,i.kt)("p",null,"and providing spam parameters with flags.\nBelow is an example with custom spam:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# under tools/evil-spammer\ngo run . basic --spammer custom --scenario <scenario-name> --rate 5 --duration 30s\n")),(0,i.kt)("p",null,"It is possible to start multiple spam types at once by providing parameters separated by commas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go run . basic --urls http://localhost:8080 --spammer ds,blk,custom --rate 5,10,2 --duration 20s,20s,20s --tu 1s --scenario peace\n")),(0,i.kt)("h4",{id:"quick-test"},"Quick Test"),(0,i.kt)("p",null,"Can be used for fast and intense spamming test. First is transaction spam, next data spam, which should reduce the tip pool size if there was any, and double spend at the end."),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# under tools/evil-spammer\ngo run . quick --urls http://localhost:8080,http://localhost:8090 --rate 50 --duration 1m --tu 1s --dbc 100ms\n")),(0,i.kt)("h3",{id:"go-interactive"},"Go interactive!"),(0,i.kt)("p",null,"Simply run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# under tools/evil-spammer\ngo run . interactive\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Interactive mode",src:a(62681).Z,title:"Interactive mode",width:"1145",height:"1510"})),(0,i.kt)("p",null,"Evil wallet will start with API endpoints configured for the local docker network,\n",(0,i.kt)("strong",{parentName:"p"},"if you want to play with different nodes on different network you need to update urls")," in the config.json file and restart the tool,\nor update it directly in the settings menu.\nThe url for the DevNet is: ",(0,i.kt)("a",{parentName:"p",href:"http://nodes.nectar.iota.cafe"},"http://nodes.nectar.iota.cafe"),"\nThe url for the devnet is: ",(0,i.kt)("a",{parentName:"p",href:"http://nodes.nectar.iota.cafe"},"http://nodes.nectar.iota.cafe")),(0,i.kt)("p",null,"Some nodes might have double spend filter enabled. In that case, to correctly execute N-spend (a conflict set with size N) in scenarios, you need to provide at least N distinct urls to issue them simultaneously. The evil tool will pop an warning if more urls are needed. We disabled the double spend filter for now on our nodes - everything should work also with only one url provided, so you don't need to worry about the warning.\nE.g. to correctly spam with ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"pear"))," you should have 4 clients configured."),(0,i.kt)("h4",{id:"requesting-funds"},"Requesting funds"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Request funds",src:a(12606).Z,title:"Request funds",width:"808",height:"482"})),(0,i.kt)("p",null,'In order to request faucet funds choose "Prepare faucet funds" option, and Evil Spammer will send the faucet request and split the output on the requested number. The fastest is 100 outputs, as we wait only for one transaction to be confirmed, the more output you request the longer you will need to wait.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f On the DevNet due to higher PoW and congestion in the network, a creation of more than 100 outputs can not always be successful (as it tries to create 100 splitting transactions at once), that's why we encourage you to use 100 option on the DevNet, and play with higher spam rates and requesting large amounts of outputs in the ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/tooling/docker_private_network"},"local docker network"),".")),(0,i.kt)("p",null,"You can also enable auto funds requesting, that will trigger funds preparation whenever you'll be short on faucet outputs.\nJust go to: ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings -> Auto funds requesting -> enable"),". However, as mentioned above this is recommended only on private networks, where you have enough network throughput share."),(0,i.kt)("h4",{id:"wallet-status"},"Wallet status"),(0,i.kt)("p",null,'You can check how many outputs is available in the "Evil wallet details".\n',(0,i.kt)("img",{alt:"Details",src:a(8861).Z,title:"Details",width:"1130",height:"372"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"faucet outputs are outputs created from the faucet requests"),(0,i.kt)("li",{parentName:"ul"},"reuse outputs are the outputs available for the deep spam, you can collect them by changing reuse spam options to enable in\n",(0,i.kt)("inlineCode",{parentName:"li"},"New Spam -> Update spam options"),". Later if you enable the deep spam in ",(0,i.kt)("inlineCode",{parentName:"li"},"Update spam options")," they will be used as the batch inputs and will create deep DAG structures."),(0,i.kt)("li",{parentName:"ul"},"and the statistics about spammed data blocks, value blocks and whole scenarios.")),(0,i.kt)("h4",{id:"other-things-worth-to-know"},"Other things worth to know"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Saving the evil wallet states is not supported. But don't worry you still can request more fresh Faucet outputs with just one click!"),(0,i.kt)("li",{parentName:"ul"},"Wallet will generate a ",(0,i.kt)("inlineCode",{parentName:"li"},"config.json")," file if it did not exist. You can use it to set up your favorite settings or webAPI urls."),(0,i.kt)("li",{parentName:"ul"},"We encourage you to see the results of your spams and structures in the DAGs Visualizer that by default can be accessed on port ",(0,i.kt)("inlineCode",{parentName:"li"},"8061"),"."),(0,i.kt)("li",{parentName:"ul"},"Spammer allows for max 5 concurrently running spams, you can check currently running spams and cancel them at any time."),(0,i.kt)("li",{parentName:"ul"},"Spammer tool keeps track of your last spams history, so you can check the times of the spam and render a specific period with the visualizer."),(0,i.kt)("li",{parentName:"ul"},"In spam options you can enable ",(0,i.kt)("inlineCode",{parentName:"li"},"deep")," spam, in which the spammer will reuse outputs generated by the current spam, previous spams with ",(0,i.kt)("inlineCode",{parentName:"li"},"reuse")," option enabled, and previous deep spams' outputs."),(0,i.kt)("li",{parentName:"ul"},"By default, the spam rate is set to mps, but you can change the time unit in the config file, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'"timeUnit": "1m"')," for block per minute.")),(0,i.kt)("h2",{id:"predefined-scenarios"},"Predefined scenarios"),(0,i.kt)("p",null,"Below you can find a list of predefined scenarios."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in the client library they can be accessed by the function ",(0,i.kt)("inlineCode",{parentName:"li"},"GetScenario(scenarioName string) (batch EvilBatch, ok bool)")),(0,i.kt)("li",{parentName:"ul"},"in the evil spammer tool with command line you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"basic")," option and ",(0,i.kt)("inlineCode",{parentName:"li"},"scenario")," flag to choose the scenario by name."),(0,i.kt)("li",{parentName:"ul"},"in the evil spammer tool with interactive mode simply go to ",(0,i.kt)("inlineCode",{parentName:"li"},"New Spam -> Change scenario")," and select from the list.")),(0,i.kt)("p",null,"In the below diagrams, the white box represents a transaction, the yellow box is an output, the green box is an input, and the numbers in yellow and green boxes are aliases for inputs and outputs."),(0,i.kt)("h5",{id:"no-conflicts"},"No conflicts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"single-tx"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Single transaction",src:a(71333).Z,title:"Single transaction",width:"227",height:"278"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peace"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Peace",src:a(70156).Z,title:"Peace",width:"327",height:"560"})),(0,i.kt)("h5",{id:"conflicts"},"Conflicts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ds"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Double spend",src:a(88951).Z,title:"Double spend",width:"290",height:"254"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"conflict-circle"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Conflict circle",src:a(26197).Z,title:"Conflict circle",width:"602",height:"338"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"guava"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Guava",src:a(78023).Z,title:"Guava",width:"464",height:"518"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"orange"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Orange",src:a(71876).Z,title:"Orange",width:"506",height:"398"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mango"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mango",src:a(2571).Z,title:"Mango",width:"572",height:"374"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pear"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pear",src:a(46685).Z,title:"Pear",width:"842",height:"770"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lemon"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lemon",src:a(17753).Z,title:"Lemon",width:"602",height:"446"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"banana"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Banana",src:a(97813).Z,title:"Banana",width:"591",height:"830"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kiwi"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Kiwi",src:a(17616).Z,title:"Kiwi",width:"698",height:"542"})),(0,i.kt)("h2",{id:"evil-wallet-and-evil-spammer-lib"},"Evil Wallet and Evil spammer lib"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section is a guide for the users that wants to create their own tools or scenarios\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"evilwallet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"evilwallet")," library.\nIf you simply want to spam, you can use the evil spammer tool and its interactive mode described above.")),(0,i.kt)("p",null,"The wallet library was designed with the focus on the spamming use cases.\nThe evil wallet is a collection of many wallets (many seeds) that can be provided by the user, build from the faucet requests or are created during the spam."),(0,i.kt)("p",null,"While creating the wallet we can provide the nodes webAPI urls, that will be ordered to spam. Otherwise, it will use default endpoints for the local docker network."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// provide webAPI urls\nevilWallet := evilwallet.NewEvilWallet("http://localhost:1234", "http://localhost:2234")\n\n// automatically adds docker network as endpoints.\nevilWallet := evilwallet.NewEvilWallet()\n')),(0,i.kt)("h3",{id:"request-funds-from-the-faucet"},"Request funds from the faucet"),(0,i.kt)("p",null,"Then in order to send transactions, we need to request funds from the Faucet.\nThe evil wallet sends the request and splits the received funds on requested number of outputs that are further used as inputs for the spamming batches."),(0,i.kt)("p",null,"Evil spammer does not care about the value of sent transactions,\nit simply splits the input value equally among the outputs during the spam.\nBelow are presented all possibilities for requesting funds.\nRequesting more allows you to spam harder, but you need to wait more for outputs preparation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// 100 ouptuts\nevilwallet.RequestFreshFaucetWallet()\n\n// 10k outputs\nevilwallet.RequestFreshBigFaucetWallet()\n\n// x * 10k outputs\nevilwallet.RequestFreshBigFaucetWallets(x)\n")),(0,i.kt)("h3",{id:"create-and-send-a-transaction"},"Create and send a transaction"),(0,i.kt)("p",null,"The evil wallet allows you to easily build a transaction by providing a list of options, such as inputs/outputs and issuer, see ",(0,i.kt)("inlineCode",{parentName:"p"},"evilwallet/options")," for more options."),(0,i.kt)("p",null,"There are 2 ways to assign ",(0,i.kt)("strong",{parentName:"p"},"inputs")," of a transaction:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"alias(es)"),(0,i.kt)("li",{parentName:"ul"},"unspent outputs ID(s)\nBy assigning alias to an output will come in handy when you want to spend the specific output without knowing its actual output ID, and the evil wallet will handle the mapping for you.")),(0,i.kt)("p",null,"There are 2 ways to assign ",(0,i.kt)("strong",{parentName:"p"},"outputs")," of a transaction in ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputOption"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type OutputOption struct {\n    aliasName string\n    color     ledgerstate.Color\n    amount    uint64\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"with alias",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if amount is not specified, all balances will be sent to provided output alias(es)"))),(0,i.kt)("li",{parentName:"ul"},"without alias",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if amount is less than the balances of input, remainder will be taken care of.")))),(0,i.kt)("p",null,"The default color is ",(0,i.kt)("inlineCode",{parentName:"p"},"IOTA")," if not specified."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f You need to register an alias for the output if inputs are provided with alias and the other way around. Currently, evil wallet does not accept the mixing usage, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"in:alias -> out:without alias"),".")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// invalid, mixing usage: in:alias -> out:without alias\ntxA, err := evilwallet.CreateTransaction(WithInputs("1"), WithOutput(&OutputOption{amount: 1000000}), WithIssuer(initWallet))\n\n// valid, Create Transaction will send all balances from input to output.\ntxB, err := evilwallet.CreateTransaction(WithInputs("1"), WithOutput(&OutputOption{aliasName: "2"}), WithIssuer(initWallet))\n\n// valid, CreateTransaction will send 1000000 to `2`, and prepare a remainder if needed.\ntxC, err := evilwallet.CreateTransaction(WithInputs("1"), WithOutput(&OutputOption{aliasName: "2", amount: 1000000}), WithIssuer(initWallet))\n')),(0,i.kt)("p",null,"To send a transaction, you need to get client(s) from the evil wallet and send it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"clients := evilwallet.GetClients(1)\n\nclients[0].PostTransaction(txC)\n")),(0,i.kt)("h3",{id:"compose-your-own-scenario"},"Compose your own scenario!"),(0,i.kt)("p",null,"The most exciting part of evil wallet is to create whatever scenario easily!"),(0,i.kt)("p",null,"The custom spend is constructed in ",(0,i.kt)("inlineCode",{parentName:"p"},"[]ConflictSlice"),", here's an example of ",(0,i.kt)("inlineCode",{parentName:"p"},"guava"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'err = evilwallet.SendCustomConflicts([]ConflictSlice{\n    {\n        // A\n        []Option{WithInputs("1"), WithOutputs([]*OutputOption{{aliasName: "2"}, {aliasName: "3"}}), WithIssuer(wallet)},\n    },\n    {\n        // B\n        []Option{WithInputs("2"), WithOutput(&OutputOption{aliasName: "4"})},\n        []Option{WithInputs("2"), WithOutput(&OutputOption{aliasName: "5"})},\n    },\n    {\n        // C\n        []Option{WithInputs("3"), WithOutput(&OutputOption{aliasName: "6"})},\n        []Option{WithInputs("3"), WithOutput(&OutputOption{aliasName: "7"})},\n    },\n    {\n        // D\n        []Option{WithInputs([]string{"5", "6"}), WithOutput(&OutputOption{aliasName: "8"})},\n    },\n})\n')),(0,i.kt)("p",null,"Each element in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConflictSlice")," (",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"D"),") contains 1 or more ",(0,i.kt)("inlineCode",{parentName:"p"},"[]Option"),", which is options of a transaction to create, that is ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," contains 1 transaction, and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," contains 2 transactions, etc. Transactions are issued by order (",(0,i.kt)("inlineCode",{parentName:"p"},"A")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"D"),"), but they are issued simultaneously in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"ConflictSlice")," element in order to create double spends."),(0,i.kt)("p",null,"Below is an runnable example to send ",(0,i.kt)("inlineCode",{parentName:"p"},"guava")," scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'evilwallet := NewEvilWallet()\n\nerr, wallet := evilwallet.RequestFundsFromFaucet(WithOutputAlias("1"))\n\nerr = evilwallet.SendCustomConflicts([]ConflictSlice{\n    {\n        // A\n        []Option{WithInputs("1"), WithOutputs([]*OutputOption{{aliasName: "2"}, {aliasName: "3"}}), WithIssuer(wallet)},\n    },\n    {\n        // B\n        []Option{WithInputs("2"), WithOutput(&OutputOption{aliasName: "4"})},\n        []Option{WithInputs("2"), WithOutput(&OutputOption{aliasName: "5"})},\n    },\n    {\n        // C\n        []Option{WithInputs("3"), WithOutput(&OutputOption{aliasName: "6"})},\n        []Option{WithInputs("3"), WithOutput(&OutputOption{aliasName: "7"})},\n    },\n    {\n        // D\n        []Option{WithInputs([]string{"5", "6"}), WithOutput(&OutputOption{aliasName: "8"})},\n    },\n})\n')),(0,i.kt)("h2",{id:"evil-spammer-library"},"Evil spammer library"),(0,i.kt)("p",null,"To use the evil spammer, you need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"prepare an evil wallet and request funds,"),(0,i.kt)("li",{parentName:"ol"},"prepare evil scenario if any,"),(0,i.kt)("li",{parentName:"ol"},"prepare evil spammer options, such as duration, spam rate, etc.,"),(0,i.kt)("li",{parentName:"ol"},"create a spammer and start spamming.")),(0,i.kt)("p",null,"The behaviour of the spammer is controlled by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spam options"),(0,i.kt)("li",{parentName:"ul"},"Evil Scenario")),(0,i.kt)("p",null,"Example of the simple spam with double spends:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"evilWallet := evilwallet.NewEvilWallet()\nerr := evilWallet.RequestFreshFaucetWallet()\n\nscenarioDs := evilwallet.NewEvilScenario(\n    evilwallet.WithScenarioCustomConflicts(evilwallet.DoubleSpendBatch(5)),\n)\n\noptions := []Options{\n    WithSpamRate(5, time.Second),\n    WithSpamDuration(time.Second * 10),\n    WithEvilWallet(evilWallet),\n    WithEvilScenario(scenarioDs),\n}\n\ndsSpammer := NewSpammer(dsOptions...)\ndsSpammer.Spam()\n")),(0,i.kt)("p",null,"The spammer will treat the provided spamming custom conflicts as a single batch, which will be sent with the provided rate.\nSo if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"guava")," scenario and rate 5 mps per batch you will be spamming  30 mps on average\n(as the ",(0,i.kt)("inlineCode",{parentName:"p"},"guava")," creates 6 distinct transactions)."),(0,i.kt)("h3",{id:"spam-options"},"Spam options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To change the spamming rate use")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"WithSpamRate(rate int, timeUnit time.Duration) Options\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Duration of the spam can be controlled by either providing duration time or specifying how many batches should be sent.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"WithSpamDuration(maxDuration time.Duration) Options\nWithBatchesSent(maxBatchesSent int) Options\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you want to create multiple spams and use the same Evil Wallet instance you can provide it with")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"WithEvilWallet(evilWallet),\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To customize the spamming batch and spam behavior, provide EvilScenario")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"WithEvilScenario(scenario *evilwallet.EvilScenario) Options\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By default spammer uses batch spamming function, but you can also spam with data blocks by using:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"WithSpammingFunc(evilspammer.DataSpammingFunction)\n")),(0,i.kt)("h3",{id:"evil-scenario"},"Evil Scenario"),(0,i.kt)("p",null,"There are several scenario batches in ",(0,i.kt)("inlineCode",{parentName:"p"},"evilwallet/customscenarios")," already, which are shown in previous section.\nBesides, you are able to define your own spamming scenario with alias in ",(0,i.kt)("inlineCode",{parentName:"p"},"EvilBatch"),", which is similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConflictBatch")," in evil wallet but rather simple. Only aliases for inputs and outputs are needed, then the evil spammer will find valid unspent outputs automatically, match outputs to provided aliases and start issuing transactions. Finally, make your defined scenario (",(0,i.kt)("inlineCode",{parentName:"p"},"[]EvilBatch"),") an option with ",(0,i.kt)("inlineCode",{parentName:"p"},"WithScenarioCustomConflicts")," and pass it to ",(0,i.kt)("inlineCode",{parentName:"p"},"NewEvilScenario"),"."),(0,i.kt)("p",null,"Below is ",(0,i.kt)("inlineCode",{parentName:"p"},"guava")," scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'EvilBatch{\n    []ScenarioAlias{\n        {Inputs: []string{"1"}, Outputs: []string{"2", "3"}},\n    },\n    []ScenarioAlias{\n        {Inputs: []string{"2"}, Outputs: []string{"4"}},\n        {Inputs: []string{"2"}, Outputs: []string{"5"}},\n    },\n    []ScenarioAlias{\n        {Inputs: []string{"3"}, Outputs: []string{"6"}},\n        {Inputs: []string{"3"}, Outputs: []string{"7"}},\n    },\n    []ScenarioAlias{\n        {Inputs: []string{"6", "5"}, Outputs: []string{"8"}},\n    },\n}\n')),(0,i.kt)("h4",{id:"deep-spamming"},"Deep spamming"),(0,i.kt)("p",null,"Except basic functionality to customize spam batches, set the rate and duration, the Evil Spammer allows also for deep spamming."),(0,i.kt)("p",null,"To create deep conflict and UTXO structure  you need to enable the deep spam with an option"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"evilwallet.WithScenarioDeepSpamEnabled()\n")),(0,i.kt)("p",null,"The spammer will reuse outputs created during that it remembers from previous spams or if you provide a specific input ",(0,i.kt)("inlineCode",{parentName:"p"},"RestrictedReuse")," wallet containing outputs generated during some previous spam.\nIf you want to save outputs from the spam for a specific usage in the future, and you don't want the Evil Wallet to remember it and use it automatically you need to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"RestrictedReuse")," wallet.\nAfter spam ends, you can use this wallet in the next deep spam.\nIn the example below, we firstly save outputs from a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"tx")," spam and use the outputs later in the controlled manner to create deep spam with level 2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'evilWallet := evilwallet.NewEvilWallet()\n\nevilWallet.RequestFreshFaucetWallet()\n\n// outputs from tx spam will be saved here, this wallet can be later reused as an input wallet for deep spam\nrestrictedOutWallet := evilWallet.NewWallet(evilwallet.RestrictedReuse)\n\n// transaction spam is the default one, no need to provide custom scenario batch\nscenarioTx := evilwallet.NewEvilScenario(\n    evilwallet.WithScenarioReuseOutputWallet(restrictedOutWallet),\n)\nguava, _ := GetScenario("guava")\ncustomScenario := evilwallet.NewEvilScenario(\n    evilwallet.WithScenarioDeepSpamEnabled(),\n    evilwallet.WithScenarioInputWalletForDeepSpam(restrictedOutWallet),\n    evilwallet.WithScenarioCustomConflicts(guava),\n)\n\noptions := []Options{\n    WithSpamRate(5, time.Second),\n    WithBatchesSent(50),\n    WithEvilWallet(evilWallet),\n}\ntxOptions := append(options, WithEvilScenario(scenarioTx))\ncustomOptions := append(options, WithEvilScenario(customScenario))\n\ntxSpammer := NewSpammer(txOptions...)\ncustomDeepSpammer := NewSpammer(customOptions...)\n\ntxSpammer.Spam()\ncustomDeepSpammer.Spam()\n')),(0,i.kt)("p",null,"If you want to use the outputs generated within the same spam you can instruct the spammer to save the outputs to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reuse")," wallet and make it the input wallet for the spam at the same time, like in the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"evilWallet := evilwallet.NewEvilWallet()\n\nevilWallet.RequestFreshFaucetWallet()\n\noutWallet := evilWallet.NewWallet(evilwallet.Reuse)\n\ncustomScenario := evilwallet.NewEvilScenario(\n    evilwallet.WithScenarioDeepSpamEnabled(),\n    evilwallet.WithScenarioInputWalletForDeepSpam(outWallet),\n    evilwallet.WithScenarioReuseOutputWallet(outWallet),\n    evilwallet.WithScenarioCustomConflicts(evilwallet.Scenario1()),\n)\n\noptions := []Options{\n    WithSpamRate(1, time.Second),\n    WithBatchesSent(50),\n    WithEvilWallet(evilWallet),\n}\ncustomOptions := append(options, WithEvilScenario(customScenario))\n\ncustomDeepSpammer := NewSpammer(customOptions...)\n\ncustomDeepSpammer.Spam()\n")))}m.isMDXComponent=!0},97813:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-banana-27ed0a273770d9a2cae5930dd1202687.png"},26197:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-conflict-circle-0cf359104885941b134b49da6446ef4b.png"},88951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-ds-941eac49c930de5bc6e2b75062541d7a.png"},78023:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-guava-3c76f6bcf4e5001f256589d66feb0f69.png"},17616:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-kiwi-7ba775e013075ffb261cf71e2c55c7b9.png"},17753:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-lemon-d7f57d26257248a6f3149730e1f69186.png"},2571:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-mango-5f2d2448aba1f586f9a423df5a0dec34.png"},71876:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-orange-e06751ac85ff45ab152bec49a2910777.png"},70156:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-peace-e7cf1558ad6cdf1ce5f2775920bc2ba0.png"},46685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-pear-8d3252fc4c17210920b0a5374f779423.png"},71333:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-scenario-tx-6b66e0040bd8f15b51206fa616aaae64.png"},62681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evil-spammer-interactive-d3440daef839bfc0695af332c5758648.png"},8861:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evilwallet-details-54fb341e3af706dca98ac08275ffe312.png"},12606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evilwallet-request-funds-ab6cbc067450ce1370641bae8d77bb0e.png"}}]);