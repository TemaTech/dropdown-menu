import './css/style.css';

const dropdownSelect = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const icon = document.querySelector('.dropdown img');
icon.style.transition = 'transform 300ms ease-in-out';
dropdownSelect.addEventListener('click', () => {
  dropdownMenu.classList.toggle('dropdownMenu-show');
  if (dropdownMenu.className === 'dropdown-menu dropdownMenu-show') {
    icon.style.transform = 'rotate(180deg)';
  } else {
    icon.style.transform = 'rotate(0deg)';
  }
});
