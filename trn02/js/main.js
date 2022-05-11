$(function () {
    //////////////////////////////////////////////////////////////////

    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(5000);
        // slideUp:선택한 요소를 위로 사라지게, 5000: 5초
    })

    $('.main_slider').on('init reInit afterChange', function (e, s, c) {
        // 매개변수 e: event, s:slick c:current
        // init reInit : 슬라이드 생성됐을 때, 처음부터 다시 돌아가기 시작한 시점에 afterChange : 변경되어라
        console.log('변했네 메롱');
        let current = $('.slick-current');
        // slick이 자동으로 만든 클래스인 slick-current를 부름
        current.addClass('on').siblings().removeClass('on');
        // addClass는 계속 on이 붙어있는 상태
        console.log(e, s, c)
    })

    $('.main_slider').slick({
        arrows: false,
        // previous, next 버튼 사라짐
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        // 클릭시 멈춤
    });

    $('.movie .dec i:nth-of-type(1)').on('click', function () {
        $('.movie video').trigger('play')
    });
    // 선택자로 부르면 이름 바뀌면 js 수정해야하므로 위치로 잡기
    $('.movie .dec i:nth-of-type(2)').on('click', function () {
        $('.movie video').trigger('pause')
    });

    $("#myMovie").YTPlayer({
        videoURL: 'https://youtu.be/5OI8gygTVLg',
        containment: '.utube',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true
        // 자원 아끼기 위해 보일 때만 play
    });

    $('.utube i:nth-of-type(1)').on('click', function () {
        $('#myMovie').YTPPlay();
    });

    $('.utube i:nth-of-type(2)').on('click', function () {
        $('#myMovie').YTPPause();
    });
    // 명령 방법 github doc에 있음 참조

    // slide 돌아갈 때 중간 커지게 하기, delay 생김
    //  $('.product_slider').on('init reInit afterChange', function () {
    //     // init reInit : 슬라이드 생성됐을 때, 처음부터 다시 돌아가기 시작한 시점에 afterChange : 변경되어라
    //     let current = $('.slick-current');
    //     // slick이 자동으로 만든 클래스인 slick-current를 부름
    //     current.addClass('on').siblings().removeClass('on');
    //     // addClass는 계속 on이 붙어있는 상태, slider가 움직일 때마다 on이 붙게 됨
    // })

    $('.product_slider').slick({
        slidesToShow: 5,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
    });

    $('.product_list .s_left').on('click', function () {
        $('.product_slider').slick('slickPrev')
    })
    $('.product_list .s_right').on('click', function () {
        $('.product_slider').slick('slickNext')
    })

    $('.tab_link>li').on('click', function () {
        var idx = $(this).index();
        // index() : 번호를 부르기
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on').siblings().removeClass('on');
        // eq: nth of type처럼 몇번째인지
        // siblings: 형제자매, 나머지들
    })

    $('.footer #link').on('change', function () {
        var lik = $(this).val();
        if (lik) window.open(lik);
        // 만약 lik(link)가 있으면 띄워라,중괄호 생략된 상태
        // 새창을 띄워라
        // console.log(lik);
    })


    ////////////////////////////////////////////////////////////////////
});
// 전체를 한 번 묶는 이유: 파일이 어디있든 사용하기 위해 관습적으로 사용(문서 다 로딩된 후 js 실행,js가 html 위치에 관계없이 앞에 써도 실행됨)
