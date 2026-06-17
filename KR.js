// ==============

let menuico = document.querySelector('#menu-ico');
let navbar = document.querySelector('.navbar');

menuico.onclick = () => {
    menuico.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
 /*=================Scroll section active link =========*/

 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
 sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

     if(top >= offset && top < offset + height){
    navLinks.forEach .apply(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
  };
 }); 
}

/*=================sticky header =================*/

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
/*=================remove =================*/

menuico.classList.remove('fa-xmark');
navbar.classList.remove('active');

/*==================Scroll reveal =================*/
 ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
 });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .Services-box, .projects, .Contact', { origin: 'btn' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    /*==================Typed js =================*/
    const typed = new Typed ('.multiple-text', {
        strings: ['Data Analyst', 'Data Scientist'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });