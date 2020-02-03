// Toggle the mobile menu
(function(){
    var mobileMenuIcon = document.querySelector('#mobileNavBttn'),
        primaryNavContainer = document.querySelector('#primaryNavContainer');

    mobileMenuIcon.onclick = function() {
        primaryNavContainer.classList.toggle('nav-menu--open');
    }
}());

// Toggle the hidden desktop menu
(function(){
    var desktopMenuIcon = document.querySelector('#desktopNavBttn'),
        hiddenNavContainer = document.querySelector('#hiddenNavContainer');

    desktopMenuIcon.onclick = function() {
        hiddenNavContainer.classList.toggle('nav-menu--open');
    }
}());

// Hide/reveal main menu on scroll
$(document).ready(function() {
$('html').on('DOMMouseScroll mousewheel', function (e) {
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
    //scroll down
    console.log('Down');
    $( "#topBar" ).addClass( "hide-nav-bar" );
  } else {
    //scroll up
    console.log('Up');
    $( "#topBar" ).removeClass( "hide-nav-bar" );
  }
  //prevent page fom scrolling
  //return false;
});

// On click show menu on small screen
});

// Expand and collapse the secondary navigation on click
var coll = document.getElementsByClassName("secondary-nav-container__bttn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("reveal-content");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
