import {
  getNode,
  toggleClass,
  getInputValue,
  tiger,
  saveStorage,
  loadStorage,
} from '../lib/index.js'

const autoLogin = getNode('.auto-login-btn')
const password = getNode('.pw-see')
const type = getNode('.pw-type')
const inputId = getNode('#login-id')
const inputPw = getNode('#login-pw')
const loginButton = getNode('.btn-login')

function idCheck(db, id) {
  const user = db.filter((e) => e.email === id)
  if ((user.length === 0) & (user.email !== id)) {
    alert('가입되지 않은 회원입니다.')
  }

  return
}
function pwCheck(db, pw) {
  const user = db.filter((e) => e.password === pw)
  if ((user.length === 0) & (user.password !== pw)) {
    alert('비밀번호 틀렸음')
  }

  return
}

async function userCheck(idNode, pwNode) {
  const idValue = getInputValue(idNode)
  const pwValue = getInputValue(pwNode)

  const userData = await tiger.get('http://localhost:3000/users')
  const { data } = userData
  const user = data.filter((e) => e.email === idValue)

  if (user.length === 0) {
    alert('입력하신 아이디와 일치하는 회원이 존재하지 않습니다.')

    return
  }

  if (user[0].password !== pwValue) {
    alert('비밀번호가 일치하지 않습니다.')

    return
  }

  return true
}

async function login(idNode, pwNode) {
  const userData = await tiger.get('http://localhost:3000/users')
  const { data } = userData
  const user = data.filter((e) => e.email === idNode.value)
  const isUser = userCheck(idNode, pwNode)
  const auto = await loadStorage('user_uuid')
  if (isUser) {
    //로그인 성공 후 localStorage에 저장
    saveStorage('userLogin', 'true')
    saveStorage('user_uuid', user[0].user_uuid)
    saveStorage('user_id', user[0].id)
    if (auto) saveStorage('user_uuid', user[0].user_uuid)
    //routing 처리
    location.href = 'index.html'
  }
}

// 자동로그인 클릭시 text색상 변경
function auto_login() {
  toggleClass(autoLogin, 'clicked')
  const image = getNode('.auto-login-img')

  if (image.src.includes('ed')) {
    image.src = './assets/icons/login_check_26_26.png'
  } else {
    image.src = './assets/icons/login_checked_26_26.png'
  }
}

//마우스 버튼을 눌렀을 때
function pw_see_mousedown() {
  if (type.type.includes('pass')) {
    type.type = 'text'
  } else {
    type.type = 'password'
  }
  password.src = './assets/icons/login_see_36_36.svg'
  password.alt = '비밀번호 복호화'
}

//마우스 버튼을 떼었을 때
function pw_see_mouseup() {
  if (type.type.includes('pass')) {
    type.type = 'text'
  } else {
    type.type = 'password'
  }
  password.src = './assets/icons/login_nosee_36_36.png'
  password.alt = '비밀번호 암호화'
}

autoLogin.addEventListener('click', auto_login)
password.addEventListener('mousedown', pw_see_mousedown)
password.addEventListener('mouseup', pw_see_mouseup)
loginButton.addEventListener('click', () => login(inputId, inputPw))
