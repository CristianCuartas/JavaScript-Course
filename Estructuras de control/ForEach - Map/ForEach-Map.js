//For
const pendientes=['Tarea', 'Comer', 'Proyecto', 'Aprender JavaScript'];
for(let i=0; i<pendientes.length; i++){
    console.log(pendientes[i]);
}
console.log(pendientes);

const automovil = {
    modelo:'Camaro',
    motor: 6.1,
    marca:'Chevrolet',
    año:2019
}

for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`);
}
console.log(automovil);

//ForEach
pendientes.forEach(function(pendiente, index){
    console.log(`${index} : ${pendiente}`);
});

console.log(pendientes);

//map 
const carrito=[{id:1, producto: 'libro'},
               {id:2, producto:'guitarra'},
               {id:3, producto:'disco'},
               {id:4, producto:'celular'}
              ]
const nombreProducto = carrito.map(function(carrito){
return carrito.producto;
});
console.log(nombreProducto);
