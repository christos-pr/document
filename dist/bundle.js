/*!
 * Image tool
 * 
 * @version 1.0.0
 * 
 * @package https://github.com/editor-js/image
 * @licence MIT
 * @author CodeX <https://codex.so>
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ImageTool=n():t.ImageTool=n()}(window,(function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=5)}([function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var o=e(6),i=e(7),a=e(8),r=e(9);t.exports=function(t){return o(t)||i(t)||a(t)||r()}},function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}},function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n,e){t.exports=e(14)},function(t,n,e){var o=e(3);t.exports=function(t){if(Array.isArray(t))return o(t)}},function(t,n){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,n,e){var o=e(3);t.exports=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,n,e){var o=e(11),i=e(12);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});t.exports=r},function(t,n,e){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),r=[];function c(t){for(var n=-1,e=0;e<r.length;e++)if(r[e].identifier===t){n=e;break}return n}function l(t,n){for(var e={},o=[],i=0;i<t.length;i++){var a=t[i],l=n.base?a[0]+n.base:a[0],s=e[l]||0,d="".concat(l," ").concat(s);e[l]=s+1;var u=c(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:d,updater:v(p,n),references:1}),o.push(d)}return o}function s(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var d,u=(d=[],function(t,n){return d[t]=n,d.filter(Boolean).join("\n")});function p(t,n,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(n,i);else{var a=document.createTextNode(i),r=t.childNodes;r[n]&&t.removeChild(r[n]),r.length?t.insertBefore(a,r[n]):t.appendChild(a)}}function h(t,n,e){var o=e.css,i=e.media,a=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var f=null,m=0;function v(t,n){var e,o,i;if(n.singleton){var a=m++;e=f||(f=s(n)),o=p.bind(null,e,a,!1),i=p.bind(null,e,a,!0)}else e=s(n),o=h.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=l(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var i=c(e[o]);r[i].references--}for(var a=l(t,n),s=0;s<e.length;s++){var d=c(e[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}e=a}}}},function(t,n,e){(n=e(13)(!1)).push([t.i,'.document-tool {\n  --bg-color: #ebf0f5;\n  --front-color: #388ae5;\n  --border-color: #d3dce6;\n}\n\n  .document-tool__document {\n    overflow: hidden;\n    margin-bottom: 8px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n  }\n\n  .document-tool__document-content {\n      border-radius: 3px;\n      border: 1px solid var(--border-color);\n      display: flex;\n      padding: 10px;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n\n  .document-tool__document-element {\n      width: 100px;\n      max-width: 100px;\n      display: block;\n    }\n\n  .document-tool__document-title {\n      padding-left: 0.5em;\n      display: block;\n      font-size: 14px;\n      margin-top: 6px;\n    }\n\n  .document-tool__document-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .document-tool__document-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: document-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .document-tool__caption {\n    font-size: 14px;\n    color: #2d3640;\n    height: 40px;\n    padding: 9px 10px;\n    box-shadow: none;\n    border-radius: 3px;\n    border: 1px solid #d3dde6;\n  }\n\n  .document-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute !important;\n      content: attr(data-placeholder);\n      color: #5c6b7a;\n      font-weight: normal;\n      display: none;\n      font-size: 14px;\n    }\n\n  .document-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .document-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .document-tool__caption:hover {\n      border-color: #0080ff;\n    }\n\n  .document-tool--empty .document-tool__document {\n      display: none;\n    }\n\n  .document-tool--empty .document-tool__caption, .document-tool--loading .document-tool__caption {\n      display: none;\n    }\n\n  .document-tool .cdx-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px dashed #d3dce6;\n    background-color: #f5f7fa;\n    border-radius: 6px;\n    padding: 38px;\n    color: #5c6b7a;\n    font-size: 14px;\n  }\n\n  .document-tool .cdx-button svg {\n      width: 20px;\n      height: 20px;\n      margin: 0 8px 0 0;\n    }\n\n  .document-tool .cdx-button svg path {\n        stroke: none;\n      }\n\n  .document-tool .cdx-button:hover {\n      color: #0080ff;\n    }\n\n  .document-tool .cdx-button:hover svg {\n        fill: #0080ff;\n      }\n\n  .document-tool .cdx-button:hover svg path {\n          fill: #0080ff;\n        }\n\n  .document-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .document-tool--filled .document-tool__document-preloader {\n        display: none;\n      }\n\n  .document-tool--loading .document-tool__document {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .document-tool--loading .document-tool__document-picture {\n        display: none;\n      }\n\n  .document-tool--loading .cdx-button {\n      display: none;\n    }\n\n  .document-tool--center .document-tool__document {\n      align-items: center;\n    }\n\n  .document-tool--right .document-tool__document {\n      align-items: flex-end;\n    }\n\n@keyframes document-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([i]).join("\n")}var r,c,l;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return m}));var o=e(2),i=e.n(o),a=e(4),r=e.n(a),c=e(1),l=e.n(c),s=e(0),d=e.n(s);e(10);function u(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=document.createElement(t);Array.isArray(e)?(n=a.classList).add.apply(n,i()(e)):e&&a.classList.add(e);for(var r in o)a[r]=o[r];return a}var p=function(){function t(n){var e=n.api,o=n.config,i=n.onSelectFile,a=n.readOnly;l()(this,t),this.api=e,this.config=o,this.onSelectFile=i,this.readOnly=a,this.nodes={wrapper:u("div",[this.CSS.baseClass,this.CSS.wrapper]),documentContainer:u("div",[this.CSS.documentContainer]),documentContent:u("div",[this.CSS.documentContent]),fileButton:this.createFileButton(),documentTitle:u("span",this.CSS.documentTitle),documentElement:void 0,documentPreloader:u("div",this.CSS.documentPreloader),caption:u("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.documentContent.appendChild(this.nodes.documentPreloader),this.nodes.documentContainer.appendChild(this.nodes.documentContent),this.nodes.wrapper.appendChild(this.nodes.documentContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}return d()(t,[{key:"render",value:function(n){return n.file&&0!==Object.keys(n.file).length?this.toggleStatus(t.status.UPLOADING):this.toggleStatus(t.status.EMPTY),this.nodes.wrapper}},{key:"createFileButton",value:function(){var t=this,n=u("div",[this.CSS.button]);return n.innerHTML=this.config.buttonContent||'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#5c6b7a" viewBox="0 0 256 256"><path d="M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H120a8,8,0,0,0,0,16h24V88a8,8,0,0,0,8,8h48v40a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"></path></svg> '.concat(this.api.i18n.t("Click to select a document file...")),n.addEventListener("click",(function(){t.onSelectFile()})),n}},{key:"showPreloader",value:function(n){this.nodes.documentPreloader.style.backgroundImage="url(".concat(n,")"),this.toggleStatus(t.status.UPLOADING)}},{key:"hidePreloader",value:function(){this.nodes.documentPreloader.style.backgroundImage="",this.toggleStatus(t.status.EMPTY)}},{key:"fillDocument",value:function(n){var e=this,o={doc:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M44,120H212.07a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152.05,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120Zm108-76,44,44h-44ZM52,144H36a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8H51.33C71,216,87.55,200.52,88,180.87A36,36,0,0,0,52,144Zm-.49,56H44V160h8a20,20,0,0,1,20,20.77C71.59,191.59,62.35,200,51.52,200Zm170.67-4.28a8.26,8.26,0,0,1-.73,11.09,30,30,0,0,1-21.4,9.19c-17.65,0-32-16.15-32-36s14.36-36,32-36a30,30,0,0,1,21.4,9.19,8.26,8.26,0,0,1,.73,11.09,8,8,0,0,1-11.9.38A14.21,14.21,0,0,0,200.06,160c-8.82,0-16,9-16,20s7.18,20,16,20a14.25,14.25,0,0,0,10.23-4.66A8,8,0,0,1,222.19,195.72ZM128,144c-17.65,0-32,16.15-32,36s14.37,36,32,36,32-16.15,32-36S145.69,144,128,144Zm0,56c-8.83,0-16-9-16-20s7.18-20,16-20,16,9,16,20S136.86,200,128,200Z'%3E%3C/path%3E%3C/svg%3E",docx:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M44,120H212.07a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152.05,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120Zm108-76,44,44h-44ZM52,144H36a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8H51.33C71,216,87.55,200.52,88,180.87A36,36,0,0,0,52,144Zm-.49,56H44V160h8a20,20,0,0,1,20,20.77C71.59,191.59,62.35,200,51.52,200Zm170.67-4.28a8.26,8.26,0,0,1-.73,11.09,30,30,0,0,1-21.4,9.19c-17.65,0-32-16.15-32-36s14.36-36,32-36a30,30,0,0,1,21.4,9.19,8.26,8.26,0,0,1,.73,11.09,8,8,0,0,1-11.9.38A14.21,14.21,0,0,0,200.06,160c-8.82,0-16,9-16,20s7.18,20,16,20a14.25,14.25,0,0,0,10.23-4.66A8,8,0,0,1,222.19,195.72ZM128,144c-17.65,0-32,16.15-32,36s14.37,36,32,36,32-16.15,32-36S145.69,144,128,144Zm0,56c-8.83,0-16-9-16-20s7.18-20,16-20,16,9,16,20S136.86,200,128,200Z'%3E%3C/path%3E%3C/svg%3E",eps:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M158.66,219.56A8,8,0,0,1,152,232H24a8,8,0,0,1-6.73-12.33l36-56a8,8,0,0,1,13.46,0l9.76,15.18,20.85-31.29a8,8,0,0,1,13.32,0ZM216,88V216a16,16,0,0,1-16,16h-8a8,8,0,0,1,0-16h8V96H152a8,8,0,0,1-8-8V40H56v88a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Z'%3E%3C/path%3E%3C/svg%3E",svg:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM87.82,196.31a20.82,20.82,0,0,1-9.19,15.23C73.44,215,67,216,61.14,216A61.23,61.23,0,0,1,46,214a8,8,0,0,1,4.3-15.41c4.38,1.2,14.95,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.55,20.55,0,0,1,9-14.95c11.84-8,30.72-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.48-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.11.9-.14,1.09,1.12,1.9,2.31,1.49,6.44,2.68,10.45,3.84C73.5,174.17,90.06,179,87.82,196.31Zm63.72-41.62-19.9,55.72a8.25,8.25,0,0,1-6.5,5.51,8,8,0,0,1-8.67-5.23L96.59,155a8.21,8.21,0,0,1,4.5-10.45,8,8,0,0,1,10.45,4.76L124,184.21l12.46-34.9a8,8,0,0,1,15.07,5.38ZM216,184v16.87a8,8,0,0,1-2.26,5.57A30,30,0,0,1,192,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a29.36,29.36,0,0,1,16.09,4.86,8.22,8.22,0,0,1,3,10.64,8,8,0,0,1-11.54,2.88A13.27,13.27,0,0,0,192,160c-8.82,0-16,9-16,20s7.18,20,16,20a13.38,13.38,0,0,0,8-2.71V192a8,8,0,0,1-8-8.53,8.18,8.18,0,0,1,8.26-7.47H208A8,8,0,0,1,216,184Z'%3E%3C/path%3E%3C/svg%3E",zip:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H92a4,4,0,0,0,4-4V208H88.27A8.17,8.17,0,0,1,80,200.53,8,8,0,0,1,88,192h8V176H88.27A8.17,8.17,0,0,1,80,168.53,8,8,0,0,1,88,160h8V144H88.27A8.17,8.17,0,0,1,80,136.53,8,8,0,0,1,88,128h8v-7.73a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v8h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v20a4,4,0,0,0,4,4h84a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z'%3E%3C/path%3E%3C/svg%3E",pdf:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152Zm72,108.53a8.18,8.18,0,0,1-8.25,7.47H192v16h15.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H192v15.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152.53ZM64,144H48a8,8,0,0,0-8,8v55.73A8.17,8.17,0,0,0,47.47,216,8,8,0,0,0,56,208v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,64,144Zm-.35,40H56V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,63.65,184ZM128,144H112a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h15.32c19.66,0,36.21-15.48,36.67-35.13A36,36,0,0,0,128,144Zm-.49,56H120V160h8a20,20,0,0,1,20,20.77C147.58,191.59,138.34,200,127.51,200Z'%3E%3C/path%3E%3C/svg%3E",document:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z'%3E%3C/path%3E%3C/svg%3E"};if(n.sizes&&n.sizes.medium&&n.sizes.medium.url){var i={src:n.sizes.medium.url,width:n.sizes.medium.width,height:n.sizes.medium.height};this.nodes.documentElement=u("img",[this.CSS.documentElement],i)}else{var a=o[n.content_type||"document"]||o.document;this.nodes.documentElement=u("img",[this.CSS.documentElement],{src:a})}this.nodes.documentTitle.innerHTML=n.title,this.nodes.documentElement.addEventListener("load",(function(){e.toggleStatus(t.status.FILLED),e.nodes.documentPreloader&&(e.nodes.documentPreloader.style.backgroundImage="")})),this.nodes.documentContent.appendChild(this.nodes.documentElement),this.nodes.documentContent.appendChild(this.nodes.documentTitle)}},{key:"fillCaption",value:function(t){this.nodes.caption&&(this.nodes.caption.innerHTML=t)}},{key:"toggleStatus",value:function(n){for(var e in t.status)Object.prototype.hasOwnProperty.call(t.status,e)&&this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(t.status[e]),n===t.status[e])}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"document-tool",documentContainer:"document-tool__document",documentContent:"document-tool__document-content",documentPreloader:"document-tool__document-preloader",documentTitle:"document-tool__document-title",documentElement:"document-tool__document-element",caption:"document-tool__caption"}}}],[{key:"status",get:function(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}}]),t}(),h=function(){function t(n){var e=n.config;n.onUpload,n.onError;l()(this,t),this.config=e}return d()(t,[{key:"uploadSelectedFile",value:function(t){var n=t.onPreview;null!=this.config.selectFiles&&"function"==typeof this.config.selectFiles&&(upload=this.config.selectFiles().then((function(){return n(""),{success:1,file:""}})))}}]),t}();function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}
/**
 * Document Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 3 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from media gallery component
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * document: {
 *   class: DocumentTool,
 *   config: {
 *     selectFiles: () => { }
 *   },
 * },
 */
