"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8430],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},75508:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),r=n(67294),i=n(72389),l=n(36937),o=n(86010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),N=v.tabGroupChoices,y=v.setTabGroupChoices,C=(0,r.useState)(g),w=C[0],T=C[1],P=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=N[m];null!=O&&O!==w&&b.some((function(e){return e.value===O}))&&T(O)}var x=function(e){var t=e.currentTarget,n=P.indexOf(t),a=b[n].value;a!==w&&(E(t),T(a),null!=m&&y(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return P.push(e)},onKeyDown:D,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},35320:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(75508),o=n(58215),s=["components"],u={id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication",original_id:"cookbooks-deduplication"},d=void 0,p={unversionedId:"cookbooks-deduplication",id:"version-2.9.1/cookbooks-deduplication",title:"Message deduplication",description:"When Message deduplication is enabled, it ensures that each message produced on Pulsar topics is persisted to disk only once, even if the message is produced more than once. Message deduplication is handled automatically on the server side.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-2.9.1/cookbooks-deduplication.md",sourceDirName:".",slug:"/cookbooks-deduplication",permalink:"/ko/docs/cookbooks-deduplication",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/cookbooks-deduplication.md",tags:[],version:"2.9.1",frontMatter:{id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication",original_id:"cookbooks-deduplication"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Topic compaction",permalink:"/ko/docs/cookbooks-compaction"},next:{title:"Non-persistent messaging",permalink:"/ko/docs/cookbooks-non-persistent"}},c={},m=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure message deduplication",id:"configure-message-deduplication",level:2},{value:"Set default value at the broker-level",id:"set-default-value-at-the-broker-level",level:3},{value:"Enable message deduplication",id:"enable-message-deduplication",level:3},{value:"Disable message deduplication",id:"disable-message-deduplication",level:3},{value:"Pulsar clients",id:"pulsar-clients",level:2}],f={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When ",(0,i.kt)("strong",{parentName:"p"},"Message deduplication")," is enabled, it ensures that each message produced on Pulsar topics is persisted to disk ",(0,i.kt)("em",{parentName:"p"},"only once"),", even if the message is produced more than once. Message deduplication is handled automatically on the server side."),(0,i.kt)("p",null,"To use message deduplication in Pulsar, you need to configure your Pulsar brokers and clients."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"You can enable or disable message deduplication at the namespace level or the topic level. By default, it is disabled on all namespaces or topics. You can enable it in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable deduplication for all namespaces/topics at the broker-level."),(0,i.kt)("li",{parentName:"ul"},"Enable deduplication for a specific namespace with the ",(0,i.kt)("inlineCode",{parentName:"li"},"pulsar-admin namespaces")," interface."),(0,i.kt)("li",{parentName:"ul"},"Enable deduplication for a specific topic with the ",(0,i.kt)("inlineCode",{parentName:"li"},"pulsar-admin topics")," interface.")),(0,i.kt)("h2",{id:"configure-message-deduplication"},"Configure message deduplication"),(0,i.kt)("p",null,"You can configure message deduplication in Pulsar using the ",(0,i.kt)("a",{parentName:"p",href:"/ko/docs/reference-configuration#broker"},(0,i.kt)("inlineCode",{parentName:"a"},"broker.conf"))," configuration file. The following deduplication-related parameters are available."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the default behavior for message deduplication in the Pulsar broker. If it is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", message deduplication is enabled on all namespaces/topics. If it is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", you have to enable or disable deduplication at the namespace level or the topic level."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationMaxNumberOfProducers")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The maximum number of producers for which information is stored for deduplication purposes."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEntriesInterval")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of entries after which a deduplication informational snapshot is taken. A larger interval leads to fewer snapshots being taken, though this lengthens the topic recovery time (the time required for entries published after the snapshot to be replayed)."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationSnapshotIntervalSeconds")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time period after which a deduplication informational snapshot is taken. It runs simultaneously with ",(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEntriesInterval"),"."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"120"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationProducerInactivityTimeoutMinutes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time of inactivity (in minutes) after which the broker discards deduplication information related to a disconnected producer."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"360")," (6 hours)")))),(0,i.kt)("h3",{id:"set-default-value-at-the-broker-level"},"Set default value at the broker-level"),(0,i.kt)("p",null,"By default, message deduplication is ",(0,i.kt)("em",{parentName:"p"},"disabled")," on all Pulsar namespaces/topics. To enable it on all namespaces/topics, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled")," parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and re-start the broker."),(0,i.kt)("p",null,"Even if you set the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled"),", enabling or disabling via Pulsar admin CLI overrides the default settings at the broker-level."),(0,i.kt)("h3",{id:"enable-message-deduplication"},"Enable message deduplication"),(0,i.kt)("p",null,"Though message deduplication is disabled by default at the broker level, you can enable message deduplication for a specific namespace or topic using the ",(0,i.kt)("a",{parentName:"p",href:"/ko/docs/pulsar-admin#namespace-set-deduplication"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-deduplication"))," or the ",(0,i.kt)("a",{parentName:"p",href:"/ko/docs/pulsar-admin#topic-set-deduplication"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin topics set-deduplication"))," command. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"-e")," flag and specify the namespace/topic."),(0,i.kt)("p",null,"The following example shows how to enable message deduplication at the namespace level."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --enable # or just -e\n\n")),(0,i.kt)("h3",{id:"disable-message-deduplication"},"Disable message deduplication"),(0,i.kt)("p",null,"Even if you enable message deduplication at the broker level, you can disable message deduplication for a specific namespace or topic using the ",(0,i.kt)("a",{parentName:"p",href:"/ko/docs/pulsar-admin#namespace-set-deduplication"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespace set-deduplication"))," or the ",(0,i.kt)("a",{parentName:"p",href:"/ko/docs/pulsar-admin#topic-set-deduplication"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin topics set-deduplication"))," command. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," flag and specify the namespace/topic."),(0,i.kt)("p",null,"The following example shows how to disable message deduplication at the namespace level."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --disable # or just -d\n\n")),(0,i.kt)("h2",{id:"pulsar-clients"},"Pulsar clients"),(0,i.kt)("p",null,"If you enable message deduplication in Pulsar brokers, you need complete the following tasks for your client producers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Specify a name for the producer."),(0,i.kt)("li",{parentName:"ol"},"Set the message timeout to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," (namely, no timeout).")),(0,i.kt)("p",null,"The instructions for Java, Python, and C++ clients are different."),(0,i.kt)(l.Z,{defaultValue:"Java clients",values:[{label:"Java clients",value:"Java clients"},{label:"Python clients",value:"Python clients"},{label:"C++ clients",value:"C++ clients"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java clients",mdxType:"TabItem"},(0,i.kt)("p",null,"To enable message deduplication on a ",(0,i.kt)("a",{parentName:"p",href:"client-libraries-java.md#producers"},"Java producer"),", set the producer name using the ",(0,i.kt)("inlineCode",{parentName:"p"},"producerName")," setter, and set the timeout to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"sendTimeout")," setter. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Producer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport java.util.concurrent.TimeUnit;\n\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\nProducer producer = pulsarClient.newProducer()\n        .producerName("producer-1")\n        .topic("persistent://public/default/topic-1")\n        .sendTimeout(0, TimeUnit.SECONDS)\n        .create();\n\n'))),(0,i.kt)(o.Z,{value:"Python clients",mdxType:"TabItem"},(0,i.kt)("p",null,"To enable message deduplication on a ",(0,i.kt)("a",{parentName:"p",href:"client-libraries-python.md#producers"},"Python producer"),", set the producer name using ",(0,i.kt)("inlineCode",{parentName:"p"},"producer_name"),", and set the timeout to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"send_timeout_millis"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nimport pulsar\n\nclient = pulsar.Client("pulsar://localhost:6650")\nproducer = client.create_producer(\n    "persistent://public/default/topic-1",\n    producer_name="producer-1",\n    send_timeout_millis=0)\n\n'))),(0,i.kt)(o.Z,{value:"C++ clients",mdxType:"TabItem"},(0,i.kt)("p",null,"To enable message deduplication on a ",(0,i.kt)("a",{parentName:"p",href:"client-libraries-cpp.md#producer"},"C++ producer"),", set the producer name using ",(0,i.kt)("inlineCode",{parentName:"p"},"producer_name"),", and set the timeout to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"send_timeout_millis"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://some-tenant/ns1/topic-1";\nstd::string producerName = "producer-1";\n\nClient client(serviceUrl);\n\nProducerConfiguration producerConfig;\nproducerConfig.setSendTimeout(0);\nproducerConfig.setProducerName(producerName);\n\nProducer producer;\n\nResult result = client.createProducer(topic, producerConfig, producer);\n\n')))))}k.isMDXComponent=!0}}]);