// -----------1---------------

// function foo(a) {
//   a = 5;
//   console.log(a);
//   return function baz(b) {
//     console.log(a * 5);
//   };
// }
// foo(0)(1);
// let k = foo(0);
// k(5);

// -----------2---------------

// let count = 0;
// function foo() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// }
// foo();

// -----------3---------------

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
// }

// for (var j = 0; j < 3; j++) {
//   (function (k) {
//     setTimeout(function log() {
//       console.log(k);
//     }, 1000);
//   })(j);
// }

// -----------4---------------

// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }

//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }

//   return [increment, log];
// }

// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();
