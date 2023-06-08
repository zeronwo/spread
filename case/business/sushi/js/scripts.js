
$(document).ready(function () {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
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
  //swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 100,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 2000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $('.news_main').owlCarousel({
    loop: true, //循環播放
    margin: 40,
    autoplay: true, //自動撥放
    dots: false,
    nav: true,

    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
        nav: true,
      }
    }
  });

  //首頁水平輪播
  $(".advantage-sec-slide").bxSlider({
    minSlides: 2,
    maxSlides: 6,
    slideWidth: 500,
    slideMargin: 50,
    ticker: true,
    speed: 100000,
  });

  //小照片輪流 CLASS
  function highlight(items, index) {
    index = index % items.length;
    items.removeClass("active");
    items.eq(index).addClass('active');
    setTimeout(function () { highlight(items, index + 1) }, 5000);
  }
  highlight($('.gallery li'), 0);

  //footer連結滑入
  $(function () {
    $('.link a').hover(function () {
      $(this).siblings("a").addClass('active');
    }, function () {
      $(this).siblings("a").removeClass('active');
    })
  })


  AOS.init({
    offset: 100,
    duration: 600,
    delay: 100,
    once: true, //只執行一次動畫

  });

});



