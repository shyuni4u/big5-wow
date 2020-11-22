module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./modules/count.tsx":
/*!***************************!*\
  !*** ./modules/count.tsx ***!
  \***************************/
/*! exports provided: COUNT_PLUS, COUNT_MINUS, COUNT_SET, initialState, countPlusAction, countMinusAction, setCountAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_PLUS", function() { return COUNT_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_MINUS", function() { return COUNT_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_SET", function() { return COUNT_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countPlusAction", function() { return countPlusAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countMinusAction", function() { return countMinusAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountAction", function() { return setCountAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const COUNT_PLUS = 'COUNT_PLUS';
const COUNT_MINUS = 'COUNT_MINUS';
const COUNT_SET = 'COUNT_SET';
const initialState = {
  count: 0
};
const countPlusAction = () => ({
  type: COUNT_PLUS
});
const countMinusAction = () => ({
  type: COUNT_MINUS
});
const setCountAction = value => ({
  type: COUNT_SET,
  count: value
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_PLUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count + 1
      });

    case COUNT_MINUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count - 1
      });

    case COUNT_SET:
      const {
        count
      } = action;
      return _objectSpread(_objectSpread({}, state), {}, {
        count: count
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./modules/index.tsx":
/*!***************************!*\
  !*** ./modules/index.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count */ "./modules/count.tsx");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test */ "./modules/test.tsx");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  countModule: _count__WEBPACK_IMPORTED_MODULE_1__["default"],
  testModule: _test__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./modules/test.tsx":
/*!**************************!*\
  !*** ./modules/test.tsx ***!
  \**************************/
/*! exports provided: TEST_INFO_SET, initialState, setTestIfno, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_INFO_SET", function() { return TEST_INFO_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTestIfno", function() { return setTestIfno; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TEST_INFO_SET = 'TEST-INFO/SET';
const initialState = {
  newbie: false,
  firstClass: '',
  firstTalent: '',
  secondClass: '',
  secondTalent: '',
  thirdClass: '',
  thirdTalent: '',
  extraversionScore: 0,
  opennessToExperienceScore: 0,
  agreeablenessScore: 0,
  neuroticismScore: 0,
  conscientiousnessScore: 0,
  extraversionCount: 0,
  opennessToExperienceCount: 0,
  agreeablenessCount: 0,
  neuroticismCount: 0,
  conscientiousnessCount: 0
};
const setTestIfno = obj => ({
  type: TEST_INFO_SET,
  newbie: obj.newbie,
  firstClass: obj.firstClass,
  firstTalent: obj.firstTalent,
  secondClass: obj.secondClass,
  secondTalent: obj.secondTalent,
  thirdClass: obj.thirdClass,
  thirdTalent: obj.thirdTalent,
  extraversionScore: obj.extraversionScore,
  opennessToExperienceScore: obj.opennessToExperienceScore,
  agreeablenessScore: obj.agreeablenessScore,
  neuroticismScore: obj.neuroticismScore,
  conscientiousnessScore: obj.conscientiousnessScore,
  extraversionCount: obj.extraversionCount,
  opennessToExperienceCount: obj.opennessToExperienceCount,
  agreeablenessCount: obj.agreeablenessCount,
  neuroticismCount: obj.neuroticismCount,
  conscientiousnessCount: obj.conscientiousnessCount
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_INFO_SET:
      return _objectSpread(_objectSpread({}, state), {}, {
        newbie: action.newbie,
        firstClass: action.firstClass,
        firstTalent: action.firstTalent,
        secondClass: action.secondClass,
        secondTalent: action.secondTalent,
        thirdClass: action.thirdClass,
        thirdTalent: action.thirdTalent,
        extraversionScore: action.extraversionScore,
        opennessToExperienceScore: action.opennessToExperienceScore,
        agreeablenessScore: action.agreeablenessScore,
        neuroticismScore: action.neuroticismScore,
        conscientiousnessScore: action.conscientiousnessScore,
        extraversionCount: action.extraversionCount,
        opennessToExperienceCount: action.opennessToExperienceCount,
        agreeablenessCount: action.agreeablenessCount,
        neuroticismCount: action.neuroticismCount,
        conscientiousnessCount: action.conscientiousnessCount
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: RootApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootApp", function() { return RootApp; });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/index.tsx */ "./modules/index.tsx");
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\Developer\\wow-big5\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const styles = {
  layout: {
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    flexDirection: 'column',
    position: 'relative'
  },
  main: {
    flex: 1
  },
  footer: {
    width: '100%',
    height: '24px',
    textAlign: 'center',
    lineHeight: '24px',
    color: '#fff',
    backgroundColor: '#000',
    // position: 'absolute',
    // bottom: '0',
    fontSize: '12px'
  }
};

