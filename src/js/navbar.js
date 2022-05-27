window.addEventListener("scroll",function(){
    var navbar=document.querySelector(".navbar-area");
        if(window.scrollY>100){
            navbar.classList.add("sticky")
        }
        else{
            navbar.classList.remove("sticky")
        }
    
   
});