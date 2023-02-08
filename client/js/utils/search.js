import {
  getNode,
  css,
  insertAfter,
  tiger,
  attr,
  loadStorage,
  saveStorage,
} from '../../lib/index.js'
import {
  renderCurrentList,
  renderFavoriteList,
} from '../../js/render/renderSearchList.js'

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

/* -------------------------------------------------------------------------- */
/*                                  현재 시간 렌더링                                 */
/* -------------------------------------------------------------------------- */
export function renderDate(node) {
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

  node.innerText = timeTemplate
  attr(node, 'datetime', datetime)
}

/* -------------------------------------------------------------------------- */
/*                             최근검색어, 인기검색어 render                            */
/* -------------------------------------------------------------------------- */

export async function renderCurrent(searchCurrentTarget, searchCurrentTitle) {
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

export async function renderFavorite(node) {
  const favoriteData = await getFavorite()
  favoriteData.forEach(({ rank, keyword }) => {
    renderFavoriteList(node, rank, keyword)
  })
}

/* -------------------------------------------------------------------------- */
/*                                최근 검색어 모두 지우기                               */
/* -------------------------------------------------------------------------- */
// 노드의 자식노드 모두 삭제
export function removeChildAll(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

// 최근 검색어 모두 지우기
export function clearSearch(searchCurrentTitle, searchCurrentTarget) {
  localStorage.removeItem(SEARCH_KEY)
  removeChildAll(searchCurrentTarget)
  renderCurrent(searchCurrentTitle, searchCurrentTarget)
}

/* -------------------------------------------------------------------------- */
/*                                 최근 검색어 업데이트                                */
/* -------------------------------------------------------------------------- */
async function updateSearch({
  keyword,
  searchCurrentTarget,
  searchCurrentTitle,
}) {
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
  renderCurrent(searchCurrentTarget, searchCurrentTitle)
}

export function inputHandler({
  alert,
  searchInput,
  searchCurrentTarget,
  searchCurrentTitle,
}) {
  const keyword = searchInput.value
  // 최근 검색어 업데이트 하기
  if (keyword.trim() === '') {
    return css(alert, 'display', 'block')
  }
  updateSearch({ keyword, searchCurrentTarget, searchCurrentTitle })
  searchInput.value = ''
}

export function alertHandler(alert) {
  css(alert, 'display', 'none')
}

/* -------------------------------------------------------------------------- */
/*                                 특정 검색어 지우기                                 */
/* -------------------------------------------------------------------------- */

export async function deleteSearch(deletedIndex) {
  let searchList = await loadStorage(SEARCH_KEY)
  searchList.splice(deletedIndex, 1)

  return searchList
}

export function validateIsEmpty(deletedArray) {
  if (deletedArray.length === 0) {
    localStorage.removeItem(SEARCH_KEY)
  } else {
    saveStorage(SEARCH_KEY, deletedArray)
  }
}
