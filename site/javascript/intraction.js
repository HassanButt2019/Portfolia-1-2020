burger = document.querySelector('.burger');
navbar = document.querySelector('.menu');
navlist = document.querySelector('.nav-list');



burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')
})