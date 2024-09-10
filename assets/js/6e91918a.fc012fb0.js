"use strict";(self.webpackChunkfrontend_tech_interview=self.webpackChunkfrontend_tech_interview||[]).push([[1643],{3782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>T,default:()=>P,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(5893),i=t(1151);const s={},T="\ud83d\udc49 Network",o={id:"network/README",title:"\ud83d\udc49 Network",description:"\ud83c\udf88 HTTP\uc640 HTTPS\uc758 \ucc28\uc774\uc810",source:"@site/docs/network/README.md",sourceDirName:"network",slug:"/network/",permalink:"/frontend-tech-interview/docs/network/",draft:!1,unlisted:!1,editUrl:"https://github.com/saseungmin/frontend-tech-interview/tree/main/docs/network/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc49 Functional Programming Conference LiftIO 2021",permalink:"/frontend-tech-interview/docs/liftIO-2021/"},next:{title:"test",permalink:"/frontend-tech-interview/docs/network/test"}},c={},l=[{value:"\ud83c\udf88 HTTP\uc640 HTTPS\uc758 \ucc28\uc774\uc810",id:"-http\uc640-https\uc758-\ucc28\uc774\uc810",level:3},{value:"\ud83c\udf88 TCP\uc640 UDP",id:"-tcp\uc640-udp",level:3},{value:"\ud83c\udf88 HTTP/1.1\uacfc HTTP/2\uc758 \ucc28\uc774\uc810",id:"-http11\uacfc-http2\uc758-\ucc28\uc774\uc810",level:3},{value:"\ud83c\udf88 GET\uacfc POST\uc758 \ucc28\uc774\ub294?",id:"-get\uacfc-post\uc758-\ucc28\uc774\ub294",level:3},{value:"\ud83c\udf88 REST API\ub780?",id:"-rest-api\ub780",level:3},{value:"\ud83c\udf88 Cookie vs Session",id:"-cookie-vs-session",level:3},{value:"\ud83c\udf88 URL\uc744 \uc785\ub825\ud558\uace0 \ubc8c\uc5b4\uc9c0\ub294 \uc77c",id:"-url\uc744-\uc785\ub825\ud558\uace0-\ubc8c\uc5b4\uc9c0\ub294-\uc77c",level:3}];function d(e){const n={a:"a",br:"br",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-network",children:"\ud83d\udc49 Network"}),"\n",(0,r.jsx)(n.h3,{id:"-http\uc640-https\uc758-\ucc28\uc774\uc810",children:"\ud83c\udf88 HTTP\uc640 HTTPS\uc758 \ucc28\uc774\uc810"}),"\n",(0,r.jsx)(n.p,{children:"HTTP\ub294 \uc778\ud130\ub137\uc5d0\uc11c \uc6f9 \uc11c\ubc84\uc640 \uc0ac\uc6a9\uc790\uac00 \ucef4\ud4e8\ud130\uc5d0 \uc124\uce58\ub41c \uc6f9 \ube0c\ub77c\uc6b0\uc800 \uc0ac\uc774\uc758 \ubb38\uc11c\ub97c \uc804\uc1a1\ud558\uae30 \uc704\ud55c \ud1b5\uc2e0 \uaddc\uc57d\uc785\ub2c8\ub2e4. HTTP\uc758 \uae30\ubcf8 \ud3ec\ud2b8\ubc88\ud638\ub294 80\ubc88\uc774\uace0 HTTP\ub294 \uc815\ubcf4\ub97c \ud14d\uc2a4\ud2b8\ub85c \uc8fc\uace0 \ubc1b\uc2b5\ub2c8\ub2e4. \ub2e8\uc21c \ud14d\uc2a4\ud2b8\ub97c \uc8fc\uace0 \ubc1b\uae30 \ub54c\ubb38\uc5d0 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc804\uc1a1 \uc2e0\ud638\ub97c \uc778\ud130\uc149\ud2b8\ud558\ub294 \uacbd\uc6b0 \uc6d0\ud558\uc9c0 \uc54a\ub294 \ub370\uc774\ud130 \uc720\ucd9c\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubcf4\uc548 \ucde8\uc57d\uc810\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub098\uc628 \ud504\ub85c\ud1a0\ucf5c\uc774 HTTPS\uc785\ub2c8\ub2e4. HTTPS\ub294 \ud3ec\ud2b8\ubc88\ud638 443\ubc88\uc73c\ub85c HTTP\uc5d0 Secure Socket Layer\uc640 \uac19\uc740 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\uc5ec \uacf5\uac1c\ud0a4/\uac1c\uc778\ud0a4 \uae30\ubc18\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc554\ud638\ud654\ud569\ub2c8\ub2e4. HTTPS\uc758 \ub2e8\uc810\uc73c\ub85c\ub294 \uc554\ud638\ud654/\ubcf5\ud638\ud654\uc758 \uacfc\uc815\uc774 \ud544\uc694\ud558\uae30 \ub584\ubb38\uc5d0 HTTP\ubcf4\ub2e4 \uc18d\ub3c4\uac00 \uc0c1\ub300\uc801\uc73c\ub85c \ub290\ub9ac\uc9c0\ub9cc \uc624\ub298\ub0a0\uc740 \uac70\uc758 \ucc28\uc774\uac00 \uc5c6\uace0 HTTPS\ub294 \uc778\uc99d\uc11c\ub97c \ubc1c\uae09\ud558\uace0 \uc720\uc9c0\ud558\uae30 \uc704\ud55c \ucd94\uae30\ube44\uc6a9\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"-tcp\uc640-udp",children:"\ud83c\udf88 TCP\uc640 UDP"}),"\n",(0,r.jsxs)(n.p,{children:["TCP\uc640 UDP\ub294 OSI 7\uacc4\uce35\uc5d0\uc11c \uc804\uc1a1\uacc4\uce35 \uc18d\ud569\ub2c8\ub2e4. TCP\ub294 \ub370\uc774\ud130\uc758 \uc804\uc1a1\uc774 \ubc18\ub4dc\uc2dc \ubcf4\uc7a5\ub418\ub294 \ud504\ud1a0\ud1a0\ucf5c\ub85c \uc5f0\uacb0\uc9c0\ud5a5\uc131, \ub192\uc740 \uc2e0\ub8b0\uc131, \ud750\ub984\uc81c\uc5b4, \ud63c\uc7a1\uc5d0\ub7ec \ubc0f \uc5d0\ub7ec \uac10\uc9c0\ub4f1\uc744 \ud560 \uc218 \uc788\ub294 \ud504\ub85c\ud1a0\ucf5c\uc785\ub2c8\ub2e4. TCP\ub294 \ud638\uc2a4\ud2b8\uac04\uc758 \uc5f0\uacb0\uc744 \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc73c\ub85c 3way handshaking \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc73c\uba70, \uc5f0\uacb0\uc744 \uc885\ub8cc\ud558\uae30 \uc704\ud574\uc11c 4way handshaking \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.jsx)(n.br,{}),"\n","UDP\ub294 TCP\uc640 \ub2ec\ub9ac \ube44\uc5f0\uacb0\uc131, \ube44\uc2e0\ub8b0\uc131\uc758 \ud2b9\uc9d5\uc744 \uac00\uc9c4 \ud504\ub85c\ud1a8\uc774\uba70, \ub370\uc774\ud130\uc758 \uc21c\uc11c\ub97c \ubcf4\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, TCP\uc5d0 \ube44\ud574\uc11c \uc0c1\ub300\uc801\uc73c\ub85c \uc18d\ub3c4\uac00 \ube68\ub77c\uc11c \ube44\ub514\uc624 \uc2a4\ud2b8\ub9ac\ubc0d\uc774\ub098 DNS\uc5d0 \ud65c\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"-http11\uacfc-http2\uc758-\ucc28\uc774\uc810",children:"\ud83c\udf88 HTTP/1.1\uacfc HTTP/2\uc758 \ucc28\uc774\uc810"}),"\n",(0,r.jsxs)(n.p,{children:["HTTP/1.1\uc758 \ubb38\uc81c\uc810\uc740 Head of Line Blocking\uc774\ub77c\ub294 \ubb38\uc81c\uac00 \uc874\uc7ac\ud588\ub294\ub370, \uc774 \ubb38\uc81c\ub294 HTTP\uc5d0\uc11c \uc694\uccad\uc744 \ubcf4\ub0b4\uace0 \uc751\ub2f5\uc774 \uc640\uc57c \ub2e4\uc74c \uc694\uccad\uc744 \ud560 \uc218 \uc788\uc5c8\ub294\ub370, HTTP/1.1\uc5d0\uc11c \ud30c\uc774\ud504\ub77c\uc774\ub2dd \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc751\ub2f5\uc744 \ubc1b\uc9c0\uc54a\uace0\ub3c4 \uc694\uccad\uc744 \ubcf4\ub0bc \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadfc\ub370 \uc774 \ub9c8\uc800\ub3c4 \ucc98\uc74c\uc758 \uc694\uccad\uc5d0 \ub300\ud55c \uc751\ub2f5\uc774 \uc624\ub798\uac78\ub9ac\ub294 \uacbd\uc6b0, \ub611\uac19\uc774 \uadf8 \ub2e4\uc74c \uc751\ub2f5\uae4c\uc9c0 \uc9c0\uc5f0\ub418\ub294 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc81c\ub97c Head of Line Blocking \ubb38\uc81c\ub77c\uace0 \ud569\ub2c8\ub2e4. \ub610\ud55c, HTTP/1.1\uc758 \ub2e4\ub978 \ubb38\uc81c\uc810\uc740 \uc694\uccad\uc744 \ud560 \ub54c \uc694\uccad\ud5e4\ub354\uc5d0 \uba54\ud0c0\uc815\ubcf4\ub97c \ub123\uc5b4\uc11c \ubcf4\ub0b4\uac8c \ub418\ub294\ub370, \ub9e4 \uc694\uccad\ub9c8\ub2e4 \ubcf4\ub0b4\ub294 \uc815\ubcf4\uac00 \ub9ce\uc544\uc838\uc11c \ud5e4\ub354\uac00 \ubb34\uac70\uc6cc\uc9c0\uace0 \ucfe0\ud0a4 \uac19\uc740 \uacbd\uc6b0\uc5d0\ub294 \uacc4\uc18d \ubcf4\ub0b4\uac8c \ub418\uae30 \ub54c\ubb38\uc5d0 \uc911\ubcf5\ub3c4 \ub9ce\uc544\uc9c0\ub294 \ubb38\uc81c\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\uadf8\ub798\uc11c 2015\ub144\uc5d0 HTTP/2\uac00 \ub098\uc624\uac8c \ub418\uc5c8\uace0 \uba40\ud2f0\ud50c\ub809\uc2f1\uacfc \uc2a4\ud2b8\ub9ac\ubc0d \ubc29\ubc95\uc744 \ud1b5\ud574 Head of Line Blocking \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc5c8\uace0 \ud5e4\ub354\ub97c \uc555\ucd95\uc2dc\ucf1c \ubb34\uac70\uc6b4 \ud5e4\ub354\ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"-get\uacfc-post\uc758-\ucc28\uc774\ub294",children:"\ud83c\udf88 GET\uacfc POST\uc758 \ucc28\uc774\ub294?"}),"\n",(0,r.jsxs)(n.p,{children:["\uc774 \ub458\ub2e4 \ubb34\uc5c7\uc778\uac00 \uc11c\ubc84\uc5d0 \uc694\uccad\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 HTTP \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. GET \ubc29\uc2dd\uc740 URL\uc744 \ud1b5\ud574 \ubaa8\ub4e0 \ud30c\ub77c\ubbf8\ud130\ub97c \uc804\ub2ec\ud558\uae30 \ub54c\ubb38\uc5d0 \uc8fc\uc18c\ucc3d\uc5d0 \uadf8\ub300\ub85c \ub178\ucd9c\uc774 \ub429\ub2c8\ub2e4. \ub610\ud55c, URL \uae38\uc774\uc5d0 \uc81c\ud55c\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc591\uc740 \ud55c\uc815\ub418\uc5b4\uc788\uace0, \ud615\uc2dd\uc5d0 \ub9de\uc9c0 \uc54a\uc73c\uba74 \uc778\ucf54\ub529\uc744 \ud1b5\ud574 \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,r.jsx)(n.br,{}),"\n","POST \ubc29\uc2dd\uc740 URL\uc758 \ud30c\ub77c\ubbf8\ud130\ub85c \uc804\ub2ec\ud558\uc9c0 \uc54a\uace0 HTTP BODY\uc5d0 \ub370\uc774\ud130\ub97c \ud3ec\ud568\ud574\uc11c \uc804\ub2ec\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc694\uc790\uc758 \ub208\uc5d0 \uc9c1\uc811\uc801\uc73c\ub85c \ubcf4\uc5ec\uc9c0\uc9c0 \uc54a\uace0 \uae38\uc774\uc5d0 \uc81c\ud55c\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4. \ubcf4\ud1b5 \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 GET\uc740 \ubb34\uc5c7\uc778\uac00\ub97c \uac00\uc838\uc62c\ub54c \uc0ac\uc6a9\ud558\uace0, POST\ub294 \uc11c\ubc84\uc758 \uac12\uc774\ub098 \uc0c1\ud0dc\ub97c \ubc14\uafb8\uae30 \uc704\ud574\uc11c \ud65c\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"-rest-api\ub780",children:"\ud83c\udf88 REST API\ub780?"}),"\n",(0,r.jsxs)(n.p,{children:["REST\ub294 \uc790\uc6d0\uc744 \uc8fc\uace0\ubc1b\uc740 \uc6f9 \uc0c1\uc5d0\uc11c\uc758 \ud1b5\uc2e0 \uccb4\uacc4\uac00 \uc788\uc5b4\uc11c \ubc94\uc6a9\uc801\uc778 \uc2a4\ud0c0\uc77c\uc744 \uaddc\uc815\ud55c \uc544\ud0a4\ud14d\ucc98\uc774\uace0, API\ub294 \uad6c\uae00 \ub9f5 API\ub4f1 \uae30\uc874\uc5d0 \uc788\ub294 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc744 \ud1b5\ud574\uc11c \ub370\uc774\ud138\ub974 \uc81c\uacf5\ubc1b\uac70\ub098 \uc0ac\uc6a9\ud558\uace0\uc790 \ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4 \ubc0f \uaddc\uaca9\uc785\ub2c8\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\ub530\ub77c\uc11c REST API\ub780 REST \uc6d0\uce59\uc744 \uc801\uc6a9\ud558\uc5ec \uc11c\ube44\uc2a4 API\ub97c \uc124\uacc4\ud55c \uac83\uc744 \ub9d0\ud558\uba70 \ub300\ubd80\ubd84\uc758 \uc11c\ube44\uc2a4\uac00 REST API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. REST\uc758 \ud2b9\uc9d5\uc73c\ub85c\ub294 HTTP \ud45c\uc900\ub9cc \ub530\ub974\uba74 \uc5b4\ub5a4 \uae30\uc220\uc774\ub358\uc9c0 \uc811\ubaa9\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uace0 \uc608\ub97c \ub4e4\uc5b4 JSON\uc774\ub098 XML\ub4f1\uc785\ub2c8\ub2e4. \uc11c\ubc84\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc0c1\ud669\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\uace0 \uadf8\uc800 API \uc694\uccad\uc5d0 \ub300\ud574\uc11c\ub9cc \ucc98\ub9ac\ud558\uae30 \ud569\ub2c8\ub2e4. REST \uc11c\ubc84\uac00 API\ub97c \uc81c\uacf5\ud558\ub294 \ubc29\uc2dd\uc774\uae30 \ub54c\ubb38\uc5d0 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ucc98\ub9ac\ud558\ub294 \ubd80\ubd84\uacfc \ub3c5\ub9bd\uc801\uc73c\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4.",(0,r.jsx)(n.br,{}),"\n","REST API\ub294 URI\ub294 \ub9ac\uc18c\uc2a4\ub97c \ud45c\ud604\ud574\uc57c\ud558\ub294\ub370 \uc774\ub294 \ub3d9\uc0ac\uac00 \uc544\ub2cc \uba85\uc0ac\ub85c \uc0ac\uc6a9\ud574\uc57c \ud558\uace0, \uadf8 \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \ud589\uc704\ub294 GET, POST\ub4f1 HTTP\uc758 \uba54\uc18c\ub4dc\ub85c \ud45c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4. HTTP \uc0c1\ud0dc \ucf54\ub4dc\ub85c\ub294 200\uc740 \uc131\uacf5 300\ub300\ub294 \ub9ac\ub2e4\uc774\ub809\uc158 \uad00\ub828, 400\ub300\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc5d0\ub7ec\uad00\ub828, 500\ub300\ub294 \uc11c\ubc84 \uc5d0\ub7ec \uad00\ub828\ub4f1\uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"-cookie-vs-session",children:"\ud83c\udf88 Cookie vs Session"}),"\n",(0,r.jsx)(n.p,{children:"HTTP\ub294 \uc0c1\ud0dc\uac00 \uc5c6\ub294 \ud504\ub85c\ud1a0\ucf5c\uc774\uae30 \ub584\ubb38\uc5d0 \uc0ac\uc6a9\uc790\uac00 \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \ud1b5\ud574\uc11c \ud2b9\uc815 \uc6f9 \uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud558\uac8c \ub420 \uacbd\uc6b0 \uc5b4\ub5a4 \uc0ac\uc6a9\uc790\uac00 \uc811\uc18d\ud588\ub294\uc9c0\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud30c\uc545\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \ucfe0\ud0a4 \ub610\ub294 \uc138\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\ub97c \uad6c\ubd84\ud558\uace0 \uac01 \uc0ac\uc6a9\uc790\uc5d0 \ub9de\ub294 \uc815\ubcf4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ucfe0\ud0a4\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucabd\uc5d0 \uc800\uc7a5\ub418\uace0 \ube0c\ub77c\uc6b0\uc800\uac00 \uc885\ub8cc\ub418\uc5b4\ub3c4 \uc0ad\uc81c\ub418\uc9c0 \uc54a\uace0 \uc0ac\uc6a9\uc790\uac00 \uc0ad\uc81c\ud558\uac70\ub098 \uc815\ud574\uc9c4 \uc2dc\uac04\ub9cc\ud07c \uc720\uc9c0\ud569\ub2c8\ub2e4. \ubb38\uc790\uc5f4\ub9cc \uc800\uc7a5\ud560 \uc218 \uc788\uace0, \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ubcf4\ub0b4\uae30\ub54c\ubb38\uc5d0 \uc18d\ub3c4\uac00 \ube60\ub985\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \ud074\ub77c\uc774\uc5b8\ud2b8\ucabd\uc5d0 \uc800\uc7a5\ub418\uae30 \ub54c\ubb38\uc5d0 \ube44\ubc00\uba3c\ud638\uc640 \uac19\uc740 \ubbfc\uac10\ud55c \ub370\uc774\ud130\ub97c \ud0c8\ucde8\ub2f9\ud560 \uc218\ub3c4 \uc788\uc5b4 \ubcf4\uc548\uc5d0 \ucde8\uc57d\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc138\uc158\uc740 \uc11c\ubc84\ucabd\uc5d0 \uc800\uc7a5\ub418\uace0, \ube0c\ub77c\uc6b0\uc800\uac00 \uaebc\uc9c0\uba74 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \uadf8\ub9ac\ub3c4 \ubb38\uc790\uc5f4 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uac1d\uccb4\ub3c4 \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \uc11c\ubc84\ucabd\uc5d0\uc11c \ucc98\ub9ac\ud558\uae30 \ub54c\ubb38\uc5d0 \uc18d\ub3c4\uac00 \ube44\uad50\uc801 \ub290\ub9ac\uc9c0\ub9cc \uc11c\ubc84\uc5d0\uc11c \ubbfc\uac10\ud55c \ub370\uc774\ud130\ub97c \uac16\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ube44\uad50\uc801 \ubcf4\uc548\uc5d0 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"-url\uc744-\uc785\ub825\ud558\uace0-\ubc8c\uc5b4\uc9c0\ub294-\uc77c",children:"\ud83c\udf88 URL\uc744 \uc785\ub825\ud558\uace0 \ubc8c\uc5b4\uc9c0\ub294 \uc77c"}),"\n",(0,r.jsx)(n.p,{children:"\ube0c\ub77c\uc6b0\uc800\uc758 \uc8fc\uc18c\ucc3d\uc5d0 url\uc744 \uc785\ub825\ud558\uba74, \ube0c\ub77c\uc6b0\uc800\ub294 \ud574\ub2f9 url\uc5d0 \uc0c1\uc751\ud558\ub294 IP \uc8fc\uc18c\ub97c \ucc3e\uae30 \uc704\ud574\uc11c DNS \uae30\ub85d \uce90\uc2dc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. DNS \uae30\ub85d\uc744 \ucc3e\uae30 \uc704\ud574\uc11c \ube0c\ub77c\uc6b0\uc800\ub294 browser -> OS -> router -> ISP\uc21c\uc73c\ub85c \ud655\uc778\ud569\ub2c8\ub2e4. \ub9cc\uc57d\uc5d0 \uc694\ucce5\ud55c URL\uc774 \uce90\uc2dc\uc5d0 \uc5c6\ub2e4\uba74 ISP\uc758 DNS \uc11c\ubc84\ub294 \ud574\ub2f9 url\uc744 \uac16\ub294 \uc11c\ubc84\uc758 IP \uc8fc\uc18c\ub97c \ucc3e\uadc0 \uc704\ud574 DNS Query\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4. IP \uc8fc\uc18c\ub97c \ucc3e\uc558\uc73c\ub2c8 \ube0c\ub77c\uc6b0\uc800\ub294 \uc11c\ubc84\uc640 TCP \ud1b5\uc2e0\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uac00 \uc62c\ubc14\ub978 IP\uc8fc\uc18c\ub97c \ubc1b\uc73c\uba74, IP\uc8fc\uc18c\uc640 \uc77c\uce58\ud558\ub294 \uc11c\ubc84\uc640 \uc815\ubcf4\ub97c \uc804\ub2ec\ud558\uae30 \uc704\ud574 \uc5f0\uacb0\uc744 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \uc774\ub54c \ucef4\ud4e8\ud130\uc640 \uc11c\ubc84\uac04\uc758 \ub370\uc774\ud130 \ud328\ud0b7 \uc804\uc1a1\uc744 \uc704\ud574 TCP\uc5f0\uacb0\uc774 \ub9cc\ub4e4\uc5b4\uc9c0\ub294\ub370 \uc774 \uc5f0\uacb0\uc740 three way handshake \uacfc\uc815\uc744 \ud1b5\ud574 \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4. \uc774\uc81c \ube0c\ub77c\uc6b0\uc800\ub294 \uc6f9 \uc11c\ubc84\uc5d0 GET, POST\ub4f1\uc758 \ud574\ub2f9 HTTP \uc694\uccad\uc744 \ubcf4\ub0b4\uace0, \uc11c\ubc84\ub294 \uc694\uccad\uc744 \ucc98\ub9ac\ud558\uace0 \uc751\ub2f5\uc744 \ub2e4\uc2dc HTTP \uc751\ub2f5\uc744 \ub0b4\ubcf4\ub0c5\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\ub294 HTML \ucee8\ud150\uce20\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uccab \ubc88\uc9f8\ub85c HTML  \ubf08\ub300\ub9cc \ub80c\ub354\ub9c1\ud558\uace0, HTML \ud0dc\uadf8\ub97c \ud655\uc778\ud558\uace0 \uc774\ubbf8\uc9c0, CSS JavaScript \ud30c\uc77c\uacfc \uac19\uc740 \ucd94\uac00\uc801\uc778 \uc694\uc18c\uc5d0 \ub300\ud55c GET \uc694\uccad\uc744 \ub0b4\ubcf4\ub0c5\ub2c8\ub2e4. css, javascript\uc640 \uac19\uc740 static \ud30c\uc77c\ub4e4\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc758\ud574 \uce90\uc2dc\ub418\uae30 \ub584\ubb38\uc5d0 \ub2e4\uc74c\uc5d0 \ub3d9\uc77c\ud55c \ud398\uc774\uc9c0\ub97c \ubc29\ubb38\ud588\uc744 \ub54c \uadf8\uac83\uc744 \ub2e4\uc2dc fetch\ud560 \ud544\uc694\uac00 \uc5c6\ub294 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://velog.io/@jjo-niixx/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90-URL-%EC%9E%85%EB%A0%A5-%ED%9B%84-%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94-%EC%9D%BC",children:"\ucc38\uace0"})}),"\n"]})]})}function P(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>T});var r=t(7294);const i={},s=r.createContext(i);function T(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:T(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);