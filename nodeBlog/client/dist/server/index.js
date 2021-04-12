/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/Layout/index.js":
/*!********************************!*\
  !*** ./client/Layout/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n //import './index.css'\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"commonContent\"\n  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/home\",\n    style: {\n      marginRight: '10px'\n    }\n  }, \"\\u9996\\u98751111\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/detail\"\n  }, \"\\u8BE6\\u60C522211\")));\n}\n\n//# sourceURL=webpack://nodeBlog/./client/Layout/index.js?");

/***/ }),

/***/ "./client/reactSSR/app.js":
/*!********************************!*\
  !*** ./client/reactSSR/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middlewares */ \"./client/reactSSR/middlewares/index.js\");\nconst http = __webpack_require__(/*! http */ \"http\");\n\nconst shareConfig = __webpack_require__(/*! ../../shareConfig */ \"./shareConfig.js\");\n\nconst port = shareConfig.nodeServerPort || process.env.PORT;\n //console.log('middlewares===',typeof(middlewares))\n\nhttp.createServer((req, res) => {\n  (0,_middlewares__WEBPACK_IMPORTED_MODULE_0__.default)(req, res);\n}).listen(port);\nconsole.log(`react ssr 监听${port}`);\n\n//# sourceURL=webpack://nodeBlog/./client/reactSSR/app.js?");

/***/ }),

/***/ "./client/reactSSR/middlewares/index.js":
/*!**********************************************!*\
  !*** ./client/reactSSR/middlewares/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/index */ \"./client/router/index.js\");\n/* harmony import */ var _router_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router/router-config */ \"./client/router/router-config.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\nvar url = __webpack_require__(/*! url */ \"url\"); //引入url模块\n\n\nlet fs = __webpack_require__(/*! fs */ \"fs\");\n\n\n\n\n\n\nlet staticPath = __dirname + \"\\\\..\\\\static\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  let path = url.parse(req.url).pathname;\n  let string = \"nothing\";\n  if (path === '/favicon.icon') return;\n  const html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.StaticRouter, {\n    location: path\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_router_index__WEBPACK_IMPORTED_MODULE_2__.default, {\n    routeList: _router_router_config__WEBPACK_IMPORTED_MODULE_3__.default\n  })));\n  string = `<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n            <title>dd</title>\n        </head>\n        <body>\n            <div id='root'>${html}</div>\n            <script type=\"text/javascript\" src=\"index.js\"></script>\n        </body>\n        </html>\n        `;\n  res.end(string);\n  return 0;\n});\n\n//# sourceURL=webpack://nodeBlog/./client/reactSSR/middlewares/index.js?");

/***/ }),

/***/ "./client/router/index.js":
/*!********************************!*\
  !*** ./client/router/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ App\n/* harmony export */ });\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layout */ \"./client/Layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction App(data) {\n  const {\n    routeList\n  } = data;\n  console.log('rou', routeList);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_0__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, routeList.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, _extends({\n    key: item.path\n  }, item)))));\n}\n\n//# sourceURL=webpack://nodeBlog/./client/router/index.js?");

/***/ }),

/***/ "./client/router/router-config.js":
/*!****************************************!*\
  !*** ./client/router/router-config.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _src_pages_Detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/Detail */ \"./client/src/pages/Detail/index.js\");\n/* harmony import */ var _src_pages_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/pages/Login */ \"./client/src/pages/Login/index.js\");\n/* harmony import */ var _src_pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/pages/Home */ \"./client/src/pages/Home/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: '/detail',\n  component: _src_pages_Detail__WEBPACK_IMPORTED_MODULE_0__.default,\n  exact: true //是否精准匹配\n\n}, {\n  path: '/login',\n  component: _src_pages_Login__WEBPACK_IMPORTED_MODULE_1__.default,\n  exact: true //是否精准匹配\n\n}, {\n  path: '/home',\n  component: _src_pages_Home__WEBPACK_IMPORTED_MODULE_2__.default,\n  exact: true //是否精准匹配\n\n}]);\n\n//# sourceURL=webpack://nodeBlog/./client/router/router-config.js?");

/***/ }),

/***/ "./client/src/pages/Detail/index.js":
/*!******************************************!*\
  !*** ./client/src/pages/Detail/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"\\u535A\\u5BA2\\u8BE6\\u60C5\");\n}\n\n//# sourceURL=webpack://nodeBlog/./client/src/pages/Detail/index.js?");

/***/ }),

/***/ "./client/src/pages/Home/index.js":
/*!****************************************!*\
  !*** ./client/src/pages/Home/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n  const list = ['不被定义，是三八节最好的祝福', '拜登签署行政命令纪念“血腥星期天”', '苹果确认将停售iMac Pro，现有售完即止'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, list.map(k => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    onClick: () => {\n      console.log('图片点击');\n    },\n    src: \"https://pics4.baidu.com/feed/21a4462309f79052f1a559918cd9fec27acbd59d.jpeg?token=00082283774ffdc37a67884726873545&s=2392C3239C3733AD02AD81820300A083\"\n  }))));\n}\n\n//# sourceURL=webpack://nodeBlog/./client/src/pages/Home/index.js?");

/***/ }),

/***/ "./client/src/pages/Login/index.js":
/*!*****************************************!*\
  !*** ./client/src/pages/Login/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"\\u767B\\u5F55\\u754C\\u9762\");\n}\n\n//# sourceURL=webpack://nodeBlog/./client/src/pages/Login/index.js?");

/***/ }),

/***/ "./shareConfig.js":
/*!************************!*\
  !*** ./shareConfig.js ***!
  \************************/
/***/ ((module) => {

eval("module.exports = {\n  nodeServerPort: 9000,\n  //node server  ssr 的监听端口\n  clientSvrPort: 8002,\n  //webpack dev server 服务器运行端口\n  serverPort: 80 //服务器端接口\n\n};\n\n//# sourceURL=webpack://nodeBlog/./shareConfig.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"fs\");;\n\n//# sourceURL=webpack://nodeBlog/external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"http\");;\n\n//# sourceURL=webpack://nodeBlog/external_%22http%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react\");;\n\n//# sourceURL=webpack://nodeBlog/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-dom/server\");;\n\n//# sourceURL=webpack://nodeBlog/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-router-dom\");;\n\n//# sourceURL=webpack://nodeBlog/external_%22react-router-dom%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"url\");;\n\n//# sourceURL=webpack://nodeBlog/external_%22url%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./client/reactSSR/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;