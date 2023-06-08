
$(document).ready(function () {

  //判斷捲軸事件
  $.scrollDirection.init();
  //LOAD
  $("#element").introLoader({

    animation: {
        name: 'simpleLoader',
        options: {
            exitFx:'fadeOut',
            ease: "linear",
            style: 'light',
            delayBefore: 500, //delay time in milliseconds
            exitTime: 300
        }
    },    

    spinJs: {}
    
});



  $(".menu_button").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("hidden");
  });



  //JQ hover
  $(function () {
    $(".menu_mob_main .left li").hover(

      function () {
        var $tabIndex = $(this).index();
        $('.menu_mob_main .img li').eq($tabIndex).addClass('active');
      },
      function () {
        var $tabIndex = $(this).index();
        $('.menu_mob_main .img li').eq($tabIndex).removeClass('active');
      }
    );
  });


  var tooSmall = false;
  var controller = null;
  var maxWidth = 992; // or whatever your max width is

  if ($(window).width() < maxWidth) {
    tooSmall = true;
  }

  function initScrollMagic() {
    $('body').scrollTop(0);
    controller = new ScrollMagic.Controller();
    // add your ScrollMagic scene goodness here
    var controller = new ScrollMagic.Controller();

    //topbar
    new ScrollMagic.Scene({ triggerElement: ".top", offset: 0, })
      .setTween(".topbar", { opacity: 0 }) // the tween durtion can be omitted and defaults to 1
      .setClassToggle(".topbar", "out") // add class toggle
      //.addIndicators({ name: "1 (duration:topbar)" }) // add indicators (requires plugin)
      .addTo(controller);

    //標題
    new ScrollMagic.Scene({ triggerElement: "h1", duration: 300 })
      .setTween("h1", { opacity: 0 }) // the tween durtion can be omitted and defaults to 1
      .addTo(controller);
    //mission
    new ScrollMagic.Scene({ triggerElement: ".mission .wrapper", duration: 250, offset: 200, })
      .setTween(".mission .wrapper", { opacity: 0 }) // the tween durtion can be omitted and defaults to 1
      .addTo(controller);

    //jets
    new ScrollMagic.Scene({ triggerElement: ".jets_trigger", duration: "100%", offset: 0, })
      .setClassToggle(".jets", "in") // add class toggle
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);

    //quote
    new ScrollMagic.Scene({ triggerElement: ".quote", duration: "100%", offset: 0, })
      //.setPin(".quote")
      //.addIndicators({ name: "1 (duration: 300)" }) // add indicators (requires plugin)

      .setClassToggle(".quote", "in") // add class toggle
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);

    //quote img
    var tween1 = TweenMax.to(".quote .img.left", 1, { x: 0, y: "250%" },
      { x: 0, y: "-250%" });
    var tween2 = TweenMax.to(".quote .img.right", 1, { x: 0, y: "-250%" },
      { x: 0, y: "250%" });


    new ScrollMagic.Scene({ triggerElement: ".quote", duration: 1500, offset: 0 })
      .setTween(tween1)
      .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: ".quote", duration: 1500, offset: 0 })
      .setTween(tween2)
      .addTo(controller);

    //magazine
    new ScrollMagic.Scene({ triggerElement: ".clip-type1", duration: "100%", offset: 0, })
      .setTween(".clip-type1 .img", { clipPath: 'inset(0px 0px 0px)' }) // the tween durtion can be omitted and defaults to 1
      .setClassToggle(".clip-type1", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:magazine 50)" }) // add indicators (requires plugin)
      .addTo(controller);

    //magazine out
    new ScrollMagic.Scene({ triggerElement: ".magazine_trigger_out", duration: "100%", offset: 0, })
      .setTween(".clip-type1 .img", { clipPath: 'inset(1000px 0px 0px)' }) // the tween durtion can be omitted and defaults to 1
      .addTo(controller);

    //story in
    new ScrollMagic.Scene({ triggerElement: ".story", offset: 320, })
      .setClassToggle(".story", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:story in)" }) // add indicators (requires plugin)
      .addTo(controller);

    //story in2
    new ScrollMagic.Scene({ triggerElement: ".story", offset: 950, })
      .setClassToggle(".story", "in2") // add class toggle
      //.addIndicators({ name: "2 (duration:story in2 )" }) // add indicators (requires plugin)
      .addTo(controller);

    //story out
    new ScrollMagic.Scene({ triggerElement: ".story_trigger_out", offset: 500, })
      .setClassToggle(".story", "out") // add class toggle
      //.addIndicators({ name: "2 (duration:story out )" }) // add indicators (requires plugin)
      .addTo(controller);

    //header
    new ScrollMagic.Scene({ triggerElement: ".header", duration: "200%", offset: -500 })
      .setClassToggle(".header", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:header 66%)" }) // add indicators (requires plugin)
      .addTo(controller);


    //art
    new ScrollMagic.Scene({ triggerElement: ".art", offset: -480 })
      .setClassToggle(".art", "in") // add class toggle
      // .addIndicators({ name: "2 (duration:art in 215%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //art
    new ScrollMagic.Scene({ triggerElement: ".art_trigger_out", offset: 0 })
      .setClassToggle(".art", "out") // add class toggle
      //.addIndicators({ name: "2 (duration:art-out 215%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //gallery img 1
    var tween1 = TweenMax.to(".gallery .type1", 1, { x: 0, y: "300%" },
      { x: 0, y: "-300%" });

    new ScrollMagic.Scene({ triggerElement: ".gallery", duration: "200%", offset: 50 })
      .setTween(tween1)
      //.addIndicators({ name: "2 (duration:gallerytype1 215%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //gallery img 2
    var tween2 = TweenMax.to(".gallery .type2", 1, { x: 0, y: "-250%" },
      { x: 0, y: "380%" });

    new ScrollMagic.Scene({ triggerElement: ".gallery", duration: 2000, offset: 0 })
      .setTween(tween2)
      //.addIndicators({ name: "2 (duration:gallerytype2 215%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //gallery img 3
    var tween3 = TweenMax.to(".gallery .type3", 1, { x: 0, y: "400%" },
      { x: 0, y: "-400%" });

    new ScrollMagic.Scene({ triggerElement: ".gallery", duration: 2000, offset: 50 })
      .setTween(tween3)
      //.addIndicators({ name: "2 (duration:gallerytype3 215%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //gallery in
    new ScrollMagic.Scene({ triggerElement: ".gallery", offset: 0, })
      .setClassToggle(".gallery", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:gallery 100%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //gallery out
    new ScrollMagic.Scene({ triggerElement: ".gallery_trigger_out", offset: 400, })
      .setClassToggle(".gallery", "out") // add class toggle
      //.addIndicators({ name: "2 (duration:gallery out 100%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //size in
    new ScrollMagic.Scene({ triggerElement: ".size", duration: "200%", offset: 200, })
      .setClassToggle(".size", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:size 200%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //size in2
    new ScrollMagic.Scene({ triggerElement: ".size", offset: 700, })
      .setClassToggle(".size", "in2") // add class toggle
      // .addIndicators({ name: "2 (duration:size in2)" }) // add indicators (requires plugin)
      .addTo(controller);

    //size img
    new ScrollMagic.Scene({ triggerElement: ".size", duration: "40%", offset: 700, })
      .setTween(".size .img", { clipPath: 'inset(0 0 100%)' }) // the tween durtion can be omitted and defaults to 1
      // .addIndicators({ name: "2 (duration:size img)" }) // add indicators (requires plugin)
      .addTo(controller);

    //slide in
    new ScrollMagic.Scene({ triggerElement: ".slide", offset: -210, })
      .setClassToggle(".slide", "in") // add class toggle
      // .addIndicators({ name: " (duration:slide )" }) // add indicators (requires plugin)
      .addTo(controller);


    //slide out
    new ScrollMagic.Scene({ triggerElement: ".slide_trigger_out", offset: -500, })
      .setClassToggle(".slide", "out") // add class toggle
      //.addIndicators({ name: " (duration:slide out )" }) // add indicators (requires plugin)
      .addTo(controller);


    //strip in
    new ScrollMagic.Scene({ triggerElement: ".strip", offset: -500, })
      .setClassToggle(".strip", "in") // add class toggle
      //.addIndicators({ name: " (duration:strip )" }) // add indicators (requires plugin)
      .addTo(controller);

    //reach in
    new ScrollMagic.Scene({ triggerElement: ".reach", offset: -500, })
      .setClassToggle(".reach", "in") // add class toggle
      //.addIndicators({ name: " (duration:reach )" }) // add indicators (requires plugin)
      .addTo(controller);

    //header-medias
    new ScrollMagic.Scene({ triggerElement: ".header-medias", duration: "210%", offset: -500 })
      .setClassToggle(".header-medias", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:header 66%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //carpe
    new ScrollMagic.Scene({ triggerElement: ".carpe", offset: -500, })
      .setClassToggle(".carpe", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:carpe)" }) // add indicators (requires plugin)
      .addTo(controller);

    //carpe out
    new ScrollMagic.Scene({ triggerElement: ".carpe_trigger_out", offset: 0, })
      .setClassToggle(".carpe", "out") // add class toggle
      // .addIndicators({ name: " (duration:carpe out )" }) // add indicators (requires plugin)
      .addTo(controller);


    //statement img
    var tween4 = TweenMax.to(".statement .img", 1, { x: 0, y: "-250%" },
      { x: 0, y: "380%" });

    new ScrollMagic.Scene({ triggerElement: ".statement", duration: 3000, offset: 0 })
      .setTween(tween4)
      //.addIndicators({ name: "2 (duration:statement 215%)" }) // add indicators (requires plugin)
      .addTo(controller);

    //statement in
    new ScrollMagic.Scene({ triggerElement: ".statement", offset: -500, })
      .setClassToggle(".statement", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:statement)" }) // add indicators (requires plugin)
      .addTo(controller);

    //statement out
    new ScrollMagic.Scene({ triggerElement: ".statement_trigger_out", offset: -100, })
      .setClassToggle(".statement", "out") // add class toggle
      //.addIndicators({ name: "2 (duration:statement out)" }) // add indicators (requires plugin)
      .addTo(controller);

    //dining
    new ScrollMagic.Scene({ triggerElement: ".clip-type2", duration: "100%", offset: 0, })
      .setTween(".clip-type2 .img", { clipPath: 'inset(0px 0px 0px)' }) // the tween durtion can be omitted and defaults to 1
      .setClassToggle(".clip-type2", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:dining 50)" }) // add indicators (requires plugin)
      .addTo(controller);

    //dining 
    new ScrollMagic.Scene({ triggerElement: ".dining_trigger_out", duration: "100%", offset: 0, })
      .setTween(".clip-type2 .img", { clipPath: 'inset(1000px 0px 0px)' }) // the tween durtion can be omitted and defaults to 1
      .addTo(controller);


    //story-copy
    new ScrollMagic.Scene({ triggerElement: ".story-copy", offset: -500, })
      .setClassToggle(".story-copy", "in") // add class toggle
      //.addIndicators({ name: "2 (duration:story-copy)" }) // add indicators (requires plugin)
      .addTo(controller);

  }

  if (!tooSmall) {
    initScrollMagic();
  }

  // part of the problem is that window resizes can trigger multiple times as the events fire rapidly
  // this solution prevents the controller from being initialized/destroyed more than once
  $(window).resize(function () {
    var wWidth = $(window).width();
    if (wWidth < maxWidth) {
      if (controller !== null && controller !== undefined) {
        // completely destroy the controller
        controller = controller.destroy(true);
        // if needed, use jQuery to manually remove styles added to DOM elements by GSAP etc. here
      }
    } else if (wWidth >= maxWidth) {
      if (controller === null || controller === undefined) {
        // reinitialize ScrollMagic only if it is not already initialized
        initScrollMagic();
      }
    }
  });



});



