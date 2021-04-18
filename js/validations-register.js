var errorN = document.getElementById("valid-name");
var errorM = document.getElementById("valid-mail");
var errorP= document.getElementById("valid-pass");
var errorCP=document.getElementById("valid-confP");

var fullN=document.getElementById("nombre");
var mail=document.getElementById("email");
var pass= document.getElementById("password");
var cpass=document.getElementById("conf-pass");
var btn=document.getElementById("btn_send");





fullN.onblur=ValidName
function ValidName(){
 
    
    if (fullN.value.indexOf(" ") === -1){
        x1=false;
       
    }else {
        x1=true;
    }
   
    errorNam=[];
    if(fullN.value.length > 5) {
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
            errorN.style.color = 'red';
            errorN.style.display='block';
        }

    }
}    

fullN.onfocus=function(){
    errorN.style.display='none'
}


mail.onblur=ValidMail;

 function ValidMail(){
   expReg=  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   
    if (expReg.test(mail.value) == false){
        var textM = document.createTextNode('Invalid Email.');
        errorM.appendChild(textM);    
        errorM.style.color = 'red';
        errorM.style.display='block';
        
    }    
}

mail.onfocus=function(){
    errorM.style.display='none'
}

pass.onblur=ValidPass;

function ValidPass(){
  
    if (pass.value.length >= 8){
        x1=true;
    } else{
        x1=false;
    }
    var expRegN = /[0-9]/;
    var validPN=expRegN.test(pass.value);
    if (validPN == false){
        x2=false;
    }else{
        x2=true;
       
    }
    var expRegl = /[a-z]/;
    var expRegL = /[A-Z]/;
    var validl=expRegl.test(pass.value);
    var validL=expRegL.test(pass.value);
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
            errorP.style.color = 'red';
            errorP.style.display='block';
        }
    }
}

pass.onfocus=function(){
    errorP.style.display='none'
}

cpass.onblur=ValidCpass;
function ValidCpass(){
    if (pass.value != cpass.value){
        var displayedText = document.createTextNode('Diferent Passwords.');
        errorCP.appendChild(displayedText);
        errorCP.style.color = 'red';
        errorCP.style.display='block';
    }
}
cpass.onfocus=function(){
    errorCP.style.display='none'
}

btn.onclick=function(e){
    e.preventDefault();
    var mess=document.getElementById("error");
    mess.innerHTML="The data " +mail.value + " " + pass.value+ " was send correctly.";
    fetch('http://localhost:4000/register',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            name: fullN.value,
            email:mail.value,
            password: pass.value,
        })
    })
        .then (response => response.json())
        .then (json => console.log(json));
} 