///////////////////////let//////////////////////

// var funcs = [];

// for (let i = 0; i < 3; i++) {
// 	funcs.push( function(){
// 		console.log( i );
// 	} );
// }
// funcs[0](); // 0
// funcs[1](); // 1
// funcs[2](); // 2

// var funcs = [];

// for (var i = 0; i < 3; i++) {
// 	funcs.push( function(){
// 		console.log( i );
// 	} );
// }
// funcs[0](); // 3
// funcs[1](); // 3
// funcs[2](); // 3

/////////////////////////////Spread/Rest//////////////////////////

// // doing things the new ES6 way
// function foo(...args) {
//   // `args` is already a real array

//   // discard first element in `args`
//   args.shift();

//   // pass along all of `args` as arguments
//   // to `console.log(..)`
//   console.log(...args);
// }

// // doing things the old-school pre-ES6 way
// function bar() {
//   // turn `arguments` into a real array
//   var args = Array.prototype.slice.call(arguments);

//   // add some elements on the end
//   args.push(4, 5);

//   // filter out odd numbers
//   args = args.filter(function (v) {
//     return v % 2 == 0;
//   });

//   // pass along all of `args` as arguments
//   // to `foo(..)`
//   foo.apply(null, args);
// }

// bar(0, 1, 2, 3); // 2 4

/////////////////////////Default Parameter Values//////////////////////

// function foo(x = 11, y = 31) {
// 	console.log( x + y );
// }

// foo();					// 42
// foo( 5, 6 );			// 11
// foo( 0, 42 );			// 42

// foo( 5 );				// 36
// foo( 5, undefined );	// 36 <-- `undefined` is missing
// foo( 5, null );			// 5  <-- null coerces to `0`

// foo( undefined, 6 );	// 17 <-- `undefined` is missing
// foo( null, 6 );			// 6  <-- null coerces to `0`

/////////////////////////////////////////////////////////////////////////

// function bar(val) {
//   console.log("bar called!");
//   return y + val;
// }

// function foo(x = y + 3, z = bar(x)) {
//   console.log(x, z);
// }

// var y = 5;
// foo(); // "bar called"
// // 8 13
// foo(10); // "bar called"
// // 10 15
// y = 6;
// foo(undefined, 10); // 9 10

//////////////////////////////Destructuring////////////////////////

// function foo() {
// 	return [1,2,3];
// }

// function bar() {
// 	return {
// 		x: 4,
// 		y: 5,
// 		z: 6
// 	};
// }

// var [ a, b, c ] = foo();
// var { x: x, y: y, z: z } = bar();

// console.log( a, b, c );				// 1 2 3
// console.log( x, y, z );				// 4 5 6

//////////////////////////////////////////////////////////

// let x = 10,
//   y = 20;

// [y, x] = [x, y];

// console.log(x, y); // 20 10

///////////////////////////////////////////////////////

// var {
//   a: { x: X, x: Y },
//   a,
// } = { a: { x: 1 } };

// X; // 1
// Y; // 1
// a; // { x: 1 }

// ({
//   a: X,
//   a: Y,
//   a: [Z],
// } = { a: [1] });

// X.push(2);
// Y[0] = 10;

// X; // [10,2]
// Y; // [10,2]
// Z; // 1

////////////////////////////////////////////////////

// var o = { a:1, b:2, c:3 },
// 	a, b, c, p;

// p = { a, b, c } = o;

// console.log( a, b, c );			// 1 2 3
// p === o;						// true

////////////////////////////////////////////////

// function f6({ x = 10 } = {}, { y } = { y: 10 }) {
// 	console.log( x, y );
// }

// f6();								// 10 10
// f6( undefined, undefined );			// 10 10
// f6( {}, undefined );				// 10 10

// f6( {}, {} );						// 10 undefined
// f6( undefined, {} );				// 10 undefined

// f6( { x: 2 }, { y: 3 } );			// 2 3

////////////////////////////////////////////////////

var defaults = {
  options: {
    remove: true,
    enable: false,
    instance: {},
  },
  log: {
    warn: true,
    error: true,
  },
};
var config = {
  options: {
    remove: false,
    instance: null,
  },
};
config = Object.assign({}, defaults, config);
config.options = config.options || {};
config.log = config.log || {};
// ({
// 	options: {
// 		remove: config.options.remove = defaults.options.remove,
// 		enable: config.options.enable = defaults.options.enable,
// 		instance: config.options.instance = defaults.options.instance
// 	} = {},
// 	log: {
// 		warn: config.log.warn = defaults.log.warn,
// 		error: config.log.error = defaults.log.error
// 	} = {}
// } = config);

// // merge `defaults` into `config`
// {
//   // destructure (with default value assignments)
//   let {
//     options: {
//       remove = defaults.options.remove,
//       enable = defaults.options.enable,
//       instance = defaults.options.instance,
//     } = {},
//     log: { warn = defaults.log.warn, error = defaults.log.error } = {},
//   } = config;

//   // restructure
//   config = {
//     options: { remove, enable, instance },
//     log: { warn, error },
//   };
// }

////////////////////////////////////////////////////

// var prefix = "user_";

// var o = {
//   baz: function () {},
// };
// o[prefix + "foo"] = function () {};
// o[prefix + "bar"] = function () {};

// var prefix = "user_";

// var o = {
//   baz: function () {},
//   [prefix + "foo"]: function () {},
//   [prefix + "bar"]: function () {},
// };

///////////////////////////Symbol/////////////////////////

// const INSTANCE = Symbol("instance");

// function HappyFace() {
//   if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];

//   function smile() {}

//   return (HappyFace[INSTANCE] = {
//     smile: smile,
//   });
// }

// var me = HappyFace(),
//   you = HappyFace();

// me === you; // true

/////////////////////////////////////////////

function extractValues(str) {
  var key = Symbol.for("extractValues.parse"),
    re = extractValues[key] || /[^=&]+?=([^&]+?)(?=&|$)/g,
    values = [],
    match;

  while ((match = re.exec(str))) {
    values.push(match[1]);
  }

  return values;
}

/////////////////Symbol.keyFor////////////////////

// var s = Symbol.for( "something cool" );

// var desc = Symbol.keyFor( s );
// console.log( desc );			// "something cool"

// // get the symbol from the registry again
// var s2 = Symbol.for( desc );

// s2 === s;						// true

////////////////////Symbols as Object Properties////////////////////////

var o = {
  foo: 42,
  [Symbol("bar")]: "hello world",
  baz: true,
};

Object.getOwnPropertyNames(o); // [ "foo","baz" ]
// To retrieve an object's symbol properties:
Object.getOwnPropertySymbols(o); // [ Symbol(bar) ]


