//Crear enlace
const enlace = document.createElement('a');
//Agregar clase
enlace.className='enlace';
//Agregar ID
enlace.id='nuevo-id';
//Atributo
enlace.setAttribute('href', '#');
//Añadir text
enlace.textContent="Nuevo enlace";

//Agregarlo al HTML
document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace);