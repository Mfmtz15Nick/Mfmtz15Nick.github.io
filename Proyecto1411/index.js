var window_width = $(window).width() - $('#object').width() - 300 ;

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height);
        $('#object').css({
            'left': object_position_left + 100
        });
    });
});