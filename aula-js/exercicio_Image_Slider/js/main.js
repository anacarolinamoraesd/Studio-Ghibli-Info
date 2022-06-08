const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 2000;

let slideInterval;

const nextSlide = () => {
    const atual = document.querySelector('.atual');
    atual.classList.remove('atual');

    if (atual.nextElementSibling) {
        atual.nextElementSibling.classList.add('atual');
    } else {
        slides[0].classList.add('atual');
    }

    setTimeout(() => atual.classList.remove('atual'));

};

const prevSlide = () => {
    const atual = document.querySelector('.atual');
    atual.classList.remove('atual');

    if (atual.previousElementSibling) {
        atual.previousElementSibling.classList.add('atual');
    } else {
        slides[slides.length - 1].classList.add('atual');
        }

        setTimeout(() => atual.classList.remove('atual'));
}

next.addEventListener('click', e => {
    nextSlide();

    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();

    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
