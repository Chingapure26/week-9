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

