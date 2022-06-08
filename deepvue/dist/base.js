/*!
  * DeepVue v0.0.1-alpha
  * Made by Pedro Borges
  * Released under the MIT License.
  * © 2022, azanbertre.
  */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DeepVue", [], factory);
	else if(typeof exports === 'object')
		exports["DeepVue"] = factory();
	else
		root["DeepVue"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});