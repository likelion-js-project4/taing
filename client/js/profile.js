import { getNode, removeClass, addClass, getNodes} from "../lib/index.js";

const profileEditButton = getNode('#edit-btn');
const profileUserButton = getNodes('.user-btn')


let toggle = true;

  //편집버튼을 누른상황 = true
  // => 완료버튼이 나타나있는 상태

  //완료버튼을 누른상황 = false
  // => 편집버튼이 나타나있는 상태



function clickEditHandler() {

  if (toggle) {
  removeClass(profileEditButton, 'profile-edit-btn')
  addClass(profileEditButton,'profile-complete-btn')
  profileUserButton.forEach(profileUserButton=>addClass(profileUserButton,'user-edit-btn'))
  profileEditButton.textContent = "완료"
  toggle = !toggle;

  }else{
  removeClass(profileEditButton,'profile-complete-btn')
  addClass(profileEditButton, 'profile-edit-btn')
  profileUserButton.forEach(profileUserButton=>removeClass(profileUserButton,'user-edit-btn'))
  profileEditButton.textContent = "프로필 편집"
    toggle = !toggle;
  }
  }
    

profileEditButton.addEventListener('click',clickEditHandler);
