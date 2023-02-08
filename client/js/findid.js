import { getNode} from '../lib/index.js';

const btn_cancel = getNode('.email-cancel-btn');
const email = getNode('#id-email');
const input_btn = getNode('.email-input-btn');

// 아이디찾기 input 값 들어오면 버튼 활성화 시키기 및 X버튼 표시
function email_change(){
  if (email.value ===''){
    input_btn.disabled=true;
  }
  else{
    input_btn.disabled=false;
    btn_cancel.style.display = 'inline-block';
  }
}
email.addEventListener('keyup', email_change);

//아이디찾기 X버튼 누르면 input text 지우기
function delete_input(){
  email.value='';
  input_btn.disabled=true;
  btn_cancel.style.display='none';
}
btn_cancel.addEventListener('click', delete_input);

//확인버튼 누르면 alert창 띄우기
function alertMessage(){
  let email_format = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if(email_format.test(email.value)) alert('이메일확인');
  else{
    alert('이메일 주소를 입력해주세요.');
    email.value='';
  }
}
input_btn.addEventListener('click', alertMessage);