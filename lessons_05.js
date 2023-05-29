// // What will be the output, why ?

// // 1.
// console.log(10);

// setTimeout(function () {
//   console.log(20);
// }, 1000);

// setTimeout(function () {
//   console.log(30);
// }, 0);

// console.log(40);

// // 10 40 30 20, In the event loop, console.logs have priority, then according to the given time.

// // 2.
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("success");
// });

// promise1.then(() => {
//   console.log(3);
// });

// console.log(4);

// // 1 4 3   the constructor function is called immediately, so it immediately prints 1,
// then console.log(4) have priority, then promise1.then

// // 3.
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });
// promise1.then(() => {
//   console.log(3);
// });
// console.log(4);

// // 1 4, the constructor function is called immediately, so it immediately prints 1,
// // then console.log(4) have priority, then promise1.then not starting because new
// // Promise constructor font hav any logic resolve, reject

// // 4.
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("resolve1");
// });

// const promise2 = promise1.then((res) => {
//   console.log(res);
// });

// console.log("promise1:", promise1);
// console.log("promise2:", promise2);

// // 5.
// const fn = () => new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
// });

// fn().then((res) => {
//   console.log(res);
// });

// console.log(2);

// // 6.
// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//   console.log("resolve");
// });

// console.log("end");

// //start end resolve setTimeout   first work console.log In the event loop have priority,
// //Promise is a microtask and hav priority with macrotask(setTimeout)

// 7.
// const promise = new Promise((resolve, reject) => {
//   console.log(1);

//   setTimeout(() => {
//     console.log("timerStart");

//     resolve("success");

//     console.log("timerEnd");
//   }, 0);

//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

//1 2 4 timerStart  timerEnd success, the constructor function is called immediately, so it immediately prints 1 and 2,
//then working console.log(4); then working mikrotask promise.then, after executing the microtask,
//the event loop checks the macro task queu, and type timerStart and timerEnd, then type success,
// The resolve function is called inside the setTimeout callback, which fulfills the promise with the value "success".

// 8.

// const timer1 = setTimeout(() => {
//   console.log("timer1");

//   const timer3 = setTimeout(() => {
//     console.log("timer3");
//   }, 0);

// }, 0);

// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);

// console.log("start");

// start timer1 timer2 timer3,  type console.log In the event loop, console.logs have priority,
// firs event loop reserved const timer1 = setTimeout to macrotasc, then reserved const timer2 = setTimeout, and when call
//timer1 = setTimeout reserved const timer3 = setTimeout.

// // 9.
// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//   });
// }, 0);
// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);
// console.log("start");

// //start, timer1 promise1 timer2, type console.log In the event loop, console.logs have priority,
// //when starting code firs reserve const timer1 = setTimeout from macrotask, then reserved const timer2
// //when working timer1, promise1 reserving in microtask and when end work timer, called promise1(In the event loop,
// // promise have priority)

// // 10.
// const promise1 = Promise.resolve().then(() => {
//   console.log("promise1");
//   const timer2 = setTimeout(() => {
//     console.log("timer2");
//   }, 0);
// });
// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   const promise2 = Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }, 0);
// console.log("start");

// //start promise1 timer1 promise2 timer2
// //type console.log In the event loop, console.logs have priority,
// //when code worked promise1 go to microtask, timer1 go to macrotask, first working promise1(have priority), 
// //timer2 go to macrotask, then worked timer1 and promise2 go tu microtask, and worked(have priority), 
// //then worked timer2


// // 11.
// const promise1 = new Promise((resolve, reject) => {
//   const timer1 = setTimeout(() => {
//     resolve("success");
//   }, 1000);
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// });

// console.log("promise1", promise1);
// console.log("promise2", promise2);

// const timer2 = setTimeout(() => {
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);
