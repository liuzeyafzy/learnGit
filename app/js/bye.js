'use strict'
// 此处代码如果用node执行，需要加参数“--harmony_destructuring”，因为里面使用到了解构赋值
let [bar, foo] = [1];
console.log('bar: ' + bar);
console.log('foo: ' + foo);

var [a, b = 0, c = 0] = [1, [2, 3], 4];
console.log('a: '+ a);
console.log(b);
console.log
console.log('c: '+ c);
console.log(Object.prototype.toString.apply(b));
let d = [2, 3];
console.log(d.toString());


var { foo: fa, bar: ba } = { foo: "aaa", bar: "bbb" };
console.log('foo: ' + foo);
console.log('ba: ' + ba);


var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}

var [zoo] = 'Hello';
console.log(zoo);
