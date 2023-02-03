import createSwiper from "./createSwiper.js";
import { getNode, saveStorage, loadStorage } from "../lib/index.js";

createSwiper();

const main = getNode("main");
const header = getNode(".header-alive");
const mainModal = getNode(".main-event-modal");
const mainModalCloseDefaultButton = getNode(".main-evnent-modal-close li:last-child button");
const mainModalCloseTodayButton = getNode(".main-evnent-modal-close li:first-child button");

let isModalCloseToday = await loadStorage("close_today");
if (isModalCloseToday) {
  main.removeChild(mainModal);
}

header.addEventListener("mouseenter", () => {
  header.children[0].src = "./assets/icons/header_live_active_34_34.png";
});
header.addEventListener("mouseleave", () => {
  header.children[0].src = "./assets/icons/header_live_default_34_34.png";
});

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
