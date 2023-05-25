//////////////////Привязка по умолчанию//////////////////////

// function foo() {
//   console.log(this.a);
// }

// var a = 2;

// foo(); // 2

////////////////Явная привязка////////////////////

// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
// };

// foo.call(obj); // 2

/////////////////Жесткая привязка///////////////////

// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
// };

// var bar = function () {
//   foo.call(obj);
// };

// bar(); // 2
// setTimeout(bar, 100); // 2

// // `bar` жестко привязывает `this` в `foo` к `obj`
// // поэтому его нельзя перекрыть
// bar.call(window); // 2

///////////////////////////////////////////

// function foo(something) {
//   console.log(this.a, something);
//   return this.a + something;}

// var obj = {
//   a: 2,
// };
// var bar = foo.bind(obj);
// var b = bar(3); // 2 3
// console.log(b); // 5

/////////////////////"Контексты" в вызовах API/////////////////////////////

// function foo(el) {
// 	console.log( el, this.id );
// }

// var obj = {
// 	id: "awesome"
// };

// // используем `obj` как `this` для вызовов `foo(..)`
// [1, 2, 3].forEach( foo, obj ); // 1 awesome  2 awesome  3 awesome

////////////////////Что должно идти раньше: неявная привязка или явная привязка? //////////////////////

// function foo() {
// 	console.log( this.a );
// }

// var obj1 = {
// 	a: 2,
// 	foo: foo
// };

// var obj2 = {
// 	a: 3,
// 	foo: foo
// };

// obj1.foo(); // 2
// obj2.foo(); // 3

// obj1.foo.call( obj2 ); // 3
// obj2.foo.call( obj1 ); // 2

//явная привязка имеет приоритет над неявной привязкой

//////////////////////////new vs Жесткая привязка////////////////////////

// function foo(something) {
// 	this.a = something;
// }

// var obj1 = {};

// var bar = foo.bind( obj1 );
// bar( 2 );
// console.log( obj1.a ); // 2

// var baz = new bar( 3 );
// console.log( obj1.a ); // 2
// console.log( baz.a ); // 3

////////////////////////////////////////////////////////

////////////////////////Определяем this///////////////////

// Функция вызвана с new (привязка new)? Раз так, то this — новый сконструированный объект.
// var bar = new foo()

// Функция вызвана с call или apply (явная привязка), даже скрыто внутри жесткой привязки в bind? Раз так, 
// this — явно указанный объект.

// var bar = foo.call( obj2 )

// Функция вызвана с контекстом (неявная привязка), иначе называемым как владеющий или содержащий объект? 
// Раз так, this является тем самым объектом контекста.

// var bar = obj1.foo()

// В противном случае, будет this по умолчанию (привязка по умолчанию). 
// В режиме strict mode, это будет undefined, иначе будет объект global.


// var bar = foo()


///////////////////////Исключения привязок////////////////////////

// Если вы передаете null или undefined в качестве параметра привязки this в call, apply или bind, 
// то эти значения фактически игнорируются, а взамен к вызову применяется правило привязки по умолчанию.

// function foo() {
// 	console.log( this.a );
// }

// var a = 2;

// foo.call( 3 ); // 2

///////////////////////////////////////////////

// function foo(a,b) {
// 	console.log( "a:" + a + ", b:" + b );
// }

// // распакуем массив как параметры
// foo.apply( null, [2, 3] ); // a:2, b:3

// // каррируем с помощью `bind(..)`
// var bar = foo.bind( null, 2 );
// bar( 3 ); // a:2, b:3

////////

// function foo(a,b) {
// 	console.log( "a:" + a + ", b:" + b );
// }

// // наш пустой DMZ-объект
// var ø = Object.create( null );

// // распаковываем массив как параметры
// foo.apply( ø, [2, 3] ); // a:2, b:3

// // каррируем с помощью `bind(..)`
// var bar = foo.bind( ø, 2 );
// bar( 3 ); // a:2, b:3

// function foo() {
// 	console.log( this.a );
// }

// var a = 2;
// var o = { a: 3, foo: foo };
// var p = { a: 4 };

// o.foo(); // 3
// (p.foo = o.foo)(); // 2