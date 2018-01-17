$(window).scroll( function(){
  if ($(document).scrollTop() > 700) {
    $('nav').removeClass('shrink')
    $('nav').addClass('bg-info');
    $('nav').addClass('shadow');

  }else{
    $('nav').removeClass('bg-info')
    $('nav').removeClass('shadow');
    $('nav').addClass('shrink');


  }
});
