var urlLogin="http://libio.cua.uam.mx:8088/torre/usuario/test";
var urlRegister="http://libio.cua.uam.mx:8088/torre/usuario/register";
var deviceIdL;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
    deviceIdL=device.uuid;
    alert('Device UUID: '+ deviceId);
}
$(function(){
    localStorage.clear();
    if(localStorage.getItem('token')!=null){
        $.post(urlLogin, {token:localStorage.getItem('token'),deviceId:deviceIdL},function(result){
            if(result==localStorage.getItem('token')){
                $.mobile.changePage("#edificio");
            }
        });
    }
    $( "#loginForm" ).on( "submit", function( event ) {
        event.preventDefault();

        var usrL=$("#usrL").val();
        var pwdL=$("#pwdL").val(); 

        if($("#noCerrarLogin").is(':checked')){
            console.log("is checked");
            $.post(urlLogin, {usr:usrL,pwd:pwdL,deviceId:deviceIdL},function(result){
                if(result=="error"){
                    $("#letreroLogin").text="user o password incorrectos";
                }else{
                    localStorage.clear();
                    localStorage.setItem("token",result);
                    console.log(localStorage.getItem("token"));
                    $("#letreroLogin").text="user o password incorrectos";
                    $.mobile.changePage("#edificio");
                }   
            });
        }else{
            localStorage.clear();
            //console.log("is no checked");
            $.post(urlLogin,{usr:usrL,pwd:pwdL},function(result){
                console.log("success");
                if(result=="error"){
                    $("#letreroLogin").text("user o password incorrectos");
                }else{
                    $.mobile.changePage("#edificio");
                }
            });
            /*$.ajax({
                url: urlLogin,
                type: 'post',
                data:{usr:usrL,pwd:pwdL},
                success: function( data, textStatus, jQxhr ){
                    //console.log("success");
                    console.log(data);
                    console.log(textStatus);
                    console.log(jQxhr);
                    $.mobile.changePage("#registerPage1");
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    //console.log("error");
                    console.log( errorThrown );
                    console.log(jqXhr);
                    console.log(textStatus);
                }
            });*/
            
        }
    });
});