(()=>{

    let menuBurgue = document.querySelector('.burguer');
    menuBurgue.addEventListener('click',()=>{
        let nav = document.querySelector('.bar-navgation');
        menuBurgue.classList.toggle('open');

        nav.classList.toggle('openMenu')
    })
})();