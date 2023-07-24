document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".carousel-slides");
  const slides = document.querySelectorAll(".menu-accueil");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const slidePosition = document.getElementById("slide-position");

  let currentSlide = 0;

  // Show the carousel controls (buttons and position indicator) on mobile
  const carouselControls = document.getElementById("carousel-btn");
  carouselControls.style.display = "block";

  // Update the slide position indicator
  function updateSlidePosition() {
    slidePosition.textContent = `${currentSlide + 1} / ${slides.length}`;
  }

  // Show the current slide and hide the rest
  function showSlide() {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? "inline-block" : "none";
    });
  }

  // Move to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
    updateSlidePosition();
  }

  // Move to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
    updateSlidePosition();
  }

  // Attach event listeners to buttons
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Start the carousel by moving to the next slide every 3 seconds
  setInterval(nextSlide, 3000);

    // Hide all menu items
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }

});
