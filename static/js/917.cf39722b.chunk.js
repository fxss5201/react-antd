"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[917],{73917:function(a,t,e){e.r(t);var n=e(29439),o=e(63263),i=e(42205),l=e(25714),d=e(72791),r=e(80184);function u(a,t){return o.Z.get("/api/usersList",{params:{page:a,pageSize:t}})}t.default=function(){var a,t,e=(0,d.useState)(1),o=(0,n.Z)(e,2),s=o[0],c=o[1],v=(0,d.useState)(10),h=(0,n.Z)(v,2),p=h[0],g=h[1],f=(0,i.Z)(u,{defaultParams:[s,p]}),x=f.data,m=void 0===x?{}:x,w=f.error,C=f.loading,S=f.run;return w?(0,r.jsx)("div",{children:"failed to load"}):(0,r.jsx)("div",{style:{height:"calc(100vh - 198px)"},children:(0,r.jsx)(l.Z,{loading:C,columns:[{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u5e74\u9f84",dataIndex:"age"},{title:"\u5730\u5740",dataIndex:"address"}],dataSource:(null===m||void 0===m||null===(a=m.data)||void 0===a?void 0:a.list)||[],pagination:{position:["bottomCenter"],total:(null===m||void 0===m||null===(t=m.data)||void 0===t?void 0:t.total)||0,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(a){var t;return"\u603b\u5171".concat((null===m||void 0===m||null===(t=m.data)||void 0===t?void 0:t.total)||0,"\u6761")},current:s,pageSize:p,onChange:function(a,t){c(a),g(t),S(a,t)}},scroll:{scrollToFirstRowOnChange:!0,y:"calc(100vh - 298px)"},bordered:!0})})}}}]);
//# sourceMappingURL=917.cf39722b.chunk.js.map