/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/GraphQLProvider.tsx":
/*!********************************************!*\
  !*** ./src/components/GraphQLProvider.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GraphQLProvider\": () => (/* binding */ GraphQLProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafbase/apollo-link */ \"@grafbase/apollo-link\");\n/* harmony import */ var _grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/context */ \"@apollo/client/link/context\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.HttpLink({\n    uri: \"http://localhost:4000/graphql\"\n});\nconst sseLink = new _grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3__.SSELink({\n    uri: \"http://localhost:4000/graphql\"\n});\nconst GraphQLProvider = ({ children  })=>{\n    const client = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        const authMiddleware = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__.setContext)(async (_, { headers  })=>{\n            const { token  } = await fetch(\"/api/auth/handler\").then((res)=>res.json());\n            return {\n                headers: {\n                    ...headers,\n                    authorization: `Bearer ${token}`\n                }\n            };\n        });\n        return new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n            link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.from)([\n                authMiddleware,\n                (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.split)(({ query , operationName , variables  })=>(0,_grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3__.isLiveQuery)((0,graphql__WEBPACK_IMPORTED_MODULE_4__.getOperationAST)(query, operationName), variables), sseLink, httpLink)\n            ]),\n            cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\refProjct\\\\next\\\\chatbase-main\\\\Jabberr\\\\src\\\\components\\\\GraphQLProvider.tsx\",\n        lineNumber: 52,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HcmFwaFFMUHJvdmlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2dDO0FBUVI7QUFDcUM7QUFDbkI7QUFDZTtBQUV6RCxNQUFNVyxXQUFXLElBQUlSLG9EQUFRQSxDQUFDO0lBQzVCUyxLQUFLQywrQkFBd0M7QUFDL0M7QUFFQSxNQUFNRyxVQUFVLElBQUlULDBEQUFPQSxDQUFDO0lBQzFCSyxLQUFLQywrQkFBd0M7QUFDL0M7QUFFTyxNQUFNSSxrQkFBa0IsQ0FBQyxFQUFFQyxTQUFRLEVBQXFCLEdBQUs7SUFDbEUsTUFBTUMsU0FBU25CLDhDQUFPQSxDQUFDLElBQU07UUFDM0IsTUFBTW9CLGlCQUFpQlYsdUVBQVVBLENBQUMsT0FBT1csR0FBRyxFQUFFQyxRQUFPLEVBQUUsR0FBSztZQUMxRCxNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU1DLE1BQU0scUJBQXFCQyxJQUFJLENBQUMsQ0FBQ0MsTUFDdkRBLElBQUlDLElBQUk7WUFHVixPQUFPO2dCQUNMTCxTQUFTO29CQUNQLEdBQUdBLE9BQU87b0JBQ1ZNLGVBQWUsQ0FBQyxPQUFPLEVBQUVMLE1BQU0sQ0FBQztnQkFDbEM7WUFDRjtRQUNGO1FBRUEsT0FBTyxJQUFJdEIsd0RBQVlBLENBQUM7WUFDdEI0QixNQUFNdkIsb0RBQUlBLENBQUM7Z0JBQ1RjO2dCQUNBZixxREFBS0EsQ0FDSCxDQUFDLEVBQUV5QixNQUFLLEVBQUVDLGNBQWEsRUFBRUMsVUFBUyxFQUFFLEdBQ2xDeEIsa0VBQVdBLENBQUNDLHdEQUFlQSxDQUFDcUIsT0FBT0MsZ0JBQWdCQyxZQUNyRGhCLFNBQ0FMO2FBRUg7WUFDRHNCLE9BQU8sSUFBSTdCLHlEQUFhQTtRQUMxQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDRiwwREFBY0E7UUFBQ2lCLFFBQVFBO2tCQUFTRDs7Ozs7O0FBQzFDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYWJiZXJyLy4vc3JjL2NvbXBvbmVudHMvR3JhcGhRTFByb3ZpZGVyLnRzeD8zYzg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgQXBvbGxvUHJvdmlkZXIsXG4gIEh0dHBMaW5rLFxuICBJbk1lbW9yeUNhY2hlLFxuICBzcGxpdCxcbiAgZnJvbSxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBTU0VMaW5rLCBpc0xpdmVRdWVyeSB9IGZyb20gXCJAZ3JhZmJhc2UvYXBvbGxvLWxpbmtcIjtcbmltcG9ydCB7IGdldE9wZXJhdGlvbkFTVCB9IGZyb20gXCJncmFwaHFsXCI7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dFwiO1xuXG5jb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gIHVyaTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JBRkJBU0VfQVBJX1VSTCxcbn0pO1xuXG5jb25zdCBzc2VMaW5rID0gbmV3IFNTRUxpbmsoe1xuICB1cmk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dSQUZCQVNFX0FQSV9VUkwhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBHcmFwaFFMUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wc1dpdGhDaGlsZHJlbikgPT4ge1xuICBjb25zdCBjbGllbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBhdXRoTWlkZGxld2FyZSA9IHNldENvbnRleHQoYXN5bmMgKF8sIHsgaGVhZGVycyB9KSA9PiB7XG4gICAgICBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9oYW5kbGVyXCIpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgcmVzLmpzb24oKVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgbGluazogZnJvbShbXG4gICAgICAgIGF1dGhNaWRkbGV3YXJlLFxuICAgICAgICBzcGxpdChcbiAgICAgICAgICAoeyBxdWVyeSwgb3BlcmF0aW9uTmFtZSwgdmFyaWFibGVzIH0pID0+XG4gICAgICAgICAgICBpc0xpdmVRdWVyeShnZXRPcGVyYXRpb25BU1QocXVlcnksIG9wZXJhdGlvbk5hbWUpLCB2YXJpYWJsZXMpLFxuICAgICAgICAgIHNzZUxpbmssXG4gICAgICAgICAgaHR0cExpbmtcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT57Y2hpbGRyZW59PC9BcG9sbG9Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJBcG9sbG9DbGllbnQiLCJBcG9sbG9Qcm92aWRlciIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsInNwbGl0IiwiZnJvbSIsIlNTRUxpbmsiLCJpc0xpdmVRdWVyeSIsImdldE9wZXJhdGlvbkFTVCIsInNldENvbnRleHQiLCJodHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HUkFGQkFTRV9BUElfVVJMIiwic3NlTGluayIsIkdyYXBoUUxQcm92aWRlciIsImNoaWxkcmVuIiwiY2xpZW50IiwiYXV0aE1pZGRsZXdhcmUiLCJfIiwiaGVhZGVycyIsInRva2VuIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImF1dGhvcml6YXRpb24iLCJsaW5rIiwicXVlcnkiLCJvcGVyYXRpb25OYW1lIiwidmFyaWFibGVzIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GraphQLProvider.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GraphQLProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GraphQLProvider */ \"./src/components/GraphQLProvider.tsx\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GraphQLProvider__WEBPACK_IMPORTED_MODULE_3__.GraphQLProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\refProjct\\\\next\\\\chatbase-main\\\\Jabberr\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\refProjct\\\\next\\\\chatbase-main\\\\Jabberr\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\refProjct\\\\next\\\\chatbase-main\\\\Jabberr\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFHbUI7QUFFYztBQUNuQjtBQUM5QixTQUFTRSxJQUFJLEVBQzFCQyxVQUFTLEVBQ1RDLFdBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdELFdBQVcsR0FDM0IsRUFBRTtJQUNYLHFCQUNFLDhEQUFDSiw0REFBZUE7UUFBQ0ssU0FBU0E7a0JBQ3hCLDRFQUFDSix3RUFBZUE7c0JBQ2QsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phYmJlcnIvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5pbXBvcnQgeyBHcmFwaFFMUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9HcmFwaFFMUHJvdmlkZXJcIjtcbmltcG9ydCAncmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHtcbiAgQ29tcG9uZW50LFxuICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0sXG59OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICA8R3JhcGhRTFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0dyYXBoUUxQcm92aWRlcj5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJHcmFwaFFMUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "@grafbase/apollo-link":
/*!****************************************!*\
  !*** external "@grafbase/apollo-link" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@grafbase/apollo-link");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();