/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/normalize.css/normalize.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./node_modules/normalize.css/normalize.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins);", ""]);
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../img/bg-pattern-1.png */ "./src/img/bg-pattern-1.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../img/bg-pattern-2.png */ "./src/img/bg-pattern-2.png"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../img/bg-pattern-3.png */ "./src/img/bg-pattern-3.png"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../img/bg-pattern-4.png */ "./src/img/bg-pattern-4.png"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../img/bg-pattern-5.png */ "./src/img/bg-pattern-5.png"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../img/checkmark-circle.svg */ "./src/img/checkmark-circle.svg"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../img/close-circle.svg */ "./src/img/close-circle.svg"));

// Module
exports.push([module.i, "/**\r\n * CONTENTS\r\n *\r\n * GLOBAL\r\n * Mixins...............Useful mixins.\r\n * Config...............Configuration variables.\r\n * Colors...............Color variables.\r\n * Typography...........Typography-related variables.\r\n * Breakpoints..........Breakpoint values.\r\n *\r\n * GENERIC\r\n * Box-sizing...........Adjust default box-sizing.\r\n *\r\n * BASE\r\n * Document.............Base HTML style.\r\n * Body.................Base body style.\r\n * Headings.............H1-H6 base styles.\r\n *\r\n * UTILITIES\r\n * Layout...............Classes used for general layout throughout the site.\r\n * Decoration...........General classes that decorate several elements.\r\n *\r\n * OBJECTS\r\n * Text.................Various text styles.\r\n * Background...........Various background styles.\r\n * Image................Various image styles.\r\n * List.................Styles for ordered and unordered lists.\r\n *\r\n * COMPONENTS\r\n * Buttons..............Button elements.\r\n * Slideshow............Slideshow component.\r\n * Toggle-switch........Toggle switch components.\r\n * Containers...........Generic containers used throughout the site.\r\n * Page-head............The main page header.\r\n * Primary-nav..........Main navigation menu.\r\n * Product-area.........The product area of the landing page.\r\n * Solutions-area.......The solutions area of the landing page.\r\n * Features-area........The features area of the landing page.\r\n * Testimonials-area....The testimonials area of the landing page.\r\n * Pricing-area.........The pricing area of the landing page.\r\n * Page-footer..........The page footer.\r\n */\n/*------------------------------------*\\\r\n  #Mixins\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Config\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Colors\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Typography\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Breakpoints\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Box-sizing\r\n\\*------------------------------------*/\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n/*------------------------------------*\\\r\n  #Document\r\n\\*------------------------------------*/\nhtml {\n  font-size: 0.83333vw; }\n  @media (max-width: 48em) {\n    html {\n      font-size: 6.4px; } }\n\n/*------------------------------------*\\\r\n  #Body\r\n\\*------------------------------------*/\nbody {\n  font: 1.125rem \"Poppins\", sans-serif;\n  color: #919AA3;\n  padding-left: 15.625rem;\n  padding-right: 15.625rem;\n  overflow-x: hidden; }\n  @media (max-width: 60em) {\n    body {\n      font-size: 1.5625rem; } }\n  @media (max-width: 48em) {\n    body {\n      padding: 0;\n      font-size: 1.875rem; } }\n\n/*------------------------------------*\\\r\n  #Headings\r\n\\*------------------------------------*/\nh1, h2, h3, h4, h5, h6 {\n  margin: 0; }\n\n/*------------------------------------*\\\r\n  #Layout\r\n\\*------------------------------------*/\n.float-right {\n  float: right; }\n\n.clear-after::after {\n  clear: both; }\n\n/*------------------------------------*\\\r\n  #Decoration\r\n\\*------------------------------------*/\n.circlet-block {\n  display: block;\n  width: 5.625rem;\n  margin-bottom: 6.1875rem;\n  margin-left: auto;\n  margin-right: auto; }\n  @media (max-width: 48em) {\n    .circlet-block {\n      width: 10rem;\n      margin-bottom: 2.5rem; } }\n\n.circlet {\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 100%;\n  width: 1rem;\n  height: 1rem;\n  background-color: #919AA3;\n  opacity: 0.3;\n  margin-right: 1.25rem; }\n  .circlet:nth-last-child(1) {\n    margin-right: 0; }\n  @media (max-width: 48em) {\n    .circlet {\n      width: 2.5rem;\n      height: 2.5rem; } }\n\n.circlet--filled {\n  background-color: #171C34;\n  opacity: 1; }\n\n/*------------------------------------*\\\r\n  #Text\r\n\\*------------------------------------*/\n.txt-white {\n  color: #FFF; }\n\n.txt-regent-gray {\n  color: #919AA3; }\n\n.txt-cadet-blue {\n  color: #B0AFC6; }\n\n.txt-tarawera {\n  color: #072A44; }\n\n.txt-mirage {\n  color: #171C34; }\n\n.txt-science-blue {\n  color: #0074E4; }\n\n.txt-picton-blue {\n  color: #308DE8; }\n\n.txt-east-bay {\n  color: #414172; }\n\n.txt-dusty-gray {\n  color: #9A9A9A; }\n\n.txt-shuttle-gray {\n  color: #586377; }\n\n.txt-black {\n  color: #000; }\n\n.txt-nodecoration {\n  text-decoration: none; }\n\n.txt-center {\n  text-align: center; }\n\n.area-heading {\n  font-size: 2.75rem;\n  color: #171C34; }\n\n.sub-heading {\n  width: 32.5rem;\n  margin: 0 auto;\n  margin-top: 0.9375rem; }\n  @media (max-width: 48em) {\n    .sub-heading {\n      width: auto; } }\n\n/*------------------------------------*\\\r\n  #Background\r\n\\*------------------------------------*/\n.bg-white {\n  background-color: #FFF; }\n\n.bg-regent-gray {\n  background-color: #919AA3; }\n\n.bg-cadet-blue {\n  background-color: #B0AFC6; }\n\n.bg-tarawera {\n  background-color: #072A44; }\n\n.bg-mirage {\n  background-color: #171C34; }\n\n.bg-science-blue {\n  background-color: #0074E4; }\n\n.bg-picton-blue {\n  background-color: #308DE8; }\n\n.bg-east-bay {\n  background-color: #414172; }\n\n.bg-dusty-gray {\n  background-color: #9A9A9A; }\n\n.bg-shuttle-gray {\n  background-color: #586377; }\n\n.bg-black {\n  background-color: #000; }\n\n.bg-pattern {\n  position: relative; }\n  .bg-pattern::before {\n    position: absolute;\n    left: 0;\n    z-index: -1;\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat; }\n\n.bg-pattern__1::before {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: contain; }\n  @media (max-width: 60em) {\n    .bg-pattern__1::before {\n      display: none; } }\n\n.bg-pattern__2::before {\n  left: -15.625rem;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n  background-size: contain; }\n  @media (max-width: 48em) {\n    .bg-pattern__2::before {\n      display: none; } }\n\n.bg-pattern__3::before {\n  left: -15.625rem;\n  width: 100vw;\n  height: 120%;\n  background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n  background-size: contain; }\n  @media (max-width: 48em) {\n    .bg-pattern__3::before {\n      display: none; } }\n\n.bg-pattern__4::before {\n  left: -15.625rem;\n  top: -9rem;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n  background-size: cover; }\n  @media (max-width: 48em) {\n    .bg-pattern__4::before {\n      left: 0; } }\n  @media (max-width: 37.5em) {\n    .bg-pattern__4::before {\n      display: none; } }\n\n.bg-pattern__5::before {\n  left: -15.625rem;\n  top: 0;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL___4___ + ");\n  background-size: cover; }\n  @media (max-width: 48em) {\n    .bg-pattern__5::before {\n      left: 0; } }\n\n/*------------------------------------*\\\r\n  #Image\r\n\\*------------------------------------*/\n.img-responsive {\n  max-width: 100%; }\n\n.img-rounded {\n  border-radius: 50%; }\n\n/*------------------------------------*\\\r\n  #List\r\n\\*------------------------------------*/\n.list-basic {\n  padding: 0;\n  text-align: left; }\n\n.li-check {\n  list-style: url(" + ___CSS_LOADER_URL___5___ + "); }\n\n.li-cross {\n  list-style: url(" + ___CSS_LOADER_URL___6___ + "); }\n\n/*------------------------------------*\\\r\n  #Buttons\r\n\\*------------------------------------*/\n.btn {\n  display: flex;\n  margin: 0 auto;\n  background-color: #0074E4;\n  width: 12.5rem;\n  height: 3.75rem;\n  border-radius: 0.5rem;\n  box-shadow: 0rem 0.625rem 3.125rem rgba(7, 42, 68, 0.12);\n  color: #FFF;\n  text-decoration: none;\n  text-transform: uppercase;\n  justify-content: center;\n  align-items: center; }\n  @media (max-width: 48em) {\n    .btn {\n      width: 18.75rem;\n      height: 6.25rem; } }\n\n.btn--head {\n  margin: 0;\n  width: 11.25rem;\n  background-color: #FFF;\n  color: #072A44;\n  box-shadow: 0rem 0.3125rem 1.25rem rgba(7, 42, 68, 0.1); }\n  @media (max-width: 600px) {\n    .btn--head {\n      height: 3.75rem; } }\n\n/*------------------------------------*\\\r\n  #Slideshow\r\n\\*------------------------------------*/\n.slideshow {\n  margin-top: 5rem;\n  margin-bottom: 2.5625rem;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  width: 60.25rem;\n  height: 40.5rem; }\n  @media (max-width: 48em) {\n    .slideshow {\n      width: 80%;\n      overflow: hidden;\n      margin-bottom: 0.625rem; } }\n\n.slideshow__img {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n  transition: opacity 1s;\n  opacity: 1; }\n  @media (max-width: 48em) {\n    .slideshow__img {\n      min-height: 100%; } }\n\n.slideshow__img--hidden {\n  opacity: 0; }\n\n/*------------------------------------*\\\r\n  #Togle-switch\r\n\\*------------------------------------*/\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 3.75rem;\n  height: 1.625rem; }\n  @media (max-width: 60em) {\n    .toggle-switch {\n      width: 8.75rem;\n      height: 3.125rem; } }\n\n.toggle-switch__checkbox {\n  display: none; }\n\n.toggle-switch__slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #FFF;\n  transition: .4s;\n  border-radius: 0.8125rem;\n  border: 0.0625rem solid rgba(154, 154, 154, 0.4); }\n  .toggle-switch__slider::before {\n    position: absolute;\n    content: \"\";\n    height: 1.125rem;\n    width: 1.125rem;\n    left: 0.25rem;\n    bottom: 0.15625rem;\n    background-color: #308DE8;\n    transition: .4s;\n    border-radius: 50%; }\n    @media (max-width: 60em) {\n      .toggle-switch__slider::before {\n        width: 2.5rem;\n        height: 2.5rem; } }\n\n.toggle-switch__checkbox:checked + .toggle-switch__slider::before {\n  -webkit-transform: translateX(2.0625rem);\n          transform: translateX(2.0625rem); }\n  @media (max-width: 60em) {\n    .toggle-switch__checkbox:checked + .toggle-switch__slider::before {\n      -webkit-transform: translateX(5.3125rem);\n              transform: translateX(5.3125rem); } }\n\n/*------------------------------------*\\\r\n  #Containers\r\n\\*------------------------------------*/\n.box-container {\n  display: flex; }\n  @media (max-width: 48em) {\n    .box-container {\n      flex-wrap: wrap;\n      justify-content: center; } }\n\n.box-container__item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  height: 26.25rem;\n  margin-right: 5rem;\n  border-radius: 0.625rem;\n  font-size: 1rem;\n  padding-right: 2.3125rem;\n  padding-left: 2.3125rem; }\n  .box-container__item h3 {\n    font-size: 1.5rem;\n    color: #171C34;\n    margin-top: 2.5rem; }\n  .box-container__item p {\n    width: 20rem; }\n  @media (max-width: 60em) {\n    .box-container__item {\n      font-size: 1.375rem; } }\n  @media (max-width: 48em) {\n    .box-container__item {\n      font-size: 1.875rem;\n      height: auto; }\n      .box-container__item h3 {\n        font-size: 1.875rem; }\n      .box-container__item ul {\n        padding-left: 3.125rem; } }\n\n.box-container__item--alt {\n  height: 22.75rem;\n  margin-right: 6.25rem;\n  padding: 0; }\n  .box-container__item--alt h3 {\n    text-transform: uppercase;\n    font-size: 1rem;\n    color: #586377;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: 2.6875rem; }\n    @media (max-width: 60em) {\n      .box-container__item--alt h3 {\n        font-size: 1.375rem; } }\n    @media (max-width: 48em) {\n      .box-container__item--alt h3 {\n        font-size: 1.75rem; } }\n  @media (max-width: 48em) {\n    .box-container__item--alt {\n      height: auto; } }\n\n.box-container__item--special {\n  box-shadow: 0 0.25rem 0.9375rem rgba(7, 42, 68, 0.1); }\n\n/*------------------------------------*\\\r\n  #Page-head\r\n\\*------------------------------------*/\n.page-head {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  font-size: 1rem;\n  margin-top: 2.5rem;\n  margin-bottom: 8.75rem; }\n  @media (max-width: 60em) {\n    .page-head {\n      font-size: 1.5rem; } }\n  @media (max-width: 48em) {\n    .page-head {\n      font-size: 1.75rem;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      margin-bottom: 4.375rem; } }\n  @media (max-width: 37.5em) {\n    .page-head {\n      flex-direction: column;\n      align-items: center; }\n      .page-head img {\n        display: none; } }\n\n.page-head__aside {\n  margin-left: auto;\n  display: flex;\n  align-items: center; }\n  @media (max-width: 37.5em) {\n    .page-head__aside {\n      margin: 0; } }\n\n.page-head__login {\n  margin-right: 2.51875rem;\n  color: #FFF;\n  text-decoration: none;\n  font-weight: bold; }\n  @media (max-width: 60em) {\n    .page-head__login {\n      color: #000; } }\n\n.header-fixed {\n  position: fixed;\n  z-index: 1;\n  margin-top: 0;\n  right: 0;\n  padding-left: 15.625rem;\n  padding-right: 15.625rem; }\n  .header-fixed::before {\n    width: auto;\n    height: 100%;\n    right: 0;\n    background-color: rgba(42, 42, 152, 0.7); }\n  .header-fixed .primary-nav__link {\n    color: #FFF; }\n  @media (max-width: 60em) {\n    .header-fixed .page-head__login {\n      color: #FFF; } }\n  @media (max-width: 48em) {\n    .header-fixed {\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n\n/*------------------------------------*\\\r\n  #Primary-nav\r\n\\*------------------------------------*/\n.primary-nav__list {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n  margin-left: 0.01875rem;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.primary-nav__item {\n  margin-left: 2.5375rem; }\n\n.primary-nav__link {\n  text-decoration: none;\n  color: #919AA3; }\n\n/*------------------------------------*\\\r\n  #Product-area\r\n\\*------------------------------------*/\n.product-area {\n  display: flex;\n  margin-bottom: 26.25rem; }\n  @media (max-width: 48em) {\n    .product-area {\n      margin-bottom: 6.25rem;\n      flex-direction: column;\n      align-items: center; } }\n\n.product-container {\n  align-self: center;\n  width: 23.9375rem;\n  height: 19.875rem;\n  margin-right: 19.8125rem; }\n  .product-container .btn {\n    margin-top: 3.75rem; }\n  @media (max-width: 48em) {\n    .product-container {\n      width: 100%;\n      height: auto;\n      margin: 0;\n      text-align: center; }\n      .product-container .btn {\n        margin-top: 1.25rem; } }\n\n.product-img {\n  width: 45rem;\n  height: 30rem; }\n  @media (max-width: 48em) {\n    .product-img {\n      width: 60%;\n      height: auto; } }\n\n/*------------------------------------*\\\r\n  #Solutions-area\r\n\\*------------------------------------*/\n.solutions-area {\n  margin-bottom: 17.5rem; }\n  .solutions-area .sub-heading {\n    margin-bottom: 7.5rem; }\n  @media (max-width: 48em) {\n    .solutions-area {\n      margin-bottom: 6.25rem; } }\n\n/*------------------------------------*\\\r\n  #Features-area\r\n\\*------------------------------------*/\n.features-area {\n  margin-bottom: 17.5rem; }\n  @media (max-width: 48em) {\n    .features-area {\n      margin-bottom: 6.25rem; } }\n\n/*------------------------------------*\\\r\n  #Testimonials-area\r\n\\*------------------------------------*/\n.testimonials-area {\n  margin-bottom: 22.9375rem;\n  padding-top: 9.0625rem; }\n  .testimonials-area .sub-heading {\n    margin-bottom: 5rem; }\n  @media (max-width: 48em) {\n    .testimonials-area {\n      padding-top: 0;\n      margin-bottom: 6.25rem; } }\n\n.testimonials-txt {\n  font-size: 1.25rem;\n  color: #171C34; }\n  @media (max-width: 48em) {\n    .testimonials-txt {\n      font-size: 1.875rem; } }\n\n/*------------------------------------*\\\r\n  #Pricing-area\r\n\\*------------------------------------*/\n.pricing-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 5.125rem; }\n  .pricing-area .box-container {\n    margin-bottom: 5rem; }\n\n.pricing-options {\n  display: inline-flex;\n  width: 23.125rem;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5rem;\n  margin-bottom: 2.5rem;\n  font-size: 1.125rem;\n  font-weight: 500; }\n  @media (max-width: 60em) {\n    .pricing-options {\n      font-size: 1.4375rem;\n      width: 26.25rem; } }\n  @media (max-width: 48em) {\n    .pricing-options {\n      font-size: 1.75rem;\n      width: 35.625rem; } }\n\n.txt-price {\n  font-size: 1.75rem;\n  color: #171C34;\n  font-weight: 500; }\n  .txt-price::before {\n    content: \"$\";\n    color: #0074E4;\n    font-size: 1.125rem;\n    margin-right: 0.3125rem; }\n    @media (max-width: 60em) {\n      .txt-price::before {\n        font-size: 1.5rem; } }\n  .txt-price::after {\n    font-size: 0.75rem;\n    margin-left: 0.3125rem;\n    color: #919AA3; }\n    @media (max-width: 60em) {\n      .txt-price::after {\n        font-size: 1.25rem; } }\n  @media (max-width: 48em) {\n    .txt-price {\n      font-size: 2.1875rem; } }\n\n.txt-price--special {\n  color: #0074E4; }\n\n.txt-price--monthly::after {\n  content: \"/mo\"; }\n\n.txt-price--quarterly::after {\n  content: \"/qr\"; }\n\n.txt-selected {\n  color: #171C34; }\n\n/*------------------------------------*\\\r\n  #Page-footer\r\n\\*------------------------------------*/\n.page-footer {\n  font-size: 0.9375rem;\n  height: 35.75rem;\n  padding-top: 17.9375rem;\n  text-align: center; }\n  .page-footer p {\n    margin: 0; }\n  @media (max-width: 60em) {\n    .page-footer {\n      font-size: 1.25rem;\n      padding-top: 16.25rem; } }\n  @media (max-width: 48em) {\n    .page-footer {\n      font-size: 1.875rem;\n      height: auto; } }\n\n.page-footer__grid {\n  display: flex;\n  margin-bottom: 5rem;\n  justify-content: space-between; }\n  @media (max-width: 48em) {\n    .page-footer__grid {\n      flex-wrap: wrap;\n      margin-bottom: 2.5rem; } }\n\n.page-footer__column {\n  list-style: none;\n  line-height: 2.2;\n  margin: 0; }\n  .page-footer__column a {\n    text-decoration: none;\n    color: #919AA3;\n    font-size: 1rem; }\n    @media (max-width: 60em) {\n      .page-footer__column a {\n        font-size: 1.25rem; } }\n    @media (max-width: 48em) {\n      .page-footer__column a {\n        font-size: 1.75rem; } }\n\n.page-footer__heading {\n  text-transform: uppercase;\n  font-size: 1.0625rem;\n  color: #171C34;\n  font-weight: 500; }\n  @media (max-width: 60em) {\n    .page-footer__heading {\n      font-size: 1.375rem; } }\n  @media (max-width: 48em) {\n    .page-footer__heading {\n      font-size: 1.875rem; } }\n\n.page-footer__img {\n  align-self: start; }\n  @media (max-width: 37.5em) {\n    .page-footer__img {\n      display: none; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!../postcss-loader/src!../sass-loader/lib/loader.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/normalize.css/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.0 - 2018 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;

      do {
        el = el.parentNode;

        isBody = el === d.body;
      } while (isBody === false && isScrollable(el) === false);

      isBody = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/img/bg-pattern-1.png":
/*!**********************************!*\
  !*** ./src/img/bg-pattern-1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/bg-pattern-1.png";

/***/ }),

