$('.owl-carousel').owlCarousel({
    loop:true,

    nav: false,
    margin:10,
    responsiveClass:true,
    navText: [
        "",
        ""
      ],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})