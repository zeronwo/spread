


$(document).ready(function (e) {

  $('.ma').click(function () {
    $('html,body').animate({ scrollTop: $('.type1').offset().top }, 800);
  });

  $('.mb').click(function () {
    $('html,body').animate({ scrollTop: $('.type2').offset().top }, 800);
  });

  $('.mc').click(function () {
    $('html,body').animate({ scrollTop: $('.type3').offset().top }, 800);
  });

  $('.md').click(function () {
    $('html,body').animate({ scrollTop: $('.type4').offset().top }, 800);
  });
  $('.me').click(function () {
    $('html,body').animate({scrollTop: '0px'}, 800);
  });





  var owl = $('.activity_photo');
  owl.owlCarousel({
    rewind: true, //播完拉回第一張開始撥
    loop: true, //循環播放
    animateOut: 'fadeOut',
    autoplay: false, //自動撥放
    nav: true, //左右箭頭
    dots: false, //小圓點
    items: 1, //數量 
    responsive:{
      0:{
        nav: false, 
        dots: true,
      },
      600:{
        nav: false, 
        dots: true,
      },
  }
  })


  
  AOS.init({
    offset: 200,
    duration: 600,
    delay: 800,
    once: true, //只執行一次動畫

  });




}); //ready
