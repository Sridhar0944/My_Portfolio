document.addEventListener('DOMContentLoaded', () => {
    let menu = document.getElementById('menu');  // Ensure 'menu' ID matches HTML
    let navbar = document.querySelector('.navbar');  // Ensure 'navbar' class matches HTML

    menu.onclick = () => {
        menu.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
});

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar on scroll
    let menu = document.getElementById('menu');
    let navbar = document.querySelector('.navbar');
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};





