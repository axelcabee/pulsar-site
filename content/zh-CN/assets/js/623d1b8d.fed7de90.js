"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5255],{3905:function(e,a,r){r.d(a,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),u=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=t,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(k,o(o({ref:a},p),{},{components:r})):n.createElement(k,o({ref:a},p))}));function d(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58215:function(e,a,r){r.d(a,{Z:function(){return t}});var n=r(67294);function t(e){var a=e.children,r=e.hidden,t=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:t},a)}},75508:function(e,a,r){r.d(a,{Z:function(){return p}});var n=r(83117),t=r(67294),l=r(72389),o=r(36937),i=r(86010),s="tabItem_LplD";function u(e){var a,r,l,u=e.lazy,p=e.block,m=e.defaultValue,c=e.values,d=e.groupId,k=e.className,f=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:f.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,o.lx)(b,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(a=null!=m?m:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?a:null==(l=f[0])?void 0:l.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,T=(0,t.useState)(h),A=T[0],x=T[1],I=[],w=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=y[d];null!=E&&E!==A&&b.some((function(e){return e.value===E}))&&x(E)}var P=function(e){var a=e.currentTarget,r=I.indexOf(a),n=b[r].value;n!==A&&(w(a),x(n),null!=d&&N(d,n))},C=function(e){var a,r=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;r=I[n]||I[0];break;case"ArrowLeft":var t=I.indexOf(e.currentTarget)-1;r=I[t]||I[I.length-1]}null==(a=r)||a.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},b.map((function(e){var a=e.value,r=e.label,l=e.attributes;return t.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===a?0:-1,"aria-selected":A===a,key:a,ref:function(e){return I.push(e)},onKeyDown:C,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":A===a})}),null!=r?r:a)}))),u?(0,t.cloneElement)(f.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==A})}))))}function p(e){var a=(0,l.Z)();return t.createElement(u,(0,n.Z)({key:String(a)},e))}},93839:function(e,a,r){r.r(a),r.d(a,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var n=r(83117),t=r(80102),l=(r(67294),r(3905)),o=r(75508),i=r(58215),s=["components"],u={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers"},p=void 0,m={unversionedId:"admin-api-brokers",id:"admin-api-brokers",title:"Managing Brokers",description:"Important",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-api-brokers.md",sourceDirName:".",slug:"/admin-api-brokers",permalink:"/zh-CN/docs/next/admin-api-brokers",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/admin-api-brokers.md",tags:[],version:"current",frontMatter:{id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers"},sidebar:"docsSidebar",previous:{title:"Tenants",permalink:"/zh-CN/docs/next/admin-api-tenants"},next:{title:"Namespaces",permalink:"/zh-CN/docs/next/admin-api-namespaces"}},c={},d=[{value:"Brokers resources",id:"brokers-resources",level:2},{value:"List active brokers",id:"list-active-brokers",level:3},{value:"Get the information of the leader broker",id:"get-the-information-of-the-leader-broker",level:3},{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",level:4},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",level:3},{value:"List updated values",id:"list-updated-values",level:3},{value:"List all",id:"list-all",level:3}],k={toc:d};function f(e){var a=e.components,r=(0,t.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important")),(0,l.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more information, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,l.kt)("p",null,"Pulsar brokers consist of two components:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"An HTTP server exposing a ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," interface administration and ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/reference-terminology#topic"},"topic")," lookup."),(0,l.kt)("li",{parentName:"ol"},"A dispatcher that handles all Pulsar ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/reference-terminology#message"},"message")," transfers.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/reference-terminology#broker"},"Brokers")," can be managed via:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"brokers")," command of the ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers")," endpoint of the admin ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"brokers")," method of the ",(0,l.kt)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,l.kt)("a",{parentName:"li",href:"client-libraries-java"},"Java API"))),(0,l.kt)("p",null,"In addition to being configurable when you start them up, brokers can also be ",(0,l.kt)("a",{parentName:"p",href:"#dynamic-broker-configuration"},"dynamically configured"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"See the ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/reference-configuration#broker"},"Configuration")," page for a full listing of broker-specific configuration parameters.")),(0,l.kt)("h2",{id:"brokers-resources"},"Brokers resources"),(0,l.kt)("h3",{id:"list-active-brokers"},"List active brokers"),(0,l.kt)("p",null,"Fetch all available active brokers that are serving traffic."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list use\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nbroker1.use.org.com:8080\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getActiveBrokers?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/:cluster"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getActiveBrokers(clusterName)\n\n")))),(0,l.kt)("h3",{id:"get-the-information-of-the-leader-broker"},"Get the information of the leader broker"),(0,l.kt)("p",null,"Fetch the information of the leader broker, for example, the service url."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers leader-broker\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nBrokerInfo(serviceUrl=broker1.use.org.com:8080)\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v2/brokers/leaderBroker?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/leaderBroker?version=@pulsar:version_number@"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getLeaderBroker()\n\n")),(0,l.kt)("p",null,"For the detail of the code above, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/BrokersImpl.java#L80"},"here")))),(0,l.kt)("h4",{id:"list-of-namespaces-owned-by-a-given-broker"},"list of namespaces owned by a given broker"),(0,l.kt)("p",null,"It finds all namespaces which are owned and served by a given broker."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers namespaces use \\\n  --url broker1.use.org.com:8080\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "my-property/use/my-ns/0x00000000_0xffffffff": {\n    "broker_assignment": "shared",\n    "is_controlled": false,\n    "is_active": true\n  }\n}\n\n'))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getOwnedNamespaes?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/:cluster/:broker/ownedNamespaces"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n\n")))),(0,l.kt)("h3",{id:"dynamic-broker-configuration"},"Dynamic broker configuration"),(0,l.kt)("p",null,"One way to configure a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/reference-terminology#broker"},"broker")," is to supply a ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/reference-configuration#broker"},"configuration")," when the broker is ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/reference-cli-tools#pulsar-broker"},"started up"),".\nBut since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,l.kt)("em",{parentName:"p"},"while the broker is running"),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/pulsar-admin#brokers"},(0,l.kt)("inlineCode",{parentName:"a"},"brokers"))," command for the ",(0,l.kt)("a",{parentName:"li",href:"reference-pulsar-admin"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,l.kt)("a",{parentName:"li",href:"#update-dynamic-configuration"},"update config values")," and more."),(0,l.kt)("li",{parentName:"ul"},"In the Pulsar admin ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, dynamic configuration is managed through the ",(0,l.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers/configuration")," endpoint.")),(0,l.kt)("h3",{id:"update-dynamic-configuration"},"Update dynamic configuration"),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#brokers-update-dynamic-config"},(0,l.kt)("inlineCode",{parentName:"a"},"update-dynamic-config"))," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," flag respectively. Here's an example for the ",(0,l.kt)("a",{parentName:"p",href:"reference-configuration.md#broker-brokerShutdownTimeoutMs"},(0,l.kt)("inlineCode",{parentName:"a"},"brokerShutdownTimeoutMs"))," parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/updateDynamicConfiguration?version=@pulsar:version_number@&apiVersion=v2"},"POST /admin/v2/brokers/configuration/:configName/:configValue"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().updateDynamicConfiguration(configName, configValue);\n\n")))),(0,l.kt)("h3",{id:"list-updated-values"},"List updated values"),(0,l.kt)("p",null,"Fetch a list of all potentially updatable configuration parameters."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list-dynamic-config\nbrokerShutdownTimeoutMs\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getDynamicConfigurationName?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/configuration"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getDynamicConfigurationNames();\n\n")))),(0,l.kt)("h3",{id:"list-all"},"List all"),(0,l.kt)("p",null,"Fetch a list of all parameters that have been dynamically updated."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers get-all-dynamic-config\nbrokerShutdownTimeoutMs:100\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getAllDynamicConfigurations?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/configuration/values"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getAllDynamicConfigurations();\n\n")))))}f.isMDXComponent=!0}}]);