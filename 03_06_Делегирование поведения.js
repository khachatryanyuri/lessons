// var Task = {
// 	setID: function(ID) { this.id = ID; },
// 	outputID: function() { console.log( this.id ); }
// };

// // `XYZ` делегирует `Task`
// var XYZ = Object.create( Task );

// XYZ.prepareTask = function(ID,Label) {
// 	this.setID( ID );
// 	this.label = Label;
// };

// XYZ.outputTaskDetails = function() {
// 	this.outputID();
// 	console.log( this.label );
// };

/////////////////////class syntax//////////////////////////////

// function Foo(who) {
// 	this.me = who;
// }
// Foo.prototype.identify = function() {
// 	return "I am " + this.me;
// };

// function Bar(who) {
// 	Foo.call( this, who );
// }
// Bar.prototype = Object.create( Foo.prototype );

// Bar.prototype.speak = function() {
// 	alert( "Hello, " + this.identify() + "." );
// };

// var b1 = new Bar( "b1" );
// var b2 = new Bar( "b2" );

// b1.speak();
// b2.speak();

//////////////////////object syntax//////////////////////////

// var Foo = {
// 	init: function(who) {
// 		this.me = who;
// 	},
// 	identify: function() {
// 		return "I am " + this.me;
// 	}
// };

// var Bar = Object.create( Foo );

// Bar.speak = function() {
// 	alert( "Hello, " + this.identify() + "." );
// };

// var b1 = Object.create( Bar );
// b1.init( "b1" );
// var b2 = Object.create( Bar );
// b2.init( "b2" );

// b1.speak();
// b2.speak();

/////////////////////class syntax es5//////////////////////////////

// // Родительский класс
// function Controller() {
// 	this.errors = [];
// }
// Controller.prototype.showDialog = function(title,msg) {
// 	// показывает пользователю заголовок и сообщение в диалоговом окне
// };
// Controller.prototype.success = function(msg) {
// 	this.showDialog( "Success", msg );
// };
// Controller.prototype.failure = function(err) {
// 	this.errors.push( err );
// 	this.showDialog( "Error", err );
// };

// function LoginController() {
// 	Controller.call( this );
// }
// // Привязываем дочерний класс к родительскому
// LoginController.prototype = Object.create( Controller.prototype );
// LoginController.prototype.getUser = function() {
// 	return document.getElementById( "login_username" ).value;
// };
// LoginController.prototype.getPassword = function() {
// 	return document.getElementById( "login_password" ).value;
// };
// LoginController.prototype.validateEntry = function(user,pw) {
// 	user = user || this.getUser();
// 	pw = pw || this.getPassword();

// 	if (!(user && pw)) {
// 		return this.failure( "Please enter a username & password!" );
// 	}
// 	else if (pw.length < 5) {
// 		return this.failure( "Password must be 5+ characters!" );
// 	}

// 	// добрались сюда? валидация прошла успешно!
// 	return true;
// };
// // Переопределяем для расширения базового `failure()`
// LoginController.prototype.failure = function(err) {
// 	// вызов "super"
// 	Controller.prototype.failure.call( this, "Login invalid: " + err );
// };

// // Дочерний класс
// function AuthController(login) {
// 	Controller.call( this );
// 	// помимо наследования, нам необходима композиция
// 	this.login = login;
// }
// // Привязываем дочерний класс к родительскому
// AuthController.prototype = Object.create( Controller.prototype );
// AuthController.prototype.server = function(url,data) {
// 	return $.ajax( {
// 		url: url,
// 		data: data
// 	} );
// };
// AuthController.prototype.checkAuth = function() {
// 	var user = this.login.getUser();
// 	var pw = this.login.getPassword();

// 	if (this.login.validateEntry( user, pw )) {
// 		this.server( "/check-auth",{
// 			user: user,
// 			pw: pw
// 		} )
// 		.then( this.success.bind( this ) )
// 		.fail( this.failure.bind( this ) );
// 	}
// };
// //  Переопределяем для расширения базового `success()`
// AuthController.prototype.success = function() {
// 	// вызов "super"
// 	Controller.prototype.success.call( this, "Authenticated!" );
// };
// // Переопределяем для расширения базового `failure()`
// AuthController.prototype.failure = function(err) {
// 	// вызов "super"
// 	Controller.prototype.failure.call( this, "Auth Failed: " + err );
// };

// var auth = new AuthController(
// 	// помимо наследования, нам необходима композиция
// 	new LoginController()
// );
// auth.checkAuth();

//////////////////////object syntax//////////////////////////

// var LoginController = {
//   errors: [],
//   getUser: function () {
//     return document.getElementById("login_username").value;
//   },
//   getPassword: function () {
//     return document.getElementById("login_password").value;
//   },
//   validateEntry: function (user, pw) {
//     user = user || this.getUser();
//     pw = pw || this.getPassword();

//     if (!(user && pw)) {
//       return this.failure("Please enter a username & password!");
//     } else if (pw.length < 5) {
//       return this.failure("Password must be 5+ characters!");
//     }

//     // добрались сюда? валидация прошла успешно!
//     return true;
//   },
//   showDialog: function (title, msg) {
//     // показывает пользователю сообщение об успехе в диалоговом окне
//   },
//   failure: function (err) {
//     this.errors.push(err);
//     this.showDialog("Error", "Login invalid: " + err);
//   },
// };

// // Связываем `AuthController` для делегирования к `LoginController`
// var AuthController = Object.create(LoginController);

// AuthController.errors = [];
// AuthController.checkAuth = function () {
//   var user = this.getUser();
//   var pw = this.getPassword();

//   if (this.validateEntry(user, pw)) {
//     this.server("/check-auth", {
//       user: user,
//       pw: pw,
//     })
//       .then(this.accepted.bind(this))
//       .fail(this.rejected.bind(this));
//   }
// };
// AuthController.server = function (url, data) {
//   return $.ajax({
//     url: url,
//     data: data,
//   });
// };
// AuthController.accepted = function () {
//   this.showDialog("Success", "Authenticated!");
// };
// AuthController.rejected = function (err) {
//   this.failure("Auth Failed: " + err);
// };

/////////////////////class syntax es6//////////////////////////////

class Widget {
	constructor(width,height) {
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
	}
	render($where){
		if (this.$elem) {
			this.$elem.css( {
				width: this.width + "px",
				height: this.height + "px"
			} ).appendTo( $where );
		}
	}
}

class Button extends Widget {
	constructor(width,height,label) {
		super( width, height );
		this.label = label || "Default";
		this.$elem = $( "<button>" ).text( this.label );
	}
	render($where) {
		super.render( $where );
		this.$elem.click( this.onClick.bind( this ) );
	}
	onClick(evt) {
		console.log( "Button '" + this.label + "' clicked!" );
	}
}
