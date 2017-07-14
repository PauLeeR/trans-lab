//validación e-mail y contraseña. Creo dos variables con las expresiones regulares 
//Una para el correo y otra para verificar solo números para la contraseña
var validateEmail = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
var validatePassword = new RegExp("^([0-9]{1,8})$");
//basado en el trabajo grupal por squad "Lyft App y en la web
$(document).ready(function () {
    $("#botonInicio").on("click", function(e){ //boton iniciar sesión
        //guardamos en variables lo de cada input.
        var email = $("#usuario").val();
        var password = $("#contraseña").val();
//Verifica que el correo tenga un formato vàlido
if(email == "" || !validateEmail.test(email) || email.indexOf('@') == -1 ){
            $("#mail-malo").show(); //Muestra mensaje de error
            //return false;          // con false sale de la secuencia (me lo enseñó Susana O.)
        }
        else{
            $("#mail-malo").hide();   //Si el anterior if cumple, se oculta el error
        }
        if(password == "" || !validatePassword.test(password)){
            $("#password-malo").show();
            //return false;  
        }
        else{
            $("#password-malo").hide();//NO ESTA FUNCIONANDO LA VALIDACION DE LOS NUMEROS, PASA IGUAL A LA OTRA LAMINA
            e.preventDefault();
            document.location.href = "menu.html";   
        }

        //$("#botonInicio").click (function(){ //QUIERO QUE ME LLEVE AL OTRO HTML, NO SÈ CÒMO!!!¿??
          //  document.location.href = "menu.html";
      });
});

//local storage no sé como hacerlo en jQuery =/
function guardarDatos(){
    localStorage.email = document.getElementById("usuario").value;
    localStorage.password = document.getElementById("contraseña").value;
}
function recuperarDatos(){
    if((localStorage.email != undefined) && (localStorage.password != undefined)){
        document.getElementById("botonInicio").innerHTML = "Correo electrónico: " + localStorage.email + "<br/> Contraseña: " + localStorage.password;
    }
    else{
        document.getElementById("botonInicio").innerHTML = "No has introducido tu nombre y tu password";
    }
} 


