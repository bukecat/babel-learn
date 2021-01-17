"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es7.array.includes.js");

require("core-js/modules/es6.string.includes.js");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

// import "@babel/polyfill";
var fn = function fn() {
  var _console;

  (_console = console).log.apply(_console, [1, 2, 3]);

  new _promise["default"](function () {});
};

var Test = function Test() {
  (0, _classCallCheck2["default"])(this, Test);
};

var b = [1, 2, 3].includes(1);
