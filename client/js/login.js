import { getNode, toggleClass } from '../lib/index.js';

const autoLogin = getNode('.auto-login-btn');
const password = getNode('.pw-see');

function auto_login() {
  toggleClass(autoLogin, 'clicked');
  const image = getNode('.auto-login-img');

  if (image.src.includes('ed')) {
    image.src = './assets/icons/login_check_26_26.png';
  } else {
    image.src = './assets/icons/login_checked_26_26.png';
  }
}

autoLogin.addEventListener('click', auto_login);

function pw_see() {
  const type = getNode('.pw-type');
  if (type.type.includes('pass')) {
    type.type = 'text';
  } else {
    type.type = 'password';
  }

  if (password.src.includes('no')) {
    password.src = './assets/icons/login_see_36_36.svg';
    password.alt="비밀번호 복호화";
  } else {
    password.src = './assets/icons/login_nosee_36_36.png';
    password.alt="비밀번호 암호화";
  }
}

password.addEventListener('click', pw_see);
