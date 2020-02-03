// When the user clicks the hamburger open or hide the menu.
(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.nav-top-bar');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());
