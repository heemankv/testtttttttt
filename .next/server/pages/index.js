"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/CustomButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/CustomButton.jsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_react__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__]);\n([_web3modal_react__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction CustomButton() {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { open  } = (0,_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.useWeb3Modal)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const { disconnect  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useDisconnect)();\n    const label = isConnected ? \"Disconnect\" : \"Connect Custom\";\n    async function onOpen() {\n        setLoading(true);\n        await open();\n        setLoading(false);\n    }\n    function onClick() {\n        if (isConnected) {\n            disconnect();\n        } else {\n            onOpen();\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        disabled: loading,\n        children: loading ? \"Loading...\" : label\n    }, void 0, false, {\n        fileName: \"/Users/dexter/Work/Timeswap/web3modal-examples/nextjs/src/components/CustomButton.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b21CdXR0b24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2Y7QUFDaUI7QUFFbkMsU0FBU0ksZUFBZTtJQUNyQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLEVBQUVNLEtBQUksRUFBRSxHQUFHUCw4REFBWUE7SUFDN0IsTUFBTSxFQUFFUSxZQUFXLEVBQUUsR0FBR04saURBQVVBO0lBQ2xDLE1BQU0sRUFBRU8sV0FBVSxFQUFFLEdBQUdOLG9EQUFhQTtJQUNwQyxNQUFNTyxRQUFRRixjQUFjLGVBQWUsZ0JBQWdCO0lBRTNELGVBQWVHLFNBQVM7UUFDdEJMLFdBQVcsSUFBSTtRQUNmLE1BQU1DO1FBQ05ELFdBQVcsS0FBSztJQUNsQjtJQUVBLFNBQVNNLFVBQVU7UUFDakIsSUFBSUosYUFBYTtZQUNmQztRQUNGLE9BQU87WUFDTEU7UUFDRixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0QsU0FBU0E7UUFBU0UsVUFBVVQ7a0JBQ2pDQSxVQUFVLGVBQWVLLEtBQUs7Ozs7OztBQUdyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWV4YW1wbGUvLi9zcmMvY29tcG9uZW50cy9DdXN0b21CdXR0b24uanN4P2QyNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2ViM01vZGFsIH0gZnJvbSBcIkB3ZWIzbW9kYWwvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VEaXNjb25uZWN0IH0gZnJvbSBcIndhZ21pXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUJ1dHRvbigpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IG9wZW4gfSA9IHVzZVdlYjNNb2RhbCgpO1xuICBjb25zdCB7IGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnN0IHsgZGlzY29ubmVjdCB9ID0gdXNlRGlzY29ubmVjdCgpO1xuICBjb25zdCBsYWJlbCA9IGlzQ29ubmVjdGVkID8gXCJEaXNjb25uZWN0XCIgOiBcIkNvbm5lY3QgQ3VzdG9tXCI7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25PcGVuKCkge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgYXdhaXQgb3BlbigpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIGRpc2Nvbm5lY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25PcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBsYWJlbH1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VXZWIzTW9kYWwiLCJ1c2VTdGF0ZSIsInVzZUFjY291bnQiLCJ1c2VEaXNjb25uZWN0IiwiQ3VzdG9tQnV0dG9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvcGVuIiwiaXNDb25uZWN0ZWQiLCJkaXNjb25uZWN0IiwibGFiZWwiLCJvbk9wZW4iLCJvbkNsaWNrIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CustomButton.jsx\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var _components_CustomButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomButton */ \"./src/components/CustomButton.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_react__WEBPACK_IMPORTED_MODULE_1__, _components_CustomButton__WEBPACK_IMPORTED_MODULE_2__]);\n([_web3modal_react__WEBPACK_IMPORTED_MODULE_1__, _components_CustomButton__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {\n                icon: \"show\",\n                label: \"Connect Wallet\",\n                balance: \"show\"\n            }, void 0, false, {\n                fileName: \"/Users/dexter/Work/Timeswap/web3modal-examples/nextjs/src/pages/index.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dexter/Work/Timeswap/web3modal-examples/nextjs/src/pages/index.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_1__.Web3NetworkSwitch, {}, void 0, false, {\n                fileName: \"/Users/dexter/Work/Timeswap/web3modal-examples/nextjs/src/pages/index.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dexter/Work/Timeswap/web3modal-examples/nextjs/src/pages/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dexter/Work/Timeswap/web3modal-examples/nextjs/src/pages/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNYO0FBRXZDLFNBQVNHLFdBQVc7SUFDakMscUJBQ0U7OzBCQUVFLDhEQUFDSCx3REFBVUE7Z0JBQUNJLE1BQUs7Z0JBQU9DLE9BQU07Z0JBQWlCQyxTQUFROzs7Ozs7MEJBQ3ZELDhEQUFDQzs7Ozs7MEJBR0QsOERBQUNOLCtEQUFpQkE7Ozs7OzBCQUNsQiw4REFBQ007Ozs7OzBCQUdELDhEQUFDTCxnRUFBWUE7Ozs7Ozs7QUFHbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1leGFtcGxlLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYjNCdXR0b24sIFdlYjNOZXR3b3JrU3dpdGNoIH0gZnJvbSBcIkB3ZWIzbW9kYWwvcmVhY3RcIjtcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogUHJlZGVmaW5lZCBidXR0b24gICovfVxuICAgICAgPFdlYjNCdXR0b24gaWNvbj1cInNob3dcIiBsYWJlbD1cIkNvbm5lY3QgV2FsbGV0XCIgYmFsYW5jZT1cInNob3dcIiAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIHsvKiBOZXR3b3JrIFN3aXRjaGVyIEJ1dHRvbiAqL31cbiAgICAgIDxXZWIzTmV0d29ya1N3aXRjaCAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIHsvKiBDdXN0b20gYnV0dG9uICovfVxuICAgICAgPEN1c3RvbUJ1dHRvbiAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIldlYjNCdXR0b24iLCJXZWIzTmV0d29ya1N3aXRjaCIsIkN1c3RvbUJ1dHRvbiIsIkhvbWVQYWdlIiwiaWNvbiIsImxhYmVsIiwiYmFsYW5jZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@web3modal/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();