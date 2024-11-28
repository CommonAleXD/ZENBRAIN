// Seleccionamos la sección
const welcomeSection = document.querySelector('.welcome-section');

// Función para manejar el scroll
function handleScroll() {
    const scrollPosition = window.scrollY; // Posición de desplazamiento vertical
    const sectionTop = welcomeSection.offsetTop; // Distancia de la sección desde la parte superior
    const sectionHeight = welcomeSection.offsetHeight; // Altura de la sección

    // Verificamos si la sección ya ha sido desplazada fuera de la vista
    if (scrollPosition > sectionTop + sectionHeight / 3) {
        welcomeSection.classList.add('shrink');
    } else {
        welcomeSection.classList.remove('shrink');
    }
}

// Agregamos el evento de scroll
window.addEventListener('scroll', handleScroll);

// // Selección de elementos
// const infoCards = document.querySelectorAll('.info-card');
// const detailsSection = document.getElementById('info-details');
// const detailsText = document.getElementById('details-text');

// Información complementaria para cada tarjeta
const detailsData = {
    'Mindfulness': {
        text: 'El mindfulness es una técnica que ayuda a concentrarse en el presente, reduciendo el estrés y mejorando la claridad mental.',
        link: 'https://www.mindfulness-salud.org/mindfulness/que-es-mindfulness/'  // Este enlace será dinámico
    },
    'Bienestar': {
        text: 'El bienestar implica mantener un balance físico, emocional, social y mental en tu vida cotidiana.',
        link: 'https://bienestarintegral.udd.cl/que-es-bienestar-integral/'
    },
    'Enfoque': {
        text: 'El enfoque es clave para alcanzar tus metas, ayudándote a priorizar y trabajar de manera efectiva.',
        link: 'https://asana.com/es/resources/stay-focused'
    }
};

// Seleccionar todos los elementos de tarjetas y la sección de detalles
const infoCards = document.querySelectorAll('.info-card');
const detailsText = document.getElementById('details-text');
const detailsLink = document.getElementById('details-link');
const detailsSection = document.getElementById('info-details');

// Manejar clic en las tarjetas
infoCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h2').textContent; // Obtener el título de la tarjeta
        const detail = detailsData[title] || { text: 'Información no disponible.', link: '#' };

        detailsText.textContent = detail.text; // Mostrar el texto complementario
        detailsLink.href = detail.link; // Actualizar el enlace con la URL correspondiente
        detailsLink.style.display = 'inline'; // Mostrar el enlace

        detailsSection.classList.add('visible'); // Mostrar la sección
        detailsSection.scrollIntoView({ behavior: 'smooth' }); // Desplazarse suavemente hacia la sección
    });
});

const pilaresTitle = document.getElementById('pilares-title');
const cardsContainer = document.querySelector('.info-cards-container');

pilaresTitle.addEventListener('click', () => {
    pilaresTitle.style.opacity = '0'; // Esconde el título
    cardsContainer.classList.add('visible'); // Muestra las tarjetas
});
