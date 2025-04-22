document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuButton && mainNav) {
        menuButton.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Change button icon based on menu state
            if (mainNav.classList.contains('active')) {
                this.textContent = '✕'; // Close icon
            } else {
                this.textContent = '☰'; // Menu icon
            }
        });
        
        // Close menu when clicking on a link (optional)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    menuButton.textContent = '☰';
                }
            });
        });
    }
});