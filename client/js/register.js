import { getNode, getNodes} from '../lib/index.js';

const input_id = getNode('#register-id');
const input_pw = getNode('#register-pw');
const input_pwcheck = getNode('#register-pw-check');
const input_email = getNode('#register-email');

const id_cancel_button= getNode('.id-cancel-btn');
const pw_cancel_button= getNode('.pw-cancel-btn');
const pwcheck_cancel_button= getNode('.pwcheck-cancel-btn');
const email_cancel_button= getNode('.email-cancel-btn');

const register_list= getNodes('input[name=register]');
const btn_all_check = getNode('.all-register-check');

const is_id_checked=false;

//X버튼 활성화되는 함수
function cancel_active(node){
  const btn = node.nextElementSibling;  //해당 노드의 X버튼 

  // const cancel_btn = getNode(btn.class)

  if(node.value===""){
    console.log('hit');
  }else{
    btn.style.display = "inline-block";
  }
}

//X버튼 누르면 글 지우기
function delete_input(node){
  const node_cancel_button= node.nextElementSibling;

  node.value="";
  node_cancel_button.style.display = "none";
}

function all_check(){
  btn_all_check.lastElementChild.style.color='white';
  btn_all_check.firstElementChild.firstElementChild.src='./assets/icons/login_checked_26_26.png';
 
  // const list_all = getNode('.register-content-wrap');
  // console.log(list_all);

}


function list_click(){
  const a = getNode('.register-content-item');
  
}

input_id.addEventListener('keyup', () => cancel_active(input_id));
input_pw.addEventListener('keyup', () => cancel_active(input_pw));
input_pwcheck.addEventListener('keyup', () => cancel_active(input_pwcheck));
input_email.addEventListener('keyup', () => cancel_active(input_email));

id_cancel_button.addEventListener('click', ()=> delete_input(input_id));
pw_cancel_button.addEventListener('click', ()=> delete_input(input_pw));
pwcheck_cancel_button.addEventListener('click', ()=> delete_input(input_pwcheck));
email_cancel_button.addEventListener('click', ()=> delete_input(input_email));

btn_all_check.addEventListener('click', all_check);
register_list.addEventListener('click', list_click);
