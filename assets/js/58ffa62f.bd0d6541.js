"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),k=r,h=p["".concat(i,".").concat(k)]||p[k]||d[k]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52154:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={},o="Send IOTA Tokens with Javascript",s={type:"mdx",permalink:"/tutorials/send-iota-tokens-with-javascript",source:"@site/tutorials/pages/send-iota-tokens-with-javascript.md",title:"Send IOTA Tokens with Javascript",description:"In this tutorial you will learn how to send IOTA Tokens in the Devnet. We will go through the following steps:",frontMatter:{}},i=[{value:"0. Setup Development Environment.",id:"0-setup-development-environment",level:2},{value:"1. Create and save your seed.",id:"1-create-and-save-your-seed",level:2},{value:"2. Get your first address.",id:"2-get-your-first-address",level:2},{value:"3. Get some Devnet Tokens.",id:"3-get-some-devnet-tokens",level:2},{value:"4. Read your balance",id:"4-read-your-balance",level:2},{value:"5. Send IOTA Tokens.",id:"5-send-iota-tokens",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-iota-tokens-with-javascript"},"Send IOTA Tokens with Javascript"),(0,r.kt)("p",null,"In this tutorial you will learn how to send IOTA Tokens in the Devnet. We will go through the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create and save your seed."),(0,r.kt)("li",{parentName:"ul"},"Get your first address."),(0,r.kt)("li",{parentName:"ul"},"Get some Devnet Tokens."),(0,r.kt)("li",{parentName:"ul"},"Read your balance."),(0,r.kt)("li",{parentName:"ul"},"And finally, send the Tokens to another address.")),(0,r.kt)("p",null,"And now, let's start with preparing the development environment. This tutorial assumes that you have ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," installed."),(0,r.kt)("h2",{id:"0-setup-development-environment"},"0. Setup Development Environment."),(0,r.kt)("p",null,"First let's create a new folder for the tutorial in your favourite location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir send-iota-tutorial\ncd send-iota-tutorial\n")),(0,r.kt)("p",null,"Now we need to run the Node.js initializer to configure the project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init --yes\n")),(0,r.kt)("p",null,"Next you need to install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/dev/bindings/nodejs"},"iota client library"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @iota/client\n")),(0,r.kt)("p",null,"When the previous call failed with ",(0,r.kt)("inlineCode",{parentName:"p"},"'tsc' is not recognized as an internal or external command, operable program or batch file.")," it could help to install the typescript package globally by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install typescript@latest -g\n")),(0,r.kt)("h2",{id:"1-create-and-save-your-seed"},"1. Create and save your seed."),(0,r.kt)("p",null,"Create a new directory, a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"create_seed.js")," and add the content below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir scripts\ntouch scripts/create_seed.js\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const crypto = require('crypto');\nconst seed = crypto\n  .createHash('sha256')\n  .update(crypto.randomBytes(256))\n  .digest('hex');\nconsole.log('Seed:', seed);\n")),(0,r.kt)("p",null,"Let's run this code and watch your console!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node scripts/create_seed.js\n")),(0,r.kt)("p",null,"You should see something like this, with another seed:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Seed: ef4593558d0c3ed9e3f7a2de766d33093cd72372c800fa47ab5765c43ca006b5")),(0,r.kt)("p",null,"You will need to add this seed in the following files!"),(0,r.kt)("h2",{id:"2-get-your-first-address"},"2. Get your first address."),(0,r.kt)("p",null,"Next we want to generate an address, where we want to deposit some IOTA Devnet Tokens."),(0,r.kt)("p",null,"Just create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"get_address.js")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," directory and add the content below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch scripts/get_address.js\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"require('dotenv').config();\n\nasync function run() {\n  const { ClientBuilder } = require('@iota/client');\n\n  // Get the seed from environment variable\n  const IOTA_SEED_SECRET =\n    'ef4593558d0c3ed9e3f7a2de766d33093cd72372c800fa47ab5765c43ca006b5';\n\n  // client will connect to testnet by default\n  const client = new ClientBuilder().build();\n\n  const addresses = await client\n    .getAddresses(IOTA_SEED_SECRET)\n    .accountIndex(0)\n    .range(0, 5)\n    .get();\n\n  console.log('Your first address:', addresses[0]);\n}\n\nrun();\n")),(0,r.kt)("p",null,"If we run this script, you should see your first address in your console!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node scripts/get_address.js\n")),(0,r.kt)("p",null,"This prints something like this:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Your first address: atoi1qzuc28hhwn7hdzn8xds5spvm093qa7chkj229nzedt6fkqvzxcdk6umqp07")),(0,r.kt)("p",null,"Tip: In Devnet addresses begin with ",(0,r.kt)("inlineCode",{parentName:"p"},"atoi..."),", whereas in the Mainnet they begin with \xecota...`."),(0,r.kt)("h2",{id:"3-get-some-devnet-tokens"},"3. Get some Devnet Tokens."),(0,r.kt)("p",null,"Now we need to visit the Faucet to get some tokens. Just input your address and request some tokens!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"IOTA DEVNET FAUCET: ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.chrysalis-devnet.iota.cafe/"},"https://faucet.chrysalis-devnet.iota.cafe/"))),(0,r.kt)("p",null,"Does it work? Let's check our address balance!"),(0,r.kt)("h2",{id:"4-read-your-balance"},"4. Read your balance"),(0,r.kt)("p",null,"Again, let's create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"get_balance.js")," and add the code below!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch scripts/get_balance.js\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function run() {\n  const { ClientBuilder } = require('@iota/client');\n\n  // client will connect to testnet by default\n  const client = new ClientBuilder().build();\n\n  const YOUR_ADDRESS =\n    'atoi1qzuc28hhwn7hdzn8xds5spvm093qa7chkj229nzedt6fkqvzxcdk6umqp07';\n\n  // Get the balance of a single known address\n  const response = await client.getAddressBalance(YOUR_ADDRESS);\n\n  console.log('Your balance: ' + response.balance);\n}\n\nrun();\n")),(0,r.kt)("p",null,"Just run the code and you will see your balance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node scripts/get_balance.js\n")),(0,r.kt)("p",null,"If it shows a balance of zero, wait a bit."),(0,r.kt)("p",null,"Now you should have 1000000 IOTA Tokens, or 1 Million IOTA (1MI)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Your balance: 100000000")),(0,r.kt)("h2",{id:"5-send-iota-tokens"},"5. Send IOTA Tokens."),(0,r.kt)("p",null,"The last step is to send the tokens to another address, lets create a file for that and add the content below!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch scripts/send_iota.js\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function run() {\n  const { ClientBuilder } = require('@iota/client');\n\n  // Input your seed here\n  const IOTA_SEED_SECRET =\n    'ef4593558d0c3ed9e3f7a2de766d33093cd72372c800fa47ab5765c43ca006b5';\n\n  // client will connect to testnet by default\n  const client = new ClientBuilder().build();\n\n  const message = await client\n    .message()\n    .seed(IOTA_SEED_SECRET)\n    .output(\n      'atoi1qqydc70mpjdvl8l2wyseaseqwzhmedzzxrn4l9g2c8wdcsmhldz0ulwjxpz',\n      1000000,\n    )\n    .submit();\n\n  console.log(message);\n}\n\nrun();\n")),(0,r.kt)("p",null,"This code sends some IOTA Devnet Tokens to an public address."),(0,r.kt)("p",null,"Run it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node src/send_iota.js\n")),(0,r.kt)("p",null,"You can see the transaction if you follow the link in the console output."),(0,r.kt)("p",null,"If you check your balance again, it should be less than before!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Your balance: 99000000")),(0,r.kt)("p",null,"Congratulations! You sent some IOTA Devnet Tokens!"))}u.isMDXComponent=!0}}]);