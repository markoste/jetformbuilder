/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/conditional.block/ConditionChecker.js":
/*!********************************************************!*\
  !*** ./frontend/conditional.block/ConditionChecker.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ConditionChecker() {}\n/**\r\n * @param condition {ConditionFieldItem}\r\n * @param input {InputData}\r\n */\n\n\nConditionChecker.prototype = {\n  isSupported: function isSupported() {\n    return true;\n  },\n  check: function check(condition, input) {\n    var current = input.value.current;\n    var conditionValue = condition.value;\n\n    switch (condition.operator) {\n      case 'equal':\n        return current === conditionValue;\n\n      case 'greater':\n        return current > conditionValue;\n\n      case 'less':\n        return current < conditionValue;\n\n      case 'between':\n        if (!(conditionValue !== null && conditionValue !== void 0 && conditionValue.length)) {\n          return false;\n        }\n\n        return conditionValue[0] <= current && current <= conditionValue[1];\n\n      case 'one_of':\n        if (!(conditionValue !== null && conditionValue !== void 0 && conditionValue.length)) {\n          return false;\n        }\n\n        return 0 <= conditionValue.indexOf(current);\n\n      case 'contain':\n        return 0 <= current.indexOf(conditionValue);\n\n      default:\n        return false;\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionChecker);\n\n//# sourceURL=webpack:///./frontend/conditional.block/ConditionChecker.js?");

/***/ }),

/***/ "./frontend/conditional.block/ConditionFieldItem.js":
/*!**********************************************************!*\
  !*** ./frontend/conditional.block/ConditionFieldItem.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ConditionItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionItem */ \"./frontend/conditional.block/ConditionItem.js\");\n\nvar _JetFormBuilderAbstra = JetFormBuilderAbstract,\n    CalculatedFormula = _JetFormBuilderAbstra.CalculatedFormula;\n\nfunction ConditionFieldItem() {\n  _ConditionItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.isSupported = function (options) {\n    var _options$field;\n\n    return !!(options !== null && options !== void 0 && (_options$field = options.field) !== null && _options$field !== void 0 && _options$field.length);\n  };\n\n  this.observe = function () {\n    var _this$list$_fields,\n        _this = this;\n\n    var input = this.getInput();\n    this.list._fields = (_this$list$_fields = this.list._fields) !== null && _this$list$_fields !== void 0 ? _this$list$_fields : [];\n\n    if (!input || this.list._fields.includes(this.field)) {\n      return;\n    }\n\n    this.list._fields.push(this.field);\n\n    input.watch(function () {\n      return _this.list.onChangeRelated();\n    });\n  };\n  /**\r\n   * @returns {InputData|boolean}\r\n   */\n\n\n  this.getInput = function () {\n    return this.list.root.getInput(this.field);\n  };\n\n  this.isPassed = function () {\n    var input = this.getInput();\n\n    if (!input) {\n      return false;\n    }\n\n    return input.checker.check(this, input);\n  };\n\n  this.setOptions = function (_ref) {\n    var _this2 = this;\n\n    var field = _ref.field,\n        operator = _ref.operator,\n        value = _ref.value,\n        render_state = _ref.render_state;\n    this.field = field;\n    this.operator = operator;\n    this.render_state = render_state;\n    var formula = new CalculatedFormula(value, this.list.root);\n\n    formula.setResult = function () {\n      _this2.value = '' + formula.calculate();\n\n      _this2.list.onChangeRelated();\n    };\n\n    formula.setResult();\n  };\n}\n\nConditionFieldItem.prototype = Object.create(_ConditionItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionFieldItem);\n\n//# sourceURL=webpack:///./frontend/conditional.block/ConditionFieldItem.js?");

/***/ }),

/***/ "./frontend/conditional.block/ConditionItem.js":
/*!*****************************************************!*\
  !*** ./frontend/conditional.block/ConditionItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * @property {ConditionsList} list\r\n */\nfunction ConditionItem() {}\n\nConditionItem.prototype.isSupported = function (options) {\n  return false;\n};\n\nConditionItem.prototype.observe = function () {};\n\nConditionItem.prototype.setOptions = function (options) {};\n\nConditionItem.prototype.isPassed = function () {\n  throw new Error('You must provide ConditionItem::isPassed function');\n};\n\nConditionItem.prototype.setList = function (list) {\n  this.list = list;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionItem);\n\n//# sourceURL=webpack:///./frontend/conditional.block/ConditionItem.js?");

