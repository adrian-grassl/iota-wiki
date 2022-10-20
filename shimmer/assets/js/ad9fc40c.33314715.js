"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[56194],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=d(a),h=n,k=c["".concat(p,".").concat(h)]||c[h]||s[h]||o;return a?r.createElement(k,l(l({ref:e},m),{},{components:a})):r.createElement(k,l({ref:e},m))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66539:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={description:"Using the read-evaluate-print loop (REPL) to work with Stronghold interactively",image:"/img/logo/Stronghold_icon.png",keywords:["example","repl","client crate"]},l="REPL",i={unversionedId:"how_tos/repl/repl",id:"how_tos/repl/repl",title:"REPL",description:"Using the read-evaluate-print loop (REPL) to work with Stronghold interactively",source:"@site/shimmer/external/stronghold.rs/develop/documentation/docs/how_tos/repl/repl.mdx",sourceDirName:"how_tos/repl",slug:"/how_tos/repl/",permalink:"/shimmer/stronghold.rs/how_tos/repl/",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/shimmer/external/stronghold.rs/develop/documentation/docs/how_tos/repl/repl.mdx",tags:[],version:"current",frontMatter:{description:"Using the read-evaluate-print loop (REPL) to work with Stronghold interactively",image:"/img/logo/Stronghold_icon.png",keywords:["example","repl","client crate"]},sidebar:"mySidebar",previous:{title:"Recover a BIP39 Seed with a Mnemonic and Optional Passphrase",permalink:"/shimmer/stronghold.rs/how_tos/cli/recover_seed_with_mnemonic"},next:{title:"Overview",permalink:"/shimmer/stronghold.rs/reference/overview"}},p={},d=[{value:"Available Commands",id:"available-commands",level:3}],m={toc:d};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"repl"},"REPL"),(0,n.kt)("p",null,"Stronghold features a simple read-evaluate print loop (REPL) to showcase basic operations from an interaction command shell-like environment. The REPL maintains a state of a running Stronghold instance to store secrets or configuration data. "),(0,n.kt)("p",null,"You can start REPL from a terminal inside the root folder of Stronghold by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run --example repl\n")),(0,n.kt)("h3",{id:"available-commands"},"Available Commands"),(0,n.kt)("admonition",{title:"Help Messages",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Each command will show a short help message, if the entered command or parameters are incorrect.")),(0,n.kt)("p",null,"You can use the following commands:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"help"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display a help message.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"init"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"client_path")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initializes the underlying Stronghold system.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"keygen"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key_type")," ",(0,n.kt)("inlineCode",{parentName:"td"},"vault_path")," ",(0,n.kt)("inlineCode",{parentName:"td"},"record_path")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Generates a "ed25510" or "x25519" key at a location composed of "vault_path" and "record_path".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"backup"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path_to_snapshot_location")," ",(0,n.kt)("inlineCode",{parentName:"td"},"passphrase")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Writes the current Stronghold state to "path_to_snapshot_location" (a path) with "passphrase".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"restore"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path_to_snapshot_location")," ",(0,n.kt)("inlineCode",{parentName:"td"},"passphrase")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Loads the current Stronghold state from "path_to_snapshot_location" (a path) with "passphrase".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"slip10gen"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"vault_path")," ",(0,n.kt)("inlineCode",{parentName:"td"},"record_path")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"slip10derive"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"chain")," ",(0,n.kt)("inlineCode",{parentName:"td"},"vault_path_origin")," ",(0,n.kt)("inlineCode",{parentName:"td"},"record_path_origin")," ",(0,n.kt)("inlineCode",{parentName:"td"},"vault_path_derive")," ",(0,n.kt)("inlineCode",{parentName:"td"},"record_path_derive")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Derives a new key from old location and stores it into the new location. The key will be derived from the provided chain code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mnemonic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Creates a BIP39 mnemonic and generates a seed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bip39restore"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"quit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exits the REPL.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"checkrecord"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"vault_path")," ",(0,n.kt)("inlineCode",{parentName:"td"},"record_path")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Checks a record inside the vault. The command will return ",(0,n.kt)("inlineCode",{parentName:"td"},"yes")," if the record exists or ",(0,n.kt)("inlineCode",{parentName:"td"},"no")," if it doesn't.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"checkvault"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"vault_path")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Checks for the presence of a vault.")))))}s.isMDXComponent=!0}}]);