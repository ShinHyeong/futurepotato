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

/***/ "./components/Comment/CommentForm.js":
/*!*******************************************!*\
  !*** ./components/Comment/CommentForm.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CommentForm = (props)=>{\n    _s();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onChangeComment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{\n        setComment(e.target.value);\n    }, []);\n    console.log(props.postId);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const onSubmit = ()=>{\n        dispatch({\n            type: \"ADD_COMMENT_REQUEST\",\n            data: comment,\n            dataw: props.postId\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-content\",\n                style: {\n                    height: 50\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"reaction-wrapper\",\n                        children: [\n                            props.checkHeart ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/like.PNG\",\n                                className: \"icon\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                                lineNumber: 20,\n                                columnNumber: 41\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/like.PNG\",\n                                className: \"icon\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                                lineNumber: 21,\n                                columnNumber: 23\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/comment.PNG\",\n                                className: \"icon\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/send.PNG\",\n                                className: \"icon\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/save.PNG\",\n                                className: \"save icon\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"likes\",\n                        children: [\n                            props.heartCount,\n                            \"좋아요\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"comment-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/smile.PNG\",\n                        className: \"icon\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"comment-box\",\n                        placeholder: \"Add a comment\",\n                        value: comment,\n                        onChange: onChangeComment\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"comment-btn\",\n                        onClick: onSubmit,\n                        children: \"post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dbtjd\\\\smilegate_front\\\\front\\\\components\\\\Comment\\\\CommentForm.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CommentForm, \"VKFjF9Dc2+xoPgUmpozrpPnrrQ4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = CommentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\nvar _c;\n$RefreshReg$(_c, \"CommentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudEZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFDTjtBQUV4QyxNQUFNRyxjQUFjLENBQUNDLFFBQVU7O0lBQzNCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNTSxrQkFBa0JQLGtEQUFXQSxDQUFDLENBQUNRLElBQU07UUFDdkNGLFdBQVdFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QixHQUFHLEVBQUU7SUFDTEMsUUFBUUMsR0FBRyxDQUFDUixNQUFNUyxNQUFNO0lBQ3hCLE1BQU1DLFdBQVdaLHdEQUFXQTtJQUU1QixNQUFNYSxXQUFXLElBQU07UUFDbkJELFNBQVM7WUFBQ0UsTUFBTTtZQUF1QkMsTUFBTVo7WUFBU2EsT0FBTWQsTUFBTVMsTUFBTTtRQUFBO0lBQzVFO0lBRUEscUJBQ0ksOERBQUNNOzswQkFDRyw4REFBQ0E7Z0JBQUlDLFdBQVU7Z0JBQWVDLE9BQU87b0JBQUNDLFFBQU87Z0JBQUU7O2tDQUMzQyw4REFBQ0g7d0JBQUlDLFdBQVU7OzRCQUNWaEIsTUFBTW1CLFVBQVUsaUJBQUcsOERBQUNDO2dDQUFJQyxLQUFJO2dDQUFZTCxXQUFVO2dDQUFPTSxLQUFJOzs7OzswREFDNUQsOERBQUNGO2dDQUFJQyxLQUFJO2dDQUFZTCxXQUFVO2dDQUFPTSxLQUFJOzs7Ozt5Q0FBSzswQ0FDakQsOERBQUNGO2dDQUFJQyxLQUFJO2dDQUFlTCxXQUFVO2dDQUFPTSxLQUFJOzs7Ozs7MENBQzdDLDhEQUFDRjtnQ0FBSUMsS0FBSTtnQ0FBWUwsV0FBVTtnQ0FBT00sS0FBSTs7Ozs7OzBDQUMxQyw4REFBQ0Y7Z0NBQUlDLEtBQUk7Z0NBQVlMLFdBQVU7Z0NBQVlNLEtBQUk7Ozs7Ozs7Ozs7OztrQ0FFbkQsOERBQUNDO3dCQUFFUCxXQUFVOzs0QkFBU2hCLE1BQU13QixVQUFVOzRCQUFDOzs7Ozs7Ozs7Ozs7OzBCQUczQyw4REFBQ1Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDSTt3QkFBSUMsS0FBSTt3QkFBYUwsV0FBVTt3QkFBT00sS0FBSTs7Ozs7O2tDQUMzQyw4REFBQ0c7d0JBQU1iLE1BQUs7d0JBQU9JLFdBQVU7d0JBQWNVLGFBQVk7d0JBQWlCcEIsT0FBT0w7d0JBQVMwQixVQUFVeEI7Ozs7OztrQ0FDbEcsOERBQUN5Qjt3QkFBT1osV0FBVTt3QkFBY2EsU0FBU2xCO2tDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkU7R0FoQ01aOztRQU1lRCxvREFBV0E7OztLQU4xQkM7QUFrQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnRGb3JtLmpzP2IyMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBvbkNoYW5nZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMucG9zdElkKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FERF9DT01NRU5UX1JFUVVFU1QnLCBkYXRhOiBjb21tZW50LCBkYXRhdzpwcm9wcy5wb3N0SWR9KVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCIgc3R5bGU9e3toZWlnaHQ6NTB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGVja0hlYXJ0ID8gPGltZyBzcmM9XCIvbGlrZS5QTkdcIiBjbGFzc05hbWU9XCJpY29uXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL2xpa2UuUE5HXCIgY2xhc3NOYW1lPVwiaWNvblwiIGFsdD1cIlwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbW1lbnQuUE5HXCIgY2xhc3NOYW1lPVwiaWNvblwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2VuZC5QTkdcIiBjbGFzc05hbWU9XCJpY29uXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zYXZlLlBOR1wiIGNsYXNzTmFtZT1cInNhdmUgaWNvblwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpa2VzXCI+e3Byb3BzLmhlYXJ0Q291bnR97KKL7JWE7JqUPC9wPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zbWlsZS5QTkdcIiBjbGFzc05hbWU9XCJpY29uXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbW1lbnQtYm94XCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBjb21tZW50XCIgIHZhbHVlPXtjb21tZW50fSBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50fS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbW1lbnQtYnRuXCIgb25DbGljaz17b25TdWJtaXR9PnBvc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07Il0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsIkNvbW1lbnRGb3JtIiwicHJvcHMiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsIm9uQ2hhbmdlQ29tbWVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0SWQiLCJkaXNwYXRjaCIsIm9uU3VibWl0IiwidHlwZSIsImRhdGEiLCJkYXRhdyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwiY2hlY2tIZWFydCIsImltZyIsInNyYyIsImFsdCIsInAiLCJoZWFydENvdW50IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Comment/CommentForm.js\n"));

/***/ })

});