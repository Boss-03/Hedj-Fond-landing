const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {
    "@0.5": {
      slidesPerView: 1,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
