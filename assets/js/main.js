const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

// menu toggler
toggleBtn.addEventListener('click', (e) => {
    navLinks.classList.add('show-navlinks');
});

closeBtn.addEventListener('click', (e) => {
    navLinks.classList.remove('show-navlinks');
});

//  scroll to the
const links = document.querySelectorAll('.nav-link');
links.forEach((item) => {
    item.addEventListener('click', () => {
        const el = document.getElementById(item.getAttribute('data-link'));
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});