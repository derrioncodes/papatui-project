// SYNCING SLICK SLIDER
$(document).ready(function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true, // or false if you prefer sliding
      asNavFor: '.slider-nav'
    });
  
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        infinite: false,
        vertical: true,         // ← makes it scroll up/down
        verticalSwiping: true,  // ← enables vertical swipe on touch
        focusOnSelect: true
    });
  });