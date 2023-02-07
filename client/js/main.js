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
  loadStorage,
  saveStorage,
  addClass,
  attr
} from "../lib/index.js";

const visualContainer = $('.visual .swiper-wrapper');
const taingRecommendContainer = $('.taing-recommend .swiper-wrapper');
const latestView = $('.latest-view');
const latestViewContainer = $('.latest-view .swiper-wrapper');
const quickVodContainer = $('.quick-vod .swiper-wrapper');
const popularContainer = $('.real-time .swiper-wrapper');
const liveChannelContainer = $('.live-time .swiper-wrapper');
const onlyTaingContainer = $('.only-taing .swiper-wrapper');
const eventContainer = $('.main-event .swiper-wrapper');

async function renderList(){

  try{

    let response = await tiger.get('http://localhost:3000/contents')
    let contentDate = response.data;
    let StorageArr = await loadStorage('slideArr');
    let StorageSetArr = [...new Set(StorageArr)];

    contentDate.forEach(data => {
      if(data.is_viual) renderVisualList(visualContainer, data);
      if(data.is_recommend) renderContentsList(taingRecommendContainer, data);
      if(data.quick_vod.title) renderQuickList(quickVodContainer, data);
      if(data.popular_program.rating) renderPopularList(popularContainer, data);
      if(data.live.title) renderLiveList(liveChannelContainer, data);
      if(data.is_only_taing) renderOnlyList(onlyTaingContainer, data);
      if(data.is_event_now) renderEventList(eventContainer, data);
      if(StorageArr){
        addClass(latestView,'is_latest');
        StorageSetArr.forEach((keyword) =>{
          if(data.id == keyword) renderContentsList(latestViewContainer, data);
        })
      }
    });

  }catch(err){

  }

}

renderList();
createSwiper();


const contents = $('.main')
const slideArr = [];

function latestViewHandler(e){
  let target = e.target;

  while(!attr(target,'data-index')){
    target = target.parentNode;
    if(target.nodeName === 'BODY'){
      target = null;
      return
    }
  }
  
  if(target.dataset.index){

    let index = target.dataset.index;

    slideArr.push(index)

    saveStorage('slideArr', slideArr)

  }
}

contents.addEventListener('click', latestViewHandler);
