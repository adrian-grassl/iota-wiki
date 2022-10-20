"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20372],{3905:(e,A,t)=>{t.d(A,{Zo:()=>l,kt:()=>h});var a=t(67294);function r(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function i(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);A&&(a=a.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?i(Object(t),!0).forEach((function(A){r(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,a,r=function(e,A){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],A.indexOf(t)>=0||(r[t]=e[t]);return r}(e,A);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),s=function(e){var A=a.useContext(g),t=A;return e&&(t="function"==typeof e?e(A):n(n({},A),e)),t},l=function(e){var A=s(e.components);return a.createElement(g.Provider,{value:A},e.children)},w={inlineCode:"code",wrapper:function(e){var A=e.children;return a.createElement(a.Fragment,{},A)}},d=a.forwardRef((function(e,A){var t=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(t),h=r,M=d["".concat(g,".").concat(h)]||d[h]||w[h]||i;return t?a.createElement(M,n(n({ref:A},l),{},{components:t})):a.createElement(M,n({ref:A},l))}));function h(e,A){var t=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var i=t.length,n=new Array(i);n[0]=d;var o={};for(var g in A)hasOwnProperty.call(A,g)&&(o[g]=A[g]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var s=2;s<i;s++)n[s]=t[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27778:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>g,contentTitle:()=>n,default:()=>w,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"Firefly Ledger user guide",description:"Firefly user guide for owners of Ledger Nano hardware wallets"},n=void 0,o={unversionedId:"wallets/firefly/user-guide-ledger",id:"wallets/firefly/user-guide-ledger",title:"Firefly Ledger user guide",description:"Firefly user guide for owners of Ledger Nano hardware wallets",source:"@site/next/use/wallets/firefly/user-guide-ledger.md",sourceDirName:"wallets/firefly",slug:"/wallets/firefly/user-guide-ledger",permalink:"/next/use/wallets/firefly/user-guide-ledger",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/next/use/wallets/firefly/user-guide-ledger.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{title:"Firefly Ledger user guide",description:"Firefly user guide for owners of Ledger Nano hardware wallets"},sidebar:"use",previous:{title:"Firefly user guide",permalink:"/next/use/wallets/firefly/user-guide"},next:{title:"Firefly FAQ",permalink:"/next/use/wallets/firefly/faq-and-troubleshooting"}},g={},s=[{value:"What is a Ledger Nano?",id:"what-is-a-ledger-nano",level:2},{value:"Before you start, make sure",id:"before-you-start-make-sure",level:2},{value:"Install the Shimmer app on your ledger device",id:"install-the-shimmer-app-on-your-ledger-device",level:2},{value:"Creating a new Ledger profile",id:"creating-a-new-ledger-profile",level:3},{value:"Receiving tokens",id:"receiving-tokens",level:3},{value:"Sending tokens",id:"sending-tokens",level:3},{value:"Creating wallets and sending internal transfers",id:"creating-wallets-and-sending-internal-transfers",level:3},{value:"Restoring an existing Ledger profile",id:"restoring-an-existing-ledger-profile",level:3},{value:"Adding a second Ledger device to Firefly",id:"adding-a-second-ledger-device-to-firefly",level:3}],l={toc:s};function w(e){let{components:A,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,i,{components:A,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Firefly is available on Windows, Mac and Linux and supports Ledger Nano X and Ledger Nano S via USB connection. The Ledger Nano integration is straightforward and similar to using Firefly with a non-Ledger profile. This guide serves as an additional resource to help you understand how you can use your ledger to secure your tokens with Firefly and what you need to be aware of when you perform certain actions while using the wallet."),(0,r.kt)("h2",{id:"what-is-a-ledger-nano"},"What is a Ledger Nano?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger Nano")," is a hardware device that connects to your computer via USB (other models are available with bluetooth support but this is not currently supported in Firefly). When you set up your Ledger Nano, you are instructed to safely store a recovery phrase. This recovery phrase is used by the device to sign transactions and generate addresses. It is not possible to extract the recovery phrase (or private keys generated from it) from the Ledger device. So it is important to store your recovery phrase safely. The hardware device creates a boundary between your computer and the private keys needed to access your funds. It provides a level of security that is simply not possible with software alone."),(0,r.kt)("h2",{id:"before-you-start-make-sure"},"Before you start, make sure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("a",{parentName:"li",href:"https://support.ledgerwallet.com/hc/en-us/articles/360000613793"},"initialized")," your Ledger device."),(0,r.kt)("li",{parentName:"ul"},"The latest firmware is ",(0,r.kt)("a",{parentName:"li",href:"https://support.ledgerwallet.com/hc/en-us/articles/360002731113"},"installed"),"."),(0,r.kt)("li",{parentName:"ul"},"Ledger Live is ",(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live/download"},"installed and ready to use"),"."),(0,r.kt)("li",{parentName:"ul"},"You have installed the latest version of Firefly")),(0,r.kt)("h2",{id:"install-the-shimmer-app-on-your-ledger-device"},"Install the Shimmer app on your ledger device"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the Manager tab in Ledger Live."),(0,r.kt)("li",{parentName:"ul"},"Connect and unlock your Ledger device."),(0,r.kt)("li",{parentName:"ul"},"Follow the onscreen instructions and allow Ledger Manager."),(0,r.kt)("li",{parentName:"ul"},"Find and install Shimmer in the app catalog.")),(0,r.kt)("h3",{id:"creating-a-new-ledger-profile"},"Creating a new Ledger profile"),(0,r.kt)("p",null,'Creating a new Ledger profile in Firefly is quick and simple. Once you have downloaded Firefly, open the app and follow the setup instructions. You first need to review and accept the terms and conditions, set a theme (dark or light), and choose a profile name. Select "Create a new wallet".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"setup a wallet ledger",src:t(94502).Z,width:"1600",height:"937"})),(0,r.kt)("p",null,'Press "I want a hardware wallet" to begin the Ledger profile setup process.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create a wallet ledger",src:t(16585).Z,width:"1600",height:"937"})),(0,r.kt)("p",null,"On the next page, you will be asked to set a PIN code. This PIN is used to log in to your wallet and blocks other people from logging in and viewing your balance transaction history. Choose a PIN that only you know. Re-enter your PIN on the next page to confirm."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"set pin ledger",src:t(87551).Z,width:"1600",height:"937"})),(0,r.kt)("p",null,'Now, Firefly will check that your Ledger Nano is connected. Make sure the Shimmer app is open on your device and that Ledger Live is closed. If you have connection problems follow the "Tips if your Ledger isn\'t connecting" guide in Firefly.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"connect ledger ledger",src:t(51019).Z,width:"1600",height:"937"})),(0,r.kt)("p",null,'Hit "Continue", and that\'s all there is to it. It really is that simple. You can now enter the dashboard and begin exploring Firefly.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"setup complete ledger",src:t(65340).Z,width:"1600",height:"937"})),(0,r.kt)("h3",{id:"receiving-tokens"},"Receiving tokens"),(0,r.kt)("p",null,'If you would like to receive funds to your new Ledger profile you can press the "Receive" button on the dashboard.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"generate address ledger",src:t(5708).Z,width:"1600",height:"941"})),(0,r.kt)("p",null,'On this page you can select "Generate address" and Firefly will prompt you to confirm the address matches the one displayed on your Ledger device.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"confirm receive address ledger",src:t(64909).Z,width:"1600",height:"937"})),(0,r.kt)("p",null,'Scroll through the address on your Ledger device. Confirm it matches by pressing both buttons when your Ledger reads "Ok".'),(0,r.kt)("p",null,"Note: This is a security check to ensure that you are connected to the official, secure version of Firefly. It ensures that no malicious software can alter the address you receive to and that it matches the one generated by your Ledger."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"display ledger address",src:t(60571).Z,width:"902",height:"222"}),(0,r.kt)("img",{alt:"okay ledger display",src:t(4101).Z,width:"908",height:"224"})),(0,r.kt)("p",null,"You can now copy the address and share it with a friend or exchange from which you wish to receive tokens. Always make sure the address is the same as the one displayed on your ledger device."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wallet view ledger",src:t(41456).Z,width:"1600",height:"937"})),(0,r.kt)("h3",{id:"sending-tokens"},"Sending tokens"),(0,r.kt)("p",null,'Once you have received tokens to an address, your balance will update and you will be able to view the transaction in the transaction history. To send these tokens, press the "Send" button from the dashboard. Here you can fill in the address you want to send to, enter an amount, and hit "Send".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"send payment ledger",src:t(8940).Z,width:"1600",height:"933"})),(0,r.kt)("p",null,'You will then need to confirm that the full transaction details match what is displayed on your Ledger device. In some cases, where you are not sending the total balance on your address, you will also need to approve a "Remainder address". Scroll through the transaction details on your Ledger. Confirm the details match by pressing both buttons when your Ledger reads "Accept". If they do not match press "Deny".'),(0,r.kt)("p",null,"Note: As with generating addresses, this is a security check to ensure that you are connected to the official, secure version of Firefly. It ensures that no malicious software can alter the contents of your transaction and ensures you are sending the right amount to the correct address."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"confirm remainder address ledger",src:t(32716).Z,width:"1600",height:"895"}),(0,r.kt)("img",{alt:"confirm transaction ledger",src:t(18914).Z,width:"1600",height:"895"}),(0,r.kt)("img",{alt:"dispaly amount ledger",src:t(67697).Z,width:"900",height:"228"}),(0,r.kt)("img",{alt:"display accept ledger",src:t(62405).Z,width:"904",height:"234"})),(0,r.kt)("h3",{id:"creating-wallets-and-sending-internal-transfers"},"Creating wallets and sending internal transfers"),(0,r.kt)("p",null,'Firefly makes it possible to organize your tokens into different wallets within your profile. These tokens are kept separate from one another. Technically speaking, they are stored on addresses generated on different sub-accounts on your Ledger. Press "Create" from the dashboard and choose a name to add another wallet.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multiple wallet view ledger",src:t(32792).Z,width:"1600",height:"895"})),(0,r.kt)("p",null,'With multiple wallets, you can then send between them and split your tokens up to organize them however you like. You can select "Internal Transfer" from the Send view and select which wallet you would like to send to.'),(0,r.kt)("p",null,"Note: Your most recently created wallet must receive funds (i.e. not be empty) before you can create a new one. This ensures that your wallets can be more smoothly recovered if you need to restore your Ledger profile on a new device."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"choose send from wallet ledger",src:t(53953).Z,width:"1600",height:"895"})),(0,r.kt)("h3",{id:"restoring-an-existing-ledger-profile"},"Restoring an existing Ledger profile"),(0,r.kt)("p",null,'If you need to restore an existing Firefly profile with a new device, or you somehow lose access to Firefly, you can plug in your Ledger and restore an existing profile in a few simple steps. To do so, select "Migrate or restore a wallet" in setup and then "I have a Firefly Ledger backup".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"setup a wallet1 ledger",src:t(94502).Z,width:"1600",height:"937"}),(0,r.kt)("img",{alt:"create a wallet1 ledger",src:t(16585).Z,width:"1600",height:"937"})),(0,r.kt)("p",null,"Note: Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. Once a profile is restored, Firefly will sync your transaction history. It will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the Shimmer Tangle."),(0,r.kt)("h3",{id:"adding-a-second-ledger-device-to-firefly"},"Adding a second Ledger device to Firefly"),(0,r.kt)("p",null,"It is possible to have more than one Ledger device with the same Firefly app. You can add another device by creating an additional profile from the login page. Firefly will always check that the right device is connected and you will receive an error message if you try to generate an address or send a transaction with the wrong device."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ledger multiple profile view",src:t(79475).Z,width:"1600",height:"895"})))}w.isMDXComponent=!0},53953:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/choose_send_from_wallet_ledger-da00fa034fc4b40f7a6b1fd734a6d434.png"},64909:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/confirm_receive_address_ledger-914cda78d646a5160521824a691c1a80.png"},32716:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/confirm_remainder_address_ledger-8f21952cfa57592e3dfd34bda869331b.png"},18914:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/confirm_transaction_ledger-a43d4a1bdbfb3ea12b15bf768e20219d.png"},51019:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/connect_ledger-4407c2073fc1ceae98de50ee002a0db0.png"},16585:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/create_a_wallet_ledger-9c8e332b5d967cd14d1db5969b8de93e.png"},67697:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,UklGRioBAABXRUJQVlA4TB0BAAAvg8M4ABcgEEhS2B92jYEQCyaTyB+0Z/4DtwZ0Y9t2bUXTmajoprNQ0WGT5lPF/R/RfQteRP8n4PvT/0///xPyB+5PkkzIhIQkISEhSZIESDIhISFJMjNJSBJISO7+dmIgSfKhBGjyEPkQCckJgyYP0LZbbZvXaEKb3Nr8EbRJ284PB01edH+NaXL+eW2f/vsT1Dz/tM0DNM8w2WwT2oRmk2yzbfN8kUdpl9JsNmk275hNmhwxL/IskHkY6b52MV8GCclJICGPcvl6kMlJ4KsAeYQ2afMOupCXQnIW+MBxm0D30Sa02R20eYyrZ4vX+um/f8prAs1rTaAJNK80gSZ5TsmEJC+SJEmSfOTAJws4Vp54TLK/sjz9//T/c7QA"},62405:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,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"},60571:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,UklGRmoBAABXRUJQVlA4TF0BAAAvhUM3ABcgEEhS2B92jYEQCyaTyB+0Z/4DtwaUI0lyJEn2Xv6UyWUzsrNyFt/lgIj+T8D3v99vX/778t+nZDqplEqlVKlUSqVSpZRKKaWUUqlSSievEL1FtJU7g0GhrTBQQeFB9CooVHRbvPXoV/qJpF/ul//+zeAJDNhiA05BBQtU3BD0lKIodrbpNEWTiuYl0VKEE5ZFVLwwCwqOtGF5JViYQ7QXNKJFRMFoVaO2UJkbkYWrQFbFXmZRHKoNwaAym4xiL5VuApVT1RN60ZGgoPkGVEk3gaZjtNdyRQ+ao1Z0rLWugjahB2hCA09YGVBQoQqqoFcYyxvh7anYaJN+ZCo+gsksKvppMrs6ftFf/vunY+GRDZyAPQxUvHBpOFU5UD2olKaycF8YZqUyFFYqFcMLFE7putBIJUlJpYpKklKqVKq0HtjQdaEzelXOGRYqdU/8bX7578t/H7wBAA=="},5708:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/generate_address_ledger-ce3f926da72f0a5117e28ac14627e930.png"},79475:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/ledger_multiple_profile_view-2d0f4122f11e062c3db0f0530021d0e1.png"},32792:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/multiple_wallet_view_ledger-3b23457f00c6516ab9765f429492243e.png"},4101:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,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"},8940:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/send_payment_ledger-ef071d4404107d7cd88ff86d4d3cd070.png"},87551:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/set_pin_ledger-c84773ffaabdfe2a34d051cb6450cac0.png"},94502:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/setup_a_wallet_ledger-aaf2865292faa61964dd790dc37d18ba.png"},65340:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/setup_complete_ledger-3281492dcfab9954de1dd7603ae142f4.png"},41456:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/wallet_view_ledger-75b18695517f8cad9693e7d4310f2897.png"}}]);