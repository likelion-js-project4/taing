import { insertLast } from '../../lib/index.js'

// 최근검색어 렌더링
const createSearchList = (keyword, index) => {
  return /* html */ `
  <li class="list-item" data-index=${index}>
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

export function renderSearchList(target, keyword, index) {
  insertLast(target, createSearchList(keyword, index))
}
