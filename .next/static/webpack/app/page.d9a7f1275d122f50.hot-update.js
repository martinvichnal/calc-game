"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [randomNumber, setRandomNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [userNumber, setUserNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [newRandomNumber, setNewRandomNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const createNewRandomNumber = ()=>{\n        // Create a new item price number then set it to the randomNumber state\n        const rndNum = Math.floor(Math.random() * 10000);\n        setRandomNumber(rndNum);\n        setNewRandomNumber(true);\n    };\n    // useEffect(() => {\n    //     setRandomNumber(Math.floor(Math.random() * 100))\n    //     setNewRandomNumber(false)\n    // }, [newRandomNumber])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Calculator game\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\calc-game\\\\app\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"The random number is: \",\n                    randomNumber\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\calc-game\\\\app\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: createNewRandomNumber,\n                children: \"New Random number\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\calc-game\\\\app\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\calc-game\\\\app\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"g12KYLNCS7IZ7QTD6hzoPNeSfD8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFMkM7QUFFNUIsU0FBU0M7O0lBQ3BCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLGlCQUFpQkMsbUJBQW1CLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1RLHdCQUF3QjtRQUMxQix1RUFBdUU7UUFDdkUsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7UUFDMUNULGdCQUFnQk07UUFDaEJGLG1CQUFtQjtJQUN2QjtJQUVBLG9CQUFvQjtJQUNwQix1REFBdUQ7SUFDdkQsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUV4QixxQkFDSSw4REFBQ007OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7b0JBQUU7b0JBQXVCYjs7Ozs7OzswQkFDMUIsOERBQUNjO2dCQUFPQyxTQUFTVDswQkFBdUI7Ozs7Ozs7Ozs7OztBQUdwRDtHQXhCd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtyYW5kb21OdW1iZXIsIHNldFJhbmRvbU51bWJlcl0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFt1c2VyTnVtYmVyLCBzZXRVc2VyTnVtYmVyXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW25ld1JhbmRvbU51bWJlciwgc2V0TmV3UmFuZG9tTnVtYmVyXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCBjcmVhdGVOZXdSYW5kb21OdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpdGVtIHByaWNlIG51bWJlciB0aGVuIHNldCBpdCB0byB0aGUgcmFuZG9tTnVtYmVyIHN0YXRlXG4gICAgICAgIGNvbnN0IHJuZE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKVxuICAgICAgICBzZXRSYW5kb21OdW1iZXIocm5kTnVtKVxuICAgICAgICBzZXROZXdSYW5kb21OdW1iZXIodHJ1ZSlcbiAgICB9XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBzZXRSYW5kb21OdW1iZXIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSlcbiAgICAvLyAgICAgc2V0TmV3UmFuZG9tTnVtYmVyKGZhbHNlKVxuICAgIC8vIH0sIFtuZXdSYW5kb21OdW1iZXJdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5DYWxjdWxhdG9yIGdhbWU8L2gxPlxuICAgICAgICAgICAgPHA+VGhlIHJhbmRvbSBudW1iZXIgaXM6IHtyYW5kb21OdW1iZXJ9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVOZXdSYW5kb21OdW1iZXJ9Pk5ldyBSYW5kb20gbnVtYmVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJyYW5kb21OdW1iZXIiLCJzZXRSYW5kb21OdW1iZXIiLCJ1c2VyTnVtYmVyIiwic2V0VXNlck51bWJlciIsIm5ld1JhbmRvbU51bWJlciIsInNldE5ld1JhbmRvbU51bWJlciIsImNyZWF0ZU5ld1JhbmRvbU51bWJlciIsInJuZE51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRpdiIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});