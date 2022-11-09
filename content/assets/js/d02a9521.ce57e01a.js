"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,k=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"setup-ide",title:"Setup IDE",sidebar_label:"Setup IDE"},i=void 0,l={unversionedId:"getting-started/setup-ide",id:"getting-started/setup-ide",title:"Setup IDE",description:"Apache Pulsar is using lombok so you have to ensure your IDE setup with required plugins.",source:"@site/contribute/getting-started/setup-ide.md",sourceDirName:"getting-started",slug:"/getting-started/setup-ide",permalink:"/contribute/getting-started/setup-ide",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/getting-started/setup-ide.md",tags:[],version:"current",lastUpdatedBy:"Sherlock Xu",lastUpdatedAt:1667958875,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"setup-ide",title:"Setup IDE",sidebar_label:"Setup IDE"},sidebar:"sidebar",previous:{title:"Setup and Building",permalink:"/contribute/getting-started/setup-building"},next:{title:"Documentation",permalink:"/contribute/category/documentation"}},s={},p=[{value:"IntelliJ IDEA",id:"intellij-idea",level:2},{value:"Configure Project JDK to Java 17 JDK",id:"configure-project-jdk-to-java-17-jdk",level:3},{value:"Configure Java version for Maven in IntelliJ",id:"configure-java-version-for-maven-in-intellij",level:3},{value:"Configure annotation processing in IntelliJ",id:"configure-annotation-processing-in-intellij",level:3},{value:"Configure code style",id:"configure-code-style",level:3},{value:"Configure Checkstyle",id:"configure-checkstyle",level:3},{value:"Further configuration in IntelliJ",id:"further-configuration-in-intellij",level:3},{value:"Eclipse",id:"eclipse",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Pulsar is using ",(0,o.kt)("a",{parentName:"p",href:"https://projectlombok.org/"},"lombok")," so you have to ensure your IDE setup with required plugins."),(0,o.kt)("h2",{id:"intellij-idea"},"IntelliJ IDEA"),(0,o.kt)("h3",{id:"configure-project-jdk-to-java-17-jdk"},"Configure Project JDK to Java 17 JDK"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Project Settings"),"."),(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"File")," -> ",(0,o.kt)("strong",{parentName:"p"},"Project Structure")," -> ",(0,o.kt)("strong",{parentName:"p"},"Project Settings")," -> ",(0,o.kt)("strong",{parentName:"p"},"Project"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the JDK version."),(0,o.kt)("p",{parentName:"li"},"From the JDK version drop-down list, select ",(0,o.kt)("strong",{parentName:"p"},"Download JDK...")," or choose an existing recent Java 17 JDK version.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the download dialog, select version ",(0,o.kt)("strong",{parentName:"p"},"17"),". You can pick a version from many vendors. Unless you have a specific preference, choose ",(0,o.kt)("strong",{parentName:"p"},"Eclipse Temurin (AdoptOpenJDK (Hotspot))"),"."))),(0,o.kt)("h3",{id:"configure-java-version-for-maven-in-intellij"},"Configure Java version for Maven in IntelliJ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Maven Importing Settings dialog by going to ",(0,o.kt)("strong",{parentName:"p"},"Settings")," -> ",(0,o.kt)("strong",{parentName:"p"},"Build, Execution, Deployment")," -> ",(0,o.kt)("strong",{parentName:"p"},"Build Tools")," -> ",(0,o.kt)("strong",{parentName:"p"},"Maven")," -> ",(0,o.kt)("strong",{parentName:"p"},"Importing"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("strong",{parentName:"p"},"Use Project JDK")," for ",(0,o.kt)("strong",{parentName:"p"},"JDK for Importer"),' setting. This uses the Java 17 JDK for running Maven when importing the project to IntelliJ. Some of the configuration in the Maven build is conditional based on the JDK version. Incorrect configuration gets chosen when the "JDK for Importer" isn\'t the same as the "Project JDK".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Validate that the JRE setting in ",(0,o.kt)("strong",{parentName:"p"},"Maven")," -> ",(0,o.kt)("strong",{parentName:"p"},"Runner")," dialog is set to ",(0,o.kt)("strong",{parentName:"p"},"Use Project JDK"),"."))),(0,o.kt)("h3",{id:"configure-annotation-processing-in-intellij"},"Configure annotation processing in IntelliJ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Annotation Processors Settings dialog box by going to ",(0,o.kt)("strong",{parentName:"li"},"Settings")," -> ",(0,o.kt)("strong",{parentName:"li"},"Build, Execution, Deployment")," -> ",(0,o.kt)("strong",{parentName:"li"},"Compiler")," -> ",(0,o.kt)("strong",{parentName:"li"},"Annotation Processors"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the following buttons:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Enable annotation processing")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Obtain processors from project classpath")),(0,o.kt)("li",{parentName:"ol"},"Store generated sources relative to: ",(0,o.kt)("strong",{parentName:"li"},"Module content root")))),(0,o.kt)("li",{parentName:"ol"},"Set the generated source directories to be equal to the Maven directories:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Set "Production sources directory:" to "target/generated-sources/annotations".'),(0,o.kt)("li",{parentName:"ol"},'Set "Test sources directory:" to "target/generated-test-sources/test-annotations".'))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"OK"),"."),(0,o.kt)("li",{parentName:"ol"},"Install the lombok plugin in intelliJ.")),(0,o.kt)("h3",{id:"configure-code-style"},"Configure code style"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Code Style Settings dialog box by going to ",(0,o.kt)("strong",{parentName:"li"},"Settings")," -> ",(0,o.kt)("strong",{parentName:"li"},"Editor")," -> ",(0,o.kt)("strong",{parentName:"li"},"Code Style"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the \u2699\ufe0f symbol -> ",(0,o.kt)("strong",{parentName:"li"},"Import scheme")," -> ",(0,o.kt)("strong",{parentName:"li"},"IntelliJ IDEA code style XML")),(0,o.kt)("li",{parentName:"ol"},"Pick the file ",(0,o.kt)("inlineCode",{parentName:"li"},"${pulsar_dir}/src/idea-code-style.xml")),(0,o.kt)("li",{parentName:"ol"},"On the dialog box that opens, click ",(0,o.kt)("strong",{parentName:"li"},"OK"),"."),(0,o.kt)("li",{parentName:"ol"},"Ensure the scheme you just created is selected in ",(0,o.kt)("strong",{parentName:"li"},"Scheme")," dropdown then click ",(0,o.kt)("strong",{parentName:"li"},"OK"),".")),(0,o.kt)("h3",{id:"configure-checkstyle"},"Configure Checkstyle"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Checkstyle-IDEA plugin."),(0,o.kt)("li",{parentName:"ol"},"Open Checkstyle Settings dialog box by going to ",(0,o.kt)("strong",{parentName:"li"},"Settings")," -> ",(0,o.kt)("strong",{parentName:"li"},"Tools")," -> ",(0,o.kt)("strong",{parentName:"li"},"Checkstyle"),"."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Checkstyle version")," to ",(0,o.kt)("strong",{parentName:"li"},"8.37"),"."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Scan scope")," to ",(0,o.kt)("strong",{parentName:"li"},"Only Java sources (including tests)"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"+")," button in the ",(0,o.kt)("strong",{parentName:"li"},"Configuration")," section to open a dialog to choose the checkfile file.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Description"),". For example, Pulsar."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Use a local checkstyle file"),"."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("strong",{parentName:"li"},"File")," to ",(0,o.kt)("strong",{parentName:"li"},"buildtools/src/main/resources/pulsar/checkstyle.xml"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Store relative to project location"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next")," -> ",(0,o.kt)("strong",{parentName:"li"},"Next")," -> ",(0,o.kt)("strong",{parentName:"li"},"Finish"),"."))),(0,o.kt)("li",{parentName:"ol"},"Activate the configuration you just added by toggling the corresponding box."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"OK"),".")),(0,o.kt)("h3",{id:"further-configuration-in-intellij"},"Further configuration in IntelliJ"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When working on the Pulsar core modules in IntelliJ, reduce the number of active projects in IntelliJ to speed up IDE actions and reduce unrelated IDE warnings.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In IntelliJ's Maven UI's tree view under \"Profiles\"",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Activate "core-modules" Maven profile'),(0,o.kt)("li",{parentName:"ul"},'De-activate "main" Maven profile'),(0,o.kt)("li",{parentName:"ul"},'Run the "Reload All Maven Projects" action from the Maven UI toolbar. You can also find the action by the name in the IntelliJ "Search Everywhere" window that gets activated by pressing the ',(0,o.kt)("strong",{parentName:"li"},"Shift")," key twice."))))),(0,o.kt)("li",{parentName:"ul"},'Run the "Generate Sources and Update Folders For All Projects" action from the Maven UI toolbar. You can also find the action by the name in the IntelliJ "Search Everywhere" window that gets activated by pressing the ',(0,o.kt)("strong",{parentName:"li"},"Shift"),' key twice. Running the action takes about 10 minutes for all projects. This is faster when the "core-modules" profile is the only active profile.')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},'In the case of compilation errors with missing Protobuf classes, ensure to run the "Generate Sources and Update Folders For All Projects" action.'),(0,o.kt)("li",{parentName:"ul"},"All of the Pulsar source code doesn't compile properly in IntelliJ and there are compilation errors.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Use the "core-modules" profile if working on the Pulsar core modules since the source code for those modules can be compiled in IntelliJ.'),(0,o.kt)("li",{parentName:"ul"},"Sometimes it might help to mark a specific project ignored in IntelliJ Maven UI by right-clicking the project name and select ",(0,o.kt)("strong",{parentName:"li"},"Ignore Projects")," from the menu."),(0,o.kt)("li",{parentName:"ul"},"Currently, it is not always possible to run unit tests directly from the IDE because of the compilation issues. As a workaround, individual test classes can be run by using the ",(0,o.kt)("inlineCode",{parentName:"li"},"mvn test -Dtest=TestClassName")," command."))),(0,o.kt)("li",{parentName:"ul"},"The above steps have all been performed, but a test still won't run.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In this case, try the following steps:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Close IntelliJ."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"mvn clean install -DskipTests")," on the command line."),(0,o.kt)("li",{parentName:"ol"},"Reopen IntelliJ."))),(0,o.kt)("li",{parentName:"ul"},"If that still doesn't work:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Verify Maven is using a supported version. Currently, the supported version of Maven is specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"<requireMavenVersion>")," section of the main pom.xml file."),(0,o.kt)("li",{parentName:"ol"},'Try "restart and clear caches" in IntelliJ and repeat the above steps to reload projects and generate sources.'))))))),(0,o.kt)("h2",{id:"eclipse"},"Eclipse"),(0,o.kt)("p",null,"Follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://howtodoinjava.com/automation/lombok-eclipse-installation-examples/"},"here")," to configure your Eclipse setup."))}u.isMDXComponent=!0}}]);