var url="https://torre3uam.herokuapp.com/usuario/login";
var urlRegister="https://torre3uam.herokuapp.com/usuario/register";

$( "#loginForm" ).on( "submit", function( event ) {
  event.preventDefault();
  var usrL=$("#usrL").val();
  var pwdL=$("#pwdL").val();
  var res=$.post( url, {usr : usrL, pwd : pwdL });
    console.log(usrL+" "+pwdL);
});

$( "#registerForm1" ).on( "submit", function( event ) {
  event.preventDefault();
    alert('Going forward');
  var nombre=$("#nombreRegister").val();
  var matricula=$("#matriculaRegister").val();
  var correo=$("#correoRegister").val();
  var celular=$("#celularRegister").val();
    console.log(nombre+" "+matricula+" "+correo+" "+celular );
    //alert(nombre+" "+matricula+" "+correo+" "+celular);
  //var res=$.post( url, {usr : usrL, pwd : pwdL } , function(data){
  //    $("#destino").empty().append(data);
  //});
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
    console.log(nombre);
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
    console.log(nombre);
});