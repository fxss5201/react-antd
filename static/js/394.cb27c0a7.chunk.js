"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[394],{83916:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(29439),o=(0,r(92721).Z)({scriptUrl:"//at.alicdn.com/t/c/font_3796796_awd1asdg0r5.js"}),i=r(59434),a=r(90263),l=r(81357),c=r(2703),u=r(80184),s=function(e){var n=e.addClass,r=(0,a.Z)((0,c.hi)("locale")),s=(0,t.Z)(r,2)[1],d=(0,i.v9)((function(e){return e.locale.value})),f=(0,i.I0)();return(0,u.jsxs)("div",{className:"flex items-center cursor-pointer ".concat(n),onClick:function(){return e="zhCN"===d?"enGb":"zhCN",f((0,l.wo)(e)),void s(e);var e},children:[(0,u.jsx)(o,{type:"zhCN"===d?"icon-zhongyingwenqiehuan-zhongwen":"icon-zhongyingwenqiehuan-yingwen",className:" text-24"}),(0,u.jsx)("span",{className:"ml-1",children:"zhCN"===d?"\u4e2d\u6587":"English"})]})}},61394:function(e,n,r){r.r(n);var t=r(72791),o=r(57689),i=r(83916),a=r(20043),l=r(80184),c=r(4147);n.default=function(){return(0,l.jsxs)("div",{className:"w-full h-full relative",children:[(0,l.jsx)("div",{className:"absolute top-4 right-8 z-10",children:(0,l.jsx)(i.Z,{addClass:"text-gray-900 hover:text-blue-400"})}),(0,l.jsx)("div",{className:"w-full h-full flex justify-center",children:(0,l.jsxs)("div",{className:"mt-20",children:[(0,l.jsx)("div",{className:"text-lg font-semibold text-center mb-5",children:c.name}),(0,l.jsx)(t.Suspense,{fallback:(0,l.jsx)(a.Z,{tip:"\u52a0\u8f7d\u4e2d...",size:"large",children:(0,l.jsx)("div",{className:"w-full",style:{height:"calc(100vh - 64px - 48px)"}})}),children:(0,l.jsx)(o.j3,{})})]})})]})}},92721:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(1413),o=r(44925),i=r(72791),a=r(4942),l=r(81694),c=r.n(l),u=r(50808),s=r(39463),d=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],f=i.forwardRef((function(e,n){var r=e.className,l=e.component,f=e.viewBox,v=e.spin,m=e.rotate,h=e.tabIndex,p=e.onClick,x=e.children,y=(0,o.Z)(e,d);(0,s.Kp)(Boolean(l||x),"Should have `component` prop or `children`."),(0,s.C3)();var g=i.useContext(u.Z),Z=g.prefixCls,w=void 0===Z?"anticon":Z,N=g.rootClassName,C=c()(N,w,r),b=c()((0,a.Z)({},"".concat(w,"-spin"),!!v)),j=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,z=(0,t.Z)((0,t.Z)({},s.vD),{},{className:b,style:j,viewBox:f});f||delete z.viewBox;var k=h;return void 0===k&&p&&(k=-1),i.createElement("span",(0,t.Z)((0,t.Z)({role:"img"},y),{},{ref:n,tabIndex:k,onClick:p,className:C}),l?i.createElement(l,(0,t.Z)({},z),x):x?((0,s.Kp)(Boolean(f)||1===i.Children.count(x)&&i.isValidElement(x)&&"use"===i.Children.only(x).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),i.createElement("svg",(0,t.Z)((0,t.Z)({},z),{},{viewBox:f}),x)):null)}));f.displayName="AntdIcon";var v=f,m=["type","children"],h=new Set;function p(e){return Boolean("string"===typeof e&&e.length&&!h.has(e))}function x(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e[n];if(p(r)){var t=document.createElement("script");t.setAttribute("src",r),t.setAttribute("data-namespace",r),e.length>n+1&&(t.onload=function(){x(e,n+1)},t.onerror=function(){x(e,n+1)}),h.add(r),document.body.appendChild(t)}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.scriptUrl,r=e.extraCommonProps,a=void 0===r?{}:r;n&&"undefined"!==typeof document&&"undefined"!==typeof window&&"function"===typeof document.createElement&&(Array.isArray(n)?x(n.reverse()):x([n]));var l=i.forwardRef((function(e,n){var r=e.type,l=e.children,c=(0,o.Z)(e,m),u=null;return e.type&&(u=i.createElement("use",{xlinkHref:"#".concat(r)})),l&&(u=l),i.createElement(v,(0,t.Z)((0,t.Z)((0,t.Z)({},a),c),{},{ref:n}),u)}));return l.displayName="Iconfont",l}},90263:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(72791),o=r(667),i=r(55355);var a=function(e){i.Z&&((0,o.mf)(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var n=(0,t.useRef)(e);n.current=(0,t.useMemo)((function(){return e}),[e]);var r=(0,t.useRef)();return r.current||(r.current=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n.current.apply(this,e)}),r.current},l=r(79148),c=function(e,n){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,o,i=r.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)a.push(t.value)}catch(l){o={error:l}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a};var u,s=r(1226),d=(u=function(){return s.Z?localStorage:void 0},function(e,n){var r;try{r=u()}catch(v){console.error(v)}function i(){try{var t=null===r||void 0===r?void 0:r.getItem(e);if(t)return i=t,(null===n||void 0===n?void 0:n.deserializer)?null===n||void 0===n?void 0:n.deserializer(i):JSON.parse(i)}catch(a){console.error(a)}var i;return(0,o.mf)(null===n||void 0===n?void 0:n.defaultValue)?null===n||void 0===n?void 0:n.defaultValue():null===n||void 0===n?void 0:n.defaultValue}var s=c((0,t.useState)((function(){return i()})),2),d=s[0],f=s[1];return(0,l.Z)((function(){f(i())}),[e]),[d,a((function(t){var i=(0,o.mf)(t)?t(d):t;if(f(i),(0,o.G7)(i))null===r||void 0===r||r.removeItem(e);else try{null===r||void 0===r||r.setItem(e,function(e){return(null===n||void 0===n?void 0:n.serializer)?null===n||void 0===n?void 0:n.serializer(e):JSON.stringify(e)}(i))}catch(a){console.error(a)}}))]})},79148:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(72791),o=function(e){return function(n,r){var o=(0,t.useRef)(!1);e((function(){return function(){o.current=!1}}),[]),e((function(){if(o.current)return n();o.current=!0}),r)}},i=o(t.useEffect)}}]);
//# sourceMappingURL=394.cb27c0a7.chunk.js.map