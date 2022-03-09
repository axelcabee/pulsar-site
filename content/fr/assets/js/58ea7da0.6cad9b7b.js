"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7741],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},74111:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),l=["components"],i={id:"sql-getting-started",title:"Query data with Pulsar SQL",sidebar_label:"Query data"},s=void 0,u={unversionedId:"sql-getting-started",id:"sql-getting-started",title:"Query data with Pulsar SQL",description:"Before querying data in Pulsar, you need to install Pulsar and built-in connectors.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/sql-getting-started.md",sourceDirName:".",slug:"/sql-getting-started",permalink:"/fr/docs/next/sql-getting-started",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/sql-getting-started.md",tags:[],version:"current",frontMatter:{id:"sql-getting-started",title:"Query data with Pulsar SQL",sidebar_label:"Query data"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/fr/docs/next/sql-overview"},next:{title:"Configuration and deployment",permalink:"/fr/docs/next/sql-deployment-configurations"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Query data in Pulsar",id:"query-data-in-pulsar",level:2},{value:"Query your own data",id:"query-your-own-data",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before querying data in Pulsar, you need to install Pulsar and built-in connectors."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"getting-started-standalone.md#install-pulsar-standalone"},"Pulsar"),"."),(0,o.kt)("li",{parentName:"ol"},"Install Pulsar ",(0,o.kt)("a",{parentName:"li",href:"getting-started-standalone.md#install-builtin-connectors-optional"},"built-in connectors"),".")),(0,o.kt)("h2",{id:"query-data-in-pulsar"},"Query data in Pulsar"),(0,o.kt)("p",null,"To query data in Pulsar with Pulsar SQL, complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start a Pulsar standalone cluster.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar standalone\n\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Start a Pulsar SQL worker.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar sql-worker run\n\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After initializing Pulsar standalone cluster and the SQL worker, run SQL CLI.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar sql\n\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Test with SQL commands.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\npresto> show catalogs;\n Catalog \n---------\n pulsar  \n system  \n(2 rows)\n\nQuery 20180829_211752_00004_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n\n\npresto> show schemas in pulsar;\n        Schema         \n-----------------------\n information_schema    \n public/default        \n public/functions      \n sample/standalone/ns1 \n(4 rows)\n\nQuery 20180829_211818_00005_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [4 rows, 89B] [21 rows/s, 471B/s]\n\n\npresto> show tables in pulsar."public/default";\n Table \n-------\n(0 rows)\n\nQuery 20180829_211839_00006_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n\n')),(0,o.kt)("p",null,"Since there is no data in Pulsar, no records is returned."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Start the built-in connector ",(0,o.kt)("em",{parentName:"li"},"DataGeneratorSource")," and ingest some mock data.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin sources create --name generator --destinationTopicName generator_test --source-type data-generator\n\n")),(0,o.kt)("p",null,'And then you can query a topic in the namespace "public/default".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\npresto> show tables in pulsar."public/default";\n     Table      \n----------------\n generator_test \n(1 row)\n\nQuery 20180829_213202_00000_csyeu, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:02 [1 rows, 38B] [0 rows/s, 17B/s]\n\n')),(0,o.kt)("p",null,'You can now query the data within the topic "generator_test".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\npresto> select * from pulsar."public/default".generator_test;\n\n  firstname  | middlename  |  lastname   |              email               |   username   | password | telephonenumber | age |                 companyemail                  | nationalidentitycardnumber | \n-------------+-------------+-------------+----------------------------------+--------------+----------+-----------------+-----+-----------------------------------------------+----------------------------+\n Genesis     | Katherine   | Wiley       | genesis.wiley@gmail.com          | genesisw     | y9D2dtU3 | 959-197-1860    |  71 | genesis.wiley@interdemconsulting.eu           | 880-58-9247                |   \n Brayden     |             | Stanton     | brayden.stanton@yahoo.com        | braydens     | ZnjmhXik | 220-027-867     |  81 | brayden.stanton@supermemo.eu                  | 604-60-7069                |   \n Benjamin    | Julian      | Velasquez   | benjamin.velasquez@yahoo.com     | benjaminv    | 8Bc7m3eb | 298-377-0062    |  21 | benjamin.velasquez@hostesltd.biz              | 213-32-5882                |   \n Michael     | Thomas      | Donovan     | donovan@mail.com                 | michaeld     | OqBm9MLs | 078-134-4685    |  55 | michael.donovan@memortech.eu                  | 443-30-3442                |   \n Brooklyn    | Avery       | Roach       | brooklynroach@yahoo.com          | broach       | IxtBLafO | 387-786-2998    |  68 | brooklyn.roach@warst.biz                      | 085-88-3973                |   \n Skylar      |             | Bradshaw    | skylarbradshaw@yahoo.com         | skylarb      | p6eC6cKy | 210-872-608     |  96 | skylar.bradshaw@flyhigh.eu                    | 453-46-0334                |    \n.\n.\n.\n\n')),(0,o.kt)("p",null,"You can query the mock data."),(0,o.kt)("h2",{id:"query-your-own-data"},"Query your own data"),(0,o.kt)("p",null,"If you want to query your own data, you need to ingest your own data first. You can write a simple producer and write custom defined data to Pulsar. The following is an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class TestProducer {\n\n    public static class Foo {\n        private int field1 = 1;\n        private String field2;\n        private long field3;\n\n        public Foo() {\n        }\n\n        public int getField1() {\n            return field1;\n        }\n\n        public void setField1(int field1) {\n            this.field1 = field1;\n        }\n\n        public String getField2() {\n            return field2;\n        }\n\n        public void setField2(String field2) {\n            this.field2 = field2;\n        }\n\n        public long getField3() {\n            return field3;\n        }\n\n        public void setField3(long field3) {\n            this.field3 = field3;\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\n        Producer<Foo> producer = pulsarClient.newProducer(AvroSchema.of(Foo.class)).topic("test_topic").create();\n\n        for (int i = 0; i < 1000; i++) {\n            Foo foo = new Foo();\n            foo.setField1(i);\n            foo.setField2("foo" + i);\n            foo.setField3(System.currentTimeMillis());\n            producer.newMessage().value(foo).send();\n        }\n        producer.close();\n        pulsarClient.close();\n    }\n}\n\n')))}m.isMDXComponent=!0}}]);