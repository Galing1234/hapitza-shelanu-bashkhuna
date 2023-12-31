const menuIcon = document.getElementById('menu-icon') ;
const nav = document.querySelector('.nav') ;
const navSections = document.querySelectorAll('.nav--section') ;
const aboutUsSection = document.querySelector('.main--about-us') ;
const ourPizzasSection = document.querySelector('.main--our-pizzas') ;
const orderSection = document.querySelector('.main--order') ;

navSections.forEach(section => {
  section.addEventListener('click', toggleMenu) ;
}) ;

let menuClicked = false ;
let map = L.map('map').setView([32.0853, 34.7818], 20) ;

flyInOnScroll() ;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map) ;

menuIcon.addEventListener('click', toggleMenu) ;

function toggleMenu() {
  if (!menuClicked) {
    nav.style.right = 0 ;
  } else {
    nav.style.right = '-100%' ;
  }

  menuClicked = !menuClicked ;
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect() ;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.right <= window.innerWidth
  ) ;
}

function flyInOnScroll() {
  if (isElementInViewport(aboutUsSection)) {
    aboutUsSection.classList.add('fly-in') ;
  } 

  if (isElementInViewport(ourPizzasSection)) {
    ourPizzasSection.classList.add('fly-in') ;
  } 

  if (isElementInViewport(orderSection)) {
    orderSection.classList.add('fly-in') ;
  } 
}

window.addEventListener('scroll', flyInOnScroll) ;