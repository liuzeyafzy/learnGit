'use strict';
// 此处代码如果用node执行，需要加参数“--harmony_destructuring”，因为里面使用到了解构赋值

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ref = [1];
var bar = _ref[0];
var foo = _ref[1];

console.log('bar: ' + bar);
console.log('foo: ' + foo);

var a = 1;
var _ref2 = [2, 3];
var b = _ref2 === undefined ? 0 : _ref2;
var _ = 4;
var c = _ === undefined ? 0 : _;

console.log('a: ' + a);
console.log(b);
console.log;
console.log('c: ' + c);
console.log(Object.prototype.toString.apply(b));
var d = [2, 3];
console.log(d.toString());

var _foo$bar = { foo: "aaa", bar: "bbb" };
var fa = _foo$bar.foo;
var ba = _foo$bar.bar;

console.log('foo: ' + foo);
console.log('ba: ' + ba);

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2);

    var key = _step$value[0];
    var value = _step$value[1];

    console.log(key + " is " + value);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _Hello = 'Hello';

var _Hello2 = _slicedToArray(_Hello, 1);

var zoo = _Hello2[0];

console.log(zoo);
//# sourceMappingURL=bye.js.map
