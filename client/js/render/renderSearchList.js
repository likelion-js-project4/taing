import { insertLast } from '../../lib/index.js'

// 최근검색어 렌더링
const createSearchList = (keyword) => {
  return /* html */ `
  <li class="list-item">
    <a href="#">${keyword}</a>
    <button type="button" class="delete-btn">
      <img
        src="./assets/icons/search_delete_15_15.png"
        alt="삭제"
      />
    </button>
  </li>
  `
}

export function renderSearchList(target, keyword) {
  insertLast(target, createSearchList(keyword))
}
