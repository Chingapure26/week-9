var errorN = document.getElementById("valid-name");
var errorM = document.getElementById("valid-mail");
var errorP= document.getElementById("valid-pass");
var errorCP=document.getElementById("valid-confP");


document.getElementById("nombre").addEventListener('blur',ValidName);
document.getElementById("email").addEventListener('blur',ValidMail);
document.getElementById("password").addEventListener('blur',ValidPass);
document.getElementById("conf-pass").addEventListener('blur',ValidCpass);


function ValidName(){
 let  fullN=document.getElementById("nombre").value;
    
    if (fullN.indexOf(" ") === -1){
        x1=false;
       
    }else {
        x1=true;
    }
   
    errorNam=[];
    if(fullN.length > 5) {
        x2=true;
        
    }else{
        x2=false;
        
    }
    
    if (x1 == false ){
        errorNam.unshift('Name false.');
    }

    if (x2 == false){
        errorNam.unshift('Short Name.');
    }
    
    if (errorNam != 0){
        for(var i = 0; i < errorNam.length; i++){
            var displayedText = document.createTextNode(errorNam[i] + '\r');
            errorN.appendChild(displayedText);
        }

    }
}    
function ValidMail(){
    let mail=document.getElementById("email").value;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var Valid= expReg.test(mail);
    if (Valid == false){

        var displayedText = document.createTextNode('Invalid Email.');
        errorM.appendChild(displayedText);
        
    }
    
}

function ValidPass(){
    var pass= document.getElementById("password").value;
    if (pass.length >= 8){
        x1=true;
    } else{
        x1=false;
    }
    var expRegN = /[0-9]/;
    var validPN=expRegN.test(pass);
    if (validPN == false){
        x2=false;
    }else{
        x2=true;
       
    }
    var expRegl = /[a-z]/;
    var expRegL = /[A-Z]/;
    var validl=expRegl.test(pass);
    var validL=expRegL.test(pass);
    if (validl == false && validL == false) {
        x3=false;
    }else{
        x3=true;
       
    }

    errorPass=[];
    if (x1 == false ){
        errorPass.unshift('Short Password.');
    }

    if (x2 == false){
        errorPass.unshift('Must have number.');
    }
    if (x3 == false){
        errorPass.unshift('Must have character.');
    }

    if (errorPass != 0){
        for(var i = 0; i < errorPass.length; i++){
            var displayedText = document.createTextNode(errorPass[i] + '\r');
            errorP.appendChild(displayedText);
        }
    }
}

function ValidCpass(){
    var pass= document.getElementById("password").value;
    var cpass=document.getElementById("conf-pass").value;

    if (pass != cpass){
        var displayedText = document.createTextNode('Diferent Passwords.');
        errorCP.appendChild(displayedText);
    }
}