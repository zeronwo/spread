
$(document).ready(function () {




    //滑下出現選單
    var new_scroll_position = 0;
    var last_scroll_position;
    var header = document.getElementById("header");
    window.addEventListener('scroll', function (e) {
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
    $(".menu_button,.md-overlay,.menu_mob a").click(function () {
        $("body").toggleClass("hidden");
        $(this).toggleClass("active");
        $(".menu_mob").toggleClass("active");

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

    //零件
    $('.parts__inner').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true,

    })
    //促銷
    $('.promotion__inner').owlCarousel({
        center: true,
        loop: true,
        margin: 60,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 4,

            }
        }
    });

    //最新消息
    $('.news__inner').owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                nav: false,
                items: 1,
                dots: true,

            },
            1000: {
                nav: true,
                items: 1,
                dots: false,

            }
        }

    })

    //lighrbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});



