// $(function(){
//     $('#BackTop').click(function(){ 
//       $('html,body').animate({scrollTop:0}, 333);
//     });
//     $(window).scroll(function() {
//       if ( $(this).scrollTop() > 100 ){
//         $('#BackTop').fadeIn(122);
//       } else {
//         $('#BackTop').stop().fadeOut(122);
//       }
//     }).scroll();
//   });


// here use body onscroll or need to use scroll element listener
function topbfade() {
  if (document.body.scrollTop <= 100) {
    document.getElementById('BackTop').style.cssText += 'display:none';
  } else {
    document.getElementById('BackTop').style.cssText += 'display:block';
  }
}

// back to top buttom add onclick
function backtotop() {
  document.body.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}