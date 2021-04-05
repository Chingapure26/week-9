var button = document.getElementById("btn_send").addEventListener('click',validations);
var error = document.getElementById("error");


function validations (){
       
    var formlog=document.getElementsByClassName("formulario");
    x1=document.getElementById("nombre").value;
    x2=document.getElementById("email").value;
    x3=document.getElementById("password").value;
    x4=document.getElementById("conf-pass").value;

    if (formlog.length != 0) {
        if ((document.getElementsByClassName("field") == 4) && (document.getElementsByClassName("btn btn-gee")== 2)){
            if (document.getElementsByClassName("ltext") == 4){
                if((x1 != "") && (x2 != "" ) && (x3 != "") && (x4 != "")){
                    error.innerHTML=  "validations results: every validation has passed";
                } else {
                    error.innerHTML=  "Empty necessary imputs";
                }
            }else if ((x1 == "") || (x2 == "" ) || (x3 == "") || (x4 == ""))  {
                error.innerHTML=  "There are missing imputs and there are empty necessary imputs";
    
            } else {
                error.innerHTML=  "There are missing labels";
            }
        
        } else if (document.getElementsByClassName("ltext") != 4) {
            error.innerHTML=  "There are missing labels and imputs";
        } else {
            error.innerHTML=  "There are missing imputs";
        }
    } else { 
        error.innerHTML=   "form is not found";
    }

    
}

