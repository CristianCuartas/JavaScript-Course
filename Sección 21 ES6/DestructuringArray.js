//Destructuring Array 

const ciudades = ['Londres', 'Bogotá', 'New York', 'Paris', 'Madrid'];
const [
    primeraCiudad,
    segundaCiudad
] = ciudades;
console.log(primeraCiudad);
console.log(segundaCiudad);

//Depende que tan grande es el arreglo, la cantidad de espacios a dejar para acceder al valor.
const [ , , , paris] = ciudades;
console.log(paris);

const cliente = {
    nombre: "Cristian",
    tipo:"GOLD",
    datos:{
        numeroCuenta: 13456789,
        saldo: 10000000,
        movimientos: ['26-06-2018', '26-06-2019','26-06-2020']
    },
    ciudades :['Londres', 'Bogotá', 'New York', 'Paris', 'Madrid'],
}

let{
    datos: {movimientos},
    ciudades : [uno ,,, cinco ]
}=cliente;
console.log(movimientos[2]);
console.log(ciudades);
console.log(uno, cinco);