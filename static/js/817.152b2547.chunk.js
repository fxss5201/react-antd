"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[817],{13817:function(e,r,s){s.r(r);var a=s(1413),l=s(29439),o=s(72791),n=s(11087),t=s(39230),i=s(76032),c=s(91885),d=s(63254),u=s(67354),m=s(40077),p=s(43030),h=s(2703),f=s(80184),w={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},g={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};r.default=function(){var e=(0,h.RQ)(),r=(0,o.useState)(!1),s=(0,l.Z)(r,2),P=s[0],Z=s[1],x=i.Z.useForm(),j=(0,l.Z)(x,1)[0],y=(0,t.$G)(),v=y.t,C=y.i18n;C.on("languageChanged",(function(e){P&&j.validateFields()})),(0,p.Z)((function(){C.off("languageChanged")}));return(0,f.jsxs)(i.Z,(0,a.Z)((0,a.Z)({form:j},w),{},{name:"register",size:"large",onFinish:function(e){console.log("Received values of form: ",e)},scrollToFirstError:!0,style:{width:"450px"},children:[(0,f.jsx)(i.Z.Item,{name:"email",label:v("E-mail"),rules:[{type:"email",message:v("The input is not valid E-mail!")},{required:!0,message:v("Please input your E-mail!")}],children:(0,f.jsx)(c.Z,{placeholder:v("Please input your E-mail!"),allowClear:!0})}),(0,f.jsx)(i.Z.Item,{name:"Phone",label:v("Phone"),rules:[{required:!0,message:v("Please input your Phone!")},{pattern:m.Z.phonePattern,message:v("Incorrect phone number format!")}],children:(0,f.jsx)(c.Z,{placeholder:v("Please input your Phone!"),allowClear:!0})}),(0,f.jsx)(i.Z.Item,{name:"password",label:v("Password"),rules:[{required:!0,message:v("Please input your Password!")}],children:(0,f.jsx)(c.Z.Password,{placeholder:v("Please input your Password!"),allowClear:!0})}),(0,f.jsx)(i.Z.Item,{name:"confirm",label:v("Confirm Password"),dependencies:["password"],rules:[{required:!0,message:v("Please confirm your password!")},function(e){var r=e.getFieldValue;return{validator:function(e,s){return s&&r("password")!==s?Promise.reject(new Error(v("The two passwords that you entered do not match!"))):Promise.resolve()}}}],children:(0,f.jsx)(c.Z.Password,{placeholder:v("Please confirm your password!"),allowClear:!0})}),(0,f.jsx)(i.Z.Item,(0,a.Z)((0,a.Z)({name:"agreement",valuePropName:"checked"},g),{},{rules:[{validator:function(e,r){return r?Promise.resolve():Promise.reject(new Error(v("Should accept agreement")))}}],children:(0,f.jsxs)(d.Z,{children:[v("I have read the")," ",(0,f.jsx)(n.rU,{to:"",style:{color:e},children:v("agreement")})]})})),(0,f.jsxs)(i.Z.Item,(0,a.Z)((0,a.Z)({},g),{},{children:[(0,f.jsx)(u.ZP,{type:"primary",htmlType:"submit",onClick:function(){return Z(!0)},className:"w-full",children:v("Register")}),(0,f.jsxs)("div",{className:"mt-3 clearfix",children:[(0,f.jsx)(n.rU,{className:"float-left a",to:"/login",style:{color:e},children:v("Login!")}),(0,f.jsx)(n.rU,{className:"float-right a",to:"/login/password",style:{color:e},children:v("Forgot password")})]})]}))]}))}}}]);
//# sourceMappingURL=817.152b2547.chunk.js.map