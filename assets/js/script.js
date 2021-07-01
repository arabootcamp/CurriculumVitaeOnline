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


  //scroll
  $(window).scroll(function () {
    console.log("scroll");
    if ($(window).width() >= large) {
      if ($(window).scrollTop() > 54)
        $('.navbar__lg').removeClass('pt-lg-5');
      else
        $('.navbar__lg').addClass('pt-lg-5');
    }
  });
});