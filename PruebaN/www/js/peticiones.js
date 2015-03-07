var url="https://torre3uam.herokuapp.com/usuario/login";
var urlRegister="https://torre3uam.herokuapp.com/usuario/register";

$( "#loginForm" ).on( "submit", function( event ) {
  event.preventDefault();
  var usrL=$("#usrL").val();
  var pwdL=$("#pwdL").val();
  var res=$.post( url, {usr : usrL, pwd : pwdL });
    console.log(usrL+" "+pwdL);
});

$( "#registerForm2" ).on( "submit", function( event ) {
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

});

$(window).on("navigate", function(event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
    alert('Going back');
  }
  if (direction == 'forward') {
    alert('Going forward');
  }
});

$("#registerPage1").on('click', '.showNextPage', function() {
  $.mobile.navigate("#registerPage2", {
    transition: "slide"
  });
    var nombre=$("#nombreRegister").val();
});
$("#registerPage2").on('click', '.showNextPage', function() {
  $.mobile.navigate("#registerPage1", {
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


$("#registerPage2").on('click', '.showPrevPage', function() {
  $.mobile.navigate("#registerPage1", {
    transition: "slide"
  });
    var nombre=$("#nombreRegister").val();
});