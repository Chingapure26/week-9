var list = document.getElementById("error");
var lists =document.getElementById("lists");
var errorM = document.getElementById("valid-mail");
var errorP= document.getElementById("valid-pass");
var errors =[];


function ValidForm (){
    var registerForm = document.querySelector('form');
    if(registerForm != undefined){
        return true;
    } else {
        return false;
    } 
}

function ValidButn(){
    if (document.getElementsByClassName("btn").length == 1){
        return true;
    } else { 
        return false;
    }
}

function ValidFiels(){
    if(document.getElementsByClassName("field").length == 2){
        return true;
    } else {
        return false;
    }
}

function ValidLabs(){

    if(document.getElementsByClassName("ltext").length == 2){
    return true;
    } else {
        return false;
    }

}

function ValidAsociated(){
    var inputs = document.querySelectorAll('.field').name;
    var labels = document.querySelectorAll('.ltext').for;
    if (inputs === labels) {
        return true;
    } else {
        return false;
    }
}

/* function ValidAnchor() {
    var anchor = document.querySelector('a').href;
    var validHref = 'register.html';
    if (anchor = validHref){
        return true;
    }else {
        return false;
    }
}*/
function ValidAnchor() {
    var anchor = document.getElementById("link");
    var hRef = anchor.getAttribute("href");
    console.log(hRef);
    var validHref = 'register.html';
    if (hRef == validHref) {
        return true;
    }else {
        return false;
    }
}


if (ValidFiels ()== false){
    errors.unshift('At least one fiels is missing.');
}

if(ValidForm() == false){
    errors.unshift('Form is not found.');
}

if(ValidButn() == false){
    errors.unshift('At least one button is missing.');
}

if(ValidLabs() == false){
    errors.unshift('At least one label is missing.');
}

if (ValidAsociated() == false) {
    errors.unshift('Labels missing for imputs.');
}

if (ValidAnchor()==false){
    errors.unshift('Tas is invalid');
}


var GroupError=function() {
    if(errors.length === 0){
        var displayedText = document.createTextNode('Every validation has been passed.')
        list.appendChild(displayedText);
    }else{
        for(var i = 0; i < errors.length; i++){
        var displayedText = document.createTextNode(errors[i] + '\r');
        list.appendChild(displayedText);
        }
    }
}  
GroupError();

/*document.getElementById("email").addEventListener('blur',ValidMail);

function ValidMail(){
    let mail=document.getElementById("email").value;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var Valid= expReg.test(mail);
    if (Valid == false){

        var displayedText = document.createTextNode('Invalid Email.');
        errorM.appendChild(displayedText);
        
    }
    
}

document.getElementById("password").addEventListener('blur',ValidPass);

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
}*/
