const menuToggle = document.querySelector('.toggle');
const showcase = documengt.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})