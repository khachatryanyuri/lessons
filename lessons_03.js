// // ---------------1--------------

// // Տրված է՝

// class Person {}
// class Employee extends Person {}
// class Developer extends Employee {}
// const tom = new Developer();

// // Ի՞նչ արժեք կունենան հետևյալ տողերը, ինչու՞

// console.log(Object.getPrototypeOf(tom) === Developer.prototype);
// console.log(Object.getPrototypeOf(tom) === Employee.prototype);
// console.log(Developer.isPrototypeOf(tom));
// console.log(Developer.prototype.isPrototypeOf(tom));
// console.log(Employee.prototype.isPrototypeOf(tom));
// console.log(Person.prototype.isPrototypeOf(tom));
// console.log(Object.prototype.isPrototypeOf(tom));

// // ---------------2--------------

//Տրված է՝

// const a = () => {};
// function B() {}

// // Ի՞նչ արժեք կունենան հետևյալ տողերը, ինչու՞

// console.log(typeof a);
// console.log(typeof B);
// console.log(Object.getPrototypeOf(a));
// console.log(Object.getPrototypeOf(B));
// console.log(a.prototype);
// console.log(B.prototype);

// ---------------3--------------

// Ինչպես է աշխատում new keyword-ը ? Ի՞նչ գործողություններ է այն կատարում։

//new-ն օգտագործվում է JavaScript-ում՝ կոնստրուկտոր ֆունկցիայից օբյեկտ ստեղծելու համար։
//new-ն  պետք է տեղադրվի կոնստրուկտորի ֆունկցիայի կանչից առաջ, կանի հետևյալ գործողությունները.
//Ստեղծում է նոր օբյեկտ
//Այս օբյեկտի նախատիպը սահմանում է կոնստրուկտորի ֆունկցիայի նախատիպի հատկությանը
//Այս բանալի բառը կապում է նոր ստեղծված օբյեկտի հետ և կատարում կոնստրուկտորի ֆունկցիան
//Վերադարձնում է նոր ստեղծված օբյեկտը

// 4.
// Թարգմանեք հետևյալ կոդը ES5-ի (օգտագործեք function-ներ class-ի փոխարեն):

// class Person {
//  constructor(name) {
//    this.name = name;
//  }

//  sayHello() {
//    console.log(`Hello from ${this.name}`);
//  }
// }

// function Person (name) {
//   this.name = name,
//   this.sayHello = function () {
//     console.log(`Hello from ${this.name}`);
// }
// }

// const person = new Person('aaa');
// person.sayHello()

// ---------------5--------------

//Ստեղծեք object, որը չունի prototype:

// var dictionary = Object.create(null, {
//   destructor: { value: "A destructive element" }
// });

// function getDefinition(word) {
//   return dictionary[word];
// }

// // Outputs: "A destructive element"
// console.log(getDefinition("destructor"));

// // Outputs: undefined
// console.log(getDefinition("constructor"));

// ---------------6--------------

//Ներքևում գրված կոդն աշխատում է առանց խնդիրների, սակայն այն կարելի է ավելի լավացնել (օպտիմիզացնել): Գտե՛ք “խնդիրը” և ուղղե՛ք այն։

// function Hopar(name) {
//   this.name = name;
//   this.speak = function () {
//     console.log('Speaking:', this.name);
//   }
// }

// const a = new Hopar('a');
// const b = new Hopar('b');

// console.log(a.speak());
// console.log(b.speak());

//Փոփոխված

// function Hopar(name) {
//   this.name = name;
// }
// Hopar.prototype.speak = function() {
//   console.log('Speaking:', this.name)
// }

// const a = new Hopar('a');
// const b = new Hopar('b');

// console.log(a.speak());
// console.log(b.speak());

// Ստորև բոլոր խնդիրները գրեք և՛ class-ներով, և՛ Function Constructor-ներով

// ---------------7--------------

// Ստեղծեք Airplane class / կոնստրուկտոր ֆունկցիա, որը ստանում է name արգումենտ։

// Բոլոր airplane–ները (instance-ները) պետք է ունենան սեփական “isFlying” անունով property․ որի արժեքը նախնական “false” է
// Բոլոր airplane-ները պետք է ունենան “takeOff()” և “land()” մեթոդներ
// - Երբ ինքնաթիռը օդ է բարձրանում (takeOff), “isFlying”-ը պետք է դառնա true
// - Երբ ինքնաթիռը վայրէջք է կատարում (land), “isFlying”-ը պետք է դառնա false

//ES_5

// const Airplane = function (options) {
//   this.name = options.name;
//   this.isFlying = false;
// };
// Airplane.prototype.takeOff=function () {
//   this.isFlying=true
// }
// Airplane.prototype.land=function () {
//   this.isFlying=false
// }

// const airplane = new Airplane({name: "airplane"})
// console.log(airplane);
// airplane.takeOff()
// console.log(airplane);
// airplane.land()
// console.log(airplane);

//ES_6

// class Airplane {
//   constructor(options) {
//     this.name = options.name;
//     this.isFlying = false;
//   }
//   takeOff() {this.isFlying=true}
//   land() {this.isFlying=false}
// }

// const airplane = new Airplane({name: "airplane"})
// console.log(airplane);
// airplane.takeOff()
// console.log(airplane);
// airplane.land()
// console.log(airplane);

