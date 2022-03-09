"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9639],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=s(n),h=o,d=f["".concat(u,".").concat(h)]||f[h]||l[h]||a;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96563:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization"},u=void 0,s={unversionedId:"concepts-authentication",id:"concepts-authentication",title:"Authentication and Authorization",description:"Pulsar supports a pluggable authentication mechanism which can be configured at the proxy and/or the broker. Pulsar also supports a pluggable authorization mechanism. These mechanisms work together to identify the client and its access rights on topics, namespaces and tenants.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/concepts-authentication.md",sourceDirName:".",slug:"/concepts-authentication",permalink:"/fr/docs/next/concepts-authentication",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/concepts-authentication.md",tags:[],version:"current",frontMatter:{id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization"},sidebar:"docsSidebar",previous:{title:"Multi Tenancy",permalink:"/fr/docs/next/concepts-multi-tenancy"},next:{title:"Topic Compaction",permalink:"/fr/docs/next/concepts-topic-compaction"}},p={},l=[],f={toc:l};function h(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pulsar supports a pluggable ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/next/security-overview"},"authentication")," mechanism which can be configured at the proxy and/or the broker. Pulsar also supports a pluggable ",(0,a.kt)("a",{parentName:"p",href:"security-authorization"},"authorization")," mechanism. These mechanisms work together to identify the client and its access rights on topics, namespaces and tenants."))}h.isMDXComponent=!0}}]);