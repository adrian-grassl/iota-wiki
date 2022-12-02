"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[41685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60842:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Safe Password Storage",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"In a production setup, do not store passwords in the host's environment variables or in the source code.  See our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/how_tos/backup_security"},"backup and security recommendations")," for production setups.")))}i.isMDXComponent=!0},99747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(60842);const i={description:"Get started with the official IOTA Wallet Library Software Rust library.",image:"/img/logo/wallet_light.png",keywords:["Rust","install","cargo","system environment variables"]},s="Getting Started with Rust",l={unversionedId:"getting_started/rust",id:"getting_started/rust",title:"Getting Started with Rust",description:"Get started with the official IOTA Wallet Library Software Rust library.",source:"@site/next/external/wallet.rs/documentation/docs/getting_started/rust.mdx",sourceDirName:"getting_started",slug:"/getting_started/rust",permalink:"/next/wallet.rs/getting_started/rust",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/getting_started/rust.mdx",tags:[],version:"current",frontMatter:{description:"Get started with the official IOTA Wallet Library Software Rust library.",image:"/img/logo/wallet_light.png",keywords:["Rust","install","cargo","system environment variables"]},sidebar:"docs",previous:{title:"Getting Started with Java",permalink:"/next/wallet.rs/getting_started/java"},next:{title:"Library Overview",permalink:"/next/wallet.rs/explanations/library_overview"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Include the Library in Your <code>Cargo.toml</code>",id:"include-the-library-in-your-cargotoml",level:2},{value:"Use the Library",id:"use-the-library",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-rust"},"Getting Started with Rust"),(0,r.kt)(o.ZP,{mdxType:"SafePasswordStorage"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust and Cargo"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We recommend you update ",(0,r.kt)("em",{parentName:"p"},"Rust")," to the latest stable\nversion ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},"rustup update stable"),".")),(0,r.kt)("p",null,"The library uses ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/documentation/"},(0,r.kt)("em",{parentName:"a"},"cmake"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/"},(0,r.kt)("em",{parentName:"a"},"openssl")),". You may\nneed install additional build tools on your system to run the build process successfully using Cargo."),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"You can install all needed prerequisites on Windows with ",(0,r.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages?q=msys"},"Chocolatey"),". If you have any of the tools already installed just remove them from the command"),(0,r.kt)("p",null,"Install Chocolatey with "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\n")),(0,r.kt)("p",null,"and install the needed packages with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"choco install visualstudio2022buildtools visualstudio2022-workload-vctools rust-ms msys2 llvm\n")),(0,r.kt)("h3",{id:"macos"},"macOS"),(0,r.kt)("p",null,"You can install ",(0,r.kt)("em",{parentName:"p"},"cmake")," and ",(0,r.kt)("em",{parentName:"p"},"openssl")," with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.brew.sh/"},(0,r.kt)("em",{parentName:"a"},"Homebrew"))," by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install cmake\nbrew install openssl@1.1\n# you may want to add this to your .zshrc or .bashrc since you'll need it to compile the crate\nOPENSSL_ROOT_DIR=$(brew --prefix openssl@1.1)\n")),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"You can install ",(0,r.kt)("em",{parentName:"p"},"cmake")," and ",(0,r.kt)("em",{parentName:"p"},"openssl")," with your distro's package manager or download from their websites. On Debian and\nUbuntu you will also need the ",(0,r.kt)("a",{parentName:"p",href:"https://packages.debian.org/sid/build-essential"},(0,r.kt)("em",{parentName:"a"},"build-essential"))," package."),(0,r.kt)("h2",{id:"include-the-library-in-your-cargotoml"},"Include the Library in Your ",(0,r.kt)("inlineCode",{parentName:"h2"},"Cargo.toml")),(0,r.kt)("p",null,"The only thing you need to do to start using the library is to add it as dependency in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"{2}","{2}":!0},'[dependencies]\niota-wallet = { git = "https://github.com/iotaledger/wallet.rs", branch = "develop" }\ntokio = "1.21.2"\n')),(0,r.kt)("h2",{id:"use-the-library"},"Use the Library"),(0,r.kt)("p",null,"In order to use the library, you need to create an ",(0,r.kt)("em",{parentName:"p"},"AccountManager"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::path::PathBuf;\n\nuse iota_wallet::{\n    account_manager::AccountManager,\n    iota_client::constants::SHIMMER_COIN_TYPE,\n    secret::{stronghold::StrongholdSecretManager, SecretManager},\n    ClientOptions, Result,\n};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Shouldn\'t be hardcoded in production\n    // mnemonic can be generated with `manager.generate_mnemonic()?` and will be the only way to recover your funds if\n    // you loose the stronghold file/password, so be sure to save it securely\n    let nonsecure_use_of_development_mnemonic = "endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river".to_string();\n    let stronghold_password = "some_hopefully_secure_password";\n\n    // Setup Stronghold secret_manager\n    let mut secret_manager = StrongholdSecretManager::builder()\n        .password(&stronghold_password)\n        .build(PathBuf::from("wallet.stronghold"))?;\n\n    // The mnemonic only needs to be stored the first time\n    secret_manager\n        .store_mnemonic(nonsecure_use_of_development_mnemonic)\n        .await?;\n\n    // Create the accounts_and_addresses manager with the secret_manager and client options\n    let client_options = ClientOptions::new().with_node("http://localhost:14265")?;\n\n    let manager = AccountManager::builder()\n        .with_secret_manager(SecretManager::Stronghold(secret_manager))\n        .with_client_options(client_options)\n        .with_coin_type(SHIMMER_COIN_TYPE)\n        .finish()\n        .await?;\n\n    // Create a new accounts_and_addresses, this will automatically generate an address\n    let account = manager\n        .create_account()\n        .with_alias("Alice".to_string())\n        .finish()\n        .await?;\n\n    println!(\n        "Generated a new accounts_and_addresses with addresses {:?}",\n        account.addresses().await?\n    );\n\n    Ok(())\n}\n')),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"Now that you are up and running, you can get acquainted with the library using\nits ",(0,r.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/run_how_tos"},"how-to guides")," and the\nrepository's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/examples"},"code examples"),"."))}p.isMDXComponent=!0}}]);