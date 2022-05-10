$(function () {
    //////////////////////////////////////////////////////////////////

    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(5000);
    })

    $('.main_slider').on('init reInit afterChange', function () {
        // init reInit : 슬라이드 생성됐을 때, 처음부터 다시 돌아가기 시작한 시점에 afterChange : 변경되어라
        console.log('변했네 메롱');
        let current = $('.slick-current');
        // slick이 자동으로 만든 클래스인 slick-current를 부름
        current.addClass('on').siblings().removeClass('on');
        // addClass는 계속 on이 붙어있는 상태
    })

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
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
    })

    $('.utube i:nth-of-type(2)').on('click', function () {
        $('#myMovie').YTPPause();
    })
    // 명령 방법 github doc에 있음 참조


    ////////////////////////////////////////////////////////////////////
});
// 파일이 어디있든 사용하기 위해 관습적으로 사용(문서 다 로딩된 후 js 실행)