
$(document).ready(function () {


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


  //手機選單
  $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
    $("header").toggleClass("active");
    $(".menu_mob").slideToggle();
  });

  //計時
  $(function () {
    $('#clock').countdown('2021/1/1', function (event) {
        $(this).html(event.strftime('%D 天 %H:%M:%S'));
    });
})

  $(".num2").numScroll({
    time:5000
  });
  
	window.setInterval(function () {
    $(".num2").numScroll({
      time:5000
    });
        }, 8000);



  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });



});

