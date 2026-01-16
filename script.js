// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileNav.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && mobileNav.classList.contains('active')) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });

    // ============ SCROLL ANIMATIONS FOR NEW SECTIONS ============
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // Add visible class when element enters viewport
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                // Optional: Remove observer after animation triggers (performance optimization)
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe icon strip
    const iconStrip = document.querySelector('.icon-strip');
    if (iconStrip) {
        observer.observe(iconStrip);
    }

    // Observe premium product items
    const premiumItems = document.querySelectorAll('.premium-product-item');
    premiumItems.forEach(item => {
        observer.observe(item);
    });

    // Observe review items
    const reviewItems = document.querySelectorAll('.review-item');
    reviewItems.forEach(item => {
        observer.observe(item);
    });
});

// ===== FOOTER CONTROLS =====
const cityDiv = document.querySelector(".city");
const cityLinks = document.querySelectorAll(".foot-cont-three a");

if (cityDiv) {
    cityDiv.addEventListener("click", function() {
        cityDiv.classList.toggle("active");
        cityLinks.forEach((link) => {
            link.style.display = link.style.display === "block" ? "none" : "block";
        });
    });
}

const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}