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
// console.log(headerLastChild,hamburgerLastChild);
console.log(headerLastChild.innerHTML);
btnPrivate.addEventListener('click',function(){
    headerLastChild.innerHTML += "<li><a hfre='#'>Secret Item</a></li>";
    hamburgerLastChild.innerHTML += "<li><a hfre='#' style='margin-top: 50px;'>Secret Item</a></li>";
});