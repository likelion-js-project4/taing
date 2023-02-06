import { getNode, css } from '../lib/index.js'

const searchInput = getNode('.search-form-input')
const searchForm = getNode('.search-form')
const alert = getNode('.alert-section')
const alertButton = getNode('.enroll-btn')
console.log(searchInput)

function inputHandler() {
  const keyword = searchInput.value
  // 최근 검색어 업데이트 하기
  console.log(keyword)
  if (keyword === '') {
    css(alert, 'display', 'block')
  }
}

function alertHandler() {
  css(alert, 'display', 'none')
}

searchForm.addEventListener('submit', inputHandler)
alertButton.addEventListener('click', alertHandler)
