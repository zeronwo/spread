
$(document).ready(function () {

  var scene1 = new ScrollMagic.Scene({ triggerElement: "h1", duration: 300 })
    .setTween("h1", { opacity: 0 }) // the tween durtion can be omitted and defaults to 1

  var scene2 = new ScrollMagic.Scene({ triggerElement: ".wrapper", duration: 150, offset: 200, })
    .setTween(".wrapper", { opacity: 0 }) // the tween durtion can be omitted and defaults to 1

  var scene3 = new ScrollMagic.Scene({ triggerElement: ".jets_trigger", duration: "50%", offset: 100, })
    .setClassToggle(".jets", "in") // add class toggle
    .addIndicators() // add indicators (requires plugin)

  var scene4 = new ScrollMagic.Scene({ triggerElement: ".quote_trigger", duration: 1000, offset: 470, })
    .setPin(".quote")
    .addIndicators({ name: "1 (duration: 300)" }) // add indicators (requires plugin)

    .setClassToggle(".quote", "in") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .setTween(".quote .img.left", { translateY: "250%" }) // the tween durtion can be omitted and defaults to 1

  var scene1 = new ScrollMagic.Scene({ triggerElement: ".quote_trigger", duration: 1000, offset: 550, })
    .setTween(".quote .img.right", { translateY: "-250%" });// the tween durtion can be omitted and defaults to 1

  var scene5 = new ScrollMagic.Scene({ triggerElement: ".magazine_trigger", duration: 500, offset: -300, })
    .setTween(".magazine .img", { clipPath: 'inset(0px 0px 0px)' }) // the tween durtion can be omitted and defaults to 1
    .setClassToggle(".magazine", "in") // add class toggle
    .addIndicators() // add indicators (requires plugin)
  

  
  
    controller.addScene([
    scene,
    scene1,
    scene2,
    scene3,
    scene4,
    scene5
  ]);




});



