"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[330],{94177:(n,a,t)=>{t.d(a,{Z:()=>s});var o=t(34663),c=t.n(o),r=t(7638),e=t.n(r)()(c());e.push([n.id,"/*\n\tName:       Panda Syntax\n\tAuthor:     Siamak Mokhtari (http://github.com/siamak/)\n\tCodeMirror template by Siamak Mokhtari (https://github.com/siamak/atom-panda-syntax)\n*/\n.cm-s-panda-syntax {\n\tbackground: #292A2B;\n\tcolor: #E6E6E6;\n\tline-height: 1.5;\n\tfont-family: 'Operator Mono', 'Source Code Pro', Menlo, Monaco, Consolas, Courier New, monospace;\n}\n.cm-s-panda-syntax .CodeMirror-cursor { border-color: #ff2c6d; }\n.cm-s-panda-syntax .CodeMirror-activeline-background {\n\tbackground: rgba(99, 123, 156, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-selected {\n\tbackground: #FFF;\n}\n.cm-s-panda-syntax .cm-comment {\n\tfont-style: italic;\n\tcolor: #676B79;\n}\n.cm-s-panda-syntax .cm-operator {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-string {\n\tcolor: #19F9D8;\n}\n.cm-s-panda-syntax .cm-string-2 {\n    color: #FFB86C;\n}\n\n.cm-s-panda-syntax .cm-tag {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-meta {\n\tcolor: #b084eb;\n}\n\n.cm-s-panda-syntax .cm-number {\n\tcolor: #FFB86C;\n}\n.cm-s-panda-syntax .cm-atom {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-keyword {\n\tcolor: #FF75B5;\n}\n.cm-s-panda-syntax .cm-variable {\n\tcolor: #ffb86c;\n}\n.cm-s-panda-syntax .cm-variable-2 {\n\tcolor: #ff9ac1;\n}\n.cm-s-panda-syntax .cm-variable-3, .cm-s-panda-syntax .cm-type {\n\tcolor: #ff9ac1;\n}\n\n.cm-s-panda-syntax .cm-def {\n\tcolor: #e6e6e6;\n}\n.cm-s-panda-syntax .cm-property {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-unit {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .cm-attribute {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .CodeMirror-matchingbracket {\n    border-bottom: 1px dotted #19F9D8;\n    padding-bottom: 2px;\n    color: #e6e6e6;\n}\n.cm-s-panda-syntax .CodeMirror-gutters {\n    background: #292a2b;\n    border-right-color: rgba(255, 255, 255, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-linenumber {\n    color: #e6e6e6;\n    opacity: 0.6;\n}\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/panda-syntax.css"],names:[],mappings:"AAAA;;;;CAIC;AACD;CACC,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,gGAAgG;AACjG;AACA,wCAAwC,qBAAqB,EAAE;AAC/D;CACC,mCAAmC;AACpC;AACA;CACC,gBAAgB;AACjB;AACA;CACC,kBAAkB;CAClB,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;IACI,cAAc;AAClB;;AAEA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,mBAAmB;IACnB,4CAA4C;AAChD;AACA;IACI,cAAc;IACd,YAAY;AAChB",sourcesContent:["/*\n\tName:       Panda Syntax\n\tAuthor:     Siamak Mokhtari (http://github.com/siamak/)\n\tCodeMirror template by Siamak Mokhtari (https://github.com/siamak/atom-panda-syntax)\n*/\n.cm-s-panda-syntax {\n\tbackground: #292A2B;\n\tcolor: #E6E6E6;\n\tline-height: 1.5;\n\tfont-family: 'Operator Mono', 'Source Code Pro', Menlo, Monaco, Consolas, Courier New, monospace;\n}\n.cm-s-panda-syntax .CodeMirror-cursor { border-color: #ff2c6d; }\n.cm-s-panda-syntax .CodeMirror-activeline-background {\n\tbackground: rgba(99, 123, 156, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-selected {\n\tbackground: #FFF;\n}\n.cm-s-panda-syntax .cm-comment {\n\tfont-style: italic;\n\tcolor: #676B79;\n}\n.cm-s-panda-syntax .cm-operator {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-string {\n\tcolor: #19F9D8;\n}\n.cm-s-panda-syntax .cm-string-2 {\n    color: #FFB86C;\n}\n\n.cm-s-panda-syntax .cm-tag {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-meta {\n\tcolor: #b084eb;\n}\n\n.cm-s-panda-syntax .cm-number {\n\tcolor: #FFB86C;\n}\n.cm-s-panda-syntax .cm-atom {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-keyword {\n\tcolor: #FF75B5;\n}\n.cm-s-panda-syntax .cm-variable {\n\tcolor: #ffb86c;\n}\n.cm-s-panda-syntax .cm-variable-2 {\n\tcolor: #ff9ac1;\n}\n.cm-s-panda-syntax .cm-variable-3, .cm-s-panda-syntax .cm-type {\n\tcolor: #ff9ac1;\n}\n\n.cm-s-panda-syntax .cm-def {\n\tcolor: #e6e6e6;\n}\n.cm-s-panda-syntax .cm-property {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-unit {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .cm-attribute {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .CodeMirror-matchingbracket {\n    border-bottom: 1px dotted #19F9D8;\n    padding-bottom: 2px;\n    color: #e6e6e6;\n}\n.cm-s-panda-syntax .CodeMirror-gutters {\n    background: #292a2b;\n    border-right-color: rgba(255, 255, 255, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-linenumber {\n    color: #e6e6e6;\n    opacity: 0.6;\n}\n"],sourceRoot:""}]);const s=e},7638:n=>{n.exports=function(n){var a=[];return a.toString=function(){return this.map((function(a){var t="",o=void 0!==a[5];return a[4]&&(t+="@supports (".concat(a[4],") {")),a[2]&&(t+="@media ".concat(a[2]," {")),o&&(t+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),t+=n(a),o&&(t+="}"),a[2]&&(t+="}"),a[4]&&(t+="}"),t})).join("")},a.i=function(n,t,o,c,r){"string"==typeof n&&(n=[[null,n,void 0]]);var e={};if(o)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(e[A]=!0)}for(var i=0;i<n.length;i++){var d=[].concat(n[i]);o&&e[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),c&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=c):d[4]="".concat(c)),a.push(d))}},a}},34663:n=>{n.exports=function(n){var a=n[1],t=n[3];if(!t)return a;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(c," */"),e=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[a].concat(e).concat([r]).join("\n")}return[a].join("\n")}},10330:(n,a,t)=>{t.r(a),t.d(a,{default:()=>y});var o=t(1892),c=t.n(o),r=t(95760),e=t.n(r),s=t(38311),A=t.n(s),i=t(58192),d=t.n(i),m=t(38060),C=t.n(m),p=t(54865),l=t.n(p),f=t(94177),u={};u.styleTagTransform=l(),u.setAttributes=d(),u.insert=A().bind(null,"head"),u.domAPI=e(),u.insertStyleElement=C(),c()(f.Z,u);const y=f.Z&&f.Z.locals?f.Z.locals:void 0},1892:n=>{var a=[];function t(n){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},e=[],s=0;s<n.length;s++){var A=n[s],i=o.base?A[0]+o.base:A[0],d=r[i]||0,m="".concat(i," ").concat(d);r[i]=d+1;var C=t(m),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==C)a[C].references++,a[C].updater(p);else{var l=c(p,o);o.byIndex=s,a.splice(s,0,{identifier:m,updater:l,references:1})}e.push(m)}return e}function c(n,a){var t=a.domAPI(a);return t.update(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap&&a.supports===n.supports&&a.layer===n.layer)return;t.update(n=a)}else t.remove()}}n.exports=function(n,c){var r=o(n=n||[],c=c||{});return function(n){n=n||[];for(var e=0;e<r.length;e++){var s=t(r[e]);a[s].references--}for(var A=o(n,c),i=0;i<r.length;i++){var d=t(r[i]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=A}}},38311:n=>{var a={};n.exports=function(n,t){var o=function(n){if(void 0===a[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}a[n]=t}return a[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},38060:n=>{n.exports=function(n){var a=document.createElement("style");return n.setAttributes(a,n.attributes),n.insert(a,n.options),a}},58192:(n,a,t)=>{n.exports=function(n){var a=t.nc;a&&n.setAttribute("nonce",a)}},95760:n=>{n.exports=function(n){var a=n.insertStyleElement(n);return{update:function(t){!function(n,a,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var c=void 0!==t.layer;c&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,c&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),a.styleTagTransform(o,n,a.options)}(a,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(a)}}}},54865:n=>{n.exports=function(n,a){if(a.styleSheet)a.styleSheet.cssText=n;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(n))}}}}]);
//# sourceMappingURL=330.126fa98.js.map