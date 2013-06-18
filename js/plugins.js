<<<<<<< HEAD
// Avoid `console` errors in browsers that lack a console.
=======
>>>>>>> 4e3d47d089125ced2ba6115a88ca9a4993c2aba7
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

<<<<<<< HEAD
        // Only stub undefined methods.
=======
>>>>>>> 4e3d47d089125ced2ba6115a88ca9a4993c2aba7
        if (!console[method]) {
            console[method] = noop;
        }
    }
<<<<<<< HEAD
}());

// Place any jQuery/helper plugins in here.
=======
}());
>>>>>>> 4e3d47d089125ced2ba6115a88ca9a4993c2aba7
