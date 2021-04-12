var errorM = document.getElementById("valid-mail");
var errorP= document.getElementById("valid-pass");
var mail=document.getElementById("email");
var pass= document.getElementById("password");
var btn=document.getElementById("btn");


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

btn.onclick=function(e){
    e.preventDefault();
    var mess=document.getElementById("error");
    mess.innerHTML="The data " +mail.value + " " + pass.value+ " was send correctly.";
    fetch(`https://jsonplaceholder.typicode.com/users?email=${mail.value}`)
        .then (response => response.json())
        .then (json => console.log(json));
}