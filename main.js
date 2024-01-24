// Toggle Menu Mobile Button
const toggleMenu = document.getElementById('menu-button')
const navbarlinks = document.getElementById('links')

toggleMenu.addEventListener('click', () =>{
  navbarlinks.classList.toggle('active')
})

// Disappearing Header Scroll 
let lastScrollTop = 0;
let header = document.getElementById("navigation")

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if( scrollTop > lastScrollTop){
    header.classList.add('hidden')
    header.classList.remove('visible')
  }else{
    header.classList.add('visible')
    header.classList.remove('hidden')
  }
   lastScrollTop = scrollTop
})