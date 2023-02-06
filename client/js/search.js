import { getNode, css, tiger, saveStorage, loadStorage } from '../lib/index.js'

const SEARCH_KEY = 'taing_search'

const searchInput = getNode('.search-form-input')
const searchForm = getNode('.search-form')
const alert = getNode('.alert-section')
const alertButton = getNode('.enroll-btn')

function updateSearch(keyword) {
  let prevSearch = JSON.parse(localStorage.getItem(SEARCH_KEY))
  let searchArray = prevSearch

  if (prevSearch === null) {
    searchArray = []
  }
  searchArray.push(keyword)
  localStorage.setItem(SEARCH_KEY, JSON.stringify(searchArray))
}

function inputHandler() {
  const keyword = searchInput.value
  // 최근 검색어 업데이트 하기
  if (keyword === '') {
    return css(alert, 'display', 'block')
  }
  updateSearch(keyword)
}

function alertHandler() {
  css(alert, 'display', 'none')
}

searchForm.addEventListener('submit', inputHandler)
alertButton.addEventListener('click', alertHandler)

// 최근 검색어 localStorage에 업데이트

// let response = await tiger('http://localhost:3000/users')
// console.log(response)
