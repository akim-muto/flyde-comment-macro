"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_MacroNode_Macro"] = self["webpackChunk_MacroNode_Macro"] || []).push([["blueprint-icons-all-paths"],{

/***/ "./node_modules/.pnpm/@blueprintjs+icons@5.12.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@blueprintjs/icons/lib/esm/allPaths.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@blueprintjs+icons@5.12.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@blueprintjs/icons/lib/esm/allPaths.js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconSvgPaths16: () => (/* reexport module object */ _generated_16px_paths__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   IconSvgPaths20: () => (/* reexport module object */ _generated_20px_paths__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   getIconPaths: () => (/* binding */ getIconPaths),\n/* harmony export */   iconNameToPathsRecordKey: () => (/* binding */ iconNameToPathsRecordKey)\n/* harmony export */ });\n/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! change-case */ \"./node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js\");\n/* harmony import */ var _generated_16px_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generated/16px/paths */ \"./node_modules/.pnpm/@blueprintjs+icons@5.12.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@blueprintjs/icons/lib/esm/generated/16px/paths/index.js\");\n/* harmony import */ var _generated_20px_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generated/20px/paths */ \"./node_modules/.pnpm/@blueprintjs+icons@5.12.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@blueprintjs/icons/lib/esm/generated/20px/paths/index.js\");\n/* harmony import */ var _iconTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconTypes */ \"./node_modules/.pnpm/@blueprintjs+icons@5.12.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@blueprintjs/icons/lib/esm/iconTypes.js\");\n/*\n * Copyright 2021 Palantir Technologies, Inc. All rights reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n\n\n/**\n * Get the list of vector paths that define a given icon. These path strings are used to render `<path>`\n * elements inside an `<svg>` icon element. For full implementation details and nuances, see the icon component\n * handlebars template and `generate-icon-components` script in the __@blueprintjs/icons__ package.\n *\n * Note: this function loads all icon definitions __statically__, which means every icon is included in your\n * JS bundle. Only use this API if your app is likely to use all Blueprint icons at runtime. If you are looking for a\n * dynamic icon loader which loads icon definitions on-demand, use `{ Icons } from \"@blueprintjs/icons\"` instead.\n */\nfunction getIconPaths(name, size) {\n    var key = (0,change_case__WEBPACK_IMPORTED_MODULE_2__.pascalCase)(name);\n    return size === _iconTypes__WEBPACK_IMPORTED_MODULE_3__.IconSize.STANDARD ? _generated_16px_paths__WEBPACK_IMPORTED_MODULE_0__[key] : _generated_20px_paths__WEBPACK_IMPORTED_MODULE_1__[key];\n}\n/**\n * Type safe string literal conversion of snake-case icon names to PascalCase icon names.\n * This is useful for indexing into the SVG paths record to extract a single icon's SVG path definition.\n *\n * @deprecated use `getIconPaths` instead\n */\nfunction iconNameToPathsRecordKey(name) {\n    return (0,change_case__WEBPACK_IMPORTED_MODULE_2__.pascalCase)(name);\n}\n//# sourceMappingURL=allPaths.js.map\n\n//# sourceURL=webpack://__MacroNode__Macro/./node_modules/.pnpm/@blueprintjs+icons@5.12.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@blueprintjs/icons/lib/esm/allPaths.js?");

/***/ })

}]);