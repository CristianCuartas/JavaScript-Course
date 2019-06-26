//Symbols

const simbolo = Symbol();
const simbolo2 = Symbol('Descripción');
console.log(simbolo);
console.log(simbolo2);

let nombre = Symbol();
let apellido = Symbol();

let persona={};
persona[nombre] ='Cristian';
persona[apellido] ='Hernandez';
persona.edad = 18,
console.log(persona);