const configureStore = () => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_modules_index_tsx__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(configureStore, {
  debug: false
});
class RootApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  render() {
    const {
      Component,
      other
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, "WoW - Big 5 test"), __jsx("link", {
      rel: "shortcut icon",
      href: "/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    })), __jsx("div", {
      style: styles.layout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, __jsx("main", {
      style: styles.main,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, __jsx(Component, _extends({}, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }))), __jsx("footer", {
      style: styles.footer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, "Copyright 2020 shyuniz Authors.")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(RootApp));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL21vZHVsZXMvY291bnQudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvdGVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiQ09VTlRfUExVUyIsIkNPVU5UX01JTlVTIiwiQ09VTlRfU0VUIiwiaW5pdGlhbFN0YXRlIiwiY291bnQiLCJjb3VudFBsdXNBY3Rpb24iLCJ0eXBlIiwiY291bnRNaW51c0FjdGlvbiIsInNldENvdW50QWN0aW9uIiwidmFsdWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNvdW50TW9kdWxlIiwidGVzdE1vZHVsZSIsIlRFU1RfSU5GT19TRVQiLCJuZXdiaWUiLCJmaXJzdENsYXNzIiwiZmlyc3RUYWxlbnQiLCJzZWNvbmRDbGFzcyIsInNlY29uZFRhbGVudCIsInRoaXJkQ2xhc3MiLCJ0aGlyZFRhbGVudCIsImV4dHJhdmVyc2lvblNjb3JlIiwib3Blbm5lc3NUb0V4cGVyaWVuY2VTY29yZSIsImFncmVlYWJsZW5lc3NTY29yZSIsIm5ldXJvdGljaXNtU2NvcmUiLCJjb25zY2llbnRpb3VzbmVzc1Njb3JlIiwiZXh0cmF2ZXJzaW9uQ291bnQiLCJvcGVubmVzc1RvRXhwZXJpZW5jZUNvdW50IiwiYWdyZWVhYmxlbmVzc0NvdW50IiwibmV1cm90aWNpc21Db3VudCIsImNvbnNjaWVudGlvdXNuZXNzQ291bnQiLCJzZXRUZXN0SWZubyIsIm9iaiIsInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwic3R5bGVzIiwibGF5b3V0IiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwibWFpbiIsImZsZXgiLCJmb290ZXIiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJNb2R1bGUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiUm9vdEFwcCIsIm90aGVyIiwicHJvcHMiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJleHBvcnQgY29uc3QgQ09VTlRfUExVUyA9ICdDT1VOVF9QTFVTJztcclxuZXhwb3J0IGNvbnN0IENPVU5UX01JTlVTID0gJ0NPVU5UX01JTlVTJztcclxuZXhwb3J0IGNvbnN0IENPVU5UX1NFVCA9ICdDT1VOVF9TRVQnO1xyXG5cclxuZXhwb3J0IHR5cGUgY291bnRTdGF0ZSA9IHtcclxuICBjb3VudDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IGNvdW50U3RhdGUgPSB7XHJcbiAgY291bnQ6IDBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudFBsdXNBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IENPVU5UX1BMVVNcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY291bnRNaW51c0FjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogQ09VTlRfTUlOVVNcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb3VudEFjdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoe1xyXG4gIHR5cGU6IENPVU5UX1NFVCxcclxuICBjb3VudDogdmFsdWVcclxufSlcclxuXHJcbnR5cGUgYWN0aW9ucyA9IHtcclxuICB0eXBlOiBzdHJpbmdcclxufSAmIGNvdW50U3RhdGVcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IGNvdW50U3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYWN0aW9ucyk6IGNvdW50U3RhdGUgfCB1bmRlZmluZWQgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ09VTlRfUExVUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyAxXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQ09VTlRfTUlOVVM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0gMVxyXG4gICAgICB9XHJcbiAgICBjYXNlIENPVU5UX1NFVDpcclxuICAgICAgY29uc3QgeyBjb3VudCB9ID0gYWN0aW9uO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvdW50OiBjb3VudFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjb3VudE1vZHVsZSBmcm9tICcuL2NvdW50JztcclxuaW1wb3J0IHRlc3RNb2R1bGUgZnJvbSAnLi90ZXN0JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBjb3VudE1vZHVsZSxcclxuICB0ZXN0TW9kdWxlXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImV4cG9ydCBjb25zdCBURVNUX0lORk9fU0VUID0gJ1RFU1QtSU5GTy9TRVQnO1xyXG5cclxuZXhwb3J0IHR5cGUgdGVzdEluZm9TdGF0ZSA9IHtcclxuICBuZXdiaWU6IGJvb2xlYW47XHJcbiAgZmlyc3RDbGFzczogc3RyaW5nO1xyXG4gIGZpcnN0VGFsZW50OiBzdHJpbmc7XHJcbiAgc2Vjb25kQ2xhc3M6IHN0cmluZztcclxuICBzZWNvbmRUYWxlbnQ6IHN0cmluZztcclxuICB0aGlyZENsYXNzOiBzdHJpbmc7XHJcbiAgdGhpcmRUYWxlbnQ6IHN0cmluZztcclxuICBleHRyYXZlcnNpb25TY29yZTogbnVtYmVyO1xyXG4gIG9wZW5uZXNzVG9FeHBlcmllbmNlU2NvcmU6IG51bWJlcjtcclxuICBhZ3JlZWFibGVuZXNzU2NvcmU6IG51bWJlcjtcclxuICBuZXVyb3RpY2lzbVNjb3JlOiBudW1iZXI7XHJcbiAgY29uc2NpZW50aW91c25lc3NTY29yZTogbnVtYmVyO1xyXG4gIGV4dHJhdmVyc2lvbkNvdW50OiBudW1iZXI7XHJcbiAgb3Blbm5lc3NUb0V4cGVyaWVuY2VDb3VudDogbnVtYmVyO1xyXG4gIGFncmVlYWJsZW5lc3NDb3VudDogbnVtYmVyO1xyXG4gIG5ldXJvdGljaXNtQ291bnQ6IG51bWJlcjtcclxuICBjb25zY2llbnRpb3VzbmVzc0NvdW50OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiB0ZXN0SW5mb1N0YXRlID0ge1xyXG4gIG5ld2JpZTogZmFsc2UsXHJcbiAgZmlyc3RDbGFzczogJycsXHJcbiAgZmlyc3RUYWxlbnQ6ICcnLFxyXG4gIHNlY29uZENsYXNzOiAnJyxcclxuICBzZWNvbmRUYWxlbnQ6ICcnLFxyXG4gIHRoaXJkQ2xhc3M6ICcnLFxyXG4gIHRoaXJkVGFsZW50OiAnJyxcclxuICBleHRyYXZlcnNpb25TY29yZTogMCxcclxuICBvcGVubmVzc1RvRXhwZXJpZW5jZVNjb3JlOiAwLFxyXG4gIGFncmVlYWJsZW5lc3NTY29yZTogMCxcclxuICBuZXVyb3RpY2lzbVNjb3JlOiAwLFxyXG4gIGNvbnNjaWVudGlvdXNuZXNzU2NvcmU6IDAsXHJcbiAgZXh0cmF2ZXJzaW9uQ291bnQ6IDAsXHJcbiAgb3Blbm5lc3NUb0V4cGVyaWVuY2VDb3VudDogMCxcclxuICBhZ3JlZWFibGVuZXNzQ291bnQ6IDAsXHJcbiAgbmV1cm90aWNpc21Db3VudDogMCxcclxuICBjb25zY2llbnRpb3VzbmVzc0NvdW50OiAwXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VGVzdElmbm8gPSAob2JqOiB0ZXN0SW5mb1N0YXRlKSA9PiAoe1xyXG4gIHR5cGU6IFRFU1RfSU5GT19TRVQsXHJcbiAgbmV3YmllOiBvYmoubmV3YmllLFxyXG4gIGZpcnN0Q2xhc3M6IG9iai5maXJzdENsYXNzLFxyXG4gIGZpcnN0VGFsZW50OiBvYmouZmlyc3RUYWxlbnQsXHJcbiAgc2Vjb25kQ2xhc3M6IG9iai5zZWNvbmRDbGFzcyxcclxuICBzZWNvbmRUYWxlbnQ6IG9iai5zZWNvbmRUYWxlbnQsXHJcbiAgdGhpcmRDbGFzczogb2JqLnRoaXJkQ2xhc3MsXHJcbiAgdGhpcmRUYWxlbnQ6IG9iai50aGlyZFRhbGVudCxcclxuICBleHRyYXZlcnNpb25TY29yZTogb2JqLmV4dHJhdmVyc2lvblNjb3JlLFxyXG4gIG9wZW5uZXNzVG9FeHBlcmllbmNlU2NvcmU6IG9iai5vcGVubmVzc1RvRXhwZXJpZW5jZVNjb3JlLFxyXG4gIGFncmVlYWJsZW5lc3NTY29yZTogb2JqLmFncmVlYWJsZW5lc3NTY29yZSxcclxuICBuZXVyb3RpY2lzbVNjb3JlOiBvYmoubmV1cm90aWNpc21TY29yZSxcclxuICBjb25zY2llbnRpb3VzbmVzc1Njb3JlOiBvYmouY29uc2NpZW50aW91c25lc3NTY29yZSxcclxuICBleHRyYXZlcnNpb25Db3VudDogb2JqLmV4dHJhdmVyc2lvbkNvdW50LFxyXG4gIG9wZW5uZXNzVG9FeHBlcmllbmNlQ291bnQ6IG9iai5vcGVubmVzc1RvRXhwZXJpZW5jZUNvdW50LFxyXG4gIGFncmVlYWJsZW5lc3NDb3VudDogb2JqLmFncmVlYWJsZW5lc3NDb3VudCxcclxuICBuZXVyb3RpY2lzbUNvdW50OiBvYmoubmV1cm90aWNpc21Db3VudCxcclxuICBjb25zY2llbnRpb3VzbmVzc0NvdW50OiBvYmouY29uc2NpZW50aW91c25lc3NDb3VudFxyXG59KTtcclxuXHJcbnR5cGUgYWN0aW9ucyA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbn0gJiB0ZXN0SW5mb1N0YXRlO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChcclxuICBzdGF0ZTogdGVzdEluZm9TdGF0ZSA9IGluaXRpYWxTdGF0ZSxcclxuICBhY3Rpb246IGFjdGlvbnNcclxuKTogdGVzdEluZm9TdGF0ZSB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBURVNUX0lORk9fU0VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5ld2JpZTogYWN0aW9uLm5ld2JpZSxcclxuICAgICAgICBmaXJzdENsYXNzOiBhY3Rpb24uZmlyc3RDbGFzcyxcclxuICAgICAgICBmaXJzdFRhbGVudDogYWN0aW9uLmZpcnN0VGFsZW50LFxyXG4gICAgICAgIHNlY29uZENsYXNzOiBhY3Rpb24uc2Vjb25kQ2xhc3MsXHJcbiAgICAgICAgc2Vjb25kVGFsZW50OiBhY3Rpb24uc2Vjb25kVGFsZW50LFxyXG4gICAgICAgIHRoaXJkQ2xhc3M6IGFjdGlvbi50aGlyZENsYXNzLFxyXG4gICAgICAgIHRoaXJkVGFsZW50OiBhY3Rpb24udGhpcmRUYWxlbnQsXHJcbiAgICAgICAgZXh0cmF2ZXJzaW9uU2NvcmU6IGFjdGlvbi5leHRyYXZlcnNpb25TY29yZSxcclxuICAgICAgICBvcGVubmVzc1RvRXhwZXJpZW5jZVNjb3JlOiBhY3Rpb24ub3Blbm5lc3NUb0V4cGVyaWVuY2VTY29yZSxcclxuICAgICAgICBhZ3JlZWFibGVuZXNzU2NvcmU6IGFjdGlvbi5hZ3JlZWFibGVuZXNzU2NvcmUsXHJcbiAgICAgICAgbmV1cm90aWNpc21TY29yZTogYWN0aW9uLm5ldXJvdGljaXNtU2NvcmUsXHJcbiAgICAgICAgY29uc2NpZW50aW91c25lc3NTY29yZTogYWN0aW9uLmNvbnNjaWVudGlvdXNuZXNzU2NvcmUsXHJcbiAgICAgICAgZXh0cmF2ZXJzaW9uQ291bnQ6IGFjdGlvbi5leHRyYXZlcnNpb25Db3VudCxcclxuICAgICAgICBvcGVubmVzc1RvRXhwZXJpZW5jZUNvdW50OiBhY3Rpb24ub3Blbm5lc3NUb0V4cGVyaWVuY2VDb3VudCxcclxuICAgICAgICBhZ3JlZWFibGVuZXNzQ291bnQ6IGFjdGlvbi5hZ3JlZWFibGVuZXNzQ291bnQsXHJcbiAgICAgICAgbmV1cm90aWNpc21Db3VudDogYWN0aW9uLm5ldXJvdGljaXNtQ291bnQsXHJcbiAgICAgICAgY29uc2NpZW50aW91c25lc3NDb3VudDogYWN0aW9uLmNvbnNjaWVudGlvdXNuZXNzQ291bnRcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHJlZHVjZXJNb2R1bGUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleC50c3gnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGxheW91dDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBtYWluOiB7XG4gICAgZmxleDogMVxuICB9LFxuICBmb290ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzI0cHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgLy8gYm90dG9tOiAnMCcsXG4gICAgZm9udFNpemU6ICcxMnB4J1xuICB9XG59O1xuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyTW9kdWxlKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQsJ1xufSk7XG5cbmV4cG9ydCBjbGFzcyBSb290QXBwIGV4dGVuZHMgQXBwIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBvdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPldvVyAtIEJpZyA1IHRlc3Q8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGF5b3V0fT5cbiAgICAgICAgICA8bWFpbiBzdHlsZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ub3RoZXJ9IC8+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDxmb290ZXIgc3R5bGU9e3N0eWxlcy5mb290ZXJ9PkNvcHlyaWdodCAyMDIwIHNoeXVuaXogQXV0aG9ycy48L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFJvb3RBcHApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9