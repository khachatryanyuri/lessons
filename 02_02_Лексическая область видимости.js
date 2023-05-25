// function aaa(params) {
//   console.log(params + a + b + c);
// }
// let a = 1;
// const b = 1;
// var c = 1;
// aaa(1);

///eval///

// function foo(str, a) {
// 	eval( str ); // обман!
// 	console.log( a, b );
// }

// var b = 2;

// foo( "var b = 3;", 1 ); // 1, 3

///with///

// function foo(obj) {
// 	with (obj) {
// 		a = 2;
// 	}
// }

// var o1 = {
// 	a: 3
// };

// var o2 = {
// 	b: 3
// };

// foo( o1 );
// console.log( o1.a ); // 2

// foo( o2 );
// console.log( o2.a ); // undefined
// console.log( a ); // 2 — Упс, утекшая глобальная переменная!