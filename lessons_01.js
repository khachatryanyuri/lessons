// -----------1---------------

// function foo(a) {
//   // a = 5;
//   // console.log(a);
//   return function baz(b) {
//     console.log(a * 5);
//     return function zaz(c) {
//     console.log(c * 5);
//   };
//   };
// }
// foo(0)(5)(2);

// // կտպի 0, Սկոբերի տեսանելիություն։ baz ֆունկցիայի մեջ a փոփոխականը տեսանելի է բայց foo ֆունկցիայի մեջ, b փոփոխականը ոչ։

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

// // if մեջ գրված count այլ փոփոխական է և տեսանելի if-ից դուրս, պահվում է նոր հասցեով

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
//     console.log(count);
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

//կտպի 0
// let message = `Count is ${count}`; ֆիկսում է counti հասցեն և պահում սկզբնական արժեքը, 
//increment կանչելուց count++ պահում է արդեն նոր հասցեով։
