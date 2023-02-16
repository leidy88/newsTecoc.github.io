const hamburguer=document.querySelector('#hamburguer');
const close=document.querySelector('#close');
const menu=document.querySelector('menu');

hamburguer.addEventListener('click', () => {
    hamburguer.getElementsByClassName.display='none';
    menu.style.display='block';
    close.style.display='block';
});

close.addEventListener('click', () => {
    hamburguer.getElementsByClassName.display='block';
    menu.style.display='none';
    close.style.display='none';
});

