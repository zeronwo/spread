
$(document).ready(function () {

    $("#menu .menu_button").click(function () {
        $(this).toggleClass("active");
    });

    //手機 上方 右側拉出選單
    $("#menu .menu_rwd_toggle").click(function () {
        $(".sidemenu_top").toggleClass("active");
        $(".menu_main").toggleClass("active");
        $("body").toggleClass("active");
    });

    //手機 下方 右側拉出選單(條件搜尋)
    $(".reservation_mob").click(function () {
        $(".sidemenu_bottom").addClass("active");
        $("body").addClass("active");
    });
    //手機 下方 右側拉出選單(條件搜尋) 移除
    $(".sidemenu.sidemenu_bottom .menu_rwd_toggle").click(function () {
        $(".sidemenu_bottom").removeClass("active");
        $(".sidemenu_bottom_sub").removeClass("active");
        $("body").removeClass("active");
    });

    //手機 下方 右側拉出選單(副選單)
    $('.sidemenu.sidemenu_bottom .main ul li').click(function (e) {
        var $tabIndex = $(this).index();
        $(".sidemenu_bottom_sub").addClass("active");
        $('.sidemenu_bottom_sub ').eq($tabIndex).addClass("active").siblings(".sidemenu_bottom_sub ").removeClass("active");
    });

    //手機 下方 右側拉出選單(副選單) 移除
    $(".sidemenu_bottom_sub li.mm").click(function () {
        $(".sidemenu_bottom_sub").removeClass("active");
    });


    //首頁輪播圖
    $('.top_big_slide').owlCarousel({
        loop: true, //循環播放
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        autoplay: true, //自動撥放
        dots: false,
        smartSpeed: 450
    });

    //首頁輪播下方選單
    $(".reserv_main > ul > li ").click(function () {
        $(this).toggleClass('active').siblings("li").removeClass('active');
        $(".search-bar").removeClass("active");
    });

    //搜尋框 打開
    $(".search-bar_button").click(function () {
        $(".search-bar").toggleClass("active");
        $(".reserv_main > ul > li").removeClass("active");
    });
    //搜尋框 移除
    $(".search-bar_main button").click(function () {
        $(".search-bar").removeClass("active");
    });
    //地圖
    $('.map_clouds_coordinate ul li').click(function (e) {
        var $tabIndex = $(this).index();
        $(this).addClass('active').siblings(".map_clouds_coordinate ul li").removeClass('active');
        $('.map_content_box_inner > li').eq($tabIndex).fadeIn().addClass("active").siblings(".map_content_box_inner > li").hide().removeClass("active");
    });
    //map_select 手機下拉
    $("select[name*='map_select_']").change(function () {
        select_changed();
    });

    function select_changed() {
        $("li[class*='map_select-']").each(function () {
            $(this).removeClass("active");
        });
        $("select[name*='map_select_']").each(function () {
            var selected = $(this).val();
            $("." + selected).addClass("active");
        });
    }

    //三拉門
    $(".panels_outer ul li").click(function () {
        var $tabIndex = $(this).index();
        $(".panels_outer ul").addClass("active")
            .delay(1000)
            //1秒消失
            .queue(function () {
                $(".panels_outer").css({ "opacity": "0", "visibility": "hidden" });
                $(this).dequeue();
            });
        //影片打開 
        $('.panels_video li').eq($tabIndex).addClass("active").siblings(".panels_video li").removeClass("active");
        //影片撥放
        $('.panels_video li').eq($tabIndex).find("video").get(0).play().siblings(".panels_video li").find("video").get(0).pause().get(0).currentTime = 0;

    });

    //影片關閉
    $(".panels_video__close").click(function () {
        //取消1秒消失
        $(".panels_outer").removeAttr("style");
        $(".panels_outer ul").removeClass("active")
            .delay(800)
            .queue(function () {
                //影片1秒 關閉
                $(".panels_video li").removeClass("active");
                $(this).dequeue();
            });
    });

    //首頁水平輪播
    $(".advantage-sec-slide").bxSlider({
        minSlides: 2,
        maxSlides: 6,
        slideWidth: 500,
        slideMargin: 10,
        ticker: true,
        speed: 100000,
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        effect: 'fade',
        loop: true,
        speed: 300,
        autoplay: {
            delay: 8000,
        },
        mousewheel: {
            invert: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    //LOAD
    $("#element").introLoader({

        animation: {
            name: 'counterLoader',
            options: {
                ease: "easeOutSine",
                style: 'fluoGreen',
                animationTime: 1000
            }
        }

    });


    //lighrbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});



