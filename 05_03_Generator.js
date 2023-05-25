// function *foo(x) {
// 	var y = x * (yield);
// 	return y;
// }

// var it = foo( 6 );

// // start `foo(..)`
// it.next();

// var res = it.next( 7 );

// res.value;		// 42

////////////////////////////////////////////////

// function *foo(x) {
// 	var y = x * (yield "Hello");	// <-- yield a value!
// 	return y;
// }

// var it = foo( 6 );

// var res = it.next();	// first `next()`, don't pass anything
// res.value;				// "Hello"

// res = it.next( 7 );		// pass `7` to waiting `yield`
// res.value;				// 42

/////////////////////////////////////////////////////

// function *foo() {
// 	var x = yield 2;
// 	z++;
// 	var y = yield (x * z);
// 	console.log( x, y, z );
// }

// var z = 1;

// var it1 = foo();
// var it2 = foo();

// var val1 = it1.next().value;			// 2 <-- yield 2
// var val2 = it2.next().value;			// 2 <-- yield 2

// val1 = it1.next( val2 * 10 ).value;		// 40  <-- x:20,  z:2
// val2 = it2.next( val1 * 5 ).value;		// 600 <-- x:200, z:3

// it1.next( val2 / 2 );					// y:300
// 										// 20 300 3
// it2.next( val1 / 4 );					// y:10
// 										// 200 10 3

////////////////////////////////////////////////

// var gimmeSomething = (function(){
// 	var nextVal;

// 	return function(){
// 		if (nextVal === undefined) {
// 			nextVal = 1;
// 		}
// 		else {
// 			nextVal = (3 * nextVal) + 6;
// 		}

// 		return nextVal;
// 	};
// })();

// gimmeSomething();		// 1
// gimmeSomething();		// 9
// gimmeSomething();		// 33
// gimmeSomething();		// 105

/////////////////////////////////////////////////////

// function foo(x,y) {
// 	ajax(
// 		"http://some.url.1/?x=" + x + "&y=" + y,
// 		function(err,data){
// 			if (err) {
// 				// throw an error into `*main()`
// 				it.throw( err );
// 			}
// 			else {
// 				// resume `*main()` with received `data`
// 				it.next( data );
// 			}
// 		}
// 	);
// }

// function *main() {
// 	try {
// 		var text = yield foo( 11, 31 );
// 		console.log( text );
// 	}
// 	catch (err) {
// 		console.error( err );
// 	}
// }

// var it = main();

// // start it all up!
// it.next();

//////////////////////////////////////////

// function *main() {
// 	var x = yield "Hello World";

// 	yield x.toLowerCase();	// cause an exception!
// }

// var it = main();

// it.next().value;			// Hello World

// try {
// 	it.next( 42 );
// }
// catch (err) {
// 	console.error( err );	// TypeError
// }

/////////////////////////////////////////////////////

// function run(gen) {
// 	var args = [].slice.call( arguments, 1), it;

// 	// initialize the generator in the current context
// 	it = gen.apply( this, args );

// 	// return a promise for the generator completing
// 	return Promise.resolve()
// 		.then( function handleNext(value){
// 			// run to the next yielded value
// 			var next = it.next( value );

// 			return (function handleResult(next){
// 				// generator has completed running?
// 				if (next.done) {
// 					return next.value;
// 				}
// 				// otherwise keep going
// 				else {
// 					return Promise.resolve( next.value )
// 						.then(
// 							// resume the async loop on
// 							// success, sending the resolved
// 							// value back into the generator
// 							handleNext,

// 							// if `value` is a rejected
// 							// promise, propagate error back
// 							// into the generator for its own
// 							// error handling
// 							function handleErr(err) {
// 								return Promise.resolve(
// 									it.throw( err )
// 								)
// 								.then( handleResult );
// 							}
// 						);
// 				}
// 			})(next);
// 		} );
// }

///////////////////////////////////////////////////

// function *foo() {
// 	console.log( "inside `*foo()`:", yield "B" );

