"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1290],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(k,s(s({ref:n},u),{},{components:t})):a.createElement(k,s({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},76100:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),s=["components"],l={id:"io-kinesis-sink",title:"Kinesis sink connector",sidebar_label:"Kinesis sink connector",original_id:"io-kinesis-sink"},o=void 0,p={unversionedId:"io-kinesis-sink",id:"version-2.9.1/io-kinesis-sink",title:"Kinesis sink connector",description:"The Kinesis sink connector pulls data from Pulsar and persists data into Amazon Kinesis.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-2.9.1/io-kinesis-sink.md",sourceDirName:".",slug:"/io-kinesis-sink",permalink:"/ko/docs/io-kinesis-sink",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/io-kinesis-sink.md",tags:[],version:"2.9.1",frontMatter:{id:"io-kinesis-sink",title:"Kinesis sink connector",sidebar_label:"Kinesis sink connector",original_id:"io-kinesis-sink"}},u={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Built-in plugins",id:"built-in-plugins",level:3},{value:"Example",id:"example",level:3}],c={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Kinesis sink connector pulls data from Pulsar and persists data into Amazon Kinesis."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration of the Kinesis sink connector has the following property."),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"messageFormat"),"|MessageFormat|true|ONLY_RAW_PAYLOAD|Message format in which Kinesis sink converts Pulsar messages and publishes to Kinesis streams.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Below are the available options:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"p"},"ONLY_RAW_PAYLOAD"),": Kinesis sink directly publishes Pulsar message payload as a message into the configured Kinesis stream. ",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"p"},"FULL_MESSAGE_IN_JSON"),": Kinesis sink creates a JSON payload with Pulsar message payload, properties and encryptionCtx, and publishes JSON payload into the configured Kinesis stream.",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"p"},"FULL_MESSAGE_IN_FB"),": Kinesis sink creates a flatbuffer serialized payload with Pulsar message payload, properties and encryptionCtx, and publishes flatbuffer payload into the configured Kinesis stream."),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"retainOrdering"),"|boolean|false|false|Whether Pulsar connectors to retain ordering when moving messages from Pulsar to Kinesis or not. ",(0,r.kt)("inlineCode",{parentName:"p"},"awsEndpoint"),'|String|false|" " (empty string)|The Kinesis end-point URL, which can be found at ',(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"awsRegion"),'|String|false|" " (empty string)|The AWS region. ',(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"Example"),(0,r.kt)("br",null)," us-west-1, us-west-2 ",(0,r.kt)("inlineCode",{parentName:"p"},"awsKinesisStreamName"),'|String|true|" " (empty string)|The Kinesis stream name. ',(0,r.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginName"),'|String|false|" " (empty string)|The fully-qualified class name of implementation of ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/aws/src/main/java/org/apache/pulsar/io/aws/AwsCredentialProviderPlugin.java"},"AwsCredentialProviderPlugin"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),"It is a factory class which creates an AWSCredentialsProvider that is used by Kinesis sink. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If it is empty, the Kinesis sink creates a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,r.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginParam"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginParam"),'|String |false|" " (empty string)|The JSON parameter to initialize ',(0,r.kt)("inlineCode",{parentName:"p"},"awsCredentialsProviderPlugin"),"."),(0,r.kt)("h3",{id:"built-in-plugins"},"Built-in plugins"),(0,r.kt)("p",null,"The following are built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"AwsCredentialProviderPlugin")," plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.io.aws.AwsDefaultProviderChainPlugin")),(0,r.kt)("p",{parentName:"li"},"This plugin takes no configuration, it uses the default AWS provider chain."),(0,r.kt)("p",{parentName:"li"},"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default"},"AWS documentation"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.io.aws.STSAssumeRoleProviderPlugin")),(0,r.kt)("p",{parentName:"li"},"This plugin takes a configuration (via the ",(0,r.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginParam"),") that describes a role to assume when running the KCL."),(0,r.kt)("p",{parentName:"li"},"This configuration takes the form of a small json document like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{"roleArn": "arn...", "roleSessionName": "name"}\n\n')))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Before using the Kinesis sink connector, you need to create a configuration file through one of the following methods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "awsEndpoint": "some.endpoint.aws",\n    "awsRegion": "us-east-1",\n    "awsKinesisStreamName": "my-stream",\n    "awsCredentialPluginParam": "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}",\n    "messageFormat": "ONLY_RAW_PAYLOAD",\n    "retainOrdering": "true"\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    awsEndpoint: "some.endpoint.aws"\n    awsRegion: "us-east-1"\n    awsKinesisStreamName: "my-stream"\n    awsCredentialPluginParam: "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}"\n    messageFormat: "ONLY_RAW_PAYLOAD"\n    retainOrdering: "true"\n\n')))))}d.isMDXComponent=!0}}]);