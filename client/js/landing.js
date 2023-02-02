function appendClone(node, clone) {
  console.log(node)
  let wrap = node.closest('.wrap')
  console.log(wrap)
  wrap.appendChild(clone)
}

window.addEventListener('DOMContentLoaded', function () {
  let roller = document.querySelectorAll('.roller')

  roller.forEach((item, index) => {
    console.log('teeeestttt', item.offsetWidth)
    item.id = `roller${index}`
    let clone = item.cloneNode(true)
    console.log('test', clone)
    clone.id = `clone${index}`

    appendClone(item, clone)

    document.querySelector(`#roller${index}`).style.left = '0'
    document.querySelector(`#clone${index}`).style.left =
      item.querySelector('ul').offsetWidth + 'px'
  })
})
