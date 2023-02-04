import createSwiper from "./createSwiper.js";

import { 
  getNode as $,
  tiger,
  renderVisualList
} from "../lib/index.js";

const visualContainer = $('.visual .swiper-wrapper')

async function visualList(){

  try{

    let response = await tiger.get('http://localhost:3000/contents')
    let contentDate = response.data;

    contentDate.forEach(data => {
      if(data.is_viual){
        renderVisualList(visualContainer, data)
      } return
    });

  }catch(err){
    
  }

}

visualList();
createSwiper();
