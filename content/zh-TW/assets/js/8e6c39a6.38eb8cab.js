"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1457],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47921:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],u={id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",sidebar_label:"Kubernetes"},s=void 0,c={unversionedId:"deploy-kubernetes",id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",description:"To get up and running with these charts as fast as possible, in a non-production use case, we provide a quick start guide for Proof of Concept (PoC) deployments.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/deploy-kubernetes.md",sourceDirName:".",slug:"/deploy-kubernetes",permalink:"/zh-TW/docs/next/deploy-kubernetes",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/deploy-kubernetes.md",tags:[],version:"current",frontMatter:{id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",sidebar_label:"Kubernetes"},sidebar:"docsSidebar",previous:{title:"Amazon Web Services",permalink:"/zh-TW/docs/next/deploy-aws"},next:{title:"Bare metal",permalink:"/zh-TW/docs/next/deploy-bare-metal"}},l={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get up and running with these charts as fast as possible, in a ",(0,a.kt)("strong",{parentName:"p"},"non-production")," use case, we provide a ",(0,a.kt)("a",{parentName:"p",href:"getting-started-helm"},"quick start guide")," for Proof of Concept (PoC) deployments."),(0,a.kt)("p",null,"To configure and install a Pulsar cluster on Kubernetes for production usage, follow the complete ",(0,a.kt)("a",{parentName:"p",href:"helm-install"},"Installation Guide"),"."))}d.isMDXComponent=!0}}]);