//Pour la page Accueil
document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;

    function updateSliderPosition() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSliderPosition();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    });
});


//partie2:
// menu.js
document.getElementById('menu-icon').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    // Toggle pour afficher/masquer le menu mobile
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});

