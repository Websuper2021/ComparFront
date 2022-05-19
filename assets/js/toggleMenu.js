const toggleButton=document.getElementsByClassName('btn-navbar-toggler')[0]
const navbarCollapse=document.getElementsByClassName('navbar-collapse')[0]

toggleButton.addEventListener('click',()=>{
    navbarCollapse.classList.toggle('active')
})