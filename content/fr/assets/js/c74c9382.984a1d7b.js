"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3147],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71568:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],u={id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",sidebar_label:"Kubernetes"},s=void 0,c={unversionedId:"deploy-kubernetes",id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",description:"To get up and running with these charts as fast as possible, in a non-production use case, we provide a quick start guide for Proof of Concept (PoC) deployments.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/deploy-kubernetes.md",sourceDirName:".",slug:"/deploy-kubernetes",permalink:"/fr/docs/next/deploy-kubernetes",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/deploy-kubernetes.md",tags:[],version:"current",frontMatter:{id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",sidebar_label:"Kubernetes"},sidebar:"docsSidebar",previous:{title:"Amazon Web Services",permalink:"/fr/docs/next/deploy-aws"},next:{title:"Bare metal",permalink:"/fr/docs/next/deploy-bare-metal"}},l={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get up and running with these charts as fast as possible, in a ",(0,a.kt)("strong",{parentName:"p"},"non-production")," use case, we provide a ",(0,a.kt)("a",{parentName:"p",href:"getting-started-helm"},"quick start guide")," for Proof of Concept (PoC) deployments."),(0,a.kt)("p",null,"To configure and install a Pulsar cluster on Kubernetes for production usage, follow the complete ",(0,a.kt)("a",{parentName:"p",href:"helm-install"},"Installation Guide"),"."))}d.isMDXComponent=!0}}]);