document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');

    
    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});


{/* <img class="main-logo" src="./media/header-media/green-thumb-logo.svg" alt="green-thumb-logo">
   
           
<nav class="main-navigation">
        <ul class="list-wrapper">
            <li><a class="sites" href="#">Home</a></li>
            <li><a class="sites" href="#">Product</a></li>
            <li><a class="sites" href="#">Abouts us</a></li>
            <li><a class="sites" href="#">Contact us</a></li>
        </ul>

</nav> */}