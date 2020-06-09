'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _compose = require('compose');

var _compose2 = _interopRequireDefault(_compose);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('isComposable', function (nest) {
  nest.test('...with stamp', function (assert) {
    var msg = 'should return true for stamps';
    var stamp = (0, _compose2.default)();
    var actual = (0, _.isComposable)(stamp);
    var expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...with descriptor', function (assert) {
    var msg = 'should return true for descriptors';
    var descriptor = {
      properties: {
        foo: 'bar'
      }
    };
    var actual = (0, _.isComposable)(descriptor);
    var expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
//# sourceMappingURL=is-composable.js.map