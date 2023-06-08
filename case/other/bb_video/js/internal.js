


$(document).ready(function (e) {

    //MENU ICON
    $(".b_main").click(function () {
        $(".nav-bth").slideToggle(250);
        $('nav').toggleClass("active");
        $('.b').toggleClass("on");
        return false;
    });


    //計時
    $('.counter').counterUp({
        delay: 8,
        time: 3500
    });


    //money rain
    if ($(window).width() < 960) {
        $('.wrap').letItSnow({
            numSnowflakes: 1,// number of snowflakes per cycle

        });
    }
    else {
        $('.wrap').letItSnow({
            numSnowflakes: 5,// number of snowflakes per cycle

        });
    }




}); //ready
