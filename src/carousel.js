let currentIndex = 0;
let slides,dots,intervalId;

export function initCarousel(){
    slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const dotsContainer = document.querySelector('.dots');

    slides.forEach((_, i)=>{
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if(i==0){
            dot.classList.add('active')
        }
        dot.addEventListener('click',()=> goToSlide(i));
        dotsContainer.appendChild(dot);
    })
    dots = document.querySelectorAll('.dot')

    nextButton.addEventListener('click', nextSlide)
    prevButton.addEventListener('click',prevSlide);

    startAutoSlide();

    function updateCarousel(){
        const track = document.querySelector('.carousel-track');
        const width = slides[0].clientWidth;
        track.style.transform = `translateX(-${currentIndex*width}px)`;

        dots.forEach(dot =>dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function nextSlide(){
        currentIndex = (currentIndex+1) % slides.length;
        updateCarousel();
    }
    function prevSlide(){
        currentIndex = (currentIndex-1+slides.length)%slides.length;
        updateCarousel();
    }

    function goToSlide(){
        currentIndex = indexedDB;
        updateCarousel();
    }
    function startAutoSlide(){
        intervalId = setInterval(nextSlide,5000) //built-in function in js that calls the function repeteadly at a specific interval where time is in milli-seconds and nextSlide is the function being called
    }
}