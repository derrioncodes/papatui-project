$(document).ready(function () {
  const $mainImage = $(".main-image img");
  const $thumbnails = $(".thumbnail img");
  const $thumbContainer = $(".thumbnails-container");
  const thumbWidth = $(".thumbnail").outerWidth(true);
  let currentIndex = 0;

  // Thumbnail click
  $thumbnails.click(function () {
    const newSrc = $(this).attr("src");
    $mainImage.attr("src", newSrc);
    currentIndex = $(this).parent().index();
    $(".thumbnail").removeClass("active");
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
    $(".thumbnail").removeClass("active");
    $thumbnails.eq(index).parent().addClass("active");
    scrollToThumbnail(index);
  }

  // Thumbnail arrows
  $(".thumb-arrow.next").click(function () {
    $thumbContainer.scrollLeft($thumbContainer.scrollLeft() + thumbWidth);
  });

  $(".thumb-arrow.prev").click(function () {
    $thumbContainer.scrollLeft($thumbContainer.scrollLeft() - thumbWidth);
  });

  // Scroll to selected thumbnail
  function scrollToThumbnail(index) {
    const scrollAmount = index * thumbWidth;
    $thumbContainer.scrollLeft(scrollAmount);
  }
});