/***/ }),

/***/ "./frontend/conditional.block/ConditionalBlock.js":
/*!********************************************************!*\
  !*** ./frontend/conditional.block/ConditionalBlock.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ConditionsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionsList */ \"./frontend/conditional.block/ConditionsList.js\");\n\nvar doAction = wp.hooks.doAction;\n\nfunction ConditionalBlock(node, observable) {\n  this.node = node;\n  node.jfbConditional = this;\n  /**\r\n   * @type {Observable}\r\n   */\n\n  this.root = observable;\n  this.isObserved = false;\n  /**\r\n   * @type {ConditionsList}\r\n   */\n\n  this.list = null;\n  /**\r\n   * @type {PageState}\r\n   */\n\n  this.page = null;\n  /**\r\n   * @type {MultiStepState}\r\n   */\n\n  this.multistep = null;\n  /**\r\n   * @type {Node}\r\n   */\n\n  this.comment = null;\n  this.setConditions();\n  doAction('jet.fb.conditional.init', this);\n}\n\nConditionalBlock.prototype = {\n  setConditions: function setConditions() {\n    var _this = this;\n\n    var jfbConditional = this.node.dataset.jfbConditional;\n    this.list = new _ConditionsList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](jfbConditional, this.root);\n\n    this.list.onChangeRelated = function () {\n      _this.runFunction(_this.list.getResult());\n    };\n  },\n  insertComment: function insertComment() {\n    if (!this.willDomChange()) {\n      return;\n    }\n\n    this.comment = document.createComment(''); // insert comment after conditional block\n\n    this.node.parentElement.insertBefore(this.comment, this.node.nextSibling);\n  },\n  observe: function observe() {\n    if (this.isObserved) {\n      return;\n    }\n\n    this.isObserved = true;\n    this.insertComment();\n    this.list.observe();\n  },\n  runFunction: function runFunction(result) {\n    switch (this.getFunction()) {\n      case 'show_dom':\n        this.showBlockDom(result);\n        break;\n\n      case 'hide_dom':\n        this.showBlockDom(!result);\n        break;\n\n      case 'show':\n        this.showBlockCss(result);\n        break;\n\n      case 'hide':\n        this.showBlockCss(!result);\n        break;\n\n      case 'disable':\n        this.disableBlock(result);\n        break;\n    }\n  },\n  showBlockCss: function showBlockCss(result) {\n    this.node.style.display = result ? 'block' : 'none';\n  },\n  showBlockDom: function showBlockDom(result) {\n    if (!result) {\n      this.node.remove();\n      return;\n    }\n\n    this.comment.parentElement.insertBefore(this.node, this.comment);\n  },\n  disableBlock: function disableBlock(result) {\n    this.node.disabled = result;\n  },\n  willDomChange: function willDomChange() {\n    return ['show_dom', 'hide_dom'].includes(this.getFunction());\n  },\n  getFunction: function getFunction() {\n    return this.node.dataset.jfbFunc;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionalBlock);\n\n//# sourceURL=webpack:///./frontend/conditional.block/ConditionalBlock.js?");

/***/ }),

