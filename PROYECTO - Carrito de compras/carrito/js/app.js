//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
//Listeners
eventListeners(); 
function eventListeners(){
document.addEventListener('click', addCarrito);
carrito.addEventListener('click', deleteCarrito);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
document.addEventListener('DOMContentLoaded', showLocalStorage)
}


//Funciones
function addCarrito(e){
    e.preventDefault();
   if(e.target.classList.contains('agregar-carrito')){
       const curso = e.target.parentElement.parentElement
       dataCurso(curso);
   };
}

function dataCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    
    insertarInfoCurso(infoCurso);
}

function insertarInfoCurso(curso){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td> <img src="${curso.imagen}" width="100px"> </td>
    <td> ${curso.titulo}</td>
    <td> ${curso.precio}</td>
    <td> 
    <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
    </td>
    `;
    listaCursos.appendChild(row);
    addDataLocalStorage(curso);
}

function deleteCarrito(e){
    e.preventDefault();
    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId= curso.querySelector('a').getAttribute('data-id');
    }
    deleteCusroLocalStorage(cursoId);
}

function vaciarCarrito(e){
while(listaCursos.firstChild){
    listaCursos.removeChild(listaCursos.firstChild);
 }
 vaciarLoscalStorage();
}

function addDataLocalStorage(curso){
     let cursos;
     cursos= obtenerDataLocalStorage();
     //El curso seleccionado se agrega al arreglo.
     cursos.push(curso)
     localStorage.setItem('cursos', JSON.stringify(cursos));
 }

function obtenerDataLocalStorage(){
let cursosLS;
if(localStorage.getItem('cursos') === null){
    cursosLS=[];
} else{
    cursosLS= JSON.parse(localStorage.getItem('cursos'));
}
return cursosLS;
 }

 function showLocalStorage(){
    let cursosLS;
    cursosLS= obtenerDataLocalStorage();
    cursosLS.forEach(function(curso){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> <img src="${curso.imagen}" width="100px"> </td>
        <td> ${curso.titulo}</td>
        <td> ${curso.precio}</td>
        <td> 
        <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
        `;
        listaCursos.appendChild(row);
    })

 }
 function deleteCusroLocalStorage(curso){
     let cursosLS;
     cursosLS=obtenerDataLocalStorage();

     cursosLS.forEach(function(cursoLS,idx){
    if(cursoLS.id === curso){
        cursosLS.splice(idx, 1);
    }
     });
    localStorage.setItem('cursos', JSON.stringify(cursosLS))
 }
 function vaciarLoscalStorage(){
     localStorage.clear();
 }