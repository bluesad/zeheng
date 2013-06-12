$(function () {
   

    $('.tel').html('<a target="_blank" href="//wpa.qq.com/msgrd?v=3&uin=1660541084&site=qq&menu=yes"><img border="0" src="//wpa.qq.com/pa?p=2:1660541084:51" alt="" title="" /></a>');

    $('.global-nav ul').on('click', 'li', function () {
        $('.global-nav li').removeClass('active');
        $(this).addClass('active');

        if ($(this).find('a').attr('href')) {
            window.location = $(this).find('a').attr('href');
        }
    });

    $('aside nav').on('click', 'a', function () {
        $('aside nav ul li').removeClass('active');
        $(this).parent('li').addClass('active');

    });

    $('.slide').bxSlider({
        pager: true,
        auto: true
    });  
});
