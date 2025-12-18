/**
 * Artee Cookie Palette - Gallery Carousel Script
 */

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    if (track) {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const slides = Array.from(track.children);

        let currentIndex = 0;
        /**
         * Updates the carousel position based on the current index
         */
        function updateCarousel() {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        // Next Button Click
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0; // Loop back to start
            }
            updateCarousel();
        });

        // Previous Button Click
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = slides.length - 1; // Loop to end
            }
            updateCarousel();
        });

        // Re-calculate on window resize to keep alignment perfect
        window.addEventListener('resize', updateCarousel);
    }

    // FAQ Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Close all other items (optional, but cleaner)
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });



    // Mobile Navigation Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});
