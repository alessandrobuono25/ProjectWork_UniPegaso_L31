let currentSlide = 0;
let autoSlideInterval = null;
const SLIDE_INTERVAL = 8000; // 8 secondi

// Array di riferimenti da attivare/disattivare
const slides = document.querySelectorAll('.slide-content');         
const years = document.querySelectorAll('.timeline-years li');
const SLIDE_NUMBER = slides.length;

//Aggiunge o rimuove la classe 'acive' su scheda e anno corrispondenti
function setActive(slide) {
    if(slides[slide] && years[slide]) {
        slides[slide].classList.toggle('active');
        years[slide].classList.toggle('active');
    }
}

// Funzione richiamata dagli eventi di click sugli anni della timeline
function goToSlide(nextSlide) {
    setActive(currentSlide);    
    currentSlide = nextSlide;         
    setActive(currentSlide); 
    startAutoSlide();   
}

// Funzione richiamata dagli eventi di click sulle frecce di navigazione
// -- + SlideNumber evita gli indici negativi
function changeSlide(change){
    goToSlide((currentSlide + change + SLIDE_NUMBER) % SLIDE_NUMBER);
}

// Funzione per avviare lo scorrimento automatico delle slide
function startAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
    autoSlideInterval = setInterval(() => changeSlide(1), SLIDE_INTERVAL);
}

startAutoSlide();