/***/ "./src/img/bg-pattern-2.png":
/*!**********************************!*\
  !*** ./src/img/bg-pattern-2.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/bg-pattern-2.png";

/***/ }),

/***/ "./src/img/bg-pattern-3.png":
/*!**********************************!*\
  !*** ./src/img/bg-pattern-3.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/bg-pattern-3.png";

/***/ }),

/***/ "./src/img/bg-pattern-4.png":
/*!**********************************!*\
  !*** ./src/img/bg-pattern-4.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/bg-pattern-4.png";

/***/ }),

/***/ "./src/img/bg-pattern-5.png":
/*!**********************************!*\
  !*** ./src/img/bg-pattern-5.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/bg-pattern-5.png";

/***/ }),

/***/ "./src/img/checkmark-circle.svg":
/*!**************************************!*\
  !*** ./src/img/checkmark-circle.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/checkmark-circle.svg";

/***/ }),

/***/ "./src/img/close-circle.svg":
/*!**********************************!*\
  !*** ./src/img/close-circle.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/close-circle.svg";

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prices */ "./src/js/prices.js");
/* harmony import */ var _smooth_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smooth-anchor */ "./src/js/smooth-anchor.js");
/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slideshow */ "./src/js/slideshow.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__);







window.onload = function() {
  smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill();
  
  // Fill in prices and add event listeners for changes in pricing option.
  
  Object(_prices__WEBPACK_IMPORTED_MODULE_1__["fillPrices"])(_prices__WEBPACK_IMPORTED_MODULE_1__["PRICING_OPTIONS"].MONTHLY);
  
  var checkBox = document.querySelector(".js-pricing-checkbox");
  checkBox.addEventListener("click", function(event) {
    if(checkBox.checked) {
      Object(_prices__WEBPACK_IMPORTED_MODULE_1__["fillPrices"])(_prices__WEBPACK_IMPORTED_MODULE_1__["PRICING_OPTIONS"].QUARTERLY);
    } else {
      Object(_prices__WEBPACK_IMPORTED_MODULE_1__["fillPrices"])(_prices__WEBPACK_IMPORTED_MODULE_1__["PRICING_OPTIONS"].MONTHLY);
    }
  });
  
  // Add event listeners for smooth scrolling when clicking anchor links.
  
  window.onscroll = _smooth_anchor__WEBPACK_IMPORTED_MODULE_2__["windowScroll"];
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', _smooth_anchor__WEBPACK_IMPORTED_MODULE_2__["scrollToAnchor"]);
  });
  
  // Initialize the slideshow component.
  
  Object(_slideshow__WEBPACK_IMPORTED_MODULE_3__["initializeSlideshow"])(true);
};

