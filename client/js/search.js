import {
  getNode,
  css,
  insertAfter,
  tiger,
  attr,
  loadStorage,
  saveStorage,
} from '../lib/index.js'
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
const SERVER_ERROR_MESSAGE = '서버와의 통신에 실패하였습니다.'
const FAVORITE_URL = 'http://localhost:3000/favorite_search'

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

  const timeTemplate = `${year}.${month}.${day} ${ampm} ${hours}:${minutes} 기준`
  const datetime = `${year}-${month}-${day}T${hours}:${minutes}`

  time.innerText = timeTemplate
  attr(time, 'datetime', datetime)
}

renderDate()

/* -------------------------------------------------------------------------- */
/*                             최근검색어, 인기검색어 render                            */
/* -------------------------------------------------------------------------- */

async function renderCurrent() {
  let searchList = await loadStorage(SEARCH_KEY)
  const noSearchKeyword = getNode('.search-current > p')
  if (!searchList && !noSearchKeyword) {
    let template = /* html */ '<p>검색 내역이 없습니다.</p>'

    return insertAfter(searchCurrentTitle, template)
  }
  searchList.forEach((keyword, index) =>
    renderCurrentList(searchCurrentTarget, keyword, index),
  )
}

async function getFavorite() {
  try {
    const response = await tiger.get(FAVORITE_URL, defaultOption)

    return response.data
  } catch (err) {
    throw new Error(SERVER_ERROR_MESSAGE)
  }
}

let isFirst = true // 처음 한번만 실행되게
async function renderFavorite() {
  if (isFirst) {
    isFirst = !isFirst
    const favoriteData = await getFavorite()
    favoriteData.forEach(({ rank, keyword }) => {
      renderFavoriteList(searchFavoriteTarget, rank, keyword)
    })
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
async function updateSearch(keyword) {
  let prevSearchArray = await loadStorage(SEARCH_KEY)
  let searchArray = prevSearchArray

  if (prevSearchArray === null) {
    searchArray = []
  } else if (prevSearchArray.length === 10) {
    prevSearchArray.splice(0, 1)
    searchArray = prevSearchArray
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
  if (keyword.trim() === '') {
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

async function deleteSearch(deletedIndex) {
  let searchList = await loadStorage(SEARCH_KEY)
  searchList.splice(deletedIndex, 1)

  return searchList
}

function validateIsEmpty(deletedArray) {
  if (deletedArray.length === 0) {
    localStorage.removeItem(SEARCH_KEY)
  } else {
    saveStorage(SEARCH_KEY, deletedArray)
  }
}

async function deleteHandler(e) {
  const target = e.target
  if (target.tagName === 'IMG') {
    const targetIndex = target.closest('li').dataset.index
    const deletedArray = await deleteSearch(targetIndex)
    validateIsEmpty(deletedArray)
    removeChildAll(searchCurrentTarget)
    renderCurrent()
  }
}
searchCurrentTarget.addEventListener('click', deleteHandler)

/* -------------------------------------------------------------------------- */
/*                                 검색창 내용 바꾸기                                 */
/* -------------------------------------------------------------------------- */

function resizeHandler() {
  if (window.innerWidth < 450) {
    return attr(searchInput, 'placeholder', '검색')
  }
  attr(
    searchInput,
    'placeholder',
    'TV프로그램, 영화 제목 및 출연진으로 검색해보세요',
  )
}

window.addEventListener('resize', resizeHandler)