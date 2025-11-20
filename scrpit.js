document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING - (REMOVED)
    // All Pop-up code has been removed.
    // =======================================================


    // =======================================================
    // II. MOBILE MENU TOGGLE HANDLER (Hamburger Menu)
    // =======================================================

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav'); 

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => { 
            mainNav.classList.toggle('active-mobile');
        });
    }
    
    // Bootstrap Slider will work automatically now.
});
