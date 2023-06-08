
$(document).ready(function () {

  //判斷捲軸事件
  $.scrollDirection.init();
  //LOAD
  $("#element").introLoader({
    animation: {
      name: 'doubleLoader',
      options: {
        exitFx: 'fadeOut',
        ease: "easeInOutCirc",
        style: 'fluoGreen',
        delayBefore: 500,
        exitTime: 300,
        progbarTime: 700,
        progbarDelayAfter: 400
      }
    }
  });


  $(".menu_rwd_toggle").click(function () {
    $(".mob_menu").toggleClass("active");
    $(".menu_button ").toggleClass("active");
    $("body").toggleClass("hidden");
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
  
  //LOAD
  $("#element").introLoader({
    animation: {
      name: 'doubleLoader',
      options: {
        exitFx: 'fadeOut',
        ease: "easeInOutCirc",
        style: 'fluoGreen',
        delayBefore: 500,
        exitTime: 300,
        progbarTime: 700,
        progbarDelayAfter: 400
      }
    }
  });

  var fixOwl = function(){
    var $stage = $('.owl-stage'),
        stageW = $stage.width(),
        $el = $('.owl-item'),
        elW = 0;
    $el.each(function() {
        elW += $(this).width()+ +($(this).css("margin-right").slice(0, -2))
    });
    if ( elW > stageW ) {
        $stage.width( elW );
    };
}
  $('.news_inner').owlCarousel({
    loop: true,
    margin: 50,
    dots: false,
    nav: true,
    autoWidth: true,
    onInitialized: fixOwl,
    onRefreshed: fixOwl,
    responsive: {
      0: {
        items: 2,
        margin: 10,
        autoWidth: false,
      },
      600: {
        items: 2,
        margin: 20,
        autoWidth: false,
      },
      1000: {
        items: 4,


      }
    }
  });
  $('.match_inner').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,


      }
    }
  });
  $('.group_inner').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,


      }
    }
  });

  $('.replay_inner').owlCarousel({

    loop: true,
    margin: 20,
    center: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 2,
        margin: 10,
      },
      600: {
        items: 2,
        margin: 20,
      },
      1000: {
        items: 3,


      }
    }
  });
  //倒數計時
  $(function () {
    $('.clock').countdown('2022/11/21 17:00:00', function (event) {
      $(this).html(event.strftime('<dl class="item"><dd>%D</dd><dt>DAYS</dt></dl><dl class="item"><dd>%H</dd><dt>HRS</dt></dl><dl class="item"><dd>%M</dd><dt>MIN</dt></dl><dl class="item"><dd>%S</dd><dt>SEC</dt></dl>'));
    });
  })

  //首頁水平輪播
  $(".advantage-sec-slide").bxSlider({
    minSlides: 2,
    maxSlides: 6,
    slideWidth: 450,
    slideMargin: 0,
    ticker: true,
    speed: 100000,
  });

  AOS.init({
    offset: 300,
    duration: 900,
    delay: 100,
    once: true, //只執行一次動畫

  });

  // ----------------------------------------------------------------
  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });

});



