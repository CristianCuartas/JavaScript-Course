//Reemplazar elementos
const nuevoEncabezado = document.createElement('h2');

//Agregar un id
nuevoEncabezado.id='encabezado';

//Agregar texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

//Reemplazar
const anterior = document.querySelector('#encabezado');
const elementPadre = document.querySelector('#lista-cursos');

elementPadre.replaceChild(nuevoEncabezado, anterior);

console.log(anterior.parentElement);
console.log(nuevoEncabezado);
