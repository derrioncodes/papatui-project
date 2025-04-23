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

// SYNCING CAROUSEL (Vertical on Desktop, Horizontal on Mobile)
$(document).ready(function () {
  const $mainImage = $(".media-gallery__main-image img");
  const $thumbnails = $(".gallery-thumbnail img");
  const $thumbnailContainer = $(".media-gallery__thumbnails");
  const thumbHeight = $(".gallery-thumbnail").outerHeight(true);
  const thumbWidth = $(".gallery-thumbnail").outerWidth(true);
  let currentIndex = 0;

  // Show or hide thumbnail arrows based on thumbnail count and screen size
  function updateThumbArrowVisibility() {
    const isMobile = $(window).width() <= 700;
    const $container = $(".media-gallery__thumbnails");
    const $thumbnails = $(".gallery-thumbnail");
    const thumbCount = $thumbnails.length;
    const container = $(".media-gallery__thumbnails");

    // Dynamically adjust how many thumbnails are shown
    let maxVisibleThumbs = 6;
    const screenWidth = $(window).width();

    if (screenWidth <= 380) {
      maxVisibleThumbs = 3;
    } else if (screenWidth <= 490) {
      maxVisibleThumbs = 4;
    } else if (screenWidth <= 590) {
      maxVisibleThumbs = 5;
    }

    const visibleWidth = thumbWidth * maxVisibleThumbs + (8 * (maxVisibleThumbs - 1)); // 8px gap between thumbnails

    if (isMobile && (thumbCount * thumbWidth <= visibleWidth)) {
      $(".thumb-arrow").hide();
      $container.addClass("center-thumbnails");
    } else {
      $(".thumb-arrow").show();
      $container.removeClass("center-thumbnails");
    }

      if (thumbCount <= 6) {
        $(".thumb-arrow").hide();
      } else {
        $(".thumb-arrow").show();
      }
  }


  updateThumbArrowVisibility();
  $(window).resize(updateThumbArrowVisibility);

  // Sync thumbnail click
  $thumbnails.click(function () {
    const newSrc = $(this).attr("src");
    $mainImage.attr("src", newSrc);
    currentIndex = $(this).parent().index();

    $(".gallery-thumbnail").removeClass("active");
    $(this).parent().addClass("active");

    scrollToThumbnail(currentIndex);
  });

  // Main image navigation
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

  // Thumbnail navigation arrows
  $(".thumb-arrow.next").click(function () {
    if ($(window).width() <= 700) {
      currentIndex = (currentIndex + 1) % $thumbnails.length; // wrap around to 0
      changeMainImage(currentIndex);
      $thumbnailContainer.scrollLeft(currentIndex * thumbWidth);
    } else {
      $thumbnailContainer.scrollTop($thumbnailContainer.scrollTop() + thumbHeight);
    }
  });
  
  $(".thumb-arrow.prev").click(function () {
    if ($(window).width() <= 700) {
      currentIndex = (currentIndex - 1 + $thumbnails.length) % $thumbnails.length; // wrap to last
      changeMainImage(currentIndex);
      $thumbnailContainer.scrollLeft(currentIndex * thumbWidth);
    } else {
      $thumbnailContainer.scrollTop($thumbnailContainer.scrollTop() - thumbHeight);
    }
  });

  // Scroll the container so the active thumbnail is in view
  function scrollToThumbnail(index) {
    if ($(window).width() <= 700) {
      const scrollPos = index * thumbWidth;
      $thumbnailContainer.scrollLeft(scrollPos);
    } else {
      const scrollPos = index * thumbHeight;
      $thumbnailContainer.scrollTop(scrollPos);
    }
  }

  // Set first thumbnail as active on load
  $(".gallery-thumbnail").eq(0).addClass("active");
});


// FAQ PAGE SCROLL BEHAVIOR FOR FAQ CATEGORIES
$(document).ready(function () {

  function getHeaderHeight() {
    return $(".sticky-header").outerHeight(true) || 0;
  }

  $(".faq-category-item a").click(function (e) {
    e.preventDefault();

    const targetId = $(this).attr("href");
    const offset = getHeaderHeight() + 30;
    const targetOffset = $(targetId).offset().top - offset;

    $("html, body").animate({
      scrollTop: targetOffset
    }, 500);
  });
});




