"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PostEditForm.js":
/*!************************************!*\
  !*** ./components/PostEditForm.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\nconst PostEditForm = (props)=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const { me  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.user);\n    const onClickDelete = ()=>{\n        dispatch({\n            type: \"REMOVE_POST_REQUEST\",\n            accountId: me.accountId,\n            postId: props.postId\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal_window_option\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal_title_option_user\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \" 수정 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\PostEditForm.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\PostEditForm.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal_title_option_user\",\n                    onClick: onClickDelete,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \" 삭제 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\PostEditForm.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\PostEditForm.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal_title_option_user_two\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \" 취소 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\PostEditForm.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\PostEditForm.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\PostEditForm.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\PostEditForm.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PostEditForm, \"wHFlqkqakrrc8EshzUPJpByed7I=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = PostEditForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostEditForm);\nvar _c;\n$RefreshReg$(_c, \"PostEditForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RFZGl0Rm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUQ7QUFFdkQsTUFBTUUsZUFBZSxDQUFDQyxRQUFVOztJQUU1QixNQUFNQyxXQUFXSix3REFBV0E7SUFDNUIsTUFBTSxFQUFDSyxHQUFFLEVBQUMsR0FBR0osd0RBQVdBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUMsSUFBSTtJQUU5QyxNQUFNQyxnQkFBZ0IsSUFBTTtRQUN4QkosU0FBUztZQUFDSyxNQUFLO1lBQXVCQyxXQUFVTCxHQUFHSyxTQUFTO1lBQUVDLFFBQU9SLE1BQU1RLE1BQU07UUFBQTtJQUNyRjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFZOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVc7OEJBQ1osNEVBQUNEO2tDQUFJOzs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ0E7b0JBQUlDLFdBQVc7b0JBQTBCQyxTQUFTTjs4QkFDL0MsNEVBQUNJO2tDQUFJOzs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ0E7b0JBQUlDLFdBQVc7OEJBQ1osNEVBQUNEO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0dBeEJNVjs7UUFFZUYsb0RBQVdBO1FBQ2ZDLG9EQUFXQTs7O0tBSHRCQztBQTBCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RFZGl0Rm9ybS5qcz9mMmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgUG9zdEVkaXRGb3JtID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0RlbGV0ZSA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTonUkVNT1ZFX1BPU1RfUkVRVUVTVCcsIGFjY291bnRJZDptZS5hY2NvdW50SWQsIHBvc3RJZDpwcm9wcy5wb3N0SWR9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ21vZGFsX3dpbmRvd19vcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSdtb2RhbF90aXRsZV9vcHRpb25fdXNlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4g7IiY7KCVIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9J21vZGFsX3RpdGxlX29wdGlvbl91c2VyJyBvbkNsaWNrPXtvbkNsaWNrRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiDsgq3soJwgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0nbW9kYWxfdGl0bGVfb3B0aW9uX3VzZXJfdHdvJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiDst6jshowgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0RWRpdEZvcm07Il0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJQb3N0RWRpdEZvcm0iLCJwcm9wcyIsImRpc3BhdGNoIiwibWUiLCJzdGF0ZSIsInVzZXIiLCJvbkNsaWNrRGVsZXRlIiwidHlwZSIsImFjY291bnRJZCIsInBvc3RJZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostEditForm.js\n"));

/***/ })

});