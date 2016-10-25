$(document).ready(function() {

    // the blocking of links default behavior
    function prevent(){
        $('.prevent, .mobile-menu .expanded, a[href="#"]').on('click', function(event){
            event.preventDefault();
        });
    }
    prevent();

    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    $(".mobile-menu a").on('click', function(){
        $(this).toggleClass('open').siblings('.sub-menu').slideToggle(350);
    });

    // for FAQ accordion
    $(".accordion-list > li > h2").on('click', function(){
        $(this).toggleClass('active').parent().find('.accordion-box-content').slideToggle(500);
    });

    //delete input wrap
    $('.delete-wrap').unwrap();

    //input style
    $( ".input__field--hoshi").each(function(){
        $(this).change(function() {
            if($(this).val() != ''){
                // ≈сли поле не пустое удал€ем класс-указание
                $(this).parent().addClass('input__field');
                $(this).parent().find('.input__label-content').addClass('active__field');
            } else {
                // ≈сли поле пустое добавл€ем класс-указание
                $(this).parent().removeClass('input__field');
                $(this).parent().find('.input__label-content').removeClass('active__field');
            }
        });
    });
});
