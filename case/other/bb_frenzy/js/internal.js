


$(document).ready(function (e) {

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


    //計時
    $('.counter').counterUp({
        delay: 8,
        time: 3000
    });
    //查詢排行彈出視窗
    $(".search-icon").click(function () {
        $(".ranking-list").fadeIn();
        $(".ranking-list .content").addClass("active");
    });

    //活動規則彈出視窗
    $(".rule-icon").click(function () {
        $(".rule-list").fadeIn();
        $(".rule-list .content").addClass("active");
    });



    $(".lightbox-close2").click(function () {
        $(".lightbox-target2").hide();
        $(".lightbox-target2 .content").removeClass("active");
    });
    //周月榜切換
    $('.main-tab li').click(function (e) {
        var $tabIndex = $(this).index();
        $(this).addClass('active').siblings(".main-tab li").removeClass('active');
        $('.main-item').eq($tabIndex).fadeIn().siblings(".main-item").hide();
    });

    //排名下拉
    $(".more-bth").click(function () {
        $('.more-bth').toggleClass("active");
        $(this).next(".more").slideToggle("slow");
    });


}); //ready
