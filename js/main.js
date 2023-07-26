document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".carousel-slides");
  const slides = document.querySelectorAll(".menu-accueil");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const slidePosition = document.getElementById("slide-position");

  let currentSlide = 0;
  let isCarouselEnabled = false;

   // Show the carousel controls (buttons and position indicator) on mobile
  const carouselControls = document.getElementById("carousel-btn");

  // Function to enable the carousel
  function enableCarousel() {
    carouselControls.style.display = "flex";
    isCarouselEnabled = true;
    setInterval(nextSlide, 3000); // Start the carousel by moving to the next slide every 3 seconds
  }

  // Function to disable the carousel
  function disableCarousel() {
    carouselControls.style.display = "none";
    isCarouselEnabled = false;
  }

  // Function to update the slide position indicator
  function updateSlidePosition() {
    slidePosition.textContent = `${currentSlide + 1} / ${slides.length}`;
  }

  // Function to show the current slide and hide the rest
  function showSlide() {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? "inline-block" : "none";
    });
  }

  // Function to move to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
    updateSlidePosition();
  }

  // Function to move to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
    updateSlidePosition();
  }

  // Attach event listeners to buttons
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Function to check if the device is a mobile device
  function checkDeviceWidth() {
    if (window.innerWidth <= 768) { // Change 768 to the desired breakpoint for mobile devices
      enableCarousel();
    } else {
      disableCarousel();
      showSlide(); // Show the first slide for larger devices without the carousel
    }
  }

  // Initial check of the device width
  checkDeviceWidth();

  // Optional: Add an event listener to update the carousel behavior when the window is resized
  window.addEventListener("resize", checkDeviceWidth);
});
