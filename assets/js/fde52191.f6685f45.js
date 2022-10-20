"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43446],{3905:(M,e,N)=>{N.d(e,{Zo:()=>j,kt:()=>u});var t=N(67294);function D(M,e,N){return e in M?Object.defineProperty(M,e,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[e]=N,M}function z(M,e){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),N.push.apply(N,t)}return N}function I(M){for(var e=1;e<arguments.length;e++){var N=null!=arguments[e]?arguments[e]:{};e%2?z(Object(N),!0).forEach((function(e){D(M,e,N[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(N)):z(Object(N)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(N,e))}))}return M}function a(M,e){if(null==M)return{};var N,t,D=function(M,e){if(null==M)return{};var N,t,D={},z=Object.keys(M);for(t=0;t<z.length;t++)N=z[t],e.indexOf(N)>=0||(D[N]=M[N]);return D}(M,e);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(M);for(t=0;t<z.length;t++)N=z[t],e.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(M,N)&&(D[N]=M[N])}return D}var g=t.createContext({}),i=function(M){var e=t.useContext(g),N=e;return M&&(N="function"==typeof M?M(e):I(I({},e),M)),N},j=function(M){var e=i(M.components);return t.createElement(g.Provider,{value:e},M.children)},o={inlineCode:"code",wrapper:function(M){var e=M.children;return t.createElement(t.Fragment,{},e)}},r=t.forwardRef((function(M,e){var N=M.components,D=M.mdxType,z=M.originalType,g=M.parentName,j=a(M,["components","mdxType","originalType","parentName"]),r=i(N),u=D,T=r["".concat(g,".").concat(u)]||r[u]||o[u]||z;return N?t.createElement(T,I(I({ref:e},j),{},{components:N})):t.createElement(T,I({ref:e},j))}));function u(M,e){var N=arguments,D=e&&e.mdxType;if("string"==typeof M||D){var z=N.length,I=new Array(z);I[0]=r;var a={};for(var g in e)hasOwnProperty.call(e,g)&&(a[g]=e[g]);a.originalType=M,a.mdxType="string"==typeof M?M:D,I[1]=a;for(var i=2;i<z;i++)I[i]=N[i];return t.createElement.apply(null,I)}return t.createElement.apply(null,N)}r.displayName="MDXCreateElement"},12965:(M,e,N)=>{N.r(e),N.d(e,{assets:()=>g,contentTitle:()=>I,default:()=>o,frontMatter:()=>z,metadata:()=>a,toc:()=>i});var t=N(87462),D=(N(67294),N(3905));const z={title:"What is a Wallet?",description:"A wallet helps you to securely store and handle your Tokens. We describe the different options available."},I="What is a Wallet?",a={unversionedId:"wallets/what-is-a-wallet",id:"wallets/what-is-a-wallet",title:"What is a Wallet?",description:"A wallet helps you to securely store and handle your Tokens. We describe the different options available.",source:"@site/iota/use/wallets/what-is-a-wallet.md",sourceDirName:"wallets",slug:"/wallets/what-is-a-wallet",permalink:"/use/wallets/what-is-a-wallet",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/iota/use/wallets/what-is-a-wallet.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{title:"What is a Wallet?",description:"A wallet helps you to securely store and handle your Tokens. We describe the different options available."},sidebar:"use",next:{title:"Firefly Wallet",permalink:"/use/wallets/firefly/general"}},g={},i=[{value:"Software Wallets",id:"software-wallets",level:2},{value:"Hardware Wallets",id:"hardware-wallets",level:2}],j={toc:i};function o(M){let{components:e,...z}=M;return(0,D.kt)("wrapper",(0,t.Z)({},j,z,{components:e,mdxType:"MDXLayout"}),(0,D.kt)("h1",{id:"what-is-a-wallet"},"What is a Wallet?"),(0,D.kt)("p",null,(0,D.kt)("img",{alt:"Wallets",src:N(93677).Z,width:"862",height:"200"})),(0,D.kt)("p",null,"A wallet is a tool that gives you access to your IOTA tokens. One very important fact that you need to understand from the beginning is ",(0,D.kt)("strong",{parentName:"p"},"your IOTA tokens are never stored INSIDE a wallet"),"."),(0,D.kt)("p",null,"This is a common misunderstanding. All your IOTA tokens only exist in the Tangle network and cannot leave this network. So you do not physically \u201cstore\u201d them \u201cinside\u201d anything."),(0,D.kt)("p",null,"A wallet is a tool to access, transfer and manipulate your tokens on the IOTA network. It gives you a convenient solution to store your secret keys and use them in the network to control your tokens."),(0,D.kt)("p",null,"The wallet knows the private key and the public key of your ",(0,D.kt)("strong",{parentName:"p"},"seed"),". Armed with these two points of cryptographic information, a wallet can access the addresses of all your tokens on the network and has full control over all functions of the ledger. The wallet takes care of securely storing this important information for you. But if you lose access to the wallet, you lose access to this information, so it is ",(0,D.kt)("strong",{parentName:"p"},"essential")," that you always have proper backups of these secrets stored in a safe location."),(0,D.kt)("p",null,"Think of a wallet more like a browser that knows exactly the place where your tokens sit in the huge IOTA network and that makes it possible for you to control them. But again, never forget: the tokens are always and only on the Tangle and never in your wallet. In crypto, we divide wallets into two categories:"),(0,D.kt)("ul",null,(0,D.kt)("li",{parentName:"ul"},"Software wallets"),(0,D.kt)("li",{parentName:"ul"},"Hardware wallets")),(0,D.kt)("h2",{id:"software-wallets"},"Software Wallets"),(0,D.kt)("p",null,'A software wallet is a computer program that is executed in the operating system of your device (a computer or smartphone). It has no representation in a physical device and the program code is not written (or "hard-coded") in a computer chip. Software wallets are user-friendly and therefore a very popular way to handle your tokens. They usually need a short setup process where you enter your secret seed once \u2013 and then never need to type this complicated list of letters or characters again. You log in to the software wallet with a carefully chosen password and gain access to your tokens. Now you can easily send and receive tokens.'),(0,D.kt)("p",null,"But as software wallets are part of your operating system, the security of a software wallet can always be only as good as the security of the entire operating system. So you need to make sure that your operating system is free of malicious software, otherwise it will be easy for an attacker to get access your secret keys and your tokens. If you use a software wallet to handle your IOTA tokens, always have an up-to-date system, run quality antivirus and anti-malware programs, and follow best practices for cybersecurity."),(0,D.kt)("p",null,"The IOTA Foundation has developed a software wallet that follows the highest standards to keep your secrets safe. Read about the Firefly wallet here: ",(0,D.kt)("a",{parentName:"p",href:"/use/wallets/firefly/general"},(0,D.kt)("strong",{parentName:"a"},"Firefly Wallet"))),(0,D.kt)("p",null,"And download the Firefly wallet at the ",(0,D.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},(0,D.kt)("strong",{parentName:"a"},"Firefly official website"))),(0,D.kt)("h2",{id:"hardware-wallets"},"Hardware Wallets"),(0,D.kt)("p",null,"Hardware wallets are physical devices that are solely constructed to handle the secret information (seeds and private keys) of your tokens. They use cryptographic techniques and software coded into the chips of the device to hide these secrets from the outside world. The big advantage of these devices is that they are not part of your normal computer operating system. Nor are they even part of the physical hardware of the devices that you use for your normal daily use, like browsing the internet or using different kinds of software. This makes them an encapsulated safe vault whose only purpose is to protect your crypto secrets."),(0,D.kt)("p",null,"Only when you want to do something with your tokens do you need to establish a connection between this hardware wallet and the IOTA network where your tokens are. Usually, this connection is established by a software wallet that runs on your computer. For this purpose, you need to connect the hardware wallet to your computer (via cable or USB). This connection is extremely well protected and never transfers secret information between the hardware and software wallets. The user of the hardware wallet establishes a connection to the software wallet, and the software wallet establishes the connection to the IOTA network."),(0,D.kt)("p",null,"Through sophisticated cryptographic concepts, the user can now interact with the IOTA network, without the possibility of malicious software stored on the user's computer accessing the secrets that are stored on the hardware wallet. This adds a second wall of security that keeps the secrets outside the reach of the user's potentially infected computer."),(0,D.kt)("p",null,"A hardware wallet is therefore the most secure way to keep your secrets safe, but it also adds an extra layer of complexity to the use of your crypto, on top of what a software wallet provides."),(0,D.kt)("p",null,"IOTA currently supports the use of the Ledger Nano hardware wallet. Read how to use it ",(0,D.kt)("a",{parentName:"p",href:"/use/wallets/firefly/user-guide-ledger"},(0,D.kt)("strong",{parentName:"a"},"here."))),(0,D.kt)("p",null,"Only purchase a Ledger directly from the official store on the official website: ",(0,D.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},(0,D.kt)("strong",{parentName:"a"},"Ledger Hardware Wallets"))),(0,D.kt)("hr",null))}o.isMDXComponent=!0},93677:(M,e,N)=>{N.d(e,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDg2MiAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yODBfNDU0MSkiPgo8cmVjdCB3aWR0aD0iODYyIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzQwQTFBQyIvPgo8cGF0aCBkPSJNMCAwSDg2MlYyMDBIMFYwWiIgZmlsbD0iIzExMUYzQiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM0Mi4yOTMgODguNTU5NEMzNDAuOTMgNzMuNDczMiAzNTAuNjAzIDU5LjE0NCAzNjUuNzk0IDU1LjA4OTVDMzgwLjk4NSA1MS4wMzUgMzk2LjU1NSA1OC42MjcyIDQwMi45NDggNzIuMzcwOUw0MTAuODM0IDcwLjI2NjFDNDM0Ljg3IDYzLjg1MSA0NTkuNTc3IDc4LjA1OSA0NjYuMDE3IDEwMi4wMDFMNDgxLjM3NiAxNTkuMDk2QzQ4Ny44MTcgMTgzLjAzNyA0NzMuNTUyIDIwNy42NDYgNDQ5LjUxNiAyMTQuMDYxTDM3My4wODggMjM0LjQ2QzM0OS4wNTIgMjQwLjg3NSAzMjQuMzQ2IDIyNi42NjcgMzE3LjkwNiAyMDIuNzI1TDMwMi41NDYgMTQ1LjYzQzI5Ni4xMDYgMTIxLjY4OCAzMTAuMzcgOTcuMDc5NCAzMzQuNDA2IDkwLjY2NDNMMzQyLjI5MyA4OC41NTk0Wk0zOTQuMDgzIDE0MS41MTFDMzkxLjQ3NCAxNDUuOTc3IDM4NS43MDkgMTQ3LjUxNSAzODEuMjA4IDE0NC45NDdDMzc2LjcwNyAxNDIuMzggMzc1LjE3MyAxMzYuNjc4IDM3Ny43ODIgMTMyLjIxM0MzODAuMzkyIDEyNy43NDcgMzg2LjE1NiAxMjYuMjA5IDM5MC42NTcgMTI4Ljc3N0MzOTUuMTU5IDEzMS4zNDQgMzk2LjY5MiAxMzcuMDQ2IDM5NC4wODMgMTQxLjUxMVpNMzQ0LjQ1NyAxNjUuNTc2TDM0MS4zNiAxNjMuODA5QzMzMS42MzggMTU4LjI2MyAzMzEuNzcxIDE0NC4zMTggMzQxLjYgMTM4Ljg4OEMzNDYuMDM3IDEzNi40MzYgMzUxLjQ0IDEzNi40NiAzNTUuODM4IDEzOC45NTFMMzgyLjM4NSAxNTMuOTkzQzM4Mi45OTIgMTU0LjMzNyAzODMuMjE3IDE1NS4wMTcgMzgzLjA1IDE1NS42MDhDMzgzLjA0NSAxNTUuODMxIDM4Mi45ODcgMTU2LjA1OSAzODIuODY0IDE1Ni4yNzVMMzY3Ljg2IDE4Mi43NjlDMzY1LjM3NSAxODcuMTU4IDM2MC43NTMgMTg5Ljk0NSAzNTUuNjgxIDE5MC4xMTRDMzQ0LjQ0OCAxOTAuNDg4IDMzNy4xMzMgMTc4LjU5NiAzNDIuNjA5IDE2OC44NkwzNDQuNDU3IDE2NS41NzZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjgwXzQ1NDEpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDQxLjMxNCAyMjQuMjM0QzQzOC42MTcgMjI0LjIzNCA0MzUuOTgyIDIyMy45NjUgNDMzLjQzNyAyMjMuNDUzTDQ1NC4xNTYgMjE3LjkyM0M0NTkuNjI3IDIxNi40NjMgNDY0LjYyNSAyMTQuMTIzIDQ2OS4wMzkgMjExLjA5OEg1MjAuNDM4QzUzNS4wMDQgMjExLjA5OCA1NDYuODEzIDE5OS4zMzcgNTQ2LjgxMyAxODQuODI4SDUyMy43MzVDNTA3LjM0OCAxODQuODI4IDQ5NC4wNjMgMTcxLjU5NiA0OTQuMDYzIDE1NS4yNzNDNDk0LjA2MyAxMzguOTUgNTA3LjM0OCAxMjUuNzE4IDUyMy43MzUgMTI1LjcxOEg1NDYuODEzQzU0Ni44MTMgMTExLjIwOSA1MzUuMDA0IDk5LjQ0NzUgNTIwLjQzOCA5OS40NDc1SDQ3Mi4yOTFMNDcxLjg0NSA5Ny43OTEyQzQ2OS4zMTcgODguMzkyNSA0NjQuMTYzIDgwLjM5MyA0NTcuMzggNzQuMzY2MUM0NjEuNzQ2IDY1Ljg2MjUgNDcwLjYyOSA2MC4wNDEzIDQ4MC44NzYgNjAuMDQxM0M0OTUuNDQyIDYwLjA0MTMgNTA3LjI1MSA3MS44MDMxIDUwNy4yNTEgODYuMzEyMUg1MjAuNDM4QzU0Mi4yODggODYuMzEyMSA1NjAgMTAzLjk1NSA1NjAgMTI1LjcxOFYxODQuODI4QzU2MCAyMDYuNTkxIDU0Mi4yODggMjI0LjIzNCA1MjAuNDM4IDIyNC4yMzRINDQxLjMxNFpNNTIzLjczNSAxMzguODU0SDU0Ni44MTNWMTcxLjY5Mkg1MjMuNzM1QzUxNC42MzEgMTcxLjY5MiA1MDcuMjUxIDE2NC4zNDEgNTA3LjI1MSAxNTUuMjczQzUwNy4yNTEgMTQ2LjIwNSA1MTQuNjMxIDEzOC44NTQgNTIzLjczNSAxMzguODU0WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzI4MF80NTQxKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQwMy40OSA3MS4xOTEyQzM5Ni42ODMgNTcuNDkzNiAzODAuOTIxIDUwLjAxNzMgMzY1LjUzNiA1NC4xMjM0QzM1MC4xNTIgNTguMjI5MyAzNDAuMjUzIDcyLjU1NDEgMzQxLjIzMiA4Ny44MDc2TDMzNC4xNDggODkuNjk4MUMzMDkuNTgxIDk2LjI1NSAyOTQuOTk2IDEyMS40MTEgMzAxLjU4MSAxNDUuODlMMzE2Ljk0IDIwMi45ODVDMzIzLjUyNCAyMjcuNDYyIDM0OC43OCAyNDEuOTgyIDM3My4zNDYgMjM1LjQyNkw0NDkuNzc0IDIxNS4wMjhDNDc0LjM0MiAyMDguNDcxIDQ4OC45MjcgMTgzLjMxNSA0ODIuMzQyIDE1OC44MzZMNDY2Ljk4MyAxMDEuNzQxQzQ2MC4zOTggNzcuMjYzNSA0MzUuMTQyIDYyLjc0MzQgNDEwLjU3NiA2OS4yOTk5TDQwMy40OSA3MS4xOTEyWk00MDIuMDQxIDcyLjc5MjdDMzk1Ljg1IDU5LjQ4MzQgMzgwLjc2OCA1Mi4xMjc5IDM2Ni4wNTIgNTYuMDU1N0MzNTEuMzM2IDU5Ljk4MzIgMzQxLjk2OSA3My44NjI0IDM0My4yODkgODguNDY5NUwzNDMuMzY0IDg5LjMwODRMMzM0LjY2NCA5MS42MzA1QzMxMS4xNTkgOTcuOTAzOCAyOTcuMjE2IDEyMS45NjYgMzAzLjUxMiAxNDUuMzdMMzE4Ljg3MSAyMDIuNDY1QzMyNS4xNjggMjI1Ljg3MSAzNDkuMzI0IDIzOS43NjcgMzcyLjgzMSAyMzMuNDkzTDQ0OS4yNTggMjEzLjA5NUM0NzIuNzYzIDIwNi44MjIgNDg2LjcwNiAxODIuNzYgNDgwLjQxIDE1OS4zNTZMNDY1LjA1MSAxMDIuMjZDNDU4Ljc1NSA3OC44NTQ0IDQzNC41OTggNjQuOTU4NSA0MTEuMDkyIDcxLjIzMjNMNDAyLjM5NSA3My41NTM1TDQwMi4wNDEgNzIuNzkyN1pNNDU2LjQ5IDczLjkwOTRDNDYxLjAyMiA2NS4wODM5IDQ3MC4yNDEgNTkuMDQxMyA0ODAuODc2IDU5LjA0MTNDNDk1LjY1NSA1OS4wNDEzIDUwNy43MDQgNzAuNzEwNyA1MDguMjMzIDg1LjMxMjFINTIwLjQzOEM1NDIuODM2IDg1LjMxMjEgNTYxIDEwMy4zOTkgNTYxIDEyNS43MThWMTg0LjgyOEM1NjEgMjA3LjE0NyA1NDIuODM2IDIyNS4yMzQgNTIwLjQzOCAyMjUuMjM0SDQ0MS4zMTRDNDM4LjU1IDIyNS4yMzQgNDM1Ljg1IDIyNC45NTggNDMzLjIzOSAyMjQuNDMzTDQzMy4xNzkgMjIyLjQ4Nkw0NTMuODk4IDIxNi45NTdDNDU5LjI1OCAyMTUuNTI2IDQ2NC4xNTIgMjEzLjIzNSA0NjguNDc0IDIxMC4yNzRMNDY4LjczIDIxMC4wOThINTIwLjQzOEM1MzQuMTE5IDIxMC4wOTggNTQ1LjI2NiAxOTkuMzE3IDU0NS43OTMgMTg1LjgyOEg1MjMuNzM1QzUwNi43OTkgMTg1LjgyOCA0OTMuMDYzIDE3Mi4xNTIgNDkzLjA2MyAxNTUuMjczQzQ5My4wNjMgMTM4LjM5NCA1MDYuNzk5IDEyNC43MTggNTIzLjczNSAxMjQuNzE4SDU0NS43OTNDNTQ1LjI2NiAxMTEuMjI5IDUzNC4xMTkgMTAwLjQ0NyA1MjAuNDM4IDEwMC40NDdINDcxLjUyNEw0NzAuODggOTguMDUxQzQ2OC40MDQgODguODQ2OSA0NjMuMzU3IDgxLjAxNTIgNDU2LjcxNSA3NS4xMTM3TDQ1Ni4xMzYgNzQuNTk4OUw0NTYuNDkgNzMuOTA5NFpNNDU4LjYyOSA3NC4xNDcyQzQ2NS4yNjUgODAuMjM1NiA0NzAuMzA0IDg4LjIxMDQgNDcyLjgxMSA5Ny41MzE1TDQ3My4wNTcgOTguNDQ3NUg1MjAuNDM4QzUzNS41NTMgOTguNDQ3NSA1NDcuODEzIDExMC42NTMgNTQ3LjgxMyAxMjUuNzE4VjEyNi43MThINTIzLjczNUM1MDcuODk2IDEyNi43MTggNDk1LjA2MyAxMzkuNTA2IDQ5NS4wNjMgMTU1LjI3M0M0OTUuMDYzIDE3MS4wNCA1MDcuODk2IDE4My44MjggNTIzLjczNSAxODMuODI4SDU0Ny44MTNWMTg0LjgyOEM1NDcuODEzIDE5OS44OTMgNTM1LjU1MyAyMTIuMDk4IDUyMC40MzggMjEyLjA5OEg0NjkuMzQ3QzQ2NC45MDQgMjE1LjEwMiA0NTkuODkgMjE3LjQyNyA0NTQuNDE0IDIxOC44ODlMNDM4LjUwOSAyMjMuMTM0QzQzOS40MzUgMjIzLjIgNDQwLjM3MSAyMjMuMjM0IDQ0MS4zMTQgMjIzLjIzNEg1MjAuNDM4QzU0MS43MzkgMjIzLjIzNCA1NTkgMjA2LjAzNSA1NTkgMTg0LjgyOFYxMjUuNzE4QzU1OSAxMDQuNTExIDU0MS43MzkgODcuMzEyMSA1MjAuNDM4IDg3LjMxMjFINTA2LjI1MVY4Ni4zMTIxQzUwNi4yNTEgNzIuMzU5MSA0OTQuODk0IDYxLjA0MTMgNDgwLjg3NiA2MS4wNDEzQzQ3MS4yOSA2MS4wNDEzIDQ2Mi45NDYgNjYuMzM0MyA0NTguNjI5IDc0LjE0NzJaTTM3Ni45MTkgMTMxLjcwOEMzNzkuODA2IDEyNi43NjggMzg2LjE3NyAxMjUuMDcgMzkxLjE1MyAxMjcuOTA4QzM5Ni4xMzYgMTMwLjc1IDM5Ny44MzcgMTM3LjA2OCAzOTQuOTQ2IDE0Mi4wMTZDMzkyLjA1OSAxNDYuOTU2IDM4NS42ODggMTQ4LjY1NCAzODAuNzEzIDE0NS44MTZDMzc1LjczIDE0Mi45NzQgMzc0LjAyOCAxMzYuNjU2IDM3Ni45MTkgMTMxLjcwOFpNMzkwLjE2MiAxMjkuNjQ1QzM4Ni4xMzUgMTI3LjM0OCAzODAuOTc4IDEyOC43MjcgMzc4LjY0NiAxMzIuNzE3QzM3Ni4zMTggMTM2LjcwMSAzNzcuNjg0IDE0MS43ODYgMzgxLjcwNCAxNDQuMDc5QzM4NS43MyAxNDYuMzc2IDM5MC44ODggMTQ0Ljk5NyAzOTMuMjIgMTQxLjAwN0MzOTUuNTQ3IDEzNy4wMjMgMzk0LjE4MSAxMzEuOTM4IDM5MC4xNjIgMTI5LjY0NVpNMzQxLjExNiAxMzguMDEyQzM0NS44NTcgMTM1LjM5MyAzNTEuNjI5IDEzNS40MTggMzU2LjMzMSAxMzguMDgxTDM4Mi44NzggMTUzLjEyM0MzODMuODczIDE1My42ODcgMzg0LjI2MiAxNTQuNzg0IDM4NC4wNDMgMTU1Ljc1NkMzODQuMDE4IDE1Ni4xMDEgMzgzLjkxNyAxNTYuNDQ1IDM4My43MzQgMTU2Ljc2OEwzNjguNzMgMTgzLjI2MkMzNjYuMDcyIDE4Ny45NTYgMzYxLjEzMiAxOTAuOTMzIDM1NS43MTQgMTkxLjExM0MzNDMuNzE3IDE5MS41MTMgMzM1Ljg3MiAxNzguNzk4IDM0MS43MzcgMTY4LjM3TDM0My4wOTggMTY1Ljk1MkwzNDAuODY1IDE2NC42NzhDMzMwLjQ1OCAxNTguNzQxIDMzMC42MTEgMTQzLjgxNiAzNDEuMTE2IDEzOC4wMTJaTTM1NS4zNDUgMTM5LjgyMkMzNTEuMjUxIDEzNy41MDIgMzQ2LjIxOCAxMzcuNDc4IDM0Mi4wODMgMTM5Ljc2M0MzMzIuOTMyIDE0NC44MTkgMzMyLjgxOCAxNTcuNzg1IDM0MS44NTYgMTYyLjk0MUwzNDUuODE1IDE2NS4yTDM0My40ODEgMTY5LjM1MUMzMzguMzk0IDE3OC4zOTMgMzQ1LjE3OSAxODkuNDYzIDM1NS42NDggMTg5LjExNEMzNjAuMzc1IDE4OC45NTcgMzY0LjY3OCAxODYuMzU5IDM2Ni45OSAxODIuMjc2TDM4MS45OTQgMTU1Ljc4MkMzODIuMDM0IDE1NS43MTIgMzgyLjA0OSAxNTUuNjQ3IDM4Mi4wNSAxNTUuNTg5TDM4Mi4wNTIgMTU1LjQ2TDM4Mi4wODcgMTU1LjMzNkMzODIuMTM5IDE1NS4xNTQgMzgyLjA2OSAxNTQuOTYzIDM4MS44OTIgMTU0Ljg2M0wzNTUuMzQ1IDEzOS44MjJaTTUwNi4yNTEgMTU1LjI3M0M1MDYuMjUxIDE0NS42NDkgNTE0LjA4MiAxMzcuODU0IDUyMy43MzUgMTM3Ljg1NEg1NDcuODEzVjE3Mi42OTJINTIzLjczNUM1MTQuMDgyIDE3Mi42OTIgNTA2LjI1MSAxNjQuODk3IDUwNi4yNTEgMTU1LjI3M1pNNTIzLjczNSAxMzkuODU0QzUxNS4xNzkgMTM5Ljg1NCA1MDguMjUxIDE0Ni43NjEgNTA4LjI1MSAxNTUuMjczQzUwOC4yNTEgMTYzLjc4NSA1MTUuMTc5IDE3MC42OTIgNTIzLjczNSAxNzAuNjkySDU0NS44MTNWMTM5Ljg1NEg1MjMuNzM1WiIgZmlsbD0iIzBGQzFCNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg2MSAxSDFWMTk5SDg2MVYxWk0wIDBWMjAwSDg2MlYwSDBaIiBmaWxsPSIjMjkzODU2Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODYxIDFIMVYxOTlIODYxVjFaTTAgMFYyMDBIODYyVjBIMFoiIGZpbGw9IiMyOTM4NTYiLz4KPHBhdGggZD0iTTQ2OSAzNC41QzQ2OSAzOC4wODk5IDQ2Ni4wOSA0MSA0NjIuNSA0MUM0NTguOTEgNDEgNDU2IDM4LjA4OTkgNDU2IDM0LjVDNDU2IDMwLjkxMDEgNDU4LjkxIDI4IDQ2Mi41IDI4QzQ2Ni4wOSAyOCA0NjkgMzAuOTEwMSA0NjkgMzQuNVoiIGZpbGw9IiMwRkMxQjciLz4KPHBhdGggb3BhY2l0eT0iMC40OSIgZD0iTTYwNyA0Mi41QzYwNyA0NS41Mzc2IDYwNC41MzggNDggNjAxLjUgNDhDNTk4LjQ2MiA0OCA1OTYgNDUuNTM3NiA1OTYgNDIuNUM1OTYgMzkuNDYyNCA1OTguNDYyIDM3IDYwMS41IDM3QzYwNC41MzggMzcgNjA3IDM5LjQ2MjQgNjA3IDQyLjVaIiBmaWxsPSIjMEZDMUI3Ii8+CjxwYXRoIG9wYWNpdHk9IjAuNDkiIGQ9Ik01OTYgMTA1LjVDNTk2IDEwOC41MzggNTkzLjUzOCAxMTEgNTkwLjUgMTExQzU4Ny40NjIgMTExIDU4NSAxMDguNTM4IDU4NSAxMDUuNUM1ODUgMTAyLjQ2MiA1ODcuNDYyIDEwMCA1OTAuNSAxMDBDNTkzLjUzOCAxMDAgNTk2IDEwMi40NjIgNTk2IDEwNS41WiIgZmlsbD0iIzBGQzFCNyIvPgo8cGF0aCBvcGFjaXR5PSIwLjQ5IiBkPSJNNTQxIDMxQzU0MSAzMi42NTY5IDUzOS42NTcgMzQgNTM4IDM0QzUzNi4zNDMgMzQgNTM1IDMyLjY1NjkgNTM1IDMxQzUzNSAyOS4zNDMxIDUzNi4zNDMgMjggNTM4IDI4QzUzOS42NTcgMjggNTQxIDI5LjM0MzEgNTQxIDMxWiIgZmlsbD0iIzBGQzFCNyIvPgo8cGF0aCBvcGFjaXR5PSIwLjQ5IiBkPSJNMzMwIDc0QzMzMCA3NS42NTY5IDMyOC42NTcgNzcgMzI3IDc3QzMyNS4zNDMgNzcgMzI0IDc1LjY1NjkgMzI0IDc0QzMyNCA3Mi4zNDMxIDMyNS4zNDMgNzEgMzI3IDcxQzMyOC42NTcgNzEgMzMwIDcyLjM0MzEgMzMwIDc0WiIgZmlsbD0iIzBGQzFCNyIvPgo8cGF0aCBkPSJNMzg5IDI2QzM4OSAyOS4zMTM3IDM4Ni4zMTQgMzIgMzgzIDMyQzM3OS42ODYgMzIgMzc3IDI5LjMxMzcgMzc3IDI2QzM3NyAyMi42ODYzIDM3OS42ODYgMjAgMzgzIDIwQzM4Ni4zMTQgMjAgMzg5IDIyLjY4NjMgMzg5IDI2WiIgZmlsbD0iI0Q3RTFGNCIvPgo8cGF0aCBkPSJNMjI3IDY1QzIyNyA2OC4zMTM3IDIyNC4zMTQgNzEgMjIxIDcxQzIxNy42ODYgNzEgMjE1IDY4LjMxMzcgMjE1IDY1QzIxNSA2MS42ODYzIDIxNy42ODYgNTkgMjIxIDU5QzIyNC4zMTQgNTkgMjI3IDYxLjY4NjMgMjI3IDY1WiIgZmlsbD0iI0Q3RTFGNCIvPgo8cGF0aCBkPSJNMjQwIDEzMUMyNDAgMTM0LjMxNCAyMzcuMzE0IDEzNyAyMzQgMTM3QzIzMC42ODYgMTM3IDIyOCAxMzQuMzE0IDIyOCAxMzFDMjI4IDEyNy42ODYgMjMwLjY4NiAxMjUgMjM0IDEyNUMyMzcuMzE0IDEyNSAyNDAgMTI3LjY4NiAyNDAgMTMxWiIgZmlsbD0iI0Q3RTFGNCIvPgo8cGF0aCBkPSJNNjMzIDEzN0M2MzMgMTQwLjMxNCA2MzAuMzE0IDE0MyA2MjcgMTQzQzYyMy42ODYgMTQzIDYyMSAxNDAuMzE0IDYyMSAxMzdDNjIxIDEzMy42ODYgNjIzLjY4NiAxMzEgNjI3IDEzMUM2MzAuMzE0IDEzMSA2MzMgMTMzLjY4NiA2MzMgMTM3WiIgZmlsbD0iI0Q3RTFGNCIvPgo8cGF0aCBkPSJNMzE4IDQyLjVDMzE4IDQ4LjI5OSAzMTMuMjk5IDUzIDMwNy41IDUzQzMwMS43MDEgNTMgMjk3IDQ4LjI5OSAyOTcgNDIuNUMyOTcgMzYuNzAxIDMwMS43MDEgMzIgMzA3LjUgMzJDMzEzLjI5OSAzMiAzMTggMzYuNzAxIDMxOCA0Mi41WiIgZmlsbD0iIzBGQzFCNyIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0yNjYgODhDMjY2IDkwLjc2MTQgMjYzLjc2MSA5MyAyNjEgOTNDMjU4LjIzOSA5MyAyNTYgOTAuNzYxNCAyNTYgODhDMjU2IDg1LjIzODYgMjU4LjIzOSA4MyAyNjEgODNDMjYzLjc2MSA4MyAyNjYgODUuMjM4NiAyNjYgODhaIiBmaWxsPSIjMEZDMUI3Ii8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8yODBfNDU0MSIgeDE9IjM5NyIgeTE9Ijc4IiB4Mj0iNDMwLjUiIHkyPSIyMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzExMUYzQiIvPgo8c3RvcCBvZmZzZXQ9IjAuNzQzOTk0IiBzdG9wLWNvbG9yPSIjMEZDMUI3IiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzI4MF80NTQxIiB4MT0iMzk3IiB5MT0iNzgiIHgyPSI0MzAuNSIgeTI9IjIzNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTExRjNCIi8+CjxzdG9wIG9mZnNldD0iMC43NDM5OTQiIHN0b3AtY29sb3I9IiMwRkMxQjciIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI4MF80NTQxIj4KPHJlY3Qgd2lkdGg9Ijg2MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);