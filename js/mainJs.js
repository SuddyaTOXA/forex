$(document).ready(function() {

    //     $('#flex-main-slider').flexslider({
    //         animation: "slide",
    //         animationLoop: true,
    //         slideshowSpeed: 8000,
    //         smoothHeight: true
    //     });
    //     // delete next prev text
    //     $('.flex-prev').empty();
    //     $('.flex-next').empty();

    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    $(".mobile-menu a").on('click', function(){
        $(this).toggleClass('open').siblings('.sub-menu').slideToggle(350);
    });

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
    $(".popup-open").on('click', function(e){
        e.preventDefault();
        var id = $(this).data('id');
        $("#popup-ajax-"+id).toggleClass('showing');
    });
    $(".popup-close").on('click', function(e){
        e.preventDefault();
        $(".popup-overlay-box").removeClass('showing');
    });

    // for FAQ accordion
    $(".accordion-list > li > h2").on('click', function(){
        $(this).toggleClass('active').parent().find('.accordion-box-content').slideToggle(500);
    });

    //delete input wrap
    $('.delete-wrap').unwrap().next('br').remove();

    //input style
    $( ".input__field--hoshi").each(function(){
        $(this).change(function() {
            if($(this).val() != ''){
                $(this).parent().addClass('input__field');
                $(this).parent().find('.input__label-content').addClass('active__field');
            } else {
                $(this).parent().removeClass('input__field');
                $(this).parent().find('.input__label-content').removeClass('active__field');
            }
        });
    });

    //slider
    // $(window).load(function() {
    //
    //     $('#flex-main-slider').flexslider({
    //         animation: "slide",
    //         animationLoop: true,
    //         slideshowSpeed: 8000,
    //         smoothHeight: true
    //     });
    //     // delete next prev text
    //     $('.flex-prev').empty();
    //     $('.flex-next').empty();
    // });

});
