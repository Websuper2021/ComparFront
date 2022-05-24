// const toggleButton=document.getElementsByClassName('btn-navbar-toggler')[0]
// const navbarCollapse=document.getElementsByClassName('navbar-collapse')[0]

// toggleButton.addEventListener('click',()=>{
//     navbarCollapse.classList.toggle('active')
// })

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle-menu');
    var navbarNav = document.querySelector('.navbar-nav');
    menuToggle.classList.toggle('active')
    navbarNav.classList.toggle('active')
}