gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-1",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1
    }
});


tl.to(".hero-title, .bottom-info, .img-wrapper:not(.middle-img)", {
    opacity: 0,
    duration: 0.5
}, 0);


tl.to(".middle-img", {
    scale: 2.8,
    yPercent: -15,
    duration: 1,
    ease: "power1.inOut"
}, 0);



const revealText = document.querySelector('.reveal-text');
const textContent = revealText.textContent;


revealText.innerHTML = '';


const words = textContent.trim().split(' ');
words.forEach(word => {
    const span = document.createElement('span');
    span.textContent = word + ' ';
    revealText.appendChild(span);
});


const spans = revealText.querySelectorAll('span');


gsap.to(spans, {
    color: "#111",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".section-2",
        start: "top 70%",
        end: "center center",
        scrub: 1,
    }
});



const blurTexts = gsap.utils.toArray('.blur-text');


blurTexts.forEach((text) => {
    gsap.to(text, {
        filter: "blur(0px)",
        opacity: 1,
        scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
        }
    });
});


const videoElement = document.getElementById('showreel');
const playButton = document.getElementById('playBtn');


function toggleVideoPlay() {
    if (videoElement.paused) {
        videoElement.play();
        playButton.classList.add('hidden');
    } else {
        videoElement.pause();
        playButton.classList.remove('hidden');
    }
}


playButton.addEventListener('click', toggleVideoPlay);
videoElement.addEventListener('click', toggleVideoPlay);
function togglePricing(clickedBtn) {

    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    

    clickedBtn.classList.add('active');
}
const slider = document.getElementById('testi-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');


const scrollAmount = 440;

nextBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});