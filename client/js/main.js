import { tiger } from "../lib/utils/tiger.js";

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

const defaultOption = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-orgin",
  redirect: "follow",
  refererPolicy: "no-referer",
  headers: {
    "Content-Type": "application/json charset=UTF-8",
  },
};

// GET method
const result = await tiger.get("http://localhost:3000/contents", defaultOption);

const { data } = result;
console.log(data);

const recommendList = [];

data.forEach((e) => {
  if (e.is_event_now) recommendList.push(e);
});

console.log(191191, "recommendList", recommendList);

// POST method
const postTest = async () => {
  await tiger.post("http://localhost:3000/contents/contents_id2213", {
    id: "contents_id번호",
    title: "재벌집 막내아들",
    description: "인생 2회차를 사는 판타지 드라마",
    image: {
      image_name1: "./assets/image/main_chaboel_1920_855.png",
      image_name2: "./assets/image/main_chabeol_345_194.png",
      image_name3: "./assets/image/main_chabeol_346_120.png",
      image_name4: "./assets/image/main_chaboel_240_345.png",
      alt: "재벌집 막내아들",
    },
    is_free: false,
    is_adult_18: false,
    is_adult_19: false,
    is_viual: true,
    is_recommend: false,
    quick_vod: {
      title: "",
      series: "",
    },
  });
};

// PUT method
const putTest = async () => {
  await tiger.put("http://localhost:3000/contents/contents_id2213", {
    id: "contents_id2213",
    title: "재벌집 막내아들",
    description: "인생 2회차를 사는 판타지 asdas111",
    image: {
      image_name1: "./assets/image/main_chaboel_1920_855.png",
      image_name2: "./assets/image/main_chabeol_345_194.png",
      image_name3: "./assets/image/main_chabeol_346_120.png",
      image_name4: "./assets/image/main_chaboel_240_345.png",
      alt: "재벌집 막내아들",
    },
    is_free: false,
    is_adult_18: false,
    is_adult_19: false,
    is_viual: true,
    is_recommend: false,
    quick_vod: {
      title: "",
      series: "",
    },
  });
};
//DELETE method
const delteTest = async () => {
  await tiger.delete("http://localhost:3000/contents/contents_id2213");
  console.log("data post");
};

// postTest();
// putTest();
// delteTest();
