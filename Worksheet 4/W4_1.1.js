document.getElementById("1a").addEventListener("click",cambio);
document.getElementById("no").style.visibility="hidden"
function cambio(){
    document.getElementById("no").style.visibility="visible"
    var cssId = 'myCss';  // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId))
    {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'W4_1.1normal.css';
    link.media = 'all';
    head.appendChild(link);
    }
}
