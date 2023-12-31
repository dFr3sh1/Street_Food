const swiper = new Swiper('.swiper', {
  // Play parameters
  slidesPerView: 1,
  spaceBetween: 20, // Adjust the gap between slides
  centeredSlides: true,
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 3000, // Rotate every 3 seconds
  },

  // Responsive breakpoints
  breakpoints: {
    
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1536: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

  // Pagination
  pagination: {
    el: '#carousel-container .swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return `<div class=${className}>
      <span class="number">${index + 1}</span>
      <span class="line"></span>
      </div>`
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '#nav-right',
    prevEl: '#nav-left',
    clickable: true,
  },

  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Show the carousel controls (buttons and position indicator) on mobile
const carouselControls = document.getElementById('carousel-btn');
carouselControls.style.display = 'flex';