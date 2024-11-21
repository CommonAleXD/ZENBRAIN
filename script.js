const urlParams = new URLSearchParams(window.location.search);

// Capturamos los parámetros de la URL
const nombre = urlParams.get('nombre');
const precio = urlParams.get('precio');
const sku = urlParams.get('sku');
const sinopsis = urlParams.get('sinopsis');
const imagen = urlParams.get('imagen');

// Insertamos los valores en la página
document.querySelector('#libro-titulo').textContent = nombre;
document.querySelector('.libro-sinopsis').textContent = 'Sinopsis: ' + sinopsis ;
document.querySelector('.libro-sku').textContent = 'SKU: ' + sku;
document.querySelector('.libro-precio').textContent = 'Precio: $' + precio + 'MXN';

// Cambiamos la imagen del libro
document.querySelector('#libro-imagen').src = imagen;