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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculating_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_module__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_styles_css__);




Object(__WEBPACK_IMPORTED_MODULE_1__interface_module__["a" /* default */])();

const btnsArray = document.getElementsByTagName("button"),
    userInput = document.getElementById("userInput"),
    value = userInput.value

const equals = () => {



    
    let valueArr = value.split(" ");
    if (valueArr[1] == "+") value = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].adding(Number(valueArr[0]), Number(valueArr[2]));
    if (valueArr[1] == "-") value = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].diminution(Number(valueArr[0]), Number(valueArr[2]));
    if (valueArr[1] == "*") value = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].multiply(Number(valueArr[0]), Number(valueArr[2]));
    if (valueArr[1] == "/") value = __WEBPACK_IMPORTED_MODULE_0__calculating_module__["a" /* default */].division(Number(valueArr[0]), Number(valueArr[2]));
}

for (let element of btnsArray) {
    element.addEventListener("click", (e) => {
        if (e.target.textContent == "=") equals();
        value = `${value} ${e.target.textContent} `;
    })
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const calcModule = {
    result: 0,
    adding: (a, b) => this.result = a + b,
    diminution: (a, b) => this.result = a - b,
    multiply: (a, b) => this.result = a * b,
    division: (a, b) => (b !== 0) ? this.result = a/b : "Cannot proceed"
}

/* harmony default export */ __webpack_exports__["a"] = (calcModule);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const renderInterface = () => {
    const body = document.getElementById("app"),
        forBtns = document.createElement("div"),
        input = document.createElement("input"),
        funcSymbolsArray = ["+", "-", "x", "/", "="];

    input.id = "userInput";
    input.placeholder = "Enter numbers";
    forBtns.className = "flex-container";

    funcSymbolsArray.forEach(element => {
        const btn = document.createElement("button");
        btn.textContent = element;
        forBtns.appendChild(btn);
    })

    body.appendChild(forBtns);
    body.appendChild(input);
}

/* harmony default export */ __webpack_exports__["a"] = (renderInterface);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);