"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1781],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48887:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],s={author:"XiaoLong Ran",authorURL:"https://twitter.com/wolf4j1",title:"Apache Pulsar 2.6.1"},l=void 0,u={permalink:"/ko/blog/2020/08/21/Apache-Pulsar-2-6-1",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2020-08-21-Apache-Pulsar-2-6-1.md",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2020-08-21-Apache-Pulsar-2-6-1.md",title:"Apache Pulsar 2.6.1",description:"We are excited to see that the Apache Pulsar community has successfully released 2.6.1 version after a lot of hard work. It is a great milestone for this fast-growing project and the Pulsar community. 2.6.1 is the result of a big effort from the community, with over 100 commits and a long list of improvements and bug fixes.",date:"2020-08-21T00:00:00.000Z",formattedDate:"2020\ub144 8\uc6d4 21\uc77c",tags:[],readingTime:10.045,truncated:!0,authors:[{name:"XiaoLong Ran",url:"https://twitter.com/wolf4j1"}],frontMatter:{author:"XiaoLong Ran",authorURL:"https://twitter.com/wolf4j1",title:"Apache Pulsar 2.6.1"},prevItem:{title:"Apache Pulsar Celebrates 300 Contributors",permalink:"/ko/blog/2020/08/24/Pulsar-300-contributors"},nextItem:{title:"Apache Pulsar 2.6.0",permalink:"/ko/blog/2020/06/18/Apache-Pulsar-2-6-0"}},p={authorsImageUrls:[void 0]},c=[{value:"Broker",id:"broker",level:2},{value:"Limit the batch size to the minimum of the <code>maxNumberOfMessages</code> and <code>maxSizeOfMessages</code>",id:"limit-the-batch-size-to-the-minimum-of-the-maxnumberofmessages-and-maxsizeofmessages",level:3},{value:"Fix hash range conflict issue in Key_Shared subscription with sticky hash range",id:"fix-hash-range-conflict-issue-in-key_shared-subscription-with-sticky-hash-range",level:3},{value:"Fix get lookup permission error",id:"fix-get-lookup-permission-error",level:3},{value:"Avoid introducing null read position for the managed cursor",id:"avoid-introducing-null-read-position-for-the-managed-cursor",level:3},{value:"Fix error in creation of non-durable cursor",id:"fix-error-in-creation-of-non-durable-cursor",level:3},{value:"Avoid an NPE occurs in the <code>ManagedLedgerImpl.isOffloadedNeedsDelete</code> method",id:"avoid-an-npe-occurs-in-the-managedledgerimplisoffloadedneedsdelete-method",level:3},{value:"Fix producer stuck issue due to NPE when creating a new ledger",id:"fix-producer-stuck-issue-due-to-npe-when-creating-a-new-ledger",level:3},{value:"Fix NPE when using advertisedListeners",id:"fix-npe-when-using-advertisedlisteners",level:3},{value:"Fix the issue that the deduplication cursor cannot be deleted after message deduplication is disabled",id:"fix-the-issue-that-the-deduplication-cursor-cannot-be-deleted-after-message-deduplication-is-disabled",level:3},{value:"Fix the issue that GetLastEntry() reads entry <code>-1</code>",id:"fix-the-issue-that-getlastentry-reads-entry--1",level:3},{value:"Fix the error of updating partitions for non-persistent topic",id:"fix-the-error-of-updating-partitions-for-non-persistent-topic",level:3},{value:"ZooKeeper",id:"zookeeper",level:2},{value:"Use hostname for bookie rack awareness mapping",id:"use-hostname-for-bookie-rack-awareness-mapping",level:3},{value:"Java Client",id:"java-client",level:2},{value:"Fix the issue that the HTTP header used in Athenz authentication can not be renamed",id:"fix-the-issue-that-the-http-header-used-in-athenz-authentication-can-not-be-renamed",level:3},{value:"Fix the issue that batch ack set is recycled multiple times",id:"fix-the-issue-that-batch-ack-set-is-recycled-multiple-times",level:3},{value:"Add authentication client with OAuth2 support",id:"add-authentication-client-with-oauth2-support",level:3},{value:"Not subscribe to the topic when the consumer is closed",id:"not-subscribe-to-the-topic-when-the-consumer-is-closed",level:3},{value:"OAuth2 authentication plugin uses AsyncHttpClient",id:"oauth2-authentication-plugin-uses-asynchttpclient",level:3},{value:"CPP Client",id:"cpp-client",level:2},{value:"CPP Oauth2 authentication client",id:"cpp-oauth2-authentication-client",level:3},{value:"Fix partition index error in close callback",id:"fix-partition-index-error-in-close-callback",level:3},{value:"Fix segment crashes caused by race condition of timer in CPP client",id:"fix-segment-crashes-caused-by-race-condition-of-timer-in-cpp-client",level:3},{value:"Add support to read credentials from file",id:"add-support-to-read-credentials-from-file",level:3},{value:"Fix multi-topic consumer segfault on connection error",id:"fix-multi-topic-consumer-segfault-on-connection-error",level:3},{value:"Functions",id:"functions",level:2},{value:"Use fully qualified hostname as default to advertise worker",id:"use-fully-qualified-hostname-as-default-to-advertise-worker",level:3},{value:"Fix the function BC issue introduced in release 2.6.0",id:"fix-the-function-bc-issue-introduced-in-release-260",level:3},{value:"pulsar-perf",id:"pulsar-perf",level:2},{value:"Support <code>tlsAllowInsecureConnection</code> in pulsar-perf produce/consume/read performance tests",id:"support-tlsallowinsecureconnection-in-pulsar-perf-produceconsumeread-performance-tests",level:3},{value:"More information",id:"more-information",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are excited to see that the Apache Pulsar community has successfully released 2.6.1 version after a lot of hard work. It is a great milestone for this fast-growing project and the Pulsar community. 2.6.1 is the result of a big effort from the community, with over 100 commits and a long list of improvements and bug fixes."),(0,r.kt)("p",null,"Here are some highlights and major features added in Pulsar 2.6.1."),(0,r.kt)("h2",{id:"broker"},"Broker"),(0,r.kt)("h3",{id:"limit-the-batch-size-to-the-minimum-of-the-maxnumberofmessages-and-maxsizeofmessages"},"Limit the batch size to the minimum of the ",(0,r.kt)("inlineCode",{parentName:"h3"},"maxNumberOfMessages")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"maxSizeOfMessages")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Batch size is not limited to the minimum of the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxNumberOfMessages")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSizeOfMessages")," from the BatchReceive policy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the batch size is greater than the ",(0,r.kt)("inlineCode",{parentName:"p"},"receiveQ")," of the consumer (for example, the batch size is 3000 and a receiveQ is 500), the following issue occurs:"),(0,r.kt)("p",{parentName:"li"},"In a multi-topic (pattern) consumer, the client stops receiving any messages. The client gets paused and never resumed when setting a timeout in the batch policy. Only one batch is fetched and the client is never resumed."))),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6865"},"PR-6865"),"."),(0,r.kt)("h3",{id:"fix-hash-range-conflict-issue-in-key_shared-subscription-with-sticky-hash-range"},"Fix hash range conflict issue in Key_Shared subscription with sticky hash range"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Key_Shared")," subscription where the ",(0,r.kt)("inlineCode",{parentName:"p"},"stickyHashRange")," is used, consumers are not allowed to use interleaving hashes."),(0,r.kt)("p",null,"The pull request fixes the hash range conflict issue in ",(0,r.kt)("inlineCode",{parentName:"p"},"Key_Shared")," with sticky hash range."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7231"},"PR-7231"),"."),(0,r.kt)("h3",{id:"fix-get-lookup-permission-error"},"Fix get lookup permission error"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"canProduce")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"canConsume")," method throws an exception, the ",(0,r.kt)("inlineCode",{parentName:"p"},"canLookup")," method just throws the exception and does not check other permissions. The code snippet is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\ntry {\n    return canLookupAsync(topicName, role, authenticationData)\n            .get(conf.getZooKeeperOperationTimeoutSeconds(), SECONDS);\n}\n\n")),(0,r.kt)("p",null,"PR-7234 invokes ",(0,r.kt)("inlineCode",{parentName:"p"},"canLookupAsync"),". When Pulsar AuthorizationService checks lookup permission, if the user has the ",(0,r.kt)("inlineCode",{parentName:"p"},"canProducer")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"canConsumer")," role, the user performs ",(0,r.kt)("inlineCode",{parentName:"p"},"canLookup")," operations."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7234"},"PR-7234"),"."),(0,r.kt)("h3",{id:"avoid-introducing-null-read-position-for-the-managed-cursor"},"Avoid introducing null read position for the managed cursor"),(0,r.kt)("p",null,"Avoid introducing null read position for the managed cursor. The most doubtful thing is the ",(0,r.kt)("inlineCode",{parentName:"p"},"getNextValidPosition")," method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedLedgerImpl"),". If a given position is greater than the position added last time, it returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value, and the read position is also ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"In this PR, we add a log and print the stack trace to find the root cause and fallback to the next position if the ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," occurs at the next valid position."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7264"},"PR-7264"),"."),(0,r.kt)("h3",{id:"fix-error-in-creation-of-non-durable-cursor"},"Fix error in creation of non-durable cursor"),(0,r.kt)("p",null,"An NPE occurs when we fail to create a non-durable cursor and continue to create the subscription instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\ntry {\n    cursor = ledger.newNonDurableCursor(startPosition, subscriptionName);\n} catch (ManagedLedgerException e) {\n    subscriptionFuture.completeExceptionally(e);\n}\n\nreturn new PersistentSubscription(this, subscriptionName, cursor, false);\n\n")),(0,r.kt)("p",null,"Additionally, the NPE leads to the topic usage count increasing to 1. When deleting a topic, the topic cannot be deleted even if you use the force flag."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7355"},"PR-7355"),"."),(0,r.kt)("h3",{id:"avoid-an-npe-occurs-in-the-managedledgerimplisoffloadedneedsdelete-method"},"Avoid an NPE occurs in the ",(0,r.kt)("inlineCode",{parentName:"h3"},"ManagedLedgerImpl.isOffloadedNeedsDelete")," method"),(0,r.kt)("p",null,"When the default value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"offload-deletion-lag")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", an NPE occurs. To fix the bug, null check is added in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedLedgerImpl.isOffloadedNeedsDelete")," method."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7389"},"PR-7389"),"."),(0,r.kt)("h3",{id:"fix-producer-stuck-issue-due-to-npe-when-creating-a-new-ledger"},"Fix producer stuck issue due to NPE when creating a new ledger"),(0,r.kt)("p",null,"NPE occurs when creating a ledger if the network address is unresolvable. If NPE occurs before adding the timeout task, the timeout mechanism does not work. The unresolvable network address is common in the Kubernetes environment. It happens when a bookie pod or a worker node restarts."),(0,r.kt)("p",null,"This pull request fixes from the following perspectives:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Catch the NPE when creating a new ledger."),(0,r.kt)("li",{parentName:"ol"},"When the timeout task is triggered, it always executes the callback. It is totally fine because we already have the logic to ensure the callback is triggered only once."),(0,r.kt)("li",{parentName:"ol"},"Add a mechanism to detect that the ",(0,r.kt)("inlineCode",{parentName:"li"},"CreatingLedger")," state is not moving.")),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7401"},"PR-7401"),"."),(0,r.kt)("h3",{id:"fix-npe-when-using-advertisedlisteners"},"Fix NPE when using advertisedListeners"),(0,r.kt)("p",null,"The broker failed to acquire ownership for the namespace bundle when using ",(0,r.kt)("inlineCode",{parentName:"p"},"advertisedListeners=internal:pulsar://node1:6650,external:pulsar://node1.external:6650")," with external listener name. Correct ",(0,r.kt)("inlineCode",{parentName:"p"},"BrokerServiceUrlTls")," when TLS is not enabled."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7620"},"PR-7620"),"."),(0,r.kt)("h3",{id:"fix-the-issue-that-the-deduplication-cursor-cannot-be-deleted-after-message-deduplication-is-disabled"},"Fix the issue that the deduplication cursor cannot be deleted after message deduplication is disabled"),(0,r.kt)("p",null,"When enabling the message deduplication in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," file, disabling it and then restarting the broker, the deduplication cursor is not deleted."),(0,r.kt)("p",null,"This PR fixes the issue, so when you disable message deduplication, you can delete the deduplication cursor."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7656"},"PR-7656"),"."),(0,r.kt)("h3",{id:"fix-the-issue-that-getlastentry-reads-entry--1"},"Fix the issue that GetLastEntry() reads entry ",(0,r.kt)("inlineCode",{parentName:"h3"},"-1")),(0,r.kt)("p",null,"Previously, the code does not include a return statement. If the entry is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),", after sending code, the response reads the entry and sends a second response, as shown in the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n16:34:25.779 [pulsar-io-54-7:org.apache.bookkeeper.client.LedgerHandle@748] ERROR org.apache.bookkeeper.client.LedgerHandle - IncorrectParameterException on ledgerId:0 firstEntry:-1 lastEntry:-1\n16:34:25.779 [pulsar-client-io-82-1:org.apache.pulsar.client.impl.ConsumerImpl@1986] INFO  org.apache.pulsar.client.impl.ConsumerImpl - [persistent://external-repl-prop/pulsar-function-admin/assignment][c-use-fw-localhost-0-function-assignment-initialize-reader-b21f7607c9] Successfully getLastMessageId 0:-1\n16:34:25.779 [pulsar-client-io-82-1:org.apache.pulsar.client.impl.ClientCnx@602] WARN  org.apache.pulsar.client.impl.ClientCnx - [id: 0xc78f4a0e, L:/127.0.0.1:55657 - R:localhost/127.0.0.1:55615] Received error from server: Failed to get batch size for entry org.apache.bookkeeper.mledger.ManagedLedgerException: Incorrect parameter input\n16:34:25.779 [pulsar-client-io-82-1:org.apache.pulsar.client.impl.ClientCnx@612] WARN  org.apache.pulsar.client.impl.ClientCnx - [id: 0xc78f4a0e, L:/127.0.0.1:55657 - R:localhost/127.0.0.1:55615] Received unknown request id from server: 10\n\n")),(0,r.kt)("p",null,"PR-7495 adds a return statement to code, so GetLastEntry() reads the last entry, instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7495"},"PR-7495"),"."),(0,r.kt)("h3",{id:"fix-the-error-of-updating-partitions-for-non-persistent-topic"},"Fix the error of updating partitions for non-persistent topic"),(0,r.kt)("p",null,"When updating partitions on a non-persistent topic, Error 409 is returned. The pull request fixes partitions errors for non-persistent topics."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7459"},"PR-7459"),"."),(0,r.kt)("h2",{id:"zookeeper"},"ZooKeeper"),(0,r.kt)("h3",{id:"use-hostname-for-bookie-rack-awareness-mapping"},"Use hostname for bookie rack awareness mapping"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/5607"},"PR-5607"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHostName()")," is added with ",(0,r.kt)("inlineCode",{parentName:"p"},"return false"),". The rack-aware policy passes the Bookie's hostname into an IP address and then uses that IP address to figure out to which rack the bookie belongs."),(0,r.kt)("p",null,"Then two issues occur:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The IP does not match the hostname which is recorded in the ",(0,r.kt)("inlineCode",{parentName:"li"},"/bookies")," z-node"),(0,r.kt)("li",{parentName:"ol"},"If there is an error in parsing the bookie hostname (eg: transient DNS error), an NPE is triggered and the BK client never realizes that this bookie is available in the cluster.")),(0,r.kt)("p",null,"The exception is thrown at Line 77(as shown in the following code snippet), since ",(0,r.kt)("inlineCode",{parentName:"p"},"getAddress()")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," given that the address is parsed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n74        if (dnsResolver.useHostName()) {\n75            names.add(addr.getHostName());\n76        } else {\n77            names.add(addr.getAddress().getHostAddress());\n78        }\n\n")),(0,r.kt)("p",null,"The default implementation for the ",(0,r.kt)("inlineCode",{parentName:"p"},"DnsResolver.useHostName()")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7361"},"PR-7361"),"."),(0,r.kt)("h2",{id:"java-client"},"Java Client"),(0,r.kt)("h3",{id:"fix-the-issue-that-the-http-header-used-in-athenz-authentication-can-not-be-renamed"},"Fix the issue that the HTTP header used in Athenz authentication can not be renamed"),(0,r.kt)("p",null,"The authentication plugin for Athenz allows users to change the name of the HTTP header for sending an authentication token to a broker server with a parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"roleHeader"),". The change uses the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"roleHeader")," parameter on the ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthenticationAthenz")," side, and uses it directly as the header name."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7311"},"PR-7311"),"."),(0,r.kt)("h3",{id:"fix-the-issue-that-batch-ack-set-is-recycled-multiple-times"},"Fix the issue that batch ack set is recycled multiple times"),(0,r.kt)("p",null,"The batch ack sets are recycled multiple times, due to race condition in group ack flush and cumulative Ack. So we add a recycled state check for the ack set in PR-7409, and fix the recycle issue."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7409"},"PR-7409"),"."),(0,r.kt)("h3",{id:"add-authentication-client-with-oauth2-support"},"Add authentication client with OAuth2 support"),(0,r.kt)("p",null,'Pulsar supports authenticating clients using OAuth 2.0 access tokens. You can use tokens to identify a Pulsar client and associate with some "principal" (or "role") that is permitted to do some actions, for example, publish messages to a topic or consume messages from a topic.'),(0,r.kt)("p",null,"This module is to support Pulsar Client Authentication Plugin for OAuth 2.0 directly. The client communicates with the Oauth 2.0 server, gets an ",(0,r.kt)("inlineCode",{parentName:"p"},"access token")," from the Oauth 2.0 server, and passes the ",(0,r.kt)("inlineCode",{parentName:"p"},"access token")," to Pulsar broker to do the authentication."),(0,r.kt)("p",null,"So, the broker can use ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authentication.AuthenticationProviderToken"),", and the user can add their own ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthenticationProvider")," to work with this module."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7420"},"PR-7420"),"."),(0,r.kt)("h3",{id:"not-subscribe-to-the-topic-when-the-consumer-is-closed"},"Not subscribe to the topic when the consumer is closed"),(0,r.kt)("p",null,"Fix race condition on the closed consumer while reconnecting to the broker."),(0,r.kt)("p",null,"The race condition happens when the consumer reconnects to the broker. The connection of the consumer is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," when the consumer reconnects to the broker. If the consumer is not connected to broker at this time, the client does not send the consumer command to the broker. So, when the consumer reconnects to the broker, the consumer sends the subscribe command again."),(0,r.kt)("p",null,"This pull request adds a state check when the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionOpened()")," of the consumer opens. If the consumer is in closing or closed state, the consumer does not send the subscribe command."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7589"},"PR-7589"),"."),(0,r.kt)("h3",{id:"oauth2-authentication-plugin-uses-asynchttpclient"},"OAuth2 authentication plugin uses AsyncHttpClient"),(0,r.kt)("p",null,"Previously, the OAuth2 client authentication plugin used Apache HTTP client lib to make requests, Apache HTTP client is used to validate hostname. As suggested in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/7612"},"#7612"),", we get rid of the dependency of using Apache HTTP client."),(0,r.kt)("p",null,"In PR-7615, OAuth2 client authentication plugin uses AsyncHttpClient, which is used in client and broker. For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7615"},"PR-7615"),"."),(0,r.kt)("h2",{id:"cpp-client"},"CPP Client"),(0,r.kt)("h3",{id:"cpp-oauth2-authentication-client"},"CPP Oauth2 authentication client"),(0,r.kt)("p",null,'Pulsar supports authenticating clients using OAuth 2.0 access tokens. You can use tokens to identify a Pulsar client and associate with some "principal" (or "role") that is permitted to do some actions (eg: publish messages to a topic or consume messages from a topic). This change tries to support it in cpp client.'),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7467"},"PR-7467"),"."),(0,r.kt)("h3",{id:"fix-partition-index-error-in-close-callback"},"Fix partition index error in close callback"),(0,r.kt)("p",null,"In partitioned producer/consumer's close callback, the partition index is always ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProducerImpl/ConsumerImpl")," internal partition index field should be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"PartitionedProducerImpl/PartitionedConsumerImpl")," close callback."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7282"},"PR-7282"),"."),(0,r.kt)("h3",{id:"fix-segment-crashes-caused-by-race-condition-of-timer-in-cpp-client"},"Fix segment crashes caused by race condition of timer in CPP client"),(0,r.kt)("p",null,"Segment crashes occur in a race condition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- The close operation calls the `keepAliveTimer_.reset()`.\n- The `keepAliveTimer` is called by `startConsumerStatsTimer` and `handleKeepAliveTimeout` methods. Actually, the `keepAliveTimer` should not be called by those two methods.\n")),(0,r.kt)("p",null,"This pull request fixes those issues."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7572"},"PR-7572"),"."),(0,r.kt)("h3",{id:"add-support-to-read-credentials-from-file"},"Add support to read credentials from file"),(0,r.kt)("p",null,"Support reading credentials from a file to make it align with the Java client."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7606"},"PR-7606"),"."),(0,r.kt)("h3",{id:"fix-multi-topic-consumer-segfault-on-connection-error"},"Fix multi-topic consumer segfault on connection error"),(0,r.kt)("p",null,"The multi-topic consumer triggers a segfault when an error occurs in creating a consumer. This is due to the calls to close the partial consumers with a null callback."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7588"},"PR-7588"),"."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"use-fully-qualified-hostname-as-default-to-advertise-worker"},"Use fully qualified hostname as default to advertise worker"),(0,r.kt)("p",null,"There is a difference in getting hostnames between ",(0,r.kt)("inlineCode",{parentName:"p"},"Java 8")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Java 11"),". In Java 8, ",(0,r.kt)("inlineCode",{parentName:"p"},"InetAddress.getLocalHost().getHostName()")," returns the fully qualified hostname; in Java 11, it returns a simple hostname. In this case, we should rather use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getCanonicalHostName()"),", which returns the fully qualified hostname. This is the same method to get the advertised address for workers as well."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7360"},"PR-7360"),"."),(0,r.kt)("h3",{id:"fix-the-function-bc-issue-introduced-in-release-260"},"Fix the function BC issue introduced in release 2.6.0"),(0,r.kt)("p",null,"A backwards compatibility breakage is introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/5985"},"PR-5985"),". When the running function workers are separated from brokers, updating workers and brokers independently from release 2.5.0 to 2.6.0 results in the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\njava.lang.NullPointerException: null\\n\\tat java.net.URI$Parser.parse(URI.java:3104) ~[?:?]\njava.net.URI.<init>(URI.java:600) ~[?:?]\\n\\tat java.net.URI.create(URI.java:881) ~[?:?]\norg.apache.pulsar.functions.worker.WorkerUtils.initializeDlogNamespace(WorkerUtils.java:160) ~[org.apache.pulsar-pulsar-functions-worker-2.7.0-SNAPSHOT.jar:2.7.0-SNAPSHOT]\norg.apache.pulsar.functions.worker.Worker.initialize(Worker.java:155) ~[org.apache.pulsar-pulsar-functions-worker-2.7.0-SNAPSHOT.jar:2.7.0-SNAPSHOT] \norg.apache.pulsar.functions.worker.Worker.start(Worker.java:69) ~[org.apache.pulsar-pulsar-functions-worker-2.7.0-SNAPSHOT.jar:2.7.0-SNAPSHOT] \norg.apache.pulsar.functions.worker.FunctionWorkerStarter.main(FunctionWorkerStarter.java:67) [org.apache.pulsar-pulsar-functions-worker-2.7.0-SNAPSHOT.jar:2.7.0-SNAPSHOT]\n\n")),(0,r.kt)("p",null,'This is because the broker 2.5.0 supports "bookkeeperMetadataServiceUri" and the admin client returns a ',(0,r.kt)("inlineCode",{parentName:"p"},"null")," field, thus causing the NPE."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7528"},"PR-7528"),"."),(0,r.kt)("h2",{id:"pulsar-perf"},"pulsar-perf"),(0,r.kt)("h3",{id:"support-tlsallowinsecureconnection-in-pulsar-perf-produceconsumeread-performance-tests"},"Support ",(0,r.kt)("inlineCode",{parentName:"h3"},"tlsAllowInsecureConnection")," in pulsar-perf produce/consume/read performance tests"),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"tlsAllowInsecureConnection")," config to the CLI tool ",(0,r.kt)("strong",{parentName:"p"},"pulsar-perf"),", to support produce/consume/read performance tests to clusters with insecure TLS connections."),(0,r.kt)("p",null,"For more information about implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7300"},"PR-7300"),"."),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To download Apache Pulsar 2.6.1, click ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/en/download/"},"download"),"."),(0,r.kt)("li",{parentName:"ul"},"For more information about Apache Pulsar 2.6.1, see ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/release-notes/#2.6.1"},"2.6.1 release notes")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pulls?q=is%3Apr+label%3Arelease%2F2.6.1+is%3Aclosed"},"2.6.1 PR list"),".")),(0,r.kt)("p",null,"If you have any questions or suggestions, contact us with mailing lists or slack."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")),(0,r.kt)("li",{parentName:"ul"},"Pulsar slack channel: ",(0,r.kt)("a",{parentName:"li",href:"https://apache-pulsar.slack.com/"},"https://apache-pulsar.slack.com/")),(0,r.kt)("li",{parentName:"ul"},"Self-registration at ",(0,r.kt)("a",{parentName:"li",href:"https://apache-pulsar.herokuapp.com/"},"https://apache-pulsar.herokuapp.com/"))),(0,r.kt)("p",null,"Looking forward to your contributions to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Pulsar"),"."))}d.isMDXComponent=!0}}]);