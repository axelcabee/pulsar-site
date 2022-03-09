"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[504],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],i={id:"client-libraries-dotnet",title:"Pulsar C# client",sidebar_label:"C#"},s=void 0,c={unversionedId:"client-libraries-dotnet",id:"client-libraries-dotnet",title:"Pulsar C# client",description:"You can use the Pulsar C# client (DotPulsar) to create Pulsar producers and consumers in C#. All the methods in the producer, consumer, and reader of a C# client are thread-safe. The official documentation for DotPulsar is available here.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/client-libraries-dotnet.md",sourceDirName:".",slug:"/client-libraries-dotnet",permalink:"/zh-CN/docs/next/client-libraries-dotnet",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/client-libraries-dotnet.md",tags:[],version:"current",frontMatter:{id:"client-libraries-dotnet",title:"Pulsar C# client",sidebar_label:"C#"},sidebar:"docsSidebar",previous:{title:"WebSocket",permalink:"/zh-CN/docs/next/client-libraries-websocket"},next:{title:"REST",permalink:"/zh-CN/docs/next/client-libraries-rest"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Procedures",id:"procedures",level:3},{value:"Client",id:"client",level:2},{value:"Create client",id:"create-client",level:3},{value:"Create producer",id:"create-producer",level:3},{value:"Create consumer",id:"create-consumer",level:3},{value:"Create reader",id:"create-reader",level:3},{value:"Configure encryption policies",id:"configure-encryption-policies",level:3},{value:"Configure authentication",id:"configure-authentication",level:3},{value:"Producer",id:"producer",level:2},{value:"Send data",id:"send-data",level:2},{value:"Send messages with customized metadata",id:"send-messages-with-customized-metadata",level:3},{value:"Consumer",id:"consumer",level:2},{value:"Receive messages",id:"receive-messages",level:3},{value:"Acknowledge messages",id:"acknowledge-messages",level:3},{value:"Unsubscribe from topics",id:"unsubscribe-from-topics",level:3},{value:"Note",id:"note",level:4},{value:"Reader",id:"reader",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Monitor producer",id:"monitor-producer",level:3},{value:"Monitor consumer state",id:"monitor-consumer-state",level:3},{value:"Monitor reader state",id:"monitor-reader-state",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can use the Pulsar C# client (DotPulsar) to create Pulsar producers and consumers in C#. All the methods in the producer, consumer, and reader of a C# client are thread-safe. The official documentation for DotPulsar is available ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-dotpulsar/wiki"},"here"),"."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You can install the Pulsar C# client library either through the dotnet CLI or through the Visual Studio. This section describes how to install the Pulsar C# client library through the dotnet CLI. For information about how to install the Pulsar C# client library through the Visual Studio, see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/mac/nuget-walkthrough?view=vsmac-2019"},"here"),"."),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Install the ",(0,l.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/"},".NET Core SDK"),", which provides the dotnet command-line tool. Starting in Visual Studio 2017, the dotnet CLI is automatically installed with any .NET Core related workloads."),(0,l.kt)("h3",{id:"procedures"},"Procedures"),(0,l.kt)("p",null,"To install the Pulsar C# client library, following these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a project."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a folder for the project.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a terminal window and switch to the new folder.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create the project using the following command."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\ndotnet new console\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet run")," to test that the app has been created properly.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add the DotPulsar NuGet package."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the following command to install the ",(0,l.kt)("inlineCode",{parentName:"p"},"DotPulsar")," package."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\ndotnet add package DotPulsar\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After the command completes, open the ",(0,l.kt)("inlineCode",{parentName:"p"},".csproj")," file to see the added reference."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'\n<ItemGroup>\n  <PackageReference Include="DotPulsar" Version="2.0.1" />\n</ItemGroup>\n\n')))))),(0,l.kt)("h2",{id:"client"},"Client"),(0,l.kt)("p",null,"This section describes some configuration examples for the Pulsar C# client."),(0,l.kt)("h3",{id:"create-client"},"Create client"),(0,l.kt)("p",null,"This example shows how to create a Pulsar C# client connected to localhost."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},"\nusing DotPulsar;\n\nvar client = PulsarClient.Builder().Build();\n\n")),(0,l.kt)("p",null,"To create a Pulsar C# client by using the builder, you can specify the following options."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ServiceUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the service URL for the Pulsar cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar://localhost:6650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RetryInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the time to wait before retrying an operation or a reconnection."),(0,l.kt)("td",{parentName:"tr",align:null},"3s")))),(0,l.kt)("h3",{id:"create-producer"},"Create producer"),(0,l.kt)("p",null,"This section describes how to create a producer."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create a producer by using the builder."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nusing DotPulsar;\nusing DotPulsar.Extensions;\n\nvar producer = client.NewProducer())\n                     .Topic("persistent://public/default/mytopic")\n                     .Create();\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create a producer without using the builder."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nusing DotPulsar;\n\nvar options = new ProducerOptions<byte[]>("persistent://public/default/mytopic", Schema.ByteArray);\nvar producer = client.CreateProducer(options);\n\n')))),(0,l.kt)("h3",{id:"create-consumer"},"Create consumer"),(0,l.kt)("p",null,"This section describes how to create a consumer."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create a consumer by using the builder."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nusing DotPulsar;\nusing DotPulsar.Extensions;\n\nvar consumer = client.NewConsumer()\n                     .SubscriptionName("MySubscription")\n                     .Topic("persistent://public/default/mytopic")\n                     .Create();\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create a consumer without using the builder."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nusing DotPulsar;\n\nvar options = new ConsumerOptions<byte[]>("MySubscription", "persistent://public/default/mytopic", Schema.ByteArray);\nvar consumer = client.CreateConsumer(options);\n\n')))),(0,l.kt)("h3",{id:"create-reader"},"Create reader"),(0,l.kt)("p",null,"This section describes how to create a reader."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create a reader by using the builder."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nusing DotPulsar;\nusing DotPulsar.Extensions;\n\nvar reader = client.NewReader()\n                   .StartMessageId(MessageId.Earliest)\n                   .Topic("persistent://public/default/mytopic")\n                   .Create();\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create a reader without using the builder."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nusing DotPulsar;\n\nvar options = new ReaderOptions<byte[]>(MessageId.Earliest, "persistent://public/default/mytopic", Schema.ByteArray);\nvar reader = client.CreateReader(options);\n\n')))),(0,l.kt)("h3",{id:"configure-encryption-policies"},"Configure encryption policies"),(0,l.kt)("p",null,"The Pulsar C# client supports four kinds of encryption policies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EnforceUnencrypted"),": always use unencrypted connections."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EnforceEncrypted"),": always use encrypted connections)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PreferUnencrypted"),": use unencrypted connections, if possible."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PreferEncrypted"),": use encrypted connections, if possible.")),(0,l.kt)("p",null,"This example shows how to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"EnforceUnencrypted")," encryption policy."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},"\nusing DotPulsar;\n\nvar client = PulsarClient.Builder()\n                         .ConnectionSecurity(EncryptionPolicy.EnforceEncrypted)\n                         .Build();\n\n")),(0,l.kt)("h3",{id:"configure-authentication"},"Configure authentication"),(0,l.kt)("p",null,"Currently, the Pulsar C# client supports the TLS (Transport Layer Security) and JWT (JSON Web Token) authentication."),(0,l.kt)("p",null,"If you have followed ",(0,l.kt)("a",{parentName:"p",href:"security-tls-authentication"},"Authentication using TLS"),", you get a certificate and a key. To use them from the Pulsar C# client, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create an unencrypted and password-less pfx file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},"\nopenssl pkcs12 -export -keypbe NONE -certpbe NONE -out admin.pfx -inkey admin.key.pem -in admin.cert.pem -passout pass:\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the admin.pfx file to create an X509Certificate2 and pass it to the Pulsar C# client."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nusing System.Security.Cryptography.X509Certificates;\nusing DotPulsar;\n\nvar clientCertificate = new X509Certificate2("admin.pfx");\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingClientCertificate(clientCertificate)\n                         .Build();\n\n')))),(0,l.kt)("h2",{id:"producer"},"Producer"),(0,l.kt)("p",null,"A producer is a process that attaches to a topic and publishes messages to a Pulsar broker for processing. This section describes some configuration examples about the producer."),(0,l.kt)("h2",{id:"send-data"},"Send data"),(0,l.kt)("p",null,"This example shows how to send data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nvar data = Encoding.UTF8.GetBytes("Hello World");\nawait producer.Send(data);\n\n')),(0,l.kt)("h3",{id:"send-messages-with-customized-metadata"},"Send messages with customized metadata"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Send messages with customized metadata by using the builder."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nvar messageId = await producer.NewMessage()\n                              .Property("SomeKey", "SomeValue")\n                              .Send(data);\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Send messages with customized metadata without using the builder."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nvar data = Encoding.UTF8.GetBytes("Hello World");\nvar metadata = new MessageMetadata();\nmetadata["SomeKey"] = "SomeValue";\nvar messageId = await producer.Send(metadata, data));\n\n')))),(0,l.kt)("h2",{id:"consumer"},"Consumer"),(0,l.kt)("p",null,"A consumer is a process that attaches to a topic through a subscription and then receives messages. This section describes some configuration examples about the consumer."),(0,l.kt)("h3",{id:"receive-messages"},"Receive messages"),(0,l.kt)("p",null,"This example shows how a consumer receives messages from a topic."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nawait foreach (var message in consumer.Messages())\n{\n    Console.WriteLine("Received: " + Encoding.UTF8.GetString(message.Data.ToArray()));\n}\n\n')),(0,l.kt)("h3",{id:"acknowledge-messages"},"Acknowledge messages"),(0,l.kt)("p",null,"Messages can be acknowledged individually or cumulatively. For details about message acknowledgement, see ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/concepts-messaging#acknowledgement"},"acknowledgement"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Acknowledge messages individually."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},"\nawait consumer.Acknowledge(message);\n\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Acknowledge messages cumulatively."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c#"},"\nawait consumer.AcknowledgeCumulative(message);\n\n")))),(0,l.kt)("h3",{id:"unsubscribe-from-topics"},"Unsubscribe from topics"),(0,l.kt)("p",null,"This example shows how a consumer unsubscribes from a topic."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},"\nawait consumer.Unsubscribe();\n\n")),(0,l.kt)("h4",{id:"note"},"Note"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A consumer cannot be used and is disposed once the consumer unsubscribes from a topic.")),(0,l.kt)("h2",{id:"reader"},"Reader"),(0,l.kt)("p",null,"A reader is actually just a consumer without a cursor. This means that Pulsar does not keep track of your progress and there is no need to acknowledge messages."),(0,l.kt)("p",null,"This example shows how a reader receives messages."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nawait foreach (var message in reader.Messages())\n{\n    Console.WriteLine("Received: " + Encoding.UTF8.GetString(message.Data.ToArray()));\n}\n\n')),(0,l.kt)("h2",{id:"monitoring"},"Monitoring"),(0,l.kt)("p",null,"This section describes how to monitor the producer, consumer, and reader state."),(0,l.kt)("h3",{id:"monitor-producer"},"Monitor producer"),(0,l.kt)("p",null,"The following table lists states available for the producer."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Closed"),(0,l.kt)("td",{parentName:"tr",align:null},"The producer or the Pulsar client has been disposed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Connected"),(0,l.kt)("td",{parentName:"tr",align:null},"All is well.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disconnected"),(0,l.kt)("td",{parentName:"tr",align:null},"The connection is lost and attempts are being made to reconnect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Faulted"),(0,l.kt)("td",{parentName:"tr",align:null},"An unrecoverable error has occurred.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PartiallyConnected"),(0,l.kt)("td",{parentName:"tr",align:null},"Some of the sub-producers are disconnected.")))),(0,l.kt)("p",null,"This example shows how to monitor the producer state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nprivate static async ValueTask Monitor(IProducer producer, CancellationToken cancellationToken)\n{\n    var state = ProducerState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = (await producer.StateChangedFrom(state, cancellationToken)).ProducerState;\n\n        var stateMessage = state switch\n        {\n            ProducerState.Connected => $"The producer is connected",\n            ProducerState.Disconnected => $"The producer is disconnected",\n            ProducerState.Closed => $"The producer has closed",\n            ProducerState.Faulted => $"The producer has faulted",\n            ProducerState.PartiallyConnected => $"The producer is partially connected.",\n            _ => $"The producer has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (producer.IsFinalState(state))\n            return;\n    }\n}\n\n')),(0,l.kt)("h3",{id:"monitor-consumer-state"},"Monitor consumer state"),(0,l.kt)("p",null,"The following table lists states available for the consumer."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active"),(0,l.kt)("td",{parentName:"tr",align:null},"All is well.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inactive"),(0,l.kt)("td",{parentName:"tr",align:null},"All is well. The subscription type is ",(0,l.kt)("inlineCode",{parentName:"td"},"Failover")," and you are not the active consumer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Closed"),(0,l.kt)("td",{parentName:"tr",align:null},"The consumer or the Pulsar client has been disposed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disconnected"),(0,l.kt)("td",{parentName:"tr",align:null},"The connection is lost and attempts are being made to reconnect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Faulted"),(0,l.kt)("td",{parentName:"tr",align:null},"An unrecoverable error has occurred.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReachedEndOfTopic"),(0,l.kt)("td",{parentName:"tr",align:null},"No more messages are delivered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unsubscribed"),(0,l.kt)("td",{parentName:"tr",align:null},"The consumer has unsubscribed.")))),(0,l.kt)("p",null,"This example shows how to monitor the consumer state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nprivate static async ValueTask Monitor(IConsumer consumer, CancellationToken cancellationToken)\n{\n    var state = ConsumerState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = (await consumer.StateChangedFrom(state, cancellationToken)).ConsumerState;\n\n        var stateMessage = state switch\n        {\n            ConsumerState.Active => "The consumer is active",\n            ConsumerState.Inactive => "The consumer is inactive",\n            ConsumerState.Disconnected => "The consumer is disconnected",\n            ConsumerState.Closed => "The consumer has closed",\n            ConsumerState.ReachedEndOfTopic => "The consumer has reached end of topic",\n            ConsumerState.Faulted => "The consumer has faulted",\n            ConsumerState.Unsubscribed => "The consumer is unsubscribed.",\n            _ => $"The consumer has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (consumer.IsFinalState(state))\n            return;\n    }\n}\n\n')),(0,l.kt)("h3",{id:"monitor-reader-state"},"Monitor reader state"),(0,l.kt)("p",null,"The following table lists states available for the reader."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Closed"),(0,l.kt)("td",{parentName:"tr",align:null},"The reader or the Pulsar client has been disposed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Connected"),(0,l.kt)("td",{parentName:"tr",align:null},"All is well.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disconnected"),(0,l.kt)("td",{parentName:"tr",align:null},"The connection is lost and attempts are being made to reconnect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Faulted"),(0,l.kt)("td",{parentName:"tr",align:null},"An unrecoverable error has occurred.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReachedEndOfTopic"),(0,l.kt)("td",{parentName:"tr",align:null},"No more messages are delivered.")))),(0,l.kt)("p",null,"This example shows how to monitor the reader state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'\nprivate static async ValueTask Monitor(IReader reader, CancellationToken cancellationToken)\n{\n    var state = ReaderState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = (await reader.StateChangedFrom(state, cancellationToken)).ReaderState;\n\n        var stateMessage = state switch\n        {\n            ReaderState.Connected => "The reader is connected",\n            ReaderState.Disconnected => "The reader is disconnected",\n            ReaderState.Closed => "The reader has closed",\n            ReaderState.ReachedEndOfTopic => "The reader has reached end of topic",\n            ReaderState.Faulted => "The reader has faulted",\n            _ => $"The reader has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (reader.IsFinalState(state))\n            return;\n    }\n}\n\n')))}m.isMDXComponent=!0}}]);