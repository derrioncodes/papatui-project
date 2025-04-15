// CLOSE ANNOUNCEMENT BANNER BUTTON
$(document).ready(function () {
  
  // Close mobile nav when clicking the close (X) button
  $(".close_btn__announcement__banner").click(function () {
    $(".announcement__banner").css("display", "none");
  });
});

// HEADER SCROLL ANIMATION
// $(document).ready(function () {
//   let lastScrollTop = 0;
//   let headerHeight = $(".sticky-header").outerHeight(); // Get header height

//   $(window).scroll(function () {
//     let scrollTop = $(this).scrollTop();

//     if (scrollTop > headerHeight) {
//       // Only trigger after passing the header height
//       if (scrollTop > lastScrollTop) {
//         // Scrolling down
//         $(".sticky-header").addClass("hide-header");
//       } else {
//         // Scrolling up
//         $(".sticky-header").removeClass("hide-header");
//       }
//     }

//     lastScrollTop = scrollTop;
//   });
// });

$(document).ready(function () {
  let lastScrollTop = 0;

  function getHeaderHeight() {
    let baseHeight = $(".sticky-header").outerHeight();
    let screenWidth = $(window).width();
    let extraHeight = $(".header-navs").outerHeight() || 0; // Get height dynamically

    

    // If screen width is between 606px and 1369px, add the dynamic extra height
    return (screenWidth >= 606 && screenWidth <= 1369) ? baseHeight + extraHeight : baseHeight;
  }

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let headerHeight = getHeaderHeight(); // Dynamically get header + nav height

    if (scrollTop > headerHeight) {
      // Only trigger after passing the header height
      if (scrollTop > lastScrollTop) {
        $(".sticky-header").addClass("hide-header"); // Scrolling down
      } else {
        $(".sticky-header").removeClass("hide-header"); // Scrolling up
      }
    }

    lastScrollTop = scrollTop;
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

// HERO CAROUSEL CONTAINER

$(document).ready(function(){
  $('.hero-carousel-wrapper').each(function() {
    var $sliderParent = $(this).parent();
    $(this).slick({
      initialSlide: 0,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      autoplaySpeed: 5000,
      fade: true,
      cssEase: 'linear'
      
    });
  });
});

// HERO CAROUSEL CONTAINER

$(document).ready(function(){
  var helpers = {
    addZeros: function (n) {
      return (n < 10) ? '0' + n : '' + n;
    }
  };

  $('.carousel-category__wrapper').each(function() {
    var $sliderParent = $(this).parent();
    $(this).slick({
      initialSlide: 0,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: true,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        
      ]
    });

    if ($(this).find('.carousel-category__product').length > 1) {
      $(this).siblings('.slides-numbers').show();
    }

    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.slides-numbers .slides-number-active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));


  });
});

// SINGLE PRODUCT ACCORDIAN 
$(document).ready(function () {
  $(".accordion-header").click(function () {
    const content = $(this).next(".accordion-content");

    // Close other sections if you want only one open at a time
    // $(".accordion-content").not(content).slideUp();
    // $(".accordion-header").not(this).removeClass("active");

    // Toggle current section
    $(this).toggleClass("active");
    content.slideToggle();
  });
});

// SYNCING  SLIDER
$(document).ready(function () {
  const $mainImage = $(".media-gallery__main-image img");
  const $thumbnails = $(".gallery-thumbnail img");
  const $thumbnailContainer = $(".media-gallery__thumbnails");
  const thumbHeight = $(".gallery-thumbnail").outerHeight(true);
  let currentIndex = 0;

  // Sync click on thumbnail
  $thumbnails.click(function () {
    const newSrc = $(this).attr("src");
    $mainImage.attr("src", newSrc);
    currentIndex = $(this).parent().index();

    $(".gallery-thumbnail").removeClass("active");
    $(this).parent().addClass("active");
  });

  // Main image arrows
  $(".main-arrow.next").click(function () {
    currentIndex = (currentIndex + 1) % $thumbnails.length;
    changeMainImage(currentIndex);
  });

  $(".main-arrow.prev").click(function () {
    currentIndex = (currentIndex - 1 + $thumbnails.length) % $thumbnails.length;
    changeMainImage(currentIndex);
  });

  function changeMainImage(index) {
    const newSrc = $thumbnails.eq(index).attr("src");
    $mainImage.attr("src", newSrc);
    $(".gallery-thumbnail").removeClass("active");
    $thumbnails.eq(index).parent().addClass("active");

    scrollToThumbnail(index);
  }

  // Scroll thumbnails
  $(".thumb-arrow.next").click(function () {
    $thumbnailContainer.scrollTop($thumbnailContainer.scrollTop() + thumbHeight);
  });

  $(".thumb-arrow.prev").click(function () {
    $thumbnailContainer.scrollTop($thumbnailContainer.scrollTop() - thumbHeight);
  });

  // Initialize first thumbnail as active
  $(".gallery-thumbnail").eq(0).addClass("active");

  function scrollToThumbnail(index) {
    const scrollPos = index * thumbHeight;
    $thumbnailContainer.scrollTop(scrollPos);
  }
});


