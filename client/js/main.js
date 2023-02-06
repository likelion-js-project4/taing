import createSwiper from "./createSwiper.js";

import { 
  getNode as $,
  tiger,
  insertFirst,
  renderQuickList,
  renderVisualList,
  renderContentsList
} from "../lib/index.js";

const visualContainer = $('.visual .swiper-wrapper');
const taingRecommendContainer = $('.taing-recommend .swiper-wrapper');
const quickVodContainer = $('.quick-vod .swiper-wrapper');

async function renderList(){

  try{

    let response = await tiger.get('http://localhost:3000/contents')
    let contentDate = response.data;

    contentDate.forEach(data => {
      if(data.is_viual) renderVisualList(visualContainer, data)
      if(data.is_recommend) renderContentsList(taingRecommendContainer, data)
      if(data.quick_vod.title) renderQuickList(quickVodContainer, data)
      if(data.is_free){
        insertFirst($('.img-box'), `<span class="main-free-badge"><img src="./assets/icons/main_free_46_30.png" alt="무료 시청 가능"/></span>`)
      }
    });

  }catch(err){

  }

}

renderList();
createSwiper();
