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