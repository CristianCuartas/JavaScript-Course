const lista = document.querySelector('#lista-carrito tbody');
const tabla = document.querySelector('#lista-carrito');
const contador= document.getElementById('btnCount');
const btn = document.getElementById('boton');
const btnAgregar = document.querySelector('.info-cardC1');
// const btnAgregarC = document.getElementById('btnAddCantidad')
let count= 0;
let countC1= 0;
let countC2= 0;
let countC3= 0;
const array = [];
const arrayId1 = [];
const arrayId2 = [];
const arrayId3 = [];

Eventos();
function Eventos(){
    document.addEventListener('click', getElements);
    btn.addEventListener('click', bloquedBtn);
    // tabla.addEventListener('click', deleteRow);
    // deleteBtn.addEventListener('click', deleteRow);
}

function bloquedBtn(){
    btn.disabled=true;
    const btnAdd = document.createElement('button');
    btnAdd.id='btnAddCantidad';
    btnAdd.setAttribute('href', '#');
    btnAdd.className='add-cantidad';
    btnAdd.textContent='Agregar';
    btnAgregar.appendChild(btnAdd);
    btnAdd.addEventListener('click',agregarC);
}

function agregarC(){
    // countC1=countC1+1
    console.log('Hola');
}

function getElements(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carritoC1')){
       const elements= e.target.parentElement
       elementsListC1(elements);
    } else if(e.target.classList.contains('agregar-carritoC2')){
        const elements= e.target.parentElement
       elementsListC2(elements);
    } else if(e.target.classList.contains('agregar-carritoC3')){
        const elements= e.target.parentElement
       elementsListC3(elements); 
}
}

function elementsListC1(elements){
const infoElements = {
    nombre: elements.querySelector('h4').textContent,
    profesor: elements.querySelector('p').textContent,
    precio: elements.querySelector('.precio span').textContent,
    id: elements.querySelector('button').getAttribute('data-id'),
    cantidadC1: countC1=countC1+1,
}
addToArray(infoElements);
addToListC1(infoElements);
}

function elementsListC2(elements){
    const infoElements = {
        nombre: elements.querySelector('h4').textContent,
        profesor: elements.querySelector('p').textContent,
        precio: elements.querySelector('.precio span').textContent,
        id: elements.querySelector('a').getAttribute('data-id'),
        cantidadC2: countC2=countC2+1,
    }
    addToArray(infoElements);
    addToListC2(infoElements);
    }
 function elementsListC3(elements){
    const infoElements = {
        nombre: elements.querySelector('h4').textContent,
        profesor: elements.querySelector('p').textContent,
        precio: elements.querySelector('.precio span').textContent,
        id: elements.querySelector('a').getAttribute('data-id'),
        cantidadC3: countC3=countC3+1,
    }
    addToArray(infoElements);
    addToListC3(infoElements);
    }   

function addToArray(infoElements){
        if(infoElements.id === "1"){
            arrayId1.push(infoElements);
            // console.log(arrayId1);
        } else if(infoElements.id=== "2"){
            arrayId2.push(infoElements);
            // console.log(arrayId2);
        } else if(infoElements.id === "3"){
            arrayId3.push(infoElements);
            // console.log(arrayId3);
        } 
}

function addToListC1(infoElements){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td> ${infoElements.nombre} </td>
    <td> ${infoElements.profesor}</td>
    <td> ${infoElements.precio}  </td>
    <td> ${infoElements.cantidadC1} </td>
    <td> 
    </td>
    `;
    // console.log('Curso 1:',infoElements.cantidadC1);
    // console.log(tabla);
    // lista.removeChild(row);
    lista.appendChild(row);

}

function deleteRow(row){
row.remove();
}

function addToListC2(infoElements){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td> ${infoElements.nombre} </td>
    <td> ${infoElements.profesor}</td>
    <td> ${infoElements.precio}  </td>
    <td> ${infoElements.cantidadC2} </td>
    <td> 
    </td>
    `;
    console.log('Curso 2:',infoElements.cantidadC2);
    lista.appendChild(row);
}

function addToListC3(infoElements){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td> ${infoElements.nombre} </td>
    <td> ${infoElements.profesor}</td>
    <td> ${infoElements.precio}  </td>
    <td> ${infoElements.cantidadC3} </td>
    <td> 
    </td>
    `;
    console.log('Curso 3:',infoElements.cantidadC3);
    lista.appendChild(row);
}

 evenlistner();
 function evenlistner(){
     contador.addEventListener('click', agregar);
 }
 
 
 function agregar(){
     count=count+1;
     console.log(count);
 }