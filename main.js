const toggleBtn = document.querySelector('.button');
const list = document.querySelector('.nav_list');
const icons = document.querySelector('.nav_icons');
toggleBtn.addEventListener('click', () => {
    list.classList.toggle('active');
    icons.classList.toggle('active');
});
