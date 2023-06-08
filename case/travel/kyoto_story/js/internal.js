


$(document).ready(function (e) {


  //手機選單
  $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
    $("header").toggleClass("active");
    $(".menu_mob").slideToggle();
  });



  $('.m_culture').click(function () {
    $('html,body').animate({ scrollTop: $('.culture').offset().top }, 800);
  });

  $('.m_map').click(function () {
    $('html,body').animate({ scrollTop: $('.map').offset().top }, 800);
  });


  $('.m_news').click(function () {
    $('html,body').animate({ scrollTop: $('.news').offset().top }, 800);
  });
  $('.m_activity').click(function () {
    $('html,body').animate({ scrollTop: $('.activity').offset().top }, 800);
  });

  $('.go_top').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });

  //LOAD
  $("#element").introLoader({
    animation: {
        name: 'gifLoader',
        options: {
            ease: "easeInOutCirc",
            style: 'light',
            delayBefore: 500,
            delayAfter: 0,
            exitTime: 500
        }
    }
});

  $('.map_position li').click(function (e) {
    var $tabIndex = $(this).index();
    $(this).addClass('active').siblings(".map_position li").removeClass('active');
    $('.map_present li').eq($tabIndex).fadeIn().siblings(".map_present li").hide();
    $('.map_present li').eq($tabIndex).addClass("active");
  });



  $('.top_img_box').owlCarousel({
    loop: true, //循環播放
    animateOut: 'fadeOut',
    items: 1,
    margin: 0,
    autoplay: true, //自動撥放
    dots: false,
    smartSpeed: 450
  });

  var owl = $('.activity_photo');
  owl.owlCarousel({
    rewind: true, //播完拉回第一張開始撥
    loop: false, //循環播放
    animateOut: 'fadeOut',
    autoplay: false, //自動撥放
    nav: true, //左右箭頭
    dots: false, //小圓點
    margin: 80,
    items: 2, //數量 
    responsive: {
      0: {
        nav: false,
        dots: true,
        items: 1, //數量 
      },
      600: {
        nav: true,
        dots: false,

      },
    }
  })

  //首頁水平輪播
  $(".advantage-sec-slide").bxSlider({
    minSlides: 2,
    maxSlides: 6,
    slideWidth: 400,
    slideMargin: 5,
    ticker: true,
    speed: 100000
  });


  AOS.init({
    offset: 200,
    duration: 400,
    delay: 0,
    once: true, //只執行一次動畫

  });




}); //ready
