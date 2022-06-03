const funfact = document.getElementById("funfacts")
const showPosition = funfact.getBoundingClientRect().y + window.scrollY - window.innerHeight / 2
const fadeUp = document.querySelectorAll(".animated")

let showed = false
window.addEventListener('scroll', () => {
    if (window.scrollY > showPosition && !showed) {
        fadeUp.forEach(fd=>{
            fd.classList.add('fadeInUp')
        })
    }
})
