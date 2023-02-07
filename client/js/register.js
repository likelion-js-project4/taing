import { getNode, getNodes, RandomString, saveStorage, tiger } from "../lib/index.js";

const inputId = getNode("#register-id");
const inputPassword = getNode("#register-pw");
const inputPasswordCheck = getNode("#register-pw-check");
const inputEmail = getNode("#register-email");

const idCancelButton = getNode(".id-cancel-btn");
const passwordCancelButton = getNode(".pw-cancel-btn");
const pwCheckCancelButton = getNode(".pwcheck-cancel-btn");
const emailCancelButton = getNode(".email-cancel-btn");

const pw_see_button = getNode(".pw-see-btn");
const pwcheck_see_button = getNode(".pw-see2-btn");

const idContent = getNode(".register-id-content");
const pwContent = getNode(".register-pw-content");

// const register_list= getNodes('input[name=register]');
const checkAll = getNode("#register-all"); //모두동의합니다 input
const check1 = getNode("#register-item1");
const check2 = getNode("#register-item2");
const check3 = getNode("#register-item3");
const check4 = getNode("#register-item4");
const check5 = getNode("#register-item5");
const check6 = getNode("#register-item6");
const check7 = getNode("#register-item7");
const check8 = getNode("#register-item8");

const submitButton = getNode(".btn-register"); //최종 가입하기버튼

//회원가입 하기전 요건
const agreements = {
  id: false,
  pw: false,
  email: false,
  check1: false,
  check2: false,
  check3: false,
  check4: false,
  check5: false,
  check6: false,
  check7: false,
  check8: false,
};

// input 함수
function cancel_active(node) {
  const btn = node.nextElementSibling; //해당 노드의 X버튼
  if (!(node.value === "")) {
    btn.style.display = "inline-block";
  }

  // 아이디 input 인 경우
  if (node.placeholder.includes("아이디")) {
    if (node.value.length < 6 || node.value.length > 13) {
      idContent.style.color = "red";
    } else {
      idContent.style.color = "var(--silver500)";
    }
  }

  // 비밀번호 input 인 경우
  if (node.placeholder.includes("비밀번호")) {
    if (node.value.length < 8 || node.value.length > 15) {
      pwContent.style.color = "red";
    } else {
      pwContent.style.color = "var(--silver500)";
    }
  }
}

//X버튼 누르면 글 지우기
function delete_input(node) {
  const node_cancel_button = node.nextElementSibling;
  node.value = "";
  node_cancel_button.style.display = "none";
}

//비밀번호 보이게 하기
function pw_see(node) {
  const pw_img = node.firstElementChild;
  const pw_input = node.previousElementSibling.previousElementSibling;

  if (pw_input.type.includes("pass")) {
    pw_input.type = "text";
  } else {
    pw_input.type = "password";
  }

  if (pw_img.src.includes("no")) {
    pw_img.src = "./assets/icons/login_see_36_36.svg";
    pw_img.alt = "비밀번호 복호화";
  } else {
    pw_img.src = "./assets/icons/login_nosee_36_36.png";
    pw_img.alt = "비밀번호 암호화";
  }
}

// //모두 동의하기 버튼
function all_check() {
  const checkboxes = getNodes(".register-content-item > input");

  for (let checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
}

// // 모두동의버튼 안누르고 모든 체크를 하면 동의하기버튼도 활성화
// if (check1 && check2 && check3 && check4 && check5 && check6 && check7 && check8) {
//   checkAll.checked = true;
// } else {
//   checkAll.checked = false;
// }

// 모든 회원가입 조건을 만족시켰을시 버튼 활성화시키기
// for (let key in agreements) {
//   if (key == false) {
//     return false;
//   } else {
//     submitButton.disabled = false;
//   }
// }

async function saveUser(id, email, password) {
  const user_uuid = RandomString(10);

  await tiger.post("http://localhost:3000/users", {
    user_uuid,
    id,
    email,
    password,
  });
  saveStorage("user_uuid", user_uuid);
}

/* 유저 존재유무 체크 */
async function checkUserExists(user) {
  if (user.length !== 0) {
    alert("이미 가입한 회원입니다.");
  }
  return;
}
/* 필수동의사항 선택 체크 */
function checkAgreement() {
  if (!(check2.checked && check3.checked && check4.checked)) {
    alert("필수 동의 사항을 확인해주세요.");
    return false;
  } else return true;
}

/* 회원가입 */
async function register(idNode, emailNode, passwordNode) {
  const id = idNode.value;
  const email = emailNode.value;
  const password = passwordNode.value;

  const userData = await tiger.get("http://localhost:3000/users");
  const { data } = userData;
  const user = data.filter((user) => user.email === email);

  const isChecked = checkAgreement();

  if (isChecked) {
    checkUserExists(user);
    saveUser(id, email, password);
    location.href = "/";
  }

  alert("Taing의 회원이 되어주셔서 감사합니다.");
  return;
}

inputId.addEventListener("keyup", () => cancel_active(inputId));
inputPassword.addEventListener("keyup", () => cancel_active(inputPassword));
inputPasswordCheck.addEventListener("keyup", () => cancel_active(inputPasswordCheck));
inputEmail.addEventListener("keyup", () => cancel_active(inputEmail));

idCancelButton.addEventListener("click", () => delete_input(inputId));
passwordCancelButton.addEventListener("click", () => delete_input(inputPassword));
pwCheckCancelButton.addEventListener("click", () => delete_input(inputPasswordCheck));
emailCancelButton.addEventListener("click", () => delete_input(inputEmail));

pw_see_button.addEventListener("click", () => pw_see(pw_see_button));
pwcheck_see_button.addEventListener("click", () => pw_see(pwcheck_see_button));

checkAll.addEventListener("click", all_check);
submitButton.addEventListener("click", () => register(inputId, inputEmail, inputPassword));
