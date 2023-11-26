document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu-container');

    
    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});

