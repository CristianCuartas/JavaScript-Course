document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBtn').addEventListener('click', cargarREST);
function cargarTXT(){
    fetch('datos.txt')
    .then(function(response){
        return response.text();
    }) //Métodos para devolver la información
    .then(function(data){
        document.getElementById('resultado').innerHTML = data;
    }).catch(function(error){
        console.log(error);
    })
}

function cargarJSON(){
    fetch('empleados.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let html = '';
        data.forEach(function(datos){
            html += `
            <li> <b> Nombre: </b>${datos.nombre} <b> Puesto: </b> ${datos.puesto}</li>`
        });
        document.getElementById('resultado').innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

function cargarREST(){
    fetch('https://picsum.photos/list')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let html = '';
        data.forEach(function(pics){
            html += `
            <li>
                <p> <b>Autor: </b> ${pics.author}</p>
                <a href="${pics.post_url}"> Ver imagen</a>
            </li>
            `
        });
        document.getElementById('resultado').innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}