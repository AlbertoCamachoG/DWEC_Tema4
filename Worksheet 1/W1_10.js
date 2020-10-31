function startDrag(e) {
    var e = window.event;
    var targ = e.target ? e.target : e.srcElement;

    if(targ.className != 'dragme'){return}
    
    offsetX = e.clientX;
    offsetY = e.clientY;
    // assign default values for top and left properties
    if(!targ.style.left) { targ.style.left='0px'};
    if (!targ.style.top) { targ.style.top='0px'};

    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;
    document.onmousemove=dragDiv;
    
}
function dragDiv(e) {
    if (!drag) {return};
    if (!e) { var e= window.event};
    var targ=e.target?e.target:e.srcElement;
    // move div element
    targ.style.left=coordX+e.clientX-offsetX+'px';
    targ.style.top=coordY+e.clientY-offsetY+'px';
    return false;
}
function stopDrag() {
    drag=false;
}
window.addEventListener("load",function(){
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
})
startDrag();