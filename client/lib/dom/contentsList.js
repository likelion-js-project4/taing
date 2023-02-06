import {insertLast} from '../dom/insert.js'

const createContentsList = ({
  id = '',
  image = {
    contents : '',
    alt : '',
  },
  title = '',
  is_recommend = '',
} = {}) => { 
  
  return /* html */`
  <div class="swiper-slide">
    <div class="img-box">
      <img src="${image.contents}" alt="${image.alt}" />
    </div>
    <p class="title-simple" aria-hidden="true">${title}</p>
  </div>
  `
  
}

export const renderContentsList = (target, data) => {
    insertLast(target, createContentsList(data));
}