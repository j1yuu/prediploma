var block_show = null;

function scrollTracking() {
    const aniblock = $('.animation__block');
    var wt = $(window).scrollTop();
    var wh = $(window).height();

    aniblock.each(function (i) {
        var et = $(this).offset().top;
        var eh = $(this).outerHeight();
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show == null || block_show == false) {
                $(this).addClass('animation__active');
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {
                $(this).removeClass('animation__active');
            }
            block_show = false;
        }
    })

}

$(window).scroll(function () {
    scrollTracking();
});

$(document).ready(function () {
    scrollTracking();
});