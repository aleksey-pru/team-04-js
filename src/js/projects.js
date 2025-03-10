import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.projects-swiper', {
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
});

swiper.on('slideChange', function () {
  const prevButton = document.querySelector('.swiper-btn-left');
  const nextButton = document.querySelector('.swiper-btn-right');

  if (swiper.isBeginning) {
    prevButton.classList.add('swiper-btn-disabled');
  } else {
    prevButton.classList.remove('swiper-btn-disabled');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('swiper-btn-disabled');
  } else {
    nextButton.classList.remove('swiper-btn-disabled');
  }
});
