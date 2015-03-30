var host="http://192.168.2.182:8085/Torre3Libio";
var urlRegister="/usuario/register";

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
    /*{usr:usuarioV,pwd:passwordV,nombre:nombreV,matricula:matriculaV,carrera:licenciaturaV,habilidades:habilidadesV,
                                 servicios:serviciosV,conocimientos:conocimientosV,intereses:interesesV,celular:celularV,proyectosPrevios:proyectosPreviosV,
                                 proyectosActuales:proyectosActualesV}
    */
    $.post(host+urlRegister, {usr:"oswaldo",pwd:"password",nombre:"Oswaldo Cruz Simon",matricula:"2123065423",carrera:"Computacion",habilidades:"Skills",
                                 servicios:"Services",conocimientos:"Solo se que no se nada",intereses:"intereses",celular:"5522605675",proyectosPrevios:"previos",
                                 proyectosActuales:"Torre III"},function(result){
            alert("registro completado");
            $.mobile.navigate("#principal", {
                transition: "slide"
            });
        });
});
$("#registerPage4").on('click', '.showPrevPage', function() {
        $.mobile.navigate("#registerPage3", {
        transition: "slide"
    });
});
$( "#registernForm4" ).on( "submit", function( event ) {
   
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
