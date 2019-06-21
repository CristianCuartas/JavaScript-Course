const formulario = document.querySelector('#generar-nombre');
formulario.addEventListener('submit', cargarNombres);
function cargarNombres(e){
    e.preventDefault();
    //Leer variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    
    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'http://uinames.com/api/?';

    if(origenSeleccionado !== ''){
        url += `region=${origenSeleccionado}&`;
    }
    if(generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`;
    }
    if(cantidad !== ''){
        url += `amount=${cantidad}&`;
    }
    
    //Conectar con AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload= function(){
        if(this.status === 200){
            const nombres = JSON.parse(this.responseText);

            let htmlNombres = `<h2 class="text-aling-center">Nombres generados</h2>`;
            htmlNombres += '<ul class="lista">';
            nombres.forEach(function(nombre){
                htmlNombres += `
                <li>${nombre.name}</li>`
            })
            htmlNombres += "</ul>"
            document.getElementById('resultado').innerHTML=htmlNombres;
        }
        
    }
    xhr.send();

}