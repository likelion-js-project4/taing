import { getNode, removeClass, addClass} from "../lib/index.js";

const profileEditButton = getNode('#edit-btn');


let toggle = true;

  //편집버튼을 누른상황 = true
  // => 완료버튼이 나타나있는 상태

  //완료버튼을 누른상황 = false
  // => 편집버튼이 나타나있는 상태


function clickEditHandler() {
if (toggle) {
removeClass('#edit-btn', 'profile-edit-btn')
addClass('#edit-btn','profile-complete-btn')
profileEditButton.textContent = "완료"
toggle = !toggle;
}else{
removeClass('#edit-btn','profile-complete-btn')
addClass('#edit-btn', 'profile-edit-btn')
profileEditButton.textContent = "프로필 편집"
  toggle = !toggle;
}
}



profileEditButton.addEventListener('click',clickEditHandler);
