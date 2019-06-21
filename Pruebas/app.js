const lista = document.querySelector('#lista-carrito tbody');
const contador= document.getElementById('btnCount');
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
}


function getElements(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
       const elements= e.target.parentElement
       elementsList(elements);
    }
}

function elementsList(elements){
const infoElements = {
    nombre: elements.querySelector('h4').textContent,
    profesor: elements.querySelector('p').textContent,
    precio: elements.querySelector('.precio span').textContent,
    id: elements.querySelector('a').getAttribute('data-id'),
    cantidadC1: countC1=countC1+1,
    cantidadC2: countC2=countC2+1,
    cantidadC3: arrayId3.length,
}
addToArray(infoElements);
addToList(infoElements);
}

function addToArray(infoElements){
        if(infoElements.id === "1"){
            arrayId1.push(infoElements);
            console.log(arrayId1);
            // console.log(arrayId1.length);
        } else if(infoElements.id=== "2"){
            arrayId2.push(infoElements);
            console.log(arrayId2);
            // console.log(arrayId2.length);
        } else if(infoElements.id === "3"){
            arrayId3.push(infoElements);
            console.log(arrayId3);
            // console.log(arrayId3.length);
        } 
        // const cantidadC1 = arrayId1.length
        // const cantidadC2=  arrayId2.length
        // const cantidadC3= arrayId3.length
        // const cantidad ={
        //     cantidad: cantidadC1, cantidadC2, cantidadC3
        // }
}

function addToList(infoElements){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td> ${infoElements.nombre} </td>
    <td> ${infoElements.profesor}</td>
    <td> ${infoElements.precio}  </td>
    <td> ${infoElements.cantidad}  </td>
    <td> 
    </td>
    `;
    
    console.log('Curso 1:',infoElements.cantidadC1, 'Curso 2:',infoElements.cantidadC2, 'Curso 3:',infoElements.cantidadC3);
    lista.appendChild(row);
}

// function ComparationIds(elements, infoElements){
//     let idCurso= elements.querySelector('a').getAttribute('data-id');
//     let idList = infoElements.id;
//     let idChange = 0;
//         console.log(idCurso);
//         console.log(idList);
//         if (idCurso !== idChange){
//             while(idCurso === idList){
//                 addToList(infoElements);
//                 idCurso=idChange
//             } 
//         } else{
            
//             console.log('Hola');
//         }
//         // if(idCurso === idList){
//         //     addToList(infoElements);
//         //     idCurso=idChange;
//         // } 
//     console.log(idCurso);
// }

 evenlistner();
 function evenlistner(){
     contador.addEventListener('click', agregar);
 }
 
 
 function agregar(){
     count=count+1;
     console.log(count);
 }