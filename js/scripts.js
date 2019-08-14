function dihola() {
    var n = 0;
    var l = document.getElementById("number");
    window.setInterval(function() {
        l.innerHTML = n;
        n++;
    }, 1000)
}

function imagenes() {
    var n = 0;
    var vimg = [];
    vimg[0] = '<img src="img/facebook.png">';
    vimg[1] = '<img src="img/twitter.png">';
    var l = document.getElementById("carrusel");
    window.setInterval(function() {
        if (n < vimg.length) {
            l.innerHTML = vimg[n];
            n++;
        } else {
            n = 0;
        }

    }, 1000)
}

function slide() {
    var i = 0;
    var images = [];
    var timer = 3000;
    images[0] = 'img/facebook.png'
    images[1] = 'img/twitter.png'
    images[2] = 'img/instagram.png'

    function changeimg() {
        document.slide.src = images[i];
        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout("changeimg", timer);
    }
    window.onload = changeimg();
}