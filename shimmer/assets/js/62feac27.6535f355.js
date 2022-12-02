"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[81160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=l,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const i={keywords:["spec","meta-programming","compile"],description:"The spec of schema tool and how to develop schema tool.",image:"/img/logo/WASP_logo_dark.png"},r="Spec",o={unversionedId:"guide/wasm_vm/spec",id:"guide/wasm_vm/spec",title:"Spec",description:"The spec of schema tool and how to develop schema tool.",source:"@site/shimmer/external/wasp/documentation/docs/guide/wasm_vm/spec.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/spec",permalink:"/shimmer/smart-contracts/guide/wasm_vm/spec",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/wasm_vm/spec.mdx",tags:[],version:"current",frontMatter:{keywords:["spec","meta-programming","compile"],description:"The spec of schema tool and how to develop schema tool.",image:"/img/logo/WASP_logo_dark.png"}},p={},s=[{value:"Workflow",id:"workflow",level:2},{value:"Types",id:"types",level:2},{value:"model.SchemaDef",id:"modelschemadef",level:3},{value:"model.Schema",id:"modelschema",level:3},{value:"Compile",id:"compile",level:3},{value:"Comments",id:"comments",level:2},{value:"Header Comment and Line Comment",id:"header-comment-and-line-comment",level:3},{value:"Comment Block",id:"comment-block",level:3},{value:"Emitter",id:"emitter",level:2},{value:"Access Keys",id:"access-keys",level:3},{value:"Key And Plain String Concatenation",id:"key-and-plain-string-concatenation",level:3},{value:"Instructions",id:"instructions",level:3},{value:"emit",id:"emit",level:4},{value:"each",id:"each",level:4},{value:"event",id:"event",level:5},{value:"events",id:"events",level:5},{value:"func",id:"func",level:5},{value:"mandatory",id:"mandatory",level:5},{value:"param",id:"param",level:5},{value:"params",id:"params",level:5},{value:"result",id:"result",level:5},{value:"results",id:"results",level:5},{value:"state",id:"state",level:5},{value:"struct",id:"struct",level:5},{value:"structs",id:"structs",level:5},{value:"typedef",id:"typedef",level:5},{value:"func",id:"func-1",level:4},{value:"if",id:"if",level:4},{value:"array",id:"array",level:5},{value:"basetype",id:"basetype",level:5},{value:"core",id:"core",level:5},{value:"event",id:"event-1",level:5},{value:"events",id:"events-1",level:5},{value:"exist",id:"exist",level:5},{value:"func",id:"func-2",level:5},{value:"funcs",id:"funcs",level:5},{value:"init",id:"init",level:5},{value:"mandatory",id:"mandatory-1",level:5},{value:"map",id:"map",level:5},{value:"mut",id:"mut",level:5},{value:"param",id:"param-1",level:5},{value:"params",id:"params-1",level:5},{value:"ptrs",id:"ptrs",level:5},{value:"result",id:"result-1",level:5},{value:"results",id:"results-1",level:5},{value:"state",id:"state-1",level:5},{value:"structs",id:"structs-1",level:5},{value:"this",id:"this",level:5},{value:"typedef",id:"typedef-1",level:5},{value:"typedefs",id:"typedefs",level:5},{value:"view",id:"view",level:5},{value:"else",id:"else",level:5},{value:"set",id:"set",level:4}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spec"},"Spec"),(0,l.kt)("h2",{id:"workflow"},"Workflow"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"YAML file would be converted to a tree of ",(0,l.kt)("inlineCode",{parentName:"li"},"wasp_yaml.Node")),(0,l.kt)("li",{parentName:"ol"},"Convert the tree to a ",(0,l.kt)("inlineCode",{parentName:"li"},"model.SchemaDef")," object"),(0,l.kt)("li",{parentName:"ol"},"Compile the ",(0,l.kt)("inlineCode",{parentName:"li"},"model.SchemaDef")," object to ",(0,l.kt)("inlineCode",{parentName:"li"},"model.Schema")," object by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"Compile()")),(0,l.kt)("li",{parentName:"ol"},"Convert ",(0,l.kt)("inlineCode",{parentName:"li"},"model.Schema")," object to the Smart Contract of targeting languages")),(0,l.kt)("h2",{id:"types"},"Types"),(0,l.kt)("h3",{id:"modelschemadef"},"model.SchemaDef"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model.SchemaDef")," is a intermediate object during the Smart Contract generation. An YAML file will be converted to ",(0,l.kt)("inlineCode",{parentName:"p"},"model.SchemaDef")," object.\nDuring the conversion, each YAML attribute except the top-level ones (",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"events"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"structs"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"typedefs"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"funcs"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"views"),") will be converted into ",(0,l.kt)("inlineCode",{parentName:"p"},"DefElt"),"."),(0,l.kt)("p",null,"Therefore, for YAML tags ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"description"),", the values of them will be converted into 2 independent ",(0,l.kt)("inlineCode",{parentName:"p"},"DefElt"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"name: TestName\ndescription: This is test description\n")),(0,l.kt)("p",null,"For keywords that can have multiple values can be seen as either a one layer map (i.e., ",(0,l.kt)("inlineCode",{parentName:"p"},"typedefs")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"state"),")\nor two layer map (i.e., ",(0,l.kt)("inlineCode",{parentName:"p"},"typedefs")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"state"),"). A one layer map will be converted into  ",(0,l.kt)("inlineCode",{parentName:"p"},"DefMap")," which\nis a map whose key and value are both ",(0,l.kt)("inlineCode",{parentName:"p"},"DefElt"),". And a two layer map will be converted into  ",(0,l.kt)("inlineCode",{parentName:"p"},"DefMapMap")," which\nis a map whose key is ",(0,l.kt)("inlineCode",{parentName:"p"},"DefElt")," and value is ",(0,l.kt)("inlineCode",{parentName:"p"},"DefMap"),"."),(0,l.kt)("p",null,"The definition of ",(0,l.kt)("inlineCode",{parentName:"p"},"DefElt")," is shown as following,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type DefElt struct {\n    Val     string\n    Comment string\n    Line    int\n}\n")),(0,l.kt)("p",null,"It contains the raw value of the YAML attributes (without extracting the information), the comment belongs to the\nYAML attribute, and the line number of the YAML attribute."),(0,l.kt)("p",null,"Here is an example of one layer map"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"typedefs:\n  TestTypedef1: String\n  TestTypedef2: String\nstate:\n  TestState1: Int64[]\n  TestState2: Int64[]\n")),(0,l.kt)("p",null,"And an example of two layer map"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"structs:\n  point:\n    x: Int32\n    y: Int32\nfuncs:\n  testFunc:\n    params:\n      testFuncParam: Uint64\n    results:\n      testFuncResult: Uint64\nviews:\n  testView:\n    params:\n      testViewParam: Uint64\n    results:\n      testViewResult: Uint64\n")),(0,l.kt)("p",null,"Next, schema tool will set each fields in ",(0,l.kt)("inlineCode",{parentName:"p"},"SchemaDef")," variable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type SchemaDef struct {\n    Copyright   string\n    Name        DefElt\n    Description DefElt\n    Events      DefMapMap\n    Structs     DefMapMap\n    Typedefs    DefMap\n    State       DefMap\n    Funcs       FuncDefMap\n    Views       FuncDefMap\n}\n")),(0,l.kt)("h3",{id:"modelschema"},"model.Schema"),(0,l.kt)("p",null,"By calling ",(0,l.kt)("inlineCode",{parentName:"p"},"Schema.Compile()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"model.SchemaDef")," object will be compiled into ",(0,l.kt)("inlineCode",{parentName:"p"},"model.Schema"),".\nDuring the compilation, schema tool will extract the rules from the YAML attributes."),(0,l.kt)("p",null,"Here is the definition of a ",(0,l.kt)("inlineCode",{parentName:"p"},"Schema")," object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type Schema struct {\n    ContractName  string\n    Copyright     string\n    PackageName   string\n    Description   string\n    CoreContracts bool\n    SchemaTime    time.Time\n    Events        []*Struct\n    Funcs         []*Func\n    Params        []*Field\n    Results       []*Field\n    StateVars     []*Field\n    Structs       []*Struct\n    Typedefs      []*Field\n}\n")),(0,l.kt)("p",null,"And let's take a close look at ",(0,l.kt)("inlineCode",{parentName:"p"},"Field")," object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type Field struct {\n    Name       string // external name for this field\n    Alias      string // internal name alias, can be different from Name\n    Array      bool\n    FldComment string\n    MapKey     string\n    Optional   bool\n    Type       string\n    BaseType   bool\n    Comment    string\n    Line       int // the line number originally in yaml/json file\n}\n")),(0,l.kt)("p",null,"As you can see ",(0,l.kt)("inlineCode",{parentName:"p"},"typedefs")," was a simple ",(0,l.kt)("inlineCode",{parentName:"p"},"DefMap"),", which consists a map whose key and value are both ",(0,l.kt)("inlineCode",{parentName:"p"},"DefElt"),",\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"DefElt")," a simple object contains only raw string of the YAML attribute, comment and line number.\nHowever, after the compilation, information is extracted from the raw string, so do some checks are conducted in this step."),(0,l.kt)("h3",{id:"compile"},"Compile"),(0,l.kt)("p",null,"An emitter is used for filling corresponding values into templates under ",(0,l.kt)("inlineCode",{parentName:"p"},"tools/schema/generator"),".\nFor how to do meta-programming with emitter, see section ",(0,l.kt)("a",{parentName:"p",href:"#Emitter"},"Emitter")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type (\n    FieldMap       map[string]*Field\n    FieldMapMap    map[string]FieldMap\n    StringMap      map[string]string\n    StringMapMap   map[string]StringMap\n)\n")),(0,l.kt)("h2",{id:"comments"},"Comments"),(0,l.kt)("h3",{id:"header-comment-and-line-comment"},"Header Comment and Line Comment"),(0,l.kt)("p",null,"Header comment has higher priority than the line comment. If there are both header comment and line comment presented at\nsame YAML attribute, then schema tool will keep only the header comment."),(0,l.kt)("h3",{id:"comment-block"},"Comment Block"),(0,l.kt)("p",null,"A comment block is a chunk of comment that doesn't have a line break to separate it. Schema tool would take the\nheader comment that immediately followed by the YAML attribute or the line comment block if header comment block is not\npresented."),(0,l.kt)("p",null,"Therefore, for the following case"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"typedefs:\n  # header comment 1\n  # header comment 2\n\n  # header comment 3\n  # header comment 4\n  TestTypedef: String # line comment 1\n                      # line comment 2\n")),(0,l.kt)("p",null,"only these 2 lines "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# header comment 3\n# header comment 4\n")),(0,l.kt)("p",null,"will be kept and presented in the final Smart Contract."),(0,l.kt)("p",null,"And the next case "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"typedefs:\n  TestTypedef: String # line comment 1\n                      # line comment 2\n\n                      # line comment 3\n                      # line comment 4\n")),(0,l.kt)("p",null,"only these 2 lines "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# line comment 1\n# line comment 2\n")),(0,l.kt)("p",null,"will be kept and presented in the final Smart Contract."),(0,l.kt)("h2",{id:"emitter"},"Emitter"),(0,l.kt)("h3",{id:"access-keys"},"Access Keys"),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"$")," prepending a key (keys are set in ",(0,l.kt)("inlineCode",{parentName:"p"},"GenBase.setCommonKeys()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"GenBase.setFieldKeys()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"GenBase.setFuncKeys()"),"),  schema tool can access the value of the key in ",(0,l.kt)("inlineCode",{parentName:"p"},"GenBase.keys")," according to the current context. For example, if you want to access lower case package name, you can access it with ",(0,l.kt)("inlineCode",{parentName:"p"},"$package"),".\nTo dynamically add a new key in templates (under gotemplates, rstemplates, and tstemplates), you can call ",(0,l.kt)("inlineCode",{parentName:"p"},"$#set")," instruction, see section ",(0,l.kt)("a",{parentName:"p",href:"#set"},"set")," for more information."),(0,l.kt)("h3",{id:"key-and-plain-string-concatenation"},"Key And Plain String Concatenation"),(0,l.kt)("p",null,"To concatenate a value from accessing key and a plain string, you should use ",(0,l.kt)("inlineCode",{parentName:"p"},"$+")," operator.\nFor example, here ",(0,l.kt)("inlineCode",{parentName:"p"},"FuncName"),' is a key that preserves the name of the function under current context, and we want to concatenate the function name with "Mutable" and "Results".\nIn other words, we want to do the same task as the following python code and get the result in ',(0,l.kt)("inlineCode",{parentName:"p"},"result")," variable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'func_name = "..." # function name under current context\nresult = "Mutable" + func_name + "Results" # concatenate the strings into the result\n')),(0,l.kt)("p",null,"In the schema template language, we should call ",(0,l.kt)("inlineCode",{parentName:"p"},"Mutable$FuncName$+Results"),"."),(0,l.kt)("h3",{id:"instructions"},"Instructions"),(0,l.kt)("p",null,"Keywords follows ",(0,l.kt)("inlineCode",{parentName:"p"},"$#")," are the instructions defined in our schema template language. One thing you should aware, now, all the instruction should be presented at the beginning of each line. In other words, no spaces and characters are allowed to exist ahead of an instruction.\nHere is the list of all the instruction keywords."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"emit"),(0,l.kt)("li",{parentName:"ul"},"each"),(0,l.kt)("li",{parentName:"ul"},"func"),(0,l.kt)("li",{parentName:"ul"},"if"),(0,l.kt)("li",{parentName:"ul"},"set")),(0,l.kt)("p",null,"We are going to introduce how to use each instruction as follows. Or you can check the implementation of ",(0,l.kt)("inlineCode",{parentName:"p"},"GenBase.emit()")," to know how are they implemented in detailed."),(0,l.kt)("h4",{id:"emit"},"emit"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"emit")," is using for expanding templates. The syntax of ",(0,l.kt)("inlineCode",{parentName:"p"},"emit")," instruction is "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$#emit template\n")),(0,l.kt)("p",null,"Here, ",(0,l.kt)("inlineCode",{parentName:"p"},"template")," is any template which defined under gotemplates,rstemplates).\nTemplates are defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"model.StringMap"),". In the instruction call of ",(0,l.kt)("inlineCode",{parentName:"p"},"emit")," just simply use the name of the template (the key in ",(0,l.kt)("inlineCode",{parentName:"p"},"model.StringMap"),").\nIf you want to insert the ",(0,l.kt)("inlineCode",{parentName:"p"},"copyright")," template to a assigned location, then you should call "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$#emit copyright\n")),(0,l.kt)("h4",{id:"each"},"each"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"each")," processes the template for each item in the array. The syntax of ",(0,l.kt)("inlineCode",{parentName:"p"},"each")," instruction is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$#each array template\n")),(0,l.kt)("p",null,"Here ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," is either a predefined keyword (we are going to introduce each of them as follow) or a multi-lines string.\nIf a multi-lines string is presented, then the multi-lines string will be expanded and append newline escape character of targeting languages in the end of each line."),(0,l.kt)("h5",{id:"event"},"event"),(0,l.kt)("p",null,"Iterate the fields in a event."),(0,l.kt)("h5",{id:"events"},"events"),(0,l.kt)("p",null,"Iterate all the ",(0,l.kt)("inlineCode",{parentName:"p"},"events")," in the contract."),(0,l.kt)("h5",{id:"func"},"func"),(0,l.kt)("p",null,"Iterate all the ",(0,l.kt)("inlineCode",{parentName:"p"},"funcs")," in the contract."),(0,l.kt)("h5",{id:"mandatory"},"mandatory"),(0,l.kt)("p",null,"Iterate all the mandatory fields in the current processed function. The mandatory field must be basetype and not an array or a map."),(0,l.kt)("h5",{id:"param"},"param"),(0,l.kt)("p",null,"Iterate all the ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," fields in the current processed function."),(0,l.kt)("h5",{id:"params"},"params"),(0,l.kt)("p",null,"Iterate all the ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," fields in the current contract."),(0,l.kt)("h5",{id:"result"},"result"),(0,l.kt)("p",null,"Iterate all the ",(0,l.kt)("inlineCode",{parentName:"p"},"results")," fields in the current processed function."),(0,l.kt)("h5",{id:"results"},"results"),(0,l.kt)("p",null,"Iterate all the ",(0,l.kt)("inlineCode",{parentName:"p"},"results")," fields in the current contract."),(0,l.kt)("h5",{id:"state"},"state"),(0,l.kt)("p",null,"Iterate all the ",(0,l.kt)("inlineCode",{parentName:"p"},"state")," in the contract."),(0,l.kt)("h5",{id:"struct"},"struct"),(0,l.kt)("p",null,"Iterate the fields in a struct."),(0,l.kt)("h5",{id:"structs"},"structs"),(0,l.kt)("p",null,"Iterate all the ",(0,l.kt)("inlineCode",{parentName:"p"},"structs")," in the contract."),(0,l.kt)("h5",{id:"typedef"},"typedef"),(0,l.kt)("p",null,"Iterate all the typedefs in the contract."),(0,l.kt)("h4",{id:"func-1"},"func"),(0,l.kt)("p",null,"Currently not used."),(0,l.kt)("h4",{id:"if"},"if"),(0,l.kt)("p",null,"The syntax of ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," is "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$#if condition template [elseTemplate]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"if")," processes template when the named condition is true, and it processes the optional ",(0,l.kt)("inlineCode",{parentName:"p"},"elseTemplate")," when the named condition is false"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"condition")," is either the predefined conditions (explained as following) or a key that may exist in ",(0,l.kt)("inlineCode",{parentName:"p"},"keys"),".\nIf a key is presented, then ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," instruction would be used for check whether this key exists in ",(0,l.kt)("inlineCode",{parentName:"p"},"keys")," or not. If the key exists, then ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," will return true, otherwise it will return false."),(0,l.kt)("p",null,"And here are the predefined conditions."),(0,l.kt)("h5",{id:"array"},"array"),(0,l.kt)("p",null,"Is the current processed field an array?"),(0,l.kt)("h5",{id:"basetype"},"basetype"),(0,l.kt)("p",null,"Is the current processed field in basetype? ",(0,l.kt)("inlineCode",{parentName:"p"},"basetype"),"s are defined in the map ",(0,l.kt)("inlineCode",{parentName:"p"},"FieldTypes")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"tools/schema/model/field.go"),"."),(0,l.kt)("h5",{id:"core"},"core"),(0,l.kt)("p",null,"Is the current processed contract a core contract?"),(0,l.kt)("h5",{id:"event-1"},"event"),(0,l.kt)("p",null,"Does the current processed event have any field?"),(0,l.kt)("h5",{id:"events-1"},"events"),(0,l.kt)("p",null,"Is there any event in the current processed contract?"),(0,l.kt)("h5",{id:"exist"},"exist"),(0,l.kt)("p",null,"Does the value of key ",(0,l.kt)("inlineCode",{parentName:"p"},"proxy")," exist?"),(0,l.kt)("h5",{id:"func-2"},"func"),(0,l.kt)("p",null,"Is the current processed function a ",(0,l.kt)("inlineCode",{parentName:"p"},"func")," or a ",(0,l.kt)("inlineCode",{parentName:"p"},"view"),"? Return true if it is a ",(0,l.kt)("inlineCode",{parentName:"p"},"func"),"."),(0,l.kt)("h5",{id:"funcs"},"funcs"),(0,l.kt)("p",null,"Is there any function in the current processed contract?"),(0,l.kt)("h5",{id:"init"},"init"),(0,l.kt)("p",null,"Is the current function an init function? An init function will automatically be called immediately after the first time the contract has been deployed to the VM."),(0,l.kt)("h5",{id:"mandatory-1"},"mandatory"),(0,l.kt)("p",null,"Is current field a mandatory field?"),(0,l.kt)("h5",{id:"map"},"map"),(0,l.kt)("p",null,"Is current processed field a map (check if the ",(0,l.kt)("inlineCode",{parentName:"p"},"currentField.MapKey")," is empty)?"),(0,l.kt)("h5",{id:"mut"},"mut"),(0,l.kt)("p",null,"Is the value in key ",(0,l.kt)("inlineCode",{parentName:"p"},"mut")," Mutable?"),(0,l.kt)("h5",{id:"param-1"},"param"),(0,l.kt)("p",null,"Does the current processed function have any parameter?"),(0,l.kt)("h5",{id:"params-1"},"params"),(0,l.kt)("p",null,"Does the current contract have any ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," field?"),(0,l.kt)("h5",{id:"ptrs"},"ptrs"),(0,l.kt)("p",null,"Does the current processed function have either ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"results"),". This is used for implementing function object in Rust and TypeScript."),(0,l.kt)("h5",{id:"result-1"},"result"),(0,l.kt)("p",null,"Does the current processed function have any return value?"),(0,l.kt)("h5",{id:"results-1"},"results"),(0,l.kt)("p",null,"Does the current contract have any ",(0,l.kt)("inlineCode",{parentName:"p"},"results")," field?"),(0,l.kt)("h5",{id:"state-1"},"state"),(0,l.kt)("p",null,"Does the current contract have any ",(0,l.kt)("inlineCode",{parentName:"p"},"state")," field?"),(0,l.kt)("h5",{id:"structs-1"},"structs"),(0,l.kt)("p",null,"Does the current contract have any ",(0,l.kt)("inlineCode",{parentName:"p"},"structs")," field?"),(0,l.kt)("h5",{id:"this"},"this"),(0,l.kt)("p",null,"Is the alias name of the current processed field ",(0,l.kt)("inlineCode",{parentName:"p"},"this"),"?"),(0,l.kt)("h5",{id:"typedef-1"},"typedef"),(0,l.kt)("p",null,"Is the current processed field a ",(0,l.kt)("inlineCode",{parentName:"p"},"typedef"),"?"),(0,l.kt)("h5",{id:"typedefs"},"typedefs"),(0,l.kt)("p",null,"Does the current contract have any ",(0,l.kt)("inlineCode",{parentName:"p"},"typedefs")," field?"),(0,l.kt)("h5",{id:"view"},"view"),(0,l.kt)("p",null,"Is the current processed function a ",(0,l.kt)("inlineCode",{parentName:"p"},"view")," or a ",(0,l.kt)("inlineCode",{parentName:"p"},"func"),"? Return true if it is a ",(0,l.kt)("inlineCode",{parentName:"p"},"view"),"."),(0,l.kt)("h5",{id:"else"},"else"),(0,l.kt)("p",null,"If you want to process a template under negate condition, then you can call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$#if condition else elseTemplate\n")),(0,l.kt)("p",null,"Here ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," is a predefined empty template, which is defined at[",(0,l.kt)("inlineCode",{parentName:"p"},"tools/schema/generator/templates.go"),"."),(0,l.kt)("h4",{id:"set"},"set"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"set")," is used for To dynamically specify a value to a certain key. The syntax is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$#set key value\n")),(0,l.kt)("p",null,"For example, if you want to dynamically add a new key ",(0,l.kt)("inlineCode",{parentName:"p"},"initFunc")," with the value in key ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," you can call "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$#set initFunc $nil\n")),(0,l.kt)("p",null,"A special key ",(0,l.kt)("inlineCode",{parentName:"p"},"exist")," is used to add a newly generated type."))}d.isMDXComponent=!0}}]);