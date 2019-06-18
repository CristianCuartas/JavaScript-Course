const lista = document.querySelector('#lista-carrito tbody');
const contador= document.getElementById('btnCount');

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
    
}
ComparationIds(elements, infoElements);
}

function addToList(infoElements){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td> ${infoElements.nombre} </td>
    <td> ${infoElements.profesor}</td>
    <td> ${infoElements.precio}  </td>
    <td> ${infoElements.id}  </td>
    <td> 
    </td>
    `;
    lista.appendChild(row);
}

function ComparationIds(elements, infoElements){
    let idCurso= elements.querySelector('a').getAttribute('data-id');
    let idList = infoElements.id;
    let idChange = 0;
        console.log(idCurso);
        console.log(idList);
        if (idCurso !== idChange){
            while(idCurso === idList){
                addToList(infoElements);
                idCurso=idChange
            } 
        } else{
            
            console.log('Hola');
        }
        // if(idCurso === idList){
        //     addToList(infoElements);
        //     idCurso=idChange;
        // } 
    console.log(idCurso);
}

 evenlistner();
 function evenlistner(){
     contador.addEventListener('click', agregar);
 }
 
 let count= 0;
 function agregar(){
     count=count+1;
     console.log(count);
 }