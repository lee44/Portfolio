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
            scrollTop: $($(this).attr('href')).offset().top - 50
        },500);

        $('nav a[href*="#"]').removeClass('active');
        $(this).toggleClass('active');    
    })

    $('.logo').on('click',function(){
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        },500);  
    })

    $('#up').on('click',function(){
        $('html, body').animate({
            scrollTop: 0
        },500);
    })

    up = document.getElementById("up");
    arrow = document.getElementsByClassName('arrow');
    
    about_coord = $('#about').offset().top - 200;
    skills_coord = $('#skills').offset().top - 200;
    port_coord = $('#portfolio').offset().top - 200;
    contact_coord = $('#contact').offset().top - 200;
    
    var myScrollFunc = function() {
        var y = window.scrollY;

        // Toggles the Scroll Top Button
        if (y >= 400) {
            up.style.display = "flex";
            arrow[0].style.display = "none";
        } else {
            up.style.display = "none";
            arrow[0].style.display = "block";
        }

        // Highlights the section in navbar based on scroll position
        if(y < about_coord)
        {
            $('nav a[href]').removeClass('active');
            $('nav a[href*="#home"]').toggleClass('active');
        }
        else if(y >= about_coord && y < skills_coord)
        {
            $('nav a[href]').removeClass('active');
            $('nav a[href*="#about"]').toggleClass('active');
        }
        else if(y >= skills_coord && y < port_coord)
        {
            $('nav a[href]').removeClass('active');
            $('nav a[href*="#skills"]').toggleClass('active');
        }
        else if(y >= port_coord && y < contact_coord)
        {
            $('nav a[href]').removeClass('active');
            $('nav a[href*="#portfolio"]').toggleClass('active');
        }
        else if(y >= contact_coord)
        {
            $('nav a[href]').removeClass('active');
            $('nav a[href*="#contact"]').toggleClass('active');
        }
    };
      
    window.addEventListener("scroll", myScrollFunc);

    AOS.init({
        easing:'ease',
        duration: 1800,
        once: true
    })
});