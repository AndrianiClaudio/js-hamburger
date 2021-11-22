// Acquisisco i (icona apri menu)
const iOpen = document.querySelector('i.fas.fa-bars');
// acquisisco i (icona chiudi menu)
const iClose = document.querySelector('i.fas.fa-times');
// accquisisco menu da mostrare e nascondere
const hamburgerMenu = document.querySelector('div.hamburger-menu') ;
// Al click (fa-bars) mostra menu
                iOpen.addEventListener('click',function(){
                    hamburgerMenu.classList.add('active');
                });
// Al click (fa-times) nascondi menu
iClose.addEventListener('click',function(){
    // Rimuovi classe active a (div.hamburger-menu)
    hamburgerMenu.classList.remove('active');
});