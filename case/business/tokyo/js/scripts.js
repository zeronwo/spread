
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $(".menu").addClass("active");
        } else {
            $(".menu").removeClass("active");
        }
    });
    //手機 上方 右側拉出選單
    $(" .menu_button").click(function () {
        $(".menu_rwd").toggleClass("active");
        $(".mob_menu").toggleClass("active");
        $("body").toggleClass("hidden");
    });

    $(".utility a").click(function () {
        $(this).parents("li").toggleClass("active")
            .siblings("li")
            .removeClass("active");
    });

    //top_banner
    var swiper = new Swiper(".top_banner", {
        spaceBetween: 100,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 2000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    var newswiper = new Swiper(".new_main .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".new_main .swiper-button-next",
            prevEl: ".new_main .swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false,
            }
        },
    });


    $('.about_round ul').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 3841,
                settings: 'unslick'
            },
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    draggable: true,
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: 'ease-in-out'
                }
            },
            {
                breakpoint: 601,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    draggable: true,
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: 'ease-in-out'
                }
            },
            {
                breakpoint: 376,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    arrows: true,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: 'ease-in-out'
                }
            }
        ]
    });

    // reslick
    $(window).on('orientationchange', function () {
        $('.about_round ul').slick('resize');
    });


    $('.advantage_list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('.advantageArea .box .arrowPrev'),
        nextArrow: $('.advantageArea .box .arrowNext'),
        arrows: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 1741,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1391,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1081,
                settings: {
                    centerMode: true,
                    centerPadding: '300px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 981,
                settings: {
                    centerMode: true,
                    centerPadding: '250px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 841,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 741,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 641,
                settings: {
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 541,
                settings: {
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });




    var studentTxt = new Swiper('.student_main .swiper-container', {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 50,
        effect: "fade",
        navigation: {
            nextEl: '.student .swiper-button-next',
            prevEl: '.student .swiper-button-prev',
        },
    });


    var studentList = new Swiper('.student_list .swiper-container', {
        direction: 'vertical',
        slidesPerView: 3,
        slideToClickedSlide: true,
        spaceBetween: 10,
        loopedSlides: 50,
        loop: true,
        centeredSlides: true,

    });

    studentTxt.controller.control = studentList;//studentTxt控制studentList，需要在studentList初始化后
    studentList.controller.control = studentTxt;//studentList控制studentTxt，需要在studentTxt初始化后


});



