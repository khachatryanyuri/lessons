// Ի՞նչ կարտածվի console-ում, ինչու՞ (1-15):

//----------1-----------

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * shape.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

//----------2-----------

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);
// console.log(typeof b);
// console.log(typeof a);

//----------3-----------

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);
// console.log(sarah);

//----------4-----------

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//   } else {
//     console.log("Hmm.. You don't have an age I guess");
//   }
// }

// checkAge({ age: 18 });

//----------5-----------

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

//----------6-----------

// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count);

//----------7-----------

// const object = {
//   message: "Hello, World!",
//   getMessage() {
//     const message = "Hello, Earth!";
//     return this.message;
//   },
// };
// console.log(object.getMessage());

//----------8-----------

// function Pet(name) {
//   this.name = name;
//   this.getName = () => this.name;
// }
// const cat = new Pet("Fluffy");
// console.log(cat.getName());
// const { getName } = cat;
// console.log(getName());

//----------9-----------

// const object = {
//   message: "Hello, World!",
//   logMessage() {
//     console.log(this.message); // What is logged?
//   },
// };
// setTimeout(object.logMessage, 1000);

// setTimeout(function () {
//   object.logMessage();
// }, 1000);

//----------10-----------

// const object = {
//   who: "World",
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   },
// };
// console.log(object.greet());
// console.log(object.farewell());

//----------11-----------

// var length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };
// object.method(callback, 1, 2);

//----------12-----------

// const call = {
//   caller: "mom",
//   says: function () {
//     console.log(`Hey, ${this.caller} just called.`);
//   },
// };

// let newCall = call.says;

// newCall();

// let newCall1 = call.says();

// newCall1;

//----------13-----------

// function logThis() {
//   console.log(this);
// }

// const myObj = {
//   logThis,
// };

// myObj.logThis();

//----------14-----------

// function logThis() {
//   console.log(this);
// }

// const myObj = {
//   foo: function () {
//     logThis();
//   },
// };

// myObj.foo();

//----------15-----------

// const logThis = () => {
//   console.log(this);
// };

// const myObj = {
//   foo: logThis,
// };

// myObj.foo();

//----------16-----------

// function logThis() {
//   console.log(this);
// }

// const someObj = new logThis();
