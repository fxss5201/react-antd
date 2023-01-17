"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[714],{87714:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r=t(72791),a=t(29439),i=t(31016),c=t.n(i),o=t(93433),l=t(1413),d=t(83574),u=t(98422),f=t(1067),s=t(15287),v=t(46401),b=t(80184),y="DraggableTabNode",k=function(e){var n=e.index,t=e.children,i=e.moveNode,c=e.canDragEvent,o=e.canDropEvent,l=(0,r.useRef)(null),d=(0,u.L)({accept:y,collect:function(e){return(e.getItem()||{}).index===n?{}:{isOver:e.isOver()}},canDrop:function(){return o(n)},hover:function(e){o(n)&&i(e.index,n)}}),s=(0,a.Z)(d,2),v=s[0].isOver,k=s[1],g=(0,f.c)({type:y,item:{index:n},collect:function(e){return{isDragging:e.isDragging()}},canDrag:function(){return c(n)}}),h=(0,a.Z)(g,2),x=h[0].isDragging;k((0,h[1])(l));var p={opacity:1};return v&&(p.color="#1677ff"),x&&(p.opacity=0,p.transition="all 0.8s"),(0,b.jsx)("div",{ref:l,style:p,children:t})},g=function(e){var n=e.items,t=void 0===n?[]:n,i=e.onDragEndEvent,u=e.canDragEvent,f=e.canDropEvent,y=(0,r.useState)([]),g=(0,a.Z)(y,2),h=g[0],x=g[1],p=function(e,n){var r=h.slice();t.forEach((function(e){e.key&&-1===r.indexOf(e.key)&&r.push(e.key)}));var a=r.indexOf(e),c=r.indexOf(n);r.splice(a,1),r.splice(c,0,e),i(r),x(r)},D=(0,o.Z)(t).sort((function(e,n){var r=h.indexOf(e.key),a=h.indexOf(n.key);return-1!==r&&-1!==a?r-a:-1!==r?-1:-1!==a?1:t.indexOf(e)-t.indexOf(n)})),E=c()(e);return delete E.onDragEndEvent,delete E.canDragEvent,delete E.canDropEvent,(0,b.jsx)(s.W,{backend:v.PD,children:(0,b.jsx)(d.Z,(0,l.Z)((0,l.Z)({renderTabBar:function(e,n){return(0,b.jsx)(n,(0,l.Z)((0,l.Z)({},e),{},{children:function(e){return(0,b.jsx)(k,{index:e.key,moveNode:p,canDragEvent:u,canDropEvent:f,children:e},e.key)}}))}},E),{},{items:D}))})},h=function(){var e=(0,r.useState)([{key:"key1",label:"Tab 1",children:"Content of Tab Pane 1",closable:!1},{key:"key2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"key3",label:"Tab 3",children:"Content of Tab Pane 3"},{key:"key4",label:"Tab 4",children:"Content of Tab Pane 4"},{key:"key5",label:"Tab 5",children:"Content of Tab Pane 5"},{key:"key6",label:"Tab 6",children:"Content of Tab Pane 6"}]),n=(0,a.Z)(e,2),t=n[0],i=n[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("p",{children:"\u4e00\u5171\u67096\u4e2atabs\uff0c\u7b2c\u4e00\u4e2atabs\u4e0d\u652f\u6301\u5220\u9664\u548c\u62d6\u62fd\u653e\u7f6e\uff0c\u62d6\u62fd\u5176\u4f59\u7684\u5728 hover \u65f6\u5373\u89e6\u53d1\u5207\u6362"}),(0,b.jsx)(g,{items:t,onChange:function(e){console.log(e)},onEdit:function(e,n){var r=c()(t);"remove"===n&&(r.splice(r.findIndex((function(n){return n.key===e})),1),i(r))},onDragEndEvent:function(e){var n=[];e.forEach((function(e){n.push(t.find((function(n){return n.key===e})))})),i(n)},canDragEvent:function(e){var n=t.find((function(n){return n.key===e})),r=!0;return n.hasOwnProperty("closable")&&!n.closable&&(r=!1),r},canDropEvent:function(e){var n=t.find((function(n){return n.key===e})),r=!0;return n.hasOwnProperty("closable")&&!n.closable&&(r=!1),r},type:"editable-card",hideAdd:!0,tabBarGutter:0,tabBarStyle:{margin:0}})]})},x="DraggableTabNode",p=function(e){var n=e.index,t=e.children,i=e.moveNode,c=e.canDragEvent,o=e.canDropEvent,l=(0,r.useRef)(null),d=(0,u.L)({accept:x,collect:function(e){return(e.getItem()||{}).index===n?{}:{isOver:e.isOver()}},canDrop:function(){return o(n)},drop:function(e){i(e.index,n)}}),s=(0,a.Z)(d,2),v=s[0].isOver,y=s[1],k=(0,f.c)({type:x,item:{index:n},collect:function(e){return{isDragging:e.isDragging()}},canDrag:function(){return c(n)}}),g=(0,a.Z)(k,2),h=g[0].isDragging;y((0,g[1])(l));var p={opacity:1};return v&&(p.color="#1677ff"),h&&(p.opacity=0,p.transition="all 0.8s"),(0,b.jsx)("div",{ref:l,style:p,children:t})},D=function(e){var n=e.items,t=void 0===n?[]:n,i=e.onDragEndEvent,u=e.canDragEvent,f=e.canDropEvent,y=(0,r.useState)([]),k=(0,a.Z)(y,2),g=k[0],h=k[1],x=function(e,n){var r=g.slice();t.forEach((function(e){e.key&&-1===r.indexOf(e.key)&&r.push(e.key)}));var a=r.indexOf(e),c=r.indexOf(n);r.splice(a,1),r.splice(c,0,e),i(r),h(r)},D=(0,o.Z)(t).sort((function(e,n){var r=g.indexOf(e.key),a=g.indexOf(n.key);return-1!==r&&-1!==a?r-a:-1!==r?-1:-1!==a?1:t.indexOf(e)-t.indexOf(n)})),E=c()(e);return delete E.onDragEndEvent,delete E.canDragEvent,delete E.canDropEvent,(0,b.jsx)(s.W,{backend:v.PD,children:(0,b.jsx)(d.Z,(0,l.Z)((0,l.Z)({renderTabBar:function(e,n){return(0,b.jsx)(n,(0,l.Z)((0,l.Z)({},e),{},{children:function(e){return(0,b.jsx)(p,{index:e.key,moveNode:x,canDragEvent:u,canDropEvent:f,children:e},e.key)}}))}},E),{},{items:D}))})},E=function(){var e=(0,r.useState)([{key:"key1",label:"Tab 1",children:"Content of Tab Pane 1",closable:!1},{key:"key2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"key3",label:"Tab 3",children:"Content of Tab Pane 3"},{key:"key4",label:"Tab 4",children:"Content of Tab Pane 4"},{key:"key5",label:"Tab 5",children:"Content of Tab Pane 5"},{key:"key6",label:"Tab 6",children:"Content of Tab Pane 6"}]),n=(0,a.Z)(e,2),t=n[0],i=n[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("p",{children:"\u4e00\u5171\u67096\u4e2atabs\uff0c\u7b2c\u4e00\u4e2atabs\u4e0d\u652f\u6301\u5220\u9664\u548c\u62d6\u62fd\u653e\u7f6e\uff0c\u62d6\u62fd\u5176\u4f59\u7684\u5728 drop \u65f6\u5373\u89e6\u53d1\u5207\u6362"}),(0,b.jsx)(D,{items:t,onChange:function(e){console.log(e)},onEdit:function(e,n){var r=c()(t);"remove"===n&&(r.splice(r.findIndex((function(n){return n.key===e})),1),i(r))},onDragEndEvent:function(e){var n=[];e.forEach((function(e){n.push(t.find((function(n){return n.key===e})))})),i(n)},canDragEvent:function(e){var n=t.find((function(n){return n.key===e})),r=!0;return n.hasOwnProperty("closable")&&!n.closable&&(r=!1),r},canDropEvent:function(e){var n=t.find((function(n){return n.key===e})),r=!0;return n.hasOwnProperty("closable")&&!n.closable&&(r=!1),r},type:"editable-card",hideAdd:!0,tabBarGutter:0,tabBarStyle:{margin:0}})]})},T=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h,{}),(0,b.jsx)("div",{className:"mb-4"}),(0,b.jsx)(E,{})]})}}}]);
//# sourceMappingURL=714.b5a0ca03.chunk.js.map