"use strict";(self.webpackChunkfrontend_tech_interview=self.webpackChunkfrontend_tech_interview||[]).push([[794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),k=a,d=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={},i="\ud83d\udc49 React Architecture \ubc0f \ud328\ud134\uacfc \uad00\ub828\ub41c \uc544\ud2f0\ud074",c={unversionedId:"react/react-clean-architecture/README",id:"react/react-clean-architecture/README",title:"\ud83d\udc49 React Architecture \ubc0f \ud328\ud134\uacfc \uad00\ub828\ub41c \uc544\ud2f0\ud074",description:"\ud83c\udf88 \ub9ac\uc561\ud2b8 \uc124\uacc4 \uac00\uc774\ub4dc",source:"@site/docs/react/react-clean-architecture/README.md",sourceDirName:"react/react-clean-architecture",slug:"/react/react-clean-architecture/",permalink:"/frontend-tech-interview/docs/react/react-clean-architecture/",draft:!1,editUrl:"https://github.com/saseungmin/frontend-tech-interview/tree/main/docs/react/react-clean-architecture/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc49 React 18 \ubcc0\uacbd\uc810",permalink:"/frontend-tech-interview/docs/react/react-18/"},next:{title:"\ud83d\udc49 React Fiber Architecture",permalink:"/frontend-tech-interview/docs/react/react-fiber-architecture/"}},o={},p=[{value:"\ud83c\udf88 \ub9ac\uc561\ud2b8 \uc124\uacc4 \uac00\uc774\ub4dc",id:"-\ub9ac\uc561\ud2b8-\uc124\uacc4-\uac00\uc774\ub4dc",level:3},{value:"\ub9ac\uc561\ud2b8 \uc124\uacc4\ub97c \ud558\ub294 \uc6d0\uce59",id:"\ub9ac\uc561\ud2b8-\uc124\uacc4\ub97c-\ud558\ub294-\uc6d0\uce59",level:4},{value:"\ud83c\udf88 \uc720\uc6a9\ud55c \ub9ac\uc561\ud2b8 \ud328\ud134 5\uac00\uc9c0",id:"-\uc720\uc6a9\ud55c-\ub9ac\uc561\ud2b8-\ud328\ud134-5\uac00\uc9c0",level:3},{value:"\ud83c\udf88 \ub9ac\uc561\ud2b8 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\uc870 - \uc544\ud1a0\ubbf9 \ub514\uc790\uc778",id:"-\ub9ac\uc561\ud2b8-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uad6c\uc870---\uc544\ud1a0\ubbf9-\ub514\uc790\uc778",level:3},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:4},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:4},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:4},{value:"\ud83d\udccc \ucc38\uace0 \ub9c1\ud06c",id:"-\ucc38\uace0-\ub9c1\ud06c",level:3}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-react-architecture-\ubc0f-\ud328\ud134\uacfc-\uad00\ub828\ub41c-\uc544\ud2f0\ud074"},"\ud83d\udc49 React Architecture \ubc0f \ud328\ud134\uacfc \uad00\ub828\ub41c \uc544\ud2f0\ud074"),(0,a.kt)("h3",{id:"-\ub9ac\uc561\ud2b8-\uc124\uacc4-\uac00\uc774\ub4dc"},"\ud83c\udf88 ",(0,a.kt)("a",{parentName:"h3",href:"https://www.stevy.dev/react-design-guide"},"\ub9ac\uc561\ud2b8 \uc124\uacc4 \uac00\uc774\ub4dc")),(0,a.kt)("h4",{id:"\ub9ac\uc561\ud2b8-\uc124\uacc4\ub97c-\ud558\ub294-\uc6d0\uce59"},"\ub9ac\uc561\ud2b8 \uc124\uacc4\ub97c \ud558\ub294 \uc6d0\uce59"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc6b0\ub9ac\ub294 ",(0,a.kt)("strong",{parentName:"li"},"\ud655\uc7a5\uc131"),"\uc788\uace0 ",(0,a.kt)("strong",{parentName:"li"},"\uc7ac\uc0ac\uc6a9\uc131")," \uc788\ub294 \ucf54\ub4dc\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4"),(0,a.kt)("li",{parentName:"ol"},"\uad00\uc2ec\uc0ac\uc5d0 \ub530\ub77c\uc11c \ucf54\ub4dc\ub97c \ubd84\ub9ac\ud558\uace0 ",(0,a.kt)("strong",{parentName:"li"},"\ub2e8\uc77c \ucc45\uc784"),"\uc744 \uac00\uc9c0\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4"),(0,a.kt)("li",{parentName:"ol"},"\uc678\ubd80\uc5d0 ",(0,a.kt)("strong",{parentName:"li"},"\uc81c\uc5b4\ub97c \uc704\uc784"),"\uc2dc\ucf1c\uc57c \ud55c\ub2e4")),(0,a.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0ac\uc804\uc801 \uc815\uc758\uc5d0 \ub530\ub974\uba74 \ucef4\ud3ec\ub10c\ud2b8\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc7ac\uc0ac\uc6a9\uc131"),"\uacfc ",(0,a.kt)("strong",{parentName:"p"},"\ubc94\uc6a9\uc131"),"\uc744 \uc704\ud574\uc11c \ub9cc\ub4e4\uc5b4\uc838\uc57c \ud55c\ub2e4.   "),(0,a.kt)("p",null,"\ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub531 \ud55c\uac00\uc9c0 \uc5ed\ud560\ub9cc \uc218\ud589\uc2dc\ud0a4\uae30 \uc704\ud574 \uc124\uacc4 \ud558\uae30 \uc704\ud574\uc11c\ub294 \uc21c\uc218\ud568\uc218\uc758 \ud2b9\uc131\uacfc \uac19\uc774 \ub3d9\uc77c\ud55c ",(0,a.kt)("strong",{parentName:"p"},"props"),"\ub97c \ubc1b\uc73c\uba74 \uac19\uc740 JSX \ub9ac\ud134\ud558\ub294 \uc21c\uc218\ud568\uc218\ub85c \uc774\ub904\uc838\uc57c \ud55c\ub2e4. \uc798 \uaca9\ub9ac\ub418\uace0 \uc5ed\ud560\uc774 \uc798 \uc815\uc758\ud574\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uba74 \ucf54\ub4dc\uac00 \ub108\ubb34 \uad11\ubc94\uc704\ud55c \uc5ed\ud560\uc744 \uc218\ud589\ud558\uace0 \ubcf5\uc7a1\ud574\uc9c0\ub294 \uac78 \ubc29\uc9c0\ud574 \uc900\ub2e4. \ub2e8\uc77c \ucc45\uc784\uc744 \uac00\uc9c0\ub294 \uc21c\uc218 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \ud14c\uc2a4\ud2b8\ud558\uae30 \uc88b\uace0 \uac00\ub3c5\uc131\ub3c4 \uc88b\ub2e4.   "),(0,a.kt)("p",null,"\uc81c\uc5b4\ub97c \uc678\ubd80\uc5d0 \uc704\uc784 \ud560\uc218\ub85d \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc720\uc5f0\uc131\uacfc \uc7ac\uc0ac\uc6a9\uc131\uc774 \ub192\uc544\uc9c4\ub2e4. \ubc18\uba74, \uc81c\uc5b4\ub97c \uc704\uc784\ud558\uba74 \ud560\uc218\ub85d \uc704\uc784\ud55c \ucf54\ub4dc\ub97c \uc0ac\uc6a9 \ud558\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud55c \uc774\ud574 \ub09c\uc774\ub3c4\uac00 \ub192\uc544 \uac00\uace0, \uac00\ub3c5\uc131\uc774 \ub5a8\uc5b4\uc9c4\ub2e4\ub294 \ubb38\uc81c\ub3c4 \uc788\ub2e4. \uc704\uc784\uacfc \uc0ac\uc6a9 \uc6a9\uc774\uc131\uc758 \uc911\uc2ec\uc744 \uc798 \uc7a1\ub294\uac8c \uc911\uc694\ud558\ub2e4.   "),(0,a.kt)("p",null,"\uad00\uc2ec\uc0ac\uc5d0 \ub530\ub978 \ubd84\ub9ac\uc640 \uc7ac\uc0ac\uc6a9\uc131\uc758 \ud655\ub300\ub97c \uc704\ud574 \uc81c\uc5b4 \uc704\uc784\uc744 \uc801\uc808\ud558\uac8c \ud558\uace0 \ub610, \ub108\ubb34 \uc5b4\ub835\uc9c0 \uc54a\uac8c \uc0ac\uc6a9\uc131\ub3c4 \ub192\uc774\ub294 \uadf8 \uc0ac\uc774\uc758 \ucd5c\uc801\uc744 \ucc3e\uc544\ub0b4\ub294\uac8c \uac1c\ubc1c\uc790\uc758 \ubaab\uc778 \uac83 \uac19\ub2e4."),(0,a.kt)("h3",{id:"-\uc720\uc6a9\ud55c-\ub9ac\uc561\ud2b8-\ud328\ud134-5\uac00\uc9c0"},"\ud83c\udf88 ",(0,a.kt)("a",{parentName:"h3",href:"https://velog.io/@dnr6054/%EC%9C%A0%EC%9A%A9%ED%95%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%8C%A8%ED%84%B4-5%EA%B0%80%EC%A7%80"},"\uc720\uc6a9\ud55c \ub9ac\uc561\ud2b8 \ud328\ud134 5\uac00\uc9c0")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc6d0\ubcf8: ",(0,a.kt)("a",{parentName:"p",href:"https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6"},"5 Advanced React Patterns"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5bb\uac8c \ud558\uba74 ",(0,a.kt)("strong",{parentName:"li"},"\uc7ac\uc0ac\uc6a9\uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8"),"\ub97c \uac01\uac01 \ub2e4\ub978 use case\ub4e4\uc5d0 \ub9de\ub3c4\ub85d \ub9cc\ub4e4 \uc218 \uc788\uc744\uae4c?"),(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5bb\uac8c \ud558\uba74 \ucef4\ud3ec\ub10c\ud2b8\ub97c ",(0,a.kt)("strong",{parentName:"li"},"\uac04\ub2e8\ud55c API"),"\ub85c \uc4f0\uae30 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc744\uae4c?"),(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5bb\uac8c \ud558\uba74 UI\uc640 \uae30\ub2a5\uc131\uc758 \uce21\uba74\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"li"},"\ud655\uc7a5 \uac00\ub2a5\ud55c")," \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc744\uae4c?")),(0,a.kt)("p",null,'\uc6b0\ub9ac\uac00 \uc798 \uc124\uacc4\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud574\uc11c \ud754\ud788 \uac1d\uccb4 \uc9c0\ud5a5\uc5d0\uc11c \uc774\uc57c\uae30\ud558\ub294 "\uc911\ubcf5\ud558\uc9c0\ub9c8\ub77c"\ub77c\ub294 DRY \uc6d0\uce59\uc744 \ub530\ub77c\uc57c \ud558\ub294\ub370, \uadf8\ub7f4\ub824\uba74 \uc7ac\uc0ac\uc6a9\uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ub41c\ub2e4. \uadf8 \uc7ac\uc0ac\uc6a9\uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\ub824\uba74 \uc6b0\ub9ac\uac00 \uac01\uac01 \ub2e4\ub978 use case\uc5d0 \ub9de\uac8c \ub9cc\ub4e4\uc5b4\uc57c \ud558\uace0 \uadf8\uc5d0 \ub530\ub77c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uac04\ub2e8\ud55c API \uc4f0\uae30 \uc27d\uac8c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4.   '),(0,a.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uac04\ub2e8\ud55c API\ub85c \uc4f0\uae30 \uc27d\uac8c \ub9cc\ub4e4\uae30 \uc704\ud574\uc11c \uc880 \ub354 \uc720\uc5f0\ud558\uace0 \uc735\ud1b5\uc131\uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud558\ub294\ub370 \uadf8\ub7ec\ud55c \uad00\ub828\ub41c \ud328\ud134\ub4e4\ub3c4 \uad49\uc7a5\ud788 \ub9ce\ub2e4. \uadf8 \ud328\ud134\ub4e4\uc758\x1c \uae30\ubcf8\uc801\uc778 \uac1c\ub150\uc758 \ubca0\uc774\uc2a4\ub294 IoC(\uc81c\uc5b4\uc758 \uc5ed\uc804)\uc774 \ubc1c\ud310\uc73c\ub85c \ub418\uc5b4 \uc788\ub294\ub370, \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uac8c \uc81c\uc5b4\uad8c\uc744 \ub118\uc8fc\uace0 \ud750\ub984\uc5d0 \ub9de\uac8c \ud1b5\uc81c? \ub610\ub294 \ud574\ub2f9 \ub85c\uc9c1\uc744 \uad6c\ud604\ud558\uace0 \uc774 \ud750\ub984\uc5d0 \ub300\ud55c \ud638\ucd9c\uc740 \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ud574\uc8fc\ub294 \ubc29\uc2dd\uc73c\ub85c \uac04\ub2e8\ud55c API\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc73c\uba70 \uc7ac\uc0ac\uc6a9\uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.   "),(0,a.kt)("p",null,"\ud754\ud788 \ub9ce\uc774 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\ub3c4 \uc608\ub97c \ub4e4\uc218\uac00 \uc788\ub294\ub370 \uc774 \ucee4\uc2a4\ud140 \ud6c5\uc744 \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\ud558\uba74 \ub85c\uc9c1\uc744 \ubd84\ub9ac\ud560 \uc218 \uc788\uc73c\uba70 \uc800\ud76c\ub294 \uc774 \ud6c5\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uac00\uc838\ub2e4 \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub9de\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. \ub530\ub77c\uc11c \uc81c\uc5b4\uad8c\uc744 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uac00\uc9c0\uace0 \uc788\uace0 \ud574\ub2f9 \ud1b5\uc81c\uad8c?\uc744 \ub118\uaca8\uc8fc\uc5b4 \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ud638\ucd9c\ud558\ub294 \uac83\uc774 \uc544\ub2cc \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8 \ubc16\uc5d0\uc11c \ud638\ucd9c\ud558\uac8c \ud558\uc5ec \uad00\uc2ec\uc0ac\ub97c \ubd84\ub9ac\ud568\uc73c\ub85c\uc368 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4."),(0,a.kt)("h3",{id:"-\ub9ac\uc561\ud2b8-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uad6c\uc870---\uc544\ud1a0\ubbf9-\ub514\uc790\uc778"},"\ud83c\udf88 ",(0,a.kt)("a",{parentName:"h3",href:"https://ui.toast.com/weekly-pick/ko_20200213"},"\ub9ac\uc561\ud2b8 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\uc870 - \uc544\ud1a0\ubbf9 \ub514\uc790\uc778")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://andela.com/insights/structuring-your-react-application-atomic-design-principles/"},"\uc6d0\ubb38"))),(0,a.kt)("p",null,"\uc544\ud1a0\ubbf9 \ub514\uc790\uc778\uc740 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc791\uace0 \ub2e8\uc21c\ud55c \uc694\uc18c\ub85c \ubd84\ub9ac\ud558\ub294 \uac1c\ub150\uc774\uba70, \uc77c\uad00\ub41c UI\ub97c \ub9cc\ub4e4\uace0 \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \ud5a5\uc0c1\uc2dc\ucf1c\uc900\ub2e4.   "),(0,a.kt)("p",null,"\uc6f9 \uc0ac\uc774\ud2b8\uc758 \uad6c\uc131 \ube14\ub85d\uc774 HTML \uc694\uc18c\ub4e4\uc774\uba70, \uc774 \uc694\uc18c\ub4e4\uc740 \uc6d0\uc790\ub77c\uace0 \ubcfc \uc218 \uc788\ub2e4. \uc6d0\uc790\uac00 \uacb0\ud569\ub418\uc5b4 \ubd84\uc790\uac00 \ub418\ub294 \uac83\ucc98\ub7fc HTML \uc694\uc18c\ub4e4\uc740 \uacb0\ud569\ub418\uc5b4 \ubcf5\uc7a1\ud55c \ud398\uc774\uc9c0\ub97c \ud615\uc131\ud55c\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c \uac01 \ud398\uc774\uc9c0\ub294 \ucef4\ud3ec\ub10c\ud2b8(\ub610\ub294 HTML \uc694\uc18c)\ub85c \ubd84\ud574\ub420 \uc218 \uc788\uc73c\uba70, \ubd84\ud574\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud654\ud559\uc5d0\uc11c \uac00\ub974\uce58\ub294 \ubd84\uc790, \uc720\uae30\uccb4\uc640 \uc720\uc0ac\ud558\ub2e4.   "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc6d0\uc790"),"\ub294 \ubc84\ud2bc, \uc81c\ubaa9, \ud14d\uc2a4\ud2b8 \uc785\ub825 \ud544\ub4dc\uc640 \uac19\uc740 \uac00\uc7a5 \uc791\uc740 \uad6c\uc131 \ucef4\ud3ec\ub10c\ud2b8\uc774\ub2e4. \uc6d0\uc790\ub294 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 \uae30\ucd08\uac00 \ub418\ub294 \ube14\ub85d\uc774\uba70, ",(0,a.kt)("strong",{parentName:"p"},"\ub354 \uc774\uc0c1 \ubd84\ud574 \ub420 \uc218 \uc5c6\ub294 \ud544\uc218 \uc694\uc18c"),"\uc774\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"\ubd84\uc790"),"\ub294 2\uac1c \uc774\uc0c1\uc758 \uc6d0\uc790\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba70, \ud558\ub098\uc758 \ub2e8\uc704\ub85c \ud568\uaed8 \ub3d9\uc791\ud558\ub294 ",(0,a.kt)("strong",{parentName:"p"},"UI \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 \ub2e8\uc21c\ud55c \uadf8\ub8f9"),"\uc774\ub2e4. \uc608\ub97c \ub4e4\uc5b4 HTML \ud14d\uc2a4\ud2b8 \uc785\ub825 \ud544\ub4dc, \ub808\uc774\ube14, \uc624\ub958 \uba54\uc138\uc9c0 \ub610\ub294 HTML \ud14d\uc2a4\ud2b8 \uc785\ub825 \ud544\ub4dc\uc640 \ubc84\ud2bc\uc73c\ub85c \uad6c\uc131\ub41c \uac80\uc0c9 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc788\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"\uc720\uae30\uccb4\ub294 \ubd84\uc790, \uc6d0\uc790 \ub610\ub294 \ub2e4\ub978 \uc720\uae30\uccb4\uc758 \uadf8\ub8f9\uc73c\ub85c \uad6c\uc131"),"\ub41c \ube44\uad50\uc801 \ubcf5\uc7a1\ud55c \uadf8\ub8f9\uc774\ub2e4. \uc774 \uc720\uae30\uccb4\ub4e4\uc740 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uac1c\ubcc4\uc801\uc778 \uc601\uc5ed\uc744 \ud615\uc131\ud55c\ub2e4.   "),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../images/1.gif"})),(0,a.kt)("p",null,"\ud15c\ud50c\ub9bf\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \ubc30\uce58\ud558\uace0 \uc124\uacc4\uc758 \uad6c\uc870\ub97c \ubcf4\uc5ec\uc900\ub2e4. \ud398\uc774\uc9c0\uc758 \uc2e4\uc81c \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5c6\uc744 \uacbd\uc6b0, \ud398\uc774\uc9c0\uac00 \uc5b4\ub5bb\uac8c \ubcf4\uc77c\uc9c0\uc5d0 \ub300\ud55c \uace8\uaca9 \uad6c\uc870\uc774\ub2e4. \ud398\uc774\uc9c0\ub294 \uc2e4\uc81c \ucee8\ud150\uce20\ub4e4\uc744 \ubc30\uce58\ud55c UI\ub97c \ubcf4\uc5ec\uc8fc\uba70, \ud15c\ud50c\ub9bf\uc758 \uad6c\uccb4\ud654\ub41c \uc778\uc2a4\ud134\uc2a4\uc774\ub2e4. \ud15c\ud50c\ub9bf\uacfc \ud398\uc774\uc9c0\ub294 \uc720\uae30\uccb4, \ubd84\uc790, \uc6d0\uc790\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub2e4. \uc774\ub7ec\ud55c \uc791\uc740 \uad6c\uc131 \uc694\uc18c\ub4e4\uc758 \uacb0\ud569\uc740 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\uc131\ud55c\ub2e4.   "),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../images/2.png"})),(0,a.kt)("h4",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,a.kt)("p",null,"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ubd84\ub9ac\ud558\uc5ec \ucef4\ud3ec\ub10c\ud2b8\ub97c \uac1c\ubc1c\ud558\uace0 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc73c\uba70, \uc2a4\ud0c0\uc77c \uac00\uc774\ub4dc\uc640 \uac19\uc740 \ub3c4\uad6c\uc5d0\uc11c \ubcfc \uc218 \uc788\ub2e4. \uadf8\ub9ac\uace0 \ud1b5\ud569 \uac1c\ubc1c\uc744 \ud560 \ub54c, \ubc31\uc5d4\ub4dc \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub85c\uc9c1\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\ub2e4.   "),(0,a.kt)("p",null,"\uc77c\ub828\uc758 \ud328\ud134\uc774 \ud655\ub9bd\ub418\uba74, \uc124\uacc4 \ubcc0\uacbd\uc774 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0 \ub300\ube44\ud558\uc5ec \ub354 \ube60\ub974\uace0 \uc720\uc5f0\uc131 \uc788\ub294 \ube4c\ub4dc \ud504\ub85c\uc138\uc2a4\ub97c \uac00\uc9c8 \uc218 \uc788\ub2e4. \ub610\ud55c \uae30\uc874\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \uc7ac\uc0ac\uc6a9\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub514\uc790\uc778\uc744 \uc77c\uad00\uc131 \uc788\uac8c \ud1b5\uc77c\ud560 \uc218 \uc788\ub2e4.   "),(0,a.kt)("p",null,"\ud2b9\uc815 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 CSS\uac00 \uac15\ud558\uac8c \uacb0\ud569\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 CSS\ub97c \ud6e8\uc52c \uc798 \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4. \uc774\ub97c \uc704\ud574\uc11c\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uad6c\uc870\uc5d0 \ub530\ub77c \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 CSS\ub9cc \ub80c\ub354\ub9c1\ud558\ub3c4\ub85d \ud574\uc57c \ud55c\ub2e4.   "),(0,a.kt)("h4",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,a.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ubd84\ub9ac\ub418\uc5b4 \uc788\uace0 \uc0c1\uc704 \ucee8\ud14c\uc774\ub108 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0ac\uc774\uc988\ub97c \uacb0\uc815\ud560 \uc218 \uc5c6\uc744 \uacbd\uc6b0, \ubbf8\ub514\uc5b4\ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud558\uae30 \uc5b4\ub835\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub108\ube44\uc5d0 \ub300\ud574 \uc54c \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc2e4\uc81c \ud398\uc774\uc9c0\uc758 \uc0ac\uc774\uc988\uac00 \ubcc0\uacbd\ub420 \ub54c \ud06c\uae30\uac00 \uc870\uc815\ub41c\ub2e4.   "),(0,a.kt)("p",null,"\uc774 \ubb38\uc81c\ub294 \ud06c\uae30\ub97c \uc870\uc815\ud560 \uc218 \uc788\ub294 flex, grid \uc640 \uac19\uc740 CSS \uc18d\uc131\uc744 \uad6c\ud604\ud55c \ub808\uc774\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub3c4\uc785\ud558\uc5ec \ud574\uacb0 \ud560 \uc218 \uc788\ub2e4.   "),(0,a.kt)("h4",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,a.kt)("p",null,"\ubdf0\uc640 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \ubd84\ub9ac\ud558\ub294 \uac83(\uad00\uc2ec\uc0ac\uc758 \ubd84\ub9ac)\uc774 \uc88b\uc740 \ubc29\ubc95\uc774\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ud504\ub85c\uc81d\ud2b8\uac00 \ud655\uc7a5\ub420 \ub54c \ucf54\ub4dc\uc5d0\uc11c \ubb38\uc81c\ub97c \ub514\ubc84\uae45\ud558\uae30 \ub354 \uc27d\ub2e4.   "),(0,a.kt)("p",null,"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \ub3d9\uc77c\ud55c \uc0c9\uc0c1\uacfc \ud06c\uae30\ub97c \uac00\uc9c4 \ube48 \ubcd1\uc774\ub77c\uace0 \ud560 \uc218 \uc788\ub2e4. \uac01\uac01\uc758 \ubcd1\uc744 \ub2e4\ub978 \uc0c9\uc73c\ub85c \ucc44\uc6b4\ub2e4\uace0 \uc0dd\uac01\ud574\ubcf4\uc790. \uc774 \uacfc\uc815\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uac83\uc73c\ub85c \ube44\uc720\ud560 \uc218 \uc788\ub2e4. \ube48 \ubcd1\uc5d0 \uc0c9\uc744 \ucc44\uc6b0\ub294 \uac83\uc740 \uc26c\uc6b4 \uc77c\uc774\uace0, \uc0c9\uc744 \ubc14\uafb8\ub294 \uc0c1\ud0dc \ubcc0\uacbd\uc774 \uc788\ub354\ub77c\ub3c4 \ube48 \ubcd1\uc5d0 \ub123\uc744 \uc0c9\uc744 \ubcc0\uacbd\ud558\ub294 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \uc26c\uc6b4 \uacfc\uc815\uc774 \ub420 \uac83\uc774\ub2e4.   "),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \ub9cc\uc57d \ubcd1\uc744 \ube68\uac04 \uc0c9\uc73c\ub85c \ubc18\ucbe4 \ucc44\uc6b0\uace0 \ub2e4\ub978 \uc0c9\uc73c\ub85c \ub098\uba38\uc9c0\ub97c \ucc44\uc6b4\ub2e4\uace0 \ud55c\ub2e4\uba74 \ubb38\uc81c\uac00 \uc788\uc744 \uac83\uc774\ub2e4. \uadf8 \uc0c9\uc774 \uc798 \uc11e\uc774\uc9c0 \uc54a\ub294\ub2e4\uba74? \ub610\ub294 \uc6d0\ub798\uc758 \uc0c9\uc744 \uc81c\uac70\ud558\uace0 \ub2e4\ub978\uc0c9\uc73c\ub85c \ub300\uccb4\ud574\uc57c\ud55c\ub2e4\uba74? \uc774\uac83\uc740 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uad6c\ud604\ud560 \ub54c\ub3c4 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \ubb38\uc81c\ub85c \ucf54\ub4dc \ub9ac\ud329\ud130\ub9c1\uacfc \ucef4\ud3ec\ub10c\ud2b8 \uc7ac\uc0ac\uc6a9\uc744 \uc5b4\ub835\uac8c \ub9cc\ub4e0\ub2e4.   "),(0,a.kt)("h3",{id:"-\ucc38\uace0-\ub9c1\ud06c"},"\ud83d\udccc \ucc38\uace0 \ub9c1\ud06c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ko.reactjs.org/docs/thinking-in-react.html"},"React\ub85c \uc0ac\uace0\ud558\uae30 - \uacf5\uc2dd \ubb38\uc11c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marvelapp.com/blog/making-good-component-design-decisions-in-react/"},"Making good component design decisions in React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.to/kpiteng/react-clean-architecture-114f?utm_source=dormosheio&utm_campaign=dormosheio&fbclid=IwAR3E77zXUJT0TuDbOiNb6KvcYStKA3dWsNm--5S0_fN5TydqbCGOt48tVLk"},"React Clean Architecture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://smoh.tistory.com/385"},"React Folder Structure in 5 Steps"))))}m.isMDXComponent=!0}}]);