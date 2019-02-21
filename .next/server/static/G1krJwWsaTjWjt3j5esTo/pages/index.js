module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(14);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/CheckboxComponent.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    > input {\n      opacity: 0;\n    }\n    > input + label {\n      position: relative; /* permet de positionner les pseudo-\xE9l\xE9ments */\n      padding-left: 25px; /* fait un peu d'espace pour notre case \xE0 venir */\n      cursor: pointer;    /* affiche un curseur adapt\xE9 */\n      &:before {\n        content: '';\n        position: absolute;\n        left:0; top: 1px;\n        width: 17px; height: 17px; /* dim. de la case */\n        border: 1px solid #aaa;\n        background: #f8f8f8;\n        border-radius: 3px; /* angles arrondis */\n        box-shadow: inset 0 1px 3px rgba(0,0,0,.3) /* l\xE9g\xE8re ombre interne */\n      }\n      &:after {\n        content: '\u2714';\n        position: absolute;\n        top: -1px; left: 2px;\n        font-size: 16px;\n        color: #09ad7e;\n        transition: all .2s; /* on pr\xE9voit une animation */\n      }\n    }\n    > input:not(:checked) + label {\n        &:after {\n          opacity: 0; /* coche invisible */\n          transform: scale(0); /* mise \xE0 l'\xE9chelle \xE0 0 */\n        }\n    }\n    > input:disabled:not(:checked) + label {\n        &:before {\n          box-shadow: none;\n          border-color: #bbb;\n          background-color: #ddd;\n        }\n    }\n    > input:checked + label {\n      &:after {\n        opacity: 1; /* coche opaque */\n        transform: scale(1); /* mise \xE0 l'\xE9chelle 1:1 */\n      }\n    }\n    > input:disabled:checked + label {\n      &:after {\n        color: #999;\n      }\n    }\n    > input:disabled + label {\n      color: #aaa;\n    }\n    > input:checked:focus + label, input:not(:checked):focus + label {\n      &:before {\n        border: 1px dotted blue;\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CheckboxComponent_Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this = this;

      return external_react_default.a.createElement(Styled, {
        onClick: function onClick() {
          return _this.props.onChange(!_this.props.checked);
        }
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        checked: this.props.checked
      }), external_react_default.a.createElement("label", null, this.props.label));
    }
  }]);

  return Checkbox;
}(external_react_["Component"]);

_defineProperty(CheckboxComponent_Checkbox, "propTypes", {
  checked: external_prop_types_default.a.bool,
  onChange: external_prop_types_default.a.func,
  label: external_prop_types_default.a.string
});

/* harmony default export */ var CheckboxComponent = (CheckboxComponent_Checkbox);
var Styled = external_styled_components_default.a.div(_templateObject()); // import React from "react";
// import styled from "styled-components";
// const CheckboxContainer = styled.div`
// 	display: inline-block;
// 	vertical-align: middle;
// `;
// const Icon = styled.svg`
// 	fill: none;
// 	stroke: black;
// 	stroke-width: 3px;
// 	margin-bottom: 4px;
// `;
// const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
// 	border: 0;
// 	clip: rect(0 0 0 0);
// 	clippath: inset(50%);
// 	height: 1px;
// 	margin: -1px;
// 	overflow: hidden;
// 	padding: 0;
// 	position: absolute;
// 	white-space: nowrap;
// 	width: 1px;
// `;
// const StyledCheckbox = styled.div`
// 	display: inline-block;
// 	width: 16px;
// 	height: 16px;
// 	border: 1px solid;
// 	border-radius: 3px;
// 	transition: all 150ms;
// 	margin-top: 8px;
// 	${HiddenCheckbox}:focus + & {
// 		box-shadow: 0 0 0 2px #04b1ff7a;
// 	}
// 	${Icon} {
// 		visibility: ${props => (props.checked ? "visible" : "hidden")};
// 	}
// `;
// const Checkbox = ({ className, checked, ...props }) => (
// 	<CheckboxContainer className={className}>
// 		<HiddenCheckbox checked={checked} {...props} />
// 		<StyledCheckbox checked={checked}>
// 			<Icon viewBox="0 0 24 24">
// 				<polyline points="20 6 9 17 4 12" />
// 			</Icon>
// 		</StyledCheckbox>
// 	</CheckboxContainer>
// );
// export default Checkbox;
// CONCATENATED MODULE: ./components/DropdownComponent.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DropdownComponent_templateObject() {
  var data = DropdownComponent_taggedTemplateLiteral(["\n\tfont: 0.8em \"Montserrat\", sans-serif;\n\theight: 2em;\n\twidth: 3em;\n"]);

  DropdownComponent_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function DropdownComponent_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledDropdown = external_styled_components_default.a.select(DropdownComponent_templateObject());

