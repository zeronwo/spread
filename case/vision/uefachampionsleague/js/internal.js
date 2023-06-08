
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
  $(".menu_button,.md-overlay,.menu_mob a").click(function () {
    $("body").toggleClass("hidden");
    $("header,.menu_mob").toggleClass("active");

  });


  //錨點
  $('.ma').click(function () {
    $('html,body').animate({ scrollTop: $('.top').offset().top }, 800);
  });

  $('.mb').click(function () {
    $('html,body').animate({ scrollTop: $('.news ').offset().top }, 800);
  });

  $('.mc').click(function () {
    $('html,body').animate({ scrollTop: $('.standings ').offset().top }, 800);
  });

  $('.md').click(function () {
    $('html,body').animate({ scrollTop: $('.stats ').offset().top }, 800);
  });


  $('.me').click(function () {
    $('html,body').animate({ scrollTop: $('.video').offset().top }, 800);
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
      

  //首頁輪播
  $('.top_left_img_box').slick({
    arrows: true,
    autoplay: false,
    dots: false,
    infinite: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true
        }
      },

    ]
  });

  $('.news_img_box,.standings_main ul').slick({
    arrows: true,
    autoplay: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
    ]
  });



  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });




});

