
$(document).ready(function () {




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





    //手機選單
    $(".menu_rwd_toggle").click(function () {
        $(".sidemenu").toggleClass("active");
        $("body").toggleClass("menu-open");

    });


    $(".language .menu_btn").click(function () {
        $(this).next(".language ul").toggleClass("active");
    });

    $(".menu_button").click(function () {
        $(this).toggleClass("active");
    });

  //LOAD
  $("#element").introLoader({
    animation: {
        name: 'gifLoader',
        options: {
            ease: "easeInOutCirc",
            style: 'light',
            delayBefore: 500,
            delayAfter: 0,
            exitTime: 500
        }
    }
});


    //首頁輪播圖
    $('.top_big_slide').owlCarousel({
        loop: true, //循環播放
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        autoplay: false, //自動撥放
        dots: false,
        smartSpeed: 450
    });

    $('.galleria__inner').owlCarousel({
        loop: true, //循環播放
        items: 1,
        margin: 0,
        autoplay: false, //自動撥放
        dots: true,
        nav:true,
 
        responsive:{
            600:{
                items:4
            }
        }
    });

    


    //月曆
    $(".datepicker").datepicker({
        numberOfMonths: 2,
        showButtonPanel: true
    });

    //手機副選單
    $(".menu_rwd_menu > li > ul").hide();
    $(".menu_rwd_menu li").click(function () {
        $(this).find("ul").slideToggle();
        $(this).siblings().find('ul').slideUp();
    });

    //滑入播圖片
    $(function () {
        $('.billboard_list li').hover(function () {
            var $tabIndex = $(this).index();
            $(".billboard_img").addClass('active');
            $('.billboard_img li').eq($tabIndex).addClass("active");
        }, function () {
            var $tabIndex = $(this).index();
            $(".billboard_img").removeClass('active');
            $('.billboard_img li').eq($tabIndex).removeClass("active");
        })
    })
    //輸入框 titile上移
    $(function () {
        let show = 'show';
        $('.field_box input').on('checkval', function () {
            let label = $(this).next('label');
            if (this.value !== '') {
                label.addClass(show);
            } else {
                label.removeClass(show);
            }
        }).on('keyup', function () {
            $(this).trigger('checkval');
        });
    });



    //lighrbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});



