"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[679],{50679:function(e,r,n){n.r(r),n.d(r,{default:function(){return T}});var t=n(29439),a=n(72791),o=n(83574),i=n(39230),s=n(1413),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},l=n(8711),u=function(e,r){return a.createElement(l.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:r,icon:c}))};u.displayName="UserOutlined";var f=a.forwardRef(u),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},m=function(e,r){return a.createElement(l.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:r,icon:d}))};m.displayName="LockOutlined";var v=a.forwardRef(m),h=n(76032),g=n(14372),Z=n(91885),p=n(63254),x=n(67354),w=n(57689),y=n(11087),j=n(90263),b=n(98946),N=n(43030),M=n(2703),z=n(88329),I=n(59434),C=n(13799),P=n(80184),V=function(e){e.activeKey;var r=(0,a.useState)(!1),n=(0,t.Z)(r,2),o=n[0],s=n[1],c=(0,j.Z)((0,M.hi)("loginInfo")),l=(0,t.Z)(c,2),u=l[0],d=l[1],m=h.Z.useForm(),V=(0,t.Z)(m,1)[0];(0,b.Z)((function(){u&&V.setFieldsValue({username:u.username,password:(0,M.hX)(u.password),remember:u.remember})}));var S=(0,i.$G)(),k=S.t,F=S.i18n;F.on("languageChanged",(function(e){o&&V.validateFields()})),(0,N.Z)((function(){F.off("languageChanged")}));var E=(0,I.I0)(),R=(0,w.s0)();return(0,P.jsxs)(h.Z,{initialValues:{remember:!0},form:V,onFinish:function(e){d({username:e.username,password:(0,M.XI)(e.password),remember:e.remember}),z.Z.set((0,M.hi)("accessToken"),"accessToken123",{expires:7}),E((0,C.ps)({name:"fxss"})),g.ZP.success(k("\u767b\u9646\u6210\u529f")),R("/"),console.log("Received values of form: ",e)},size:"large",name:"login",className:"w-80",children:[(0,P.jsx)(h.Z.Item,{name:"username",rules:[{required:!0,message:k("Please input your Username!")}],children:(0,P.jsx)(Z.Z,{prefix:(0,P.jsx)(f,{className:"text-gray-400"}),placeholder:k("Username"),allowClear:!0})}),(0,P.jsx)(h.Z.Item,{name:"password",rules:[{required:!0,message:k("Please input your Password!")}],children:(0,P.jsx)(Z.Z.Password,{prefix:(0,P.jsx)(v,{className:"text-gray-400"}),placeholder:k("Password"),allowClear:!0})}),(0,P.jsxs)(h.Z.Item,{children:[(0,P.jsx)(h.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,P.jsx)(p.Z,{children:k("Remember me")})}),(0,P.jsx)(y.rU,{className:"float-right a",to:"/login/password",children:k("Forgot password")})]}),(0,P.jsxs)(h.Z.Item,{children:[(0,P.jsx)(x.ZP,{type:"primary",htmlType:"submit",className:"w-full",onClick:function(){return s(!0)},children:k("Log in")}),(0,P.jsxs)("div",{className:"mt-3",children:[k("Or")," ",(0,P.jsx)(y.rU,{to:"/login/register",className:"a",children:k("register now!")})]})]})]})},S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},k=function(e,r){return a.createElement(l.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:r,icon:S}))};k.displayName="MobileOutlined";var F=a.forwardRef(k),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"}}]},name:"safety-certificate",theme:"outlined"},R=function(e,r){return a.createElement(l.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:r,icon:E}))};R.displayName="SafetyCertificateOutlined";var L=a.forwardRef(R),O=n(14447),U=n(40077),H=function(e){var r=e.activeKey,n=(0,a.useState)(!1),o=(0,t.Z)(n,2),s=o[0],c=o[1],l=h.Z.useForm(),u=(0,t.Z)(l,1)[0];(0,a.useEffect)((function(){z(void 0),w(!1)}),[u,r]);var f=(0,i.$G)(),d=f.t,m=f.i18n;m.on("languageChanged",(function(e){s&&u.validateFields()})),(0,N.Z)((function(){m.off("languageChanged")}));var v=(0,a.useState)(!1),g=(0,t.Z)(v,2),p=g[0],w=g[1],j=(0,a.useState)(),b=(0,t.Z)(j,2),M=b[0],z=b[1],I=(0,O.Z)({targetDate:M,onEnd:function(){w(!1)}}),C=(0,t.Z)(I,1)[0];return(0,P.jsxs)(h.Z,{initialValues:{remember:!0},form:u,onFinish:function(e){console.log("Received values of form: ",e)},size:"large",name:"login",className:"w-80",children:[(0,P.jsx)(h.Z.Item,{name:"Phone",rules:[{required:!0,message:d("Please input your Phone!")},{pattern:U.Z.phonePattern,message:d("Incorrect mobile number format!")}],children:(0,P.jsx)(Z.Z,{prefix:(0,P.jsx)(F,{className:"text-gray-400"}),placeholder:d("Phone"),allowClear:!0})}),(0,P.jsx)(h.Z.Item,{name:"Verification",rules:[{required:!0,message:d("Please input your Verification!")},{pattern:U.Z.verificationPattern,message:d("Incorrect format of verification number!")}],className:"flex-auto",children:(0,P.jsx)(Z.Z,{prefix:(0,P.jsx)(L,{className:"text-gray-400"}),placeholder:d("Verification"),addonAfter:p?"".concat(Math.round(C/1e3),"s"):(0,P.jsx)("div",{className:"cursor-pointer",onClick:function(){u.validateFields(["Phone"]).then((function(){z(Date.now()+6e4),w(!0)}))},children:d("Get verification code")}),allowClear:!0})}),(0,P.jsxs)(h.Z.Item,{children:[(0,P.jsx)(x.ZP,{type:"primary",htmlType:"submit",className:"w-full",onClick:function(){return c(!0)},children:d("Log in")}),(0,P.jsxs)("div",{className:"mt-3 clearfix",children:[(0,P.jsx)(y.rU,{className:"float-left a",to:"/login/register",children:d("register now!")}),(0,P.jsx)(y.rU,{className:"float-right a",to:"/login/password",children:d("Forgot password")})]})]})]})},T=function(){var e=(0,i.$G)().t,r=(0,a.useState)("1"),n=(0,t.Z)(r,2),s=n[0],c=n[1];return(0,P.jsx)(o.Z,{activeKey:s,size:"large",onChange:function(e){c(e)},centered:!0,items:[{label:e("Password Login"),key:"1",children:(0,P.jsx)(V,{activeKey:s})},{label:e("Verification login"),key:"2",children:(0,P.jsx)(H,{activeKey:s})}]})}},14447:function(e,r,n){var t=n(29439),a=n(97892),o=n.n(a),i=n(72791),s=n(45362),c=n(667),l=function(e){if(!e)return 0;var r=o()(e).valueOf()-Date.now();return r<0?0:r},u=function(e){return{days:Math.floor(e/864e5),hours:Math.floor(e/36e5)%24,minutes:Math.floor(e/6e4)%60,seconds:Math.floor(e/1e3)%60,milliseconds:Math.floor(e)%1e3}};r.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e||{},n=r.leftTime,a=r.targetDate,o=r.interval,f=void 0===o?1e3:o,d=r.onEnd,m=(0,i.useMemo)((function(){return"leftTime"in e?(0,c.hj)(n)&&n>0?Date.now()+n:void 0:a}),[n,a]),v=(0,i.useState)((function(){return l(m)})),h=(0,t.Z)(v,2),g=h[0],Z=h[1],p=(0,s.Z)(d);(0,i.useEffect)((function(){if(m){Z(l(m));var e=setInterval((function(){var r,n=l(m);Z(n),0===n&&(clearInterval(e),null===(r=p.current)||void 0===r||r.call(p))}),f);return function(){return clearInterval(e)}}Z(0)}),[m,f]);var x=(0,i.useMemo)((function(){return u(g)}),[g]);return[g,x]}},90263:function(e,r,n){n.d(r,{Z:function(){return f}});var t=n(29439),a=n(72791),o=n(667),i=n(55355);var s=function(e){i.Z&&((0,o.mf)(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var r=(0,a.useRef)(e);r.current=(0,a.useMemo)((function(){return e}),[e]);var n=(0,a.useRef)();return n.current||(n.current=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return r.current.apply(this,n)}),n.current},c=n(79148);var l,u=n(1226),f=(l=function(){return u.Z?localStorage:void 0},function(e,r){var n;try{n=l()}catch(v){console.error(v)}function i(){try{var t=null===n||void 0===n?void 0:n.getItem(e);if(t)return a=t,(null===r||void 0===r?void 0:r.deserializer)?null===r||void 0===r?void 0:r.deserializer(a):JSON.parse(a)}catch(i){console.error(i)}var a;return(0,o.mf)(null===r||void 0===r?void 0:r.defaultValue)?null===r||void 0===r?void 0:r.defaultValue():null===r||void 0===r?void 0:r.defaultValue}var u=(0,a.useState)((function(){return i()})),f=(0,t.Z)(u,2),d=f[0],m=f[1];return(0,c.Z)((function(){m(i())}),[e]),[d,s((function(t){var a=(0,o.mf)(t)?t(d):t;if(m(a),(0,o.G7)(a))null===n||void 0===n||n.removeItem(e);else try{null===n||void 0===n||n.setItem(e,function(e){return(null===r||void 0===r?void 0:r.serializer)?null===r||void 0===r?void 0:r.serializer(e):JSON.stringify(e)}(a))}catch(i){console.error(i)}}))]})},98946:function(e,r,n){var t=n(72791),a=n(667),o=n(55355);r.Z=function(e){o.Z&&((0,a.mf)(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".'))),(0,t.useEffect)((function(){null===e||void 0===e||e()}),[])}},79148:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(72791),a=function(e){return function(r,n){var a=(0,t.useRef)(!1);e((function(){return function(){a.current=!1}}),[]),e((function(){if(a.current)return r();a.current=!0}),n)}},o=a(t.useEffect)}}]);
//# sourceMappingURL=679.9d74c5d3.chunk.js.map