"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4969],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:s,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(83117),s=n(80102),i=(n(67294),n(3905)),l=["components"],a={id:"concepts-multiple-advertised-listeners",title:"Multiple advertised listeners",sidebar_label:"Multiple advertised listeners",original_id:"concepts-multiple-advertised-listeners"},o=void 0,u={unversionedId:"concepts-multiple-advertised-listeners",id:"version-2.9.1/concepts-multiple-advertised-listeners",title:"Multiple advertised listeners",description:"When a Pulsar cluster is deployed in the production environment, it may require to expose multiple advertised addresses for the broker. For example, when you deploy a Pulsar cluster in Kubernetes and want other clients, which are not in the same Kubernetes cluster, to connect to the Pulsar cluster, you need to assign a broker URL to external clients. But clients in the same Kubernetes cluster can still connect to the Pulsar cluster through the internal network of Kubernetes.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-2.9.1/concepts-multiple-advertised-listeners.md",sourceDirName:".",slug:"/concepts-multiple-advertised-listeners",permalink:"/zh-TW/docs/concepts-multiple-advertised-listeners",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/concepts-multiple-advertised-listeners.md",tags:[],version:"2.9.1",frontMatter:{id:"concepts-multiple-advertised-listeners",title:"Multiple advertised listeners",sidebar_label:"Multiple advertised listeners",original_id:"concepts-multiple-advertised-listeners"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Proxy support with SNI routing",permalink:"/zh-TW/docs/concepts-proxy-sni-routing"},next:{title:"Get started",permalink:"/zh-TW/docs/schema-get-started"}},c={},p=[{value:"Advertised listeners",id:"advertised-listeners",level:2},{value:"Use multiple advertised listeners",id:"use-multiple-advertised-listeners",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When a Pulsar cluster is deployed in the production environment, it may require to expose multiple advertised addresses for the broker. For example, when you deploy a Pulsar cluster in Kubernetes and want other clients, which are not in the same Kubernetes cluster, to connect to the Pulsar cluster, you need to assign a broker URL to external clients. But clients in the same Kubernetes cluster can still connect to the Pulsar cluster through the internal network of Kubernetes."),(0,i.kt)("h2",{id:"advertised-listeners"},"Advertised listeners"),(0,i.kt)("p",null,"To ensure clients in both internal and external networks can connect to a Pulsar cluster, Pulsar introduces ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"internalListenerName")," configuration options into the ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-configuration#broker"},"broker configuration file")," to ensure that the broker supports exposing multiple advertised listeners and support the separation of internal and external network traffic."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," is used to specify multiple advertised listeners. The broker uses the listener as the broker identifier in the load manager and the bundle owner data. The ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," is formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"<listener_name>:pulsar://<host>:<port>, <listener_name>:pulsar+ssl://<host>:<port>"),". You can set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisedListeners=internal:pulsar://192.168.1.11:6660,internal:pulsar+ssl://192.168.1.11:6651"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"internalListenerName")," is used to specify the internal service URL that the broker uses. You can specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"internalListenerName")," by choosing one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisedListeners"),". The broker uses the listener name of the first advertised listener as the ",(0,i.kt)("inlineCode",{parentName:"p"},"internalListenerName")," if the ",(0,i.kt)("inlineCode",{parentName:"p"},"internalListenerName")," is absent."))),(0,i.kt)("p",null,"After setting up the ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisedListeners"),", clients can choose one of the listeners as the service URL to create a connection to the broker as long as the network is accessible. However, if the client creates producers or consumer on a topic, the client must send a lookup requests to the broker for getting the owner broker, then connect to the owner broker to publish messages or consume messages. Therefore, You must allow the client to get the corresponding service URL with the same advertised listener name as the one used by the client. This helps keep client-side simple and secure."),(0,i.kt)("h2",{id:"use-multiple-advertised-listeners"},"Use multiple advertised listeners"),(0,i.kt)("p",null,"This example shows how a Pulsar client uses multiple advertised listeners."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure multiple advertised listeners in the broker configuration file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nadvertisedListeners={listenerName}:pulsar://xxxx:6650,\n{listenerName}:pulsar+ssl://xxxx:6651\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Specify the listener name for the client.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://xxxx:6650")\n    .listenerName("external")\n    .build();\n\n')))}m.isMDXComponent=!0}}]);