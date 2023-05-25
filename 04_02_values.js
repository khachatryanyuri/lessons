////////////////slice///////////////////

// function foo() {
// 	var arr = Array.prototype.slice.call( arguments );
// 	arr.push( "bam" );
// 	console.log( arr );
// }

// foo( "bar", "baz" ); // ["bar","baz","bam"]

////////////////Object.is(..)///////////////////


// var a = 2 / "foo";
// var b = -3 * 0;

// Object.is( a, NaN );	// true
// Object.is( b, -0 );		// true

// Object.is( b, 0 );		// false

////////////////////////////////////

// function foo(x) {
// 	x.push( 4 );
// 	x; // [1,2,3,4]

// 	// позднее
// 	x.length = 0; // очистить существующий массив на месте
// 	x.push( 4, 5, 6, 7 );
// 	x; // [4,5,6,7]
// }

// var a = [1,2,3];

// foo( a );

// a; // [4,5,6,7], а не  [1,2,3,4]

////////////////////////////////////////////////

// function foo(wrapper) {
// 	wrapper.a = 42;
// }

// var obj = {
// 	a: 2
// };

// foo( obj );

// obj.a; // 42