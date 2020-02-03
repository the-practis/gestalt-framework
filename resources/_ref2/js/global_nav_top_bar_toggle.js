// When the user clicks the hamburger open or hide the menu.
(function(){
    var burger = document.querySelector('#globalNavBurgerContainer'),
        header = document.querySelector('#globalTopBarNav');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());
