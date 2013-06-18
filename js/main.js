(function ($, Detect) {
    $(function () {
        if (Detect.touch) {
            window.setTimeout(function () {
                window.scroll(0, 1);
            }, 1);
        }
        //var isIE = navigator.appVersion.indexOf("MSIE") !== -1 && navigator.appVersion.indexOf("MSIE 9") === -1 && navigator.appVersion.indexOf("MSIE 10") === -1 ? true : false;
        if (window.screen.height === 568) { // iPhone 4
            document.querySelector("meta[name=viewport]").content = "width=320.1,maximum-scale=3.0,user-scalable=yes";
        }

        $('.tel').html('<a target="_blank" href="//wpa.qq.com/msgrd?v=3&uin=1660541084&site=qq&menu=yes"><img border="0" src="//wpa.qq.com/pa?p=2:1660541084:51" alt="" title="" /></a>');

        $('.global-nav ul').on('click', 'li', function (event) {
            event.preventDefault();
            $('.global-nav li').removeClass('active');
            $(this).addClass('active');

            if ($(this).find('a').attr('href')) {
                window.location = $(this).find('a').attr('href');
            }
        });

        $('aside nav').on('click', 'a', function (event) {
            event.preventDefault();
            //$('.icon-nav-arrow').remove();
            $('aside nav ul li').removeClass('active');
            $(this).parent('li').addClass('active');//.append('<i class="icon-nav-arrow"></i>');

        });

        $('.slide').bxSlider({
            //hideControlOnEnd: true,            
            pager: true,
            auto: true
        });
        //if (isIE) {
        //    $('.global-nav li.active').append('<i class="icon-nav-arrow"></i>');
        //}
    });
})(jQuery, Modernizr);
