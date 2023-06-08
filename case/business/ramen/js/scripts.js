
$(document).ready(function () {
  //判斷捲軸事件
  $.scrollDirection.init();
  //LOAD
  $("#element").introLoader({
    animation: {
        name: 'gifLoader',
        options: {
            ease: "easeInOutCirc",
            style: 'light',
            delayBefore: 500,
            delayAfter: 0,
            exitTime: 300
        }
    }
});
  //gotop
  $('.gotop').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });
  //高度200 gotop出現
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });



});



