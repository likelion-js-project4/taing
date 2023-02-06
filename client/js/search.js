import {
  getNode,
  css,
  tiger,
  insertLast,
  insertAfter,
  clearContents,
} from '../lib/index.js'
import { renderSearchList } from '../js/render/renderSearchList.js'

const SEARCH_KEY = 'taing_search'

const searchInput = getNode('.search-form-input')
const searchForm = getNode('.search-form')
const alert = getNode('.alert-section')
const alertButton = getNode('.enroll-btn')

const searchCurrentTarget = getNode('.search-current > ul')
const searchCurrentTitle = getNode('.search-current > h2')

const deleteAllButton = getNode('.delete-all-btn')

function renderList() {
  let searchList = JSON.parse(localStorage.getItem(SEARCH_KEY))
  if (!searchList) {
    let template = /* html */ `<p>검색 내역이 없습니다.</p>`
    return insertAfter(searchCurrentTitle, template)
  }
  searchList.forEach((keyword) =>
    renderSearchList(searchCurrentTarget, keyword),
  )
  // 인기 검색어 render
}
renderList()

function updateSearch(keyword) {
  let prevSearchArray = JSON.parse(localStorage.getItem(SEARCH_KEY))
  let searchArray = prevSearchArray

  if (prevSearchArray === null) {
    searchArray = []
  }
  searchArray.push(keyword)
  localStorage.setItem(SEARCH_KEY, JSON.stringify(searchArray))

  // 검색 내역이 없습니다. 요소 지우기
  const noSearchKeyword = getNode('.search-current > p')
  if (noSearchKeyword) noSearchKeyword.remove()
  // 업데이트된 최근검색어 렌더링
  renderSearchList(searchCurrentTarget, keyword)
}

function inputHandler() {
  const keyword = searchInput.value
  // 최근 검색어 업데이트 하기
  if (keyword === '') {
    return css(alert, 'display', 'block')
  }
  updateSearch(keyword)
  searchInput.value = ''
}

function alertHandler() {
  css(alert, 'display', 'none')
}

// 노드의 자식노드 모두 삭제
function removeChildAll(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

// 최근 검색어 모두 지우기
function clearSearch() {
  localStorage.removeItem(SEARCH_KEY)
  removeChildAll(searchCurrentTarget)
  renderList()
}

searchForm.addEventListener('submit', inputHandler)
alertButton.addEventListener('click', alertHandler)
deleteAllButton.addEventListener('click', clearSearch)

// 최근 검색어 localStorage에 업데이트

// let response = await tiger('http://localhost:3000/users')
// console.log(response)
