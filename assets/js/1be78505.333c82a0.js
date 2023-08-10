"use strict";(self.webpackChunkfrontend_tech_interview=self.webpackChunkfrontend_tech_interview||[]).push([[514,972],{9963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(7294),o=n(6010),i=n(1944),s=n(5281),r=n(3320),l=n(2802),c=n(4477),d=n(1116),u=n(7961),m=n(5999),h=n(2466),b=n(5936);const p={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var x=n(5893);function j(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:r}=(0,h.Ct)();return(0,h.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,b.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,x.jsx)("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,p.backToTopButton,e&&p.backToTopButtonShow),type:"button",onClick:t})}var f=n(1442),v=n(6550),g=n(7524),_=n(6668),k=n(1327);function C(e){return(0,x.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,x.jsxs)("g",{fill:"#7a7a7a",children:[(0,x.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,x.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function I(e){let{onClick:t}=e;return(0,x.jsx)("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t,children:(0,x.jsx)(C,{className:S.collapseSidebarButtonIcon})})}var N=n(9689),T=n(902);const B=Symbol("EmptyContext"),w=a.createContext(B);function Z(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,x.jsx)(w.Provider,{value:i,children:t})}var y=n(6043),L=n(8596),A=n(9960),E=n(2389);function M(e){let{categoryLabel:t,onClick:n}=e;return(0,x.jsx)("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:i,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:h,className:b,href:p}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,_.L)(),f=function(e){const t=(0,E.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,l.Wl)(e):void 0),[e,t])}(t),v=(0,l._F)(t,i),g=(0,L.Mg)(p,i),{collapsed:k,setCollapsed:C}=(0,y.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:S,setExpandedItem:I}=function(){const e=(0,a.useContext)(w);if(e===B)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=function(e){void 0===e&&(e=!k),I(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:v,collapsed:k,updateCollapsed:N}),(0,a.useEffect)((()=>{h&&null!=S&&S!==c&&j&&C(!0)}),[h,S,c,C,j]),(0,x.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":k},b),children:[(0,x.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,x.jsx)(A.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!p&&h,"menu__link--active":v}),onClick:h?e=>{n?.(t),p?N(!1):(e.preventDefault(),N())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":h?!k:void 0,href:h?f??"#":f,...d,children:m}),p&&h&&(0,x.jsx)(M,{categoryLabel:m,onClick:e=>{e.preventDefault(),N()}})]}),(0,x.jsx)(y.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k,children:(0,x.jsx)(K,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:i,level:r+1})})]})}var H=n(3919),P=n(9471);const W={menuExternalLink:"menuExternalLink_NmtK"};function D(e){let{item:t,onItemClick:n,activePath:a,level:i,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,b=(0,l._F)(t,a),p=(0,H.Z)(d);return(0,x.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,x.jsxs)(A.Z,{className:(0,o.Z)("menu__link",!p&&W.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:h,"aria-current":b?"page":void 0,to:d,...p&&{onClick:n?()=>n(t):void 0},...c,children:[u,!p&&(0,x.jsx)(P.Z,{})]})},u)}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function V(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:r,className:l}=t;return(0,x.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),r&&[R.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:i}},a)}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,x.jsx)(F,{item:t,...n});case"html":return(0,x.jsx)(V,{item:t,...n});default:return(0,x.jsx)(D,{item:t,...n})}}function U(e){let{items:t,...n}=e;return(0,x.jsx)(Z,{children:t.map(((e,t)=>(0,x.jsx)(z,{item:e,index:t,...n},t)))})}const K=(0,a.memo)(U),q={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function G(e){let{path:t,sidebar:n,className:i}=e;const r=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,h.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,x.jsx)("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",q.menu,r&&q.menuWithAnnouncementBar,i),children:(0,x.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(K,{items:n,activePath:t,level:1})})})}const Y="sidebar_njMd",O="sidebarWithHideableNavbar_wUlq",X="sidebarHidden_VK0M",J="sidebarLogo_isFc";function Q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:r}}}=(0,_.L)();return(0,x.jsxs)("div",{className:(0,o.Z)(Y,s&&O,i&&X),children:[s&&(0,x.jsx)(k.Z,{tabIndex:-1,className:J}),(0,x.jsx)(G,{path:t,sidebar:n}),r&&(0,x.jsx)(I,{onClick:a})]})}const $=a.memo(Q);var ee=n(3102),te=n(2961);const ne=e=>{let{sidebar:t,path:n}=e;const a=(0,te.e)();return(0,x.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(K,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ae(e){return(0,x.jsx)(ee.Zo,{component:ne,props:e})}const oe=a.memo(ae);function ie(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,x.jsxs)(x.Fragment,{children:[n&&(0,x.jsx)($,{...e}),a&&(0,x.jsx)(oe,{...e})]})}const se={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function re(e){let{toggleSidebar:t}=e;return(0,x.jsx)("div",{className:se.expandButton,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,x.jsx)(C,{className:se.expandButtonIcon})})}const le={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ce(e){let{children:t}=e;const n=(0,d.V)();return(0,x.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function de(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:r}=(0,v.TH)(),[l,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{l&&c(!1),!l&&(0,f.n)()&&c(!0),i((e=>!e))}),[i,l]);return(0,x.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,le.docSidebarContainer,n&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&n&&c(!0)},children:(0,x.jsx)(ce,{children:(0,x.jsxs)("div",{className:(0,o.Z)(le.sidebarViewport,l&&le.sidebarViewportHidden),children:[(0,x.jsx)(ie,{sidebar:t,path:r,onCollapse:d,isHidden:l}),l&&(0,x.jsx)(re,{toggleSidebar:d})]})})})}const ue={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function me(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,d.V)();return(0,x.jsx)("main",{className:(0,o.Z)(ue.docMainContainer,(t||!a)&&ue.docMainContainerEnhanced),children:(0,x.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,t&&ue.docItemWrapperEnhanced),children:n})})}const he={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function be(e){let{children:t}=e;const n=(0,d.V)(),[o,i]=(0,a.useState)(!1);return(0,x.jsxs)(u.Z,{wrapperClassName:he.docsWrapper,children:[(0,x.jsx)(j,{}),(0,x.jsxs)("div",{className:he.docPage,children:[n&&(0,x.jsx)(de,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,x.jsx)(me,{hiddenSidebarContainer:o,children:t})]})]})}var pe=n(4972),xe=n(197);function je(e){const{versionMetadata:t}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(xe.Z,{version:t.version,tag:(0,r.os)(t.pluginId,t.version)}),(0,x.jsx)(i.d,{children:t.noIndex&&(0,x.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]})}function fe(e){const{versionMetadata:t}=e,n=(0,l.hI)(e);if(!n)return(0,x.jsx)(pe.default,{});const{docElement:a,sidebarName:r,sidebarItems:u}=n;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(je,{...e}),(0,x.jsx)(i.FG,{className:(0,o.Z)(s.k.wrapper.docsPages,s.k.page.docsDocPage,e.versionMetadata.className),children:(0,x.jsx)(c.q,{version:t,children:(0,x.jsx)(d.b,{name:r,items:u,children:(0,x.jsx)(be,{children:a})})})})]})}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});n(7294);var a=n(5999),o=n(1944),i=n(7961),s=n(5893);function r(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),(0,s.jsx)(i.Z,{children:(0,s.jsx)("main",{className:"container margin-vert--xl",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)("h1",{className:"hero__title",children:(0,s.jsx)(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})]})}},4477:(e,t,n)=>{n.d(t,{E:()=>l,q:()=>r});var a=n(7294),o=n(902),i=n(5893);const s=a.createContext(null);function r(e){let{children:t,version:n}=e;return(0,i.jsx)(s.Provider,{value:n,children:t})}function l(){const e=(0,a.useContext)(s);if(null===e)throw new o.i6("DocsVersionProvider");return e}}}]);