"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_plugins_validation_render_js"],{

/***/ "./editor/plugins/validation/modal.js":
/*!********************************************!*\
  !*** ./editor/plugins/validation/modal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar _JetFBComponents = JetFBComponents,\n  ActionModalContext = _JetFBComponents.ActionModalContext,\n  ValidationMetaMessage = _JetFBComponents.ValidationMetaMessage;\nvar _JetFBHooks = JetFBHooks,\n  useMetaState = _JetFBHooks.useMetaState,\n  useGroupedValidationMessages = _JetFBHooks.useGroupedValidationMessages;\nvar _wp$element = wp.element,\n  useEffect = _wp$element.useEffect,\n  useState = _wp$element.useState,\n  useContext = _wp$element.useContext;\nvar __ = wp.i18n.__;\nfunction ValidationModal() {\n  var _useMetaState = useMetaState('_jf_validation', '{}', []),\n    _useMetaState2 = _slicedToArray(_useMetaState, 2),\n    args = _useMetaState2[0],\n    setArgs = _useMetaState2[1];\n  var messages = useGroupedValidationMessages();\n  var _useState = useState(function () {\n      var _args$messages;\n      return (_args$messages = args.messages) !== null && _args$messages !== void 0 ? _args$messages : {};\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    current = _useState2[0],\n    setCurrent = _useState2[1];\n  var _useContext = useContext(ActionModalContext),\n    actionClick = _useContext.actionClick,\n    onRequestClose = _useContext.onRequestClose;\n  useEffect(function () {\n    if (actionClick) {\n      setArgs(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          messages: current\n        });\n      });\n    }\n    if (null !== actionClick) {\n      onRequestClose();\n    }\n  }, [actionClick]);\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(\"div\", {\n    className: \"jet-fb-validation-messages jet-control-clear-full\"\n  }, messages.map(function (message, index) {\n    return wp.element.createElement(ValidationMetaMessage, {\n      key: 'message_item' + message.id,\n      message: message,\n      messages: current,\n      update: setCurrent,\n      value: current[message.id],\n      className: index !== 0 ? 'jet-control-full' : '',\n      style: index !== 0 ? {} : {\n        paddingBottom: '5px'\n      }\n    });\n  })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BEO0VBQUEsRUFBRSxDQUNDLENBQ0o7QUFDSjtBQUVBLGlFQUFlN0IsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL3ZhbGlkYXRpb24vbW9kYWwuanM/ZmM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgQWN0aW9uTW9kYWxDb250ZXh0LFxyXG5cdCAgICAgIFZhbGlkYXRpb25NZXRhTWVzc2FnZSxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZU1ldGFTdGF0ZSxcclxuXHQgICAgICB1c2VHcm91cGVkVmFsaWRhdGlvbk1lc3NhZ2VzLFxyXG4gICAgICB9ID0gSmV0RkJIb29rcztcclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZUVmZmVjdCxcclxuXHQgICAgICB1c2VTdGF0ZSxcclxuXHQgICAgICB1c2VDb250ZXh0LFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5mdW5jdGlvbiBWYWxpZGF0aW9uTW9kYWwoKSB7XHJcblx0Y29uc3QgWyBhcmdzLCBzZXRBcmdzIF0gPSB1c2VNZXRhU3RhdGUoXHJcblx0XHQnX2pmX3ZhbGlkYXRpb24nLCAne30nLCBbXSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCBtZXNzYWdlcyA9IHVzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXMoKTtcclxuXHJcblx0Y29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gICAgICAgICA9IHVzZVN0YXRlKCAoKSA9PiAoXHJcblx0XHRhcmdzLm1lc3NhZ2VzID8/IHt9XHJcblx0KSApO1xyXG5cdGNvbnN0IHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gPSB1c2VDb250ZXh0KCBBY3Rpb25Nb2RhbENvbnRleHQgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIGFjdGlvbkNsaWNrICkge1xyXG5cdFx0XHRzZXRBcmdzKCBwcmV2ID0+IChcclxuXHRcdFx0XHR7IC4uLnByZXYsIG1lc3NhZ2VzOiBjdXJyZW50IH1cclxuXHRcdFx0KSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggbnVsbCAhPT0gYWN0aW9uQ2xpY2sgKSB7XHJcblx0XHRcdG9uUmVxdWVzdENsb3NlKCk7XHJcblx0XHR9XHJcblx0fSwgWyBhY3Rpb25DbGljayBdICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmItdmFsaWRhdGlvbi1tZXNzYWdlcyBqZXQtY29udHJvbC1jbGVhci1mdWxsXCI+XHJcblx0XHRcdHsgbWVzc2FnZXMubWFwKCAoIG1lc3NhZ2UsIGluZGV4ICkgPT4gPFZhbGlkYXRpb25NZXRhTWVzc2FnZVxyXG5cdFx0XHRcdGtleT17ICdtZXNzYWdlX2l0ZW0nICsgbWVzc2FnZS5pZCB9XHJcblx0XHRcdFx0bWVzc2FnZT17IG1lc3NhZ2UgfVxyXG5cdFx0XHRcdG1lc3NhZ2VzPXsgY3VycmVudCB9XHJcblx0XHRcdFx0dXBkYXRlPXsgc2V0Q3VycmVudCB9XHJcblx0XHRcdFx0dmFsdWU9eyBjdXJyZW50WyBtZXNzYWdlLmlkIF0gfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17IGluZGV4ICE9PSAwID8gJ2pldC1jb250cm9sLWZ1bGwnIDogJycgfVxyXG5cdFx0XHRcdHN0eWxlPXsgaW5kZXggIT09IDAgPyB7fSA6IHsgcGFkZGluZ0JvdHRvbTogJzVweCcgfSB9XHJcblx0XHRcdC8+ICkgfVxyXG5cdFx0PC9kaXY+XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uTW9kYWw7Il0sIm5hbWVzIjpbIl9KZXRGQkNvbXBvbmVudHMiLCJKZXRGQkNvbXBvbmVudHMiLCJBY3Rpb25Nb2RhbENvbnRleHQiLCJWYWxpZGF0aW9uTWV0YU1lc3NhZ2UiLCJfSmV0RkJIb29rcyIsIkpldEZCSG9va3MiLCJ1c2VNZXRhU3RhdGUiLCJ1c2VHcm91cGVkVmFsaWRhdGlvbk1lc3NhZ2VzIiwiX3dwJGVsZW1lbnQiLCJ3cCIsImVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJfXyIsImkxOG4iLCJWYWxpZGF0aW9uTW9kYWwiLCJfdXNlTWV0YVN0YXRlIiwiX3VzZU1ldGFTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFyZ3MiLCJzZXRBcmdzIiwibWVzc2FnZXMiLCJfdXNlU3RhdGUiLCJfYXJncyRtZXNzYWdlcyIsIl91c2VTdGF0ZTIiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIl91c2VDb250ZXh0IiwiYWN0aW9uQ2xpY2siLCJvblJlcXVlc3RDbG9zZSIsInByZXYiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRWxlbWVudCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJrZXkiLCJpZCIsInVwZGF0ZSIsInZhbHVlIiwic3R5bGUiLCJwYWRkaW5nQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./editor/plugins/validation/modal.js\n");

/***/ }),

