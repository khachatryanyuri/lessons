// var myObject = {
//   a: 2
// };
// myObject.a;	    // 2
// myObject["a"];	// 2

//////////////////////////////////

// var wantA = true;
// var myObject = {
//     a: 2
// };
// var idx;
// if (wantA) {
//     idx = "a";
// }
// // позже
// console.log( myObject[idx] ); // 2

//////////////////////////////////

// var prefix = "foo";
// var myObject = {
//     [prefix + "bar"]: "hello",
//     [prefix + "baz"]: "world"
// };
// myObject["foobar"]; // hello
// myObject["foobaz"]; // world

/////////////////////Object.assign//////////////////////

// var newObj = Object.assign( {}, myObject );
// newObj.a;	                    // 2
// newObj.b === anotherObject;	    // true
// newObj.c === anotherArray;	    // true
// newObj.d === anotherFunction;	// true

////////////////////Дескрипторы свойств/////////////////////////

// var myObject = {
//   a: 2
// };
// Object.getOwnPropertyDescriptor( myObject, "a" );
// // {
// // value: 2,
// // writable: true,
// // enumerable: true,
// // configurable: true
// // }

/////////////////////////////////////////////////////

// var myObject = {};
// Object.defineProperty( myObject, "a", {
//     value: 2,
//     writable: true,
//     configurable: true,
//     enumerable: true
// } );
// myObject.a; // 2

/////////////////////writable////////////////////////

// var myObject = {};
// Object.defineProperty( myObject, "a", {
//     value: 2,
//     writable: false, // не перезаписываемо!
//     configurable: true,
//     enumerable: true
// } );
// myObject.a = 3;
// myObject.a;         // 2

//////////////////////configurable///////////////////////

// var myObject = {
//   a: 2
// };
// myObject.a = 3;
// myObject.a;	// 3
// Object.defineProperty( myObject, "a", {
//   value: 4,
//   writable: true,
//   configurable: false,	// не конфигурируемо!
//   enumerable: true
// } );
// myObject.a;	// 4
// myObject.a = 5;
// myObject.a;	// 5
// Object.defineProperty( myObject, "a", {
//   value: 6,
//   writable: true,
//   configurable: true,
//   enumerable: true
// } );        // TypeError

////////////////////////////////////////////

// var myObject = {
//   a: 2
// };
// myObject.a;     // 2
// delete myObject.a;
// myObject.a;     // undefined
// Object.defineProperty( myObject, "a", {
//   value: 2,
//   writable: true,
//   configurable: false,
//   enumerable: true
// } );
// myObject.a;     // 2
// delete myObject.a;
// myObject.a;     // 2

//////////////////////enumerable///////////////////////

// var myObject = { };
// Object.defineProperty(
//     myObject,
//     "a",
//     // сделаем `a` перечисляемой, как обычно
//     { enumerable: true, value: 2 }
// );
// Object.defineProperty(
// myObject,
//     "b",
//     // сделаем `b` НЕперечисляемой
//     { enumerable: false, value: 3 }
// );
// myObject.b;                     // 3
// ("b" in myObject);              // true
// myObject.hasOwnProperty( "b" ); // true
// // .......
// for (var k in myObject) {
//     console.log( k, myObject[k] );
// }
// // "a" 2

//////////////////////Запрет расширения///////////////////////

// var myObject = {
//   a: 2
// };
// Object.preventExtensions( myObject );
// myObject.b = 3;
// myObject.b; // undefined

//////////////////Запечатывание////////////////////////

// Метод Object.seal(..) создает «запечатанный» объект -- то есть принимает существующий объект и,
// по сути, применяет к нему Object.preventExtensions(..),
// но также помечает все существующие свойства как configurable:false.

//////////////////Заморозка////////////////////////

// Метод Object.freeze(..) создает замороженный объект, что означает,
// что он принимает существующий объект и по сути применяет к нему Object.seal(..),
// но также помечает все свойства «доступа к данным» как writable:false, так,
// что их значения не могут быть изменены.

//////////////////Геттеры/////////////////////

// var myObject = {
//   // определяем геттер для `a`
//   get a() {
//       return 2;
//   }
// };
// Object.defineProperty(
//   myObject,	// цель
//   "b",	    // имя свойства
//   {	// дескриптор
//       // определяем геттер для `b`
//       get: function(){ return this.a * 2 },
//       // убедимся что `b` будет отображаться как свойство объекта
//       enumerable: true
//   }
// );
// myObject.a; // 2
// myObject.b; // 4

/////////////////////Сеттеры//////////////////////

// var myObject = {
//   // определим геттер для `a`
//   get a() {
//       return this._a_;
//   },
//   // определим сеттер для `a`
//   set a(val) {
//       this._a_ = val * 2;
//   }
// };
// myObject.a = 2;
// myObject.a; // 4

////////////////////////Существование////////////////////////

// var myObject = {
//   a: 2
// };
// ("a" in myObject);	            // true //  проверит находится ли свойство в объекте или существует ли оно уровнем выше в цепочке [[Prototype]]
// ("b" in myObject);	            // false
// myObject.hasOwnProperty( "a" );	// true // не проверит находится ли свойство в объекте или существует ли оно уровнем выше в цепочке [[Prototype]]
// myObject.hasOwnProperty( "b" );	// false

////////////for of in object//////////////////////////

// var myObject = {
//   a: 2,
//   b: 3,
// };
// Object.defineProperty(myObject, Symbol.iterator, {
//   enumerable: false,
//   writable: false,
//   configurable: true,
//   value: function () {
//     var o = this;
//     var idx = 0;
//     var ks = Object.keys(o);
//     return {
//       next: function () {
//         return {
//           value: o[ks[idx++]],
//           done: idx > ks.length,
//         };
//       },
//     };
//   },
// });
// // перебираем `myObject` вручную
// var it = myObject[Symbol.iterator]();
// it.next(); // { value:2, done:false }
// it.next(); // { value:3, done:false }
// it.next(); // { value:undefined, done:true }
// // перебираем `myObject` с помощью `for..of`
// for (var v of myObject) {
//   console.log(v);
// }
// // 2
// // 3


