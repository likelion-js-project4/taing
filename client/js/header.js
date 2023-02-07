import { getNode } from '../lib/index.js'
import { renderSearch, renderSearchAlert } from '../js/render/renderHeader.js'

const header = getNode('.header')
const searchButton = getNode('.header-search')
const nav = getNode('.nav')
const body = getNode('body')

header.style.backgroundColor = ''
window.addEventListener('scroll', () => {
  //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
  header.style.backgroundColor = `rgba(0,0,0,${window.scrollY / 100})`
})

let isSearschView = false
function renderSearchView() {
  if (isSearschView) {
    const searchView = getNode('.search-container')
    const alertView = getNode('.alert-section')
    searchView.remove()
    alertView.remove()
  } else {
    renderSearch(nav)
    renderSearchAlert(body)
  }

  isSearschView = !isSearschView
}

searchButton.addEventListener('click', renderSearchView)
