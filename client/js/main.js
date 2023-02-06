import createSwiper from "./createSwiper.js";

import { 
  getNode as $,
  tiger,
  renderOnlyList,
  renderLiveList,
  renderQuickList,
  renderEventList,
  renderVisualList,
  renderPopularList,
  renderContentsList,
} from "../lib/index.js";

const visualContainer = $('.visual .swiper-wrapper');
const taingRecommendContainer = $('.taing-recommend .swiper-wrapper');
const quickVodContainer = $('.quick-vod .swiper-wrapper');
const popularContainer = $('.real-time .swiper-wrapper');
const liveChannelContainer = $('.live-time .swiper-wrapper');
const onlyTaingContainer = $('.only-taing .swiper-wrapper');
const eventContainer = $('.main-event .swiper-wrapper');

async function renderList(){

  try{

    let response = await tiger.get('http://localhost:3000/contents')
    let contentDate = response.data;

    contentDate.forEach(data => {
      if(data.is_viual) renderVisualList(visualContainer, data)
      if(data.is_recommend) renderContentsList(taingRecommendContainer, data)
      if(data.quick_vod.title) renderQuickList(quickVodContainer, data)
      if(data.popular_program.rating) renderPopularList(popularContainer, data)
      if(data.live.title) renderLiveList(liveChannelContainer, data)
      if(data.is_only_taing) renderOnlyList(onlyTaingContainer, data)
      if(data.is_event_now) renderEventList(eventContainer, data)
    });

  }catch(err){

  }

}

renderList();
createSwiper();
