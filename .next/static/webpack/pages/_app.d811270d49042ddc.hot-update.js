"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ThemeSwitch.tsx":
/*!************************************!*\
  !*** ./components/ThemeSwitch.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ThemeSwitch = ()=>{\n    _s();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { theme , setTheme , resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    // When mounted on client, now we can show the UI\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"aria-label\": \"Toggle Dark Mode\",\n        className: \"ml-1 mr-1 h-12 w-12 rounded p-1 sm:ml-1\",\n        onClick: ()=>setTheme(theme === \"dark\" || resolvedTheme === \"dark\" ? \"light\" : \"dark\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            viewBox: \"0 0 20 20\",\n            fill: \"currentColor\",\n            className: \"text-gray-900 dark:text-gray-100\",\n            children: mounted && (theme === \"dark\" || resolvedTheme === \"dark\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                fillRule: \"evenodd\",\n                d: \"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z\",\n                clipRule: \"evenodd\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KARAN\\\\Downloads\\\\thesamuraination-master\\\\thesamuraination-master\\\\components\\\\ThemeSwitch.tsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\KARAN\\\\Downloads\\\\thesamuraination-master\\\\thesamuraination-master\\\\components\\\\ThemeSwitch.tsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\KARAN\\\\Downloads\\\\thesamuraination-master\\\\thesamuraination-master\\\\components\\\\ThemeSwitch.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KARAN\\\\Downloads\\\\thesamuraination-master\\\\thesamuraination-master\\\\components\\\\ThemeSwitch.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ThemeSwitch, \"ePUNvtlaRO/m2fiRDJn97vmFTEQ=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = ThemeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitch);\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNMO0FBRXRDLE1BQU1HLGNBQWMsSUFBTTs7SUFDeEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxFQUFFSyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsY0FBYSxFQUFFLEdBQUdOLHFEQUFRQTtJQUVuRCxpREFBaUQ7SUFDakRGLGdEQUFTQSxDQUFDLElBQU1LLFdBQVcsSUFBSSxHQUFHLEVBQUU7SUFFcEMscUJBQ0UsOERBQUNJO1FBQ0NDLGNBQVc7UUFDWEMsV0FBVTtRQUNWQyxTQUFTLElBQU1MLFNBQVNELFVBQVUsVUFBVUUsa0JBQWtCLFNBQVMsVUFBVSxNQUFNO2tCQUV2Riw0RUFBQ0s7WUFDQ0MsT0FBTTtZQUNOQyxTQUFRO1lBQ1JDLE1BQUs7WUFDTEwsV0FBVTtzQkFFVFAsV0FBWUUsQ0FBQUEsVUFBVSxVQUFVRSxrQkFBa0IsTUFBSyxrQkFDdEQsOERBQUNTO2dCQUNDQyxVQUFTO2dCQUNUQyxHQUFFO2dCQUNGQyxVQUFTOzs7OzswQ0FHWCw4REFBQ0g7Z0JBQUtFLEdBQUU7Ozs7O3lCQUNUOzs7Ozs7Ozs7OztBQUlUO0dBL0JNaEI7O1FBRXVDRCxpREFBUUE7OztLQUYvQ0M7QUFpQ04sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaGVtZVN3aXRjaC50c3g/YmVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJ1xuXG5jb25zdCBUaGVtZVN3aXRjaCA9ICgpID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lLCByZXNvbHZlZFRoZW1lIH0gPSB1c2VUaGVtZSgpXG5cbiAgLy8gV2hlbiBtb3VudGVkIG9uIGNsaWVudCwgbm93IHdlIGNhbiBzaG93IHRoZSBVSVxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIERhcmsgTW9kZVwiXG4gICAgICBjbGFzc05hbWU9XCJtbC0xIG1yLTEgaC0xMiB3LTEyIHJvdW5kZWQgcC0xIHNtOm1sLTFcIlxuICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09ICdkYXJrJyB8fCByZXNvbHZlZFRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKX1cbiAgICA+XG4gICAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMTAwXCJcbiAgICAgID5cbiAgICAgICAge21vdW50ZWQgJiYgKHRoZW1lID09PSAnZGFyaycgfHwgcmVzb2x2ZWRUaGVtZSA9PT0gJ2RhcmsnKSA/IChcbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMTAgMmExIDEgMCAwMTEgMXYxYTEgMSAwIDExLTIgMFYzYTEgMSAwIDAxMS0xem00IDhhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwem0tLjQ2NCA0Ljk1bC43MDcuNzA3YTEgMSAwIDAwMS40MTQtMS40MTRsLS43MDctLjcwN2ExIDEgMCAwMC0xLjQxNCAxLjQxNHptMi4xMi0xMC42MDdhMSAxIDAgMDEwIDEuNDE0bC0uNzA2LjcwN2ExIDEgMCAxMS0xLjQxNC0xLjQxNGwuNzA3LS43MDdhMSAxIDAgMDExLjQxNCAwek0xNyAxMWExIDEgMCAxMDAtMmgtMWExIDEgMCAxMDAgMmgxem0tNyA0YTEgMSAwIDAxMSAxdjFhMSAxIDAgMTEtMiAwdi0xYTEgMSAwIDAxMS0xek01LjA1IDYuNDY0QTEgMSAwIDEwNi40NjUgNS4wNWwtLjcwOC0uNzA3YTEgMSAwIDAwLTEuNDE0IDEuNDE0bC43MDcuNzA3em0xLjQxNCA4LjQ4NmwtLjcwNy43MDdhMSAxIDAgMDEtMS40MTQtMS40MTRsLjcwNy0uNzA3YTEgMSAwIDAxMS40MTQgMS40MTR6TTQgMTFhMSAxIDAgMTAwLTJIM2ExIDEgMCAwMDAgMmgxelwiXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHBhdGggZD1cIk0xNy4yOTMgMTMuMjkzQTggOCAwIDAxNi43MDcgMi43MDdhOC4wMDEgOC4wMDEgMCAxMDEwLjU4NiAxMC41ODZ6XCIgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUaGVtZSIsIlRoZW1lU3dpdGNoIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ0aGVtZSIsInNldFRoZW1lIiwicmVzb2x2ZWRUaGVtZSIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZmlsbCIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ThemeSwitch.tsx\n"));

/***/ })

});