'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.isComposable = exports.isStamp = exports.isDescriptor = undefined;

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDescriptor = exports.isDescriptor = _isObject2.default;

var isStamp = exports.isStamp = function isStamp(obj) {
  return (0, _isFunction2.default)(obj) && (0, _isFunction2.default)(obj.compose) && isDescriptor(obj.compose);
};

var isComposable = exports.isComposable = function isComposable(obj) {
  return isDescriptor(obj) || isStamp(obj);
};

var init = exports.init = function init() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return (0, _compose2.default)({ initializers: [].concat(functions) });
};
//# sourceMappingURL=index.js.map