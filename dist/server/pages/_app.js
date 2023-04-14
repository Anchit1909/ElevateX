(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6687:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_8440d5', '__Inter_Fallback_8440d5'","fontStyle":"normal"},
	"className": "__className_8440d5",
	"variable": "__variable_8440d5"
};


/***/ }),

/***/ 764:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Poppins_6aa120', '__Poppins_Fallback_6aa120'","fontStyle":"normal"},
	"className": "__className_6aa120",
	"variable": "__variable_6aa120"
};


/***/ }),

/***/ 9106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src\\pages\\_app.js","import":"Poppins","arguments":[{"variable":"--font-poppins","weight":["400","500","600","700"],"subsets":["latin"],"display":"swap"}],"variableName":"poppins"}
var target_path_src_pages_app_js_import_Poppins_arguments_variable_font_poppins_weight_400_500_600_700_subsets_latin_display_swap_variableName_poppins_ = __webpack_require__(764);
var target_path_src_pages_app_js_import_Poppins_arguments_variable_font_poppins_weight_400_500_600_700_subsets_latin_display_swap_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(target_path_src_pages_app_js_import_Poppins_arguments_variable_font_poppins_weight_400_500_600_700_subsets_latin_display_swap_variableName_poppins_);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src\\pages\\_app.js","import":"Inter","arguments":[{"variable":"--font-inter","weight":["400","600","700"],"subsets":["latin"],"display":"swap"}],"variableName":"inter"}
var target_path_src_pages_app_js_import_Inter_arguments_variable_font_inter_weight_400_600_700_subsets_latin_display_swap_variableName_inter_ = __webpack_require__(6687);
var target_path_src_pages_app_js_import_Inter_arguments_variable_font_inter_weight_400_600_700_subsets_latin_display_swap_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_pages_app_js_import_Inter_arguments_variable_font_inter_weight_400_600_700_subsets_latin_display_swap_variableName_inter_);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./src/pages/_app.js






function App({ Component , pageProps: { session , ...pageProps }  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: external_classnames_default()((target_path_src_pages_app_js_import_Poppins_arguments_variable_font_poppins_weight_400_500_600_700_subsets_latin_display_swap_variableName_poppins_default()).variable, (target_path_src_pages_app_js_import_Inter_arguments_variable_font_inter_weight_400_600_700_subsets_latin_display_swap_variableName_inter_default()).variable),
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9106));
module.exports = __webpack_exports__;

})();