//Funcion para el menu responsivo
(function($){
  $(function(){

    $('.button-collapse').sideNav();


  }); // end of document ready
})(jQuery); // end of jQuery name space

 $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
$('.button-collapse').sideNav({
      menuWidth: 200 // Default is 240
    }
  );