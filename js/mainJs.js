$(document).ready(function() {

    // the blocking of links default behavior
    function prevent(){
        $('.prevent, .mobile-menu .expanded, a[href="#"]').on('click', function(event){
            event.preventDefault();
        });
    }
    prevent();

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

    // for popups
    $(".popup-open, .popup-close").on('click', function(e){
        e.preventDefault();
        $("#popup-ajax").toggleClass('showing');
        // $(document.body).toggleClass('overflow');
    });

});
