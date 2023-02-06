import { getNode, css, insertAfter, tiger, attr } from '../lib/index.js'
import {
  renderCurrentList,
  renderFavoriteList,
} from '../js/render/renderSearchList.js'

const defaultOption = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-orgin',
  redirect: 'follow',
  refererPolicy: 'no-referer',
  headers: {
    'Content-Type': 'application/json charset=UTF-8',
  },
}

const SEARCH_KEY = 'taing_search'

const searchInput = getNode('.search-form-input')
const searchForm = getNode('.search-form')
const alert = getNode('.alert-section')
const alertButton = getNode('.enroll-btn')

const searchCurrentTarget = getNode('.search-current > ul')
const searchCurrentTitle = getNode('.search-current > h2')
const searchFavoriteTarget = getNode('.favorite-list')

const deleteAllButton = getNode('.delete-all-btn')
const time = getNode('.search-favorite > time')

/* -------------------------------------------------------------------------- */
/*                                  현재 시간 렌더링                                 */
/* -------------------------------------------------------------------------- */
function renderDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  const hours = String(today.getHours()).padStart(2, '0')
  const minutes = String(today.getMinutes()).padStart(2, '0')

  let ampm = '오후'
  if (hours < 12) ampm = '오전'

  const template = `${year}.${month}.${day} ${ampm} ${hours}:${minutes} 기준`
  const datetime = `${year}-${month}-${day}T${hours}:${minutes}`

  time.innerText = template
  attr(time, 'datetime', datetime)
}

renderDate()

/* -------------------------------------------------------------------------- */
/*                             최근검색어, 인기검색어 render                            */
/* -------------------------------------------------------------------------- */
function loadStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

// 최근 검색어 render
function renderCurrent() {
  let searchList = loadStorage(SEARCH_KEY)
  const noSearchKeyword = getNode('.search-current > p')
  if (!searchList && !noSearchKeyword) {
    let template = /* html */ `<p>검색 내역이 없습니다.</p>`
    return insertAfter(searchCurrentTitle, template)
  }
  searchList.forEach((keyword, index) =>
    renderCurrentList(searchCurrentTarget, keyword, index),
  )
}

// 인기 검색어 render
let isFirst = true // 처음 한번만 실행되게
async function renderFavorite() {
  if (isFirst) {
    isFirst = !isFirst
    try {
      const response = await tiger.get(
        'http://localhost:3000/favorite_search',
        defaultOption,
      )
      let userData = response.data
      userData.forEach(({ rank, keyword }) => {
        renderFavoriteList(searchFavoriteTarget, rank, keyword)
      })
    } catch (err) {
      throw new Error('서버와의 통신에 실패하였습니다.')
    }
  }
}

renderCurrent()
renderFavorite()

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
  renderCurrent()
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
  renderCurrent()
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
    renderCurrent()
  }
}
searchCurrentTarget.addEventListener('click', deleteHandler)
