// modifica sconfo barra in rosso
const btnBgBar = document.querySelector('#button-container .btn-bg-bar-color');
const header = document.querySelector('header');
btnBgBar.addEventListener('click',function() {
    header.classList.add('bg-green');
});