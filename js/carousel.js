// import Swiper bundle with all modules installed
import Swiper from './swiper/bundle';

// import styles bundle
import './swiper/css/bundle';

const swiper = new Swiper('.carousel-slides', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.#next-button',
    prevEl: '#prev-button',
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
});

// Show the carousel controls (buttons and position indicator) on mobile
const carouselControls = document.getElementById('#carousel-btn');
carouselControls.style.display = 'flex';