// 	console.log( "inside `*foo()`:", yield "C" );

// 	return "D";
// }

// function *bar() {
// 	console.log( "inside `*bar()`:", yield "A" );

// 	// `yield`-delegation!
// 	console.log( "inside `*bar()`:", yield *foo() );

// 	console.log( "inside `*bar()`:", yield "E" );

// 	return "F";
// }

// var it = bar();

// console.log( "outside:", it.next().value );
// // outside: A

// console.log( "outside:", it.next( 1 ).value );
// // inside `*bar()`: 1
// // outside: B

// console.log( "outside:", it.next( 2 ).value );
// // inside `*foo()`: 2
// // outside: C

// console.log( "outside:", it.next( 3 ).value );
// // inside `*foo()`: 3
// // inside `*bar()`: D
// // outside: E

// console.log( "outside:", it.next( 4 ).value );
// // inside `*bar()`: 4
// // outside: F

/////////////////////////////////////////////////////////////

// function* foo() {
//   try {
//     yield "B";
//   } catch (err) {
//     console.log("error caught inside `*foo()`:", err);
//   }

//   yield "C";

//   throw "D";
// }

// function* bar() {
//   yield "A";

//   try {
//     yield* foo();
//   } catch (err) {
//     console.log("error caught inside `*bar()`:", err);
//   }

//   yield "E";

//   yield* baz();

//   // note: can't get here!
//   yield "G";
// }

// function* baz() {
//   throw "F";
// }

// var it = bar();

// console.log("outside:", it.next().value);
// // outside: A

// console.log("outside:", it.next(1).value);
// // outside: B

// console.log("outside:", it.throw(2).value);
// // error caught inside `*foo()`: 2
// // outside: C

// console.log("outside:", it.next(3).value);
// // error caught inside `*bar()`: D
// // outside: E

// try {
//   console.log("outside:", it.next(4).value);
// } catch (err) {
//   console.log("error caught outside:", err);
// }
// // error caught outside: F

////////////////////////////////////////////////////

// `request(..)` is a Promise-aware Ajax utility

// var res = [];

// function *reqData(url) {
// 	var data = yield request( url );

// 	// transfer control
// 	yield;

// 	res.push( data );
// }

// var it1 = reqData( "http://some.url.1" );
// var it2 = reqData( "http://some.url.2" );

// var p1 = it1.next().value;
// var p2 = it2.next().value;

// p1.then( function(data){
// 	it1.next( data );
// } );

// p2.then( function(data){
// 	it2.next( data );
// } );

// Promise.all( [p1,p2] )
// .then( function(){
// 	it1.next();
// 	it2.next();
// } );

//////////////////////////////////////////////////

// function foo(url) {
//   // manage generator state
//   var state;

//   // generator-wide variable declarations
//   var val;

//   function process(v) {
//     switch (state) {
//       case 1:
//         console.log("requesting:", url);
//         return request(url);
//       case 2:
//         val = v;
//         console.log(val);
//         return;
//       case 3:
//         var err = v;
//         console.log("Oops:", err);
//         return false;
//     }
//   }

//   // make and return an iterator
//   return {
//     next: function (v) {
//       // initial state
//       if (!state) {
//         state = 1;
//         return {
//           done: false,
//           value: process(),
//         };
//       }
//       // yield resumed successfully
//       else if (state == 1) {
//         state = 2;
//         return {
//           done: true,
//           value: process(v),
//         };
//       }
//       // generator already completed
//       else {
//         return {
//           done: true,
//           value: undefined,
//         };
//       }
//     },
//     throw: function (e) {
//       // the only explicit error handling is in
//       // state *1*
//       if (state == 1) {
//         state = 3;
//         return {
//           done: true,
//           value: process(e),
//         };
//       }
//       // otherwise, an error won't be handled,
//       // so just throw it right back out
//       else {
//         throw e;
//       }
//     },
//   };
// }


////////////////////////////////////
