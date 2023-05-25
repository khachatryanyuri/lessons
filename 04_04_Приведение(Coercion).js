///////////////////////ToString////////////////////

// // умножим `1.07` на `1000` семь раз
// var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;

// // семь раз по три цифры => 21 цифра
// a.toString(); // "1.07e21"

// var a = [1,2,3];

// a.toString(); // "1,2,3"



////////////////////stringify/////////////////////


JSON.stringify( 42 );	// "42"
JSON.stringify( "42" );	// ""42"" (строка с закавыченным строковым значением)
JSON.stringify( null );	// "null"
JSON.stringify( true );	// "true"
JSON.stringify( undefined );					// undefined
JSON.stringify( function(){} );					// undefined
JSON.stringify( [1,undefined,function(){},4] );	// "[1,null,null,4]"
JSON.stringify( { a:2, b:function(){} } );		// "{"a":2}"

///////////////////////////////////////////

// var a = {
// 	val: [1,2,3],

// 	// вероятно, правильно!
// 	toJSON: function(){
// 		return this.val.slice( 1 );
// 	}
// };

// var b = {
// 	val: [1,2,3],

// 	// вероятно, неправильно!
// 	toJSON: function(){
// 		return "[" +
// 			this.val.slice( 1 ).join() +
// 		"]";
// 	}
// };

// JSON.stringify( a ); // "[2,3]"

// JSON.stringify( b ); // ""[2,3]""


////////////////json replacer//////////////////

// var a = {
// 	b: 42,
// 	c: "42",
// 	d: [1,2,3]
// };

// JSON.stringify( a, ["b","c"] ); // "{"b":42,"c":"42"}"

// JSON.stringify( a, function(k,v){
// 	if (k !== "c") return v;
// } );
// // "{"b":42,"d":[1,2,3]}"



////////////////////ToNumber/////////////////////


// var a = {
// 	valueOf: function(){
// 		return "42";
// 	}
// };

// var b = {
// 	toString: function(){
// 		return "42";
// 	}
// };

// var c = [4,2];
// c.toString = function(){
// 	return this.join( "" );	// "42"
// };

// Number( a );			// 42
// Number( b );			// 42
// Number( c );			// 42
// Number( "" );			// 0
// Number( [] );			// 0
// Number( [ "abc" ] );	// NaN



//////////////////ToBoolean/////////////////////

// var a = "false";
// var b = "0";
// var c = "''";
// var d = Boolean( a && b && c );//true

// var a = [];				// пустой array -- правдивое или ложное?
// var b = {};				// пустой object -- правдивое или ложное?
// var c = function(){};	// пустая function -- правдивое или ложное?
// var d = Boolean( a && b && c ); // true


////////////////////////String<--->Number//////////////

// var a = 42;
// var b = String( a );

// var c = "3.14";
// var d = Number( c );

// b; // "42"
// d; // 3.14

///////////////////////////////////////////////

// var a = 42;
// var b = a.toString();

// var c = "3.14";
// var d = +c;

// b; // "42"
// d; // 3.14

///////////////////////parseInt//////////////////////

// var a = "42";
// var b = "42px";

// Number( a );	// 42a
// parseInt( a );	// 42

// Number( b );	// NaN
// parseInt( b );	// 42

// parseInt( 0.000008 );		// 0   ("0" из "0.000008")
// parseInt( 0.0000008 );		// 8   ("8" из "8e-7")
// parseInt( false, 16 );		// 250 ("fa" из "false")
// parseInt( parseInt, 16 );	// 15  ("f" из "function..")

// parseInt( "0x10" );			// 16
// parseInt( "103", 2 );		// 2

////////////////////parseFloat(..)//////////////////////

// var a = "42";
// var b = "42.45px";

// Number( a );	// 42a
// parseInt( a );	// 42

// Number( b );	// NaN
// parseFloat( b );	// 42.45

////////////////////////////////////////////////////////

// var a = 42;
// var b = "abc";
// var c;
// var d = null;

// if ((a && d) || c) {
// 	console.log( "угу" );		// угу
// }

///////////////////////////////////////////

// var a = null;
// var b = Object( a );	// same as `Object()`
// a == b;					// false

// var c = undefined;
// var d = Object( c );	// same as `Object()`
// c == d;					// false

// var e = NaN;
// var f = Object( e );	// same as `new Number( e )`
// e == f;					// false

//////////////////////////////////////////////////////////////

// "0" == null;			// false
// "0" == undefined;		// false
// "0" == false;			// true -- О-О-О!
// "0" == NaN;				// false
// "0" == 0;				// true
// "0" == "";				// false

// false == null;			// false
// false == undefined;		// false
// false == NaN;			// false
// false == 0;				// true -- О-О-О!
// false == "";			// true -- О-О-О!
// false == [];			// true -- О-О-О!
// false == {};			// false

// "" == null;				// false
// "" == undefined;		// false
// "" == NaN;				// false
// "" == 0;				// true -- О-О-О!
// "" == [];				// true -- О-О-О!
// "" == {};				// false

// 0 == null;				// false
// 0 == undefined;			// false
// 0 == NaN;				// false
// 0 == [];				// true -- О-О-О!
// 0 == {};				// false
// 2 == [2];		// true

// "" == [null];	// true
// 0 == "\n";		// true

//////////////////////////????????????????///////////////////////

// Number.prototype.valueOf = function() {
// 	return 3;
// };

// new Number( 2 ) == 3;	// true

///////////////////////////////////////////////

// var i = 2;

// Number.prototype.valueOf = function() {
// 	return i++;
// };

// var a = new Number( 42 );

// if (a == 2 && a == 3) {
// 	console.log( "Да, это случилось." );
// }


///////////////////////////////////////////////

// var a = { b: 42 };
// var b = { b: 43 };

// a < b;	// false
// a == b;	// false
// a > b;	// false

// a <= b;	// true
// a >= b;	// true