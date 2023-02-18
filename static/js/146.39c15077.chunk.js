"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[146],{87146:function(e,r,n){n.r(r),n.d(r,{default:function(){return q}});var a=n(29439),t=n(72791),i=n(83574),l=n(39230),o=n(29529),s=n(38999),c=n(70737),u=n(76032),d=n(77027),m=n(64910),f=n(32014),v=n(87309),h=n(57689),g=n(11087),Z=n(80736),x=n(98946),p=n(43030),y=n(2703),j=n(88329),w=n(59434),b=n(13799),N=n(80184),I=c.Z.useToken,P=function(e){e.activeKey;var r=I().token.colorPrimary,n=(0,t.useState)(!1),i=(0,a.Z)(n,2),c=i[0],P=i[1],C=(0,Z.Z)((0,y.hi)("loginInfo")),k=(0,a.Z)(C,2),V=k[0],z=k[1],M=u.Z.useForm(),S=(0,a.Z)(M,1)[0];(0,x.Z)((function(){V&&S.setFieldsValue({username:V.username,password:(0,y.hX)(V.password),remember:V.remember})}));var F=(0,l.$G)(),L=F.t,T=F.i18n;T.on("languageChanged",(function(e){c&&S.validateFields()})),(0,p.Z)((function(){T.off("languageChanged")}));var E=(0,w.I0)(),O=(0,h.s0)();return(0,N.jsxs)(u.Z,{initialValues:{remember:!0},form:S,onFinish:function(e){z({username:e.username,password:(0,y.XI)(e.password),remember:e.remember});var r=[];"normal"===e.username?r=["normal"]:"middle"===e.username?r=["middle"]:"admin"===e.username&&(r=["normal","middle","admin"]),j.Z.set((0,y.hi)("accessToken"),e.username,{expires:7}),E((0,b.ps)({name:e.username,header:"https://avatars.githubusercontent.com/u/21698289?s=48&v=4",access:r})),d.ZP.success(L("\u767b\u9646\u6210\u529f")),O("/"),console.log("Received values of form: ",e)},size:"large",name:"login",className:"w-80",children:[(0,N.jsx)(u.Z.Item,{name:"username",rules:[{required:!0,message:L("Please input your Username!")}],children:(0,N.jsx)(m.Z,{prefix:(0,N.jsx)(o.Z,{className:"text-gray-400"}),placeholder:L("Username"),allowClear:!0})}),(0,N.jsx)(u.Z.Item,{name:"password",rules:[{required:!0,message:L("Please input your Password!")}],children:(0,N.jsx)(m.Z.Password,{prefix:(0,N.jsx)(s.Z,{className:"text-gray-400"}),placeholder:L("Password"),allowClear:!0})}),(0,N.jsxs)(u.Z.Item,{children:[(0,N.jsx)(u.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,N.jsx)(f.Z,{children:L("Remember me")})}),(0,N.jsx)(g.rU,{className:"float-right a",to:"/login/password",style:{color:r},children:L("Forgot password")})]}),(0,N.jsxs)(u.Z.Item,{children:[(0,N.jsx)(v.ZP,{type:"primary",htmlType:"submit",className:"w-full",onClick:function(){return P(!0)},children:L("Log in")}),(0,N.jsxs)("div",{className:"mt-3",children:[L("Or")," ",(0,N.jsx)(g.rU,{to:"/login/register",className:"a",style:{color:r},children:L("register now!")})]})]}),(0,N.jsx)(u.Z.Item,{children:(0,N.jsxs)("ul",{style:{listStyle:"decimal",paddingLeft:"14px"},children:[(0,N.jsx)("li",{children:"\u8d26\u53f7normal\uff0c\u5bc6\u7801\u968f\u610f\uff0c\u5bf9\u5e94\u7684\u662fnormal\u6743\u9650"}),(0,N.jsx)("li",{children:"\u8d26\u53f7middle\uff0c\u5bc6\u7801\u968f\u610f\uff0c\u5bf9\u5e94\u7684\u662fmiddle\u6743\u9650"}),(0,N.jsx)("li",{children:"\u8d26\u53f7admin\uff0c\u5bc6\u7801\u968f\u610f\uff0c\u5bf9\u5e94\u7684\u662fadmin\u6743\u9650\uff08\u62e5\u6709normal\u548cmiddle\u6743\u9650\uff09"}),(0,N.jsx)("li",{children:"\u8d26\u53f7\u968f\u610f \uff0c\u5bc6\u7801\u968f\u610f\uff0c\u5bf9\u5e94\u7684\u4ec5\u662frequiresAuth: true\u7684\u9875\u9762"})]})})]})},C=n(1413),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},V=n(8711),z=function(e,r){return t.createElement(V.Z,(0,C.Z)((0,C.Z)({},e),{},{ref:r,icon:k}))};z.displayName="MobileOutlined";var M=t.forwardRef(z),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"}}]},name:"safety-certificate",theme:"outlined"},F=function(e,r){return t.createElement(V.Z,(0,C.Z)((0,C.Z)({},e),{},{ref:r,icon:S}))};F.displayName="SafetyCertificateOutlined";var L=t.forwardRef(F),T=n(14447),E=n(40077),O=c.Z.useToken,U=function(e){var r=e.activeKey,n=O().token.colorPrimary,i=(0,t.useState)(!1),o=(0,a.Z)(i,2),s=o[0],c=o[1],d=u.Z.useForm(),f=(0,a.Z)(d,1)[0];(0,t.useEffect)((function(){k(void 0),b(!1)}),[f,r]);var h=(0,l.$G)(),Z=h.t,x=h.i18n;x.on("languageChanged",(function(e){s&&f.validateFields()})),(0,p.Z)((function(){x.off("languageChanged")}));var y=(0,t.useState)(!1),j=(0,a.Z)(y,2),w=j[0],b=j[1],I=(0,t.useState)(),P=(0,a.Z)(I,2),C=P[0],k=P[1],V=(0,T.Z)({targetDate:C,onEnd:function(){b(!1)}}),z=(0,a.Z)(V,1)[0];return(0,N.jsxs)(u.Z,{initialValues:{remember:!0},form:f,onFinish:function(e){console.log("Received values of form: ",e)},size:"large",name:"login",className:"w-80",children:[(0,N.jsx)(u.Z.Item,{name:"Phone",rules:[{required:!0,message:Z("Please input your Phone!")},{pattern:E.Z.phonePattern,message:Z("Incorrect mobile number format!")}],children:(0,N.jsx)(m.Z,{prefix:(0,N.jsx)(M,{className:"text-gray-400"}),placeholder:Z("Phone"),allowClear:!0})}),(0,N.jsx)(u.Z.Item,{name:"Verification",rules:[{required:!0,message:Z("Please input your Verification!")},{pattern:E.Z.verificationPattern,message:Z("Incorrect format of verification number!")}],className:"flex-auto",children:(0,N.jsx)(m.Z,{prefix:(0,N.jsx)(L,{className:"text-gray-400"}),placeholder:Z("Verification"),addonAfter:w?"".concat(Math.round(z/1e3),"s"):(0,N.jsx)("div",{className:"cursor-pointer",onClick:function(){f.validateFields(["Phone"]).then((function(){k(Date.now()+6e4),b(!0)}))},children:Z("Get verification code")}),allowClear:!0})}),(0,N.jsxs)(u.Z.Item,{children:[(0,N.jsx)(v.ZP,{type:"primary",htmlType:"submit",className:"w-full",onClick:function(){return c(!0)},children:Z("Log in")}),(0,N.jsxs)("div",{className:"mt-3 clearfix",children:[(0,N.jsx)(g.rU,{className:"float-left a",to:"/login/register",style:{color:n},children:Z("register now!")}),(0,N.jsx)(g.rU,{className:"float-right a",to:"/login/password",style:{color:n},children:Z("Forgot password")})]})]})]})},q=function(){var e=(0,l.$G)().t,r=(0,t.useState)("1"),n=(0,a.Z)(r,2),o=n[0],s=n[1];return(0,N.jsx)(i.Z,{activeKey:o,size:"large",onChange:function(e){s(e)},centered:!0,items:[{label:e("Password Login"),key:"1",children:(0,N.jsx)(P,{activeKey:o})},{label:e("Verification login"),key:"2",children:(0,N.jsx)(U,{activeKey:o})}]})}},14447:function(e,r,n){var a=n(29439),t=n(97892),i=n.n(t),l=n(72791),o=n(45362),s=n(667),c=function(e){if(!e)return 0;var r=i()(e).valueOf()-Date.now();return r<0?0:r},u=function(e){return{days:Math.floor(e/864e5),hours:Math.floor(e/36e5)%24,minutes:Math.floor(e/6e4)%60,seconds:Math.floor(e/1e3)%60,milliseconds:Math.floor(e)%1e3}};r.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e||{},n=r.leftTime,t=r.targetDate,i=r.interval,d=void 0===i?1e3:i,m=r.onEnd,f=(0,l.useMemo)((function(){return"leftTime"in e?(0,s.hj)(n)&&n>0?Date.now()+n:void 0:t}),[n,t]),v=(0,l.useState)((function(){return c(f)})),h=(0,a.Z)(v,2),g=h[0],Z=h[1],x=(0,o.Z)(m);(0,l.useEffect)((function(){if(f){Z(c(f));var e=setInterval((function(){var r,n=c(f);Z(n),0===n&&(clearInterval(e),null===(r=x.current)||void 0===r||r.call(x))}),d);return function(){return clearInterval(e)}}Z(0)}),[f,d]);var p=(0,l.useMemo)((function(){return u(g)}),[g]);return[g,p]}},80736:function(e,r,n){n.d(r,{Z:function(){return u}});var a=n(29439),t=n(72791),i=n(95099),l=n(79148),o=n(667);var s,c=n(1226),u=(s=function(){return c.Z?localStorage:void 0},function(e,r){var n;try{n=s()}catch(h){console.error(h)}var c=function(e){return(null===r||void 0===r?void 0:r.deserializer)?null===r||void 0===r?void 0:r.deserializer(e):JSON.parse(e)};function u(){try{var a=null===n||void 0===n?void 0:n.getItem(e);if(a)return c(a)}catch(t){console.error(t)}return(0,o.mf)(null===r||void 0===r?void 0:r.defaultValue)?null===r||void 0===r?void 0:r.defaultValue():null===r||void 0===r?void 0:r.defaultValue}var d=(0,t.useState)((function(){return u()})),m=(0,a.Z)(d,2),f=m[0],v=m[1];return(0,l.Z)((function(){v(u())}),[e]),[f,(0,i.Z)((function(a){var t=(0,o.mf)(a)?a(f):a;if(v(t),(0,o.G7)(t))null===n||void 0===n||n.removeItem(e);else try{null===n||void 0===n||n.setItem(e,function(e){return(null===r||void 0===r?void 0:r.serializer)?null===r||void 0===r?void 0:r.serializer(e):JSON.stringify(e)}(t))}catch(i){console.error(i)}}))]})}}]);
//# sourceMappingURL=146.39c15077.chunk.js.map