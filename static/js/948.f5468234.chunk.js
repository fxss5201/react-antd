"use strict";(self.webpackChunkreact_antd=self.webpackChunkreact_antd||[]).push([[948],{30948:function(e,t,r){r.d(t,{HH:function(){return T},h3:function(){return B}});var n,a=r(72791);function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function i(){}function u(e){return!!(e||"").match(/\d/)}function l(e){return null===e||void 0===e}function c(e){return"number"===typeof e&&isNaN(e)}function f(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function s(e,t){void 0===t&&(t=!0);var r="-"===e[0],n=r&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNegation:r,addNegation:n}}function v(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function d(e,t){return Array(t+1).join(e)}function g(e){var t=e+"",r="-"===t[0]?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(!(o=Number(o)))return r+a;var i=1+o,u=(a=a.replace(".","")).length;return i<0?a="0."+d("0",Math.abs(i))+a:i>=u?a+=d("0",i-u):a=(a.substring(0,i)||"0")+"."+a.substring(i),r+a}function m(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=(-1!==e.indexOf(".")||r)&&t,a=s(e),o=a.beforeDecimal,i=a.afterDecimal,u=a.hasNegation,l=parseFloat("0."+(i||"0")),c=(i.length<=t?"0."+i:l.toFixed(t)).split(".");return""+(u?"-":"")+o.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),c[0])+(n?".":"")+v(c[1]||"",t,r)}function p(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function h(e){return Math.max(e.selectionStart,e.selectionEnd)}function S(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function b(e,t){return void 0===e&&(e=" "),"string"===typeof e?e:e[t]||" "}function y(e,t,r,n){var a,o,i,u=e.length;if(a=t,o=0,i=u,t=Math.min(Math.max(a,o),i),"left"===n){for(;t>=0&&!r[t];)t--;-1===t&&(t=r.indexOf(!0))}else{for(;t<=u&&!r[t];)t++;t>u&&(t=r.lastIndexOf(!0))}return-1===t&&(t=u),t}function w(e){for(var t=Array.from({length:e.length+1}).map((function(){return!0})),r=0,n=t.length;r<n;r++)t[r]=Boolean(u(e[r])||u(e[r-1]));return t}function x(e,t,r,n,o,u){void 0===u&&(u=i);var f=(0,a.useRef)(),s=function(e){var t=(0,a.useRef)(e);t.current=e;var r=(0,a.useRef)((function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t.current.apply(t,e)}));return r.current}((function(e){var t,a;return l(e)||c(e)?(a="",t=""):"number"===typeof e||r?(a="number"===typeof e?g(e):e,t=n(a)):(a=o(e,void 0),t=e),{formattedValue:t,numAsString:a}})),v=(0,a.useState)((function(){return s(t)})),d=v[0],m=v[1];return(0,a.useMemo)((function(){l(e)?f.current=void 0:(f.current=s(e),m(f.current))}),[e,s]),[d,function(e,t){m({formattedValue:e.formattedValue,numAsString:e.value}),u(e,t)}]}function D(e){return e.replace(/[^0-9]/g,"")}function V(e){return e}function C(e){var t=e.type;void 0===t&&(t="text");var r=e.displayType;void 0===r&&(r="input");var l=e.customInput,c=e.renderText,f=e.getInputRef,s=e.format;void 0===s&&(s=V);var v=e.removeFormatting;void 0===v&&(v=D);var d=e.defaultValue,g=e.valueIsNumericString,m=e.onValueChange,S=e.isAllowed,b=e.onChange;void 0===b&&(b=i);var C=e.onKeyDown;void 0===C&&(C=i);var O=e.onMouseUp;void 0===O&&(O=i);var E=e.onFocus;void 0===E&&(E=i);var k=e.onBlur;void 0===k&&(k=i);var A=e.value,B=e.getCaretBoundary;void 0===B&&(B=w);var N=e.isValidInputCharacter;void 0===N&&(N=u);var T=o(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),j=x(A,d,Boolean(g),s,v,m),R=j[0],F=R.formattedValue,I=R.numAsString,M=j[1],K=(0,a.useRef)();(0,a.useEffect)((function(){var e=s(I);if(void 0===K.current||e!==K.current){var t=U.current,r=v(e,void 0);z({formattedValue:e,numAsString:r,input:t,setCaretPosition:!0,source:n.props,event:void 0})}}));var P=(0,a.useState)(!1),L=P[0],W=P[1],U=(0,a.useRef)(null),G=(0,a.useRef)({setCaretTimeout:null,focusTimeout:null});(0,a.useEffect)((function(){return W(!0),function(){clearTimeout(G.current.setCaretTimeout),clearTimeout(G.current.focusTimeout)}}),[]);var $=s,H=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},Z=function(e,t,r){p(e,t),G.current.setCaretTimeout=setTimeout((function(){e.value===r&&p(e,t)}),0)},_=function(e,t,r){return y(e,t,B(e),r)},q=function(e,t,r){var n=B(t),a=function(e,t,r,n,a,o){var i=a.findIndex((function(e){return e})),u=e.slice(0,i);t||r.startsWith(u)||(r=u+r,n+=u.length);for(var l=r.length,c=e.length,f={},s=new Array(l),v=0;v<l;v++){s[v]=-1;for(var d=0,g=c;d<g;d++)if(r[v]===e[d]&&!0!==f[d]){s[v]=d,f[d]=!0;break}}for(var m=n;m<l&&(-1===s[m]||!o(r[m]));)m++;var p=m===l||-1===s[m]?c:s[m];for(m=n-1;m>0&&-1===s[m];)m--;var h=-1===m||-1===s[m]?0:s[m]+1;return h>p?p:n-h<p-n?h:p}(t,F,e,r,n,N);return a=y(t,a,n)},z=function(e){var t=e.formattedValue;void 0===t&&(t="");var r=e.input,n=e.setCaretPosition;void 0===n&&(n=!0);var a=e.source,o=e.event,i=e.numAsString,u=e.caretPos;if(r){if(void 0===u&&n){var l=e.inputValue||r.value,c=h(r);r.value=t,u=q(l,t,c)}r.value=t,n&&void 0!==u&&Z(r,u,t)}t!==F&&function(e,t){K.current=e.formattedValue,M(e,t)}(H(t,i),{event:o,source:a})},J=!L||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",Q=Object.assign({inputMode:J},T,{type:t,value:F,onChange:function(e){var t=function(e,t,r){var n=function(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}}(F,e),a=Object.assign(Object.assign({},n),{lastValue:F}),o=v(e,a),i=$(o);if(o=v(i,void 0),S&&!S(H(i,o))){var u=t.target,l=h(u),c=q(e,F,l);return Z(u,c,F),!1}return z({formattedValue:i,numAsString:o,inputValue:e,event:t,source:r,setCaretPosition:!0,input:t.target}),!0}(e.target.value,e,n.event);t&&b(e)},onKeyDown:function(e){var t,r=e.target,n=e.key,a=r.selectionStart,o=r.selectionEnd,i=r.value;if(void 0===i&&(i=""),"ArrowLeft"===n||"Backspace"===n?t=Math.max(a-1,0):"ArrowRight"===n?t=Math.min(a+1,i.length):"Delete"===n&&(t=a),void 0!==t&&a===o){var u=t;if("ArrowLeft"===n||"ArrowRight"===n)u=_(i,t,"ArrowLeft"===n?"left":"right");else"Delete"!==n||N(i[t])?"Backspace"!==n||N(i[t])||(u=_(i,t,"left")):u=_(i,t,"right");u!==t&&Z(r,u,i),e.isUnitTestRun&&Z(r,u,i),C(e)}else C(e)},onMouseUp:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),r===n){var o=_(a,r);o!==r&&Z(t,o,a)}O(e)},onFocus:function(e){e.persist&&e.persist();var t=e.target;U.current=t,G.current.focusTimeout=setTimeout((function(){var r=t.selectionStart,n=t.selectionEnd,a=t.value;void 0===a&&(a="");var o=_(a,r);o===r||0===r&&n===a.length||Z(t,o,a),E(e)}),0)},onBlur:function(e){U.current=null,clearTimeout(G.current.focusTimeout),clearTimeout(G.current.setCaretTimeout),k(e)}});if("text"===r)return c?a.createElement(a.Fragment,null,c(F,T)||null):a.createElement("span",Object.assign({},T,{ref:f}),F);if(l){var X=l;return a.createElement(X,Object.assign({},Q,{ref:f}))}return a.createElement("input",Object.assign({},Q,{ref:f}))}function O(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;void 0===a&&(a="");var o=t.suffix;void 0===o&&(o="");var i=t.allowNegative;void 0===i&&(i=!0);var u=t.thousandsGroupStyle;if(void 0===u&&(u="thousand"),""===e||"-"===e)return e;var l=E(t),c=l.thousandSeparator,f=l.decimalSeparator,d=0!==r&&-1!==e.indexOf(".")||r&&n,g=s(e,i),m=g.beforeDecimal,p=g.afterDecimal,h=g.addNegation;return void 0!==r&&(p=v(p,r,!!n)),c&&(m=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}(m,c,u)),a&&(m=a+m),o&&(p+=o),h&&(m="-"+m),e=m+(d&&f||"")+p}function E(e){var t=e.decimalSeparator;void 0===t&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function k(e,t,r){void 0===t&&(t=S(e));var n=r.allowNegative;void 0===n&&(n=!0);var a=r.prefix;void 0===a&&(a="");var o=r.suffix;void 0===o&&(o="");var i=r.decimalScale,u=t.from,l=t.to,c=l.start,v=l.end,d=E(r),g=d.allowedDecimalSeparators,m=d.decimalSeparator,p=e[v]===m;if(v-c===1&&-1!==g.indexOf(e[c])){var h=0===i?"":m;e=e.substring(0,c)+h+e.substring(c+1,e.length)}var b=!1;a.startsWith("-")?b=e.startsWith("--"):o.startsWith("-")&&e.length===o.length?b=!1:"-"===e[0]&&(b=!0),b&&(e=e.substring(1),c-=1,v-=1);var y=0;e.startsWith(a)?y+=a.length:c<a.length&&(y=c),v-=y;var w=(e=e.substring(y)).length,x=e.length-o.length;e.endsWith(o)?w=x:v>e.length-o.length&&(w=v),e=e.substring(0,w),e=function(e,t){void 0===e&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),o=n.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}(b?"-"+e:e,n),e=(e.match(function(e,t){return new RegExp("(^-)|[0-9]|"+f(e),t?"g":void 0)}(m,!0))||[]).join("");var D=e.indexOf(m),V=s(e=e.replace(new RegExp(f(m),"g"),(function(e,t){return t===D?".":""})),n),C=V.beforeDecimal,O=V.afterDecimal,k=V.addNegation;return l.end-l.start<u.end-u.start&&""===C&&p&&!parseFloat(O)&&(e=k?"-":""),e}function A(e){var t=e.decimalSeparator;void 0===t&&(t=".");e.allowedDecimalSeparators,e.thousandsGroupStyle,e.suffix,e.allowNegative;var r=e.allowLeadingZeros,a=e.onKeyDown;void 0===a&&(a=i);var f=e.onBlur;void 0===f&&(f=i);var s=e.thousandSeparator,v=e.decimalScale,d=e.fixedDecimalScale,h=e.prefix;void 0===h&&(h="");var S=e.defaultValue,b=e.value,y=e.valueIsNumericString,w=e.onValueChange,D=o(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]);!function(e){var t=E(e),r=t.thousandSeparator,n=t.decimalSeparator;if(r===n)throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+n+" (default value for decimalSeparator is .)\n     ")}(e);var V=function(t){return O(t,e)},C=function(t,r){return k(t,r,e)},A=y;l(b)?l(S)||(A=null!==y&&void 0!==y?y:"number"===typeof S):A=null!==y&&void 0!==y?y:"number"===typeof b;var B=function(e){return l(e)||c(e)?e:("number"===typeof e&&(e=g(e)),A&&"number"===typeof v?m(e,v,Boolean(d)):e)},N=x(B(b),B(S),Boolean(A),V,C,w),T=N[0],j=T.numAsString,R=T.formattedValue,F=N[1];return Object.assign(Object.assign({},D),{value:R,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===t||u(e)},onValueChange:F,format:V,removeFormatting:C,getCaretBoundary:function(t){return function(e,t){var r=t.prefix;void 0===r&&(r="");var n=t.suffix;void 0===n&&(n="");var a=Array.from({length:e.length+1}).map((function(){return!0})),o="-"===e[0];a.fill(!1,0,r.length+(o?1:0));var i=e.length;return a.fill(!1,i-n.length+1,i+1),a}(t,e)},onKeyDown:function(t){var r=t.target,n=t.key,o=r.selectionStart,i=r.selectionEnd,u=r.value;if(void 0===u&&(u=""),o===i){"Backspace"===n&&"-"===u[0]&&o===h.length+1&&p(r,1);var l=E(e),c=l.decimalSeparator,f=l.allowedDecimalSeparators;"Backspace"===n&&u[o-1]===c&&v&&d&&(p(r,o-1),t.preventDefault()),(null===f||void 0===f?void 0:f.includes(n))&&u[o]===c&&p(r,o+1);var g=!0===s?",":s;"Backspace"===n&&u[o-1]===g&&p(r,o-1),"Delete"===n&&u[o]===g&&p(r,o+1),a(t)}else a(t)},onBlur:function(t){var a=j;if(a.match(/\d/g)||(a=""),r||(a=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}(a)),d&&v&&(a=m(a,v,d)),a!==j){var o=O(a,e);F({formattedValue:o,value:a,floatValue:parseFloat(a)},{event:t,source:n.event})}f(t)}})}function B(e){var t=A(e);return a.createElement(C,Object.assign({},t))}function N(e){e.mask,e.allowEmptyFormatting;var t=e.format,r=e.inputMode;void 0===r&&(r="numeric");var n=e.onKeyDown;void 0===n&&(n=i);var a=e.patternChar;void 0===a&&(a="#");var l=o(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar"]);!function(e){var t=e.mask;if(t&&("string"===t?t:t.toString()).match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}(e);var c=function(t){return function(e,t){var r=t.format,n=t.mask,a=t.patternChar;void 0===a&&(a="#");var o=Array.from({length:e.length+1}).map((function(){return!0})),i=0,u=-1,l={};r.split("").forEach((function(t,r){var o=void 0;t===a&&(i++,o=b(n,i-1),-1===u&&e[r]===o&&(u=r)),l[r]=o}));for(var c=function(t){return r[t]===a&&e[t]!==l[t]},f=0,s=o.length;f<s;f++)o[f]=f===u||c(f)||c(f-1);return o[r.indexOf(a)]=!0,o}(t,e)};return Object.assign(Object.assign({},l),{inputMode:r,format:function(t){return function(e,t){var r=t.format,n=t.allowEmptyFormatting,a=t.mask,o=t.patternChar;if(void 0===o&&(o="#"),""===e&&!n)return"";for(var i=0,u=r.split(""),l=0,c=r.length;l<c;l++)r[l]===o&&(u[l]=e[i]||b(a,i),i+=1);return u.join("")}(t,e)},removeFormatting:function(t,r){return function(e,t,r){void 0===t&&(t=S(e));var n=r.format,a=r.patternChar;void 0===a&&(a="#");var o=t.from,i=t.to,l=t.lastValue;void 0===l&&(l="");var c=function(e){return n[e]===a},f=function(e,t){for(var r="",n=0;n<e.length;n++)c(t+n)&&u(e[n])&&(r+=e[n]);return r},s=function(e){return e.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return s(e);if(""===l&&e.length===n.length){for(var v="",d=0;d<e.length;d++)if(c(d))u(e[d])&&(v+=e[d]);else if(e[d]!==n[d])return s(e);return v}var g=l.substring(0,o.start),m=e.substring(i.start,i.end),p=l.substring(o.end);return""+f(g,0)+s(m)+f(p,o.end)}(t,r,e)},getCaretBoundary:c,onKeyDown:function(e){var r=e.key,o=e.target,i=o.selectionStart,u=o.selectionEnd,l=o.value;if(i===u){var f=i;if("Backspace"===r||"Delete"===r){var s="right";if("Backspace"===r){for(;f>0&&t[f-1]!==a;)f--;s="left"}else{for(var v=t.length;f<v&&t[f]!==a;)f++;s="right"}f=y(l,f,c(l),s)}else t[f]!==a&&"ArrowLeft"!==r&&"ArrowRight"!==r&&(f=y(l,f+1,c(l),"right"));f!==i&&p(o,f),n(e)}else n(e)}})}function T(e){var t=N(e);return a.createElement(C,Object.assign({},t))}!function(e){e.event="event",e.props="prop"}(n||(n={}))}}]);
//# sourceMappingURL=948.f5468234.chunk.js.map