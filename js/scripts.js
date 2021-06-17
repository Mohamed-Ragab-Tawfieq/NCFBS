/***************** side menu show / hide *****************/
$(document).ready(function () {
    if ($(window).width() <= 991) {
        $(".main-navbar").addClass("slide-out");
    }
    $('.toggler-header button').click(function () {
        $('.main-navbar').toggleClass('slide-in slide-out');
        $('.fa-times').click(function () {
            $('.main-navbar').addClass('slide-out').removeClass("slide-in");
        })
    })
})


/***************** main navbar navlink active on click *****************/
$(document).ready(function () {
    $('.main-navbar .nav-item').click(function () {
        $('.main-navbar').find(".active").removeClass("active");
        $(this).addClass("active");
     
    })
})

/***************** navbar dropdowns show *****************/
$(document).ready(function () {
    $('.main-navbar').on('show.bs.dropdown', function () {
        $('.main-navbar').addClass('nav-white');
    })
    $('.main-navbar').on('hidden.bs.dropdown', function () {
        $('.main-navbar').removeClass('nav-white');
    })
});


/***************** speaker box on hover *****************/
$(document).ready(function () {
    $('.speaker-box').hover(function () {
        $(this).find('.overlay-top').toggleClass('show');
    })
})
// slider of speakers
$(document).ready(function () {
    var getDirection = $('body').css('direction');
    $('.speakers-slider').slick({
        rows: 2,
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        rtl: getDirection === 'rtl' ? true : false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
});

/***************** live countdown *****************/
$(document).ready(function () {
    $('.count-down').countdown({
        date: '09/17/2021 12:00:00',
        offset: +2
    }, function () {
        $(this).hide();
        $('.video-wrapper').toggleClass('slide-in');
    });

});



/***************** go top *****************/
$(document).ready(function () {
    var scrollTop = $('.go-top .fa-chevron-up');
    $(scrollTop).click(function () {
        $('html, body').animate({
                scrollTop: 0,
            },
            1000
        );
        return false;
    });
});