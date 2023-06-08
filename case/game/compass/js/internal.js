


$(document).ready(function (e) {

  $('#ma').click(function () {
    $('html,body').animate({ scrollTop: $('.table').offset().top }, 800);
  });

  $('#mb').click(function () {
    $('html,body').animate({ scrollTop: $('.time').offset().top }, 800);
  });

  $('#mc').click(function () {
    $('html,body').animate({ scrollTop: $('.ranking-point').offset().top }, 800);
  });

  $('#md').click(function () {
    $('html,body').animate({ scrollTop: $('.accordion').offset().top }, 800);
  });


  //選單按鈕滑入效果

  $(".menu li a").hover(function () {
    $(this).parent("li").css("background-position", "bottom");
  }, function () {
    $(this).parent("li").css("background-position", "top");
  });

  //手風琴

  jQuery('.accordion-cell').click(function () {
    if (jQuery(this).hasClass('collapsed')) {
      jQuery(this).removeClass('collapsed');
      jQuery(this).siblings().removeClass('expanded');
      jQuery(this).addClass('expanded');
      jQuery(this).siblings().addClass('collapsed');
    }
    else {
      jQuery(this).toggleClass('expanded');
      jQuery(this).siblings().toggleClass('collapsed');
    }
  });

//gotop
$('.gotop').click(function () {
  $('html,body').animate({scrollTop: '0px'}, 800);
});


}); //ready
