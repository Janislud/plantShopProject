document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu-container');

    if (window.innerWidth > 650) {
        menu.style.display = 'flex';
    }

    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            menu.style.display = 'flex';
        } else {
          
            if (window.innerWidth <= 650) {
                menu.style.display = 'none';
            }
        }
    });

 
    window.addEventListener('resize', function () {
     
        if (window.innerWidth > 650) {
            menu.style.display = 'flex';
        } else {
           
            if (!toggleMenu.checked) {
                menu.style.display = 'none';
            }
        }
    });
});