/***/ "./editor/plugins/validation/render.js":
/*!*********************************************!*\
  !*** ./editor/plugins/validation/render.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./editor/plugins/validation/modal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar _wp$components = wp.components,\n  Button = _wp$components.Button,\n  ToggleControl = _wp$components.ToggleControl,\n  ToggleGroupControl = _wp$components.__experimentalToggleGroupControl,\n  ToggleGroupControlOption = _wp$components.__experimentalToggleGroupControlOption;\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n  useState = _wp$element.useState,\n  useEffect = _wp$element.useEffect;\nvar _JetFBHooks = JetFBHooks,\n  useMetaState = _JetFBHooks.useMetaState;\nvar _JetFBComponents = JetFBComponents,\n  ActionModal = _JetFBComponents.ActionModal;\nvar formats = window.jetFormValidation.formats;\nfunction ValidationPlugin() {\n  var _args$load_nonce, _validation$type;\n  var _useMetaState = useMetaState('_jf_validation'),\n    _useMetaState2 = _slicedToArray(_useMetaState, 2),\n    validation = _useMetaState2[0],\n    setValidation = _useMetaState2[1];\n  var _useMetaState3 = useMetaState('_jf_args'),\n    _useMetaState4 = _slicedToArray(_useMetaState3, 2),\n    args = _useMetaState4[0],\n    setArgs = _useMetaState4[1];\n  var _useState = useState(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    isEditValidation = _useState2[0],\n    setEditValidation = _useState2[1];\n  var _useState3 = useState('render' === ((_args$load_nonce = args === null || args === void 0 ? void 0 : args.load_nonce) !== null && _args$load_nonce !== void 0 ? _args$load_nonce : 'render')),\n    _useState4 = _slicedToArray(_useState3, 2),\n    isLoadNonce = _useState4[0],\n    setLoadNonce = _useState4[1];\n  useEffect(function () {\n    setArgs(function (prev) {\n      var load_nonce = !isLoadNonce ? 'hide' : 'render';\n      return _objectSpread(_objectSpread({}, prev), {}, {\n        load_nonce: load_nonce\n      });\n    });\n  }, [isLoadNonce]);\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {\n    key: 'load_nonce',\n    label: __('Enable form safety', 'jet-form-builder'),\n    checked: isLoadNonce,\n    help: __(\"Protects the form with a WordPress nonce. Toggle this option off if the form's page's caching can't be disabled\", 'jet-form-builder'),\n    onChange: function onChange() {\n      setLoadNonce(function (prev) {\n        return !prev;\n      });\n    }\n  }), wp.element.createElement(ToggleControl, {\n    label: __('Enable csrf protection', 'jet-form-builder'),\n    checked: args.use_csrf,\n    onChange: function onChange() {\n      setArgs(function (prev) {\n        var use_csrf = !Boolean(prev.use_csrf);\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          use_csrf: use_csrf\n        });\n      });\n    }\n  }), wp.element.createElement(ToggleControl, {\n    label: __('Enable Honeypot protection', 'jet-form-builder'),\n    checked: args.use_honeypot,\n    onChange: function onChange() {\n      setArgs(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          use_honeypot: !Boolean(prev.use_honeypot)\n        });\n      });\n    }\n  }), wp.element.createElement(ToggleGroupControl, {\n    onChange: function onChange(type) {\n      return setValidation(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          type: type\n        });\n      });\n    },\n    value: (_validation$type = validation.type) !== null && _validation$type !== void 0 ? _validation$type : 'browser',\n    label: __('Validation type', 'jet-form-builder'),\n    isBlock: true,\n    isAdaptiveWidth: false\n  }, formats.map(function (current) {\n    return wp.element.createElement(ToggleGroupControlOption, {\n      key: current.value + '_key',\n      label: current.label,\n      value: current.value,\n      \"aria-label\": current.title,\n      showTooltip: true\n    });\n  })), 'advanced' === validation.type && wp.element.createElement(Button, {\n    className: 'jet-fb-button w-100 jc-center',\n    isSecondary: true,\n    isSmall: true,\n    icon: 'edit',\n    onClick: function onClick() {\n      return setEditValidation(true);\n    }\n  }, __('Edit validation messages', 'jet-form-builder')), isEditValidation && wp.element.createElement(ActionModal, {\n    title: 'Edit Manual Options',\n    onRequestClose: function onRequestClose() {\n      return setEditValidation(false);\n    },\n    classNames: ['width-60']\n  }, wp.element.createElement(_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationPlugin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvcGx1Z2lucy92YWxpZGF0aW9uL3JlbmRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFBQyxjQUFBLEdBS1VDLEVBQUUsQ0FBQ0MsVUFBVTtFQUpoQkMsTUFBTSxHQUFBSCxjQUFBLENBQU5HLE1BQU07RUFDTkMsYUFBYSxHQUFBSixjQUFBLENBQWJJLGFBQWE7RUFDcUJDLGtCQUFrQixHQUFBTCxjQUFBLENBQXBETSxnQ0FBZ0M7RUFDUUMsd0JBQXdCLEdBQUFQLGNBQUEsQ0FBaEVRLHNDQUFzQztBQUU3QyxJQUNPQyxFQUFFLEdBQ0NSLEVBQUUsQ0FBQ1MsSUFBSSxDQURWRCxFQUFFO0FBRVQsSUFBQUUsV0FBQSxHQUdVVixFQUFFLENBQUNXLE9BQU87RUFGYkMsUUFBUSxHQUFBRixXQUFBLENBQVJFLFFBQVE7RUFDUkMsU0FBUyxHQUFBSCxXQUFBLENBQVRHLFNBQVM7QUFFaEIsSUFBQUMsV0FBQSxHQUVVQyxVQUFVO0VBRGJDLFlBQVksR0FBQUYsV0FBQSxDQUFaRSxZQUFZO0FBRW5CLElBQUFDLGdCQUFBLEdBRVVDLGVBQWU7RUFEbEJDLFdBQVcsR0FBQUYsZ0JBQUEsQ0FBWEUsV0FBVztBQUVsQixJQUNPQyxPQUFPLEdBQ0pDLE1BQU0sQ0FBQ0MsaUJBQWlCLENBRDNCRixPQUFPO0FBR2QsU0FBU0csZ0JBQWdCQSxDQUFBLEVBQUc7RUFBQSxJQUFBQyxnQkFBQSxFQUFBQyxnQkFBQTtFQUMzQixJQUFBQyxhQUFBLEdBQXNDVixZQUFZLENBQUUsZ0JBQWdCLENBQUU7SUFBQVcsY0FBQSxHQUFBQyxjQUFBLENBQUFGLGFBQUE7SUFBOURHLFVBQVUsR0FBQUYsY0FBQTtJQUFFRyxhQUFhLEdBQUFILGNBQUE7RUFDakMsSUFBQUksY0FBQSxHQUFzQ2YsWUFBWSxDQUFFLFVBQVUsQ0FBRTtJQUFBZ0IsY0FBQSxHQUFBSixjQUFBLENBQUFHLGNBQUE7SUFBeERFLElBQUksR0FBQUQsY0FBQTtJQUFFRSxPQUFPLEdBQUFGLGNBQUE7RUFFckIsSUFBQUcsU0FBQSxHQUFnRHZCLFFBQVEsQ0FBRSxLQUFLLENBQUU7SUFBQXdCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxTQUFBO0lBQXpERSxnQkFBZ0IsR0FBQUQsVUFBQTtJQUFFRSxpQkFBaUIsR0FBQUYsVUFBQTtFQUMzQyxJQUFBRyxVQUFBLEdBQWdEM0IsUUFBUSxDQUFFLFFBQVEsT0FBQVksZ0JBQUEsR0FDakVTLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFTyxVQUFVLGNBQUFoQixnQkFBQSxjQUFBQSxnQkFBQSxHQUFJLFFBQVEsQ0FDNUIsQ0FBRTtJQUFBaUIsVUFBQSxHQUFBYixjQUFBLENBQUFXLFVBQUE7SUFGS0csV0FBVyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUlqQzVCLFNBQVMsQ0FBRSxZQUFNO0lBQ2hCcUIsT0FBTyxDQUFFLFVBQUFVLElBQUksRUFBSTtNQUNoQixJQUFNSixVQUFVLEdBQ0ksQ0FBQ0UsV0FBVyxHQUNULE1BQU0sR0FBRyxRQUFRO01BRXhDLE9BQUFHLGFBQUEsQ0FBQUEsYUFBQSxLQUFZRCxJQUFJO1FBQUVKLFVBQVUsRUFBVkE7TUFBVTtJQUM3QixDQUFDLENBQUU7RUFDSixDQUFDLEVBQUUsQ0FBRUUsV0FBVyxDQUFFLENBQUU7RUFFcEIsT0FBTzFDLEVBQUEsQ0FBQVcsT0FBQSxDQUFBbUMsYUFBQSxDQUFBQyxLQUFBLENBQUFDLFFBQUEsUUFDTmhELEVBQUEsQ0FBQVcsT0FBQSxDQUFBbUMsYUFBQSxDQUFDM0MsYUFBYTtJQUNiOEMsR0FBRyxFQUFHLFlBQWM7SUFDcEJDLEtBQUssRUFBRzFDLEVBQUUsQ0FBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBSTtJQUN4RDJDLE9BQU8sRUFBR1QsV0FBYTtJQUN2QlUsSUFBSSxFQUFHNUMsRUFBRSxvSEFFUixrQkFBa0IsQ0FBSTtJQUN2QjZDLFFBQVEsRUFBRyxTQUFBQSxTQUFBLEVBQU07TUFDaEJWLFlBQVksQ0FBRSxVQUFBQyxJQUFJO1FBQUEsT0FBSSxDQUFDQSxJQUFJO01BQUEsRUFBRTtJQUM5QjtFQUFHLEVBQ0YsRUFDRjVDLEVBQUEsQ0FBQVcsT0FBQSxDQUFBbUMsYUFBQSxDQUFDM0MsYUFBYTtJQUNiK0MsS0FBSyxFQUFHMUMsRUFBRSxDQUFFLHdCQUF3QixFQUFFLGtCQUFrQixDQUFJO0lBQzVEMkMsT0FBTyxFQUFHbEIsSUFBSSxDQUFDcUIsUUFBVTtJQUN6QkQsUUFBUSxFQUFHLFNBQUFBLFNBQUEsRUFBTTtNQUNoQm5CLE9BQU8sQ0FBRSxVQUFBVSxJQUFJLEVBQUk7UUFDaEIsSUFBTVUsUUFBUSxHQUFHLENBQUNDLE9BQU8sQ0FBRVgsSUFBSSxDQUFDVSxRQUFRLENBQUU7UUFFMUMsT0FBQVQsYUFBQSxDQUFBQSxhQUFBLEtBQVlELElBQUk7VUFBRVUsUUFBUSxFQUFSQTtRQUFRO01BQzNCLENBQUMsQ0FBRTtJQUNKO0VBQUcsRUFDRixFQUNGdEQsRUFBQSxDQUFBVyxPQUFBLENBQUFtQyxhQUFBLENBQUMzQyxhQUFhO0lBQ2IrQyxLQUFLLEVBQUcxQyxFQUFFLENBQUUsNEJBQTRCLEVBQUUsa0JBQWtCLENBQUk7SUFDaEUyQyxPQUFPLEVBQUdsQixJQUFJLENBQUN1QixZQUFjO0lBQzdCSCxRQUFRLEVBQUcsU0FBQUEsU0FBQSxFQUFNO01BQ2hCbkIsT0FBTyxDQUFFLFVBQUFVLElBQUk7UUFBQSxPQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FFUkQsSUFBSTtVQUNQWSxZQUFZLEVBQUUsQ0FBQ0QsT0FBTyxDQUFFWCxJQUFJLENBQUNZLFlBQVk7UUFBRTtNQUFBLENBRTVDLENBQUU7SUFDSjtFQUFHLEVBQ0YsRUFDRnhELEVBQUEsQ0FBQVcsT0FBQSxDQUFBbUMsYUFBQSxDQUFDMUMsa0JBQWtCO0lBQ2xCaUQsUUFBUSxFQUFHLFNBQUFBLFNBQUFJLElBQUk7TUFBQSxPQUFJM0IsYUFBYSxDQUFFLFVBQUFjLElBQUk7UUFBQSxPQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDaENELElBQUk7VUFBRWEsSUFBSSxFQUFKQTtRQUFJO01BQUEsQ0FDZixDQUFFO0lBQUEsQ0FBRTtJQUNMQyxLQUFLLEdBQUFqQyxnQkFBQSxHQUFHSSxVQUFVLENBQUM0QixJQUFJLGNBQUFoQyxnQkFBQSxjQUFBQSxnQkFBQSxHQUFJLFNBQVc7SUFDdEN5QixLQUFLLEVBQUcxQyxFQUFFLENBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUk7SUFDckRtRCxPQUFPLEVBQUcsSUFBTTtJQUNoQkMsZUFBZSxFQUFHO0VBQU8sR0FFdkJ4QyxPQUFPLENBQUN5QyxHQUFHLENBQ1osVUFBQUMsT0FBTztJQUFBLE9BQUk5RCxFQUFBLENBQUFXLE9BQUEsQ0FBQW1DLGFBQUEsQ0FBQ3hDLHdCQUF3QjtNQUNuQzJDLEdBQUcsRUFBR2EsT0FBTyxDQUFDSixLQUFLLEdBQUcsTUFBUTtNQUM5QlIsS0FBSyxFQUFHWSxPQUFPLENBQUNaLEtBQU87TUFDdkJRLEtBQUssRUFBR0ksT0FBTyxDQUFDSixLQUFPO01BQ3ZCLGNBQWFJLE9BQU8sQ0FBQ0MsS0FBTztNQUM1QkMsV0FBVztJQUFBLEVBQ1Y7RUFBQSxFQUFFLENBQ2UsRUFDbkIsVUFBVSxLQUFLbkMsVUFBVSxDQUFDNEIsSUFBSSxJQUFJekQsRUFBQSxDQUFBVyxPQUFBLENBQUFtQyxhQUFBLENBQUM1QyxNQUFNO0lBQzFDK0QsU0FBUyxFQUFHLCtCQUFpQztJQUM3Q0MsV0FBVztJQUNYQyxPQUFPO0lBQ1BDLElBQUksRUFBRyxNQUFRO0lBQ2ZDLE9BQU8sRUFBRyxTQUFBQSxRQUFBO01BQUEsT0FBTS9CLGlCQUFpQixDQUFFLElBQUksQ0FBRTtJQUFBO0VBQUUsR0FFekM5QixFQUFFLENBQUUsMEJBQTBCLEVBQUUsa0JBQWtCLENBQUUsQ0FDOUMsRUFDUDZCLGdCQUFnQixJQUFJckMsRUFBQSxDQUFBVyxPQUFBLENBQUFtQyxhQUFBLENBQUMzQixXQUFXO0lBQ2pDNEMsS0FBSyxFQUFHLHFCQUF1QjtJQUMvQk8sY0FBYyxFQUFHLFNBQUFBLGVBQUE7TUFBQSxPQUFNaEMsaUJBQWlCLENBQUUsS0FBSyxDQUFFO0lBQUEsQ0FBRTtJQUNuRGlDLFVBQVUsRUFBRyxDQUFFLFVBQVU7RUFBSSxHQUU3QnZFLEVBQUEsQ0FBQVcsT0FBQSxDQUFBbUMsYUFBQSxDQUFDaEQsOENBQWUsT0FBRSxDQUNMLENBQ1o7QUFDSjtBQUVBLGlFQUFleUIsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvdmFsaWRhdGlvbi9yZW5kZXIuanM/YmM0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmFsaWRhdGlvbk1vZGFsIGZyb20gJy4vbW9kYWwnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEJ1dHRvbixcclxuXHQgICAgICBUb2dnbGVDb250cm9sLFxyXG5cdCAgICAgIF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sOiBUb2dnbGVHcm91cENvbnRyb2wsXHJcblx0ICAgICAgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2xPcHRpb246IFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbixcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcbmNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VTdGF0ZSxcclxuXHQgICAgICB1c2VFZmZlY3QsXHJcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlTWV0YVN0YXRlLFxyXG4gICAgICB9ID0gSmV0RkJIb29rcztcclxuY29uc3Qge1xyXG5cdCAgICAgIEFjdGlvbk1vZGFsLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5jb25zdCB7XHJcblx0ICAgICAgZm9ybWF0cyxcclxuICAgICAgfSA9IHdpbmRvdy5qZXRGb3JtVmFsaWRhdGlvbjtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRpb25QbHVnaW4oKSB7XHJcblx0Y29uc3QgWyB2YWxpZGF0aW9uLCBzZXRWYWxpZGF0aW9uIF0gPSB1c2VNZXRhU3RhdGUoICdfamZfdmFsaWRhdGlvbicgKTtcclxuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSAgICAgICAgICAgICA9IHVzZU1ldGFTdGF0ZSggJ19qZl9hcmdzJyApO1xyXG5cclxuXHRjb25zdCBbIGlzRWRpdFZhbGlkYXRpb24sIHNldEVkaXRWYWxpZGF0aW9uIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHRjb25zdCBbIGlzTG9hZE5vbmNlLCBzZXRMb2FkTm9uY2UgXSAgICAgICAgICAgPSB1c2VTdGF0ZSggJ3JlbmRlcicgPT09IChcclxuXHRcdGFyZ3M/LmxvYWRfbm9uY2UgPz8gJ3JlbmRlcidcclxuXHQpICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0c2V0QXJncyggcHJldiA9PiB7XHJcblx0XHRcdGNvbnN0IGxvYWRfbm9uY2UgPSAoXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICFpc0xvYWROb25jZVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgKSA/ICdoaWRlJyA6ICdyZW5kZXInO1xyXG5cclxuXHRcdFx0cmV0dXJuIHsgLi4ucHJldiwgbG9hZF9ub25jZSB9O1xyXG5cdFx0fSApO1xyXG5cdH0sIFsgaXNMb2FkTm9uY2UgXSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGtleT17ICdsb2FkX25vbmNlJyB9XHJcblx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgZm9ybSBzYWZldHknLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdGNoZWNrZWQ9eyBpc0xvYWROb25jZSB9XHJcblx0XHRcdGhlbHA9eyBfXyhcclxuXHRcdFx0XHRgUHJvdGVjdHMgdGhlIGZvcm0gd2l0aCBhIFdvcmRQcmVzcyBub25jZS4gVG9nZ2xlIHRoaXMgb3B0aW9uIG9mZiBpZiB0aGUgZm9ybSdzIHBhZ2UncyBjYWNoaW5nIGNhbid0IGJlIGRpc2FibGVkYCxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHRcdHNldExvYWROb25jZSggcHJldiA9PiAhcHJldiApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIGNzcmYgcHJvdGVjdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0Y2hlY2tlZD17IGFyZ3MudXNlX2NzcmYgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRzZXRBcmdzKCBwcmV2ID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZV9jc3JmID0gIUJvb2xlYW4oIHByZXYudXNlX2NzcmYgKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4geyAuLi5wcmV2LCB1c2VfY3NyZiB9O1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBIb25leXBvdCBwcm90ZWN0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgYXJncy51c2VfaG9uZXlwb3QgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRzZXRBcmdzKCBwcmV2ID0+IChcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Li4ucHJldixcclxuXHRcdFx0XHRcdFx0dXNlX2hvbmV5cG90OiAhQm9vbGVhbiggcHJldi51c2VfaG9uZXlwb3QgKSxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdDxUb2dnbGVHcm91cENvbnRyb2xcclxuXHRcdFx0b25DaGFuZ2U9eyB0eXBlID0+IHNldFZhbGlkYXRpb24oIHByZXYgPT4gKFxyXG5cdFx0XHRcdHsgLi4ucHJldiwgdHlwZSB9XHJcblx0XHRcdCkgKSB9XHJcblx0XHRcdHZhbHVlPXsgdmFsaWRhdGlvbi50eXBlID8/ICdicm93c2VyJyB9XHJcblx0XHRcdGxhYmVsPXsgX18oICdWYWxpZGF0aW9uIHR5cGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdGlzQmxvY2s9eyB0cnVlIH1cclxuXHRcdFx0aXNBZGFwdGl2ZVdpZHRoPXsgZmFsc2UgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IGZvcm1hdHMubWFwKFxyXG5cdFx0XHRcdGN1cnJlbnQgPT4gPFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxyXG5cdFx0XHRcdFx0a2V5PXsgY3VycmVudC52YWx1ZSArICdfa2V5JyB9XHJcblx0XHRcdFx0XHRsYWJlbD17IGN1cnJlbnQubGFiZWwgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50LnZhbHVlIH1cclxuXHRcdFx0XHRcdGFyaWEtbGFiZWw9eyBjdXJyZW50LnRpdGxlIH1cclxuXHRcdFx0XHRcdHNob3dUb29sdGlwXHJcblx0XHRcdFx0Lz4gKSB9XHJcblx0XHQ8L1RvZ2dsZUdyb3VwQ29udHJvbD5cclxuXHRcdHsgJ2FkdmFuY2VkJyA9PT0gdmFsaWRhdGlvbi50eXBlICYmIDxCdXR0b25cclxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYi1idXR0b24gdy0xMDAgamMtY2VudGVyJyB9XHJcblx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdGlzU21hbGxcclxuXHRcdFx0aWNvbj17ICdlZGl0JyB9XHJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRFZGl0VmFsaWRhdGlvbiggdHJ1ZSApIH1cclxuXHRcdD5cclxuXHRcdFx0eyBfXyggJ0VkaXQgdmFsaWRhdGlvbiBtZXNzYWdlcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdDwvQnV0dG9uPiB9XHJcblx0XHR7IGlzRWRpdFZhbGlkYXRpb24gJiYgPEFjdGlvbk1vZGFsXHJcblx0XHRcdHRpdGxlPXsgJ0VkaXQgTWFudWFsIE9wdGlvbnMnIH1cclxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRFZGl0VmFsaWRhdGlvbiggZmFsc2UgKSB9XHJcblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHQ+XHJcblx0XHRcdDxWYWxpZGF0aW9uTW9kYWwvPlxyXG5cdFx0PC9BY3Rpb25Nb2RhbD4gfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvblBsdWdpbjsiXSwibmFtZXMiOlsiVmFsaWRhdGlvbk1vZGFsIiwiX3dwJGNvbXBvbmVudHMiLCJ3cCIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJUb2dnbGVDb250cm9sIiwiVG9nZ2xlR3JvdXBDb250cm9sIiwiX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2wiLCJUb2dnbGVHcm91cENvbnRyb2xPcHRpb24iLCJfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbiIsIl9fIiwiaTE4biIsIl93cCRlbGVtZW50IiwiZWxlbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiX0pldEZCSG9va3MiLCJKZXRGQkhvb2tzIiwidXNlTWV0YVN0YXRlIiwiX0pldEZCQ29tcG9uZW50cyIsIkpldEZCQ29tcG9uZW50cyIsIkFjdGlvbk1vZGFsIiwiZm9ybWF0cyIsIndpbmRvdyIsImpldEZvcm1WYWxpZGF0aW9uIiwiVmFsaWRhdGlvblBsdWdpbiIsIl9hcmdzJGxvYWRfbm9uY2UiLCJfdmFsaWRhdGlvbiR0eXBlIiwiX3VzZU1ldGFTdGF0ZSIsIl91c2VNZXRhU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2YWxpZGF0aW9uIiwic2V0VmFsaWRhdGlvbiIsIl91c2VNZXRhU3RhdGUzIiwiX3VzZU1ldGFTdGF0ZTQiLCJhcmdzIiwic2V0QXJncyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJpc0VkaXRWYWxpZGF0aW9uIiwic2V0RWRpdFZhbGlkYXRpb24iLCJfdXNlU3RhdGUzIiwibG9hZF9ub25jZSIsIl91c2VTdGF0ZTQiLCJpc0xvYWROb25jZSIsInNldExvYWROb25jZSIsInByZXYiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRWxlbWVudCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJrZXkiLCJsYWJlbCIsImNoZWNrZWQiLCJoZWxwIiwib25DaGFuZ2UiLCJ1c2VfY3NyZiIsIkJvb2xlYW4iLCJ1c2VfaG9uZXlwb3QiLCJ0eXBlIiwidmFsdWUiLCJpc0Jsb2NrIiwiaXNBZGFwdGl2ZVdpZHRoIiwibWFwIiwiY3VycmVudCIsInRpdGxlIiwic2hvd1Rvb2x0aXAiLCJjbGFzc05hbWUiLCJpc1NlY29uZGFyeSIsImlzU21hbGwiLCJpY29uIiwib25DbGljayIsIm9uUmVxdWVzdENsb3NlIiwiY2xhc3NOYW1lcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/plugins/validation/render.js\n");

/***/ })

}]);