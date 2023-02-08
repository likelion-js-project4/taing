import { getNode} from '../lib/index.js';

const input_id = getNode('#pw-id');
const btn_cancel = getNode('.id-cancel-btn');
const btn_confirm = getNode('.id-input-btn');

//input 값 들어오면 버튼 활성화 및 X버튼 표시
function input_id_change(){
  if(input_id.value ===''){
    btn_confirm.disabled=true;
  }else{
    btn_confirm.disabled=false;
    btn_cancel.style.display='inline-block';
  }
}
input_id.addEventListener('keyup', input_id_change);

//X버튼 누르면 input text 지우기
function delete_input(){
  input_id.value='';
  btn_confirm.disabled=true;
  btn_cancel.style.display='none';
}
btn_cancel.addEventListener('click', delete_input);

//확인버튼 누르면 alert창 띄우기

btn_confirm.addEventListener('click', ()=>alert('확인되었습니다.'));