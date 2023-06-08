$(document).ready(function (e) {


    $(function () {
        $('.m_home').click(function () {
            $('html,body').animate({ scrollTop: '0px' }, 800);
        });

        $('.m_power').click(function () {
            $('html,body').animate({ scrollTop: $('.power').offset().top }, 800);
        });

        $('.m_focus').click(function () {
            $('html,body').animate({ scrollTop: $('.focus').offset().top }, 800);
        });


        $('.m_property').click(function () {
            $('html,body').animate({ scrollTop: $('.property').offset().top }, 800);
        });

        $('.m_accessories').click(function () {
            $('html,body').animate({ scrollTop: $('.acce').offset().top }, 800);
        });

    });

    var bodyClass = document.body.classList,
        lastScrollY = 0;
    window.addEventListener('scroll', function () {
        var st = this.scrollY;
        // 判斷是向上捲動，而且捲軸超過 200px
        if (st < lastScrollY) {
            bodyClass.remove('hideUp');
        } else {
            bodyClass.add('hideUp');
        }
        lastScrollY = st;
    });



    $('.top_img_box').owlCarousel({
        loop: true, //循環播放
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        autoplay: true, //自動撥放
        dots: false,
        smartSpeed: 450
    });






}); //ready

//左側選單縮放
function xmenu_obj(objA) {
    var _this = objA;

    if (_this.nextAll("ul").length > 0) {
        if (_this.nextAll("ul").is(":visible")) {
            _this.nextAll("ul").slideUp("fast");
            _this.next(".menu_icon").removeClass("menu_icon-");

        } else {
            _this.nextAll("ul").slideDown("fast");
            _this.next(".menu_icon").addClass("menu_icon-");
        }
        return false;
    }

}