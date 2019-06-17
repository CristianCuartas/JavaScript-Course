//Navegación entre elementos del DOM
//Los nodos son el HTML del documento.
//Recorrer todos los nodos hasta llegar a cualquier elemento , confunciones de JavaScript.
const navegacion = document.querySelector('#principal');
console.log(navegacion.children[0].textContent= 'Nuevo enlace');

const navegacion2 = document.querySelector('.barra');
console.log(navegacion2.children[0].children[0].children);

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].childElementCount);
console.log(cursos[0].firstElementChild);
console.log(cursos[0].lastElementChild);
console.log(cursos[0].nodeType);
//Tipos de nodos: nodeType
/* 
1= Elementos
2= Atributos
3= Text Node
8= Comentarios
9= Documentos
10= -doctype
*/

//Ir de un nodo al padre que lo contiene.

 const enlaces = document.querySelectorAll('.enlace');
 console.log(enlaces[0].parentElement.parentElement.parentElement);

 const cursos2 = document.querySelectorAll('.card');
 console.log(cursos2[0].parentElement.parentElement.parentElement.children[0].textContent="Traversing");

 //Sibling

 const enlaces2 = document.querySelectorAll('.enlace');
 console.log(enlaces2[4].previousElementSibling);
 console.log(enlaces2[1].nextElementSibling);