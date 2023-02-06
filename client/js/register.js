import { getNode, getNodes} from '../lib/index.js';

const inputId = getNode('#register-id');
const inputPassword = getNode('#register-pw');
const inputPasswordCheck = getNode('#register-pw-check');
const inputEmail = getNode('#register-email');

const idCancelButton= getNode('.id-cancel-btn');
const passwordCancelButton= getNode('.pw-cancel-btn');
const pwCheckCancelButton= getNode('.pwcheck-cancel-btn');
const emailCancelButton= getNode('.email-cancel-btn');

const pw_see_button = getNode('.pw-see-btn');
const pwcheck_see_button = getNode('.pw-see2-btn');

const idContent = getNode('.register-id-content');
const pwContent = getNode('.register-pw-content')

// const register_list= getNodes('input[name=register]');
const checkAll= getNode('#register-all');   //모두동의합니다 input
const check1 = getNode('#register-item1');
const check2 = getNode('#register-item2');
const check3 = getNode('#register-item3');
const check4 = getNode('#register-item4');
const check5 = getNode('#register-item5');
const check6 = getNode('#register-item6');
const check7 = getNode('#register-item7');
const check8 = getNode('#register-item8');

const submitButton  = getNode('.btn-register');     //최종 가입하기버튼

//회원가입 하기전 요건
const agreements={
  id : false,
  pw : false,
  email : false,
  check1 : false,
  check2 : false,
  check3 : false,
  check4 : false,
};

// input 함수
function cancel_active(node){
  const btn = node.nextElementSibling;  //해당 노드의 X버튼 

  if(!(node.value==="")){
    btn.style.display = "inline-block";
  }

  // 아이디 input 인 경우
  if(node.placeholder.includes("아이디")){
    if(node.value.length<6 || node.value.length >13){
      idContent.style.color='red';
    }else{
      idContent.style.color='var(--silver500)';
    }
  }

  // 비밀번호 input 인 경우
  if(node.placeholder.includes("비밀번호")){
    if(node.value.length<8 || node.value.length >15){
      pwContent.style.color='red';
    }else{
      pwContent.style.color='var(--silver500)';
    }
  }

}

//X버튼 누르면 글 지우기
function delete_input(node){
  const node_cancel_button= node.nextElementSibling;

  node.value="";
  node_cancel_button.style.display = "none";
}

//비밀번호 보이게 하기 
function pw_see(node){
  const pw_img = node.firstElementChild;
  const pw_input = node.previousElementSibling.previousElementSibling;

  if (pw_input.type.includes('pass')) {
    pw_input.type = 'text';
  } else {
    pw_input.type = 'password';
  }

  if (pw_img.src.includes('no')) {
    pw_img.src = './assets/icons/login_see_36_36.svg';
    pw_img.alt="비밀번호 복호화";
  } else {
    pw_img.src = './assets/icons/login_nosee_36_36.png';
    pw_img.alt="비밀번호 암호화";
  }
}

//모두 동의하기 버튼
function all_check(){
  const checkboxes = getNodes('.register-content-item > input');

  for (let checkbox of checkboxes){
    checkbox.checked = this.checked;
  }
}

// 모두동의버튼 안누르고 모든 체크를 하면 동의하기버튼도 활성화
// if (check1 && check2 && check3 && check4 %% check5 && check6 && check7 && check8) {
//   checkAll.checked = true;
// } else {
//   checkAll.checked = false;
// }

//모든 회원가입 조건을 만족시켰을시 버튼 활성화시키기
// for(let key in agreements) {
//   if(key ==false){
//     return false;
//   }else{
//     submitButton.disabled=false;
//   }
// }



inputId.addEventListener('keyup', () => cancel_active(inputId));
inputPassword.addEventListener('keyup', () => cancel_active(inputPassword));
inputPasswordCheck.addEventListener('keyup', () => cancel_active(inputPasswordCheck));
inputEmail.addEventListener('keyup', () => cancel_active(inputEmail));

idCancelButton.addEventListener('click', ()=> delete_input(inputId));
passwordCancelButton.addEventListener('click', ()=> delete_input(inputPassword));
pwCheckCancelButton.addEventListener('click', ()=> delete_input(inputPasswordcheck));
emailCancelButton.addEventListener('click', ()=> delete_input(inputEmail));

pw_see_button.addEventListener('click', () => pw_see(pw_see_button));
pwcheck_see_button.addEventListener('click', () => pw_see(pwcheck_see_button));

checkAll.addEventListener('click', all_check);

