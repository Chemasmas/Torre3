var url="https://torre3uam.herokuapp.com/usuario/login";
var urlRegister="https://torre3uam.herokuapp.com/usuario/register";

$( "#loginForm" ).on( "submit", function( event ) {
  event.preventDefault();
  var usrL=$("#usrL").val();
  var pwdL=$("#pwdL").val();    
    
    $.ajax({
        type       : "POST",
        url        : url,
        data       : {usr : usrL, pwd : pwdL },
        success    : function(response) {
            console.log(response);
            console.log("funcion succes");
        },
        dataType: "json"
    });
$.mobile.changePage("#registerPage1");
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
//{usr : usrL, pwd : pwdL }
 
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
  $.mobile.navigate("#registerPage2", {
    transition: "slide"
  });
});
$("#registerPage1").on('click', '.showPrevPage', function() {
  $.mobile.navigate("#principal", {
    transition: "slide"
  });
});
$("#registerPage2").on('click', '.showNextPage', function() {
  $.mobile.navigate("#registerPage3", {
    transition: "slide"
  });
});
$("#registerPage2").on('click', '.showPrevPage', function() {
  $.mobile.navigate("#registerPage1", {
    transition: "slide"
  });
});
$("#registerPage3").on('click', '.showNextPage', function() {
  $.mobile.navigate("#registerPage4", {
    transition: "slide"
  });
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
});
$("#registerPage4").on('click', '.showPrevPage', function() {
  $.mobile.navigate("#registerPage3", {
    transition: "slide"
  });
});