"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var initState = {
  marker: {
    key: "-1",
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    displayName: "none"
  },
  currentLocationFlag: false,
  counter: 1,
  markerFlag: false,
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01 * width / height
  }
};

var MapReducer = function MapReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SET_LOCATION":
      return _objectSpread({}, state, {
        region: action.payload.region,
        currentLocationFlag: true
      });

    case "CLEAR_MARKERS":
      return _objectSpread({}, state, {
        marker: {
          key: "-1",
          coordinate: {
            latitude: 37.78825,
            longitude: -122.4324
          },
          displayName: "none"
        },
        counter: 1,
        markerFlag: false
      });

    case "ADD_MARKER":
      return _objectSpread({}, state, {
        marker: action.payload,
        counter: state.counter + 1,
        markerFlag: true
      });

    default:
      return state;
  }
};

var _default = MapReducer;
exports["default"] = _default;