import createSwiper from "./createSwiper.js";

import {
  getNode as $,
  tiger,
  renderOnlyList,
  renderLiveList,
  renderQuickList,
  renderEventList,
  renderVisualList,
  renderPopularList,
  renderContentsList,
  saveStorage,
  loadStorage,
  insertFirst,
  addClass,
  attr
} from "../lib/index.js";

const visualContainer = $('.visual .swiper-wrapper');
const taingRecommendContainer = $('.taing-recommend .swiper-wrapper');
const latestView = $('.latest-view');
const latestViewContainer = $('.latest-view .swiper-wrapper');
const quickVodContainer = $('.quick-vod .swiper-wrapper');
const popularContainer = $('.real-time .swiper-wrapper');
const liveChannelContainer = $('.live-time .swiper-wrapper');
const onlyTaingContainer = $('.only-taing .swiper-wrapper');
const eventContainer = $('.main-event .swiper-wrapper');

async function renderList() {
  try {
    let response = await tiger.get('http://localhost:3000/contents')
    let contentDate = response.data;
    let StorageArr = await loadStorage('slideArr');
    let StorageSetArr = [...new Set(StorageArr)];

    contentDate.forEach(data => {
      if(data.is_viual) renderVisualList(visualContainer, data);
      if(data.is_recommend) renderContentsList(taingRecommendContainer, data);
      if(data.quick_vod.title) renderQuickList(quickVodContainer, data);
      if(data.popular_program.rating) renderPopularList(popularContainer, data);
      if(data.live.title) renderLiveList(liveChannelContainer, data);
      if(data.is_only_taing) renderOnlyList(onlyTaingContainer, data);
      if(data.is_event_now) renderEventList(eventContainer, data);
      if(StorageArr){
        addClass(latestView,'is_latest');
        StorageSetArr.forEach((keyword) =>{
          if(data.id == keyword) renderContentsList(latestViewContainer, data);
        })
      }
    });
  } catch (err) {}
}

const main = $(".main");
const header = $(".header-alive");

const isUser = await loadStorage("user_uuid");

function userLoginCheck() {
  if (!isUser) {
    // location.href = "/landing.html";
    return;
  }
}

async function modalHandler() {
  const isModalClose = await loadStorage("close_today");
  console.log(isModalClose);
  if (isModalClose !== "true") {
    insertFirst(
      main,
      `   <article class="main-event-modal">
      <a href=""><img src="./assets/image/modal_event_586.6_662.29.png" alt="메인 이벤트" /></a>
      <ul class="main-evnent-modal-close">
        <li>
          <button type="button">오늘하루 보지 않기</button>
        </li>
        <li>
          <button type="button">닫기</button>
        </li>
      </ul>
    </article>`
    );

    const mainModal = $(".main-event-modal");
    const mainModalCloseDefaultButton = $(".main-evnent-modal-close li:last-child button");
    const mainModalCloseTodayButton = $(".main-evnent-modal-close li:first-child button");

    let isModalCloseToday = await loadStorage("close_today");
    if (isModalCloseToday) {
      main.removeChild(mainModal);
    }

    mainModalCloseDefaultButton.addEventListener("click", () => {
      mainModal.style.display = "none";
    });

    mainModalCloseTodayButton.addEventListener("click", () => {
      saveStorage("close_today", "true");
      main.removeChild(mainModal);
    });

    mainModal.addEventListener("click", () => {
      mainModal.style.display = "none";
    });
  }
  return;
}

userLoginCheck();
modalHandler();

renderList();
createSwiper();


const slideArr = [];

function latestViewHandler(e){
  let target = e.target;

  while(!attr(target,'data-index')){
    target = target.parentNode;
    if(target.nodeName === 'BODY'){
      target = null;
      return
    }
  }
  
  if(target.dataset.index){

    let index = target.dataset.index;

    slideArr.push(index)

    saveStorage('slideArr', slideArr)

  }
}

main.addEventListener('click', latestViewHandler);

header.addEventListener("mouseenter", () => {
  header.children[0].src = "./assets/icons/header_live_active_34_34.png";
});
header.addEventListener("mouseleave", () => {
  header.children[0].src = "./assets/icons/header_live_default_34_34.png";
});