/*================================= toggle icon navbar ===================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};

/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================================= sticky navbar ===================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================= remove toggle icon and navbar ===================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================================= scroll reveal ===================================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*================================= typed js ===================================*/

const typed = new Typed('.multiple-text', {
    strings: ['JAVA Developer', 'Social Media Provider', 'Web deginer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*================================= Read More Toggle ===================================*/
document.addEventListener("DOMContentLoaded", function () {
    var shortText = document.getElementById("shortText");
    var fullText = document.getElementById("fullText");
    var toggleBtn = document.getElementById("toggleBtn");

    toggleBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents page from refreshing or jumping

        if (fullText.style.display === "none" || fullText.style.display === "") {
            shortText.style.display = "none";
            fullText.style.display = "block";
            toggleBtn.textContent = "Read Less";
        } else {
            shortText.style.display = "block";
            fullText.style.display = "none";
            toggleBtn.textContent = "Read More";
        }
    });
});












