let DB;

//Selectores de l ainterfaz 
const form = document.querySelector('form'),
      nombreMascota = document.querySelector('#mascota'),
      nombreCliente = document.querySelector('#cliente'),
      telefono = document.querySelector('#telefono'),
      fecha = document.querySelector('#fecha'),
      hora = document.querySelector('#hora'),
      sintomas = document.querySelector('#sintomas'),
      citas = document.querySelector('#citas'),
      headingAministra = document.querySelector('#administra');

//Esperar por el DOM Ready
document.addEventListener('DOMContentLoaded', ()=>{
    //Crear base de datos
    let crearDB = window.indexedDB.open('citas', 1);

    //Manejo el error
    crearDB.error = function(){
        console.log('Hubo un error');
    }

    //Asignar a la base de datos
    crearDB.onsuccess =function(){
        DB = crearDB.result;
        mostrarCitas();
    }

    //Crear el esquema de la base de datos
    crearDB.onupgradeneeded = function(e){
        //El evento es la misma base de dataos
        let db = e.target.result;

        //Definir el Objet Storage
        //Key path = Idx
        let objectStore = db.createObjectStore('citas', {keyPath: 'key', autoIncrement: true});

        //Crear indices y campos
        objectStore.createIndex('mascota', 'mascota', {unique: false});
        objectStore.createIndex('cliente', 'cliente', {unique: false});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
        objectStore.createIndex('fecha', 'fecha', {unique: false});
        objectStore.createIndex('hora', 'hora', {unique: false});
        objectStore.createIndex('sintomas', 'sintomas', {unique: false});
    }
    form.addEventListener('submit', agregarDatos);
    function agregarDatos(e){
        e.preventDefault();
       const nuevaCita = {
           mascota : nombreMascota.value,
           cliente: nombreCliente.value,
           telefono: telefono.value,
           fecha: fecha.value,
           hora: hora.value,
           sintomas: sintomas.value,
       }
       
       //Transacciones
       let transaction = DB.transaction(['citas'], 'readwrite');
       let objectStore = transaction.objectStore('citas');
       let peticion = objectStore.add(nuevaCita);
    //    console.log(peticion);
       peticion.onsuccess = () =>{
           form.reset();
       }
       transaction.oncomplete = () =>{
           console.log('Cita agregada');
           mostrarCitas();
       }
       transaction.onerror = () =>{
           console.log('Hubo un error')
       }
    }

    function mostrarCitas(){
        //Limpiar citas anteriores
        while(citas.firstChild){
            citas.removeChild(citas.firstChild);
        }

        //Crear el object Store
        let objectStore = DB.transaction('citas').objectStore('citas');
        //Esto retorna una petición
        objectStore.openCursor().onsuccess = function(e){
            //Cursosr se va a ubicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;
            if(cursor){
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');
                citaHTML.innerHTML = `
                    <p class="font-weight-bold"> Mascota: <span class="fon-weight-normal">${cursor.value.mascota}</span></p>
                    <p class="font-weight-bold"> Cliente: <span class="fon-weight-normal">${cursor.value.cliente}</span></p>
                    <p class="font-weight-bold"> Teléfono: <span class="fon-weight-normal">${cursor.value.telefono}</span></p>
                    <p class="font-weight-bold"> Fecha: <span class="fon-weight-normal">${cursor.value.fecha}</span></p>
                    <p class="font-weight-bold"> Hora: <span class="fon-weight-normal">${cursor.value.hora}</span></p>
                    <p class="font-weight-bold"> Sintomas: <span class="fon-weight-normal">${cursor.value.sintomas}</span></p>
                `;
                //Botón de borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = '<span aria-hidden="true">X</span> Borrar'
                botonBorrar.onclick = borrarCitas;
                citaHTML.appendChild(botonBorrar)
                citas.appendChild(citaHTML);
                cursor.continue();
            } else{
                //Cuando no hay registros
                if(!citas.firstChild){
                    headingAministra.textContent='Agrega citas para comenzar';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                } else{
                    headingAministra.textContent = 'Administra tus citas';
                }
            }
        }
    }

    function borrarCitas(e){
        let citaID = Number(e.target.parentElement.getAttribute('data-cita-id'));
        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.delete(citaID);
        transaction.oncomplete = () => {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            console.log(`Se elimino la cita con el ID: ${citaID}`);
            if(!citas.firstChild){
                headingAministra.textContent='Agrega citas para comenzar';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
                citas.appendChild(listado);
            } else{
                headingAministra.textContent = 'Administra tus citas';
            }
        }
    }


})