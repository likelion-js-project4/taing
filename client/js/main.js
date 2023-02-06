import createSwiper from "./createSwiper.js";
import { getNode, saveStorage, loadStorage, insertFirst } from "../lib/index.js";

const main = getNode("main");
const header = getNode(".header-alive");

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

    const mainModal = getNode(".main-event-modal");
    const mainModalCloseDefaultButton = getNode(".main-evnent-modal-close li:last-child button");
    const mainModalCloseTodayButton = getNode(".main-evnent-modal-close li:first-child button");

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

modalHandler();
createSwiper();

header.addEventListener("mouseenter", () => {
  header.children[0].src = "./assets/icons/header_live_active_34_34.png";
});
header.addEventListener("mouseleave", () => {
  header.children[0].src = "./assets/icons/header_live_default_34_34.png";
});
