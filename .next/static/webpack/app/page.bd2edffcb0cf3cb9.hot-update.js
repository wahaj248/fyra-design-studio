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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/dottedslider.module.css */ \"(app-pages-browser)/./app/dottedslider.module.css\");\n/* harmony import */ var _app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Dottedslider() {\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const cards = [\n        {\n            title: \"SMM\",\n            text: \"Creative, Content, Customers! Our high-end digital marketing agency focuses on three Cs to help you grow beyond bounds. With our social media marketing strategies bound to create a thriving environment, we position your brand as an authoritative and trustworthy source.\"\n        },\n        {\n            title: \"DRR\",\n            text: \"Creative, Content, Customers! Our high-end digital marketing agency focuses on three Cs to help you grow beyond bounds. With our social media marketing strategies bound to create a thriving environment, we position your brand as an authoritative and trustworthy source.\"\n        },\n        {\n            title: \"QRR\",\n            text: \"Creative, Content, Customers! Our high-end digital marketing agency focuses on three Cs to help you grow beyond bounds. With our social media marketing strategies bound to create a thriving environment, we position your brand as an authoritative and trustworthy source.\"\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setActiveIndex((prevIndex)=>(prevIndex + 1) % cards.length);\n        }, 5000); // Change the interval to control the auto-slide speed (in milliseconds).\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        cards.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderbg),\n        className: \"overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex px-3 py-16 flex-lg-row flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12 col-lg-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ms-lg-5 text-center text-md-start text-lg-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderh4),\n                            children: [\n                                \"USA’s Best Digital Marketing Agency \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 45\n                                }, this),\n                                \"At Your Service\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedslidertext),\n                            className: \"mt-5 leading-relaxed text-left\",\n                            children: [\n                                \"We Are the Ultimate Growth  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 37\n                                }, this),\n                                \"Accelerators\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderpara),\n                            className: \"leading-relaxed text-left\",\n                            children: [\n                                \"Your brand’s progress commences with our digital marketing \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 68\n                                }, this),\n                                \" services. With smart and proficient digital marketers, we provide \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 176\n                                }, this),\n                                \" solutions based on the client’s requirements. Our research and \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 281\n                                }, this),\n                                \"analysis department provides a distinctive edge over the \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                    className: \"hidden lg:inline-block\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 379\n                                }, this),\n                                \" competition.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderbtn),\n                                    className: \"whitespace-nowrap\",\n                                    children: \"Get Started\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedsliderbtn1),\n                                    className: \"whitespace-nowrap\",\n                                    children: \"Live Chat\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dotted),\n                    className: \"col-12 col-lg-7 flex justify-center gap-3\",\n                    children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().slider) - card, \" \").concat(index === activeIndex ? \"active\" : \"\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"bg-primary\",\n                                style: {\n                                    width: \"17rem\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/images/dottedicon2.png\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Title, {\n                                            className: \"mt-4\",\n                                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedh3),\n                                            children: card.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Text, {\n                                            className: \"mt-2\",\n                                            id: (_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dottedpara),\n                                            children: card.text\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dots)),\n                    children: cards.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\".concat((_app_dottedslider_module_css__WEBPACK_IMPORTED_MODULE_2___default().dot), \" \").concat(index === activeIndex ? \"active\" : \"\"),\n                            onClick: ()=>setActiveIndex(index)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GHR\\\\Desktop\\\\DND-my-new-feature\\\\components\\\\dottedslider\\\\Dottedslider.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Dottedslider, \"16En7kR7TbAJMjBrm+xutVNIc5Q=\");\n_c = Dottedslider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dottedslider);\nvar _c;\n$RefreshReg$(_c, \"Dottedslider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZG90dGVkc2xpZGVyL0RvdHRlZHNsaWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ0k7QUFDZjtBQUV4QyxTQUFTSzs7SUFDTCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTU8sUUFBUTtRQUNaO1lBQ0VDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtLQUVEO0lBRURSLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsV0FBV0MsWUFBWTtZQUMzQkwsZUFBZSxDQUFDTSxZQUFjLENBQUNBLFlBQVksS0FBS0wsTUFBTU0sTUFBTTtRQUM5RCxHQUFHLE9BQU8seUVBQXlFO1FBRW5GLE9BQU87WUFDTEMsY0FBY0o7UUFDaEI7SUFDRixHQUFHO1FBQUNILE1BQU1NLE1BQU07S0FBQztJQUNuQixxQkFDRSw4REFBQ0U7UUFBUUMsSUFBSWQsb0ZBQXFCO1FBQUVnQixXQUFVO2tCQUM5Qyw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdKLElBQUlkLG9GQUFxQjs7Z0NBQUU7OENBQ0ssOERBQUNvQjtvQ0FBR0osV0FBVTs7Ozs7O2dDQUEyQjs7Ozs7OztzQ0FJN0UsOERBQUNLOzRCQUFFUCxJQUFJZCxzRkFBdUI7NEJBQUVnQixXQUFVOztnQ0FBaUM7OENBQy9DLDhEQUFDSTtvQ0FBR0osV0FBVTs7Ozs7O2dDQUEyQjs7Ozs7OztzQ0FHckUsOERBQUNLOzRCQUFFUCxJQUFJZCxzRkFBdUI7NEJBQUVnQixXQUFVOztnQ0FBNEI7OENBQ1gsOERBQUNJO29DQUFHSixXQUFVOzs7Ozs7Z0NBQTJCOzhDQUFtRSw4REFBQ0k7b0NBQUdKLFdBQVU7Ozs7OztnQ0FBMkI7OENBQWdFLDhEQUFDSTtvQ0FBR0osV0FBVTs7Ozs7O2dDQUEyQjs4Q0FBeUQsOERBQUNJO29DQUFHSixXQUFVOzs7Ozs7Z0NBQTJCOzs7Ozs7O3NDQUUzWiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FBT1YsSUFBSWQscUZBQXNCO29DQUFFZ0IsV0FBVTs4Q0FBb0I7Ozs7Ozs4Q0FHbEUsOERBQUNRO29DQUFPVixJQUFJZCxzRkFBdUI7b0NBQUVnQixXQUFVOzhDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUt2RSw4REFBQ0M7b0JBQUlILElBQUlkLDRFQUFhO29CQUFFZ0IsV0FBVTs4QkFDL0JYLE1BQU11QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDYjs0QkFFQ0QsV0FBVyxHQUF5QmMsT0FBdEI5Qiw0RUFBYSxHQUFDNkIsTUFBSyxLQUF5QyxPQUF0Q0MsVUFBVTNCLGNBQWMsV0FBVztzQ0FFdkUsNEVBQUNGLDREQUFJQTtnQ0FBQ2UsV0FBVTtnQ0FBYWdCLE9BQU87b0NBQUVDLE9BQU87Z0NBQVE7MENBQ25ELDRFQUFDaEMsNERBQUlBLENBQUNpQyxJQUFJOztzREFDUiw4REFBQ0M7NENBQUlDLEtBQUk7NENBQTBCQyxLQUFJOzs7Ozs7c0RBQ3ZDLDhEQUFDcEMsNERBQUlBLENBQUNxQyxLQUFLOzRDQUFDdEIsV0FBVTs0Q0FBT0YsSUFBSWQsOEVBQWU7c0RBQUc2QixLQUFLdkIsS0FBSzs7Ozs7O3NEQUM3RCw4REFBQ0wsNERBQUlBLENBQUN1QyxJQUFJOzRDQUFDeEIsV0FBVTs0Q0FBT0YsSUFBSWQsZ0ZBQWlCO3NEQUM5QzZCLEtBQUt0QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFSWHVCOzs7Ozs7Ozs7OzhCQWVYLDhEQUFDYjtvQkFBS0QsV0FBVyxHQUFlLE9BQVpoQiwwRUFBVzs4QkFDNUJLLE1BQU11QixHQUFHLENBQUMsQ0FBQ2UsR0FBR2Isc0JBQ2IsOERBQUNjOzRCQUVDNUIsV0FBVyxHQUFpQmMsT0FBZDlCLHlFQUFVLEVBQUMsS0FBeUMsT0FBdEM4QixVQUFVM0IsY0FBYyxXQUFXOzRCQUMvRDJDLFNBQVMsSUFBTTFDLGVBQWUwQjsyQkFGekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakI7R0FsRlM1QjtLQUFBQTtBQW9GVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RvdHRlZHNsaWRlci9Eb3R0ZWRzbGlkZXIuanN4PzkyYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL2FwcC9kb3R0ZWRzbGlkZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XHJcblxyXG5mdW5jdGlvbiBEb3R0ZWRzbGlkZXIoKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2FyZHMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1NNTScsXHJcbiAgICAgICAgdGV4dDogJ0NyZWF0aXZlLCBDb250ZW50LCBDdXN0b21lcnMhIE91ciBoaWdoLWVuZCBkaWdpdGFsIG1hcmtldGluZyBhZ2VuY3kgZm9jdXNlcyBvbiB0aHJlZSBDcyB0byBoZWxwIHlvdSBncm93IGJleW9uZCBib3VuZHMuIFdpdGggb3VyIHNvY2lhbCBtZWRpYSBtYXJrZXRpbmcgc3RyYXRlZ2llcyBib3VuZCB0byBjcmVhdGUgYSB0aHJpdmluZyBlbnZpcm9ubWVudCwgd2UgcG9zaXRpb24geW91ciBicmFuZCBhcyBhbiBhdXRob3JpdGF0aXZlIGFuZCB0cnVzdHdvcnRoeSBzb3VyY2UuJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnRFJSJyxcclxuICAgICAgICB0ZXh0OiAnQ3JlYXRpdmUsIENvbnRlbnQsIEN1c3RvbWVycyEgT3VyIGhpZ2gtZW5kIGRpZ2l0YWwgbWFya2V0aW5nIGFnZW5jeSBmb2N1c2VzIG9uIHRocmVlIENzIHRvIGhlbHAgeW91IGdyb3cgYmV5b25kIGJvdW5kcy4gV2l0aCBvdXIgc29jaWFsIG1lZGlhIG1hcmtldGluZyBzdHJhdGVnaWVzIGJvdW5kIHRvIGNyZWF0ZSBhIHRocml2aW5nIGVudmlyb25tZW50LCB3ZSBwb3NpdGlvbiB5b3VyIGJyYW5kIGFzIGFuIGF1dGhvcml0YXRpdmUgYW5kIHRydXN0d29ydGh5IHNvdXJjZS4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdRUlInLFxyXG4gICAgICAgIHRleHQ6ICdDcmVhdGl2ZSwgQ29udGVudCwgQ3VzdG9tZXJzISBPdXIgaGlnaC1lbmQgZGlnaXRhbCBtYXJrZXRpbmcgYWdlbmN5IGZvY3VzZXMgb24gdGhyZWUgQ3MgdG8gaGVscCB5b3UgZ3JvdyBiZXlvbmQgYm91bmRzLiBXaXRoIG91ciBzb2NpYWwgbWVkaWEgbWFya2V0aW5nIHN0cmF0ZWdpZXMgYm91bmQgdG8gY3JlYXRlIGEgdGhyaXZpbmcgZW52aXJvbm1lbnQsIHdlIHBvc2l0aW9uIHlvdXIgYnJhbmQgYXMgYW4gYXV0aG9yaXRhdGl2ZSBhbmQgdHJ1c3R3b3J0aHkgc291cmNlLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIEFkZCBtb3JlIGNhcmQgb2JqZWN0cyBoZXJlXHJcbiAgICBdO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgY2FyZHMubGVuZ3RoKTtcclxuICAgICAgfSwgNTAwMCk7IC8vIENoYW5nZSB0aGUgaW50ZXJ2YWwgdG8gY29udHJvbCB0aGUgYXV0by1zbGlkZSBzcGVlZCAoaW4gbWlsbGlzZWNvbmRzKS5cclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtjYXJkcy5sZW5ndGhdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJiZ30gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggcHgtMyBweS0xNiBmbGV4LWxnLXJvdyBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTUgZmxleCBmbGV4LWNvbCBtZDppdGVtcy1zdGFydCBtZDp0ZXh0LWxlZnQgbWItMTYgbWQ6bWItMCBpdGVtcy1jZW50ZXIgbXMtbGctNSB0ZXh0LWNlbnRlciB0ZXh0LW1kLXN0YXJ0IHRleHQtbGctc3RhcnRcIj5cclxuICAgICAgICA8aDQgaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJoNH0+XHJcbiAgICAgICAgVVNB4oCZcyBCZXN0IERpZ2l0YWwgTWFya2V0aW5nIEFnZW5jeSA8YnIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+XHJcbkF0IFlvdXIgU2VydmljZVxyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxwIGlkPXtzdHlsZXMuZG90dGVkc2xpZGVydGV4dH0gY2xhc3NOYW1lPVwibXQtNSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgV2UgQXJlIHRoZSBVbHRpbWF0ZSBHcm93dGggIDxiciBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICBBY2NlbGVyYXRvcnNcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJwYXJhfSBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgWW91ciBicmFuZOKAmXMgcHJvZ3Jlc3MgY29tbWVuY2VzIHdpdGggb3VyIGRpZ2l0YWwgbWFya2V0aW5nIDxiciBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz4gc2VydmljZXMuIFdpdGggc21hcnQgYW5kIHByb2ZpY2llbnQgZGlnaXRhbCBtYXJrZXRlcnMsIHdlIHByb3ZpZGUgPGJyIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUtYmxvY2tcIiAvPiBzb2x1dGlvbnMgYmFzZWQgb24gdGhlIGNsaWVudOKAmXMgcmVxdWlyZW1lbnRzLiBPdXIgcmVzZWFyY2ggYW5kIDxiciBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIgLz5hbmFseXNpcyBkZXBhcnRtZW50IHByb3ZpZGVzIGEgZGlzdGluY3RpdmUgZWRnZSBvdmVyIHRoZSA8YnIgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9ja1wiIC8+IGNvbXBldGl0aW9uLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJidG59IGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5kb3R0ZWRzbGlkZXJidG4xfSBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICBMaXZlIENoYXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD17c3R5bGVzLmRvdHRlZH0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy03IGZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICB7Y2FyZHMubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zbGlkZXItY2FyZH0gJHtpbmRleCA9PT0gYWN0aXZlSW5kZXggPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJnLXByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogJzE3cmVtJyB9fT5cclxuICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2RvdHRlZGljb24yLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJtdC00XCIgaWQ9e3N0eWxlcy5kb3R0ZWRoM30+e2NhcmQudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJtdC0yXCIgaWQ9e3N0eWxlcy5kb3R0ZWRwYXJhfT5cclxuICAgICAgICAgICAgICAgICAge2NhcmQudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRvdHN9YH0+XHJcbiAgICAgICAge2NhcmRzLm1hcCgoXywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRvdH0gJHtpbmRleCA9PT0gYWN0aXZlSW5kZXggPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUluZGV4KGluZGV4KX1cclxuICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG90dGVkc2xpZGVyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQ2FyZCIsIkRvdHRlZHNsaWRlciIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJjYXJkcyIsInRpdGxlIiwidGV4dCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwic2VjdGlvbiIsImlkIiwiZG90dGVkc2xpZGVyYmciLCJjbGFzc05hbWUiLCJkaXYiLCJoNCIsImRvdHRlZHNsaWRlcmg0IiwiYnIiLCJwIiwiZG90dGVkc2xpZGVydGV4dCIsImRvdHRlZHNsaWRlcnBhcmEiLCJidXR0b24iLCJkb3R0ZWRzbGlkZXJidG4iLCJkb3R0ZWRzbGlkZXJidG4xIiwiZG90dGVkIiwibWFwIiwiY2FyZCIsImluZGV4Iiwic2xpZGVyIiwic3R5bGUiLCJ3aWR0aCIsIkJvZHkiLCJpbWciLCJzcmMiLCJhbHQiLCJUaXRsZSIsImRvdHRlZGgzIiwiVGV4dCIsImRvdHRlZHBhcmEiLCJkb3RzIiwiXyIsInNwYW4iLCJkb3QiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dottedslider/Dottedslider.jsx\n"));

/***/ })

});