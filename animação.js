const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navmenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Mostrar o ícone do menu quando a tela for menor que 768px
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        menuToggle.classList.add('show');
    } else {
        menuToggle.classList.remove('show');
        navMenu.classList.remove('active'); // Garante que o menu está oculto ao ampliar a tela
    }
});