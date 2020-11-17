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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "RootApp", function() { return /* binding */ _app_RootApp; });

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./modules/count.tsx
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

/* harmony default export */ var count = (reducer);
// EXTERNAL MODULE: ./modules/test.tsx
var test = __webpack_require__("H8gR");

// CONCATENATED MODULE: ./modules/index.tsx



const rootReducer = Object(external_redux_["combineReducers"])({
  countModule: count,
  testModule: test["a" /* default */]
});
/* harmony default export */ var modules = (rootReducer);
// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;






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
  const store = Object(external_redux_["createStore"])(modules);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
class _app_RootApp extends app_default.a {
  render() {
    const {
      Component,
      other
    } = this.props;
    return __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("title", null, "WoW - Big 5 test")), __jsx("div", {
      style: styles.layout
    }, __jsx("main", {
      style: styles.main
    }, __jsx(Component, other)), __jsx("footer", {
      style: styles.footer
    }, "Copyright 2020 shyuniz Authors.")));
  }

}
/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(_app_RootApp));

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "H8gR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TEST_INFO_SET */
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setTestIfno; });
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

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });