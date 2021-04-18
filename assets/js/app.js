$('.js-item').on('mouseover', function() {
    const content = $(this).attr('data-content');
    $('.js-content').hide();
    $('#' + content).show();
});

$('.diagram').on('mouseleave', function() {
    $('.js-content').hide();
});