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