"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2640],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12107:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],s={id:"head-metadata",title:"Contributing",description:"Learn how to contribute to Pulsar",hide_table_of_contents:!0},l=void 0,u={type:"mdx",permalink:"/contributing",source:"@site/src/pages/contributing.md",title:"Contributing",description:"Learn how to contribute to Pulsar",frontMatter:{id:"head-metadata",title:"Contributing",description:"Learn how to contribute to Pulsar",hide_table_of_contents:!0}},c=[{value:"Engage",id:"engage",level:2},{value:"Mailing list(s)",id:"mailing-lists",level:3},{value:"Github Issues",id:"github-issues",level:3},{value:"Online discussions",id:"online-discussions",level:3},{value:"Design",id:"design",level:2},{value:"Code",id:"code",level:2},{value:"One-time Setup",id:"one-time-setup",level:3},{value:"Optionally Submit Contributor License Agreement",id:"optionally-submit-contributor-license-agreement",level:4},{value:"Obtain a GitHub account",id:"obtain-a-github-account",level:4},{value:"Fork the repository on GitHub",id:"fork-the-repository-on-github",level:4},{value:"Clone the repository locally",id:"clone-the-repository-locally",level:4},{value:"IDE Setup",id:"ide-setup",level:4},{value:"Create a branch in your fork",id:"create-a-branch-in-your-fork",level:3},{value:"Syncing and pushing your branch",id:"syncing-and-pushing-your-branch",level:3},{value:"Testing",id:"testing",level:3},{value:"Licensing",id:"licensing",level:3},{value:"Develop C++/Python Client",id:"develop-cpython-client",level:3},{value:"Build C++/Python Client",id:"build-cpython-client",level:4},{value:"Run C++/Python Client Tests",id:"run-cpython-client-tests",level:3},{value:"Checkstyle",id:"checkstyle",level:3},{value:"Review",id:"review",level:2},{value:"Create a pull request",id:"create-a-pull-request",level:3},{value:"Code Review and Revision",id:"code-review-and-revision",level:3},{value:"LGTM",id:"lgtm",level:3},{value:"Deleting your branch",id:"deleting-your-branch",level:3},{value:"Commit (committers only)",id:"commit-committers-only",level:2},{value:"Contributor License Agreement",id:"contributor-license-agreement",level:3},{value:"Documentation",id:"documentation",level:2},{value:"Website",id:"website",level:3},{value:"Updating user logo",id:"updating-user-logo",level:4},{value:"Becoming a committer",id:"becoming-a-committer",level:2},{value:"Becoming member of PMC",id:"becoming-member-of-pmc",level:2}],p={toc:c};function h(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Apache Pulsar community welcomes contributions from anyone with a passion for distributed systems! Pulsar has many different opportunities for contributions --\nwrite new examples/tutorials, add new user-facing libraries, write new Pulsar IO connectors, or participate on the documentation effort."),(0,i.kt)("p",null,"We use a review-then-commit workflow in Pulsar for all contributions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For larger contributions or those that affect multiple components:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Engage"),": We encourage you to work with the Pulsar community on the\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/issues"},"Github Issues")," and\n",(0,i.kt)("a",{parentName:"li",href:"/contact"},"developer\u2019s mailing list")," to identify\ngood areas for contribution."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Design:")," More complicated contributions will likely benefit from some early discussion in\norder to scope and design them well.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For all contributions:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Code:")," code changes are always welcomed. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Doc"),": it is worth taking the time to make users know your code changes. Pulsar's long-term success rests on its ease of use, maintainability, etc. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Review:")," Submit a pull request with your contribution to our\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar"},"GitHub Repo"),". Work with a committer to review and\niterate on the code, if needed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Commit:")," Once at least 2 Pulsar committers have approved the pull request, a Pulsar committer\nwill merge it into the master branch (and potentially backport to stable branches in case of\nbug fixes).")),(0,i.kt)("p",null,"We look forward to working with you!"),(0,i.kt)("h2",{id:"engage"},"Engage"),(0,i.kt)("h3",{id:"mailing-lists"},"Mailing list(s)"),(0,i.kt)("p",null,"We discuss design and implementation issues on the ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org"),"\nmailing list, which is archived ",(0,i.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@pulsar.apache.org"},"here"),".\nJoin by emailing ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev-subscribe@pulsar.apache.org"},(0,i.kt)("inlineCode",{parentName:"a"},"dev-subscribe@pulsar.apache.org")),"."),(0,i.kt)("p",null,"If interested, you can also join the other ",(0,i.kt)("a",{parentName:"p",href:"/contact"},"mailing lists"),"."),(0,i.kt)("h3",{id:"github-issues"},"Github Issues"),(0,i.kt)("p",null,"We are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues"},"Github Issues")," as the issue tracking\nand project management tool, as well as a way to communicate among a very diverse and distributed set\nof contributors. To be able to gather feedback, avoid frustration, and avoid duplicated efforts all\nPulsar related work are being tracked there."),(0,i.kt)("p",null,"If you do not already have an Github account, sign up ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/join"},"here"),"."),(0,i.kt)("p",null,"If a quick ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues"},"search")," doesn\u2019t turn up an existing\nGithub issue for the work you want to contribute, create it. Please discuss your idea with a\ncommitter in Github or, alternatively, on the developer mailing list."),(0,i.kt)("p",null,"If there\u2019s an existing Github issue for your intended contribution, please comment about your intended\nwork. Once the work is understood, a committer will assign the issue to you. If an issue is currently\nassigned, please check with the current assignee before reassigning."),(0,i.kt)("p",null,"For moderate or large contributions, you should not start coding or writing a design document unless\nthere is a corresponding Github issue assigned to you for that work. Simple changes, like fixing typos,\ndo not require an associated issue."),(0,i.kt)("h3",{id:"online-discussions"},"Online discussions"),(0,i.kt)("p",null,"We are using ",(0,i.kt)("a",{parentName:"p",href:"https://apache-pulsar.slack.com/"},"Apache Pulsar Slack channel")," for online discussions.\nYou can self-invite yourself by accessing ",(0,i.kt)("a",{parentName:"p",href:"https://apache-pulsar.herokuapp.com/"},"this link"),"."),(0,i.kt)("p",null,"Slack channels are great for quick questions or discussions on specialized topics. Remember that we\nstrongly encourage communication via the mailing lists, and we prefer to discuss more complex subjects\nby email. Developers should be careful to move or duplicate all the official or useful discussions to\nthe issue tracking system and/or the dev mailing list."),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"To avoid potential frustration during the code review cycle, we encourage you to clearly scope and\ndesign non-trivial contributions with the Pulsar community before you start coding."),(0,i.kt)("p",null,'We are using "Pulsar Improvement Proposals" (or "PIP") for managing major changes to Pulsar. The\nlist of all PIPs is maintained in the Pulsar wiki at ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki"},"https://github.com/apache/pulsar/wiki"),"."),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("p",null,"To contribute code to Apache Pulsar, you\u2019ll have to do a few administrative steps once, and then\nfollow the ",(0,i.kt)("a",{parentName:"p",href:"../coding-guide"},"Coding Guide"),"."),(0,i.kt)("h3",{id:"one-time-setup"},"One-time Setup"),(0,i.kt)("h4",{id:"optionally-submit-contributor-license-agreement"},"[Optionally]"," Submit Contributor License Agreement"),(0,i.kt)("p",null,"Apache Software Foundation (ASF) desires that all contributors of ideas, code, or documentation to the Apache projects complete, sign, and submit an ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/icla.pdf"},"Individual Contributor License Agreement")," (ICLA). The purpose of this agreement is to clearly define the terms under which intellectual property has been contributed to the ASF and thereby allow us to defend the project should there be a legal dispute regarding the software at some future time."),(0,i.kt)("p",null,"We require you to have an ICLA on file with the Apache Secretary for larger contributions only. For smaller ones, however, we rely on ",(0,i.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0#contributions"},"clause five")," of the Apache License, Version 2.0, describing licensing of intentionally submitted contributions and do not require an ICLA in that case."),(0,i.kt)("h4",{id:"obtain-a-github-account"},"Obtain a GitHub account"),(0,i.kt)("p",null,"We use GitHub\u2019s pull request functionality to review proposed code changes."),(0,i.kt)("p",null,"If you do not already have a personal GitHub account, sign up ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/join"},"here"),"."),(0,i.kt)("h4",{id:"fork-the-repository-on-github"},"Fork the repository on GitHub"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/"},"Pulsar GitHub Repo")," and fork the repository\nto your own private account. This will be your private workspace for staging changes."),(0,i.kt)("h4",{id:"clone-the-repository-locally"},"Clone the repository locally"),(0,i.kt)("p",null,"You are now ready to create the development environment on your local machine. Feel free to repeat\nthese steps on all machines that you want to use for development."),(0,i.kt)("p",null,"We assume you are using SSH-based authentication with GitHub. If necessary, exchange SSH keys with\nGitHub by following ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/articles/generating-an-ssh-key/"},"their instructions"),"."),(0,i.kt)("p",null,"Clone your personal Pulsar\u2019s GitHub fork."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/<Github_user>/pulsar.git\n$ cd pulsar\n")),(0,i.kt)("p",null,"Add Apache Repo as additional Git remotes, where you can sync the changes (for committers, you need\nthese two remotes for pushing changes)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git remote add apache https://github.com/apache/pulsar\n")),(0,i.kt)("p",null,"You are now ready to start developing!"),(0,i.kt)("h4",{id:"ide-setup"},"IDE Setup"),(0,i.kt)("p",null,"For how to set up IDE, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/README.md#setting-up-your-ide"},"here"),". "),(0,i.kt)("h3",{id:"create-a-branch-in-your-fork"},"Create a branch in your fork"),(0,i.kt)("p",null,"You\u2019ll work on your contribution in a branch in your own (forked) repository. Create a local branch, initialized with the state of the branch you expect your changes to be merged into. Keep in mind that we use several branches, including ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),", feature-specific, and release-specific branches. If you are unsure, initialize with the state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git fetch apache\n$ git checkout -b <my-branch> apache/master\n")),(0,i.kt)("p",null,"At this point, you can start making and committing changes to this branch in a standard way."),(0,i.kt)("h3",{id:"syncing-and-pushing-your-branch"},"Syncing and pushing your branch"),(0,i.kt)("p",null,"Periodically while you work, and certainly before submitting a pull request, you should update your branch with the most recent changes to the target branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git pull --rebase\n")),(0,i.kt)("p",null,"Remember to always use ",(0,i.kt)("inlineCode",{parentName:"p"},"--rebase")," parameter to avoid extraneous merge commits."),(0,i.kt)("p",null,"Then you can push your local, committed changes to your (forked) repository on GitHub. Since rebase may change that branch's history, you may need to force push. You'll run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git push <GitHub_user> <my-branch> --force\n")),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("p",null,"All code should have appropriate unit testing coverage. New code should have new tests in the same contribution. Bug fixes should include a regression test to prevent the issue from reoccurring."),(0,i.kt)("h3",{id:"licensing"},"Licensing"),(0,i.kt)("p",null,"All code contributed to Pulsar will be licensed under ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License V2"),". You need to ensure every new files you are adding have the right\nlicense header. You can add license header to your files by running following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn initialize license:format\n")),(0,i.kt)("h3",{id:"develop-cpython-client"},"Develop C++/Python Client"),(0,i.kt)("p",null,"Currently C++ and Python client are developed under ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp")," directory. You can use following commands to build and test your c++ or python code changes."),(0,i.kt)("h4",{id:"build-cpython-client"},"Build C++/Python Client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./pulsar-client-cpp/docker-build.sh\n")),(0,i.kt)("h3",{id:"run-cpython-client-tests"},"Run C++/Python Client Tests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./pulsar-client-cpp/docker-test.sh\n")),(0,i.kt)("h3",{id:"checkstyle"},"Checkstyle"),(0,i.kt)("p",null,"Before you push the C++/Python changes for review, you should format the files to apply the checkstyle rule Pulsar is using for C++/Python code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./pulsar-client-cpp/docker-format.sh\n")),(0,i.kt)("h2",{id:"review"},"Review"),(0,i.kt)("p",null,"Once the initial code is complete and the tests pass, it\u2019s time to start the code review process. We review and discuss all code, no matter who authors it. It\u2019s a great way to build community, since you can learn from other developers, and they become familiar with your contribution. It also builds a strong project by encouraging a high quality bar and keeping code consistent throughout the project."),(0,i.kt)("h3",{id:"create-a-pull-request"},"Create a pull request"),(0,i.kt)("p",null,"Organize your commits to make a committer\u2019s job easier when reviewing. Committers normally prefer multiple small pull requests, instead of a single large pull request. Within a pull request, a relatively small number of commits that break the problem into logical steps is preferred. For most pull requests, you'll squash your changes down to 1 commit. You can use the following command to re-order, squash, edit, or change description of individual commits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git rebase -i apache/master\n")),(0,i.kt)("p",null,"You'll then push to your branch on GitHub. Note: when updating your commit after pull request feedback and use squash to get back to one commit, you will need to do a force submit to the branch on your repo."),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Pulsar GitHub Repo")," to create a pull request."),(0,i.kt)("p",null,"In the pull request description, please include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Motivation : Why is this change needed? What problem is addressing?"),(0,i.kt)("li",{parentName:"ul"},"Changes: Summary of what this pull request is changing, to help reviewers at better understanding\nthe changes.")),(0,i.kt)("p",null,"Please include a descriptive pull request message to help make the committer\u2019s job easier when reviewing.\nIt\u2019s fine to refer to existing design docs or the contents of the associated issue as appropriate."),(0,i.kt)("p",null,"If the pull request is fixing an issue, include a mention to in the description, like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Fixes #1234\n")),(0,i.kt)("p",null,"This will automatically change the state on the referenced issues."),(0,i.kt)("p",null,"If you know a good committer to review your pull request, please make a comment like the following. If not, don\u2019t worry -- a committer will pick it up."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Hi @<GitHub-committer-username>, can you please take a look?\n")),(0,i.kt)("p",null,"When choosing a committer to review, think about who is the expert on the relevant code, who the stakeholders are for this change, and who else would benefit from becoming familiar with the code. If you\u2019d appreciate comments from additional folks but already have a main committer, you can explicitly cc them using ",(0,i.kt)("inlineCode",{parentName:"p"},"@<GitHub-committer-username>"),"."),(0,i.kt)("h3",{id:"code-review-and-revision"},"Code Review and Revision"),(0,i.kt)("p",null,"During the code review process, don\u2019t rebase your branch or otherwise modify published commits, since this can remove existing comment history and be confusing to the committer when reviewing. When you make a revision, always push it in a new commit."),(0,i.kt)("p",null,"Our GitHub repo automatically provides pre-commit testing coverage using Jenkins. Please make sure those tests pass; the contribution cannot be merged otherwise."),(0,i.kt)("h3",{id:"lgtm"},"LGTM"),(0,i.kt)("p",null,"Once the committer is happy with the change, they\u2019ll approve the pull request with an LGTM (\u201c",(0,i.kt)("em",{parentName:"p"},"looks good to me!"),"\u201d) or a ",(0,i.kt)("inlineCode",{parentName:"p"},"+1"),". At this point, the committer will take over, possibly make some additional touch ups, and merge your changes into the codebase."),(0,i.kt)("p",null,"In the case the author is also a committer, either can merge the pull request. Just be sure to communicate clearly whose responsibility it is in this particular case."),(0,i.kt)("p",null,"Thank you for your contribution to Pulsar!"),(0,i.kt)("h3",{id:"deleting-your-branch"},"Deleting your branch"),(0,i.kt)("p",null,"Once the pull request is merged into the Pulsar repository, you can safely delete the branch locally and purge it from your forked repository."),(0,i.kt)("p",null,"From another local branch, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git fetch origin\n$ git branch -d <my-branch>\n$ git push origin --delete <my-branch>\n")),(0,i.kt)("h2",{id:"commit-committers-only"},"Commit (committers only)"),(0,i.kt)("p",null,"Once the code has been peer reviewed by a committer, the next step is for the committer to merge it into the Github repo."),(0,i.kt)("p",null,"Pull requests should not be merged before the review has approved from at least 2 committers."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Tip")),(0,i.kt)("p",{parentName:"blockquote"},"Git commit message is not only the best way to communicate context about code changes, but also shows whether a developer is a good collaborator. If the first commit message of a PR is not clear but the PR description is clear and concise, when merging a PR, consider copying the PR description to the commit message box or writing a proper one rather than using the default (first) commit message (see image below). In this way, others know the changes clearly, which is beneficial to cut a release or write a release note. Be well cared for git log is a healthy and sustainable thing.")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Submit clear commit message",src:n(38375).Z,width:"1814",height:"1096"})),(0,i.kt)("h3",{id:"contributor-license-agreement"},"Contributor License Agreement"),(0,i.kt)("p",null,"If you are merging a larger contribution, please make sure that the contributor has an ICLA on file with the Apache Secretary. You can view the list of committers ",(0,i.kt)("a",{parentName:"p",href:"http://home.apache.org/phonebook.html?unix=committers"},"here"),", as well as ",(0,i.kt)("a",{parentName:"p",href:"http://home.apache.org/unlistedclas.html"},"ICLA-signers who aren\u2019t yet committers"),"."),(0,i.kt)("p",null,"For smaller contributions, however, this is not required. In this case, we rely on ",(0,i.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0#contributions"},"clause five")," of the Apache License, Version 2.0, describing licensing of intentionally submitted contributions."),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("h3",{id:"website"},"Website"),(0,i.kt)("p",null,"The Pulsar website is in the same ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Pulsar Github Repo"),". The source files are hosted under ",(0,i.kt)("inlineCode",{parentName:"p"},"site2")," directory in ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch,\nthe static content is generated by CI job and merged into the ",(0,i.kt)("inlineCode",{parentName:"p"},"asf-site")," branch."),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/site2"},"README")," for making contributions to the website."),(0,i.kt)("h4",{id:"updating-user-logo"},"Updating user logo"),(0,i.kt)("p",null,"The Apache Pulsar Community welcomes all users to update their company logos on Pulsar website. If your team or organization has adopted Pulsar in production, you can update your company logos on ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/powered-by/"},"Pulsar website"),"."),(0,i.kt)("p",null,"To update your company logo, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/site2/website/data/users.js"},"link")," in your browser, then click the ",(0,i.kt)("strong",{parentName:"p"},"Edit")," icon to fork Pulsar repo, create a new branch and edit this file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add your company\u2019s information at the end of file. "),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"{\nname: 'StreamNative',\nurl: 'https://streamnative.io/',\nlogo: 'https://streamnative.io/static/images/streamnative-logo-white-bakground.png',\nlogo_white: true\n}\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"logo_white")," parameter is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," only when your company logo is in white color. Otherwise, you only need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"logo"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Commit the changes in your account\u2019s repo, publish the branch and create pull request.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update comments, if any. If no more comment, your pull request will be approved and merged by reviewers."))),(0,i.kt)("h2",{id:"becoming-a-committer"},"Becoming a committer"),(0,i.kt)("p",null,"Committers are community members that have write access to the project\u2019s\nrepositories, i.e., they can modify the code, documentation, and website\nby themselves and also accept other contributions."),(0,i.kt)("p",null,"There is no strict protocol for becoming a committer. Candidates for new\ncommitters are typically people that are active contributors and\ncommunity members."),(0,i.kt)("p",null,"Being an active community member means participating on mailing list\ndiscussions, helping to answer questions, verifying release candidates,\nbeing respectful towards others, and following the meritocratic\nprinciples of community management. Since the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/governance/"},"Apache Way"),"\nhas a strong focus on the project community, this part is very important."),(0,i.kt)("p",null,"Of course, contributing code and documentation to the project is\nimportant as well. A good way to start is contributing improvements, new\nfeatures, or bug fixes. You need to show that you take responsibility\nfor the code that you contribute, add tests and documentation, and help\nmaintaining it."),(0,i.kt)("p",null,"Every new committer has to be proposed by a current committer and then\nprivately discussed and voted in by the members of the Pulsar PMC.\nFor details about this process and for candidate requirements see the\ngeneral ",(0,i.kt)("a",{parentName:"p",href:"https://community.apache.org/newcommitter.html"},"Apache guidelines for assessing new candidates for committership"),".\nCandidates prepare for their nomination as committer by contributing\nto the Pulsar project and its community, by acting according to the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/how-it-works.html"},"Apache Way"),",\nand by generally following the path from\n",(0,i.kt)("a",{parentName:"p",href:"https://community.apache.org/contributors/"},"contributor to committer"),"\nfor Apache projects."),(0,i.kt)("p",null,"If you would like to become a committer, you should engage with the\ncommunity and start contributing to Apache Pulsar in any of the above\nways. You might also want to talk to other committers and ask for their\nadvice and guidance."),(0,i.kt)("h2",{id:"becoming-member-of-pmc"},"Becoming member of PMC"),(0,i.kt)("p",null,"The PMC is the project governance body. Committers or contributors that\nhave demonstrated continued involvement with the community can be\nnominated to become members of the PMC."),(0,i.kt)("p",null,"PMC members nominate new contributors to the project as either\ncommitters or as new PMC members, and PMC members cast votes on electing\nnew committers or PMC members to the project. PMC members also have\nbinding votes on any project matters. Refer to\n",(0,i.kt)("a",{parentName:"p",href:"http://www.apache.org/foundation/governance/pmcs.html"},"ASF PMCs governance"),"\nfor a more detailed explanation of the duties and roles of the PMC."))}h.isMDXComponent=!0},38375:function(e,t,n){t.Z=n.p+"assets/images/commit-message-3aba31767412ebedbe57231bd61c9542.png"}}]);