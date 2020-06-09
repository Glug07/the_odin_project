'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = undefined;
exports.default = compose;

var _mergeWith = require('lodash/mergeWith');

var _mergeWith2 = _interopRequireDefault(_mergeWith);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
This is an example implementation of the Stamp Specifications.
See https://github.com/stampit-org/stamp-specification
The code is optimized to be as readable as possible.
 */

var isDescriptor = _isObject2.default;
var merge = exports.merge = function merge(dst, src) {
  return (0, _mergeWith2.default)(dst, src, function (dstValue, srcValue) {
    if (Array.isArray(dstValue)) {
      if (Array.isArray(srcValue)) return dstValue.concat(srcValue);
      if ((0, _isObject2.default)(srcValue)) return merge({}, srcValue);
    }
  });
};

/**
 * Creates new factory instance.
 * @param {object} descriptor The information about the object the factory will be creating.
 * @returns {Function} The new factory function.
 */
function createFactory(descriptor) {
  return function Stamp(options) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var obj = Object.create(descriptor.methods || {});

    merge(obj, descriptor.deepProperties);
    (0, _assign2.default)(obj, descriptor.properties);
    Object.defineProperties(obj, descriptor.propertyDescriptors || {});

    if (!descriptor.initializers || descriptor.initializers.length === 0) return obj;

    return descriptor.initializers.filter(_isFunction2.default).reduce(function (resultingObj, initializer) {
      var returnedValue = initializer.call(resultingObj, options, { instance: resultingObj, stamp: Stamp, args: [options].concat(args) });
      return returnedValue === undefined ? resultingObj : returnedValue;
    }, obj);
  };
}

/**
 * Returns a new stamp given a descriptor and a compose function implementation.
 * @param {object} [descriptor={}] The information about the object the stamp will be creating.
 * @param {Function} composeFunction The "compose" function implementation.
 * @returns {Function}
 */
function createStamp(descriptor, composeFunction) {
  var Stamp = createFactory(descriptor);

  merge(Stamp, descriptor.staticDeepProperties);
  (0, _assign2.default)(Stamp, descriptor.staticProperties);
  Object.defineProperties(Stamp, descriptor.staticPropertyDescriptors || {});

  var composeImplementation = (0, _isFunction2.default)(Stamp.compose) ? Stamp.compose : composeFunction;
  Stamp.compose = function () {
    return composeImplementation.apply(this, arguments);
  };
  (0, _assign2.default)(Stamp.compose, descriptor);

  return Stamp;
}

/**
 * Mutates the dstDescriptor by merging the srcComposable data into it.
 * @param {object} dstDescriptor The descriptor object to merge into.
 * @param {object} [srcComposable] The composable (either descriptor or stamp) to merge data form.
 * @returns {object} Returns the dstDescriptor argument.
 */
function mergeComposable(dstDescriptor, srcComposable) {
  var srcDescriptor = srcComposable && srcComposable.compose || srcComposable;
  if (!isDescriptor(srcDescriptor)) return dstDescriptor;

  var combineProperty = function combineProperty(propName, action) {
    if (!(0, _isObject2.default)(srcDescriptor[propName])) return;
    if (!(0, _isObject2.default)(dstDescriptor[propName])) dstDescriptor[propName] = {};
    action(dstDescriptor[propName], srcDescriptor[propName]);
  };

  combineProperty('methods', _assign2.default);
  combineProperty('properties', _assign2.default);
  combineProperty('deepProperties', merge);
  combineProperty('propertyDescriptors', _assign2.default);
  combineProperty('staticProperties', _assign2.default);
  combineProperty('staticDeepProperties', merge);
  combineProperty('staticPropertyDescriptors', _assign2.default);
  combineProperty('configuration', _assign2.default);
  combineProperty('deepConfiguration', merge);
  if (Array.isArray(srcDescriptor.initializers)) {
    dstDescriptor.initializers = srcDescriptor.initializers.reduce(function (result, init) {
      if ((0, _isFunction2.default)(init) && result.indexOf(init) < 0) {
        result.push(init);
      }
      return result;
    }, Array.isArray(dstDescriptor.initializers) ? dstDescriptor.initializers : []);
  }

  return dstDescriptor;
}

/**
 * Given the list of composables (stamp descriptors and stamps) returns a new stamp (composable factory function).
 * @param {...(object|Function)} [composables] The list of composables.
 * @returns {Function} A new stamp (aka composable factory function).
 */
function compose() {
  for (var _len2 = arguments.length, composables = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    composables[_key2] = arguments[_key2];
  }

  var descriptor = [this].concat(composables).filter(_isObject2.default).reduce(mergeComposable, {});
  return createStamp(descriptor, compose);
}
//# sourceMappingURL=compose.js.map