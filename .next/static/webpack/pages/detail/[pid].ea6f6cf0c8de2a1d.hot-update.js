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

/***/ "./components/DetailPage.js":
/*!**********************************!*\
  !*** ./components/DetailPage.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Comment_CommentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comment/CommentForm */ \"./components/Comment/CommentForm.js\");\n/* harmony import */ var _Comment_CommentList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comment/CommentList */ \"./components/Comment/CommentList.js\");\n/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserInfo */ \"./components/UserInfo.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst DetailPage = (props)=>{\n    _s();\n    const { postList  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.mainpage);\n    console.log(props);\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const settings = {\n        dote: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"detail_window\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper-detail\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"left-col-detail\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        ...settings,\n                        afterChange: (slide)=>setCurrentSlide(slide),\n                        children: postList[0].imageList.map((i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: i.image,\n                                className: \"post-image\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                                lineNumber: 29,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                        lineNumber: 25,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                    lineNumber: 24,\n                    columnNumber: 25\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"right-col-detail\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"comment-post\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    borderBottom: \"1px solid lightgray;\"\n                                },\n                                className: \"post-story\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"description\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: postList[0].name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 60\n                                            }, undefined),\n                                            \" \",\n                                            postList[0].content\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"post-time\",\n                                        children: postList[0].modifiedDate\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                                lineNumber: 36,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n            lineNumber: 23,\n            columnNumber: 21\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\DetailPage.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DetailPage, \"bvAoakj3dhaosrNr5rPbR4J1J7E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = DetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\nvar _c;\n$RefreshReg$(_c, \"DetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RldGFpbFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNUO0FBQ2U7QUFDQTtBQUNkO0FBQ0Q7QUFDTztBQUNNO0FBRTlDLE1BQU1NLGFBQWEsQ0FBQ0MsUUFBVTs7SUFDMUIsTUFBTSxFQUFDQyxTQUFRLEVBQUMsR0FBR1Isd0RBQVdBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsUUFBUTtJQUN4REMsUUFBUUMsR0FBRyxDQUFDTDtJQUNaLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1jLFdBQVc7UUFDYkMsTUFBSyxJQUFJO1FBQ1RDLFVBQVMsSUFBSTtRQUNiQyxPQUFNO1FBQ05DLGNBQWM7UUFDZEMsZ0JBQWdCO0lBQ3BCO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVk7a0JBQ0wsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ2pCLG1EQUFNQTt3QkFBRSxHQUFHVSxRQUFRO3dCQUNwQlEsYUFBYSxDQUFDQyxRQUFVVixnQkFBZ0JVO2tDQUVuQ2hCLFFBQVEsQ0FBQyxFQUFFLENBQUNpQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDeEIsOERBQUNDO2dDQUFJQyxLQUFLRixFQUFFRyxLQUFLO2dDQUFFUixXQUFVO2dDQUFhUyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUk5RCw4REFBQ1Y7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDbEIsaURBQVFBOzs7OztzQ0FDVCw4REFBQ2lCOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDRDtnQ0FBSVcsT0FBTztvQ0FBQ0MsY0FBYTtnQ0FBc0I7Z0NBQUdYLFdBQVU7O2tEQUN6RCw4REFBQ1k7d0NBQUVaLFdBQVU7OzBEQUFjLDhEQUFDYTswREFBTTNCLFFBQVEsQ0FBQyxFQUFFLENBQUM0QixJQUFJOzs7Ozs7NENBQVE7NENBQUU1QixRQUFRLENBQUMsRUFBRSxDQUFDNkIsT0FBTzs7Ozs7OztrREFDL0UsOERBQUNIO3dDQUFFWixXQUFVO2tEQUFhZCxRQUFRLENBQUMsRUFBRSxDQUFDOEIsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsRjtHQXBDTWhDOztRQUNpQk4sb0RBQVdBOzs7S0FENUJNO0FBc0NOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGV0YWlsUGFnZS5qcz84NWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50L0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi9Db21tZW50L0NvbW1lbnRMaXN0XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XHJcblxyXG5jb25zdCBEZXRhaWxQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7cG9zdExpc3R9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYWlucGFnZSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RlOnRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6dHJ1ZSxcclxuICAgICAgICBzcGVlZDo1MDAsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2RldGFpbF93aW5kb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyLWRldGFpbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1jb2wtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0TGlzdFswXS5pbWFnZUxpc3QubWFwKChpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpLmltYWdlfSBjbGFzc05hbWU9XCJwb3N0LWltYWdlXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNvbC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJJbmZvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOlwiMXB4IHNvbGlkIGxpZ2h0Z3JheTtcIn19IGNsYXNzTmFtZT1cInBvc3Qtc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPjxzcGFuPntwb3N0TGlzdFswXS5uYW1lfTwvc3Bhbj4ge3Bvc3RMaXN0WzBdLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtdGltZVwiPntwb3N0TGlzdFswXS5tb2RpZmllZERhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbFBhZ2U7Il0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlU3RhdGUiLCJDb21tZW50Rm9ybSIsIkNvbW1lbnRMaXN0IiwiVXNlckluZm8iLCJTbGlkZXIiLCJEZXRhaWxQYWdlIiwicHJvcHMiLCJwb3N0TGlzdCIsInN0YXRlIiwibWFpbnBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2V0dGluZ3MiLCJkb3RlIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWZ0ZXJDaGFuZ2UiLCJzbGlkZSIsImltYWdlTGlzdCIsIm1hcCIsImkiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInN0eWxlIiwiYm9yZGVyQm90dG9tIiwicCIsInNwYW4iLCJuYW1lIiwiY29udGVudCIsIm1vZGlmaWVkRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DetailPage.js\n"));

/***/ })

});