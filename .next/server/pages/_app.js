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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__]);\n([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n// 1. Get projectID at https://cloud.walletconnect.com\nconst projectId = \"2691ff9942d03298034138d5cd68ff48\";\n// 2. Configure wagmi client\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.avalanche,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrum,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.bsc,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.gnosis,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.fantom\n];\nconst { provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)(chains, [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.w3mProvider)({\n        projectId\n    })\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.w3mConnectors)({\n        version: 2,\n        chains,\n        projectId\n    }),\n    provider\n});\n// 3. Configure modal ethereum client\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.EthereumClient(wagmiClient, chains);\n// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt\nfunction App({ Component , pageProps  }) {\n    const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setReady(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            ready ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n                client: wagmiClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/dexter/Work/Timeswap/web3modal-examples/nextjs/src/pages/_app.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dexter/Work/Timeswap/web3modal-examples/nextjs/src/pages/_app.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_2__.Web3Modal, {\n                projectId: projectId,\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"/Users/dexter/Work/Timeswap/web3modal-examples/nextjs/src/pages/_app.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTZCO0FBQ2dCO0FBQ0Q7QUFDdUI7QUFVN0M7QUFDQztBQUV2QixzREFBc0Q7QUFFdEQsTUFBTWlCLFlBQVk7QUFFbEIsNEJBQTRCO0FBQzVCLE1BQU1DLFNBQVM7SUFDYkosaURBQU9BO0lBQ1BFLGlEQUFPQTtJQUNQTixtREFBU0E7SUFDVEQsa0RBQVFBO0lBQ1JFLDZDQUFHQTtJQUNISSxrREFBUUE7SUFDUkYsZ0RBQU1BO0lBQ05ELGdEQUFNQTtDQUNQO0FBRUQsTUFBTSxFQUFFTyxTQUFRLEVBQUUsR0FBR2Isc0RBQWVBLENBQUNZLFFBQVE7SUFBQ2hCLGdFQUFXQSxDQUFDO1FBQUVlO0lBQVU7Q0FBRztBQUN6RSxNQUFNRyxjQUFjYixtREFBWUEsQ0FBQztJQUMvQmMsYUFBYSxJQUFJO0lBQ2pCQyxZQUFZckIsa0VBQWFBLENBQUM7UUFBRXNCLFNBQVM7UUFBR0w7UUFBUUQ7SUFBVTtJQUMxREU7QUFDRjtBQUVBLHFDQUFxQztBQUNyQyxNQUFNSyxpQkFBaUIsSUFBSXhCLCtEQUFjQSxDQUFDb0IsYUFBYUY7QUFFdkQsc0VBQXNFO0FBQ3ZELFNBQVNPLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR3hCLCtDQUFRQSxDQUFDLEtBQUs7SUFFeENELGdEQUFTQSxDQUFDLElBQU07UUFDZHlCLFNBQVMsSUFBSTtJQUNmLEdBQUcsRUFBRTtJQUVMLHFCQUNFOztZQUNHRCxzQkFDQyw4REFBQ3BCLDhDQUFXQTtnQkFBQ3NCLFFBQVFWOzBCQUNuQiw0RUFBQ007b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozt1QkFFeEIsSUFBSTswQkFFUiw4REFBQ3hCLHVEQUFTQTtnQkFBQ2MsV0FBV0E7Z0JBQVdPLGdCQUFnQkE7Ozs7Ozs7O0FBR3ZELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZXhhbXBsZS8uL3NyYy9wYWdlcy9fYXBwLmpzeD80Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEV0aGVyZXVtQ2xpZW50LFxuICB3M21Db25uZWN0b3JzLFxuICB3M21Qcm92aWRlcixcbn0gZnJvbSBcIkB3ZWIzbW9kYWwvZXRoZXJldW1cIjtcbmltcG9ydCB7IFdlYjNNb2RhbCB9IGZyb20gXCJAd2ViM21vZGFsL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7XG4gIGFyYml0cnVtLFxuICBhdmFsYW5jaGUsXG4gIGJzYyxcbiAgZmFudG9tLFxuICBnbm9zaXMsXG4gIG1haW5uZXQsXG4gIG9wdGltaXNtLFxuICBwb2x5Z29uLFxufSBmcm9tIFwid2FnbWkvY2hhaW5zXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XG5cbi8vIDEuIEdldCBwcm9qZWN0SUQgYXQgaHR0cHM6Ly9jbG91ZC53YWxsZXRjb25uZWN0LmNvbVxuXG5jb25zdCBwcm9qZWN0SWQgPSAnMjY5MWZmOTk0MmQwMzI5ODAzNDEzOGQ1Y2Q2OGZmNDgnO1xuXG4vLyAyLiBDb25maWd1cmUgd2FnbWkgY2xpZW50XG5jb25zdCBjaGFpbnMgPSBbXG4gIG1haW5uZXQsXG4gIHBvbHlnb24sXG4gIGF2YWxhbmNoZSxcbiAgYXJiaXRydW0sXG4gIGJzYyxcbiAgb3B0aW1pc20sXG4gIGdub3NpcyxcbiAgZmFudG9tLFxuXTtcblxuY29uc3QgeyBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKGNoYWlucywgW3czbVByb3ZpZGVyKHsgcHJvamVjdElkIH0pXSk7XG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzOiB3M21Db25uZWN0b3JzKHsgdmVyc2lvbjogMiwgY2hhaW5zLCBwcm9qZWN0SWQgfSksXG4gIHByb3ZpZGVyLFxufSk7XG5cbi8vIDMuIENvbmZpZ3VyZSBtb2RhbCBldGhlcmV1bSBjbGllbnRcbmNvbnN0IGV0aGVyZXVtQ2xpZW50ID0gbmV3IEV0aGVyZXVtQ2xpZW50KHdhZ21pQ2xpZW50LCBjaGFpbnMpO1xuXG4vLyA0LiBXcmFwIHlvdXIgYXBwIHdpdGggV2FnbWlQcm92aWRlciBhbmQgYWRkIDxXZWIzTW9kYWwgLz4gY29tcG9lbm50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UmVhZHkodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVhZHkgPyAoXG4gICAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPFdlYjNNb2RhbCBwcm9qZWN0SWQ9e3Byb2plY3RJZH0gZXRoZXJldW1DbGllbnQ9e2V0aGVyZXVtQ2xpZW50fSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkV0aGVyZXVtQ2xpZW50IiwidzNtQ29ubmVjdG9ycyIsInczbVByb3ZpZGVyIiwiV2ViM01vZGFsIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImFyYml0cnVtIiwiYXZhbGFuY2hlIiwiYnNjIiwiZmFudG9tIiwiZ25vc2lzIiwibWFpbm5ldCIsIm9wdGltaXNtIiwicG9seWdvbiIsInByb2plY3RJZCIsImNoYWlucyIsInByb3ZpZGVyIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsImNvbm5lY3RvcnMiLCJ2ZXJzaW9uIiwiZXRoZXJldW1DbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZWFkeSIsInNldFJlYWR5IiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethereum":
/*!**************************************!*\
  !*** external "@web3modal/ethereum" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();