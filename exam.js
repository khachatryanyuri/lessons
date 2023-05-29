// // 1 What will this code print?
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const obj2 = {
//   ...obj,
//   a: 0,
// };

// console.log(obj2.a, obj2.b);

//type 0 2, սպռեդով հղում է ուղարկում obj օբյեկտի վրա,a:0 փոխում է obj: արժեքը

// // 2 Which statement prints "roar" to the console?

// var bear = { sound: "roar" };
// function roar() {
//   var sound = "grunt";
//   console.log(this.sound);
// }
// roar();

// // //grunt, տվյալ պարագայում var sound = "grunt", window-ում ստեղծում է sound փոփոխականը,
// // //իսկ function roar()֊ի this դիմում է window-ին

// // 3 What is the result of running this code?
// sum(10, 20);
// diff(10, 20);
// function sum(x, y) {
//   return x + y;
// }

// let diff = function (x, y) {
//   return x - y;
// };

// //sum(10, 20)֊30, diff(10, 20)-ReferenceError

// // 4 What is the result in the console of running the code shown?
// var Storm = function () { }; // ստեղծում ենք Storm function կոնստրուկտորը
// Storm.prototype.precip = 'rain'; // Storm-ի prototype-ի մեջ ստեղծում ենք rain-ը
// var WinterStorm = function () { };// ստեղծում ենք WinterStorm function կոնստրուկտորը
// WinterStorm.prototype = new Storm();// new աշխատում է հետևյալ կերպ, ստեղծում է նոր օբյեկտ, կապւմ է prototype, կապում է constructor-ը, կապում է this-ը, և վերադառձնում  է նոր  օբյեկտ
// WinterStorm.prototype.precip = 'snow';//փոխում ենք precip-ը rain-snow
// var bob = new WinterStorm();//ստեղծում ենք bob օբյեկտը
// console.log(bob.precip);//տպում ենք snow

// //կտպի snow,

// // 5 You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console.
// //  Which revised version of the code without changing 'var' would result in the value 1, 2, 3 and 4 being logged?
// for (var i = 1; i <= 4; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 10000);
// }

// //կտպի 5 ամեն 10 վարկյան, ընդհանուր 4 հատ, var-ի պատճարով
// //եթե ցանկանում ենք ուղել կարող ենք օգտագործել let, կամ փոփոխել կոդը

// for (var j = 1; j <= 4; j++) {
//   (function (k) {
//     setTimeout(function log() {
//       console.log(k);
//     }, j * 10000);
//   })(j);
// }

// // // 6 Which snippet could you add to this code to print "food" to the console?
// class Animal {
//   static belly = [];
//   eat() {
//     Animal.belly.push('food');
//   }
// }

// let a = new Animal();
// a.eat();
// console.log(Animal.belly); //Prints food

// 7  The built-in function setTimeout uses callbacks. Create a promise-based alternative.
// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(3000).then(() => console.log(('runs after 3 seconds')));

// // 8 Two functions – one object

// const obj = {}

// function A() { return obj}
// function B() { return obj}

// let a = new A();
// let b = new B();

// console.log(a == b); // true

// // Is it possible to create functions A and B so that new A() == new B()?
// //No

// 9 There’s a ladder object that allows to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     // shows the current step
//     alert(this.step);
//   },
// };

// Now, if we need to make several calls in sequence, can do it like this:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// // Modify the code of up, down and showStep to make the calls chainable, like this:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// // 10  What does this return?
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, 'two');
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
// //two, Promise.race վերադարձնում է ամենից արագ ավարտվողը

// // 11 What logs to console the following code snippet:
// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   }
// };
// object.method(callback, 1, 2);

// // 12 What logs to console the following code snippet:
// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message); // What is logged?
//   }
// };
// setTimeout(object.logMessage, 1000);

//դատարկ տող, տերմինալով undifined, logMessage this դիմում է window

// // 13 What is the equivalent of the following class in ES5?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     return "hello " + this.name;
//   }
// }

// const Person = function (options) {
//   this.name = options.name;
// };
// Person.prototype.hello = function () {
//   return "hello " + this.name;
// };

// // 14 What will be output of this code?

// const a = false && true && 1 && 4 && undefined;

// console.log(a);

//false վերադարձնում է առաջին  false

// 15 Can you explain what asynchronous programming is?

// // 16 What’s the output?
// async function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield Promise.resolve(i);
//   }
// }

// (async () => {
//   const gen = range(1, 3);
//   for await (const item of gen) {
//     console.log(item);
//   }
// })();

// // 17 Here the function makeUser returns an object.
// // What is the result of accessing its ref? Why?
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();
// console.log(user.ref.name); // What's the result?

// 18 Write an Array.prototype.map  implemention

// Array.prototype.myMap = function (callback, thisArg) {
//   if (this == null) {
//     throw new Error("Cant iterate over undefined or null");
//   }
//   let context = this;
//   let obj = Object(this);
//   if (arguments.length > 1) {
//     context = thisArg;
//   }
//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }
//   let len = obj.length;
//   let i = 0;
//   let newArray = [];
//   while (i < len) {
//     if (i in obj) {
//       newArray[i] = callback.call(context, this[i], i, obj);
//     }
//     i++;
//   }
//   return newArray
// };

// const sample = [1, 2, 3];
// const mapResult = sample.myMap(function (val) {
//   return val * 2;
// });

