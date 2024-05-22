// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
    let theme = $('.theme'),
        body = $('body'),
        theme_switch = $('.switch'),
        main = $('.main'),
        menu = $('.menu'),
        ajax = $('#ajax'),
        content = $('#content'),
        faktorialContent = $('#faktorial__content');

    // Theme
    toggle = function () {
        body.toggleClass('dark');
        theme.toggleClass('off');
    };
    localStorage.getItem('theme') === 'dark' ? toggle() : null;
    theme_switch.on('click', function () {
        toggle();
        localStorage.getItem('theme') === 'dark'
            ? localStorage.clear()
            : localStorage.setItem('theme', 'dark');
    });
    // ----------------------------------------------

    // menu ajax
    menu.on('click', 'li a', function (event) {
        event.preventDefault();
        let link = $(this).attr('href');
        content.hide();
        ajax.load(link + ' #faktorial__content');
    });
    // -----------------------------------------------
});
