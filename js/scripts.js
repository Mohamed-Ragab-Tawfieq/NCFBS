/***************** speaker box on hover *****************/
$(document).ready(function () {
    $('.speaker-box').hover(function () {
        $(this).find('.overlay-top').toggleClass('show');
    })
})

