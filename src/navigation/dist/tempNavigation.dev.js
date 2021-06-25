"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNavigation = require("react-navigation");

var _reactNavigationDrawer = require("react-navigation-drawer");

var _reactNative = require("react-native");

var _vectorIcons = require("@expo/vector-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DrawerNavigator = (0, _reactNavigationDrawer.createDrawerNavigator)({});

var _default = (0, _reactNavigation.createAppContainer)(DrawerNavigator);

exports["default"] = _default;