"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;

var _store = _interopRequireDefault(require("../../reducers/store"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Save user details from register form after validation
 *
 * @param userName:string
 * @param email:string
 * @param password:string
 * @param phoneNumber:string
 * @param identityNumer:string
 * @return {dispatch} Type + payload.
 */
function register(userName, email, password, phoneNumber, identityNumer) {
  var params = {
    userName: userName,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    identityNumer: identityNumer
  };
  fetch('https://fire102.herokuapp.com/api/signup', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
  })["catch"](function (error) {
    console.log("There has been a problem with your fetch operation: " + error.message);
    throw error;
  });
  return {
    type: "REGISTER",
    payload: {
      userName: userName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      identityNumer: identityNumer
    }
  };
}
/**
 * If user already registred - get from the phone storage his/her details
 * @return {dispatch} Type + payload.
 */


function login(dispatch) {
  var userName, password, params;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem("userName"));

        case 3:
          userName = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem("password"));

        case 6:
          password = _context.sent;
          params = {
            userName: userName,
            password: password
          };
          fetch('https://fire102.herokuapp.com/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          }).then(function (response) {
            console.log(response);
            return response.json();
          }).then(function (json) {
            console.log(json);
          })["catch"](function (error) {
            console.log("There has been a problem with your fetch operation: " + error.message);
            throw error;
          });
          dispatch({
            type: "LOGIN",
            payload: {
              userName: userName,
              email: email,
              password: password,
              phoneNumber: phoneNumber,
              identityNumer: identityNumer
            }
          });
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}