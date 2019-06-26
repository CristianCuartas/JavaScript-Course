//Destructuring Function

function reservacion(completo,opciones){
let {metodoPago,cantidad,dias} = opciones;
console.log(metodoPago);
console.log(cantidad);
console.log(dias);
}
reservacion(true, {
    metodoPago: 'Efectivo',
    cantidad: 2000000,
    dias: 3
})

//Pasar valores por default
function reservacion(completo,
    {
        metodoPago='Efectivo',
        cantidad=0,
        dias=0
    } = {})
    {
    if(completo){
        console.log('Reservando')
        } else{
        console.log('Abandonar?')
     }
    }

    reservacion(true, {
        metodoPago: 'Tarjeta',
        cantidad: 2000000,
        dias: 3
    })