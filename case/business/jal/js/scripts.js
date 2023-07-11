
$(document).ready(function () {


    //手機 上方 右側拉出選單
    $(" .menu_rwd").click(function () {
      $(this).toggleClass("active");
      $(".mob_menu").toggleClass("active");
      $(".menu_main").toggleClass("active");
      $("body").toggleClass("hidden");
  });

    //滑下出現選單
    var new_scroll_position = 0;
    var last_scroll_position;
    var header = document.getElementById("header");
    window.addEventListener('scroll', function(e) {
      last_scroll_position = window.scrollY;
      // Scrolling down
      if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        // header.removeClass('slideDown').addClass('slideUp');
        header.classList.add("slideUp");
        // Scrolling up
      } else if (new_scroll_position > last_scroll_position) {
        // header.removeClass('slideUp').addClass('slideDown');
        header.classList.remove("slideUp");
      }
      new_scroll_position = last_scroll_position;
    });




  $('.top_list').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    dots: false,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('.top_list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.top li[data-slick-index="' + currentSlide + '"]').addClass('is-out');
    $('.top li[data-slick-index="' + nextSlide + '"]').removeClass('is-in');

    // �𨳍��
    $('.top_nav a').removeClass('is-current').removeClass('is-start');
    $('.top_nav a[data-slide-index="' + nextSlide + '"]').addClass('is-current');
    // console.log(currentSlide);
  });

  $('.top_list').on('afterChange', function (event, slick, currentSlide) {
    $('.top li[data-slick-index="' + currentSlide + '"]').removeClass('is-in').removeClass('is-out');
    $('.top li').not('[data-slick-index="' + currentSlide + '"]').addClass('is-in').removeClass('is-out');
  });

  $('.top_nav li a').click(function () {
    var index = $(this).data('slide-index');
    $('.top_list').slick('slickGoTo', index, false);
  });
  $('.top_nav .prev').click(function () {
    $('.top_list').slick('slickPrev');
  });
  $('.top_nav .next').click(function () {
    $('.top_list').slick('slickNext');
  });

  //最新消息
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  //
  var swiper = new Swiper('.info .swiper', {
    //Pagination
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //Arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: 30,
  });

  //各界肯定
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    slidesPerView: 4,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
     loop: true,

  });

  var galleryMain = new Swiper(".gallery-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
     loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });



});



