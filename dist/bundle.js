/*!
 * Image tool
 * 
 * @version 1.0.0
 * 
 * @package https://github.com/editor-js/image
 * @licence MIT
 * @author CodeX <https://codex.so>
 */
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ImageTool=t():n.ImageTool=t()}(window,(function(){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/",e(e.s=4)}([function(n,t){function e(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}n.exports=function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}},function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}},function(n,t,e){var o=e(9),i=e(10),r=e(11),a=e(12);n.exports=function(n){return o(n)||i(n)||r(n)||a()}},function(n,t,e){n.exports=e(13)},function(n,t,e){var o=e(6),i=e(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1},a=(o(i,r),i.locals?i.locals:{});n.exports=a},function(n,t,e){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function l(n,t){for(var e={},o=[],i=0;i<n.length;i++){var r=n[i],l=t.base?r[0]+t.base:r[0],d=e[l]||0,u="".concat(l," ").concat(d);e[l]=d+1;var s=c(u),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==s?(a[s].references++,a[s].updater(p)):a.push({identifier:u,updater:v(p,t),references:1}),o.push(u)}return o}function d(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,s=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function p(n,t,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=s(t,i);else{var r=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}function f(n,t,e){var o=e.css,i=e.media,r=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var h=null,m=0;function v(n,t){var e,o,i;if(t.singleton){var r=m++;e=h||(h=d(t)),o=p.bind(null,e,r,!1),i=p.bind(null,e,r,!0)}else e=d(t),o=f.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var e=l(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var i=c(e[o]);a[i].references--}for(var r=l(n,t),d=0;d<e.length;d++){var u=c(e[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=r}}}},function(n,t,e){(t=e(8)(!1)).push([n.i,'.document-tool {\n  --bg-color: #ebf0f5;\n  --front-color: #388ae5;\n  --border-color: #d3dce6;\n}\n\n  .document-tool__document {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 8px;\n    border: 1px solid var(--border-color);\n  }\n\n  .document-tool__document-element {\n      width: 64px;\n      max-width: 64px;\n      display: block;\n    }\n\n  .document-tool__document-title {\n      padding-left: 0.5em;\n      display: block;\n    }\n\n  .document-tool__document-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .document-tool__document-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: document-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .document-tool__caption {\n    font-size: 14px;\n    color: #2d3640;\n    height: 40px;\n    padding: 9px 10px;\n    box-shadow: none;\n    border-radius: 3px;\n    border: 1px solid #d3dde6;\n  }\n\n  .document-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute !important;\n      content: attr(data-placeholder);\n      color: #5c6b7a;\n      font-weight: normal;\n      display: none;\n      font-size: 14px;\n    }\n\n  .document-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .document-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .document-tool__caption:hover {\n      border-color: #0080ff;\n    }\n\n  .document-tool--empty .document-tool__document {\n      display: none;\n    }\n\n  .document-tool--empty .document-tool__caption, .document-tool--loading .document-tool__caption {\n      display: none;\n    }\n\n  .document-tool .cdx-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px dashed #d3dce6;\n    background-color: #f5f7fa;\n    border-radius: 6px;\n    padding: 38px;\n    color: #5c6b7a;\n    font-size: 14px;\n  }\n\n  .document-tool .cdx-button svg {\n      width: 20px;\n      height: 20px;\n      margin: 0 8px 0 0;\n    }\n\n  .document-tool .cdx-button svg path {\n        stroke: none;\n      }\n\n  .document-tool .cdx-button:hover {\n      color: #0080ff;\n    }\n\n  .document-tool .cdx-button:hover svg {\n        fill: #0080ff;\n      }\n\n  .document-tool .cdx-button:hover svg path {\n          fill: #0080ff;\n        }\n\n  .document-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .document-tool--filled .document-tool__document-preloader {\n        display: none;\n      }\n\n  .document-tool--loading .document-tool__document {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .document-tool--loading .document-tool__document-picture {\n        display: none;\n      }\n\n  .document-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .document-tool--withBorder .document-tool__document-picture {\n      border: 1px solid var(--border-color);\n    }\n\n  .document-tool--withBackground .document-tool__document {\n      padding: 24px;\n      background: var(--bg-color);\n    }\n\n  .document-tool--withBackground .document-tool__document-picture {\n        max-width: 80%;\n        margin: 0 auto;\n      }\n\n  .document-tool--stretched .document-tool__document {\n      margin-left: -56px;\n      margin-right: -56px;\n    }\n\n  .document-tool--stretched .document-tool__document-caption {\n        margin-left: 56px;\n        margin-right: 56px;\n      }\n\n@keyframes document-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),r=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(r).concat([i]).join("\n")}var a,c,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},function(n,t,e){var o=e(2);n.exports=function(n){if(Array.isArray(n))return o(n)}},function(n,t){n.exports=function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},function(n,t,e){var o=e(2);n.exports=function(n,t){if(n){if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}},function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return p}));var o=e(1),i=e.n(o),r=e(0),a=e.n(r),c=(e(5),e(3)),l=e.n(c);function d(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(n);Array.isArray(e)?(t=i.classList).add.apply(t,l()(e)):e&&i.classList.add(e);for(var r in o)i[r]=o[r];return i}var u=function(){function n(t){var e=t.api,o=t.config,r=t.onSelectFile,a=t.readOnly;i()(this,n),this.api=e,this.config=o,this.onSelectFile=r,this.readOnly=a,this.nodes={wrapper:d("div",[this.CSS.baseClass,this.CSS.wrapper]),documentContainer:d("div",[this.CSS.documentContainer]),fileButton:this.createFileButton(),documentTitle:d("span",this.CSS.documentTitle),documentElement:void 0,documentPreloader:d("div",this.CSS.documentPreloader),caption:d("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.documentContainer.appendChild(this.nodes.documentPreloader),this.nodes.wrapper.appendChild(this.nodes.documentContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}return a()(n,[{key:"render",value:function(t){return t.file&&0!==Object.keys(t.file).length?this.toggleStatus(n.status.UPLOADING):this.toggleStatus(n.status.EMPTY),this.nodes.wrapper}},{key:"createFileButton",value:function(){var n=this,t=d("div",[this.CSS.button]);return t.innerHTML=this.config.buttonContent||'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#5c6b7a" viewBox="0 0 256 256"><path d="M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H120a8,8,0,0,0,0,16h24V88a8,8,0,0,0,8,8h48v40a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"></path></svg> '.concat(this.api.i18n.t("Click to select a document file...")),t.addEventListener("click",(function(){n.onSelectFile()})),t}},{key:"showPreloader",value:function(t){this.nodes.documentPreloader.style.backgroundImage="url(".concat(t,")"),this.toggleStatus(n.status.UPLOADING)}},{key:"hidePreloader",value:function(){this.nodes.documentPreloader.style.backgroundImage="",this.toggleStatus(n.status.EMPTY)}},{key:"fillDocument",value:function(t){var e=this;this.nodes.documentElement=d("IMG",this.CSS.documentElement,{src:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%235c6b7a%22%20viewBox%3D%220%200%20256%20256%22%3E%3Cpath%20d%3D%22M80%2C224a8%2C8%2C0%2C0%2C1-8%2C8H56a16%2C16%2C0%2C0%2C1-16-16V184a8%2C8%2C0%2C0%2C1%2C16%2C0v32H72A8%2C8%2C0%2C0%2C1%2C80%2C224ZM213.66%2C82.34l-56-56A8%2C8%2C0%2C0%2C0%2C152%2C24H120a8%2C8%2C0%2C0%2C0%2C0%2C16h24V88a8%2C8%2C0%2C0%2C0%2C8%2C8h48v40a8%2C8%2C0%2C0%2C0%2C16%2C0V88A8%2C8%2C0%2C0%2C0%2C213.66%2C82.34ZM80%2C24H56A16%2C16%2C0%2C0%2C0%2C40%2C40V64a8%2C8%2C0%2C0%2C0%2C16%2C0V40H80a8%2C8%2C0%2C0%2C0%2C0-16ZM208%2C168a8%2C8%2C0%2C0%2C0-8%2C8v40h-8a8%2C8%2C0%2C0%2C0%2C0%2C16h8a16%2C16%2C0%2C0%2C0%2C16-16V176A8%2C8%2C0%2C0%2C0%2C208%2C168ZM48%2C152a8%2C8%2C0%2C0%2C0%2C8-8V104a8%2C8%2C0%2C0%2C0-16%2C0v40A8%2C8%2C0%2C0%2C0%2C48%2C152Zm104%2C64H112a8%2C8%2C0%2C0%2C0%2C0%2C16h40a8%2C8%2C0%2C0%2C0%2C0-16Z%22%2F%3E%3C%2Fsvg%3E"}),this.nodes.documentTitle.innerHTML=t.title,this.nodes.documentElement.addEventListener("load",(function(){e.toggleStatus(n.status.FILLED),e.nodes.documentPreloader&&(e.nodes.documentPreloader.style.backgroundImage="")})),this.nodes.documentContainer.appendChild(this.nodes.documentElement),this.nodes.documentContainer.appendChild(this.nodes.documentTitle)}},{key:"fillCaption",value:function(n){this.nodes.caption&&(this.nodes.caption.innerHTML=n)}},{key:"toggleStatus",value:function(t){for(var e in n.status)Object.prototype.hasOwnProperty.call(n.status,e)&&this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(n.status[e]),t===n.status[e])}},{key:"applyTune",value:function(n,t){this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(n),t)}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"document-tool",documentContainer:"document-tool__document",documentPreloader:"document-tool__document-preloader",documentTitle:"document-tool__document-title",documentElement:"document-tool__document-element",caption:"document-tool__caption"}}}],[{key:"status",get:function(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}}]),n}(),s=function(){function n(t){var e=t.config;t.onUpload,t.onError;i()(this,n),this.config=e}return a()(n,[{key:"uploadSelectedFile",value:function(n){var t=n.onPreview;null!=this.config.selectFiles&&"function"==typeof this.config.selectFiles&&(upload=this.config.selectFiles().then((function(){return t(""),{success:1,file:""}})))}}]),n}(),p=function(){function n(t){var e=this,o=t.data,r=t.config,a=t.api,c=t.readOnly;i()(this,n),this.api=a,this.readOnly=c,this.config={endpoints:r.endpoints||"",additionalRequestData:r.additionalRequestData||{},additionalRequestHeaders:r.additionalRequestHeaders||{},field:r.field||"document",types:r.types||"document/*",captionPlaceholder:this.api.i18n.t(r.captionPlaceholder||"Caption"),buttonContent:r.buttonContent||"",uploader:r.uploader||void 0,actions:r.actions||[],selectFiles:r.selectFiles||void 0},this.uploader=new s({config:this.config}),this.ui=new u({api:a,config:this.config,onSelectFile:function(){e.uploader.uploadSelectedFile({onPreview:function(n){e.ui.showPreloader(n)}})},readOnly:c}),this._data={},this.data=o}return a()(n,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{title:"Document",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#5c6b7a" viewBox="0 0 256 256"><path d="M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H120a8,8,0,0,0,0,16h24V88a8,8,0,0,0,8,8h48v40a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"></path></svg>'}}},{key:"tunes",get:function(){return[{name:"stretched",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M1 160h640v320H1V160Zm120-80h400v20H121V80Zm0 460h400v20H121v-20Z"/></svg>',title:"Stretch document",toggle:!0},{name:"withBackground",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M181 200h280v240H181V200ZM81 120h480v20H81v-20Zm0 380h480v20H81v-20Z"/></svg>',title:"With background",toggle:!0},{name:"withBorder",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><rect width="512" height="409" x="64" y="115" fill="none" fill-rule="evenodd" stroke="#5C6B7A" stroke-linecap="round" stroke-width="34" rx="40"/></svg>',title:"With border",toggle:!0}]}}]),a()(n,[{key:"render",value:function(){return this.ui.render(this.data)}},{key:"validate",value:function(n){return n.file&&n.file.url}},{key:"save",value:function(){var n=this.ui.nodes.caption;return this._data.caption=n.innerHTML,this.data}},{key:"renderSettings",value:function(){var t=this;return n.tunes.concat(this.config.actions).map((function(n){return{icon:n.icon,label:t.api.i18n.t(n.title),name:n.name,toggle:n.toggle,isActive:t.data[n.name],onActivate:function(){"function"!=typeof n.action?t.tuneToggled(n.name):n.action(n.name)}}}))}},{key:"appendCallback",value:function(){this.ui.nodes.fileButton.click()}},{key:"tuneToggled",value:function(n){this.setTune(n,!this._data[n])}},{key:"setTune",value:function(n,t){var e=this;this._data[n]=t,this.ui.applyTune(n,t),"stretched"===n&&Promise.resolve().then((function(){var n=e.api.blocks.getCurrentBlockIndex();e.api.blocks.stretchBlock(n,t)})).catch((function(n){console.error(n)}))}},{key:"data",set:function(t){var e=this;this.document=t.file,this._data.caption=t.caption||"",this.ui.fillCaption(this._data.caption),n.tunes.forEach((function(n){var o=n.name,i=void 0!==t[o]&&(!0===t[o]||"true"===t[o]);e.setTune(o,i)}))},get:function(){return this._data}},{key:"document",set:function(n){this._data.file=n||{},n&&n.url&&this.ui.fillDocument(n)}}]),n}()}]).default}));