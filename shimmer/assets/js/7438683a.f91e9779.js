"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[15656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,p=m["".concat(s,".").concat(g)]||m[g]||d[g]||o;return n?r.createElement(p,l(l({ref:t},u),{},{components:n})):r.createElement(p,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={description:"How to run and use golangci-lint to lint your code. How to build an image with the buildkit docker engine.",image:"/img/logo/goshimmer_light.png",keywords:["port config","golang","lint","error handling","golangci-lint","docker","buildkit","image","configuration json"]},l="golangci-lint",a={unversionedId:"teamresources/local_development",id:"teamresources/local_development",title:"golangci-lint",description:"How to run and use golangci-lint to lint your code. How to build an image with the buildkit docker engine.",source:"@site/shimmer/external/goshimmer/documentation/docs/teamresources/local_development.md",sourceDirName:"teamresources",slug:"/teamresources/local_development",permalink:"/shimmer/goshimmer/teamresources/local_development",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/shimmer/external/goshimmer/documentation/docs/teamresources/local_development.md",tags:[],version:"current",frontMatter:{description:"How to run and use golangci-lint to lint your code. How to build an image with the buildkit docker engine.",image:"/img/logo/goshimmer_light.png",keywords:["port config","golang","lint","error handling","golangci-lint","docker","buildkit","image","configuration json"]},sidebar:"docs",previous:{title:"Code Guidelines",permalink:"/shimmer/goshimmer/teamresources/guidelines"},next:{title:"GoShimmer Analysis Dashboard",permalink:"/shimmer/goshimmer/teamresources/analysis_dashboard"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Run",id:"how-to-run",level:2},{value:"Dealing With Errors",id:"dealing-with-errors",level:2},{value:"Building an Image",id:"building-an-image",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"golangci-lint"},"golangci-lint"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We use golangci-lint v1.38.0 to run various types of linters on our codebase. All settings are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},".golangci.yml")," file.\ngolangci-lint is very flexible and customizable. Check the docs to see how configuration works ",(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/configuration/"},"https://golangci-lint.run/usage/configuration/")),(0,i.kt)("h2",{id:"how-to-run"},"How to Run"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the golangci-lint program ",(0,i.kt)("a",{parentName:"li",href:"https://golangci-lint.run/usage/install/"},"https://golangci-lint.run/usage/install/")),(0,i.kt)("li",{parentName:"ol"},"In the project root: ",(0,i.kt)("inlineCode",{parentName:"li"},"golangci-lint run"))),(0,i.kt)("h2",{id:"dealing-with-errors"},"Dealing With Errors"),(0,i.kt)("p",null,"Most of the errors that golangci-lint reports are errors from formatting linters like ",(0,i.kt)("inlineCode",{parentName:"p"},"gofmt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"goimports")," and etc. You can easily auto-fix them with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"golangci-lint run --fix\n")),(0,i.kt)("p",null,"Here is the full list of linters that support the auto-fix feature: ",(0,i.kt)("inlineCode",{parentName:"p"},"gofmt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gofumpt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"goimports"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"misspell"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"whitespace"),"."),(0,i.kt)("p",null,"In case it's not a formatting error, do your best to fix it first. If you think it's a false alarm there are a few ways how to disable that check in golangci-lint:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exclude the check by the error text regexp. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Error return value of .((os\\.)?std(out|err)\\..*|.*Close|.*Flush|os\\.Remove(All)?|.*print(f|ln)?|os\\.(Un)?Setenv). is not checked'"),"."),(0,i.kt)("li",{parentName:"ul"},"Exclude the entire linter for that file type. Example: don't run ",(0,i.kt)("inlineCode",{parentName:"li"},"errcheck")," in Go test files."),(0,i.kt)("li",{parentName:"ul"},"Change linter settings to make it more relaxed. "),(0,i.kt)("li",{parentName:"ul"},"Disable that particular error occurrence: use a comment with a special ",(0,i.kt)("inlineCode",{parentName:"li"},"nolint")," directive next to the place in code with the error. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"// nolint: errcheck"),".")),(0,i.kt)("h1",{id:"docker"},"Docker"),(0,i.kt)("h2",{id:"building-an-image"},"Building an Image"),(0,i.kt)("p",null,"We use the new buildkit docker engine to build ",(0,i.kt)("inlineCode",{parentName:"p"},"iotaledger/goshimmer")," image.\nThe minimum required docker version that supports this feature is ",(0,i.kt)("inlineCode",{parentName:"p"},"18.09"),".\nTo enable buildkit engine in your local docker add the following to the docker configuration json file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "features": { "buildkit": true } }\n')),(0,i.kt)("p",null,"Check this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/develop/develop-images/build_enhancements/#to-enable-buildkit-builds"},"article")," for details on how to do that."),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you already enabled the buildkit engine in the configuration json file as described above and docker version is ",(0,i.kt)("inlineCode",{parentName:"p"},"18.09")," or higher,\ntry to set the following env variables when building the docker image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"DOCKER_BUILDKIT=1 COMPOSE_DOCKER_CLI_BUILD=1 docker build -t iotaledger/goshimmer .\n")))}d.isMDXComponent=!0}}]);