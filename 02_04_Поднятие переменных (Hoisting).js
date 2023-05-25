/////////////////////////

// a = 2;
// var a;
// console.log( a );

//как видет кампилятор

// var a;
// a = 2;
// console.log( a );

///////////////////////////////////

// console.log(a);
// var a = 2;

//как видет кампилятор

// var a;
// console.log( a );
// a = 2;

///////////////////////////////////

// foo();
// function foo() {
// 	console.log( a ); // undefined
// 	var a = 2;
// }

//как видет кампилятор

// function foo() {
//   var a;
//   console.log(a); // undefined
//   a = 2;
// }
// foo();

/////////////////////////

// foo(); // TypeError
// bar(); // ReferenceError
// var foo = function bar() {
// 	// ...
// };

//как видет кампилятор

// var foo;

// foo(); // TypeError
// bar(); // ReferenceError

// foo = function() {
// 	var bar = ...self...
// 	// ...
// }

///////////////////////////////

// foo(); // 3

// function foo() {
// 	console.log( 1 );
// }

// var foo = function() {
// 	console.log( 2 );
// };

// function foo() {
// 	console.log( 3 );
// }

////////////////////////////////


