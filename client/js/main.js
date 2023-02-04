import { tiger } from "../lib/utils/tiger.js";
import createSwiper from "./createSwiper.js";

createSwiper();

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