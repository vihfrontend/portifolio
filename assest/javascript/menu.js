(()=>{

    let menuBurgue = document.querySelector('.burguer');
    let blur = document.querySelector('.hero-banner');
    let span = document.querySelectorAll('.burguer span')
    menuBurgue.addEventListener('click',()=>{
        let perfil = document.querySelector('.perfil-portifolio');
        perfil.classList.toggle('active');
        blur.classList.toggle('blur')
        menuBurgue.classList.toggle('background')
    })
})();