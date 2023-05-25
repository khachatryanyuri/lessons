// function foo() {
//   console.log( this.a );
// }

// var a = 2;

// (function(){
// 	"use strict";

// 	foo();
// })();

// function naaaame() {
//   var a = 15
// }

// function foo() {
//   console.log("a");
//   function bas() {
//     console.log("b");
//   }
//   function test () {
//     console.log("c");
//   }
//   bas()
//   test()
// }
// foo()
// console.log(a);
// var a = 1

// function foo() {
//   console.log(a);
//   var a = 2;
//   console.log(window.a);
//   console.log(a);
// }
// foo()

// function foo(a) {
//   return function baz(b) {
//     console.log(b);
//   }
// }
// foo(0)(1);

// let count = 0;
// function foo() {
//  if (count === 0) {
//    let count = 1;
//    console.log(count);
//  }
//  console.log(count);
// };
// foo();

// function createStack() {
//   const items = []
//   return {
//     push(item) {
//       items.push(item);
//     },
//     pop() {
//       return items.pop();
//     }
//   };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// // console.log(stack.pop()); // => 5
// // console.log(stack.items); // => [10]
// stack.items = [10, 100, 1000];
// // console.log(stack.items);

///////////////////////////////////////

// function foo() {
//   console.log(this);
// }
// foo()

// let obj2 = {
//   name: "Gor",
// };

// let obj = {
//   name: "David",
//   sayName: () => {
//     console.log(this.name);
//   },
// };
// obj.sayName.apply(obj2);
// obj.sayName();



// const shape = {
//   radius: 10,
//   diameter() {
//     const perimeter = () => 2 * this.radius
//     console.log(perimeter());
//     return this.radius * 2;
//   },
// };
// console.log(shape.diameter());



// function booWho(bool) {
//   if (bool === true || bool >= false) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(booWho(null));


