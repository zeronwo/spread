jQuery(function ($) {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function () {
    if (windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
  });
});

$(document).ready(function () {
  //倒數
  $('.flip-3').on('done', function () {
    console.log('doooooonnnnnee!');
  });
  $('.flip-3').on('beforeFlipping', function (e, data) {
    console.log('beforeFlipping:', data);
  });
  $('.flip-3').on('afterFlipping', function (e, data) {
    console.log('afterFlipping:', data);
  });

  //右選單

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 650) {
      $(".menu .menu_main").addClass("active");
    } else {
      $(".menu .menu_main").removeClass("active");
    }
  });

  $(".menu_sub>a").click(function () {
    $(this).next('.menu_sub_sub').slideToggle();
  });

  $(".menu_sub_sub li>a").click(function(){
    $(this).prepend("<div class='menu_sub_money ldx ldx-slide-btt'>+6000</div>")
    setTimeout(function(){
      $(this).remove();
  }, 800)
   
     
  });



  //金牌 銀牌選擇
  $(".card li").click(function () {
    $(this).addClass("active").siblings("li").removeClass('active');
  });

  //宣告
  var r1 = new TimelineMax(),
    r2 = new TimelineMax(),
    r3 = new TimelineMax(),
    r4 = new TimelineMax(),
    r5 = new TimelineMax(),
    r6 = new TimelineMax()

  //打開紅包彈窗
  $(".bonus_main_red_envelope a").click(function () {
    //打開紅包彈窗
    $(".md").addClass("active")
      //延遲
      .delay(6500)
      .queue(function () {
        //选择您的幸运红包標題顯示
        $('.red_box_title').addClass("active");
        $(this).dequeue();
      });
    //紅包啟動
    r1.play();
    r2.play();
    r3.play();
    r4.play();
    r5.play();
    r6.play();

  });


  //选择您的幸运红包
  $(".back a").click(function () {
    //翻牌
    $(".red_box_item").removeClass("active");
    //大紅包
    $(this).parents('.red_box_item').addClass("open")
      //延遲4.5s
      .delay(2500)
      .queue(function () {
        //小紅包隱藏 大紅包顯示
        $('.red_box').addClass("flop");
         //选择您的幸运红包標題隱藏
         $('.red_box_title').removeClass("active");
        $(this).dequeue();
      });

  });



  // 大紅包出現  紅包彈窗關閉
  $(".money_main .bth").click(function () {
    $(".md").removeClass("active");
    //大紅包隱藏
    $('.red_box').removeClass("flop");
    $(".red_box_item ").removeClass("active2 active2 open");
    r1
      //紅包重播暫停
      .restart()
      .pause();
    r2
      .restart()
      .pause();
    r3
      .restart()
      .pause();
    r4
      .restart()
      .pause();
    r5
      .restart()
      .pause();
    r6
      .restart()
      .pause();

  });





  r1
    //暫停
    .pause()
    .to(".r1", 3, { x: 0, y: 0, })
    //翻牌
    .call(function () { $('.r1').addClass("active"); }, null, null, 1)
    //回中央
    .to(".r1", 0.5, { x: 275, y: 137, delay: 1 })

    //洗牌
    .to(".r1", 0.3, { x: 150, y: 137, })
    .to(".r1", 0.3, { x: 275, y: 137, })
    .to(".r1", 0.3, { x: 150, y: 137, })
    .to(".r1", 0.3, { x: 275, y: 137, })
    //回原點
    .to(".r1", 0.5, { x: 0, y: 0 })
    //请选择
    .call(function () { $('.r1').addClass("active2"); }, null, null, 2)

  r2
    //暫停
    .pause()
    //原點停3秒
    .to(".r2", 3, { x: 0, y: 0, })
    //翻牌
    .call(function () { $('.r2').addClass("active"); }, null, null, 1)
    //回中央
    .to(".r2", 0.5, { x: 0, y: 137, delay: 1 })
    //洗牌
    .to(".r2", 0.3, { x: -125, y: 137, delay: 0.1 })
    .to(".r2", 0.3, { x: 0, y: 137, })
    .to(".r2", 0.3, { x: -125, y: 137, })
    .to(".r2", 0.3, { x: 0, y: 137, })
    //回原點
    .to(".r2", 0.5, { x: 0, y: 0, })
    //请选择
    .call(function () { $('.r2').addClass("active2"); }, null, null, 2)

  r3
    //暫停
    .pause()
    //原點停3秒
    .to(".r3", 3, { x: 0, y: 0, })
    //翻牌
    .call(function () { $('.r3').addClass("active"); }, null, null, 1)
    //回中央
    .to(".r3", 0.5, { x: -277, y: 137, delay: 1 })
    //洗牌
    .to(".r3", 0.3, { x: -352, y: 137, delay: 0.1 })
    .to(".r3", 0.3, { x: -277, y: 137, })
    .to(".r3", 0.3, { x: -352, y: 137, })
    .to(".r3", 0.3, { x: -277, y: 137, })
    //回原點
    .to(".r3", 0.5, { x: 0, y: 0, })
    //请选择
    .call(function () { $('.r3').addClass("active2"); }, null, null, 2)

  r4
    //暫停
    .pause()
    //原點停3秒
    .to(".r4", 3, { x: 0, y: 0, })
    //翻牌
    .call(function () { $('.r4').addClass("active"); }, null, null, 1)
    //回中央
    .to(".r4", 0.5, { x: 275, y: -143, delay: 1 })

    //洗牌
    .to(".r4", 0.3, { x: 350, y: -143, })
    .to(".r4", 0.3, { x: 275, y: -143, })
    .to(".r4", 0.3, { x: 350, y: -143, })
    .to(".r4", 0.3, { x: 275, y: -143, })
    //回原點
    .to(".r4", 0.5, { x: 0, y: 0, })
    //请选择
    .call(function () { $('.r4').addClass("active2"); }, null, null, 2)

  r5
    //暫停
    .pause()
    //原點停3秒
    .to(".r5", 3, { x: 0, y: 0, })
    //翻牌
    .call(function () { $('.r5').addClass("active"); }, null, null, 1)
    //回中央
    .to(".r5", 0.5, { x: 0, y: -143, delay: 1 })

    //洗牌
    .to(".r5", 0.3, { x: 75, y: -143, delay: 0.1 })
    .to(".r5", 0.3, { x: 0, y: -143, })
    .to(".r5", 0.3, { x: 75, y: -143, })
    .to(".r5", 0.3, { x: 0, y: -143, })
    //回原點
    .to(".r5", 0.5, { x: 0, y: 0, })
    //请选择
    .call(function () { $('.r5').addClass("active2"); }, null, null, 2)

  r6
    //暫停
    .pause()
    //原點停3秒
    .to(".r6", 3, { x: 0, y: 0, })
    //翻牌
    .call(function () { $('.r6').addClass("active"); }, null, null, 1)
    //回中央
    .to(".r6", 0.5, { x: -277, y: -143, delay: 1 })
    //洗牌
    .to(".r6", 0.3, { x: -150, y: -143, delay: 0.1 })
    .to(".r6", 0.3, { x: -277, y: -143, })
    .to(".r6", 0.3, { x: -150, y: -143, })
    .to(".r6", 0.3, { x: -277, y: -143, })
    //回原點
    .to(".r6", 0.5, { x: 0, y: 0, })
    //请选择
    .call(function () { $('.r6').addClass("active2"); }, null, null, 2)





  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });


});