/***/ }),

/***/ "./src/js/prices.js":
/*!**************************!*\
  !*** ./src/js/prices.js ***!
  \**************************/
/*! exports provided: PRICING_OPTIONS, fillPrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICING_OPTIONS", function() { return PRICING_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillPrices", function() { return fillPrices; });
var MONTH_PRICES = [89.99, 119.99, 139.99];
var QUARTER_PRICES = [309.99, 419.99, 489.99];
var PRICING_OPTIONS = {MONTHLY: "month", QUARTERLY: "quarter"};

/**
 * Fills in the prices according to the argument, which is one of the
 * PRICING_OPTIONS objects. It also changes the suffix appropriately (e.g., /mo
 * for monthly or /qr for quarterly) and marks the approppriate label.
 */

var fillPrices = function(opt) {
  var prices = document.querySelectorAll(".js-price");
  
  for(var i = 0; i < prices.length; i++) {
    if(opt === PRICING_OPTIONS.MONTHLY) {
      prices[i].innerHTML = MONTH_PRICES[i];
      prices[i].classList.remove("txt-price--quarterly");
      prices[i].classList.add("txt-price--monthly");
    }
    
    else if(opt === PRICING_OPTIONS.QUARTERLY) {
      prices[i].innerHTML = QUARTER_PRICES[i];
      prices[i].classList.remove("txt-price--monthly");
      prices[i].classList.add("txt-price--quarterly");
    }
  }
  
  // Give emphasis to the label corresponding to the selected option.
  
  var monthlyOpt = document.querySelector(".js-monthly-txt");
  var quarterlyOpt = document.querySelector(".js-quarterly-txt");
  
  if(opt === PRICING_OPTIONS.MONTHLY) {
    monthlyOpt.classList.add("txt-selected");
    quarterlyOpt.classList.remove("txt-selected");
  } else if(opt === PRICING_OPTIONS.QUARTERLY) {
    monthlyOpt.classList.remove("txt-selected");
    quarterlyOpt.classList.add("txt-selected");
  }
}

/***/ }),

/***/ "./src/js/slideshow.js":
/*!*****************************!*\
  !*** ./src/js/slideshow.js ***!
  \*****************************/
/*! exports provided: initializeSlideshow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeSlideshow", function() { return initializeSlideshow; });
var slideIndex = 0;
var slides = null;
var pages = null;

/**
 * Sets up the slideshow component with its pages and event listeners. It takes
 * an argument to determine whether or not the slideshow should change slides
 * automatically.
 */

function initializeSlideshow(automatic) {
  
  // Initialize global variables.
  
  slides = document.getElementsByClassName("js-slideshow")[0].children;
  var pagesParent = document.getElementsByClassName("js-slide-control")[0];
  pages = pagesParent.children;
  
  // Create page elements and their respective event listeners.
  
  for (var i = 0; i < slides.length; i++) {
    var page = document.createElement("span");
    page.classList.add("circlet");
    page.dataset.index = i;
    
    page.addEventListener("click", function(e) {
      slideIndex = Number.parseInt(e.target.dataset.index);
      updateSlideshow();
    });
    
    pagesParent.appendChild(page);
  }
  
  // Update the slideshow.
  
  updateSlideshow();
  
  // Keep updating the index if it's an automatic slideshow.
  
  if(automatic) {
    setInterval(function() {
      slideIndex++;
      updateSlideshow();
    }, 4000);
  }
}

/**
 * Displays the slide corresponding to the current index and updates the
 * selected page.
 */

function updateSlideshow() {
  
  if (slideIndex >= slides.length)
    slideIndex = 0;
  
  if (slideIndex < 0)
    slideIndex = slides.length - 1;
  
  for (var i = 0; i < slides.length; i++) {
      if(i === slideIndex) {
        slides[i].classList.remove("slideshow__img--hidden");
        pages[i].classList.add("circlet--filled");
      }
      else {
        slides[i].classList.add("slideshow__img--hidden");
        pages[i].classList.remove("circlet--filled");
      }
  }
}

/***/ }),

/***/ "./src/js/smooth-anchor.js":
/*!*********************************!*\
  !*** ./src/js/smooth-anchor.js ***!
  \*********************************/
/*! exports provided: scrollToAnchor, windowScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToAnchor", function() { return scrollToAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowScroll", function() { return windowScroll; });
/**
 * Smoothly scrolls to the anchor specified by the link to which this listener
 * is attached.
 */

var scrollToAnchor = function(e) {
  e.preventDefault();

  document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
}

/**
 * Adds or removes special styling to the header depending on the window's
 * current vertical position to make it fixed.
 */

