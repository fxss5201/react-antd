"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[969],{83916:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(29439),a=(0,t(92721).Z)({scriptUrl:"//at.alicdn.com/t/c/font_3796796_awd1asdg0r5.js"}),l=t(59434),r=t(90263),s=t(81357),o=t(2703),c=t(80184),d=function(e){var n=e.addClass,t=(0,r.Z)((0,o.hi)("locale")),d=(0,i.Z)(t,2)[1],h=(0,l.v9)((function(e){return e.locale.value})),u=(0,l.I0)();return(0,c.jsxs)("div",{className:"flex items-center cursor-pointer ".concat(n),onClick:function(){return e="zhCN"===h?"enGb":"zhCN",u((0,s.wo)(e)),void d(e);var e},children:[(0,c.jsx)(a,{type:"zhCN"===h?"icon-zhongyingwenqiehuan-zhongwen":"icon-zhongyingwenqiehuan-yingwen",className:" text-24"}),(0,c.jsx)("span",{className:"ml-1",children:"zhCN"===h?"\u4e2d\u6587":"English"})]})}},21969:function(e,n,t){t.r(n);var i,a=t(93433),l=t(1413),r=t(29439),s=t(72791),o=t(53621),c=t(75797),d=t(25671),h=t(83388),u=t(83574),f=t(20043),v=t(26455),p=t(57689),m=t(11087),x=t(59434),g=t(39230),y=t(83916),Z=t(88329),j=t(2703),b=t(24889),k=t(13799),w=t(49841),N=t(40077),z=t(80184),S=d.Z.Header,C=d.Z.Content,I=d.Z.Sider,O=(0,b.B3)(w.O[0].children);O=null===(i=O[0])||void 0===i?void 0:i.children;var B=(0,b.RZ)(O);n.default=function(){var e,n,t=(0,g.$G)().t,i=(0,s.useState)(!1),O=(0,r.Z)(i,2),H=O[0],K=O[1],F=(0,x.v9)((function(e){return e.userInfo.value})),J=(0,p.TH)(),T=J.pathname.slice(1).split("/").map((function(e,n,t){return"/".concat(t.slice(0,n+1).join("/"))})),_=(0,s.useState)(T),E=(0,r.Z)(_,2),G=E[0],R=E[1],q=(0,b.zF)(J.pathname,w.O[0].children),A=[],U=N.Z.isShowBreadcrumb&&!(null!==(e=q.meta)&&void 0!==e&&e.isHideBreadcrumb);U&&(A=T.map((function(e){var n=(0,b.zF)(e,w.O[0].children);return n.redirect?(0,l.Z)((0,l.Z)({},n),{},{path:n.redirect}):n})));var L,M,Y=[{key:"user",label:F.name,children:[{key:"logout",label:"\u9000\u51fa\u767b\u5f55"}]}],$=(0,x.I0)(),D=(0,p.s0)(),P=N.Z.isShowTabs&&!(null!==(n=q.meta)&&void 0!==n&&n.isHideTabs);P&&((L=(L=window.localStorage.getItem((0,j.hi)("tabs")))?JSON.parse(L):[{key:"/home/analysis",label:"\u9996\u9875",closable:!1}]).map((function(e){return e.key})).includes(q.path)||(L.push({key:q.path,label:(0,j.zl)(t,null===(M=q.meta)||void 0===M?void 0:M.title)}),window.localStorage.setItem((0,j.hi)("tabs"),JSON.stringify(L))));var Q=(0,s.useState)(L),V=(0,r.Z)(Q,2),W=V[0],X=V[1];L&&W.length!==L.length&&X(L);var ee=function(e){var n=e.slice(1).split("/").map((function(e,n,t){return"/".concat(t.slice(0,n+1).join("/"))})).slice(0,-1);R([].concat((0,a.Z)(G),(0,a.Z)(n)))};return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(d.Z,{children:[(0,z.jsxs)(S,{className:"flex",style:{position:"fixed",left:0,right:0,height:"64px",zIndex:10},children:[(0,z.jsx)("div",{className:"flex-shrink-0 w-32 h-8 my-4 bg-gray-500"}),(0,z.jsx)("div",{className:"flex items-center justify-center",children:(0,z.jsx)("div",{className:"text-gray-200 px-4 text-16 hover:text-white cursor-pointer",children:s.createElement(H?o.Z:c.Z,{onClick:function(){return K(!H)}})})}),(0,z.jsxs)("div",{className:"flex-auto flex items-center justify-end",children:[N.Z.isShowToggleLang&&(0,z.jsx)(y.Z,{addClass:"text-gray-400 hover:text-white"}),(0,z.jsx)(h.Z,{theme:"dark",mode:"horizontal",items:Y,onClick:function(e){"logout"===e.key&&(Z.Z.remove((0,j.hi)("accessToken")),$((0,k.ps)({name:""})),D("/login"))}})]})]}),(0,z.jsxs)(d.Z,{children:[(0,z.jsx)(I,{width:200,collapsible:!0,collapsed:H,onCollapse:function(e){return K(e)},style:{position:"fixed",left:0,top:"64px",bottom:0,zIndex:10},children:(0,z.jsx)(h.Z,{theme:"dark",mode:"inline",defaultOpenKeys:T,openKeys:G,defaultSelectedKeys:[J.pathname],selectedKeys:[J.pathname],style:{minHeight:"100%",borderRight:0,overflowY:"auto"},items:B,onClick:function(e){var n=e.key;D(n)},onOpenChange:function(e){return R(e)}})}),(0,z.jsxs)(d.Z,{className:"bg-white",style:{margin:H?"64px 0 0 80px":"64px 0 0 200px",boxSizing:"border-box"},children:[P&&(0,z.jsx)("div",{style:{height:"40px"},children:(0,z.jsx)(u.Z,{defaultActiveKey:J.pathname,activeKey:J.pathname,items:W,onChange:function(e){D(e),ee(e)},onEdit:function(e,n){if("remove"===n){var t=JSON.parse(JSON.stringify(W)),i=t.findIndex((function(n){return n.key===e}));if(t.splice(i,1),window.localStorage.setItem((0,j.hi)("tabs"),JSON.stringify(t)),X(t),e===J.pathname){var a=t[i-1].key;D(a),ee(a)}}},type:"editable-card",hideAdd:!0,tabBarGutter:0,tabBarStyle:{margin:0},style:{position:"fixed",top:"64px",left:H?"80px":"200px",right:0,zIndex:10},className:"bg-white"})}),(0,z.jsx)(s.Suspense,{fallback:(0,z.jsx)(f.Z,{tip:"\u52a0\u8f7d\u4e2d...",size:"large",children:(0,z.jsx)("div",{className:"w-full",style:{height:"calc(100vh - 64px - 48px)"}})}),children:(0,z.jsxs)(C,{style:{minHeight:"auto",padding:"24px"},children:[U&&(0,z.jsx)(v.Z,{className:"mb-6",children:A.map((function(e){var n,i,a,l;return(0,z.jsx)(v.Z.Item,{children:e.path===J.pathname?(0,z.jsxs)(z.Fragment,{children:[null===(n=e.meta)||void 0===n?void 0:n.icon,(0,j.zl)(t,null===(i=e.meta)||void 0===i?void 0:i.title)]}):(0,z.jsxs)(m.rU,{to:e.path,children:[null===(a=e.meta)||void 0===a?void 0:a.icon,(0,j.zl)(t,null===(l=e.meta)||void 0===l?void 0:l.title)]})},e.path)}))}),(0,z.jsx)(p.j3,{})]})})]})]})]})})}},24889:function(e,n,t){t.d(n,{B3:function(){return r},RZ:function(){return s},zF:function(){return l}});var i=t(1413),a=t(37762),l=function e(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l={},r=(0,a.Z)(i);try{for(r.s();!(n=r.n()).done;){var s=n.value;if(s.path===t)return s;if(s.children){var o=e(t,s.children);Object.keys(o).length&&(l=o)}}}catch(c){r.e(c)}finally{r.f()}return l},r=function e(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],l=[],r=(0,a.Z)(t);try{for(r.s();!(n=r.n()).done;){var s=n.value;s.hideInMenu||(s.children?l.push((0,i.Z)((0,i.Z)({},s),{},{children:e(s.children)})):l.push(s))}}catch(o){r.e(o)}finally{r.f()}return l},s=function e(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=[],l=(0,a.Z)(t);try{for(l.s();!(n=l.n()).done;){var r,s,o,c,d=n.value;if(d.children)i.push({key:d.path,icon:null===(r=d.meta)||void 0===r?void 0:r.icon,label:null===(s=d.meta)||void 0===s?void 0:s.title,children:e(d.children)});else i.push({key:d.path,icon:null===(o=d.meta)||void 0===o?void 0:o.icon,label:null===(c=d.meta)||void 0===c?void 0:c.title})}}catch(h){l.e(h)}finally{l.f()}return i}}}]);
//# sourceMappingURL=969.c75eaae0.chunk.js.map