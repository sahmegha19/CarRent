burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset: true
})

sr.reveal('.heading',{delay: 100, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 200, origin: 'top'})
sr.reveal('.service-container .box',{delay: 200, origin: 'top'})
sr.reveal('.about-container .box',{delay: 200, origin: 'top'})
sr.reveal('.reviews-container .box',{delay: 200, origin: 'top'})
sr.reveal('.contact-container .box',{delay: 200, origin: 'bottom'})
sr.reveal('.contact-img',{delay: 200, origin: 'bottom'})
sr.reveal('.footer-content',{delay: 200, origin: 'bottom'})
sr.reveal('.social',{delay: 200, origin: 'bottom'})