"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1455],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,b=c["".concat(o,".").concat(m)]||c[m]||h[m]||i;return a?r.createElement(b,l(l({ref:t},s),{},{components:a})):r.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2130:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={id:"client-java-3.0.0",title:"Client Java 3.0.0",sidebar_label:"Client Java 3.0.0"},l=void 0,p={unversionedId:"versioned/client-java-3.0.0",id:"versioned/client-java-3.0.0",title:"Client Java 3.0.0",description:"- PIP-224: Add getLastMessageIds API by @BewareMyPower in #20040",source:"@site/release-notes/versioned/client-java-3.0.0.md",sourceDirName:"versioned",slug:"/versioned/client-java-3.0.0",permalink:"/release-notes/versioned/client-java-3.0.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-3.0.0.md",tags:[],version:"current",frontMatter:{id:"client-java-3.0.0",title:"Client Java 3.0.0",sidebar_label:"Client Java 3.0.0"}},o={},u=[],s={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PIP-224: Add getLastMessageIds API by @BewareMyPower in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20040"},"#20040")),(0,n.kt)("li",{parentName:"ul"},"Refactor client version format by @RobertIndie in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19643"},"#19643")),(0,n.kt)("li",{parentName:"ul"},"Fix authentication not update after changing the serviceUrl by @hangc0276 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19510"},"#19510")),(0,n.kt)("li",{parentName:"ul"},"Fix load the trust store file by @nodece in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19483"},"#19483")),(0,n.kt)("li",{parentName:"ul"},"PIP-229: Add a common interface to get fields of MessageIdData by @BewareMyPower in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19414"},"#19414")),(0,n.kt)("li",{parentName:"ul"},"Fix async method composition in admin client's NamespacesImpl by @lhotari in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19397"},"#19397")),(0,n.kt)("li",{parentName:"ul"},"Fix async completion in ConsumerImpl#processPossibleToDLQ by @lhotari in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19392"},"#19392")),(0,n.kt)("li",{parentName:"ul"},"Change default threads from 1 to available processors by @codelipenghui in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19059"},"#19059")),(0,n.kt)("li",{parentName:"ul"},"Retry letter producer respect auto schema by @tisonkun in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19051"},"#19051")),(0,n.kt)("li",{parentName:"ul"},"Add unified newTableView method in PulsarClient by @yuruguo in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19048"},"#19048")),(0,n.kt)("li",{parentName:"ul"},"Check topic pattern when creating consumer by @yuruguo in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19029"},"#19029")),(0,n.kt)("li",{parentName:"ul"},"Prevent DNS reverse lookup when physical address is an IP address by @lhotari in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/19028"},"#19028")),(0,n.kt)("li",{parentName:"ul"},"ConsumerBuilder.java comments by @mendonk in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18706"},"#18706")),(0,n.kt)("li",{parentName:"ul"},"For exclusive subscriptions, if two consumers are created repeatedly, the second consumer will block by @lordcheng10 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18633"},"#18633")),(0,n.kt)("li",{parentName:"ul"},"Move acknowledge APIs to another interface and improve docs by @BewareMyPower in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18519"},"#18519")),(0,n.kt)("li",{parentName:"ul"},"Avoid allocating unused buffer when receiving chunk message by @RobertIndie in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18511"},"#18511")),(0,n.kt)("li",{parentName:"ul"},"Fix multi-topic consumer stuck after redeliver messages by @poorbarcode in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18491"},"#18491")),(0,n.kt)("li",{parentName:"ul"},"Fix the note of seek in the consumer by @RobertIndie in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18476"},"#18476")),(0,n.kt)("li",{parentName:"ul"},"Fix failover/exclusive consumer with batch cumulate ack issue. by @Technoboy- in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18454"},"#18454")),(0,n.kt)("li",{parentName:"ul"},"Change the get lastMessageId to debug level by @zymap in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18421"},"#18421")),(0,n.kt)("li",{parentName:"ul"},"Fix the Windows absolute path not recognized in auth param string by @BewareMyPower in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18403"},"#18403")),(0,n.kt)("li",{parentName:"ul"},"Fix exception when calling loadConf on a ConsumerBuilder that has a KeySharedPolicy by @cbornet in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18345"},"#18345")),(0,n.kt)("li",{parentName:"ul"},"Support LocalDateTime Conversion by @coderzc in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18334"},"#18334")),(0,n.kt)("li",{parentName:"ul"},"Reduce duplicate code in ConsumerBuilderImpl by @Pomelongan in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18325"},"#18325")),(0,n.kt)("li",{parentName:"ul"},"PIP-218: Consumer batchReceive() single partition every receive by @congbobo184 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18316"},"#18316")),(0,n.kt)("li",{parentName:"ul"},"Fix ",(0,n.kt)("inlineCode",{parentName:"li"},"IllegalThreadStateException")," when using newThread in ",(0,n.kt)("inlineCode",{parentName:"li"},"ExecutorProvider.ExtendedThreadFactory")," by @coderzc in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18268"},"#18268")),(0,n.kt)("li",{parentName:"ul"},"Fix pendingLookupRequestSemaphore leak when Ser\u2026 by @Shoothzj in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18219"},"#18219")),(0,n.kt)("li",{parentName:"ul"},"When namespace is deleted, the client is constantly reconnecting by @poorbarcode in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18194"},"#18194")),(0,n.kt)("li",{parentName:"ul"},"Remove unused check for topics isEmpty by @AnonHxy in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18185"},"#18185")),(0,n.kt)("li",{parentName:"ul"},"Remove useless locks in batch receiving by @shibd in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18005"},"#18005")),(0,n.kt)("li",{parentName:"ul"},"When the compressed message size exceeds maxMessageSize, the information in the InvalidMessageException may be incorrect by @lordcheng10 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17910"},"#17910")),(0,n.kt)("li",{parentName:"ul"},"Fix deadlock when sending chunked messages with BlockIFQueueFull enabled by @RobertIndie in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17795"},"#17795")),(0,n.kt)("li",{parentName:"ul"},"Optimize the ack/send future in TransactionImpl by @liangyepianzhou in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17777"},"#17777")),(0,n.kt)("li",{parentName:"ul"},"Remove redundant pending messages information while printing the producer stats by @codertmy in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17671"},"#17671")),(0,n.kt)("li",{parentName:"ul"},"Messages with inconsistent consumer epochs are not filtered when using batch receive and trigger timeout. by @shibd in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17318"},"#17318")),(0,n.kt)("li",{parentName:"ul"},"Improve docs and code quality about KeyValueSchema usages by @BewareMyPower in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/17256"},"#17256"))))}c.isMDXComponent=!0}}]);