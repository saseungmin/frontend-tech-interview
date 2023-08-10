"use strict";(self.webpackChunkfrontend_tech_interview=self.webpackChunkfrontend_tech_interview||[]).push([[362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,k=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(k,c(c({ref:t},p),{},{components:n})):a.createElement(k,c({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},c="\uc9c8\ubb38 \ub9ac\uc2a4\ud2b8",i={unversionedId:"react/question/README",id:"react/question/README",title:"\uc9c8\ubb38 \ub9ac\uc2a4\ud2b8",description:"\ud83c\udf88 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub780? (\uac1c\uc778\uc801\uc778 \uc0dd\uac01)",source:"@site/docs/react/question/README.md",sourceDirName:"react/question",slug:"/react/question/",permalink:"/frontend-tech-interview/docs/react/question/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/question/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc49 React Architecture \ubc0f \ud328\ud134\uacfc \uad00\ub828\ub41c \uc544\ud2f0\ud074",permalink:"/frontend-tech-interview/docs/react/React Clean Architecture/"},next:{title:"\ud83d\udc49 React 18 \ubcc0\uacbd\uc810",permalink:"/frontend-tech-interview/docs/react/react-18/"}},l={},u=[{value:"\ud83c\udf88 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub780? (\uac1c\uc778\uc801\uc778 \uc0dd\uac01)",id:"-\ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c-\ucef4\ud3ec\ub10c\ud2b8\ub780-\uac1c\uc778\uc801\uc778-\uc0dd\uac01",level:2},{value:"\ud83c\udf88 \ub9ac\uc561\ud2b8 Hooks\uc758 \uc7a5\uc810",id:"-\ub9ac\uc561\ud2b8-hooks\uc758-\uc7a5\uc810",level:2},{value:"\ud83c\udf88 Class Component\uc640 Function Component\uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud558\uc138\uc694.",id:"-class-component\uc640-function-component\uc758-\ucc28\uc774\uc810\uc5d0-\ub300\ud574\uc11c-\uc124\uba85\ud558\uc138\uc694",level:2},{value:"\ud83c\udf88 virtual DOM\uc774 \ubb34\uc5c7\uc778\uac00\uc694? virtual DOM\uc774 \uc88b\uc740 \uc774\uc720\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud558\uc138\uc694.",id:"-virtual-dom\uc774-\ubb34\uc5c7\uc778\uac00\uc694-virtual-dom\uc774-\uc88b\uc740-\uc774\uc720\uc5d0-\ub300\ud574\uc11c-\uc124\uba85\ud558\uc138\uc694",level:2},{value:"\uacf5\uc2dd \ubb38\uc11c",id:"\uacf5\uc2dd-\ubb38\uc11c",level:3},{value:"\ud83c\udf88 \uc6f9 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \uc704\ud574 \ucd5c\uc801\ud654\ub97c \ud574 \ubcf8 \uacbd\ud5d8\uc774 \uc788\ub098\uc694? \ud639\uc740 useMemo\uc640 useCallback \uba54\uc18c\ub4dc\ub97c \ud65c\uc6a9\ud574 \ucd5c\uc801\ud654\ud558\ub294 \uc6d0\ub9ac\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud558\uc138\uc694.",id:"-\uc6f9-\uc131\ub2a5-\ud5a5\uc0c1\uc744-\uc704\ud574-\ucd5c\uc801\ud654\ub97c-\ud574-\ubcf8-\uacbd\ud5d8\uc774-\uc788\ub098\uc694-\ud639\uc740-usememo\uc640-usecallback-\uba54\uc18c\ub4dc\ub97c-\ud65c\uc6a9\ud574-\ucd5c\uc801\ud654\ud558\ub294-\uc6d0\ub9ac\uc5d0-\ub300\ud574\uc11c-\uc124\uba85\ud558\uc138\uc694",level:2},{value:"\ud83c\udf88 React Concurrent Mode",id:"-react-concurrent-mode",level:2},{value:"\ud83c\udf88 Hydrate\ub780?",id:"-hydrate\ub780",level:2},{value:"\ud83c\udf88 React Query",id:"-react-query",level:2},{value:"<code>staleTime</code> vs <code>cacheTime</code>",id:"staletime-vs-cachetime",level:3},{value:"<code>isLoading</code> vs <code>isFetching</code>",id:"isloading-vs-isfetching",level:3},{value:"\ud83c\udf88 Reference",id:"-reference",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc9c8\ubb38-\ub9ac\uc2a4\ud2b8"},"\uc9c8\ubb38 \ub9ac\uc2a4\ud2b8"),(0,r.kt)("h2",{id:"-\ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c-\ucef4\ud3ec\ub10c\ud2b8\ub780-\uac1c\uc778\uc801\uc778-\uc0dd\uac01"},"\ud83c\udf88 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub780? (\uac1c\uc778\uc801\uc778 \uc0dd\uac01)"),(0,r.kt)("p",null,'\ub9ac\uc561\ud2b8 \uacf5\uc2dd \ubb38\uc11c\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc815\ub9ac\ub97c \ubcf4\uba74 "\ucef4\ud3ec\ub10c\ud2b8\ub97c \ud1b5\ud574 UI\ub97c \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uac1c\ubcc4\uc801\uc778 \uc5ec\ub7ec \uc870\uac01\uc73c\ub85c \ub098\ub204\uace0, \uac01 \uc870\uac01\uc744 \uac1c\ubcc4\uc801\uc73c\ub85c \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."\uc640 \uac19\uc2b5\ub2c8\ub2e4.',(0,r.kt)("br",{parentName:"p"}),"\n","\uc774 \uad6c\uc808\uc5d0\uc11c \ubcfc \uc218 \uc788\ub4ef\uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uac1c\ubcc4\uc801\uc778 \uc5ec\ub7ec \uc870\uac01\uc774\ub77c\uace0 \ub9d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc5ec\uae30\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud655\uc7a5\uc131\uc788\uace0 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud574\uc57c\ud558\uace0 \ub3c5\ub9bd\uc801\uc774\uc5ec\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub7ec\uae30 \uc704\ud574\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub2e8\uc77c \ucc45\uc784\uc744 \uac00\uc9c0\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uad6c\uc131\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \ud14c\uc2a4\ud2b8\ud558\uae30 \uc88b\uace0 \uac00\ub3c5\uc131\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\uac00 \uc774\ub7ec\ud55c \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 DRY \uc6d0\uce59\uc744 \uc9c0\ud0a4\uba70 \uc911\ubcf5 \uc5c6\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub54c API\ub97c \ud638\ucd9c\ud558\ub294 \ub85c\uc9c1\uc774 \ud3ec\ud568\ub418\uc5b4\uc788\uac70\ub098 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc880 \ub354 \uc720\uc5f0\ud558\uace0 \uc735\ud1b5\uc131 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4 \ub54c \ud328\ud134\ub4e4\uc758 \uae30\ubcf8\uc801\uc778 \ubca0\uc774\uc2a4\ub294 \uc81c\uc5b4\uc758 \uc5ed\uc804\uc774 \ubc1c\ud310\uc73c\ub85c \ub418\uc5b4 \uc788\ub294\ub370, \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uac8c \uc81c\uc5b4\uad8c\uc744 \ub118\uaca8\uc8fc\uace0 \ud750\ub984\uc5d0 \ub9de\uac8c \ud1b5\uc81c \ub610\ub294 \ud574\ub2f9 \ub85c\uc9c1\uc744 \uad6c\ud604\ud558\uace0 \uc774 \ud750\ub984\uc5d0 \ub300\ud55c \ud638\ucd9c\uc740 \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ud574\uc8fc\ub294 \ubc29\uc2dd\uc73c\ub85c \uac04\ub2e8\ud55c API\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc73c\uba70 \uc774\ub807\uac8c \ud558\uba74 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,r.kt)("p",null,"\uc81c\uac00 \ud754\ud788 \ub9ce\uc774 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 custom hook\ub3c4 \uc608\ub97c \ub4e4 \uc218\uac00 \uc788\ub294\ub370 \uc774 custom hook\uc744 \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\ud558\uba74 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \ubd84\ub9ac\ud560 \uc218 \uc788\uc73c\uba70 \uc6b0\ub9ac\ub294 \uc774 custom hook\uc73c\ub85c \ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub9de\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc81c\uc5b4\uad8c\uc740 \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uac00\uc9c0\uace0 \uc788\uace0 \ud574\ub2f9 \ud1b5\uc81c\uad8c\uc744 \ub118\uaca8\uc8fc\uc5b4 \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc9c1\uc811 \ub85c\uc9c1\uc744 \ud638\ucd9c\ud558\ub294 \uac83\uc774 \uc544\ub2cc \ucef4\ud3ec\ub10c\ud2b8 \ubc16\uc758 custom hook\uc5d0\uc11c \ud638\ucd9c\ud558\uac8c \ud558\uc5ec \uad00\uc2ec\uc0ac\ub97c \ubd84\ub9ac\ud568\uc73c\ub85c\uc368 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc5ec\uae30\uc11c \uc8fc\uc758\ud574\uc57c\ud560 \uc810\uc740 \uacb0\uad6d \ubaa8\ub4e0 \uc6d0\uce59\uc740 \ud2b8\ub808\uc774\ub4dc\uc624\ud504\uc784\uc73c\ub85c \uad00\uc2ec\uc0ac\uc5d0 \ub530\ub978 \ubd84\ub9ac\uc640 \uc7ac\uc0ac\uc6a9\uc131\uc758 \ud655\ub300\ub97c \uc704\ud574 \uc81c\uc5b4 \uc704\uc784\uc744 \uc801\uc808\ud558\uac8c \ud558\uace0 \ub108\ubb34 \uc5b4\ub835\uc9c0 \uc54a\uac8c \uc0ac\uc6a9\uc131\ub3c4 \ub192\uc774\ub294 \uadf8 \uc0ac\uc774\uc758 \ucd5c\uc801\uc744 \ucc3e\uc544\ub0b4\ub294\uac74 \uac01\uc790\uc758 \uac1c\ubc1c\uc790\uc758 \ubaab\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc798 \uc124\uacc4\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub294 (\uc678\ubd80\ub85c \uc81c\uc5b4\ub97c \uc704\uc784\ud558\uc5ec) \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud558\uace0 \ud655\uc7a5 \uac00\ub2a5\ud55c \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59\uc744 \ub530\ub974\ub294 \ud14c\uc2a4\ud2b8 \uc6a9\uc774\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"-\ub9ac\uc561\ud2b8-hooks\uc758-\uc7a5\uc810"},"\ud83c\udf88 \ub9ac\uc561\ud2b8 Hooks\uc758 \uc7a5\uc810"),(0,r.kt)("p",null,"Hooks\ub97c \uc0ac\uc6a9\ud558\uba74 \ub85c\uc9c1\uc758 \uc7ac\uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\uace0 \uad00\ub9ac\uac00 \uc27d\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \ud568\uc218 \uc548\uc5d0\uc11c \ub2e4\ub978 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc73c\ub85c \uc0c8\ub85c\uc6b4 hook\uc744 \ub9cc\ub4e4\uc5b4 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\uc874\uc758 class component\ub294 \uc5ec\ub7ec \ub2e8\uacc4\uc758 \uc0c1\uc18d\uc73c\ub85c \uc778\ud574 \uc804\ubc18\uc801\uc73c\ub85c \ubcf5\uc7a1\uc131\uacfc \uc624\ub958 \uac00\ub2a5\uc131\uc744 \uc99d\uac00\uc2dc\ucf30\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc function component\uc5d0 hooks\ub97c \ub3c4\uc785\ud558\uba74\uc11c class component\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \uae30\ub2a5\uc744 \ubaa8\ub450 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c\uc740 \ubb3c\ub860\uc774\uace0 \uae30\uc874 class component \ubcf5\uc7a1\uc131, \uc7ac\uc0ac\uc6a9\uc131\uc758 \ub2e8\uc810\ub4e4\uae4c\uc9c0 \ud574\uacb0\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"-class-component\uc640-function-component\uc758-\ucc28\uc774\uc810\uc5d0-\ub300\ud574\uc11c-\uc124\uba85\ud558\uc138\uc694"},"\ud83c\udf88 Class Component\uc640 Function Component\uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud558\uc138\uc694."),(0,r.kt)("p",null,"class component\ub294 \uc5ec\ub7ec \ub2e8\uacc4\uc758 \uc0c1\uc18d\uc73c\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\ud558\uc5ec \ubcf5\uc7a1\uc131\uacfc \uc624\ub958 \uac00\ub2a5\uc131\uc744 \uc99d\uac00\uc2dc\ucf30\uc2b5\ub2c8\ub2e4. \uacb0\uad6d class component\ub294 \ud14c\uc2a4\ud2b8\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 Function Component\uac00 \ud0c4\uc0dd\ud558\uac8c \ub418\uc5c8\uace0, class component\ub294 \ub77c\uc774\ud50c \uc0ac\uc774\ud074\uc744 \uac00\uc9c0\uba74 \uc774\ub85c\uc778\ud574 \uac01\uac01 \uc0dd\uba85\uc8fc\uae30 \uba54\uc18c\ub4dc\uc5d0 \ub300\ud574 \uc54c\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ub610\ud55c, class Component\uc5d0\uc11c this \uc0ac\uc6a9\uc740 \uc5b4\ub824\uc6c0\uc744 \ub290\ub084 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc Function Component\ub294 \uc774\ub7ec\ud55c \uae30\ub2a5\uc744 hook\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0dd\uba85\uc8fc\uae30\uc5d0 \uc6d0\ud558\ub294 \ub3d9\uc791\uc744 \ud558\uac8c \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"-virtual-dom\uc774-\ubb34\uc5c7\uc778\uac00\uc694-virtual-dom\uc774-\uc88b\uc740-\uc774\uc720\uc5d0-\ub300\ud574\uc11c-\uc124\uba85\ud558\uc138\uc694"},"\ud83c\udf88 virtual DOM\uc774 \ubb34\uc5c7\uc778\uac00\uc694? virtual DOM\uc774 \uc88b\uc740 \uc774\uc720\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud558\uc138\uc694."),(0,r.kt)("p",null,"virtual DOM\uc740 \uc2e4\uc81c DOM\uc758 \ubcc0\ud654\ub97c \ucd5c\uc18c\ud654 \uc2dc\ucf1c\uc8fc\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. virtual DOM\uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720\ub294 \ud6a8\uc728\uc131 \ub54c\ubb38\uc785\ub2c8\ub2e4. virtual DOM\uc744 \ud65c\uc6a9\ud558\uba74 \uc2e4\uc81c DOM\uc744 \ubc14\uafb8\ub294 \uac83\ubcf4\ub2e4 \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\uac00 \ub0ae\uc544\uc9d1\ub2c8\ub2e4. \ub9cc\uc57d HTML \ud30c\uc77c\uc5d0 20\uac1c\uc758 \ubcc0\ud654\uac00 \uc0dd\uae30\uba74 \uacfc\uc815 \uc5ed\uc2dc 20\ud68c\uac00 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \ud558\uc9c0\ub9cc virtual DOM\uc740 \ubcc0\ud654\ub41c \ubd80\ubd84\ub9cc \uac00\ub824\ub0b4\uc5ec \uc2e4\uc81c DOM\uc5d0 \uc804\ub2ec\ud558\uae30\uc5d0 \uc2e4\uc81c DOM\uc740 1\ud68c\ub85c \uc778\uc2dd\ud558\uc5ec \ub2e8 \ud55c\ubc88\ub9cc\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815\ub9cc \uac70\uce58\uac8c \ub429\ub2c8\ub2e4.    "),(0,r.kt)("h3",{id:"\uacf5\uc2dd-\ubb38\uc11c"},"\uacf5\uc2dd \ubb38\uc11c"),(0,r.kt)("p",null,'\uac00\uc0c1 DOM(VDOM)\uc740 UI\uc758 \uc774\uc0c1\uc801\uc778 \ub610\ub294 "virtual" \ud45c\ud604\uc774 \uba54\ubaa8\ub9ac\uc5d0 \uc720\uc9c0\ub418\uace0 ReactDOM\uacfc \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uc758\ud574 "real" DOM\uacfc \ub3d9\uae30\ud654\ub418\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uac1c\ub150\uc785\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc138\uc2a4\ub97c reconciliation(\uc7ac\uc870\uc815) \uc774\ub77c\uace0 \ud569\ub2c8\ub2e4 .   '),(0,r.kt)("p",null,"\uc774 \uc811\uadfc \ubc29\uc2dd\uc740 React\uc758 \uc120\uc5b8\uc801 API\ub97c \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4.: React\uc5d0 UI\ub97c \uc6d0\ud558\ub294 \uc0c1\ud0dc\ub97c \uc9c0\uc815\ud558\uba74 DOM\uc774 \ud574\ub2f9 \uc0c1\ud0dc\uc640 \uc77c\uce58\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 \uc571 \uad6c\ucd95\uc5d0 \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8 \uc870\uc791, \uc774\ubca4\ud2b8 \ucc98\ub9ac, \uc218\ub3d9 DOM \uc5c5\ub370\uc774\ud2b8\ub97c \ucd94\uc0c1\ud654\ud569\ub2c8\ub2e4.   "),(0,r.kt)("p",null,"\u201cvirtual DOM\u201d\uc740 \ud2b9\uc815 \uae30\uc220\uc774\ub77c\uae30\ubcf4\ub2e4\ub294 \ud328\ud134\uc5d0 \uac00\uae5d\uae30 \ub54c\ubb38\uc5d0 \uc0ac\ub78c\ub4e4\ub9c8\ub2e4 \uc758\ubbf8\ud558\ub294 \ubc14\uac00 \ub2e4\ub985\ub2c8\ub2e4. React\uc758 \uc138\uacc4\uc5d0\uc11c \u201cvirtual DOM\u201d\uc774\ub77c\ub294 \uc6a9\uc5b4\ub294 \ubcf4\ud1b5 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub098\ud0c0\ub0b4\ub294 \uac1d\uccb4\uc774\uae30 \ub54c\ubb38\uc5d0 React elements\uc640 \uc5f0\uad00\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 React\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac\uc5d0 \ub300\ud55c \ucd94\uac00 \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\uae30 \uc704\ud574 \u201cfibers\u201d\ub77c\ub294 \ub0b4\ubd80 \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub610\ud55c React\uc5d0\uc11c \u201cvirtual DOM\u201d \uad6c\ud604\uc758 \uc77c\ubd80\ub85c \uac04\uc8fc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/faq-internals.html"},"\uacf5\uc2dd \ubb38\uc11c"))),(0,r.kt)("h2",{id:"-\uc6f9-\uc131\ub2a5-\ud5a5\uc0c1\uc744-\uc704\ud574-\ucd5c\uc801\ud654\ub97c-\ud574-\ubcf8-\uacbd\ud5d8\uc774-\uc788\ub098\uc694-\ud639\uc740-usememo\uc640-usecallback-\uba54\uc18c\ub4dc\ub97c-\ud65c\uc6a9\ud574-\ucd5c\uc801\ud654\ud558\ub294-\uc6d0\ub9ac\uc5d0-\ub300\ud574\uc11c-\uc124\uba85\ud558\uc138\uc694"},"\ud83c\udf88 \uc6f9 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \uc704\ud574 \ucd5c\uc801\ud654\ub97c \ud574 \ubcf8 \uacbd\ud5d8\uc774 \uc788\ub098\uc694? \ud639\uc740 useMemo\uc640 useCallback \uba54\uc18c\ub4dc\ub97c \ud65c\uc6a9\ud574 \ucd5c\uc801\ud654\ud558\ub294 \uc6d0\ub9ac\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud558\uc138\uc694."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc740 \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \uc704\ud574\uc11c \uc0ac\uc6a9\ub418\ub294 Hook\uc785\ub2c8\ub2e4. \uc774 \ub54c, ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \ud2b9\uc815 \uacb0\uacfc \uac12\uc744 \uc7ac\uc0ac\uc6a9\ud558\ub294 \ubc18\uba74\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc740 \ud2b9\uc815\ud568\uc218\ub97c \uc0c8\ub85c \ub9cc\ub4e4\uc9c0 \uc54a\uace0 \uc7ac\uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 \ub458\uc740 dependency \ub9ac\uc2a4\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec \uadf8 \uc911 \ud558\ub098\uac00 \ubcc0\uacbd\uc774 \ub418\uba74 \uacb0\uacfc\uc5d0 \ub300\ud574 \ubcc0\uacbd\ub429\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/saseungmin/frontend-tech-interview/blob/main/react/when-to-useMemo-and-useCallback.md"},"When to ",(0,r.kt)("inlineCode",{parentName:"a"},"useMemo")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"useCallback")))),(0,r.kt)("h2",{id:"-react-concurrent-mode"},"\ud83c\udf88 React Concurrent Mode"),(0,r.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc2f1\uae00\uc2a4\ub808\ub4dc \uae30\ubc18 \uc5b8\uc5b4\uc774\ub2e4\ubcf4\ub2c8 \ub3d9\uc2dc\uc5d0 \ucc98\ub9ac\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c React\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc774\uace0 \ub530\ub77c\uc11c \ub3d9\uc77c\ud55c \uc81c\ud55c \uc0ac\ud56d\uc5d0 \ubb36\uc5ec\uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac\ub85c\uc11c\ub294, React\uac00 ",(0,r.kt)("a",{parentName:"p",href:"https://ko.reactjs.org/docs/reconciliation.html"},"\uc7ac\uc870\uc815(Reconciliation)")," \uacfc\uc815\uc744 \ud55c\ubc88 \uc2dc\uc791\ud558\uba74, \uc774 \uacfc\uc815\uc774 \uc644\uc804\ud788 \ub05d\ub098\uae30 \uc804\uae4c\uc9c0\ub294 \uc774\ub97c \uba48\ucd9c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ube0c\ub77c\uc6b0\uc800\uc758 \uba54\uc778 UI \uc2a4\ub808\ub4dc\ub294 \uc0ac\uc6a9\uc790 \uc785\ub825\uc744 \ubc1b\ub294 \ub4f1\uc758 \ub2e4\ub978 \uc791\uc5c5\uc744 \uc2e4\ud589\ud560 \uc218 \uc5c6\uac8c \ub429\ub2c8\ub2e4.   "),(0,r.kt)("p",null,"\uadf8\ub798\uc11c concurrent mode\uac00 \ud0c4\uc0dd\ud558\uac8c \ub418\uc5c8\ub294\ub370 \uc5ec\ub7ec \uc791\uc5c5\uc744 \ub3d9\uc2dc\uc5d0 \ucc98\ub9ac\ud558\ub3c4\ub85d \ud558\ub294 \ubc29\uc2dd\uc778\ub370, \uc2e4\uc81c\ub85c\ub294 \ub3d9\uc2dc\ub85c \uc791\uc5c5\uc774 \uc218\ud589\ub418\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uc804\ud658\uc774 \ube60\ub974\uae30 \ub584\ubb38\uc5d0 \uadf8\ub807\uac8c \ubcf4\uc774\ub294 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc5ec\ub7ec \uc791\uc5c5\uc744 \uc791\uc740 \ub2e8\uc704\ub85c \ub098\ub208\ub4a4 \uadf8 \uc791\uc5c5\ub4e4 \uac04\uc758 \uc6b0\uc120\uc21c\uc704\ub97c \uc815\ud574\uc11c \uadf8 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4.   "),(0,r.kt)("p",null,"Concurrent mode\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc5d0\uc11c \uc544\uc8fc \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ud544\uc694\ub85c\ud558\ub294 \uc911\uc694\ud55c \ubd80\ubd84\uc744 \uc6b0\uc120\uc21c\uc704\ub97c \ub192\uac8c\ud558\uace0 \ubd88\ud544\uc694\ud55c \ubd80\ubd84\uc5d0\ub294 delay\ub97c \uac78\uc5b4\uc8fc\uc5b4 \uc0ac\uc6a9\uc790\uacbd\ud5d8\uc744 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react"},"https://reactjs.org/blog/2022/03/29/react-v18.html#what-is-concurrent-react")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://velog.io/@cadenzah/react-concurrent-mode"},"https://velog.io/@cadenzah/react-concurrent-mode"))),(0,r.kt)("h2",{id:"-hydrate\ub780"},"\ud83c\udf88 Hydrate\ub780?"),(0,r.kt)("p",null,"Hydrate\ub294 SSR\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uac1c\ub150\uc785\ub2c8\ub2e4. SSR\uc758 \uacbd\uc6b0 pre-rendering\ub97c \ud1b5\ud574 \uc644\uc131\ub41c HTML\uc744 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \uc804\ub2ec\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \uc11c\ubc84\uc5d0\uc11c \ub80c\ub354\ub9c1\ub41c \uc815\uc801 \ud398\uc774\uc9c0\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \ubcf4\ub0b4\uace0, react\ub294 \ubc88\ub4e4\ub9c1\ub41c JavaScript \ucf54\ub4dc\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \ubcf4\ub0c5\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc804\ub2ec\ubc1b\uc740 HTML\uacfc JS\ucf54\ub4dc\ub97c \ub9e4\uce6d\ud558\ub294 Hydrate\ub97c \uc218\ud589\ud569\ub2c8\ub2e4. Hydrate\ub780 \uc804\uc1a1\ubc1b\uc740 JavaScript\ub4e4\uc774 \uc774\uc804\uc5d0 \ubcf4\ub0b4\uc9c4 HTML DOM \uc694\uc18c \uc704\uc5d0\uc11c \ud55c\ubc88 \ub354 \ub80c\ub354\ub9c1 \ud558\uac8c \ub418\uba74\uc11c \uac01\uac01 \uc790\uae30 \uc790\ub9ac\ub97c \ucc3e\uc544\uac00\uba70 \ub9e4\uce6d\ub418\ub294 \uac83\uc785\ub2c8\ub2e4. Hydrate \ud6c4\uc5d0\ub294 \ud074\ub9ad\uacfc \uac19\uc740 \uc774\ubca4\ud2b8\ub098 \ubaa8\ub4c8\ub4e4\uc774 \uc801\uc6a9\ub418\uc5b4 \uc0ac\uc6a9\uc790 \uc870\uc791\uc774 \uac00\ub2a5\ud574\uc9d1\ub2c8\ub2e4.   "),(0,r.kt)("p",null,"\uc989, Hydrate\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 JavaScript\uac00 \uc815\uc801 \ud638\uc2a4\ud305 \ub610\ub294 \uc11c\ubc84 \uce21 \ub80c\ub354\ub9c1\uc744 \ud1b5\ud574 \uc804\ub2ec\ub418\ub294 \uc815\uc801 HTML \uc694\uc18c\uc5d0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \ucca8\ubd80\ud558\uc5ec \ub3d9\uc801 \uc6f9 \ud398\uc774\uc9c0\ub85c \ubcc0\ud658\ud558\ub294 \uae30\uc220\uc785\ub2c8\ub2e4.   "),(0,r.kt)("p",null,"React 18 \uc774\uc804\uc5d0\ub294 \ud55c \ubc88 hydration\uc774 \uc2dc\uc791\ub418\uba74 \uc804\uccb4 \ud2b8\ub9ac\uac00 \uc644\uc804\ud788 hydration\uc774 \ub418\uae30 \uc804\uae4c\uc9c0\ub294 \uc720\uc800\ub294 hydration\uc774 \ubd88\ud544\uc694\ud55c \ub2e4\ub978 \uc601\uc5ed\uacfc \uc0c1\ud638\uc791\uc6a9\uc744 \ud560 \uc218 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc react 18 \ubc84\uc804\uc5d0\uc11c suspense\ub97c \uc0ac\uc6a9\ud55c concurrent mode\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub418\uba74\uc11c \ud544\uc694\ud55c \ubd80\ubd84\ub9cc hydration\uc774 \uac00\ub2a5\ud558\uba70, \uae30\uc874\uc5d0 hydration\uc744 \ud558\uae30 \uc704\ud574\uc11c\ub294 \ubaa8\ub450 \ubd88\ub7ec\uc640\uc57c\ud558\ub294 \ubb38\uc81c\ub3c4 lazy\ub97c \uc0ac\uc6a9\ud55c \ucf54\ub4dc \uc2a4\ud50c\ub9ac\ud305\uc73c\ub85c \ud574\uacb0\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"-react-query"},"\ud83c\udf88 React Query"),(0,r.kt)("h3",{id:"staletime-vs-cachetime"},(0,r.kt)("inlineCode",{parentName:"h3"},"staleTime")," vs ",(0,r.kt)("inlineCode",{parentName:"h3"},"cacheTime")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"staleTime"),"\uc740 \ub370\uc774\ud130\uac00 fresh \uc0c1\ud0dc\uc5d0\uc11c stale \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ub418\ub294\ub370 \uac78\ub9ac\ub294 \uc2dc\uac04\uc785\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 0\ubd84\uc73c\ub85c \uc989\uc2dc \ubcc0\uacbd\ub429\ub2c8\ub2e4. fresh \uc0c1\ud0dc\uc77c \ub54c\ub294 \ucffc\ub9ac \uc778\uc2a4\ud134\uc2a4\uac00 \uc0c8\ub86d\uac8c mount \ub418\uc5b4\ub3c4 \ub124\ud2b8\uc6cc\ud06c fetch\uac00 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub610\ud55c, ",(0,r.kt)("inlineCode",{parentName:"p"},"staleTime"),"\uc774 \uc9c0\ub098\uc9c0 \uc54a\uc558\ub2e4\uba74 unmount \ud6c4 mount \ub418\uc5b4\ub3c4 fetch\uac00 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.   "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cacheTime"),"\uc740 \ub370\uc774\ud130\uac00 inactive(\ube44\ud65c\uc131) \uc0c1\ud0dc\uc77c \ub54c \uce90\uc2f1\ub41c \uc0c1\ud0dc\ub85c \ub0a8\uc544\uc788\ub294 \uc2dc\uac04\uc73c\ub85c \uae30\ubcf8\uac12\uc740 5\ubd84\uc785\ub2c8\ub2e4. \ucffc\ub9ac \uc778\uc2a4\ud134\uc2a4\uac00 unmount \ub418\uba74 \ub370\uc774\ud130\ub294 inactive \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ub418\uba70, \uce90\uc2dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheTime"),"\ub9cc\ud07c \uc720\uc9c0\ub429\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheTime"),"\uc774 \uc9c0\ub0ac\uc744 \uacbd\uc6b0\uc5d0\ub294 \uac00\ube44\uc9c0 \uceec\ub809\ud130 \uc218\uc9d1 \ub300\uc0c1\uc774 \ub429\ub2c8\ub2e4. \ub9cc\uc57d ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheTime"),"\uc774 \uc9c0\ub098\uae30 \uc804\uc5d0 \ucffc\ub9ac \uc778\uc2a4\ud134\uc2a4\uac00 \ub2e4\uc2dc mount \ub418\uba74, \ub370\uc774\ud130\ub97c fetch\ud558\ub294 \ub3d9\uc548 \uce90\uc2dc \ub370\uc774\ud130\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/caching"},"https://tanstack.com/query/latest/docs/react/guides/caching"))),(0,r.kt)("h3",{id:"isloading-vs-isfetching"},(0,r.kt)("inlineCode",{parentName:"h3"},"isLoading")," vs ",(0,r.kt)("inlineCode",{parentName:"h3"},"isFetching")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isFetching"),"\uc740 \ub370\uc774\ud130\uac00 fetch\ub420 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc77c \ubfd0\ub9cc \uc544\ub2c8\ub77c, \uce90\uc2f1 \ub370\uc774\ud130\uac00 \uc788\uc5b4\uc11c \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c fetch \ub418\ub354\ub77c\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc785\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading"),"\uc740 \uce90\uc2f1\ub41c \ub370\uc774\ud130\uac00 \uc5c6\uc744 \ub54c fetch \uacbd\uc6b0\uc5d0\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"-reference"},"\ud83c\udf88 Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://velog.io/@ye-ji/React-%EC%98%88%EC%83%81-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EB%A6%AC%EC%8A%A4%ED%8A%B8"},"https://velog.io/@ye-ji/React-%EC%98%88%EC%83%81-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EB%A6%AC%EC%8A%A4%ED%8A%B8"))))}m.isMDXComponent=!0}}]);