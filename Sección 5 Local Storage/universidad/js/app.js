// Eliminar de Local Storage
localStorage.clear();

//Agregar al LocalStorage -SessionStorage
localStorage.setItem('nombre', 'Cristian');
sessionStorage.setItem('nombre', 'Cristian');

//Obtener valor
const nombre = localStorage.getItem('nombre');
console.log(nombre);
//Eliminar del LocStorage
localStorage.removeItem('nombre');


