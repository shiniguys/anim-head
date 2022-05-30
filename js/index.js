// lazysizes
document.addEventListener('lazyloaded', function(e) {
    var el = e.target;

    if (!el.dataset.bg) {
        el.parentNode.parentNode.classList.add('is-loaded');
    }
});

document.addEventListener('lazybeforeunveil', function(e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
        if (bg == "css") {
            e.target.classList.add("is-load");
        } else {
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    }
});


window.addEventListener('scroll', function(){
    const header = this.document.querySelector('.header');
    header.classList.toggle('sticky', this.window.scrollY > 0)
});