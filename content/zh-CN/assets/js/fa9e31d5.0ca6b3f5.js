"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2033],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),s=["components"],o={id:"concepts-multi-tenancy",title:"Multi Tenancy",sidebar_label:"Multi Tenancy"},c=void 0,l={unversionedId:"concepts-multi-tenancy",id:"concepts-multi-tenancy",title:"Multi Tenancy",description:"Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own authentication and authorization scheme applied to them. They are also the administrative unit at which storage quotas, message TTL, and isolation policies can be managed.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/concepts-multi-tenancy.md",sourceDirName:".",slug:"/concepts-multi-tenancy",permalink:"/zh-CN/docs/next/concepts-multi-tenancy",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/concepts-multi-tenancy.md",tags:[],version:"current",frontMatter:{id:"concepts-multi-tenancy",title:"Multi Tenancy",sidebar_label:"Multi Tenancy"},sidebar:"docsSidebar",previous:{title:"Geo Replication",permalink:"/zh-CN/docs/next/concepts-replication"},next:{title:"Authentication and Authorization",permalink:"/zh-CN/docs/next/concepts-authentication"}},p={},u=[{value:"Tenants",id:"tenants",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Namespace change events and topic-level policies",id:"namespace-change-events-and-topic-level-policies",level:3}],m={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own ",(0,r.kt)("a",{parentName:"p",href:"security-overview"},"authentication and authorization")," scheme applied to them. They are also the administrative unit at which storage quotas, ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/cookbooks-retention-expiry#time-to-live-ttl"},"message TTL"),", and isolation policies can be managed."),(0,r.kt)("p",null,"The multi-tenant nature of Pulsar is reflected mostly visibly in topic URLs, which have this structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npersistent://tenant/namespace/topic\n\n")),(0,r.kt)("p",null,"As you can see, the tenant is the most basic unit of categorization for topics (more fundamental than the namespace and topic name)."),(0,r.kt)("h2",{id:"tenants"},"Tenants"),(0,r.kt)("p",null,"To each tenant in a Pulsar instance you can assign:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"security-authorization"},"authorization")," scheme"),(0,r.kt)("li",{parentName:"ul"},"The set of ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/reference-terminology#cluster"},"clusters")," to which the tenant's configuration applies")),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"Tenants and namespaces are two key concepts of Pulsar to support multi-tenancy."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pulsar is provisioned for specified tenants with appropriate capacity allocated to the tenant."),(0,r.kt)("li",{parentName:"ul"},"A namespace is the administrative unit nomenclature within a tenant. The configuration policies set on a namespace apply to all the topics created in that namespace. A tenant may create multiple namespaces via self-administration using the REST API and the ",(0,r.kt)("a",{parentName:"li",href:"reference-pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool. For instance, a tenant with different applications can create a separate namespace for each application.")),(0,r.kt)("p",null,"Names for topics in the same namespace will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npersistent://tenant/app1/topic-1\n\npersistent://tenant/app1/topic-2\n\npersistent://tenant/app1/topic-3\n\n")),(0,r.kt)("h3",{id:"namespace-change-events-and-topic-level-policies"},"Namespace change events and topic-level policies"),(0,r.kt)("p",null,"Pulsar is a multi-tenant event streaming system. Administrators can manage the tenants and namespaces by setting policies at different levels. However, the policies, such as retention policy and storage quota policy, are only available at a namespace level. In many use cases, users need to set a policy at the topic level. The namespace change events approach is proposed for supporting topic-level policies in an efficient way. In this approach, Pulsar is used as an event log to store namespace change events (such as topic policy changes). This approach has a few benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid using ZooKeeper and introduce more loads to ZooKeeper."),(0,r.kt)("li",{parentName:"ul"},"Use Pulsar as an event log for propagating the policy cache. It can scale efficiently."),(0,r.kt)("li",{parentName:"ul"},"Use Pulsar SQL to query the namespace changes and audit the system.")),(0,r.kt)("p",null,"Each namespace has a system topic ",(0,r.kt)("inlineCode",{parentName:"p"},"__change_events"),". This system topic is used for storing change events for a given namespace. The following figure illustrates how to use namespace change events to implement a topic-level policy."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pulsar Admin clients communicate with the Admin Restful API to update topic level policies."),(0,r.kt)("li",{parentName:"ol"},"Any broker that receives the Admin HTTP request publishes a topic policy change event to the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"__change_events")," topic of the namespace."),(0,r.kt)("li",{parentName:"ol"},"Each broker that owns a namespace bundle(s) subscribes to the ",(0,r.kt)("inlineCode",{parentName:"li"},"__change_events")," topic to receive change events of the namespace. It then applies the change events to the policy cache."),(0,r.kt)("li",{parentName:"ol"},"Once the policy cache is updated, the broker sends the response back to the Pulsar Admin clients.")))}h.isMDXComponent=!0}}]);