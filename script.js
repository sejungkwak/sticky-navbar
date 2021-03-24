const prev = document.getElementById('prev');
const next = document.getElementById('next');
const reviews = document.querySelectorAll('.review');
const navbar = document.querySelector('.navbar');
const header = document.getElementById('header');
const toggler = document.getElementById('navbar-toggler');
const navItems = document.querySelector('.collapse');
const navContainer = document.querySelector('.container');


/* carousel buttons */

let activeReview = 0;

prev.addEventListener('click', () => {
    activeReview--;

    if (activeReview < 0) {
        activeReview = reviews.length -1;
    }

    setActiveReview();
})

next.addEventListener('click', () => {
    activeReview++;

    if(activeReview > reviews.length - 1) {
        activeReview = 0;
    }

    setActiveReview();
})

function setActiveReview() {
    reviews.forEach(review => {
        review.classList.remove('active');
        reviews[activeReview].classList.add('active');
    })
}

/* navbar colour and size */

window.addEventListener('scroll', changeNavbarColor);
changeNavbarColor();

function changeNavbarColor() {
    if (header.getBoundingClientRect().top < -400) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
}

/* navbar items toggle */

window.addEventListener('resize', changeToToggle);
changeToToggle();

function changeToToggle() {
    if (document.documentElement.clientWidth <= 850) {
        navContainer.classList.remove('navbar-expand');
    } else {
        navContainer.classList.add('navbar-expand');
    }
}


toggler.addEventListener('click', () => {

    if (navItems.style.display === 'none') {
        navItems.style.display = 'flex';
        navContainer.style.height = '200px';
    } else {
        navItems.style.display = 'none';
        navContainer.style.height = '';
    }

})