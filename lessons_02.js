// Ի՞նչ կարտածվի console-ում, ինչու՞ (1-15):

//----------1-----------

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter()); // կտպի 20, տվյալ դեպքում this-ը դիմում է օբյեկտի radius փոփոխականին
// console.log(shape.perimeter()); // կտպի NaN, տվյալ դեպքում this-ը դիմում է window֊ին

//----------2-----------

// let a = 3;  //type number
// let b = new Number(3); // //type object
// let c = 3; //type number

// console.log(a == b);//true
// console.log(a === b);//false
// console.log(b === c);//false

//2 == չի տիպերը չի ստուգում, 3 հավասարը համեմատում է նաև տիպերը։

//----------3-----------

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia); //Person { firstName: 'Lydia', lastName: 'Hallie' }
// console.log(sarah); //undefined(new չենք օգտագործել)

//new-ն օգտագործվում է JavaScript-ում՝ կոնստրուկտոր ֆունկցիայից օբյեկտ ստեղծելու համար։
//new-ն  պետք է տեղադրվի կոնստրուկտորի ֆունկցիայի կանչից առաջ, կանի հետևյալ գործողությունները.
//Ստեղծում է նոր օբյեկտ
//Այս օբյեկտի նախատիպը սահմանում է կոնստրուկտորի ֆունկցիայի նախատիպի հատկությանը
//Այս բանալի բառը կապում է նոր ստեղծված օբյեկտի հետ և կատարում կոնստրուկտորի ֆունկցիան
//Վերադարձնում է նոր ստեղծված օբյեկտը

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

//կտպի Hmm.. You don't have an age I guess
//տվյալ object-ները պահվում են ram-ում տարբեր հասցեներով

//----------5-----------

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// կտպի 456։
// Օբյեկտների key-երը ավտոմատ կերպով վերածվում են տողերի:
// Մենք փորձում ենք օբյեկտ դնել որպես բանալի a օբյեկտի համար՝ 123 արժեքով։
// key-ը դառնեւմ է «[object Object]»,
// Այսպիսով a["[object Object]"] = 123:
// հետո, a["[object Object]"] = 456:

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

// ունենք constructor որը ստեղծում է count և increment որը գործողություն է անում count-ի հետ։
// const counterTwo = counterOne; հատվածով հղվում ենք նույն հասցեի վրա, այդ իսկ պատճարով տպում է 3

//----------7-----------

// const object = {
//   message: "Hello, World!",
//   getMessage() {
//     const message = "Hello, Earth!";
//     return this.message;
//   },
// };
// console.log(object.getMessage());

//this-ը դիմում է object-ի message-ին այդ իսկ պատճարով կտպի "Hello, World!"

//----------8-----------

// function Pet(name) {
//   this.name = name;
//   this.getName = () => this.name;
// }
// const cat = new Pet("Fluffy");
// console.log(cat.getName());//Fluffy, () => ֆունկցիայում this-ը դիմում է իրենից վերև գտնվող արաջին this
// const { getName } = cat;
// console.log(getName());//Fluffy

//----------9-----------

// const object = {
//   message: "Hello, World!",
//   logMessage() {
//     console.log(this.message); // What is logged?
//   },
// };
// setTimeout(object.logMessage, 1000);

//setTimeout() ստեղծում է object.logMessage-ը որպես սովորական ֆունկցիա, այլ ոչ թե մեթոդ:
//Իսկ սովորական ֆունկցիայի կանչի ժամանակ հղվում է գլոբալ օբյեկտին(window)
//Ահա թե ինչու console.log(this.message) ներսում logMessage մեթոդը գրանցում է window.message-ը, որն անորոշ է:

//խնդրի լուծում
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
// console.log(object.greet()); //Hello, World!
// console.log(object.farewell());//Goodbye, undefined!    //() => ֆունկցայի և տվյալ դեպքում this դիմում է window-ին

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

// իմ հասկանալով պետքա 4 տպի բայց undefined տպում, քննարկենք

//----------12-----------

//Քնարկենք

// const call = {
//   caller: "mom",
//   says: function () {
//     console.log(`Hey, ${this.caller} just called.`);
//   },
// };

// let newCall = call.says;//վերագրվում է հասցեին
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
