"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail/[pid]",{

/***/ "./components/DetailItem.js":
/*!**********************************!*\
  !*** ./components/DetailItem.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Comment_CommentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment/CommentForm */ \"./components/Comment/CommentForm.js\");\n/* harmony import */ var _Comment_CommentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comment/CommentList */ \"./components/Comment/CommentList.js\");\n/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserInfo */ \"./components/UserInfo.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DetailItem = (prop)=>{\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const settings = {\n        dote: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"detail_window\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper-detail\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"left-col-detail\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        ...settings,\n                        afterChange: (slide)=>setCurrentSlide(slide),\n                        children: postList[0].imageList.map((i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: i.image,\n                                className: \"post-image\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                                lineNumber: 28,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                        lineNumber: 24,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                    lineNumber: 23,\n                    columnNumber: 25\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"right-col-detail\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"comment-post\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    borderBottom: \"1px solid lightgray;\"\n                                },\n                                className: \"post-story\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"description\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: postList[0].name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 60\n                                            }, undefined),\n                                            \" \",\n                                            postList[0].content\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"post-time\",\n                                        children: postList[0].modifiedDate\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n            lineNumber: 22,\n            columnNumber: 21\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailItem.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DetailItem, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n_c = DetailItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailItem);\nvar _c;\n$RefreshReg$(_c, \"DetailItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RldGFpbEl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2U7QUFDQTtBQUNkO0FBQ0Q7QUFDTztBQUNNO0FBRTlDLE1BQU1LLGFBQWEsQ0FBQ0MsT0FBUzs7SUFFekIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDakQsTUFBTVMsV0FBVztRQUNiQyxNQUFLLElBQUk7UUFDVEMsVUFBUyxJQUFJO1FBQ2JDLE9BQU07UUFDTkMsY0FBYztRQUNkQyxnQkFBZ0I7SUFDcEI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBWTtrQkFDTCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDWixtREFBTUE7d0JBQUUsR0FBR0ssUUFBUTt3QkFDcEJRLGFBQWEsQ0FBQ0MsUUFBVVYsZ0JBQWdCVTtrQ0FFbkNDLFFBQVEsQ0FBQyxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGtCQUN4Qiw4REFBQ0M7Z0NBQUlDLEtBQUtGLEVBQUVHLEtBQUs7Z0NBQUVULFdBQVU7Z0NBQWFVLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTlELDhEQUFDWDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNiLGlEQUFRQTs7Ozs7c0NBQ1QsOERBQUNZOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDRDtnQ0FBSVksT0FBTztvQ0FBQ0MsY0FBYTtnQ0FBc0I7Z0NBQUdaLFdBQVU7O2tEQUN6RCw4REFBQ2E7d0NBQUViLFdBQVU7OzBEQUFjLDhEQUFDYzswREFBTVgsUUFBUSxDQUFDLEVBQUUsQ0FBQ1ksSUFBSTs7Ozs7OzRDQUFROzRDQUFFWixRQUFRLENBQUMsRUFBRSxDQUFDYSxPQUFPOzs7Ozs7O2tEQUMvRSw4REFBQ0g7d0NBQUViLFdBQVU7a0RBQWFHLFFBQVEsQ0FBQyxFQUFFLENBQUNjLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEY7R0FwQ001QjtLQUFBQTtBQXNDTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RldGFpbEl0ZW0uanM/M2FjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudC9Db21tZW50Rm9ybVwiO1xyXG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSBcIi4vQ29tbWVudC9Db21tZW50TGlzdFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vVXNlckluZm9cIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJztcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MnO1xyXG5cclxuY29uc3QgRGV0YWlsSXRlbSA9IChwcm9wKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90ZTp0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOnRydWUsXHJcbiAgICAgICAgc3BlZWQ6NTAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnZGV0YWlsX3dpbmRvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXItZGV0YWlsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWNvbC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RMaXN0WzBdLmltYWdlTGlzdC5tYXAoKGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2kuaW1hZ2V9IGNsYXNzTmFtZT1cInBvc3QtaW1hZ2VcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY29sLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlckluZm8gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LXBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXJCb3R0b206XCIxcHggc29saWQgbGlnaHRncmF5O1wifX0gY2xhc3NOYW1lPVwicG9zdC1zdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+PHNwYW4+e3Bvc3RMaXN0WzBdLm5hbWV9PC9zcGFuPiB7cG9zdExpc3RbMF0uY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC10aW1lXCI+e3Bvc3RMaXN0WzBdLm1vZGlmaWVkRGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxJdGVtIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29tbWVudEZvcm0iLCJDb21tZW50TGlzdCIsIlVzZXJJbmZvIiwiU2xpZGVyIiwiRGV0YWlsSXRlbSIsInByb3AiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzZXR0aW5ncyIsImRvdGUiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJhZnRlckNoYW5nZSIsInNsaWRlIiwicG9zdExpc3QiLCJpbWFnZUxpc3QiLCJtYXAiLCJpIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJzdHlsZSIsImJvcmRlckJvdHRvbSIsInAiLCJzcGFuIiwibmFtZSIsImNvbnRlbnQiLCJtb2RpZmllZERhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DetailItem.js\n"));

/***/ }),

/***/ "./components/DetailPage.js":
/*!**********************************!*\
  !*** ./components/DetailPage.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _DetailItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailItem */ \"./components/DetailItem.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DetailPage = (props)=>{\n    _s();\n    const { postList  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.mainpage);\n    console.log(props);\n    const item = postList.filter((v)=>v.id == props.id ? v : null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DetailItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        postItem: item\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DetailPage, \"Nj+kHlB1IH793mDKNtQ2aA3nYLI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = DetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\nvar _c;\n$RefreshReg$(_c, \"DetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RldGFpbFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNKO0FBRXRDLE1BQU1FLGFBQWEsQ0FBQ0MsUUFBVTs7SUFDMUIsTUFBTSxFQUFDQyxTQUFRLEVBQUMsR0FBR0osd0RBQVdBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUMsUUFBUTtJQUN4REMsUUFBUUMsR0FBRyxDQUFDTDtJQUNaLE1BQU1NLE9BQU9MLFNBQVNNLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxFQUFFLElBQUlULE1BQU1TLEVBQUUsR0FBR0QsSUFBSSxJQUFJO0lBRS9ELHFCQUNJLDhEQUFDVixtREFBVUE7UUFBQ1ksVUFBWUo7Ozs7OztBQUVoQztHQVJNUDs7UUFDaUJGLG9EQUFXQTs7O0tBRDVCRTtBQVVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGV0YWlsUGFnZS5qcz84NWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBEZXRhaWxJdGVtIGZyb20gXCIuL0RldGFpbEl0ZW1cIjtcclxuXHJcbmNvbnN0IERldGFpbFBhZ2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtwb3N0TGlzdH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1haW5wYWdlKTtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICAgIGNvbnN0IGl0ZW0gPSBwb3N0TGlzdC5maWx0ZXIoKHYpID0+IHYuaWQgPT0gcHJvcHMuaWQgPyB2IDogbnVsbCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxEZXRhaWxJdGVtIHBvc3RJdGVtID0ge2l0ZW19Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQYWdlOyJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIkRldGFpbEl0ZW0iLCJEZXRhaWxQYWdlIiwicHJvcHMiLCJwb3N0TGlzdCIsInN0YXRlIiwibWFpbnBhZ2UiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImZpbHRlciIsInYiLCJpZCIsInBvc3RJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DetailPage.js\n"));

/***/ })

});