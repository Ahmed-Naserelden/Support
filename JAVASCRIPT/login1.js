let signup = document.querySelector('#signup');
let login = document.querySelector('#login');
let is = true;
function change(){
    if(is){
        signup.style.cssText=
        "display: block;";
        login.style.cssText=
        "display: none;";
        is = false;
    }else{
        signup.style.cssText=
        "display: none;";
        login.style.cssText=
        "display: block;";
        is = true;
    }
}

function myFunction(k) {
    if(k){
        var x = document.querySelector("#signin-password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }else{
        var x = document.querySelector("#signup-password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    
}
var hu = document.querySelector("#hu");




function gool(){
    window.location.href="../HTML/account.html";
}

