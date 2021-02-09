$(document).ready(function () {
    $('.menu-toggler').on('click',function(){
        // toogleClass adds or removes a class
        $(this).toggleClass('open');
        $('.hidden-top-nav').toggleClass('open');
    })

    $('.hidden-top-nav .hidden-nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.hidden-top-nav').toggleClass('open');
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

    up = document.getElementById("up");
    var myScrollFunc = function() {
        var y = window.scrollY;
        if (y >= 400) {
            up.style.display = "flex"
        } else {
            up.style.display = "none"
        }
    };
      
    window.addEventListener("scroll", myScrollFunc);

    AOS.init({
        easing:'ease',
        duration: 1800,
        once: true
    })
});