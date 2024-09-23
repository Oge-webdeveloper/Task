const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-link');

console.log(menuIcon);

menuIcon .addEventListener('click' , toggleOpen);
function toggleOpen () {
    // menu.style.display = 'block';
    menu.classList.toggle('toggle');
}
