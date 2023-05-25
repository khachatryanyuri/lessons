/*Замыкание — это когда функция умеет запоминать и имеет доступ к лексической области видимости 
даже тогда, когда эта функция выполняется вне своей лексической области видимости.*/

////////////////////////////////////

// function foo() {
//   var a = 2;

//   function bar() {
//     console.log(a);
//   }
//   return bar;
// }
// var baz = foo();
// baz();

//////////////////////////////////

// var fn;

// function foo() {
//   var a = 2;

//   function baz() {
//     console.log(a);
//   }
//   fn = baz; // присваиваем `baz` глобальной переменной
// }

// function bar() {
//   fn(); // замыкание
// }
// foo();
// bar(); // 2

/////////////////////////////

// function wait(message) {

// 	setTimeout( function timer(){
// 		console.log( message );
// 	}, 1000 );

// }

// wait( "Привет, замыкание!" );

///////////////////////////////

// for (var i=1; i<=5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i );
// 	}, i*1000 );
// }

// for (var i=1; i<=5; i++) {
// 	(function(j){
// 		setTimeout( function timer(){
// 			console.log( j );
// 		}, j*1000 );
// 	})( i );
// }

///////////////////////////////////

// function CoolModule() {
// 	var something = "cool";
// 	var another = [1, 2, 3];

// 	function doSomething() {
// 		console.log( something );
// 	}

// 	function doAnother() {
// 		console.log( another.join( " ! " ) );
// 	}

// 	return {
// 		doSomething: doSomething,
// 		doAnother: doAnother
// 	};
// }

// var foo = CoolModule();

// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3

////////////////////////////////////

var MyModules = (function Manager() {
	var modules = {};

	function define(name, deps, impl) {
		for (var i=0; i<deps.length; i++) {
			deps[i] = modules[deps[i]];
		}
		modules[name] = impl.apply( impl, deps );
	}

	function get(name) {
		return modules[name];
	}

	return {
		define: define,
		get: get
	};
})();

MyModules.define( "bar", [], function(){
	function hello(who) {
		return "Let me introduce: " + who;
	}

	return {
		hello: hello
	};
} );

MyModules.define( "foo", ["bar"], function(bar){
	var hungry = "hippo";

	function awesome() {
		console.log( bar.hello( hungry ).toUpperCase() );
	}

	return {
		awesome: awesome
	};
} );

var bar = MyModules.get( "bar" );
var foo = MyModules.get( "foo" );

console.log(
	bar.hello( "hippo" )
); // Let me introduce: hippo

foo.awesome(); // LET ME INTRODUCE: HIPPO