import {insertLast} from '../dom/insert.js'

const createEventList = ({
  image = {
    event : '',
    alt : '',
  }
} = {}) => { 
  
  return /* html */`
  <div class="swiper-slide" tabindex="0">
    <div class="img-box">
      <img src="${image.event}" alt="${image.alt}" />
    </div>
  </div>
  `
  
}

export const renderEventList = (target, data) => {
    insertLast(target, createEventList(data));
}