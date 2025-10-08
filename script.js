document.addEventListener("DOMContentLoaded", function() {
    const navIcon = document.getElementById('nav-icon');
    const navMenu = document.getElementById('mainNav');
    navIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navIcon.classList.toggle('open');
    });
});