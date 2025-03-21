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
  // Open mobile nav when clicking the menu button
  $(".icon-cart-svg").click(function () {
    $(".shopping-cart__popup__bg").addClass("cart-active");
    $(".shopping-cart__popup").addClass("cart-active");
    
  });

  // Close mobile nav when clicking the close (X) button
  $(".shopping-cart__close-btn").click(function () {
    $(".shopping-cart__popup__bg").removeClass("cart-active");
    $(".shopping-cart__popup").removeClass("cart-active");
  });
});