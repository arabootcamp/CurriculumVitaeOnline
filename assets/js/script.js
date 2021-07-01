$(function () {
  // Handler for .ready() called.

  const large = 991.98;

  //load
  if ($(window).width() >= large) {
    let wNavbar = $('.navbar-custom').width();
    let wNavbarfixed = $('.navbar-custom__fixed').width();
    console.log("navbar-custom: " + wNavbar + "navbar__lgnavbar-custom__fixed: " + wNavbarfixed);
    let left = (wNavbar - wNavbarfixed) / 2;
    console.log("left: " + left);
    if ($(window).width() <= 1400)
      $('.navbar-custom__fixed').css("left", left);
    else {
      left += ($(window).width() - 1320) / 2;
      $('.navbar-custom__fixed').css("left", left);
    }
  }

  //resize
  $(window).resize(function () {
    if ($(window).width() >= large) {
      let wNavbar = $('.navbar-custom').width();
      let wNavbarfixed = $('.navbar-custom__fixed').width();
      console.log("navbar-custom: " + wNavbar + "navbar__lgnavbar-custom__fixed: " + wNavbarfixed);
      let left = (wNavbar - wNavbarfixed) / 2;
      console.log("left: " + left);
      if ($(window).width() <= 1400)
        $('.navbar-custom__fixed').css("left", left);
      else {
        left += ($(window).width() - 1320) / 2;
        $('.navbar-custom__fixed').css("left", left);
      }
    }
  });

  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    event.preventDefault();
    let hash = this.hash;
    let delta = 110;
    if ($(window).width() >= large)
      delta = 50;

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - delta
    }, 500);
  });
});