var host="http://192.168.2.182:8085/Torre3Libio";
var urlLogin="/usuario/login";
var urlLogin2="/usuario/login2";
var deviceIdL;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
    deviceIdL=device.uuid;
    //alert('Device UUID: '+ deviceId);
}
$(function(){
    deviceIdL="POSTER";
    //localStorage.clear();
    console.log("Usr: "+localStorage.getItem('usr'));
    console.log("Token: "+localStorage.getItem('token'));
    if(localStorage.getItem('token')!=null&&localStorage.getItem('usr')!=null){
        /*$.post(host+urlLogin2, {usr:localStorage.getItem('usr'),token:localStorage.getItem('token')},function(result){
            if(result.tipo=="Exito"){
                $.mobile.changePage("#edificio");
                console.log("cargo...");
                console.log(result);
            }
        });*/
        $.ajax({
            beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
            complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
            url: host+urlLogin2,
            dataType: 'json',
            headers: "I am good",
            success: function(data) {
                if(result.tipo=="Exito"){
                    $.mobile.changePage("#edificio");
                    console.log("cargo...");
                    console.log(result);
                }
            }
        });
    }
    $( "#loginForm" ).on( "submit", function( event ) {
        event.preventDefault();

        var usrL=$("#usrL").val();
        var pwdL=$("#pwdL").val(); 

        if($("#noCerrarLogin").is(':checked')){
            console.log("is checked");
            $.post(host+urlLogin, {usr:usrL,pwd:pwdL,uuid:deviceIdL},function(result){
                if(result=="error"){
                    $("#letreroLogin").text="user o password incorrectos";
                }else{
                    localStorage.clear();
                    localStorage.setItem("token",result.token);
                    localStorage.setItem("usr",usrL);
                    //console.log(localStorage.getItem("token"));
                    $("#letreroLogin").text="user o password incorrectos";
                    $.mobile.changePage("#edificio");
                }   
            });
        }else{
            localStorage.clear();
            //console.log("is no checked");
            $.post(host+urlLogin,{usr:usrL,pwd:pwdL,uuid:deviceIdL},function(result){
                console.log("success");
                console.log(result);
                if(result.token==undefined){
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