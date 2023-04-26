// ---------------1--------------

// Տրված է՝

// class Person {}
// class Employee extends Person {}
// class Developer extends Employee {}
// const tom = new Developer();

// Ի՞նչ արժեք կունենան հետևյալ տողերը, ինչու՞

// Object.getPrototypeOf(tom) === Developer.prototype; // A
// Object.getPrototypeOf(tom) === Employee.prototype; // B
// Developer.isPrototypeOf(tom); // C
// Developer.prototype.isPrototypeOf(tom); // D
// Employee.prototype.isPrototypeOf(tom); // E
// Person.prototype.isPrototypeOf(tom); // F
// Object.prototype.isPrototypeOf(tom); // G

// ---------------2--------------

//Տրված է՝
// const a = () => {};
// function B() {}

// Ի՞նչ արժեք կունենան հետևյալ տողերը, ինչու՞
// typeof a; // A
// typeof B; // A
// Object.getPrototypeOf(a); // B
// Object.getPrototypeOf(B); // B
// a.prototype; // C
// B.prototype; // C

// ---------------3--------------

// Ինչպես է աշխատում new keyword-ը ? Ի՞նչ գործողություններ է այն կատարում։

// 4.
// Թարգմանեք հետևյալ կոդը ES5-ի (օգտագործեք function-ներ class-ի փոխարեն):
// class Person {
//  constructor(name) {
//    this.name = name;
//  }

//  sayHello() {
//    console.log(Hello from ${this.name});
//  }
// }

// ---------------5--------------

//Ստեղծեք object, որը չունի prototype:

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

// Ստորև բոլոր խնդիրները գրեք և՛ class-ներով, և՛ Function Constructor-ներով

// ---------------7--------------

// Ստեղծեք Airplane class / կոնստրուկտոր ֆունկցիա, որը ստանում է name արգումենտ։

// Բոլոր airplane–ները (instance-ները) պետք է ունենան սեփական “isFlying” անունով property․ որի արժեքը նախնական “false” է
// Բոլոր airplane-ները պետք է ունենան “takeOff()” և “land()” մեթոդներ
// - Երբ ինքնաթիռը օդ է բարձրանում (takeOff), “isFlying”-ը պետք է դառնա true
// - Երբ ինքնաթիռը վայրէջք է կատարում (land), “isFlying”-ը պետք է դառնա false

// ---------------8--------------

// Ստեղծեք Person class / կոնստրուկտոր ֆունկցիա, որը ստանում է name և age արգումենտներ։
// Բոլոր person-ները պետք է ունենան դատարկ զանգված (empty array)` “stomach”
// Ավելացրեք “eat” մեթոդ՝ eat(“uteliq”).
// - ուտել (eat) մեթոդը պետք է “uteliq”-ը ավելացնի “stomach”-ում
// - ամենաշատը կարելի է ուտել 10 ուտելիք (stomach.length)
// Ավելացրեք “clear” մեթոդ՝ clear().
// - clear-ը պետք է դատարկի stomach-ի պարունակությունը

// ---------------9-------------- (8.1).

// Եթե այս կետում գրենք՝
// const person1 = new Person('Person1', 14);
// console.log(person1.toString());
// Ի՞նչ կտեսնենք console-ում։ Ինչու՞։
// Գրե՛ք կոդ, որից հետո console.log(person1.toString()); արտահայտությունը console-ում կտպի տվյալ person-ի անունը և տարիքը, օր․՝ “Person1, 14”:

// ---------------10-------------- (8.2):

// Ստեղծեք Baby class / կոնստրուկտոր ֆունկցիա, որը ժառանգում է Person class-ը։
// Baby-ի կոնստրուկտորը, Person-ի հետ համեմատած, պետք է ստանա 1 ավել արգումենտ՝ “favoriteToy”։
// Person-ի մեթոդներից բացի, Baby-ն պետք է ունենա “play()” մեթոդ, որը կանչվելուց պետք է վերադարձնի string` “Playing with x”, որտեղ x-ը favoriteToy-ն է տվյալ instance-ի համար։
