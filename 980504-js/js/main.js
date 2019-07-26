let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let indicator = document.getElementsByClassName("demo");
let captions = document.getElementById("caption");
showslide(slideIndex);

function plusSlides(n) {
    showslide(slideIndex += n);
}

function currentSlide(n) {
    showslide(slideIndex = n);
}

function showslide(n) {
    debugger
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";

    }
    for (let index = 0; index < indicator.length; index++) {
        indicator[index].className = indicator[index].className.replace(" active", "");

    }
    slides[slideIndex - 1].style.display = "block";
    indicator[slideIndex - 1].className += " active";
    captions.innerHTML = indicator[slideIndex - 1].alt;

}