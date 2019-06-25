const ciudades = ['Londres', 'Bogotá', 'New York', 'Paris'];

//Inline Callback 
ciudades.forEach(function(ciudad){
    console.log(ciudad);
})

console.log("");

//Con función definida
function callback(ciudad){
    console.log(ciudad);
}
ciudades.forEach(callback);

//Listado de paises

const paises = ['Francia', 'Colombia', 'Alemania', 'Australia', 'Inglaterra', 'España', 'Brasil'];

//Se agrega un nuevo país despues de dos segundos.
function nuevoPais(pais, callbackPaises){
    setTimeout(function(){
        paises.push(pais);
        callbackPaises();
    },2000);
}

//Los paises se muetran después de un segundo.
function mostrarPaises(){
    setTimeout(function(){
        let html = '';
        paises.forEach(function(pais){
            html = html + `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    },1000)
}

nuevoPais('Irlanda', mostrarPaises);

mostrarPaises();