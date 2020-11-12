document.getElementById("username").addEventListener("focusout",function(){username(document.getElementById("username").value)});
document.getElementById("nombre").addEventListener("focusout",function(){nombre(document.getElementById("nombre").value)});
document.getElementById("apellidos").addEventListener("focusout",function(){apellidos(document.getElementById("apellidos").value)});
document.getElementById("dni").addEventListener("focusout",function(){dni(document.getElementById("dni").value)});
document.getElementById("telefono").addEventListener("focusout",function(){telef(document.getElementById("telefono").value)});
document.getElementById("email").addEventListener("focusout",function(){email(document.getElementById("email").value)});

var numRe =/[\d]/;
function username(string){
    let nameRe = /^[A-Z][A-Za-z\d.,\/#!$%\^&\*;:{}=\-_`~()”“"…]{8,}/;
    let punctRe= /[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/;
    if(numRe.test(string) && punctRe.test(string) && nameRe.test(string)){
        console.log("Es valida");
    }else{
        console.log("No es valida");
    }
}
function apellidos(string){
    let string1=string.split(" ",1);
    let string2=string.substr(string1[0].length+1);
    let noSRe=/[\s-]/;
    let nameRe=/^[A-Z][a-z!]{3,}/;
    if(nameRe.test(string1) && nameRe.test(string2) && !numRe.test(string2) && !noSRe.test(string2) && !numRe.test(string1)){
        console.log("Es valida");
    }else{
        console.log("No es valida");
    }
}
function nombre(string){
    let nameRe=/^[A-Z][a-z!]{3,}/;
    if(nameRe.test(string) && !numRe.test(string)){
        console.log("Es valida");
    }else{
        console.log("No es valida");
    }
}
function telef(string){
    let telfRe=/[1-9]{3}[-][1-9]{3}[-][1-9]{3}/;
    if(string.match(telfRe).input==string.match(telfRe)[0]){
        console.log("Es valida");
    }else{
        console.log("No es valida");
    }
}
function dni(string){
    let dniRe=/[0-9]{8}[A-Z]{1}/;
    if(string.match(dniRe).input==string.match(dniRe)[0]){
        console.log("Es valida");
    }else{
        console.log("No es valida");
    }
}
function email(string){
    let signRe = /[\w]+@gmail+[\.]com$/i;
    if(signRe.test(string)){
        console.log("Es valida");
    }else{
        console.log("No es valida");
    }
}