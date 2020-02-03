// When the user clicks the hamburger open or hide the menu.
(function(){
    var burger = document.querySelector('#siteScreenNavBurgerContainer'),
        header = document.querySelector('#siteScreenNav');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());
