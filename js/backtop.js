$(function(){
    $('#BackTop').click(function(){ 
      $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 150 ){
        $('#BackTop').fadeIn(172);
      } else {
        $('#BackTop').stop().fadeOut(172);
      }
    }).scroll();
  });
