"use strict";(self.webpackChunkfrontend_tech_interview=self.webpackChunkfrontend_tech_interview||[]).push([[5486],{1681:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=i(5893),c=i(1151);const t={},s="\ud83d\udc49 React Fiber Architecture",l={id:"react/react-fiber-architecture/README",title:"\ud83d\udc49 React Fiber Architecture",description:"Introduction",source:"@site/docs/react/react-fiber-architecture/README.md",sourceDirName:"react/react-fiber-architecture",slug:"/react/react-fiber-architecture/",permalink:"/frontend-tech-interview/docs/react/react-fiber-architecture/",draft:!1,unlisted:!1,editUrl:"https://github.com/saseungmin/frontend-tech-interview/tree/main/docs/react/react-fiber-architecture/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc49 React Architecture \ubc0f \ud328\ud134\uacfc \uad00\ub828\ub41c \uc544\ud2f0\ud074",permalink:"/frontend-tech-interview/docs/react/react-clean-architecture/"},next:{title:"React \uacf5\uc2dd\ubb38\uc11c \ud544\uc694\ud55c \ubd80\ubd84 \uc815\ub9ac",permalink:"/frontend-tech-interview/docs/react/react-official-docs"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"About this document",id:"about-this-document",level:3},{value:"Prerequisites(\uc804\uc81c \uc870\uac74)",id:"prerequisites\uc804\uc81c-\uc870\uac74",level:3},{value:"Review",id:"review",level:2},{value:"reconciliation(\uc7ac\uc870\uc815)\uc740 \ubb34\uc5c7\uc785\ub2c8\uae4c?",id:"reconciliation\uc7ac\uc870\uc815\uc740-\ubb34\uc5c7\uc785\ub2c8\uae4c",level:3},{value:"reconciliation",id:"reconciliation",level:4},{value:"update",id:"update",level:4},{value:"Reconciliation vs rendering(\uc7ac\uc870\uc815 vs \ub80c\ub354\ub9c1)",id:"reconciliation-vs-rendering\uc7ac\uc870\uc815-vs-\ub80c\ub354\ub9c1",level:3},{value:"Scheduling",id:"scheduling",level:3},{value:"scheduling(\uc2a4\ucf00\uc974\ub9c1)",id:"scheduling\uc2a4\ucf00\uc974\ub9c1",level:4},{value:"work(\uc791\uc5c5)",id:"work\uc791\uc5c5",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-react-fiber-architecture",children:"\ud83d\udc49 React Fiber Architecture"}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"React Fiber\ub294 React\uc758 \ud575\uc2ec \uc54c\uace0\ub9ac\uc998\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \uc7ac\uad6c\ud604\ud55c \uac83\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 React \ud300\uc774 2\ub144 \ub118\uac8c \uc5f0\uad6c\ud55c \uacb0\uacfc\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["React Fiber\uc758 \ubaa9\ud45c\ub294 \uc560\ub2c8\uba54\uc774\uc158, \ub808\uc774\uc544\uc6c3 \ubc0f \uc81c\uc2a4\ucc98\uc640 \uac19\uc740 \uc601\uc5ed\uc5d0 \ub300\ud55c \uc801\ud569\uc131\uc744 \ub192\uc774\ub294 \uac83\uc785\ub2c8\ub2e4. \uc8fc\uc694 \uc8fc\uc81c\uc740 ",(0,r.jsx)(n.strong,{children:"\uc99d\ubd84 \ub80c\ub354\ub9c1"}),"(",(0,r.jsx)(n.strong,{children:"incremental rendering"}),") \uc785\ub2c8\ub2e4: \ub80c\ub354\ub9c1 \uc791\uc5c5\uc744 chunk\ub85c \ubd84\ud560\ud558\uace0 \uc5ec\ub7ec \ud504\ub808\uc784\uc5d0 \ubd84\uc0b0\uc2dc\ud0a4\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\ub978 \uc8fc\uc694 \uae30\ub2a5\uc5d0\ub294 \uc0c8 \uc5c5\ub370\uc774\ud2b8\uac00 \ub4e4\uc5b4\uc62c \ub54c \uc791\uc5c5\uc744 \uc77c\uc2dc \uc911\uc9c0, \uc911\ub2e8 \ub610\ub294 \uc7ac\uc0ac\uc6a9\ud558\ub294 \uae30\ub2a5\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4. \uc774\uc678\uc5d0\ub3c4 \ub2e4\uc591\ud55c \uc720\ud615\uc758 \uc5c5\ub370\uc774\ud2b8\uc5d0 \uc6b0\uc120 \uc21c\uc704\ub97c \ud560\ub2f9\ud558\ub294 \uae30\ub2a5\uacfc \uc0c8\ub85c\uc6b4 \ub3d9\uc2dc\uc131 \ubaa8\ub4dc\ub97c \uc704\ud55c \ucd08\uae30 \uc791\uc5c5\ub4e4\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"about-this-document",children:"About this document"}),"\n",(0,r.jsx)(n.p,{children:"Fiber\ub294 \ucf54\ub4dc\ub9cc \ubcf4\uace0 \ud30c\uc545\ud558\uae30 \uc5b4\ub824\uc6b4 \uba87 \uac00\uc9c0 \uc0c8\ub85c\uc6b4 \uac1c\ub150\uc744 \ub3c4\uc785\ud588\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc11c\ub294 \ub0b4\uac00 React \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c Fiber\uc758 \uad6c\ud604\uc744 \ub530\ub77c\uac00\uba74\uc11c \uc791\uc131\ud55c \uba54\ubaa8\ub4e4\ub85c\ubd80\ud130 \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubb38\uc11c\uc758 \uc591\uc774 \ub9ce\uc544\uc9c8\uc218\ub85d \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc5d0\uac8c\ub3c4 \uc720\uc6a9\ud55c \ub9ac\uc18c\uc2a4\uac00 \ub420 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uae68\ub2ec\uc558\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ud575\uc2ec \uc6a9\uc5b4\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \uc815\uc758\ud558\uc5ec \uc804\ubb38 \uc6a9\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uac00\ub2a5\ud55c \uac00\uc7a5 \uc774\ud574\ud558\uae30 \uc26c\uc6b4 \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uac00\ub2a5\ud55c \uc678\ubd80 \ub9c1\ud06c \ub9ce\uc774 \uc5f0\uacb0\ud574\ub450\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["\uc800\ub294 React \ud300\uc5d0 \uc18c\uc18d\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc73c\uba70 \uc5b4\ub5a0\ud55c \uad8c\ud55c\uc744 \uac16\uace0 \ub9d0\ud558\uc9c0 \uc54a\uc74c\uc744 \uc54c\uc558\uc73c\uba74 \ud55c\ub2e4. ",(0,r.jsx)(n.strong,{children:"\uc774\uac83\uc740 \uacf5\uc2dd \ubb38\uc11c\uac00 \uc544\ub2d9\ub2c8\ub2e4."})," \uc800\ub294 React \ud300\uc6d0\ub4e4\uc5d0\uac8c \uc815\ud655\uc131\uc744 \uac80\ud1a0\ud558\ub3c4\ub85d \uc694\uccad\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\uadf8\ub9ac\uace0 \uc774 \ubb38\uc11c\ub294 \uc9c4\ud589 \uc911\uc778 \uc791\uc5c5\uc785\ub2c8\ub2e4. ",(0,r.jsx)(n.strong,{children:"Fiber\ub294 \uc644\ub8cc\ub418\uae30 \uc804\uc5d0 \uc0c1\ub2f9\ud55c \ub9ac\ud329\ud130\ub9c1\uc744 \uac70\uce60 \uac00\ub2a5\uc131\uc774 \ub192\uc740 \uc9c4\ud589 \uc911\uc778 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4."})," \ub610\ud55c \uc5ec\uae30\uc5d0 \ub514\uc790\uc778\uc744 \ubb38\uc11c\ud654\ud558\ub824\ub294 \uc2dc\ub3c4\ub3c4 \uc9c4\ud589 \uc911\uc785\ub2c8\ub2e4. \uac1c\uc120 \ubc0f \uc81c\uc548\uc744 \ud658\uc601\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\ub0b4 \ubaa9\ud45c\ub294 \uc774 \ubb38\uc11c\ub97c \uc77d\uc740 \ud6c4 Fiber\uac00 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react/commits/main/src/renderers/shared/fiber",children:"\uad6c\ud604\ub418\ub294 \uacfc\uc815"}),"\uc744 \ub530\ub77c\uac08 \uc218 \uc788\uc744 \ub9cc\ud07c \ucda9\ubd84\ud788 \uc798 \uc774\ud574\ud558\uace0 \uacb0\uad6d\uc5d0\ub294 React\uc5d0 \ub2e4\uc2dc \uae30\uc5ec\ud560 \uc218 \uc788\uac8c \ub418\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites\uc804\uc81c-\uc870\uac74",children:"Prerequisites(\uc804\uc81c \uc870\uac74)"}),"\n",(0,r.jsx)(n.p,{children:"\uacc4\uc18d\ud558\uae30 \uc804\uc5d0 \ub2e4\uc74c \ub9ac\uc18c\uc2a4\ub97c \uc219\uc9c0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html",children:"React Components, Elements, and Instances"}),": \u201cComponent\u201d\ub294 \uc9c0\ub098\uce58\uac8c \ub2e4\uc591\ud558\uac8c \uc0ac\uc6a9\ub418\ub294 \ub2e8\uc5b4\uc785\ub2c8\ub2e4. \uc774\ub7f0 \uc6a9\uc5b4\uc5d0 \ub300\ud55c \ud655\uace0\ud55c \uc774\ud574\ub294 \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/reconciliation.html",children:"Reconciliation(\uc7ac\uc870\uc815)"}),": React\uc758 \uc7ac\uc870\uc815 \uc54c\uace0\ub9ac\uc998\uc5d0 \ub300\ud55c \ub192\uc740 \uc218\uc900\uc758 \uc124\uba85\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/reactjs/react-basic",children:"React Basic Theoretical Concepts"}),": React\uc758 \uac1c\ub150\uc801 \ubaa8\ub378\uc5d0 \ub300\ud55c \uc124\uba85. \uc774 \uc911 \uc77c\ubd80\ub294 \ucc98\uc74c \uc77d\uc744 \ub54c \uc774\ud574\uac00 \ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uad1c\ucc2e\uc2b5\ub2c8\ub2e4. \uc2dc\uac04\uc774 \uc9c0\ub098\uba74 \ub354 \uc774\ud574\uac00 \ub420 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/design-principles.html",children:"React Design Principles"}),": \uc2a4\ucf00\uc904\ub9c1 \uc139\uc158\uc5d0 \ud2b9\ud788 \uc9d1\uc911\ud574\uc11c \ubcf4\uc138\uc694. React Fiber\uc758 ",(0,r.jsx)(n.em,{children:"why"}),"\ub97c \uc798 \uc124\uba85\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"review",children:"Review"}),"\n",(0,r.jsx)(n.p,{children:"\uc544\uc9c1 \uc804\uc81c \uc870\uac74 \ud56d\ubaa9\uc744 \ubcf4\uae30 \uc804\uc774\ub77c\uba74 \uaf2d \uba3c\uc800 \ubcf4\uae38 \ubc14\ub78d\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \uc0b4\ud3b4\ubcf4\uae30 \uc804\uc5d0 \uba87 \uac00\uc9c0 \ucee8\uc149\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"reconciliation\uc7ac\uc870\uc815\uc740-\ubb34\uc5c7\uc785\ub2c8\uae4c",children:"reconciliation(\uc7ac\uc870\uc815)\uc740 \ubb34\uc5c7\uc785\ub2c8\uae4c?"}),"\n",(0,r.jsx)(n.h4,{id:"reconciliation",children:"reconciliation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"React \uc54c\uace0\ub9ac\uc998\uc740 \uc5b4\ub5a4 \ubd80\ubd84\uc744 \ubcc0\uacbd\ud574\uc57c \ud558\ub294\uc9c0 \uacb0\uc815\ud558\uae30 \uc704\ud574 \ud55c \ud2b8\ub9ac\ub97c \ub2e4\ub978 \ud2b8\ub9ac\uc640 \ube44\uad50\ud558\ub294 \ub370 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"update",children:"update"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub80c\ub354\ub9c1\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130\uc758 \ubcc0\uacbd. \uc77c\ubc18\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"setState"}),"\uc758 \uacb0\uacfc\uc785\ub2c8\ub2e4. \uacb0\uad6d \ub9ac\ub79c\ub354\ub9c1 \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"React API\uc758 \ud575\uc2ec \uc544\uc774\ub514\uc5b4\ub294 \uc5c5\ub370\uc774\ud2b8\uac00 \uc804\uccb4 \uc571\uc744 \ub9ac\ub79c\ub354\ub9c1\ud558\ub294 \uac83\ucc98\ub7fc \uc0dd\uac01\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uac1c\ubc1c\uc790\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud2b9\uc815 \uc0c1\ud0dc\uc5d0\uc11c \ub2e4\ub978 \uc0c1\ud0dc\ub85c \ud6a8\uc728\uc801\uc73c\ub85c \uc804\ud658\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uace0\ubbfc\ud558\ub294 \ub300\uc2e0 \uc120\uc5b8\uc801\uc73c\ub85c \ucd94\ub860\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (A\uc5d0\uc11c B\ub85c, B\uc5d0\uc11c C\ub85c, C\uc5d0\uc11c A\ub85c \ub4f1)"}),"\n",(0,r.jsxs)(n.p,{children:["\uc2e4\uc81c\ub85c \ub9e4 \ubcc0\ud654\uac00 \uc788\uc744 \ub54c\ub9c8\ub2e4 \uc2e4\uc81c \uc571\uc744 \ub9ac\ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc740 \uc815\ub9d0 \uc0ac\uc18c\ud55c(trivial) \uc571\uc5d0\uc11c\ub098 \uac00\ub2a5\ud55c \uc77c\uc774\ub2e4. \uc2e4\uc81c \uc571\uc5d0\uc11c\ub294 \uc131\ub2a5 \uce21\uba74\uc5d0\uc11c \uc5c4\uccad\ub098\uac8c \ube44\uc6a9\uc774 \ub9ce\uc774 \ub4ed\ub2c8\ub2e4. React\uc5d0\ub294 \ub6f0\uc5b4\ub09c \uc131\ub2a5\uc744 \uc720\uc9c0\ud558\uba74\uc11c \uc804\uccb4 \uc571\uc744 \ub9ac\ub80c\ub354\ub9c1\ud558\ub294 \ubaa8\uc591\uc744 \ub9cc\ub4dc\ub294 \ucd5c\uc801\ud654 \uae30\ub2a5\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucd5c\uc801\ud654\uc758 \ub300\ubd80\ubd84\uc740 ",(0,r.jsx)(n.strong,{children:"reconciliation"}),"(",(0,r.jsx)(n.strong,{children:"\uc7ac\uc870\uc815"}),")\uc774\ub77c\ub294 \ud504\ub85c\uc138\uc2a4\uc758 \uc77c\ubd80\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:['\uc7ac\uc870\uc815\uc740 "\uac00\uc0c1 DOM(Virtual DOM)"\uc73c\ub85c \uc77c\ubc18\uc801\uc73c\ub85c \uc774\ud574\ub418\ub294 \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4. \ub192\uc740 \uc218\uc900\uc758 \uc124\uba85(high-level description)\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4: React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub80c\ub354\ub9c1\ud558\uba74 \uc571\uc744 \ub098\ud0c0\ub0b4\ub294 \ub178\ub4dc \ud2b8\ub9ac\uac00 \uc0dd\uc131\ub418\uc5b4 \uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uc774 \ud2b8\ub9ac\ub294 \ub80c\ub354\ub9c1 \ud658\uacbd\uc73c\ub85c \ud50c\ub7ec\uc2dc\ub429\ub2c8\ub2e4. (\uc608\ub97c \ub4e4\uc5b4, \ube0c\ub77c\uc6b0\uc800 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uacbd\uc6b0 DOM \uc791\uc5c5 \ud615\ud0dc\ub85c \ubcc0\ud658\ub429\ub2c8\ub2e4.) \uc571\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uba74(\uc77c\ubc18\uc801\uc73c\ub85c ',(0,r.jsx)(n.code,{children:"setState"}),"\ub97c \ud1b5\ud574) \uc0c8 \ud2b8\ub9ac\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc0c8 \ud2b8\ub9ac\ub294 \ub80c\ub354\ub9c1\ub41c \uc571\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \ud544\uc694\ud55c \uc791\uc5c5\uc744 \uacc4\uc0b0\ud558\uae30 \uc704\ud574 \uc774\uc804 \ud2b8\ub9ac\uc640 \ube44\uad50\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["Fiber\ub294 \uc870\uc815\uc790(reconciler)\ub97c \ucc98\uc74c\ubd80\ud130 \uc7ac\uc791\uc131\ud55c \uac83\uc774\uc9c0\ub9cc, ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/reconciliation.html",children:"React \ubb38\uc11c"}),"\uc5d0 \uc124\uba85\ub41c \uace0\uae09 \uc54c\uace0\ub9ac\uc998\uc740 \ub300\uccb4\ub85c \ub3d9\uc77c\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \ud0a4 \ud3ec\uc778\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785\uc740 \uc2e4\uc9c8\uc801\uc73c\ub85c \ub2e4\ub978 \ud2b8\ub9ac\ub97c \uc0dd\uc131\ud55c\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4. React\ub294 \uadf8\uac83\ub4e4\uc744 \ube44\uad50\ud558\ub824\uace0 \uc2dc\ub3c4\ud558\uc9c0 \uc54a\uace0 \uc774\uc804 \ud2b8\ub9ac\ub97c \uc644\uc804\ud788 \uad50\uccb4\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:'\ub9ac\uc2a4\ud2b8 \ube44\uad50\ub294 \ud0a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc218\ud589\ub429\ub2c8\ub2e4. \ud0a4\ub294 "\uc548\uc815\uc801\uc774\uace0 \uc608\uce21 \uac00\ub2a5\ud558\uba70 \uace0\uc720\ud574\uc57c \ud569\ub2c8\ub2e4."'}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reconciliation-vs-rendering\uc7ac\uc870\uc815-vs-\ub80c\ub354\ub9c1",children:"Reconciliation vs rendering(\uc7ac\uc870\uc815 vs \ub80c\ub354\ub9c1)"}),"\n",(0,r.jsx)(n.p,{children:'DOM\uc740 React\uac00 \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\ub294 \ub80c\ub354\ub9c1 \ud658\uacbd \uc911 \ud558\ub098\uc77c \ubfd0\uc774\uba70, \uc774\uc678\uc5d0\ub3c4 React Native\ub97c \ud1b5\ud55c \uae30\ubcf8 iOS \ubc0f Android \ubcf4\uae30(views)\uc785\ub2c8\ub2e4. (\uc774\uac83\uc774 "\uac00\uc0c1 DOM"\uc774 \uc57d\uac04 \uc798\ubabb\ub41c \uc774\ub984\uc778 \uc774\uc720\uc785\ub2c8\ub2e4.)'}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ub807\uac8c \ub9ce\uc740 \ub300\uc0c1\uc744 \uc9c0\uc6d0\ud560 \uc218 \uc788\ub294 \uc774\uc720\ub294 React\uac00 \uc7ac\uc870\uc815\uacfc \ub80c\ub354\ub9c1\uc774 \ubcc4\ub3c4\uc758 \ub2e8\uacc4\ub85c \uc124\uacc4\ub418\uc5c8\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc870\uc815\uc790(reconciler)\ub294 \ud2b8\ub9ac\uc758 \uc5b4\ub5a4 \ubd80\ubd84\uc774 \ubcc0\uacbd\ub418\uc5c8\ub294\uc9c0 \uacc4\uc0b0\ud558\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ub80c\ub354\ub7ec(renderer)\ub294 \ud574\ub2f9 \uc815\ubcf4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub80c\ub354\ub9c1\ub41c \uc571\uc744 \uc2e4\uc81c\ub85c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \ubd84\ub9ac\ub294 React DOM\uacfc React Native\uac00 React \ucf54\uc5b4\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub3d9\uc77c\ud55c \uc870\uc815\uc790(reconciler)\ub97c \uacf5\uc720\ud558\uba74\uc11c \uc790\uccb4 \ub80c\ub354\ub7ec(renderer)\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"Fiber\ub294 \uc870\uc815\uc790\ub97c \ub2e4\uc2dc \uad6c\ud604\ud569\ub2c8\ub2e4. \ub80c\ub354\ub9c1 \uacfc\uc815\uc5d0\ub294 \ud06c\uac8c \uad00\uc5ec\ud558\uc9c0 \uc54a\uc9c0\ub9cc, \ub80c\ub354\ub7ec\uac00 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98\ub97c \uc9c0\uc6d0\ud558\uace0 \ud65c\uc6a9\ud558\uae30 \uc704\ud574 \ubcc0\ud654\ud574\uc57c\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"scheduling",children:"Scheduling"}),"\n",(0,r.jsx)(n.h4,{id:"scheduling\uc2a4\ucf00\uc974\ub9c1",children:"scheduling(\uc2a4\ucf00\uc974\ub9c1)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc791\uc5c5\uc744 \uc218\ud589\ud574\uc57c \ud558\ub294 \uc2dc\uae30\ub97c \uacb0\uc815\ud558\ub294 \ud504\ub85c\uc138\uc2a4\uc785\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"work\uc791\uc5c5",children:"work(\uc791\uc5c5)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\uc218\ud589\ud574\uc57c \ud558\ub294 \ubaa8\ub4e0 \uacc4\uc0b0. \uc791\uc5c5\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8(\uc608: ",(0,r.jsx)(n.code,{children:"setState"}),")\uc758 \uacb0\uacfc\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/design-principles.html",children:"React\uc758 \ub514\uc790\uc778 \uc6d0\uce59 \ubb38\uc11c"}),"\ub294 \uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ub108\ubb34 \uc798 \uc791\uc131\ub418\uc5b4 \uc788\uc5b4\uc11c \uadf8\ub300\ub85c \uc778\uc6a9\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\ud604\uc7ac \uad6c\ud604\uc5d0\uc11c React\ub294 \uc7ac\uadc0\uc801\uc73c\ub85c \ud2b8\ub9ac\ub97c \ud0d0\uc0c9\ud558\uace0 \ud55c \ubc88\uc758 \ud2f1(tick) \ub3d9\uc548 \uc804\uccb4 \uc5c5\ub370\uc774\ud2b8\ub41c \ud2b8\ub9ac\uc758 \ub80c\ub354\ub9c1 \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ubbf8\ub798\uc5d0 \ud504\ub808\uc784 \ub4dc\ub86d\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc77c\ubd80 \uc5c5\ub370\uc774\ud2b8\uac00 \uc9c0\uc5f0\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.jsx)(n.br,{}),"\n",'\uc774\uac83\uc740 React \ub514\uc790\uc778\uc758 \uacf5\ud1b5 \uc8fc\uc81c\uc785\ub2c8\ub2e4. \uc77c\ubd80 \uc778\uae30\uc788\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \uc0c8 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744 \ub54c \uacc4\uc0b0\uc774 \uc218\ud589\ub418\ub294 "push" \uc811\uadfc \ubc29\uc2dd\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 React\ub294 \uacc4\uc0b0\uc774 \ud544\uc694\ud560 \ub54c\uae4c\uc9c0 \uc9c0\uc5f0\ub420 \uc218 \uc788\ub294 "\ub2f9\uae30\uae30(pull)" \uc811\uadfc \ubc29\uc2dd\uc744 \uace0\uc218\ud569\ub2c8\ub2e4.',(0,r.jsx)(n.br,{}),"\n","React\ub294 \uc81c\ub124\ub9ad\ud55c(generic / \uc77c\ubc18\uc801\uc778) \ub370\uc774\ud130 \ucc98\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc544\ub2d9\ub2c8\ub2e4. React\ub294 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ud604\uc7ac \uc5b4\ub5a4 \uacc4\uc0b0\uc774 \uad00\ub828\uc774 \uc788\uace0 \uadf8\ub807\uc9c0 \uc54a\uc740\uc9c0 \uc54c \uc218 \uc788\ub294 \uac83\uc774 \uc571\uc5d0\uc11c \uace0\uc720\ud55c \uc704\uce58\uc5d0 \uc788\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\ubb34\uc5b8\uac00\uac00 \ud654\uba74 \ubc16\uc5d0 \uc788\ub294 \uacbd\uc6b0 \uad00\ub828 \ub85c\uc9c1\uc744 \uc9c0\uc5f0\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \ub370\uc774\ud130\uac00 \ud504\ub808\uc784 \uc18d\ub3c4\ubcf4\ub2e4 \ube60\ub974\uac8c \ub3c4\ucc29\ud558\uba74 \ubcd1\ud569\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ub97c \uc77c\uad04 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub808\uc784 \uc190\uc2e4\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \ub35c \uc911\uc694\ud55c \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc791\uc5c5(\uc608: \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ubc29\uae08 \ub85c\ub4dc\ub41c \uc0c8 \ucf58\ud150\uce20 \ub80c\ub354\ub9c1)\ubcf4\ub2e4 \uc0ac\uc6a9\uc790 \uc0c1\ud638 \uc791\uc6a9\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc791\uc5c5(\uc608: \ubc84\ud2bc \ud074\ub9ad\uc73c\ub85c \uc778\ud55c \uc560\ub2c8\uba54\uc774\uc158)\uc5d0 \uc6b0\uc120\uc21c\uc704\ub97c \ub458 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ud0a4\ud3ec\uc778\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"UI\uc5d0\uc11c \ubaa8\ub4e0 \uc5c5\ub370\uc774\ud2b8\ub97c \uc989\uc2dc \uc801\uc6a9\ud560 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uadf8\ub807\uac8c \ud558\uba74 \ub0ad\ube44\uac00 \ub420 \uc218 \uc788\uc73c\uba70 \ud504\ub808\uc784\uc774 \ub5a8\uc5b4\uc9c0\uace0 \uc0ac\uc6a9\uc790 \uacbd\ud5d8(user experience)\uc774 \uc800\ud558\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc5c5\ub370\uc774\ud2b8 \uc720\ud615\uc5d0 \ub530\ub77c \uc6b0\uc120 \uc21c\uc704\uac00 \ub2e4\ub985\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc560\ub2c8\uba54\uc774\uc158 \uc5c5\ub370\uc774\ud2b8\ub294 \ub370\uc774\ud130 \uc800\uc7a5\uc18c(data store)\uc758 \uc5c5\ub370\uc774\ud2b8\ubcf4\ub2e4 \ub354 \ube68\ub9ac \uc644\ub8cc\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ud478\uc2dc \uae30\ubc18(push-based) \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \uc571(\ub2f9\uc2e0, \ud504\ub85c\uadf8\ub798\uba38)\uc774 \uc791\uc5c5 \uc608\uc57d \ubc29\ubc95(how to schedule work)\uc744 \uacb0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \ud480 \uae30\ubc18(pull-based) \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uba74 \ud504\ub808\uc784\uc6cc\ud06c(React)\uac00 \ub611\ub611\ud558\uac8c \uc774\ub7ec\ud55c \uacb0\uc815\uc744 \ub0b4\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"React\ub294 \ud604\uc7ac \uc911\uc694\ud55c \ubc29\uc2dd\uc73c\ub85c \uc2a4\ucf00\uc904\ub9c1\uc758 \uc7a5\uc810\uc744 \ud65c\uc6a9\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4. \uc5c5\ub370\uc774\ud2b8\ud558\uba74 \uc804\uccb4 \ud558\uc704 \ud2b8\ub9ac\uac00 \uc989\uc2dc \ub9ac\ub80c\ub354\ub9c1\ub429\ub2c8\ub2e4. \uc2a4\ucf00\uc904\ub9c1\uc744 \ud65c\uc6a9\ud558\uae30 \uc704\ud574 React\uc758 \ud575\uc2ec \uc54c\uace0\ub9ac\uc998\uc744 \uc815\ube44\ud558\ub294 \uac83\uc774 Fiber\uc758 \ud575\uc2ec \uc544\uc774\ub514\uc5b4\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"\uc774\uc81c Fiber \uad6c\ud604\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc900\ube44\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \uc139\uc158\uc740 \uc9c0\uae08\uae4c\uc9c0 \ub17c\uc758\ud55c \uac83\ubcf4\ub2e4 \ub354 \uae30\uc220\uc801\uc778 \ubd80\ubd84\uc785\ub2c8\ub2e4. \uacc4\uc18d \uc9c4\ud589\ud558\uae30 \uc804\uc5d0 \uc774\uc804 \uc790\ub8cc\uc5d0 \uc775\uc219\ud574\uc84c\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/acdlite/react-fiber-architecture",children:"https://github.com/acdlite/react-fiber-architecture"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://blog.kiprosh.com/react-fiber/",children:"https://blog.kiprosh.com/react-fiber/"})}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var r=i(7294);const c={},t=r.createContext(c);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);