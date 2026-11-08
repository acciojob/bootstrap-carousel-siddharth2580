$(document).ready(function () {
    $('#myCarousel').carousel();

    $('.left').on('click', function (e) {
        e.preventDefault();
        $('#myCarousel').carousel('prev');
    });

    $('.right').on('click', function (e) {
        e.preventDefault();
        $('#myCarousel').carousel('next');
    });
});