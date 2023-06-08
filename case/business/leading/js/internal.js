$(document).ready(function () {

  //MENU
  $('#nav-toggle').on('click', function () {
    $(".header_menu").toggleClass("active")
    $('nav ul').slideToggle();
  });
  $(".nav-list a").click(function(){
    $(".nav-list").slideUp();
  });

  //gotop
  $('.gotop').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 600) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });
  //AOS
  AOS.init({
    offset: 300,
    duration: 600,
    delay: 0,
    once: true, //只執行一次動畫

  });
  $('.m_core').click(function () {
    $('html,body').animate({ scrollTop: $('.core').offset().top }, 800);
  });

  $('.m_service').click(function () {
    $('html,body').animate({ scrollTop: $('.service').offset().top }, 800);
  });

  $('.m_market').click(function () {
    $('html,body').animate({ scrollTop: $('.market').offset().top }, 800);
  });

  $('.m_case').click(function () {
    $('html,body').animate({ scrollTop: $('.case').offset().top }, 800);
  });
  $('.m_qa').click(function () {
    $('html,body').animate({ scrollTop: $('.qa').offset().top }, 800);
  });



  //BANNER IMG
  $('.header_content_img').UniversalTilt();

  $('.core_right li').click(function (e) {
    var $tabIndex = $(this).index();
    $(this).addClass('active').siblings(".core_right li").removeClass('active');
    $(this).parents('.row').find(".core_left>li").eq($tabIndex).fadeIn().siblings(".core_left>li").hide();
  });

  $('.progress1').LineProgressbar({
    percentage: 60,
    fillBackgroundColor: '#7a6fec'
  });
  $('.progress2').LineProgressbar({
    percentage: 95,
    fillBackgroundColor: '#f38b12'
  });
  $('.progress3').LineProgressbar({
    percentage: 80,
    fillBackgroundColor: '#55E195'
  });

  $(".market_item").mousemove(function (e) {
    $(this).find("li:nth-of-type(1)").parallax(10, e);
    $(this).find("li:nth-of-type(2)").parallax(-30, e);
    $(this).find("li:nth-of-type(3)").parallax(20, e);

  });

  $(".faq_txt").hide();
  $(".faq_title").click(function () {
    $(this).parent().toggleClass("open").siblings().removeClass('open');
    $(this).parent().find(".faq_txt").slideToggle();
    $(this).parent().siblings().find('.faq_txt').slideUp();
  });


  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });

});