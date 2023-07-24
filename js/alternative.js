// JavaScript code for the carousel
const carouselSection = document.getElementById('carousel-section');
const menuAccueilItems = carouselSection.getElementsByClassName('menu-accueil');
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0 || slideIndex >= menuAccueilItems.length) {
    return; // Invalid index, do nothing
  }

  // Hide all menu items
  for (let i = 0; i < menuAccueilItems.length; i++) {
    menuAccueilItems[i].classList.remove('active');
  }

  // Display the current slide
  menuAccueilItems[slideIndex].classList.add('active');
  currentSlide = slideIndex;
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= menuAccueilItems.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = menuAccueilItems.length - 1;
  }
  showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Add event listeners for next and previous buttons (you can customize these buttons as needed)
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);


//------------------------//--------------------//---------------------//


// Last js code putting slides positions //
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