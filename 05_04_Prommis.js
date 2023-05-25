// function add(xPromise,yPromise) {
// 	// `Promise.all([ .. ])` takes an array of promises,
// 	// and returns a new promise that waits on them
// 	// all to finish
// 	return Promise.all( [xPromise, yPromise] )

// 	// when that promise is resolved, let's take the
// 	// received `X` and `Y` values and add them together.
// 	.then( function(values){
// 		// `values` is an array of the messages from the
// 		// previously resolved promises
// 		return values[0] + values[1];
// 	} );
// }

// // `fetchX()` and `fetchY()` return promises for
// // their respective values, which may be ready
// // *now* or *later*.
// add( fetchX(), fetchY() )

// // we get a promise back for the sum of those
// // two numbers.
// // now we chain-call `then(..)` to wait for the
// // resolution of that returned promise.
// .then( function(sum){
// 	console.log( sum ); // that was easier!
// } );


//////////////////////////////////////////////

// if (
// 	p !== null &&
// 	(
// 		typeof p === "object" ||
// 		typeof p === "function"
// 	) &&
// 	typeof p.then === "function"
// ) {
// 	// assume it's a thenable!
// }
// else {
// 	// not a thenable
// }


////////////////////////////////////////////////

// a utility for timing out a Promise
// function timeoutPromise(delay) {
// 	return new Promise( function(resolve,reject){
// 		setTimeout( function(){
// 			reject( "Timeout!" );
// 		}, delay );
// 	} );
// }

// // setup a timeout for `foo()`
// Promise.race( [
// 	foo(),					// attempt `foo()`
// 	timeoutPromise( 3000 )	// give it 3 seconds
// ] )
// .then(
// 	function(){
// 		// `foo(..)` fulfilled in time!
// 	},
// 	function(err){
// 		// either `foo()` rejected, or it just
// 		// didn't finish in time, so inspect
// 		// `err` to know which
// 	}
// );


//////////////////////////////////////////////////////

// var p = Promise.resolve( 21 );

// var p2 = p.then( function(v){
// 	console.log( v );	// 21

// 	// fulfill `p2` with value `42`
// 	return v * 2;
// } );

// // chain off `p2`
// p2.then( function(v){
// 	console.log( v );	// 42
// } );

///////////////////////////////////////////////

// var p = Promise.resolve( 21 );

// p
// .then( function(v){
// 	console.log( v );	// 21

// 	// fulfill the chained promise with value `42`
// 	return v * 2;
// } )
// // here's the chained promise
// .then( function(v){
// 	console.log( v );	// 42
// } );

//////////////////////////////////////////////

// var p = Promise.resolve( 21 );

// p.then( function(v){
// 	console.log( v );	// 21

// 	// create a promise and return it
// 	return new Promise( function(resolve,reject){
// 		// fulfill with value `42`
// 		resolve( v * 2 );
// 	} );
// } )
// .then( function(v){
// 	console.log( v );	// 42
// } );

/////////////////////////////////////////////////

// var p = Promise.resolve( 21 );

// p.then( function(v){
// 	console.log( v );	// 21

// 	// create a promise to return
// 	return new Promise( function(resolve,reject){
// 		// introduce asynchrony!
// 		setTimeout( function(){
// 			// fulfill with value `42`
// 			resolve( v * 2 );
// 		}, 1000 );
// 	} );
// } )
// .then( function(v){
// 	// runs after the 100ms delay in the previous step
// 	console.log( v );	// 42
// } );

//////////////////////////////////////////////////

// function delay(time) {
// 	return new Promise( function(resolve,reject){
// 		setTimeout( resolve, time );
// 	} );
// }

// delay( 100 ) // step 1
// .then( function STEP2(){
// 	console.log( "step 2 (after 100ms)" );
// 	return delay( 200 );
// } )
// .then( function STEP3(){
// 	console.log( "step 3 (after another 200ms)" );
// } )
// .then( function STEP4(){
// 	console.log( "step 4 (next Job)" );
// 	return delay( 50 );
// } )
// .then( function STEP5(){
// 	console.log( "step 5 (after another 50ms)" );
// } )


///////////////////////////////////////////////////


// var p1 = request( "http://some.url.1/" );
// var p2 = request( "http://some.url.2/" );

// Promise.all( [p1,p2] )
// .then( function(msgs){
// 	// both `p1` and `p2` fulfill and pass in
// 	// their messages here
// 	return request(
// 		"http://some.url.3/?v=" + msgs.join(",")
// 	);
// } )
// .then( function(msg){
// 	console.log( msg );
// } );


/////////////////////////////////////////////////

// function getY(x) {
// 	return new Promise( function(resolve,reject){
// 		setTimeout( function(){
// 			resolve( (3 * x) - 1 );
// 		}, 100 );
// 	} );
// }

// function foo(bar,baz) {
// 	var x = bar * baz;

// 	return getY( x )
// 	.then( function(y){
// 		// wrap both values into container
// 		return [x,y];
// 	} );
// }

// foo( 10, 20 )
// .then( function(msgs){
// 	var x = msgs[0];
// 	var y = msgs[1];

// 	console.log( x, y );	// 200 599
// } );