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
  attr,
  deleteStorage,
} from "../lib/index.js";
import { renderSearch, renderSearchAlert } from "./render/renderHeader.js";

const body = $("body");
const nav = $(".nav");

const header = $(".main-header");
const main = $(".main");
const userNameNode = $(".profile-username");

const visualContainer = $(".visual .swiper-wrapper");
const taingRecommendContainer = $(".taing-recommend .swiper-wrapper");
const latestView = $(".latest-view");
const latestViewContainer = $(".latest-view .swiper-wrapper");
const quickVodContainer = $(".quick-vod .swiper-wrapper");
const popularContainer = $(".real-time .swiper-wrapper");
const liveChannelContainer = $(".live-time .swiper-wrapper");
const onlyTaingContainer = $(".only-taing .swiper-wrapper");
const eventContainer = $(".main-event .swiper-wrapper");
const searchButton = $(".header-search");
const logoutButton = $(".logout-modal");

header.style.backgroundColor = "";
window.addEventListener("scroll", () => {
  header.style.backgroundColor = `rgba(0,0,0,${window.scrollY / 600})`;
});

let isSearschView = false;
function renderSearchView() {
  if (isSearschView) {
    const searchView = $(".search-container");
    const alertView = $(".alert-section");
    searchView.remove();
    alertView.remove();
  } else {
    renderSearch(nav);
    renderSearchAlert(body);
  }

  isSearschView = !isSearschView;
}

function logout() {
  deleteStorage("user_uuid");
  deleteStorage("userLogin");
  deleteStorage("user_id");
  main.removeChild(main.children[0]);
  location.href = "/landing.html";
}
function logoutHandler() {
  // 모달창 띄우기
  insertFirst(
    main,
    `
    <section class="logout-alert-section">
      <div class="logout-alert-wrapper">
      <p class="logout-menu_msg">로그아웃 하시겠습니까?</p>
      <div>
        <button class="logout-enroll-btn">확인</button>
        <button class="logout-cancel-btn">취소</button>
      </div>
    </div>
  </section> 
    `
  );
  const enrollButton = $(".logout-enroll-btn");
  const cancelButton = $(".logout-cancel-btn");

  enrollButton.addEventListener("click", logout);
  cancelButton.addEventListener("click", () => {
    main.removeChild(main.children[0]);
  });
}

async function renderList() {
  try {
    let response = await tiger.get("http://localhost:3000/contents");
    let contentDate = response.data;
    let StorageArr = await loadStorage("slideArr");
    let StorageSetArr = [...new Set(StorageArr)];

    contentDate.forEach((data) => {
      if (data.is_viual) renderVisualList(visualContainer, data);
      if (data.is_recommend) renderContentsList(taingRecommendContainer, data);
      if (data.quick_vod.title) renderQuickList(quickVodContainer, data);
      if (data.popular_program.rating) renderPopularList(popularContainer, data);
      if (data.live.title) renderLiveList(liveChannelContainer, data);
      if (data.is_only_taing) renderOnlyList(onlyTaingContainer, data);
      if (data.is_event_now) renderEventList(eventContainer, data);
      if (StorageArr) {
        addClass(latestView, "is_latest");
        StorageSetArr.forEach((keyword) => {
          if (data.id == keyword) renderContentsList(latestViewContainer, data);
        });
      }
    });
  } catch (err) {}
}

const isUser = await loadStorage("user_uuid");
const userName = await loadStorage("user_id");

userNameNode.innerText = userName;
function userLoginCheck() {
  if (!isUser) {
    location.href = "/landing.html";
    return;
  }
}

async function modalHandler() {
  const isModalClose = await loadStorage("close_today");
  console.log(isModalClose);
  if (isModalClose !== "true") {
    insertFirst(
      main,
      `   <article class='main-event-modal'>
      <a href='/'><img src='./assets/image/modal_event_586.6_662.29.png' alt='메인 이벤트' /></a>
      <ul class='main-evnent-modal-close'>
        <li>
          <button type='button'>오늘하루 보지 않기</button>
        </li>
        <li>
          <button type='button'>닫기</button>
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

function latestViewHandler(e) {
  let target = e.target;

  while (!attr(target, "data-index")) {
    target = target.parentNode;
    if (target.nodeName === "BODY") {
      target = null;
      return;
    }
  }

  if (target.dataset.index) {
    let index = target.dataset.index;

    slideArr.push(index);

    saveStorage("slideArr", slideArr);
  }
}

main.addEventListener("click", latestViewHandler);
searchButton.addEventListener("click", renderSearchView);
logoutButton.addEventListener("click", logoutHandler);
