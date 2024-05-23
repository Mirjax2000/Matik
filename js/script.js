// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
    let theme = $('.theme'),
        body = $('body'),
        theme_switch = $('.switch'),
        menu = $('.menu'),
        ajax = $('#ajax'),
        content = $('#content');

    // Theme
    const toggle = function () {
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
        menu.find('li a').removeClass('active');
        $(this).addClass('active');
        content.hide();
        ajax.load(link + ' #uloha');
    });
    // -----------------------------------------------
});
