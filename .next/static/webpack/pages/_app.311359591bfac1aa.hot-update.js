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

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"loginRequestAction\": function() { return /* binding */ loginRequestAction; },\n/* harmony export */   \"logoutRequestAction\": function() { return /* binding */ logoutRequestAction; },\n/* harmony export */   \"signupRequestAction\": function() { return /* binding */ signupRequestAction; }\n/* harmony export */ });\n/* harmony import */ var _hooks_tokenInsertHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/tokenInsertHeader */ \"./hooks/tokenInsertHeader.js\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.mjs\");\n\n\nconst initialState = {\n    isLoggedIn: false,\n    me: null,\n    signUpData: {},\n    loginData: {}\n};\nconst loginRequestAction = (data)=>({\n        type: \"LOG_IN_REQUEST\",\n        data\n    });\nconst signupRequestAction = (data)=>({\n        type: \"SIGN_UP_REQUEST\",\n        data\n    });\nconst logoutRequestAction = ()=>({\n        type: \"LOG_OUT\"\n    });\n//이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불면성은 지키고)\nconst reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    return (0,immer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state, (draft)=>{\n        switch(action.type){\n            case \"LOG_IN_REQUEST\":\n                draft.isLoggedIn = false;\n                break;\n            case \"LOG_IN_SUCCESS\":\n                localStorage.setItem(\"token\", action.data.token);\n                (0,_hooks_tokenInsertHeader__WEBPACK_IMPORTED_MODULE_0__.tokenInsertHeader)(action.data.token);\n                draft.isLoggedIn = true;\n                draft.me = action.data;\n                break;\n            case \"LOG_IN_FAILURE\":\n                draft.isLoggedIn = true;\n                break;\n            case \"SIGN_UP_REQUEST\":\n                break;\n            case \"SIGN_UP_SUCCESS\":\n                break;\n            case \"SIGN_UP_FAILURE\":\n                break;\n            case \"LOG_OUT\":\n                localStorage.clear();\n                draft.isLoggedIn = false;\n                break;\n            default:\n                break;\n        }\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErRDtBQUNwQztBQUVwQixNQUFNRSxlQUFlO0lBQ3hCQyxZQUFXLEtBQUs7SUFDaEJDLElBQUcsSUFBSTtJQUNQQyxZQUFXLENBQUM7SUFDWkMsV0FBVSxDQUFDO0FBQ2YsRUFBQztBQUVNLE1BQU1DLHFCQUFxQixDQUFDQyxPQUFVO1FBQ3pDQyxNQUFNO1FBQ05EO0lBQ0YsR0FBRztBQUVFLE1BQU1FLHNCQUFzQixDQUFDRixPQUFVO1FBQzFDQyxNQUFNO1FBQ05EO0lBQ0osR0FBRztBQUVJLE1BQU1HLHNCQUFzQixJQUFPO1FBQ3RDRixNQUFLO0lBQ1QsR0FBRTtBQUVGLHlDQUF5QztBQUN6QyxNQUFNRyxVQUFVLFdBQWtDWDtRQUFqQ1kseUVBQVFYLGNBQWNZO1dBQVdiLGlEQUFPQSxDQUFDWSxPQUFPLENBQUNFLFFBQVU7UUFDcEUsT0FBT0QsT0FBT0wsSUFBSTtZQUNkLEtBQUs7Z0JBQ0RNLE1BQU1aLFVBQVUsR0FBRyxLQUFLO2dCQUN4QixLQUFNO1lBQ1YsS0FBSztnQkFDRGEsYUFBYUMsT0FBTyxDQUFDLFNBQVNILE9BQU9OLElBQUksQ0FBQ1UsS0FBSztnQkFDL0NsQiwyRUFBaUJBLENBQUNjLE9BQU9OLElBQUksQ0FBQ1UsS0FBSztnQkFDbkNILE1BQU1aLFVBQVUsR0FBRyxJQUFJO2dCQUN2QlksTUFBTVgsRUFBRSxHQUFHVSxPQUFPTixJQUFJO2dCQUN0QixLQUFNO1lBQ1YsS0FBSztnQkFDRE8sTUFBTVosVUFBVSxHQUFHLElBQUk7Z0JBQ3ZCLEtBQU07WUFFVixLQUFLO2dCQUNELEtBQU07WUFDVixLQUFLO2dCQUNELEtBQU07WUFDVixLQUFLO2dCQUNELEtBQU07WUFFVixLQUFLO2dCQUNEYSxhQUFhRyxLQUFLO2dCQUNsQkosTUFBTVosVUFBVSxHQUFHLEtBQUs7Z0JBQ3hCLEtBQU07WUFDVjtnQkFDSSxLQUFNO1FBRWQ7SUFDUjtBQUFDO0FBRUQsK0RBQWVTLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8wZGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRva2VuSW5zZXJ0SGVhZGVyIH0gZnJvbSBcIi4uL2hvb2tzL3Rva2VuSW5zZXJ0SGVhZGVyXCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGlzTG9nZ2VkSW46ZmFsc2UsXHJcbiAgICBtZTpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogJ0xPR19JTl9SRVFVRVNUJyxcclxuICAgIGRhdGEsXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogJ1NJR05fVVBfUkVRVUVTVCcsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6J0xPR19PVVQnLFxyXG59KVxyXG5cclxuLy/snbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuptOyEseydgCDsp4DtgqTqs6ApXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSAnTE9HX0lOX1JFUVVFU1QnIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdMT0dfSU5fU1VDQ0VTUycgOlxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgYWN0aW9uLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgdG9rZW5JbnNlcnRIZWFkZXIoYWN0aW9uLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0xPR19JTl9GQUlMVVJFJyA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ1NJR05fVVBfUkVRVUVTVCcgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NJR05fVVBfU1VDQ0VTUycgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NJR05fVVBfRkFJTFVSRScgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSAnTE9HX09VVCcgOlxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sIm5hbWVzIjpbInRva2VuSW5zZXJ0SGVhZGVyIiwicHJvZHVjZSIsImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZHJhZnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n"));

/***/ })

});