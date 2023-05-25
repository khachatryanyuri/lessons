//////////////////Затенение/////////////////

// var anotherObject = {
//   a: 2,
// };

// var myObject = Object.create(anotherObject);

// anotherObject.a; // 2
// myObject.a; // 2

// anotherObject.hasOwnProperty("a"); // true
// myObject.hasOwnProperty("a"); // false

// myObject.a++; // ой, неявное затенение!

// anotherObject.a; // 2
// myObject.a; // 3

// myObject.hasOwnProperty("a"); // true

// //true methods//anotherObject.a++

/////////////class es5//////////////////

// function Foo(name) {
//   this.name = name;
// }

// Foo.prototype.myName = function () {
//   return this.name;
// };

// var a = new Foo("a");
// var b = new Foo("b");

// a.myName(); // "a"
// b.myName(); // "b"

//////////////////////////////////

// function Foo() {
//   /* .. */
// }

// Foo.prototype = {
//   /* .. */
// }; // создаем новый объект-прототип

// // Необходимо правильно "пофиксить" отсутствующее свойство `.constructor`
// // у нового объекта, выступающего в роли `Foo.prototype`.
// // См. главу 3 про `defineProperty(..)`.
// Object.defineProperty(Foo.prototype, "constructor", {
//   enumerable: false,
//   writable: true,
//   configurable: true,
//   value: Foo, // `.constructor` теперь указывает на `Foo`
// });

//////////////////прототипный стиль////////////////////////

// function Foo(name) {
//   this.name = name;
// }

// Foo.prototype.myName = function () {
//   return this.name;
// };

// function Bar(name, label) {
//   Foo.call(this, name);
//   this.label = label;
// }

// // здесь мы создаем `Bar.prototype`
// // связанный с `Foo.prototype`
// Bar.prototype = Object.create(Foo.prototype);

// // Осторожно! Теперь `Bar.prototype.constructor` отсутствует,
// // и это придется "пофиксить" вручную,
// // если вы привыкли полагаться на подобные свойства!

// Bar.prototype.myLabel = function () {
//   return this.label;
// };

// var a = new Bar("a", "obj a");

// a.myName(); // "a"
// a.myLabel(); // "obj a"

/////////////////////__proto__//////////////////////////

// Object.defineProperty(Object.prototype, "__proto__", {
//   get: function () {
//     return Object.getPrototypeOf(this);
//   },
//   set: function (o) {
//     // setPrototypeOf(..) доступно начиная с ES6
//     Object.setPrototypeOf(this, o);
//     return o;
//   },
// });



