const hamburgerMenu = document.querySelector('.hamburger-menu')
const dropdown = document.querySelector('.header-links')
const h1 = document.querySelector('.h1')

hamburgerMenu.addEventListener('click', function() {
    dropdown.classList.toggle('active')
    h1.classList.toggle('active')

})

console.log(hamburgerMenu)
console.log(dropdown)
console.log(h1)