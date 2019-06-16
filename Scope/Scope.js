//Variables globales 
var a = 'a';
let b = 'b';
const c = 'c';
console.log('Globales: ', a, b, c);

//Scope de la función
 function scopeFunction(){
     var a = 'A';
     let b = 'B';
     const c = 'C';
     console.log('Scope de función: ', a,b,c)
 }
 scopeFunction();

//Scope de bloque 
if(true){
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('Scope de bloque: ', a,b,c)
}
