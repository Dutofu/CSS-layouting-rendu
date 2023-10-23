const menubtn = document.querySelector(".menu-btn");
const navmenu = document.querySelector(".nav-menu");

menubtn.addEventListener('click',()=>{
    navmenu.classList.toggle('mobile-menu');
})