import {insertLast} from '../dom/insert.js'

const createContentsList = ({
  id = '',
  image = {
    contents : '',
    alt : '',
  },
  title = '',
  is_free = '',
  is_adult_18 = '',
  is_adult_19 = '',
  is_update = ''
} = {}) => { 
  
  return /* html */`
  <div class="swiper-slide" data-index="${id}" tabindex="0">
    <div class="img-box">
      ${is_free ? `<span class="main-free-badge"><img src="./assets/icons/main_free_46_30.png" alt="무료 시청 가능"/></span>` : ''}
      ${is_adult_18 ? `<span class="main-allow-18-badge"><img src="./assets/icons/main_18_30_30.png" alt="18세 이상 시청 가능"/></span>` : ''}
      ${is_adult_19 ? `<span class="main-allow-19-badge"><img src="./assets/icons/main_19_30_30.png" alt="19세 이상 시청 가능"/></span>` : ''}
      <img src="${image.contents}" alt="${image.alt}" />
    </div>
    <p class="title-simple ${is_update ? 'update' : ''}" aria-hidden="true">${title}</p>
  </div>
  `
  
}

export const renderContentsList = (target, data) => {
    insertLast(target, createContentsList(data));
}