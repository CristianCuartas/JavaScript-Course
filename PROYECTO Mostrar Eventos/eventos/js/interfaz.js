class Interfaz{
    constructor(){
        this.init();
        this.listado = document.getElementById('resultado-eventos');
    }
    init(){
        this.imprimirCategorias();
    }
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias()
        .then (categorias =>{
            const cats = categorias.categorias.categories;
            const selectCategoria = document.getElementById('listado-categorias');

            cats.forEach(element => {
                const option = document.createElement('option');
                option.value=element.id;
                option.appendChild(document.createTextNode(element.name_localized));
                selectCategoria.appendChild(option);
            });
        })
    }
    mostrarEventos(eventos){
        const listaEventos= eventos.events;
        listaEventos.forEach(evento=>{
            this.listado.innerHTML =`
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body>
                        <img class="img-fluid mb-2" src="${evento.logo !== null ?
                        evento.logo.url:''}">
                    </div>
                    <div class="card-body>
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">
                                Información del evento</p>
                                <p>${evento.description.text.substring(0,280)}...</p>
                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-primary">Fecha y hora: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4"> Comprar boletos!</a>
                    </div>
                </div>
            </div>
            `
        })
    }
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));

        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        setTimeout(()=>{
            this.limpiarMensaje();
        },2000)
    }

    limpiarMensaje (){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}