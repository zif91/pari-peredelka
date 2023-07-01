var element = document.querySelector('.condition__row');
var line = document.querySelector('.line');
var animate = true;

window.addEventListener('scroll', function() {
    if (isElementInViewport(element)) {
        if(animate) {showGreenBlock()};
        animate = false;
    }
    if (isElementInView(element)) {
        if(!animate) {hideGreenBlock()};
        animate = true;
    }
});

function isElementInViewport(el) {
  return el.getBoundingClientRect().top < 290
}

function isElementInView(el) {
  return el.getBoundingClientRect().top > 291
}

function showGreenBlock() {
  line.style.height = "1050px";
  line.style.top = "-270px";
}

function hideGreenBlock(){
  line.style.height = "0";
  line.style.top = "180px";
}
