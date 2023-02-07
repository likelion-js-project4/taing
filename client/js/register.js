import { getNode, getNodes, toggleClass} from '../lib/index.js';

const inputId = getNode('#register-id');
const inputPassword = getNode('#register-pw');
const inputPasswordCheck = getNode('#register-pw-check');
const inputEmail = getNode('#register-email');

const idCancelButton= getNode('.id-cancel-btn');
const passwordCancelButton= getNode('.pw-cancel-btn');
const pwCheckCancelButton= getNode('.pwcheck-cancel-btn');
const emailCancelButton= getNode('.email-cancel-btn');

const pwSeeButton = getNode('.pw-see-btn');
const pwCheckSeeButton = getNode('.pw-see2-btn');

const idContent = getNode('.register-id-content');
const pwContent = getNode('.register-pw-content');
const pwCheckContent = getNode('.register-pwcheck-content');
const emailContent = getNode('.register-email-content');

const checkAll= getNode('#register-all');   //모두동의합니다 input
const checkBoxes = getNodes('.register-content-item > input');  //전체 체크박스

const submitButton  = getNode('.btn-register');     //최종 가입하기버튼

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
  if(node.classList.value===("first-pw")){
    if(node.value.length<8 || node.value.length >15){
      pwContent.style.color='red';
    }else{
      pwContent.style.color='var(--silver500)';
    }
  }

   // 비밀번호 확인 input 인 경우
   if(node.classList.value===("second-pw")){
    if(node.value.length<8 || node.value.length >15){
      pwCheckContent.style.display="inline-block";
    }else{
      pwCheckContent.style.display="none";
    }
  }

  let email_format = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
   // 이메일 input 인 경우
  if(node.placeholder.includes("이메일")){
    if(!(email_format.test(node.value))){
      emailContent.style.display="inline-block";
    }else{
      emailContent.style.display="none";
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

//모두동의합니다 누르면 모두 체크
checkAll.addEventListener('click', () => {
  checkBoxes.forEach(item => {
    item.checked = checkAll.checked;
  })
})

//모두 클릭되면 (모두 동의합니다) 도 체크되기
checkBoxes.forEach(item => {
  item.addEventListener("click", ()=>{
    let count = 0;
    checkBoxes.forEach(item => {
      if(item.checked){
        count ++;
      }
    })
    if(count == checkBoxes.length){
      checkAll.checked = true;
    }else{
      checkAll.checked = false;
    }
  })
})

inputId.addEventListener('keyup', () => cancel_active(inputId));
inputPassword.addEventListener('keyup', () => cancel_active(inputPassword));
inputPasswordCheck.addEventListener('keyup', () => cancel_active(inputPasswordCheck));
inputEmail.addEventListener('keyup', () => cancel_active(inputEmail));

idCancelButton.addEventListener('click', ()=> delete_input(inputId));
passwordCancelButton.addEventListener('click', ()=> delete_input(inputPassword));
pwCheckCancelButton.addEventListener('click', ()=> delete_input(inputPasswordcheck));
emailCancelButton.addEventListener('click', ()=> delete_input(inputEmail));

pwSeeButton.addEventListener('click', () => pw_see(pwSeeButton));
pwCheckSeeButton.addEventListener('click', () => pw_see(pwCheckSeeButton));
