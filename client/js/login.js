import { getNode, toggleClass } from "../lib/index.js";

const autoLogin = getNode(".auto-login-btn");
const password = getNode(".pw-see");
const type = getNode(".pw-type");

function auto_login() {
  toggleClass(autoLogin, "clicked");
  const image = getNode(".auto-login-img");

  if (image.src.includes("ed")) {
    image.src = "./assets/icons/login_check_26_26.png";
  } else {
    image.src = "./assets/icons/login_checked_26_26.png";
  }
}
//마우스 버튼을 눌렀을 때
function pw_see_mousedown() {
  if (type.type.includes("pass")) {
    type.type = "text";
  } else {
    type.type = "password";
  }
  password.src = "./assets/icons/login_see_36_36.svg";
  password.alt = "비밀번호 복호화";
}

//마우스 버튼을 떼었을 때
function pw_see_mouseup() {
  if (type.type.includes("pass")) {
    type.type = "text";
  } else {
    type.type = "password";
  }
  password.src = "./assets/icons/login_nosee_36_36.png";
  password.alt = "비밀번호 암호화";
}

autoLogin.addEventListener("click", auto_login);
password.addEventListener("mousedown", pw_see_mousedown);
password.addEventListener("mouseup", pw_see_mouseup);
