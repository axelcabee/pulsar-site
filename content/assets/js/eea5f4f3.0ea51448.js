(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85581],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=l(r),m=o,u=v["".concat(i,".").concat(m)]||v[m]||d[m]||a;return r?n.createElement(u,s(s({ref:t},p),{},{components:r})):n.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[v]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53184:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(87462),o=r(63366),a=r(67294),s=r(86010),c=r(94780),i=r(44063),l=r(68010),p=r(90948),v=r(1588),d=r(34867);function m(e){return(0,d.Z)("MuiTableHead",e)}(0,v.Z)("MuiTableHead",["root"]);var u=r(85893);const g=["className","component"],b=(0,p.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),N={variant:"head"},f="thead",x=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiTableHead"}),{className:a,component:p=f}=r,v=(0,o.Z)(r,g),d=(0,n.Z)({},r,{component:p}),x=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},m,t)})(d);return(0,u.jsx)(i.Z.Provider,{value:N,children:(0,u.jsx)(b,(0,n.Z)({as:p,className:(0,s.Z)(x.root,a),ref:t,role:p===f?null:"rowgroup",ownerState:d},v))})}))},51726:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(55063),s=r(12211),c=r.n(s);const i={id:"client-cpp",title:"C++ Client Release Notes",sidebar_label:"C++ Client"},l=void 0,p={unversionedId:"client-cpp",id:"client-cpp",title:"C++ Client Release Notes",description:"",source:"@site/release-notes/client-cpp.mdx",sourceDirName:".",slug:"/client-cpp",permalink:"/release-notes/client-cpp",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp",title:"C++ Client Release Notes",sidebar_label:"C++ Client"},sidebar:"releaseNote",previous:{title:"WebSocket Client",permalink:"/release-notes/client-ws"},next:{title:"Python Client",permalink:"/release-notes/client-python"}},v={},d=[],m={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{data:c(),mdxType:"ClientReleaseTable"}))}u.isMDXComponent=!0},12211:e=>{e.exports=[{tagName:"v3.1.0",vtag:"3.1.0",releaseNotes:"/release-notes/versioned/client-cpp-3.1.0/",doc:"/docs/client-libraries-cpp",version:"v3.1.x"},{tagName:"v3.0.0",vtag:"3.0.0",releaseNotes:"/release-notes/versioned/client-cpp-3.0.0/",doc:"/docs/client-libraries-cpp",version:"v3.0.x"},{tagName:"v2.10.2",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.2/",doc:"/docs/client-libraries-cpp",version:"v2.10.x"},{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.1/",doc:"/docs/client-libraries-cpp",version:""},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.0/",doc:"/docs/client-libraries-cpp",version:""},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-cpp-2.9.3/",doc:"/docs/2.9.x/client-libraries-cpp",version:"v2.9.x"},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-cpp-2.9.2/",doc:"/docs/2.9.x/client-libraries-cpp",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.4/",doc:"/docs/2.8.x/client-libraries-cpp",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.3/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.2/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.1/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.0/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.7.5",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/client-cpp-2.7.5/",doc:"/docs/2.7.5/client-libraries-cpp",version:"v2.7.x"},{tagName:"v2.7.4",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/client-cpp-2.7.4/",doc:"/docs/2.7.4/client-libraries-cpp",version:""},{tagName:"v2.7.3",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/client-cpp-2.7.3/",doc:"/docs/2.7.3/client-libraries-cpp",version:""},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-cpp-2.7.2/",doc:"/docs/2.7.2/client-libraries-cpp",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-cpp-2.7.1/",doc:"/docs/2.7.1/client-libraries-cpp",version:""},{tagName:"v2.7.0",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/client-cpp-2.7.0/",doc:"/docs/2.7.0/client-libraries-cpp",version:""},{tagName:"v2.6.4",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/client-cpp-2.6.4/",doc:"/docs/2.6.4/client-libraries-cpp",version:"v2.6.x"},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-cpp-2.6.2/",doc:"/docs/2.6.2/client-libraries-cpp",version:""},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-cpp-2.5.1/",doc:"/docs/2.5.1/client-libraries-cpp",version:"v2.5.x"}]},55063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(67294),o=r(7906),a=r(295),s=r(53252),c=r(53184),i=r(53816),l=r(95999);function p(e){return n.createElement(o.Z,{size:"small"},n.createElement(c.Z,null,n.createElement(i.Z,null,["Version","Release Note","Documentation"].map((e=>n.createElement(s.Z,{className:"font-bold",sx:{color:"inherit"},key:e},n.createElement(l.Z,null,e)))))),n.createElement(a.Z,null,e.data.map(((e,t)=>n.createElement(i.Z,{key:t,sx:{color:"inherit"}},n.createElement(s.Z,{sx:{color:"inherit"}},e.version),n.createElement(s.Z,{sx:{color:"inherit"}},n.createElement("a",{href:e.releaseNotes},e.tagName)),n.createElement(s.Z,{sx:{color:"inherit"}},n.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);