'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('isDescriptor', function (nest) {
  nest.test('...with rubbish', function (assert) {
    var expected = false;
    [0, 'a', null, undefined, NaN].forEach(function (value) {
      var actual = (0, _.isDescriptor)(value);
      assert.equal(actual, expected, 'should return false for ' + value);
    });

    assert.end();
  });

  nest.test('...with descriptor.properties', function (assert) {
    var msg = 'should return true for descriptors';
    var descriptor = {
      properties: {
        foo: 'bar'
      }
    };
    var actual = (0, _.isDescriptor)(descriptor);
    var expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...with descriptor.initializers', function (assert) {
    var msg = 'should return true for descriptors';
    var descriptor = {
      initializers: [function (_ref) {
        var instance = _ref.instance;

        instance.foo = 'bar';
      }]
    };
    var actual = (0, _.isDescriptor)(descriptor);
    var expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
//# sourceMappingURL=is-descriptor.js.map