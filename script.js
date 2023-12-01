let navToggle = document.querySelector('.nav-toggle')
let nav = document.querySelector('.nav-bar')
let navcloss = document.querySelector('.nav-closs')
navToggle.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})

navcloss.addEventListener('click', ()=>{
    nav.classList.remove('active')
})
