// js로 .header 숨기기
// window.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('.header').style.display = 'none';
// })

// jquery로 숨기기
//1.  $('.header').hide().show();
// hide() : jquery 메소드(함수) = js display=none;
//2.  $(function () {
//     $('.header').hide();
// })

$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true,
        dots: true,
    })

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
        $('.mopen').toggleClass('oo')
    })
    // on = js addEventListener


})