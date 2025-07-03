document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        const scrollThreshold = 20; // Adjust this value (in pixels) for when the header changes

        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav'); // Correctly targets the nav by its ID

    // Ensure both elements exist before adding event listeners
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Toggles 'active' on the button itself for icon animation
        });

        // Close menu when a link is clicked (for single-page navigation)
        // This ensures the menu collapses after a user clicks a navigation link
        mainNav.querySelectorAll('ul li a').forEach(item => {
            item.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active'); // Remove 'active' from button when menu closes
            });
        });

    } else {
        // This helpful warning will appear in your browser's console if elements aren't found
        console.warn('Menu toggle or main navigation element not found. Check your HTML IDs/classes.');
    }
});