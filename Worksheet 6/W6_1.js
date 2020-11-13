function cookie(){
    if( document.cookie.split(';').some(function(item) {
        if(item.trim().indexOf("nombre=")!=-1){
            alert("Bienvenido "+item.trim().substring(item.trim().indexOf("=")+1,item.trim().length));
        }else{
            var e=prompt("Nombre?");
            document.cookie="nombre="+e+";max-age=300";
            cookie();
        }
    })){}
}
console.log(document.cookie);
cookie();