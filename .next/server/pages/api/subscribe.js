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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// pages/api/subscribe.ts\n\n\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email  } = req.body;\n        // Path to the file where you want to store the emails\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"email.txt\");\n        // Write the email to the file\n        fs__WEBPACK_IMPORTED_MODULE_0___default().appendFile(filePath, `${email}\\n`, (err)=>{\n            if (err) {\n                console.error(\"Error writing email to file:\", err);\n                res.status(500).json({\n                    success: false\n                });\n                return;\n            }\n            console.log(\"Email written to file successfully\");\n            res.status(200).json({\n                success: true\n            });\n        });\n    } else {\n        // Method not allowed\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vic2NyaWJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEseUJBQXlCO0FBRUw7QUFDSTtBQUdULFNBQVNFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDekUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtRQUUxQixzREFBc0Q7UUFDdEQsTUFBTUMsV0FBV1AsZ0RBQVMsQ0FBQ1MsUUFBUUMsR0FBRyxJQUFJO1FBRTFDLDhCQUE4QjtRQUM5Qlgsb0RBQWEsQ0FBQ1EsVUFBVSxDQUFDLEVBQUVGLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQ08sTUFBUTtZQUM3QyxJQUFJQSxLQUFLO2dCQUNQQyxRQUFRQyxLQUFLLENBQUMsZ0NBQWdDRjtnQkFDOUNULElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVMsS0FBSztnQkFBQztnQkFDdEM7WUFDRixDQUFDO1lBQ0RKLFFBQVFLLEdBQUcsQ0FBQztZQUNaZixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLElBQUk7WUFBQztRQUN2QztJQUNGLE9BQU87UUFDTCxxQkFBcUI7UUFDckJkLElBQUlnQixTQUFTLENBQUMsU0FBUztZQUFDO1NBQU87UUFDL0JoQixJQUFJWSxNQUFNLENBQUMsS0FBS0ssR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFbEIsSUFBSUUsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItYmxvZy8uL3BhZ2VzL2FwaS9zdWJzY3JpYmUudHM/ZDhlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvc3Vic2NyaWJlLnRzXHJcblxyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIC8vIFBhdGggdG8gdGhlIGZpbGUgd2hlcmUgeW91IHdhbnQgdG8gc3RvcmUgdGhlIGVtYWlsc1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2VtYWlsLnR4dCcpO1xyXG5cclxuICAgIC8vIFdyaXRlIHRoZSBlbWFpbCB0byB0aGUgZmlsZVxyXG4gICAgZnMuYXBwZW5kRmlsZShmaWxlUGF0aCwgYCR7ZW1haWx9XFxuYCwgKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd3JpdGluZyBlbWFpbCB0byBmaWxlOicsIGVycik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ0VtYWlsIHdyaXR0ZW4gdG8gZmlsZSBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIE1ldGhvZCBub3QgYWxsb3dlZFxyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwiYm9keSIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJhcHBlbmRGaWxlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJsb2ciLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/subscribe.ts\n");

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