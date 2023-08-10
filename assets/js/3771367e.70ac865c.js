"use strict";(self.webpackChunkfrontend_tech_interview=self.webpackChunkfrontend_tech_interview||[]).push([[917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const c={},o="\ud83d\udc49 React",i={unversionedId:"react/README",id:"react/README",title:"\ud83d\udc49 React",description:"\ud83d\udcda React Architecture \ubc0f \ud328\ud134\uacfc \uad00\ub828\ub41c \uc544\ud2f0\ud074",source:"@site/docs/react/README.md",sourceDirName:"react",slug:"/react/",permalink:"/frontend-tech-interview/docs/react/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"test",permalink:"/frontend-tech-interview/docs/network/test"},next:{title:"\ud83d\udc49 React Architecture \ubc0f \ud328\ud134\uacfc \uad00\ub828\ub41c \uc544\ud2f0\ud074",permalink:"/frontend-tech-interview/docs/react/React Clean Architecture/"}},u={},l=[{value:"\ud83d\udcda React Architecture \ubc0f \ud328\ud134\uacfc \uad00\ub828\ub41c \uc544\ud2f0\ud074",id:"-react-architecture-\ubc0f-\ud328\ud134\uacfc-\uad00\ub828\ub41c-\uc544\ud2f0\ud074",level:2},{value:"\ud83d\udcda SWR \ub610\ub294 React Query\uc640 \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ub098\ud0c0\ub098\uac8c \ub41c \ubc30\uacbd \ubc0f \uc6d0\uc778",id:"-swr-\ub610\ub294-react-query\uc640-\uac19\uc740-\ub77c\uc774\ube0c\ub7ec\ub9ac\uac00-\ub098\ud0c0\ub098\uac8c-\ub41c-\ubc30\uacbd-\ubc0f-\uc6d0\uc778",level:2},{value:"\ud83d\udcda \uc7ac\uc870\uc815(Reconciliation)",id:"-\uc7ac\uc870\uc815reconciliation",level:2},{value:"\ud83d\udcda When to <code>useMemo</code> and <code>useCallback</code>",id:"-when-to-usememo-and-usecallback",level:2}],s={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-react"},"\ud83d\udc49 React"),(0,a.kt)("h2",{id:"-react-architecture-\ubc0f-\ud328\ud134\uacfc-\uad00\ub828\ub41c-\uc544\ud2f0\ud074"},"\ud83d\udcda ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/saseungmin/frontend-tech-interview/tree/main/react/React%20Clean%20Architecture"},"React Architecture \ubc0f \ud328\ud134\uacfc \uad00\ub828\ub41c \uc544\ud2f0\ud074")),(0,a.kt)("h2",{id:"-swr-\ub610\ub294-react-query\uc640-\uac19\uc740-\ub77c\uc774\ube0c\ub7ec\ub9ac\uac00-\ub098\ud0c0\ub098\uac8c-\ub41c-\ubc30\uacbd-\ubc0f-\uc6d0\uc778"},"\ud83d\udcda ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/saseungmin/frontend-tech-interview/tree/main/react/redux%20vs%20react-query"},"SWR \ub610\ub294 React Query\uc640 \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ub098\ud0c0\ub098\uac8c \ub41c \ubc30\uacbd \ubc0f \uc6d0\uc778")),(0,a.kt)("h2",{id:"-\uc7ac\uc870\uc815reconciliation"},"\ud83d\udcda ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/saseungmin/frontend-tech-interview/blob/main/react/reconciliation.md"},"\uc7ac\uc870\uc815(Reconciliation)")),(0,a.kt)("h2",{id:"-when-to-usememo-and-usecallback"},"\ud83d\udcda ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/saseungmin/frontend-tech-interview/blob/main/react/when-to-useMemo-and-useCallback.md"},"When to ",(0,a.kt)("inlineCode",{parentName:"a"},"useMemo")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"useCallback"))))}d.isMDXComponent=!0}}]);