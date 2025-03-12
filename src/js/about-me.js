import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

function initAboutMeAccordion() {
  const aboutMeAc = new Accordion('.about-me-list', {
    duration: 400,
    showMultiple: true,
    openOnInit: [0],
    beforeOpen: function (element) {
      const icon = element.querySelector('.about-me-svg');
      icon.style.transform = 'rotate(180deg) translate(50%, 50%)';
    },
    beforeClose: function (element) {
      const icon = element.querySelector('.about-me-svg');
      icon.style.transform = 'rotate(0deg) translate(-50%, -50%)';
    },
  });

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
      const firstItem = document.querySelector('.about-me-item');
      if (firstItem) {
        const firstIcon = firstItem.querySelector('.about-me-svg');
        if (firstIcon) {
          firstIcon.style.transform = 'rotate(180deg) translate(50%, 50%)';
        }
      }
    }, 50);
  });

  return aboutMeAc;
}

initAboutMeAccordion();

function initAboutMeSwiper() {
  const aboutMeSwiper = new Swiper('.about-me-slide ', {
    modules: [Navigation, Keyboard, Mousewheel],
    loop: true,
    slidesPerView: 1,
    freeMode: false,
    centeredSlides: false,
    simulateTouch: true,
    slideToClickedSlide: true,
    slidesPerGroup: 1,

    navigation: {
      nextEl: '.about-me-slide-button',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.about-me-slide-list',
    },
    breakpoints: {
      320: { slidesPerView: 2, slidesPerGroup: 1 },
      768: { slidesPerView: 3, slidesPerGroup: 1 },
      1440: { slidesPerView: 6, slidesPerGroup: 1 },
    },
    on: {
      init: function () {
        this.slides.forEach(slide => slide.classList.remove('active-slide'));
        this.slides[0].classList.add('active-slide');
      },
      slideChange: function () {
        this.slides.forEach(slide => slide.classList.remove('active-slide'));
        this.slides[this.activeIndex].classList.add('active-slide');
      },
    },
  });

  const boxSlide = document.querySelector('.box-slide');
  let isTabListenerActive = false;
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isTabListenerActive) {
          document.addEventListener('keydown', handleTabKey);
          isTabListenerActive = true;
        } else if (!entry.isIntersecting && isTabListenerActive) {
          document.removeEventListener('keydown', handleTabKey);
          isTabListenerActive = false;
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    }
  );
  observer.observe(boxSlide);

  function handleTabKey(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      aboutMeSwiper.slideNext();
    }
  }

  return aboutMeSwiper;
}

initAboutMeSwiper();
