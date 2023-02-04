import {insertLast} from '../dom/insert.js'

const createVisualList = ({
  id = '',
  image = {
    image_name1 : '',
    alt : '',
  },
  description = '',
  is_viual = '',
} = {}) => { 
  
  return /* html */`
  <div class="swiper-slide" data-index="user-${id}">
    <div class="img-box">
      <img src="${image.image_name1}" alt="${image.alt}" />
    </div>
    <p class="visual-title">${description}</p>
    <a href="/" class="visual-more">자세히보기</a>
  </div>
  `
  
}

export const renderVisualList = (target, data) => {
    insertLast(target, createVisualList(data));
}

console.log(

)

/* console.log(createUserCard({
  id : 1,
  name:'tager',
  email:'tiger@euid.dev',
  website:'tiger.com'
})) */