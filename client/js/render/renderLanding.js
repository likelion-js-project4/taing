import { insertLast } from '../../lib/index.js'

const createSwiperList = ({ landing_swiper, landing_swiper_small, alt }) => {
  return /* html */ `
    <div class="swiper-slide">
      <picture class="landing-img-box">
        <source media="(max-width: 1279px)" srcset=${landing_swiper_small}>
        <img src=${landing_swiper} alt=${alt} />
      </picture>
    </div>
  `
}

const createRoller = ({ landing_roller, alt }) => {
  return /* html */ `
  <li class="rolling-item">
    <div class="rolling-img-box">
      <img src=${landing_roller} alt=${alt} />
    </div>
  </li>
  `
}

export function renderLandingSwiper(target, data) {
  insertLast(target, createSwiperList(data))
}

export function renderRoller(target, data) {
  insertLast(target, createRoller(data))
}
