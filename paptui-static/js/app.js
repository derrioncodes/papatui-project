// CLOSE ANNOUNCEMENT BANNER BUTTON
$(document).ready(function () {
  
  // Close mobile nav when clicking the close (X) button
  $(".close_btn__announcement__banner").click(function () {
    $(".announcement__banner").css("display", "none");
  });
});

// PRIMARY NAV HOVER SUBMENU ANIMATION

$(document).ready(function () {
  $(".primary-nav__item").hover(
    function () {
      $(this).find(".subnav-container")
        .stop(true, true)
        .css("display", "block") // Show the submenu
        .animate({ opacity: 1 }, 150); // Fade it in
    },
    function () {
      $(this).find(".subnav-container")
        .stop(true, true)
        .animate({ opacity: 0 }, 125, function () {
          $(this).css("display", "none"); // Hide after fade-out
        });
    }
  );
});

// OPEN/CLOSE SHOPPING CART
$(document).ready(function () {
  // Open shopping cart when clicking the menu button
  $(".icon-cart-svg").click(function () {
    $(".shopping-cart__popup__bg").addClass("cart-active");
    $(".shopping-cart__popup").addClass("cart-active");
    
  });

  // Close shopping cart when clicking the close (X) button
  $(".shopping-cart__close-btn").click(function () {
    $(".shopping-cart__popup__bg").removeClass("cart-active");
    $(".shopping-cart__popup").removeClass("cart-active");
  });
});

// OPEN/CLOSE MOBILE NAV
$(document).ready(function () {
  // Open mobile nav when clicking the menu button
  $(".mobile__primary-nav").click(function () {
    $(".mobile__nav__drawer__bg").addClass("active");
    $(".mobile__nav__drawer__open").addClass("active");
    
  });

  // Close mobile nav when clicking the close (X) button
  $(".mobile__nav__drawer__close-btn").click(function () {
    $(".mobile__nav__drawer__bg").removeClass("active");
    $(".mobile__nav__drawer__open").removeClass("active");
  });

  
});



// OPEN/CLOSE MOBILE SUBNAV
$(document).ready(function () {
  // Open mobile subnav when clicking a nav item with sublinks
  $(".mobile__nav__drawer__items__item > .mobile__nav__drawer__link").click(function (e) {
    e.preventDefault(); // Prevent default link behavior
    $(this).siblings(".mobile__nav__drawer__subnav-container").addClass("mobile-subnav-active");
  });

  // Close mobile subnav when clicking the back button
  $(".mobile__nav__drawer__subnav__back").click(function () {
    $(this).closest(".mobile__nav__drawer__subnav-container").removeClass("mobile-subnav-active");
  });

  // Close mobile nav when clicking the close (X) button
  $(".mobile__nav__drawer__subnav__close-btn").click(function () {
    $(".mobile__nav__drawer__bg").removeClass("active");
    $(".mobile__nav__drawer__open").removeClass("active");
  });
});