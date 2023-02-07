import { attr, deleteStorage, getNode, insertFirst } from "../lib/index.js";

const header = getNode(".header");
const main = getNode("main");
const profile = getNode(".header-profile");
const profileTransfer = getNode(".header-profile-menu");

const profileUsername = getNode(".profile-username");
const logoutButton = getNode(".logout-modal");

header.style.backgroundColor = "";
window.addEventListener("scroll", () => {
  header.style.backgroundColor = `rgba(0,0,0,${window.scrollY / 600})`;
});

function profileTransferHandler() {}

// 1. profile버튼에 마우스 올리면 전환 팝업창 떠야함
// 2. 로그인 한 유저의 로그인 정보를 받아와야함
// 3. 로그아웃 모달창 만들어야함

// profile.addEventListener("mouseover", () => (profileTransfer.style.display = "block"));
// profile.addEventListener("mouseleave", () => (profileTransfer.style.display = "none"));
function logout() {
  deleteStorage("user_uuid");
  deleteStorage("userLogin");
  main.removeChild(main.children[0]);
  location.href = "/landing.html";
}
function logoutHandler() {
  // 모달창 띄우기
  insertFirst(
    main,
    `
    <section class="alert-section">
      <div class="alert-wrapper">
      <p class="menu_msg">로그아웃 하시겠습니까?</p>
      <div>
        <button class="enroll-btn">확인</button>
        <button class="cancel-btn">취소</button>
      </div>
    </div>
  </section> 
    `
  );
  const alert = getNode(".alert-section");
  const enrollButton = getNode(".enroll-btn");
  const cancelButton = getNode(".cancel-btn");

  enrollButton.addEventListener("click", logout);
  cancelButton.addEventListener("click", () => {
    main.removeChild(main.children[0]);
  });
}

logoutButton.addEventListener("click", logoutHandler);
