// const TAX_RATE = 0.08;

// function calculateFinalPurchaseAmount(amt) {
// 	// вычисляем новую сумму с налогом
// 	amt = amt + (amt * TAX_RATE);

// 	// возвращаем новую сумму
// 	return amt;
// }

// console.log(calculateFinalPurchaseAmount(5));

// var a = [1,2,3];
// var b = [1,2,3];
// var c = "1,2,3";

// console.log(a == c) // true
// console.log(b == c) // true
// console.log(a == b)	// false

// console.log(a === c) // false
// console.log(b === c) // false
// console.log(a === b)	// false

// var foo = function (a) {
//   console.log(a);
// };

// var x = function bar(a) {
//   console.log(a);
// };

// foo(15);

// x(16);


//////////////////this/////////////////////

// function foo() {
// 	console.log( this.bar );
// }

// var bar = "global";

// var obj1 = {
// 	bar: "obj1",
// 	foo: foo
// };

// var obj2 = {
// 	bar: "obj2"
// };

// //--------

// foo();				// "global"
// obj1.foo();			// "obj1"
// foo.call( obj2 );	// "obj2"
// new foo();			// undefined

/*Есть четыре правила того, как устанавливается this, и они показаны в этих четырех последних строках кода.

foo() присваивает в this ссылку на глобальный объект в нестрогом режиме. В строгом режиме, this будет undefined, и вы получите ошибку при доступе к свойству bar, поэтому "global" — это значение для this.bar.
obj1.foo() устанавливает this в объект obj1.
foo.call(obj2) устанавливает this в объект obj2.
new foo() устанавливает this в абсолютно новый пустой объект.*/

//Полифиллинг (polyfilling) (Ручная проверка)
// if (!Number.isNaN) {
// 	Number.isNaN = function isNaN(x) {
// 		return x !== x;
// 	};
// }
//Транспиляция (Transpiling)

// Babel (https://babeljs.io) (бывший 6to5): Транспилирует из ES6+ в ES5
// Traceur (https://github.com/google/traceur-compiler): Транспилирует из ES6, ES7 и далее в ES5