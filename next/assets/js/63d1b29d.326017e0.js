"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));n(34259),n(18679);const l={description:"How to install a Wasp node on Linux, macOS and Windows.",image:"/img/logo/WASP_logo_dark.png",keywords:["Wasp","Installing wasp","Go-lang","Hornet","windows","macOS","linux"]},r="Install Wasp",i={unversionedId:"guide/chains_and_nodes/installing-wasp",id:"guide/chains_and_nodes/installing-wasp",title:"Install Wasp",description:"How to install a Wasp node on Linux, macOS and Windows.",source:"@site/next/external/wasp/documentation/docs/guide/chains_and_nodes/installing-wasp.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/installing-wasp",permalink:"/next/smart-contracts/guide/chains_and_nodes/installing-wasp",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/chains_and_nodes/installing-wasp.md",tags:[],version:"current",frontMatter:{description:"How to install a Wasp node on Linux, macOS and Windows.",image:"/img/logo/WASP_logo_dark.png",keywords:["Wasp","Installing wasp","Go-lang","Hornet","windows","macOS","linux"]},sidebar:"tutorialSidebar",previous:{title:"The L2 Ledger",permalink:"/next/smart-contracts/guide/solo/the-l2-ledger"},next:{title:"Running a Node",permalink:"/next/smart-contracts/guide/chains_and_nodes/running-a-node"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Clone the Wasp Repository",id:"clone-the-wasp-repository",level:2},{value:"Check Out Your Version of Choice",id:"check-out-your-version-of-choice",level:2},{value:"Build and Install Wasp",id:"build-and-install-wasp",level:2},{value:"Linux/macOS",id:"linuxmacos",level:3},{value:"macOS arm64 (M1 Apple Silicon)",id:"macos-arm64-m1-apple-silicon",level:3},{value:"Microsoft Windows",id:"microsoft-windows",level:3},{value:"Add Binaries to Path",id:"add-binaries-to-path",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-wasp"},"Install Wasp"),(0,o.kt)("p",null,"You can install and run your Wasp node by cloning the repository and building the application. The instructions below\nwill build both the Wasp node and the Wasp CLI to interact with the node from the command line."),(0,o.kt)("p",null,"Alternatively, you can run a Wasp node using one of the provided docker setups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/smart-contracts/guide/chains_and_nodes/docker_standalone"},"Wasp standalone Docker image")),(0,o.kt)("li",{parentName:"ul"},"pre-configured local ",(0,o.kt)("a",{parentName:"li",href:"/next/smart-contracts/guide/development_tools/docker_preconfigured"},"Wasp and Hornet node setup using Docker Compose"),".")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go 1.18"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.soliditylang.org/en/v0.8.9/installing-solidity.html"},"solc")," >= 0.8.11.")),(0,o.kt)("h2",{id:"clone-the-wasp-repository"},"Clone the Wasp Repository"),(0,o.kt)("p",null,"You can get the source code of the latest Wasp version from\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp"},"official repository")," or by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp\n")),(0,o.kt)("h2",{id:"check-out-your-version-of-choice"},"Check Out Your Version of Choice"),(0,o.kt)("p",null,"If you want to use the latest ISC features, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," branch instead of the default ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch.\nYou can check out ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," by running the following command from the project root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout develop\n")),(0,o.kt)("h2",{id:"build-and-install-wasp"},"Build and Install Wasp"),(0,o.kt)("h3",{id:"linuxmacos"},"Linux/macOS"),(0,o.kt)("p",null,"Once you have ",(0,o.kt)("a",{parentName:"p",href:"#clone-the-wasp-repository"},"cloned the repository"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"#check-out-your-version-of-choice"},"checked out your version of choice"),", you can build and install both ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp-cli")," by running the following commands from the project's root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make install\n")),(0,o.kt)("h3",{id:"macos-arm64-m1-apple-silicon"},"macOS arm64 (M1 Apple Silicon)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bytecodealliance/wasmtime-go"},(0,o.kt)("inlineCode",{parentName:"a"},"wasmtime-go"))," hasn't supported macOS on arm64 yet, so you should\nbuild your own wasmtime library. You can follow the README in ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmtime-go")," to build the library.\nOnce you have built the wasmtime library, you can run the following commands to install the Wasp node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go mod edit -replace=github.com/bytecodealliance/wasmtime-go=<wasmtime-go path>\nmake install\n")),(0,o.kt)("h3",{id:"microsoft-windows"},"Microsoft Windows"),(0,o.kt)("p",null,"On Windows, we recommend you to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL")," and follow\nthe ",(0,o.kt)("a",{parentName:"p",href:"#linuxmacos"},"Linux/macOS")," instructions above."),(0,o.kt)("h2",{id:"add-binaries-to-path"},"Add Binaries to Path"),(0,o.kt)("p",null,"The install command will place the applications binaries in ",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),".\nEnsure that the directory is part of your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," environment variable.\nIf needed, you can include this location in ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," by adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:$(go env GOPATH)/bin\n")),(0,o.kt)("p",null,"To apply changes made to a profile file, either restart your terminal application or execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bash_profile\n")))}p.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),l=n(86010),r=n(51048),i=n(33609),s=n(1943),c=n(72957);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:m,groupId:h,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,O]=(0,o.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:_}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==N&&(_(t),O(a),null!=h&&w(h,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},g)},b.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:T,onFocus:C,onClick:C},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);