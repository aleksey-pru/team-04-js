import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

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
  const slides = document.querySelectorAll('.about-me-slide-item');

  const aboutMeSwiper = new Swiper('.about-me-slide ', {
    loop: true,
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
      320: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1440: { slidesPerView: 6 },
    },

    on: {
      init: function () {
        this.slides[0].classList.add('active-slide');
      },
      slideChange: function () {
        this.slides[this.previousIndex]?.classList.remove('active-slide');
        this.slides[this.activeIndex]?.classList.add('active-slide');
      },
    },
  });

  slides.forEach(slide => {
    slide.setAttribute('tabindex', '0');
    slide.addEventListener('keydown', () => {
      slide.click();
    });
  });

  return aboutMeSwiper;
}

initAboutMeSwiper();
