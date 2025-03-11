import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';

const reviewsList = document.querySelector('.reviews-list');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

async function fetchReviews() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const reviews = await response.json();
    if (!Array.isArray(reviews) || reviews.length === 0) {
      reviewsList.innerHTML = `<p class="not-found">Not found</p>`;
      disableButtons();
      return;
    }
    renderReviews(reviews);
    initSwiper();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    reviewsList.innerHTML = `<li class="not-found"><p>Not found</p></li>`;
    disableButtons();
  }
}

function renderReviews(reviews) {
  reviewsList.innerHTML = '';
  reviews.forEach(({ avatar_url, author, review }) => {
    const reviewItem = document.createElement('li');
    reviewItem.classList.add('swiper-slide', 'review-card');
    reviewItem.innerHTML = `
      <img src="${avatar_url}" alt="${author}" class="review-avatar">
      <h3 class="review-name">${author}</h3>
      <p class="review-text">${review}</p>
    `;
    reviewsList.appendChild(reviewItem);
  });
  applyResponsiveStyles();
  window.addEventListener('resize', applyResponsiveStyles);
}

function applyResponsiveStyles() {
  const containerReviews = document.querySelector('.container-reviews');
  const reviewsSection = document.querySelector('.reviews');
  const sliderButtons = document.querySelectorAll('.slider-btn');
  const slides = document.querySelectorAll('.review-card');
  const screenWidth = window.innerWidth;

  slides.forEach((slide, index, array) => {
    const reviewText = slide.querySelector('.review-text');
    const reviewName = slide.querySelector('.review-name');
    const reviewAvatar = slide.querySelector('.review-avatar');
    const reviewCard = slide;
    slide.style.height = '302px';
    let textSize = '16px';
    let nameMarginBottom = null;
    let avatarMarginBottom = null;
    let nameMarginTop = null;
    let cardMaxHeight = null;
    if (screenWidth >= 1440) {
      if (index === array.length - 2 || index === array.length - 1) {
        textSize = '13.5px';
      }
    } else if (screenWidth >= 768) {
      if (index === array.length - 2 || index === array.length - 1) {
        textSize = '13.5px';
      }
      nameMarginBottom = '8px';
    } else if (screenWidth >= 375) {
      if (index === array.length - 2 || index === array.length - 1) {
        textSize = '13.5px';
      }
      nameMarginBottom = '8px';
    } else if (screenWidth <= 374) {
      textSize = '15px';
      nameMarginTop = '18px';
      if (index === array.length - 2 || index === array.length - 1) {
        nameMarginBottom = '4px';
      }
      if (index < 4 || index === 5) {
        nameMarginBottom = '8px';
        avatarMarginBottom = '14px';
      }
    }
    if (reviewText) reviewText.style.fontSize = textSize;
    if (reviewName) {
      reviewName.style.marginBottom = nameMarginBottom;
      reviewName.style.marginTop = nameMarginTop;
    }
    if (reviewAvatar)
      reviewAvatar.style.marginBottom = avatarMarginBottom ?? '';
    if (reviewCard) reviewCard.style.maxHeight = cardMaxHeight;
  });
  if (screenWidth === 767) {
    containerReviews.style.maxWidth = '375px';
    containerReviews.style.padding = '0 16px';
    reviewsSection.style.padding = '32px 0';
    sliderButtons.forEach(btn => {
      btn.style.width = '52px';
      btn.style.height = '52px';
      btn.style.padding = '14px';
    });
  }
  if (screenWidth === 1439) {
    containerReviews.style.width = '734px';
    containerReviews.style.padding = '0 16px';
    reviewsSection.style.padding = '48px 0';
  }
  if (screenWidth === 374) {
    containerReviews.style.maxWidth = '768px';
    containerReviews.style.padding = '0 14.5px';
  }
  if (![767, 1439, 374].includes(screenWidth)) {
    containerReviews.style.removeProperty('max-width');
    containerReviews.style.removeProperty('width');
    containerReviews.style.removeProperty('padding');
    reviewsSection.style.removeProperty('padding');
    sliderButtons.forEach(btn => {
      btn.style.removeProperty('width');
      btn.style.removeProperty('height');
      btn.style.removeProperty('padding');
    });
  }
}

applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);

function initSwiper() {
  const swiper = new Swiper('.reviews-slider', {
    modules: [Navigation, Keyboard],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      375: { slidesPerView: 1, slidesPerGroup: 1 },
      768: { slidesPerView: 2, slidesPerGroup: 1 },
      1440: { slidesPerView: 4, slidesPerGroup: 1 },
    },
    on: {
      init: function () {
        updateNavigation(this);
      },
      slideChange: function () {
        updateNavigation(this);
      },
    },
  });
  updateNavigation(swiper);
}

function updateNavigation(swiper) {
  if (swiper.isBeginning) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (swiper.isEnd) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
}

function disableButton(button) {
  button.classList.add('swiper-button-disabled');
  button.setAttribute('disabled', 'true');
}

function enableButton(button) {
  button.classList.remove('swiper-button-disabled');
  button.removeAttribute('disabled');
}

function disableButtons() {
  disableButton(prevButton);
  disableButton(nextButton);
}

fetchReviews();
