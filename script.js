const urlParams = new URLSearchParams(window.location.search);

// Capturamos los parámetros de la URL
const nombre = urlParams.get('nombre');
const autor = urlParams.get('autor')
const precio = urlParams.get('precio');
const isbn = urlParams.get('isbn');
const sinopsis = urlParams.get('sinopsis');
const imagen = urlParams.get('imagen');

// Insertamos los valores en la página
document.querySelector('#libro-titulo').textContent = nombre;
document.querySelector('.libro-autor').textContent = 'Autor: ' + autor;
document.querySelector('.libro-sinopsis').textContent = 'Sinopsis: ' + sinopsis ;
document.querySelector('.libro-isbn').textContent = 'ISBN: ' + isbn;
document.querySelector('.libro-precio').textContent = 'Precio: $' + precio + 'MXN';

// Cambiamos la imagen del libro
document.querySelector('#libro-imagen').src = imagen;