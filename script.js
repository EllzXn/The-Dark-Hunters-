let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.opacity = 0;
    
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = 1;
    }, 100);

    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

function prevSlide() {
    let slides = document.getElementsByClassName("slide");
    slides[slideIndex - 1].style.display = "none";
    slideIndex = (slideIndex - 2 + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    let slides = document.getElementsByClassName("slide");
    slides[slideIndex - 1].style.display = "none";
    slideIndex = slideIndex % slides.length;
    slides[slideIndex].style.display = "block";
}