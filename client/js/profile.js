import { getNode } from "../lib/index.js";

const profileEdit = getNode('.profile-edit-btn');

// console.log(profileEdit);

function clickSubmitHandler(e) {
  e.preventDefault();
  console.log('클릭')
}

profileEdit.addEventListener('click',clickSubmitHandler);

