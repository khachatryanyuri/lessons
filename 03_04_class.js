////////////// "Традиционный JS класс" `Vehicle`///////////////

// function Vehicle() {
//   this.engines = 1;
// }
// Vehicle.prototype.ignition = function () {
//   console.log("Завожу двигатель.");
// };
// Vehicle.prototype.drive = function () {
//   this.ignition();
//   console.log("Двигаюсь вперёд!");
// };

// // "Паразитический класс" `Car`
// function Car() {
//   // во-первых, `car` это `Vehicle`
//   var car = new Vehicle();

//   // теперь, давайте модифицируем `car` чтобы придать ей специфичности
//   car.wheels = 4;

//   // сохранить привилегированную ссылку в `Vehicle::drive()`
//   var vehDrive = car.drive;

//   // переопределяем `Vehicle::drive()`
//   car.drive = function () {
//     vehDrive.call(this);
//     console.log("Еду на всех моих " + this.wheels + " колёсах!");
//   };

//   return car;
// }

// var myCar = new Car();

// myCar.drive();
// // Завожу двигатель.
// // Двигаюсь вперёд!
// // Еду на всех моих 4 колёсах!


///////////////////Неявные примеси//////////////////////

// var Something = {
// 	cool: function() {
// 		this.greeting = "Привет, мир";
// 		this.count = this.count ? this.count + 1 : 1;
// 	}
// };

// Something.cool();
// Something.greeting; // "Привет, мир"
// Something.count; // 1

// var Another = {
// 	cool: function() {
// 		// неявное смешивание `Something` с `Another`
// 		Something.cool.call( this );
// 	}
// };

// Another.cool();
// Another.greeting; // "Привет, мир"
// Another.count; // 1 (нет общего состояния с `Something`)