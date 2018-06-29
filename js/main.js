/**
 *
 * ---------------------------------------------------------------------------
 *
 * Template Name: Bold - one page creative HTML5 responsive business template
 * Template URL:  http://lovesome.biz/bold
 * Author : Bitspack
 * Version : 1.0
 *
 * --------------------------------------------------------------------------- 
 *
 */


(function ($) {
    'use strict';
	var html_body = $('html, body');
    var $window = $(window);
    var $sOfset = 500;
    var totop = $('.totop');
	var preloaderID = $('#main-preloader');
    /*  =========================
            Scroll Menu
        =========================*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.header-menu').addClass('fixed-menu');
        } else {
            $('.header-menu').removeClass('fixed-menu');
        }
    });


    // testimonial slick - slider 
    $('.client_feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.client_main_img',
        dots: false,
        autoplay: true,
    });

    // client slick js activation
    $('.client_main_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.client_feedback',
        fade: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
    });
    $('.team-slick').slick({

        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1100,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,

                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    /*  =========================
            Smooth scroll
        ========================= */
    $('.nav-link').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    /*  =========================
            Owl Carousel
        ========================= */
    /*---- main slider ----*/
    var slider_pulse = $('.slider-wraper, .testmonial-content');
    slider_pulse.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Owl Carousel Animation
    slider_pulse.on('translate.owl.carousel', function () {
        $('.slider-info h2').removeClass('animated fadeInDown').css('opacity', '0');
        $(".slider-info h3").removeClass("animated slideInRight").css("opacity", "0");
        $('.slider-info p').removeClass('animated fadeInUp').css('opacity', '0');
        $('.slider-info .button').removeClass('animated fadeIn').css('opacity', '0');
    });
    slider_pulse.on('translated.owl.carousel', function () {
        $('.slider-info h2').addClass('animated fadeInDown').css('opacity', '1');
        $(".slider-info h3").addClass("animated slideInRight").css("opacity", "1");
        $('.slider-info p').addClass('animated fadeInUp').css('opacity', '1');
        $('.slider-info .button').addClass('animated fadeIn').css('opacity', '1');
    });


    /*  ======================================
             Skill Progress
        ====================================== */
    $('.progress .progress-bar').css("width",
        function () {
            return $(this).attr("aria-valuenow") + "%";
        }
    )

    $(window).on('load', function () {

        // preloader 
        
        preloaderID.addClass('ani_1');
        setTimeout(function () {

            $('.main-navbar-top').addClass('main-navbar-top-active');
            preloaderID.fadeOut(800);

        }, 1000);
    });
	
	

    // for back to top button
    


    $('.totop').on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 500);
    });
    // scrolling change color
    $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("header-scroll");
        } else {
            $("#menu").removeClass("header-scroll");
        }
      });
    $(window).scroll(function() {
        if ($("#menu").offset().top < 56) {
            $("#menu").addClass("header-menu");
        } else {
            $("#menu").removeClass("header-menu");
        }
      });$('.totop').on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 500);
    });
    // scrolling change color
    $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("header-scroll");
        } else {
            $("#menu").removeClass("header-scroll");
        }
      });
    $(window).scroll(function() {
        if ($("#menu").offset().top < 56) {
            $("#menu").addClass("header-menu");
        } else {
            $("#menu").removeClass("header-menu");
        }
      });
      // logo nav
    $(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#scroll-nav").addClass("header-scroll-logo");
    } else {
        $("#scroll-nav").removeClass("header-scroll-logo");
    }
    });
    $(window).scroll(function() {
        if ($("#menu").offset().top < 56) {
            $("#scroll-nav").addClass("header-scroll-logo-remove");
        } else {
            $("#scroll-nav").removeClass("header-scroll-logo-remove");
        }
    });

    //scrolling function
    $window.on('scroll', function () {

        var $scrolling = $(this).scrollTop();

        if ($scrolling > $sOfset) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
	// for video-version
    $(".player").mb_YTPlayer();

}(jQuery));
