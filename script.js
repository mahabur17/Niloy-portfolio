document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Check if header element exists before adding scroll listener
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

    // --- Existing Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});