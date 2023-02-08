import { insertAfter } from '../../lib/index.js'

const createSearch = () => {
  return /* html */ `
  <div class="search-container">
    <div class="search-wrapper">
      <h2 class="a11y-hidden">검색</h2>
      <form method="GET" action="#" class="search-form">
        <fieldset>
          <legend>검색 폼</legend>
          <div class="search-form-wrapper">
            <div class="search-form-box">
              <label for="search" class="a11y-hidden">
                자료검색
              </label>
              <input
                type="text"
                id="search"
                class="search-form-input"
                placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
              />
            </div>
            <button type="submit" class="search-button">
              <img
                src="./assets/icons/search_searchBtn_50_50.png"
                alt="검색"
              />
            </button>
          </div>
        </fieldset>
      </form>

      <div class="search-content-box">
        <section class="search-current">
          <h2>최근 검색어</h2>
          <ul></ul>
          <button type="button" class="delete-all-btn">
            <span aria-hidden="true">모두 지우기</span>
            <img
              src="./assets/icons/search_deleteAll_14_14.png"
              alt="모두지우기"
            />
          </button>
        </section>
        <section class="search-favorite">
          <h2>실시간 인기 검색어</h2>
          <ol class="favorite-list"></ol>
          <time datetime="2022-12-24T03:04">
            2022.12.24 오전 03:04 기준
          </time>
        </section>
      </div>
    </div>
  </div>
  `
}

const createSearchAlert = () => {
  return /* html */ `
    <section class="alert-section">
      <div class="alert-wrapper">
        <p class="menu_msg">검색어를 입력해주세요.</p>
        <button class="enroll-btn">확인</button>
      </div>
    </section>
  `
}

const TRUE = true

export function renderSearchAlert(target) {
  insertAfter(target, createSearchAlert())

  return new Promise((resolve, reject) => {
    if (TRUE) resolve('서치 경고창 렌더링 성공')
    else reject('서치 경고창 렌더링 실패')
  })
}

export function renderSearch(target) {
  insertAfter(target, createSearch())

  return new Promise((resolve, reject) => {
    if (TRUE) resolve('서치 렌더링 성공')
    else reject('서치 렌더링 실패')
  })
}
