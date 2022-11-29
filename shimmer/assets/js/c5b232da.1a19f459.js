"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=h(n),m=r,u=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var h=2;h<i;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=n(87462),r=(n(67294),n(3905));const i={title:"Identity.rs workflow",sidebar_label:"Workflow",description:"Learn about the software development process of the IOTA Identity repository.",image:"/img/Identity_icon.png",keywords:["Workflow","Contribute","GitHub","explanation"]},o="Identity Workflow",l={unversionedId:"workflow",id:"workflow",title:"Identity.rs workflow",description:"Learn about the software development process of the IOTA Identity repository.",source:"@site/shimmer/external/identity.rs/0.7-alpha/documentation/docs/workflow.md",sourceDirName:".",slug:"/workflow",permalink:"/shimmer/identity.rs/workflow",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/shimmer/external/identity.rs/0.7-alpha/documentation/docs/workflow.md",tags:[],version:"current",frontMatter:{title:"Identity.rs workflow",sidebar_label:"Workflow",description:"Learn about the software development process of the IOTA Identity repository.",image:"/img/Identity_icon.png",keywords:["Workflow","Contribute","GitHub","explanation"]},sidebar:"docs",previous:{title:"Contribute",permalink:"/shimmer/identity.rs/contribute"},next:{title:"Contact",permalink:"/shimmer/identity.rs/contact"}},s={},h=[{value:"Issues",id:"issues",level:2},{value:"Git",id:"git",level:2},{value:"Pull Requests",id:"pull-requests",level:3},{value:"Branches",id:"branches",level:3},{value:"Main (main)",id:"main-main",level:4},{value:"Dev (dev)",id:"dev-dev",level:4},{value:"Work Branches",id:"work-branches",level:3},{value:"Feature (feat/, doc/, chore/, fix/)",id:"feature-feat-doc-chore-fix",level:4},{value:"Epic (epic/)",id:"epic-epic",level:4},{value:"Semantic Versioning",id:"semantic-versioning",level:3},{value:"Changelog",id:"changelog",level:3},{value:"PR labels",id:"pr-labels",level:4},{value:"<code>Rust</code>",id:"rust",level:5},{value:"<code>Wasm</code>",id:"wasm",level:5},{value:"Changed",id:"changed",level:5},{value:"Added",id:"added",level:5},{value:"Patch",id:"patch",level:5},{value:"Deprecated",id:"deprecated",level:5},{value:"Removed",id:"removed",level:5},{value:"Excluded tags",id:"excluded-tags",level:5},{value:"Release summary",id:"release-summary",level:5},{value:"Issue Labels",id:"issue-labels",level:3},{value:"Release",id:"release",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"The changelog entries have the wrong description in the release PR",id:"the-changelog-entries-have-the-wrong-description-in-the-release-pr",level:4},{value:"The changelog in the release PR is missing entries, has unrelated entries, or entries in the wrong section.",id:"the-changelog-in-the-release-pr-is-missing-entries-has-unrelated-entries-or-entries-in-the-wrong-section",level:4},{value:"The release description in the release PR is missing or wrong",id:"the-release-description-in-the-release-pr-is-missing-or-wrong",level:4},{value:"Features or code are missing from the release",id:"features-or-code-are-missing-from-the-release",level:4},{value:"I want to abort the release for any reason",id:"i-want-to-abort-the-release-for-any-reason",level:4}],d={toc:h};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"identity-workflow"},"Identity Workflow"),(0,r.kt)("p",null,"In this article you will learn about the software development process for the IOTA Identity repository as well as key terms, functions, and the overall operability of the workflow components."),(0,r.kt)("h2",{id:"issues"},"Issues"),(0,r.kt)("p",null,"Issues are opened when a certain task or problem is noted but cannot immediately be fixed. Issues may contain bug reports, requests, or larger topics. Please use the correct GitHub issue template for your issue type. Only IOTA Foundation members should use the task templates flagged for maintainers. You should make sure to ",(0,r.kt)("a",{parentName:"p",href:"#issue-Labels"},"label")," the issue correctly. As a contributor, you may also add issues to a certain ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/projects/"},"project"),"."),(0,r.kt)("h2",{id:"git"},"Git"),(0,r.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,r.kt)("p",null,"New branches should be pushed to the GitHub repository as soon as possible, making them public to all contributors. In addition, a pull request (PR) should be opened in draft status, describing the goals and any requirements of the changes. To generate good ",(0,r.kt)("a",{parentName:"p",href:"#changelog"},"changelogs"),", a PR title must be written in a way that is suitable as a changelog entry while the PR must be ",(0,r.kt)("a",{parentName:"p",href:"#pr-labels"},"labeled")," correctly."),(0,r.kt)("p",null,"Any code written should frequently be committed and pushed back to the GitHub branch. This acts as both a back-up mechanism and provides transparency towards other contributors and the community. You should also pull from the origin branch of the PR regularly to prevent merge conflicts."),(0,r.kt)("p",null,"Other contributors are encouraged to provide feedback on a PR during its development. A PR should be flagged as 'ready for review' once the PR has implemented all changes and no further commits are planned by the main contributors. The repository requires a review to be provided by at least one (other) developer in the team that works in the same language or has knowledge of the work before it can be merged. For larger PRs, the review of two maintainers is recommended."),(0,r.kt)("p",null,'Once a PR is approved, the preferred method is "squash-and-merge" for non-epic branches to keep the destination branch clean and allow for many small commits while work is in-progress. Epic branches must instead be merged with the merge commits of included PRs intact, so the ',(0,r.kt)("a",{parentName:"p",href:"#changelog"},"changelog generator")," can detect included changes. Once merged in, the source branch may be deleted."),(0,r.kt)("h3",{id:"branches"},"Branches"),(0,r.kt)("p",null,"IOTA Identity always has two permanent branches: ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),". Both branches are protected and disallow direct commits; the only changes allowed are from pull requests approved and merged by maintainers."),(0,r.kt)("h4",{id:"main-main"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/iotaledger/identity.rs/tree/main"},"Main")," (main)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch contains a stable version of the code that is released towards package managers such as ",(0,r.kt)("inlineCode",{parentName:"p"},"crates.io")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),". This branch only accepts PRs that merge from ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"hotfix")," branches. "),(0,r.kt)("h4",{id:"dev-dev"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/iotaledger/identity.rs"},"Dev")," (dev)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," branch contains a frequently updated version of the code that is released towards package managers under a development flag. These releases may contain breaking changes without a strong notice towards developers using them. While the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," branch may get frequent updates, it may not contain unfinished features. Any large, multi-PR feature should be committed to a long-lived ",(0,r.kt)("inlineCode",{parentName:"p"},"epic")," branch created specifically for that feature."),(0,r.kt)("h3",{id:"work-branches"},"Work Branches"),(0,r.kt)("p",null,"These are branches that developers work on directly. Their names should be prefixed appropriately with one of the following categories. For example, a PR fixing a null pointer bug in the Wasm bindings might be created from a branch called ",(0,r.kt)("inlineCode",{parentName:"p"},"fix/client-non-null"),"."),(0,r.kt)("h4",{id:"feature-feat-doc-chore-fix"},"Feature (feat/, doc/, chore/, fix/)"),(0,r.kt)("p",null,"Singular PR contributions should create either a ",(0,r.kt)("inlineCode",{parentName:"p"},"feat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"doc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chore"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"fix")," branch, depending on the type of changes. These may be branched from either the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," branch or an ",(0,r.kt)("inlineCode",{parentName:"p"},"epic")," branch. If the number of lines of code are going to be relatively small and the work completed in a single PR, the branch should be created from ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," and merged back into ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," once completed. Otherwise, the branches should be created from their associated ",(0,r.kt)("inlineCode",{parentName:"p"},"epic")," branch and be merged back into the same ",(0,r.kt)("inlineCode",{parentName:"p"},"epic")," branch. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feat")," branches should contain changes to the code that expand or modify functionality. They should also include updates to the documentation and examples related to the feature, though ",(0,r.kt)("inlineCode",{parentName:"li"},"doc")," branches may be used to catch up on documenting a feature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"doc")," branches contain changes to code documentation or the wiki. These PRs should be kept relatively small to avoid burdening a reviewer with too many documentation updates at once. For example, during a documentation catch-up, we will have a branch or PR per documentation page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chore")," branches are short-lived branches that contain no significant features or functionality changes, but rather smaller fixes such as typos, code fixes, minor refactors, and CI changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fix")," branches correct bugs such as compilation errors or where existing features do not behave as expected, generally without introducing any new functionality or breaking changes.")),(0,r.kt)("p",null,"We recommend integrating ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"epic")," regularly, depending on where the branch started, to reduce the possibility and potential size of merge conflicts."),(0,r.kt)("h4",{id:"epic-epic"},"Epic (epic/)"),(0,r.kt)("p",null,"Long-lived ",(0,r.kt)("inlineCode",{parentName:"p"},"epic")," branches should be created as soon as a feature is expected to require more than one PR. The ",(0,r.kt)("inlineCode",{parentName:"p"},"epic")," branch should be branched from ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," and should only accept merges that are related to the feature being developed. A PR should be opened as soon as the branch is created to publicly notify contributors about the development, the goals and requirements of the feature, and the existence of the branch. It is recommended you integrate ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," often to reduce the possibility and potential size of merge conflicts. Epic branches must not be squash-merged, otherwise the ",(0,r.kt)("a",{parentName:"p",href:"#Changelog"},"changelog generator")," will not detect its constituent PRs."),(0,r.kt)("h3",{id:"semantic-versioning"},"Semantic Versioning"),(0,r.kt)("p",null,"Semantic Versioning (SemVer) describes a methodology for versioning of software to convey meaning and guarantees through the version string. A typical version string looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"2.3.1"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," is called the major version, ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," the minor version and ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," the patch or bugfix version. "),(0,r.kt)("p",null,"The central idea is that every part of the version string conveys meaning. A major change introduces behavior that is incompatible with previous versions of the software, while a minor change adds backwards-compatible functionality and a patch simply fixes a problem. So just by looking at the version string, an implementer will understand the effort needed to integrate a new version."),(0,r.kt)("p",null,"For more detailed information and an overview of advanced features, see ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0.0"),". Though this is not to be confused with ",(0,r.kt)("a",{parentName:"p",href:"http://sentimentalversioning.org/"},"Sentimental Versioning"),"."),(0,r.kt)("h3",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"A changelog is a file describing a software project for humans to grasp the type and content of changes from version to version. Changelogs are closely related to the versioning of software, since individual changes are grouped into versions that are, in our case, referenced by a ",(0,r.kt)("a",{parentName:"p",href:"#Semantic-Versioning"},"SemVer string"),". We generally follow the recommendations from ",(0,r.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"keepachangelog"),". The changelog in this project is generated from the titles and ",(0,r.kt)("a",{parentName:"p",href:"#PR-Labels"},"labels")," of ",(0,r.kt)("a",{parentName:"p",href:"#Pull-Requests"},"pull requests"),". "),(0,r.kt)("h4",{id:"pr-labels"},"PR labels"),(0,r.kt)("p",null,"Labels are used to categorize changes in ",(0,r.kt)("a",{parentName:"p",href:"#Pull-Requests"},"pull requests"),". Adding a label will include the labeled ",(0,r.kt)("a",{parentName:"p",href:"#Pull-Requests"},"PR")," title in the related section of the generated ",(0,r.kt)("a",{parentName:"p",href:"#Changelog"},"changelog"),"."),(0,r.kt)("p",null,"Changelogs are generated for the core Rust library and each binding separately. To attach a PR to a specific changelog, use the following labels:"),(0,r.kt)("h5",{id:"rust"},(0,r.kt)("inlineCode",{parentName:"h5"},"Rust")),(0,r.kt)("p",null,"This includes the PR in the core Rust library changelog."),(0,r.kt)("h5",{id:"wasm"},(0,r.kt)("inlineCode",{parentName:"h5"},"Wasm")),(0,r.kt)("p",null,"This includes the PR in the WASM bindings changelog."),(0,r.kt)("p",null,"It is also necessary to add an appropriate label for the type of change in the PR. The following labels determine in which section a PR title will appear: "),(0,r.kt)("h5",{id:"changed"},"Changed"),(0,r.kt)("p",null,"Maps to the major version of ",(0,r.kt)("a",{parentName:"p",href:"#Semantic-Versioning"},"Semantic Versioning"),".\nlabels: ",(0,r.kt)("inlineCode",{parentName:"p"},"Breaking change")),(0,r.kt)("h5",{id:"added"},"Added"),(0,r.kt)("p",null,"Maps to the minor version of ",(0,r.kt)("a",{parentName:"p",href:"#Semantic-Versioning"},"Semantic Versioning"),".\nlabels: ",(0,r.kt)("inlineCode",{parentName:"p"},"Added")),(0,r.kt)("h5",{id:"patch"},"Patch"),(0,r.kt)("p",null,"Maps to the patch version of ",(0,r.kt)("a",{parentName:"p",href:"#Semantic-Versioning"},"Semantic Versioning"),".\nlabels: ",(0,r.kt)("inlineCode",{parentName:"p"},"Patch")),(0,r.kt)("h5",{id:"deprecated"},"Deprecated"),(0,r.kt)("p",null,"Marks features that will be removed in the feature. No special version consideration should apply here, since the feature did not change yet.\nlabels: ",(0,r.kt)("inlineCode",{parentName:"p"},"Deprecated")),(0,r.kt)("h5",{id:"removed"},"Removed"),(0,r.kt)("p",null,"Marks features as being removed. Typically the features should have been deprecated in the previous version. This maps to the major version of ",(0,r.kt)("a",{parentName:"p",href:"#Semantic-Versioning"},"Semantic Versioning"),".\nlabels: ",(0,r.kt)("inlineCode",{parentName:"p"},"Removed")),(0,r.kt)("h5",{id:"excluded-tags"},"Excluded tags"),(0,r.kt)("p",null,"Marks changes that should not be part of the changelog. This should only be used for documentation and rare exceptions.\nlabels: ",(0,r.kt)("inlineCode",{parentName:"p"},"Documentation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"No changelog")),(0,r.kt)("p",null,"Please note that a PR can only be listed in one section of a changelog. So attaching the labels ",(0,r.kt)("inlineCode",{parentName:"p"},"Rust")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Added")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Patch")," to a PR, for example, is invalid because ",(0,r.kt)("inlineCode",{parentName:"p"},"Added")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Patch")," conflict."),(0,r.kt)("h5",{id:"release-summary"},"Release summary"),(0,r.kt)("p",null,"To attach a release summary to a version in the changelog, an issue with the label ",(0,r.kt)("inlineCode",{parentName:"p"},"release-summary")," must be created. Create a GitHub milestone matching the version you want to describe and attach it to the issue. The issue can be closed immediately. The text of the issue will be included in the changelog as the release summary."),(0,r.kt)("h3",{id:"issue-labels"},"Issue Labels"),(0,r.kt)("p",null,"The following labels are used to categorize issues but do not have any effect on changelogs: ",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Enhancement"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Bug"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Chore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Dependencies"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Help wanted"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Duplicate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Wontfix"),"."),(0,r.kt)("h2",{id:"release"},"Release"),(0,r.kt)("p",null,"With the release process, we can deliver versions of our software to the community. We use sensible automation where it helps to remove tedium. However, some steps that require active decision-making remain manual."),(0,r.kt)("p",null,"The final list of changes from the ",(0,r.kt)("a",{parentName:"p",href:"#Changelog"},"changelog")," informs the version of the release. If at least one change mapping to a major version is included, the major version needs to be incremented. In that case, the minor and patch versions are set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". If there are no changes related to a major version, but changes related to a minor version are present, the minor version needs to be incremented while the patch version is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". Otherwise, only the patch version is incremented. Determining the version of the release is the responsibility of the person performing the release."),(0,r.kt)("p",null,"The determined version of the release is used to create the ",(0,r.kt)("a",{parentName:"p",href:"#hotfix"},"hotfix")," or ",(0,r.kt)("a",{parentName:"p",href:"#release"},"release")," branch. For example, a major release from the previous version ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.3.1")," will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"release/v3.0.0")," branch."),(0,r.kt)("p",null,"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," in front of the version. We ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging"},"tag")," all release in git in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"vMAJOR.MINOR.PATCH"),". For bindings, we prefix the tag with the binding name, so a tag for Wasm would look like ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm-v1.2.3"),". Bindings and the core Rust library are versioned and released independently."),(0,r.kt)("p",null,"Additionally, we may release ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," versions separately for both bindings and the core Rust library. These releases are meant as a preview of upcoming versions. For example, if the current version is ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.3")," with the tag ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.2.3"),", we may release ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.3.0-dev.1")," which is then superseded by the actual ",(0,r.kt)("inlineCode",{parentName:"p"},"1.3.0")," release."),(0,r.kt)("p",null,"You should follow these steps to create a release:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure all the changes you want to release are on the ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," branch."),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate GitHub Actions workflow, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"Rust Create Release PR"),".\n2.1. Decide if you want to create a ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," release.\n2.2. Determine the next version string.\n2.3. Run the workflow. The workflow will create a PR from ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," targeting ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," with release related changes."),(0,r.kt)("li",{parentName:"ol"},"Review the PR.\n3.1. The PR will update the changelog, check that it has all expected entries in the appropriate sections and the determined version matches the changelog according to ",(0,r.kt)("a",{parentName:"li",href:"#Semantic-Versioning"},"SemVer"),".\n3.2. The PR will update project version strings, ensure these are correct and match the expected version.\n3.3. Refer to ",(0,r.kt)("a",{parentName:"li",href:"#Troubleshooting"},"Troubleshooting")," if anything is incorrect."),(0,r.kt)("li",{parentName:"ol"},"Merge the PR.\n4.1. On merging to ",(0,r.kt)("inlineCode",{parentName:"li"},"dev"),", an automatic workflow is triggered that builds and publishes artifacts to the appropriate package manager (",(0,r.kt)("inlineCode",{parentName:"li"},"crates.io")," for Rust, ",(0,r.kt)("inlineCode",{parentName:"li"},"npm")," for the WASM bindings), and creates a GitHub Release (only for ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," version releases of the core Rust library)."),(0,r.kt)("li",{parentName:"ol"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," version releases, merge the ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," branch into the ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch.")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h4",{id:"the-changelog-entries-have-the-wrong-description-in-the-release-pr"},"The changelog entries have the wrong description in the release PR"),(0,r.kt)("p",null,"Update the titles of the relevant PRs, then re-run the workflow with the same parameters. The release PR will be updated with the new changelog."),(0,r.kt)("h4",{id:"the-changelog-in-the-release-pr-is-missing-entries-has-unrelated-entries-or-entries-in-the-wrong-section"},"The changelog in the release PR is missing entries, has unrelated entries, or entries in the wrong section."),(0,r.kt)("p",null,"Fix the ",(0,r.kt)("a",{parentName:"p",href:"#PR-Labels"},"labels")," on the relevant PRs, then re-run the workflow with the same parameters. The release PR will be updated with the new changelog."),(0,r.kt)("h4",{id:"the-release-description-in-the-release-pr-is-missing-or-wrong"},"The release description in the release PR is missing or wrong"),(0,r.kt)("p",null,"Fix the issue description, milestone, and label according to the ",(0,r.kt)("a",{parentName:"p",href:"#Release-Summary"},"release summaries guide")," and re-run the workflow with the same parameters. The release PR will be updated with the new changelog."),(0,r.kt)("h4",{id:"features-or-code-are-missing-from-the-release"},"Features or code are missing from the release"),(0,r.kt)("p",null,"Merge the code into the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," branch, then re-run the workflow with the same parameters. The release PR will be updated with the changes."),(0,r.kt)("h4",{id:"i-want-to-abort-the-release-for-any-reason"},"I want to abort the release for any reason"),(0,r.kt)("p",null,'Close the PR. You can reopen it later. // TODO: can I just re-run the workflow? Maybe that needs an "I want to resume an aborted release" section?'))}p.isMDXComponent=!0}}]);