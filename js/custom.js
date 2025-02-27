// JavaScript Document
var w = 0;
$(function() {
    "use strict";

    function responsive_dropdown() {
        /* ---- For Navbar JS Start ---- */
        $('.navbar-toggle').on("click", function() {
            var menu_id = $('#menu');
            var nav_icon = $('.navbar-toggle i');
            if (menu_id.hasClass('menu-open')) {
                menu_id.removeClass('menu-open');
                nav_icon.removeClass('fa-close');
                nav_icon.addClass('fa-bars');
            } else {
                menu_id.addClass('menu-open');
                nav_icon.addClass('fa-close');
                nav_icon.removeClass('fa-bars');
            }
            return false;
        });
        /* ---- For Navbar JS End ---- */

    }

    /*index : Roadmap slider*/
    if ($("#roadmap-slider").length > 0) {
        $("#roadmap-slider").owlCarousel({
            //loop: true,
            autoplay: false,
            dots: true,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    nav: false
                },
                420: {
                    items: 2,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                767: {
                    items: 3,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                1200: {
                    items: 4,
                    loop: true,
                    nav: false,
                    margin: 0
                },
            }
        });
    }
    /*end Roadmap slider*/

    /*click to scroll menu*/
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - 50
        }, 1500);
    });
    /*end scroll menu*/

    function faq_tab() {
        $("#tabs li a").on("click", function(e) {
            var title = $(e.currentTarget).attr("title");
            $("#tabs li a , .tab_content li div").removeClass("selected");
            $(".tab-" + title + ", .items-" + title).addClass("selected");
            $("#items").attr("class", "tab-" + title);

            return false;
        });
    }

    function tokan_graph() {
        var scrollDistance = $(window).scrollTop();
        var scrollDistance1 = $('#tokensale-part').offset().top - 100;
        console.log(scrollDistance + '--' + scrollDistance1)
        if (scrollDistance >= (scrollDistance1 - 100)) {
            $('.donut').listtopie({
                startAngle: 270,
                strokeWidth: 5,
                hoverEvent: true,
                hoverBorderColor: '#6239d7',
                hoverAnimate: false,
                drawType: 'round',
                speedDraw: 150,
                hoverColor: '#ffffff',
                textColor: '#3d1f94',
                strokeColor: '#3d1f94',
                textSize: '18',
                hoverAnimate: true,
                marginCenter: 85,
            });
        }
    }

    /* menu overlay start */
    $(".navbar-toggle").on("click", function() {
        if (!$(".navbar-collapse").hasClass("menu-open")) {
            $(".overlay").fadeIn("slow")
        }
    })
    $(".overlay").on("click", function() {

        $(this).fadeOut();
        $(".navbar-collapse").removeClass("in").addClass("collapse");
        $(".navbar-toggle").click();
        return false;
    })

    $('.nav-link').on('click', function(e) {
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
        if ($(window).width() < 991) {
            $(".navbar-toggle").click();
            $(".overlay").fadeOut();
            $(".navbar-collapse").removeClass("in").addClass("collapse");
        }
    });
    /* menu overlay end */

    $(window).on('scroll', function() {
        /*index : header animation*/
        if ($(this).scrollTop() > 0) {
            $("header").addClass("header-fixed");
        } else {
            $("header").removeClass("header-fixed");
        }
        /*end index : header animation*/
        tokan_graph();
    })


    $(window).on('resize', function() {
        //location.reload();
        $('.donut').listtopie('refresh');
        $('html, body').animate({
            scrollTop: '0px'
        }, 100);

    });


    $(".main-box").addClass(function(index) {
        if ((index + 1) % 2 == 0) {
            //return "fadeInDown";
            $(".main-box").eq(index).children().children(".roadmap-detail-box").addClass('fadeInDown')
            $(".main-box").eq(index).children().children(".date-title").addClass('fadeInUp')
        } else {
            $(".main-box").eq(index).children().children(".roadmap-detail-box").addClass('fadeInUp')
            $(".main-box").eq(index).children().children(".date-title").addClass('fadeInDown')
            //return "fadeInUp";
        }
    });

    responsive_dropdown();
    faq_tab(); /*accordion ();*/

});

$(window).on("load", function() {
    "use strict";
    /* -------- preloader ------- */
    $('#preloader').delay(2000).fadeOut(500);
    /*------End----------*/

    $(".token-graph").addClass("token-graph-right");

    w = $(window).width();

});