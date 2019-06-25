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
    
    //FETCH API
    fetch(url)
    .then(response=>response.json())
    .then(data=> {
        let html = '<h2>Nombres Generados</h2>';
        html += `<ul class = "lista">`;
        data.forEach(nombre => {
            html += `<li>${nombre.name}</li>`
        });
        html += `</ul>`;
        document.querySelector('#resultado').innerHTML = html;
    }).catch(error=> console.log(error))
};