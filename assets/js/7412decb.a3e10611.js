"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[50021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={keywords:["reference"],description:"The technical writer's guide for IOTA Wiki.",image:"/img/iota-wiki.png"},o="Formatting",l={unversionedId:"contribute-to-wiki/reference/style/formatting",id:"contribute-to-wiki/reference/style/formatting",title:"Formatting",description:"The technical writer's guide for IOTA Wiki.",source:"@site/iota/community/contribute-to-wiki/reference/style/formatting.md",sourceDirName:"contribute-to-wiki/reference/style",slug:"/contribute-to-wiki/reference/style/formatting",permalink:"/community/contribute-to-wiki/reference/style/formatting",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/iota/community/contribute-to-wiki/reference/style/formatting.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{keywords:["reference"],description:"The technical writer's guide for IOTA Wiki.",image:"/img/iota-wiki.png"},sidebar:"learn",previous:{title:"Language Mechanics",permalink:"/community/contribute-to-wiki/reference/style/mechanics"},next:{title:"Overview",permalink:"/community/contribute-to-wiki/reference/structure/overview"}},s={},p=[{value:"Headings",id:"headings",level:2},{value:"Inline Formatting",id:"inline-formatting",level:2},{value:"UI Elements",id:"ui-elements",level:3},{value:"Links",id:"links",level:3},{value:"Emphasis",id:"emphasis",level:3},{value:"Inline Code",id:"inline-code",level:3},{value:"Freestanding Elements",id:"freestanding-elements",level:2},{value:"Attributions",id:"attributions",level:3},{value:"Paragraph Quotes",id:"paragraph-quotes",level:3},{value:"Lists",id:"lists",level:3},{value:"Admonitions",id:"admonitions",level:3},{value:"Code Blocks",id:"code-blocks",level:3},{value:"Math Formulas",id:"math-formulas",level:3},{value:"Images",id:"images",level:3},{value:"Videos, Audio Recordings, and Animations",id:"videos-audio-recordings-and-animations",level:3},{value:"Tables",id:"tables",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"formatting"},"Formatting"),(0,i.kt)("p",null,"Markdown only ",(0,i.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"specifies")," what text elements are, but not how they look like. The final rendering could be affected by a rendering engine that could come from Docusaurus, IDE, or GitHub, a browser extension that changes CSS, or someone could read a raw .md file or copy parts of your article as a plain text via messenger. Some users do not ",(0,i.kt)("em",{parentName:"p"},"see")," text at all and rely on screen readers."),(0,i.kt)("p",null,"Never rely on rendering in your work and make sure that everyone can read your article with no formatting at all. For example, use ",(0,i.kt)("em",{parentName:"p"},"weak")," and ",(0,i.kt)("strong",{parentName:"p"},"strong")," emphasis, but never expect it to always be in italics and bold, respectively."),(0,i.kt)("p",null,"Do not try to fix a shoddy writing with formatting: it will not work. Make sure that your prompt sounds great as a plain text, and apply minimal formatting to support it."),(0,i.kt)("h2",{id:"headings"},"Headings"),(0,i.kt)("p",null,"Always provide a title to a page with the top-level heading (",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"). Never skip heading levels: a sub-subsection (",(0,i.kt)("inlineCode",{parentName:"p"},"####"),") cannot lie directly within a section (",(0,i.kt)("inlineCode",{parentName:"p"},"##"),"). Either convert it into a subsection (",(0,i.kt)("inlineCode",{parentName:"p"},"###"),"), or introduce a parent subsection."),(0,i.kt)("p",null,"Make sure that the reader could navigate the article just by glancing over its headings. Try to use unique titles for at least first three levels, so writers could link sections of your article directly."),(0,i.kt)("p",null,"Capitalize headings from the first to the third level as described in the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Title_case#Chicago_Manual_of_Style"},"Chicago Manual of Style"),". When in doubt, use the ",(0,i.kt)("a",{parentName:"p",href:"https://capitalizemytitle.com/style/Chicago/"},"Capitalize My Title")," tool."),(0,i.kt)("p",null,"Put lower-level headings in the sentence case."),(0,i.kt)("h2",{id:"inline-formatting"},"Inline Formatting"),(0,i.kt)("h3",{id:"ui-elements"},"UI Elements"),(0,i.kt)("p",null,"Always use ",(0,i.kt)("a",{parentName:"p",href:"#emphasis"},"weak emphasis")," for ",(0,i.kt)("a",{parentName:"p",href:"/community/contribute-to-wiki/reference/style/form#ui-elements"},"UI elements"),"."),(0,i.kt)("h3",{id:"links"},"Links"),(0,i.kt)("p",null,"In general, introduce a link only on the first occurrence of a subject. If your article is part of series of articles, consider if you really need to link it or the connection between articles is obvious for the reader."),(0,i.kt)("p",null,"Build links into your text:"),(0,i.kt)("p",null,"Good:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"/hornet/welcome"},"Hornet")," is made by our community.")),(0,i.kt)("p",null,"Bad:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hornet(",(0,i.kt)("a",{parentName:"p",href:"/hornet/welcome"},"link"),") is made by our community.")),(0,i.kt)("p",null,'Always leave determiners out of the link. When using structures like "the Mind Map tool" or "the Hornet node", only wrap the name of the object: "the ',(0,i.kt)("a",{parentName:"p",href:"/community/contribute-to-wiki/explanations/tools/mind_map"},"Mind Map"),' tool" and "the ',(0,i.kt)("a",{parentName:"p",href:"/hornet/welcome"},"Hornet"),' node."'),(0,i.kt)("p",null,"Call links in the way the reader could safely assume the link's destination without looking at the URL. When linking to a file download, mention that and the file's extension."),(0,i.kt)("p",null,'You should present the links within the text, but you could use constructions like "You could learn more about\u2026" or "For more information, see\u2026" if that helps with pacing or presentation.'),(0,i.kt)("p",null,"Never apply additional formatting to links."),(0,i.kt)("h3",{id:"emphasis"},"Emphasis"),(0,i.kt)("p",null,"In general, use emphasis notation sparingly. In most cases, you can emphasize anything by using right words and rearranging your sentences even in plain text. ",(0,i.kt)("em",{parentName:"p"},"Weak emphasis")," is rare, ",(0,i.kt)("strong",{parentName:"p"},"strong emphasis")," is exceptional, and there is no good place for ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"super strong emphasis"))," ever."),(0,i.kt)("p",null,"Never use emphasis notation for italics or bold: it only denotes emphasis, and the rendering might differ between engines."),(0,i.kt)("p",null,"Always use ",(0,i.kt)("em",{parentName:"p"},"weak emphasis")," for UI element names."),(0,i.kt)("h3",{id:"inline-code"},"Inline Code"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"inline code")," notation for function and type names, variables and arguments, and input and output values."),(0,i.kt)("p",null,"Use inline code for file paths."),(0,i.kt)("h2",{id:"freestanding-elements"},"Freestanding Elements"),(0,i.kt)("p",null,"Unlike inline elements, freestanding elements reside between paragraphs. You could use them to break wall of texts, support your point, or provide a momentary relief from reading. They can also disrupt the reading flow and disperse your article into loosely connected bits, so use them within reason."),(0,i.kt)("p",null,"When you add a freestanding element, announce it in the preceding paragraph: describe it, provide context to it, or make a statement that this structure supports."),(0,i.kt)("p",null,"Aside from lists and sometimes admonitions, freestanding elements should never replace the text, but only support it."),(0,i.kt)("p",null,"Always introduce a freestanding element in the preceding paragraph, and never put additional paragraphs or other freestanding elements in between. Fully explain the subject in plain text, so the reader could understand it without looking at the supporting element."),(0,i.kt)("h3",{id:"attributions"},"Attributions"),(0,i.kt)("p",null,"When using ",(0,i.kt)("a",{parentName:"p",href:"/community/contribute-to-wiki/explanations/third-party_works"},"someone else's work"),", always attribute the author. In case of freestanding elements, put the attribution on a separate paragraph immediately below and put that whole paragraph in ",(0,i.kt)("em",{parentName:"p"},"weak emphasis"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn main(){\n  println!("Hello World!")\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://github.com/blackbird71SR/Hello-World"},"Hello-World")," in all possible languages by blackbird71SR, MIT License.")),(0,i.kt)("h3",{id:"paragraph-quotes"},"Paragraph Quotes"),(0,i.kt)("p",null,"Put long quotes in a paragraph-style quote (",(0,i.kt)("inlineCode",{parentName:"p"},">"),"). Attribute the author on a separate paragraph within the quotation block. Put the attribution in ",(0,i.kt)("em",{parentName:"p"},"weak emphasis"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[\u2026]"," the act of writing will make you a better student, a better worker, a better friend, a better citizen, a better parent, a better teacher, a better person."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"From Writing Tools by Roy Peter Clark"))),(0,i.kt)("h3",{id:"lists"},"Lists"),(0,i.kt)("p",null,"If your paragraph feels encumbered with enumerations, try to turn it into a list \u2014 oftentimes it will break the long enumeration into comprehensible bits. If your text looks too choppy because of a list, try to rewrite it as a plain text paragraph \u2014 oftentimes it will turn into a smooth and clear prompt."),(0,i.kt)("p",null,"Use numbered lists for instructions and whenever it would make sense to refer to an element by its number (rule #1, rule #2). Use bullets for everything else."),(0,i.kt)("p",null,"Always put proper numbering in lists manually even though Markdown can do that for you: some readers might read your article in raw ",(0,i.kt)("inlineCode",{parentName:"p"},".md"),"."),(0,i.kt)("p",null,"If you have a list of named elements that need a description, consider using headings and separate subsections instead of lists. As the final resort, use bullet lists with element names in ",(0,i.kt)("strong",{parentName:"p"},"strong emphasis"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Roses")," are red."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Violets")," are blue.")),(0,i.kt)("h3",{id:"admonitions"},"Admonitions"),(0,i.kt)("p",null,"When you really want the user to read a paragraph, use ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/admonitions"},"remark-admonitions")," syntax. Reserve it for truly important messages, as if the text has a warning after every paragraph, it has none. If the user has to read the whole article carefully because it describes a sensitive topic, consider telling that in a single admonition at the beginning."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure that you have connected to a testing network, not the main network.")),(0,i.kt)("h3",{id:"code-blocks"},"Code Blocks"),(0,i.kt)("p",null,"Use paragraph code blocks for examples by wrapping the code in triple backticks (","`","`","`",")."),(0,i.kt)("p",null,"Wiki supports ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#syntax-highlighting"},"syntax highlighting")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#multi-language-support-code-blocks"},"code blocks in multiple languages"),"."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"inline code blocks")," for parameter names in text."),(0,i.kt)("h3",{id:"math-formulas"},"Math Formulas"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.theochu.com/docusaurus/latex/"},"Remark Math")," for math formulas."),(0,i.kt)("h3",{id:"images"},"Images"),(0,i.kt)("p",null,"If the image only contains text, use the actual text like code blocks, tables, or math formulas instead. Only use ",(0,i.kt)("inlineCode",{parentName:"p"},".svg")," images or ",(0,i.kt)("inlineCode",{parentName:"p"},".png")," images in high resolution. Always provide the alt text with short but descriptive summary of the image's content. Always make images clickable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'![YOUR_ALT_TEXT](LINK_TO_YOUR_IMAGE "Click to see the full-size image.")\n')),(0,i.kt)("p",null,"Try to not repeat images. Either change the structure of your text, or link the relevant section."),(0,i.kt)("p",null,"Use images for graphs and diagrams."),(0,i.kt)("h3",{id:"videos-audio-recordings-and-animations"},"Videos, Audio Recordings, and Animations"),(0,i.kt)("p",null,"Never include media that could ",(0,i.kt)("a",{parentName:"p",href:"https://www.epilepsy.com/learn/triggers-seizures/photosensitivity-and-seizures"},"provoke seizures"),". This includes flickering lights, flashing animations, or certain patterns like stripes."),(0,i.kt)("p",null,"Prefer videos with captions, and provide the captions yourself if you can."),(0,i.kt)("p",null,"For GIFs, also see ",(0,i.kt)("a",{parentName:"p",href:"#images"},"Images"),"."),(0,i.kt)("h3",{id:"tables"},"Tables"),(0,i.kt)("p",null,"Use Markdown tables. Always provide headings and make sure it looks nice in the raw ",(0,i.kt)("inlineCode",{parentName:"p"},".md")," file."),(0,i.kt)("p",null,"Raw ",(0,i.kt)("inlineCode",{parentName:"p"},".md"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'| Input           | Output                              |\n| --------------- | ----------------------------------- |\n| "White Russian" | Throws `CocktailNotServedException` |\n')),(0,i.kt)("p",null,"Rendered result:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Output"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"White Russian"'),(0,i.kt)("td",{parentName:"tr",align:null},"Throws ",(0,i.kt)("inlineCode",{parentName:"td"},"CocktailNotServedException"))))))}d.isMDXComponent=!0}}]);