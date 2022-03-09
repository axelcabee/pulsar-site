"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3438],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92768:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={id:"io-kinesis-source",title:"Kinesis source connector",sidebar_label:"Kinesis source connector",original_id:"io-kinesis-source"},l=void 0,u={unversionedId:"io-kinesis-source",id:"version-2.9.1/io-kinesis-source",title:"Kinesis source connector",description:"The Kinesis source connector pulls data from Amazon Kinesis and persists data into Pulsar.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-2.9.1/io-kinesis-source.md",sourceDirName:".",slug:"/io-kinesis-source",permalink:"/ja/docs/io-kinesis-source",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/io-kinesis-source.md",tags:[],version:"2.9.1",frontMatter:{id:"io-kinesis-source",title:"Kinesis source connector",sidebar_label:"Kinesis source connector",original_id:"io-kinesis-source"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Kinesis source connector pulls data from Amazon Kinesis and persists data into Pulsar."),(0,i.kt)("p",null,"This connector uses the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/amazon-kinesis-client"},"Kinesis Consumer Library")," (KCL) to do the actual consuming of messages. The KCL uses DynamoDB to track state for consumers."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: currently, the Kinesis source connector only supports raw messages. If you use KMS encrypted messages, the encrypted messages are sent to downstream. This connector will support decrypting messages in the future release.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The configuration of the Kinesis source connector has the following properties."),(0,i.kt)("h3",{id:"property"},"Property"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initialPositionInStream"),"|InitialPositionInStream|false|LATEST|The position where the connector starts from.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Below are the available options:",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"p"},"AT_TIMESTAMP"),": start from the record at or after the specified timestamp.",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"p"},"LATEST"),": start after the most recent data record.",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"p"},"TRIM_HORIZON"),": start from the oldest available data record."),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"startAtTime"),'|Date|false|" " (empty string)|If set to ',(0,i.kt)("inlineCode",{parentName:"p"},"AT_TIMESTAMP"),", it specifies the point in time to start consumption. ",(0,i.kt)("inlineCode",{parentName:"p"},"applicationName"),"|String|false|Pulsar IO connector|The name of the Amazon Kinesis application. ",(0,i.kt)("br",null),(0,i.kt)("br",null),"By default, the application name is included in the user agent string used to make AWS requests. This can assist with troubleshooting, for example, distinguish requests made by separate connector instances. ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpointInterval"),"|long|false|60000|The frequency of the Kinesis stream checkpoint in milliseconds. ",(0,i.kt)("inlineCode",{parentName:"p"},"backoffTime"),"|long|false|3000|The amount of time to delay between requests when the connector encounters a throttling exception from AWS Kinesis in milliseconds. ",(0,i.kt)("inlineCode",{parentName:"p"},"numRetries"),"|int|false|3|The number of re-attempts when the connector encounters an exception while trying to set a checkpoint. ",(0,i.kt)("inlineCode",{parentName:"p"},"receiveQueueSize"),"|int|false|1000|The maximum number of AWS records that can be buffered inside the connector. ",(0,i.kt)("br",null),(0,i.kt)("br",null),"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"receiveQueueSize")," is reached, the connector does not consume any messages from Kinesis until some messages in the queue are successfully consumed. ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamoEndpoint"),'|String|false|" " (empty string)|The Dynamo end-point URL, which can be found at ',(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"cloudwatchEndpoint"),'|String|false|" " (empty string)|The Cloudwatch end-point URL, which can be found at ',(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"useEnhancedFanOut"),"|boolean|false|true|If set to true, it uses Kinesis enhanced fan-out.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If set to false, it uses polling. ",(0,i.kt)("inlineCode",{parentName:"p"},"awsEndpoint"),'|String|false|" " (empty string)|The Kinesis end-point URL, which can be found at ',(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"awsRegion"),'|String|false|" " (empty string)|The AWS region. ',(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"p"},"Example"),(0,i.kt)("br",null)," us-west-1, us-west-2 ",(0,i.kt)("inlineCode",{parentName:"p"},"awsKinesisStreamName"),'|String|true|" " (empty string)|The Kinesis stream name. ',(0,i.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginName"),'|String|false|" " (empty string)|The fully-qualified class name of implementation of ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/aws/src/main/java/org/apache/pulsar/io/aws/AwsCredentialProviderPlugin.java"},"AwsCredentialProviderPlugin"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"p"},"awsCredentialProviderPlugin")," has the following built-in plugs:",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.io.kinesis.AwsDefaultProviderChainPlugin"),":",(0,i.kt)("br",null)," this plugin uses the default AWS provider chain.",(0,i.kt)("br",null),"For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default"},"using the default credential provider chain"),".",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.io.kinesis.STSAssumeRoleProviderPlugin"),": ",(0,i.kt)("br",null),"this plugin takes a configuration via the ",(0,i.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginParam")," that describes a role to assume when running the KCL.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"p"},"JSON configuration example"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"p"},'{"roleArn": "arn...", "roleSessionName": "name"}')," ",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginName")," is a factory class which creates an AWSCredentialsProvider that is used by Kinesis sink. ",(0,i.kt)("br",null),(0,i.kt)("br",null),"If ",(0,i.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginName")," set to empty, the Kinesis sink creates a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,i.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginParam"),"."),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"awsCredentialPluginParam"),'|String |false|" " (empty string)|The JSON parameter to initialize ',(0,i.kt)("inlineCode",{parentName:"p"},"awsCredentialsProviderPlugin"),"."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Before using the Kinesis source connector, you need to create a configuration file through one of the following methods."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JSON"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "awsEndpoint": "https://some.endpoint.aws",\n    "awsRegion": "us-east-1",\n    "awsKinesisStreamName": "my-stream",\n    "awsCredentialPluginParam": "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}",\n    "applicationName": "My test application",\n    "checkpointInterval": "30000",\n    "backoffTime": "4000",\n    "numRetries": "3",\n    "receiveQueueSize": 2000,\n    "initialPositionInStream": "TRIM_HORIZON",\n    "startAtTime": "2019-03-05T19:28:58.000Z"\n}\n\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"YAML"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    awsEndpoint: "https://some.endpoint.aws"\n    awsRegion: "us-east-1"\n    awsKinesisStreamName: "my-stream"\n    awsCredentialPluginParam: "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}"\n    applicationName: "My test application"\n    checkpointInterval: 30000\n    backoffTime: 4000\n    numRetries: 3\n    receiveQueueSize: 2000\n    initialPositionInStream: "TRIM_HORIZON"\n    startAtTime: "2019-03-05T19:28:58.000Z"\n\n')))))}d.isMDXComponent=!0}}]);