// console.log(mapResult);

// 19 Symbol in JS

// 20  How works js memory and garbage collector?




// ////////////////////////135 Candy/////////////////////////

// let ratings = [1,0,2];
// let candies = Array(ratings.length).fill(1);

// for (let i = 1; i < ratings.length; i++) {
//   if (ratings[i] > ratings[i - 1]) {
//     candies[i] = candies[i - 1] + 1;
//   }
// }

// for (let i = ratings.length - 2; i >= 0; i--) {
//   if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
//     candies[i] = candies[i + 1] + 1;
//   }
// }

// let sum = 0
// for (let i = 0; i < candies.length; i++) {
//   sum = sum + candies[i]
// }

// console.log(sum);

// //////////////////////////6.Zigzag Conversion////////////////////////////

// var convert = function (s, numRows) {
//   if (numRows == 1) {
//     return s;
//   }
//   let n = s.length;
//   let section = numRows * 2 - 2;
//   let res = "";

//   for (let row = 0; row < numRows; row++) {
//     let i = row;
//     while (i < n) {
//       res += s[i];
//       if (row != 0 && row != numRows - 1) {
//         let charsInBetween = section - 2 * row;
//         let secondIndex = i + charsInBetween;
//         if (secondIndex < n) {
//           res += s[secondIndex];
//         }
//       }
//       i += section;
//     }
//   }
//   return res;
// };

// console.log(convert("PAYPALISHIRING", 3));

//////////////////////////464. Can I Win/////////////////////////////

// var canIWin = function (maxChoosableInteger, desiredTotal) {
//   if (maxChoosableInteger > desiredTotal) {
//     return true;
//   }
//   if (((maxChoosableInteger + 1) * maxChoosableInteger) / 2 < desiredTotal) {
//     return false;
//   }
//   if (
//     maxChoosableInteger < desiredTotal &&
//     desiredTotal - maxChoosableInteger === 1
//   ) {
//     return false;
//   }

//   let arr = [];
//   for (let i = 1; i <= desiredTotal; i++) {
//     arr.push(i);
//   }

//   function generateCombinations(num) {
//     const combinations = [];

//     for (let i = 1; i < num; i++) {
//       for (let j = i + 1; j <= num; j++) {
//         combinations.push([i, j]);
//       }
//     }
//     for (let i = num; i > 0; i--) {
//       for (let j = i - 1; j > 0; j--) {
//         combinations.push([i, j]);
//       }
//     }
//     return combinations;
//   }

//   const combinations = generateCombinations(maxChoosableInteger);

//   function canFirstPlayerWin(
//     maxChoosableInteger,
//     desiredTotal,
//     arr,
//     combinations
//   ) {
//     for (let i = 0; i < combinations.length; i++) {
//       let newCombinations = [...combinations];
//       let newDesiredTotal = desiredTotal;
//       let newArr = [...arr];

//       while (newCombinations.length > 0) {
//         let a = newCombinations[i][0];
//         let b = newCombinations[i][0];
//         newDesiredTotal = newDesiredTotal - a - b;
//         for (let j = 0; j < newArr.length; j++) {
//           if (
//             newArr[j] === newCombinations[i][0] ||
//             newArr[j] === newCombinations[i][1]
//           ) {
//             newArr.splice(j, 1);
//           }
//         }
//         if (maxChoosableInteger > newDesiredTotal) {
//           for (let q = 0; q < newArr.length; q++) {
//             if (maxChoosableInteger - newDesiredTotal === newArr[q]) {
//               return true;
//             }
//           }
//         }


//         for (let e = 0; e < newCombinations.length; e++) {
//           if (
//             newCombinations[i][0] === newCombinations[e][0] ||
//             newCombinations[i][0] === newCombinations[e][1] ||
//             newCombinations[i][1] === newCombinations[e][0] ||
//             newCombinations[i][1] === newCombinations[e][1]
//           ) {
//             newCombinations.splice(e, 1);
//           }
//         }
//         if (
//           ((maxChoosableInteger + 1) * maxChoosableInteger) / 2 <
//           newDesiredTotal
//         ) {
//           continue;
//         }
//         if (
//           maxChoosableInteger < newDesiredTotal &&
//           newDesiredTotal - maxChoosableInteger === 1
//         ) {
//           continue;
//         }
//       }
//     }
//     return false;
//   }

//   const result = canFirstPlayerWin(
//     maxChoosableInteger,
//     desiredTotal,
//     arr,
//     combinations
//   );

//   return result;
// };

// let maxChoosableInteger = 10;
// let desiredTotal = 40;
// console.log(canIWin(maxChoosableInteger, desiredTotal));

// //////////////////2700. Differences Between Two Objects///////////////

// let obj1 = { a: 1, v: 3, x: [], z: { a: null } };

// let obj2 = { a: 2, v: 4, x: [], z: { a: 2 } };

// let arr1 = Object.entries(obj1);
// let arr2 = Object.entries(obj2);
// // console.log(arr1);
// // console.log(arr2);
// let obj = {};

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i][0] === arr2[i][0] && arr1[i][1] !== arr2[i][1]) {
//     if (arr1[i][1].length === arr2[i][1].length && arr1[i][1].length === 0) {
//       continue;
//     }
//     let a = arr1[i][0]
//     obj[a] = [arr1[i][1], arr2[i][1]];
//   }
// }

// console.log(obj);
