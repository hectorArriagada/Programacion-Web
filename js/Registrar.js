$(document).ready(function(){

    $("#btn-registrar").click(function() {
        // se guarda el correo en una variable
        let correo = $("#correo").val();

        if (validarCorreo(correo)) {

        } else {
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center'>El correo debe ser Gmail.com, Hotmail.com o Duoc.cl</div>");
        }
    });


    // funcion para validar el correo con una expresion regular
    function validarCorreo(correo) {
        let regex = /^[a-zA-Z0-9._-]+@(gmail\.com|hotmail\.com|duoc\.cl)$/;
        return regex.test(correo);
    }



});