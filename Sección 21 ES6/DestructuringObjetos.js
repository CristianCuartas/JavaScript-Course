// Destructuring objetos
//Acceder a objetos dentro de un objeto

const cliente = {
    tipo:"Gold",
    nombre: "Cristian Hernandez",
    datos:{
        ubicacion:{
            ciudad: "Bogotá",
            barrio: "Olaya",
            direccion:{
                calle: "27 A",
                numero: "22-05"
            }
        },
        telefono: 3213118257,
        cuenta:{
            numeroCuenta: 123456789,
            saldo: 100000000000000000000
        }
    }
}

let {datos: {ubicacion}} = cliente;
console.log(ubicacion.direccion);
console.log(ubicacion.direccion.calle);
console.log(ubicacion.direccion.numero);

let{datos:{cuenta}} = cliente;
console.log(cuenta);
console.log(cuenta.numeroCuenta);
console.log(cuenta.saldo);