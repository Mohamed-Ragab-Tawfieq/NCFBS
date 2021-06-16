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

/***************** navbar dropdowns show *****************/
$(document).ready(function () {
    $('.main-navbar .dropdown').click(function () {
        alert('kksk')
    });
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