(function($) {
    "use strict";


    // header sticky
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });

    // magnific popup
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // progress bar
    let options = {
        startAngle: -1.55,
        size: 150,
        value: 0.85,
        fill: { gradient: ['#4E8AC9', '#5FFBF1'] }
    }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
        function(event, progress, stepValue) {
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
        });
    $(".js .bar").circleProgress({
        value: 0.70
    });
    $(".react .bar").circleProgress({
        value: 0.95
    });
    $(".web_design .bar").circleProgress({
        value: 0.85
    });
    $(".laravel .bar").circleProgress({
        value: 0.80
    });
    $(".graphics .bar").circleProgress({
        value: 0.90
    });

    $('.gallery-active').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

})(jQuery);