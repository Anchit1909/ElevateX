"use strict";
exports.id = 82;
exports.ids = [82];
exports.modules = {

/***/ 7082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSdQn3IHGk1N27ZAFqIBIFOXks9i_UqXs",
    authDomain: "gfg-project-2a32c.firebaseapp.com",
    projectId: "gfg-project-2a32c",
    storageBucket: "gfg-project-2a32c.appspot.com",
    messagingSenderId: "708720105574",
    appId: "1:708720105574:web:ae60ee46ba886bbffbf5a7"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)() : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig); //this is known as singleton pattern, i.e., we want to initialize our app only once.
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
 // const app = initializeApp(firebaseConfig);
 // export const db = initializeFirestore(app, {
 //   experimentalForceLongPolling: true,
 //   useFetchStreams: false,
 // });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;