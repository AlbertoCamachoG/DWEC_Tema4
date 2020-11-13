if( document.cookie.split(';').some(saludar(document.cookie))){}
if( document.cookie.split(';').some(colores(document.cookie))){}

function saludar(item){
    if(item.trim().indexOf("nombre=")!=-1){
        alert("Bienvenido "+item.trim().substring(item.trim().indexOf("=")+1,item.trim().length));
    }else{
        var e=prompt("Nombre?");
        document.cookie="nombre="+e+";max-age=300";
        saludar(document.cookie);
    }
}

function colores(colorf,colorl){
    document.cookie="colorf="+colorf;
    document.cookie="colorl="+colorl;
    var item=document.cookie.split(";");
    console.log(item);
    document.body.style.backgroundColor=item[1].trim().substring(item[1].trim().indexOf("=")+1);
    document.body.style.color=item[2].trim().substring(item[2].trim().indexOf("=")+1);
}

