function Limpiar(){
var x = document.getElementsByClassName("comida");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}


}

function Cambio(numero){
	Limpiar();
	var id="A"+numero;
var div = document.getElementById(id);
div.style.display = "block";

}

