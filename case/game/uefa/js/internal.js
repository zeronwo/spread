
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

 // 表格切換
 $('.ranking_tab li').click(function (e) {
  var $tabIndex = $(this).index();
  $(this).addClass('active').siblings(".ranking_tab li").removeClass('active');
  $(this).parents(".container").find(".ranking_table").eq($tabIndex).fadeIn().siblings(".ranking_table").hide();
});

  //計時
  $(function () {
    $('.clock_day').countdown('2020/11/1', function (event) {
        $(this).html(event.strftime('<strong>%H</strong><p>時</p><strong>%M</strong><p>分</p>'));
    });
})

  //計時
  $(function () {
    $('.clock_moon').countdown('2020/11/1', function (event) {
        $(this).html(event.strftime('<strong>%D</strong><p>天</p><strong>%H</strong><p>時</p><strong>%M</strong><p>分</p>'));
    });
})




  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });



});

