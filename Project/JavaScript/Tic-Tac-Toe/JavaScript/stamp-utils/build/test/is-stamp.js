'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _compose = require('compose');

var _compose2 = _interopRequireDefault(_compose);

var _2 = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('isStamp()', function (nest) {
  nest.test('...with stamp input', function (assert) {
    var actual = (0, _2.isStamp)((0, _compose2.default)());
    var expected = true;

    assert.equal(actual, expected, 'should return true');

    assert.end();
  });

  nest.test('...with simple function', function (assert) {
    var actual = (0, _2.isStamp)(function () {});
    var expected = false;

    assert.equal(actual, expected, 'should return false');

    assert.end();
  });

  nest.test('...with non-stamp inputs', function (assert) {
    var actual = [0, '', {}, [], function () {}].map(_2.isStamp);
    var expected = [false, false, false, false, false];

    assert.deepEqual(actual, expected, 'should return false');

    assert.end();
  });

  nest.test('recognize composables with omitted props', function (assert) {
    var composable = _lodash2.default.assign(function () {}, {
      compose: _lodash2.default.assign(function () {}, {
        properties: {
          foo: 'bar'
        }
      })
    });

    var actual = (0, _2.isStamp)(composable);
    var expected = true;

    assert.deepEqual(actual, expected, 'Recognize composables with omitted props');
    assert.end();
  });
});
//# sourceMappingURL=is-stamp.js.map