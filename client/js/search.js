import { getNode } from '../lib/index.js'

const searchInput = getNode('.search-form-input')
const searchForm = getNode('.search-form')
console.log(searchInput)

function inputHandler() {
  const keyword = searchInput.value
  console.log(keyword)
}

searchForm.addEventListener('submit', inputHandler)
