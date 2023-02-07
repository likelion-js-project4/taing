import { getNode } from "../lib/index.js";

const header = getNode(".header");

header.style.backgroundColor = "";
window.addEventListener("scroll", () => {
  //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
  header.style.backgroundColor = `rgba(0,0,0,${window.scrollY / 100})`;
});
