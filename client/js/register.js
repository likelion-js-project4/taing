import { getNode, getNodes} from '../lib/index.js';

const title = getNode('.register-title');
const input_id = getNode('#register-id');
const input_pw = getNode('#register-pw');
const input_pwcheck = getNode('#register-pw-check');
const input_email = getNode('#register-email');

const register_list= getNodes('input[name=register]');
const btn_all_check = getNode('.all-register-check');


const is_id_checked=false;
console.log(register_list);
//X버튼 활성화되는 함수
function cancel_active(node){
  const btn = node.nextElementSibling;  //해당 노드의 X버튼 

  // if(!node.value===""){
  //   btn.style.display = "inline-block";
  // }
}

// input_id.addEventListener('keyDown', cancel_active(input_id));
// input_pw.addEventListener('keyup', cancel_active(input_pw));
// input_pwcheck.addEventListener('keyup', cancel_active(input_pwcheck));
// input_email.addEventListener('keyup', cancel_active(input_email));

function all_check(){
  btn_all_check.lastElementChild.style.color='white';
  btn_all_check.firstElementChild.firstElementChild.src='./assets/icons/login_checked_26_26.png';
 
  // const list_all = getNode('.register-content-wrap');
  // console.log(list_all);

}
btn_all_check.addEventListener('click', all_check);

function list_click(){
  const a = getNode('.register-content-item');
  
}
register_list.addEventListener('click', list_click);
