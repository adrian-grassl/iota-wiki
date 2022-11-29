"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[51147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={description:"The manual peering APIs allows you to add, get and remove the list of known peers of the node.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","known peer","peer","public key","gossip port"]},i="Manual Peering API methods",o={unversionedId:"apis/manual_peering",id:"apis/manual_peering",title:"Manual Peering API methods",description:"The manual peering APIs allows you to add, get and remove the list of known peers of the node.",source:"@site/next/external/goshimmer/documentation/docs/apis/manual_peering.md",sourceDirName:"apis",slug:"/apis/manual_peering",permalink:"/next/goshimmer/apis/manual_peering",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/apis/manual_peering.md",tags:[],version:"current",frontMatter:{description:"The manual peering APIs allows you to add, get and remove the list of known peers of the node.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","known peer","peer","public key","gossip port"]},sidebar:"docs",previous:{title:"Peering API Methods",permalink:"/next/goshimmer/apis/autopeering"},next:{title:"Communication Layer APIs",permalink:"/next/goshimmer/apis/communication"}},p={},s=[{value:"POST <code>/manualpeering/peers</code>",id:"post-manualpeeringpeers",level:2},{value:"Request Body",id:"request-body",level:3},{value:"Description",id:"description",level:4},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"cURL",id:"curl",level:4},{value:"Client library",id:"client-library",level:3},{value:"<code>AddManualPeers</code>",id:"addmanualpeers",level:4},{value:"GET <code>/manualpeering/peers</code>",id:"get-manualpeeringpeers",level:2},{value:"Request Body",id:"request-body-1",level:3},{value:"Description",id:"description-1",level:4},{value:"Response",id:"response-1",level:3},{value:"Description",id:"description-2",level:4},{value:"Examples",id:"examples-1",level:3},{value:"cURL",id:"curl-1",level:4},{value:"Client library",id:"client-library-1",level:3},{value:"<code>GetManualPeers</code>",id:"getmanualpeers",level:4},{value:"DELETE <code>/manualpeering/peers</code>",id:"delete-manualpeeringpeers",level:2},{value:"Request Body",id:"request-body-2",level:3},{value:"Description",id:"description-3",level:4},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"cURL",id:"curl-2",level:4},{value:"Client library",id:"client-library-2",level:3},{value:"<code>RemoveManualPeers</code>",id:"removemanualpeers",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manual-peering-api-methods"},"Manual Peering API methods"),(0,r.kt)("p",null,"The manual peering APIs allow managing the list of known peers of the node."),(0,r.kt)("p",null,"HTTP APIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST ",(0,r.kt)("a",{parentName:"li",href:"#post-manualpeeringpeers"},"/manualpeering/peers")),(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("a",{parentName:"li",href:"#get-manualpeeringpeers"},"/manualpeering/peers")),(0,r.kt)("li",{parentName:"ul"},"DELETE ",(0,r.kt)("a",{parentName:"li",href:"#delete-manualpeeringpeers"},"/manualpeering/peers"))),(0,r.kt)("p",null,"Client lib APIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#addmanualpeers"},"AddManualPeers()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getmanualpeers"},"GetManualPeers()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#removemanualpeers"},"RemoveManualPeers()"))),(0,r.kt)("h2",{id:"post-manualpeeringpeers"},"POST ",(0,r.kt)("inlineCode",{parentName:"h2"},"/manualpeering/peers")),(0,r.kt)("p",null,"Add peers to the list of known peers of the node."),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "publicKey": "CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3",\n    "address": "127.0.0.1:14666"\n  }\n]\n')),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Public key of the peer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"IP address of the peer's node and its gossip port.")))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"HTTP status code: 204 No Content"),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"curl"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/manualpeering/peers\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'[\n    {\n        "publicKey": "CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3",\n        "address": "172.19.0.3:14666"\n    }\n]\'\n')),(0,r.kt)("h3",{id:"client-library"},"Client library"),(0,r.kt)("h4",{id:"addmanualpeers"},(0,r.kt)("inlineCode",{parentName:"h4"},"AddManualPeers")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/goshimmer/packages/manualpeering"\n\npeersToAdd := []*manualpeering.KnownPeerToAdd{{PublicKey: publicKey, Address: address}}\nerr := goshimAPI.AddManualPeers(peersToAdd)\nif err != nil {\n// return error\n}\n')),(0,r.kt)("h2",{id:"get-manualpeeringpeers"},"GET ",(0,r.kt)("inlineCode",{parentName:"h2"},"/manualpeering/peers")),(0,r.kt)("p",null,"Get the list of all known peers of the node."),(0,r.kt)("h3",{id:"request-body-1"},"Request Body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "onlyConnected": true\n}\n')),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onlyConnected")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional, if set to true only peers with established connection will be returned.")))),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("p",null,"HTTP status code: 200 OK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "publicKey": "CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3",\n    "address": "127.0.0.1:14666",\n    "connectionDirection": "inbound",\n    "connectionStatus": "connected"\n  }\n]\n')),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The public key of the peer node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"IP address of the peer's node and its gossip port.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"connectionDirection")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Enum, possible values: "inbound", "outbound". Inbound means that the local node accepts the connection. On the other side, the other peer node dials, and it will have "outbound" connectionDirection.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"connectionStatus")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Enum, possible values: "disconnected", "connected". Whether the actual TCP connection has been established between peers.')))),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("h4",{id:"curl-1"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'http://localhost:8080/manualpeering/peers' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"onlyConnected\": true\n}'\n")),(0,r.kt)("h3",{id:"client-library-1"},"Client library"),(0,r.kt)("h4",{id:"getmanualpeers"},(0,r.kt)("inlineCode",{parentName:"h4"},"GetManualPeers")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/goshimmer/packages/manualpeering"\n\npeers, err := goshimAPI.GetManualPeers(manualpeering.WithOnlyConnectedPeers())\nif err != nil {\n// return error\n}\nfmt.Println(peers)\n')),(0,r.kt)("h2",{id:"delete-manualpeeringpeers"},"DELETE ",(0,r.kt)("inlineCode",{parentName:"h2"},"/manualpeering/peers")),(0,r.kt)("p",null,"Remove peers from the list of known peers of the node."),(0,r.kt)("h3",{id:"request-body-2"},"Request Body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "publicKey": "CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3"\n  }\n]\n')),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Public key of the peer to remove from the list.")))),(0,r.kt)("h3",{id:"response-2"},"Response"),(0,r.kt)("p",null,"HTTP status code: 204 No Content"),(0,r.kt)("h3",{id:"examples-2"},"Examples"),(0,r.kt)("h4",{id:"curl-2"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request DELETE 'http://localhost:8080/manualpeering/peers' \\\n--header 'Content-Type: application/json' \\\n--data-raw '[\n    {\n        \"publicKey\": \"8qN1yD95fhbfDZtKX49RYFEXqej5fvsXJ2NPmF1LCqbd\"\n    }\n]'\n")),(0,r.kt)("h3",{id:"client-library-2"},"Client library"),(0,r.kt)("h4",{id:"removemanualpeers"},(0,r.kt)("inlineCode",{parentName:"h4"},"RemoveManualPeers")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/hive.go/core/crypto/ed25519"\nimport "github.com/iotaledger/goshimmer/packages/manualpeering"\n\npublicKeysToRemove := []ed25519.PublicKey{publicKey1, publicKey2}\nerr := goshimAPI.RemoveManualPeers(publicKeysToRemove)\nif err != nil {\n// return error\n}\n')))}u.isMDXComponent=!0}}]);