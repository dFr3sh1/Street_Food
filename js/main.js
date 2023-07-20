// JavaScript code to show carousel only on mobile devices
function showCarouselOnMobile() {
    const carouselContainer = document.getElementById('carousel-container');
    const carouselSlides = carouselContainer.getElementsByClassName('carousel-slides')[0];
    const menuAccueilItems = carouselSlides.getElementsByClassName('menu-accueil');
    let currentSlide = 0;

    if (window.innerWidth <= 400) {
      carouselContainer.style.display = 'block'; // Show the carousel container on mobile devices

    function showSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= menuAccueilItems.length) {
          return; // Invalid index, do nothing
        }

        // Hide all menu items
        for (let i = 0; i < menuAccueilItems.length; i++) {
        menuAccueilItems[i].style.display = 'none';
        }

        // Display the current slide
        menuAccueilItems[slideIndex].style.display = 'block';
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

      // Function to automatically slide to the next slide every 3 seconds
    function autoSlide() {
        nextSlide();
    }

      // Show the first slide initially
    showSlide(currentSlide);

      // Add event listeners for next and previous buttons (customize these buttons as needed)
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');

    nextButton.addEventListener('click', () => {
        autoSlide();
        clearInterval(interval); // Clear the interval to prevent automatic sliding while using buttons
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        clearInterval(interval); // Clear the interval to prevent automatic sliding while using buttons
    });

      // Set interval to automatically slide to the next slide every 3 seconds
    const interval = setInterval(autoSlide, 3000);
    } else {
      carouselContainer.style.display = 'none'; // Hide the carousel container on larger screens
    }
}

  // Call the function on page load and when the window is resized
showCarouselOnMobile();
window.addEventListener('resize', showCarouselOnMobile);
