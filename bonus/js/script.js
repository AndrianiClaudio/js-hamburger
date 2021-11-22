// modifica sconfo barra in rosso
const btnBgBar = document.querySelector('#button-container .btn-bg-color');
const header = document.querySelector('header');
btnBgBar.addEventListener('click',function() {
    header.classList.add('bg-green');
});

//aggiungi li al menu cliccando su un bottone
const btnPrivate = document.getElementById('btn-private-menu');
// const headerUl = document.querySelector('.header-right ul');
// const hamburgerUl = document.querySelector('.hamburger-menu ul');
const headerLastChild = document.querySelector('.header-right ul > li:last-child');
const hamburgerLastChild = document.querySelector('.hamburger-menu ul > li:last-child');

//uso di length in quanto si sa che le lunghezze saranno diverse nel nuovo li creato
// console.log(headerLastChild,hamburgerLastChild);
const StartLastInnerLength = headerLastChild.innerHTML.length;
let innerLength = StartLastInnerLength;
// const NormalMenuLastInner = hamburgerLastChild.innerHTML.length;
const lastInner = headerLastChild.innerHTML;
// const lastInner = hamburgerLastChild.innerHTML;\\
btnPrivate.addEventListener('click',function(){
    if(StartLastInnerLength == innerLength) {
        headerLastChild.innerHTML += "<li><a hfre='#'>Secret Item</a></li>";
        hamburgerLastChild.innerHTML += "<li><a hfre='#''>Secret Item</a></li>";
        innerLength = headerLastChild.innerHTML.length;
    } else { //ripristina menu iniziale
        headerLastChild.innerHTML = lastInner;
        hamburgerLastChild.innerHTML = lastInner;
        innerLength = StartLastInnerLength;
    }
});