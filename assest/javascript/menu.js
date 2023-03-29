const btn = document.querySelector('.menu-burguer');

let tooglemenu = ()=>{
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle('active');
    let icon = document.querySelector('.icon');
    icon.classList.toggle('rotate')
}

btn.addEventListener('click',tooglemenu)