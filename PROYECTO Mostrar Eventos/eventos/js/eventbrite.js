class EventBride{
    constructor(){
        this.token_auth = '52KMFFXRHUFNDX3YQ6HS';
        this.ordenar = 'date';
    }

    async obtenerEventos(evento, categoria){
        const respuestEvento = await fetch
        (`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);
        const eventos = await respuestEvento.json();
        return{
            eventos
        }
    }

    async obtenerCategorias(){
        const respuestasCategorias = await fetch
        (`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        const categorias = await respuestasCategorias.json();

        return {
            categorias
        }
    }
}