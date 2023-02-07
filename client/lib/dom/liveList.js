import {insertLast} from '../dom/insert.js'

const createLiveList = ({
  image = {
    live_channel : '',
    alt : '',
  },
  is_free = '',
  is_adult_18 = '',
  is_adult_19 = '',
  live = {
    flatform : '',
    rating : '',
    title : '',
    series : '',
    view_ratio : '',
    src : ''
  },
} = {}) => { 
  
  return /* html */`
  <li class="swiper-slide" tabindex="0">
    <div class="img-box">
      ${is_free ? `<span class="main-free-badge"><img src="./assets/icons/main_free_46_30.png" alt="무료 시청 가능"/></span>` : ''}
      ${is_adult_18 ? `<span class="main-allow-18-badge"><img src="./assets/icons/main_18_30_30.png" alt="18세 이상 시청 가능"/></span>` : ''}
      ${is_adult_19 ? `<span class="main-allow-19-badge"><img src="./assets/icons/main_19_30_30.png" alt="19세 이상 시청 가능"/></span>` : ''}
      <img src="${image.live_channel}" alt="${image.alt}" />
    </div>
    <div class="title-basic label-basic">
      <dl>
        <dt>${live.flatform}</dt>
        <dd class="sub" aria-hidden="true">${live.title} ${live.series}</dd>
        <dd class="viewer"><span class="a11y-hidden">시청률</span>${live.view_ratio}</dd>
      </dl>
    </div>
  </li>
  `
  
}

export const renderLiveList = (target, data) => {
    insertLast(target, createLiveList(data));
}