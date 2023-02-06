/* global gsap ScrollTrigger */
/* global Swiper */
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
let landingSwiper = new Swiper('.taing-only-contents .swiper', {
  // direction: 'horizontal',
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

gsap.registerPlugin(ScrollTrigger)

// let sections = gsap.utils.toArray('.swiper')
// gsap.to('.swiper', {
//   // xPercent: -50 * sections.length,
//   ease: 'none',
//   scrollTrigger: {
//     markers: true,
//     trigger: '.swiper',
//     start: 'top 80%',
//     end: 'top 30%',
//     pin: true,
//     scrub: 1,
//     // snap: 1 / (sections.length - 1),
//   },
//   onUpdate: ({ progress }) => {
//     console.log(progress)
//     if (progress > 0) {
//       landingSwiper.slideTo(0)
//     }
//     if (progress > 0.25) {
//       landingSwiper.slideTo(1)
//     }
//     if (progress > 0.5) {
//       landingSwiper.slideTo(2)
//     }
//     if (progress > 0.75) {
//       landingSwiper.slideTo(3)
//     }
//   },
// })

gsap.to('.taing-only-contents', {
  ease: 'none',
  scrollTrigger: {
    markers: true,
    trigger: '#sectionPin', // 얘가 발견되어야 작동한다.
    pin: '.taing-only-contents .swiper', // 멈추는 구간?
    scrub: 2,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: ({ progress }) => {
      console.log(progress)
    },
    duration: 2,
  },
})

// gsap.to('.taing-only-contents', {
//   ease: 'none',
//   scrollTrigger: {
//     markers: true,
//     trigger: '#sectionPin', // 얘가 발견되어야 작동한다.
//     pin: '.taing-only-contents .swiper', // 멈추는 구간?
//     scrub: 2,
//     start: 'bottom bottom',
//     end: 'top top',
//     onUpdate: ({ progress }) => {
//       console.log(progress)
//     },
//     // end: '+=2000',
//     // snap: 1 / (sections.length - 1),
//     // onUpdate: ({ progress }) => {
//     //   console.log(progress)
//     //   if (progress >= 0) {
//     //     landingSwiper.slideTo(0)
//     //   } else if (progress > 0.25) {
//     //     landingSwiper.slideTo(1)
//     //   } else if (progress > 0.5) {
//     //     landingSwiper.slideTo(2)
//     //   } else {
//     //     landingSwiper.slideTo(3)
//     //   }
//     // },
//     duration: 2,
//   },
// })

// 글자 애니메이션
const wrapper = getNode('.intro-wrapper')
const h1 = getNode('.intro-wrapper > p:nth-child(1)')
const introDescription = getNode('.intro-wrapper > p:nth-child(2)')
const button = getNode('.start-taing-animation')

const contentTitle = getNodes('.content-title')
const contentDescription = getNodes('.content-description')
const contentSubTitle = getNodes('.sub-title')
const roller = getNode('.taing-finding-contents')

// // 백그라운드
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
observer.observe(button)
contentSubTitle.forEach((node) => {
  observer.observe(node)
})
observer.observe(roller)

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
