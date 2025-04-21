// ...existing code...

const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slider.children.length - 1 : currentIndex - 1;
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slider.children.length - 1) ? 0 : currentIndex + 1;
    updateSliderPosition();
});
