import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

window.addEventListener('load', () => {
  const projectsSwiper = new Swiper('.projects-swiper', {
  modules: [Navigation, Keyboard, Mousewheel], 
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
      enabled: true,
       releaseOnEdges: true,
  },
  touchEventsTarget: 'container',
  navigation: {
    nextEl: '.swiper-btn-right',
    prevEl: '.swiper-btn-left',
    disabledClass: 'swiper-btn-disabled',
  },
  watchOverflow: true,
  preloadImages: true,
});

projectsSwiper.on('slideChange', function () {
  const prevButton = document.querySelector('.swiper-btn-left');
  const nextButton = document.querySelector('.swiper-btn-right');

  if (projectsSwiper.isBeginning) {
    prevButton.classList.add('swiper-btn-disabled');
  } else {
    prevButton.classList.remove('swiper-btn-disabled');
  }

  if (projectsSwiper.isEnd) {
    nextButton.classList.add('swiper-btn-disabled');
  } else {
    nextButton.classList.remove('swiper-btn-disabled');
  }

   const activeIndex = projectsSwiper.activeIndex;

  if (activeIndex === 1 || activeIndex === 2) {
    projectsSwiper.update();
  }

});
});
