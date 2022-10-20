"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26780],{3905:(e,o,n)=>{n.d(o,{Zo:()=>l,kt:()=>m});var t=n(67294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),p=function(e){var o=t.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},l=function(e){var o=p(e.components);return t.createElement(c.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?t.createElement(h,i(i({ref:o},l),{},{components:n})):t.createElement(h,i({ref:o},l))}));function m(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52218:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(87462),r=(n(67294),n(3905));const a={description:"Learn how to install and run a Hornet node using Docker Compose.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Linux","Install","Docker Compose","Build","how to"]},i="Using Docker Compose",s={unversionedId:"how_tos/using_docker_compose",id:"how_tos/using_docker_compose",title:"Using Docker Compose",description:"Learn how to install and run a Hornet node using Docker Compose.",source:"@site/iota/external/hornet/production/documentation/docs/how_tos/using_docker_compose.md",sourceDirName:"how_tos",slug:"/how_tos/using_docker_compose",permalink:"/hornet/how_tos/using_docker_compose",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/production/documentation/iota/external/hornet/production/documentation/docs/how_tos/using_docker_compose.md",tags:[],version:"current",frontMatter:{description:"Learn how to install and run a Hornet node using Docker Compose.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Linux","Install","Docker Compose","Build","how to"]},sidebar:"mySidebar",previous:{title:"Using Docker",permalink:"/hornet/how_tos/using_docker"},next:{title:"Bootstrapping the Chrysalis Phase 2 Hornet Node From the Genesis Snapshot",permalink:"/hornet/how_tos/bootstrap_from_a_genesis_snapshot"}},c={},p=[{value:"Using Your Own Docker Compose File For Running Hornet",id:"using-your-own-docker-compose-file-for-running-hornet",level:2},{value:"Build Your Own Image Using Docker Compose",id:"build-your-own-image-using-docker-compose",level:2}],l={toc:p};function u(e){let{components:o,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},l,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-docker-compose"},"Using Docker Compose"),(0,r.kt)("p",null,"Make sure that you have read ",(0,r.kt)("a",{parentName:"p",href:"/hornet/how_tos/using_docker"},"Using Docker")," before you continue reading as this article is for advanced users. You can find more information on Docker Compose in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"official Docker Compose documentation"),"."),(0,r.kt)("h2",{id:"using-your-own-docker-compose-file-for-running-hornet"},"Using Your Own Docker Compose File For Running Hornet"),(0,r.kt)("p",null,"Docker Compose is a tool on top of the Docker engine that help you to define Docker parameters in a structured way using a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file. You can create and start the container with a single ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," command based on your configuration."),(0,r.kt)("p",null,"To do so, you will need to create ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," in the same directory as described in the ",(0,r.kt)("a",{parentName:"p",href:"/hornet/how_tos/using_docker"},"Using Docker")," article:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext{5}"},".\n\u251c\u2500\u2500 config.json\n\u251c\u2500\u2500 peering.json\n\u251c\u2500\u2500 profiles.json\n\u251c\u2500\u2500 docker-compose.yml      <NEWLY ADDED FILE>\n\u251c\u2500\u2500 mainnetdb\n\u251c\u2500\u2500 p2pstore\n\u2514\u2500\u2500 snapshots\n    \u2514\u2500\u2500 mainnet\n")),(0,r.kt)("p",null,"The docker-compose.yml file should have the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"version: '3'\nservices:\n  hornet:\n    container_name: hornet\n    image: gohornet/hornet:latest\n    network_mode: host\n    restart: always\n    ulimits:\n      nofile:\n        soft: 8192\n        hard: 8192\n    stop_grace_period: 5m\n    cap_drop:\n      - ALL\n    volumes:\n      - ./config.json:/app/config.json:ro\n      - ./peering.json:/app/peering.json\n      - ./profiles.json:/app/profiles.json:ro\n      - ./mainnetdb:/app/mainnetdb\n      - ./p2pstore:/app/p2pstore\n      - ./snapshots/mainnet:/app/snapshots/mainnet\n")),(0,r.kt)("p",null,"You can run the following command in the current directory to create and start a new Hornet container in detached mode (as daemon):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")),(0,r.kt)("p",null,"You can find more details on how to configure Hornet in the ",(0,r.kt)("a",{parentName:"p",href:"/hornet/how_tos/post_installation"},"post installation")," section."),(0,r.kt)("h2",{id:"build-your-own-image-using-docker-compose"},"Build Your Own Image Using Docker Compose"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Follow this step only if you want to run Hornet via Docker Compose.")),(0,r.kt)("p",null,"If you are using any architecture other than ",(0,r.kt)("inlineCode",{parentName:"p"},"amd64/x86_64"),", you should edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and set the correct architecture where noted."),(0,r.kt)("p",null,"You can run the following command to build the image and run Hornet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up\n")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL+C")," to stop the container."),(0,r.kt)("p",null,"You can add ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," to run detached."),(0,r.kt)("p",null,"To gracefully stop the container, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose down\n")))}u.isMDXComponent=!0}}]);