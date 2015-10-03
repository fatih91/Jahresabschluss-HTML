$(document).ready(function(){
    $(".popover-top").popover({
        placement : 'top'
    });
    $(".popover-right").popover({
        placement : 'right'
    });
    $(".popover-bottom").popover({
        placement : 'bottom'
    });
    $(".popover-left").popover({
        placement : 'left'
    });

    $('[data-toggle="tooltip"]').tooltip({

    });

    $('#nav').affix({
      offset: {
        top: $('#nav').offset().top,
        bottom: $('footer').outerHeight(true) + $('.application').outerHeight(true) + 40
      }
    });
});
