function tabla(){
    document.write("<table id='t' style='border-collapse: collapse;border: solid 2px'>");
    for(var i=0;i<100;i++){
        document.write("<tr>");
        for(var j=0;j<100;j++){
            document.write("<td style='padding: 5px'> </td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    document.write("<br><button id='boton'>BORRAR TODO</button>");
    document.getElementById("boton").addEventListener('click',borrar);
    var array=document.getElementsByTagName("td");
    for(var i=0;i<10000;i++){
        array[i].addEventListener("mousemove",function(){pintar()});
        array[i].addEventListener("click",function(){borrar1()});
    }
}
function pintar(){
    if(window.event.shiftKey==true){
        window.event.target.style.backgroundColor="blue";
    }else{
        if(window.event.ctrlKey==true){
            window.event.target.style.backgroundColor="red";
        }
    }
}
function borrar1(){
    window.event.target.style.backgroundColor="white";
}
function borrar(){
    var array=document.getElementsByTagName("td");
    for(var i=0;i<10000;i++){
        array[i].style.backgroundColor="white";
    }
}