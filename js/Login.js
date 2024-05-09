$(document).ready(function(){
    $("#btn-ingresar").click(function() {
        let user = $("#username").val();
        let pass = $("#pass").val();

        console.log(user, pass)

        let resultado = validar(user,pass);
        if (res) {
            $("#exampleModal").modal("show");
            $("#res").html("")
            $("#res").append("<p>");
            $("#res").append("Usuario: " + user + "<br>");
            $("#res").append("Clave: " + pass + "<br>");
            $("#res").append("</p>");
    }

    function validar(user, pass) {
        if (String(user).length < 6) {
            $(".resultado").html("<div class='alert alert-danger w-50 mx-auto text-center' >Rut debe tener largo entre 9 y 10 caracteres</div>");
        } else if (String(pass).length < 6) {
            $(".resultado").html("<div class='alert alert-danger w-50 mx-auto text-center' >clave debe tener largo entre 9 y 10 caracteres</div>");
        }else{
            return true;
        }
    }
    })
});