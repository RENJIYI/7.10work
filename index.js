window.onscroll = function() {
    var box = document.getElementById('box');
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
         console.log(osTop)
        if (osTop>666) {
        box.style.display = "block"
        }else{
        box.style.display = "none"
        }
        
    }