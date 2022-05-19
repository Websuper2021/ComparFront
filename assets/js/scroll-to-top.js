document.querySelector("#to-top").addEventListener("click", function(){

    var toTopInterval = setInterval(function(){

        var supportedScrollTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

        if (supportedScrollTop.scrollTop > 0) {
            supportedScrollTop.scrollTop = supportedScrollTop.scrollTop - 50;
        }

        if (supportedScrollTop.scrollTop < 1) {
            clearInterval(toTopInterval);
        }

    },);

},false);