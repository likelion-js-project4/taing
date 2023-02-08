/* global gsap ScrollTrigger Swiper*/

import { getNode as $, getNodes, css, tiger, getNode } from '../lib/index.js'
import { renderLandingSwiper, renderRoller } from './render/renderLanding.js'

/* -------------------------------------------------------------------------- */
/*                                  스와이퍼 렌더링                                  */
/* -------------------------------------------------------------------------- */
const swiperWrapper = getNode('.swiper-wrapper')
const rollerWrapper = getNodes('.rolling-wrapper')

async function renderList() {
  try {
    let response = await tiger.get('http://localhost:3000/contents')
    let contentData = response.data

    contentData.forEach((data) => {
      if (data.is_landing_swiper) renderLandingSwiper(swiperWrapper, data.image)
      if (data.is_landing_roller) {
        rollerWrapper.forEach((node) => renderRoller(node, data.image))
      }
    })
  } catch (err) {
    throw new Error('통신 오류입니다.')
  }
}

/* -------------------------------------------------------------------------- */
/*                                    롤링 배너                                   */
/* -------------------------------------------------------------------------- */
function appendClone(node, clone) {
  let wrap = node.closest('.wrap')
  wrap.appendChild(clone)
}

function makeRolling() {
  let roller = document.querySelectorAll('.roller')

  roller.forEach((item, index) => {
    item.id = `roller${index}`
    let clone = item.cloneNode(true)
    clone.id = `clone${index}`

    appendClone(item, clone)

    document.querySelector(`#roller${index}`).style.left = '0'
    document.querySelector(`#clone${index}`).style.left =
      item.querySelector('ul').offsetWidth + 'px'
  })
}

// 초기 실행문
window.addEventListener('DOMContentLoaded', async function () {
  await renderList()
  makeRolling()
})

// 스와이퍼 동작
let landingSwiper = new Swiper('.taing-only-contents .swiper', {
  spaceBetween: 15,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 2.24,
      spaceBetween: 30,
    },
  },
})

gsap.registerPlugin(ScrollTrigger)

let sections = gsap.utils.toArray('.landing-img-box')

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '#sectionPin',
    pin: true,
    scrub: 1,
    end: () => '+=' + $('#sectionPin').offsetWidth * 3,
    onUpdate: ({ progress }) => {
      if (progress > 0.1) {
        landingSwiper.slideTo(0, 1000, true)
      }
      if (progress > 0.4) {
        landingSwiper.slideTo(1, 1000, true)
      }
      if (progress > 0.7) {
        landingSwiper.slideTo(2, 1000, true)
      }
      if (progress > 0.85) {
        landingSwiper.slideTo(3, 1000, true)
      }
    },
  },
})

// 글자 애니메이션
const wrapper = $('.intro-wrapper')
const h1 = $('.intro-wrapper > p:nth-child(1)')
const introDescription = $('.intro-wrapper > p:nth-child(2)')
const button = $('.start-taing-animation')

const contentTitle = getNodes('.content-title')
const contentDescription = getNodes('.content-description')
const contentSubTitle = getNodes('.sub-title')
const roller = $('.taing-finding-contents')

// // 백그라운드
let observerWrapper = new IntersectionObserver((e) => {
  e.forEach((node) => {
    css(node.target, 'animation', 'fadeInUp 1s forwards ease')
  })
})
observerWrapper.observe(wrapper)
// 인트로 글자
let observer = new IntersectionObserver((e) => {
  e.forEach((node) => {
    if (node.isIntersecting)
      css(node.target, 'animation', 'fadeInUp 1.5s forwards ease-in-out')
  })
})
observer.observe(h1)
observer.observe(button)
contentSubTitle.forEach((node) => {
  observer.observe(node)
})
observer.observe(roller)

let observeSub = new IntersectionObserver((e) => {
  e.forEach((node) => {
    if (node.isIntersecting)
      css(node.target, 'animation', 'fadeInUp2 1.5s forwards ease-in-out')
  })
})
observeSub.observe(introDescription)

let observeTitle = new IntersectionObserver((e) => {
  e.forEach((node) => {
    if (node.isIntersecting)
      css(node.target, 'animation', 'fadeInUp 1s forwards ease-in-out')
  })
})
contentTitle.forEach((node) => {
  observeTitle.observe(node)
})

let observeDescription = new IntersectionObserver((e) => {
  e.forEach((node) => {
    if (node.isIntersecting)
      css(node.target, 'animation', 'fadeInUp 1.2s forwards ease-in-out')
  })
})
contentDescription.forEach((node) => {
  observeDescription.observe(node)
})
