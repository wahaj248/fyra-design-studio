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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/dottedslider.module.css */ \"(app-pages-browser)/./app/dottedslider.module.css\");\n/* harmony import */ var _app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Dottedslider() {\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const cards = [\n        {\n            title: \"SMM\",\n            text: \"Creative, Content, Customers! Our high-end digital marketing agency focuses on three Cs to help you grow beyond bounds. With our social media marketing strategies bound to create a thriving environment, we position your brand as an authoritative and trustworthy source.\"\n        },\n        {\n            title: \"DRR\",\n            text: \"Creative, Content, Customers! Our high-end digital marketing agency focuses on three Cs to help you grow beyond bounds. With our social media marketing strategies bound to create a thriving environment, we position your brand as an authoritative and trustworthy source.\"\n        },\n        {\n            title: \"QRR\",\n            text: \"Creative, Content, Customers! Our high-end digital marketing agency focuses on three Cs to help you grow beyond bounds. With our social media marketing strategies bound to create a thriving environment, we position your brand as an authoritative and trustworthy source.\"\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setActiveIndex((prevIndex)=>(prevIndex + 1) % cards.length);\n        }, 5000); // Change the interval to control the auto-slide speed (in milliseconds).\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        cards.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderbg),\n        className: \"overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex px-3 py-16 flex-lg-row flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12 col-lg-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ms-lg-5 text-center text-md-start text-lg-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderh4),\n                            children: [\n                                \"USA’s Best Digital Marketing Agency \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 45\n                                }, this),\n                                \"At Your Service\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedslidertext),\n                            className: \"mt-5 leading-relaxed text-left\",\n                            children: [\n                                \"We Are the Ultimate Growth  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 37\n                                }, this),\n                                \"Accelerators\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderpara),\n                            className: \"leading-relaxed text-left\",\n                            children: [\n                                \"Your brand’s progress commences with our digital marketing \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 68\n                                }, this),\n                                \" services. With smart and proficient digital marketers, we provide \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 176\n                                }, this),\n                                \" solutions based on the client’s requirements. Our research and \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 281\n                                }, this),\n                                \"analysis department provides a distinctive edge over the \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 379\n                                }, this),\n                                \" competition.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderbtn),\n                                    className: \"whitespace-nowrap\",\n                                    children: \"Get Started\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderbtn1),\n                                    className: \"whitespace-nowrap\",\n                                    children: \"Live Chat\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dotted),\n                    className: \"col-12 col-lg-7 flex justify-center gap-3\",\n                    children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"slider-card \".concat(index === activeIndex ? \"active\" : \"\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"bg-primary\",\n                                style: {\n                                    width: \"17rem\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/images/dottedicon2.png\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Title, {\n                                            className: \"mt-4\",\n                                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedh3),\n                                            children: card.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Text, {\n                                            className: \"mt-2\",\n                                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedpara),\n                                            children: card.text\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dots)),\n                    children: cards.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\".concat((_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dot), \" \").concat(index === activeIndex ? \"active\" : \"\"),\n                            onClick: ()=>setActiveIndex(index)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Dottedslider, \"16En7kR7TbAJMjBrm+xutVNIc5Q=\");\n_c = Dottedslider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dottedslider);\nvar _c;\n$RefreshReg$(_c, \"Dottedslider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZG90dGVkc2xpZGVyL0RvdHRlZHNsaWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ0k7QUFDZjtBQUV4QyxTQUFTSzs7SUFDTCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTU8sUUFBUTtRQUNaO1lBQ0VDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtLQUVEO0lBRURSLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsV0FBV0MsWUFBWTtZQUMzQkwsZUFBZSxDQUFDTSxZQUFjLENBQUNBLFlBQVksS0FBS0wsTUFBTU0sTUFBTTtRQUM5RCxHQUFHLE9BQU8seUVBQXlFO1FBRW5GLE9BQU87WUFDTEMsY0FBY0o7UUFDaEI7SUFDRixHQUFHO1FBQUNILE1BQU1NLE1BQU07S0FBQztJQUNuQixxQkFDRSw4REFBQ0U7UUFBUUMsSUFBSWQsb0ZBQXFCO1FBQUVnQixXQUFVO2tCQUM5Qyw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdKLElBQUlkLG9GQUFxQjs7Z0NBQUU7OENBQ0ssOERBQUNvQjtvQ0FBR0osV0FBVTs7Ozs7O2dDQUEyQjs7Ozs7OztzQ0FJN0UsOERBQUNLOzRCQUFFUCxJQUFJZCxzRkFBdUI7NEJBQUVnQixXQUFVOztnQ0FBaUM7OENBQy9DLDhEQUFDSTtvQ0FBR0osV0FBVTs7Ozs7O2dDQUEyQjs7Ozs7OztzQ0FHckUsOERBQUNLOzRCQUFFUCxJQUFJZCxzRkFBdUI7NEJBQUVnQixXQUFVOztnQ0FBNEI7OENBQ1gsOERBQUNJO29DQUFHSixXQUFVOzs7Ozs7Z0NBQTJCOzhDQUFtRSw4REFBQ0k7b0NBQUdKLFdBQVU7Ozs7OztnQ0FBMkI7OENBQWdFLDhEQUFDSTtvQ0FBR0osV0FBVTs7Ozs7O2dDQUEyQjs4Q0FBeUQsOERBQUNJO29DQUFHSixXQUFVOzs7Ozs7Z0NBQTJCOzs7Ozs7O3NDQUUzWiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FBT1YsSUFBSWQscUZBQXNCO29DQUFFZ0IsV0FBVTs4Q0FBb0I7Ozs7Ozs4Q0FHbEUsOERBQUNRO29DQUFPVixJQUFJZCxzRkFBdUI7b0NBQUVnQixXQUFVOzhDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUt2RSw4REFBQ0M7b0JBQUlILElBQUlkLDRFQUFhO29CQUFFZ0IsV0FBVTs4QkFDL0JYLE1BQU11QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDYjs0QkFFQ0QsV0FBVyxlQUFxRCxPQUF0Q2MsVUFBVTNCLGNBQWMsV0FBVztzQ0FFN0QsNEVBQUNGLDREQUFJQTtnQ0FBQ2UsV0FBVTtnQ0FBYWUsT0FBTztvQ0FBRUMsT0FBTztnQ0FBUTswQ0FDbkQsNEVBQUMvQiw0REFBSUEsQ0FBQ2dDLElBQUk7O3NEQUNSLDhEQUFDQzs0Q0FBSUMsS0FBSTs0Q0FBMEJDLEtBQUk7Ozs7OztzREFDdkMsOERBQUNuQyw0REFBSUEsQ0FBQ29DLEtBQUs7NENBQUNyQixXQUFVOzRDQUFPRixJQUFJZCw4RUFBZTtzREFBRzZCLEtBQUt2QixLQUFLOzs7Ozs7c0RBQzdELDhEQUFDTCw0REFBSUEsQ0FBQ3NDLElBQUk7NENBQUN2QixXQUFVOzRDQUFPRixJQUFJZCxnRkFBaUI7c0RBQzlDNkIsS0FBS3RCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQVJYdUI7Ozs7Ozs7Ozs7OEJBZVgsOERBQUNiO29CQUFLRCxXQUFXLEdBQWUsT0FBWmhCLDBFQUFXOzhCQUM1QkssTUFBTXVCLEdBQUcsQ0FBQyxDQUFDYyxHQUFHWixzQkFDYiw4REFBQ2E7NEJBRUMzQixXQUFXLEdBQWlCYyxPQUFkOUIseUVBQVUsRUFBQyxLQUF5QyxPQUF0QzhCLFVBQVUzQixjQUFjLFdBQVc7NEJBQy9EMEMsU0FBUyxJQUFNekMsZUFBZTBCOzJCQUZ6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqQjtHQWxGUzVCO0tBQUFBO0FBb0ZULCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZG90dGVkc2xpZGVyL0RvdHRlZHNsaWRlci5qc3g/OTJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vYXBwL2RvdHRlZHNsaWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuXHJcbmZ1bmN0aW9uIERvdHRlZHNsaWRlcigpIHtcclxuICAgIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjYXJkcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnU01NJyxcclxuICAgICAgICB0ZXh0OiAnQ3JlYXRpdmUsIENvbnRlbnQsIEN1c3RvbWVycyEgT3VyIGhpZ2gtZW5kIGRpZ2l0YWwgbWFya2V0aW5nIGFnZW5jeSBmb2N1c2VzIG9uIHRocmVlIENzIHRvIGhlbHAgeW91IGdyb3cgYmV5b25kIGJvdW5kcy4gV2l0aCBvdXIgc29jaWFsIG1lZGlhIG1hcmtldGluZyBzdHJhdGVnaWVzIGJvdW5kIHRvIGNyZWF0ZSBhIHRocml2aW5nIGVudmlyb25tZW50LCB3ZSBwb3NpdGlvbiB5b3VyIGJyYW5kIGFzIGFuIGF1dGhvcml0YXRpdmUgYW5kIHRydXN0d29ydGh5IHNvdXJjZS4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdEUlInLFxyXG4gICAgICAgIHRleHQ6ICdDcmVhdGl2ZSwgQ29udGVudCwgQ3VzdG9tZXJzISBPdXIgaGlnaC1lbmQgZGlnaXRhbCBtYXJrZXRpbmcgYWdlbmN5IGZvY3VzZXMgb24gdGhyZWUgQ3MgdG8gaGVscCB5b3UgZ3JvdyBiZXlvbmQgYm91bmRzLiBXaXRoIG91ciBzb2NpYWwgbWVkaWEgbWFya2V0aW5nIHN0cmF0ZWdpZXMgYm91bmQgdG8gY3JlYXRlIGEgdGhyaXZpbmcgZW52aXJvbm1lbnQsIHdlIHBvc2l0aW9uIHlvdXIgYnJhbmQgYXMgYW4gYXV0aG9yaXRhdGl2ZSBhbmQgdHJ1c3R3b3J0aHkgc291cmNlLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1FSUicsXHJcbiAgICAgICAgdGV4dDogJ0NyZWF0aXZlLCBDb250ZW50LCBDdXN0b21lcnMhIE91ciBoaWdoLWVuZCBkaWdpdGFsIG1hcmtldGluZyBhZ2VuY3kgZm9jdXNlcyBvbiB0aHJlZSBDcyB0byBoZWxwIHlvdSBncm93IGJleW9uZCBib3VuZHMuIFdpdGggb3VyIHNvY2lhbCBtZWRpYSBtYXJrZXRpbmcgc3RyYXRlZ2llcyBib3VuZCB0byBjcmVhdGUgYSB0aHJpdmluZyBlbnZpcm9ubWVudCwgd2UgcG9zaXRpb24geW91ciBicmFuZCBhcyBhbiBhdXRob3JpdGF0aXZlIGFuZCB0cnVzdHdvcnRoeSBzb3VyY2UuJyxcclxuICAgICAgfSxcclxuICAgICAgLy8gQWRkIG1vcmUgY2FyZCBvYmplY3RzIGhlcmVcclxuICAgIF07XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmVJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSBjYXJkcy5sZW5ndGgpO1xyXG4gICAgICB9LCA1MDAwKTsgLy8gQ2hhbmdlIHRoZSBpbnRlcnZhbCB0byBjb250cm9sIHRoZSBhdXRvLXNsaWRlIHNwZWVkIChpbiBtaWxsaXNlY29uZHMpLlxyXG4gIFxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW2NhcmRzLmxlbmd0aF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD17c3R5bGVzLmRvdHRlZHNsaWRlcmJnfSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBweC0zIHB5LTE2IGZsZXgtbGctcm93IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNSBmbGV4IGZsZXgtY29sIG1kOml0ZW1zLXN0YXJ0IG1kOnRleHQtbGVmdCBtYi0xNiBtZDptYi0wIGl0ZW1zLWNlbnRlciBtcy1sZy01IHRleHQtY2VudGVyIHRleHQtbWQtc3RhcnQgdGV4dC1sZy1zdGFydFwiPlxyXG4gICAgICAgIDxoNCBpZD17c3R5bGVzLmRvdHRlZHNsaWRlcmg0fT5cclxuICAgICAgICBVU0HigJlzIEJlc3QgRGlnaXRhbCBNYXJrZXRpbmcgQWdlbmN5IDxiciBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz5cclxuQXQgWW91ciBTZXJ2aWNlXHJcbiAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgPHAgaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJ0ZXh0fSBjbGFzc05hbWU9XCJtdC01IGxlYWRpbmctcmVsYXhlZCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICBXZSBBcmUgdGhlIFVsdGltYXRlIEdyb3d0aCAgPGJyIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPlxyXG4gICAgICAgIEFjY2VsZXJhdG9yc1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBpZD17c3R5bGVzLmRvdHRlZHNsaWRlcnBhcmF9IGNsYXNzTmFtZT1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICBZb3VyIGJyYW5k4oCZcyBwcm9ncmVzcyBjb21tZW5jZXMgd2l0aCBvdXIgZGlnaXRhbCBtYXJrZXRpbmcgPGJyIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPiBzZXJ2aWNlcy4gV2l0aCBzbWFydCBhbmQgcHJvZmljaWVudCBkaWdpdGFsIG1hcmtldGVycywgd2UgcHJvdmlkZSA8YnIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+IHNvbHV0aW9ucyBiYXNlZCBvbiB0aGUgY2xpZW504oCZcyByZXF1aXJlbWVudHMuIE91ciByZXNlYXJjaCBhbmQgPGJyIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPmFuYWx5c2lzIGRlcGFydG1lbnQgcHJvdmlkZXMgYSBkaXN0aW5jdGl2ZSBlZGdlIG92ZXIgdGhlIDxiciBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz4gY29tcGV0aXRpb24uXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLmRvdHRlZHNsaWRlcmJ0bn0gY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLmRvdHRlZHNsaWRlcmJ0bjF9IGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgIExpdmUgQ2hhdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuZG90dGVkfSBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTcgZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgIHtjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHNsaWRlci1jYXJkICR7aW5kZXggPT09IGFjdGl2ZUluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJiZy1wcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6ICcxN3JlbScgfX0+XHJcbiAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kb3R0ZWRpY29uMi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPVwibXQtNFwiIGlkPXtzdHlsZXMuZG90dGVkaDN9PntjYXJkLnRpdGxlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPVwibXQtMlwiIGlkPXtzdHlsZXMuZG90dGVkcGFyYX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXJkLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9e2Ake3N0eWxlcy5kb3RzfWB9PlxyXG4gICAgICAgIHtjYXJkcy5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5kb3R9ICR7aW5kZXggPT09IGFjdGl2ZUluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJbmRleChpbmRleCl9XHJcbiAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvdHRlZHNsaWRlclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkNhcmQiLCJEb3R0ZWRzbGlkZXIiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiY2FyZHMiLCJ0aXRsZSIsInRleHQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldkluZGV4IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInNlY3Rpb24iLCJpZCIsImRvdHRlZHNsaWRlcmJnIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDQiLCJkb3R0ZWRzbGlkZXJoNCIsImJyIiwicCIsImRvdHRlZHNsaWRlcnRleHQiLCJkb3R0ZWRzbGlkZXJwYXJhIiwiYnV0dG9uIiwiZG90dGVkc2xpZGVyYnRuIiwiZG90dGVkc2xpZGVyYnRuMSIsImRvdHRlZCIsIm1hcCIsImNhcmQiLCJpbmRleCIsInN0eWxlIiwid2lkdGgiLCJCb2R5IiwiaW1nIiwic3JjIiwiYWx0IiwiVGl0bGUiLCJkb3R0ZWRoMyIsIlRleHQiLCJkb3R0ZWRwYXJhIiwiZG90cyIsIl8iLCJzcGFuIiwiZG90Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dottedslider/Dottedslider.jsx\n"));

/***/ })

});