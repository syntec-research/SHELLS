window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Teaser carousel options: 2 items, so infinite is set to false to prevent cloning/width bugs
    var teaserOptions = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        breakpoints: []
    }

    // Performance carousel options: 9 items, so infinite is safe to use
    var perfOptions = {
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
        bulmaCarousel.attach('#results-carousel', teaserOptions);
        bulmaCarousel.attach('#perf-carousel', perfOptions);
    }
})
