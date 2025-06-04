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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (method.req === \"POST\") {\n        const data = req.body;\n        // const { title, image, address, description } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://karisikdzemil:uQ3r3K9xQVPU90wZ@cluster0.pqvpxvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"sample_mflix\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsZUFBZUMsT0FBTyxDQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QixJQUFHQyxNQUFNLENBQUNGLEdBQUcsS0FBSyxNQUFNLEVBQUM7UUFDckIsTUFBTUcsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsdURBQXVEO1FBRXZELE1BQU1DLE1BQU0sR0FBRyxNQUFNUCx3REFBbUIsQ0FBQyx5SEFBeUgsQ0FBQztRQUVuSyxNQUFNUyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1FBRXRCLE1BQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFFdkQsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFTLENBQUNSLElBQUksQ0FBQztRQUV0RFMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBRXBCTCxNQUFNLENBQUNTLEtBQUssRUFBRSxDQUFDO1FBRWZiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGtCQUFrQjtTQUFFLENBQUM7SUFDekQsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZWxCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIgKHJlcSwgcmVzKSB7XG4gICAgaWYobWV0aG9kLnJlcSA9PT0gJ1BPU1QnKXtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIC8vIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcblxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2thcmlzaWtkemVtaWw6dVEzcjNLOXhRVlBVOTB3WkBjbHVzdGVyMC5wcXZweHZkLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMCcpO1xuXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdzYW1wbGVfbWZsaXgnKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQhJyB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();