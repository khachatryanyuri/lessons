/////////////////////////////////////

// function foo(num) {
// 	console.log( "foo: " + num );

// 	// Отслеживаем сколько раз `foo` была вызвана
// 	this.count++;
// }

// foo.count = 0;

// var i;

// for (i=0; i<10; i++) {
// 	if (i > 5) {
// 		foo( i );
// 	}
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9

// // Сколько раз была вызвана `foo`?
// console.log( foo.count ); // 0 -- WTF?

////medium methods///////////

// function foo(num) {
// 	console.log( "foo: " + num );

// 	// следим, сколько раз вызывается функция
// 	foo.count++;
// }

// foo.count = 0;

// var i;

// for (i=0; i<10; i++) {
// 	if (i > 5) {
// 		foo( i );
// 	}
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9

// // сколько раз `foo` была вызвана?
// console.log( foo.count ); // 4

////true methods///////////

// function foo(num) {
// 	console.log( "foo: " + num );

// 	// следим, сколько раз вызывается функция
// 	// Заметьте: `this` теперь действительно ссылается на `foo`, это основано на том,
// 	// как `foo` вызывается (см. ниже)
// 	this.count++;
// }

// foo.count = 0;

// var i;

// for (i=0; i<10; i++) {
// 	if (i > 5) {
// 		// используя `call(..)` мы гарантируем что `this`
// 		// ссылается на объект функции (`foo`) изнутри
// 		foo.call( foo, i );
// 	}
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9

// // сколько раз `foo` была вызвана?
// console.log( foo.count ); // 4