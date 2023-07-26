document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".carousel-slides");
  const slides = document.querySelectorAll(".menu-accueil");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const slidePosition = document.getElementById("slide-position");

  let currentSlide = 0;
  let visibleSlides = 5; // Number of slides visible at a time on larger screens
  let isCarouselEnabled = false;
  let intervalId; // Variable to store the interval ID
   // Show the carousel controls (buttons and position indicator) on mobile
    const carouselControls = document.getElementById("carousel-btn");

  // Function to enable the carousel
  function enableCarousel() {
    carouselControls.style.display = "flex";
    isCarouselEnabled = true;
    clearInterval(intervalId); // Clear any existing interval
    intervalId = setInterval(nextSlide, 3000); // Start the carousel by moving to the next slide every 3 seconds
  }

  // Function to disable the carousel
  function disableCarousel() {
    carouselControls.style.display = "flex";
    isCarouselEnabled = false;
    clearInterval(intervalId); // Clear the interval
  }

  // Function to update the slide position indicator
  function updateSlidePosition() {
    slidePosition.textContent = `${currentSlide + 1} / ${slides.length}`;
  }

  // Function to show the current slide and hide the rest
  function showSlides(startIndex) {
    slides.forEach((slide, index) => {
      if (index >= startIndex && index < startIndex + visibleSlides) {
        slide.style.display = "inline-block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Function to move to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlides(currentSlide);
    updateSlidePosition();
  }

  // Function to move to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlides(currentSlide);
    updateSlidePosition();
  }

  // Attach event listeners to buttons
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Function to check the device width and set the visibleSlides variable accordingly
  function checkDeviceWidth() {
    if (window.innerWidth <= 768) { // Mobile devices in portrait mode (up to tablet size)
      visibleSlides = 1;
      showSlides(currentSlide); // Show the current slide on mobile (1 slide at a time)
      enableCarousel(); // Enable carousel on mobile
    } else if (window.innerWidth <= 1024) { // Tablet devices
      visibleSlides = 3;
      showSlides(currentSlide); // Show 3 slides on tablets
      enableCarousel(); // Enable carousel on tablets
    } else { // Larger screens
      visibleSlides = 5;
      showSlides(0); // Show all slides at once on larger screens
      disableCarousel(); // Disable carousel on larger screens
    }
  }

  // Initial check of the device width
  checkDeviceWidth();

  // Add an event listener to update the carousel behavior when the window is resized
  window.addEventListener("resize", checkDeviceWidth);
});
