"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75537],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>p});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(i),p=a,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return i?n.createElement(m,r(r({ref:t},c),{},{components:i})):n.createElement(m,r({ref:t},c))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},87581:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const o={description:"Decentralized Identity defines a new method for identity management and authentication by removing centralized aspects.",image:"/img/Identity_icon.png",keywords:["Self Sovereign Identity","decentralized","Permissionless","authentication","explanation"]},r="Introduction to Decentralized Identity",s={unversionedId:"decentralized_identity",id:"decentralized_identity",title:"Introduction to Decentralized Identity",description:"Decentralized Identity defines a new method for identity management and authentication by removing centralized aspects.",source:"@site/iota/external/identity.rs/v0.5.0/documentation/docs/decentralized_identity.md",sourceDirName:".",slug:"/decentralized_identity",permalink:"/identity.rs/0.5/decentralized_identity",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/iota/external/identity.rs/v0.5.0/documentation/docs/decentralized_identity.md",tags:[],version:"current",frontMatter:{description:"Decentralized Identity defines a new method for identity management and authentication by removing centralized aspects.",image:"/img/Identity_icon.png",keywords:["Self Sovereign Identity","decentralized","Permissionless","authentication","explanation"]},sidebar:"docs",previous:{title:"IOTA Identity Framework Guide",permalink:"/identity.rs/0.5/introduction"},next:{title:"Overview",permalink:"/identity.rs/0.5/getting_started/overview"}},l={},d=[{value:"Identity for People",id:"identity-for-people",level:2},{value:"Identity for Organizations",id:"identity-for-organizations",level:2},{value:"Identity for Things",id:"identity-for-things",level:2},{value:"One Framework. Any Identity.",id:"one-framework-any-identity",level:2},{value:"Why IOTA?",id:"why-iota",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-decentralized-identity"},"Introduction to Decentralized Identity"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IOTA Decentralized Identity",src:i(36538).Z,width:"862",height:"200"})),(0,a.kt)("p",null,"Decentralized Identity or Self-Sovereign Identity (SSI) defines a new method for identity management and authentication. It removes the centralized aspects and puts the Identity subject in full control over its own identity. Decentralized Identity provides a solution for the increasing amount of database breaches, the lack of trust in any digital setting, and the increasingly difficult to comply with privacy legislation, such as GDPR."),(0,a.kt)("p",null,"There are three levels of privacy when interacting on the internet: full privacy, verifiable identities, and pseudonymity. With full privacy, neither parties, nor observers, can identify the interacting parties. With verifiable identities, parties can trust each other because they can both provide proof about their identities. With pseudonymity, both parties recognize each other through a pseudonymous identifier. Pseudonymity is the default setting of the internet. However, data harvesting platforms, like\nGoogle and Facebook, can now link these \u201crandom\u201d identifiers, though imprecisely, to identities in the real world. The associated data and insights have become extremely valuable to advertising agencies, product developers, and numerous local and global businesses."),(0,a.kt)("p",null,"The need for verifiable personal information can be fulfilled by digital identity. Digital identity allows users to bridge the gap between the online and the real world. When users provide personal information to someone online, in a \u201cBring Your Own Identity\u201d (BYOI) manner, they will be able to prove that their personal information is perfectly accurate. Whereas in the current system, where companies like Google and Facebook provide an estimation of identity, there can be insufficient depth to user profiles or, in some cases, the information is altogether false."),(0,a.kt)("p",null,"With digital identity, the user can decide what information to share and with whom they would like to share it. This will maintain and even improve online privacy, while allowing for new features and new business opportunities. Businesses will be able to trust BYOI information, enhancing interactions between company and customer, but also reducing fraudulent cases and endemic security risks."),(0,a.kt)("iframe",{width:"640",height:"360",src:"https://www.youtube.com/embed/4YnGFHhxua8",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"identity-for-people"},"Identity for People"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"IOTA Identity builds a new internet, without usernames, passwords, endless repeated forums, or uncontrolled data harvesting.")),(0,a.kt)("p",null,"Information about anyone's life is spread across many locations. Most people have numerous unorganized important documents at home, hundreds of online accounts, and many more online footprints. Through statistical predictive analysis, computer programs can harvest unverified online information sources and create a reasonably accurate profile about our lives. These profiles are accurate enough for targeted advertising and personalized content but lack the proof and trust for them to be used in business. This results in an antiquated customer experience where we have to submit our age and address for every purchase we make and every account we create. It also inhibits our ability to do many online tasks like requesting and extending licenses or taking out a mortgage."),(0,a.kt)("p",null,"Self-Sovereign Identity is about returning autonomy and privacy to the individual, while also improving our online experience. Some movements focus on data privacy, preventing companies from using our information altogether, but with the IOTA Identity framework you control which part of the information you want to reveal. The user can create a single online profile containing all our personal information. They can decide who they share what information with, and a Verifier checks if the information is correct, making the data trustworthy. This moves their online profile from a statistical estimation by corporate entities to an accurate and verifiable profile under their own control."),(0,a.kt)("p",null,"IOTA Identity allows a new internet without usernames, passwords, endless repeated forms, or data harvesting. Users have ultimate control and can choose to supply service providers with their personal data, who in return provide personalized experiences. Data will still flow, and perhaps even more than before, but it will always be in the interest of the individual, instead of a corporation. People will gain additional benefits in sharing their data, either in monetary value or improved customer experience. This sort of system is not possible in a non-neutral environment such as permissioned or fee-based ledgers."),(0,a.kt)("p",null,"Governmental mechanisms for building digital identities are currently being established throughout Europe and Asia, with demand increasing around the globe. However, they are managed by single entities and restricted to the governments that created them. By decentralizing a framework for these standards to adapt to, we have a system for intergovernmental verification of individuals and devices. A person\u2019s digital identification will be transferable across borders like a passport. However, it will no longer require the trust of the issuing government due to the digital trust established by the open and auditable system."),(0,a.kt)("h2",{id:"identity-for-organizations"},"Identity for Organizations"),(0,a.kt)("admonition",{title:"GDPR",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"IOTA Identity allows organizations to comply with GDPR in a cost-efficient and privacy-enabling manner")),(0,a.kt)("p",null,"Corporations are associated with greed and abuse of power. This reputation stems from the role some have chosen to take within society. Corporations are trusted with our data, but often do not act responsibly; vulnerability, fix, patch, repeat. In software and systems, we have seen this cycle repeat. Headlines on data leaks are now an ever-present feature in the news."),(0,a.kt)("p",null,"IOTA Identity presents an opportunity for companies to embrace a new role in the ecosystem. Traditional approaches do not provide cost-efficient solutions to new legislation like GDPR. IOTA Identity enables organizations to change their processes to comply with the new regulations in a cost-efficient and privacy-enabling manner. Features of \u201cData Protection and Privacy by Design\u201d shift responsibility over Personal Identifiable Information (PII) from organization to customer, and organizations no longer need to store that data. The relationship between customer and organization is also tightened as communication via a third party Identity provider like Google or Facebook is no longer needed."),(0,a.kt)("p",null,"Due to Know-Your-Customer (KYC) and Anti-Money Laundering (AML) obligations, companies can be certain who their customers are. These services also provide unique insight into the state of their customers\u2019 data. These insights can be combined and translated into verifiable credentials, providing a new \u201cTrust Anchor\u201d service with a potential for new business models. KYC and AML credentials would return the autonomy of personal data back to the customer. Once companies accept the KYC and AML credentials of other companies, the enrollment time for new customers is significantly reduced, as are the costs. With the personal data secured by the customer, companies can afford to store less data in their own databases, reducing risk and responsibility and fulfilling the goals of legislation such as GDPR."),(0,a.kt)("p",null,"Organizations that have their own decentralized identities can also combat fraud and increase control over their online brand. Companies can sign invoices and agreements using their decentralized identities. While interacting with the customers, they will also be able to reliably identify themselves."),(0,a.kt)("h2",{id:"identity-for-things"},"Identity for Things"),(0,a.kt)("admonition",{title:"TRUST",type:"note"},(0,a.kt)("p",{parentName:"admonition"},'IOTA Identity adds the missing key ingredient for the "Economy of Things": Trust.')),(0,a.kt)("p",null,"With Identity of Things (IDoT), devices are provided with a unique global identity that are able to prove many attributes including their capabilities, specifications, and authenticity. People, organizations, and other devices will only pay devices that can prove their ability to fulfill the required task. This basis of trust prevents fraudulent activity. Additonally, by using the IOTA ledger, the progress of the task can be immutably logged. With the combination of the IOTA protocol and the IOTA Identity framework, we can automate the entire interaction between all parties, without requiring predefined trust. The ",(0,a.kt)("a",{parentName:"p",href:"https://industry.iota.org/"},"Industry Marketplace")," provides a perfect example of how this framework and level of autonomy work."),(0,a.kt)("p",null,"There is a growth in applications that generate Digital Twins for physical devices or objects, such as the Asset Administration Shell (AAS) developed for our Industry Marketplace. Digital twins are online profiles representing a device or object. They provide a virtual state that mirrors reality by emulating the device or object\u2019s physical state through data input sources like sensors. A digital twin is often used to monitor states and execute actions based on the information. Digital twins are only rarely shared outside the associated application and organization due to the complexities in sharing and matching profiles. However, empowered with a digital identity, digital twin sharing would become possible. Once data is verifiable and trusted, digital twins can form the basis for the digital representation of physical devices and objects. This allows other identities to interact with them automatically and provide services such as predictive maintenance."),(0,a.kt)("p",null,"Security is a major barrier in advancing technologies that use IoT. Whether it is the smart devices in our own homes, or at a larger scale, the critical infrastructure of organizations and cities, security must be at the core. It is central to any globally-unifying identity solution. By integrating advanced research in cryptography and digital ledgers, and combining it with a scalable access and management system, security will become a core functionality of the systems we build. By using scalable device DIDs, integrating verification and reputation schemes, and allowing for transparent tamper-proof accountability, we begin to understand how we can future-proof the security of our systems, allowing us to start trusting the process, and not the patch."),(0,a.kt)("h2",{id:"one-framework-any-identity"},"One Framework. Any Identity."),(0,a.kt)("admonition",{title:"Framework",type:"note"},(0,a.kt)("p",{parentName:"admonition"}," The IOTA Identity framework serves as the invisible layer of trust for the internet. This framework must be open, scalable, and free, so that everyone and everything can enjoy trust as a basic digital right.")),(0,a.kt)("p",null,"With various types of actors requiring an identity protocol, it is a strong proposition to use the same underlying protocol for all of them. This IOTA Identity framework enables anyone or anything to create a digital identity, build an online profile of trust by collecting verifiable credentials, and share them with other actors they interact with. Interaction between people, companies, things, and objects becomes seamless. And just as we can trust a person, we will also be able to trust a car, or even a luxury coat. Different identities can also be linked together, creating trustworthy relationships, such as ownership of an object. IOTA already provides a protocol that enables these actors to transact value or data with one another. IOTA will now combine identity features into a single platform, creating the base protocol for the next generation of smart applications."),(0,a.kt)("h2",{id:"why-iota"},"Why IOTA?"),(0,a.kt)("admonition",{title:"Neutral and Free",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"IOTA is a neutral and free-to-use public infrastructure acting as a trustworthy public commons.")),(0,a.kt)("p",null,"IOTA is a scalable and feeless Distributed Ledger Technology (DLT). Similar to Blockchain technology, IOTA provides an immutable and decentralized ledger that can transact value through the IOTA token. Unlike Blockchain, IOTA uses a non-linear data structure called the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/learn/about-iota/an-introduction-to-iota#the-tangle-data-structure"},"Tangle")," which makes it feeless and vastly more scalable. The Tangle also facilitates feeless transactions of data, such as DID registrations and credential revocations. As a single source of truth and trust in data, the Tangle can provide the trust infrastructure in a highly networked world."),(0,a.kt)("p",null,"IOTA is uniquely suited for a single unifying identity implementation. The network is designed for both humans and devices, providing a platform for trusted communication between individuals, organizations, and things. The IOTA Foundation\u2019s principles of full transparency, openness, and permissionless innovation provide an open and neutral environment:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Permissionless & Decentralized"),": Unlike a permissioned network such as Hyperledger or Corda, everyone can participate in consensus without being granted access. No party incentivized by profit-making has collective control over the network (unlike all blockchains). This makes IOTA neutral and censorship-resistant."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Public"),": Everyone can observe (unless using optional encryption) the transactions in the network. The network is inherently transparent."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Feeless"),": All data and value transactions on the network are free. Unlike other DLTs such as Bitcoin or Ethereum, registration and communication of identities can be written to the network without a requirement to purchase a cryptocurrency token."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Open Source"),": Everyone can view and contribute to the code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Easy to use"),": IOTA Identity is inherently easier to use due to the lack of fees or requirements to set up an entire private network. In addition, the framework is designed to have an easy to use high-level API, with accessibility to the low-level, more complex and more flexible API. Through integration with the ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.iota.org/stronghold.rs/welcome",title:"Stronghold is an open-source software library that was originally built to protect IOTA Seeds, but can be used to protect any digital secret."},"Stronghold")," project, we also provide out-of-the-box security for secrets.")),(0,a.kt)("p",null,"Data must be immutably stored on a distributed ledger to ensure the decentralized nature of the digital identity protocol. With the network\u2019s continual uptime, credentials are always verifiable without a dependency on the servers of credential issuers. This system also increases individual privacy, because contact with the Issuer is removed from the interaction between Holder and Verifier. Issuers will not be able to track when and how often the Holder uses their credentials. The flexibility afforded from the Tangle means that the digital identity framework remains extendable in the future."),(0,a.kt)("p",null,"Within the digital identity framework, the Tangle is used for the following functionalities:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Public Key Registry"),": The Tangle enables a decentralized public key infrastructure (DPKI) for Issuers using DID standards. This allows Verifiers to verify a signature without reliance on a centralized server. The DID standard also adds service endpoints, extending the usability of Identities beyond a public key registry, to, for example, registering verifiable credential standards."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Revocation"),": A verifiable credential can be revoked, meaning it will no longer be able to pass verification. The revocation is immutably stored on the Tangle, making sure no Holder can attempt to use their revoked credentials. This is designed to be a simple public key deactivation to guarantee GDPR compliance.")))}u.isMDXComponent=!0},36538:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/banner_decentralized_identity-c93087dc1251ad4b68414b9eef264f25.svg"}}]);