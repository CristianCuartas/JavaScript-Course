class UI {
    constructor() {

        //Instanciar la API
        this.api = new API();
        
        //Crear los markets con LayerGroup
        this.markers = new L.LayerGroup();
        
        // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa

         //4.6097100, -74.0817500 Coordenadas Bogotá! 
         const map = L.map('mapa').setView([-4.2052777777778, -69.932777777778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEntidades(){
        this.api.obtenerDatos()
        .then(datos => {
            const resultado = datos.respuestaJSON;
            this.mostrarPines(resultado);
        })
    }

    mostrarPines(datos){
        //Limpiar los markest

        this.markers.clearLayers();

        //Recorrer los establecimientos
         datos.map(dato =>{
             const opcionesPopUp = L.popup()
                .setContent(`
                <p><b>Comunidades:</b> ${dato.comunidades}</p>
                <p><b>Kuraca:</b> ${dato.kuraca}</p>
                <p><b>Institución educativa:</b> ${dato.institucion_educativa}</p>
                <p><b>Nivel educativo:</b> ${dato.nivel_educativo}</p>
                <p><b>Etnias:</b> ${dato.etnias}</p>
                `);
             const marker = new L.marker([
                 parseFloat(dato.coordenadas.latitude),
                 parseFloat(dato.coordenadas.longitude),
             ]).bindPopup(opcionesPopUp);
             this.markers.addLayer(marker);
         });
         this.markers.addTo(this.mapa);
    }

    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
        .then(datos=>{
            const resultados = datos.respuestaJSON;
            this.filtrarSugerencias(resultados, busqueda);
        })
    }

    filtrarSugerencias(resultado, busqueda){
        const filtro = resultado.filter(filtro => filtro.comunidades.indexOf(busqueda) !== -1);
        this.mostrarPines(filtro);
    }
}