var m=function(){function t(n){var e=this,o=n.data,i=n.config,a=n.api,c=n.readOnly;l()(this,t),this.api=a,this.readOnly=c,this.config={endpoints:i.endpoints||"",additionalRequestData:i.additionalRequestData||{},additionalRequestHeaders:i.additionalRequestHeaders||{},field:i.field||"document",types:i.types||"document/*",captionPlaceholder:this.api.i18n.t(i.captionPlaceholder||"Caption"),buttonContent:i.buttonContent||"",uploader:i.uploader||void 0,actions:i.actions||[],selectFiles:i.selectFiles||void 0},this.uploader=new h({config:this.config}),this.ui=new p({api:a,config:this.config,onSelectFile:function(){e.uploader.uploadSelectedFile({onPreview:function(t){e.ui.showPreloader(t)}})},readOnly:c}),this.aligns=[{name:"left",title:"Align left",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M85.282 500.778c3.357 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86Zm0-101.549c3.357 3.32 7.207 5.222 11.997 5.222h342.71c4.812 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.757-1.925-8.542-5.282-11.861-3.357-3.32-7.185-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.104-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-102.035c3.357 3.32 7.207 5.223 11.997 5.223h411.355c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861-3.358-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-101.57c3.357 3.341 7.207 5.223 11.997 5.223h308.645c4.32 0 8.639-1.882 11.996-5.222 3.358-3.32 4.79-7.104 4.79-11.861v-33.68c0-4.758-1.432-8.542-4.79-11.862-3.357-3.34-7.677-5.222-11.996-5.222H97.279c-4.79 0-8.64 1.882-11.997 5.222-3.357 3.32-5.282 7.104-5.282 11.861v33.68c0 4.758 1.925 8.542 5.282 11.862Z"/></svg>'},{name:"center",title:"Align center",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm-51 101c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.757 1.925 8.542 5.282 11.86 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86ZM525.721 336H114.366c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.358 3.32 7.207 5.223 11.997 5.223H525.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223Zm-52 102.021H165.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.862v33.68c0 4.757 1.432 8.542 4.79 11.86 3.357 3.341 7.677 5.223 11.996 5.223h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862-3.357-3.34-7.207-5.222-11.997-5.222Z"/></svg>'},{name:"right",title:"Align right",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm0 101.549c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.757 1.925 8.542 5.282 11.861 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.104 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 102.035c-3.357-3.32-7.207-5.223-11.997-5.223H131.366c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861 3.358 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 101.57c-3.357-3.341-7.207-5.223-11.997-5.223H234.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.861v33.68c0 4.758 1.432 8.542 4.79 11.862 3.357 3.34 7.677 5.222 11.996 5.222h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862Z"/></svg>'}],this._data={},this.data=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){r()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},o,{align:o&&o.align?o.align:t.DEFAULT_ALIGN_TYPE})}return d()(t,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{title:"Document",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#5c6b7a" viewBox="0 0 256 256"><path d="M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H120a8,8,0,0,0,0,16h24V88a8,8,0,0,0,8,8h48v40a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"></path></svg>'}}},{key:"DEFAULT_ALIGN_TYPE",get:function(){return"left"}}]),d()(t,[{key:"render",value:function(){return this.updateAlign(this.data.align),this.ui.render(this.data)}},{key:"validate",value:function(t){return t.file&&t.file.url}},{key:"save",value:function(){var t=this.ui.nodes.caption;return this._data.caption=t.innerHTML,this.data}},{key:"renderSettings",value:function(){var t=this,n=this.aligns.map((function(n){return{icon:n.icon,name:"align-".concat(n.name),label:n.title,toggle:"align",isActive:t.data.align===n.name,onActivate:function(){t.updateAlign(n.name)}}}));return i()(n)}},{key:"updateAlign",value:function(t){var n=this;this.data.align===t&&this.ui.nodes.wrapper.classList.contains("document-tool--".concat(t))||(this.data.align=t,this.aligns.forEach((function(t){n.ui.nodes.wrapper.classList.toggle("document-tool--".concat(t.name),n.data.align===t.name)})))}},{key:"appendCallback",value:function(){this.ui.nodes.fileButton.click()}},{key:"data",set:function(n){this.document=n.file,this._data.caption=n.caption||"",this._data.align=n.align||t.DEFAULT_ALIGN_TYPE,this.ui.fillCaption(this._data.caption)},get:function(){return this._data}},{key:"document",set:function(t){this._data.file=t||{},t&&t.url&&this.ui.fillDocument(t)}}]),t}()}]).default}));