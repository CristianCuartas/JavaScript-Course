//Un set es un arreglo que no acepta duplicados.
let carrito = new Set();

carrito.add('Carro');
carrito.add('Moto');
carrito.add('Barco');
carrito.add('Avión');
carrito.add('Avión');
console.log(carrito);
console.log(carrito.size);

let numero = new Set([1,2,3,6,5,9,1,2]);
console.log(numero);
console.log(numero.size);

//Comprobar que un valor exista
console.log(numero.has(1));
console.log(numero.has('Hola'));

//Eliminar algo del set
numero.delete(1);
console.log(numero);

//Recorrer un Set 
//Las llaves y el valor son el mismo.
carrito.forEach((producto, index) =>{
    console.log(`${index} : ${producto}`);
});

//Convertir un set a Arreglo
const arregloCarrito =[...carrito];
console.log(arregloCarrito);