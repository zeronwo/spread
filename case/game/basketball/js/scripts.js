
$(document).ready(function () {

    // 定義兩個數字變量
    let shotInNum = 0;
    let fractionNum = 0;


    //投籃 成功或失敗
    $(".btn-shot").click(function () {
        $(".machine_bottom").addClass("active");
        $('.btn-shot').prop('disabled', true);
        $('.stage').addClass("active");

        var isShoot = Math.random() < 0.5; // 50% 的機率是 "shoot"
        var timeout = isShoot ? 3000 : 2000; // 射中設定 3 秒，射失設定 2 秒

        shotInNum++; // 每点击都增加
        $('.shot_in_number').text(shotInNum);

        if (isShoot) {
            $('.stage').addClass("shoot");

            setTimeout(function () {
                $('.increase').addClass("active");
                fractionNum += 2; // 射中才增加 fractionNum
                $('.fraction_number').text(fractionNum);
            }, 1800); // 延遲 1 秒後增加 fractionNum
        } else {
            $('.stage').addClass("missed");
        }


        setTimeout(function () {
            $('.stage').removeClass("active shoot missed");
            $(".machine_bottom,.increase ").removeClass("active");
            $('.btn-shot').prop('disabled', false);
        }, timeout);
    });

    // //關閉彈窗
    // $(".close_overlay,.open_auto .btn_close").click(function () {
    //     $('.stage').removeClass(" shoot missed active");
    //     $(".open_auto ").removeClass("open");
    //     $(".machine_bottom ").removeClass("active");
    //     $('.result').removeClass("goal fail");
    // });


    // 倒计时总秒数 
    let totalSeconds = 30;
    // 获取显示时间的元素
    const timeElement = document.querySelector('.time p');
    // 更新显示时间
    function updateTimeText() {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timeElement.textContent = `${minutes}:${seconds}`;
    }
    // 开始倒计时
    function startCountdown() {
        updateTimeText();
        const interval = setInterval(() => {
            totalSeconds--;
            updateTimeText();
            if (totalSeconds === 0) {
                clearInterval(interval);
                // 执行 $('.open_play-get').addClass("open");
                $('.open_play-get').addClass("open");
            }
        }, 1000);
    }
    window.addEventListener('load', () => {
        startCountdown();
    });



});