var DropdownComponent_Dropdown = function Dropdown(_ref) {
  var props = _extends({}, _ref);

  return external_react_default.a.createElement(StyledDropdown, props);
};

/* harmony default export */ var DropdownComponent = (DropdownComponent_Dropdown);
// CONCATENATED MODULE: ./components/BookRoomComponent.js
function BookRoomComponent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BookRoomComponent_typeof = function _typeof(obj) { return typeof obj; }; } else { BookRoomComponent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BookRoomComponent_typeof(obj); }

function BookRoomComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BookRoomComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BookRoomComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) BookRoomComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) BookRoomComponent_defineProperties(Constructor, staticProps); return Constructor; }

function BookRoomComponent_possibleConstructorReturn(self, call) { if (call && (BookRoomComponent_typeof(call) === "object" || typeof call === "function")) { return call; } return BookRoomComponent_assertThisInitialized(self); }

function BookRoomComponent_getPrototypeOf(o) { BookRoomComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BookRoomComponent_getPrototypeOf(o); }

function BookRoomComponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BookRoomComponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BookRoomComponent_setPrototypeOf(subClass, superClass); }

function BookRoomComponent_setPrototypeOf(o, p) { BookRoomComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BookRoomComponent_setPrototypeOf(o, p); }

