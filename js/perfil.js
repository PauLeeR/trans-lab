$(document).ready(function() {   //menu desplegable
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });

$.ajax({
            url : 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json',
            type : 'GET',
            datatype : 'json',
            data : {'bip': valor}
        })
        .done(function(respuesta){
            console.log("successe");
            console.log(respuesta);
            verSaldo(respuesta);
        })
        .fail(function(){
            console.log("error");
        })