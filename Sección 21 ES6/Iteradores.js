
for(let i = 0 ; i<10;i++){
    console.log(i);
}

function crearIterador(carrito){
    //Inicializamos el indice
    let  i =0;
    return{
        siguiente: () =>{
            let fin = (i >= carrito.length);
            let valor = !fin ? carrito[i++] : undefined;

            return {
                fin:fin,
                valor: valor
            }
        }
    }
}

const carrito = ['Producto1','Producto2','Producto3','Producto4','Producto5'];
const recorreCarrito = crearIterador(carrito);

console.log(recorreCarrito.siguiente());
console.log(recorreCarrito.siguiente());
console.log(recorreCarrito.siguiente());
console.log(recorreCarrito.siguiente());
console.log(recorreCarrito.siguiente());
console.log(recorreCarrito.siguiente());

