document.getElementById("1a").addEventListener("click",cambio);
document.getElementById("no").style.visibility="hidden"
function cambio(){
    var body=document.body.style;
    body.margin="0px";
    body.marginLeft="100px";
    body.background="linear-gradient(0deg, #13a8bf 25%, #63b9db 25%, #63b9db 50%, #13a8bf 50%, #13a8bf 75%, #63b9db 75%, #63b9db 100%)";
    body.backgroundSize="10px 10px";
    body.padding="0px";
    var div=document.getElementById("div").style;
    div.width="100%";
    div.margin="0px";
    div.paddingTop="10px";
    div.height="100vmin";
    div.backgroundColor="#fffdd0";
    div.paddingLeft="10px";
    var tema=document.getElementById("tema").style;
    tema.backgroundColor="white";
    tema.width="95%";
    tema.boxShadow="1px 1px 1px 1px";
    document.getElementById("no").style.visibility="visible"
    var marco=document.getElementById("marco").style;
    marco.backgroundColor="yellow";
    marco="solid black 1px";
    marco.width="90%";
    marco.padding="3px";
}
