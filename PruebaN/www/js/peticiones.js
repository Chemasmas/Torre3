var url="http://172.16.3.186:8085/Torre3/param/usuario";

$( "#loginForm" ).on( "submit", function( event ) {
  event.preventDefault();
  var usrL=$("#usrL").val();
  var pwdL=$("#pwdL").val();
  var res=$.post( url, {usr : usrL, pwd : pwdL } , function(data){
      $("#destino").empty().append(data);
  });
});