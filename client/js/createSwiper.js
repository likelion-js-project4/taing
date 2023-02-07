import { getNode, insertFirst, addClass, removeClass } from "../lib/index.js";

export default function createSwiper() {
  const visualSwiper = new Swiper(".visual .swiper", {
    effect: "fade",

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: ".visual .swiper-button-next",
      prevEl: ".visual .swiper-button-prev",
    },
    pagination: {
      el: ".visual .swiper-pagination",
      clickable: true,
    },
  });

  const visualPagination = getNode(".visual .swiper-pagination-wrapper");
  insertFirst(visualPagination, `<button class="swiper-button-autoplay" type="button"></button>`);

  const autoPlayButton = getNode(".swiper-button-autoplay");

  let pause;

  function autoPlayHandler() {
    if (pause !== 1) {
      visualSwiper.autoplay.stop();
      addClass(autoPlayButton, "is-play");
      pause = 1;
    } else {
      visualSwiper.autoplay.start();
      removeClass(autoPlayButton, "is-play");
      pause = 0;
    }
  }

  autoPlayButton.addEventListener('click', autoPlayHandler);


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

  const latestViewSwiper = new Swiper(".latest-view .swiper", {
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
      nextEl: ".latest-view .swiper-button-next",
      prevEl: ".latest-view .swiper-button-prev",
    },
    pagination: {
      el: ".latest-view .swiper-pagination",
      clickable: true,
    },
  });

  const QuickVodSwiper = new Swiper(".quick-vod .swiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: ".quick-vod .swiper-button-next",
      prevEl: ".quick-vod .swiper-button-prev",
    },
    pagination: {
      el: ".quick-vod .swiper-pagination",
      clickable: true,
    },
  });

  const realTimeSwiper = new Swiper(".real-time .swiper", {
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
      nextEl: ".real-time .swiper-button-next",
      prevEl: ".real-time .swiper-button-prev",
    },
    pagination: {
      el: ".real-time .swiper-pagination",
      clickable: true,
    },
  });

  const liveTimeSwiper = new Swiper(".live-time .swiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: ".live-time .swiper-button-next",
      prevEl: ".live-time .swiper-button-prev",
    },
    pagination: {
      el: ".live-time .swiper-pagination",
      clickable: true,
    },
  });

  const OnlyTaingSwiper = new Swiper(".only-taing .swiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: ".only-taing .swiper-button-next",
      prevEl: ".only-taing .swiper-button-prev",
    },
    pagination: {
      el: ".only-taing .swiper-pagination",
      clickable: true,
    },
  });

  const EventSwiper = new Swiper(".main-event .swiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 8,
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,

        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: ".main-event .swiper-button-next",
      prevEl: ".main-event .swiper-button-prev",
    },
    pagination: {
      el: ".main-event .swiper-pagination",
      clickable: true,
    },
  });

  function autoPlayHandler() {
    if (pause !== 1) {
      visualSwiper.autoplay.stop();
      addClass(autoPlayButton, "is-play");
      pause = 1;
    } else {
      visualSwiper.autoplay.start();
      removeClass(autoPlayButton, "is-play");
      pause = 0;
    }
  }

  autoPlayButton.addEventListener("click", autoPlayHandler);
  return (
    visualSwiper,
    taingRecommendSwiper,
    latestViewSwiper,
    QuickVodSwiper,
    realTimeSwiper,
    liveTimeSwiper,
    OnlyTaingSwiper,
    EventSwiper
  );
}
