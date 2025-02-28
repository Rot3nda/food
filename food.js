
function menu(){
    document.getElementById("sidebar").style.display="block";
    document.getElementById("cancel").style.display="block";
    document.getElementById("menu").style.display="none";
    document.getElementById("s2").style.zIndex=10;
}

function cancel(){
    document.getElementById("sidebar").style.display="none";
    document.getElementById("cancel").style.display="none";
    document.getElementById("menu").style.display="block";
    document.getElementById("s2").style.zIndex=1;
}