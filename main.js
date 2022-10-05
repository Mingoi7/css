function changenav() {
    let el = document.querySelectorAll('.navigation a');
    for (let i = 0; i < el.length; i++) {
        el[i].onclick = function () {
            var c = 0;
            while (c < el.length) {
                el[c++].className = 'check';
            }
            el[i].className = 'check active';
        }
    }
}

function menu() {
    let el = document.querySelector('.toggle');
    let el2 = document.querySelector('.navigation');
    el.onclick =function(){
        el.classList.toggle('active');
        el2.classList.toggle('active');
    }
    
}

function imgSlider(img) {
    document.querySelector('.fruits').src = img;
    let el = document.querySelectorAll('.thumb li');
    for (let i = 0; i < el.length; i++) {
        el[i].onclick = function () {
            var c = 0;
            while (c < el.length) {
                el[c++].className = 'check';
            }
            el[i].className = 'check active';
        }
    }
}

function changeBgColor(color) {
    const bg = document.querySelector('.bg');
    bg.style.background =color ;
}