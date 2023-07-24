const carouselContainer = document.getElementById("carousel-container");
const carouselSlides = document.querySelector(".carousel-slides");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const slidePosition = document.getElementById("slide-position");

let slideIndex = 0;
const slides = document.querySelectorAll(".menu-accueil");
const totalSlides = slides.length;

function showSlide(index) {
  carouselSlides.style.transform = `translateX(-${index * 100}%)`;
  slidePosition.textContent = `${index + 1} / ${totalSlides}`;
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Automatically change slides every 3 seconds
function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 3000);
}

autoSlide();
