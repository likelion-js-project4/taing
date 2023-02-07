/* global gsap */

import { 
  getNode as $,
} from "../lib/index.js";

let landingSwiper = new Swiper('.taing-only-contents .swiper', {
  // direction: 'horizontal',
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

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".landing-img-box");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#sectionPin",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + $("#sectionPin").offsetWidth,
    onUpdate: ({progress})=>{
      console.log(progress)
      if(progress > 0.2){
        landingSwiper.slideTo(0, 1000, true)
      }
      if(progress > 0.4){
        landingSwiper.slideTo(1, 1000, true)
      }
      if(progress > 0.6){
        landingSwiper.slideTo(2, 1000, true)
      }
      if(progress > 0.8){
        landingSwiper.slideTo(3, 1000, true)
      }
    }
  }
});

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
