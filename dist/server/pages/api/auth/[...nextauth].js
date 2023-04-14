"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2509:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 8457:
/***/ ((module) => {

module.exports = import("@next-auth/firebase-adapter");;

/***/ }),

/***/ 3263:
/***/ ((module) => {

module.exports = import("firebase-admin/app");;

/***/ }),

/***/ 6442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ adminDb)
/* harmony export */ });
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2509);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3263);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_admin_app__WEBPACK_IMPORTED_MODULE_1__]);
firebase_admin_app__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// const serviceAccount = require("./serviceAccountKey.json");
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
if (!(0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_1__.getApps)().length) {
    firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({
        credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().credential.cert(serviceAccount)
    });
}
const adminDb = firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().firestore();


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authOptions": () => (/* binding */ authOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3598);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebaseAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6442);
/* harmony import */ var _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseAdmin__WEBPACK_IMPORTED_MODULE_2__, _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_3__]);
([_firebaseAdmin__WEBPACK_IMPORTED_MODULE_2__, _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const authOptions = {
    // Configure one or more authentication providers
    providers: [
        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    adapter: (0,_next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_3__.FirestoreAdapter)({
        adminDb: _firebaseAdmin__WEBPACK_IMPORTED_MODULE_2__/* .adminDb */ .i
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4292));
module.exports = __webpack_exports__;

})();