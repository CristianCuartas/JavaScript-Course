class API {
    async obtenerDatos(){
        //Obtener datos desde la api 
        const datos = await fetch('https://www.datos.gov.co/resource/enck-arn7.json')
        //Retornar respuesta
        const respuestaJSON = await datos.json();
        return {
            respuestaJSON
        }
    }
}