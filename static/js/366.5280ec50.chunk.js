"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[366],{83366:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r=t(72791),o=t(11087),i=t(57689),a=t(59434),c=t(2703),u=t(88329),l=t(24889),s=t(12937),d=t(48478),f=t(39230),v=t(29439),h=t(93433),m=t(88834),p=t(84304),g=t(14937),x=t(63739),b=t(15671),y=t(43144),w=t(60136),k=t(29388),Z=function(e){(0,w.Z)(t,e);var n=(0,k.Z)(t);function t(){return(0,b.Z)(this,t),n.apply(this,arguments)}return(0,y.Z)(t,[{key:"render",value:function(){return this.props.children}}]),t}(r.Component),j=Z,A={subtree:!0,childList:!0,attributeFilter:["style","class"]},E=function(e){var n=e.children,t=e.options,o=void 0===t?A:t,i=e.onMutate,a=void 0===i?function(){}:i,c=(0,x.Z)(a),u=(0,r.useRef)(null),l=r.useRef(null),s=r.isValidElement(n)&&(0,m.Yr)(n),d=s?null===n||void 0===n?void 0:n.ref:null,f=r.useMemo((function(){return(0,m.sQ)(d,l)}),[d,l]);return(0,r.useEffect)((function(){if((0,g.Z)()){var e,n=(0,p.Z)(null===d||void 0===d?void 0:d.current)||(0,p.Z)(null===u||void 0===u?void 0:u.current);return n&&"MutationObserver"in window&&(e=new MutationObserver(c)).observe(n,o),function(){var n,t;null===(n=e)||void 0===n||n.takeRecords(),null===(t=e)||void 0===t||t.disconnect()}}}),[o,d]),n?r.createElement(j,{ref:u},s?r.cloneElement(n,{ref:f}):n):null},R=t(81694),I=t.n(R);function L(){return window.devicePixelRatio||1}function M(e,n,t,r){e.translate(n,t),e.rotate(Math.PI/180*Number(r)),e.translate(-n,-t)}var N=function(e){var n,t,o=e.zIndex,i=void 0===o?9:o,a=e.rotate,c=void 0===a?-22:a,u=e.width,l=e.height,s=e.image,d=e.content,f=e.font,m=void 0===f?{}:f,p=e.style,g=e.className,x=e.rootClassName,b=e.gap,y=void 0===b?[100,100]:b,w=e.offset,k=e.children,Z=m.color,j=void 0===Z?"rgba(0,0,0,.15)":Z,A=m.fontSize,R=void 0===A?16:A,N=m.fontWeight,O=void 0===N?"normal":N,F=m.fontStyle,z=void 0===F?"normal":F,C=m.fontFamily,T=void 0===C?"sans-serif":C,P=(0,v.Z)(y,2),S=P[0],B=P[1],D=S/2,G=B/2,U=null!==(n=null===w||void 0===w?void 0:w[0])&&void 0!==n?n:D,$=null!==(t=null===w||void 0===w?void 0:w[1])&&void 0!==t?t:G,_=(0,r.useRef)(null),q=(0,r.useRef)(),H=(0,r.useRef)(!1),K=function(e,n){var t;_.current&&q.current&&(H.current=!0,q.current.setAttribute("style",function(e){return Object.keys(e).map((function(n){return"".concat(function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}(n),": ").concat(e[n],";")})).join(" ")}(Object.assign(Object.assign({},function(){var e={zIndex:i,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"},n=U-D,t=$-G;return n>0&&(e.left="".concat(n,"px"),e.width="calc(100% - ".concat(n,"px)"),n=0),t>0&&(e.top="".concat(t,"px"),e.height="calc(100% - ".concat(t,"px)"),t=0),e.backgroundPosition="".concat(n,"px ").concat(t,"px"),e}()),{backgroundImage:"url('".concat(e,"')"),backgroundSize:"".concat(2*(S+n),"px")}))),null===(t=_.current)||void 0===t||t.append(q.current),setTimeout((function(){H.current=!1})))},Q=function(e,n,t,r,o){var i=L(),a=Number(R)*i;e.font="".concat(z," normal ").concat(O," ").concat(a,"px/").concat(o,"px ").concat(T),e.fillStyle=j,e.textAlign="center",e.textBaseline="top",e.translate(r/2,0);var c=Array.isArray(d)?d:[d];null===c||void 0===c||c.forEach((function(r,o){e.fillText(null!==r&&void 0!==r?r:"",n,t+o*(a+3*i))}))},V=function(){var e=document.createElement("canvas"),n=e.getContext("2d");if(n){q.current||(q.current=document.createElement("div"));var t=L(),r=function(e){var n=120,t=64;if(!s&&e.measureText){e.font="".concat(Number(R),"px ").concat(T);var r=Array.isArray(d)?d:[d],o=r.map((function(n){return e.measureText(n).width}));n=Math.ceil(Math.max.apply(Math,(0,h.Z)(o))),t=Number(R)*r.length+3*(r.length-1)}return[null!==u&&void 0!==u?u:n,null!==l&&void 0!==l?l:t]}(n),o=(0,v.Z)(r,2),i=o[0],a=o[1],f=(S+i)*t,m=(B+a)*t;e.setAttribute("width","".concat(2*f,"px")),e.setAttribute("height","".concat(2*m,"px"));var p=S*t/2,g=B*t/2,x=i*t,b=a*t,y=(x+S*t)/2,w=(b+B*t)/2,k=p+f,Z=g+m,j=y+f,A=w+m;if(n.save(),M(n,y,w,c),s){var E=new Image;E.onload=function(){n.drawImage(E,p,g,x,b),n.restore(),M(n,j,A,c),n.drawImage(E,k,Z,x,b),K(e.toDataURL(),i)},E.crossOrigin="anonymous",E.referrerPolicy="no-referrer",E.src=s}else Q(n,p,g,x,b),n.restore(),M(n,j,A,c),Q(n,k,Z,x,b),K(e.toDataURL(),i)}};return(0,r.useEffect)(V,[c,i,u,l,s,d,j,R,O,z,T,S,B,U,$]),r.createElement(E,{onMutate:function(e){H.current||e.forEach((function(e){(function(e,n){var t=!1;return e.removedNodes.length&&(t=Array.from(e.removedNodes).some((function(e){return e===n}))),"attributes"===e.type&&e.target===n&&(t=!0),t})(e,q.current)&&(q.current&&(q.current.remove(),q.current=void 0),V())}))}},r.createElement("div",{ref:_,className:I()(g,x),style:Object.assign({position:"relative"},p)},k))},O=t(40077),F=t(80184),z=function(e){var n,t,r=(0,f.$G)().t,o=(0,i.TH)(),v=(0,l.zF)(o.pathname,s.O[0].children),h=(0,a.v9)((function(e){return e.userInfo.value})),m=v;if(v.children&&null!==(n=v.children[0])&&void 0!==n&&n.index&&(m=v.children[0]),(0,d.Z)((0,c.zl)(r,null===(t=m.meta)||void 0===t?void 0:t.title)),v.redirect)return(0,F.jsx)(i.Fg,{to:v.redirect,replace:!0});var p=v.watermark||"";v.watermark&&("object"===(0,c.oL)(v.watermark)?p=v.watermark.user.map((function(e){return h[e]})):"boolean"===(0,c.oL)(v.watermark)?p=function(){var e=O.Z.watermark;return"object"===(0,c.oL)(O.Z.watermark)?e=O.Z.watermark.user.map((function(e){return h[e]})):"function"===(0,c.oL)(O.Z.watermark)&&(e=O.Z.watermark(h)),e}():"function"===(0,c.oL)(v.watermark)&&(p=v.watermark(h)));var g=(0,F.jsx)(N,{content:p,children:e.children});if(!v.requiresAuth&&!v.access)return g;if(!u.Z.get((0,c.hi)("accessToken")))return(0,F.jsx)(i.Fg,{to:"/login",replace:!0});if(v.access){var x=O.Z.noAccessPath||"/403";if(!h.access.includes(v.access))return(0,F.jsx)(i.Fg,{to:x})}return g},C=t(32209),T=function(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(o.GI,{getKey:function(e){return e.pathname}}),(0,F.jsx)(C.AliveScope,{children:(0,F.jsx)(z,{children:(0,F.jsx)(i.j3,{})})})]})}},24889:function(e,n,t){t.d(n,{B3:function(){return a},Lv:function(){return c},RZ:function(){return u},zF:function(){return i}});var r=t(1413),o=t(37762),i=function e(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i={},a=(0,o.Z)(r);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(c.path===t)return c;if(c.children){var u=e(t,c.children);Object.keys(u).length&&(i=u)}}}catch(l){a.e(l)}finally{a.f()}return i},a=function e(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=[],a=(0,o.Z)(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;c.hideInMenu||(c.children?i.push((0,r.Z)((0,r.Z)({},c),{},{children:e(c.children)})):i.push(c))}}catch(u){a.e(u)}finally{a.f()}return i},c=function e(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=[],a=(0,o.Z)(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;c.access&&!r.includes(c.access)||(c.children&&(c.children=e(c.children,r)),i.push(c))}}catch(u){a.e(u)}finally{a.f()}return i},u=function e(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[],i=(0,o.Z)(t);try{for(i.s();!(n=i.n()).done;){var a,c,u,l,s=n.value;if(s.children)r.push({key:s.path,icon:null===(a=s.meta)||void 0===a?void 0:a.icon,label:null===(c=s.meta)||void 0===c?void 0:c.title,children:e(s.children)});else r.push({key:s.path,icon:null===(u=s.meta)||void 0===u?void 0:u.icon,label:null===(l=s.meta)||void 0===l?void 0:l.title})}}catch(d){i.e(d)}finally{i.f()}return r}}}]);
//# sourceMappingURL=366.5280ec50.chunk.js.map