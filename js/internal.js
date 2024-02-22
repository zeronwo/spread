
$(document).ready(function () {

  const app = Vue.createApp({
    data() {
      return {
        jobTitle: '',
        description: '前端要了解更多元性與完整性，喜歡瞭解原因，常思考如何能夠做得更好。對於每一項任務，會全心投入鑽研與執行，規劃出符合使用者期望的體驗設計，規劃設計未能以符合使用者預期的流程、動線、互動方式。',
        aboutItems: [
          { imagePath: 'images/about_icon01.png', text: 'ALAN' },
          { imagePath: 'images/about_icon02.png', text: 'MAIL', email: 'zeronwo7@hotmail.com' },
          { imagePath: 'images/about_icon03.png', text: '093187311' },
          { imagePath: 'images/about_icon04.png', text: '朝陽科大' },
        ],
        workItems: [
          {
            date: "2020-Now",
            company: "璽識科技有限公司",
            position: "前端設計師",
            skill: [
              "響應式網頁設計(RWD)", "開發各式版型模組化能力", "視覺設計"
            ]
          },
          {
            date: '2019-2015',
            company: '典範數位科技有限公司',
            position: '前端設計師',
            skill: [
              '響應式網頁設計(RWD)', '開發各式版型模組化能力', '網頁動態互動效設計'
            ]
          },
          {
            date: '2015-2010',
            company: '家多利行銷股份有限公司',
            position: '網頁視覺設計師',
            skill: ['展版規劃設計', '企業網站設計', '動畫影片編輯製作'],
          }
        ],
        skillItems1: [
          '網頁\n動態互動',
          'HTML5\nSCSS',
          'RWD\nCSS框架',
          'jQuery\n應用撰寫',
        ],
        skillItems2: [
          'UI/UX\n設計',
          '中大型\n網站專案',
          '網頁活動\n專頁設計',
          '開發\n模組化',
        ],
        activeCategory: 0, // 默认第一个
        caseItems: [
          {
            boxItems: [
              {
                title: 'World Cup',
                link: 'case/vision/world_cup/index.html',
                imageSrc: 'images/web_design/02-6.jpg',
                backgroundColor: 'rgba(225,169,87,0.8)',
              },
              {
                title: 'UEFA Champions League',
                link: 'case/vision/uefachampionsleague/index.html',
                imageSrc: 'images/web_design/02-5.jpg',
                backgroundColor: 'rgba(28,28,41,0.95)',
              },
              {
                title: 'FC BARCELONA',
                link: 'case/vision/barcelona/index.html',
                imageSrc: 'images/web_design/02-1.jpg',
                backgroundColor: 'rgba(8,12,24,0.95)',
              },
              {
                title: 'Dark Knight',
                link: 'case/vision/dark_knight/index.html',
                imageSrc: 'images/web_design/02-2.jpg',
                backgroundColor: 'rgba(29,29,29,0.95)',
              },
              {
                title: 'ACURA',
                link: 'case/vision/ilx/index.html',
                imageSrc: 'images/web_design/02-4.jpg',
                backgroundColor: 'rgba(0,3,18,0.95)',
              },
            ]
          },
          {
            boxItems: [
              {
                title: 'Kyoto Story',
                link: 'case/travel/kyoto_story/index.html',
                imageSrc: 'images/web_design/03-1.jpg',
                backgroundColor: 'rgba(210,49,56,0.95)',
              },
              {
                title: 'Ultima Collection',
                link: 'case/travel/hotel/index.html',
                imageSrc: 'images/web_design/03-6.jpg',
                backgroundColor: 'rgba(183,155,126,0.95)',
              },
              {
                title: 'Expedia',
                link: 'case/travel/travel/index.html',
                imageSrc: 'images/web_design/03-5.jpg',
                backgroundColor: 'rgba(36,42,58,0.95)',
              },
              {
                title: 'Life',
                link: 'case/travel/life/index.html',
                imageSrc: 'images/web_design/03-2.jpg',
                backgroundColor: 'rgba(66,97,42,0.95)',
              },
              {
                title: 'Taichung',
                link: 'case/travel/taichung/index.html',
                imageSrc: 'images/web_design/03-3.jpg',
                backgroundColor: 'rgba(68,139,202,0.95)',
              },
              {
                title: 'Kyoto',
                link: 'case/travel/kyoto/index.html',
                imageSrc: 'images/web_design/03-4.jpg',
                backgroundColor: 'rgba(68,52,36,0.95)',
              },
            ]
            
          },
          {
            boxItems: [
              {
                title: 'The University of Tokyo',
                link: 'case/business/tokyo/index.html',
                imageSrc: 'images/web_design/04-10.jpg',
                backgroundColor: 'rgba(0,127,196,0.95)',
              },
              {
                title: 'JAL corporate',
                link: 'case/business/jal/index.html',
                imageSrc: 'images/web_design/04-9.jpg',
                backgroundColor: 'rgba(358,79,67,0.95)',
              },
              {
                title: 'Sushi',
                link: 'case/business/flyplatoon/index.html',
                imageSrc: 'images/web_design/04-8.jpg',
                backgroundColor: 'rgba(40,10,11,0.95)',
              },
              {
                title: 'Sushi',
                link: 'case/business/sushi/index.html',
                imageSrc: 'images/web_design/04-7.jpg',
                backgroundColor: 'rgba(29,29,29,0.95)',
              },
              {
                title: 'Ramen',
                link: 'case/business/ramen/index.html',
                imageSrc: 'images/web_design/04-6.jpg',
                backgroundColor: 'rgba(218,86,0,0.95)',
              },
              {
                title: 'GIANT',
                link: 'case/business/giant/index.html',
                imageSrc: 'images/web_design/04-5.jpg',
                backgroundColor: 'rgba(0,166,210,0.95)',
              },
              {
                title: 'Leading',
                link: 'case/business/leading/index.html',
                imageSrc: 'images/web_design/04-1.jpg',
                backgroundColor: 'rgba(43,70,151,0.95)',
              },
              {
                title: '東京大學',
                link: 'case/business/east/index.html',
                imageSrc: 'images/web_design/04-2.jpg',
                backgroundColor: 'rgba(48,83,137,0.95)',
              },
              {
                title: 'Ikorol',
                link: 'case/business/ikorol/index.html',
                imageSrc: 'images/web_design/04-3.jpg',
                backgroundColor: 'rgba(157,153,125,0.95)',
              },
              {
                title: 'G7x',
                link: 'case/business/g7x/index.html',
                imageSrc: 'images/web_design/04-4.jpg',
                backgroundColor: 'rgba(151,134,114,0.95)',
              }
            ]
            
          },
          {
            boxItems: [
              {
                title: '籃球遊戲',
                link: 'case/game/basketball/index.html',
                imageSrc: 'images/web_design/01-9.jpg',
                backgroundColor: 'rgba(226,135,77,0.95)',
              },
              {
                title: '龍虎爭霸',
                link: 'case/game/fight/index.html',
                imageSrc: 'images/web_design/01-2.jpg',
                backgroundColor: 'rgba(92,32,118,0.95)',
              },
              {
                title: '電玩戰',
                link: 'case/game/game_war/index.html',
                imageSrc: 'images/web_design/02-3.jpg',
                backgroundColor: 'rgba(21,19,30,0.95)',
              }
            ]
            
          }
          
        ]

      };
    },
    computed: {
      //Copyright更新
      currentYear() {
        return new Date().getFullYear()
      }
    }
  });

  app.mount('#app');



  //判斷捲軸事件
  $.scrollDirection.init();
  //LOAD
  $("#element").introLoader({
    animation: {
      name: 'doubleLoader',
      options: {
        exitFx: 'fadeOut',
        ease: "easeInOutCirc",
        style: 'fluoGreen',
        delayBefore: 500,
        exitTime: 300,
        progbarTime: 700,
        progbarDelayAfter: 400
      }
    }
  });


  //gotop
  $('.gotop').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });
  //高度200 gotop出現
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });


  //手機選單
  $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
    $("header").toggleClass("active");
    $(".menu_mob").slideToggle();
  });

  //錨點移動
  $(".m_a").click(function () {
    $("html,body").animate({ scrollTop: $(".about").offset().top }, 800);
  });

  $(".m_b").click(function () {
    $("html,body").animate({ scrollTop: $(".work").offset().top }, 800);
  });

  $(".m_c").click(function () {
    $("html,body").animate({ scrollTop: $(".skill").offset().top }, 800);
  });

  $(".m_d").click(function () {
    $("html,body").animate({ scrollTop: $(".web").offset().top }, 800);
  });

  $(".m_e").click(function () {
    $("html,body").animate({ scrollTop: $(".visual").offset().top }, 800);
  });

  // 表格切換
  $('.web_menu li').click(function (e) {
    var $tabIndex = $(this).index();
    $(this).addClass('active').siblings(".web_menu li").removeClass('active');
    $('.web_list>li').eq($tabIndex).addClass('active').siblings(".web_list>li").removeClass('active');
  });


  // 網頁輪播
  $('.web_list_item').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }

    ]
  });


  //平面輪播
  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  });

  $('.slider-nav')
    .on('init', function (event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      dots: false,
      focusOnSelect: false,
      infinite: false,

      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }]
    });

  $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });

  $('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });



  AOS.init({
    offset: 300,
    duration: 600,
    delay: 100,
    once: true, //只執行一次動畫

  });



  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });



});

