import { getNode, css, getNodes } from '../lib/index.js'

// 롤링 배너
function appendClone(node, clone) {
  let wrap = node.closest('.wrap')
  wrap.appendChild(clone)
}

window.addEventListener('DOMContentLoaded', function () {
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
})

// 스와이퍼
const landingSwiper = new Swiper('.taing-only-contents .swiper', {
  autoPlay: false,
  spaceBetween: 15,
  centeredSlides: true,
  mousewheel: true,
  on: {
    slideChange: function () {
      setTimeout(function () {
        landingSwiper.params.touchReleaseOnEdges = false
        landingSwiper.params.mousewheel.releaseOnEdges = false
      })
    },
    reachEnd: function () {
      setTimeout(function () {
        landingSwiper.params.touchReleaseOnEdges = true
        landingSwiper.params.mousewheel.releaseOnEdges = true
      }, 500)
    },
    reachBeginning: function () {
      setTimeout(function () {
        landingSwiper.params.touchReleaseOnEdges = true
        landingSwiper.params.mousewheel.releaseOnEdges = true
      }, 500)
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2.7,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
  },
})

// 글자 애니메이션
const wrapper = getNode('.intro-wrapper')
const h1 = getNode('.intro-wrapper > p:nth-child(1)')
const introDescription = getNode('.intro-wrapper > p:nth-child(2)')
const button = getNode('.start-taing-animation')

const contentTitle = getNodes('.content-title')
const contentDescription = getNodes('.content-description')
const contentSubTitle = getNodes('.sub-title')
const roller = getNode('.taing-finding-contents')
const swiper = getNode('.taing-only-contents')

// 백그라운드
let observerWrapper = new IntersectionObserver((e) => {
  e.forEach((node) => {
    css(node.target, 'animation', `fadeInUp 1s forwards ease`)
  })
})
observerWrapper.observe(wrapper)
// 인트로 글자
let observer = new IntersectionObserver((e) => {
  e.forEach((node) => {
    if (node.isIntersecting)
      css(node.target, 'animation', `fadeInUp 1.5s forwards ease-in-out`)
  })
})
observer.observe(h1)
// observer.observe(introDescription)
observer.observe(button)
contentSubTitle.forEach((node) => {
  observer.observe(node)
})
observer.observe(roller)
observer.observe(swiper)

let observeSub = new IntersectionObserver((e) => {
  e.forEach((node) => {
    if (node.isIntersecting)
      css(node.target, 'animation', `fadeInUp2 1.5s forwards ease-in-out`)
  })
})
observeSub.observe(introDescription)

let observeTitle = new IntersectionObserver((e) => {
  e.forEach((node) => {
    if (node.isIntersecting)
      css(node.target, 'animation', `fadeInUp 1s forwards ease-in-out`)
  })
})
contentTitle.forEach((node) => {
  observeTitle.observe(node)
})

let observeDescription = new IntersectionObserver((e) => {
  e.forEach((node) => {
    if (node.isIntersecting)
      css(node.target, 'animation', `fadeInUp 1.2s forwards ease-in-out`)
  })
})
contentDescription.forEach((node) => {
  observeDescription.observe(node)
})
