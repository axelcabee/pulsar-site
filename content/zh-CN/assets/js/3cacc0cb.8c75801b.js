"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[626],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},88552:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),s=["components"],i={author:"Xiaolong Ran",authorURL:"https://twitter.com/wolf4j1",title:"Apache Pulsar 2.4.2"},l=void 0,c={permalink:"/zh-CN/blog/2019/12/04/Apache-Pulsar-2-4-2",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2019-12-04-Apache-Pulsar-2-4-2.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2019-12-04-Apache-Pulsar-2-4-2.md",title:"Apache Pulsar 2.4.2",description:"We are proud to publish Apache Pulsar 2.4.2. Thank the great efforts from Apache Pulsar community with over 110 commits, covering improvements and bug fixes.",date:"2019-12-04T00:00:00.000Z",formattedDate:"2019\u5e7412\u67084\u65e5",tags:[],readingTime:5.105,truncated:!0,authors:[{name:"Xiaolong Ran",url:"https://twitter.com/wolf4j1"}],frontMatter:{author:"Xiaolong Ran",authorURL:"https://twitter.com/wolf4j1",title:"Apache Pulsar 2.4.2"},prevItem:{title:"Pulsar Summit San Francisco 2020 CFP is now open",permalink:"/zh-CN/blog/2019/12/18/Pulsar-summit-cfp"},nextItem:{title:"Apache Pulsar 2.4.0",permalink:"/zh-CN/blog/2019/07/05/Apache-Pulsar-2-4-0"}},u={authorsImageUrls:[void 0]},d=[{value:"Use classLoaders to load Java functions",id:"use-classloaders-to-load-java-functions",level:2},{value:"Start Broker with Functions worker",id:"start-broker-with-functions-worker",level:2},{value:"Add error code and error message when a key does not exist",id:"add-error-code-and-error-message-when-a-key-does-not-exist",level:2},{value:"Deduplication",id:"deduplication",level:2},{value:"Consume data from the earliest location",id:"consume-data-from-the-earliest-location",level:2},{value:"Close previous dispatcher when the subscription type changes",id:"close-previous-dispatcher-when-the-subscription-type-changes",level:2},{value:"Select an active consumer based on the subscription order",id:"select-an-active-consumer-based-on-the-subscription-order",level:2},{value:"Remove failed stale producer from the connection",id:"remove-failed-stale-producer-from-the-connection",level:2},{value:"Add new APIs for schema",id:"add-new-apis-for-schema",level:2},{value:"Expose <code>getLastMessageId()</code> method in consumerImpl",id:"expose-getlastmessageid-method-in-consumerimpl",level:2},{value:"Add new <code>send()</code> interface in C++/Go",id:"add-new-send-interface-in-cgo",level:2},{value:"Consumer background tasks are cancelled after subscription failures",id:"consumer-background-tasks-are-cancelled-after-subscription-failures",level:2},{value:"Delete topics attached with regex consumers",id:"delete-topics-attached-with-regex-consumers",level:2},{value:"Reference",id:"reference",level:2}],p={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are proud to publish Apache Pulsar 2.4.2. Thank the great efforts from Apache Pulsar community with over 110 commits, covering improvements and bug fixes."),(0,o.kt)("p",null,"For detailed changes related to 2.4.2 release, refer to ",(0,o.kt)("b",null,(0,o.kt)("a",{parentName:"p",href:"/release-notes/#2.4.2"},"release notes")),"."),(0,o.kt)("p",null,"I will highlight some improvements and bug fixes in this blog."),(0,o.kt)("h2",{id:"use-classloaders-to-load-java-functions"},"Use classLoaders to load Java functions"),(0,o.kt)("p",null,"In Pulsar 2.4.2, windowed functions can work well whether Java Functions instances use shaded JAR or classLoaders, and functionClassLoader is set correctly when the ",(0,o.kt)("inlineCode",{parentName:"p"},"--output-serde-classname")," option is enabled."),(0,o.kt)("p",null,"Before Pulsar 2.4.2, Java Functions instances are started with a shaded JAR, and different classLoaders are used to load the internal Pulsar code, user code, and the interfaces that the two interacts with each other. This change results in two issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The windowed functions do not work well if Java Functions instances use classLoaders."),(0,o.kt)("li",{parentName:"ul"},"When using the ",(0,o.kt)("inlineCode",{parentName:"li"},"--output-serde-classname")," option, functionClassLoader is not set correctly.")),(0,o.kt)("h2",{id:"start-broker-with-functions-worker"},"Start Broker with Functions worker"),(0,o.kt)("p",null,"In Pulsar 2.4.2, we can start Broker with Functions worker when broker client is enabled with TLS. Before Pulsar 2.4.2, when we run Functions worker with the broker, it checks whether TLS is enabled in the ",(0,o.kt)("inlineCode",{parentName:"p"},"function_worker.yml")," file. If TLS is enabled, it uses TLS port. However, when TLS is enabled on Functions worker, it checks the ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf"),". Since Functions worker runs with the broker, it makes sense to check the ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," as the single source of truth about whether or not to use TLS."),(0,o.kt)("h2",{id:"add-error-code-and-error-message-when-a-key-does-not-exist"},"Add error code and error message when a key does not exist"),(0,o.kt)("p",null,"In Pulsar Functions, BookKeeper is supported to store the state of Functions. When users attempt to fetch a key that does not exist from function state, an NPE(NullPointerException) error occurs. In Pulsar 2.4.2, we add error code and error message for the case when a key does not exist."),(0,o.kt)("h2",{id:"deduplication"},"Deduplication"),(0,o.kt)("p",null,"Deduplication removes messages based on the the largest sequence ID that pre-persisted. If an error is persisted to BookKeeper, a retry attempt is \u201cdeduplicated\u201d with no message ever getting persisted. In version 2.4.2, we fix the issue from the following two aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Double check the pending messages and return error to the producer when the duplication status is uncertain. For example, when a message is still pending."),(0,o.kt)("li",{parentName:"ul"},"Sync back the lastPushed map with the lastStored map after failures.")),(0,o.kt)("h2",{id:"consume-data-from-the-earliest-location"},"Consume data from the earliest location"),(0,o.kt)("p",null,"In Pulsar 2.4.2, we add ",(0,o.kt)("inlineCode",{parentName:"p"},"--subs-position")," for Pulsar Sinks, so users can consume data from the latest and earliest locations. Before 2.4.2 release, data in topics is consumed from the latest location in Pulsar Sinks by default, and users can not consume the earliest data in sink topic."),(0,o.kt)("h2",{id:"close-previous-dispatcher-when-the-subscription-type-changes"},"Close previous dispatcher when the subscription type changes"),(0,o.kt)("p",null,"In Pulsar 2.4.2, when the type of a subscription changes, a new dispatcher is created, and the old dispatcher is closed, thus avoiding memory leaks. Before 2.4.2, when the subscription type of a topic changes, a new dispatcher is created and the old one is discarded, yet not closed, which causes memory leaks. If the cursor is not durable, the subscription is closed and removed from the topic when all consumers are removed. The dispatcher should be closed at this time. Otherwise, RateLimiter instances are not garbage collected, which results in a memory leak."),(0,o.kt)("h2",{id:"select-an-active-consumer-based-on-the-subscription-order"},"Select an active consumer based on the subscription order"),(0,o.kt)("p",null,'In Pulsar 2.4.2, the active consumer is selected based on the subscription order. The first consumer in the consumer list is selected as an active consumer without sorting. Before 2.4.2, the active consumer is selected based on the priority level and consumer name. In this case, the active consumer joins and leaves, and no consumer is actually elected as "active" or consumes messages.'),(0,o.kt)("h2",{id:"remove-failed-stale-producer-from-the-connection"},"Remove failed stale producer from the connection"),(0,o.kt)("p",null,"In Pulsar 2.4.2, failed producer is removed correctly from the connection. Before Pulsar 2.4.2, broker cannot clean up the old failed producer correctly from the connection. When broker tries to clean up ",(0,o.kt)("inlineCode",{parentName:"p"},"producer-future")," in the failed producer, it removes the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"producer-future")," rather than the old failed producer, and the following error occurs in broker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\n17:22:00.700 [pulsar-io-21-26] WARN  org.apache.pulsar.broker.service.ServerCnx - [/1.1.1.1:1111][453] Producer with id persistent://prop/cluster/ns/topic is already present on the connection\n\n")),(0,o.kt)("h2",{id:"add-new-apis-for-schema"},"Add new APIs for schema"),(0,o.kt)("p",null,"In Pulsar 2.4.2, we add the following APIs for schema:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getAllVersions"),": return the list of schema versions for a given topic."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testCompatibility"),": be able to test the compatibility for a schema without registering it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getVersionBySchema"),": provide a schema definition and provide the schema version for it.")),(0,o.kt)("h2",{id:"expose-getlastmessageid-method-in-consumerimpl"},"Expose ",(0,o.kt)("inlineCode",{parentName:"h2"},"getLastMessageId()")," method in consumerImpl"),(0,o.kt)("p",null,"In Pulsar 2.4.2, we expose ",(0,o.kt)("inlineCode",{parentName:"p"},"getLastMessageId()")," method in consumerImpl. It benefits users when they want to know the lag messages, or only consume messages before the current time."),(0,o.kt)("h2",{id:"add-new-send-interface-in-cgo"},"Add new ",(0,o.kt)("inlineCode",{parentName:"h2"},"send()")," interface in C++/Go"),(0,o.kt)("p",null,"In Pulsar 2.4.2, we add new ",(0,o.kt)("inlineCode",{parentName:"p"},"send()")," interface in C++/Go, so the ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageID")," will be returned to users. The logic is consistent with that in Java. In Java client, the ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageId send(byte[] message)")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageId")," for users."),(0,o.kt)("h2",{id:"consumer-background-tasks-are-cancelled-after-subscription-failures"},"Consumer background tasks are cancelled after subscription failures"),(0,o.kt)("p",null,"In Pulsar 2.4.2, we ensure that consumer background tasks are cancelled after subscription failures. Before 2.4.2, some background consumer tasks are started in the ConsumerImpl constructor though these tasks are not cancelled if the consumer creation fails, leaving active references to these objects."),(0,o.kt)("h2",{id:"delete-topics-attached-with-regex-consumers"},"Delete topics attached with regex consumers"),(0,o.kt)("p",null,"In Pulsar 2.4.2, we can delete topics attached with a regex consumer. The followings are detailed methods."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a flag in CommandSubscribe so that a regex consumer will never trigger the creation of a topic."),(0,o.kt)("li",{parentName:"ul"},"Subscribe to a non-existing topic. When a specific error occurs, the consumer is interpreted as a permanent failure and thus stopping retrying.")),(0,o.kt)("p",null,"Before 2.4.2, it's not possible to delete topics when there is a regex consumer attached to them. The reason is that the regex consumer will immediately reconnect and re-create the topic."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"Download Pulsar 2.4.2 ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/download/"},"here"),"."),(0,o.kt)("p",null,"If you have any questions or suggestions, contact us with mailing lists or slack."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")),(0,o.kt)("li",{parentName:"ul"},"Pulsar slack channel: ",(0,o.kt)("a",{parentName:"li",href:"https://apache-pulsar.slack.com/"},"https://apache-pulsar.slack.com/")),(0,o.kt)("li",{parentName:"ul"},"You can self-register at ",(0,o.kt)("a",{parentName:"li",href:"https://apache-pulsar.herokuapp.com/"},"https://apache-pulsar.herokuapp.com/"))),(0,o.kt)("p",null,"Looking forward to your contributions to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Pulsar"),"."))}h.isMDXComponent=!0}}]);