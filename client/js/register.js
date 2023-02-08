import { getNode, getNodes, RandomString, saveStorage, tiger } from '../lib/index.js';

const inputId = getNode('#register-id');
const inputPassword = getNode('#register-pw');
const inputPasswordCheck = getNode('#register-pw-check');
const inputEmail = getNode('#register-email');

const idCancelButton = getNode('.id-cancel-btn');
const passwordCancelButton = getNode('.pw-cancel-btn');
const pwCheckCancelButton = getNode('.pwcheck-cancel-btn');
const emailCancelButton = getNode('.email-cancel-btn');

const pwSeeButton = getNode(".pw-see-btn");
const pwCheckSeeButton = getNode(".pw-see2-btn");

const idContent = getNode(".register-id-content");
const pwContent = getNode(".register-pw-content");
const pwCheckContent = getNode(".register-pwcheck-content");
const emailContent = getNode(".register-email-content");

const checkAll = getNode("#register-all"); //모두동의합니다 input
const checkBoxes = getNodes(".register-content-item > input"); //전체 체크박스

const check2 = getNode("#register-item2");
const check3 = getNode("#register-item3");
const check4 = getNode("#register-item4");

const submitButton = getNode(".btn-register"); //최종 가입하기버튼

const agreement = {
  id: false,
  pw: false,
  email: false,
};

// input 함수
function cancel_active(node) {
  const btn = node.nextElementSibling; //해당 노드의 X버튼
  const firstPw = getNode("#register-pw");

  if(!(node.value==='')){
    btn.style.display = 'inline-block';
  }

  let regId = /^[a-z]+[a-z0-9]{5,13}$/g;
  // 아이디 input 인 경우
  if(node.placeholder.includes('아이디')){
    if(!(regId.test(node.value))){
      idContent.style.color='red';
    }else{
      idContent.style.color='var(--silver500)';
      agreement.id=true;
    }
  }

  let regPw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  // 비밀번호 input 인 경우
  if(node.classList.value===('first-pw')){
    if(!(regPw.test(node.value))){
      pwContent.style.color='red';
    }else{
      pwContent.style.color='var(--silver500)';
    }
  }

   // 비밀번호 확인 input 인 경우
   if(node.classList.value===('second-pw')){
    if(!(node.value===firstPw.value)){
      pwCheckContent.style.display='inline-block';
      
    }else{
      pwCheckContent.style.display='none';
      agreement.pw=true;
    }
  }

  let email_format = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
   // 이메일 input 인 경우
  if(node.placeholder.includes('이메일')){
    if(!(email_format.test(node.value))){
      emailContent.style.display='inline-block';
      
    }else{
      emailContent.style.display='none';
      agreement.email=true;
    }
  }
}

//X버튼 누르면 글 지우기
function delete_input(node) {
  const node_cancel_button = node.nextElementSibling;
  node.value = '';
  node_cancel_button.style.display = 'none';
}

//비밀번호 보이게 하기
function pw_see(node) {
  const pw_img = node.firstElementChild;
  const pw_input = node.previousElementSibling.previousElementSibling;

  if (pw_input.type.includes('pass')) {
    pw_input.type = 'text';
  } else {
    pw_input.type = 'password';
  }

  if (pw_img.src.includes('no')) {
    pw_img.src = './assets/icons/login_see_36_36.svg';
    pw_img.alt = '비밀번호 복호화';
  } else {
    pw_img.src = './assets/icons/login_nosee_36_36.png';
    pw_img.alt = '비밀번호 암호화';
  }
}

//모두동의합니다 누르면 모두 체크
checkAll.addEventListener("click", () => {
  checkBoxes.forEach((item) => {
    item.checked = checkAll.checked;
  });
});

//모두 클릭되면 (모두 동의합니다) 도 체크되기
checkBoxes.forEach(item => {
  item.addEventListener('click', ()=>{
    let count = 0;
    checkBoxes.forEach((item) => {
      if (item.checked) {
        count++;
      }
    });
    if (count == checkBoxes.length) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }
  });
});

async function saveUser(id, email, password) {
  const user_uuid = RandomString(10);

  await tiger.post('http://localhost:3000/users', {
    user_uuid,
    id,
    email,
    password,
  });
  saveStorage('user_uuid', user_uuid);
}

/* 유저 존재유무 체크 */
async function checkUserExists(user) {
  if (user.length !== 0) {
    alert('이미 가입한 회원입니다.');
  }

  return;
}

/* 필수동의사항 선택 체크 */
function checkAgreement() {
  if (!(check2.checked && check3.checked && check4.checked)) {
    alert('필수 동의 사항을 확인해주세요.');

    return false;
  } if(!(agreement.id && agreement.pw && agreement.email)){
    alert('아이디, 비밀번호, 이메일등을 확인하세요.');

    return false;
  } else return true;
}

/* 회원가입 */
async function register(idNode, emailNode, passwordNode) {
  const id = idNode.value;
  const email = emailNode.value;
  const password = passwordNode.value;

  const userData = await tiger.get('http://localhost:3000/users');
  const { data } = userData;
  const user = data.filter((user) => user.email === email);

  const isChecked = checkAgreement();

  checkUserExists(user);
  if (isChecked) {
    saveUser(id, email, password);
    location.href = "./login.html";
    alert("Taing의 회원이 되어주셔서 감사합니다.");
  }

  return;
}

inputId.addEventListener("keyup", () => cancel_active(inputId));
inputPassword.addEventListener("keyup", () => cancel_active(inputPassword));
inputPasswordCheck.addEventListener("keyup", () => cancel_active(inputPasswordCheck));
inputEmail.addEventListener("keyup", () => cancel_active(inputEmail));

idCancelButton.addEventListener('click', ()=> delete_input(inputId));
passwordCancelButton.addEventListener('click', ()=> delete_input(inputPassword));
pwCheckCancelButton.addEventListener('click', ()=> delete_input(inputPasswordCheck));
emailCancelButton.addEventListener('click', ()=> delete_input(inputEmail));

pwSeeButton.addEventListener("click", () => pw_see(pwSeeButton));
pwCheckSeeButton.addEventListener("click", () => pw_see(pwCheckSeeButton));

submitButton.addEventListener("click", () => register(inputId, inputEmail, inputPasswordCheck));
