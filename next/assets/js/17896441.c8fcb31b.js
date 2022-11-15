"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27918],{87974:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),l=a(67294),r=a(86010),s=a(23702),o=a(78259),c=a(69003),i=a(83699),d=a(79524),m=a(97325);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function p(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(i.Z,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function E(e){let{children:t,active:a,index:s,addMicrodata:o}=e;return l.createElement("li",(0,n.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function h(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},l.createElement(u,{className:b.breadcrumbHomeIcon})))}function v(){const e=(0,o.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(s.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(h,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(E,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(p,{href:t.href,isLast:n},t.label))})))):null}},40860:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var n=a(67294),l=a(79488),r=a(43768);const s=n.createContext(null);function o(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(s.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(86010),m=a(13488),u=a(49473);function b(){const{metadata:e}=c();return n.createElement(u.Z,{previous:e.previous,next:e.next})}var p=a(25350),E=a(44617),h=a(23702),v=a(97325);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function Z(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:h.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(87462);const k="iconEdit_Z9Sw";function N(e){let{className:t,...a}=e;return n.createElement("svg",(0,_.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(k,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function L(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:h.k.common.editThisPage},n.createElement(N,null),n.createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}function T(e){let{editUrl:t,...a}=e;const l=function(e){return new RegExp("shimmer/external/[^/]*/[^/]*/|iota/external/[^/]*/[^/]*/[^/]*/","i").test(e)}(t)?function(e){const t=new RegExp("shimmer/external/[^/]*/[^/]*/|iota/external/[^/]*/[^/]*/[^/]*/","i");return e.replace(t,"")}(t):t;return n.createElement(L,(0,_.Z)({editUrl:l},a))}var U=a(53852);const w="tags_jXut",x="tag_QGVx";function C(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(w,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:x},n.createElement(U.Z,{label:t,permalink:a}))}))))}const y="lastUpdated_vwxv";function A(e){return n.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(C,e)))}function M(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",y)},(a||l)&&n.createElement(Z,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function B(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,o=s.length>0,i=!!(t||a||r);return o||i?n.createElement("footer",{className:(0,d.Z)(h.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(A,{tags:s}),i&&n.createElement(M,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var I=a(54639),V=a(2728);const H="tocCollapsibleButton_TO0P",P="tocCollapsibleButtonExpanded_MG3E";function D(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,_.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",H,!t&&P,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const S="tocCollapsible_ETCw",R="tocCollapsibleContent_vkbj",F="tocCollapsibleExpanded_sAul";function O(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:o}=(0,I.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(S,!s&&F,a)},n.createElement(D,{collapsed:s,onClick:o}),n.createElement(I.z,{lazy:!0,className:R,collapsed:s},n.createElement(V.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const z="tocMobile_ITEo";function j(){const{toc:e,frontMatter:t}=c();return n.createElement(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(h.k.docs.docTocMobile,z)})}var G=a(87086);function q(){const{toc:e,frontMatter:t}=c();return n.createElement(G.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var J=a(13899),Q=a(80985);function W(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(h.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(J.Z,{as:"h1"},a)),n.createElement(Q.Z,null,t))}var X=a(87974);const $="docItemContainer_Djhp",K="docItemCol_VOVn";function Y(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(j,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(q,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&K)},n.createElement(p.Z,null),n.createElement("div",{className:$},n.createElement("article",null,n.createElement(X.Z,null),n.createElement(E.Z,null),a.mobile,n.createElement(W,null,t),n.createElement(B,null)),n.createElement(b,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function ee(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(Y,null,n.createElement(a,null))))}},49473:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),l=a(67294),r=a(97325),s=a(86010),o=a(83699);function c(e){const{permalink:t,title:a,subLabel:n,isNext:r}=e;return l.createElement(o.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(c,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44617:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(86010),r=a(97325),s=a(23702),o=a(58801);function c(e){let{className:t}=e;const a=(0,o.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},25350:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),l=a(86010),r=a(39962),s=a(83699),o=a(97325),c=a(30868),i=a(23702),d=a(86409),m=a(58801);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,r.Z)(),{pluginId:o}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(o),{latestDocSuggestion:u,latestVersionSuggestion:E}=(0,c.Jo)(o),h=u??(v=E).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:E.label,to:h.path,onClick:()=>m(E.name)})))}function h(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}},53852:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010),r=a(83699);const s="tag_zVej",o="tagRegular_sFm0",c="tagWithCount_h2kH";function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,i?c:o)},a,i&&n.createElement("span",null,i))}}}]);