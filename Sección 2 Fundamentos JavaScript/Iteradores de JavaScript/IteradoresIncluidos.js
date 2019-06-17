const ciudades = ['Bogotá', 'Medellin', 'Pasto', 'Londres'];
const ordenes = new Set([123,543,756,103]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

//Entries iterador

//CIUDADES
console.log('Ciudades')
for(entrada of ciudades.entries()){
    console.log(entrada);
}
//ORDENES
console.log('Ordenes')
for(entrada of ordenes.entries()){
    console.log(entrada);
}
//DATOS
console.log('Datos')
for(entrada of datos.entries()){
    console.log(entrada);
}

//Values iterador

//CIUDADES
console.log('Ciudades')
for(entrada of ciudades){
    console.log(entrada);
}
//ORDENES
console.log('Ordenes')
for(entrada of ordenes){
    console.log(entrada);
}
//DATOS
console.log('Datos')
for(entrada of datos){
    console.log(entrada);
}

//Keys iterador

//CIUDADES
console.log('Ciudades')
for(entrada of ciudades.keys()){
    console.log(entrada);
}
//ORDENES
console.log('Ordenes')
for(entrada of ordenes.keys()){
    console.log(entrada);
}
//DATOS
console.log('Datos')
for(entrada of datos.keys()){
    console.log(entrada);
}

const mensaje ='Aprendiendo javaScript';

for(letra of mensaje){
console.log(letra);
}

//Recorrer elementos del index.html
const enlaces = document.getElementsByTagName('a');

for (entrada of enlaces){
    console.log(entrada.href);
}