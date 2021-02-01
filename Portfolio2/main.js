$(document).ready(function () {
    $('.menu-toggler').on('click',function(){
        // toogleClass adds or removes a class
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })
});