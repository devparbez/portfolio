let navToggle = document.querySelector('.nav-toggle')
let nav = document.querySelector('.nav-bar')
let navcloss = document.querySelector('.nav-closs')
navToggle.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})
navcloss.addEventListener('click', ()=>{
    nav.classList.remove('active')
})
let heroimg = document.querySelector('.hero-pic img')
window.addEventListener('load', ()=>{
    heroimg.style.transform = 'translateX(0)'
    heroimg.style.transitionDuration = '1s'
})
let aboutimg = document.querySelector('.about-pic img')

window.addEventListener('load', ()=>{
    aboutimg.style.transform = 'scale(1)'
})