//////////////////valueOf()////////////////////

// var a = new String( "abc" );
// var b = new Number( 42 );
// var c = new Boolean( true );

// a.valueOf(); // "abc"
// b.valueOf(); // 42
// c.valueOf(); // true

///////////////Object(..), Function(..), and RegExp(..)///////////////////////

// var c = new Object();
// c.foo = "bar";
// c; // { foo: "bar" }

// var d = { foo: "bar" };
// d; // { foo: "bar" }

// var e = new Function( "a", "return a * 2;" );
// var f = function(a) { return a * 2; };
// function g(a) { return a * 2; }

// var h = new RegExp( "^a*b+", "g" );
// var i = /^a*b+/g;

// /////////////////////////////////////////

// var name = "Kyle";
// var namePattern = new RegExp( "\\b(?:" + name + ")+\\b", "ig" );

// var matches = someText.match( namePattern );


/////////////////////////Symbol///////////////////////

// var mysym = Symbol( "my own symbol" );
// mysym;				// Symbol(my own symbol)
// mysym.toString();	// "Symbol(my own symbol)"
// typeof mysym; 		// "symbol"

// var a = { };
// a[mysym] = "foobar";

// Object.getOwnPropertySymbols( a );
// // [ Symbol(my own symbol) ]


///////////////////////////////////////////////////////

// function isThisCool(vals,fn,rx) {
// 	vals = vals || Array.prototype;
// 	fn = fn || Function.prototype;
// 	rx = rx || RegExp.prototype;

// 	return rx.test(
// 		vals.map( fn ).join( "" )
// 	);
// }

// isThisCool();		// true

// isThisCool(
// 	["a","b","c"],
// 	function(v){ return v.toUpperCase(); },
// 	/D/
// );					// false

