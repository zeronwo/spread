
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
        nav: true,

        responsive: {
            600: {
                items: 4
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


    //日曆
    const calendar = document.getElementById('calendar');
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthEl = document.getElementById('currentMonth');
    const checkInEl = document.getElementById('checkIn');
    const checkOutEl = document.getElementById('checkOut');

    let currentDate = new Date();
    let checkInDate = new Date();
    let checkOutDate = new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000);
    let selectingCheckOut = false;

    function init() {
        checkInEl.textContent = formatDate(checkInDate);
        checkOutEl.textContent = formatDate(checkOutDate);

        checkInEl.addEventListener('click', () => showCalendar('checkIn'));
        checkOutEl.addEventListener('click', () => showCalendar('checkOut'));

        document.getElementById('prevMonth').addEventListener('click', (e) => {
            e.preventDefault(); // 阻止默認行為
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        document.getElementById('nextMonth').addEventListener('click', (e) => {
            e.preventDefault(); // 阻止默認行為
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }

    function showCalendar(inputType) {
        selectingCheckOut = (inputType === 'checkOut');
        calendar.style.display = 'block';
        currentDate = inputType === 'checkIn' ? checkInDate : checkOutDate;
        renderCalendar();
    }

    function renderCalendar() {
        calendarGrid.innerHTML = '';
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        currentMonthEl.textContent = `${year}年${month + 1}月`;

        for (let i = 0; i < firstDay; i++) {
            calendarGrid.appendChild(document.createElement('div'));
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('day');
            dayEl.textContent = day;
            const date = new Date(year, month, day);
            if (date >= checkInDate && date <= checkOutDate) {
                dayEl.classList.add('in-range');
            }
            if (isSameDate(date, checkInDate) || isSameDate(date, checkOutDate)) {
                dayEl.classList.add('selected');
            }
            dayEl.addEventListener('click', () => selectDate(date));
            dayEl.addEventListener('mouseover', () => highlightRange(date));
            calendarGrid.appendChild(dayEl);
        }
    }

    function selectDate(date) {
        if (!selectingCheckOut) {
            checkInDate = date;
            checkInEl.textContent = formatDate(checkInDate);
            selectingCheckOut = true;
            if (checkInDate >= checkOutDate) {
                checkOutDate = new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000);
                checkOutEl.textContent = formatDate(checkOutDate);
            }
        } else {
            if (date > checkInDate) {
                checkOutDate = date;
                checkOutEl.textContent = formatDate(checkOutDate);
                calendar.style.display = 'none';
                selectingCheckOut = false;
            } else {
                // 如果選擇的退房日期不大於入住日期，則將其設為入住日期，並繼續選擇退房日期
                checkInDate = date;
                checkInEl.textContent = formatDate(checkInDate);
            }
        }
        renderCalendar();
    }

    function highlightRange(date) {
        if (selectingCheckOut && date > checkInDate) {
            const days = document.querySelectorAll('.day');
            days.forEach(day => {
                const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), parseInt(day.textContent));
                if (dayDate > checkInDate && dayDate <= date) {
                    day.classList.add('in-range');
                } else if (!isSameDate(dayDate, checkInDate)) {
                    day.classList.remove('in-range');
                }
            });
        }
    }

    function formatDate(date) {
        return `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
    }

    function isSameDate(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }

    init();

});



