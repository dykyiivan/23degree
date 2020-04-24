$(function() {
  ("use strict");

  // Header scroll
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    /* Якщо скролінг на 100px,  задаємо новий клас для .header */
    if (height > 100) {
      $(".header").addClass("header-fixed");
    } else {
      /* Якщо менше 100px, видаляємо клас для .header */
      $(".header").removeClass("header-fixed");
    }
  });

  // Menu burger
  $(".menu__burger, .menu__list li a").click(function (event) {
    $(".menu__burger,.menu__list").toggleClass("active");
  });

  // Price slider
  $(".js-range-slider").ionRangeSlider({
    skin: "big",
    min: 100,
    max: 500000,
    from: 50000,
    to: 250000,
    step: 10000,
    postfix: " м<sup>2</sup>",
  });

  // Slick Slider
  $(".customers__inner").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  });

  // Portofolio filter
  var mixer = mixitup(".portfolio__inner", {
    controls: {
      toggleLogic: "and",
    },
  });

  // Scroll to section
  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".scroll-down").click( function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  

});