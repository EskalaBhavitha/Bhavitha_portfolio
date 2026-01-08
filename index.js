// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Testimonial Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
}

function moveSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

// Auto-rotate testimonials
setInterval(() => {
    moveSlide(1);
}, 5000);

// Smooth Scroll Reveal Animation (Simple Implementation)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section-card');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 500;
        if (top >= offset) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});