var windowScroll = function(e) {
  var header = document.querySelector('.js-head');
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  
  if (scrollTop > header.clientHeight) {
    header.classList.add('header-fixed');
  }
  else if (scrollTop <= header.clientHeight) {
    header.classList.remove('header-fixed');
  }
}

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzdlM2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2JnLXBhdHRlcm4tMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iZy1wYXR0ZXJuLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmctcGF0dGVybi0zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2JnLXBhdHRlcm4tNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iZy1wYXR0ZXJuLTUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvY2hlY2ttYXJrLWNpcmNsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jbG9zZS1jaXJjbGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcHJpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Ntb290aC1hbmNob3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzY3MjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHdGQUFtQztBQUN0RTtBQUNBLGNBQWMsUUFBUywwVEFBMFQsc0JBQXNCLDhDQUE4QyxhQUFhLDBKQUEwSixjQUFjLEVBQUUsc0VBQXNFLG1CQUFtQixFQUFFLG9KQUFvSixtQkFBbUIscUJBQXFCLEVBQUUsZ05BQWdOLDRCQUE0Qix5QkFBeUIsaUNBQWlDLGFBQWEscUpBQXFKLHNDQUFzQyw4QkFBOEIsYUFBYSxxTEFBcUwsa0NBQWtDLEVBQUUsd0pBQXdKLHdCQUF3QiwwQ0FBMEMseURBQXlELDhDQUE4QyxhQUFhLHVGQUF1Rix3QkFBd0IsRUFBRSxtS0FBbUssc0NBQXNDLDhCQUE4QixhQUFhLG9FQUFvRSxtQkFB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUE0RDtBQUNsRTtBQUNBLHNCQUFzQjtBQUN0QixHQUFHLE1BQU0sRUFHTjs7QUFFSCxDQUFDOzs7Ozs7Ozs7Ozs7QUN0YkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUQ7QUFDTTtBQUNRO0FBQ2I7QUFDM0I7QUFDTTs7QUFFN0I7QUFDQSxFQUFFLDREQUFZOztBQUVkOztBQUVBLEVBQUUsMERBQVUsQ0FBQyx1REFBZTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwREFBVSxDQUFDLHVEQUFlO0FBQ2hDLEtBQUs7QUFDTCxNQUFNLDBEQUFVLENBQUMsdURBQWU7QUFDaEM7QUFDQSxHQUFHOztBQUVIOztBQUVBLG9CQUFvQiwyREFBWTtBQUNoQztBQUNBLHFDQUFxQyw2REFBYztBQUNuRCxHQUFHOztBQUVIOztBQUVBLEVBQUUsc0VBQW1CO0FBQ3JCLEU7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ08sdUJBQXVCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUMzQkEsY0FBYyxtQkFBTyxDQUFDLGlTQUFxSjs7QUFFM0ssNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwOyB9XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0OyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovIH1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zKTtcIiwgXCJcIl0pO1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltZy9iZy1wYXR0ZXJuLTEucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltZy9iZy1wYXR0ZXJuLTIucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltZy9iZy1wYXR0ZXJuLTMucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltZy9iZy1wYXR0ZXJuLTQucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltZy9iZy1wYXR0ZXJuLTUucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltZy9jaGVja21hcmstY2lyY2xlLnN2Z1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX182X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcvY2xvc2UtY2lyY2xlLnN2Z1wiKSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ09OVEVOVFNcXHJcXG4gKlxcclxcbiAqIEdMT0JBTFxcclxcbiAqIE1peGlucy4uLi4uLi4uLi4uLi4uLlVzZWZ1bCBtaXhpbnMuXFxyXFxuICogQ29uZmlnLi4uLi4uLi4uLi4uLi4uQ29uZmlndXJhdGlvbiB2YXJpYWJsZXMuXFxyXFxuICogQ29sb3JzLi4uLi4uLi4uLi4uLi4uQ29sb3IgdmFyaWFibGVzLlxcclxcbiAqIFR5cG9ncmFwaHkuLi4uLi4uLi4uLlR5cG9ncmFwaHktcmVsYXRlZCB2YXJpYWJsZXMuXFxyXFxuICogQnJlYWtwb2ludHMuLi4uLi4uLi4uQnJlYWtwb2ludCB2YWx1ZXMuXFxyXFxuICpcXHJcXG4gKiBHRU5FUklDXFxyXFxuICogQm94LXNpemluZy4uLi4uLi4uLi4uQWRqdXN0IGRlZmF1bHQgYm94LXNpemluZy5cXHJcXG4gKlxcclxcbiAqIEJBU0VcXHJcXG4gKiBEb2N1bWVudC4uLi4uLi4uLi4uLi5CYXNlIEhUTUwgc3R5bGUuXFxyXFxuICogQm9keS4uLi4uLi4uLi4uLi4uLi4uQmFzZSBib2R5IHN0eWxlLlxcclxcbiAqIEhlYWRpbmdzLi4uLi4uLi4uLi4uLkgxLUg2IGJhc2Ugc3R5bGVzLlxcclxcbiAqXFxyXFxuICogVVRJTElUSUVTXFxyXFxuICogTGF5b3V0Li4uLi4uLi4uLi4uLi4uQ2xhc3NlcyB1c2VkIGZvciBnZW5lcmFsIGxheW91dCB0aHJvdWdob3V0IHRoZSBzaXRlLlxcclxcbiAqIERlY29yYXRpb24uLi4uLi4uLi4uLkdlbmVyYWwgY2xhc3NlcyB0aGF0IGRlY29yYXRlIHNldmVyYWwgZWxlbWVudHMuXFxyXFxuICpcXHJcXG4gKiBPQkpFQ1RTXFxyXFxuICogVGV4dC4uLi4uLi4uLi4uLi4uLi4uVmFyaW91cyB0ZXh0IHN0eWxlcy5cXHJcXG4gKiBCYWNrZ3JvdW5kLi4uLi4uLi4uLi5WYXJpb3VzIGJhY2tncm91bmQgc3R5bGVzLlxcclxcbiAqIEltYWdlLi4uLi4uLi4uLi4uLi4uLlZhcmlvdXMgaW1hZ2Ugc3R5bGVzLlxcclxcbiAqIExpc3QuLi4uLi4uLi4uLi4uLi4uLlN0eWxlcyBmb3Igb3JkZXJlZCBhbmQgdW5vcmRlcmVkIGxpc3RzLlxcclxcbiAqXFxyXFxuICogQ09NUE9ORU5UU1xcclxcbiAqIEJ1dHRvbnMuLi4uLi4uLi4uLi4uLkJ1dHRvbiBlbGVtZW50cy5cXHJcXG4gKiBTbGlkZXNob3cuLi4uLi4uLi4uLi5TbGlkZXNob3cgY29tcG9uZW50LlxcclxcbiAqIFRvZ2dsZS1zd2l0Y2guLi4uLi4uLlRvZ2dsZSBzd2l0Y2ggY29tcG9uZW50cy5cXHJcXG4gKiBDb250YWluZXJzLi4uLi4uLi4uLi5HZW5lcmljIGNvbnRhaW5lcnMgdXNlZCB0aHJvdWdob3V0IHRoZSBzaXRlLlxcclxcbiAqIFBhZ2UtaGVhZC4uLi4uLi4uLi4uLlRoZSBtYWluIHBhZ2UgaGVhZGVyLlxcclxcbiAqIFByaW1hcnktbmF2Li4uLi4uLi4uLk1haW4gbmF2aWdhdGlvbiBtZW51LlxcclxcbiAqIFByb2R1Y3QtYXJlYS4uLi4uLi4uLlRoZSBwcm9kdWN0IGFyZWEgb2YgdGhlIGxhbmRpbmcgcGFnZS5cXHJcXG4gKiBTb2x1dGlvbnMtYXJlYS4uLi4uLi5UaGUgc29sdXRpb25zIGFyZWEgb2YgdGhlIGxhbmRpbmcgcGFnZS5cXHJcXG4gKiBGZWF0dXJlcy1hcmVhLi4uLi4uLi5UaGUgZmVhdHVyZXMgYXJlYSBvZiB0aGUgbGFuZGluZyBwYWdlLlxcclxcbiAqIFRlc3RpbW9uaWFscy1hcmVhLi4uLlRoZSB0ZXN0aW1vbmlhbHMgYXJlYSBvZiB0aGUgbGFuZGluZyBwYWdlLlxcclxcbiAqIFByaWNpbmctYXJlYS4uLi4uLi4uLlRoZSBwcmljaW5nIGFyZWEgb2YgdGhlIGxhbmRpbmcgcGFnZS5cXHJcXG4gKiBQYWdlLWZvb3Rlci4uLi4uLi4uLi5UaGUgcGFnZSBmb290ZXIuXFxyXFxuICovXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI01peGluc1xcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjQ29uZmlnXFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNDb2xvcnNcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI1R5cG9ncmFwaHlcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI0JyZWFrcG9pbnRzXFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNCb3gtc2l6aW5nXFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjRG9jdW1lbnRcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDAuODMzMzN2dzsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1zaXplOiA2LjRweDsgfSB9XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI0JvZHlcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuYm9keSB7XFxuICBmb250OiAxLjEyNXJlbSBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzkxOUFBMztcXG4gIHBhZGRpbmctbGVmdDogMTUuNjI1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMTUuNjI1cmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjBlbSkge1xcbiAgICBib2R5IHtcXG4gICAgICBmb250LXNpemU6IDEuNTYyNXJlbTsgfSB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICBib2R5IHtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMS44NzVyZW07IH0gfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNIZWFkaW5nc1xcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNMYXlvdXRcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmZsb2F0LXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5jbGVhci1hZnRlcjo6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7IH1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjRGVjb3JhdGlvblxcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uY2lyY2xldC1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1LjYyNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDYuMTg3NXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAuY2lyY2xldC1ibG9jayB7XFxuICAgICAgd2lkdGg6IDEwcmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgfSB9XFxuXFxuLmNpcmNsZXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxOUFBMztcXG4gIG9wYWNpdHk6IDAuMztcXG4gIG1hcmdpbi1yaWdodDogMS4yNXJlbTsgfVxcbiAgLmNpcmNsZXQ6bnRoLWxhc3QtY2hpbGQoMSkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC5jaXJjbGV0IHtcXG4gICAgICB3aWR0aDogMi41cmVtO1xcbiAgICAgIGhlaWdodDogMi41cmVtOyB9IH1cXG5cXG4uY2lyY2xldC0tZmlsbGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzFDMzQ7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI1RleHRcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnR4dC13aGl0ZSB7XFxuICBjb2xvcjogI0ZGRjsgfVxcblxcbi50eHQtcmVnZW50LWdyYXkge1xcbiAgY29sb3I6ICM5MTlBQTM7IH1cXG5cXG4udHh0LWNhZGV0LWJsdWUge1xcbiAgY29sb3I6ICNCMEFGQzY7IH1cXG5cXG4udHh0LXRhcmF3ZXJhIHtcXG4gIGNvbG9yOiAjMDcyQTQ0OyB9XFxuXFxuLnR4dC1taXJhZ2Uge1xcbiAgY29sb3I6ICMxNzFDMzQ7IH1cXG5cXG4udHh0LXNjaWVuY2UtYmx1ZSB7XFxuICBjb2xvcjogIzAwNzRFNDsgfVxcblxcbi50eHQtcGljdG9uLWJsdWUge1xcbiAgY29sb3I6ICMzMDhERTg7IH1cXG5cXG4udHh0LWVhc3QtYmF5IHtcXG4gIGNvbG9yOiAjNDE0MTcyOyB9XFxuXFxuLnR4dC1kdXN0eS1ncmF5IHtcXG4gIGNvbG9yOiAjOUE5QTlBOyB9XFxuXFxuLnR4dC1zaHV0dGxlLWdyYXkge1xcbiAgY29sb3I6ICM1ODYzNzc7IH1cXG5cXG4udHh0LWJsYWNrIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuLnR4dC1ub2RlY29yYXRpb24ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLnR4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmFyZWEtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDIuNzVyZW07XFxuICBjb2xvcjogIzE3MUMzNDsgfVxcblxcbi5zdWItaGVhZGluZyB7XFxuICB3aWR0aDogMzIuNXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMC45Mzc1cmVtOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAuc3ViLWhlYWRpbmcge1xcbiAgICAgIHdpZHRoOiBhdXRvOyB9IH1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjQmFja2dyb3VuZFxcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgfVxcblxcbi5iZy1yZWdlbnQtZ3JheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5QUEzOyB9XFxuXFxuLmJnLWNhZGV0LWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQUZDNjsgfVxcblxcbi5iZy10YXJhd2VyYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcyQTQ0OyB9XFxuXFxuLmJnLW1pcmFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxQzM0OyB9XFxuXFxuLmJnLXNjaWVuY2UtYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NEU0OyB9XFxuXFxuLmJnLXBpY3Rvbi1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhERTg7IH1cXG5cXG4uYmctZWFzdC1iYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE3MjsgfVxcblxcbi5iZy1kdXN0eS1ncmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5QTlBOUE7IH1cXG5cXG4uYmctc2h1dHRsZS1ncmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODYzNzc7IH1cXG5cXG4uYmctYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxcblxcbi5iZy1wYXR0ZXJuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmJnLXBhdHRlcm46OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XFxuXFxuLmJnLXBhdHRlcm5fXzE6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MGVtKSB7XFxuICAgIC5iZy1wYXR0ZXJuX18xOjpiZWZvcmUge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbi5iZy1wYXR0ZXJuX18yOjpiZWZvcmUge1xcbiAgbGVmdDogLTE1LjYyNXJlbTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLmJnLXBhdHRlcm5fXzI6OmJlZm9yZSB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuLmJnLXBhdHRlcm5fXzM6OmJlZm9yZSB7XFxuICBsZWZ0OiAtMTUuNjI1cmVtO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMjAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAuYmctcGF0dGVybl9fMzo6YmVmb3JlIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG4uYmctcGF0dGVybl9fNDo6YmVmb3JlIHtcXG4gIGxlZnQ6IC0xNS42MjVyZW07XFxuICB0b3A6IC05cmVtO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLmJnLXBhdHRlcm5fXzQ6OmJlZm9yZSB7XFxuICAgICAgbGVmdDogMDsgfSB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogMzcuNWVtKSB7XFxuICAgIC5iZy1wYXR0ZXJuX180OjpiZWZvcmUge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbi5iZy1wYXR0ZXJuX181OjpiZWZvcmUge1xcbiAgbGVmdDogLTE1LjYyNXJlbTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC5iZy1wYXR0ZXJuX181OjpiZWZvcmUge1xcbiAgICAgIGxlZnQ6IDA7IH0gfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNJbWFnZVxcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uaW1nLXJlc3BvbnNpdmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNMaXN0XFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5saXN0LWJhc2ljIHtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmxpLWNoZWNrIHtcXG4gIGxpc3Qtc3R5bGU6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyArIFwiKTsgfVxcblxcbi5saS1jcm9zcyB7XFxuICBsaXN0LXN0eWxlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzZfX18gKyBcIik7IH1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjQnV0dG9uc1xcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc0RTQ7XFxuICB3aWR0aDogMTIuNXJlbTtcXG4gIGhlaWdodDogMy43NXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDByZW0gMC42MjVyZW0gMy4xMjVyZW0gcmdiYSg3LCA0MiwgNjgsIDAuMTIpO1xcbiAgY29sb3I6ICNGRkY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAuYnRuIHtcXG4gICAgICB3aWR0aDogMTguNzVyZW07XFxuICAgICAgaGVpZ2h0OiA2LjI1cmVtOyB9IH1cXG5cXG4uYnRuLS1oZWFkIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMS4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBjb2xvcjogIzA3MkE0NDtcXG4gIGJveC1zaGFkb3c6IDByZW0gMC4zMTI1cmVtIDEuMjVyZW0gcmdiYSg3LCA0MiwgNjgsIDAuMSk7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuYnRuLS1oZWFkIHtcXG4gICAgICBoZWlnaHQ6IDMuNzVyZW07IH0gfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNTbGlkZXNob3dcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnNsaWRlc2hvdyB7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMi41NjI1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjAuMjVyZW07XFxuICBoZWlnaHQ6IDQwLjVyZW07IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC5zbGlkZXNob3cge1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTsgfSB9XFxuXFxuLnNsaWRlc2hvd19faW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxuICBvcGFjaXR5OiAxOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAuc2xpZGVzaG93X19pbWcge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7IH0gfVxcblxcbi5zbGlkZXNob3dfX2ltZy0taGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjVG9nbGUtc3dpdGNoXFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi50b2dnbGUtc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzLjc1cmVtO1xcbiAgaGVpZ2h0OiAxLjYyNXJlbTsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwZW0pIHtcXG4gICAgLnRvZ2dsZS1zd2l0Y2gge1xcbiAgICAgIHdpZHRoOiA4Ljc1cmVtO1xcbiAgICAgIGhlaWdodDogMy4xMjVyZW07IH0gfVxcblxcbi50b2dnbGUtc3dpdGNoX19jaGVja2JveCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnRvZ2dsZS1zd2l0Y2hfX3NsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogMC44MTI1cmVtO1xcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgxNTQsIDE1NCwgMTU0LCAwLjQpOyB9XFxuICAudG9nZ2xlLXN3aXRjaF9fc2xpZGVyOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDEuMTI1cmVtO1xcbiAgICB3aWR0aDogMS4xMjVyZW07XFxuICAgIGxlZnQ6IDAuMjVyZW07XFxuICAgIGJvdHRvbTogMC4xNTYyNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwOERFODtcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwZW0pIHtcXG4gICAgICAudG9nZ2xlLXN3aXRjaF9fc2xpZGVyOjpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMi41cmVtOyB9IH1cXG5cXG4udG9nZ2xlLXN3aXRjaF9fY2hlY2tib3g6Y2hlY2tlZCArIC50b2dnbGUtc3dpdGNoX19zbGlkZXI6OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyLjA2MjVyZW0pO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMi4wNjI1cmVtKTsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwZW0pIHtcXG4gICAgLnRvZ2dsZS1zd2l0Y2hfX2NoZWNrYm94OmNoZWNrZWQgKyAudG9nZ2xlLXN3aXRjaF9fc2xpZGVyOjpiZWZvcmUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUuMzEyNXJlbSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNS4zMTI1cmVtKTsgfSB9XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI0NvbnRhaW5lcnNcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmJveC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLmJveC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XFxuXFxuLmJveC1jb250YWluZXJfX2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI2LjI1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAyLjMxMjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIuMzEyNXJlbTsgfVxcbiAgLmJveC1jb250YWluZXJfX2l0ZW0gaDMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6ICMxNzFDMzQ7XFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTsgfVxcbiAgLmJveC1jb250YWluZXJfX2l0ZW0gcCB7XFxuICAgIHdpZHRoOiAyMHJlbTsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwZW0pIHtcXG4gICAgLmJveC1jb250YWluZXJfX2l0ZW0ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLmJveC1jb250YWluZXJfX2l0ZW0ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAgICAgLmJveC1jb250YWluZXJfX2l0ZW0gaDMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjg3NXJlbTsgfVxcbiAgICAgIC5ib3gtY29udGFpbmVyX19pdGVtIHVsIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07IH0gfVxcblxcbi5ib3gtY29udGFpbmVyX19pdGVtLS1hbHQge1xcbiAgaGVpZ2h0OiAyMi43NXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNi4yNXJlbTtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5ib3gtY29udGFpbmVyX19pdGVtLS1hbHQgaDMge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiAjNTg2Mzc3O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyLjY4NzVyZW07IH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwZW0pIHtcXG4gICAgICAuYm94LWNvbnRhaW5lcl9faXRlbS0tYWx0IGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07IH0gfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgIC5ib3gtY29udGFpbmVyX19pdGVtLS1hbHQgaDMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtOyB9IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC5ib3gtY29udGFpbmVyX19pdGVtLS1hbHQge1xcbiAgICAgIGhlaWdodDogYXV0bzsgfSB9XFxuXFxuLmJveC1jb250YWluZXJfX2l0ZW0tLXNwZWNpYWwge1xcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuOTM3NXJlbSByZ2JhKDcsIDQyLCA2OCwgMC4xKTsgfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNQYWdlLWhlYWRcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnBhZ2UtaGVhZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDguNzVyZW07IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MGVtKSB7XFxuICAgIC5wYWdlLWhlYWQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyB9IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC5wYWdlLWhlYWQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNjI1cmVtO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNjI1cmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDQuMzc1cmVtOyB9IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNy41ZW0pIHtcXG4gICAgLnBhZ2UtaGVhZCB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgLnBhZ2UtaGVhZCBpbWcge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuLnBhZ2UtaGVhZF9fYXNpZGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM3LjVlbSkge1xcbiAgICAucGFnZS1oZWFkX19hc2lkZSB7XFxuICAgICAgbWFyZ2luOiAwOyB9IH1cXG5cXG4ucGFnZS1oZWFkX19sb2dpbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIuNTE4NzVyZW07XFxuICBjb2xvcjogI0ZGRjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjBlbSkge1xcbiAgICAucGFnZS1oZWFkX19sb2dpbiB7XFxuICAgICAgY29sb3I6ICMwMDA7IH0gfVxcblxcbi5oZWFkZXItZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmctbGVmdDogMTUuNjI1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMTUuNjI1cmVtOyB9XFxuICAuaGVhZGVyLWZpeGVkOjpiZWZvcmUge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDIsIDE1MiwgMC43KTsgfVxcbiAgLmhlYWRlci1maXhlZCAucHJpbWFyeS1uYXZfX2xpbmsge1xcbiAgICBjb2xvcjogI0ZGRjsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwZW0pIHtcXG4gICAgLmhlYWRlci1maXhlZCAucGFnZS1oZWFkX19sb2dpbiB7XFxuICAgICAgY29sb3I6ICNGRkY7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLmhlYWRlci1maXhlZCB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjYyNXJlbTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjYyNXJlbTsgfSB9XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI1ByaW1hcnktbmF2XFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5wcmltYXJ5LW5hdl9fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tbGVmdDogMC4wMTg3NXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLnByaW1hcnktbmF2X19pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAyLjUzNzVyZW07IH1cXG5cXG4ucHJpbWFyeS1uYXZfX2xpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM5MTlBQTM7IH1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjUHJvZHVjdC1hcmVhXFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5wcm9kdWN0LWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDI2LjI1cmVtOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAucHJvZHVjdC1hcmVhIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA2LjI1cmVtO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfSB9XFxuXFxuLnByb2R1Y3QtY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMy45Mzc1cmVtO1xcbiAgaGVpZ2h0OiAxOS44NzVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDE5LjgxMjVyZW07IH1cXG4gIC5wcm9kdWN0LWNvbnRhaW5lciAuYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMy43NXJlbTsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLnByb2R1Y3QtY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIC5wcm9kdWN0LWNvbnRhaW5lciAuYnRuIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07IH0gfVxcblxcbi5wcm9kdWN0LWltZyB7XFxuICB3aWR0aDogNDVyZW07XFxuICBoZWlnaHQ6IDMwcmVtOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAucHJvZHVjdC1pbWcge1xcbiAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9IH1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjU29sdXRpb25zLWFyZWFcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnNvbHV0aW9ucy1hcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDE3LjVyZW07IH1cXG4gIC5zb2x1dGlvbnMtYXJlYSAuc3ViLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiA3LjVyZW07IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC5zb2x1dGlvbnMtYXJlYSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNi4yNXJlbTsgfSB9XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI0ZlYXR1cmVzLWFyZWFcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmZlYXR1cmVzLWFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTcuNXJlbTsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLmZlYXR1cmVzLWFyZWEge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDYuMjVyZW07IH0gfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNUZXN0aW1vbmlhbHMtYXJlYVxcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4udGVzdGltb25pYWxzLWFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjIuOTM3NXJlbTtcXG4gIHBhZGRpbmctdG9wOiA5LjA2MjVyZW07IH1cXG4gIC50ZXN0aW1vbmlhbHMtYXJlYSAuc3ViLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAudGVzdGltb25pYWxzLWFyZWEge1xcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDYuMjVyZW07IH0gfVxcblxcbi50ZXN0aW1vbmlhbHMtdHh0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiAjMTcxQzM0OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAudGVzdGltb25pYWxzLXR4dCB7XFxuICAgICAgZm9udC1zaXplOiAxLjg3NXJlbTsgfSB9XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI1ByaWNpbmctYXJlYVxcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4ucHJpY2luZy1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDUuMTI1cmVtOyB9XFxuICAucHJpY2luZy1hcmVhIC5ib3gtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTsgfVxcblxcbi5wcmljaW5nLW9wdGlvbnMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB3aWR0aDogMjMuMTI1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwZW0pIHtcXG4gICAgLnByaWNpbmctb3B0aW9ucyB7XFxuICAgICAgZm9udC1zaXplOiAxLjQzNzVyZW07XFxuICAgICAgd2lkdGg6IDI2LjI1cmVtOyB9IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC5wcmljaW5nLW9wdGlvbnMge1xcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgICB3aWR0aDogMzUuNjI1cmVtOyB9IH1cXG5cXG4udHh0LXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGNvbG9yOiAjMTcxQzM0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcbiAgLnR4dC1wcmljZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIiRcXFwiO1xcbiAgICBjb2xvcjogIzAwNzRFNDtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjMxMjVyZW07IH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwZW0pIHtcXG4gICAgICAudHh0LXByaWNlOjpiZWZvcmUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07IH0gfVxcbiAgLnR4dC1wcmljZTo6YWZ0ZXIge1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjMxMjVyZW07XFxuICAgIGNvbG9yOiAjOTE5QUEzOyB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MGVtKSB7XFxuICAgICAgLnR4dC1wcmljZTo6YWZ0ZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtOyB9IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIC50eHQtcHJpY2Uge1xcbiAgICAgIGZvbnQtc2l6ZTogMi4xODc1cmVtOyB9IH1cXG5cXG4udHh0LXByaWNlLS1zcGVjaWFsIHtcXG4gIGNvbG9yOiAjMDA3NEU0OyB9XFxuXFxuLnR4dC1wcmljZS0tbW9udGhseTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi9tb1xcXCI7IH1cXG5cXG4udHh0LXByaWNlLS1xdWFydGVybHk6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIvcXJcXFwiOyB9XFxuXFxuLnR4dC1zZWxlY3RlZCB7XFxuICBjb2xvcjogIzE3MUMzNDsgfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNQYWdlLWZvb3RlclxcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4ucGFnZS1mb290ZXIge1xcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XFxuICBoZWlnaHQ6IDM1Ljc1cmVtO1xcbiAgcGFkZGluZy10b3A6IDE3LjkzNzVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5wYWdlLWZvb3RlciBwIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjBlbSkge1xcbiAgICAucGFnZS1mb290ZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgICBwYWRkaW5nLXRvcDogMTYuMjVyZW07IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLnBhZ2UtZm9vdGVyIHtcXG4gICAgICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgICAgIGhlaWdodDogYXV0bzsgfSB9XFxuXFxuLnBhZ2UtZm9vdGVyX19ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAucGFnZS1mb290ZXJfX2dyaWQge1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IH0gfVxcblxcbi5wYWdlLWZvb3Rlcl9fY29sdW1uIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMi4yO1xcbiAgbWFyZ2luOiAwOyB9XFxuICAucGFnZS1mb290ZXJfX2NvbHVtbiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzkxOUFBMztcXG4gICAgZm9udC1zaXplOiAxcmVtOyB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MGVtKSB7XFxuICAgICAgLnBhZ2UtZm9vdGVyX19jb2x1bW4gYSB7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07IH0gfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgIC5wYWdlLWZvb3Rlcl9fY29sdW1uIGEge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtOyB9IH1cXG5cXG4ucGFnZS1mb290ZXJfX2hlYWRpbmcge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xcbiAgY29sb3I6ICMxNzFDMzQ7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjBlbSkge1xcbiAgICAucGFnZS1mb290ZXJfX2hlYWRpbmcge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgLnBhZ2UtZm9vdGVyX19oZWFkaW5nIHtcXG4gICAgICBmb250LXNpemU6IDEuODc1cmVtOyB9IH1cXG5cXG4ucGFnZS1mb290ZXJfX2ltZyB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM3LjVlbSkge1xcbiAgICAucGFnZS1mb290ZXJfX2ltZyB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9ybWFsaXplLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9ybWFsaXplLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub3JtYWxpemUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyogc21vb3Roc2Nyb2xsIHYwLjQuMCAtIDIwMTggLSBEdXN0YW4gS2FzdGVuLCBKZXJlbWlhcyBNZW5pY2hlbGxpIC0gTUlUIExpY2Vuc2UgKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBwb2x5ZmlsbFxuICBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICAvLyBhbGlhc2VzXG4gICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgdmFyIGQgPSBkb2N1bWVudDtcblxuICAgIC8vIHJldHVybiBpZiBzY3JvbGwgYmVoYXZpb3IgaXMgc3VwcG9ydGVkIGFuZCBwb2x5ZmlsbCBpcyBub3QgZm9yY2VkXG4gICAgaWYgKFxuICAgICAgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkLmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJlxuICAgICAgdy5fX2ZvcmNlU21vb3RoU2Nyb2xsUG9seWZpbGxfXyAhPT0gdHJ1ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdsb2JhbHNcbiAgICB2YXIgRWxlbWVudCA9IHcuSFRNTEVsZW1lbnQgfHwgdy5FbGVtZW50O1xuICAgIHZhciBTQ1JPTExfVElNRSA9IDQ2ODtcblxuICAgIC8vIG9iamVjdCBnYXRoZXJpbmcgb3JpZ2luYWwgc2Nyb2xsIG1ldGhvZHNcbiAgICB2YXIgb3JpZ2luYWwgPSB7XG4gICAgICBzY3JvbGw6IHcuc2Nyb2xsIHx8IHcuc2Nyb2xsVG8sXG4gICAgICBzY3JvbGxCeTogdy5zY3JvbGxCeSxcbiAgICAgIGVsZW1lbnRTY3JvbGw6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCB8fCBzY3JvbGxFbGVtZW50LFxuICAgICAgc2Nyb2xsSW50b1ZpZXc6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgfTtcblxuICAgIC8vIGRlZmluZSB0aW1pbmcgbWV0aG9kXG4gICAgdmFyIG5vdyA9XG4gICAgICB3LnBlcmZvcm1hbmNlICYmIHcucGVyZm9ybWFuY2Uubm93XG4gICAgICAgID8gdy5wZXJmb3JtYW5jZS5ub3cuYmluZCh3LnBlcmZvcm1hbmNlKVxuICAgICAgICA6IERhdGUubm93O1xuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGEgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBtYWRlIGJ5IE1pY3Jvc29mdFxuICAgICAqIEBtZXRob2QgaXNNaWNyb3NvZnRCcm93c2VyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzTWljcm9zb2Z0QnJvd3Nlcih1c2VyQWdlbnQpIHtcbiAgICAgIHZhciB1c2VyQWdlbnRQYXR0ZXJucyA9IFsnTVNJRSAnLCAnVHJpZGVudC8nLCAnRWRnZS8nXTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodXNlckFnZW50UGF0dGVybnMuam9pbignfCcpKS50ZXN0KHVzZXJBZ2VudCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJRSBoYXMgcm91bmRpbmcgYnVnIHJvdW5kaW5nIGRvd24gY2xpZW50SGVpZ2h0IGFuZCBjbGllbnRXaWR0aCBhbmRcbiAgICAgKiByb3VuZGluZyB1cCBzY3JvbGxIZWlnaHQgYW5kIHNjcm9sbFdpZHRoIGNhdXNpbmcgZmFsc2UgcG9zaXRpdmVzXG4gICAgICogb24gaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICovXG4gICAgdmFyIFJPVU5ESU5HX1RPTEVSQU5DRSA9IGlzTWljcm9zb2Z0QnJvd3Nlcih3Lm5hdmlnYXRvci51c2VyQWdlbnQpID8gMSA6IDA7XG5cbiAgICAvKipcbiAgICAgKiBjaGFuZ2VzIHNjcm9sbCBwb3NpdGlvbiBpbnNpZGUgYW4gZWxlbWVudFxuICAgICAqIEBtZXRob2Qgc2Nyb2xsRWxlbWVudFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjcm9sbEVsZW1lbnQoeCwgeSkge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0geDtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wID0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHJlc3VsdCBvZiBhcHBseWluZyBlYXNlIG1hdGggZnVuY3Rpb24gdG8gYSBudW1iZXJcbiAgICAgKiBAbWV0aG9kIGVhc2VcbiAgICAgKiBAcGFyYW0ge051bWJlcn0ga1xuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZWFzZShrKSB7XG4gICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHNtb290aCBiZWhhdmlvciBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqIEBtZXRob2Qgc2hvdWxkQmFpbE91dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gZmlyc3RBcmdcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaG91bGRCYWlsT3V0KGZpcnN0QXJnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGZpcnN0QXJnID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBmaXJzdEFyZyAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2F1dG8nIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnaW5zdGFudCdcbiAgICAgICkge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0L251bGxcbiAgICAgICAgLy8gb3IgYmVoYXZpb3IgaXMgYXV0bywgaW5zdGFudCBvciB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09ICdvYmplY3QnICYmIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnc21vb3RoJykge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhbiBvYmplY3QgYW5kIGJlaGF2aW9yIGlzIHNtb290aFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHRocm93IGVycm9yIHdoZW4gYmVoYXZpb3IgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ2JlaGF2aW9yIG1lbWJlciBvZiBTY3JvbGxPcHRpb25zICcgK1xuICAgICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yICtcbiAgICAgICAgICAnIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBlbnVtZXJhdGlvbiBTY3JvbGxCZWhhdmlvci4nXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBzY3JvbGxhYmxlIHNwYWNlIGluIHRoZSBwcm92aWRlZCBheGlzXG4gICAgICogQG1ldGhvZCBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsIGF4aXMpIHtcbiAgICAgIGlmIChheGlzID09PSAnWScpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudEhlaWdodCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGF4aXMgPT09ICdYJykge1xuICAgICAgICByZXR1cm4gZWwuY2xpZW50V2lkdGggKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxXaWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgYSBzY3JvbGxhYmxlIG92ZXJmbG93IHByb3BlcnR5IGluIHRoZSBheGlzXG4gICAgICogQG1ldGhvZCBjYW5PdmVyZmxvd1xuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNhbk92ZXJmbG93KGVsLCBheGlzKSB7XG4gICAgICB2YXIgb3ZlcmZsb3dWYWx1ZSA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ292ZXJmbG93JyArIGF4aXNdO1xuXG4gICAgICByZXR1cm4gb3ZlcmZsb3dWYWx1ZSA9PT0gJ2F1dG8nIHx8IG92ZXJmbG93VmFsdWUgPT09ICdzY3JvbGwnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGNhbiBiZSBzY3JvbGxlZCBpbiBlaXRoZXIgYXhpc1xuICAgICAqIEBtZXRob2QgaXNTY3JvbGxhYmxlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWSA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1knKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1knKTtcbiAgICAgIHZhciBpc1Njcm9sbGFibGVYID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWCcpICYmIGNhbk92ZXJmbG93KGVsLCAnWCcpO1xuXG4gICAgICByZXR1cm4gaXNTY3JvbGxhYmxlWSB8fCBpc1Njcm9sbGFibGVYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZpbmRzIHNjcm9sbGFibGUgcGFyZW50IG9mIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIGZpbmRTY3JvbGxhYmxlUGFyZW50XG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbmRTY3JvbGxhYmxlUGFyZW50KGVsKSB7XG4gICAgICB2YXIgaXNCb2R5O1xuXG4gICAgICBkbyB7XG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcblxuICAgICAgICBpc0JvZHkgPSBlbCA9PT0gZC5ib2R5O1xuICAgICAgfSB3aGlsZSAoaXNCb2R5ID09PSBmYWxzZSAmJiBpc1Njcm9sbGFibGUoZWwpID09PSBmYWxzZSk7XG5cbiAgICAgIGlzQm9keSA9IG51bGw7XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGVwKGNvbnRleHQpIHtcbiAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgY3VycmVudFg7XG4gICAgICB2YXIgY3VycmVudFk7XG4gICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7XG5cbiAgICAgIC8vIGF2b2lkIGVsYXBzZWQgdGltZXMgaGlnaGVyIHRoYW4gb25lXG4gICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuICAgICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuICAgICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xuXG4gICAgICBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQueCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcblxuICAgICAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGN1cnJlbnRYLCBjdXJyZW50WSk7XG5cbiAgICAgIC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXG4gICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2Nyb2xscyB3aW5kb3cgb3IgZWxlbWVudCB3aXRoIGEgc21vb3RoIGJlaGF2aW9yXG4gICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgdmFyIHNjcm9sbGFibGU7XG4gICAgICB2YXIgc3RhcnRYO1xuICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgIHZhciBtZXRob2Q7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgIC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuICAgICAgaWYgKGVsID09PSBkLmJvZHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IHc7XG4gICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICBzdGFydFkgPSB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbWV0aG9kID0gb3JpZ2luYWwuc2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IGVsO1xuICAgICAgICBzdGFydFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgIG1ldGhvZCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuICAgICAgc3RlcCh7XG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgc3RhcnRYOiBzdGFydFgsXG4gICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPUklHSU5BTCBNRVRIT0RTIE9WRVJSSURFU1xuICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG4gICAgdy5zY3JvbGwgPSB3LnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGwuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyB3LnNjcm9sbEJ5XG4gICAgdy5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0ubGVmdCArICh3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgLy8gaWYgb25lIG51bWJlciBpcyBwYXNzZWQsIHRocm93IGVycm9yIHRvIG1hdGNoIEZpcmVmb3ggaW1wbGVtZW50YXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAvLyB1c2UgbGVmdCBwcm9wLCBmaXJzdCBudW1iZXIgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsTGVmdFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IH5+YXJndW1lbnRzWzBdIDogdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdCA9IGFyZ3VtZW50c1swXS5sZWZ0O1xuICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50c1swXS50b3A7XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLFxuICAgICAgICB0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbExlZnQgOiB+fmxlZnQsXG4gICAgICAgIHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxUb3AgOiB+fnRvcFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzBdICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1sxXSArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEludG9WaWV3LmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XG4gICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQgIT09IGQuYm9keSkge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbExlZnQgKyBjbGllbnRSZWN0cy5sZWZ0IC0gcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbFRvcCArIGNsaWVudFJlY3RzLnRvcCAtIHBhcmVudFJlY3RzLnRvcFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHJldmVhbCBwYXJlbnQgaW4gdmlld3BvcnQgdW5sZXNzIGlzIGZpeGVkXG4gICAgICAgIGlmICh3LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHBhcmVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHRvcDogY2xpZW50UmVjdHMudG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGNvbW1vbmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGdsb2JhbFxuICAgIHBvbHlmaWxsKCk7XG4gIH1cblxufSgpKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWcvYmctcGF0dGVybi0xLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWcvYmctcGF0dGVybi0yLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWcvYmctcGF0dGVybi0zLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWcvYmctcGF0dGVybi00LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWcvYmctcGF0dGVybi01LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWcvY2hlY2ttYXJrLWNpcmNsZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1nL2Nsb3NlLWNpcmNsZS5zdmdcIjsiLCJpbXBvcnQgc21vb3Roc2Nyb2xsIGZyb20gJ3Ntb290aHNjcm9sbC1wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IFBSSUNJTkdfT1BUSU9OUywgZmlsbFByaWNlcyB9IGZyb20gJy4vcHJpY2VzJztcclxuaW1wb3J0IHsgd2luZG93U2Nyb2xsLCBzY3JvbGxUb0FuY2hvciB9IGZyb20gJy4vc21vb3RoLWFuY2hvcic7XHJcbmltcG9ydCB7IGluaXRpYWxpemVTbGlkZXNob3cgfSBmcm9tICcuL3NsaWRlc2hvdyc7XHJcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9zY3NzL21haW4uc2Nzcyc7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgc21vb3Roc2Nyb2xsLnBvbHlmaWxsKCk7XHJcbiAgXHJcbiAgLy8gRmlsbCBpbiBwcmljZXMgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIGNoYW5nZXMgaW4gcHJpY2luZyBvcHRpb24uXHJcbiAgXHJcbiAgZmlsbFByaWNlcyhQUklDSU5HX09QVElPTlMuTU9OVEhMWSk7XHJcbiAgXHJcbiAgdmFyIGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1wcmljaW5nLWNoZWNrYm94XCIpO1xyXG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYoY2hlY2tCb3guY2hlY2tlZCkge1xyXG4gICAgICBmaWxsUHJpY2VzKFBSSUNJTkdfT1BUSU9OUy5RVUFSVEVSTFkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsbFByaWNlcyhQUklDSU5HX09QVElPTlMuTU9OVEhMWSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3Igc21vb3RoIHNjcm9sbGluZyB3aGVuIGNsaWNraW5nIGFuY2hvciBsaW5rcy5cclxuICBcclxuICB3aW5kb3cub25zY3JvbGwgPSB3aW5kb3dTY3JvbGw7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGZ1bmN0aW9uKGFuY2hvcikge1xyXG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2Nyb2xsVG9BbmNob3IpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIEluaXRpYWxpemUgdGhlIHNsaWRlc2hvdyBjb21wb25lbnQuXHJcbiAgXHJcbiAgaW5pdGlhbGl6ZVNsaWRlc2hvdyh0cnVlKTtcclxufTsiLCJ2YXIgTU9OVEhfUFJJQ0VTID0gWzg5Ljk5LCAxMTkuOTksIDEzOS45OV07XHJcbnZhciBRVUFSVEVSX1BSSUNFUyA9IFszMDkuOTksIDQxOS45OSwgNDg5Ljk5XTtcclxuZXhwb3J0IHZhciBQUklDSU5HX09QVElPTlMgPSB7TU9OVEhMWTogXCJtb250aFwiLCBRVUFSVEVSTFk6IFwicXVhcnRlclwifTtcclxuXHJcbi8qKlxyXG4gKiBGaWxscyBpbiB0aGUgcHJpY2VzIGFjY29yZGluZyB0byB0aGUgYXJndW1lbnQsIHdoaWNoIGlzIG9uZSBvZiB0aGVcclxuICogUFJJQ0lOR19PUFRJT05TIG9iamVjdHMuIEl0IGFsc28gY2hhbmdlcyB0aGUgc3VmZml4IGFwcHJvcHJpYXRlbHkgKGUuZy4sIC9tb1xyXG4gKiBmb3IgbW9udGhseSBvciAvcXIgZm9yIHF1YXJ0ZXJseSkgYW5kIG1hcmtzIHRoZSBhcHByb3BwcmlhdGUgbGFiZWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IHZhciBmaWxsUHJpY2VzID0gZnVuY3Rpb24ob3B0KSB7XHJcbiAgdmFyIHByaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtcHJpY2VcIik7XHJcbiAgXHJcbiAgZm9yKHZhciBpID0gMDsgaSA8IHByaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYob3B0ID09PSBQUklDSU5HX09QVElPTlMuTU9OVEhMWSkge1xyXG4gICAgICBwcmljZXNbaV0uaW5uZXJIVE1MID0gTU9OVEhfUFJJQ0VTW2ldO1xyXG4gICAgICBwcmljZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcInR4dC1wcmljZS0tcXVhcnRlcmx5XCIpO1xyXG4gICAgICBwcmljZXNbaV0uY2xhc3NMaXN0LmFkZChcInR4dC1wcmljZS0tbW9udGhseVwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZWxzZSBpZihvcHQgPT09IFBSSUNJTkdfT1BUSU9OUy5RVUFSVEVSTFkpIHtcclxuICAgICAgcHJpY2VzW2ldLmlubmVySFRNTCA9IFFVQVJURVJfUFJJQ0VTW2ldO1xyXG4gICAgICBwcmljZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcInR4dC1wcmljZS0tbW9udGhseVwiKTtcclxuICAgICAgcHJpY2VzW2ldLmNsYXNzTGlzdC5hZGQoXCJ0eHQtcHJpY2UtLXF1YXJ0ZXJseVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gR2l2ZSBlbXBoYXNpcyB0byB0aGUgbGFiZWwgY29ycmVzcG9uZGluZyB0byB0aGUgc2VsZWN0ZWQgb3B0aW9uLlxyXG4gIFxyXG4gIHZhciBtb250aGx5T3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb250aGx5LXR4dFwiKTtcclxuICB2YXIgcXVhcnRlcmx5T3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1xdWFydGVybHktdHh0XCIpO1xyXG4gIFxyXG4gIGlmKG9wdCA9PT0gUFJJQ0lOR19PUFRJT05TLk1PTlRITFkpIHtcclxuICAgIG1vbnRobHlPcHQuY2xhc3NMaXN0LmFkZChcInR4dC1zZWxlY3RlZFwiKTtcclxuICAgIHF1YXJ0ZXJseU9wdC5jbGFzc0xpc3QucmVtb3ZlKFwidHh0LXNlbGVjdGVkXCIpO1xyXG4gIH0gZWxzZSBpZihvcHQgPT09IFBSSUNJTkdfT1BUSU9OUy5RVUFSVEVSTFkpIHtcclxuICAgIG1vbnRobHlPcHQuY2xhc3NMaXN0LnJlbW92ZShcInR4dC1zZWxlY3RlZFwiKTtcclxuICAgIHF1YXJ0ZXJseU9wdC5jbGFzc0xpc3QuYWRkKFwidHh0LXNlbGVjdGVkXCIpO1xyXG4gIH1cclxufSIsInZhciBzbGlkZUluZGV4ID0gMDtcclxudmFyIHNsaWRlcyA9IG51bGw7XHJcbnZhciBwYWdlcyA9IG51bGw7XHJcblxyXG4vKipcclxuICogU2V0cyB1cCB0aGUgc2xpZGVzaG93IGNvbXBvbmVudCB3aXRoIGl0cyBwYWdlcyBhbmQgZXZlbnQgbGlzdGVuZXJzLiBJdCB0YWtlc1xyXG4gKiBhbiBhcmd1bWVudCB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdGhlIHNsaWRlc2hvdyBzaG91bGQgY2hhbmdlIHNsaWRlc1xyXG4gKiBhdXRvbWF0aWNhbGx5LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU2xpZGVzaG93KGF1dG9tYXRpYykge1xyXG4gIFxyXG4gIC8vIEluaXRpYWxpemUgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICBcclxuICBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtc2xpZGVzaG93XCIpWzBdLmNoaWxkcmVuO1xyXG4gIHZhciBwYWdlc1BhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1zbGlkZS1jb250cm9sXCIpWzBdO1xyXG4gIHBhZ2VzID0gcGFnZXNQYXJlbnQuY2hpbGRyZW47XHJcbiAgXHJcbiAgLy8gQ3JlYXRlIHBhZ2UgZWxlbWVudHMgYW5kIHRoZWlyIHJlc3BlY3RpdmUgZXZlbnQgbGlzdGVuZXJzLlxyXG4gIFxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xldFwiKTtcclxuICAgIHBhZ2UuZGF0YXNldC5pbmRleCA9IGk7XHJcbiAgICBcclxuICAgIHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2xpZGVJbmRleCA9IE51bWJlci5wYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgdXBkYXRlU2xpZGVzaG93KCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcGFnZXNQYXJlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFVwZGF0ZSB0aGUgc2xpZGVzaG93LlxyXG4gIFxyXG4gIHVwZGF0ZVNsaWRlc2hvdygpO1xyXG4gIFxyXG4gIC8vIEtlZXAgdXBkYXRpbmcgdGhlIGluZGV4IGlmIGl0J3MgYW4gYXV0b21hdGljIHNsaWRlc2hvdy5cclxuICBcclxuICBpZihhdXRvbWF0aWMpIHtcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICBzbGlkZUluZGV4Kys7XHJcbiAgICAgIHVwZGF0ZVNsaWRlc2hvdygpO1xyXG4gICAgfSwgNDAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGlzcGxheXMgdGhlIHNsaWRlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgaW5kZXggYW5kIHVwZGF0ZXMgdGhlXHJcbiAqIHNlbGVjdGVkIHBhZ2UuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzaG93KCkge1xyXG4gIFxyXG4gIGlmIChzbGlkZUluZGV4ID49IHNsaWRlcy5sZW5ndGgpXHJcbiAgICBzbGlkZUluZGV4ID0gMDtcclxuICBcclxuICBpZiAoc2xpZGVJbmRleCA8IDApXHJcbiAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XHJcbiAgXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYoaSA9PT0gc2xpZGVJbmRleCkge1xyXG4gICAgICAgIHNsaWRlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVzaG93X19pbWctLWhpZGRlblwiKTtcclxuICAgICAgICBwYWdlc1tpXS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xldC0tZmlsbGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHNsaWRlc1tpXS5jbGFzc0xpc3QuYWRkKFwic2xpZGVzaG93X19pbWctLWhpZGRlblwiKTtcclxuICAgICAgICBwYWdlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xldC0tZmlsbGVkXCIpO1xyXG4gICAgICB9XHJcbiAgfVxyXG59IiwiLyoqXHJcbiAqIFNtb290aGx5IHNjcm9sbHMgdG8gdGhlIGFuY2hvciBzcGVjaWZpZWQgYnkgdGhlIGxpbmsgdG8gd2hpY2ggdGhpcyBsaXN0ZW5lclxyXG4gKiBpcyBhdHRhY2hlZC5cclxuICovXHJcblxyXG5leHBvcnQgdmFyIHNjcm9sbFRvQW5jaG9yID0gZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgb3IgcmVtb3ZlcyBzcGVjaWFsIHN0eWxpbmcgdG8gdGhlIGhlYWRlciBkZXBlbmRpbmcgb24gdGhlIHdpbmRvdydzXHJcbiAqIGN1cnJlbnQgdmVydGljYWwgcG9zaXRpb24gdG8gbWFrZSBpdCBmaXhlZC5cclxuICovXHJcblxyXG5leHBvcnQgdmFyIHdpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uKGUpIHtcclxuICB2YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWQnKTtcclxuICB2YXIgc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICBcclxuICBpZiAoc2Nyb2xsVG9wID4gaGVhZGVyLmNsaWVudEhlaWdodCkge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1maXhlZCcpO1xyXG4gIH1cclxuICBlbHNlIGlmIChzY3JvbGxUb3AgPD0gaGVhZGVyLmNsaWVudEhlaWdodCkge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1maXhlZCcpO1xyXG4gIH1cclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=