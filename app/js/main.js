$(function() {
  // Header scroll
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    /* Якщо скролінг на 100px,  задаємо новий клас для .header */
    if (height > 100) {
      $('.header').addClass('header-fixed');
    } else {
      /* Якщо менше 100px, видаляємо клас для .header */
      $('.header').removeClass('header-fixed');
    }
  });

  // Menu burger
  $('.menu__burger').click(function(event) {
    $('.menu__burger,.menu__list').toggleClass('active');
  });

});