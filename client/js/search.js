import { getNode, css, insertAfter } from '../lib/index.js'
import { renderSearchList } from '../js/render/renderSearchList.js'

const SEARCH_KEY = 'taing_search'

const searchInput = getNode('.search-form-input')
const searchForm = getNode('.search-form')
const alert = getNode('.alert-section')
const alertButton = getNode('.enroll-btn')

const searchCurrentTarget = getNode('.search-current > ul')
const searchCurrentTitle = getNode('.search-current > h2')

const deleteAllButton = getNode('.delete-all-btn')

/* -------------------------------------------------------------------------- */
/*                             최근검색어, 인기검색어 render                            */
/* -------------------------------------------------------------------------- */
function loadStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function renderList() {
  let searchList = loadStorage(SEARCH_KEY)
  const noSearchKeyword = getNode('.search-current > p')
  if (!searchList && !noSearchKeyword) {
    let template = /* html */ `<p>검색 내역이 없습니다.</p>`
    return insertAfter(searchCurrentTitle, template)
  }
  searchList.forEach((keyword, index) =>
    renderSearchList(searchCurrentTarget, keyword, index),
  )
  // 인기 검색어 render
}
renderList()

/* -------------------------------------------------------------------------- */
/*                                최근 검색어 모두 지우기                               */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*                                 최근 검색어 업데이트                                */
/* -------------------------------------------------------------------------- */
function updateSearch(keyword) {
  let prevSearchArray = loadStorage(SEARCH_KEY)
  let searchArray = prevSearchArray

  if (prevSearchArray === null) {
    searchArray = []
  }
  searchArray.push(keyword)
  saveStorage(SEARCH_KEY, searchArray)

  // 검색 내역이 없습니다. 요소 지우기
  const noSearchKeyword = getNode('.search-current > p')
  if (noSearchKeyword) noSearchKeyword.remove()
  // 업데이트된 최근검색어 렌더링
  removeChildAll(searchCurrentTarget)
  renderList()
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

searchForm.addEventListener('submit', inputHandler)
alertButton.addEventListener('click', alertHandler)
deleteAllButton.addEventListener('click', clearSearch)

/* -------------------------------------------------------------------------- */
/*                                 특정 검색어 지우기                                 */
/* -------------------------------------------------------------------------- */
// 선택한 최근 검색어 지우기
function deleteSearch(deletedIndex) {
  let searchList = loadStorage(SEARCH_KEY)
  searchList.splice(deletedIndex, 1)
  return searchList
}

function deleteHandler(e) {
  const target = e.target
  if (target.tagName === 'IMG') {
    const targetIndex = target.closest('li').dataset.index
    console.log('targetIndex', targetIndex)
    const deletedArray = deleteSearch(targetIndex)
    if (deletedArray.length === 0) {
      // 클리어
      localStorage.removeItem(SEARCH_KEY)
    } else {
      saveStorage(SEARCH_KEY, deletedArray)
    }
    removeChildAll(searchCurrentTarget)
    renderList()
  }
}
searchCurrentTarget.addEventListener('click', deleteHandler)
