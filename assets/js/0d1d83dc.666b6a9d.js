"use strict";(self.webpackChunkfrontend_tech_interview=self.webpackChunkfrontend_tech_interview||[]).push([[4374],{7128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(5893),c=n(1151);const s={},i="React \ub80c\ub354\ub9c1\uc774 \uc9c4\ud654\uc758 \uacfc\uc815",a={id:"react/react-rendering",title:"React \ub80c\ub354\ub9c1\uc774 \uc9c4\ud654\uc758 \uacfc\uc815",description:"React\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ucd5c\uc18c\ud55c\uc758 HTML\uc744 \uc81c\uacf5\ud558\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ub80c\ub354\ub9c1(CSR)\uc73c\ub85c \uc2dc\uc791\ub418\uc5c8\ub2e4.",source:"@site/docs/react/react-rendering.md",sourceDirName:"react",slug:"/react/react-rendering",permalink:"/frontend-tech-interview/docs/react/react-rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/saseungmin/frontend-tech-interview/tree/main/docs/react/react-rendering.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React \uacf5\uc2dd\ubb38\uc11c \ud544\uc694\ud55c \ubd80\ubd84 \uc815\ub9ac",permalink:"/frontend-tech-interview/docs/react/react-official-docs"},next:{title:"\uc7ac\uc870\uc815 (Reconciliation)",permalink:"/frontend-tech-interview/docs/react/reconciliation"}},o={},d=[];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"react-\ub80c\ub354\ub9c1\uc774-\uc9c4\ud654\uc758-\uacfc\uc815",children:"React \ub80c\ub354\ub9c1\uc774 \uc9c4\ud654\uc758 \uacfc\uc815"}),"\n",(0,r.jsx)(t.p,{children:"React\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ucd5c\uc18c\ud55c\uc758 HTML\uc744 \uc81c\uacf5\ud558\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ub80c\ub354\ub9c1(CSR)\uc73c\ub85c \uc2dc\uc791\ub418\uc5c8\ub2e4."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <body>\n    <div id="root"></div>\n    <script src="/static/js/bundle.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\ub294 React, third-party dependencies \ubc0f \ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc \ub4f1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \uac83\uc774 \ud3ec\ud568\ub41c\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ucee4\uc9d0\uc5d0 \ub530\ub77c \ubc88\ub4e4 \ud06c\uae30\ub3c4 \ucee4\uc84c\ub2e4. JavaScript\uac00 \ub2e4\uc6b4\ub85c\ub4dc\ub418\uc5b4 \uad6c\ubb38 \ubd84\uc11d\ub41c \ud6c4 React\uac00 DOM \uc694\uc18c\ub97c \ube48 ",(0,r.jsx)(t.code,{children:"div"}),"\uc5d0 \ub85c\ub4dc\ud55c\ub2e4. \uc774 \uc791\uc5c5\uc774 \uc9c4\ud589\ub418\ub294 \ub3d9\uc548 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc774\ub294 \uac83\uc740 \ube48 \ud398\uc774\uc9c0\ubfd0\uc774\ub2e4."]}),"\n",(0,r.jsx)(t.p,{children:"\ub4dc\ub514\uc5b4 \ucd08\uae30 UI\uac00 \ud45c\uc2dc\ub418\ub354\ub77c\ub3c4 \ud398\uc774\uc9c0 \ub0b4\uc6a9\uc774 \uc5ec\uc804\ud788 \ub204\ub77d\ub418\uc5b4 \uc2a4\ucf08\ub808\ud1a4 \ub85c\ub529\uc774 \uc778\uae30\ub97c \uc5bb\uc740 \uc774\uc720\uc774\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 UI\uac00 \ub450 \ubc88\uc9f8\ub85c \ub80c\ub354\ub9c1\ud558\uc5ec \ub85c\ub529 \uc2a4\ucf08\ub808\ud1a4\uc744 \uc2e4\uc81c \ucf58\ud150\uce20\ub85c \ub300\uccb4\ud55c\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt text",src:n(4821).Z+"",width:"1660",height:"760"})}),"\n",(0,r.jsx)(t.p,{children:"React\ub294 \uccab \ubc88\uc9f8 \ub80c\ub354\ub9c1\uc744 \uc11c\ubc84\ub85c \uc62e\uae30\ub294 Server-Side Rendering(SSR)\uc73c\ub85c \uac1c\uc120\ub418\uc5c8\ub2e4. \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ub41c HTML\uc740 \ub354 \uc774\uc0c1 \ube44\uc5b4 \uc788\uc9c0 \uc54a\uc558\uace0, \uc0ac\uc6a9\uc790\uac00 \ucd08\uae30 UI\ub97c \ubcf4\ub294 \uc18d\ub3c4\uac00 \uac1c\uc120\ub418\uc5c8\uc74c. \uadf8\ub7ec\ub098 \uc2e4\uc81c \ucf58\ud150\uce20\ub97c \ud45c\uc2dc\ud558\ub824\uba74 \uc5ec\uc804\ud788 \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc57c \ud55c\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt text",src:n(2815).Z+"",width:"1624",height:"794"})}),"\n",(0,r.jsx)(t.p,{children:"React Server Components(RSC)\uc758 \ud0c4\uc0dd\uc73c\ub85c, React\uc5d0\uc11c \ucc98\uc74c\uc73c\ub85c \ub124\uc774\ud2f0\ube0c\ub85c UI\uac00 \ub80c\ub354\ub9c1\ub418\uace0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ud45c\uc2dc\ub418\uae30 \uc804\uc5d0 \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'// server component\nexport default async function Page() {\n  const res = await fetch("https://api.example.com/products");\n  const products = res.json();\n\n  return (\n    <>\n      <h1>Products</h1>\n      {products.map((product) => (\n        <div key={product.id}>\n          <h2>{product.title}</h2>\n          <p>{product.description}</p>\n        </div>\n      ))}\n    </>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ub418\ub294 HTML\uc740 \uccab \ubc88\uc9f8 \ub80c\ub354\ub9c1 \uc2dc \uc2e4\uc81c \ucf58\ud150\uce20\ub85c \uc644\uc804\ud788 \ucc44\uc6cc\uc9c0\ubbc0\ub85c \ucd94\uac00 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uac70\ub098 \ub450 \ubc88\uc9f8\ub85c \ub80c\ub354\ub9c1\ud560 \ud544\uc694\uac00 \uc5c6\uc5b4\uc84c\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt text",src:n(239).Z+"",width:"1676",height:"750"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://vercel.com/blog/whats-new-in-react-19#server-components",children:"https://vercel.com/blog/whats-new-in-react-19#server-components"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4821:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/react-rendering-1-dbf74690c8e055a09e3b92b6f5ec5940.png"},2815:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/react-rendering-2-de0050dc55f4d61b3eeb9cf279ae8913.png"},239:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/react-rendering-3-3c1832a4b56bdf52ae547be7ba29bbdc.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(7294);const c={},s=r.createContext(c);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);