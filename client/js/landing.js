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

const landingSwiper = new Swiper('.taing-only-contents .swiper', {
  autoPlay: true,
  spaceBetween: 15,
  centeredSlides: true,
  mousewheel: true,
  on: {
    reachEnd: function () {
      landingSwiper.mousewheel.disable()
    },
    // reachBegeinning: function () {
    //   landingSwiper.mousewheel.disable()
    // },
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

// on: {
//   slideChange: function() {
//       setTimeout(function () {
//           visual.params.touchReleaseOnEdges = false;
//           visual.params.mousewheel.releaseOnEdges = false;
//       });
//   },
//   reachEnd: function() {
//       setTimeout(function () {
//           visual.params.touchReleaseOnEdges = true;
//           visual.params.mousewheel.releaseOnEdges = true;
//       }, 500);
//   },
//   reachBeginning: function() {
//       setTimeout(function () {
//           visual.params.touchReleaseOnEdges = true;
//           visual.params.mousewheel.releaseOnEdges = true;
//       }, 500);
//   }
// }

window.addEventListener('wheel', function (event) {
  if (event.deltaY < 0) {
    landingSwiper.mousewheel.enable()
  }
})
