"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Options\": () => (/* binding */ Options),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst expiredTime = Math.floor(Date.now() / 1000) + 60 * 60 * 60;\nconst expiredTime2 = \"30d\";\nconst Options = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            allowDangerousEmailAccountLinking: true\n        }),\n        next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.FACEBOOK_CLIENT_ID,\n            clientSecret: process.env.FACEBOOK_CLIENT_SECRET\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.TWITTER_ID,\n            clientSecret: process.env.TWITTER_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET\n        })\n    ],\n    jwt: {\n        maxAge: 60 * 60 * 24 * 30,\n        encode: ({ secret , token  })=>jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default().sign({\n                ...token,\n                subject: \"a jabberr develpment\",\n                algorithm: \"RS256\",\n                issuer: \"jabberr\",\n                expiresIn: expiredTime2\n            }, secret),\n        decode: async ({ secret , token  })=>{\n            const jwtVrfyRet = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default().verify(token, secret);\n            return jwtVrfyRet;\n        }\n    },\n    callbacks: {\n        async jwt ({ token , account , profile  }) {\n            if (account && profile) {\n                token.accessToken = account?.access_token;\n                token.username = profile?.login;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            if (token.username) {\n                session.username = token?.username;\n                session.user.name = token.name;\n            }\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(Options)); /**\n *     GoogleProvider({\n      clientId: process.env.GOOGLE_CLIENT_ID!,\n      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,\n      allowDangerousEmailAccountLinking: true,\n    }),\n    FacebookProvider({\n      clientId: process.env.FACEBOOK_CLIENT_ID!,\n      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,\n    }),\n      TwitterProvider({\n        clientId: process.env.TWITTER_ID!,\n        clientSecret: process.env.TWITTER_SECRET!,\n      }),\n */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNNO0FBQ0Y7QUFDRjtBQUNEO0FBQ2Y7QUFHeEMsTUFBTU0sY0FBb0JDLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS0MsR0FBRyxLQUFLLFFBQVEsS0FBSyxLQUFLO0FBQ3BFLE1BQU1DLGVBQXVCO0FBRXRCLE1BQU1DLFVBQTJCO0lBQ3RDQyxXQUFXO1FBQ1RULGlFQUFjQSxDQUFDO1lBQ2JVLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsbUNBQW1DLElBQUk7UUFDekM7UUFDQW5CLG1FQUFnQkEsQ0FBQztZQUNmYSxVQUFVQyxRQUFRQyxHQUFHLENBQUNLLGtCQUFrQjtZQUN4Q0gsY0FBY0gsUUFBUUMsR0FBRyxDQUFDTSxzQkFBc0I7UUFDbEQ7UUFDRXBCLGtFQUFlQSxDQUFDO1lBQ2RZLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ08sVUFBVTtZQUNoQ0wsY0FBY0gsUUFBUUMsR0FBRyxDQUFDUSxjQUFjO1FBQzFDO1FBQ0ZyQixpRUFBY0EsQ0FBQztZQUNiVyxVQUFVQyxRQUFRQyxHQUFHLENBQUNTLGdCQUFnQjtZQUN0Q1AsY0FBY0gsUUFBUUMsR0FBRyxDQUFDVSxvQkFBb0I7UUFDaEQ7S0FFRDtJQUNEQyxLQUFLO1FBQ0hDLFFBQVEsS0FBSyxLQUFLLEtBQUs7UUFDdkJDLFFBQVEsQ0FBQyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUN4QjFCLHdEQUFpQixDQUNmO2dCQUNFLEdBQUcwQixLQUFLO2dCQUNSRSxTQUFRO2dCQUNSQyxXQUFZO2dCQUNaQyxRQUFRO2dCQUNSQyxXQUFXekI7WUFDYixHQUNBbUI7UUFFRk8sUUFBUSxPQUFPLEVBQUVQLE9BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQ2hDO1lBQ0UsTUFBTU8sYUFBY2pDLDBEQUFtQixDQUFDMEIsT0FBUUQ7WUFDaEQsT0FBT1E7UUFDVDtJQUNKO0lBQ0FFLFdBQVc7UUFDVCxNQUFNYixLQUFJLEVBQUVJLE1BQUssRUFBRVUsUUFBTyxFQUFDQyxRQUFPLEVBQUUsRUFBRTtZQUNwQyxJQUFJRCxXQUFXQyxTQUFTO2dCQUN0QlgsTUFBTVksV0FBVyxHQUFHRixTQUFTRztnQkFDN0JiLE1BQU1jLFFBQVEsR0FBR0gsU0FBU0k7WUFDNUIsQ0FBQztZQUNELE9BQU9mO1FBQ1Q7UUFDQSxNQUFNZ0IsU0FBUSxFQUFFQSxRQUFPLEVBQUVoQixNQUFLLEVBQUVpQixLQUFJLEVBQUMsRUFBRTtZQUNyQyxJQUFJakIsTUFBTWMsUUFBUSxFQUFFO2dCQUNsQkUsUUFBUUYsUUFBUSxHQUFHZCxPQUFPYztnQkFDMUJFLFFBQVFDLElBQUksQ0FBQ0MsSUFBSSxHQUFHbEIsTUFBTWtCLElBQUk7WUFDaEMsQ0FBQztZQUNELE9BQU9GO1FBQ1Q7SUFDRjtBQUNGLEVBQUU7QUFFRixpRUFBZS9DLGdEQUFRQSxDQUFDWSxRQUFRQSxFQUFDLENBQ2pDOzs7Ozs7Ozs7Ozs7OztDQWNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFiYmVyci8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBGYWNlYm9va1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2ZhY2Vib29rXCI7XG5pbXBvcnQgVHdpdHRlclByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL3R3aXR0ZXJcIjtcbmltcG9ydCBHaXRIdWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuaW1wb3J0IGpzb253ZWJ0b2tlbiBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBKV1QgfSBmcm9tIFwibmV4dC1hdXRoL2p3dFwiO1xuXG5jb25zdCBleHBpcmVkVGltZTpudW1iZXIgPU1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApICsgNjAgKiA2MCAqIDYwO1xuY29uc3QgZXhwaXJlZFRpbWUyOnN0cmluZyA9ICBcIjMwZFwiO1xuXG5leHBvcnQgY29uc3QgT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcbiAgICAgIGFsbG93RGFuZ2Vyb3VzRW1haWxBY2NvdW50TGlua2luZzogdHJ1ZSxcbiAgICB9KSxcbiAgICBGYWNlYm9va1Byb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfSUQhLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfU0VDUkVUISxcbiAgICB9KSxcbiAgICAgIFR3aXR0ZXJQcm92aWRlcih7XG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5UV0lUVEVSX0lEISxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX1NFQ1JFVCEsXG4gICAgICB9KSxcbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCEsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVUISxcbiAgICB9KSxcbiAgIFxuICBdLFxuICBqd3Q6IHtcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIGVuY29kZTogKHsgc2VjcmV0LCB0b2tlbiB9KSA9PlxuICAgICAganNvbndlYnRva2VuLnNpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICAuLi50b2tlbixcbiAgICAgICAgICBzdWJqZWN0OlwiYSBqYWJiZXJyIGRldmVscG1lbnRcIixcbiAgICAgICAgICBhbGdvcml0aG06ICBcIlJTMjU2XCIsXG4gICAgICAgICAgaXNzdWVyOiBcImphYmJlcnJcIixcbiAgICAgICAgICBleHBpcmVzSW46IGV4cGlyZWRUaW1lMixcbiAgICAgICAgfSxcbiAgICAgICAgc2VjcmV0XG4gICAgICApLFxuICAgICAgZGVjb2RlOiBhc3luYyAoeyBzZWNyZXQsIHRva2VuIH0pID0+XG4gICAgICB7XG4gICAgICAgIGNvbnN0IGp3dFZyZnlSZXQgID0ganNvbndlYnRva2VuLnZlcmlmeSh0b2tlbiEsIHNlY3JldCkgYXMgSldUO1xuICAgICAgICByZXR1cm4gand0VnJmeVJldDtcbiAgICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCBhY2NvdW50LHByb2ZpbGUgfSkge1xuICAgICAgaWYgKGFjY291bnQgJiYgcHJvZmlsZSkge1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQ/LmFjY2Vzc190b2tlbjtcbiAgICAgICAgdG9rZW4udXNlcm5hbWUgPSBwcm9maWxlPy5sb2dpbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiAsdXNlcn0pIHtcbiAgICAgIGlmICh0b2tlbi51c2VybmFtZSkge1xuICAgICAgICBzZXNzaW9uLnVzZXJuYW1lID0gdG9rZW4/LnVzZXJuYW1lO1xuICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoT3B0aW9ucyk7XG4vKipcbiAqICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcbiAgICAgIGFsbG93RGFuZ2Vyb3VzRW1haWxBY2NvdW50TGlua2luZzogdHJ1ZSxcbiAgICB9KSxcbiAgICBGYWNlYm9va1Byb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfSUQhLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfU0VDUkVUISxcbiAgICB9KSxcbiAgICAgIFR3aXR0ZXJQcm92aWRlcih7XG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5UV0lUVEVSX0lEISxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX1NFQ1JFVCEsXG4gICAgICB9KSxcbiAqLyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkZhY2Vib29rUHJvdmlkZXIiLCJUd2l0dGVyUHJvdmlkZXIiLCJHaXRIdWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwianNvbndlYnRva2VuIiwiZXhwaXJlZFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiZXhwaXJlZFRpbWUyIiwiT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImFsbG93RGFuZ2Vyb3VzRW1haWxBY2NvdW50TGlua2luZyIsIkZBQ0VCT09LX0NMSUVOVF9JRCIsIkZBQ0VCT09LX0NMSUVOVF9TRUNSRVQiLCJUV0lUVEVSX0lEIiwiVFdJVFRFUl9TRUNSRVQiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJqd3QiLCJtYXhBZ2UiLCJlbmNvZGUiLCJzZWNyZXQiLCJ0b2tlbiIsInNpZ24iLCJzdWJqZWN0IiwiYWxnb3JpdGhtIiwiaXNzdWVyIiwiZXhwaXJlc0luIiwiZGVjb2RlIiwiand0VnJmeVJldCIsInZlcmlmeSIsImNhbGxiYWNrcyIsImFjY291bnQiLCJwcm9maWxlIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJ1c2VybmFtZSIsImxvZ2luIiwic2Vzc2lvbiIsInVzZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();