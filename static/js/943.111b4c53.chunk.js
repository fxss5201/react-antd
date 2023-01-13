"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[943],{89943:function(e,a,s){s.r(a),s.d(a,{default:function(){return V}});var r=s(29439),n=s(72791),i=s(3646),t=s(33168),o=s(29529),l=s(38999),c=s(58185),m=s(43263),u=s(43478),d=s(63254),f=s(67750),h=s(57689),g=s(11087),x=s(90263),Z=s(98946),p=s(43030),j=s(2703),v=s(88329),w=s(59434),y=s(13799),b=s(80184),N=function(e){e.activeKey;var a=(0,n.useState)(!1),s=(0,r.Z)(a,2),i=s[0],N=s[1],P=(0,x.Z)((0,j.hi)("loginInfo")),C=(0,r.Z)(P,2),I=C[0],k=C[1],F=c.Z.useForm(),V=(0,r.Z)(F,1)[0];(0,Z.Z)((function(){I&&V.setFieldsValue({username:I.username,password:(0,j.hX)(I.password),remember:I.remember})}));var S=(0,t.$)(),U=S.t,K=S.i18n;K.on("languageChanged",(function(e){i&&V.validateFields()})),(0,p.Z)((function(){K.off("languageChanged")}));var q=(0,w.I0)(),T=(0,h.s0)();return(0,b.jsxs)(c.Z,{initialValues:{remember:!0},form:V,onFinish:function(e){k({username:e.username,password:(0,j.XI)(e.password),remember:e.remember}),v.Z.set((0,j.hi)("accessToken"),"accessToken123",{expires:7}),q((0,y.ps)({name:"fxss"})),m.ZP.success(U("\u767b\u9646\u6210\u529f")),T("/"),console.log("Received values of form: ",e)},size:"large",name:"login",className:"w-80",children:[(0,b.jsx)(c.Z.Item,{name:"username",rules:[{required:!0,message:U("Please input your Username!")}],children:(0,b.jsx)(u.Z,{prefix:(0,b.jsx)(o.Z,{className:"text-gray-400"}),placeholder:U("Username"),allowClear:!0})}),(0,b.jsx)(c.Z.Item,{name:"password",rules:[{required:!0,message:U("Please input your Password!")}],children:(0,b.jsx)(u.Z.Password,{prefix:(0,b.jsx)(l.Z,{className:"text-gray-400"}),placeholder:U("Password"),allowClear:!0})}),(0,b.jsxs)(c.Z.Item,{children:[(0,b.jsx)(c.Z.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:(0,b.jsx)(d.Z,{children:U("Remember me")})}),(0,b.jsx)(g.rU,{className:"float-right a",to:"/login/password",children:U("Forgot password")})]}),(0,b.jsxs)(c.Z.Item,{children:[(0,b.jsx)(f.Z,{type:"primary",htmlType:"submit",className:"w-full",onClick:function(){return N(!0)},children:U("Log in")}),(0,b.jsxs)("div",{className:"mt-3",children:[U("Or")," ",(0,b.jsx)(g.rU,{to:"/login/register",className:"a",children:U("register now!")})]})]})]})},P=s(7123),C=s(50404),I=s(14447),k=s(40077),F=function(e){var a=e.activeKey,s=(0,n.useState)(!1),i=(0,r.Z)(s,2),o=i[0],l=i[1],m=c.Z.useForm(),d=(0,r.Z)(m,1)[0];(0,n.useEffect)((function(){S(void 0),y(!1)}),[d,a]);var h=(0,t.$)(),x=h.t,Z=h.i18n;Z.on("languageChanged",(function(e){o&&d.validateFields()})),(0,p.Z)((function(){Z.off("languageChanged")}));var j=(0,n.useState)(!1),v=(0,r.Z)(j,2),w=v[0],y=v[1],N=(0,n.useState)(),F=(0,r.Z)(N,2),V=F[0],S=F[1],U=(0,I.Z)({targetDate:V,onEnd:function(){y(!1)}}),K=(0,r.Z)(U,1)[0];return(0,b.jsxs)(c.Z,{initialValues:{remember:!0},form:d,onFinish:function(e){console.log("Received values of form: ",e)},size:"large",name:"login",className:"w-80",children:[(0,b.jsx)(c.Z.Item,{name:"Phone",rules:[{required:!0,message:x("Please input your Phone!")},{pattern:k.Z.phonePattern,message:x("Incorrect mobile number format!")}],children:(0,b.jsx)(u.Z,{prefix:(0,b.jsx)(P.Z,{className:"text-gray-400"}),placeholder:x("Phone"),allowClear:!0})}),(0,b.jsx)(c.Z.Item,{name:"Verification",rules:[{required:!0,message:x("Please input your Verification!")},{pattern:k.Z.verificationPattern,message:x("Incorrect format of verification number!")}],className:"flex-auto",children:(0,b.jsx)(u.Z,{prefix:(0,b.jsx)(C.Z,{className:"text-gray-400"}),placeholder:x("Verification"),addonAfter:w?"".concat(Math.round(K/1e3),"s"):(0,b.jsx)("div",{className:"cursor-pointer",onClick:function(){d.validateFields(["Phone"]).then((function(){S(Date.now()+6e4),y(!0)}))},children:x("Get verification code")}),allowClear:!0})}),(0,b.jsxs)(c.Z.Item,{children:[(0,b.jsx)(f.Z,{type:"primary",htmlType:"submit",className:"w-full",onClick:function(){return l(!0)},children:x("Log in")}),(0,b.jsxs)("div",{className:"mt-3 clearfix",children:[(0,b.jsx)(g.rU,{className:"float-left a",to:"/login/register",children:x("register now!")}),(0,b.jsx)(g.rU,{className:"float-right a",to:"/login/password",children:x("Forgot password")})]})]})]})},V=function(){var e=(0,t.$)().t,a=(0,n.useState)("1"),s=(0,r.Z)(a,2),o=s[0],l=s[1];return(0,b.jsx)(i.Z,{activeKey:o,size:"large",onChange:function(e){l(e)},centered:!0,items:[{label:e("Password Login"),key:"1",children:(0,b.jsx)(N,{activeKey:o})},{label:e("Verification login"),key:"2",children:(0,b.jsx)(F,{activeKey:o})}]})}}}]);
//# sourceMappingURL=943.111b4c53.chunk.js.map