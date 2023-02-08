import { deleteStorage, getNode, insertFirst } from '../lib/index.js'
import { renderSearch, renderSearchAlert } from './render/renderHeader.js'

const body = getNode('body')
const header = getNode('.header')
const nav = getNode('.nav')
const main = getNode('main')
const searchButton = getNode('.header-search')
const logoutButton = getNode('.logout-modal')

header.style.backgroundColor = ''
window.addEventListener('scroll', () => {
  header.style.backgroundColor = `rgba(0,0,0,${window.scrollY / 600})`
})

let isSearschView = false
function renderSearchView() {
  if (isSearschView) {
    const searchView = getNode('.search-container')
    const alertView = getNode('.alert-section')
    searchView.remove()
    alertView.remove()
  } else {
    renderSearch(nav)
    renderSearchAlert(body)
  }

  isSearschView = !isSearschView
}

function logout() {
  deleteStorage('user_uuid')
  deleteStorage('userLogin')
  deleteStorage('user_id')
  main.removeChild(main.children[0])
  location.href = '/landing.html'
}
function logoutHandler() {
  // 모달창 띄우기
  insertFirst(
    main,
    `
    <section class="alert-section">
      <div class="alert-wrapper">
      <p class="menu_msg">로그아웃 하시겠습니까?</p>
      <div>
        <button class="enroll-btn">확인</button>
        <button class="cancel-btn">취소</button>
      </div>
    </div>
  </section> 
    `,
  )
  // const alert = getNode('.alert-section')
  const enrollButton = getNode('.enroll-btn')
  const cancelButton = getNode('.cancel-btn')

  enrollButton.addEventListener('click', logout)
  cancelButton.addEventListener('click', () => {
    main.removeChild(main.children[0])
  })
}
searchButton.addEventListener('click', renderSearchView)
logoutButton.addEventListener('click', logoutHandler)
