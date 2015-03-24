var urlRegister="https://torre3uam.herokuapp.com/usuario/register";

$(window).on("navigate", function(event, data) {
    var direction = data.state.direction;
    if (direction == 'back') {
        console.log('Going back');
    }
    if (direction == 'forward') {
        console.log('Going forward');
    }
});

$("#registerPage1").on('click', '.showNextPage', function() {
    var nombreV=$("#nombreRegister").val();
    var apellidoV=$("#apellidoRegister").val();
    var matriculaV=$("#matriculaRegister").val();
    var licenciaturaV=$("#licenciaturaRegister").val();
    var celularV=$("#celularRegister").val();
    var correoV=$("#correoRegister").val();
    var usuarioV=$("#usuarioRegister").val();
    var passwordV=$("#passwordRegister").val();
    
    if(nombreV==""||apellidoV==""||matriculaV==""||licenciaturaV==""||
       celularV==""||correoV==""||usuarioV==""||passwordV==""){
        $("#letreroForm1").text("Debe llenar todos los campos");
    }else{
        $("#letreroForm1").text("");
        $.mobile.navigate("#registerPage2", {
            transition: "slide"
        });   
    }
    
});
$("#registerPage1").on('click', '.showPrevPage', function() {
        $.mobile.navigate("#principal", {
        transition: "slide"
    });
});
$("#registerPage2").on('click', '.showNextPage', function() {
    var habilidadesV=$("#habilidadesRegister").val();
    var serviciosV=$("#serviciosRegister").val();
    var conocimientosV=$("#conocimientosRegister").val();
    var interesesV=$("#interesesRegister").val();
    
    if(habilidadesV==""||serviciosV==""||
       conocimientosV==""||interesesV==""){
        $("#letreroForm2").text("Debe llenar todos los campos");
    }else{
        $("#letreroForm1").text("");
        $.mobile.navigate("#registerPage3", {
            transition: "slide"
        });
    }
        
});
$("#registerPage2").on('click', '.showPrevPage', function() {
        $.mobile.navigate("#registerPage1", {
        transition: "slide"
    });
});
$("#registerPage3").on('click', '.showNextPage', function() {
    var proyectosPreviosV=$("#proyectosPreviosRegister").val();
    var proyectosActualesV=$("#proyectosActualesRegister").val();
    
    if(proyectosActualesV==""||proyectosPreviosV==""){
        $("#letreroForm3").text("Debe llenar todos los campos");
    }else{
        $("#letreroForm3").text("");
        $.mobile.navigate("#registerPage4", {
            transition: "slide"
        });
    }
});
$("#registerPage3").on('click', '.showPrevPage', function() {
        $.mobile.navigate("#registerPage2", {
        transition: "slide"
    });
});
$("#registerPage4").on('click', '.showNextPage', function() {
    $.mobile.navigate("#mainMenu", {
        transition: "slide"
    });
    var nombreV=$("#nombreRegister").val();
    var apellidoV=$("#apellidoRegister").val();
    var matriculaV=$("#matriculaRegister").val();
    var licenciaturaV=$("#licenciaturaRegister").val();
    var celularV=$("#celularRegister").val();
    var correoV=$("#correoRegister").val();
    var usuarioV=$("#usuarioRegister").val();
    var passwordV=$("#passwordRegister").val();
    
    var habilidadesV=$("#habilidadesRegister").val();
    var serviciosV=$("#serviciosRegister").val();
    var conocimientosV=$("#conocimientosRegister").val();
    var interesesV=$("#interesesRegister").val();
    
    var proyectosPreviosV=$("#proyectosPreviosRegister").val();
    var proyectosActualesV=$("#proyectosActualesRegister").val();
    
    nombreV=nombreV+apellidoV;
    var res=$.post( urlRegister, {nombre : nombreV, matricula : matriculaV,habilidades:habilidadesV,
        servicios:serviciosV,conocimientos:conocimientosV,intereses:interesesV,correo:correoV,
            celular:celularV,proyectosPrevios:proyectosPreviosV,proyectosActuales:proyectosActualesV});
});
$("#registerPage4").on('click', '.showPrevPage', function() {
        $.mobile.navigate("#registerPage3", {
        transition: "slide"
    });
});
$( "#registernForm4" ).on( "submit", function( event ) {
    event.preventDefault();
    var nombreV=$("#nombreRegister").val();
    var matriculaV=$("#matriculaRegister").val();
    var habilidadesV=$("#habilidadesRegister").val();
    var serviciosV=$("#serviciosRegister").val();
    var conocimientosV=$("#conocimientosRegister").val();
    var interesesV=$("#interesesRegister").val();
    var correoV=$("#correoRegister").val();
    var celularV=$("#celularRegister").val();
    var proyectosPreviosV=$("#proyectosPreviosRegister").val();
    var proyectosActualesV=$("#proyectosActualesRegister").val();
    var res=$.post( urlRegister, {nombre : nombreV, matricula : matriculaV,habilidades:habilidadesV,
                    servicios:serviciosV,conocimientos:conocimientosV,intereses:interesesV,correo:correoV,
                        celular:celularV,proyectosPrevios:proyectosPreviosV,proyectosActuales:proyectosActualesV});
    $.mobile.changePage("#mainMenu");
});
$("#crearAnuncio").on('click', '.showNextPage', function() {
        $.mobile.navigate("#edificio", {
        transition: "slide"
    });
});
$("#crearAnuncio").on('click', '.showPrevPage', function() {
        $.mobile.navigate("#edificio", {
        transition: "slide"
    });
});
