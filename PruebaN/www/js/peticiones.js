var url="http://172.16.3.186:8085/Torre3/param/usuario";

$( "#loginForm" ).on( "submit", function( event ) {
  event.preventDefault();
  var usrL=$("#usrL").val();
  var pwdL=$("#pwdL").val();
  var res=$.post( url, {usr : usrL, pwd : pwdL } , function(data){
      $("#destino").empty().append(data);
  });
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

$(document).on('click', '.showNextPage', function() {
  $.mobile.navigate("#registerPage2", {
    transition: "slide"
  });
});

$(document).on('click', '.showPrevPage', function() {
  $.mobile.navigate("#registerPage1", {
    transition: "slide"
  });
});