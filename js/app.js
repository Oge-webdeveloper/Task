const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-link');
const xIcon = document.querySelector('.x-icon');
const menuClass = document.querySelector('.material-symbols-outlined');

console.log(menuIcon);

menuIcon .addEventListener('click' , toggleOpen);

function toggleOpen () {
    // menu.style.display = 'block';

    if (xIcon.style.display === 'block') {
        xIcon.style.display='none' ;
        menuClass.style.display = 'block' ;
    }
    else{
        xIcon.style.display='block' ;
        menuClass.style.display = 'none' ;
    }

    menu.classList.toggle('toggle');
}
