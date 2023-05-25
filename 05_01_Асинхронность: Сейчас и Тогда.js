// `eventLoop` - это массив, который действует как очередь (первым пришел, первым ушел)
// var eventLoop = [ ];
// var event;

// // будет работать "всегда"
// while (true) {
// 	// виполненяем "трюк"
// 	if (eventLoop.length > 0) {
// 		// получаем следующее собитие из очереди
// 		event = eventLoop.shift();

// 		// теперь выполняем следующее событие
// 		try {
// 			event();
// 		}
// 		catch (err) {
// 			reportError(err);
// 		}
// 	}
// }

/////////////////////////////////////////////

// var res = [];

// // `response(..)` получает массив результатов от Ajax-вызова
// function response(data) {
//     // добавляем в существующий массив `res`
// 	res = res.concat(
//         // создаем новый преобразованный массив со всеми удвоенными значениями `data`
// 		data.map( function(val){
// 			return val * 2;
// 		} )
// 	);
// }

// ajax( "http://some.url.1", response );
// ajax( "http://some.url.2", response );


/////////////////////////////////////////////

var res = [];

// `response(..)` получает массив результатов от Ajax-вызова
function response(data) {
    // давайте просто сделаем 1000 за раз
	var chunk = data.splice( 0, 1000 );

    // добавляем в существующий массив `res`
	res = res.concat(
		// создаем новый преобразованный массив со всеми удвоенными значениями `chunk`
		chunk.map( function(val){
			return val * 2;
		} )
	);

    // осталось что-нибудь обработать?
	if (data.length > 0) {
		// асинхронное расписание следующей партии
		setTimeout( function(){
			response( data );
		}, 0 );
	}
}

ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );