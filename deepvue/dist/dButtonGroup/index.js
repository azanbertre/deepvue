/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.dButtonGroup=t(require("vue")):e.dButtonGroup=t(e.Vue)}("undefined"!=typeof self?self:this,(function(e){return function(){"use strict";var t={976:function(t){t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};return function(){function e(t,r){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e(t,r)}function t(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,e(t,r)}n.d(o,{default:function(){return W}});var r=n(976),i=n.n(r);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function f(e,t){p(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(r){p(e.prototype,t.prototype,r)})),Object.getOwnPropertyNames(t).forEach((function(r){p(e,t,r)}))}function p(e,t,r){(r?Reflect.getOwnMetadataKeys(t,r):Reflect.getOwnMetadataKeys(t)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,t,r):Reflect.getOwnMetadata(n,t);r?Reflect.defineMetadata(n,o,e,r):Reflect.defineMetadata(n,o,e)}))}var d={__proto__:[]}instanceof Array;function s(e,t){var r=t.prototype._init;t.prototype._init=function(){var t=this,r=Object.getOwnPropertyNames(e);if(e.$options.props)for(var n in e.$options.props)e.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){e[r]=t},configurable:!0})}))};var n=new t;t.prototype._init=r;var o={};return Object.keys(n).forEach((function(e){void 0!==n[e]&&(o[e]=n[e])})),o}var y=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var r=e.prototype;Object.getOwnPropertyNames(r).forEach((function(e){if("constructor"!==e)if(y.indexOf(e)>-1)t[e]=r[e];else{var n=Object.getOwnPropertyDescriptor(r,e);void 0!==n.value?"function"==typeof n.value?(t.methods||(t.methods={}))[e]=n.value:(t.mixins||(t.mixins=[])).push({data:function(){return u({},e,n.value)}}):(n.get||n.set)&&((t.computed||(t.computed={}))[e]={get:n.get,set:n.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return s(this,e)}});var n=e.__decorators__;n&&(n.forEach((function(e){return e(t)})),delete e.__decorators__);var o=Object.getPrototypeOf(e.prototype),a=o instanceof i()?o.constructor:i(),c=a.extend(t);return g(c,e,a),l()&&f(c,e),c}var v={prototype:!0,arguments:!0,callee:!0,caller:!0};function g(e,t,r){Object.getOwnPropertyNames(t).forEach((function(n){if(!v[n]){var o=Object.getOwnPropertyDescriptor(e,n);if(!o||o.configurable){var i,u,c=Object.getOwnPropertyDescriptor(t,n);if(!d){if("cid"===n)return;var l=Object.getOwnPropertyDescriptor(r,n);if(i=c.value,u=a(i),null!=i&&("object"===u||"function"===u)&&l&&l.value===c.value)return}0,Object.defineProperty(e,n,c)}}}))}function m(e){return"function"==typeof e?b(e):function(t){return b(t,e)}}m.registerHooks=function(e){y.push.apply(y,c(e))};var h=m;var w="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function O(e,t,r){if(w&&!Array.isArray(e)&&"function"!=typeof e&&void 0===e.type){var n=Reflect.getMetadata("design:type",t,r);n!==Object&&(e.type=n)}}function _(e){return void 0===e&&(e={}),function(t,r){var n;O(e,t,r),(n=function(t,r){(t.props||(t.props={}))[r]=e},function(e,t,r){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(e){return n(e,t,r)}))})(t,r)}}function j(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t,r,n,o){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var z,R,M,C,E,A,S,B,D,$,N,I,V,K,q,G,T,H=function(e){var t;if(function(e){var t=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),r=/^(rgb|rgba)/.test(e);return t||r}(e)){var r=e.replace(/[rgba()]/g,"").split(",");t=r[0]+","+r[1]+","+r[2]}else if(U(e)){var n=F(e);t=n.r+","+n.g+","+n.b}else if(function(e){return["primary","secondary","success","danger","warning","dark","light","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(e)}(e)){if(U((t=window.getComputedStyle(document.body).getPropertyValue("--d-"+e)).trim())){var o=F(t.trim());t=o.r+","+o.g+","+o.b}}else t=null;return t};function U(e){return/^(#)/.test(e)}function F(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;e.length<6&&(t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i);var r=t.exec(e);return e.length<6&&r&&(r[1]=r[1]+r[1],r[2]=r[2]+r[2],r[3]=r[3]+r[3]),r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}var J,L=(z=_({type:String,default:null}),R=_({type:Boolean,default:!1}),M=_({type:Boolean,default:!1}),C=_({type:Boolean,default:!1}),E=_({type:Boolean,default:!1}),A=_({type:Boolean,default:!1}),S=_({type:Boolean,default:!1}),h((T=function(e){function r(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).componentColor=null,t.getColor=null,j(t,"color",$,k(t)),j(t,"danger",N,k(t)),j(t,"success",I,k(t)),j(t,"warning",V,k(t)),j(t,"dark",K,k(t)),j(t,"primary",q,k(t)),j(t,"active",G,k(t)),t}var n,o,i;return t(r,e),r.prototype.mounted=function(){this.getColor=H(this.color)},n=r,(o=[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}},{key:"isColor",get:function(){return!!(this.color||this.primary||this.success||this.warning||this.danger||this.dark)}}])&&P(n.prototype,o),i&&P(n,i),Object.defineProperty(n,"prototype",{writable:!1}),r}(i()),T.install=void 0,T.use=void 0,$=x((D=T).prototype,"color",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=x(D.prototype,"danger",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=x(D.prototype,"success",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=x(D.prototype,"warning",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=x(D.prototype,"dark",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=x(D.prototype,"primary",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=x(D.prototype,"active",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=D))||B),Q=h(J=function(e){function r(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).Class="",t.prototype=void 0,t}return t(r,e),r.prototype.render=function(e){return e("div",{staticClass:"d-button-group"},this.$slots.default)},r}(L))||J;Q.install=function(e){e.component("d-btn-group",Q)},"undefined"!=typeof window&&window.Vue&&Q.install(window.Vue);var W=Q}(),o=o.default}()}));