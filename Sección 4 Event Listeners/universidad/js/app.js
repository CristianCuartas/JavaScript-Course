// Eliminar de Local Storage
localStorage.clear();


//Event Listener 
    //Click
//Ejercicio 1
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    console.log('Llamando una función');
    let element = e;
    element=e.target;
    console.log(element);
}

//Ejercicio 2
document.querySelector('#encabezado').addEventListener('click', clickBoton)

function clickBoton(e){
    console.log(e.target.textContent);
    e.target.textContent='Evento'
}

//Ejercicio 3
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');
const busqueda = document.querySelector('#buscador');
// boton.addEventListener('click', obtnerEvento);
// boton.addEventListener('dblclick', obtnerEvento); // Doble Click
// boton.addEventListener('mouseenter', obtnerEvento); //Mouse Enter
// boton.addEventListener('mouseleave', obtnerEvento); //Mouse Leave
// boton.addEventListener('mouseover', obtnerEvento); //Mouse Over
// boton.addEventListener('mouseout', obtnerEvento); //Mouse Out
// boton.addEventListener('mousedown', obtnerEvento); //Mouse Down
// boton.addEventListener('mouseup', obtnerEvento); //Mouse Up

//Eventos para lo inputs

// busqueda.addEventListener('keydown', obtnerEvento);
// busqueda.addEventListener('keyup', obtnerEvento);
// busqueda.addEventListener('keypress', obtnerEvento);
// busqueda.addEventListener('focus', obtnerEvento);
// busqueda.addEventListener('blur', obtnerEvento);
// busqueda.addEventListener('cut', obtnerEvento);
// busqueda.addEventListener('copy', obtnerEvento);
// busqueda.addEventListener('paste', obtnerEvento);
// busqueda.addEventListener('input', obtnerEvento);
// busqueda.addEventListener('change', obtnerEvento);
function obtnerEvento(e){
    // e.preventDefault();
   // document.querySelector('#encabezado').innerText = busqueda.value
    console.log(`Evento: ${e.type}`);
}

//Event Bubbbling
const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function (e){
    e.stopPropagation();
    console.log('Click en card');
});
infoCurso.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Click en Info Curso')
});
agregarCarrito.addEventListener('click', function(e){
    e.stopPropagation();
    console.log('Click en agregar a carrito')
})

//Delegation 
document.body.addEventListener('click', eliminarElemento);
function eliminarElemento(e){
    e.preventDefault();
    console.log('Click');
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        confirm('Esta seguro desea eliminar este curso?')
        console.log('Si')
        e.target.parentElement.parentElement.remove();
    } else{
        console.log('No')
    }
}

