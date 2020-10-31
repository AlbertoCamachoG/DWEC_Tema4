document.addEventListener('mousemove', function(){fn()});
function fn(){
    var e=window.event;
    console.log("X: "+e.clientX+" Y: "+e.clientY);
}