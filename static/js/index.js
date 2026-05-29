window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Teaser carousel options: 2 items, so infinite is set to false to prevent cloning/width bugs
    // Force slidesToShow: 1 on all screen widths using a large changePoint breakpoint
    var teaserOptions = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        breakpoints: [
            { changePoint: 100000, slidesToShow: 1, slidesToScroll: 1 }
        ]
    }

    // Performance carousel options: 9 items, so infinite is safe to use
    // Force slidesToShow: 1 on all screen widths using a large changePoint breakpoint
    var perfOptions = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        breakpoints: [
            { changePoint: 100000, slidesToShow: 1, slidesToScroll: 1 }
        ]
    }

    // Initialize carousels if bulmaCarousel is loaded
    if (typeof bulmaCarousel !== 'undefined') {
        bulmaCarousel.attach('#results-carousel', teaserOptions);
        bulmaCarousel.attach('#perf-carousel', perfOptions);
    }
})
