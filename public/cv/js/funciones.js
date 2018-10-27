function suma(a,b){
    console.log(a + b)   
}
var lugar = "r";
function moverBoton () {
    if (lugar=="r"){
        moverBoton.className = "ui button left floater";
        lugar = "l";
    }else if (lugar=="l"){
        moverBoton.className = "ui button right floater";
        lugar = "r";
    }
}