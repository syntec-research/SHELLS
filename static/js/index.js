window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Carousel options: always show exactly 1 slide, disabled breakpoints to prevent layout issues
    var carouselOptions = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        breakpoints: []
    }

    // Initialize carousels if bulmaCarousel is loaded
    if (typeof bulmaCarousel !== 'undefined') {
        bulmaCarousel.attach('#results-carousel', carouselOptions);
        bulmaCarousel.attach('#perf-carousel', carouselOptions);
    }
})
