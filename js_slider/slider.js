let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const navLinks = document.querySelectorAll('.nav-link');

const details = [
    {
        city: "Rostov-on-Don Admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request"
    },
    {
        city: "Sochi Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request"
    },
    {
        city: "Rostov-on-Don Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request"
    }
];

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    updateSlider();
}

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    const newTransform = -currentSlide * slideWidth;
    document.querySelector('.slides').style.transform = `translateX(${newTransform}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[currentSlide].classList.add('active');

    document.getElementById('city').innerText = details[currentSlide].city;
    document.getElementById('area').innerText = details[currentSlide].area;
    document.getElementById('time').innerText = details[currentSlide].time;
    document.getElementById('cost').innerText = details[currentSlide].cost;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(index);
    });
});

showSlide(currentSlide);
