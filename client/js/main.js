const visualSwiper = new Swiper(".visual .swiper", {
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".visual .swiper-button-next",
    prevEl: ".visual .swiper-button-prev",
  },
  pagination: {
    el: ".visual .swiper-pagination",
    clickable: true,
  },
});

const taingRecommendSwiper = new Swiper(".taing-recommend .swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
    1280: {
      slidesPerView: 7,
      slidesPerGroup: 7,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: ".taing-recommend .swiper-button-next",
    prevEl: ".taing-recommend .swiper-button-prev",
  },
  pagination: {
    el: ".taing-recommend .swiper-pagination",
    clickable: true,
  },
});