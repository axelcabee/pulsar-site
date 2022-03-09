"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[363],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86215:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview"},c=void 0,u={unversionedId:"sql-overview",id:"sql-overview",title:"Pulsar SQL Overview",description:"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the Schema Registry, you can store structured data in Pulsar and query the data by using Trino (formerly Presto SQL).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/sql-overview.md",sourceDirName:".",slug:"/sql-overview",permalink:"/fr/docs/next/sql-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/sql-overview.md",tags:[],version:"current",frontMatter:{id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"CLI",permalink:"/fr/docs/next/io-cli"},next:{title:"Query data",permalink:"/fr/docs/next/sql-getting-started"}},l={},p=[],d={toc:p};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the ",(0,o.kt)("a",{parentName:"p",href:"schema-get-started"},"Schema Registry"),", you can store structured data in Pulsar and query the data by using ",(0,o.kt)("a",{parentName:"p",href:"https://trino.io/"},"Trino (formerly Presto SQL)"),"."),(0,o.kt)("p",null,"As the core of Pulsar SQL, Presto Pulsar connector enables Presto workers within a Presto cluster to query data from Pulsar."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"The Pulsar consumer and reader interfaces",src:r(30428).Z,width:"1847",height:"854"})),(0,o.kt)("p",null,"The query performance is efficient and highly scalable, because Pulsar adopts ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/next/concepts-architecture-overview#apache-bookkeeper"},"two level segment based architecture"),"."),(0,o.kt)("p",null,"Topics in Pulsar are stored as segments in ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/"},"Apache BookKeeper"),". Each topic segment is replicated to some BookKeeper nodes, which enables concurrent reads and high read throughput. You can configure the number of BookKeeper nodes, and the default number is ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),". In Presto Pulsar connector, data is read directly from BookKeeper, so Presto workers can read concurrently from horizontally scalable number BookKeeper nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"The Pulsar consumer and reader interfaces",src:r(29147).Z,width:"1847",height:"854"})))}f.isMDXComponent=!0},29147:function(e,t,r){t.Z=r.p+"assets/images/pulsar-sql-arch-1-8b257e31ca5666ee351dbd8bfd3289aa.png"},30428:function(e,t,r){t.Z=r.p+"assets/images/pulsar-sql-arch-2-a5eba8dcb20b1e762f3f459e05bad282.png"}}]);