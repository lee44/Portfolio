$(document).ready(function () {
    $('.menu-toggler').on('click',function(){
        // toogleClass adds or removes a class
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })

    $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').toggleClass('open');
    })

    $('nav a[href*="#"]').on('click',function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        },500);
    })

    $('#up').on('click',function(){
        $('html, body').animate({
            scrollTop: 0
        },500);
    })

    AOS.init({
        easing:'ease',
        duration: 1800,
        once: true
    })
});