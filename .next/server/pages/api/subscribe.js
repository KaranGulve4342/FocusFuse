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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/subscribe.ts":
/*!********************************!*\
  !*** ./pages/api/subscribe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// pages/api/subscribe.ts\n\n\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email  } = req.body;\n        // Path to the file where you want to store the emails\n        // const filePath = path.join(process.cwd(), 'email.txt');\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"https://github.com/KaranGulve4342/FocusFuse/blob/main/email.txt\");\n        // Write the email to the file\n        fs__WEBPACK_IMPORTED_MODULE_0___default().appendFile(filePath, `${email}\\n`, (err)=>{\n            if (err) {\n                console.error(\"Error writing email to file:\", err);\n                res.status(500).json({\n                    success: false\n                });\n                return;\n            }\n            console.log(\"Email written to file successfully\");\n            res.status(200).json({\n                success: true\n            });\n        });\n    } else {\n        // Method not allowed\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vic2NyaWJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEseUJBQXlCO0FBRUw7QUFDSTtBQUdULFNBQVNFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDekUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtRQUUxQixzREFBc0Q7UUFDdEQsMERBQTBEO1FBQzFELE1BQU1DLFdBQVdQLGdEQUFTLENBQUNTLFFBQVFDLEdBQUcsSUFBSTtRQUUxQyw4QkFBOEI7UUFDOUJYLG9EQUFhLENBQUNRLFVBQVUsQ0FBQyxFQUFFRixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUNPLE1BQVE7WUFDN0MsSUFBSUEsS0FBSztnQkFDUEMsUUFBUUMsS0FBSyxDQUFDLGdDQUFnQ0Y7Z0JBQzlDVCxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTLEtBQUs7Z0JBQUM7Z0JBQ3RDO1lBQ0YsQ0FBQztZQUNESixRQUFRSyxHQUFHLENBQUM7WUFDWmYsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUyxJQUFJO1lBQUM7UUFDdkM7SUFDRixPQUFPO1FBQ0wscUJBQXFCO1FBQ3JCZCxJQUFJZ0IsU0FBUyxDQUFDLFNBQVM7WUFBQztTQUFPO1FBQy9CaEIsSUFBSVksTUFBTSxDQUFDLEtBQUtLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWxCLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLWJsb2cvLi9wYWdlcy9hcGkvc3Vic2NyaWJlLnRzP2Q4ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3N1YnNjcmliZS50c1xyXG5cclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAvLyBQYXRoIHRvIHRoZSBmaWxlIHdoZXJlIHlvdSB3YW50IHRvIHN0b3JlIHRoZSBlbWFpbHNcclxuICAgIC8vIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdlbWFpbC50eHQnKTtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdodHRwczovL2dpdGh1Yi5jb20vS2FyYW5HdWx2ZTQzNDIvRm9jdXNGdXNlL2Jsb2IvbWFpbi9lbWFpbC50eHQnKTtcclxuXHJcbiAgICAvLyBXcml0ZSB0aGUgZW1haWwgdG8gdGhlIGZpbGVcclxuICAgIGZzLmFwcGVuZEZpbGUoZmlsZVBhdGgsIGAke2VtYWlsfVxcbmAsIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdyaXRpbmcgZW1haWwgdG8gZmlsZTonLCBlcnIpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFbWFpbCB3cml0dGVuIHRvIGZpbGUgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBNZXRob2Qgbm90IGFsbG93ZWRcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsImJvZHkiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiYXBwZW5kRmlsZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibG9nIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/subscribe.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();