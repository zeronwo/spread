
$(document).ready(function () {
    $(".include_menu").load("include/menu.html");
    $(".include_footer").load("include/footer.html");




    var bodyClass = document.body.classList,
        lastScrollY = 200;
    window.addEventListener('scroll', function () {
        var st = this.scrollY;
        // 判斷是向上捲動，而且捲軸超過 200px
        if (st < lastScrollY) {
            bodyClass.remove('open');
        } else {
            bodyClass.add('open');
        }
        lastScrollY = st;
    });



    //首頁輪播
    $('.header_img_box').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: false,
        infinite: true,
        fade: true,
        pauseOnHover: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });


 

    //lookbook最愛
    $(".lookbook_heart,.FavoritesButton").click(function () {
        $(this).toggleClass("active");

    });

    new Vue({
        el: "#app", //
        data: {
            items: [
                {
                    "圖片": "imgs/lookbook/default_name.png",
                    "名稱": "Bedding Sets",
                },
                {
                    "圖片": "imgs/lookbook/default_name (1).png",
                    "名稱": "Comforters",
                },
                {
                    "圖片": "imgs/lookbook/default_name (2).png",
                    "名稱": "Quilts & Coverlets",
                },
                {
                    "圖片": "imgs/lookbook/default_name (3).png",
                    "名稱": "Duvet Covers",
                },
                {
                    "圖片": "imgs/lookbook/default_name (4).png",
                    "名稱": "Bed Skirts",
                },
                {
                    "圖片": "imgs/lookbook/default_name (5).png",
                    "名稱": "Shams",
                },
                {
                    "圖片": "imgs/lookbook/default_name (6).png",
                    "名稱": "Throw Pillows",
                },
                {
                    "圖片": "imgs/lookbook/default_name (7).png",
                    "名稱": "Bedding Sale",
                },
                {
                    "圖片": "imgs/lookbook/default_name (8).png",
                    "名稱": "Shams",
                },
            ],
            items2: [

                {
                    "圖片": "imgs/lookbook/default_name (9).png",
                    "名稱": "Duvet Inserts",
                },
                {
                    "圖片": "imgs/lookbook/default_name (10).png",
                    "名稱": "Sheets & Pillowcases",
                },
                {
                    "圖片": "imgs/lookbook/default_name (11).png",
                    "名稱": "Bed Pillows",
                },

            ],

        },

    });
    //# sourceURL=pen.js


    //lookbook WEB的篩選
    $(".lookbook_menu_web .lookbook_submenu").hide();
    $(".lookbook_menu_web li button").click(function () {
        $(this).parent().toggleClass("open").siblings().removeClass("open");
        $(this).parent().find(".lookbook_submenu").slideToggle();
        $(this).parent().siblings().find(".lookbook_submenu").slideUp();
    });


    //右側選單的lookbook MOB的篩選
    $(".right-menu .lookbook_submenu").hide();
    $(".right-menu li button").click(function () {
        $(this).parent().toggleClass("open").siblings().removeClass("open");
        $(this).parent().find(".lookbook_submenu").slideToggle();

    });

    //呼叫右側選單
    $(".right-menu_btn").click(function () {
        $(".right-menu").toggleClass("open");
        $("body").css({ "overflow": "hidden", "max-height": "100vh" });
    });

    //關閉右側選單 
    $(".right-menu_overlay,.right-menu_close").click(function () {
        $(".right-menu").removeClass("open");
        $("body").removeAttr("style");
    });

    //lookbook 標籤取消
    $(".lookbook_menu_list button").click(function () {
        $(this).parent("li").remove();
    });

    //lookbook 標籤全取消
    $(".lookbook_menu_list_clear").click(function () {
        $(".lookbook_menu_list").remove();
    });


    // 表格切換
    $('.lookbook_main_select').click(function (e) {
        var $tabIndex = $(this).index();
        $(".right-menu_list").eq($tabIndex).fadeIn().siblings(".right-menu_list").hide();
    });

    //lookbook輪播圖
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        infinite: false,
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        focusOnChange: false,
        infinite: false,
        centerMode: false,
        vertical: true,
        responsive: [

            {
                breakpoint: 1300,
                settings: {

                    vertical: false,
                }
            }

        ]

    });



    //lookbook_style
    $(".lookbook_style_list").hide();
    $(".lookbook_style>ul>li>button").click(function () {
        $(this).parent().toggleClass("open").siblings().removeClass("open");
        $(this).parent().find(".lookbook_style_list").slideToggle();
        $(this).parent().siblings().find(".lookbook_style_list").slideUp();
    });

    $(".lookbook_style_see").click(function () {
        $(this).toggleClass("open");
        $(".lookbook_style_box").slideToggle();
    });


    //lookbook輪播圖
    $('.lookbook_recommend_box').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //首頁水平輪播
    $(".advantage-sec-slide").bxSlider({
        minSlides: 2,
        maxSlides: 6,
        slideWidth: 400,
        slideMargin: 1,
        ticker: true,
        speed: 100000
    });


});