// ---------------8--------------

// Ստեղծեք Person class / կոնստրուկտոր ֆունկցիա, որը ստանում է name և age արգումենտներ։
// Բոլոր person-ները պետք է ունենան դատարկ զանգված (empty array)` “stomach”
// Ավելացրեք “eat” մեթոդ՝ eat(“uteliq”).
// - ուտել (eat) մեթոդը պետք է “uteliq”-ը ավելացնի “stomach”-ում
// - ամենաշատը կարելի է ուտել 10 ուտելիք (stomach.length)
// Ավելացրեք “clear” մեթոդ՝ clear().
// - clear-ը պետք է դատարկի stomach-ի պարունակությունը

//ES_5

// const Person = function (options) {
//   this.name = options.name;
//   this.age = options.age;
//   this.stomach = [];
// };
// Person.prototype.clear=function () {
//   this.stomach=[]
// }
// Person.prototype.eat=function (uteliq) {
//   this.stomach.push(uteliq)
//   if(this.stomach.length===11){
//     this.clear()
//   }
// }

// const persone = new Person({name: "airplane", age:25})
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')

// console.log(persone);

//ES_6

// class Person {
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.stomach = [];
//   }
//   clear() {
//     this.stomach = [];
//   }
//   eat(uteliq) {
//     this.stomach.push(uteliq);
//     if (this.stomach.length === 11) {
//       this.clear();
//     }
//   }
// }

// const persone = new Person({name: "airplane", age:25})
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')
// persone.eat('xndzor')

// console.log(persone);

// ---------------9-------------- (8.1).

// Եթե այս կետում գրենք՝
// const person1 = new Person('Person1', 14);
// console.log(person1.toString());
// Ի՞նչ կտեսնենք console-ում։ Ինչու՞։
// Գրե՛ք կոդ, որից հետո console.log(person1.toString()); արտահայտությունը console-ում կտպի տվյալ person-ի անունը և տարիքը, օր․՝ “Person1, 14”:

//es_5

// const Person = function (options) {
//   this.name = options.name;
//   this.age = options.age;
//   this.stomach = [];
// };
// Person.prototype.clear=function () {
//   this.stomach=[]
// }
// Person.prototype.eat=function (uteliq) {
//   this.stomach.push(uteliq)
//   if(this.stomach.length===11){
//     this.clear()
//   }
// }
// Person.prototype.toString = function() {
//   return `${this.name}, ${this.age}`;
// };
// const persone = new Person({name: "airplane", age:25})
// console.log(persone.toString())

//es_6
// class Person {
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.stomach = [];
//   }
//   clear() {
//     this.stomach = [];
//   }
//   eat(uteliq) {
//     this.stomach.push(uteliq);
//     if (this.stomach.length === 11) {
//       this.clear();
//     }
//   }
//   toString() {
//     return `${this.name}, ${this.age}`;
//   }
// }
// const person1 = new Person({ name: "Person1", age: 14 });
// console.log(person1.toString());

// ---------------10-------------- (8.2):

// Ստեղծեք Baby class / կոնստրուկտոր ֆունկցիա, որը ժառանգում է Person class-ը։
// Baby-ի կոնստրուկտորը, Person-ի հետ համեմատած, պետք է ստանա 1 ավել արգումենտ՝ “favoriteToy”։
// Person-ի մեթոդներից բացի, Baby-ն պետք է ունենա “play()” մեթոդ, որը կանչվելուց պետք է վերադարձնի string` “Playing with x”, որտեղ x-ը favoriteToy-ն է տվյալ instance-ի համար։

// es_5

// const Person = function (options) {
//   this.name = options.name;
//   this.age = options.age;
//   this.stomach = [];
// };
// Person.prototype.clear = function () {
//   this.stomach = [];
// };
// Person.prototype.eat = function (uteliq) {
//   this.stomach.push(uteliq);
//   if (this.stomach.length === 11) {
//     this.clear();
//   }
// };
// Person.prototype.toString = function () {
//   return `${this.name}, ${this.age}`;
// };
// const Baby = function (options) {
//   Person.apply(this, arguments);
//   this.favoriteToy = options.favoriteToy;
// };
// Baby.prototype = Object.create(Person.prototype);
// Baby.prototype.constructor = Baby;
// Baby.prototype.play = function () {
//   console.log("Playing with " + this.favoriteToy);
// };

// const baby = new Baby({ name: "baby", age: 1, favoriteToy: "bear" });
// console.log(baby);
// baby.play();

//es_6

// class Person {
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.stomach = [];
//   }
//   clear() {
//     this.stomach = [];
//   }
//   eat(uteliq) {
//     this.stomach.push(uteliq);
//     if (this.stomach.length === 11) {
//       this.clear();
//     }
//   }
//   toString() {
//     return `${this.name}, ${this.age}`;
//   }
// }

// class Baby extends Person {
//   constructor(options) {
//     super(options);
//     this.favoriteToy = options.favoriteToy;
//   }
//   play() {
//     console.log("Playing with " + this.favoriteToy);
//   }
// }

// const baby = new Baby({ name: "baby", age: 1, favoriteToy: "bear" });
// console.log(baby);
// baby.play();
// baby.eat('xndzor')
// console.log(baby);