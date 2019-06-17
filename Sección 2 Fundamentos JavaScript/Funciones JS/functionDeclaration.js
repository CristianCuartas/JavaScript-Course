// Function declaration 

function saludar1(){
    console.log("Hola Cristian");
}
saludar1();

function saludar2(nombre){
    console.log(`Hola ${nombre}`)
}
saludar2("David");

function saludar3(nombre = 'Visitante'){
    return `Hola ${nombre}`
}
let saludo;
saludo = saludar3('Desarrolador');
console.log(saludo);

function sumar(a,b){
    console.log(a+b);
}
sumar(123,456);

function sumar2(a,b){
    return a+b
}

let suma;
suma= sumar2(11,09);
console.log(suma);

