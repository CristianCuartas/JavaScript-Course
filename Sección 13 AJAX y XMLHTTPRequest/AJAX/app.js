document.getElementById('cargar').addEventListener('click', cargarDatos);
document.getElementById('cargar').addEventListener('click', cargarDatos2);
function cargarDatos(){
    const xhr = new XMLHttpRequest();
    //Abrir una conexión
    xhr.open('GET', 'datos.txt', true);
    
    xhr.onload = function(){
        // 200: Correcto | 403: Prohibido | 404: No encontrado
        if(this.status === 200){

            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    xhr.send();
}

function cargarDatos2(){
    const xhr = new XMLHttpRequest();
    //Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange= function(){
        console.log(`Estado : ${this.readyState}`);
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText)
        }
    }
    //Ready status
    /*
    0 -No iniciado
    1 - Conexión establecida
    2 - Recibida
    3 - Procesando
    4 - Respuesta lista
    */
    
  
    xhr.send();
}