/***/ "./frontend/conditional.block/ConditionsList.js":
/*!******************************************************!*\
  !*** ./frontend/conditional.block/ConditionsList.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/conditional.block/functions.js\");\n/* harmony import */ var _OrOperatorItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrOperatorItem */ \"./frontend/conditional.block/OrOperatorItem.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nfunction ConditionsList(conditions, root) {\n  this.root = root;\n  this.setConditions(conditions);\n}\n\nConditionsList.prototype = {\n  /**\r\n   * @type {Observable}\r\n   */\n  root: null,\n  conditions: [],\n  invalid: [],\n\n  /**\r\n   * You can override this callback.\r\n   * It used in ConditionFieldItem.\r\n   *\r\n   * Runs every time, when conditions is match\r\n   */\n  onChangeRelated: function onChangeRelated() {\n    if (!this.getResult()) {\n      return;\n    }\n\n    this.onMatchConditions();\n  },\n  onMatchConditions: function onMatchConditions() {},\n  observe: function observe() {\n    var _iterator = _createForOfIteratorHelper(this.getConditions()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var condition = _step.value;\n        condition.observe();\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  },\n  setConditions: function setConditions(conditions) {\n    var _this = this;\n\n    if ('string' === typeof conditions) {\n      conditions = JSON.parse(conditions);\n    }\n\n    this.conditions = conditions.map(function (item) {\n      return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createConditionItem)(item, _this);\n    }).filter(function (item) {\n      return item;\n    });\n  },\n  getResult: function getResult() {\n    this.invalid = [];\n    var groups = {};\n    var groupIndex = 0;\n\n    var _iterator2 = _createForOfIteratorHelper(this.getConditions()),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var _groups$groupIndex;\n\n        var condition = _step2.value;\n\n        if (condition instanceof _OrOperatorItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n          groupIndex++;\n          continue;\n        }\n\n        groups[groupIndex] = (_groups$groupIndex = groups[groupIndex]) !== null && _groups$groupIndex !== void 0 ? _groups$groupIndex : [];\n        groups[groupIndex].push(condition);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    groups = Object.values(groups);\n\n    if (!groups.length) {\n      return true;\n    }\n\n    var _iterator3 = _createForOfIteratorHelper(groups),\n        _step3;\n\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var group = _step3.value;\n\n        if (this.isValidGroup(group)) {\n          return true;\n        }\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n\n    return false;\n  },\n  isValidGroup: function isValidGroup(conditionsGroup) {\n    var _iterator4 = _createForOfIteratorHelper(conditionsGroup),\n        _step4;\n\n    try {\n      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n        var condition = _step4.value;\n\n        if (condition.isPassed()) {\n          continue;\n        }\n\n        this.invalid.push(condition);\n        return false;\n      }\n    } catch (err) {\n      _iterator4.e(err);\n    } finally {\n      _iterator4.f();\n    }\n\n    return true;\n  },\n\n  /**\r\n   * @returns {array<ConditionFieldItem|ConditionPageStateItem>}\r\n   */\n  getConditions: function getConditions() {\n    return this.conditions;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionsList);\n\n//# sourceURL=webpack:///./frontend/conditional.block/ConditionsList.js?");

/***/ }),

/***/ "./frontend/conditional.block/MultipleConditionChecker.js":
/*!****************************************************************!*\
  !*** ./frontend/conditional.block/MultipleConditionChecker.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ConditionChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionChecker */ \"./frontend/conditional.block/ConditionChecker.js\");\n\nvar _JetFormBuilderAbstra = JetFormBuilderAbstract,\n    CheckboxData = _JetFormBuilderAbstra.CheckboxData,\n    MultiSelectData = _JetFormBuilderAbstra.MultiSelectData;\n\nfunction MultipleConditionChecker() {\n  _ConditionChecker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.isSupported = function (input) {\n    return input instanceof CheckboxData || input instanceof MultiSelectData;\n  };\n\n  this.check = function (condition, input) {\n    var current = input.value.current;\n\n    switch (condition.operator) {\n      case 'one_of':\n        return condition.value.length && current.some(function (val) {\n          return 0 <= condition.value.indexOf(val);\n        });\n\n      case 'contain':\n        return current.some(function (val) {\n          return val.indexOf(condition.value) !== -1;\n        });\n\n      default:\n        return false;\n    }\n  };\n}\n\nMultipleConditionChecker.prototype = Object.create(_ConditionChecker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleConditionChecker);\n\n//# sourceURL=webpack:///./frontend/conditional.block/MultipleConditionChecker.js?");

/***/ }),

/***/ "./frontend/conditional.block/OrOperatorItem.js":
/*!******************************************************!*\
  !*** ./frontend/conditional.block/OrOperatorItem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ConditionItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionItem */ \"./frontend/conditional.block/ConditionItem.js\");\n\n\nfunction OrOperatorItem() {\n  _ConditionItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.isSupported = function (options) {\n    var _options$or_operator;\n\n    return (_options$or_operator = options.or_operator) !== null && _options$or_operator !== void 0 ? _options$or_operator : false;\n  };\n}\n\nOrOperatorItem.prototype = Object.create(_ConditionItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrOperatorItem);\n\n//# sourceURL=webpack:///./frontend/conditional.block/OrOperatorItem.js?");

/***/ }),

