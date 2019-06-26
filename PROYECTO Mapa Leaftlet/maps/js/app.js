const ui = new UI();

document.addEventListener('DOMContentLoaded', ()=>{
    ui.mostrarEntidades();
})

//Buscador 
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', ()=>{
    if(buscador.value.length>0){
        ui.obtenerSugerencias(buscador.value);
    } else{
        ui.mostrarEntidades();
    }
})
