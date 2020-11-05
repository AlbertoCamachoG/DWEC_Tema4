function alineamiento(l){
    if(l=="i"){
        document.body.style.textAlign="left";
    }else{
        if(l=="j"){
            document.body.style.textAlign="justify";
        }
    }
}
function tamaño(l){
    switch(l){
        case "d":
            document.body.style.fontSize="smaller";
        break;
        case "a":
            document.body.style.fontSize="larger";
        break;
        case "r":
            document.body.style.fontSize="medium";
    }
}