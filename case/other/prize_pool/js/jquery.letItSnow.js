/*
Author: Matthew Goodrich
Date: December 2014

 */


// let it snow plugin
(function($){
  $.fn.letItSnow = function(options){
    var count = 0;
    // default settings
    var settings = $.extend({
      numSnowflakes : 5
    }, options);

    return this.each(function(){
      $(this).addClass('snow');
      function doSnowFlakes(){
        for (var i=0; i<=settings.numSnowflakes; i++){
          var $snowflake = $('<span />'),
            $flakeImg = $('<img />'),
            $imgSrc = ["images/snowflake.png", "images/snowflake-2.png", "images/snowflake-3.png", "images/snowflake-4.png"],
            $images =$imgSrc.length,
            $snowWrapper = $('.snow'),
            $width = $snowWrapper.width(),
            $randNum = function(num){
              var theNum = Math.floor(Math.random() * num);
              return theNum;
            },
            
            $leftPos = $randNum($width) + 'px',
            $imgSize = $randNum(70) + 'px',
            $fallSpeed = ['normal', 'slow-fall', 'med-fall', 'fast-fall'], // top to bottom
            $flakeSpeed = ['slow', 'medium', 'fast'], // left to right
            getSizeAndSpeed = function(getIndex){
              var $index = Math.floor(Math.random() * getIndex);
              return $index;
            };
          $flakeImg.attr({'src' : $imgSrc[$randNum($images)], 'width' : $imgSize, 'height' : $imgSize}).addClass('flake').addClass($flakeSpeed[getSizeAndSpeed(3)]).css({opacity:1});
          $snowflake.addClass('snowflake').addClass($fallSpeed[getSizeAndSpeed(4)]).append($flakeImg).css('left', $leftPos);
          $snowflake.appendTo($snowWrapper);
        }
        count ++;
      }
      doSnowFlakes();
      // do it some more for intermittent snow effect
      var numTimes = setInterval(function(){
        doSnowFlakes();
        if (count >=5){
          clearInterval(numTimes);
        }
      }, 2000);
    });
  }
}(jQuery));