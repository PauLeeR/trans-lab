$(document).ready(function() {   //menu desplegable
	var sideslider = $('[data-toggle=collapse-side]');
	var sel = sideslider.attr('data-target');
	var sel2 = sideslider.attr('data-target-2');
	sideslider.click(function(event){
		$(sel).toggleClass('in');
		$(sel2).toggleClass('out');
	});

	/*DECLARAR VALOR ON CLICK*/
	/*API*/
	$('#saldo').click(function(){
		var numeroBip = $('#ve-tu-saldo').val();
		console.log (numeroBip);

		$.ajax({
			url : 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + numeroBip,
			type : 'GET',
			datatype : 'json',
		})

		.done(function(response){
			console.log("success");
			console.log(response);
			conocerSaldo(response);//funcion que muestra el monto de la tarjeta que se ingrese
		})
		.fail(function(){
			console.log("error");
		wrong(); //funcion que muestra un msj cuando la tarjeta no es válida
		})

		function conocerSaldo(response){ //conocer el saldo de tu tarjeta bip
			var saldo = response.saldoTarjeta;

			$(".ve-tu-saldo").empty();

			var text = ("<h4>SALDO TOTAL</h4><div class='saldo'><p id='saldo-total'>" + saldo +"</p></div>");

			$(".ve-tu-saldo").append(text);

		}	
	});

	$('.calcularbtn').click(function(){
		var numeroBip = $('#ve-tu-saldo').val();
		var tramos = $('#horarios').val();
		console.log (numeroBip);
		console.log (tramos);

		$.ajax({
			url : 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + numeroBip,
			type : 'GET',
			datatype : 'json',
		})

		.done(function(response){
			console.log("success");
			console.log(response);
		conocerTarifa(response);//funcion que muestra el monto de la tarjeta que se ingrese
		})

		.fail(function(){
			console.log("error");
		wrong(); //funcion que muestra un msj cuando la tarjeta no es válida
		})


		function conocerTarifa(response){
		var removePeso = response.saldoTarjeta.replace("$","");//reemplazo el signo peso por un string vacío para que considere sólo los números
		var removePunto = removePeso.replace(".",""); //también saco el punto
		var saldo = parseInt(removePunto); //y el monto lo convertimos en un número (entero)
		console.log (saldo);
		var tarifaFinal = saldo - tramos  //monto que queda en la tarjeta después de calcular un viaje según el tramo/horario
		$('#showTarifa').append("<div class='saldo'>COSTO PASAJE</div>"+
			"<div class='saldoup'>" + tramos + "</div>"+
			"<div class='saldoFinal'>SALDO FINAL</div>"+
			"<div class='saldoFinalUp'>" + tarifaFinal + "</div>");
		}

		function wrong(){
		$(".ve-tu-saldo").empty();
		$(".ve-tu-saldo").append("<h4>SALDO TOTAL</h4><div class='saldo'><p id='saldo-total'>Tarjeta inválida</p></div>");

		}

	});
});