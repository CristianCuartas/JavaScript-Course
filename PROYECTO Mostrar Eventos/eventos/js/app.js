const eventbrite = new EventBride();
const ui = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    const textoBuscador = document.getElementById('evento').value;

    const categorias = document.getElementById('listado-categorias');

    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    if(textoBuscador !== ''){
       eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
       .then(data=>{
        if(data.eventos.events.length > 0){
            ui.mostrarEventos(data.eventos)
        } else{
            ui.mostrarMensaje('No hay resultados', 'alert alert-danger mt-4 text-center');
        }
       })
    } else{
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4 text-center');
    }
})