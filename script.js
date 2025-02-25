const btnMobile = document.getElementById('btn-mobile');
const hamburguer = document.getElementById('hamburguer');
const nav = document.querySelector('nav');

function toggleMenu() {
    nav.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    
    // Transforma o ícone
    hamburguer.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
