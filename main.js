// Toggle Menu Mobile Button
const toggleMenu = document.getElementById('menu-button')
const navbarlinks = document.getElementById('links')

toggleMenu.addEventListener('click', () =>{
  navbarlinks.classList.toggle('active')
})