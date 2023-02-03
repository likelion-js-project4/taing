import createSwiper from "./createSwiper.js";
import { getNode, saveStorage, loadStorage } from "../lib/index.js";

createSwiper();

const main = getNode("main");
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
