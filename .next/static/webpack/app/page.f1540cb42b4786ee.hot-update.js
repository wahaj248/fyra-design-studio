"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/dottedslider/Dottedslider.jsx":
/*!**************************************************!*\
  !*** ./components/dottedslider/Dottedslider.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/dottedslider.module.css */ \"(app-pages-browser)/./app/dottedslider.module.css\");\n/* harmony import */ var _app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Dottedslider() {\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const cards = [\n        {\n            title: \"SMM\",\n            text: \"Creative, Content, Customers! Our high-end digital marketing agency focuses on three Cs to help you grow beyond bounds. With our social media marketing strategies bound to create a thriving environment, we position your brand as an authoritative and trustworthy source.\"\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setActiveIndex((prevIndex)=>(prevIndex + 1) % cards.length);\n        }, 300); // Auto-slide every 300ms.\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        cards.length\n    ]);\n    const handleDotClick = (index)=>{\n        setActiveIndex(index);\n    };\n    const dotStyle = {\n        width: \"10px\",\n        height: \"10px\",\n        borderRadius: \"50%\",\n        backgroundColor: \"gray\",\n        margin: \"0 5px\",\n        cursor: \"pointer\"\n    };\n    const activeDotStyle = {\n        backgroundColor: \"black\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderbg),\n        className: \"overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex px-3 py-16 flex-lg-row flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12 col-lg-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ms-lg-5 text-center text-md-start text-lg-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderh4),\n                            children: [\n                                \"USA’s Best Digital Marketing Agency \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 45\n                                }, this),\n                                \"At Your Service\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedslidertext),\n                            className: \"mt-5 leading-relaxed text-left\",\n                            children: [\n                                \"We Are the Ultimate Growth  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 37\n                                }, this),\n                                \"Accelerators\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderpara),\n                            className: \"leading-relaxed text-left\",\n                            children: [\n                                \"Your brand’s progress commences with our digital marketing \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 68\n                                }, this),\n                                \" services. With smart and proficient digital marketers, we provide \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 176\n                                }, this),\n                                \" solutions based on the client’s requirements. Our research and \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 281\n                                }, this),\n                                \"analysis department provides a distinctive edge over the \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 379\n                                }, this),\n                                \" competition.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderbtn),\n                                    className: \"whitespace-nowrap\",\n                                    children: \"Get Started\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderbtn1),\n                                    className: \"whitespace-nowrap\",\n                                    children: \"Live Chat\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12 col-lg-7 flex justify-center gap-3\",\n                    children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"slider-card \".concat(index === activeIndex ? \"active\" : \"\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"bg-primary\",\n                                style: {\n                                    width: \"17rem\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/images/dottedicon2.png\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Title, {\n                                            className: \"mt-4\",\n                                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedh3),\n                                            children: card.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Text, {\n                                            className: \"mt-2\",\n                                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedpara),\n                                            children: card.text\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dots\",\n                    children: cards.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                ...dotStyle,\n                                ...index === activeIndex ? activeDotStyle : {}\n                            },\n                            onClick: ()=>handleDotClick(index)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Dottedslider, \"16En7kR7TbAJMjBrm+xutVNIc5Q=\");\n_c = Dottedslider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dottedslider);\nvar _c;\n$RefreshReg$(_c, \"Dottedslider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZG90dGVkc2xpZGVyL0RvdHRlZHNsaWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ0k7QUFDZjtBQUV4QyxTQUFTSzs7SUFDTCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTU8sUUFBUTtRQUNaO1lBQ0VDLE9BQU87WUFDUEMsTUFBTTtRQUNSO0tBRUQ7SUFFRFIsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxXQUFXQyxZQUFZO1lBQzNCTCxlQUFlLENBQUNNLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLTCxNQUFNTSxNQUFNO1FBQzlELEdBQUcsTUFBTSwwQkFBMEI7UUFFbkMsT0FBTztZQUNMQyxjQUFjSjtRQUNoQjtJQUNGLEdBQUc7UUFBQ0gsTUFBTU0sTUFBTTtLQUFDO0lBRWpCLE1BQU1FLGlCQUFpQixDQUFDQztRQUN0QlYsZUFBZVU7SUFDakI7SUFDQSxNQUFNQyxXQUFXO1FBQ2JDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLGlCQUFpQjtRQUNqQkMsUUFBUTtRQUNSQyxRQUFRO0lBQ1Y7SUFFQSxNQUFNQyxpQkFBaUI7UUFDckJILGlCQUFpQjtJQUNuQjtJQUNKLHFCQUNFLDhEQUFDSTtRQUFRQyxJQUFJeEIsb0ZBQXFCO1FBQUUwQixXQUFVO2tCQUM5Qyw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdKLElBQUl4QixvRkFBcUI7O2dDQUFFOzhDQUNLLDhEQUFDOEI7b0NBQUdKLFdBQVU7Ozs7OztnQ0FBMkI7Ozs7Ozs7c0NBSTdFLDhEQUFDSzs0QkFBRVAsSUFBSXhCLHNGQUF1Qjs0QkFBRTBCLFdBQVU7O2dDQUFpQzs4Q0FDL0MsOERBQUNJO29DQUFHSixXQUFVOzs7Ozs7Z0NBQTJCOzs7Ozs7O3NDQUdyRSw4REFBQ0s7NEJBQUVQLElBQUl4QixzRkFBdUI7NEJBQUUwQixXQUFVOztnQ0FBNEI7OENBQ1gsOERBQUNJO29DQUFHSixXQUFVOzs7Ozs7Z0NBQTJCOzhDQUFtRSw4REFBQ0k7b0NBQUdKLFdBQVU7Ozs7OztnQ0FBMkI7OENBQWdFLDhEQUFDSTtvQ0FBR0osV0FBVTs7Ozs7O2dDQUEyQjs4Q0FBeUQsOERBQUNJO29DQUFHSixXQUFVOzs7Ozs7Z0NBQTJCOzs7Ozs7O3NDQUUzWiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FBT1YsSUFBSXhCLHFGQUFzQjtvQ0FBRTBCLFdBQVU7OENBQW9COzs7Ozs7OENBR2xFLDhEQUFDUTtvQ0FBT1YsSUFBSXhCLHNGQUF1QjtvQ0FBRTBCLFdBQVU7OENBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3hFLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDWHJCLE1BQU1nQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTXhCLHNCQUNoQiw4REFBQ2E7NEJBRUNELFdBQVcsZUFBcUQsT0FBdENaLFVBQVVYLGNBQWMsV0FBVztzQ0FFN0QsNEVBQUNGLDREQUFJQTtnQ0FBQ3lCLFdBQVU7Z0NBQWFhLE9BQU87b0NBQUV2QixPQUFPO2dDQUFROzBDQUNuRCw0RUFBQ2YsNERBQUlBLENBQUN1QyxJQUFJOztzREFDUiw4REFBQ0M7NENBQUlDLEtBQUk7NENBQTBCQyxLQUFJOzs7Ozs7c0RBQ3ZDLDhEQUFDMUMsNERBQUlBLENBQUMyQyxLQUFLOzRDQUFDbEIsV0FBVTs0Q0FBT0YsSUFBSXhCLDhFQUFlO3NEQUFHc0MsS0FBS2hDLEtBQUs7Ozs7OztzREFDN0QsOERBQUNMLDREQUFJQSxDQUFDNkMsSUFBSTs0Q0FBQ3BCLFdBQVU7NENBQU9GLElBQUl4QixnRkFBaUI7c0RBQzlDc0MsS0FBSy9CLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQVJYTzs7Ozs7Ozs7Ozs4QkFlWCw4REFBQ2E7b0JBQUlELFdBQVU7OEJBQ1pyQixNQUFNZ0MsR0FBRyxDQUFDLENBQUNXLEdBQUdsQyxzQkFDYiw4REFBQ21DOzRCQUVDVixPQUFPO2dDQUNMLEdBQUd4QixRQUFRO2dDQUNYLEdBQUlELFVBQVVYLGNBQWNtQixpQkFBaUIsQ0FBQyxDQUFDOzRCQUNqRDs0QkFDQTRCLFNBQVMsSUFBTXJDLGVBQWVDOzJCQUx6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlqQjtHQTdGU1o7S0FBQUE7QUErRlQsK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kb3R0ZWRzbGlkZXIvRG90dGVkc2xpZGVyLmpzeD85MmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9hcHAvZG90dGVkc2xpZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xyXG5cclxuZnVuY3Rpb24gRG90dGVkc2xpZGVyKCkge1xyXG4gICAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNhcmRzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTTU0nLFxyXG4gICAgICAgIHRleHQ6ICdDcmVhdGl2ZSwgQ29udGVudCwgQ3VzdG9tZXJzISBPdXIgaGlnaC1lbmQgZGlnaXRhbCBtYXJrZXRpbmcgYWdlbmN5IGZvY3VzZXMgb24gdGhyZWUgQ3MgdG8gaGVscCB5b3UgZ3JvdyBiZXlvbmQgYm91bmRzLiBXaXRoIG91ciBzb2NpYWwgbWVkaWEgbWFya2V0aW5nIHN0cmF0ZWdpZXMgYm91bmQgdG8gY3JlYXRlIGEgdGhyaXZpbmcgZW52aXJvbm1lbnQsIHdlIHBvc2l0aW9uIHlvdXIgYnJhbmQgYXMgYW4gYXV0aG9yaXRhdGl2ZSBhbmQgdHJ1c3R3b3J0aHkgc291cmNlLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIEFkZCBtb3JlIGNhcmQgb2JqZWN0cyBoZXJlXHJcbiAgICBdO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgY2FyZHMubGVuZ3RoKTtcclxuICAgICAgfSwgMzAwKTsgLy8gQXV0by1zbGlkZSBldmVyeSAzMDBtcy5cclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtjYXJkcy5sZW5ndGhdKTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZURvdENsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZUluZGV4KGluZGV4KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBkb3RTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDogJzEwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgbWFyZ2luOiAnMCA1cHgnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGFjdGl2ZURvdFN0eWxlID0ge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJiZ30gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggcHgtMyBweS0xNiBmbGV4LWxnLXJvdyBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTUgZmxleCBmbGV4LWNvbCBtZDppdGVtcy1zdGFydCBtZDp0ZXh0LWxlZnQgbWItMTYgbWQ6bWItMCBpdGVtcy1jZW50ZXIgbXMtbGctNSB0ZXh0LWNlbnRlciB0ZXh0LW1kLXN0YXJ0IHRleHQtbGctc3RhcnRcIj5cclxuICAgICAgICA8aDQgaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJoNH0+XHJcbiAgICAgICAgVVNB4oCZcyBCZXN0IERpZ2l0YWwgTWFya2V0aW5nIEFnZW5jeSA8YnIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+XHJcbkF0IFlvdXIgU2VydmljZVxyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxwIGlkPXtzdHlsZXMuZG90dGVkc2xpZGVydGV4dH0gY2xhc3NOYW1lPVwibXQtNSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgV2UgQXJlIHRoZSBVbHRpbWF0ZSBHcm93dGggIDxiciBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICBBY2NlbGVyYXRvcnNcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJwYXJhfSBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgWW91ciBicmFuZOKAmXMgcHJvZ3Jlc3MgY29tbWVuY2VzIHdpdGggb3VyIGRpZ2l0YWwgbWFya2V0aW5nIDxiciBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz4gc2VydmljZXMuIFdpdGggc21hcnQgYW5kIHByb2ZpY2llbnQgZGlnaXRhbCBtYXJrZXRlcnMsIHdlIHByb3ZpZGUgPGJyIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPiBzb2x1dGlvbnMgYmFzZWQgb24gdGhlIGNsaWVudOKAmXMgcmVxdWlyZW1lbnRzLiBPdXIgcmVzZWFyY2ggYW5kIDxiciBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz5hbmFseXNpcyBkZXBhcnRtZW50IHByb3ZpZGVzIGEgZGlzdGluY3RpdmUgZWRnZSBvdmVyIHRoZSA8YnIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+IGNvbXBldGl0aW9uLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJidG59IGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJidG4xfSBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICBMaXZlIENoYXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNyBmbGV4IGp1c3RpZnktY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2xpZGVyLWNhcmQgJHtpbmRleCA9PT0gYWN0aXZlSW5kZXggPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJnLXByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogJzE3cmVtJyB9fT5cclxuICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2RvdHRlZGljb24yLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJtdC00XCIgaWQ9e3N0eWxlcy5kb3R0ZWRoM30+e2NhcmQudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJtdC0yXCIgaWQ9e3N0eWxlcy5kb3R0ZWRwYXJhfT5cclxuICAgICAgICAgICAgICAgICAge2NhcmQudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90c1wiPlxyXG4gICAgICAgIHtjYXJkcy5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIC4uLmRvdFN0eWxlLFxyXG4gICAgICAgICAgICAgIC4uLihpbmRleCA9PT0gYWN0aXZlSW5kZXggPyBhY3RpdmVEb3RTdHlsZSA6IHt9KSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRG90Q2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb3R0ZWRzbGlkZXJcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJDYXJkIiwiRG90dGVkc2xpZGVyIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImNhcmRzIiwidGl0bGUiLCJ0ZXh0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVEb3RDbGljayIsImluZGV4IiwiZG90U3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsImN1cnNvciIsImFjdGl2ZURvdFN0eWxlIiwic2VjdGlvbiIsImlkIiwiZG90dGVkc2xpZGVyYmciLCJjbGFzc05hbWUiLCJkaXYiLCJoNCIsImRvdHRlZHNsaWRlcmg0IiwiYnIiLCJwIiwiZG90dGVkc2xpZGVydGV4dCIsImRvdHRlZHNsaWRlcnBhcmEiLCJidXR0b24iLCJkb3R0ZWRzbGlkZXJidG4iLCJkb3R0ZWRzbGlkZXJidG4xIiwibWFwIiwiY2FyZCIsInN0eWxlIiwiQm9keSIsImltZyIsInNyYyIsImFsdCIsIlRpdGxlIiwiZG90dGVkaDMiLCJUZXh0IiwiZG90dGVkcGFyYSIsIl8iLCJzcGFuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dottedslider/Dottedslider.jsx\n"));

/***/ })

});