"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[5433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Getting Started",l={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"Prerequisites",source:"@site/iota/external/chronicle/production/documentation/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/chronicle/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/chronicle.rs/edit/main/documentation/iota/external/chronicle/production/documentation/docs/getting_started.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Welcome",permalink:"/chronicle/welcome"},next:{title:"Config Reference",permalink:"/chronicle/config_reference"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Building Chronicle",id:"building-chronicle",level:3},{value:"Configuring Chronicle",id:"configuring-chronicle",level:3},{value:"Running Chronicle",id:"running-chronicle",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To run Chronicle, you need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Linux LTS operating system such as ",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/download#download"},"Ubuntu"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4 GB RAM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"At least 32 GB of disk space")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"64-bit processor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Preferred a 10 Gbps network connection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"At least 2 CPU cores (recommended)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"At least one Scylla node (version 4 or greater) running on a different device in the same private network as Chronicle. See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.scylladb.com/getting-started/"},"Scylla documentation")," for a tutorial on setting one up. For information about securing your Scylla nodes, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.scylladb.com/operating-scylla/security/"},"Scylla security documentation"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"build-essentials")," packages"),(0,a.kt)("p",{parentName:"li"},"  You can install these packages for Debian based distros, using the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install build-essential gcc make cmake cmake-gui cmake-curses-gui pkg-config openssl libssl-dev\n")),(0,a.kt)("p",{parentName:"li"},"  For other Linux distros, please refer to your package manager to install the build-essential pkgs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"(Optional) An IDE that supports Rust autocompletion. We recommend ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"Visual Studio Code")," with the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer"},"rust-analyzer")," extension")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you want to load historical transactions into your permanode, you can download the files from the ",(0,a.kt)("a",{parentName:"p",href:"https://dbfiles.iota.org/?prefix=mainnet/history/"},"IOTA Foundation's archive"),"."))),(0,a.kt)("p",null,"We also recommend updating Rust to the latest stable version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update stable\n")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Either download the provided executable (you should only do this if you do not wish to use the filtering functionality), or build it yourself."),(0,a.kt)("h3",{id:"building-chronicle"},"Building Chronicle"),(0,a.kt)("p",null,"Clone this repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/chronicle.rs\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),(0,a.kt)("p",null,"If you wish to use the filter functionality, enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," feature in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/chronicle.rs/blob/main/chronicle/Cargo.toml"},"chronicle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release --features filter\n")),(0,a.kt)("h3",{id:"configuring-chronicle"},"Configuring Chronicle"),(0,a.kt)("p",null,"Chronicle uses a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ron-rs/ron"},"RON")," file to store configuration parameters, called ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ron"),". An example is provided as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/chronicle.rs/blob/main/config.example.ron"},"config.example.ron")," with default values. See ",(0,a.kt)("a",{href:"#config-reference"},"Config Reference")," for more details about the config file."),(0,a.kt)("h3",{id:"running-chronicle"},"Running Chronicle"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#Building-Chronicle"},"Building Chronicle"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd target/release && cp /path/to/your/config.ron ./\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --release\n")))}u.isMDXComponent=!0}}]);