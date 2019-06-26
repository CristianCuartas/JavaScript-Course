import * as UI from './interfaz.js';
import { API } from './api.js';

UI.formularioBuscador.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    //  Obtener datos del form
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion ===''){
        UI.divMensajes.innerHTML='Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        UI.divMensajes.style =" text-align: center";
        setTimeout(()=>{
            UI.divMensajes.innerHTML='';
            UI.divMensajes.classList.remove('error');
        },3000);
    } else{
        const api = new API(artista, cancion);
        api.consultarAPI()
        .then(data =>{
            if(data.respuesta.lyrics){
                const lyrics = data.respuesta.lyrics;
                console.log(lyrics);
                UI.divResultado.textContent = lyrics
                
            } else{
                UI.divMensajes.innerHTML='La canción no existe, prueba con otra busqueda';
                UI.divMensajes.classList.add('error');
                UI.divMensajes.style =" text-align: center";
                setTimeout(()=>{
                    UI.divMensajes.innerHTML='';
                    UI.divMensajes.classList.remove('error');
                    UI.formularioBuscador.reset();
                },3000);
            }
        })
    }
})