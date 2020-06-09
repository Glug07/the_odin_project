'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _tape2.default)('init()', function (nest) {
  nest.test('...with function input', function (assert) {
    var actual = (0, _.isStamp)((0, _.init)(function () {}));
    var expected = true;

    assert.equal(actual, expected, 'should return a stamp');

    assert.end();
  });

  nest.test('...with multiple functions', function (assert) {
    var actual = (0, _.isStamp)((0, _.init)(function () {}, function () {}, function () {}));
    var expected = true;

    assert.equal(actual, expected, 'should return a stamp');

    assert.end();
  });

  nest.test('...with multiple mutator functions', function (assert) {
    var mutators = ['a', 'b', 'c'].map(function (i) {
      return function (o, _ref) {
        var instance = _ref.instance;
        instance[i] = i;
      };
    });

    var actual = _.init.apply(undefined, _toConsumableArray(mutators))();
    var expected = {
      a: 'a',
      b: 'b',
      c: 'c'
    };

    assert.deepEqual(actual, expected, 'should apply all initializers to instance');

    assert.end();
  });
});
//# sourceMappingURL=init.js.map