"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={description:"Running the integration tests spins up a `tester` container within which every test can specify its own GoShimmer network with Docker.",image:"/img/tooling/integration-testing.png",keywords:["integration test","tester","network","docker","peer","docker compose","linux","macOS"]},a="Integration Tests with Docker",s={unversionedId:"tooling/integration_tests",id:"tooling/integration_tests",title:"Integration Tests with Docker",description:"Running the integration tests spins up a `tester` container within which every test can specify its own GoShimmer network with Docker.",source:"@site/iota/external/goshimmer/develop/documentation/docs/tooling/integration_tests.md",sourceDirName:"tooling",slug:"/tooling/integration_tests",permalink:"/goshimmer/tooling/integration_tests",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/iota/external/goshimmer/develop/documentation/docs/tooling/integration_tests.md",tags:[],version:"current",frontMatter:{description:"Running the integration tests spins up a `tester` container within which every test can specify its own GoShimmer network with Docker.",image:"/img/tooling/integration-testing.png",keywords:["integration test","tester","network","docker","peer","docker compose","linux","macOS"]},sidebar:"docs",previous:{title:"Docker Private Network",permalink:"/goshimmer/tooling/docker_private_network"},next:{title:"GoShimmer DAGs visualizer",permalink:"/goshimmer/tooling/dags_visualizer"}},l={},p=[{value:"How to Run",id:"how-to-run",level:2},{value:"Creating Tests",id:"creating-tests",level:2},{value:"Using Custom Snapshots",id:"using-custom-snapshots",level:3},{value:"Nodes&#39; Debug Tools",id:"nodes-debug-tools",level:2},{value:"Debugging tests",id:"debugging-tests",level:2},{value:"Preventing Network shutdown",id:"preventing-network-shutdown",level:3},{value:"Other Tips",id:"other-tips",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-tests-with-docker"},"Integration Tests with Docker"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(94646).Z},(0,r.kt)("img",{alt:"Integration testing",src:n(56293).Z,title:"Integration testing",width:"958",height:"552"}))),(0,r.kt)("p",null,"Running the integration tests spins up a ",(0,r.kt)("inlineCode",{parentName:"p"},"tester")," container within which every test can specify its own GoShimmer\nnetwork with Docker as schematically shown in the figure above."),(0,r.kt)("p",null,"Peers can communicate freely within their Docker network and this is exactly how the tests are run using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tester"),"\ncontainer. Test can be written in regular Go style while the framework provides convenience functions to create a new\nnetwork, access a specific peer's web API or logs."),(0,r.kt)("h2",{id:"how-to-run"},"How to Run"),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker 17.12.0+"),(0,r.kt)("li",{parentName:"ul"},"Docker compose: file format 3.5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Mac & Linux\ncd tools/integration-tests\n./runTests.sh\n")),(0,r.kt)("p",null,"To run only selected tests provide their names as a parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./runTests.sh 'value mana'\n")),(0,r.kt)("p",null,"The tests produce ",(0,r.kt)("inlineCode",{parentName:"p"},"*.log")," files for every networks' peer in the ",(0,r.kt)("inlineCode",{parentName:"p"},"logs")," folder after every run."),(0,r.kt)("p",null,"On GitHub logs of every peer are stored as artifacts and can be downloaded for closer inspection once the job finishes."),(0,r.kt)("h2",{id:"creating-tests"},"Creating Tests"),(0,r.kt)("p",null,"Tests can be written in regular Go style. Each tested component should reside in its own test file\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"tools/integration-tests/tester/tests"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"main_test")," with its ",(0,r.kt)("inlineCode",{parentName:"p"},"TestMain")," function is executed before any test in the package and initializes the integration test\nframework."),(0,r.kt)("p",null,"Each test has to specify its network where the tests are run. This can be done via the framework at the beginning of a\ntest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// create a network with name 'testnetwork' with 6 peers and wait until every peer has at least 3 neighbors\nn := f.CreateNetwork(\"testnetwork\", 6, 3)\n// must be called to create log files and properly clean up\ndefer n.Shutdown() \n")),(0,r.kt)("h3",{id:"using-custom-snapshots"},"Using Custom Snapshots"),(0,r.kt)("p",null,"When creating a test's network, you can specify a set of ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshots")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateNetworkConfig")," struct. The framework will proceed to create and render the snapshot available to the peers.\nAn example of a snaphot used in the code is as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var ConsensusSnapshotDetails = framework.SnapshotInfo{\n    FilePath: "/assets/dynamic_snapshots/consensus_snapshot.bin",\n    // node ID: 2GtxMQD9\n    MasterSeed:         "EYsaGXnUVA9aTYL9FwYEvoQ8d1HCJveQVL7vogu6pqCP",\n    GenesisTokenAmount: 800_000, // pledged to peer master\n    // peer IDs: jnaC6ZyWuw, iNvPFvkfSDp\n    PeersSeedBase58: []string{\n        "Bk69VaYsRuiAaKn8hK6KxUj45X5dED3ueRtxfYnsh4Q8",\n        "HUH4rmxUxMZBBtHJ4QM5Ts6s8DP3HnFpChejntnCxto2",\n    },\n    PeersAmountsPledged: []uint64{1_600_000, 800_000},\n}\n')),(0,r.kt)("p",null,"The last parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateNetwork")," function can be used to alter peers' configuration to use a generated snapshot file (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"conf.BlockLayer.Snapshot.File = snaphotInfo.FilePath"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CommonSnapshotConfigFunc")," function can be used for the average scenario: it will use the same ",(0,r.kt)("inlineCode",{parentName:"p"},"SnapshotInfo")," for all peers. "),(0,r.kt)("h2",{id:"nodes-debug-tools"},"Nodes' Debug Tools"),(0,r.kt)("p",null,"Every node in the test's network has their ports exposed on the host as follows: ",(0,r.kt)("inlineCode",{parentName:"p"},"service_port + 100*n")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," is the index of the peer you want to connect to."),(0,r.kt)("p",null,"Service ports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API ",(0,r.kt)("inlineCode",{parentName:"li"},"8080")),(0,r.kt)("li",{parentName:"ul"},"Dashboard ",(0,r.kt)("inlineCode",{parentName:"li"},"8081")),(0,r.kt)("li",{parentName:"ul"},"DAGs Visualizer ",(0,r.kt)("inlineCode",{parentName:"li"},"8061")),(0,r.kt)("li",{parentName:"ul"},"Delve Debugger ",(0,r.kt)("inlineCode",{parentName:"li"},"40000"))),(0,r.kt)("p",null,"For example for ",(0,r.kt)("inlineCode",{parentName:"p"},"peer_replica_2")," the following ports are exposed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8280"},"http://localhost:8280")),(0,r.kt)("li",{parentName:"ul"},"Dashboard  ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8261"},"http://localhost:8261")),(0,r.kt)("li",{parentName:"ul"},"DAGs Visualizer  ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8281"},"http://localhost:8281")),(0,r.kt)("li",{parentName:"ul"},"Delve Debugger  ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:40200"},"http://localhost:40200"))),(0,r.kt)("h2",{id:"debugging-tests"},"Debugging tests"),(0,r.kt)("p",null,"Tests can be run defining a ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG=1")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG=1 ./runTests.sh"),") environment variable. The main container driving the tests will be run under a Delve Go debugger listening\non ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:50000"),".\nThe following launch configuration can be used from the VSCode IDE to attach to the debugger and step through the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "Connect to Integration tester",\n            "type": "go",\n            "request": "attach",\n            "mode": "remote",\n            "port": 50000,\n            "host": "127.0.0.1"\n        }\n    ]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the tester container gets connected to the test network the debugger will suffer a sudden disconnection: it is a caveat of Docker's way of doing networking. Just attach the debugger again and you are ready to go again.")),(0,r.kt)("h3",{id:"preventing-network-shutdown"},"Preventing Network shutdown"),(0,r.kt)("p",null,"When the test completes for either a PASS or a FAIL, the underlying test network is destroyed. To prevent this and give you a chance to do your thing you will have to place the breakpoint on the ",(0,r.kt)("inlineCode",{parentName:"p"},"tests.ShutdownNetwork")," method."),(0,r.kt)("h2",{id:"other-tips"},"Other Tips"),(0,r.kt)("p",null,"Useful for development is to only execute the test you're currently building. For that matter, simply modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"entrypoint: go test ./tests -run <YOUR_TEST_NAME> -v -mod=readonly\n")))}u.isMDXComponent=!0},94646:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/integration-testing-a5a2fd4ebdfb3fb42cd75d867de81efd.png"},56293:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/integration-testing-a5a2fd4ebdfb3fb42cd75d867de81efd.png"}}]);