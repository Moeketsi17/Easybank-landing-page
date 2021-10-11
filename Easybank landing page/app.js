const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');

burger.addEventListener('click', ()=> {
    // Toggle nav
    navLinks.classList.toggle('nav-active');

    //Burger Animation
    burger.classList.toggle('toggle');

});





