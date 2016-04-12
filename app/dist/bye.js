'use strict';

function foo(_ref) {
  var x = _ref.x;
  var _ref$y = _ref.y;
  var y = _ref$y === undefined ? 5 : _ref$y;

  console.log(x, y);
}

foo({}); // undefined, 5
foo({ x: 1 }); // 1, 5
foo({ x: 1, y: 2 }); // 1, 2
//# sourceMappingURL=bye.js.map
