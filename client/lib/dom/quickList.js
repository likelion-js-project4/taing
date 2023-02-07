import {insertLast} from '../dom/insert.js'

const createQuickList = ({
  image = {
    vod : '',
    alt : '',
  },
  quick_vod = {
    "title": '',
    "series": '',
  },
} = {}) => { 
  
  return /* html */`
  <div class="swiper-slide" tabindex="0">
    <div class="img-box">
      <span class="quick-vod-icon"><img src="./assets/icons/main_quckvod_96_30.png" alt="Quick VOD" /></span>
      <img src="${image.vod}" alt="${image.alt}" />
    </div>
    <div class="title-basic">
      <p aria-hidden="true">${quick_vod.title}</p>
      <p class="sub"><span class="a11y-hidden">회차</span> ${quick_vod.series}</p>
    </div>
  </div>
  `
  
}

export const renderQuickList = (target, data) => {
    insertLast(target, createQuickList(data));
}