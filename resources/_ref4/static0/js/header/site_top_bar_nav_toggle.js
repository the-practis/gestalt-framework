// When the user clicks the hamburger open or hide the menu.
(function(){
    var burger = document.querySelector('#siteNavBurgerContainer'),
        header = document.querySelector('#siteTopBarNav');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());
