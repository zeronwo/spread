$(document).ready(function () {

    //MENU ICON
    $(".b_main").click(function () {
        $(".menu2").slideToggle(250);
        $('nav').toggleClass("active");
        $('.b').toggleClass("on");
        return false;
    });


    $(".nav_parent a").click(function () {
        $(this).next().toggle();
    });

    $('.nav_parent a,.m_search,.main_bn_share').on('keydown', function (e) {
        if (e.keyCode == 9);

        $(this).next().show(200, function () {
            $(this).next("ul li:first-of-type a").focus();
        });


    })

    $(".nav_focus li:last-of-type a,search_word a:last-of-type,.share li:last-of-type a").blur(function () {
        $(this).parents('.nav_focus,.share_web').hide();
        $(this).parents('.share_web').removeAttr("style");
    });

    //fat_footer
    $("#ff_btn").click(function () {
        $('#ff_btn').toggleClass("active");
        $("#fat_footer").slideToggle("slow");
    });



    //lightbox
    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function () {
                if (window.console) {
                    return console.log('Checking our the events huh?');
                }
            }
        });
    });

});