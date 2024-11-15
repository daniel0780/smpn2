let currentSlide = 1;

function showSlide(slideNumber) {
    // Hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');

    // Show the selected slide
    document.getElementById(`slide${slideNumber}`).style.display = 'block';
    currentSlide = slideNumber;
}

function nextSlide() {
    currentSlide = (currentSlide % 4) + 1; // Cycle back to 1 after reaching 4
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1) < 1 ? 4 : currentSlide - 1; // Cycle to 4 if below 1
    showSlide(currentSlide);
}
