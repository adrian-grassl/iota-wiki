"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15337:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="IOTA Track & Trace Ledger APIs 201 Tutorial : Business Events",s={unversionedId:"track-trace-ledger-api/track-trace-ledger-api-tutorial-201",id:"track-trace-ledger-api/track-trace-ledger-api-tutorial-201",title:"IOTA Track & Trace Ledger APIs 201 Tutorial : Business Events",description:"In this tutorial you will learn how to use the IOTA Track & Trace Ledger APIs to create trusted and decentralized supply chains using IOTA and business events compliant with GS1 EPCIS 2.0.",source:"@site/iota/external/zebra-iota-edge-sdk/production/documentation/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-201.md",sourceDirName:"track-trace-ledger-api",slug:"/track-trace-ledger-api/track-trace-ledger-api-tutorial-201",permalink:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-201",draft:!1,editUrl:"https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/documentation/iota/external/zebra-iota-edge-sdk/production/documentation/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-201.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IOTA GTSC Track and Trace Ledger APIs 103 Tutorial : Digital Identity",permalink:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103"},next:{title:"IOTA Identity Tutorial",permalink:"/zebra-tutorials/in-app-tutorial"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Zebra Savanna Track and Trace Ledger API Overview",id:"zebra-savanna-track-and-trace-ledger-api-overview",level:2},{value:"Tutorial Prerequisites",id:"tutorial-prerequisites",level:2},{value:"Tutorial Part I : Reference Data",id:"tutorial-part-i--reference-data",level:2},{value:"Create supplier business locations (Reference Data)",id:"create-supplier-business-locations-reference-data",level:3},{value:"Create OEM business locations (Reference Data)",id:"create-oem-business-locations-reference-data",level:3},{value:"Query Reference Data",id:"query-reference-data",level:3},{value:"Tutorial Part II : Recording Business Events on the Tangle",id:"tutorial-part-ii--recording-business-events-on-the-tangle",level:2},{value:"Part storing into the Supplier&#39;s Warehouse",id:"part-storing-into-the-suppliers-warehouse",level:3},{value:"Part Shipping by the Supplier",id:"part-shipping-by-the-supplier",level:3},{value:"Part Reception by the OEM",id:"part-reception-by-the-oem",level:3},{value:"Querying the Supply Chain Data Trail of our part",id:"querying-the-supply-chain-data-trail-of-our-part",level:3},{value:"Obtaining details of the Streams Channel used to track a part",id:"obtaining-details-of-the-streams-channel-used-to-track-a-part",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Business Events API Roadmap",id:"business-events-api-roadmap",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iota-track--trace-ledger-apis-201-tutorial--business-events"},"IOTA Track & Trace Ledger APIs 201 Tutorial : Business Events"),(0,r.kt)("p",null,"In this tutorial you will learn how to use the IOTA Track & Trace Ledger APIs to create trusted and decentralized supply chains using IOTA and business events compliant with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gs1/EPCIS/"},"GS1 EPCIS 2.0"),"."),(0,r.kt)("p",null,"If you are already familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://www.gs1.org/docs/epc/EPCIS_Guideline.pdf"},"GS1 EPCIS")," you can directly jump to the ",(0,r.kt)("a",{parentName:"p",href:"#use-case"},"Use Case"),". An introduction to IOTA can be found on the ",(0,r.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-101#dlt-technologies-and-iota"},"101 Tutorial"),"."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The overall goal of EPCIS is to enable disparate supply chain actors to create and share event visibility data (in the form of business events), both within and across enterprises. Such events represent the ",(0,r.kt)("em",{parentName:"p"},"WHAT, WHERE, WHEN and WHY")," about an object in the supply chain. EPCIS 2.0 serializes events into ",(0,r.kt)("a",{parentName:"p",href:"https://json-ld.org/primer/latest/"},"JSON-LD"),", a JSON-based format that enables extensibility through Linked Data. EPCIS also defines a vocabulary (",(0,r.kt)("a",{parentName:"p",href:"https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-r-2016-09-29.pdf"},"Core Business Vocabulary"),") that defines general purpose business terms with well-defined semantics across industries."),(0,r.kt)("p",null,"Business Events are complementary to Device Events, already introduced by the ",(0,r.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-101#tutorial-part-i--barcode-scan-transactions"},"101 Tutorial"),". A Business Event carries  semantic information whereas a Device Event is closer to the ",(0,r.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-101#automatic-identification-technologies"},"AIDC")," domain. The relationship between Device Events and Business Events is depicted by the figure below. "),(0,r.kt)("p",null,"Typically, one or more Device Events (for instance RFID Read Device Events) yield to a Business Event. The transformation from a Device Event to a Business Event needs contextual or situational information that might depend on each application. Particularly, Business Events need ",(0,r.kt)("em",{parentName:"p"},'Reference ("Master") Data')," to refer to. ",(0,r.kt)("em",{parentName:"p"},"Reference Data")," can represent business locations, read points, devices, product classes, etc. In contrast to event visibility data, that is continuously generated, additions or changes to Reference Data happen sporadically."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Common Record of Truth",src:a(66173).Z,title:"Common Record of Truth",width:"2084",height:"1176"})),(0,r.kt)("h2",{id:"use-case"},"Use Case"),(0,r.kt)("p",null,"The focus of our tutorial will be a use case concerning the automotive industry. Concretely, a part (for instance a car engine) that is manufactured by a tier-1 supplier and then mounted by an OEM on a car, as conceptually depicted by the figure above. "),(0,r.kt)("p",null,"For the purpose of our tutorial, the process starts when our part manufacturing process is completed at the supplier's factory. Once it has been being encoded and labeled (using RFID, for instance), the part in question goes to the supplier's warehouse where it is stored. Eventually, such part will shipped to the OEM via a logistics service provider. Afterwards, the part will be received at the OEM's Factory and finally mounted on a target car. "),(0,r.kt)("p",null,"This complex process can be modelled through EPCIS Business Events. Furthermore, using the IOTA DLT a single source of truth can be immutably recorded on the Tangle, allowing the different actors (supplier, logistics, OEM, etc.) to build interoperable, trusted, transparent and accountable supply chains using a decentralised approach. "),(0,r.kt)("p",null,"As this process is rather complex we will only model three events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The storage of the part at the Supplier's Warehouse"),(0,r.kt)("li",{parentName:"ul"},"The shipping of the part from the Supplier to the OEM (without taking into account the logistics interactions)"),(0,r.kt)("li",{parentName:"ul"},"The reception of the part by the OEM")),(0,r.kt)("p",null,"In addition, we need to model the following business locations as Reference Data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Supplier's Factory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Door 1")," of the Supplier's Factory Warehouse from which parts enter into the Warehouse"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Door 2")," of the Supplier's Factory Warehouse from which parts exit the Warehouse and are shipped"),(0,r.kt)("li",{parentName:"ul"},"The OEM's Factory")),(0,r.kt)("h2",{id:"zebra-savanna-track-and-trace-ledger-api-overview"},"Zebra Savanna Track and Trace Ledger API Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.zebra.com/es/es/solutions/intelligent-edge-solutions/savanna.html"},"Zebra Savanna")," is a cloud platform, available to developers, that offers different APIs as a service that can facilitate building advanced cloud applications that exploit AIDC (RFID, barcode, etc.) technologies. Zebra Savanna has been conceived to work seamlessly with Zebra devices, but can also be used within other contexts."),(0,r.kt)("p",null,"Under its sandbox environment, Zebra Savanna has published a new API, the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.zebra.com/apis/iota-0"},"Track and Trace Ledger API")," which allows to automatically publish and consume Device Events (read, scan, print) and Business Events to an IOTA Ledger (the Tangle). As a result, supply chain use cases such as the one described above can be easily developed."),(0,r.kt)("h2",{id:"tutorial-prerequisites"},"Tutorial Prerequisites"),(0,r.kt)("p",null,"In order to execute this tutorial the following prerequisites have to be met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zebra Savanna developer account. You have to go to ",(0,r.kt)("a",{parentName:"li",href:"https://developer.zebra.com"},"https://developer.zebra.com")," and then sign up to obtain a new account."),(0,r.kt)("li",{parentName:"ul"},"Zebra Savanna API Key. After signing up/in You need to go to ",(0,r.kt)("a",{parentName:"li",href:"https://developer.zebra.com/user/me/apps"},"https://developer.zebra.com/user/me/apps")," in order to register a new application and obtain an API Key that will have to be used to get access to the API.")),(0,r.kt)("p",null,"The tutorial uses cUrl commands throughout, but is also available as ",(0,r.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/579084/TVYJ5GcY"},"Postman documentation"),". IOTA hashes (ids) shown might have been ellipsed for the sake of legibility."),(0,r.kt)("p",null,"Last but not least, it is important to note that the current API implementation sandbox makes use of the IOTA\u2019s ",(0,r.kt)("strong",{parentName:"p"},"Devnet")," network. This network is composed of a limited number of nodes, mainly contributed by the IOTA Foundation. Security and confidentiality of transactions issued in this network are the same as per the IOTA Mainnet."),(0,r.kt)("h2",{id:"tutorial-part-i--reference-data"},"Tutorial Part I : Reference Data"),(0,r.kt)("p",null,"Using your API Key you can create the different business locations we are going to refer to. Reference Data is represented using a vocabulary that import terms both from GS1 and ",(0,r.kt)("a",{parentName:"p",href:"https://schema.org"},"schema.org"),". "),(0,r.kt)("h3",{id:"create-supplier-business-locations-reference-data"},"Create supplier business locations (Reference Data)"),(0,r.kt)("p",null,"Here we create three different locations: the main Factory location and two sub-site locations: ",(0,r.kt)("inlineCode",{parentName:"p"},"Door 1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Door 2")," of the Factory's Warehouse. You can observe that locations are uniquely identified by a ",(0,r.kt)("a",{parentName:"p",href:"https://gs1it.org/content/public/e0/6d/e06d1d13-2d4e-4900-98a7-b9f15a4023a6/gs1_epc_tds_i1_13.pdf"},"SGLN")," a standard location identifier which format is defined by GS1. "),(0,r.kt)("p",null,"Please note that we could have created the Warehouse itself as child location of the Factory and then the referred ",(0,r.kt)("inlineCode",{parentName:"p"},"Door 1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Door 2")," as subsidiaries of the Warehouse. We have not done that way for the sake of simplicity.  "),(0,r.kt)("p",null,"Request 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data\' \\\n--header \'apikey: <your_api_key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": "urn:epc:id:sgln:9524678.90000.0",\n    "type": "BizLocation",\n    "name": "Supplier Factory Spain",\n    "description": "Supplier Factory in Spain specialized in engines",\n    "geo": {\n        "type": "GeoCoordinates",\n        "addressCountry": "ES",\n        "latitude": 44,\n        "longitude": -8\n    }\n}\n\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"201 Created\n\nLocation: /master-data/urn:epc:id:sgln:9524678.90000.0\n")),(0,r.kt)("p",null,"Request 2:"),(0,r.kt)("p",null,"Here we create a subsidiary location of the Supplier Factory, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Door 1")," of the Warehouse. You can observe how the ",(0,r.kt)("inlineCode",{parentName:"p"},"site")," field is used to indicate the parent location (the formerly created entity). The ",(0,r.kt)("inlineCode",{parentName:"p"},"sst")," field is used to label the location, in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"209")," indicates that it is a receiving area. Such code lists are defined by the GS1 Core Business Vocabulary. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data\' \\\n--header \'apikey: <your_api_key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": "urn:epc:id:sgln:9524678.90000.WarehouseD1",\n    "type": "BizLocation",\n    "name": "Warehouse D1",\n    "description": "Door from which goods enter into the Warehouse",\n    "site": "urn:epc:id:sgln:9521678.90000.0",\n    "sst": "209"\n}\n\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"201 Created\n\nLocation: /master-data/urn:epc:id:sgln:9524678.90000.WarehouseD1\n")),(0,r.kt)("p",null,"Request 3: "),(0,r.kt)("p",null,"Here we create a subsidiary location of the Supplier Factory, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Door 2")," of the Warehouse. You can observe how the ",(0,r.kt)("inlineCode",{parentName:"p"},"subsite")," field is used to indicate the parent location. The ",(0,r.kt)("inlineCode",{parentName:"p"},"sst")," field is used to categorize the location, in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"210")," indicates that it is a shipping area. Such codes are defined by the GS1 Core Business Vocabulary. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data\' \\\n--header \'apikey: <your_api_key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": "urn:epc:id:sgln:9524678.90000.WarehouseD2",\n    "type": "BizLocation",\n    "name": "Warehouse D2",\n    "description": "Door from which goods leave the Warehouse",\n    "site": "urn:epc:id:sgln:9524678.90000.0",\n    "sst": "210"\n}\n\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"201 Created\n\nLocation: /master-data/uurn:epc:id:sgln:9524678.90000.WarehouseD2\n")),(0,r.kt)("h3",{id:"create-oem-business-locations-reference-data"},"Create OEM business locations (Reference Data)"),(0,r.kt)("p",null,"In this case we are only capturing the location of the OEM's Factory and not any of their internal facilities, even though in a real case we should. "),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data\' \\\n--header \'apikey: <your_api_key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": "urn:epc:id:sgln:9524987.20000.0",\n    "type": "BizLocation",\n    "name": "OEM Factory Germany",\n    "description": "OEM Factory in Germany assembling cars",\n    "geo": {\n        "type": "GeoCoordinates",\n        "addressCountry": "DE",\n        "latitude": 52,\n        "longitude": 13\n    }\n}\n\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"201 Created\n\nLocation: /master-data/urn:epc:id:sgln:9524987.20000.0\n")),(0,r.kt)("h3",{id:"query-reference-data"},"Query Reference Data"),(0,r.kt)("p",null,"Reference Data can be queried by identifier using a GET request as shown below:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data/urn:epc:id:sgln:9521678.90000.WarehouseD2' \\\n--header 'apikey: <your_api_key>'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("p",null,"200 OK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Warehouse D2",\n    "description": "Door from which goods leave the Warehouse",\n    "site": "urn:epc:id:sgln:9524678.90000.0",\n    "id": "urn:epc:id:sgln:9524678.90000.WarehouseD2",\n    "type": "BizLocation",\n    "sst": "210"\n}\n')),(0,r.kt)("p",null,"Other queries for Reference Data are also available, such as querying by type of Entity (at the moment only ",(0,r.kt)("inlineCode",{parentName:"p"},"BizLocation")," is supported) and by geo-location coordinates. "),(0,r.kt)("h2",{id:"tutorial-part-ii--recording-business-events-on-the-tangle"},"Tutorial Part II : Recording Business Events on the Tangle"),(0,r.kt)("p",null,"Through HTTP REST POST operations stakeholders can record EPCIS Business Events to the IOTA Tangle, thus building the supply chain data trail of objects (parts, goods, etc.). The figure shown above depicts this concept together with the conceptual relationship between Device Events (covered by the 101 Tutorial) and Business Events, subject of the present one. "),(0,r.kt)("h3",{id:"part-storing-into-the-suppliers-warehouse"},"Part storing into the Supplier's Warehouse"),(0,r.kt)("p",null,"The first business event that is going to be recorded is the storing of the part on the Supplier's Warehouse as described below. The origin of such business event could be, for instance, an RFID Read Device Event originated by an RFID Reader present at ",(0,r.kt)("inlineCode",{parentName:"p"},"Door 1")," of the Warehouse. Such a Device Event could have been also recorded on the Tangle as described by the ",(0,r.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-101#tutorial-part-ii--rfid-read-transactions"},"101 Tutorial")),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/events\' \\\n--header \'apikey: <your_api_key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "@context": "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",\n    "type": "ObjectEvent",\n    "epcList": [\n        "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"\n    ],\n    "action": "OBSERVE",\n    "eventTime": "2021-03-31T10:25:53.276Z",\n    "eventTimeZoneOffset": "+01:00",\n    "readPoint": { "id": "urn:epc:id:sgln:9524678.90000.WarehouseD1" },\n    "bizLocation": { "id": "urn:epc:id:sgln:9524678.90000.0" },\n    "bizStep": "storing"\n}\n\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"202 Accepted\n")),(0,r.kt)("p",null,"Response header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Location: /operation-log/e7eabd033...\n")),(0,r.kt)("p",null,"After executing the API operation, an asynchronous task (which can last tens of seconds) will be launched so that Business Events concerning the item are started to be tracked on the Tangle and the data is properly stored on the DLT. To follow the progress of such an operation under the ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," header you will find a resource that provides access to a log entry where you can follow the operation's status. For instance, if you perform"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/operation-log/774b824637986...' \\\n--header 'apikey: <Your API Key>'\n")),(0,r.kt)("p",null,"you can get access to the status of the operation that, ",(0,r.kt)("em",{parentName:"p"},"once completed"),", will look like as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "created": "2021-08-06T09:22:54.146Z",\n    "completed": "2021-08-06T09:23:12.659Z",\n    "id": "e7eabd033...",\n    "epcOrValue": "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012",\n    "operationType": "EPCIS",\n    "subOperationType": "publish",\n    "status": "ok",\n    "operationResult": "{\\"transactionId\\":\\"21510478d3a4f9347ccfbef4\\",\\"locator\\":\\"urn:iota-streams:devnet:4f2b1e84d92a507cbf41de82468d4ecc2edae2d971ab47663cffee191c04cee20000000000000000:3d4d5fea1c70d380dbd5e196:58e297f427ba545c941ef136\\"}"\n}\n')),(0,r.kt)("p",null,"You can observe the part (",(0,r.kt)("inlineCode",{parentName:"p"},"urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"),") is being identified using a ",(0,r.kt)("a",{parentName:"p",href:"https://www.vda.de/en/services/Publications/vda-5530-abv-according-to-iso-19987-%28epcis%29-v1.0-september-2017.html"},"VDA 5530 Object identifier"),". Our implementation supports VDA Identifiers, GS1 EPC Identifiers and ",(0,r.kt)("a",{parentName:"p",href:"https://www.gs1us.org/DesktopModules/Bring2mind/DMX/Download.aspx?Command=Core_Download&EntryId=2117"},"Digital Link")," Identifiers. "),(0,r.kt)("p",null,"The  ",(0,r.kt)("inlineCode",{parentName:"p"},"readPoint")," (Warehouse's ",(0,r.kt)("inlineCode",{parentName:"p"},"Door 1"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"bizLocation")," (the Supplier's Factory) have been set to the business locations we already created. "),(0,r.kt)("p",null,"The Business Event has been recorded on the Tangle (adding the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"recordTime"),") under a IOTA Stream created for that purpose. The details of the IOTA Streams Channel is provided under the ",(0,r.kt)("inlineCode",{parentName:"p"},"operationResult")," field of the log entry together with the event ID (",(0,r.kt)("inlineCode",{parentName:"p"},"transactionID"),"). "),(0,r.kt)("h3",{id:"part-shipping-by-the-supplier"},"Part Shipping by the Supplier"),(0,r.kt)("p",null,"The next event recorded is the shipping of the part by the supplier. In this case the ",(0,r.kt)("inlineCode",{parentName:"p"},"readPoint")," is the Warehouse's Door 2 and the  ",(0,r.kt)("inlineCode",{parentName:"p"},"bizLocation")," is again the Supplier's Factory. Again, this business event could have been generated using a Read or Scanning Device present at ",(0,r.kt)("inlineCode",{parentName:"p"},"Door 2")," of the Warehouse. "),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/events\' \\\n--header \'apikey: <your_api_key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "@context": "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",\n    "type": "ObjectEvent",\n    "epcList": [\n        "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"\n    ],\n    "action": "OBSERVE",\n    "eventTime": "2021-04-01T12:35:15.100Z",\n    "eventTimeZoneOffset": "+01:00",\n    "readPoint": { "id": "urn:epc:id:sgln:9524678.90000.WarehouseD2" },\n    "bizStep": "shipping",\n    "disposition": "in_progress"\n}\n\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"202 Accepted\n")),(0,r.kt)("p",null,"Response header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Location: /operation-log/65bade2b5...\n")),(0,r.kt)("h3",{id:"part-reception-by-the-oem"},"Part Reception by the OEM"),(0,r.kt)("p",null,"Once the logistics service provider arrives at the OEM site the part is delivered and received by the OEM. The corresponding business event, which origin will be again another device event is detailed below. In this case we only set the ",(0,r.kt)("inlineCode",{parentName:"p"},"bizLocation"),"(the OEM's Factory) as we have not modelled the internal subsidiary locations.  "),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/events\' \\\n--header \'apikey: <your_api_key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "@context": "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",\n    "type": "ObjectEvent",\n    "epcList": [\n        "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"\n    ],\n    "action": "OBSERVE",\n    "eventTime": "2021-04-02T16:15:10.200Z",\n    "eventTimeZoneOffset": "+01:00",\n    "bizLocation": { "id": "urn:epc:id:sgln:9524987.20000.0" },\n    "bizStep": "receiving",\n    "disposition": "in_progress"\n}\n\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"202 Accepted\n")),(0,r.kt)("p",null,"Response header: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Location: /operation-log/63cffee1...\n")),(0,r.kt)("h3",{id:"querying-the-supply-chain-data-trail-of-our-part"},"Querying the Supply Chain Data Trail of our part"),(0,r.kt)("p",null,"At any time we can query the supply chain data trail of our part by just by issuing an HTTP GET Request. In the example below we ask for just the last (",(0,r.kt)("inlineCode",{parentName:"p"},"lastN=1"),") business event known, operation that would be done by someone that needs to know the current location of the part. "),(0,r.kt)("p",null,"Remember that the sequence of business events is recorded on the Tangle, thus authenticity, confidentiality and immutability are preserved, enabling transparent, trusted and decentralized supply chains where multiple actors seamlessly intervene. "),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/events/urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012?lastN=1' \\\n--header 'apikey: <your_api_key>' \\\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("p",null,"200 OK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": [\n        "https://ref.gs1.org/standards/epcis/epcis-context.jsonld"\n    ],\n    "type": "EPCISDocument",\n    "eventList": [\n        {\n            "type": "ObjectEvent",\n            "epcList": [\n                "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"\n            ],\n            "action": "OBSERVE",\n            "eventTime": "2021-04-02T16:15:10.200Z",\n            "eventTimeZoneOffset": "+01:00",\n            "bizLocation": {\n                "id": "urn:epc:id:sgln:9542987.20000.0"\n            },\n            "bizStep": "receiving",\n            "disposition": "in_progress",\n            "recordTime": "2021-04-02T16:16:15.220Z",\n            "eventID": "21510478..."\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"You can observe that an ID (the corresponding IOTA Streams message ID) and a ",(0,r.kt)("inlineCode",{parentName:"p"},"recordTime")," has been added. Remember that you can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," parameter to get access to the different events on a paginated basis. "),(0,r.kt)("h3",{id:"obtaining-details-of-the-streams-channel-used-to-track-a-part"},"Obtaining details of the Streams Channel used to track a part"),(0,r.kt)("p",null,"As it happens with Device Events, applications that want to consume Events directly from the Tangle have the possibility of obtaining the details of the IOTA Streams Channel used to keep the supply chain data trail of an item."),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/events/channels/urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012' \\\n--header 'apikey: <your_api_key>' \\\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "locator": "urn:iota-streams:devnet:4f2b1e84d92a...:3d4d5fea1c70d380dbd5e196:58e297f427ba545c941ef136"\n}\n')),(0,r.kt)("p",null,"The URN returned with the locator provides the IOTA Streams channel ID that can be used to retrieve the different events from the Tangle (using the corresponding libraries such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tangle.js/tree/main/libs/anchors"},"anchors"),"). "),(0,r.kt)("p",null,"Note: The Streams Channel used to anchor the data on the Tangle is a ",(0,r.kt)("strong",{parentName:"p"},"private channel")," with a pre-shared key that is equal to\nthe API Key of the client. Thus, if you want to later fetch the transaction's data using the Streams libraries you need to subscribe to the Channel using such a pre-shared key. The seed of the channel's author is managed internally by the API, thus you will not get access to it."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103"},"Tutorial 103")," you can learn how to use the IOTA Identity Framework, so that actors are able to prove that their identity is verified and endorsed by trusted parties and is communicated peer-to-peer without the need for observers, both increasing privacy and trust. Thanks to IOTA Identity, we are also be able to link Device Events Data Trails and Business Events Data Trails improving traceability and accountability of supply chain processes. "),(0,r.kt)("h2",{id:"business-events-api-roadmap"},"Business Events API Roadmap"),(0,r.kt)("p",null,"The Track and Trace Ledger API (sandbox version) opens up a new world of business opportunities and applications thanks to the combination of IOTA and EPCIS 2.0. IOTA Foundation and Zebra technologies intend to continue working on improving and polishing the API by making it enterprise-ready and available on ZebraNet, a IOTA network specifically devoted to Zebra Savanna developers. "),(0,r.kt)("p",null,"We  plan to extend the number of EPCIS Events supported (",(0,r.kt)("inlineCode",{parentName:"p"},"AggregationEvent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TransformationEvent"),") and indexing and search capabilities to enable event filtering."))}d.isMDXComponent=!0},66173:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tangle-supply-chain-common-record-of-truth-c4bdfb57fbd44cb9966baa5efc9a31b3.png"}}]);