$(document).ready(function() {

    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    // for help
        $('span.jQtooltip').each(function() {
            var el = $(this),
                title = el.attr('title');
            if (title && title != '') {
                el.attr('title', '').append('<div>' + title + '</div>');
                var width = el.find('div').width();
                var height = el.find('div').height();
                el.hover(
                    function() {
                        el.find('div')
                            .clearQueue()
                            .delay(200)
                            .animate({width: width + 20, height: height + 20}, 200).show(200)
                            .animate({width: width, height: height}, 200);
                    },
                    function() {
                        el.find('div')
                            .animate({width: width + 20, height: height + 20}, 250)
                            .animate({width: 'hide', height: 'hide'}, 250);
                    }
                ).mouseleave(function() {
                        if (el.children().is(':hidden')) el.find('div').clearQueue();
                    });
            }
        });

});
