import { insertLast } from '../../lib/index.js'

// 최근검색어 렌더링
const createCurrentList = (keyword, index) => {
  return /* html */ `
  <li class="list-item" data-index=${index}>
    <a href="#" tabindex="-1">${keyword}</a>
    <button type="button" class="delete-btn">
      <img
        src="./assets/icons/search_delete_15_15.png"
        alt="삭제"
      />
    </button>
  </li>
  `
}

const createFavoriteList = (rank, keyword) => {
  return /* html */ `
  <li class="no${rank}">
    <a href="#">${keyword}</a>
  </li>
  `
}

export function renderCurrentList(target, keyword, index) {
  insertLast(target, createCurrentList(keyword, index))
}

export function renderFavoriteList(target, keyword, index) {
  insertLast(target, createFavoriteList(keyword, index))
}