/***/ "./frontend/conditional.block/functions.js":
/*!*************************************************!*\
  !*** ./frontend/conditional.block/functions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createConditionItem\": () => (/* binding */ createConditionItem),\n/* harmony export */   \"createConditionalBlock\": () => (/* binding */ createConditionalBlock),\n/* harmony export */   \"createChecker\": () => (/* binding */ createChecker)\n/* harmony export */ });\n/* harmony import */ var _ConditionFieldItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionFieldItem */ \"./frontend/conditional.block/ConditionFieldItem.js\");\n/* harmony import */ var _ConditionalBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConditionalBlock */ \"./frontend/conditional.block/ConditionalBlock.js\");\n/* harmony import */ var _ConditionChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionChecker */ \"./frontend/conditional.block/ConditionChecker.js\");\n/* harmony import */ var _MultipleConditionChecker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultipleConditionChecker */ \"./frontend/conditional.block/MultipleConditionChecker.js\");\n/* harmony import */ var _OrOperatorItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OrOperatorItem */ \"./frontend/conditional.block/OrOperatorItem.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\nvar applyFilters = wp.hooks.applyFilters;\n\nvar getItemTypes = function getItemTypes() {\n  return applyFilters('jet.fb.conditional.types', [_OrOperatorItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _ConditionFieldItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n};\n/**\r\n * @type {ConditionItem[]}\r\n */\n\n\nvar itemTypes = [];\n\nvar getCheckers = function getCheckers() {\n  return applyFilters('jet.fb.conditional.checkers', [_MultipleConditionChecker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _ConditionChecker__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]);\n};\n\nvar checkers = [];\n/**\r\n * @param options {{}}\r\n * @param list {ConditionsList}\r\n * @return {*}\r\n */\n\nfunction createConditionItem(options, list) {\n  if (!itemTypes.length) {\n    itemTypes = getItemTypes();\n  }\n\n  var _iterator = _createForOfIteratorHelper(itemTypes),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var dataType = _step.value;\n\n      /**\r\n       * @type {ConditionItem}\r\n       */\n      var current = new dataType();\n\n      if (!current.isSupported(options)) {\n        continue;\n      }\n\n      current.setList(list);\n      current.setOptions(options);\n      return current;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\nfunction createConditionalBlock(node, root) {\n  if (node.hasOwnProperty('jfbConditional')) {\n    return node.jfbConditional;\n  }\n\n  var block = new _ConditionalBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"](node, root);\n  block.observe();\n  block.list.onChangeRelated();\n  return block;\n}\n/**\r\n * @param input {InputData}\r\n */\n\n\nfunction createChecker(input) {\n  if (!checkers.length) {\n    checkers = getCheckers();\n  }\n\n  var _iterator2 = _createForOfIteratorHelper(checkers),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var checker = _step2.value;\n      var current = new checker();\n\n      if (!current.isSupported(input)) {\n        continue;\n      }\n\n      return current;\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  return null;\n}\n\n\n\n//# sourceURL=webpack:///./frontend/conditional.block/functions.js?");

/***/ }),

/***/ "./frontend/conditional.block/main.js":
/*!********************************************!*\
  !*** ./frontend/conditional.block/main.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/conditional.block/functions.js\");\n/* harmony import */ var _ConditionalBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConditionalBlock */ \"./frontend/conditional.block/ConditionalBlock.js\");\n/* harmony import */ var _ConditionItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionItem */ \"./frontend/conditional.block/ConditionItem.js\");\n/* harmony import */ var _ConditionsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConditionsList */ \"./frontend/conditional.block/ConditionsList.js\");\nvar _window$JetFormBuilde;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar addAction = wp.hooks.addAction;\naddAction('jet.fb.observe.after', 'jet-form-builder/conditional-block', function (observable) {\n  var _iterator = _createForOfIteratorHelper(observable.rootNode.querySelectorAll(\"[data-jfb-conditional]\")),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var node = _step.value;\n      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createConditionalBlock)(node, observable);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n});\naddAction('jet.fb.input.makeReactive', 'jet-form-builder/conditional-block', function (input) {\n  input.checker = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createChecker)(input);\n});\nwindow.JetFormBuilderAbstract = _objectSpread(_objectSpread({}, (_window$JetFormBuilde = window.JetFormBuilderAbstract) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {}), {}, {\n  ConditionItem: _ConditionItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  ConditionalBlock: _ConditionalBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  createConditionalBlock: _functions__WEBPACK_IMPORTED_MODULE_0__.createConditionalBlock,\n  createChecker: _functions__WEBPACK_IMPORTED_MODULE_0__.createChecker,\n  ConditionsList: _ConditionsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n//# sourceURL=webpack:///./frontend/conditional.block/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/conditional.block/main.js");
/******/ 	
/******/ })()
;