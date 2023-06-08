
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

  $(".num2").numScroll({
    time:5000
  });
  
	window.setInterval(function () {
    $(".num2").numScroll({
      time:5000
    });
        }, 8000);


  //money rain
  if ($(window).width() < 960) {
    $('.money_rain').letItSnow({
      numSnowflakes: 5,// number of snowflakes per cycle

    });
  }
  else {
    $('.money_rain').letItSnow({
      numSnowflakes: 15,// number of snowflakes per cycle

    });
  }
  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });



});

