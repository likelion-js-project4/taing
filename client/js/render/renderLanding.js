import { insertLast } from '../../lib/index.js'

// 큰 이미지, 작은 이미지 둘 다 있을 때
const createAllSwiper = ({ landing_swiper, landing_swiper_small, alt }) => {
  return /* html */ `
    <div class="swiper-slide">
      <picture class="landing-img-box">
        <source media="(max-width: 1279px)" srcset=${landing_swiper_small}>
        <img src=${landing_swiper} alt=${alt} />
      </picture>
    </div>
  `
}

const createLargeSwiper = ({ landing_swiper, alt }) => {
  return /* html */ `
    <div class="swiper-slide large-slide">
      <picture class="landing-img-box ">
        <img src=${landing_swiper} alt=${alt} />
      </picture>
    </div>
  `
}

const createSmallSwiper = ({ landing_swiper_small, alt }) => {
  return /* html */ `
    <div class="swiper-slide small-slide">
      <picture class="landing-img-box small-slide">
        <img src=${landing_swiper_small} alt=${alt} />
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
  const { landing_swiper, landing_swiper_small } = data
  let template = ``
  if (landing_swiper && landing_swiper_small) template = createAllSwiper(data)
  else if (landing_swiper) template = createLargeSwiper(data)
  else template = createSmallSwiper(data)

  insertLast(target, template)
}

export function renderRoller(target, data) {
  insertLast(target, createRoller(data))
}
