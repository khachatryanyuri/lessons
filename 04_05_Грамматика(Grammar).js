///////////////////////else if/////////////////////////////////

// if (a) {
// 	// ..
// }
// else if (b) {
// 	// ..
// }
// else {
// 	// ..
// }
// ////////////////////////////////////////////
// if (a) {
// 	// ..
// }
// else {
// 	if (b) {
// 		// ..
// 	}
// 	else {
// 		// ..
// 	}
// }


//////////////////////////////////////////////////////

// var a = 42;
// var b = "foo";
// var c = false;

// var d = a && b || c ? c || b ? a : c && b : a;

// console.log(d);

///////////////////////////////////////////////////////

// true ? false : true ? true : true;		// false

// true ? false : (true ? true : true);	// false
// (true ? false : true) ? true : true;	// true

///////////////////////////////////////////////////////

// true ? false : true ? true : false;		// false

// true ? false : (true ? true : false);	// false
// (true ? false : true) ? true : false;	// false


// /////////////////////????????????????????///////////////////////

// function foo( a = 42, b = a + 1 ) {
// 	console.log(
// 		arguments.length, a, b,
// 		arguments[0], arguments[1]
// 	);
// }

// foo();					// 0 42 43 undefined undefined
// foo( 10 );				// 1 10 11 10 undefined
// foo( 10, undefined );	// 2 10 11 10 undefined
// foo( 10, null );		// 2 10 null 10 null

// /////////////////////////////////////////////////////////////

// function foo(a) {
// 	a = 42;
// 	console.log( arguments[0] );
// }

// foo( 2 );	// 42 (связано)
// foo();		// undefined (не связано)


/////////////////////////try..finally////////////////////////

// function foo() {
// 	try {
// 		return 42;
// 	}
// 	finally {
// 		console.log( "Hello" );
// 	}

// 	console.log( "никогда не выполнится" );
// }

// console.log( foo() );
// // Hello
// // 42

/////////////////////////////////////////////////

// function foo() {
// 	try {
// 		throw 42;
// 	}
// 	finally {
// 		console.log( "Hello" );
// 	}

// 	console.log( "никогда не выполнится" );
// }

// console.log( foo() );
// // Hello
// // Uncaught Exception: 42

/////////////////////////////////////////////////////////

// function foo() {
// 	try {
// 		return 42;
// 	}
// 	finally {
// 		throw "Oops!";
// 	}

// 	console.log( "никогда не выполнится" );
// }

// console.log( foo() );
// // Uncaught Exception: Oops!

////////////////////////////////////////////////////

// function foo() {
// 	try {
// 		return 42;
// 	}
// 	finally {
// 		// здесь нет `return ..`, поэтому нет переопределения
// 	}
// }

// function bar() {
// 	try {
// 		return 42;
// 	}
// 	finally {
// 		// переопределяет вышестоящий `return 42`
// 		return;
// 	}
// }

// function baz() {
// 	try {
// 		return 42;
// 	}
// 	finally {
// 		// переопределяет вышестоящий `return 42`
// 		return "Hello";
// 	}
// }

// foo();	// 42
// bar();	// undefined
// baz();	// "Hello"



//////////////////////////////switch/////////////////////////

// switch (a) {
// 	case 1:
// 	case 2:
// 		// никогда не окажемся здесь
// 	default:
// 		console.log( "default" );
// 	case 3:
// 		console.log( "3" );
// 		break;
// 	case 4:
// 		console.log( "4" );
// }
// default
// 3

// Этот фрагмент работает так: сначала обходятся все case в поиске совпадения, 
// и когда их не находит, возвращается к варианту default и выполняет его. Но, 
// поскольку в нём нет break, он продолжает работу в ранее пропущенном case 3 до того, как встретит break.