function tabla(){
    document.write("<table id='t' style='border-collapse: collapse;border: solid 2px'>");
    for(var i=0;i<10;i++){
        document.write("<tr>");
        for(var j=0;j<10;j++){
            document.write("<td style='border:solid 1px; padding: 25px'>  </td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    var array=document.getElementsByTagName("td");
    for(var i=0;i<100;i++){
        array[i].addEventListener("mousemove",function(){pintar()});

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