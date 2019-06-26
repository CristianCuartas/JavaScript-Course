function *Generador(){
    let i = 1;
    yield 1*i;
    yield 2*i;
    yield 3*i;
    yield 4*i;
    yield 5*i;
    yield 'ANYTHING BROOO!'
}
const iterador = Generador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

console.log("")
//Genrador para recorrer un arreglo

function *nuevoGenerador(carrito){
for(let i=0; i<carrito.length;i++){
    yield carrito[i];
    }
}
const carrito = ['Producto1','Producto2','Producto3','Producto4','Producto5'];
let iteradorArray = nuevoGenerador(carrito);

console.log(iteradorArray.next().value);
console.log(iteradorArray.next().value);
console.log(iteradorArray.next().value);
console.log(iteradorArray.next().value);
console.log(iteradorArray.next().value);