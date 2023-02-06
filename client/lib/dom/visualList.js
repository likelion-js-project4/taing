import { insertLast } from '../dom/insert.js'

const createVisualList = ({
  image = {
    visual : '',
    alt : '',
  },
  description = '',
} = {}) => { 
  
  return /* html */`
  <div class="swiper-slide">
    <div class="img-box">
      <img src="${image.visual}" alt="${image.alt}" />
    </div>
    <p class="visual-title">${description}</p>
    <a href="/" class="visual-more">자세히보기</a>
  </div>
  `
  
}

export const renderVisualList = (target, data) => {
    insertLast(target, createVisualList(data));
}