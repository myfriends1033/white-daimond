$(function(){
    $('#BackTop').click(function(){ 
      $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 200 ){
        $('#BackTop').fadeIn(222);
      } else {
        $('#BackTop').stop().fadeOut(222);
      }
    }).scroll();
  });