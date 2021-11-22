//  OBIETTIVO: MOSTRARE NASCORE IL MENU PRINCIPALE
// acquisisco il primo i del nostro dom: quello equivalente all'icona apri/chiudi menu
const i = document.querySelector('i');
console.log(i);
//al click su i andrá visualizzato il menu nascoto di default dal css .hamburger-menu
const hamburgerMenu = document.querySelector('div.hamburger-menu') ;
console.log(hamburgerMenu);
i.addEventListener('click',function(){
    //aggiunge classe active
    hamburgerMenu.classList.add('active');
});