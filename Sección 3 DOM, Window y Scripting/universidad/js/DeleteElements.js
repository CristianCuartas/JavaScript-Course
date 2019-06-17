const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

//Elemento borrado desde el selector
enlaces[0].remove();

//Elemto borrado desde el padre del nodo.
navegacion.removeChild(enlaces[1]);
console.log(navegacion);
console.log(enlaces);

const primerList = document.querySelector('.enlace');

let elemento;
elemento=primerList.className;

elemento=primerList.classList.add('nueva-clase');
elemento=primerList.classList.remove('nueva-clase');

elemento=primerList.classList;

// Leer atributos
elemento=primerList.getAttribute('href'); //Obtiene el valor
primerList.setAttribute('href', 'https://facebook.com'); //Crea o modificar el atributo
primerList.setAttribute('data-id', 20);
elemento=primerList.hasAttribute('data-id'); //Verifica que existe el atributo
primerList.removeAttribute('data-id');
elemento=primerList;

console.log(elemento);
console.log(primerList);