function BookRoomComponent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BookRoomComponent_BookRoomComponent =
/*#__PURE__*/
function (_React$Component) {
  BookRoomComponent_inherits(BookRoomComponent, _React$Component);

  function BookRoomComponent() {
    var _getPrototypeOf2;

    var _this;

    BookRoomComponent_classCallCheck(this, BookRoomComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = BookRoomComponent_possibleConstructorReturn(this, (_getPrototypeOf2 = BookRoomComponent_getPrototypeOf(BookRoomComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    BookRoomComponent_defineProperty(BookRoomComponent_assertThisInitialized(_this), "state", {
      id: _this.props.id,
      name: _this.props.name,
      checked: _this.props.checked,
      checkbox: _this.props.checkbox,
      children: _this.props.children,
      adult: _this.props.adult
    });

    BookRoomComponent_defineProperty(BookRoomComponent_assertThisInitialized(_this), "handleAdultDropDownChange", function (event) {
      _this.setState({
        adult: event.target.value
      }, function () {
        if (typeof _this.props.onRoomsSelectionChange === "function") {
          _this.props.onRoomsSelectionChange({
            id: _this.state.id,
            name: _this.state.name,
            checkbox: _this.state.checkbox,
            checked: _this.state.checked,
            children: _this.state.children,
            adult: _this.state.adult
          });
        }
      });
    });

    BookRoomComponent_defineProperty(BookRoomComponent_assertThisInitialized(_this), "handleChildrenDropDownChange", function (event) {
      _this.setState({
        children: event.target.value
      }, function () {
        if (typeof _this.props.onRoomsSelectionChange === "function") {
          _this.props.onRoomsSelectionChange({
            id: _this.state.id,
            name: _this.state.name,
            checkbox: _this.state.checkbox,
            checked: _this.state.checked,
            children: _this.state.children,
            adult: _this.state.adult
          });
        }
      });
    });

    BookRoomComponent_defineProperty(BookRoomComponent_assertThisInitialized(_this), "handleCheckboxChange", function (event) {
      var checked = event.target.checked;

      _this.setState(function (prevState) {
        return {
          checked: checked,
          children: !checked ? "0" : prevState.children,
          adult: !checked ? "1" : prevState.adult
        };
      }, function () {
        if (typeof _this.props.onRoomsSelectionChange === "function") {
          _this.props.onRoomsSelectionChange({
            id: _this.state.id,
            name: _this.state.name,
            checkbox: _this.state.checkbox,
            checked: _this.state.checked,
            children: _this.state.children,
            adult: _this.state.adult
          });
        }
      });
    });

    return _this;
  }

  BookRoomComponent_createClass(BookRoomComponent, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        id: nextProps.id,
        name: nextProps.name,
        checked: nextProps.checked,
        checkbox: nextProps.checkbox,
        children: nextProps.children,
        adult: nextProps.adult
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "panel panel-default room-selection ml-2 mt-2 ".concat(this.state.checked ? "" : "disabled")
      }, external_react_default.a.createElement("div", {
        className: "panel-heading"
      }, external_react_default.a.createElement("label", null, this.state.checkbox && external_react_default.a.createElement(CheckboxComponent, {
        className: "checkbox",
        checked: this.state.checked,
        onChange: this.handleCheckboxChange
      })), external_react_default.a.createElement("span", {
        style: {
          marginLeft: 8
        }
      }, this.state.name)), external_react_default.a.createElement("div", {
        className: "panel-body"
      }, external_react_default.a.createElement("div", {
        className: "d-flex"
      }, external_react_default.a.createElement("div", {
        className: "p-2 flex-fill text-center"
      }, external_react_default.a.createElement("div", null, "Adults (18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement(DropdownComponent, {
        onChange: this.handleAdultDropDownChange,
        value: this.state.adult,
        disabled: !this.state.checked
      }, external_react_default.a.createElement("option", {
        value: "1"
      }, "1"), external_react_default.a.createElement("option", {
        value: "2"
      }, "2")))), external_react_default.a.createElement("div", {
        className: "p-2 flex-fill text-center"
      }, external_react_default.a.createElement("div", null, "Children (0-17)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement(DropdownComponent, {
        onChange: this.handleChildrenDropDownChange,
        value: this.state.children,
        disabled: !this.state.checked
      }, external_react_default.a.createElement("option", {
        value: "0"
      }, "0"), external_react_default.a.createElement("option", {
        value: "1"
      }, "1"), external_react_default.a.createElement("option", {
        value: "2"
      }, "2")))))));
    }
  }]);

  return BookRoomComponent;
}(external_react_default.a.Component);

/* harmony default export */ var components_BookRoomComponent = (BookRoomComponent_BookRoomComponent);
// CONCATENATED MODULE: ./components/ButtonComponent.js
function ButtonComponent_extends() { ButtonComponent_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ButtonComponent_extends.apply(this, arguments); }

function ButtonComponent_templateObject() {
  var data = ButtonComponent_taggedTemplateLiteral(["\n\tfont: 0.8em \"Montserrat\", sans-serif;\n\tborder-radius: 3px;\n\theight: 2em;\n\twidth: 5em;\n\tbackground-color: #e7e7e7;\n"]);

  ButtonComponent_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ButtonComponent_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledButton = external_styled_components_default.a.input.attrs({
  type: "button"
})(ButtonComponent_templateObject());

var ButtonComponent_Button = function Button(_ref) {
  var props = ButtonComponent_extends({}, _ref);

  return external_react_default.a.createElement(StyledButton, props);
};

/* harmony default export */ var ButtonComponent = (ButtonComponent_Button);
// CONCATENATED MODULE: ./components/RoomsComponent.js
function RoomsComponent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RoomsComponent_typeof = function _typeof(obj) { return typeof obj; }; } else { RoomsComponent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RoomsComponent_typeof(obj); }

function RoomsComponent_extends() { RoomsComponent_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RoomsComponent_extends.apply(this, arguments); }

function RoomsComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RoomsComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RoomsComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) RoomsComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) RoomsComponent_defineProperties(Constructor, staticProps); return Constructor; }

function RoomsComponent_possibleConstructorReturn(self, call) { if (call && (RoomsComponent_typeof(call) === "object" || typeof call === "function")) { return call; } return RoomsComponent_assertThisInitialized(self); }

function RoomsComponent_getPrototypeOf(o) { RoomsComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RoomsComponent_getPrototypeOf(o); }

function RoomsComponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RoomsComponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RoomsComponent_setPrototypeOf(subClass, superClass); }

function RoomsComponent_setPrototypeOf(o, p) { RoomsComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RoomsComponent_setPrototypeOf(o, p); }

function RoomsComponent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var RoomsComponent_RoomsComponent =
/*#__PURE__*/
function (_React$Component) {
  RoomsComponent_inherits(RoomsComponent, _React$Component);

  function RoomsComponent() {
    var _getPrototypeOf2;

    var _this;

    RoomsComponent_classCallCheck(this, RoomsComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = RoomsComponent_possibleConstructorReturn(this, (_getPrototypeOf2 = RoomsComponent_getPrototypeOf(RoomsComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    RoomsComponent_defineProperty(RoomsComponent_assertThisInitialized(_this), "state", {
      rooms: [{
        id: "room1",
        name: "Room 1",
        checkbox: false,
        checked: true,
        children: 0,
        adult: 1
      }, {
        id: "room2",
        name: "Room 2",
        checkbox: true,
        checked: false,
        children: 0,
        adult: 1
      }, {
        id: "room3",
        name: "Room 3",
        checkbox: true,
        checked: false,
        children: 0,
        adult: 1
      }, {
        id: "room4",
        name: "Room 4",
        checkbox: true,
        checked: false,
        children: 0,
        adult: 1
      }]
    });

    RoomsComponent_defineProperty(RoomsComponent_assertThisInitialized(_this), "onSubmitClick", function () {
      var rooms = Object.assign([], _this.state.rooms);
      var selectedRooms = rooms.filter(function (room) {
        return room.checked;
      });
      var message = "No rooms selected.";

      if (selectedRooms.length > 0) {
        message = selectedRooms.length + " rooms selected.";
        selectedRooms.forEach(function (room, index) {
          message += "\n Room " + (index + 1) + ": Adluts: " + room.adult + ", Children: " + room.children;
        });

        if (window.confirm(message)) {
          localStorage.setItem("Rooms", JSON.stringify(rooms));
        }
      } else {
        window.alert(message);
      }
    });

    RoomsComponent_defineProperty(RoomsComponent_assertThisInitialized(_this), "onBookRoomComponentChange", function (room) {
      var rooms = Object.assign([], _this.state.rooms);
      rooms = rooms.map(function (rm) {
        if (room.checked && !rm.checked && rm.id <= room.id) {
          rm.checked = room.checked;
        }

        if (!room.checked && rm.checked && rm.id >= room.id) {
          rm.checked = room.checked;
          rm.adult = room.adult;
          rm.children = room.children;
        }

        if (rm.id === room.id) {
          rm.adult = room.adult;
          rm.children = room.children;
        }

        return rm;
      });

      _this.setState({
        rooms: rooms
      });
    });

    return _this;
  }

  RoomsComponent_createClass(RoomsComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var rooms = JSON.parse(localStorage.getItem("Rooms"));

      if (rooms && Array.isArray(rooms)) {
        this.setState({
          rooms: rooms
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", {
        className: "row mt-5"
      }, external_react_default.a.createElement("div", {
        className: "flex-container"
      }, this.state.rooms.map(function (room) {
        return external_react_default.a.createElement(components_BookRoomComponent, RoomsComponent_extends({
          key: room.id
        }, room, {
          onRoomsSelectionChange: _this2.onBookRoomComponentChange
        }));
      }))), external_react_default.a.createElement("div", {
        className: "row mt-5 ml-5"
      }, external_react_default.a.createElement(ButtonComponent, {
        value: "Submit",
        onClick: this.onSubmitClick
      })));
    }
  }]);

  return RoomsComponent;
}(external_react_default.a.Component);

/* harmony default export */ var components_RoomsComponent = (RoomsComponent_RoomsComponent);
// CONCATENATED MODULE: ./pages/index.js



/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Hilton - Book Room"), external_react_default.a.createElement("meta", {
    charset: "utf-8"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/bootstrap.css"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/style.css"
  })), external_react_default.a.createElement("div", {
    className: "container mt-5"
  }, external_react_default.a.createElement(components_RoomsComponent, null)));
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);