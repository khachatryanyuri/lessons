// function timeoutify(fn,delay) {
// 	var intv = setTimeout( function(){
// 			intv = null;
// 			fn( new Error( "Timeout!" ) );
// 		}, delay )
// 	;

// 	return function() {
// 		// timeout уже произошёл?
// 		if (intv) {
// 			clearTimeout( intv );
// 			fn.apply( this, [ null ].concat( [].slice.call( arguments ) ) );
// 		}
// 	};
// }

// function foo(err,data) {
// 	if (err) {
// 		console.error( err );
// 	}
// 	else {
// 		console.log( data );
// 	}
// }

// ajax( "http://some.url.1", timeoutify( foo, 500 ) );



///////////////////////////////////////////////////////

function asyncify(fn) {
	var orig_fn = fn,
		intv = setTimeout( function(){
			intv = null;
			if (fn) fn();
		}, 0 )
	;

	fn = null;

	return function() {
		// срабатывает слишком быстро, прежде чем сработает таймер 
        // `intv`, чтобы показать, что асинхронный ход прошел?
		if (intv) {
			fn = orig_fn.bind.apply(
				orig_fn,
                // добавляем `this` обёртки к `bind(..)`
                // параметры вызова, а также каррирование любых
                // передается в параметрах
				[this].concat( [].slice.call( arguments ) )
			);
		}
        // уже асинхронно
		else {
			// вызвать исходную функцию
			orig_fn.apply( this, arguments );
		}
	};
}

function result(data) {
	console.log( a );
}

var a = 0;

ajax( "..pre-cached-url..", asyncify( result ) );
a++;