$(function(){
    $('#BackTop').click(function(){ 
      $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 100 ){
        $('#BackTop').fadeIn(122);
      } else {
        $('#BackTop').stop().fadeOut(122);
      }
    }).scroll();
  });
