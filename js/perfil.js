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
});

	function conocerSaldo(response){
		var saldo = response.saldoTarjeta;

		$(".ve-tu-saldo").empty();

		var text = ("<h4>SALDO TOTAL</h4><div class='saldo'><p id='saldo-total'>" + saldo +"</p></div>");

		$(".ve-tu-saldo").append(text);

	}	

	function wrong(){
		$(".ve-tu-saldo").empty();
		$(".ve-tu-saldo").append("<h4>SALDO TOTAL</h4><div class='saldo'><p id='saldo-total'>Tarjeta inválida</p></div>");

	}

});