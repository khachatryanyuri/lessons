//Предотвращение коллизий

//бесконечный цикл

// function foo() {
// 	function bar(a) {
// 		i = 3; // меняем `i` в окружающей области видимости цикла for-loop
// 		console.log( a + i );
// 	}

// 	for (var i=0; i<10; i++) {
// 		bar( i * 2 ); // упс, впереди бесконечный цикл!
// 	}
// }

// foo();

//var i = 3; исправило бы эту проблему (и создало бы ранее упоминавшееся объявление "затененной переменной" i).

// var a = 2;

// (function foo(){ // <-- вставляем это

// 	var a = 3;
// 	console.log( a ); // 3

// })(); // <-- и это

// console.log( a ); // 2


//??????????????????????//

// undefined = true; // устанавливаем мину для другого кода! остерегайтесь!

// (function IIFE( undefined ){

// 	var a;
// 	if (a === undefined) {
// 		console.log( "Undefined is safe here!" );
// 	}

// })();


// var foo = true;

// if (foo) {
// 	let bar = foo * 2;
// 	// bar = something( bar );
// 	console.log( bar );
// }

// console.log( bar );


////////////////////////////

// let (a = 2) {
// 	console.log( a ); // 2
// }

// console.log( a ); // ReferenceError