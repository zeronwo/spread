
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

  //錨點移動
  $(".m_a").click(function () {
    $("html,body").animate({ scrollTop: $(".about").offset().top }, 800);
  });

  $(".m_b").click(function () {
    $("html,body").animate({ scrollTop: $(".work").offset().top }, 800);
  });

  $(".m_c").click(function () {
    $("html,body").animate({ scrollTop: $(".skill").offset().top }, 800);
  });

  $(".m_d").click(function () {
    $("html,body").animate({ scrollTop: $(".web").offset().top }, 800);
  });

  $(".m_e").click(function () {
    $("html,body").animate({ scrollTop: $(".visual").offset().top }, 800);
  });

  // 表格切換
  $('.web_menu li').click(function (e) {
    var $tabIndex = $(this).index();
    $(this).addClass('active').siblings(".web_menu li").removeClass('active');
    $('.web_list>li').eq($tabIndex).addClass('active').siblings(".web_list>li").removeClass('active');
  });


  // 網頁輪播
  $('.web_list_item').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }

    ]
  });


  //平面輪播
  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  });

  $('.slider-nav')
    .on('init', function (event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      dots: false,
      focusOnSelect: false,
      infinite: false,

      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }]
    });

  $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });

  $('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });



  AOS.init({
    offset: 300,
    duration: 600,
    delay: 100,
    once: true, //只執行一次動畫

  });



  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });

});

