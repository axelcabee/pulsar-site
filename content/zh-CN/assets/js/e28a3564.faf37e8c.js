"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4101],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=l,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16651:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(83117),l=r(80102),o=(r(67294),r(3905)),a=["components"],i={id:"helm-tools",title:"Required tools for deploying Pulsar Helm Chart",sidebar_label:"Required Tools"},s=void 0,u={unversionedId:"helm-tools",id:"helm-tools",title:"Required tools for deploying Pulsar Helm Chart",description:"Before deploying Pulsar to your Kubernetes cluster, there are some tools you must have installed locally.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/helm-tools.md",sourceDirName:".",slug:"/helm-tools",permalink:"/zh-CN/docs/next/helm-tools",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/helm-tools.md",tags:[],version:"current",frontMatter:{id:"helm-tools",title:"Required tools for deploying Pulsar Helm Chart",sidebar_label:"Required Tools"},sidebar:"docsSidebar",previous:{title:"Upgrade",permalink:"/zh-CN/docs/next/helm-upgrade"},next:{title:"Amazon Web Services",permalink:"/zh-CN/docs/next/deploy-aws"}},c={},p=[{value:"kubectl",id:"kubectl",level:2},{value:"Helm",id:"helm",level:2},{value:"Get Helm",id:"get-helm",level:3},{value:"Next steps",id:"next-steps",level:3},{value:"Additional information",id:"additional-information",level:2},{value:"Templates",id:"templates",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before deploying Pulsar to your Kubernetes cluster, there are some tools you must have installed locally."),(0,o.kt)("h2",{id:"kubectl"},"kubectl"),(0,o.kt)("p",null,"kubectl is the tool that talks to the Kubernetes API. kubectl 1.14 or higher is required and it needs to be compatible with your cluster (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")."),(0,o.kt)("p",null,"To Install kubectl locally, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"Kubernetes documentation"),"."),(0,o.kt)("p",null,"The server version of kubectl cannot be obtained until we connect to a cluster."),(0,o.kt)("h2",{id:"helm"},"Helm"),(0,o.kt)("p",null,"Helm is the package manager for Kubernetes. The Apache Pulsar Helm Chart is tested and supported with Helm v3."),(0,o.kt)("h3",{id:"get-helm"},"Get Helm"),(0,o.kt)("p",null,"You can get Helm from the project's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"releases page"),", or follow other options under the official documentation of ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"installing Helm"),"."),(0,o.kt)("h3",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Once kubectl and Helm are configured, you can configure your ",(0,o.kt)("a",{parentName:"p",href:"helm-prepare"},"Kubernetes cluster"),"."),(0,o.kt)("h2",{id:"additional-information"},"Additional information"),(0,o.kt)("h3",{id:"templates"},"Templates"),(0,o.kt)("p",null,"Templating in Helm is done through Golang's ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"text/template")," and ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/Masterminds/sprig"},"sprig"),"."),(0,o.kt)("p",null,"For more information about how all the inner workings behave, check these documents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/functions_and_pipelines/"},"Functions and Pipelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/subcharts_and_globals/"},"Subcharts and Globals"))),(0,o.kt)("h3",{id:"tips-and-tricks"},"Tips and tricks"),(0,o.kt)("p",null,"For additional information on developing with Helm, check ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/howto/charts_tips_and_tricks/"},"tips and tricks section")," in the Helm repository."))}d.isMDXComponent=!0}}]);