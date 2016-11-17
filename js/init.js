//Funcion para el menu responsivo
(function($){
  $(function(){

    $('.button-collapse').sideNav();


  }); // end of document ready
})(jQuery); // end of jQuery name space

 $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

function Muestra(n) {
	var s= n-1;
	LimpioImagen();
	 var x = document.getElementsByClassName('comida');
   x[s].style.display='block'




}
function LimpioImagen(){
	 document.getElementById('elemento').style.display = 'none';
}